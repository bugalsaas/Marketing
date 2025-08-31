const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Testimonial data extracted from the frontend component
const testimonialData = [
  {
    name: "Sarah Johnson",
    role: "Independent Support Worker",
    company: "Sarah's Support Services",
    content: "Bugal has completely transformed how I manage my NDIS practice. The time tracking and invoicing features save me hours every week, and the compliance tools give me peace of mind. I can't imagine running my practice without it!",
    rating: 5,
    category: "independent",
    featured: true,
    visible: true
  },
  {
    name: "Michael Chen",
    role: "Support Coordinator",
    company: "Chen Care Coordination",
    content: "As a support coordinator, I need to manage multiple clients and ensure everything is compliant. Bugal makes this effortless with its comprehensive client management and reporting features. Highly recommended!",
    rating: 5,
    category: "coordinators",
    featured: false,
    visible: true
  },
  {
    name: "Emma Davis",
    role: "Occupational Therapist",
    company: "Davis Therapy Services",
    content: "The shift management and documentation features are exactly what I needed. Bugal has streamlined my entire workflow and helped me provide better service to my clients. The mobile app is fantastic too!",
    rating: 5,
    category: "independent",
    featured: false,
    visible: true
  },
  {
    name: "David Wilson",
    role: "Team Leader",
    company: "Wilson Support Team",
    content: "Managing a team of support workers used to be a nightmare. Bugal has simplified everything from scheduling to reporting. My team loves how easy it is to use, and I love the comprehensive analytics.",
    rating: 5,
    category: "teams",
    featured: false,
    visible: true
  },
  {
    name: "Lisa Brown",
    role: "Independent Support Worker",
    company: "Brown Care Services",
    content: "I was spending so much time on admin tasks before Bugal. Now I can focus on what I do best - supporting my clients. The financial reporting has also helped me understand my business better.",
    rating: 5,
    category: "independent",
    featured: false,
    visible: true
  },
  {
    name: "James Miller",
    role: "Support Worker",
    company: "Miller Support Services",
    content: "Bugal's incident reporting and compliance features have been a lifesaver. I always know I'm meeting NDIS requirements, and the system guides me through any complex situations.",
    rating: 5,
    category: "independent",
    featured: false,
    visible: true
  },
  {
    name: "Rachel Green",
    role: "Team Coordinator",
    company: "Green Support Group",
    content: "Coordinating multiple support workers across different locations was challenging until we found Bugal. The centralized system and real-time updates have made our operations so much more efficient.",
    rating: 5,
    category: "teams",
    featured: false,
    visible: true
  },
  {
    name: "Thomas Anderson",
    role: "Independent Support Worker",
    company: "Anderson Care",
    content: "Living in a remote area, I need reliable software that works anywhere. Bugal's cloud-based system and mobile app have been perfect for my needs. The offline capabilities are impressive too.",
    rating: 5,
    category: "independent",
    featured: false,
    visible: true
  },
  {
    name: "Jennifer Lee",
    role: "Support Coordinator",
    company: "Lee Care Coordination",
    content: "The reporting and analytics features have given me insights I never had before. I can now track outcomes, identify trends, and provide better support to my clients. Bugal has revolutionized how I work.",
    rating: 5,
    category: "coordinators",
    featured: false,
    visible: true
  },
  {
    name: "Robert Taylor",
    role: "Team Manager",
    company: "Taylor Support Services",
    content: "Managing compliance across a large team was overwhelming until we implemented Bugal. The automated compliance checks and centralized documentation have reduced our administrative burden significantly.",
    rating: 5,
    category: "teams",
    featured: false,
    visible: true
  },
  {
    name: "Amanda White",
    role: "Independent Support Worker",
    company: "White Care Solutions",
    content: "The financial management tools are incredible. I can track my income, manage expenses, and generate professional invoices in minutes. Bugal has made me feel like a real business owner.",
    rating: 5,
    category: "independent",
    featured: false,
    visible: true
  },
  {
    name: "Christopher Martin",
    role: "Support Worker",
    company: "Martin Support",
    content: "The mobile app is a game-changer. I can track time, log incidents, and update client notes while I'm on the go. It's made my work so much more efficient and professional.",
    rating: 5,
    category: "independent",
    featured: false,
    visible: true
  },
  {
    name: "Michelle Garcia",
    role: "Team Leader",
    company: "Garcia Support Team",
    content: "Our team productivity has increased by 30% since switching to Bugal. The streamlined workflows and automated processes have eliminated so much manual work. Highly recommend for any support team.",
    rating: 5,
    category: "teams",
    featured: false,
    visible: true
  },
  {
    name: "Kevin Rodriguez",
    role: "Support Coordinator",
    company: "Rodriguez Care",
    content: "The client management system is comprehensive and intuitive. I can track everything from support plans to progress reports in one place. Bugal has transformed how I coordinate care.",
    rating: 5,
    category: "coordinators",
    featured: false,
    visible: true
  },
  {
    name: "Stephanie Thompson",
    role: "Independent Support Worker",
    company: "Thompson Care Services",
    content: "I love how Bugal grows with my business. As I've expanded my services, the platform has adapted perfectly. The scalability and flexibility are exactly what I needed.",
    rating: 5,
    category: "independent",
    featured: false,
    visible: true
  },
  {
    name: "Daniel Clark",
    role: "Support Worker",
    company: "Clark Support",
    content: "The compliance features give me confidence that I'm meeting all NDIS requirements. The automated reminders and checklists ensure I never miss important deadlines or requirements.",
    rating: 5,
    category: "independent",
    featured: false,
    visible: true
  },
  {
    name: "Nicole Lewis",
    role: "Team Coordinator",
    company: "Lewis Support Group",
    content: "Managing schedules and rosters used to take hours. With Bugal, it's done in minutes. The drag-and-drop interface and automated conflict detection are brilliant.",
    rating: 5,
    category: "teams",
    featured: false,
    visible: true
  },
  {
    name: "Matthew Hall",
    role: "Support Coordinator",
    company: "Hall Care Coordination",
    content: "The reporting capabilities are outstanding. I can generate detailed reports for NDIS reviews, funding applications, and quality assurance. It's made my role so much more effective.",
    rating: 5,
    category: "coordinators",
    featured: false,
    visible: true
  },
  {
    name: "Jessica Allen",
    role: "Independent Support Worker",
    company: "Allen Care Services",
    content: "Bugal has professionalized my practice. The polished invoices, comprehensive documentation, and professional appearance have helped me win more clients and charge premium rates.",
    rating: 5,
    category: "independent",
    featured: false,
    visible: true
  },
  {
    name: "Andrew Young",
    role: "Support Worker",
    company: "Young Support",
    content: "The offline functionality is incredible. I can work in areas with poor internet coverage and everything syncs when I'm back online. Perfect for community-based support work.",
    rating: 5,
    category: "independent",
    featured: false,
    visible: true
  },
  {
    name: "Rebecca King",
    role: "Team Manager",
    company: "King Support Services",
    content: "Our compliance audit scores have improved dramatically since implementing Bugal. The automated compliance tracking and documentation have made us audit-ready at all times.",
    rating: 5,
    category: "teams",
    featured: false,
    visible: true
  },
  {
    name: "Steven Wright",
    role: "Support Coordinator",
    company: "Wright Care",
    content: "The integration with other systems is seamless. I can import data from various sources and export reports in multiple formats. Bugal works with my existing workflow perfectly.",
    rating: 5,
    category: "coordinators",
    featured: false,
    visible: true
  },
  {
    name: "Laura Scott",
    role: "Independent Support Worker",
    company: "Scott Care Solutions",
    content: "The customer support is exceptional. Any questions I have are answered quickly and thoroughly. The team really understands NDIS requirements and can help with complex situations.",
    rating: 5,
    category: "independent",
    featured: false,
    visible: true
  },
  {
    name: "Ryan Baker",
    role: "Support Worker",
    company: "Baker Support",
    content: "The time tracking is so accurate and easy to use. I can focus on my clients knowing that my time is being recorded properly. The automatic calculations save me so much time.",
    rating: 5,
    category: "independent",
    featured: false,
    visible: true
  },
  {
    name: "Hannah Adams",
    role: "Team Leader",
    company: "Adams Support Team",
    content: "Our team communication has improved significantly with Bugal. The centralized messaging and file sharing have eliminated the confusion that used to come with multiple communication channels.",
    rating: 5,
    category: "teams",
    featured: false,
    visible: true
  },
  {
    name: "Brandon Nelson",
    role: "Support Coordinator",
    company: "Nelson Care Coordination",
    content: "The goal tracking and progress monitoring features are invaluable. I can see exactly how my clients are progressing and adjust support plans accordingly. It's made me a better coordinator.",
    rating: 5,
    category: "coordinators",
    featured: false,
    visible: true
  },
  {
    name: "Ashley Carter",
    role: "Independent Support Worker",
    company: "Carter Care Services",
    content: "Bugal has given me the confidence to expand my business. The professional tools and comprehensive support have made scaling up much less daunting. I'm excited about the future.",
    rating: 5,
    category: "independent",
    featured: false,
    visible: true
  },
  {
    name: "Joshua Mitchell",
    role: "Support Worker",
    company: "Mitchell Support",
    content: "The incident reporting system is comprehensive and user-friendly. I can report incidents quickly and accurately, knowing that all the necessary information is captured for compliance purposes.",
    rating: 5,
    category: "independent",
    featured: false,
    visible: true
  }
];

