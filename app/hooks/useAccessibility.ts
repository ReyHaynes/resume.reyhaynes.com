'use client';

import { useEffect } from 'react';

interface AccessibilityAnnouncement {
  message: string;
  priority?: 'polite' | 'assertive';
}

/**
 * Hook for accessibility features including live announcements
 */
export function useAccessibility() {
  // Create and manage ARIA live region for announcements
  useEffect(() => {
    const createLiveRegion = (priority: 'polite' | 'assertive' = 'polite') => {
      const existingRegion = document.getElementById(`aria-live-${priority}`);
      if (existingRegion) return existingRegion;

      const liveRegion = document.createElement('div');
      liveRegion.id = `aria-live-${priority}`;
      liveRegion.setAttribute('aria-live', priority);
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      document.body.appendChild(liveRegion);
      
      return liveRegion;
    };

    // Create both polite and assertive live regions
    createLiveRegion('polite');
    createLiveRegion('assertive');

    // Cleanup on unmount
    return () => {
      const politeRegion = document.getElementById('aria-live-polite');
      const assertiveRegion = document.getElementById('aria-live-assertive');
      
      if (politeRegion) politeRegion.remove();
      if (assertiveRegion) assertiveRegion.remove();
    };
  }, []);

  // Function to announce messages to screen readers
  const announce = ({ message, priority = 'polite' }: AccessibilityAnnouncement) => {
    const liveRegion = document.getElementById(`aria-live-${priority}`);
    if (liveRegion) {
      // Clear and then set the message to ensure it's announced
      liveRegion.textContent = '';
      setTimeout(() => {
        liveRegion.textContent = message;
      }, 100);
    }
  };

  // Enhanced keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Alt + M
      if (event.altKey && event.key.toLowerCase() === 'm') {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          announce({ message: 'Jumped to main content' });
        }
      }

      // Skip to sidebar with Alt + S
      if (event.altKey && event.key.toLowerCase() === 's') {
        event.preventDefault();
        const sidebar = document.getElementById('sidebar-content');
        if (sidebar) {
          sidebar.focus();
          announce({ message: 'Jumped to sidebar content' });
        }
      }

      // Print with Ctrl/Cmd + P (announce the action)
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
        announce({ message: 'Print dialog opened' });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return { announce };
}

/**
 * Hook for managing focus and tab order
 */
export function useFocusManagement() {
  useEffect(() => {
    // Ensure proper tab order by adding tabindex to main content areas
    const mainContent = document.getElementById('main-content');
    const sidebar = document.getElementById('sidebar-content');
    
    if (mainContent && !mainContent.hasAttribute('tabindex')) {
      mainContent.setAttribute('tabindex', '-1');
    }
    
    if (sidebar && !sidebar.hasAttribute('tabindex')) {
      sidebar.setAttribute('tabindex', '-1');
    }
  }, []);
}

/**
 * Utility function to check if user prefers reduced motion
 */
export function useReducedMotion() {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleChange = (mql: MediaQueryList | MediaQueryListEvent) => {
      if (mql.matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.style.setProperty('--transition-duration', '0.01ms');
      } else {
        document.documentElement.style.removeProperty('--animation-duration');
        document.documentElement.style.removeProperty('--transition-duration');
      }
    };

    // Set initial state
    handleChange(mediaQuery);
    
    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
}
