const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Link replacements from the CSV
const linkReplacements = [
  {
    blogPost: "A Beginner's Guide to ABN and TFN Registration for Support Providers in Australia",
    oldLink: "https://www.ato.gov.au/Individuals/Tax-file-number/Apply-for-a-TFN/",
    newLink: "https://www.ato.gov.au/individuals-and-families/tax-file-number/what-is-a-tax-file-number",
    linkText: "click here"
  },
  {
    blogPost: "A Beginner's Guide to ABN and TFN Registration for Support Providers in Australia",
    oldLink: "https://www.ato.gov.au/Individuals/Tax-file-number/Identity-documents/",
    newLink: "https://www.ato.gov.au/individuals-and-families/tax-file-number/identity-documents",
    linkText: "ATO's Guide"
  },
  {
    blogPost: "A New Financial Year: Things I wish I did last Financial Year that I will do this one!",
    oldLink: "https://www.ato.gov.au/Business/PAYG-instalments/Starting-PAYG-instalments/",
    newLink: "https://www.ato.gov.au/businesses-and-organisations/income-deductions-and-concessions/payg-instalments/starting-payg-instalments",
    linkText: "PAYG service"
  },
  {
    blogPost: "To Be Or Not To Be An NDIS Registered Provider?",
    oldLink: "https://www.ndis.gov.au/providers/becoming-ndis-provider/am-i-ready",
    newLink: "https://www.ndis.gov.au/providers/becoming-ndis-provider/am-i-ready",
    linkText: "you are ready"
  },
  {
    blogPost: "To Be Or Not To Be An NDIS Registered Provider?",
    oldLink: "https://www.ndis.gov.au/providers/becoming-ndis-provider",
    newLink: "https://www.ndis.gov.au/providers/becoming-ndis-provider",
    linkText: "NDIS website"
  },
  {
    blogPost: "Crafting Your Hourly Rate as an Independent Support Worker",
    oldLink: "https://www.ndis.gov.au/providers/pricing-arrangements#ndis-pricing-arrangements-and-price-limits",
    newLink: "https://www.ndis.gov.au/providers/pricing-arrangements",
    linkText: "NDIS Pricing Arrangements and Price Limits"
  },
  {
    blogPost: "New Financial Year: What to do as an Independent Support Providers.",
    oldLink: "https://www.ndis.gov.au/media/7150/download?",
    newLink: "https://www.ndis.gov.au/providers/pricing-arrangements",
    linkText: "pricing arrangements"
  },
  {
    blogPost: "Stand Out with an Irresistible Profile",
    oldLink: "https://www.canva.com/en_au/",
    newLink: "https://www.canva.com/",
    linkText: "Canva"
  },
  {
    blogPost: "Stand Out with an Irresistible Profile",
    oldLink: "https://chat.openai.com/auth/login",
    newLink: "https://chatgpt.com/",
    linkText: "Chat GPT"
  }
];

async function updateBrokenLinks() {
  try {
    console.log('🔗 Starting broken links update...\n');
    
    let totalUpdates = 0;
    let postsUpdated = 0;
    
    for (const replacement of linkReplacements) {
      console.log(`📝 Processing: ${replacement.blogPost}`);
      console.log(`   Old: ${replacement.oldLink}`);
      console.log(`   New: ${replacement.newLink}`);
      
      // Find the blog post
      const blogPost = await prisma.blogPost.findFirst({
        where: { title: replacement.blogPost },
        select: { id: true, title: true, content: true }
      });
      
      if (!blogPost) {
        console.log(`   ❌ Blog post not found: ${replacement.blogPost}`);
        continue;
      }
      
      // Check if the old link exists in the content
      if (!blogPost.content.includes(replacement.oldLink)) {
        console.log(`   ⚠️  Old link not found in content`);
        continue;
      }
      
      // Replace the link
      const updatedContent = blogPost.content.replace(
        replacement.oldLink,
        replacement.newLink
      );
      
      // Update the blog post
      await prisma.blogPost.update({
        where: { id: blogPost.id },
        data: { content: updatedContent }
      });
      
      console.log(`   ✅ Link updated successfully`);
      totalUpdates++;
      
      // Check if this is a new post being updated
      if (!postsUpdated || linkReplacements[postsUpdated - 1]?.blogPost !== replacement.blogPost) {
        postsUpdated++;
      }
    }
    
    console.log(`\n📊 Update Summary:`);
    console.log(`✅ Total links updated: ${totalUpdates}`);
    console.log(`📝 Posts modified: ${postsUpdated}`);
    console.log(`🔗 Links processed: ${linkReplacements.length}`);
    
    // Verify the updates
    console.log(`\n🔍 Verifying updates...`);
    for (const replacement of linkReplacements) {
      const blogPost = await prisma.blogPost.findFirst({
        where: { title: replacement.blogPost },
        select: { title: true, content: true }
      });
      
      if (blogPost) {
        const hasOldLink = blogPost.content.includes(replacement.oldLink);
        const hasNewLink = blogPost.content.includes(replacement.newLink);
        
        if (hasNewLink && !hasOldLink) {
          console.log(`✅ ${replacement.blogPost}: Link successfully updated`);
        } else if (hasOldLink) {
          console.log(`❌ ${replacement.blogPost}: Old link still present`);
        } else {
          console.log(`⚠️  ${replacement.blogPost}: Neither old nor new link found`);
        }
      }
    }
    
  } catch (error) {
    console.error('❌ Error updating broken links:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the update
updateBrokenLinks().catch(console.error);
