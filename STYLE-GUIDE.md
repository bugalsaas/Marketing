# 🎨 Bugal Marketing Website - Style Guide & Design System

_Last updated: January 2025_

## 🌈 Color Palette

### Primary Colors
Our color palette is built around trust, professionalism, and accessibility, reflecting Bugal's commitment to being the most trusted NDIS practice management tool.

#### **Primary Blue (Interactive)**
- **Hex:** `#2563eb` (Medium-bright blue)
- **Usage:** Primary buttons, links, interactive elements
- **Accessibility:** High contrast, meets WCAG AA standards
- **CSS Variable:** `--color-primary`

#### **Primary Blue (Static)**
- **Hex:** `#2563eb` (Medium-bright blue)
- **Usage:** Icons, borders, static elements
- **CSS Variable:** `--color-primary-static`

#### **Dark Navy**
- **Hex:** `#1e3a8a` (Deep navy blue)
- **Usage:** Headings, primary text, emphasis
- **CSS Variable:** `--color-navy`

#### **Charcoal**
- **Hex:** `#1f2937` (Very dark navy/charcoal)
- **Usage:** Body text, secondary headings
- **CSS Variable:** `--color-charcoal`

#### **Medium Grey**
- **Hex:** `#6b7280` (Medium-light grey)
- **Usage:** Secondary text, borders, muted elements
- **CSS Variable:** `--color-grey`

### Color Usage Guidelines

#### **Interactive Elements**
- **Primary Buttons:** Use Primary Blue with hover states
- **Links:** Primary Blue with underline on hover
- **Form Elements:** Primary Blue for focus states

#### **Text Hierarchy**
- **Main Headings:** Dark Navy
- **Sub Headings:** Charcoal
- **Body Text:** Charcoal
- **Secondary Text:** Medium Grey
- **Muted Text:** Light Grey variants

#### **Backgrounds & Borders**
- **Primary Background:** White (`#ffffff`)
- **Secondary Background:** Light Grey (`#f9fafb`)
- **Borders:** Medium Grey with opacity variants

## 🔤 Typography

### Font Family
- **Primary Font:** Geist (Modern, clean, professional)
- **Monospace Font:** Geist Mono (For code, technical content)
- **Fallback:** System fonts (San Francisco, Segoe UI, etc.)

### Font Sizes
```css
/* Heading Scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

### Font Weights
- **Light:** 300
- **Regular:** 400
- **Medium:** 500
- **Semibold:** 600
- **Bold:** 700

## 🧱 Component Design

### Buttons

#### **Primary Button**
```css
.btn-primary {
  background-color: var(--color-primary);
  color: white;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background-color: var(--color-navy);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}
```

#### **Secondary Button**
```css
.btn-secondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background-color: var(--color-primary);
  color: white;
}
```

### Cards
```css
.card {
  background-color: white;
  border: 1px solid var(--color-grey);
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

### Forms
```css
.form-input {
  border: 2px solid var(--color-grey);
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-size: var(--text-base);
  transition: border-color 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
```

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Medium devices */
--breakpoint-lg: 1024px;  /* Large devices */
--breakpoint-xl: 1280px;  /* Extra large devices */
--breakpoint-2xl: 1536px; /* 2X large devices */
```

### Container Max Widths
```css
.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container { max-width: 640px; }
}

@media (min-width: 768px) {
  .container { max-width: 768px; }
}

@media (min-width: 1024px) {
  .container { max-width: 1024px; }
}

@media (min-width: 1280px) {
  .container { max-width: 1280px; }
}
```

## 🎯 Design Principles

### **1. Trust & Professionalism**
- Clean, modern aesthetic
- Consistent spacing and alignment
- Professional color scheme
- Clear visual hierarchy

### **2. Accessibility First**
- High contrast ratios
- Clear focus states
- Readable typography
- Keyboard navigation support

### **3. Mobile-First Design**
- Responsive layouts
- Touch-friendly interactions
- Optimized for all screen sizes
- Fast loading times

### **4. Conversion Focused**
- Clear call-to-action buttons
- Strategic use of white space
- Compelling visual hierarchy
- Trust-building elements

## 🔧 CSS Variables (Design Tokens)

```css
:root {
  /* Colors */
  --color-primary: #2563eb;
  --color-primary-static: #2563eb;
  --color-navy: #1e3a8a;
  --color-charcoal: #1f2937;
  --color-grey: #6b7280;
  
  /* Typography */
  --font-family-sans: 'Geist', system-ui, sans-serif;
  --font-family-mono: 'Geist Mono', monospace;
  
  /* Spacing */
  --spacing-xs: 0.25rem;   /* 4px */
  --spacing-sm: 0.5rem;    /* 8px */
  --spacing-md: 1rem;      /* 16px */
  --spacing-lg: 1.5rem;    /* 24px */
  --spacing-xl: 2rem;      /* 32px */
  --spacing-2xl: 3rem;     /* 48px */
  
  /* Border Radius */
  --radius-sm: 0.25rem;    /* 4px */
  --radius-md: 0.5rem;     /* 8px */
  --radius-lg: 0.75rem;    /* 12px */
  --radius-xl: 1rem;       /* 16px */
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
}
```

## 📋 Component Library

### **Navigation Components**
- Header with logo and navigation
- Footer with links and company info
- Mobile navigation menu
- Breadcrumb navigation

### **Content Components**
- Hero sections with CTAs
- Feature cards with icons
- Testimonial displays
- FAQ accordions
- Blog post layouts

### **Interactive Components**
- Forms with validation
- Modal dialogs
- Dropdown menus
- Tabs and accordions
- Loading states

### **Marketing Components**
- Pricing tables
- CTA buttons
- Social proof elements
- Newsletter signup forms

## 🚀 Implementation Guidelines

### **1. Use Design Tokens**
Always use CSS variables instead of hardcoded values:
```css
/* ✅ Good */
.button { background-color: var(--color-primary); }

/* ❌ Bad */
.button { background-color: #2563eb; }
```

### **2. Consistent Spacing**
Use the spacing scale for margins and padding:
```css
/* ✅ Good */
.section { margin-bottom: var(--spacing-xl); }

/* ❌ Bad */
.section { margin-bottom: 32px; }
```

### **3. Responsive Design**
Implement mobile-first responsive design:
```css
/* ✅ Good */
.container { padding: var(--spacing-md); }
@media (min-width: 768px) {
  .container { padding: var(--spacing-lg); }
}
```

### **4. Accessibility**
Ensure all components meet accessibility standards:
- Proper contrast ratios
- Focus states
- ARIA labels
- Keyboard navigation

## 📚 Resources

### **Design Tools**
- **Figma/Sketch:** Component library
- **Storybook:** Component documentation
- **Chromatic:** Visual testing

### **Development Tools**
- **Tailwind CSS:** Utility-first CSS framework
- **shadcn/ui:** Component library
- **TypeScript:** Type safety
- **ESLint/Prettier:** Code quality

---

**Note:** This style guide should be updated as the design system evolves. All team members should follow these guidelines to maintain consistency across the Bugal marketing website.
