import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

// Mock data for testing
export const mockBlogPost = {
  id: 'test-blog-1',
  title: 'Test Blog Post',
  slug: 'test-blog-post',
  excerpt: 'This is a test blog post excerpt',
  content: '<p>This is test content</p>',
  coverImage: 'https://example.com/test-image.jpg',
  category: 'NDIS Guides',
  tags: 'ndis, support, testing',
  published: true,
  featured: false,
  authorId: 'test-author-1',
  author: {
    id: 'test-author-1',
    name: 'Test Author',
    email: 'author@test.com',
  },
  publishedAt: new Date('2024-01-01').toISOString(),
  createdAt: new Date('2024-01-01').toISOString(),
  updatedAt: new Date('2024-01-01').toISOString(),
}

export const mockTestimonial = {
  id: 'test-testimonial-1',
  name: 'John Doe',
  role: 'NDIS Support Worker',
  company: 'Test Company',
  content: 'This is a great testimonial about the service.',
  rating: 5,
  photo: 'https://example.com/test-photo.jpg',
  category: 'Support Work',
  visible: true,
  featured: true,
  createdAt: new Date('2024-01-01').toISOString(),
  updatedAt: new Date('2024-01-01').toISOString(),
}

export const mockFAQ = {
  id: 'test-faq-1',
  question: 'What is NDIS?',
  answer: 'NDIS stands for National Disability Insurance Scheme.',
  category: 'General',
  order: 1,
  visible: true,
  createdAt: new Date('2024-01-01').toISOString(),
  updatedAt: new Date('2024-01-01').toISOString(),
}

export const mockOffer = {
  id: 'test-offer-1',
  title: 'Test Offer',
  description: 'This is a test offer description',
  code: 'TEST123',
  discount: '20% off',
  validFrom: new Date('2024-01-01').toISOString(),
  validUntil: new Date('2024-12-31').toISOString(),
  active: true,
  featured: true,
  createdAt: new Date('2024-01-01').toISOString(),
  updatedAt: new Date('2024-01-01').toISOString(),
}

export const mockHomepageHighlight = {
  id: 'test-highlight-1',
  title: 'Test Highlight',
  description: 'This is a test homepage highlight',
  image: 'https://example.com/test-highlight.jpg',
  link: 'https://example.com/test-link',
  order: 1,
  active: true,
  createdAt: new Date('2024-01-01').toISOString(),
  updatedAt: new Date('2024-01-01').toISOString(),
}

export const mockAdminUser = {
  id: 'test-admin-1',
  email: 'admin@test.com',
  name: 'Test Admin',
  role: 'admin',
  createdAt: new Date('2024-01-01').toISOString(),
  updatedAt: new Date('2024-01-01').toISOString(),
}

// Custom render function without providers for now
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, options)

// Re-export everything
export * from '@testing-library/react'

// Override render method
export { customRender as render }

// Test constants
export const TEST_CONSTANTS = {
  TIMEOUT: 5000,
  DEBOUNCE_DELAY: 300,
  ANIMATION_DURATION: 200,
}

// Helper functions for testing
export const waitForElementToBeRemoved = (element: Element | null) => {
  return new Promise<void>((resolve) => {
    if (!element) {
      resolve()
      return
    }

    const observer = new MutationObserver(() => {
      if (!document.contains(element)) {
        observer.disconnect()
        resolve()
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
  })
}

export const createMockEvent = (type: string, options: any = {}) => {
  const event = new Event(type, { bubbles: true, cancelable: true, ...options })
  Object.assign(event, options)
  return event
}

export const createMockMouseEvent = (type: string, options: any = {}) => {
  const event = new MouseEvent(type, { bubbles: true, cancelable: true, ...options })
  Object.assign(event, options)
  return event
}

export const createMockKeyboardEvent = (type: string, options: any = {}) => {
  const event = new KeyboardEvent(type, { bubbles: true, cancelable: true, ...options })
  Object.assign(event, options)
  return event
}

// Mock Intersection Observer
export const mockIntersectionObserver = () => {
  const mockIntersectionObserver = (global as any).jest?.fn() || (() => {})
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  })
  window.IntersectionObserver = mockIntersectionObserver
}

// Mock Resize Observer
export const mockResizeObserver = () => {
  const mockResizeObserver = (global as any).jest?.fn() || (() => {})
  mockResizeObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  })
  window.ResizeObserver = mockResizeObserver
}

// Mock matchMedia
export const mockMatchMedia = (matches: boolean = false) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: ((global as any).jest?.fn() || (() => {})).mockImplementation((query: any) => ({
      matches,
      media: query,
      onchange: null,
      addListener: (global as any).jest?.fn() || (() => {}),
      removeListener: (global as any).jest?.fn() || (() => {}),
      addEventListener: (global as any).jest?.fn() || (() => {}),
      removeEventListener: (global as any).jest?.fn() || (() => {}),
      dispatchEvent: (global as any).jest?.fn() || (() => {}),
    })),
  })
}

// Setup common mocks
export const setupCommonMocks = () => {
  mockIntersectionObserver()
  mockResizeObserver()
  mockMatchMedia()
}
