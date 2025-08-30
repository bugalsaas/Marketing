"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

interface GoogleAnalyticsProps {
  GA_MEASUREMENT_ID: string;
}

declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "set",
      targetId: string,
      config?: any
    ) => void;
  }
}

export function GoogleAnalytics({ GA_MEASUREMENT_ID }: GoogleAnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Load Google Analytics script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    return () => {
      document.head.removeChild(script);
    };
  }, [GA_MEASUREMENT_ID]);

  // Track page views
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname + searchParams.toString(),
        page_title: document.title,
      });
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  return null;
}

// Hook for tracking custom events
export function useGoogleAnalytics() {
  const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  const trackPageView = (url: string, title?: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
        page_path: url,
        page_title: title || document.title,
      });
    }
  };

  const trackConversion = (conversionId: string, conversionLabel: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: `${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}/${conversionId}/${conversionLabel}`,
      });
    }
  };

  const trackFormSubmission = (formName: string, formType: string) => {
    trackEvent("form_submit", "engagement", `${formName}_${formType}`);
  };

  const trackButtonClick = (buttonName: string, buttonLocation: string) => {
    trackEvent("button_click", "engagement", `${buttonName}_${buttonLocation}`);
  };

  const trackScroll = (scrollDepth: number) => {
    trackEvent("scroll", "engagement", `scroll_${scrollDepth}%`);
  };

  const trackTimeOnPage = (timeInSeconds: number) => {
    trackEvent("time_on_page", "engagement", "time_tracking", timeInSeconds);
  };

  return {
    trackEvent,
    trackPageView,
    trackConversion,
    trackFormSubmission,
    trackButtonClick,
    trackScroll,
    trackTimeOnPage,
  };
}

// Enhanced tracking for specific user interactions
export function useEnhancedTracking() {
  const { trackEvent, trackScroll, trackTimeOnPage } = useGoogleAnalytics();

  useEffect(() => {
    let startTime = Date.now();
    let scrollTimeout: NodeJS.Timeout;

    // Track time on page
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        trackTimeOnPage(timeSpent);
      } else {
        startTime = Date.now();
      }
    };

    // Track scroll depth
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);
        
        // Track at 25%, 50%, 75%, and 100%
        if ([25, 50, 75, 100].includes(scrollPercent)) {
          trackScroll(scrollPercent);
        }
      }, 150);
    };

    // Track form interactions
    const handleFormInteraction = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "FORM") {
        const formName = target.getAttribute("data-form-name") || "unknown";
        const formType = target.getAttribute("data-form-type") || "contact";
        trackEvent("form_start", "engagement", `${formName}_${formType}`);
      }
    };

    // Track external link clicks
    const handleExternalLinkClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" && target.hostname !== window.location.hostname) {
        trackEvent("external_link_click", "engagement", target.hostname);
      }
    };

    // Add event listeners
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("focusin", handleFormInteraction);
    document.addEventListener("click", handleExternalLinkClick);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("focusin", handleFormInteraction);
      document.removeEventListener("click", handleExternalLinkClick);
      clearTimeout(scrollTimeout);
    };
  }, [trackEvent, trackScroll, trackTimeOnPage]);

  return null;
}
