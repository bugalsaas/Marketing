const { PrismaClient } = require('@prisma/client');
const cheerio = require('cheerio');
const axios = require('axios');

const prisma = new PrismaClient();

// Function to extract text content from HTML
function extractTextContent(html) {
  const $ = cheerio.load(html);
  return $.text().replace(/\s+/g, ' ').trim();
}

// Function to extract links from HTML
function extractLinks(html) {
  const $ = cheerio.load(html);
  const links = [];
  
  $('a').each((i, el) => {
    const href = $(el).attr('href');
    const text = $(el).text().trim();
    if (href) {
      links.push({ href, text });
    }
  });
  
  return links;
}

// Function to check if a link is broken
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

// Function to analyze keyword density
function analyzeKeywords(content, targetKeywords) {
  const words = content.toLowerCase().split(/\s+/);
  const totalWords = words.length;
  const keywordDensity = {};
  
  targetKeywords.forEach(keyword => {
    const keywordWords = keyword.toLowerCase().split(/\s+/);
    let count = 0;
    
    for (let i = 0; i <= words.length - keywordWords.length; i++) {
      let match = true;
      for (let j = 0; j < keywordWords.length; j++) {
        if (words[i + j] !== keywordWords[j]) {
          match = false;
          break;
        }
      }
      if (match) count++;
    }
    
    keywordDensity[keyword] = {
      count,
      density: ((count * keywordWords.length) / totalWords * 100).toFixed(2) + '%'
    };
  });
  
  return keywordDensity;
}

