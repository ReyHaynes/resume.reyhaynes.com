'use client';

import { logEvent } from 'firebase/analytics';
import { getFirebaseAnalytics } from './firebase';

// Basic page tracking - only tracks essential page views and engagement
export const trackPageView = (pageName: string = 'resume') => {
  const analytics = getFirebaseAnalytics();
  if (analytics) {
    logEvent(analytics, 'page_view', {
      page_title: 'Resume - Reinaldo Haynes',
      page_location: window.location.href,
      custom_page_name: pageName,
    });
  }
};

export const trackPageEngagement = (timeSeconds: number) => {
  const analytics = getFirebaseAnalytics();
  if (analytics && timeSeconds > 10) { // Only track meaningful engagement
    logEvent(analytics, 'page_engagement', {
      engagement_time_msec: timeSeconds * 1000,
      page_title: 'Resume',
    });
  }
};

// Optional: Track basic scroll depth at key milestones
export const trackScrollMilestone = (percentage: number) => {
  const analytics = getFirebaseAnalytics();
  if (analytics && [25, 50, 75, 100].includes(percentage)) {
    logEvent(analytics, 'scroll', {
      percent_scrolled: percentage,
    });
  }
};

// Performance tracking - measures page load metrics
export const trackPagePerformance = () => {
  const analytics = getFirebaseAnalytics();
  if (analytics && typeof window !== 'undefined') {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      logEvent(analytics, 'page_performance', {
        load_time: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
        dom_content_loaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
        first_byte: Math.round(navigation.responseStart - navigation.requestStart),
      });
    }
  }
};

// Device context tracking - understands viewing environment
export const trackDeviceContext = () => {
  const analytics = getFirebaseAnalytics();
  if (analytics && typeof window !== 'undefined') {
    logEvent(analytics, 'device_context', {
      viewport_width: window.innerWidth,
      viewport_height: window.innerHeight,
      is_mobile: window.innerWidth <= 768,
      is_tablet: window.innerWidth > 768 && window.innerWidth <= 1024,
      device_pixel_ratio: window.devicePixelRatio || 1,
      screen_resolution: `${screen.width}x${screen.height}`,
    });
  }
};

// Session tracking - tracks visit patterns
export const trackSessionInfo = () => {
  const analytics = getFirebaseAnalytics();
  if (analytics && typeof window !== 'undefined') {
    const isNewSession = !sessionStorage.getItem('resume_session');
    const visitCount = parseInt(localStorage.getItem('resume_visits') || '0') + 1;
    
    if (isNewSession) {
      sessionStorage.setItem('resume_session', 'true');
      localStorage.setItem('resume_visits', visitCount.toString());
      
      logEvent(analytics, 'session_start', {
        visit_number: visitCount,
        is_return_visitor: visitCount > 1,
        referrer: document.referrer || 'direct',
      });
    }
  }
};

// Exit intent detection - tracks when users might be leaving
export const initializeExitIntentTracking = () => {
  const analytics = getFirebaseAnalytics();
  if (analytics && typeof window !== 'undefined') {
    let hasTrackedExitIntent = false;
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTrackedExitIntent) {
        hasTrackedExitIntent = true;
        logEvent(analytics, 'exit_intent', {
          time_on_page: Math.floor((Date.now() - performance.timeOrigin) / 1000),
          scroll_depth: Math.floor((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100),
        });
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Return cleanup function
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }
};
