import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

// Required for static export
export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://bugal.com.au';
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Try to load blog posts from static data first
  let blogSitemap: MetadataRoute.Sitemap = [];
  try {
    const sitemapDataPath = path.join(process.cwd(), 'public', 'data', 'sitemap.json');
    if (fs.existsSync(sitemapDataPath)) {
      const sitemapData = JSON.parse(fs.readFileSync(sitemapDataPath, 'utf8'));
      blogSitemap = sitemapData.blogPages || [];
    } else {
      // Fallback to database if static data not available
      const { PrismaClient } = require('@prisma/client');
      const prisma = new PrismaClient();
      
      const blogPosts = await prisma.blogPost.findMany({
        where: { published: true },
        select: { slug: true, updatedAt: true, publishedAt: true }
      });
      
      blogSitemap = blogPosts.map((post: { slug: string; updatedAt: Date; publishedAt: Date | null }) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt.toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }));
      
      await prisma.$disconnect();
    }
  } catch (error) {
    console.log('Could not fetch blog posts for sitemap:', error);
  }

  return [...staticPages, ...blogSitemap];
}
