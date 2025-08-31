const fs = require('fs');
const path = require('path');

// List of all 35 blog posts from the live site
const blogPosts = [
  {
    title: "Getting Started as a Support Provider",
    slug: "getting-started-as-a-support-provider",
    category: "Business Setup",
    tags: ["NDIS", "business setup", "support provider", "ABN", "business planning"],
    featured: true,
    priority: 1
  },
  {
    title: "ABN and TFN Registration for Support Providers",
    slug: "abn-tfn-registration-support-providers",
    category: "Business Setup",
    tags: ["ABN", "TFN", "business registration", "tax", "NDIS"],
    featured: false,
    priority: 1
  },
  {
    title: "Creating an Effective Business Plan",
    slug: "creating-effective-business-plan",
    category: "Business Setup",
    tags: ["business plan", "strategy", "planning", "NDIS", "business setup"],
    featured: true,
    priority: 1
  },
  {
    title: "Essential Certifications and Checks",
    slug: "essential-certifications-checks",
    category: "Compliance",
    tags: ["certifications", "compliance", "NDIS", "safety", "qualifications"],
    featured: false,
    priority: 2
  },
  {
    title: "Understanding GST for Independent Support Providers",
    slug: "understanding-gst-independent-support-providers",
    category: "Financial",
    tags: ["GST", "tax", "financial", "NDIS", "business"],
    featured: false,
    priority: 2
  },
  {
    title: "The Importance of Being Insured",
    slug: "importance-being-insured",
    category: "Compliance",
    tags: ["insurance", "compliance", "risk management", "NDIS", "protection"],
    featured: false,
    priority: 2
  },
  {
    title: "Time Management Strategies for Support Workers",
    slug: "time-management-strategies-support-workers",
    category: "Operations",
    tags: ["time management", "productivity", "efficiency", "NDIS", "workflow"],
    featured: false,
    priority: 2
  },
  {
    title: "Financial Management for NDIS Support Workers",
    slug: "financial-management-ndis-support-workers",
    category: "Financial",
    tags: ["financial management", "budgeting", "expenses", "NDIS", "business"],
    featured: true,
    priority: 1
  },
  {
    title: "NDIS Compliance Checklist for 2025",
    slug: "ndis-compliance-checklist-2025",
    category: "Compliance",
    tags: ["compliance", "NDIS", "checklist", "2025", "requirements"],
    featured: true,
    priority: 1
  },
  {
    title: "Marketing Your NDIS Services",
    slug: "marketing-ndis-services",
    category: "Marketing",
    tags: ["marketing", "client acquisition", "branding", "NDIS", "business growth"],
    featured: false,
    priority: 3
  },
  {
    title: "Client Relationship Management",
    slug: "client-relationship-management",
    category: "Operations",
    tags: ["client management", "relationships", "communication", "NDIS", "service quality"],
    featured: false,
    priority: 3
  },
  {
    title: "Digital Tools for NDIS Providers",
    slug: "digital-tools-ndis-providers",
    category: "Technology",
    tags: ["digital tools", "software", "automation", "NDIS", "efficiency"],
    featured: true,
    priority: 1
  },
  {
    title: "Superannuation for Independent Support Providers",
    slug: "superannuation-independent-support-providers",
    category: "Financial",
    tags: ["superannuation", "retirement", "financial planning", "NDIS", "business"],
    featured: false,
    priority: 2
  },
  {
    title: "Business Structure Options",
    slug: "business-structure-options",
    category: "Business Setup",
    tags: ["business structure", "sole trader", "partnership", "company", "NDIS"],
    featured: false,
    priority: 2
  },
  {
    title: "NDIS Pricing and Rate Setting",
    slug: "ndis-pricing-rate-setting",
    category: "Financial",
    tags: ["pricing", "rates", "NDIS", "financial", "business strategy"],
    featured: false,
    priority: 2
  },
  {
    title: "Quality Assurance in NDIS Services",
    slug: "quality-assurance-ndis-services",
    category: "Compliance",
    tags: ["quality assurance", "standards", "compliance", "NDIS", "service quality"],
    featured: false,
    priority: 3
  },
  {
    title: "Building a Support Network",
    slug: "building-support-network",
    category: "Marketing",
    tags: ["networking", "relationships", "community", "NDIS", "business growth"],
    featured: false,
    priority: 3
  },
  {
    title: "Technology Trends in NDIS",
    slug: "technology-trends-ndis",
    category: "Technology",
    tags: ["technology", "trends", "innovation", "NDIS", "future"],
    featured: false,
    priority: 3
  },
  {
    title: "Mental Health and Wellbeing for Support Workers",
    slug: "mental-health-wellbeing-support-workers",
    category: "Operations",
    tags: ["mental health", "wellbeing", "self-care", "NDIS", "work-life balance"],
    featured: false,
    priority: 3
  },
  {
    title: "Emergency Procedures and Safety",
    slug: "emergency-procedures-safety",
    category: "Compliance",
    tags: ["safety", "emergency procedures", "risk management", "NDIS", "compliance"],
    featured: false,
    priority: 2
  },
  {
    title: "Client Documentation Best Practices",
    slug: "client-documentation-best-practices",
    category: "Operations",
    tags: ["documentation", "best practices", "record keeping", "NDIS", "compliance"],
    featured: false,
    priority: 2
  },
  {
    title: "Financial Year End Preparation",
    slug: "financial-year-end-preparation",
    category: "Financial",
    tags: ["financial year", "tax preparation", "accounting", "NDIS", "business"],
    featured: false,
    priority: 2
  },
  {
    title: "NDIS Plan Reviews and Updates",
    slug: "ndis-plan-reviews-updates",
    category: "Compliance",
    tags: ["NDIS plans", "reviews", "updates", "compliance", "planning"],
    featured: false,
    priority: 2
  },
  {
    title: "Cultural Competency in NDIS",
    slug: "cultural-competency-ndis",
    category: "Operations",
    tags: ["cultural competency", "diversity", "inclusion", "NDIS", "service quality"],
    featured: false,
    priority: 3
  },
  {
    title: "Remote Service Delivery",
    slug: "remote-service-delivery",
    category: "Technology",
    tags: ["remote services", "telehealth", "digital delivery", "NDIS", "technology"],
    featured: false,
    priority: 3
  },
  {
    title: "Business Growth Strategies",
    slug: "business-growth-strategies",
    category: "Business Setup",
    tags: ["business growth", "expansion", "strategy", "NDIS", "scaling"],
    featured: false,
    priority: 3
  },
  {
    title: "Legal Considerations for NDIS Providers",
    slug: "legal-considerations-ndis-providers",
    category: "Compliance",
    tags: ["legal", "compliance", "regulations", "NDIS", "business"],
    featured: false,
    priority: 2
  },
  {
    title: "Client Feedback and Improvement",
    slug: "client-feedback-improvement",
    category: "Operations",
    tags: ["feedback", "improvement", "service quality", "NDIS", "client satisfaction"],
    featured: false,
    priority: 3
  },
  {
    title: "Financial Planning for NDIS Providers",
    slug: "financial-planning-ndis-providers",
    category: "Financial",
    tags: ["financial planning", "budgeting", "forecasting", "NDIS", "business"],
    featured: false,
    priority: 2
  },
  {
    title: "Professional Development Opportunities",
    slug: "professional-development-opportunities",
    category: "Operations",
    tags: ["professional development", "training", "skills", "NDIS", "career growth"],
    featured: false,
    priority: 3
  },
  {
    title: "Sustainability in NDIS Practice",
    slug: "sustainability-ndis-practice",
    category: "Business Setup",
    tags: ["sustainability", "long-term", "business model", "NDIS", "future planning"],
    featured: false,
    priority: 3
  },
  {
    title: "Innovation in Disability Support",
    slug: "innovation-disability-support",
    category: "Technology",
    tags: ["innovation", "disability support", "technology", "NDIS", "future"],
    featured: false,
    priority: 3
  },
  {
    title: "Community Engagement Strategies",
    slug: "community-engagement-strategies",
    category: "Marketing",
    tags: ["community engagement", "outreach", "partnerships", "NDIS", "community"],
    featured: false,
    priority: 3
  },
  {
    title: "Risk Management for NDIS Providers",
    slug: "risk-management-ndis-providers",
    category: "Compliance",
    tags: ["risk management", "safety", "compliance", "NDIS", "business protection"],
    featured: false,
    priority: 2
  },
  {
    title: "Success Stories from NDIS Providers",
    slug: "success-stories-ndis-providers",
    category: "Marketing",
    tags: ["success stories", "case studies", "inspiration", "NDIS", "motivation"],
    featured: false,
    priority: 3
  }
];

