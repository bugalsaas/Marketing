import type { NextConfig } from "next";
import { generateNextjsRedirects } from './src/lib/redirects';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// Determine build target from environment variable
const buildTarget = process.env.BUILD_TARGET || 'static';

// Base configuration shared by both builds
const baseConfig: NextConfig = {
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // Compression
  compress: true,
  
  // Powered by header removal
  poweredByHeader: false,
  
  // Bundle optimization
  webpack: (config, { isServer }) => {
    // Optimize for production
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

// Static site configuration
const staticConfig: NextConfig = {
  ...baseConfig,
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  
  // Image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // SEO redirects for preserving link equity
  async redirects() {
    return generateNextjsRedirects();
  },
  
  // Exclude admin routes from static export
  async rewrites() {
    return [];
  },
  
  // Skip API routes during static export
  async generateBuildId() {
    return 'static-build';
  },
};

// Admin panel configuration
const adminConfig: NextConfig = {
  ...baseConfig,
  
  // Image optimization for admin
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Admin should NOT use static export
  output: undefined,
  trailingSlash: false,
  distDir: '.next',
};

// Select configuration based on build target
const nextConfig: NextConfig = buildTarget === 'admin' ? adminConfig : staticConfig;

export default withBundleAnalyzer(nextConfig);
