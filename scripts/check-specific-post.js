const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkSpecificPost() {
  try {
    console.log('🔍 Checking specific post for NDIS links...\n');
    
    const blogPost = await prisma.blogPost.findFirst({
      where: { title: "To Be Or Not To Be An NDIS Registered Provider?" },
      select: { id: true, title: true, content: true }
    });
    
    if (!blogPost) {
      console.log('❌ Blog post not found');
      return;
    }
    
    console.log(`📝 Found post: ${blogPost.title}`);
    console.log(`📄 Content length: ${blogPost.content.length} characters\n`);
    
    // Check for the specific NDIS links
    const oldLink1 = "https://www.ndis.gov.au/providers/becoming-ndis-provider/am-i-ready";
    const oldLink2 = "https://www.ndis.gov.au/providers/becoming-ndis-provider";
    const newLink1 = "https://www.ndis.gov.au/providers/becoming-ndis-provider/am-i-ready";
    const newLink2 = "https://www.ndis.gov.au/providers/becoming-ndis-provider";
    
    console.log('🔗 Checking for old links:');
    console.log(`   Link 1 (am-i-ready): ${blogPost.content.includes(oldLink1) ? '❌ FOUND' : '✅ Not found'}`);
    console.log(`   Link 2 (becoming-ndis-provider): ${blogPost.content.includes(oldLink2) ? '❌ FOUND' : '✅ Not found'}`);
    
    console.log('\n🔗 Checking for new links:');
    console.log(`   New Link 1: ${blogPost.content.includes(newLink1) ? '✅ FOUND' : '❌ Not found'}`);
    console.log(`   New Link 2: ${blogPost.content.includes(newLink2) ? '✅ FOUND' : '❌ Not found'}`);
    
    // Look for any NDIS links in the content
    const ndisLinks = blogPost.content.match(/https:\/\/www\.ndis\.gov\.au\/[^"'\s]*/g);
    if (ndisLinks) {
      console.log('\n🔗 All NDIS links found in content:');
      ndisLinks.forEach((link, index) => {
        console.log(`   ${index + 1}. ${link}`);
      });
    }
    
    // Look for the specific text patterns
    console.log('\n📝 Looking for link text patterns:');
    const hasYouAreReady = blogPost.content.includes('you are ready');
    const hasNdisWebsite = blogPost.content.includes('NDIS website');
    console.log(`   "you are ready": ${hasYouAreReady ? '✅ FOUND' : '❌ Not found'}`);
    console.log(`   "NDIS website": ${hasNdisWebsite ? '✅ FOUND' : '❌ Not found'}`);
    
  } catch (error) {
    console.error('❌ Error checking post:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the check
checkSpecificPost().catch(console.error);
