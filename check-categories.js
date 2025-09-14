#!/usr/bin/env node

/**
 * Check current blog post categories and identify which ones need updating
 */

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkCategories() {
  try {
    console.log('🔍 Checking current blog post categories...');
    
    // Get all unique categories
    const categories = await prisma.blogPost.findMany({
      select: {
        id: true,
        title: true,
        category: true
      },
      orderBy: {
        category: 'asc'
      }
    });
    
    // Group by category
    const categoryGroups = {};
    categories.forEach(post => {
      if (!categoryGroups[post.category]) {
        categoryGroups[post.category] = [];
      }
      categoryGroups[post.category].push({
        id: post.id,
        title: post.title
      });
    });
    
    console.log('\n📊 Current Categories:');
    Object.keys(categoryGroups).forEach(category => {
      console.log(`\n📁 ${category} (${categoryGroups[category].length} posts):`);
      categoryGroups[category].forEach(post => {
        console.log(`  - ${post.title}`);
      });
    });
    
    // Check which categories need updating
    const standardCategories = ['Starting Out', 'Best Practice', 'Education', 'Growth'];
    const nonStandardCategories = Object.keys(categoryGroups).filter(cat => 
      !standardCategories.includes(cat)
    );
    
    if (nonStandardCategories.length > 0) {
      console.log('\n⚠️  Non-standard categories that need updating:');
      nonStandardCategories.forEach(category => {
        console.log(`  - ${category} (${categoryGroups[category].length} posts)`);
      });
    } else {
      console.log('\n✅ All categories are already standardized!');
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkCategories();
