#!/usr/bin/env node

/**
 * Performance Testing Script for Bugal Marketing Website
 * This script measures Core Web Vitals and other performance metrics
 */

const puppeteer = require('puppeteer');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

const BASE_URL = 'http://localhost:3000';
const PAGES = [
  '/',
  '/features',
  '/pricing',
  '/blog',
  '/faq',
  '/testimonials',
  '/contact'
];

async function runLighthouse(url, options = {}) {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  const runnerResult = await lighthouse(url, {
    port: chrome.port,
    ...options
  });
  await chrome.kill();
  return runnerResult.lhr;
}

async function measurePerformance() {
  console.log('🚀 Starting Performance Testing...\n');

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Set viewport
  await page.setViewport({ width: 1920, height: 1080 });

  // Enable performance monitoring
  await page.setCacheEnabled(false);

  for (const path of PAGES) {
    const url = `${BASE_URL}${path}`;
    console.log(`📊 Testing: ${path}`);
    
    try {
      // Navigate to page
      const startTime = Date.now();
      await page.goto(url, { waitUntil: 'networkidle0' });
      const loadTime = Date.now() - startTime;

      // Get performance metrics
      const metrics = await page.evaluate(() => {
        const navigation = performance.getEntriesByType('navigation')[0];
        const paint = performance.getEntriesByType('paint');
        
        return {
          url: window.location.href,
          title: document.title,
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
          firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
          largestContentfulPaint: 0, // Will be updated by observer
          cumulativeLayoutShift: 0, // Will be updated by observer
          timeToFirstByte: navigation.responseStart - navigation.requestStart,
          totalResources: performance.getEntriesByType('resource').length,
          totalSize: performance.getEntriesByType('resource').reduce((acc, r) => acc + (r.transferSize || 0), 0),
        };
      });

      // Wait for LCP and CLS
      await page.waitForTimeout(2000);

      // Get final metrics
      const finalMetrics = await page.evaluate(() => {
        return new Promise((resolve) => {
          let lcp = 0;
          let cls = 0;
          
          // LCP
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) lcp = lastEntry.startTime;
          }).observe({ entryTypes: ['largest-contentful-paint'] });

          // CLS
          new PerformanceObserver((list) => {
            let clsValue = 0;
            list.getEntries().forEach((entry) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            cls = clsValue;
          }).observe({ entryTypes: ['layout-shift'] });

          setTimeout(() => resolve({ lcp, cls }), 1000);
        });
      });

      // Combine metrics
      const allMetrics = { ...metrics, ...finalMetrics };

      // Calculate scores
      const scores = calculateScores(allMetrics);

      // Display results
      console.log(`   ✅ Load Time: ${loadTime}ms`);
      console.log(`   🎯 FCP: ${allMetrics.firstContentfulPaint.toFixed(0)}ms (${scores.fcp})`);
      console.log(`   🚀 LCP: ${allMetrics.largestContentfulPaint.toFixed(0)}ms (${scores.lcp})`);
      console.log(`   📏 CLS: ${allMetrics.cumulativeLayoutShift.toFixed(3)} (${scores.cls})`);
      console.log(`   ⚡ TTFB: ${allMetrics.timeToFirstByte.toFixed(0)}ms`);
      console.log(`   📦 Resources: ${allMetrics.totalResources} (${(allMetrics.totalSize / 1024).toFixed(1)}KB)`);
      console.log(`   🏆 Overall Score: ${scores.overall}/100\n`);

    } catch (error) {
      console.log(`   ❌ Error: ${error.message}\n`);
    }
  }

  await browser.close();
  console.log('🎉 Performance testing completed!');
}

function calculateScores(metrics) {
  // FCP scoring (0-100)
  let fcpScore = 100;
  if (metrics.firstContentfulPaint > 1800) fcpScore = 0;
  else if (metrics.firstContentfulPaint > 1000) fcpScore = 50;

  // LCP scoring (0-100)
  let lcpScore = 100;
  if (metrics.largestContentfulPaint > 4000) lcpScore = 0;
  else if (metrics.largestContentfulPaint > 2500) lcpScore = 50;

  // CLS scoring (0-100)
  let clsScore = 100;
  if (metrics.cumulativeLayoutShift > 0.25) clsScore = 0;
  else if (metrics.cumulativeLayoutShift > 0.1) clsScore = 50;

  // TTFB scoring (0-100)
  let ttfbScore = 100;
  if (metrics.timeToFirstByte > 800) ttfbScore = 0;
  else if (metrics.timeToFirstByte > 600) ttfbScore = 50;

  // Overall score
  const overall = Math.round((fcpScore + lcpScore + clsScore + ttfbScore) / 4);

  return {
    fcp: fcpScore >= 90 ? '🟢 Good' : fcpScore >= 50 ? '🟡 Needs Improvement' : '🔴 Poor',
    lcp: lcpScore >= 90 ? '🟢 Good' : lcpScore >= 50 ? '🟡 Needs Improvement' : '🔴 Poor',
    cls: clsScore >= 90 ? '🟢 Good' : clsScore >= 50 ? '🟡 Needs Improvement' : '🔴 Poor',
    ttfb: ttfbScore >= 90 ? '🟢 Good' : ttfbScore >= 50 ? '🟡 Needs Improvement' : '🔴 Poor',
    overall
  };
}

// Run if called directly
if (require.main === module) {
  measurePerformance().catch(console.error);
}

module.exports = { measurePerformance, calculateScores };
