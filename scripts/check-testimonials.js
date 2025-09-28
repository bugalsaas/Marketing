const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkTestimonials() {
  try {
    console.log('📝 Checking current testimonials status...\n');
    
    // Get all testimonials
    const testimonials = await prisma.testimonial.findMany({
      select: {
        id: true,
        name: true,
        visible: true,
        featured: true,
        createdAt: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    console.log(`📊 Found ${testimonials.length} testimonials in database\n`);
    
    // Show all testimonials with their status
    console.log('📋 Testimonials status:');
    testimonials.forEach((testimonial, index) => {
      const status = testimonial.visible ? '✅ Published' : '📝 Draft';
      const featured = testimonial.featured ? '⭐ Featured' : '📄 Regular';
      console.log(`${index + 1}. ${testimonial.name}`);
      console.log(`   Status: ${status} | Type: ${featured}`);
      console.log(`   ID: ${testimonial.id}\n`);
    });
    
    // Count by status
    const published = testimonials.filter(t => t.visible).length;
    const drafts = testimonials.filter(t => !t.visible).length;
    const featured = testimonials.filter(t => t.featured).length;
    const featuredPublished = testimonials.filter(t => t.featured && t.visible).length;
    const nonFeaturedPublished = testimonials.filter(t => !t.featured && t.visible).length;
    
    console.log(`📈 Summary:`);
    console.log(`✅ Published: ${published}`);
    console.log(`📝 Drafts: ${drafts}`);
    console.log(`⭐ Featured: ${featured}`);
    console.log(`⭐ Featured + Published: ${featuredPublished}`);
    console.log(`📄 Non-featured + Published: ${nonFeaturedPublished}`);
    
  } catch (error) {
    console.error('❌ Error checking testimonials:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the check
checkTestimonials().catch(console.error);
