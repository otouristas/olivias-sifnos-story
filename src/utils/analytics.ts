/**
 * Google Analytics utility functions
 * Provides type-safe methods for tracking events and page views
 */

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

/**
 * Track a page view in Google Analytics
 * @param pageTitle - The title of the page
 * @param pagePath - The path of the page
 */
export function trackPageView(pageTitle: string, pagePath: string): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-6TGCEZ5QQN', {
      page_title: pageTitle,
      page_location: window.location.href,
      page_path: pagePath,
    });
  }
}

/**
 * Track a custom event in Google Analytics
 * @param eventName - The name of the event
 * @param parameters - Additional event parameters
 */
export function trackEvent(eventName: string, parameters?: Record<string, any>): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...parameters,
    });
  }
}

/**
 * Track booking form submission
 * @param formType - Type of form (contact, booking, etc.)
 */
export function trackBookingFormSubmission(formType: string = 'contact'): void {
  trackEvent('form_submit', {
    event_category: 'engagement',
    event_label: formType,
    value: 1,
  });
}

/**
 * Track virtual tour interaction
 * @param action - The action taken (start, view, complete)
 */
export function trackVirtualTour(action: 'start' | 'view' | 'complete'): void {
  trackEvent('virtual_tour', {
    event_category: 'engagement',
    event_label: action,
    value: 1,
  });
}

/**
 * Track social media share
 * @param platform - The social media platform
 * @param content - The content being shared
 */
export function trackSocialShare(platform: string, content: string): void {
  trackEvent('share', {
    event_category: 'social',
    event_label: platform,
    content_type: content,
  });
}

/**
 * Track external link clicks
 * @param destination - The destination URL
 * @param linkText - The text of the link
 */
export function trackExternalLink(destination: string, linkText: string): void {
  trackEvent('click', {
    event_category: 'outbound',
    event_label: destination,
    link_text: linkText,
  });
}
