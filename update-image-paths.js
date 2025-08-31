require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

async function updateImagePaths() {
  const prisma = new PrismaClient();
  
  try {
    console.log('🔄 Updating blog post image paths in database...\n');
    
    // Get all blog posts
    const posts = await prisma.blogPost.findMany({
      select: {
        id: true,
        title: true,
        coverImage: true,
        slug: true
      }
    });
    
    console.log(`📊 Found ${posts.length} blog posts to update\n`);
    
    let updatedCount = 0;
    let noChangeCount = 0;
    
    for (const post of posts) {
      // Extract the directory name from the slug or create a clean one
      let imageDir = post.slug;
      
      // Clean up the directory name (remove special characters, etc.)
      imageDir = imageDir
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      
      // Create the new image path
      const newImagePath = `/images/blog/${imageDir}/hero-image.svg`;
      
      if (post.coverImage !== newImagePath) {
        // Update the database
        await prisma.blogPost.update({
          where: { id: post.id },
          data: { coverImage: newImagePath }
        });
        
        console.log(`✅ Updated: ${post.title}`);
        console.log(`   Old: ${post.coverImage || 'NO IMAGE'}`);
        console.log(`   New: ${newImagePath}\n`);
        
        updatedCount++;
      } else {
        console.log(`⏭️ No change needed: ${post.title}`);
        noChangeCount++;
      }
    }
    
    console.log('=' .repeat(60));
    console.log('📊 Update Summary:');
    console.log(`   • Updated: ${updatedCount} posts`);
    console.log(`   • No change needed: ${noChangeCount} posts`);
    console.log(`   • Total: ${posts.length} posts`);
    
    if (updatedCount > 0) {
      console.log('\n🎉 Image paths updated successfully!');
      console.log('💡 Now refresh your blog page to see the images load.');
    } else {
      console.log('\n✅ All image paths are already correct!');
    }
    
  } catch (error) {
    console.error('❌ Error updating image paths:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the update
updateImagePaths();
