const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// New and enhanced FAQs based on website content and SEO optimization
const enhancedFAQData = [
  // Getting Started - Enhanced and new
  {
    question: "Why do I have to complete Profile & Business Settings?",
    answer: "Setting up your profile and business settings in Bugal is crucial for smooth operations, especially in invoicing. Accurate information here is essential to avoid payment delays and ensures your business details are properly configured for NDIS compliance. This includes your ABN, GST registration status, business address, and contact information that will appear on all your invoices and documentation.",
    category: "Getting Started",
    order: 1,
    visible: true
  },
  {
    question: "What is on the Dashboard?",
    answer: "Welcome to the Bugal Dashboard, your central hub for practice management. Here, you'll find real-time insights, scheduling, and tools to streamline your independent support work. The dashboard displays upcoming shifts, recent activities, financial summaries, compliance alerts, and quick access to all major features including client management, invoicing, and reporting tools.",
    category: "Getting Started",
    order: 2,
    visible: true
  },
  {
    question: "How do I create a Contact?",
    answer: "Creating contacts in Bugal is simple but important. These contacts serve as the foundation for appointments, invoicing, and client management, streamlining your practice from start to finish. Go to Contacts > New Contact, fill in the participant's details including their NDIS plan number, support coordinator information, and any specific requirements or preferences they may have.",
    category: "Getting Started",
    order: 3,
    visible: true
  },
  {
    question: "How do I create a Service Agreement?",
    answer: "Service Agreements are your best ally when onboarding new clients with Bugal. They lay the groundwork for expectations and services, ensuring a smooth and transparent start to your professional relationship. Create comprehensive agreements that outline your services, rates, cancellation policies, and NDIS compliance requirements to protect both you and your clients.",
    category: "Getting Started",
    order: 4,
    visible: true
  },
  {
    question: "How do I create a Shift?",
    answer: "Creating shifts in Bugal simplifies time management. Efficiently create shifts, assign to Staff if required and optimize your workflow with ease. Navigate to Shifts > New Shift, select your client, set the date and time, choose the appropriate support item codes, and add any specific notes or requirements for that particular session.",
    category: "Getting Started",
    order: 5,
    visible: true
  },
  {
    question: "How do I create an Invoice?",
    answer: "Creating an invoice in Bugal is a breeze. Easily generate professional invoices, track payments, and manage your finances with our intuitive invoicing tool. Select the completed shifts you want to invoice, review the automatically calculated amounts including GST, add any additional charges or notes, and send directly to your client or their plan manager.",
    category: "Getting Started",
    order: 6,
    visible: true
  },
  {
    question: "How to create an Expense?",
    answer: "Creating an expense in Bugal is straightforward. Effectively track your business expenditures, simplify financial management, and stay organised effortlessly. Record all business-related expenses including travel costs, equipment purchases, training fees, and other operational costs to maintain accurate financial records and maximize your tax deductions.",
    category: "Getting Started",
    order: 7,
    visible: true
  },
  {
    question: "How to create a Report?",
    answer: "Generating a report in Bugal is a snap. Gain valuable insights, analyze data, and make informed decisions with our user-friendly reporting feature. Access comprehensive reports on your practice performance, client progress, financial summaries, compliance status, and time utilization to help you optimize your operations and demonstrate value to stakeholders.",
    category: "Getting Started",
    order: 8,
    visible: true
  },
  {
    question: "How to add Bugal to my home page on my phone?",
    answer: "For iPhone: 1) Open Safari and go to www.bugal.com.au, 2) Tap the Share button (square with arrow), 3) Select 'Add to Home Screen', 4) Customize the name and tap 'Add'. For Android: 1) Open Chrome and visit www.bugal.com.au, 2) Tap the three dots menu, 3) Select 'Add to Home screen', 4) Customize the name and tap 'Add'. This creates a convenient shortcut for quick access to Bugal from your phone's home screen.",
    category: "Getting Started",
    order: 9,
    visible: true
  },

  // Enhanced NDIS Compliance
  {
    question: "What are the NDIS Practice Standards and how do I implement them?",
    answer: "The NDIS Practice Standards include Rights and Responsibilities, Governance and Management, Provision of Supports, Support Environment, and Quality and Safeguarding. These standards ensure you provide safe, quality services while respecting participant rights. Bugal's compliance tools help you meet these standards automatically with built-in checks, incident reporting, worker screening tracking, and compliance monitoring systems.",
    category: "NDIS Compliance",
    order: 10,
    visible: true
  },
  {
    question: "How do I maintain NDIS compliance throughout my practice?",
    answer: "Maintaining NDIS compliance involves regular monitoring of worker screening checks, incident reporting, participant feedback, and quality assurance processes. Bugal provides automated compliance tracking, alerts for upcoming renewals, templates for required documentation, and regular updates on NDIS regulation changes to keep your practice compliant and up-to-date.",
    category: "NDIS Compliance",
    order: 11,
    visible: true
  },

  // Enhanced Business Setup
  {
    question: "What legal requirements do I need to meet as an NDIS provider?",
    answer: "As an NDIS provider, you need to meet several legal requirements including business registration, appropriate insurance coverage, worker screening checks, compliance with NDIS Practice Standards, and adherence to relevant state and federal laws. Bugal helps you track these requirements and provides reminders for renewals and compliance deadlines.",
    category: "Business Setup",
    order: 12,
    visible: true
  },
  {
    question: "How do I set up proper record keeping for NDIS compliance?",
    answer: "Proper record keeping for NDIS compliance involves maintaining detailed records of all support provided, participant progress, incident reports, worker qualifications, and financial transactions. Bugal's comprehensive record-keeping system automatically organizes and stores all required information, making it easy to demonstrate compliance during audits and reviews.",
    category: "Business Setup",
    order: 13,
    visible: true
  },

  // Enhanced Financial Management
  {
    question: "How do I handle GST correctly for NDIS services?",
    answer: "NDIS services are generally GST-free, but you must still register for GST if your annual turnover exceeds $75,000. Bugal automatically handles GST calculations, ensures your invoices are NDIS-compliant, and provides clear financial reporting to help you manage your tax obligations correctly and avoid compliance issues.",
    category: "Financial Management",
    order: 14,
    visible: true
  },
  {
    question: "What financial records should I keep for tax purposes?",
    answer: "Keep all income records (invoices, payment receipts), expense records (receipts, bank statements), GST records, worker screening costs, insurance premiums, and any other business-related expenses. Bugal automatically organizes these records and generates reports to simplify your tax preparation and ensure you're claiming all eligible deductions.",
    category: "Financial Management",
    order: 15,
    visible: true
  },

  // Enhanced Features & Usage
  {
    question: "How does Bugal help with participant goal tracking?",
    answer: "Bugal's goal tracking system allows you to set, monitor, and report on participant goals as required by NDIS plans. Track progress, document achievements, and generate comprehensive reports that demonstrate the value of your services to participants, their families, and NDIS planners. This feature helps ensure your services align with NDIS requirements and participant outcomes.",
    category: "Features & Usage",
    order: 16,
    visible: true
  },
  {
    question: "Can I manage multiple participants and their support plans?",
    answer: "Yes, Bugal is designed to handle multiple participants efficiently. Each participant has their own profile with individual support plans, goals, schedules, and documentation. The system allows you to switch between participants easily, maintain separate records, and ensure each person receives personalized support while maintaining compliance with their specific NDIS plan requirements.",
    category: "Features & Usage",
    order: 17,
    visible: true
  },
  {
    question: "How does Bugal handle shift scheduling and management?",
    answer: "Bugal's shift management system allows you to create, schedule, and manage all your support sessions efficiently. Set recurring schedules, handle last-minute changes, assign staff if needed, and track actual time spent versus planned time. The system integrates with invoicing to automatically generate bills based on completed shifts and helps you optimize your schedule for maximum efficiency.",
    category: "Features & Usage",
    order: 18,
    visible: true
  },

  // Enhanced Technical Support
  {
    question: "What training and support does Bugal provide?",
    answer: "Bugal provides comprehensive training including free onboarding support, video tutorials, webinars, and a detailed knowledge base. Our support team offers personalized setup assistance, ongoing training, and regular updates on new features. Premium plans include priority support and dedicated account management to ensure your success with the platform.",
    category: "Technical Support",
    order: 19,
    visible: true
  },
  {
    question: "How do I backup and secure my data in Bugal?",
    answer: "Bugal automatically backs up your data with bank-level security, end-to-end encryption, and regular security audits. Your data is protected and never shared with third parties. We're compliant with Australian privacy laws and NDIS data requirements. You can also export your data at any time for additional backup or migration purposes.",
    category: "Technical Support",
    order: 20,
    visible: true
  },

  // New SEO-optimized FAQs
  {
    question: "What makes Bugal different from other NDIS management software?",
    answer: "Bugal is specifically designed for NDIS support providers with built-in compliance features, NDIS-specific invoicing, and comprehensive support for the unique requirements of disability support work. Unlike generic business software, Bugal understands NDIS regulations, support item codes, and compliance requirements, saving you time and ensuring you meet all necessary standards automatically.",
    category: "Features & Usage",
    order: 21,
    visible: true
  },
  {
    question: "How does Bugal help me grow my NDIS support business?",
    answer: "Bugal helps you grow your business by streamlining administrative tasks, improving compliance, providing professional invoicing, and giving you insights into your practice performance. With more time for client care and better business management tools, you can focus on expanding your services, taking on more participants, and building a sustainable, profitable practice.",
    category: "Business Setup",
    order: 22,
    visible: true
  },
  {
    question: "Can I use Bugal for both individual and team-based support work?",
    answer: "Yes, Bugal is designed to work for both individual support workers and teams. Individual workers can manage their own practice efficiently, while team leaders can coordinate multiple workers, manage schedules, and maintain oversight of all operations. The system scales with your business, whether you're working solo or managing a growing team of support workers.",
    category: "Features & Usage",
    order: 23,
    visible: true
  },
  {
    question: "How does Bugal ensure I meet NDIS quality and safeguarding requirements?",
    answer: "Bugal's quality and safeguarding features include incident reporting systems, worker screening tracking, participant feedback collection, and compliance monitoring. The system helps you maintain detailed records, report incidents promptly, and demonstrate your commitment to providing safe, quality services that meet NDIS standards and protect both participants and workers.",
    category: "NDIS Compliance",
    order: 24,
    visible: true
  },
  {
    question: "What reporting capabilities does Bugal offer for NDIS compliance?",
    answer: "Bugal provides comprehensive reporting for NDIS compliance including participant progress reports, incident summaries, worker qualification tracking, financial summaries, and compliance status reports. These reports help you demonstrate value to participants and their families, maintain compliance with NDIS requirements, and make informed decisions about your practice development.",
    category: "Features & Usage",
    order: 25,
    visible: true
  }
];

