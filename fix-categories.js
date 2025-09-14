#!/usr/bin/env node

/**
 * Fix blog post categories to match the 4 standardized categories
 */

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function fixCategories() {
  try {
    console.log('🔧 Fixing blog post categories...');
    
    // Update "Practice Management" posts to "Best Practice"
    const practiceManagementPosts = await prisma.blogPost.findMany({
      where: { category: 'Practice Management' }
    });
    
    console.log(`📝 Found ${practiceManagementPosts.length} posts with "Practice Management" category:`);
    practiceManagementPosts.forEach(post => {
      console.log(`  - ${post.title}`);
    });
    
    if (practiceManagementPosts.length > 0) {
      const updateResult = await prisma.blogPost.updateMany({
        where: { category: 'Practice Management' },
        data: { category: 'Best Practice' }
      });
      
      console.log(`✅ Updated ${updateResult.count} posts from "Practice Management" to "Best Practice"`);
    }
    
    // Verify all categories are now standardized
    const allCategories = await prisma.blogPost.groupBy({
      by: ['category'],
      _count: {
        category: true
      }
    });
    
    console.log('\n📊 Updated Categories:');
    allCategories.forEach(group => {
      console.log(`  - ${group.category}: ${group._count.category} posts`);
    });
    
    const standardCategories = ['Starting Out', 'Best Practice', 'Education', 'Growth'];
    const nonStandardCategories = allCategories.filter(cat => 
      !standardCategories.includes(cat.category)
    );
    
    if (nonStandardCategories.length === 0) {
      console.log('\n✅ All categories are now standardized!');
    } else {
      console.log('\n⚠️  Still have non-standard categories:', nonStandardCategories.map(c => c.category));
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

fixCategories();
