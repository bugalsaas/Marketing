const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function updateFAQCategories() {
  try {
    console.log('🔄 Updating FAQ categories to match component expectations...\n');
    
    // Category mapping
    const categoryMapping = {
      'Financial Management': 'Billing & Payments',
      'NDIS Compliance': 'Compliance',
      'Technical Support': 'Support & Training',
      'Features & Usage': 'Features & Functionality',
      'Business Setup': 'Getting Started' // Keep this as Getting Started
    };

    let updatedCount = 0;

    for (const [oldCategory, newCategory] of Object.entries(categoryMapping)) {
      console.log(`📝 Updating "${oldCategory}" → "${newCategory}"`);
      
      const result = await prisma.fAQ.updateMany({
        where: {
          category: oldCategory
        },
        data: {
          category: newCategory
        }
      });
      
      console.log(`   ✅ Updated ${result.count} FAQs\n`);
      updatedCount += result.count;
    }

    console.log(`🎉 Successfully updated ${updatedCount} FAQs!`);
    
    // Show final categories
    console.log('\n📊 Final category distribution:');
    const faqs = await prisma.fAQ.findMany({
      select: {
        category: true,
        visible: true
      }
    });

    const categories = {};
    faqs.forEach(faq => {
      if (!categories[faq.category]) {
        categories[faq.category] = { total: 0, visible: 0 };
      }
      categories[faq.category].total++;
      if (faq.visible) {
        categories[faq.category].visible++;
      }
    });

    Object.keys(categories).sort().forEach(category => {
      const { total, visible } = categories[category];
      console.log(`   📁 ${category}: ${visible}/${total} visible`);
    });

  } catch (error) {
    console.error('❌ Error updating FAQ categories:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateFAQCategories();