// Main SEO audit function
async function performSEOAudit() {
  try {
    console.log('🔍 Starting comprehensive SEO audit of blog posts...\n');
    
    // Get all published blog posts
    const blogPosts = await prisma.blogPost.findMany({
      where: { published: true },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        content: true,
        category: true,
        tags: true,
        publishedAt: true,
        readTime: true
      },
      orderBy: { publishedAt: 'desc' }
    });
    
    console.log(`📊 Analyzing ${blogPosts.length} published blog posts\n`);
    
    // Target keywords for NDIS/support provider niche
    const targetKeywords = [
      'NDIS',
      'independent support provider',
      'support worker',
      'NDIS provider',
      'disability support',
      'NDIS registration',
      'support services',
      'NDIS participant',
      'disability services',
      'support provider business',
      'NDIS compliance',
      'support worker qualifications',
      'NDIS funding',
      'disability support worker',
      'NDIS practice management'
    ];
    
    const auditResults = {
      totalPosts: blogPosts.length,
      brokenLinks: [],
      keywordAnalysis: {},
      contentIssues: [],
      recommendations: []
    };
    
    // Analyze each blog post
    for (const post of blogPosts) {
      console.log(`📝 Analyzing: ${post.title}`);
      
      const content = extractTextContent(post.content);
      const links = extractLinks(post.content);
      
      // Check for broken links
      for (const link of links) {
        if (link.href && !link.href.startsWith('#')) {
          const linkCheck = await checkLink(link.href);
          if (linkCheck.status === 'error') {
            auditResults.brokenLinks.push({
              post: post.title,
              url: link.href,
              text: link.text,
              error: linkCheck.reason || `HTTP ${linkCheck.statusCode}`
            });
          }
        }
      }
      
      // Analyze keyword density
      const keywordAnalysis = analyzeKeywords(content, targetKeywords);
      auditResults.keywordAnalysis[post.title] = keywordAnalysis;
      
      // Content analysis
      const contentLength = content.length;
      const wordCount = content.split(/\s+/).length;
      
      // Check for common SEO issues
      const issues = [];
      
      if (wordCount < 300) {
        issues.push('Content too short (less than 300 words)');
      }
      
      if (wordCount > 3000) {
        issues.push('Content very long (over 3000 words) - consider breaking into series');
      }
      
      if (!post.excerpt || post.excerpt.length < 120) {
        issues.push('Meta description too short or missing');
      }
      
      if (post.excerpt && post.excerpt.length > 160) {
        issues.push('Meta description too long (over 160 characters)');
      }
      
      if (post.title && post.title.length > 60) {
        issues.push('Title too long (over 60 characters)');
      }
      
      if (post.title && post.title.length < 30) {
        issues.push('Title too short (less than 30 characters)');
      }
      
      // Check for H1 tags in content
      const $ = cheerio.load(post.content);
      const h1Count = $('h1').length;
      if (h1Count === 0) {
        issues.push('No H1 tag found in content');
      } else if (h1Count > 1) {
        issues.push('Multiple H1 tags found (should only have one)');
      }
      
      // Check for images without alt text
      const imagesWithoutAlt = $('img').filter((i, el) => !$(el).attr('alt')).length;
      if (imagesWithoutAlt > 0) {
        issues.push(`${imagesWithoutAlt} image(s) without alt text`);
      }
      
      if (issues.length > 0) {
        auditResults.contentIssues.push({
          post: post.title,
          issues: issues
        });
      }
      
      // Small delay to avoid overwhelming servers
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    // Generate recommendations
    const recommendations = generateRecommendations(auditResults, blogPosts);
    auditResults.recommendations = recommendations;
    
    // Display results
    displayAuditResults(auditResults);
    
  } catch (error) {
    console.error('❌ Error during SEO audit:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Function to generate SEO recommendations
function generateRecommendations(auditResults, blogPosts) {
  const recommendations = [];
  
  // Broken links
  if (auditResults.brokenLinks.length > 0) {
    recommendations.push({
      priority: 'HIGH',
      category: 'Technical SEO',
      issue: 'Broken Links Found',
      description: `${auditResults.brokenLinks.length} broken links detected`,
      action: 'Fix or remove broken links to improve user experience and SEO',
      affectedPosts: auditResults.brokenLinks.map(link => link.post)
    });
  }
  
  // Content length issues
  const shortPosts = auditResults.contentIssues.filter(post => 
    post.issues.some(issue => issue.includes('Content too short'))
  );
  
  if (shortPosts.length > 0) {
    recommendations.push({
      priority: 'MEDIUM',
      category: 'Content Quality',
      issue: 'Short Content',
      description: `${shortPosts.length} posts are too short (under 300 words)`,
      action: 'Expand content with more detailed information, examples, and actionable advice',
      affectedPosts: shortPosts.map(post => post.post)
    });
  }
  
  // Missing meta descriptions
  const missingMeta = auditResults.contentIssues.filter(post => 
    post.issues.some(issue => issue.includes('Meta description too short'))
  );
  
  if (missingMeta.length > 0) {
    recommendations.push({
      priority: 'HIGH',
      category: 'On-Page SEO',
      issue: 'Poor Meta Descriptions',
      description: `${missingMeta.length} posts have poor meta descriptions`,
      action: 'Write compelling meta descriptions (120-160 characters) that include target keywords',
      affectedPosts: missingMeta.map(post => post.post)
    });
  }
  
  // Missing H1 tags
  const missingH1 = auditResults.contentIssues.filter(post => 
    post.issues.some(issue => issue.includes('No H1 tag found'))
  );
  
  if (missingH1.length > 0) {
    recommendations.push({
      priority: 'HIGH',
      category: 'On-Page SEO',
      issue: 'Missing H1 Tags',
      description: `${missingH1.length} posts are missing H1 tags`,
      action: 'Add proper H1 tags to each post for better content structure',
      affectedPosts: missingH1.map(post => post.post)
    });
  }
  
  // Images without alt text
  const imageIssues = auditResults.contentIssues.filter(post => 
    post.issues.some(issue => issue.includes('image(s) without alt text'))
  );
  
  if (imageIssues.length > 0) {
    recommendations.push({
      priority: 'MEDIUM',
      category: 'Accessibility & SEO',
      issue: 'Images Without Alt Text',
      description: `${imageIssues.length} posts have images without alt text`,
      action: 'Add descriptive alt text to all images for better accessibility and SEO',
      affectedPosts: imageIssues.map(post => post.post)
    });
  }
  
  // Keyword optimization opportunities
  const keywordOpportunities = [];
  Object.entries(auditResults.keywordAnalysis).forEach(([postTitle, keywords]) => {
    const lowDensityKeywords = Object.entries(keywords)
      .filter(([keyword, data]) => parseFloat(data.density) < 0.5)
      .map(([keyword, data]) => keyword);
    
    if (lowDensityKeywords.length > 0) {
      keywordOpportunities.push({
        post: postTitle,
        keywords: lowDensityKeywords
      });
    }
  });
  
  if (keywordOpportunities.length > 0) {
    recommendations.push({
      priority: 'MEDIUM',
      category: 'Keyword Optimization',
      issue: 'Low Keyword Density',
      description: 'Several posts have low keyword density for target terms',
      action: 'Naturally incorporate target keywords more frequently in content',
      details: keywordOpportunities
    });
  }
  
  // General recommendations
  recommendations.push({
    priority: 'LOW',
    category: 'Content Strategy',
    issue: 'Internal Linking',
    description: 'Improve internal linking between related blog posts',
    action: 'Add more internal links between related posts to improve site structure and user engagement'
  });
  
  recommendations.push({
    priority: 'LOW',
    category: 'Content Strategy',
    issue: 'Content Freshness',
    description: 'Keep content updated and relevant',
    action: 'Regularly update older posts with new information and current best practices'
  });
  
  return recommendations;
}

// Function to display audit results
function displayAuditResults(auditResults) {
  console.log('\n📊 SEO AUDIT RESULTS\n');
  console.log('='.repeat(50));
  
  // Broken links
  if (auditResults.brokenLinks.length > 0) {
    console.log('\n🔗 BROKEN LINKS FOUND:');
    auditResults.brokenLinks.forEach(link => {
      console.log(`❌ ${link.post}: ${link.url}`);
      console.log(`   Text: "${link.text}"`);
      console.log(`   Error: ${link.error}\n`);
    });
  } else {
    console.log('\n✅ No broken links found!');
  }
  
  // Content issues
  if (auditResults.contentIssues.length > 0) {
    console.log('\n📝 CONTENT ISSUES:');
    auditResults.contentIssues.forEach(post => {
      console.log(`\n📄 ${post.post}:`);
      post.issues.forEach(issue => {
        console.log(`   ⚠️  ${issue}`);
      });
    });
  }
  
  // Recommendations
  console.log('\n🎯 SEO RECOMMENDATIONS:');
  console.log('='.repeat(50));
  
  const priorityOrder = ['HIGH', 'MEDIUM', 'LOW'];
  priorityOrder.forEach(priority => {
    const priorityRecs = auditResults.recommendations.filter(rec => rec.priority === priority);
    if (priorityRecs.length > 0) {
      console.log(`\n${priority} PRIORITY:`);
      priorityRecs.forEach((rec, index) => {
        console.log(`\n${index + 1}. ${rec.issue} (${rec.category})`);
        console.log(`   📋 ${rec.description}`);
        console.log(`   🔧 Action: ${rec.action}`);
        if (rec.affectedPosts) {
          console.log(`   📄 Affected posts: ${rec.affectedPosts.length}`);
        }
      });
    }
  });
  
  console.log('\n' + '='.repeat(50));
  console.log('✅ SEO audit completed!');
}

// Run the audit
performSEOAudit().catch(console.error);
