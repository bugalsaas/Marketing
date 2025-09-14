#!/usr/bin/env node

/**
 * Import extracted content into database and update markdown files
 */

const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Read the extracted content from the markdown file
function readExtractedContent() {
  const filePath = './LIVE_CONTENT_EXTRACTION.md';
  const content = fs.readFileSync(filePath, 'utf8');
  
  const posts = [];
  const postSections = content.split('### ');
  
  for (let i = 1; i < postSections.length; i++) {
    const section = postSections[i];
    const lines = section.split('\n');
    
    // Extract post number and title
    const titleLine = lines[0];
    const postNumber = parseInt(titleLine.split('. ')[0]);
    const title = titleLine.split('. ').slice(1).join('. ');
    
    // Extract URL
    const urlLine = lines.find(line => line.startsWith('**URL:**'));
    const url = urlLine ? urlLine.replace('**URL:** ', '') : '';
    
    // Extract status
    const statusLine = lines.find(line => line.startsWith('**Status:**'));
    const status = statusLine ? statusLine.replace('**Status:** ', '') : '';
    
    // Extract content (everything between ``` and ```)
    const contentStart = section.indexOf('```');
    const contentEnd = section.indexOf('```', contentStart + 3);
    
    if (contentStart !== -1 && contentEnd !== -1) {
      const extractedContent = section.substring(contentStart + 3, contentEnd).trim();
      
      // Extract slug from URL
      const slug = url.replace('www.bugal.com.au/post/', '');
      
      posts.push({
        postNumber,
        title,
        url,
        slug,
        status,
        content: extractedContent
      });
    }
  }
  
  return posts;
}

// Update database with extracted content
async function updateDatabaseContent(posts) {
  console.log('📊 Updating database with extracted content...');
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const post of posts) {
    try {
      if (post.status === '✅ Extracted' && post.content) {
        // Update the database entry
        await prisma.blogPost.update({
          where: { slug: post.slug },
          data: {
            content: post.content,
            title: post.title
          }
        });
        
        console.log(`✅ Updated: ${post.slug}`);
        successCount++;
      } else {
        console.log(`⏭️  Skipped: ${post.slug} (${post.status})`);
      }
    } catch (error) {
      console.log(`❌ Error updating ${post.slug}: ${error.message}`);
      errorCount++;
    }
  }
  
  console.log(`\n📊 Database update completed:`);
  console.log(`✅ Success: ${successCount} posts`);
  console.log(`❌ Errors: ${errorCount} posts`);
  
  return { successCount, errorCount };
}

// Update markdown files with correct content and frontmatter
async function updateMarkdownFiles(posts) {
  console.log('\n📝 Updating markdown files...');
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const post of posts) {
    try {
      if (post.status === '✅ Extracted' && post.content) {
        // Get the current database entry to ensure we have the latest frontmatter
        const dbPost = await prisma.blogPost.findUnique({
          where: { slug: post.slug }
        });
        
        if (dbPost) {
          // Create the markdown content with correct frontmatter
          const frontmatter = `---
title: "${dbPost.title}"
excerpt: "${dbPost.excerpt || ''}"
slug: "${dbPost.slug}"
category: "${dbPost.category}"
tags: "${dbPost.tags || ''}"
featured: ${dbPost.featured}
published: ${dbPost.published}
publishedAt: "${dbPost.publishedAt ? dbPost.publishedAt.toISOString().split('T')[0] : ''}"
author: "${dbPost.author}"
readTime: "${dbPost.readTime}"
coverImage: "${dbPost.coverImage || ''}"
---

${post.content}`;
          
          // Write the file
          const filePath = path.join('./content/blog', `${post.slug}.md`);
          fs.writeFileSync(filePath, frontmatter);
          
          console.log(`✅ Updated: ${post.slug}.md`);
          successCount++;
        } else {
          console.log(`❌ Database entry not found for: ${post.slug}`);
          errorCount++;
        }
      } else {
        console.log(`⏭️  Skipped: ${post.slug} (${post.status})`);
      }
    } catch (error) {
      console.log(`❌ Error updating ${post.slug}.md: ${error.message}`);
      errorCount++;
    }
  }
  
  console.log(`\n📝 Markdown update completed:`);
  console.log(`✅ Success: ${successCount} files`);
  console.log(`❌ Errors: ${errorCount} files`);
  
  return { successCount, errorCount };
}

// Main import function
async function importContent() {
  try {
    console.log('🚀 Starting Phase 2: Content Import');
    console.log('====================================');
    
    // Read extracted content
    console.log('📖 Reading extracted content...');
    const posts = readExtractedContent();
    console.log(`📊 Found ${posts.length} posts in extraction file`);
    
    // Filter for successfully extracted posts
    const extractedPosts = posts.filter(post => post.status === '✅ Extracted');
    console.log(`📊 Successfully extracted posts: ${extractedPosts.length}`);
    
    if (extractedPosts.length === 0) {
      console.log('❌ No successfully extracted posts found!');
      return;
    }
    
    // Update database
    const dbResult = await updateDatabaseContent(extractedPosts);
    
    // Update markdown files
    const mdResult = await updateMarkdownFiles(extractedPosts);
    
    // Final summary
    console.log('\n🎉 Phase 2: Content Import Completed!');
    console.log('=====================================');
    console.log(`📊 Database updates: ${dbResult.successCount} success, ${dbResult.errorCount} errors`);
    console.log(`📝 Markdown updates: ${mdResult.successCount} success, ${mdResult.errorCount} errors`);
    
    if (dbResult.errorCount === 0 && mdResult.errorCount === 0) {
      console.log('\n✅ All content successfully imported!');
      console.log('🎯 Next step: Test the blog URLs to verify everything works');
    } else {
      console.log('\n⚠️  Some errors occurred during import. Please review the output above.');
    }
    
  } catch (error) {
    console.error('❌ Import failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the import
if (require.main === module) {
  importContent();
}

module.exports = { importContent, readExtractedContent, updateDatabaseContent, updateMarkdownFiles };
