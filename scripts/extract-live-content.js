#!/usr/bin/env node

/**
 * Live Content Extraction Script for Bugal Blog Migration
 * 
 * This script extracts content from all live blog posts on www.bugal.com.au
 * and updates the LIVE_CONTENT_EXTRACTION.md file with the extracted content.
 */

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { JSDOM } = require('jsdom');

// List of all live blog post URLs
const BLOG_URLS = [
  'www.bugal.com.au/post/the-essentials-of-invoicing-for-support-providers-ensuring-prompt-payment',
  'www.bugal.com.au/post/essential-steps-for-preparing-your-financial-year-information-as-an-independent-support-provider',
  'www.bugal.com.au/post/new-financial-year-what-to-do-as-an-independent-support-providers',
  'www.bugal.com.au/post/celebrating-milestones-and-achievements-in-your-independent-support-worker-journey',
  'www.bugal.com.au/post/ndis-review-what-it-means-for-independent-support-workers',
  'www.bugal.com.au/post/preparing-your-independent-support-worker-business-for-the-end-of-the-financial-year',
  'www.bugal.com.au/post/2024-federal-budget-what-independent-support-workers-need-to-know',
  'www.bugal.com.au/post/the-wedding-tax-ethical-pricing-practices-for-ndis-service-providers',
  'www.bugal.com.au/post/the-ethical-landscape-of-ndis-independent-support-work-principles-and-best-practices',
  'www.bugal.com.au/post/innovative-ways-to-market-your-ndis-independent-support-services',
  'www.bugal.com.au/post/share-the-love-with-bugals-refer-earn-program',
  'www.bugal.com.au/post/creating-an-effective-business-plan-for-your-ndis-independent-support-business',
  'www.bugal.com.au/post/time-management-tips-for-ndis-independent-support-workers',
  'www.bugal.com.au/post/the-vitality-of-self-care-a-guide-for-ndis-independent-support-workers',
  'www.bugal.com.au/post/top-10-tips-for-managing-your-ndis-independent-support-business-finances',
  'www.bugal.com.au/post/crafting-your-hourly-rate-as-an-independent-support-worker',
  'www.bugal.com.au/post/ndis-independent-support-workers-qualifications-and-online-courses',
  'www.bugal.com.au/post/the-bugal-starting-out-series-for-independent-support-providers',
  'www.bugal.com.au/post/setting-the-foundation-for-a-thriving-support-business-planning-for-growth',
  'www.bugal.com.au/post/superannuation-for-independent-support-providers-your-financial-lifeline',
  'www.bugal.com.au/post/mastering-your-schedule-a-guide-for-independent-support-workers',
  'www.bugal.com.au/post/the-importance-of-the-ndis-quality-and-safeguards-commissions-elearning-modules',
  'www.bugal.com.au/post/essential-certifications-and-checks-for-independent-support-workers',
  'www.bugal.com.au/post/understanding-gst-for-independent-support-providers-in-the-ndis',
  'www.bugal.com.au/post/the-importance-of-being-insured',
  'www.bugal.com.au/post/unlocking-the-power-of-social-media-finding-clients-as-an-independent-support-worker',
  'www.bugal.com.au/post/empowering-independent-support-providers-why-choose-bugal-as-your-software-provider',
  'www.bugal.com.au/post/crafting-a-comprehensive-service-agreement-for-support-providers-and-ndis-participants',
  'www.bugal.com.au/post/stand-out-with-an-irresistible-profile',
  'www.bugal.com.au/post/guide-to-becoming-an-ndis-registered-provider',
  'www.bugal.com.au/post/to-be-or-not-to-be-an-ndis-registered-provider',
  'www.bugal.com.au/post/make-your-business-flow',
  'www.bugal.com.au/post/how-to-start-independent-support-provider',
  'www.bugal.com.au/post/getting-started-as-a-support-provider',
  'www.bugal.com.au/post/new-finanical-year',
  'www.bugal.com.au/post/sole-trader-or-partnership-or-company',
  'www.bugal.com.au/post/abn-and-tfn-registration-for-support-providers-in-australia'
];

// Configuration
const CONFIG = {
  outputFile: './LIVE_CONTENT_EXTRACTION.md',
  delayBetweenRequests: 2000, // 2 seconds delay between requests
  timeout: 30000, // 30 second timeout per request
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
};

// Utility function to make HTTP requests
async function makeRequest(url) {
  try {
    const response = await axios.get(`https://${url}`, {
      headers: {
        'User-Agent': CONFIG.userAgent,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1'
      },
      timeout: CONFIG.timeout
    });
    
    return response.data;
  } catch (error) {
    throw new Error(`HTTP request failed: ${error.message}`);
  }
}

