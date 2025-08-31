const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

// Sample blog post data for seeding
const blogPostsData = [
  {
    title: "Getting Started as a Support Provider: Your Complete NDIS Business Guide",
    slug: "getting-started-as-a-support-provider",
    excerpt: "Learn how to start your NDIS support provider business from scratch. Complete guide covering ABN registration, business planning, compliance, and software setup for success.",
    content: "Starting your journey as an NDIS support provider can feel overwhelming...",
    coverImage: "/images/blog/getting-started/hero-image.webp",
    category: "business-setup",
    tags: "NDIS,business setup,support provider,ABN,business planning",
    featured: true,
    published: true,
    publishedAt: new Date("2024-01-15"),
    authorId: null // Will be set to admin user
  },
  {
    title: "ABN and TFN Registration for Support Providers",
    slug: "abn-tfn-registration-support-providers",
    excerpt: "Essential guide to registering your ABN and TFN for NDIS support work. Step-by-step process for business registration and tax compliance.",
    content: "Registering for an Australian Business Number (ABN) and Tax File Number (TFN)...",
    coverImage: "/images/blog/abn-tfn-registration/hero-image.webp",
    category: "business-setup",
    tags: "ABN,TFN,business registration,tax,NDIS",
    featured: false,
    published: true,
    publishedAt: new Date("2024-01-10"),
    authorId: null
  },
  {
    title: "Creating an Effective Business Plan",
    slug: "creating-effective-business-plan",
    excerpt: "Build a comprehensive business plan for your NDIS practice. Strategic planning, market analysis, and financial projections for success.",
    content: "A solid business plan is crucial for NDIS support provider success...",
    coverImage: "/images/blog/business-plan/hero-image.webp",
    category: "business-setup",
    tags: "business plan,strategy,planning,NDIS,business setup",
    featured: true,
    published: true,
    publishedAt: new Date("2024-01-08"),
    authorId: null
  },
  {
    title: "Essential Certifications and Checks",
    slug: "essential-certifications-checks",
    excerpt: "Complete guide to required certifications and background checks for NDIS support providers. Ensure compliance and client safety.",
    content: "NDIS support providers must meet specific certification requirements...",
    coverImage: "/images/blog/certifications/hero-image.webp",
    category: "compliance",
    tags: "certifications,compliance,NDIS,safety,qualifications",
    featured: false,
    published: true,
    publishedAt: new Date("2024-01-05"),
    authorId: null
  },
  {
    title: "Understanding GST for Independent Support Providers",
    slug: "understanding-gst-independent-support-providers",
    excerpt: "Navigate GST requirements for NDIS support work. Tax compliance, registration, and financial management for independent providers.",
    content: "Goods and Services Tax (GST) is a crucial consideration for NDIS providers...",
    coverImage: "/images/blog/gst-guide/hero-image.webp",
    category: "financial",
    tags: "GST,tax,financial,NDIS,business",
    featured: false,
    published: true,
    publishedAt: new Date("2024-01-03"),
    authorId: null
  }
];

async function seedBlogPosts() {
  try {
    console.log('🚀 Seeding Blog Posts to Neon Database...\n');
    
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
      console.log('⚠️  Database already has blog posts. Skipping seeding.');
      return;
    }
    
    // Seed blog posts
    console.log('🌱 Seeding blog posts...');
    const createdPosts = [];
    
    for (const postData of blogPostsData) {
      const post = await prisma.blogPost.create({
        data: {
          ...postData,
          authorId: adminUser.id
        }
      });
      
      createdPosts.push(post);
      console.log(`✅ Created: ${post.title}`);
    }
    
    console.log(`\n🎉 Successfully seeded ${createdPosts.length} blog posts!`);
    console.log('\n📝 Next Steps:');
    console.log('   1. Access admin panel at /admin/blog');
    console.log('   2. Edit and enhance the seeded posts');
    console.log('   3. Add more posts using the admin interface');
    console.log('   4. Migrate remaining content from live site');
    
  } catch (error) {
    console.error('❌ Error seeding blog posts:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedBlogPosts();
