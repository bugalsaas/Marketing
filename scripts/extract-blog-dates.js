const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

// List of original blog post URLs
const blogUrls = [
  'https://www.bugal.com.au/post/the-essentials-of-invoicing-for-support-providers-ensuring-prompt-payment',
  'https://www.bugal.com.au/post/essential-steps-for-preparing-your-financial-year-information-as-an-independent-support-provider',
  'https://www.bugal.com.au/post/new-financial-year-what-to-do-as-an-independent-support-providers',
  'https://www.bugal.com.au/post/celebrating-milestones-and-achievements-in-your-independent-support-worker-journey',
  'https://www.bugal.com.au/post/ndis-review-what-it-means-for-independent-support-workers',
  'https://www.bugal.com.au/post/preparing-your-independent-support-worker-business-for-the-end-of-the-financial-year',
  'https://www.bugal.com.au/post/2024-federal-budget-what-independent-support-workers-need-to-know',
  'https://www.bugal.com.au/post/the-wedding-tax-ethical-pricing-practices-for-ndis-service-providers',
  'https://www.bugal.com.au/post/the-ethical-landscape-of-ndis-independent-support-work-principles-and-best-practices',
  'https://www.bugal.com.au/post/innovative-ways-to-market-your-ndis-independent-support-services',
  'https://www.bugal.com.au/post/share-the-love-with-bugals-refer-earn-program',
  'https://www.bugal.com.au/post/creating-an-effective-business-plan-for-your-ndis-independent-support-business',
  'https://www.bugal.com.au/post/time-management-tips-for-ndis-independent-support-workers',
  'https://www.bugal.com.au/post/the-vitality-of-self-care-a-guide-for-ndis-independent-support-workers',
  'https://www.bugal.com.au/post/top-10-tips-for-managing-your-ndis-independent-support-business-finances',
  'https://www.bugal.com.au/post/crafting-your-hourly-rate-as-an-independent-support-worker',
  'https://www.bugal.com.au/post/ndis-independent-support-workers-qualifications-and-online-courses',
  'https://www.bugal.com.au/post/the-bugal-starting-out-series-for-independent-support-providers',
  'https://www.bugal.com.au/post/setting-the-foundation-for-a-thriving-support-business-planning-for-growth',
  'https://www.bugal.com.au/post/superannuation-for-independent-support-providers-your-financial-lifeline',
  'https://www.bugal.com.au/post/mastering-your-schedule-a-guide-for-independent-support-workers',
  'https://www.bugal.com.au/post/the-importance-of-the-ndis-quality-and-safeguards-commissions-elearning-modules',
  'https://www.bugal.com.au/post/essential-certifications-and-checks-for-independent-support-workers',
  'https://www.bugal.com.au/post/understanding-gst-for-independent-support-providers-in-the-ndis',
  'https://www.bugal.com.au/post/the-importance-of-being-insured',
  'https://www.bugal.com.au/post/unlocking-the-power-of-social-media-finding-clients-as-an-independent-support-worker',
  'https://www.bugal.com.au/post/empowering-independent-support-providers-why-choose-bugal-as-your-software-provider',
  'https://www.bugal.com.au/post/crafting-a-comprehensive-service-agreement-for-support-providers-and-ndis-participants',
  'https://www.bugal.com.au/post/stand-out-with-an-irresistible-profile',
  'https://www.bugal.com.au/post/guide-to-becoming-an-ndis-registered-provider',
  'https://www.bugal.com.au/post/to-be-or-not-to-be-an-ndis-registered-provider',
  'https://www.bugal.com.au/post/make-your-business-flow',
  'https://www.bugal.com.au/post/how-to-start-independent-support-provider',
  'https://www.bugal.com.au/post/getting-started-as-a-support-provider',
  'https://www.bugal.com.au/post/new-finanical-year',
  'https://www.bugal.com.au/post/sole-trader-or-partnership-or-company',
  'https://www.bugal.com.au/post/abn-and-tfn-registration-for-support-providers-in-australia'
];