async function migrateTestimonials() {
  try {
    console.log('Starting testimonial migration...');
    
    // Clear existing testimonials
    await prisma.testimonial.deleteMany({});
    console.log('Cleared existing testimonials');
    
    // Insert new testimonials
    const createdTestimonials = await prisma.testimonial.createMany({
      data: testimonialData
    });
    
    console.log(`Successfully migrated ${createdTestimonials.count} testimonials`);
    
    // Verify the migration
    const totalTestimonials = await prisma.testimonial.count();
    console.log(`Total testimonials in database: ${totalTestimonials}`);
    
    // Show sample of migrated data
    const sampleTestimonials = await prisma.testimonial.findMany({
      take: 5,
      orderBy: { createdAt: 'asc' }
    });
    
    console.log('\nSample migrated testimonials:');
    sampleTestimonials.forEach(testimonial => {
      console.log(`- ${testimonial.name} (${testimonial.role}) - ${testimonial.rating} stars`);
    });
    
    // Show category breakdown
    const categoryStats = await prisma.testimonial.groupBy({
      by: ['category'],
      _count: {
        category: true
      }
    });
    
    console.log('\nCategory breakdown:');
    categoryStats.forEach(stat => {
      console.log(`- ${stat.category}: ${stat._count.category} testimonials`);
    });
    
  } catch (error) {
    console.error('Error during testimonial migration:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the migration
migrateTestimonials();
