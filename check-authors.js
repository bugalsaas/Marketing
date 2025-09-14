#!/usr/bin/env node

/**
 * Check and create author records for blog posts
 */

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkAuthors() {
  try {
    console.log('🔍 Checking author records...');
    
    // Get all unique author IDs from blog posts
    const blogPosts = await prisma.blogPost.findMany({
      select: {
        authorId: true
      },
      distinct: ['authorId']
    });
    
    console.log(`📝 Found ${blogPosts.length} unique author IDs in blog posts:`);
    blogPosts.forEach(post => {
      console.log(`  - ${post.authorId}`);
    });
    
    // Check if authors exist in the database
    const authorIds = blogPosts.map(post => post.authorId);
    const existingAuthors = await prisma.adminUser.findMany({
      where: {
        id: {
          in: authorIds
        }
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    });
    
    console.log(`\n👥 Found ${existingAuthors.length} existing authors:`);
    existingAuthors.forEach(author => {
      console.log(`  - ${author.name} (${author.email}) - ID: ${author.id}`);
    });
    
    // Find missing authors
    const existingAuthorIds = existingAuthors.map(author => author.id);
    const missingAuthorIds = authorIds.filter(id => !existingAuthorIds.includes(id));
    
    if (missingAuthorIds.length > 0) {
      console.log(`\n⚠️  Missing authors (${missingAuthorIds.length}):`);
      missingAuthorIds.forEach(id => {
        console.log(`  - ${id}`);
      });
      
      // Create missing authors
      console.log('\n🔧 Creating missing authors...');
      for (const authorId of missingAuthorIds) {
        const newAuthor = await prisma.adminUser.create({
          data: {
            id: authorId,
            name: 'Bugal Admin',
            email: 'admin@bugal.com.au',
            password: 'temp_password', // This will be updated later
            role: 'admin'
          }
        });
        console.log(`✅ Created author: ${newAuthor.name} (${newAuthor.email})`);
      }
    } else {
      console.log('\n✅ All authors exist in the database!');
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkAuthors();
