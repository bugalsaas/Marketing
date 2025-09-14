#!/usr/bin/env node

/**
 * Check the current content of the "Make your Business Flow" blog post
 */

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkBlogContent() {
  try {
    console.log('🔍 Checking blog post content...');
    
    // Find the blog post by slug
    const blogPost = await prisma.blogPost.findFirst({
      where: { 
        slug: 'make-your-business-flow'
      }
    });
    
    if (!blogPost) {
      console.log('❌ Blog post not found');
      return;
    }
    
    console.log(`📝 Found blog post: ${blogPost.title}`);
    console.log(`🆔 ID: ${blogPost.id}`);
    console.log(`📅 Updated: ${blogPost.updatedAt}`);
    console.log(`📄 Content length: ${blogPost.content.length} characters`);
    
    // Check if the content contains bold formatting
    const hasBold = blogPost.content.includes('<strong>') || blogPost.content.includes('<b>');
    console.log(`🔍 Contains bold formatting: ${hasBold ? '✅ Yes' : '❌ No'}`);
    
    // Show a snippet of the content around "Streamlining Business Admin"
    const streamliningIndex = blogPost.content.indexOf('Streamlining Business Admin');
    if (streamliningIndex !== -1) {
      const snippet = blogPost.content.substring(
        Math.max(0, streamliningIndex - 50), 
        streamliningIndex + 100
      );
      console.log(`📄 Content snippet around "Streamlining Business Admin":`);
      console.log(snippet);
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkBlogContent();
