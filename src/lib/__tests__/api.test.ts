import { blogApi, testimonialApi, faqApi, offerApi, homepageHighlightApi } from '../api'

// Mock fetch globally
global.fetch = jest.fn()

describe('API Integration Layer', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    // Reset fetch mock
    ;(global.fetch as jest.Mock).mockClear()
  })

  describe('Generic API Call', () => {
    it('handles successful API responses', async () => {
      const mockResponse = { data: 'test data' }
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockResponse,
      })

      const result = await blogApi.getAll()
      
      expect(result.data).toEqual(mockResponse)
      expect(result.error).toBeUndefined()
    })

    it('handles API errors', async () => {
      const mockError = { message: 'API Error' }
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 500,
        json: async () => mockError,
      })

      const result = await blogApi.getAll()
      
      expect(result.data).toBeUndefined()
      expect(result.error).toEqual('API request failed')
    })

    it('handles network errors', async () => {
      const networkError = new Error('Network error')
      ;(global.fetch as jest.Mock).mockRejectedValueOnce(networkError)

      const result = await blogApi.getAll()
      
      expect(result.data).toBeUndefined()
      expect(result.error).toEqual('Network error occurred')
    })
  })

  describe('Blog API', () => {
    it('fetches all blog posts', async () => {
      const mockPosts = [{ id: '1', title: 'Test Post' }]
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockPosts,
      })

      const result = await blogApi.getAll()
      
      expect(global.fetch).toHaveBeenCalledWith('/api/admin/blog', undefined)
      expect(result.data).toEqual(mockPosts)
    })

    it('fetches blog post by ID', async () => {
      const mockPost = { id: '1', title: 'Test Post' }
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockPost,
      })

      const result = await blogApi.getById('1')
      
      expect(global.fetch).toHaveBeenCalledWith('/api/admin/blog/1', undefined)
      expect(result.data).toEqual(mockPost)
    })

    it('creates new blog post', async () => {
      const newPost = { title: 'New Post', content: 'Content' }
      const createdPost = { id: '1', ...newPost }
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        status: 201,
        json: async () => createdPost,
      })

      const result = await blogApi.create(newPost)
      
      expect(global.fetch).toHaveBeenCalledWith('/api/admin/blog', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      expect(result.data).toEqual(createdPost)
    })

    it('updates blog post', async () => {
      const updateData = { title: 'Updated Post' }
      const updatedPost = { id: '1', ...updateData }
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => updatedPost,
      })

      const result = await blogApi.update('1', updateData)
      
      expect(global.fetch).toHaveBeenCalledWith('/api/admin/blog/1', {
        method: 'PUT',
        body: JSON.stringify(updateData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      expect(result.data).toEqual(updatedPost)
    })

    it('deletes blog post', async () => {
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => ({ message: 'Deleted' }),
      })

      const result = await blogApi.delete('1')
      
      expect(global.fetch).toHaveBeenCalledWith('/api/admin/blog/1', {
        method: 'DELETE',
      })
      expect(result.data).toEqual({ message: 'Deleted' })
    })
  })

  describe('Testimonial API', () => {
    it('fetches all testimonials', async () => {
      const mockTestimonials = [{ id: '1', name: 'John Doe' }]
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockTestimonials,
      })

      const result = await testimonialApi.getAll()
      
      expect(global.fetch).toHaveBeenCalledWith('/api/admin/testimonials', undefined)
      expect(result.data).toEqual(mockTestimonials)
    })

    it('creates new testimonial', async () => {
      const newTestimonial = { name: 'Jane Doe', content: 'Great service!' }
      const createdTestimonial = { id: '1', ...newTestimonial }
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        status: 201,
        json: async () => createdTestimonial,
      })

      const result = await testimonialApi.create(newTestimonial)
      
      expect(global.fetch).toHaveBeenCalledWith('/api/admin/testimonials', {
        method: 'POST',
        body: JSON.stringify(newTestimonial),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      expect(result.data).toEqual(createdTestimonial)
    })
  })

  describe('FAQ API', () => {
    it('fetches all FAQs', async () => {
      const mockFAQs = [{ id: '1', question: 'What is NDIS?' }]
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockFAQs,
      })

      const result = await faqApi.getAll()
      
      expect(global.fetch).toHaveBeenCalledWith('/api/admin/faq', undefined)
      expect(result.data).toEqual(mockFAQs)
    })

    it('creates new FAQ', async () => {
      const newFAQ = { question: 'New Question?', answer: 'New Answer' }
      const createdFAQ = { id: '1', ...newFAQ }
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        status: 201,
        json: async () => createdFAQ,
      })

      const result = await faqApi.create(newFAQ)
      
      expect(global.fetch).toHaveBeenCalledWith('/api/admin/faq', {
        method: 'POST',
        body: JSON.stringify(newFAQ),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      expect(result.data).toEqual(createdFAQ)
    })
  })

  describe('Offer API', () => {
    it('fetches all offers', async () => {
      const mockOffers = [{ id: '1', title: 'Special Offer' }]
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockOffers,
      })

      const result = await offerApi.getAll()
      
      expect(global.fetch).toHaveBeenCalledWith('/api/admin/offers', undefined)
      expect(result.data).toEqual(mockOffers)
    })

    it('creates new offer', async () => {
      const newOffer = { title: 'New Offer', discount: '20% off' }
      const createdOffer = { id: '1', ...newOffer }
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        status: 201,
        json: async () => createdOffer,
      })

      const result = await offerApi.create(newOffer)
      
      expect(global.fetch).toHaveBeenCalledWith('/api/admin/offers', {
        method: 'POST',
        body: JSON.stringify(newOffer),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      expect(result.data).toEqual(createdOffer)
    })
  })

  describe('Homepage Highlight API', () => {
    it('fetches all homepage highlights', async () => {
      const mockHighlights = [{ id: '1', title: 'Featured Content' }]
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockHighlights,
      })

      const result = await homepageHighlightApi.getAll()
      
      expect(global.fetch).toHaveBeenCalledWith('/api/admin/homepage-highlights', undefined)
      expect(result.data).toEqual(mockHighlights)
    })

    it('creates new homepage highlight', async () => {
      const newHighlight = { title: 'New Highlight', description: 'New content' }
      const createdHighlight = { id: '1', ...newHighlight }
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        status: 201,
        json: async () => createdHighlight,
      })

      const result = await homepageHighlightApi.create(newHighlight)
      
      expect(global.fetch).toHaveBeenCalledWith('/api/admin/homepage-highlights', {
        method: 'POST',
        body: JSON.stringify(newHighlight),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      expect(result.data).toEqual(createdHighlight)
    })
  })

  describe('Error Handling', () => {
    it('handles 401 unauthorized responses', async () => {
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 401,
        json: async () => ({ error: 'Unauthorized' }),
      })

      const result = await blogApi.getAll()
      
      expect(result.data).toBeUndefined()
      expect(result.error).toEqual('Unauthorized')
    })

    it('handles 404 not found responses', async () => {
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 404,
        json: async () => ({ error: 'Not Found' }),
      })

      const result = await blogApi.getById('999')
      
      expect(result.data).toBeUndefined()
      expect(result.error).toEqual('Not Found')
    })

    it('handles 500 server error responses', async () => {
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 500,
        json: async () => ({ error: 'Internal Server Error' }),
      })

      const result = await blogApi.getAll()
      
      expect(result.data).toBeUndefined()
      expect(result.error).toEqual('Internal Server Error')
    })
  })

  describe('Request Configuration', () => {
    it('sends correct headers for POST requests', async () => {
      const testData = { title: 'Test' }
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        status: 201,
        json: async () => ({ id: '1', ...testData }),
      })

      await blogApi.create(testData)
      
      expect(global.fetch).toHaveBeenCalledWith('/api/admin/blog', {
        method: 'POST',
        body: JSON.stringify(testData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    })

    it('sends correct headers for PUT requests', async () => {
      const testData = { title: 'Updated' }
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => ({ id: '1', ...testData }),
      })

      await blogApi.update('1', testData)
      
      expect(global.fetch).toHaveBeenCalledWith('/api/admin/blog/1', {
        method: 'PUT',
        body: JSON.stringify(testData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    })

    it('sends correct headers for DELETE requests', async () => {
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => ({ message: 'Deleted' }),
      })

      await blogApi.delete('1')
      
      expect(global.fetch).toHaveBeenCalledWith('/api/admin/blog/1', {
        method: 'DELETE',
      })
    })
  })
})
