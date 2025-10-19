import { Metadata } from 'next';

// Base URL configuration
export const baseUrl = 'https://bugal.com.au';
export const siteName = 'Bugal';
export const companyName = 'Bugal Pty Ltd';

// Common SEO configuration
export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    yahoo: process.env.YAHOO_VERIFICATION,
  },
  alternates: {
    canonical: baseUrl,
  },
};

// Page-specific metadata generators
export function generateHomepageMetadata(): Metadata {
  return {
    ...defaultMetadata,
    title: 'NDIS Practice Management Software Australia | Bugal - #1 Support Worker Tool',
    description: 'Australia\'s #1 NDIS practice management software for support workers. Streamline client management, billing, scheduling & compliance. Start free trial today.',
    keywords: [
      'NDIS software Australia',
      'support worker management',
      'NDIS practice management',
      'disability support software',
      'NDIS billing software',
      'support worker admin tool',
      'NDIS client management',
      'disability support worker software',
      'NDIS compliance software',
      'practice management Australia'
    ],
    openGraph: {
      ...defaultMetadata.openGraph,
      title: 'NDIS Practice Management Software Australia | Bugal',
      description: 'Australia\'s #1 NDIS practice management software for support workers. Streamline client management, billing, scheduling & compliance.',
      url: baseUrl,
      images: [
        {
          url: '/images/og-homepage.jpg',
          width: 1200,
          height: 630,
          alt: 'Bugal NDIS Practice Management Software - Australia\'s #1 Support Worker Tool',
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: 'NDIS Practice Management Software Australia | Bugal',
      description: 'Australia\'s #1 NDIS practice management software for support workers. Streamline client management, billing, scheduling & compliance.',
      images: ['/images/og-homepage.jpg'],
    },
  };
}

export function generateFeaturesMetadata(): Metadata {
  return {
    ...defaultMetadata,
    title: 'NDIS Software Features | Client Management, Billing & Scheduling | Bugal',
    description: 'Complete NDIS practice management features: client profiles, NDIS billing, scheduling, compliance tracking, reporting & more. Built for Australian support workers.',
    keywords: [
      'NDIS software features',
      'NDIS client management',
      'NDIS billing software',
      'support worker scheduling',
      'NDIS compliance tracking',
      'disability support features',
      'NDIS reporting software',
      'practice management features'
    ],
    openGraph: {
      ...defaultMetadata.openGraph,
      title: 'NDIS Software Features | Bugal',
      description: 'Complete NDIS practice management features: client profiles, billing, scheduling, compliance tracking & more.',
      url: `${baseUrl}/features`,
      images: [
        {
          url: '/images/og-features.jpg',
          width: 1200,
          height: 630,
          alt: 'Bugal NDIS Software Features - Complete Practice Management',
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: 'NDIS Software Features | Bugal',
      description: 'Complete NDIS practice management features: client profiles, billing, scheduling, compliance tracking & more.',
      images: ['/images/og-features.jpg'],
    },
  };
}

export function generatePricingMetadata(): Metadata {
  return {
    ...defaultMetadata,
    title: 'NDIS Software Pricing | Affordable Support Worker Tools | Bugal',
    description: 'Transparent NDIS software pricing starting from $29/month. No hidden fees, cancel anytime. Perfect for independent support workers & small practices.',
    keywords: [
      'NDIS software pricing',
      'support worker software cost',
      'NDIS practice management price',
      'disability support software pricing',
      'NDIS billing software cost',
      'affordable NDIS software',
      'NDIS software subscription'
    ],
    openGraph: {
      ...defaultMetadata.openGraph,
      title: 'NDIS Software Pricing | Bugal',
      description: 'Transparent NDIS software pricing starting from $29/month. No hidden fees, cancel anytime.',
      url: `${baseUrl}/pricing`,
      images: [
        {
          url: '/images/og-pricing.jpg',
          width: 1200,
          height: 630,
          alt: 'Bugal NDIS Software Pricing - Transparent & Affordable',
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: 'NDIS Software Pricing | Bugal',
      description: 'Transparent NDIS software pricing starting from $29/month. No hidden fees, cancel anytime.',
      images: ['/images/og-pricing.jpg'],
    },
  };
}

export function generateBlogMetadata(): Metadata {
  return {
    ...defaultMetadata,
    title: 'NDIS Blog & Resources | Support Worker Tips & Best Practices | Bugal',
    description: 'Expert NDIS blog with practical tips, industry insights, and best practices for support workers. Learn how to run a successful NDIS practice.',
    keywords: [
      'NDIS blog',
      'support worker tips',
      'NDIS best practices',
      'disability support resources',
      'NDIS practice management tips',
      'support worker training',
      'NDIS compliance guide'
    ],
    openGraph: {
      ...defaultMetadata.openGraph,
      title: 'NDIS Blog & Resources | Bugal',
      description: 'Expert NDIS blog with practical tips, industry insights, and best practices for support workers.',
      url: `${baseUrl}/blog`,
      images: [
        {
          url: '/images/og-blog.jpg',
          width: 1200,
          height: 630,
          alt: 'Bugal NDIS Blog - Expert Tips for Support Workers',
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: 'NDIS Blog & Resources | Bugal',
      description: 'Expert NDIS blog with practical tips, industry insights, and best practices for support workers.',
      images: ['/images/og-blog.jpg'],
    },
  };
}

export function generateContactMetadata(): Metadata {
  return {
    ...defaultMetadata,
    title: 'Contact Bugal | NDIS Software Support & Sales | Australia',
    description: 'Get in touch with Bugal for NDIS software support, sales inquiries, or demo requests. We\'re here to help Australian support workers succeed.',
    keywords: [
      'contact Bugal',
      'NDIS software support',
      'Bugal sales',
      'NDIS software demo',
      'support worker help',
      'Bugal contact Australia'
    ],
    openGraph: {
      ...defaultMetadata.openGraph,
      title: 'Contact Bugal | NDIS Software Support',
      description: 'Get in touch with Bugal for NDIS software support, sales inquiries, or demo requests.',
      url: `${baseUrl}/contact`,
      images: [
        {
          url: '/images/og-contact.jpg',
          width: 1200,
          height: 630,
          alt: 'Contact Bugal - NDIS Software Support & Sales',
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: 'Contact Bugal | NDIS Software Support',
      description: 'Get in touch with Bugal for NDIS software support, sales inquiries, or demo requests.',
      images: ['/images/og-contact.jpg'],
    },
  };
}

export function generateFAQMetadata(): Metadata {
  return {
    ...defaultMetadata,
    title: 'NDIS Software FAQ | Common Questions & Answers | Bugal',
    description: 'Find answers to common questions about Bugal NDIS software. Learn about features, pricing, setup, and how to get started with practice management.',
    keywords: [
      'NDIS software FAQ',
      'Bugal questions',
      'NDIS practice management FAQ',
      'support worker software help',
      'NDIS software setup',
      'Bugal support'
    ],
    openGraph: {
      ...defaultMetadata.openGraph,
      title: 'NDIS Software FAQ | Bugal',
      description: 'Find answers to common questions about Bugal NDIS software and practice management.',
      url: `${baseUrl}/faq`,
      images: [
        {
          url: '/images/og-faq.jpg',
          width: 1200,
          height: 630,
          alt: 'Bugal NDIS Software FAQ - Common Questions & Answers',
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: 'NDIS Software FAQ | Bugal',
      description: 'Find answers to common questions about Bugal NDIS software and practice management.',
      images: ['/images/og-faq.jpg'],
    },
  };
}

export function generateTestimonialsMetadata(): Metadata {
  return {
    ...defaultMetadata,
    title: 'NDIS Software Reviews & Testimonials | What Support Workers Say | Bugal',
    description: 'Read real testimonials from Australian NDIS support workers using Bugal. See how our software helps streamline practice management and improve client care.',
    keywords: [
      'NDIS software reviews',
      'Bugal testimonials',
      'support worker reviews',
      'NDIS practice management feedback',
      'disability support software reviews',
      'Bugal customer stories'
    ],
    openGraph: {
      ...defaultMetadata.openGraph,
      title: 'NDIS Software Reviews & Testimonials | Bugal',
      description: 'Read real testimonials from Australian NDIS support workers using Bugal software.',
      url: `${baseUrl}/testimonials`,
      images: [
        {
          url: '/images/og-testimonials.jpg',
          width: 1200,
          height: 630,
          alt: 'Bugal NDIS Software Reviews & Testimonials',
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: 'NDIS Software Reviews & Testimonials | Bugal',
      description: 'Read real testimonials from Australian NDIS support workers using Bugal software.',
      images: ['/images/og-testimonials.jpg'],
    },
  };
}

export function generateAboutMetadata(): Metadata {
  return {
    ...defaultMetadata,
    title: 'About Bugal | NDIS Software Company | Supporting Australian Support Workers',
    description: 'Learn about Bugal\'s mission to support Australian NDIS support workers with innovative practice management software. Founded by support workers, for support workers.',
    keywords: [
      'about Bugal',
      'NDIS software company',
      'support worker software company',
      'Bugal mission',
      'NDIS practice management company',
      'Australian software company'
    ],
    openGraph: {
      ...defaultMetadata.openGraph,
      title: 'About Bugal | NDIS Software Company',
      description: 'Learn about Bugal\'s mission to support Australian NDIS support workers with innovative software.',
      url: `${baseUrl}/about`,
      images: [
        {
          url: '/images/og-about.jpg',
          width: 1200,
          height: 630,
          alt: 'About Bugal - NDIS Software Company',
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: 'About Bugal | NDIS Software Company',
      description: 'Learn about Bugal\'s mission to support Australian NDIS support workers with innovative software.',
      images: ['/images/og-about.jpg'],
    },
  };
}

// Blog post metadata generator
export function generateBlogPostMetadata(post: {
  title: string;
  excerpt: string | null;
  slug: string;
  publishedAt: string;
  coverImage?: string | null;
  category?: string | null;
  tags?: string;
}): Metadata {
  const title = `${post.title} | NDIS Blog | Bugal`;
  const description = post.excerpt || `Read about ${post.title} on the Bugal NDIS blog. Expert insights for support workers and practice management.`;
  const url = `${baseUrl}/blog/${post.slug}`;
  const image = post.coverImage || '/images/og-blog.jpg';

  return {
    ...defaultMetadata,
    title,
    description,
    keywords: [
      'NDIS blog',
      'support worker tips',
      post.category || 'NDIS practice management',
      ...(post.tags ? post.tags.split(',').map(tag => tag.trim()) : []),
    ],
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      url,
      type: 'article',
      publishedTime: post.publishedAt,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
      images: [image],
    },
  };
}
