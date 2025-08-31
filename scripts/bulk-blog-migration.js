const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

// All 35 blog posts from the live bugal.com.au site
const liveBlogPosts = [
  {
    title: "The Essentials of Invoicing for Support Providers: Ensuring Prompt Payment",
    slug: "essentials-invoicing-support-providers-prompt-payment",
    excerpt: "Learn the essential invoicing practices that ensure prompt payment for your NDIS support services. Master professional invoicing techniques and payment follow-up strategies.",
    category: "financial",
    tags: "invoicing, payment, NDIS, support providers, financial management",
    featured: false,
    published: false,
    publishedAt: new Date("2024-01-15"),
    coverImage: "/images/blog/invoicing-essentials/hero-image.webp"
  },
  {
    title: "Essential Steps for Preparing Your Financial Year Information as an Independent Support Provider",
    slug: "essential-steps-preparing-financial-year-information",
    excerpt: "Complete guide to preparing your financial year information as an independent support provider. Essential steps for tax compliance and financial planning.",
    category: "financial",
    tags: "financial year, tax preparation, NDIS, support providers, financial planning",
    featured: false,
    published: false,
    publishedAt: new Date("2024-01-10"),
    coverImage: "/images/blog/financial-year-preparation/hero-image.webp"
  },
  {
    title: "New Financial Year: What to Do as an Independent Support Provider",
    slug: "new-financial-year-independent-support-providers",
    excerpt: "Start your new financial year right as an independent support provider. Essential tasks, planning strategies, and compliance requirements for success.",
    category: "financial",
    tags: "new financial year, planning, NDIS, support providers, financial management",
    featured: false,
    published: false,
    publishedAt: new Date("2024-01-08"),
    coverImage: "/images/blog/new-financial-year/hero-image.webp"
  },
  {
    title: "Celebrating Milestones and Achievements in Your Independent Support Worker Journey",
    slug: "celebrating-milestones-achievements-support-worker-journey",
    excerpt: "Recognize and celebrate the important milestones in your independent support worker journey. Building confidence and motivation for continued success.",
    category: "tips",
    tags: "milestones, achievements, support workers, motivation, career development",
    featured: false,
    published: false,
    publishedAt: new Date("2024-01-05"),
    coverImage: "/images/blog/milestones-achievements/hero-image.webp"
  },
  {
    title: "NDIS Review: What It Means for Independent Support Workers",
    slug: "ndis-review-independent-support-workers",
    excerpt: "Understanding the NDIS review and its implications for independent support workers. Key changes, opportunities, and preparation strategies.",
    category: "ndis",
    tags: "NDIS review, policy changes, support workers, compliance, opportunities",
    featured: false,
    published: false,
    publishedAt: new Date("2024-01-03"),
    coverImage: "/images/blog/ndis-review/hero-image.webp"
  },
  {
    title: "Preparing Your Independent Support Worker Business for the End of the Financial Year",
    slug: "preparing-support-worker-business-end-financial-year",
    excerpt: "Essential preparation steps for independent support workers as the financial year ends. Tax planning, compliance, and business optimization strategies.",
    category: "financial",
    tags: "end of financial year, tax planning, business preparation, NDIS, support workers",
    featured: false,
    published: false,
    publishedAt: new Date("2024-01-01"),
    coverImage: "/images/blog/end-financial-year/hero-image.webp"
  },
  {
    title: "2024 Federal Budget: What Independent Support Workers Need to Know",
    slug: "2024-federal-budget-independent-support-workers",
    excerpt: "Key insights from the 2024 Federal Budget that affect independent support workers. Understanding changes and planning for the future.",
    category: "compliance",
    tags: "federal budget, 2024, policy changes, support workers, planning",
    featured: false,
    published: false,
    publishedAt: new Date("2023-12-28"),
    coverImage: "/images/blog/federal-budget-2024/hero-image.webp"
  },
  {
    title: "The Wedding Tax: Ethical Pricing Practices for NDIS Service Providers",
    slug: "wedding-tax-ethical-pricing-practices-ndis-providers",
    excerpt: "Understanding ethical pricing practices for NDIS service providers, including the 'wedding tax' concept and fair pricing strategies.",
    category: "practice",
    tags: "pricing, ethics, NDIS, service providers, fair pricing",
    featured: false,
    published: false,
    publishedAt: new Date("2023-12-25"),
    coverImage: "/images/blog/wedding-tax-ethical-pricing/hero-image.webp"
  },
  {
    title: "The Ethical Landscape of NDIS Independent Support Work: Principles and Best Practices",
    slug: "ethical-landscape-ndis-independent-support-work",
    excerpt: "Explore the ethical principles and best practices for NDIS independent support work. Building trust and maintaining professional standards.",
    category: "compliance",
    tags: "ethics, NDIS, support work, professional standards, best practices",
    featured: false,
    published: false,
    publishedAt: new Date("2023-12-22"),
    coverImage: "/images/blog/ethical-landscape/hero-image.webp"
  },
  {
    title: "Innovative Ways to Market Your NDIS Independent Support Services",
    slug: "innovative-ways-market-ndis-independent-support-services",
    excerpt: "Discover innovative marketing strategies for your NDIS independent support services. Stand out in a competitive market and attract quality clients.",
    category: "marketing",
    tags: "marketing, NDIS, support services, innovation, client attraction",
    featured: false,
    published: false,
    publishedAt: new Date("2023-12-20"),
    coverImage: "/images/blog/innovative-marketing/hero-image.webp"
  },
  {
    title: "Share the Love with Bugal's Refer & Earn Program",
    slug: "share-love-bugals-refer-earn-program",
    excerpt: "Learn about Bugal's Refer & Earn program and how you can benefit from sharing our platform with other support providers.",
    category: "tips",
    tags: "referral program, Bugal, support providers, rewards, community",
    featured: false,
    published: false,
    publishedAt: new Date("2023-12-18"),
    coverImage: "/images/blog/refer-earn-program/hero-image.webp"
  },
  {
    title: "Creating an Effective Business Plan for Your NDIS Independent Support Business",
    slug: "creating-effective-business-plan-ndis-independent-support-business",
    excerpt: "Step-by-step guide to creating an effective business plan for your NDIS independent support business. Strategic planning for success.",
    category: "business-setup",
    tags: "business plan, NDIS, support business, strategic planning, success",
    featured: true,
    published: false,
    publishedAt: new Date("2023-12-15"),
    coverImage: "/images/blog/effective-business-plan/hero-image.webp"
  },
  {
    title: "Time Management Tips for NDIS Independent Support Workers",
    slug: "time-management-tips-ndis-independent-support-workers",
    excerpt: "Essential time management tips for NDIS independent support workers. Maximize productivity and maintain work-life balance.",
    category: "tips",
    tags: "time management, productivity, support workers, work-life balance, efficiency",
    featured: false,
    published: false,
    publishedAt: new Date("2023-12-12"),
    coverImage: "/images/blog/time-management-tips/hero-image.webp"
  },
  {
    title: "The Vitality of Self-Care: A Guide for NDIS Independent Support Workers",
    slug: "vitality-self-care-guide-ndis-independent-support-workers",
    excerpt: "Comprehensive guide to self-care for NDIS independent support workers. Maintaining physical and mental health for sustainable success.",
    category: "tips",
    tags: "self-care, mental health, support workers, sustainability, wellness",
    featured: false,
    published: false,
    publishedAt: new Date("2023-12-10"),
    coverImage: "/images/blog/self-care-guide/hero-image.webp"
  },
  {
    title: "Top 10 Tips for Managing Your NDIS Independent Support Business Finances",
    slug: "top-10-tips-managing-ndis-independent-support-business-finances",
    excerpt: "Essential financial management tips for NDIS independent support businesses. Build financial stability and business growth.",
    category: "financial",
    tags: "financial management, business finances, NDIS, support business, growth",
    featured: false,
    published: false,
    publishedAt: new Date("2023-12-08"),
    coverImage: "/images/blog/financial-management-tips/hero-image.webp"
  },
  {
    title: "Crafting Your Hourly Rate as an Independent Support Worker",
    slug: "crafting-hourly-rate-independent-support-worker",
    excerpt: "Strategic guide to crafting your hourly rate as an independent support worker. Pricing strategies for fair compensation and business success.",
    category: "practice",
    tags: "hourly rate, pricing, support workers, compensation, business strategy",
    featured: false,
    published: false,
    publishedAt: new Date("2023-12-05"),
    coverImage: "/images/blog/crafting-hourly-rate/hero-image.webp"
  },
  {
    title: "NDIS Independent Support Workers: Qualifications and Online Courses",
    slug: "ndis-independent-support-workers-qualifications-online-courses",
    excerpt: "Essential qualifications and online courses for NDIS independent support workers. Building skills and professional development.",
    category: "compliance",
    tags: "qualifications, online courses, NDIS, support workers, professional development",
    featured: false,
    published: false,
    publishedAt: new Date("2023-12-03"),
    coverImage: "/images/blog/qualifications-online-courses/hero-image.webp"
  },
  {
    title: "The Bugal Starting Out Series for Independent Support Providers",
    slug: "bugal-starting-out-series-independent-support-providers",
    excerpt: "Comprehensive starting out series for independent support providers. Essential knowledge and resources for new NDIS practitioners.",
    category: "business-setup",
    tags: "starting out, support providers, NDIS, resources, new practitioners",
    featured: true,
    published: false,
    publishedAt: new Date("2023-12-01"),
    coverImage: "/images/blog/starting-out-series/hero-image.webp"
  },
  {
    title: "Setting the Foundation for a Thriving Support Business: Planning for Growth",
    slug: "setting-foundation-thriving-support-business-planning-growth",
    excerpt: "Build a strong foundation for your support business with strategic planning for growth. Long-term success strategies for NDIS practitioners.",
    category: "business-setup",
    tags: "business foundation, growth planning, support business, NDIS, long-term success",
    featured: false,
    published: false,
    publishedAt: new Date("2023-11-28"),
    coverImage: "/images/blog/business-foundation-growth/hero-image.webp"
  },
  {
    title: "Superannuation for Independent Support Providers: Your Financial Lifeline",
    slug: "superannuation-independent-support-providers-financial-lifeline",
    excerpt: "Essential guide to superannuation for independent support providers. Secure your financial future and retirement planning.",
    category: "financial",
    tags: "superannuation, retirement planning, support providers, financial security, future planning",
    featured: false,
    published: false,
    publishedAt: new Date("2023-11-25"),
    coverImage: "/images/blog/superannuation-guide/hero-image.webp"
  },
  {
    title: "Mastering Your Schedule: A Guide for Independent Support Workers",
    slug: "mastering-schedule-guide-independent-support-workers",
    excerpt: "Master your schedule as an independent support worker. Effective time management and scheduling strategies for optimal productivity.",
    category: "tips",
    tags: "schedule management, time management, support workers, productivity, organization",
    featured: false,
    published: false,
    publishedAt: new Date("2023-11-22"),
    coverImage: "/images/blog/mastering-schedule/hero-image.webp"
  },
  {
    title: "The Importance of the NDIS Quality and Safeguards Commission's eLearning Modules",
    slug: "importance-ndis-quality-safeguards-commission-elearning-modules",
    excerpt: "Understanding the importance of NDIS Quality and Safeguards Commission eLearning modules. Essential training for compliance and quality service delivery.",
    category: "compliance",
    tags: "NDIS quality, safeguards commission, eLearning, compliance, training",
    featured: false,
    published: false,
    publishedAt: new Date("2023-11-20"),
    coverImage: "/images/blog/ndis-elearning-modules/hero-image.webp"
  },
  {
    title: "Essential Certifications and Checks for Independent Support Workers",
    slug: "essential-certifications-checks-independent-support-workers",
    excerpt: "Complete guide to essential certifications and checks for independent support workers. Meeting NDIS requirements and building client trust.",
    category: "compliance",
    tags: "certifications, background checks, NDIS requirements, support workers, compliance",
    featured: false,
    published: false,
    publishedAt: new Date("2023-11-18"),
    coverImage: "/images/blog/essential-certifications/hero-image.webp"
  },
  {
    title: "Understanding GST for Independent Support Providers in the NDIS",
    slug: "understanding-gst-independent-support-providers-ndis",
    excerpt: "Comprehensive guide to understanding GST for independent support providers in the NDIS. Tax compliance and financial management.",
    category: "financial",
    tags: "GST, tax compliance, NDIS, support providers, financial management",
    featured: false,
    published: false,
    publishedAt: new Date("2023-11-15"),
    coverImage: "/images/blog/understanding-gst/hero-image.webp"
  },
  {
    title: "The Importance of Being Insured",
    slug: "importance-being-insured",
    excerpt: "Why insurance is crucial for independent support providers. Protecting your business and providing peace of mind for clients.",
    category: "compliance",
    tags: "insurance, protection, support providers, risk management, client trust",
    featured: false,
    published: false,
    publishedAt: new Date("2023-11-12"),
    coverImage: "/images/blog/importance-insurance/hero-image.webp"
  },
  {
    title: "Unlocking the Power of Social Media: Finding Clients as an Independent Support Worker",
    slug: "unlocking-power-social-media-finding-clients-independent-support-worker",
    excerpt: "Harness the power of social media to find clients as an independent support worker. Effective marketing strategies for the digital age.",
    category: "marketing",
    tags: "social media, client acquisition, marketing, support workers, digital marketing",
    featured: false,
    published: false,
    publishedAt: new Date("2023-11-10"),
    coverImage: "/images/blog/social-media-marketing/hero-image.webp"
  },
  {
    title: "Empowering Independent Support Providers: Why Choose Bugal as Your Software Provider",
    slug: "empowering-independent-support-providers-choose-bugal-software-provider",
    excerpt: "Discover why Bugal is the preferred software provider for independent support providers. Features, benefits, and success stories.",
    category: "technology",
    tags: "Bugal software, support providers, technology, features, benefits",
    featured: true,
    published: false,
    publishedAt: new Date("2023-11-08"),
    coverImage: "/images/blog/choose-bugal-software/hero-image.webp"
  },
  {
    title: "Crafting a Comprehensive Service Agreement for Support Providers and NDIS Participants",
    slug: "crafting-comprehensive-service-agreement-support-providers-ndis-participants",
    excerpt: "Essential guide to crafting comprehensive service agreements for support providers and NDIS participants. Legal protection and clear expectations.",
    category: "compliance",
    tags: "service agreements, legal protection, NDIS participants, support providers, compliance",
    featured: false,
    published: false,
    publishedAt: new Date("2023-11-05"),
    coverImage: "/images/blog/service-agreements/hero-image.webp"
  },
  {
    title: "Stand Out with an Irresistible Profile",
    slug: "stand-out-irresistible-profile",
    excerpt: "Create an irresistible profile that stands out in the NDIS marketplace. Attract quality clients and build your professional reputation.",
    category: "marketing",
    tags: "profile creation, marketing, NDIS marketplace, client attraction, professional reputation",
    featured: false,
    published: false,
    publishedAt: new Date("2023-11-03"),
    coverImage: "/images/blog/irresistible-profile/hero-image.webp"
  },
  {
    title: "Guide to Becoming an NDIS Registered Provider",
    slug: "guide-becoming-ndis-registered-provider",
    excerpt: "Step-by-step guide to becoming an NDIS registered provider. Registration process, requirements, and benefits for support workers.",
    category: "compliance",
    tags: "NDIS registration, provider registration, compliance, requirements, benefits",
    featured: false,
    published: false,
    publishedAt: new Date("2023-11-01"),
    coverImage: "/images/blog/ndis-registration-guide/hero-image.webp"
  },
  {
    title: "To Be or Not to Be an NDIS Registered Provider",
    slug: "to-be-or-not-to-be-ndis-registered-provider",
    excerpt: "Weighing the pros and cons of becoming an NDIS registered provider. Making informed decisions for your support work business.",
    category: "compliance",
    tags: "NDIS registration, decision making, support work, business strategy, pros and cons",
    featured: false,
    published: false,
    publishedAt: new Date("2023-10-30"),
    coverImage: "/images/blog/ndis-registration-decision/hero-image.webp"
  },
  {
    title: "Make Your Business Flow",
    slug: "make-your-business-flow",
    excerpt: "Optimize your support work business for smooth operations and increased efficiency. Streamlining processes for better client service.",
    category: "practice",
    tags: "business optimization, efficiency, process improvement, client service, operations",
    featured: false,
    published: false,
    publishedAt: new Date("2023-10-28"),
    coverImage: "/images/blog/business-flow-optimization/hero-image.webp"
  },
  {
    title: "How to Start Independent Support Provider",
    slug: "how-start-independent-support-provider",
    excerpt: "Complete guide to starting as an independent support provider. Essential steps, requirements, and strategies for success.",
    category: "business-setup",
    tags: "starting out, independent support provider, business setup, requirements, success strategies",
    featured: true,
    published: false,
    publishedAt: new Date("2023-10-25"),
    coverImage: "/images/blog/start-independent-support-provider/hero-image.webp"
  },
  {
    title: "Getting Started as a Support Provider",
    slug: "getting-started-support-provider",
    excerpt: "Essential guide to getting started as a support provider. Building your foundation for a successful NDIS practice.",
    category: "business-setup",
    tags: "getting started, support provider, NDIS practice, foundation building, success",
    featured: true,
    published: false,
    publishedAt: new Date("2023-10-22"),
    coverImage: "/images/blog/getting-started-support-provider/hero-image.webp"
  },
  {
    title: "New Financial Year",
    slug: "new-financial-year",
    excerpt: "Prepare for the new financial year as an independent support provider. Essential planning and compliance tasks for success.",
    category: "financial",
    tags: "new financial year, planning, compliance, support providers, financial management",
    featured: false,
    published: false,
    publishedAt: new Date("2023-10-20"),
    coverImage: "/images/blog/new-financial-year-planning/hero-image.webp"
  },
  {
    title: "Sole Trader or Partnership or Company",
    slug: "sole-trader-partnership-company",
    excerpt: "Choosing the right business structure for your NDIS support work. Comparing sole trader, partnership, and company options.",
    category: "business-setup",
    tags: "business structure, sole trader, partnership, company, NDIS, support work",
    featured: false,
    published: false,
    publishedAt: new Date("2023-10-18"),
    coverImage: "/images/blog/business-structure-options/hero-image.webp"
  },
  {
    title: "ABN and TFN Registration for Support Providers in Australia",
    slug: "abn-tfn-registration-support-providers-australia",
    excerpt: "Complete guide to ABN and TFN registration for support providers in Australia. Essential business setup requirements.",
    category: "business-setup",
    tags: "ABN, TFN, registration, support providers, Australia, business setup",
    featured: false,
    published: false,
    publishedAt: new Date("2023-10-15"),
    coverImage: "/images/blog/abn-tfn-registration/hero-image.webp"
  }
];

