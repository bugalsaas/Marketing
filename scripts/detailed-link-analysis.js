const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function detailedLinkAnalysis() {
  try {
    console.log('🔍 Detailed analysis of links in specific posts...\n');
    
    // Check the specific posts that should have been updated
    const postsToCheck = [
      "To Be Or Not To Be An NDIS Registered Provider?",
      "NDIS Independent Support Workers: Qualifications and Online Courses"
    ];
    
    for (const postTitle of postsToCheck) {
      console.log(`📝 Analyzing: ${postTitle}`);
      console.log('='.repeat(60));
      
      const post = await prisma.blogPost.findFirst({
        where: { title: postTitle },
        select: { title: true, content: true }
      });
      
      if (!post) {
        console.log('❌ Post not found\n');
        continue;
      }
      
      // Extract all links using a more comprehensive regex
      const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>([^<]*)<\/a>/gi;
      const links = [];
      let match;
      
      while ((match = linkRegex.exec(post.content)) !== null) {
        links.push({
          url: match[1],
          text: match[2].trim()
        });
      }
      
      console.log(`📊 Found ${links.length} links in this post:`);
      
      if (links.length === 0) {
        console.log('   No links found in this post');
      } else {
        links.forEach((link, index) => {
          console.log(`   ${index + 1}. "${link.text}" -> ${link.url}`);
        });
      }
      
      // Check for specific problematic URLs
      const problematicUrls = [
        'https://www.skillsready.com.au/disability-support',
        'https://www.open.edu/openlearn/health-sports-psychology/health/introduction-autism-spectrum-disorders/content-section-0',
        'https://mhfaengland.org/mhfa-centre/courses/',
        'https://www.ndis.gov.au/providers/becoming-ndis-provider/am-i-ready',
        'https://www.ndis.gov.au/providers/becoming-ndis-provider'
      ];
      
      console.log('\n🔍 Checking for problematic URLs:');
      problematicUrls.forEach(url => {
        const found = post.content.includes(url);
        console.log(`   ${found ? '❌' : '✅'} ${url}: ${found ? 'FOUND' : 'Not found'}`);
      });
      
      console.log('\n');
    }
    
    // Also check a few other posts to see the overall link situation
    console.log('📊 Overall link analysis across all posts...\n');
    
    const allPosts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { title: true, content: true }
    });
    
    let totalLinks = 0;
    let postsWithLinks = 0;
    
    for (const post of allPosts) {
      const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>([^<]*)<\/a>/gi;
      const links = [];
      let match;
      
      while ((match = linkRegex.exec(post.content)) !== null) {
        links.push({
          url: match[1],
          text: match[2].trim()
        });
      }
      
      if (links.length > 0) {
        postsWithLinks++;
        totalLinks += links.length;
        console.log(`📝 ${post.title}: ${links.length} links`);
      }
    }
    
    console.log(`\n📈 Summary:`);
    console.log(`   Total posts: ${allPosts.length}`);
    console.log(`   Posts with links: ${postsWithLinks}`);
    console.log(`   Total links: ${totalLinks}`);
    console.log(`   Average links per post: ${(totalLinks / allPosts.length).toFixed(1)}`);
    
  } catch (error) {
    console.error('❌ Error during analysis:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the analysis
detailedLinkAnalysis().catch(console.error);
