const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Expected final state after updates
const expectedUpdates = [
  {
    blogPost: "A Beginner's Guide to ABN and TFN Registration for Support Providers in Australia",
    shouldHave: "https://www.ato.gov.au/individuals-and-families/tax-file-number/what-is-a-tax-file-number",
    shouldNotHave: "https://www.ato.gov.au/Individuals/Tax-file-number/Apply-for-a-TFN/"
  },
  {
    blogPost: "A Beginner's Guide to ABN and TFN Registration for Support Providers in Australia",
    shouldHave: "https://www.ato.gov.au/individuals-and-families/tax-file-number/identity-documents",
    shouldNotHave: "https://www.ato.gov.au/Individuals/Tax-file-number/Identity-documents/"
  },
  {
    blogPost: "A New Financial Year: Things I wish I did last Financial Year that I will do this one!",
    shouldHave: "https://www.ato.gov.au/businesses-and-organisations/income-deductions-and-concessions/payg-instalments/starting-payg-instalments",
    shouldNotHave: "https://www.ato.gov.au/Business/PAYG-instalments/Starting-PAYG-instalments/"
  },
  {
    blogPost: "Crafting Your Hourly Rate as an Independent Support Worker",
    shouldHave: "https://www.ndis.gov.au/providers/pricing-arrangements",
    shouldNotHave: "https://www.ndis.gov.au/providers/pricing-arrangements#ndis-pricing-arrangements-and-price-limits"
  },
  {
    blogPost: "New Financial Year: What to do as an Independent Support Providers.",
    shouldHave: "https://www.ndis.gov.au/providers/pricing-arrangements",
    shouldNotHave: "https://www.ndis.gov.au/media/7150/download?"
  },
  {
    blogPost: "Stand Out with an Irresistible Profile",
    shouldHave: "https://www.canva.com/",
    shouldNotHave: "https://www.canva.com/en_au/"
  },
  {
    blogPost: "Stand Out with an Irresistible Profile",
    shouldHave: "https://chatgpt.com/",
    shouldNotHave: "https://chat.openai.com/auth/login"
  }
];

async function verifyLinkUpdates() {
  try {
    console.log('🔍 Verifying all link updates...\n');
    
    let allCorrect = true;
    
    for (const update of expectedUpdates) {
      console.log(`📝 Checking: ${update.blogPost}`);
      
      const blogPost = await prisma.blogPost.findFirst({
        where: { title: update.blogPost },
        select: { title: true, content: true }
      });
      
      if (!blogPost) {
        console.log(`   ❌ Post not found`);
        allCorrect = false;
        continue;
      }
      
      const hasNewLink = blogPost.content.includes(update.shouldHave);
      const hasOldLink = blogPost.content.includes(update.shouldNotHave);
      
      if (hasNewLink && !hasOldLink) {
        console.log(`   ✅ Link correctly updated`);
      } else if (hasOldLink) {
        console.log(`   ❌ Old link still present: ${update.shouldNotHave}`);
        allCorrect = false;
      } else if (!hasNewLink) {
        console.log(`   ❌ New link not found: ${update.shouldHave}`);
        allCorrect = false;
      } else {
        console.log(`   ⚠️  Unexpected state`);
        allCorrect = false;
      }
    }
    
    console.log(`\n📊 Verification Summary:`);
    if (allCorrect) {
      console.log(`✅ All 9 links have been successfully updated!`);
      console.log(`🎉 Broken links fix completed successfully`);
    } else {
      console.log(`❌ Some links may need manual review`);
    }
    
    // Check for remaining broken links from the original audit
    console.log(`\n🔗 Checking for remaining broken links...`);
    const remainingBrokenLinks = [
      "https://www.skillsready.com.au/disability-support",
      "https://www.open.edu/openlearn/health-sports-psychology/health/introduction-autism-spectrum-disorders/content-section-0",
      "https://mhfaengland.org/mhfa-centre/courses/"
    ];
    
    let remainingCount = 0;
    for (const brokenLink of remainingBrokenLinks) {
      const posts = await prisma.blogPost.findMany({
        where: {
          content: {
            contains: brokenLink
          }
        },
        select: { title: true }
      });
      
      if (posts.length > 0) {
        console.log(`   ⚠️  Still contains: ${brokenLink}`);
        posts.forEach(post => console.log(`      - ${post.title}`));
        remainingCount++;
      }
    }
    
    if (remainingCount === 0) {
      console.log(`   ✅ No remaining broken links found`);
    } else {
      console.log(`   📝 ${remainingCount} broken links still need manual attention`);
    }
    
  } catch (error) {
    console.error('❌ Error verifying updates:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the verification
verifyLinkUpdates().catch(console.error);
