#!/usr/bin/env node

const { PrismaClient } = require('@prisma/client');
const fs = require('fs').promises;
const path = require('path');

const prisma = new PrismaClient();

async function generateStaticData() {
  console.log('🔄 Generating static data for build...');
  
  try {
    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'public', 'data');
    await fs.mkdir(dataDir, { recursive: true });

    // Fetch all published blog posts
    console.log('📝 Fetching blog posts...');
    const blogPosts = await prisma.blogPost.findMany({
      where: { published: true },
      include: {
        author: {
          select: {
            name: true,
          }
        }
      },
      orderBy: [
        { featured: 'desc' },
        { publishedAt: 'desc' },
        { createdAt: 'desc' }
      ]
    });

    // Transform blog posts for static consumption
    const staticBlogPosts = blogPosts.map(post => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.coverImage,
      category: post.category,
      tags: post.tags,
      readTime: post.readTime,
      featured: post.featured,
      publishedAt: post.publishedAt?.toISOString() || post.createdAt.toISOString(),
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
      author: post.author?.name || 'Bugal Team'
    }));

    // Fetch categories with counts
    console.log('📂 Fetching categories...');
    const categoryGroups = await prisma.blogPost.groupBy({
      by: ['category'],
      where: { published: true },
      _count: { category: true }
    });

    const categories = categoryGroups.map(group => ({
      id: group.category || 'uncategorized',
      name: group.category || 'Uncategorized',
      count: group._count.category
    }));

    // Fetch testimonials
    console.log('💬 Fetching testimonials...');
    const testimonials = await prisma.testimonial.findMany({
      where: { visible: true },
      orderBy: [
        { featured: 'desc' },
        { createdAt: 'desc' }
      ]
    });

    // Fetch FAQs
    console.log('❓ Fetching FAQs...');
    const faqs = await prisma.fAQ.findMany({
      where: { visible: true },
      orderBy: [
        { order: 'asc' },
        { category: 'asc' },
        { question: 'asc' }
      ]
    });

    // Fetch offers
    console.log('🎯 Fetching offers...');
    const offers = await prisma.offer.findMany({
      where: { active: true },
      orderBy: [
        { featured: 'desc' },
        { validUntil: 'desc' }
      ]
    });

    // Fetch homepage highlights
    console.log('⭐ Fetching homepage highlights...');
    const highlights = await prisma.homepageHighlight.findMany({
      where: { active: true },
      orderBy: { order: 'asc' }
    });

    // Write data files
    console.log('💾 Writing data files...');
    
    await fs.writeFile(
      path.join(dataDir, 'blog-posts.json'),
      JSON.stringify(staticBlogPosts, null, 2)
    );

    await fs.writeFile(
      path.join(dataDir, 'categories.json'),
      JSON.stringify(categories, null, 2)
    );

    await fs.writeFile(
      path.join(dataDir, 'testimonials.json'),
      JSON.stringify(testimonials, null, 2)
    );

    await fs.writeFile(
      path.join(dataDir, 'faqs.json'),
      JSON.stringify(faqs, null, 2)
    );

    await fs.writeFile(
      path.join(dataDir, 'offers.json'),
      JSON.stringify(offers, null, 2)
    );

    await fs.writeFile(
      path.join(dataDir, 'highlights.json'),
      JSON.stringify(highlights, null, 2)
    );

    // Generate sitemap data
    console.log('🗺️ Generating sitemap data...');
    const sitemapData = {
      staticPages: [
        { url: 'https://bugal.com.au', priority: 1.0, changeFreq: 'weekly' },
        { url: 'https://bugal.com.au/features', priority: 0.9, changeFreq: 'monthly' },
        { url: 'https://bugal.com.au/pricing', priority: 0.9, changeFreq: 'monthly' },
        { url: 'https://bugal.com.au/faq', priority: 0.8, changeFreq: 'monthly' },
        { url: 'https://bugal.com.au/testimonials', priority: 0.8, changeFreq: 'weekly' },
        { url: 'https://bugal.com.au/blog', priority: 0.9, changeFreq: 'daily' },
        { url: 'https://bugal.com.au/contact', priority: 0.7, changeFreq: 'monthly' },
        { url: 'https://bugal.com.au/about', priority: 0.8, changeFreq: 'monthly' },
      ],
      blogPages: staticBlogPosts.map(post => ({
        url: `https://bugal.com.au/blog/${post.slug}`,
        priority: post.featured ? 0.9 : 0.8,
        changeFreq: 'monthly',
        lastModified: post.updatedAt
      }))
    };

    await fs.writeFile(
      path.join(dataDir, 'sitemap.json'),
      JSON.stringify(sitemapData, null, 2)
    );

    console.log('✅ Static data generation complete!');
    console.log(`📊 Generated data for:`);
    console.log(`   - ${staticBlogPosts.length} blog posts`);
    console.log(`   - ${categories.length} categories`);
    console.log(`   - ${testimonials.length} testimonials`);
    console.log(`   - ${faqs.length} FAQs`);
    console.log(`   - ${offers.length} offers`);
    console.log(`   - ${highlights.length} homepage highlights`);

  } catch (error) {
    console.error('❌ Error generating static data:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Run if called directly
if (require.main === module) {
  generateStaticData();
}

module.exports = { generateStaticData };