async function enhanceFAQs() {
  try {
    console.log('Starting FAQ enhancement...');
    
    // Clear existing FAQs
    await prisma.fAQ.deleteMany({});
    console.log('Cleared existing FAQs');
    
    // Insert enhanced FAQs
    const createdFAQs = await prisma.fAQ.createMany({ data: enhancedFAQData });
    console.log(`Successfully created ${createdFAQs.count} enhanced FAQs`);
    
    // Verify the data
    const totalFAQs = await prisma.fAQ.count();
    console.log(`Total FAQs in database: ${totalFAQs}`);
    
    // Show sample of enhanced FAQs
    const sampleFAQs = await prisma.fAQ.findMany({ 
      take: 5, 
      orderBy: { order: 'asc' },
      select: { question: true, category: true, order: true }
    });
    
    console.log('\nSample enhanced FAQs:');
    sampleFAQs.forEach(faq => {
      console.log(`- ${faq.question} (${faq.category}) - Order: ${faq.order}`);
    });
    
    // Show category breakdown
    const categoryStats = await prisma.fAQ.groupBy({ 
      by: ['category'], 
      _count: { category: true } 
    });
    
    console.log('\nCategory breakdown:');
    categoryStats.forEach(stat => {
      console.log(`- ${stat.category}: ${stat._count.category} FAQs`);
    });
    
    console.log('\nFAQ enhancement completed successfully!');
    
  } catch (error) {
    console.error('Error during FAQ enhancement:', error);
  } finally {
    await prisma.$disconnect();
  }
}

enhanceFAQs();