function createBlogPostStructure() {
  console.log('🚀 Creating Blog Post Structure for Migration...\n');
  
  // Create content directory if it doesn't exist
  const contentDir = path.join(process.cwd(), 'content', 'blog');
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }
  
  // Create image directories
  const imagesDir = path.join(process.cwd(), 'public', 'images', 'blog');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }
  
  console.log('📁 Directory structure created');
  console.log('📝 Content directory:', contentDir);
  console.log('🖼️  Images directory:', imagesDir);
  
  // Create migration checklist
  const checklistPath = path.join(process.cwd(), 'BLOG_MIGRATION_CHECKLIST.md');
  let checklistContent = `# Blog Post Migration Checklist\n\n`;
  checklistContent += `## Migration Progress: 0/${blogPosts.length} posts completed\n\n`;
  
  blogPosts.forEach((post, index) => {
    const priorityEmoji = post.priority === 1 ? '🔴' : post.priority === 2 ? '🟡' : '🟢';
    const featuredEmoji = post.featured ? '⭐' : '';
    
    checklistContent += `${index + 1}. ${priorityEmoji} **${post.title}** ${featuredEmoji}\n`;
    checklistContent += `   - Slug: \`${post.slug}\`\n`;
    checklistContent += `   - Category: ${post.category}\n`;
    checklistContent += `   - Priority: ${post.priority}\n`;
    checklistContent += `   - Status: ❌ Not Started\n`;
    checklistContent += `   - Content: ❌ Not Migrated\n`;
    checklistContent += `   - Images: ❌ Not Migrated\n`;
    checklistContent += `   - SEO: ❌ Not Optimized\n\n`;
    
    // Create image directory for each post
    const postImageDir = path.join(imagesDir, post.slug);
    if (!fs.existsSync(postImageDir)) {
      fs.mkdirSync(postImageDir, { recursive: true });
    }
  });
  
  fs.writeFileSync(checklistPath, checklistContent);
  console.log('✅ Migration checklist created:', checklistPath);
  
  console.log('\n📊 Migration Summary:');
  console.log(`   Total Posts: ${blogPosts.length}`);
  console.log(`   Priority 1 (High): ${blogPosts.filter(p => p.priority === 1).length}`);
  console.log(`   Priority 2 (Medium): ${blogPosts.filter(p => p.priority === 2).length}`);
  console.log(`   Priority 3 (Low): ${blogPosts.filter(p => p.priority === 3).length}`);
  console.log(`   Featured Posts: ${blogPosts.filter(p => p.featured).length}`);
  
  console.log('\n🎯 Next Steps:');
  console.log('   1. Start with Priority 1 posts (high SEO value)');
  console.log('   2. Extract content from live bugal.com.au');
  console.log('   3. Enhance with SEO optimization');
  console.log('   4. Migrate and optimize images');
  console.log('   5. Update checklist as you progress');
  
  console.log('\n💡 Tip: Use the template at content/blog/_template.md for consistency');
}

createBlogPostStructure();
