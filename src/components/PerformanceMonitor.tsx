"use client";

import { useEffect, useState } from "react";

interface PerformanceMetrics {
  FCP: number | null;
  LCP: number | null;
  FID: number | null;
  CLS: number | null;
  TTFB: number | null;
}

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in browser and if PerformanceObserver is supported
    if (typeof window === "undefined" || !window.PerformanceObserver) {
      return;
    }

    const metrics: PerformanceMetrics = {
      FCP: null,
      LCP: null,
      FID: null,
      CLS: null,
      TTFB: null,
    };

    // First Contentful Paint (FCP)
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find((entry) => entry.name === "first-contentful-paint");
        if (fcpEntry) {
          metrics.FCP = fcpEntry.startTime;
          console.log("FCP:", metrics.FCP, "ms");
        }
      });
      fcpObserver.observe({ entryTypes: ["paint"] });
    } catch (e) {
      console.warn("FCP observer not supported");
    }

    // Largest Contentful Paint (LCP)
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          metrics.LCP = lastEntry.startTime;
          console.log("LCP:", metrics.LCP, "ms");
        }
      });
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
    } catch (e) {
      console.warn("LCP observer not supported");
    }

    // First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === "first-input") {
            const firstInputEntry = entry as PerformanceEventTiming;
            metrics.FID = firstInputEntry.processingStart - firstInputEntry.startTime;
            console.log("FID:", metrics.FID, "ms");
          }
        });
      });
      fidObserver.observe({ entryTypes: ["first-input"] });
    } catch (e) {
      console.warn("FID observer not supported");
    }

    // Cumulative Layout Shift (CLS)
    try {
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        metrics.CLS = clsValue;
        console.log("CLS:", metrics.CLS);
      });
      clsObserver.observe({ entryTypes: ["layout-shift"] });
    } catch (e) {
      console.warn("CLS observer not supported");
    }

    // Time to First Byte (TTFB)
    try {
      const navigationEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        metrics.TTFB = navigationEntry.responseStart - navigationEntry.requestStart;
        console.log("TTFB:", metrics.TTFB, "ms");
      }
    } catch (e) {
      console.warn("TTFB measurement not supported");
    }

    // Send metrics to analytics when page is hidden (user leaves)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        // Send metrics to your analytics service
        sendMetricsToAnalytics(metrics);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null; // This component doesn't render anything
}

function sendMetricsToAnalytics(metrics: PerformanceMetrics) {
  // In production, send to your analytics service (Google Analytics, etc.)
  if (process.env.NODE_ENV === "development") {
    console.log("Performance Metrics:", metrics);
  }

  // Example: Send to Google Analytics
  // if (typeof window !== "undefined" && window.gtag) {
  //   window.gtag("event", "web_vitals", {
  //     event_category: "Web Vitals",
  //     event_label: "Core Web Vitals",
  //     value: Math.round(metrics.LCP || 0),
  //     custom_parameter_1: metrics.FCP,
  //     custom_parameter_2: metrics.FID,
  //     custom_parameter_3: metrics.CLS,
  //     custom_parameter_4: metrics.TTFB,
  //   });
  // }
}

// Hook for getting performance metrics
export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    FCP: null,
    LCP: null,
    FID: null,
    CLS: null,
    TTFB: null,
  });

  useEffect(() => {
    // Get current metrics
    const getCurrentMetrics = () => {
      const currentMetrics: PerformanceMetrics = {
        FCP: null,
        LCP: null,
        FID: null,
        CLS: null,
        TTFB: null,
      };

      // Get FCP
      const fcpEntries = performance.getEntriesByType("paint");
      const fcpEntry = fcpEntries.find((entry) => entry.name === "first-contentful-paint");
      if (fcpEntry) {
        currentMetrics.FCP = fcpEntry.startTime;
      }

      // Get TTFB
      const navigationEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        currentMetrics.TTFB = navigationEntry.responseStart - navigationEntry.requestStart;
      }

      setMetrics(currentMetrics);
    };

    // Get metrics after a delay to allow for LCP and CLS
    const timer = setTimeout(getCurrentMetrics, 5000);

    return () => clearTimeout(timer);
  }, []);

  return metrics;
}
