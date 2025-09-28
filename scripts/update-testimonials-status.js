const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function updateTestimonialsStatus() {
  try {
    console.log('📝 Updating testimonials status...\n');
    
    // First, let's see what we're working with
    const allTestimonials = await prisma.testimonial.findMany({
      select: {
        id: true,
        name: true,
        visible: true,
        featured: true
      }
    });
    
    const featuredTestimonials = allTestimonials.filter(t => t.featured);
    const nonFeaturedTestimonials = allTestimonials.filter(t => !t.featured);
    
    console.log(`📊 Current status:`);
    console.log(`⭐ Featured testimonials: ${featuredTestimonials.length}`);
    console.log(`📄 Non-featured testimonials: ${nonFeaturedTestimonials.length}`);
    console.log(`✅ Published non-featured: ${nonFeaturedTestimonials.filter(t => t.visible).length}`);
    console.log(`📝 Draft non-featured: ${nonFeaturedTestimonials.filter(t => !t.visible).length}\n`);
    
    // Update all non-featured testimonials to draft status
    const updateResult = await prisma.testimonial.updateMany({
      where: {
        featured: false,
        visible: true  // Only update those that are currently published
      },
      data: {
        visible: false  // Set to draft
      }
    });
    
    console.log(`✅ Updated ${updateResult.count} non-featured testimonials to draft status\n`);
    
    // Verify the changes
    const updatedTestimonials = await prisma.testimonial.findMany({
      select: {
        id: true,
        name: true,
        visible: true,
        featured: true
      }
    });
    
    const updatedFeatured = updatedTestimonials.filter(t => t.featured);
    const updatedNonFeatured = updatedTestimonials.filter(t => !t.featured);
    
    console.log(`📈 Final status:`);
    console.log(`⭐ Featured testimonials (published): ${updatedFeatured.filter(t => t.visible).length}`);
    console.log(`⭐ Featured testimonials (draft): ${updatedFeatured.filter(t => !t.visible).length}`);
    console.log(`📄 Non-featured testimonials (published): ${updatedNonFeatured.filter(t => t.visible).length}`);
    console.log(`📄 Non-featured testimonials (draft): ${updatedNonFeatured.filter(t => !t.visible).length}\n`);
    
    // Show the featured testimonials that remain published
    console.log(`⭐ Featured testimonials that remain published:`);
    updatedFeatured.filter(t => t.visible).forEach((testimonial, index) => {
      console.log(`  ${index + 1}. ${testimonial.name} (ID: ${testimonial.id})`);
    });
    
    console.log(`\n📝 Non-featured testimonials now in draft:`);
    updatedNonFeatured.filter(t => !t.visible).forEach((testimonial, index) => {
      console.log(`  ${index + 1}. ${testimonial.name} (ID: ${testimonial.id})`);
    });
    
  } catch (error) {
    console.error('❌ Error updating testimonials status:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the update
updateTestimonialsStatus().catch(console.error);
