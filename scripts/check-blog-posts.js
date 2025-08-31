const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkBlogPosts() {
  try {
    console.log('🔍 Checking Blog Posts in Database...\n');
    console.log('=' .repeat(60));
    
    // Test database connection
    console.log('🔌 Testing database connection...');
    await prisma.$connect();
    console.log('✅ Database connection successful');
    
    // Get total count
    const totalPosts = await prisma.blogPost.count();
    console.log(`📊 Total Blog Posts: ${totalPosts}`);
    
    // Get posts by category
    const postsByCategory = await prisma.blogPost.groupBy({
      by: ['category'],
      _count: {
        category: true
      }
    });
    
    console.log('\n📂 Posts by Category:');
    postsByCategory.forEach(cat => {
      console.log(`   • ${cat.category}: ${cat._count.category} posts`);
    });
    
    // Get featured posts
    const featuredPosts = await prisma.blogPost.findMany({
      where: { featured: true },
      select: { title: true, category: true, published: true }
    });
    
    console.log('\n⭐ Featured Posts:');
    featuredPosts.forEach(post => {
      const status = post.published ? 'Published' : 'Draft';
      console.log(`   • ${post.title} (${post.category}) - ${status}`);
    });
    
    // Get published vs draft count
    const publishedCount = await prisma.blogPost.count({
      where: { published: true }
    });
    
    const draftCount = await prisma.blogPost.count({
      where: { published: false }
    });
    
    console.log('\n📝 Publication Status:');
    console.log(`   • Published: ${publishedCount}`);
    console.log(`   • Draft: ${draftCount}`);
    
    // Get sample posts
    const samplePosts = await prisma.blogPost.findMany({
      take: 5,
      select: {
        title: true,
        slug: true,
        category: true,
        featured: true,
        published: true,
        publishedAt: true,
        coverImage: true
      },
      orderBy: { createdAt: 'desc' }
    });
    
    console.log('\n📋 Sample Posts (Latest 5):');
    samplePosts.forEach((post, index) => {
      console.log(`\n${index + 1}. ${post.title}`);
      console.log(`   Slug: ${post.slug}`);
      console.log(`   Category: ${post.category}`);
      console.log(`   Featured: ${post.featured ? 'Yes' : 'No'}`);
      console.log(`   Published: ${post.published ? 'Yes' : 'No'}`);
      console.log(`   Date: ${post.publishedAt}`);
      console.log(`   Cover Image: ${post.coverImage || 'Not set'}`);
    });
    
    // Check for posts with content
    const postsWithContent = await prisma.blogPost.findMany({
      where: {
        content: {
          not: {
            contains: 'This is a placeholder content'
          }
        }
      },
      select: { title: true }
    });
    
    console.log('\n📝 Posts with Real Content:');
    if (postsWithContent.length > 0) {
      postsWithContent.forEach(post => {
        console.log(`   • ${post.title}`);
      });
    } else {
      console.log('   • All posts currently have placeholder content');
    }
    
    // Check for posts with images
    const postsWithImages = await prisma.blogPost.findMany({
      where: {
        coverImage: {
          not: null
        }
      },
      select: { title: true, coverImage: true }
    });
    
    console.log('\n🖼️  Posts with Cover Images:');
    if (postsWithImages.length > 0) {
      postsWithImages.forEach(post => {
        console.log(`   • ${post.title}`);
        console.log(`     Image: ${post.coverImage}`);
      });
    } else {
      console.log('   • No posts have cover images set yet');
    }
    
    console.log('\n🎯 Next Steps for Content Migration:');
    console.log('   1. Copy full content from live site for each post');
    console.log('   2. Create and optimize images for each post');
    console.log('   3. Update coverImage paths in database');
    console.log('   4. Review and enhance SEO metadata');
    console.log('   5. Publish posts when ready');
    
  } catch (error) {
    console.error('❌ Error checking blog posts:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the check
if (require.main === module) {
  checkBlogPosts();
}

module.exports = {
  checkBlogPosts
};
