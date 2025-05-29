'use client';

import { useEffect } from 'react';
import { trackPageView, trackPageEngagement, trackScrollMilestone } from '../lib/analytics';

export const useBasicAnalytics = () => {
  useEffect(() => {
    // Track page view on mount
    trackPageView();

    const startTime = Date.now();
    const scrollThresholds = new Set<number>();

    // Track scroll milestones
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const milestone = Math.floor(scrolled / 25) * 25;
      
      if (milestone >= 25 && !scrollThresholds.has(milestone)) {
        scrollThresholds.add(milestone);
        trackScrollMilestone(milestone);
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
      
      // Track engagement time on cleanup
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      trackPageEngagement(timeSpent);
    };
  }, []);
};
