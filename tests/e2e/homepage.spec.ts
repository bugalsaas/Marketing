import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display homepage content correctly', async ({ page }) => {
    // Check main heading
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    
    // Check hero section
    await expect(page.getByText(/NDIS Practice Management/i)).toBeVisible()
    
    // Check CTA buttons
    await expect(page.getByRole('link', { name: /get started/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /learn more/i })).toBeVisible()
  })

  test('should have working navigation', async ({ page }) => {
    // Check navigation links
    const navLinks = [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Blog', href: '/blog' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact', href: '/contact' },
    ]

    for (const link of navLinks) {
      const navLink = page.getByRole('link', { name: link.name })
      await expect(navLink).toBeVisible()
      await expect(navLink).toHaveAttribute('href', link.href)
    }
  })

  test('should have working CTA buttons', async ({ page }) => {
    // Test "Get Started" button
    const getStartedButton = page.getByRole('link', { name: /get started/i })
    await expect(getStartedButton).toBeVisible()
    
    // Click and verify navigation
    await getStartedButton.click()
    await expect(page).toHaveURL(/.*pricing.*/)
  })

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    
    // Check mobile menu button
    const mobileMenuButton = page.getByRole('button', { name: /menu/i })
    await expect(mobileMenuButton).toBeVisible()
    
    // Open mobile menu
    await mobileMenuButton.click()
    
    // Check mobile navigation
    await expect(page.getByRole('navigation')).toBeVisible()
  })

  test('should have proper meta tags', async ({ page }) => {
    // Check title
    await expect(page).toHaveTitle(/Bugal.*NDIS.*Practice Management/i)
    
    // Check meta description
    const metaDescription = page.locator('meta[name="description"]')
    await expect(metaDescription).toHaveAttribute('content', /.*trusted.*easiest.*use.*practice management.*/i)
  })

  test('should have working footer links', async ({ page }) => {
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    
    // Check footer links
    const footerLinks = [
      'Privacy Policy',
      'Terms of Service',
      'Contact Us',
    ]

    for (const linkText of footerLinks) {
      const footerLink = page.getByRole('link', { name: linkText })
      await expect(footerLink).toBeVisible()
    }
  })

  test('should load images correctly', async ({ page }) => {
    // Check that images are loaded
    const images = page.locator('img')
    await expect(images).toHaveCount(expect.any(Number))
    
    // Wait for images to load
    for (let i = 0; i < await images.count(); i++) {
      const image = images.nth(i)
      await expect(image).toBeVisible()
    }
  })

  test('should have proper accessibility', async ({ page }) => {
    // Check for proper heading hierarchy
    const headings = page.locator('h1, h2, h3, h4, h5, h6')
    await expect(headings).toHaveCount(expect.any(Number))
    
    // Check for alt text on images
    const images = page.locator('img')
    for (let i = 0; i < await images.count(); i++) {
      const image = images.nth(i)
      const alt = await image.getAttribute('alt')
      expect(alt).toBeTruthy()
    }
  })

  test('should handle form submissions correctly', async ({ page }) => {
    // Scroll to contact form if it exists
    const contactForm = page.locator('form')
    if (await contactForm.count() > 0) {
      // Fill out form
      await page.fill('input[name="name"]', 'Test User')
      await page.fill('input[name="email"]', 'test@example.com')
      await page.fill('textarea[name="message"]', 'This is a test message')
      
      // Submit form
      await page.click('button[type="submit"]')
      
      // Check for success message or redirect
      await expect(page.locator('.success, .alert-success')).toBeVisible({ timeout: 5000 })
    }
  })
})
