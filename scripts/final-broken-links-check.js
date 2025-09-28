const { PrismaClient } = require('@prisma/client');
const axios = require('axios');

const prisma = new PrismaClient();

// All the original broken links from the SEO audit
const originalBrokenLinks = [
  {
    url: "https://www.ato.gov.au/Individuals/Tax-file-number/Apply-for-a-TFN/",
    blogPost: "A Beginner's Guide to ABN and TFN Registration for Support Providers in Australia",
    text: "click here"
  },
  {
    url: "https://www.ato.gov.au/Individuals/Tax-file-number/Identity-documents/",
    blogPost: "A Beginner's Guide to ABN and TFN Registration for Support Providers in Australia",
    text: "ATO's Guide"
  },
  {
    url: "https://www.ato.gov.au/Business/PAYG-instalments/Starting-PAYG-instalments/",
    blogPost: "A New Financial Year: Things I wish I did last Financial Year that I will do this one!",
    text: "PAYG service"
  },
  {
    url: "https://www.ndis.gov.au/providers/becoming-ndis-provider/am-i-ready",
    blogPost: "To Be Or Not To Be An NDIS Registered Provider?",
    text: "you are ready"
  },
  {
    url: "https://www.ndis.gov.au/providers/becoming-ndis-provider",
    blogPost: "To Be Or Not To Be An NDIS Registered Provider?",
    text: "NDIS website"
  },
  {
    url: "https://www.ndis.gov.au/providers/pricing-arrangements#ndis-pricing-arrangements-and-price-limits",
    blogPost: "Crafting Your Hourly Rate as an Independent Support Worker",
    text: "NDIS Pricing Arrangements and Price Limits"
  },
  {
    url: "https://www.ndis.gov.au/media/7150/download?",
    blogPost: "New Financial Year: What to do as an Independent Support Providers.",
    text: "pricing arrangements"
  },
  {
    url: "https://www.canva.com/en_au/",
    blogPost: "Stand Out with an Irresistible Profile",
    text: "Canva"
  },
  {
    url: "https://chat.openai.com/auth/login",
    blogPost: "Stand Out with an Irresistible Profile",
    text: "Chat GPT"
  },
  {
    url: "https://www.skillsready.com.au/disability-support",
    blogPost: "NDIS Independent Support Workers: Qualifications and Online Courses",
    text: "Skills Ready - Disability Support"
  },
  {
    url: "https://www.open.edu/openlearn/health-sports-psychology/health/introduction-autism-spectrum-disorders/content-section-0",
    blogPost: "NDIS Independent Support Workers: Qualifications and Online Courses",
    text: "Autism Awareness - OpenLearn"
  },
  {
    url: "https://mhfaengland.org/mhfa-centre/courses/",
    blogPost: "NDIS Independent Support Workers: Qualifications and Online Courses",
    text: "Mental Health First Aid - MHFA England"
  }
];

// Function to check if a link is working
async function checkLink(url) {
  try {
    // Skip mailto and tel links
    if (url.startsWith('mailto:') || url.startsWith('tel:')) {
      return { status: 'skipped', reason: 'Protocol not checkable' };
    }
    
    // Handle relative URLs
    if (url.startsWith('/')) {
      url = `https://www.bugal.com.au${url}`;
    }
    
    const response = await axios.head(url, { 
      timeout: 5000,
      maxRedirects: 5,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SEO-Audit-Bot/1.0)'
      }
    });
    
    return { 
      status: response.status >= 200 && response.status < 400 ? 'ok' : 'error',
      statusCode: response.status
    };
  } catch (error) {
    return { 
      status: 'error', 
      reason: error.message,
      statusCode: error.response?.status || 'unknown'
    };
  }
}

async function finalBrokenLinksCheck() {
  try {
    console.log('🔍 Running final broken links check...\n');
    
    // First, check if the original broken links still exist in content
    console.log('📝 Checking for original broken links in content...');
    let foundOriginalLinks = 0;
    
    for (const link of originalBrokenLinks) {
      const blogPost = await prisma.blogPost.findFirst({
        where: { title: link.blogPost },
        select: { title: true, content: true }
      });
      
      if (blogPost && blogPost.content.includes(link.url)) {
        console.log(`❌ Found original broken link: ${link.url}`);
        console.log(`   In post: ${link.blogPost}`);
        console.log(`   Text: "${link.text}"`);
        foundOriginalLinks++;
      }
    }
    
    if (foundOriginalLinks === 0) {
      console.log('✅ No original broken links found in content!');
    } else {
      console.log(`⚠️  Found ${foundOriginalLinks} original broken links still in content`);
    }
    
    // Now check all current links in all blog posts
    console.log('\n🔗 Checking all current links in blog posts...');
    
    const allBlogPosts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { id: true, title: true, content: true }
    });
    
    console.log(`📊 Checking links in ${allBlogPosts.length} published blog posts...\n`);
    
    let totalLinks = 0;
    let brokenLinks = [];
    let workingLinks = 0;
    
    for (const post of allBlogPosts) {
      // Extract all links from the content
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
        console.log(`📝 ${post.title}: ${links.length} links found`);
        
        for (const link of links) {
          totalLinks++;
          const linkCheck = await checkLink(link.url);
          
          if (linkCheck.status === 'ok') {
            workingLinks++;
            console.log(`   ✅ ${link.url} (${link.text})`);
          } else {
            brokenLinks.push({
              post: post.title,
              url: link.url,
              text: link.text,
              error: linkCheck.reason || `HTTP ${linkCheck.statusCode}`
            });
            console.log(`   ❌ ${link.url} (${link.text}) - ${linkCheck.reason || linkCheck.statusCode}`);
          }
          
          // Small delay to avoid overwhelming servers
          await new Promise(resolve => setTimeout(resolve, 200));
        }
        console.log('');
      }
    }
    
    // Summary
    console.log('📊 FINAL BROKEN LINKS CHECK RESULTS');
    console.log('='.repeat(50));
    console.log(`📝 Total blog posts checked: ${allBlogPosts.length}`);
    console.log(`🔗 Total links found: ${totalLinks}`);
    console.log(`✅ Working links: ${workingLinks}`);
    console.log(`❌ Broken links: ${brokenLinks.length}`);
    
    if (brokenLinks.length === 0) {
      console.log('\n🎉 SUCCESS! All links are working correctly!');
      console.log('✅ No broken links found in any blog post');
      console.log('🚀 Your blog is now SEO-optimized for links');
    } else {
      console.log('\n⚠️  BROKEN LINKS FOUND:');
      brokenLinks.forEach((link, index) => {
        console.log(`\n${index + 1}. ${link.post}`);
        console.log(`   URL: ${link.url}`);
        console.log(`   Text: "${link.text}"`);
        console.log(`   Error: ${link.error}`);
      });
    }
    
    // Check for any remaining original broken links
    if (foundOriginalLinks === 0 && brokenLinks.length === 0) {
      console.log('\n🏆 PERFECT! All broken links have been successfully fixed!');
      console.log('📈 Your SEO audit is now complete for the links section');
    }
    
  } catch (error) {
    console.error('❌ Error during final check:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the final check
finalBrokenLinksCheck().catch(console.error);
