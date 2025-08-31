"use client";

import { useEffect } from 'react';

interface BlogPostSchema {
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  image: string;
  url: string;
  readTime: string;
  category: string;
  tags: string[];
}

interface BlogPageSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  publisher: {
    "@type": string;
    name: string;
    logo: {
      "@type": string;
      url: string;
    };
  };
  blogPost: Array<{
    "@type": string;
    headline: string;
    description: string;
    author: {
      "@type": string;
      name: string;
    };
    datePublished: string;
    dateModified: string;
    image: string;
    url: string;
  }>;
}

interface FAQSchema {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

interface TestimonialsSchema {
  testimonials: Array<{
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
  }>;
}

interface OrganizationSchema {
  name: string;
  url: string;
  logo: string;
  description: string;
  contactPoint: {
    telephone: string;
    contactType: string;
    email: string;
  };
  sameAs: string[];
}

interface BreadcrumbSchema {
  items: Array<{
    name: string;
    url: string;
  }>;
}

interface SchemaMarkupProps {
  type: 'blog-post' | 'blog-page' | 'faq' | 'testimonials' | 'organization' | 'breadcrumb';
  data: BlogPostSchema | BlogPageSchema | FAQSchema | TestimonialsSchema | OrganizationSchema | BreadcrumbSchema;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  useEffect(() => {
    const generateSchema = () => {
      let schema: any = {};

      switch (type) {
        case 'blog-post':
          schema = generateBlogPostSchema(data as BlogPostSchema);
          break;
        case 'blog-page':
          schema = data as BlogPageSchema; // Use the data directly for blog pages
          break;
        case 'faq':
          schema = generateFAQSchema(data as FAQSchema);
          break;
        case 'testimonials':
          schema = generateTestimonialsSchema(data as TestimonialsSchema);
          break;
        case 'organization':
          schema = generateOrganizationSchema(data as OrganizationSchema);
          break;
        case 'breadcrumb':
          schema = generateBreadcrumbSchema(data as BreadcrumbSchema);
          break;
      }

      // Remove existing schema if present
      const existingSchema = document.querySelector('script[type="application/ld+json"]');
      if (existingSchema) {
        existingSchema.remove();
      }

      // Add new schema
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    generateSchema();
  }, [type, data]);

  return null; // This component doesn't render anything visible
}

function generateBlogPostSchema(data: BlogPostSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": data.title,
    "description": data.description,
    "author": {
      "@type": "Person",
      "name": data.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bugal",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bugal.com.au/Bugal_Full_Logo.png"
      }
    },
    "datePublished": data.publishedAt,
    "dateModified": data.updatedAt,
    "image": {
      "@type": "ImageObject",
      "url": data.image,
      "width": 600,
      "height": 400
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": data.url
    },
    "articleSection": data.category,
    "keywords": data.tags.join(', '),
    "wordCount": data.title.length + data.description.length,
    "timeRequired": data.readTime,
    "url": data.url,
    "potentialAction": {
      "@type": "ReadAction",
      "target": data.url
    }
  };
}

function generateFAQSchema(data: FAQSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };
}

function generateTestimonialsSchema(data: TestimonialsSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "reviewBody": data.testimonials.map(t => ({
      "@type": "Review",
      "name": t.name,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating
      },
      "itemReviewed": {
        "@type": "Organization",
        "name": t.company
      },
      "author": {
        "@type": "Person",
        "name": t.name
      }
    }))
  };
}

function generateOrganizationSchema(data: OrganizationSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": data.name,
    "url": data.url,
    "logo": {
      "@type": "ImageObject",
      "url": data.logo
    },
    "description": data.description,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": data.contactPoint.telephone,
      "contactType": data.contactPoint.contactType,
      "email": data.contactPoint.email
    },
    "sameAs": data.sameAs,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AU"
    },
    "foundingDate": "2020",
    "knowsAbout": [
      "NDIS Support Services",
      "Practice Management Software",
      "Disability Support",
      "Independent Support Providers"
    ]
  };
}

function generateBreadcrumbSchema(data: BreadcrumbSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": data.items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// Helper function to generate schema for different page types
export function generatePageSchema(pageType: string, pageData: any) {
  switch (pageType) {
    case 'homepage':
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Bugal - Simple Support Software",
        "description": "Comprehensive NDIS practice management software for independent support providers",
        "url": "https://bugal.com.au",
        "mainEntity": {
          "@type": "SoftwareApplication",
          "name": "Bugal",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web Browser",
          "description": "NDIS practice management software"
        }
      };
    
    case 'pricing':
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Pricing - Bugal",
        "description": "Simple, transparent pricing for NDIS practice management software",
        "url": "https://bugal.com.au/pricing"
      };
    
    case 'features':
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Features - Bugal",
        "description": "Comprehensive features for NDIS practice management",
        "url": "https://bugal.com.au/features"
      };
    
    default:
      return null;
  }
}
