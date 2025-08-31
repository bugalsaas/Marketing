'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ConversionEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
}

interface UserBehavior {
  pageViews: number;
  timeOnPage: number;
  scrollDepth: number;
  interactions: string[];
}

export default function AdvancedAnalytics() {
  const router = useRouter();

  // Enhanced Google Analytics tracking
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      // Track page views with enhanced parameters
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'custom_parameter_1': 'ndis_service',
          'custom_parameter_2': 'disability_support'
        }
      });
    }
  }, [router]);

  // Track conversion events
  const trackConversion = (event: ConversionEvent) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.event, {
        event_category: event.category,
        event_action: event.action,
        event_label: event.label,
        value: event.value
      });
    }
  };

  // Track user interactions
  const trackInteraction = (action: string, label?: string) => {
    trackConversion({
      event: 'user_interaction',
      category: 'engagement',
      action,
      label
    });
  };

  // Track form submissions
  const trackFormSubmission = (formType: string) => {
    trackConversion({
      event: 'form_submit',
      category: 'conversion',
      action: 'submit',
      label: formType,
      value: 1
    });
  };

  // Track phone calls
  const trackPhoneCall = (phoneNumber: string) => {
    trackConversion({
      event: 'phone_call',
      category: 'conversion',
      action: 'call',
      label: phoneNumber,
      value: 1
    });
  };

  // Track email clicks
  const trackEmailClick = (emailType: string) => {
    trackConversion({
      event: 'email_click',
      category: 'conversion',
      action: 'click',
      label: emailType,
      value: 1
    });
  };

  // Track FAQ interactions
  const trackFAQInteraction = (question: string, action: 'view' | 'expand' | 'search') => {
    trackConversion({
      event: 'faq_interaction',
      category: 'content',
      action,
      label: question
    });
  };

  // Track testimonial interactions
  const trackTestimonialView = (testimonialId: string) => {
    trackConversion({
      event: 'testimonial_view',
      category: 'social_proof',
      action: 'view',
      label: testimonialId
    });
  };

  // Track blog interactions
  const trackBlogInteraction = (postTitle: string, action: 'view' | 'share' | 'comment') => {
    trackConversion({
      event: 'blog_interaction',
      category: 'content',
      action,
      label: postTitle
    });
  };

  // Track service interest
  const trackServiceInterest = (serviceName: string) => {
    trackConversion({
      event: 'service_interest',
      category: 'conversion',
      action: 'view',
      label: serviceName,
      value: 1
    });
  };

  // Track pricing page views
  const trackPricingView = (planType: string) => {
    trackConversion({
      event: 'pricing_view',
      category: 'conversion',
      action: 'view',
      label: planType
    });
  };

  // Track contact form interactions
  const trackContactForm = (step: 'start' | 'complete' | 'abandon') => {
    trackConversion({
      event: 'contact_form',
      category: 'conversion',
      action: step,
      value: step === 'complete' ? 1 : 0
    });
  };

  // Track scroll depth
  useEffect(() => {
    let scrollDepth = 0;
    let maxScrollDepth = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      scrollDepth = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        
        // Track scroll milestones
        if (maxScrollDepth >= 25 && maxScrollDepth < 50) {
          trackConversion({
            event: 'scroll_depth',
            category: 'engagement',
            action: '25_percent',
            value: 25
          });
        } else if (maxScrollDepth >= 50 && maxScrollDepth < 75) {
          trackConversion({
            event: 'scroll_depth',
            category: 'engagement',
            action: '50_percent',
            value: 50
          });
        } else if (maxScrollDepth >= 75 && maxScrollDepth < 100) {
          trackConversion({
            event: 'scroll_depth',
            category: 'engagement',
            action: '75_percent',
            value: 75
          });
        } else if (maxScrollDepth >= 100) {
          trackConversion({
            event: 'scroll_depth',
            category: 'engagement',
            action: '100_percent',
            value: 100
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track time on page
  useEffect(() => {
    let startTime = Date.now();
    let timeOnPage = 0;

    const trackTimeOnPage = () => {
      timeOnPage = Math.round((Date.now() - startTime) / 1000);
      
      // Track time milestones
      if (timeOnPage === 30) {
        trackConversion({
          event: 'time_on_page',
          category: 'engagement',
          action: '30_seconds',
          value: 30
        });
      } else if (timeOnPage === 60) {
        trackConversion({
          event: 'time_on_page',
          category: 'engagement',
          action: '1_minute',
          value: 60
        });
      } else if (timeOnPage === 120) {
        trackConversion({
          event: 'time_on_page',
          category: 'engagement',
          action: '2_minutes',
          value: 120
        });
      }
    };

    const interval = setInterval(trackTimeOnPage, 1000);
    return () => clearInterval(interval);
  }, []);

  // Expose tracking functions globally for use in other components
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).trackConversion = trackConversion;
      (window as any).trackInteraction = trackInteraction;
      (window as any).trackFormSubmission = trackFormSubmission;
      (window as any).trackPhoneCall = trackPhoneCall;
      (window as any).trackEmailClick = trackEmailClick;
      (window as any).trackFAQInteraction = trackFAQInteraction;
      (window as any).trackTestimonialView = trackTestimonialView;
      (window as any).trackBlogInteraction = trackBlogInteraction;
      (window as any).trackServiceInterest = trackServiceInterest;
      (window as any).trackPricingView = trackPricingView;
      (window as any).trackContactForm = trackContactForm;
    }
  }, []);

  return null; // This component doesn't render anything visible
}
