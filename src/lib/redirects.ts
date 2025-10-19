// Comprehensive redirect mapping for SEO preservation
// This ensures zero SEO loss during migration from www.bugal.com.au

export interface RedirectRule {
  source: string;
  destination: string;
  permanent: boolean;
  statusCode?: number;
}

export const redirectRules: RedirectRule[] = [
  // Homepage variations
  {
    source: '/home',
    destination: '/',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/index.html',
    destination: '/',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/index.php',
    destination: '/',
    permanent: true,
    statusCode: 301,
  },

  // Main pages - exact matches
  {
    source: '/about-us',
    destination: '/about',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/about-us/',
    destination: '/about',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/contact-us',
    destination: '/contact',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/contact-us/',
    destination: '/contact',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/pricing-plans',
    destination: '/pricing',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/pricing-plans/',
    destination: '/pricing',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/features-overview',
    destination: '/features',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/features-overview/',
    destination: '/features',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/faqs',
    destination: '/faq',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/faqs/',
    destination: '/faq',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/testimonials-reviews',
    destination: '/testimonials',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/testimonials-reviews/',
    destination: '/testimonials',
    permanent: true,
    statusCode: 301,
  },

  // Blog variations
  {
    source: '/news',
    destination: '/blog',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/news/',
    destination: '/blog',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/articles',
    destination: '/blog',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/articles/',
    destination: '/blog',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/resources',
    destination: '/blog',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/resources/',
    destination: '/blog',
    permanent: true,
    statusCode: 301,
  },

  // Service pages
  {
    source: '/ndis-software',
    destination: '/features',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/ndis-software/',
    destination: '/features',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/practice-management',
    destination: '/features',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/practice-management/',
    destination: '/features',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/support-worker-tools',
    destination: '/features',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/support-worker-tools/',
    destination: '/features',
    permanent: true,
    statusCode: 301,
  },

  // Landing pages - redirect to app or contact
  {
    source: '/get-started',
    destination: 'https://app.bugal.com.au/sign-up',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/get-started/',
    destination: 'https://app.bugal.com.au/sign-up',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/sign-up',
    destination: 'https://app.bugal.com.au/sign-up',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/sign-up/',
    destination: 'https://app.bugal.com.au/sign-up',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/login',
    destination: 'https://app.bugal.com.au/login',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/login/',
    destination: 'https://app.bugal.com.au/login',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/demo',
    destination: '/contact',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/demo/',
    destination: '/contact',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/free-trial',
    destination: 'https://app.bugal.com.au/sign-up',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/free-trial/',
    destination: 'https://app.bugal.com.au/sign-up',
    permanent: true,
    statusCode: 301,
  },

  // Legal pages
  {
    source: '/privacy-policy',
    destination: '/privacy',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/privacy-policy/',
    destination: '/privacy',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/terms-of-service',
    destination: '/terms',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/terms-of-service/',
    destination: '/terms',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/terms-and-conditions',
    destination: '/terms',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/terms-and-conditions/',
    destination: '/terms',
    permanent: true,
    statusCode: 301,
  },

  // Common variations and typos
  {
    source: '/pricing-plan',
    destination: '/pricing',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/pricing-plan/',
    destination: '/pricing',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/feature',
    destination: '/features',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/feature/',
    destination: '/features',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/testimonial',
    destination: '/testimonials',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/testimonial/',
    destination: '/testimonials',
    permanent: true,
    statusCode: 301,
  },

  // Old file extensions
  {
    source: '/about.html',
    destination: '/about',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/contact.html',
    destination: '/contact',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/pricing.html',
    destination: '/pricing',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/features.html',
    destination: '/features',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/faq.html',
    destination: '/faq',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/testimonials.html',
    destination: '/testimonials',
    permanent: true,
    statusCode: 301,
  },
  {
    source: '/blog.html',
    destination: '/blog',
    permanent: true,
    statusCode: 301,
  },
];

// Function to find redirect rule for a given path
export function findRedirectRule(pathname: string): RedirectRule | null {
  // Remove trailing slash for comparison
  const cleanPath = pathname.endsWith('/') && pathname !== '/' 
    ? pathname.slice(0, -1) 
    : pathname;

  return redirectRules.find(rule => rule.source === cleanPath) || null;
}

// Function to generate Next.js redirects configuration
export function generateNextjsRedirects() {
  return redirectRules.map(rule => ({
    source: rule.source,
    destination: rule.destination,
    permanent: rule.permanent,
  }));
}

// Blog post redirects - these will need to be populated based on current site audit
export const blogPostRedirects: Record<string, string> = {
  // Example blog post redirects - need to be updated with actual current URLs
  // '/blog/old-post-slug': '/blog/new-post-slug',
  // '/news/old-article': '/blog/new-article',
  // '/articles/old-content': '/blog/new-content',
};

// Function to find blog post redirect
export function findBlogPostRedirect(pathname: string): string | null {
  return blogPostRedirects[pathname] || null;
}
