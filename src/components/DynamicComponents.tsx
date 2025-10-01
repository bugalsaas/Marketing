import dynamic from 'next/dynamic';

// Dynamic imports for client-side only components
export const DynamicSocialSharing = dynamic(
  () => import('./SocialSharing'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center space-x-2 p-2">
        <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
        <span className="text-sm text-gray-500">Loading share options...</span>
      </div>
    )
  }
);

export const DynamicTableOfContents = dynamic(
  () => import('./TableOfContents'),
  { 
    ssr: false,
    loading: () => (
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded animate-pulse" />
        <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4" />
        <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2" />
      </div>
    )
  }
);

export const DynamicStickyTableOfContents = dynamic(
  () => import('./TableOfContents').then(mod => ({ default: mod.StickyTableOfContents })),
  { 
    ssr: false,
    loading: () => (
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded animate-pulse" />
        <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4" />
        <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2" />
      </div>
    )
  }
);

export const DynamicCompactTableOfContents = dynamic(
  () => import('./TableOfContents').then(mod => ({ default: mod.CompactTableOfContents })),
  { 
    ssr: false,
    loading: () => (
      <div className="h-8 bg-gray-200 rounded animate-pulse" />
    )
  }
);

// Enhanced social sharing with analytics
export const DynamicEnhancedSocialSharing = dynamic(
  () => import('./SocialSharing').then(mod => ({ default: mod.EnhancedSocialSharing })),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center space-x-2 p-2">
        <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
        <span className="text-sm text-gray-500">Loading share options...</span>
      </div>
    )
  }
);

// Blog post specific sharing
export const DynamicBlogPostSharing = dynamic(
  () => import('./SocialSharing').then(mod => ({ default: mod.BlogPostSharing })),
  { 
    ssr: false,
    loading: () => (
      <div className="text-center space-y-2">
        <div className="h-4 bg-gray-200 rounded animate-pulse mx-auto w-48" />
        <div className="h-3 bg-gray-200 rounded animate-pulse mx-auto w-32" />
        <div className="h-8 bg-gray-200 rounded animate-pulse mx-auto w-24" />
      </div>
    )
  }
);

// Landing page sharing
export const DynamicLandingPageSharing = dynamic(
  () => import('./SocialSharing').then(mod => ({ default: mod.LandingPageSharing })),
  { 
    ssr: false,
    loading: () => (
      <div className="text-center space-y-2">
        <div className="h-4 bg-gray-200 rounded animate-pulse mx-auto w-40" />
        <div className="h-3 bg-gray-200 rounded animate-pulse mx-auto w-48" />
        <div className="h-8 bg-gray-200 rounded animate-pulse mx-auto w-24" />
      </div>
    )
  }
);
