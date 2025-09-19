const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function addSecurityFAQs() {
  try {
    console.log('🔒 Adding Security & Privacy FAQs...\n');
    
    const securityFAQs = [
      {
        question: "How does Bugal protect my data and ensure privacy?",
        answer: "Bugal uses enterprise-grade security measures including end-to-end encryption, secure data centers, and compliance with Australian privacy laws. Your data is stored securely in Australian data centers and never shared with third parties without your explicit consent.",
        category: "Security & Privacy",
        order: 1,
        visible: true
      },
      {
        question: "Is my client information secure in Bugal?",
        answer: "Yes, absolutely. All client information is encrypted both in transit and at rest. We follow strict data protection protocols and are compliant with Australian Privacy Principles (APPs) and NDIS data handling requirements.",
        category: "Security & Privacy",
        order: 2,
        visible: true
      },
      {
        question: "Can I control who has access to my data?",
        answer: "Yes, you have full control over data access. You can set user permissions, control who can view or edit specific information, and audit all data access through our comprehensive logging system.",
        category: "Security & Privacy",
        order: 3,
        visible: true
      },
      {
        question: "How often is my data backed up?",
        answer: "Your data is automatically backed up daily with multiple redundant copies stored in secure, geographically distributed locations. We also provide manual backup options for additional peace of mind.",
        category: "Security & Privacy",
        order: 4,
        visible: true
      }
    ];

    for (const faq of securityFAQs) {
      const created = await prisma.fAQ.create({
        data: {
          ...faq,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });
      console.log(`✅ Created: ${created.question}`);
    }

    console.log(`\n🎉 Successfully added ${securityFAQs.length} Security & Privacy FAQs!`);
    
    // Show final category distribution
    console.log('\n📊 Updated category distribution:');
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
    console.error('❌ Error adding Security FAQs:', error);
  } finally {
    await prisma.$disconnect();
  }
}

addSecurityFAQs();
