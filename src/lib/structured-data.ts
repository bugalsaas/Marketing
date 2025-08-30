// Structured Data (JSON-LD) utilities for SEO optimization
export interface OrganizationSchema {
  name: string;
  url: string;
  logo: string;
  description: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    email?: string;
  };
  sameAs?: string[];
}

export interface BlogPostSchema {
  title: string;
  description: string;
  url: string;
  image: string;
  author: {
    name: string;
    url?: string;
  };
  publisher: {
    name: string;
    logo: string;
  };
  datePublished: string;
  dateModified: string;
  mainEntityOfPage: string;
}

export interface FAQSchema {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export interface TestimonialSchema {
  name: string;
  reviewBody: string;
  reviewRating: {
    ratingValue: number;
    bestRating: number;
  };
  author: string;
  datePublished?: string;
}

export interface OfferSchema {
  name: string;
  description: string;
  url: string;
  image?: string;
  offers: {
    price: string;
    priceCurrency: string;
    availability: string;
    validFrom: string;
    validThrough: string;
  };
}

export interface HomepageHighlightSchema {
  name: string;
  description: string;
  image: string;
  url?: string;
}

// Generate Organization schema
export function generateOrganizationSchema(data: OrganizationSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    url: data.url,
    logo: data.logo,
    description: data.description,
    ...(data.address && {
      address: {
        "@type": "PostalAddress",
        streetAddress: data.address.streetAddress,
        addressLocality: data.address.addressLocality,
        addressRegion: data.address.addressRegion,
        postalCode: data.address.postalCode,
        addressCountry: data.address.addressCountry,
      },
    }),
    ...(data.contactPoint && {
      contactPoint: {
        "@type": "ContactPoint",
        telephone: data.contactPoint.telephone,
        contactType: data.contactPoint.contactType,
        ...(data.contactPoint.email && { email: data.contactPoint.email }),
      },
    }),
    ...(data.sameAs && { sameAs: data.sameAs }),
  };
}

// Generate Blog Post schema
export function generateBlogPostSchema(data: BlogPostSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.title,
    description: data.description,
    image: data.image,
    author: {
      "@type": "Person",
      name: data.author.name,
      ...(data.author.url && { url: data.author.url }),
    },
    publisher: {
      "@type": "Organization",
      name: data.publisher.name,
      logo: {
        "@type": "ImageObject",
        url: data.publisher.logo,
      },
    },
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": data.mainEntityOfPage,
    },
  };
}

// Generate FAQ schema
export function generateFAQSchema(data: FAQSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// Generate Testimonial schema
export function generateTestimonialSchema(data: TestimonialSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    name: data.name,
    reviewBody: data.reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: data.reviewRating.ratingValue,
      bestRating: data.reviewRating.bestRating,
    },
    author: {
      "@type": "Person",
      name: data.author,
    },
    ...(data.datePublished && { datePublished: data.datePublished }),
  };
}

// Generate Offer schema
export function generateOfferSchema(data: OfferSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: data.name,
    description: data.description,
    url: data.url,
    ...(data.image && { image: data.image }),
    offers: {
      "@type": "Offer",
      price: data.offers.price,
      priceCurrency: data.offers.priceCurrency,
      availability: data.offers.availability,
      validFrom: data.offers.validFrom,
      validThrough: data.offers.validThrough,
    },
  };
}

// Generate Homepage Highlight schema
export function generateHomepageHighlightSchema(data: HomepageHighlightSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: data.name,
    description: data.description,
    image: data.image,
    ...(data.url && { url: data.url }),
  };
}

// Generate Website schema
export function generateWebsiteSchema(data: { name: string; url: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: data.name,
    url: data.url,
    description: data.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${data.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// Generate Breadcrumb schema
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Generate Local Business schema for NDIS support services
export function generateLocalBusinessSchema(data: {
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: string;
  priceRange: string;
  serviceArea: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: data.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: data.geo.latitude,
      longitude: data.geo.longitude,
    },
    openingHours: data.openingHours,
    priceRange: data.priceRange,
    serviceArea: data.serviceArea,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "NDIS Support Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "NDIS Support Coordination",
            description: "Professional support coordination services for NDIS participants",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Practice Management Software",
            description: "Comprehensive practice management solution for NDIS support workers",
          },
        },
      ],
    },
  };
}