// Function to extract content from HTML
function extractContent(html, url) {
  try {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    // Try different selectors to find the main content
    const contentSelectors = [
      '.w-richtext',
      'article',
      '.post-content',
      '.entry-content',
      '.content',
      'main',
      '.blog-post-content',
      '[class*="content"]',
      '[class*="post"]'
    ];
    
    let contentElement = null;
    for (const selector of contentSelectors) {
      contentElement = document.querySelector(selector);
      if (contentElement) break;
    }
    
    if (!contentElement) {
      // Fallback: try to find the largest text block
      const allElements = document.querySelectorAll('div, article, section, main');
      let maxTextLength = 0;
      for (const element of allElements) {
        const text = element.textContent || '';
        if (text.length > maxTextLength && text.length > 500) {
          maxTextLength = text.length;
          contentElement = element;
        }
      }
    }
    
    if (!contentElement) {
      return {
        title: 'Content not found',
        content: 'Unable to extract content from this page',
        error: 'No content element found'
      };
    }
    
    // Extract title
    const titleSelectors = ['h1.heading-white.biger', 'h1', '.post-title', '.entry-title', 'title'];
    let title = '';
    for (const selector of titleSelectors) {
      const titleElement = document.querySelector(selector);
      if (titleElement) {
        title = titleElement.textContent.trim();
        break;
      }
    }
    
    // Clean up the content
    let content = contentElement.innerHTML;
    
    // Remove script and style elements
    content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    content = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
    
    // Clean up extra whitespace
    content = content.replace(/\s+/g, ' ').trim();
    
    return {
      title: title || 'Untitled',
      content: content,
      url: url
    };
    
  } catch (error) {
    return {
      title: 'Error extracting content',
      content: `Error: ${error.message}`,
      error: error.message,
      url: url
    };
  }
}

// Function to update the markdown file
function updateMarkdownFile(extractedContent) {
  try {
    let markdownContent = fs.readFileSync(CONFIG.outputFile, 'utf8');
    
    // Update each post in the markdown file
    extractedContent.forEach((post, index) => {
      const postNumber = index + 1;
      const status = post.error ? '❌ Error' : '✅ Extracted';
      
      // Find the post section and update it
      const postSectionStart = `### ${postNumber}. `;
      const postSectionEnd = `---

`;
      
      const startIndex = markdownContent.indexOf(postSectionStart);
      if (startIndex !== -1) {
        const endIndex = markdownContent.indexOf(postSectionEnd, startIndex);
        if (endIndex !== -1) {
          const newPostSection = `### ${postNumber}. ${post.title}
**URL:** ${post.url}
**Status:** ${status}
**Content:** 
\`\`\`
${post.content}
\`\`\`

---

`;
          
          markdownContent = markdownContent.substring(0, startIndex) + newPostSection + markdownContent.substring(endIndex + postSectionEnd.length);
        }
      }
    });
    
    // Update the extraction status at the top
    const extractedCount = extractedContent.filter(p => !p.error).length;
    const errorCount = extractedContent.filter(p => p.error).length;
    
    markdownContent = markdownContent.replace(
      /## Content Extraction Status[\s\S]*?Import Status: Pending/,
      `## Content Extraction Status
- **Total Posts:** 37
- **Extraction Status:** ${extractedCount}/37 completed
- **Review Status:** Pending
- **Import Status:** Pending
- **Errors:** ${errorCount} posts failed to extract`
    );
    
    fs.writeFileSync(CONFIG.outputFile, markdownContent);
    console.log(`✅ Updated ${CONFIG.outputFile} with extracted content`);
    
  } catch (error) {
    console.error('❌ Error updating markdown file:', error.message);
  }
}

// Main extraction function
async function extractAllContent() {
  console.log('🚀 Starting content extraction from live Bugal blog...');
  console.log(`📊 Total posts to extract: ${BLOG_URLS.length}`);
  console.log(`⏱️  Estimated time: ${Math.ceil(BLOG_URLS.length * CONFIG.delayBetweenRequests / 1000 / 60)} minutes`);
  console.log('');
  
  const extractedContent = [];
  let successCount = 0;
  let errorCount = 0;
  
  for (let i = 0; i < BLOG_URLS.length; i++) {
    const url = BLOG_URLS[i];
    const postNumber = i + 1;
    
    console.log(`📄 [${postNumber}/${BLOG_URLS.length}] Extracting: ${url}`);
    
    try {
      const html = await makeRequest(url);
      const content = extractContent(html, url);
      
      if (content.error) {
        console.log(`   ❌ Error: ${content.error}`);
        errorCount++;
      } else {
        console.log(`   ✅ Success: ${content.title}`);
        successCount++;
      }
      
      extractedContent.push(content);
      
      // Delay between requests to be respectful
      if (i < BLOG_URLS.length - 1) {
        console.log(`   ⏳ Waiting ${CONFIG.delayBetweenRequests/1000}s before next request...`);
        await new Promise(resolve => setTimeout(resolve, CONFIG.delayBetweenRequests));
      }
      
    } catch (error) {
      console.log(`   ❌ Request failed: ${error.message}`);
      errorCount++;
      extractedContent.push({
        title: 'Request failed',
        content: `Error: ${error.message}`,
        error: error.message,
        url: url
      });
    }
    
    console.log('');
  }
  
  // Update the markdown file
  updateMarkdownFile(extractedContent);
  
  // Final summary
  console.log('🎉 Content extraction completed!');
  console.log(`✅ Successfully extracted: ${successCount} posts`);
  console.log(`❌ Failed to extract: ${errorCount} posts`);
  console.log(`📝 Updated file: ${CONFIG.outputFile}`);
  
  if (errorCount > 0) {
    console.log('\n⚠️  Some posts failed to extract. Please check the markdown file for details.');
  }
}

// Run the extraction
if (require.main === module) {
  extractAllContent().catch(console.error);
}

module.exports = { extractAllContent, extractContent, makeRequest };