// Function to extract date from a blog post URL
async function extractDateFromUrl(url) {
  try {
    console.log(`🔍 Extracting date from: ${url}`);
    
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    const $ = cheerio.load(response.data);
    
    // Try multiple selectors to find the published date
    let publishedDate = null;
    
    // Common selectors for published dates
    const dateSelectors = [
      'p.published',  // Specific to Bugal website
      'time[datetime]',
      '.published-date',
      '.post-date',
      '.article-date',
      '.date',
      '[class*="date"]',
      '[class*="published"]',
      'meta[property="article:published_time"]',
      'meta[name="article:published_time"]',
      'meta[property="og:article:published_time"]'
    ];
    
    for (const selector of dateSelectors) {
      const elements = $(selector);
      if (elements.length > 0) {
        // For p.published, we need to get the second element (the one with the actual date)
        let dateValue = null;
        
        if (selector === 'p.published' && elements.length >= 2) {
          // Get the second p.published element which contains the actual date
          dateValue = elements.eq(1).text().trim();
        } else {
          // Try to get datetime attribute first, then content, then text
          dateValue = elements.first().attr('datetime') || elements.first().attr('content') || elements.first().text().trim();
        }
        
        if (dateValue) {
          // Clean up the date value - remove "Published on:" prefix if present
          dateValue = dateValue.replace(/^Published on:\s*/i, '').trim();
          
          // Try to parse the date
          const parsedDate = new Date(dateValue);
          if (!isNaN(parsedDate.getTime())) {
            publishedDate = parsedDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
            console.log(`✅ Found date: ${publishedDate} using selector: ${selector} (${dateValue})`);
            break;
          }
        }
      }
    }
    
    // If no date found with selectors, try to find it in the text content
    if (!publishedDate) {
      const bodyText = $('body').text();
      const dateRegex = /(?:published|posted|date)[:\s]*(?:on\s+)?(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4}|\d{4}[\/\-\.]\d{1,2}[\/\-\.]\d{1,2})/i;
      const match = bodyText.match(dateRegex);
      
      if (match) {
        const dateValue = match[1];
        const parsedDate = new Date(dateValue);
        if (!isNaN(parsedDate.getTime())) {
          publishedDate = parsedDate.toISOString().split('T')[0];
          console.log(`✅ Found date in text: ${publishedDate}`);
        }
      }
    }
    
    if (!publishedDate) {
      console.log(`❌ No date found for: ${url}`);
    }
    
    return {
      url,
      publishedDate,
      success: !!publishedDate
    };
    
  } catch (error) {
    console.error(`❌ Error extracting date from ${url}:`, error.message);
    return {
      url,
      publishedDate: null,
      success: false,
      error: error.message
    };
  }
}

// Function to extract all dates
async function extractAllDates() {
  console.log('🚀 Starting date extraction from original blog posts...\n');
  
  const results = [];
  const batchSize = 5; // Process 5 URLs at a time to avoid overwhelming the server
  
  for (let i = 0; i < blogUrls.length; i += batchSize) {
    const batch = blogUrls.slice(i, i + batchSize);
    console.log(`\n📦 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(blogUrls.length / batchSize)}`);
    
    const batchPromises = batch.map(url => extractDateFromUrl(url));
    const batchResults = await Promise.all(batchPromises);
    
    results.push(...batchResults);
    
    // Add a small delay between batches
    if (i + batchSize < blogUrls.length) {
      console.log('⏳ Waiting 2 seconds before next batch...');
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  // Save results to file
  const outputFile = 'extracted-blog-dates.json';
  fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
  
  console.log(`\n📊 Extraction Summary:`);
  console.log(`Total URLs processed: ${results.length}`);
  console.log(`Successful extractions: ${results.filter(r => r.success).length}`);
  console.log(`Failed extractions: ${results.filter(r => !r.success).length}`);
  console.log(`\n💾 Results saved to: ${outputFile}`);
  
  // Display successful extractions
  console.log(`\n✅ Successfully extracted dates:`);
  results.filter(r => r.success).forEach(result => {
    console.log(`  ${result.publishedDate} - ${result.url}`);
  });
  
  // Display failed extractions
  const failed = results.filter(r => !r.success);
  if (failed.length > 0) {
    console.log(`\n❌ Failed extractions:`);
    failed.forEach(result => {
      console.log(`  ${result.url} - ${result.error || 'No date found'}`);
    });
  }
  
  return results;
}

// Run the extraction
extractAllDates().catch(console.error);
