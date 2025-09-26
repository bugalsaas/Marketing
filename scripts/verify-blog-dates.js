const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function verifyBlogDates() {
  try {
    console.log('🔍 Verifying blog post published dates...\n');
    
    // Get all blog posts with their published dates
    const blogPosts = await prisma.blogPost.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        publishedAt: true,
        published: true
      },
      orderBy: {
        publishedAt: 'desc'
      }
    });
    
    console.log(`📊 Found ${blogPosts.length} blog posts in database\n`);
    
    // Show the first 10 blog posts with their dates
    console.log('📅 Recent blog posts with published dates:');
    blogPosts.slice(0, 10).forEach((post, index) => {
      const dateStr = post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-AU') : 'No date';
      const status = post.published ? '✅ Published' : '📝 Draft';
      console.log(`${index + 1}. ${post.title}`);
      console.log(`   Date: ${dateStr} | Status: ${status}`);
      console.log(`   Slug: ${post.slug}\n`);
    });
    
    // Count posts with and without dates
    const withDates = blogPosts.filter(p => p.publishedAt).length;
    const withoutDates = blogPosts.filter(p => !p.publishedAt).length;
    
    console.log(`📈 Summary:`);
    console.log(`✅ Posts with published dates: ${withDates}`);
    console.log(`❌ Posts without published dates: ${withoutDates}`);
    
    // Show date range
    const dates = blogPosts.filter(p => p.publishedAt).map(p => new Date(p.publishedAt));
    if (dates.length > 0) {
      const earliest = new Date(Math.min(...dates));
      const latest = new Date(Math.max(...dates));
      console.log(`📅 Date range: ${earliest.toLocaleDateString('en-AU')} to ${latest.toLocaleDateString('en-AU')}`);
    }
    
  } catch (error) {
    console.error('❌ Error verifying blog dates:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the verification
verifyBlogDates().catch(console.error);
