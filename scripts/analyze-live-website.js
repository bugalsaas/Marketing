const axios = require('axios');
const cheerio = require('cheerio');

// URLs to analyze
const journeyPages = [
  {
    url: 'https://www.bugal.com.au/starting-a-support-provider-journey/intro',
    title: 'Introduction',
    slug: 'intro'
  },
  {
    url: 'https://www.bugal.com.au/starting-a-support-provider-journey/tax-file-number',
    title: 'Tax File Number',
    slug: 'tax-file-number'
  },
  {
    url: 'https://www.bugal.com.au/starting-a-support-provider-journey/australian-business-number-abn',
    title: 'Australian Business Number (ABN)',
    slug: 'australian-business-number-abn'
  },
  {
    url: 'https://www.bugal.com.au/starting-a-support-provider-journey/goods-and-services-tax-gst',
    title: 'Goods and Services Tax (GST)',
    slug: 'goods-and-services-tax-gst'
  },
  {
    url: 'https://www.bugal.com.au/starting-a-support-provider-journey/bookkeaping-best-practices',
    title: 'Bookkeeping Best Practices',
    slug: 'bookkeaping-best-practices'
  },
  {
    url: 'https://www.bugal.com.au/starting-a-support-provider-journey/support-provider-certifications',
    title: 'Support Provider Certifications',
    slug: 'support-provider-certifications'
  },
  {
    url: 'https://www.bugal.com.au/starting-a-support-provider-journey/support-provider-qualifications',
    title: 'Support Provider Qualifications',
    slug: 'support-provider-qualifications'
  },
  {
    url: 'https://www.bugal.com.au/starting-a-support-provider-journey/support-provider-insurance',
    title: 'Support Provider Insurance',
    slug: 'support-provider-insurance'
  },
  {
    url: 'https://www.bugal.com.au/starting-a-support-provider-journey/marketing-for-support-provider',
    title: 'Marketing for Support Provider',
    slug: 'marketing-for-support-provider'
  },
  {
    url: 'https://www.bugal.com.au/starting-a-support-provider-journey/taking-on-new-participants',
    title: 'Taking on New Participants',
    slug: 'taking-on-new-participants'
  },
  {
    url: 'https://www.bugal.com.au/starting-a-support-provider-journey/financial-management-for-support-providers',
    title: 'Financial Management for Support Providers',
    slug: 'financial-management-for-support-providers'
  },
  {
    url: 'https://www.bugal.com.au/starting-a-support-provider-journey/superannuation-for-support-providers',
    title: 'Superannuation for Support Providers',
    slug: 'superannuation-for-support-providers'
  },
  {
    url: 'https://www.bugal.com.au/starting-a-support-provider-journey/ndis-registration',
    title: 'NDIS Registration',
    slug: 'ndis-registration'
  },
  {
    url: 'https://www.bugal.com.au/starting-a-support-provider-journey/growing-your-support-business',
    title: 'Growing Your Support Business',
    slug: 'growing-your-support-business'
  }
];

