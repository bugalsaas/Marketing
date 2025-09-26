const axios = require('axios');
const cheerio = require('cheerio');

// Test with a few URLs to understand the structure
const testUrls = [
  'https://www.bugal.com.au/post/the-essentials-of-invoicing-for-support-providers-ensuring-prompt-payment',
  'https://www.bugal.com.au/post/how-to-start-independent-support-provider',
  'https://www.bugal.com.au/post/abn-and-tfn-registration-for-support-providers-in-australia'
];

async function debugBlogStructure(url) {
  try {
    console.log(`\n🔍 Debugging structure for: ${url}`);
    
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    const $ = cheerio.load(response.data);
    
    console.log('📄 Page title:', $('title').text());
    
    // Look for any time elements
    console.log('\n⏰ Time elements:');
    $('time').each((i, el) => {
      console.log(`  ${i}: ${$(el).html()}`);
    });
    
    // Look for any elements with "date" in class or id
    console.log('\n📅 Elements with "date" in class/id:');
    $('[class*="date"], [id*="date"]').each((i, el) => {
      console.log(`  ${i}: <${el.tagName} class="${$(el).attr('class')}" id="${$(el).attr('id')}">${$(el).text().trim()}</${el.tagName}>`);
    });
    
    // Look for any elements with "published" in class or id
    console.log('\n📝 Elements with "published" in class/id:');
    $('[class*="published"], [id*="published"]').each((i, el) => {
      console.log(`  ${i}: <${el.tagName} class="${$(el).attr('class')}" id="${$(el).attr('id')}">${$(el).text().trim()}</${el.tagName}>`);
    });
    
    // Look for meta tags
    console.log('\n🏷️ Meta tags:');
    $('meta[property*="date"], meta[name*="date"], meta[property*="published"], meta[name*="published"]').each((i, el) => {
      console.log(`  ${i}: <meta property="${$(el).attr('property')}" name="${$(el).attr('name')}" content="${$(el).attr('content')}">`);
    });
    
    // Look for any text that might contain dates
    console.log('\n🔍 Text containing date patterns:');
    const bodyText = $('body').text();
    const datePatterns = [
      /\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4}/g,
      /\d{4}[\/\-\.]\d{1,2}[\/\-\.]\d{1,2}/g,
      /(?:january|february|march|april|may|june|july|august|september|october|november|december)\s+\d{1,2},?\s+\d{4}/gi,
      /(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\s+\d{1,2},?\s+\d{4}/gi
    ];
    
    datePatterns.forEach((pattern, i) => {
      const matches = bodyText.match(pattern);
      if (matches) {
        console.log(`  Pattern ${i + 1}: ${matches.slice(0, 5).join(', ')}${matches.length > 5 ? '...' : ''}`);
      }
    });
    
    // Look for any structured data
    console.log('\n📊 JSON-LD structured data:');
    $('script[type="application/ld+json"]').each((i, el) => {
      try {
        const jsonData = JSON.parse($(el).html());
        console.log(`  ${i}:`, JSON.stringify(jsonData, null, 2).substring(0, 500) + '...');
      } catch (e) {
        console.log(`  ${i}: Invalid JSON`);
      }
    });
    
  } catch (error) {
    console.error(`❌ Error debugging ${url}:`, error.message);
  }
}

async function debugAll() {
  for (const url of testUrls) {
    await debugBlogStructure(url);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds between requests
  }
}

debugAll().catch(console.error);
