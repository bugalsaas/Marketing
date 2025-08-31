const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// FAQ data extracted from the frontend component
const faqData = [
  // Getting Started
  {
    question: "How do I get started as an NDIS support provider?",
    answer: "To get started as an NDIS support provider, you'll need to: 1) Obtain necessary qualifications (Certificate III or IV in Individual Support, or relevant degree), 2) Complete NDIS Worker Screening Check, 3) Get appropriate insurance coverage, 4) Register for an ABN and GST if earning over $75,000, 5) Set up your business structure and compliance systems. Bugal can help you manage all these requirements efficiently.",
    category: "Getting Started",
    order: 1
  },
  {
    question: "What qualifications do I need to become an NDIS support worker?",
    answer: "The minimum qualification is a Certificate III in Individual Support (Disability) or equivalent. However, many providers prefer Certificate IV or higher qualifications. You may also need specific training in areas like mental health, autism support, or complex needs depending on your specialization. Ongoing professional development is also required to maintain NDIS compliance.",
    category: "Getting Started",
    order: 2
  },
  {
    question: "How do I register with the NDIS Commission?",
    answer: "NDIS registration involves: 1) Completing the online application form, 2) Providing evidence of qualifications and experience, 3) Undergoing NDIS Worker Screening Check, 4) Demonstrating compliance with NDIS Practice Standards, 5) Paying registration fees. The process typically takes 2-4 weeks. Bugal helps you maintain compliance once registered.",
    category: "Getting Started",
    order: 3
  },

  // NDIS Compliance
  {
    question: "What are the NDIS Practice Standards I need to follow?",
    answer: "The NDIS Practice Standards include: Rights and Responsibilities, Governance and Management, Provision of Supports, Support Environment, and Quality and Safeguarding. These standards ensure you provide safe, quality services while respecting participant rights. Bugal's compliance tools help you meet these standards automatically.",
    category: "NDIS Compliance",
    order: 4
  },
  {
    question: "How often do I need to complete NDIS Worker Screening?",
    answer: "NDIS Worker Screening Check is valid for 5 years from the date of issue. You must renew before expiration to maintain your registration. The check includes criminal history, working with children checks, and other relevant background checks. Bugal can help you track renewal dates and maintain compliance.",
    category: "NDIS Compliance",
    order: 5
  },
  {
    question: "What incident reporting requirements do I have?",
    answer: "You must report incidents to the NDIS Commission within 24 hours for reportable incidents (serious injury, abuse, neglect, death) and within 5 business days for other incidents. Bugal's incident management system helps you report incidents promptly and maintain proper documentation for compliance.",
    category: "NDIS Compliance",
    order: 6
  },

  // Business Setup
  {
    question: "Do I need to register for GST as an NDIS provider?",
    answer: "You must register for GST if your annual turnover is $75,000 or more. Most NDIS providers exceed this threshold, so GST registration is usually required. You'll need to charge GST on your services and lodge quarterly or monthly BAS returns. Bugal's financial management tools help you handle GST compliance automatically.",
    category: "Business Setup",
    order: 7
  },
  {
    question: "What insurance do I need as an NDIS support provider?",
    answer: "Essential insurance includes: Public Liability Insurance (minimum $10 million), Professional Indemnity Insurance (minimum $2 million), Workers Compensation (if employing staff), and Vehicle Insurance (if providing transport). These protect you and your clients from financial risks. Bugal helps you track insurance renewals and compliance.",
    category: "Business Setup",
    order: 8
  },
  {
    question: "How do I set up my business structure?",
    answer: "Common structures include: Sole Trader (simplest), Partnership (for multiple owners), Company (for liability protection), or Trust (for tax benefits). Consider factors like liability protection, tax implications, and administrative complexity. Consult with an accountant or business advisor to choose the best structure for your situation.",
    category: "Business Setup",
    order: 9
  },

  // Financial Management
  {
    question: "How do I create NDIS-compliant invoices?",
    answer: "NDIS invoices must include: Your business details, participant details, NDIS plan number, support item codes, dates of service, hourly rates, GST amount, and payment terms. Bugal automatically generates compliant invoices with all required information, saving you time and ensuring accuracy.",
    category: "Financial Management",
    order: 10
  },
  {
    question: "What are NDIS support item codes and how do I use them?",
    answer: "Support item codes are standardized codes for different types of support (e.g., 01_010_0106_1_1 for assistance with daily personal activities). You must use the correct codes that match your qualifications and the participant's plan. Bugal's system helps you select appropriate codes and ensures compliance.",
    category: "Financial Management",
    order: 11
  },
  {
    question: "How do I handle superannuation as a support worker?",
    answer: "If you're a sole trader, you're responsible for your own superannuation contributions. If you employ staff, you must pay superannuation guarantee contributions (currently 11% of wages). Bugal helps you track superannuation obligations and maintain proper financial records.",
    category: "Financial Management",
    order: 12
  },

  // Features & Usage
  {
    question: "How do I get started with Bugal?",
    answer: "Getting started is easy! Simply sign up for a free trial, complete your profile setup, and start managing your NDIS practice. Our onboarding wizard will guide you through each step, including importing existing client data and setting up your workflows.",
    category: "Features & Usage",
    order: 13
  },
  {
    question: "What's included in the free trial?",
    answer: "Your 30-day free trial includes access to all features across all plans. You can test everything from client management to financial reporting without any limitations. No credit card required, and you can cancel anytime.",
    category: "Features & Usage",
    order: 14
  },
  {
    question: "How does the client management system work?",
    answer: "Our client management system allows you to store comprehensive client profiles, track support plans, manage goals, and maintain communication history all in one centralized location. You can also track progress, manage documentation, and generate reports for NDIS compliance.",
    category: "Features & Usage",
    order: 15
  },
  {
    question: "Can I use Bugal on my mobile device?",
    answer: "Yes! Bugal is fully responsive and works on all devices. Our mobile app provides full functionality including time tracking, client management, and incident reporting. You can work offline and sync when you're back online, perfect for remote and community-based support work.",
    category: "Features & Usage",
    order: 16
  },
  {
    question: "How does time tracking work?",
    answer: "Our time tracking system allows you to clock in/out for shifts, track breaks, and log specific activities. You can set up different rates for different types of support, and the system automatically calculates total hours and costs. All data syncs with your invoicing system for seamless billing.",
    category: "Features & Usage",
    order: 17
  },

  // Technical Support
  {
    question: "What if I forget my password?",
    answer: "You can reset your password using the 'Forgot Password' link on the login page. We'll send a secure reset link to your registered email address. For security reasons, reset links expire after 24 hours. If you continue having issues, contact our support team.",
    category: "Technical Support",
    order: 18
  },
  {
    question: "How do I update my billing information?",
    answer: "You can update your billing information in your account settings under 'Billing & Subscription'. This includes payment methods, billing address, and subscription plan changes. All changes take effect immediately, and you'll receive confirmation emails for any modifications.",
    category: "Technical Support",
    order: 19
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use enterprise-grade security including SSL encryption, regular security audits, and compliance with Australian privacy laws. Your data is backed up daily and stored securely in Australian data centers. We never share your information with third parties without your explicit consent.",
    category: "Technical Support",
    order: 20
  },
  {
    question: "How do I export my data?",
    answer: "You can export your data in multiple formats including CSV, PDF, and Excel. Go to 'Settings' > 'Data Export' to download your information. This is useful for backup purposes, accounting, or if you need to transfer data to another system. All exports include your complete data history.",
    category: "Technical Support",
    order: 21
  },
  {
    question: "What happens if I cancel my subscription?",
    answer: "When you cancel, you'll continue to have access until the end of your current billing period. After that, your account becomes read-only, allowing you to view and export your data but not make changes. You can reactivate your subscription at any time to regain full access.",
    category: "Technical Support",
    order: 22
  },
  {
    question: "How do I contact customer support?",
    answer: "We offer multiple support channels: Live chat during business hours, email support with 24-hour response time, and phone support for urgent issues. Our support team is trained in NDIS compliance and can help with both technical and compliance-related questions.",
    category: "Technical Support",
    order: 23
  },
  {
    question: "Do you offer training for my team?",
    answer: "Yes! We provide comprehensive training including onboarding sessions, video tutorials, and live webinars. For larger teams, we offer customized training programs and can provide on-site training if needed. All training is included in your subscription at no additional cost.",
    category: "Technical Support",
    order: 24
  },
  {
    question: "Can I integrate Bugal with other systems?",
    answer: "Yes, Bugal offers API access and integrations with popular accounting software like Xero and QuickBooks. We also support data import from other NDIS management systems. Contact our support team to discuss your specific integration needs and we'll help you set it up.",
    category: "Technical Support",
    order: 25
  }
];

async function migrateFAQs() {
  try {
    console.log('Starting FAQ migration...');
    
    // Clear existing FAQs
    await prisma.fAQ.deleteMany({});
    console.log('Cleared existing FAQs');
    
    // Insert new FAQs
    const createdFAQs = await prisma.fAQ.createMany({
      data: faqData
    });
    
    console.log(`Successfully migrated ${createdFAQs.count} FAQs`);
    
    // Verify the migration
    const totalFAQs = await prisma.fAQ.count();
    console.log(`Total FAQs in database: ${totalFAQs}`);
    
    // Show sample of migrated data
    const sampleFAQs = await prisma.fAQ.findMany({
      take: 5,
      orderBy: { order: 'asc' }
    });
    
    console.log('\nSample migrated FAQs:');
    sampleFAQs.forEach(faq => {
      console.log(`- ${faq.question} (${faq.category})`);
    });
    
  } catch (error) {
    console.error('Error during FAQ migration:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the migration
migrateFAQs();
