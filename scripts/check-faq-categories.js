const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkFAQCategories() {
  try {
    console.log('🔍 Checking FAQ categories in database...\n');
    
    // Get all FAQs
    const faqs = await prisma.fAQ.findMany({
      select: {
        id: true,
        question: true,
        category: true,
        visible: true
      },
      orderBy: {
        category: 'asc'
      }
    });

    console.log(`📊 Total FAQs found: ${faqs.length}\n`);

    // Group by category
    const categories = {};
    faqs.forEach(faq => {
      if (!categories[faq.category]) {
        categories[faq.category] = [];
      }
      categories[faq.category].push(faq);
    });

    // Display categories
    Object.keys(categories).forEach(category => {
      const categoryFaqs = categories[category];
      const visibleCount = categoryFaqs.filter(f => f.visible).length;
      
      console.log(`📁 ${category}:`);
      console.log(`   Total: ${categoryFaqs.length} | Visible: ${visibleCount}`);
      
      categoryFaqs.forEach(faq => {
        console.log(`   - ${faq.question} (${faq.visible ? 'Visible' : 'Hidden'})`);
      });
      console.log('');
    });

    // Check for missing categories
    const expectedCategories = [
      'Getting Started',
      'Billing & Payments',
      'Compliance',
      'Security & Privacy',
      'Support & Training',
      'Features & Functionality'
    ];

    console.log('🎯 Expected categories:');
    expectedCategories.forEach(category => {
      const hasFAQs = categories[category] && categories[category].length > 0;
      console.log(`   ${hasFAQs ? '✅' : '❌'} ${category}`);
    });

  } catch (error) {
    console.error('❌ Error checking FAQ categories:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkFAQCategories();