async function analyzePage(page) {
  try {
    console.log(`\n🔍 Analyzing: ${page.title}`);
    console.log(`📄 URL: ${page.url}`);
    
    const response = await axios.get(page.url, {
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SEO-Audit-Bot/1.0)'
      }
    });
    
    const $ = cheerio.load(response.data);
    
    // Extract key SEO elements
    const analysis = {
      url: page.url,
      title: page.title,
      slug: page.slug,
      status: 'success',
      
      // Meta data
      pageTitle: $('title').text().trim(),
      metaDescription: $('meta[name="description"]').attr('content') || '',
      h1: $('h1').first().text().trim(),
      h2Count: $('h2').length,
      h3Count: $('h3').length,
      
      // Content analysis
      wordCount: $('body').text().split(/\s+/).length,
      imageCount: $('img').length,
      imageAltCount: $('img[alt]').length,
      linkCount: $('a').length,
      internalLinkCount: $('a[href*="bugal.com.au"]').length,
      externalLinkCount: $('a[href^="http"]').not('[href*="bugal.com.au"]').length,
      
      // Content structure
      hasTableOfContents: $('*').text().toLowerCase().includes('table of contents') || $('*').text().toLowerCase().includes('contents'),
      hasCallToAction: $('*').text().toLowerCase().includes('sign up') || $('*').text().toLowerCase().includes('get started') || $('*').text().toLowerCase().includes('learn more'),
      hasFAQ: $('*').text().toLowerCase().includes('frequently asked') || $('*').text().toLowerCase().includes('faq'),
      
      // Technical elements
      hasSchema: $('script[type="application/ld+json"]').length > 0,
      hasBreadcrumbs: $('*').text().toLowerCase().includes('breadcrumb') || $('nav[aria-label*="breadcrumb"]').length > 0,
      
      // Content quality indicators
      hasLists: $('ul, ol').length > 0,
      hasImages: $('img').length > 0,
      hasVideos: $('video, iframe[src*="youtube"], iframe[src*="vimeo"]').length > 0,
      
      // Extract main content
      mainContent: $('main, .content, .post-content, .article-content').text().trim() || $('body').text().trim(),
      
      // Extract headings for structure analysis
      headings: {
        h1: $('h1').map((i, el) => $(el).text().trim()).get(),
        h2: $('h2').map((i, el) => $(el).text().trim()).get(),
        h3: $('h3').map((i, el) => $(el).text().trim()).get()
      },
      
      // Extract links for analysis
      links: {
        internal: $('a[href*="bugal.com.au"]').map((i, el) => ({
          text: $(el).text().trim(),
          href: $(el).attr('href')
        })).get(),
        external: $('a[href^="http"]').not('[href*="bugal.com.au"]').map((i, el) => ({
          text: $(el).text().trim(),
          href: $(el).attr('href')
        })).get()
      }
    };
    
    // Calculate content quality score
    let qualityScore = 0;
    if (analysis.wordCount > 500) qualityScore += 20;
    if (analysis.wordCount > 1000) qualityScore += 10;
    if (analysis.h2Count > 0) qualityScore += 15;
    if (analysis.h3Count > 0) qualityScore += 10;
    if (analysis.hasLists) qualityScore += 10;
    if (analysis.hasImages) qualityScore += 10;
    if (analysis.hasCallToAction) qualityScore += 10;
    if (analysis.metaDescription.length > 120 && analysis.metaDescription.length < 160) qualityScore += 15;
    
    analysis.qualityScore = qualityScore;
    
    console.log(`   ✅ Status: ${response.status}`);
    console.log(`   📝 Word count: ${analysis.wordCount}`);
    console.log(`   🏆 Quality score: ${analysis.qualityScore}/100`);
    console.log(`   📊 H1: "${analysis.h1}"`);
    console.log(`   📊 H2 count: ${analysis.h2Count}`);
    console.log(`   🖼️  Images: ${analysis.imageCount} (${analysis.imageAltCount} with alt text)`);
    console.log(`   🔗 Links: ${analysis.linkCount} total (${analysis.internalLinkCount} internal, ${analysis.externalLinkCount} external)`);
    
    return analysis;
    
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
    return {
      url: page.url,
      title: page.title,
      slug: page.slug,
      status: 'error',
      error: error.message,
      qualityScore: 0
    };
  }
}