async function migrateAllBlogPosts() {
  try {
    console.log('🚀 Starting Bulk Blog Post Migration for All 35 Posts\n');
    console.log('=' .repeat(60));
    
    // Test database connection
    console.log('🔌 Testing database connection...');
    await prisma.$connect();
    console.log('✅ Database connection successful');
    
    // Get admin user for authorId
    console.log('👤 Finding admin user...');
    const adminUser = await prisma.adminUser.findFirst({
      where: { role: 'admin' }
    });
    
    if (!adminUser) {
      console.log('❌ No admin user found. Please create one first.');
      return;
    }
    
    console.log('✅ Admin user found:', adminUser.email);
    
    // Check existing blog posts
    const existingPosts = await prisma.blogPost.count();
    console.log(`📊 Existing blog posts: ${existingPosts}`);
    
    if (existingPosts > 0) {
      console.log('⚠️  Database already has blog posts. Checking for duplicates...');
    }
    
    // Migrate all blog posts
    console.log('\n🌱 Starting migration of 35 blog posts...');
    const createdPosts = [];
    const skippedPosts = [];
    const errorPosts = [];
    
    for (const [index, postData] of liveBlogPosts.entries()) {
      try {
        console.log(`\n📝 Processing ${index + 1}/35: ${postData.title}`);
        
        // Check if post already exists
        const existingPost = await prisma.blogPost.findFirst({
          where: { slug: postData.slug }
        });
        
        if (existingPost) {
          console.log(`   ⚠️  Post already exists with slug: ${postData.slug}`);
          skippedPosts.push(postData.title);
          continue;
        }
        
        // Create the blog post
        const post = await prisma.blogPost.create({
          data: {
            ...postData,
            authorId: adminUser.id,
            content: `# ${postData.title}\n\nThis is a placeholder content for the blog post "${postData.title}". The full content will be migrated from the live site.\n\n**Category:** ${postData.category}\n**Tags:** ${postData.tags}\n\n**Note:** This is a migration placeholder. Please update with full content from the live site.`
          }
        });
        
        createdPosts.push(post);
        console.log(`   ✅ Created: ${post.title}`);
        
      } catch (error) {
        console.error(`   ❌ Error creating post: ${error.message}`);
        errorPosts.push({ title: postData.title, error: error.message });
      }
    }
    
    // Summary
    console.log('\n🎉 Bulk Migration Complete!');
    console.log('=' .repeat(60));
    console.log(`📊 Migration Summary:`);
    console.log(`   • Total Posts: ${liveBlogPosts.length}`);
    console.log(`   • Successfully Created: ${createdPosts.length}`);
    console.log(`   • Skipped (Already Exist): ${skippedPosts.length}`);
    console.log(`   • Errors: ${errorPosts.length}`);
    
    if (createdPosts.length > 0) {
      console.log('\n✅ Successfully Created Posts:');
      createdPosts.forEach(post => {
        console.log(`   • ${post.title}`);
      });
    }
    
    if (skippedPosts.length > 0) {
      console.log('\n⚠️  Skipped Posts (Already Exist):');
      skippedPosts.forEach(title => {
        console.log(`   • ${title}`);
      });
    }
    
    if (errorPosts.length > 0) {
      console.log('\n❌ Posts with Errors:');
      errorPosts.forEach(({ title, error }) => {
        console.log(`   • ${title}: ${error}`);
      });
    }
    
    console.log('\n📝 Next Steps:');
    console.log('   1. Review all created posts in admin panel');
    console.log('   2. Migrate full content from live site');
    console.log('   3. Add images and optimize SEO metadata');
    console.log('   4. Publish posts when ready');
    console.log('   5. Test blog functionality');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the migration
if (require.main === module) {
  migrateAllBlogPosts();
}

module.exports = {
  liveBlogPosts,
  migrateAllBlogPosts
};
