"use client";

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import SchemaMarkup from './SchemaMarkup';

interface BreadcrumbItem {
  name: string;
  url: string;
  current?: boolean;
}

interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function BreadcrumbNavigation({ items, className = '' }: BreadcrumbNavigationProps) {
  // Add home page to the beginning if not present
  const breadcrumbItems = items[0]?.url === '/' ? items : [
    { name: 'Home', url: '/' },
    ...items
  ];

  // Generate schema markup for breadcrumbs
  const breadcrumbSchema = {
    items: breadcrumbItems.map(item => ({
      name: item.name,
      url: `https://bugal.com.au${item.url}`
    }))
  };

  return (
    <>
      {/* Schema Markup for SEO */}
      <SchemaMarkup type="breadcrumb" data={breadcrumbSchema} />
      
      {/* Visual Breadcrumb Navigation */}
      <nav 
        className={`flex items-center space-x-2 text-sm text-gray-600 ${className}`}
        aria-label="Breadcrumb"
      >
        {breadcrumbItems.map((item, index) => (
          <div key={item.url} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 mx-2 text-gray-400" aria-hidden="true" />
            )}
            
            {item.current ? (
              <span 
                className="text-gray-900 font-medium"
                aria-current="page"
              >
                {item.name}
              </span>
            ) : (
              <Link
                href={item.url}
                className="hover:text-blue-600 transition-colors duration-200 flex items-center"
              >
                {index === 0 && <Home className="h-4 w-4 mr-1" />}
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}

// Predefined breadcrumb configurations for common pages
export const BREADCRUMB_CONFIGS = {
  blog: [
    { name: 'Blog', url: '/blog', current: true }
  ],
  blogPost: (postTitle: string) => [
    { name: 'Blog', url: '/blog' },
    { name: postTitle, url: '#', current: true }
  ],
  features: [
    { name: 'Features', url: '/features', current: true }
  ],
  pricing: [
    { name: 'Pricing', url: '/pricing', current: true }
  ],
  faq: [
    { name: 'FAQ', url: '/faq', current: true }
  ],
  contact: [
    { name: 'Contact', url: '/contact', current: true }
  ],
  testimonials: [
    { name: 'Testimonials', url: '/testimonials', current: true }
  ],
  admin: [
    { name: 'Admin', url: '/admin', current: true }
  ],
  adminBlog: [
    { name: 'Admin', url: '/admin' },
    { name: 'Blog Management', url: '/admin/blog', current: true }
  ],
  adminDashboard: [
    { name: 'Admin', url: '/admin' },
    { name: 'Dashboard', url: '/admin/dashboard', current: true }
  ]
};

// Helper function to generate breadcrumbs for dynamic routes
export function generateBreadcrumbs(
  baseConfig: BreadcrumbItem[],
  additionalItems: BreadcrumbItem[]
): BreadcrumbItem[] {
  return [...baseConfig, ...additionalItems];
}

// Helper function to generate breadcrumbs for blog posts
export function generateBlogPostBreadcrumbs(
  postTitle: string,
  category?: string
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { name: 'Blog', url: '/blog' }
  ];
  
  if (category) {
    items.push({ name: category, url: `/blog?category=${category}` });
  }
  
  items.push({ name: postTitle, url: '#', current: true });
  
  return items;
}
