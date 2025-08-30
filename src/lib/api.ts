// Utility functions for making authenticated API calls to admin endpoints

const API_BASE = '/api/admin';

interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

// Generic API call function
async function apiCall<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    // Only add Content-Type header for requests with a body
    const fetchOptions: RequestInit = { ...options };
    
    if (options.body) {
      fetchOptions.headers = {
        'Content-Type': 'application/json',
        ...options.headers,
      };
    }

    // Only send options if there are actual options to send
    const finalOptions = Object.keys(fetchOptions).length > 0 ? fetchOptions : undefined;
    
    const response = await fetch(`${API_BASE}${endpoint}`, finalOptions);

    const result = await response.json();

    if (!response.ok) {
      return { error: result.error || 'API request failed' };
    }

    return { data: result };
  } catch (error) {
    console.error('API call failed:', error);
    return { error: 'Network error occurred' };
  }
}

// Blog Post API functions
export const blogApi = {
  getAll: () => apiCall('/blog'),
  getById: (id: string) => apiCall(`/blog/${id}`),
  create: (data: any) => apiCall('/blog', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: string, data: any) => apiCall(`/blog/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id: string) => apiCall(`/blog/${id}`, {
    method: 'DELETE',
  }),
};

// Testimonial API functions
export const testimonialApi = {
  getAll: () => apiCall('/testimonials'),
  getById: (id: string) => apiCall(`/testimonials/${id}`),
  create: (data: any) => apiCall('/testimonials', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: string, data: any) => apiCall(`/testimonials/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id: string) => apiCall(`/testimonials/${id}`, {
    method: 'DELETE',
  }),
};

// FAQ API functions
export const faqApi = {
  getAll: () => apiCall('/faq'),
  getById: (id: string) => apiCall(`/faq/${id}`),
  create: (data: any) => apiCall('/faq', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: string, data: any) => apiCall(`/faq/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id: string) => apiCall(`/faq/${id}`, {
    method: 'DELETE',
  }),
};

// Offer API functions
export const offerApi = {
  getAll: () => apiCall('/offers'),
  getById: (id: string) => apiCall(`/offers/${id}`),
  create: (data: any) => apiCall('/offers', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: string, data: any) => apiCall(`/offers/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id: string) => apiCall(`/offers/${id}`, {
    method: 'DELETE',
  }),
};

// Homepage Highlights API functions
export const homepageHighlightApi = {
  getAll: () => apiCall('/homepage-highlights'),
  getById: (id: string) => apiCall(`/homepage-highlights/${id}`),
  create: (data: any) => apiCall('/homepage-highlights', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: string, data: any) => apiCall(`/homepage-highlights/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id: string) => apiCall(`/homepage-highlights/${id}`, {
    method: 'DELETE',
  }),
};
