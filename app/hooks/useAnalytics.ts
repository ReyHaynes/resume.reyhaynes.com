'use client';

import { useEffect } from 'react';
import { 
  trackPageView, 
  trackPageEngagement, 
  trackScrollMilestone,
  trackPagePerformance,
  trackDeviceContext,
  trackSessionInfo,
  initializeExitIntentTracking
} from '../lib/analytics';
import { useAccessibility, useFocusManagement, useReducedMotion } from './useAccessibility';

export const useBasicAnalytics = () => {
  // Initialize accessibility features
  const { announce } = useAccessibility();
  useFocusManagement();
  useReducedMotion();

  useEffect(() => {
    // Announce page load for screen readers
    announce({ 
      message: 'Resume page loaded. Use Alt+M to jump to main content or Alt+S for sidebar.',
      priority: 'polite' 
    });

    // Track page view on mount
    trackPageView();
    
    // Track performance metrics
    trackPagePerformance();
    
    // Track device and session context
    trackDeviceContext();
    trackSessionInfo();
    
    // Initialize exit intent tracking
    const exitIntentCleanup = initializeExitIntentTracking();

    const startTime = Date.now();
    const scrollThresholds = new Set<number>();

    // Track scroll milestones
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const milestone = Math.floor(scrolled / 25) * 25;
      
      if (milestone >= 25 && !scrollThresholds.has(milestone)) {
        scrollThresholds.add(milestone);
        trackScrollMilestone(milestone);
        
        // Announce scroll milestones for screen readers (less frequently)
        if (milestone === 50) {
          announce({ message: 'Halfway through the resume' });
        } else if (milestone === 100) {
          announce({ message: 'Reached the end of the resume' });
        }
      }
    };

    // Track time on page when leaving
    const handleBeforeUnload = () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      trackPageEngagement(timeSpent);
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      
      // Clean up exit intent tracking
      if (exitIntentCleanup) {
        exitIntentCleanup();
      }
      
      // Track engagement time on cleanup
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      trackPageEngagement(timeSpent);
    };
  }, [announce]);
};
