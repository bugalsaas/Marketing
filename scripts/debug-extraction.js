#!/usr/bin/env node

/**
 * Debug script to analyze HTML structure
 */

const { makeRequest } = require('./extract-live-content.js');
const { JSDOM } = require('jsdom');

async function debugExtraction() {
  console.log('🔍 Debugging HTML structure...');
  
  const testUrl = 'www.bugal.com.au/post/the-essentials-of-invoicing-for-support-providers-ensuring-prompt-payment';
  
  try {
    const html = await makeRequest(testUrl);
    console.log(`📄 Raw HTML length: ${html.length} characters`);
    console.log(`📄 HTML contains w-richtext: ${html.includes('w-richtext') ? 'Yes' : 'No'}`);
    
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    console.log('🔍 Looking for content elements...');
    console.log(`📄 Total HTML length: ${html.length} characters`);
    
    // Check for w-richtext
    const wRichtext = document.querySelector('.w-richtext');
    console.log(`📄 .w-richtext found: ${wRichtext ? 'Yes' : 'No'}`);
    if (wRichtext) {
      console.log(`   Content length: ${wRichtext.textContent.length} characters`);
      console.log(`   HTML length: ${wRichtext.innerHTML.length} characters`);
      console.log(`   First 200 chars: ${wRichtext.textContent.substring(0, 200)}...`);
    }
    
    // Check for other potential selectors
    const selectors = [
      'article',
      '.post-content',
      '.entry-content',
      '.content',
      'main',
      '.blog-post-content',
      '[class*="content"]',
      '[class*="post"]',
      '.blog-content-page',
      '.blog-page-content'
    ];
    
    selectors.forEach(selector => {
      const element = document.querySelector(selector);
      console.log(`📄 ${selector}: ${element ? 'Found' : 'Not found'}`);
      if (element) {
        console.log(`   Text length: ${element.textContent.length} characters`);
      }
    });
    
    // Look for all divs with classes containing 'content' or 'richtext'
    const allDivs = document.querySelectorAll('div[class*="content"], div[class*="richtext"]');
    console.log(`\n📄 Divs with 'content' or 'richtext' in class: ${allDivs.length}`);
    allDivs.forEach((div, index) => {
      console.log(`   ${index + 1}. Class: ${div.className}, Text length: ${div.textContent.length}`);
    });
    
    // Check for the specific structure we saw
    const blogContentPage = document.querySelector('.blog-content-page');
    if (blogContentPage) {
      console.log('\n📄 Found .blog-content-page, looking inside...');
      const blogPageContent = blogContentPage.querySelector('.blog-page-content');
      if (blogPageContent) {
        console.log('   Found .blog-page-content');
        const wRichtextInside = blogPageContent.querySelector('.w-richtext');
        if (wRichtextInside) {
          console.log('   Found .w-richtext inside .blog-page-content');
          console.log(`   Content: ${wRichtextInside.textContent.substring(0, 200)}...`);
        }
      }
    }
    
  } catch (error) {
    console.error('❌ Debug failed:', error.message);
  }
}

debugExtraction();
