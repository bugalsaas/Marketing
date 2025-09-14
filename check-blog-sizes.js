#!/usr/bin/env node

/**
 * Check blog post content sizes to identify oversized posts
 */

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkBlogSizes() {
  try {
    console.log('🔍 Checking blog post content sizes...');
    
    const blogPosts = await prisma.blogPost.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        content: true
      }
    });
    
    console.log(`📝 Found ${blogPosts.length} blog posts`);
    
    // Calculate content sizes
    const postsWithSizes = blogPosts.map(post => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      contentSize: Buffer.byteLength(post.content, 'utf8'),
      contentSizeMB: (Buffer.byteLength(post.content, 'utf8') / (1024 * 1024)).toFixed(2)
    }));
    
    // Sort by size (largest first)
    postsWithSizes.sort((a, b) => b.contentSize - a.contentSize);
    
    console.log('\n📊 Blog post content sizes (largest first):');
    postsWithSizes.forEach((post, index) => {
      const sizeIndicator = post.contentSizeMB > 1 ? '⚠️ ' : '✅ ';
      console.log(`${sizeIndicator}${index + 1}. ${post.title}`);
      console.log(`   Slug: ${post.slug}`);
      console.log(`   Size: ${post.contentSizeMB} MB (${post.contentSize.toLocaleString()} bytes)`);
      console.log('');
    });
    
    // Find oversized posts
    const oversizedPosts = postsWithSizes.filter(post => parseFloat(post.contentSizeMB) > 1);
    
    if (oversizedPosts.length > 0) {
      console.log(`\n🚨 Found ${oversizedPosts.length} oversized posts (>1MB):`);
      oversizedPosts.forEach(post => {
        console.log(`  - ${post.title}: ${post.contentSizeMB} MB`);
      });
    } else {
      console.log('\n✅ No oversized posts found!');
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkBlogSizes();
