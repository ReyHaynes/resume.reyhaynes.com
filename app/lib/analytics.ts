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
