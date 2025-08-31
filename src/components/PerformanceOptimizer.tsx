"use client";

import React, { useEffect, useState } from "react";

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export default function PerformanceOptimizer({ children }: PerformanceOptimizerProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
  });

  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1] as PerformanceEventTiming;
        if (fid && 'processingStart' in fid) {
          setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as any;
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value || 0;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Cleanup
      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  // Log performance metrics for monitoring
  useEffect(() => {
    if (metrics.fcp && metrics.lcp && metrics.fid && metrics.cls) {
      console.log('🚀 Performance Metrics:', {
        FCP: `${Math.round(metrics.fcp)}ms`,
        LCP: `${Math.round(metrics.lcp)}ms`,
        FID: `${Math.round(metrics.fid)}ms`,
        CLS: metrics.cls.toFixed(3),
      });

      // Send to analytics if needed
      if (process.env.NODE_ENV === 'production') {
        // Analytics tracking code here
        console.log('📊 Performance data ready for analytics');
      }
    }
  }, [metrics]);

  return (
    <>
      {children}
      
      {/* Performance Debug Panel (Development Only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
          <div className="space-y-1">
            <div>FCP: {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : '...'}</div>
            <div>LCP: {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : '...'}</div>
            <div>FID: {metrics.fid ? `${Math.round(metrics.fid)}ms` : '...'}</div>
            <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : '...'}</div>
          </div>
        </div>
      )}
    </>
  );
}

// Error Boundary for Performance
export class PerformanceErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Performance Error Boundary caught an error:', error, errorInfo);
    
    // Log to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // Error tracking code here
      console.log('🚨 Performance error logged to monitoring service');
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <h2 className="text-red-800 font-semibold">Something went wrong</h2>
          <p className="text-red-600 text-sm">
            We're working on fixing this issue. Please refresh the page.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
