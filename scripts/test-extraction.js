#!/usr/bin/env node

/**
 * Test script to extract content from a single blog post
 */

const { extractContent, makeRequest } = require('./extract-live-content.js');

async function testExtraction() {
  console.log('🧪 Testing content extraction...');
  
  const testUrl = 'www.bugal.com.au/post/the-essentials-of-invoicing-for-support-providers-ensuring-prompt-payment';
  
  try {
    console.log(`📄 Testing: ${testUrl}`);
    const html = await makeRequest(testUrl);
    console.log(`✅ HTML received: ${html.length} characters`);
    
    const content = extractContent(html, testUrl);
    console.log(`📝 Title: ${content.title}`);
    console.log(`📄 Content length: ${content.content.length} characters`);
    console.log(`❌ Error: ${content.error || 'None'}`);
    
    if (!content.error) {
      console.log('\n📋 Content preview:');
      console.log(content.content.substring(0, 500) + '...');
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testExtraction();
