#!/usr/bin/env node

/**
 * Test script to extract content from a few blog posts
 */

const { extractContent, makeRequest } = require('./extract-live-content.js');

async function testFewPosts() {
  console.log('🧪 Testing content extraction on a few posts...');
  
  const testUrls = [
    'www.bugal.com.au/post/the-essentials-of-invoicing-for-support-providers-ensuring-prompt-payment',
    'www.bugal.com.au/post/essential-steps-for-preparing-your-financial-year-information-as-an-independent-support-provider',
    'www.bugal.com.au/post/getting-started-as-a-support-provider'
  ];
  
  let successCount = 0;
  let errorCount = 0;
  
  for (let i = 0; i < testUrls.length; i++) {
    const url = testUrls[i];
    console.log(`\n📄 [${i + 1}/${testUrls.length}] Testing: ${url}`);
    
    try {
      const html = await makeRequest(url);
      const content = extractContent(html, url);
      
      if (content.error) {
        console.log(`   ❌ Error: ${content.error}`);
        errorCount++;
      } else {
        console.log(`   ✅ Success: ${content.title}`);
        console.log(`   📄 Content length: ${content.content.length} characters`);
        successCount++;
      }
      
      // Add delay between requests
      if (i < testUrls.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
    } catch (error) {
      console.log(`   ❌ Request failed: ${error.message}`);
      errorCount++;
    }
  }
  
  console.log(`\n🎉 Test completed!`);
  console.log(`✅ Success: ${successCount} posts`);
  console.log(`❌ Errors: ${errorCount} posts`);
}

testFewPosts();
