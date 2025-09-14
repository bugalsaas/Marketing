#!/usr/bin/env node

/**
 * Temporarily set the oversized blog post to draft to prevent static generation
 */

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function fixOversizedPost() {
  try {
    console.log('🔧 Temporarily setting oversized blog post to draft...');
    
    const result = await prisma.blogPost.update({
      where: {
        slug: 'the-importance-of-the-ndis-quality-and-safeguards-commissions-elearning-modules'
      },
      data: {
        published: false,
        publishedAt: null
      }
    });
    
    console.log('✅ Blog post set to draft:', result.title);
    console.log('📝 This will prevent it from being statically generated');
    console.log('🔄 You can republish it after the deployment succeeds');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

fixOversizedPost();
