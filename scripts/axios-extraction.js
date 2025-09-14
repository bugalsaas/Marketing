#!/usr/bin/env node

/**
 * Content extraction using Axios for better HTTP handling
 */

const axios = require('axios');
const { JSDOM } = require('jsdom');

async function extractWithAxios() {
  console.log('🚀 Testing content extraction with Axios...');
  
  const testUrl = 'https://www.bugal.com.au/post/the-essentials-of-invoicing-for-support-providers-ensuring-prompt-payment';
  
  try {
    const response = await axios.get(testUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1'
      },
      timeout: 30000
    });
    
    const html = response.data;
    console.log(`📄 HTML length: ${html.length} characters`);
    console.log(`📄 Contains w-richtext: ${html.includes('w-richtext') ? 'Yes' : 'No'}`);
    
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    // Look for content
    const wRichtext = document.querySelector('.w-richtext');
    console.log(`📄 .w-richtext found: ${wRichtext ? 'Yes' : 'No'}`);
    
    if (wRichtext) {
      console.log(`📄 Content length: ${wRichtext.textContent.length} characters`);
      console.log(`📄 Content preview: ${wRichtext.textContent.substring(0, 300)}...`);
      
      // Extract title
      const titleElement = document.querySelector('h1.heading-white.biger');
      const title = titleElement ? titleElement.textContent.trim() : 'No title found';
      console.log(`📄 Title: ${title}`);
      
      return {
        title: title,
        content: wRichtext.innerHTML,
        success: true
      };
    } else {
      console.log('❌ No content found');
      return { success: false };
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    return { success: false, error: error.message };
  }
}

extractWithAxios();
