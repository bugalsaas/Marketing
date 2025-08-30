# Bugal Marketing Website

A modern, conversion-focused marketing website for Bugal - the most trusted NDIS practice management software in Australia.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎯 What's Built

### ✅ Completed Pages
- **Homepage** (`/`) - Hero section, features, testimonials, and multiple CTAs
- **Pricing** (`/pricing`) - Three-tier pricing with features comparison and FAQ
- **Contact** (`/contact`) - Contact form and company information

### ✅ Components
- **Header** - Responsive navigation with mobile menu
- **Footer** - Company links and information
- **UI Components** - Button, Card, Input, Select, etc. (shadcn/ui)

### ✅ Features
- Mobile-first responsive design
- SEO optimized with proper meta tags
- Strong CTAs throughout for conversion
- Modern UI with Tailwind CSS
- TypeScript for type safety

## 🎨 Design System

- **Colors**: Blue primary (#2563eb), grays, whites
- **Typography**: Geist Sans (modern, readable)
- **Components**: shadcn/ui for consistency
- **Icons**: Lucide React icons

## 📱 Pages Structure

```
/
├── / (Homepage)
├── /pricing (Pricing Plans)
├── /contact (Contact Form)
├── /features (Coming Soon)
├── /blog (Coming Soon)
├── /faq (Coming Soon)
└── /admin (Coming Soon)
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Notifications**: Sonner

## 🚧 Next Steps

### Phase 1: Core Marketing Pages (Current)
- [x] Homepage
- [x] Pricing page
- [x] Contact page
- [ ] Features page
- [ ] FAQ page
- [ ] Blog listing page

### Phase 2: Admin Dashboard
- [ ] Authentication system
- [ ] Blog management
- [ ] Testimonial management
- [ ] FAQ management
- [ ] Content management

### Phase 3: Advanced Features
- [ ] Blog post pages
- [ ] Search functionality
- [ ] SEO optimization
- [ ] Performance optimization

## 📊 Performance Targets

- **Lighthouse Score**: 90+ across all metrics
- **Page Load**: <2 seconds
- **Mobile First**: Responsive on all devices
- **SEO**: Optimized for NDIS-related keywords

## 🔧 Development

### File Structure
```
src/
├── app/           # Next.js App Router pages
├── components/    # Reusable UI components
│   ├── ui/       # shadcn/ui components
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/          # Utility functions
└── styles/       # Global styles
```

### Adding New Pages
1. Create new directory in `src/app/`
2. Add `page.tsx` file
3. Update navigation in `Header.tsx`
4. Add to footer links if needed

### Adding New Components
1. Create component file in `src/components/`
2. Import and use in pages
3. Follow existing component patterns

## 🎯 Conversion Optimization

- **Multiple CTAs** on every page
- **Clear value propositions** in hero sections
- **Social proof** with testimonials
- **Risk-free trial** messaging
- **Mobile-optimized** forms and buttons

## 📈 SEO Strategy

- **Target Keywords**: NDIS software, support worker admin tool, practice management
- **Meta Tags**: Optimized for each page
- **Structured Data**: Ready for implementation
- **Performance**: Core Web Vitals optimization

## 🚀 Deployment

The site is ready for deployment to Vercel:

1. Connect GitHub repository
2. Deploy automatically on push
3. Custom domain configuration
4. Environment variables setup

## 📞 Support

For questions or issues:
- **Email**: hello@bugal.com.au
- **Phone**: +61 (0) 2 8000 0000

---

**Built with ❤️ for Bugal - Making NDIS practice management simple and effective.**