async function analyzeJourneyFeature() {
  try {
    console.log('🚀 Starting comprehensive analysis of "Starting a Support Provider Journey" feature...\n');
    console.log(`📊 Analyzing ${journeyPages.length} pages...\n`);
    
    const results = [];
    let successCount = 0;
    let errorCount = 0;
    
    for (const page of journeyPages) {
      const analysis = await analyzePage(page);
      results.push(analysis);
      
      if (analysis.status === 'success') {
        successCount++;
      } else {
        errorCount++;
      }
      
      // Small delay to be respectful to the server
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    // Generate comprehensive report
    console.log('\n' + '='.repeat(80));
    console.log('📊 COMPREHENSIVE ANALYSIS REPORT');
    console.log('='.repeat(80));
    
    console.log(`\n📈 OVERALL STATISTICS:`);
    console.log(`   ✅ Successfully analyzed: ${successCount} pages`);
    console.log(`   ❌ Failed to analyze: ${errorCount} pages`);
    console.log(`   📊 Success rate: ${((successCount / journeyPages.length) * 100).toFixed(1)}%`);
    
    // Content quality analysis
    const successfulResults = results.filter(r => r.status === 'success');
    const avgWordCount = successfulResults.reduce((sum, r) => sum + r.wordCount, 0) / successfulResults.length;
    const avgQualityScore = successfulResults.reduce((sum, r) => sum + r.qualityScore, 0) / successfulResults.length;
    const totalImages = successfulResults.reduce((sum, r) => sum + r.imageCount, 0);
    const totalLinks = successfulResults.reduce((sum, r) => sum + r.linkCount, 0);
    
    console.log(`\n📝 CONTENT QUALITY:`);
    console.log(`   📊 Average word count: ${Math.round(avgWordCount)}`);
    console.log(`   🏆 Average quality score: ${Math.round(avgQualityScore)}/100`);
    console.log(`   🖼️  Total images: ${totalImages}`);
    console.log(`   🔗 Total links: ${totalLinks}`);
    
    // SEO analysis
    const pagesWithMetaDesc = successfulResults.filter(r => r.metaDescription.length > 0).length;
    const pagesWithH1 = successfulResults.filter(r => r.h1.length > 0).length;
    const pagesWithH2 = successfulResults.filter(r => r.h2Count > 0).length;
    const pagesWithImages = successfulResults.filter(r => r.imageCount > 0).length;
    const pagesWithAltText = successfulResults.filter(r => r.imageAltCount > 0).length;
    
    console.log(`\n🔍 SEO ANALYSIS:`);
    console.log(`   📝 Pages with meta descriptions: ${pagesWithMetaDesc}/${successfulResults.length}`);
    console.log(`   📊 Pages with H1 tags: ${pagesWithH1}/${successfulResults.length}`);
    console.log(`   📊 Pages with H2 tags: ${pagesWithH2}/${successfulResults.length}`);
    console.log(`   🖼️  Pages with images: ${pagesWithImages}/${successfulResults.length}`);
    console.log(`   🖼️  Pages with alt text: ${pagesWithAltText}/${successfulResults.length}`);
    
    // Identify issues and opportunities
    console.log(`\n⚠️  IDENTIFIED ISSUES:`);
    
    const shortContentPages = successfulResults.filter(r => r.wordCount < 500);
    if (shortContentPages.length > 0) {
      console.log(`   📝 ${shortContentPages.length} pages with short content (<500 words):`);
      shortContentPages.forEach(page => {
        console.log(`      - ${page.title} (${page.wordCount} words)`);
      });
    }
    
    const noMetaDescPages = successfulResults.filter(r => !r.metaDescription);
    if (noMetaDescPages.length > 0) {
      console.log(`   📝 ${noMetaDescPages.length} pages without meta descriptions:`);
      noMetaDescPages.forEach(page => {
        console.log(`      - ${page.title}`);
      });
    }
    
    const noH1Pages = successfulResults.filter(r => !r.h1);
    if (noH1Pages.length > 0) {
      console.log(`   📝 ${noH1Pages.length} pages without H1 tags:`);
      noH1Pages.forEach(page => {
        console.log(`      - ${page.title}`);
      });
    }
    
    const lowQualityPages = successfulResults.filter(r => r.qualityScore < 50);
    if (lowQualityPages.length > 0) {
      console.log(`   📝 ${lowQualityPages.length} pages with low quality scores (<50):`);
      lowQualityPages.forEach(page => {
        console.log(`      - ${page.title} (${page.qualityScore}/100)`);
      });
    }
    
    // Detailed page analysis
    console.log(`\n📋 DETAILED PAGE ANALYSIS:`);
    successfulResults.forEach((page, index) => {
      console.log(`\n${index + 1}. ${page.title}`);
      console.log(`   URL: ${page.url}`);
      console.log(`   Page Title: "${page.pageTitle}"`);
      console.log(`   H1: "${page.h1}"`);
      console.log(`   Meta Description: ${page.metaDescription ? `"${page.metaDescription}"` : 'Missing'}`);
      console.log(`   Word Count: ${page.wordCount}`);
      console.log(`   Quality Score: ${page.qualityScore}/100`);
      console.log(`   Structure: H2(${page.h2Count}) H3(${page.h3Count})`);
      console.log(`   Media: Images(${page.imageCount}) Videos(${page.hasVideos ? 'Yes' : 'No'})`);
      console.log(`   Links: Internal(${page.internalLinkCount}) External(${page.externalLinkCount})`);
      console.log(`   Features: Lists(${page.hasLists ? 'Yes' : 'No'}) CTA(${page.hasCallToAction ? 'Yes' : 'No'}) FAQ(${page.hasFAQ ? 'Yes' : 'No'})`);
    });
    
    // Save detailed results to file
    const fs = require('fs');
    const detailedReport = {
      timestamp: new Date().toISOString(),
      totalPages: journeyPages.length,
      successfulPages: successCount,
      failedPages: errorCount,
      overallStats: {
        avgWordCount: Math.round(avgWordCount),
        avgQualityScore: Math.round(avgQualityScore),
        totalImages,
        totalLinks
      },
      seoStats: {
        pagesWithMetaDesc,
        pagesWithH1,
        pagesWithH2,
        pagesWithImages,
        pagesWithAltText
      },
      issues: {
        shortContentPages: shortContentPages.map(p => ({ title: p.title, wordCount: p.wordCount })),
        noMetaDescPages: noMetaDescPages.map(p => ({ title: p.title })),
        noH1Pages: noH1Pages.map(p => ({ title: p.title })),
        lowQualityPages: lowQualityPages.map(p => ({ title: p.title, qualityScore: p.qualityScore }))
      },
      detailedAnalysis: successfulResults
    };
    
    fs.writeFileSync('journey-feature-analysis.json', JSON.stringify(detailedReport, null, 2));
    console.log(`\n💾 Detailed analysis saved to: journey-feature-analysis.json`);
    
    console.log(`\n🎯 NEXT STEPS:`);
    console.log(`   1. Review the detailed analysis above`);
    console.log(`   2. Check the saved JSON file for complete data`);
    console.log(`   3. Identify priority pages for improvement`);
    console.log(`   4. Develop SEO optimization strategy`);
    
  } catch (error) {
    console.error('❌ Error during analysis:', error);
  }
}

// Run the analysis
analyzeJourneyFeature().catch(console.error);
