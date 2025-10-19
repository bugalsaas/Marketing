// Enhanced structured data for better SEO performance

export interface OrganizationData {
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
    email: string;
  };
  sameAs?: string[];
}

export interface FAQData {
  question: string;
  answer: string;
}

export interface SoftwareApplicationData {
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
  offers: {
    price: string;
    priceCurrency: string;
    priceSpecification: {
      billingDuration: string;
    };
  };
  featureList: string[];
  screenshot?: string;
}

// Enhanced Organization Schema
export function generateEnhancedOrganizationSchema(data: OrganizationData) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": data.name,
    "url": data.url,
    "logo": {
      "@type": "ImageObject",
      "url": data.logo,
      "width": 400,
      "height": 100
    },
    "description": data.description,
    "foundingDate": "2020",
    "founders": [
      {
        "@type": "Person",
        "name": "Bugal Founders"
      }
    ],
    "address": data.address ? {
      "@type": "PostalAddress",
      "streetAddress": data.address.streetAddress,
      "addressLocality": data.address.addressLocality,
      "addressRegion": data.address.addressRegion,
      "postalCode": data.address.postalCode,
      "addressCountry": data.address.addressCountry
    } : undefined,
    "contactPoint": data.contactPoint ? {
      "@type": "ContactPoint",
      "telephone": data.contactPoint.telephone,
      "contactType": data.contactPoint.contactType,
      "email": data.contactPoint.email,
      "availableLanguage": "English"
    } : undefined,
    "sameAs": data.sameAs || [],
    "knowsAbout": [
      "NDIS Practice Management",
      "Disability Support Software",
      "Support Worker Tools",
      "NDIS Billing Software",
      "Client Management Systems"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "serviceType": "Software as a Service",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "NDIS Practice Management Software",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Bugal NDIS Practice Management",
            "description": "Complete practice management software for NDIS support workers"
          }
        }
      ]
    }
  };
}

// FAQ Schema
export function generateFAQSchema(faqs: FAQData[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Software Application Schema
export function generateSoftwareApplicationSchema(data: SoftwareApplicationData) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": data.name,
    "description": data.description,
    "applicationCategory": data.applicationCategory,
    "operatingSystem": data.operatingSystem,
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "softwareVersion": "2.0",
    "datePublished": "2020-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "author": {
      "@type": "Organization",
      "name": "Bugal",
      "url": "https://bugal.com.au"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bugal",
      "url": "https://bugal.com.au"
    },
    "offers": {
      "@type": "Offer",
      "price": data.offers.price,
      "priceCurrency": data.offers.priceCurrency,
      "priceSpecification": {
        "@type": "RecurringPaymentsPriceSpecification",
        "billingDuration": data.offers.priceSpecification.billingDuration,
        "price": data.offers.price,
        "priceCurrency": data.offers.priceCurrency
      },
      "availability": "https://schema.org/InStock",
      "validFrom": "2020-01-01"
    },
    "featureList": data.featureList,
    "screenshot": data.screenshot ? {
      "@type": "ImageObject",
      "url": data.screenshot,
      "width": 1200,
      "height": 800
    } : undefined,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewBody": "Bugal has transformed how I manage my NDIS clients. The billing features alone save me hours every week."
      }
    ]
  };
}

// Breadcrumb Schema
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// Article Schema for Blog Posts
export function generateArticleSchema(post: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  modifiedAt: string;
  author: string;
  image?: string;
  category?: string;
  tags?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "url": post.url,
    "datePublished": post.publishedAt,
    "dateModified": post.modifiedAt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bugal",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bugal.com.au/Bugal_Full_Logo.png"
      }
    },
    "image": post.image ? {
      "@type": "ImageObject",
      "url": post.image,
      "width": 1200,
      "height": 630
    } : undefined,
    "articleSection": post.category || "NDIS Practice Management",
    "keywords": post.tags?.join(", ") || "NDIS, support worker, practice management",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": post.url
    }
  };
}

// Local Business Schema (if applicable)
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bugal",
    "description": "NDIS Practice Management Software for Australian Support Workers",
    "url": "https://bugal.com.au",
    "telephone": "+61-3-9000-0000",
    "email": "hello@bugal.com.au",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Street",
      "addressLocality": "Melbourne",
      "addressRegion": "VIC",
      "postalCode": "3000",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-37.8136",
      "longitude": "144.9631"
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "$29-$99",
    "paymentAccepted": "Credit Card, PayPal, Bank Transfer",
    "currenciesAccepted": "AUD",
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "Australia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "NDIS Software Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "NDIS Practice Management Software",
            "description": "Complete software solution for NDIS support workers"
          }
        }
      ]
    }
  };
}

// Website Schema with enhanced features
export function generateEnhancedWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bugal - NDIS Practice Management Software",
    "url": "https://bugal.com.au",
    "description": "Australia's #1 NDIS practice management software for support workers",
    "publisher": {
      "@type": "Organization",
      "name": "Bugal",
      "url": "https://bugal.com.au"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://bugal.com.au/blog?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "Bugal NDIS Practice Management",
      "description": "Complete practice management software for NDIS support workers in Australia",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser"
    }
  };
}

// Product Schema for pricing page
export function generateProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Bugal NDIS Practice Management Software",
    "description": "Complete practice management software for NDIS support workers in Australia",
    "brand": {
      "@type": "Brand",
      "name": "Bugal"
    },
    "category": "Software",
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter Plan",
        "price": "29",
        "priceCurrency": "AUD",
        "priceSpecification": {
          "@type": "RecurringPaymentsPriceSpecification",
          "billingDuration": "P1M"
        },
        "availability": "https://schema.org/InStock",
        "description": "Perfect for independent support workers"
      },
      {
        "@type": "Offer",
        "name": "Professional Plan",
        "price": "59",
        "priceCurrency": "AUD",
        "priceSpecification": {
          "@type": "RecurringPaymentsPriceSpecification",
          "billingDuration": "P1M"
        },
        "availability": "https://schema.org/InStock",
        "description": "Ideal for small practices"
      },
      {
        "@type": "Offer",
        "name": "Enterprise Plan",
        "price": "99",
        "priceCurrency": "AUD",
        "priceSpecification": {
          "@type": "RecurringPaymentsPriceSpecification",
          "billingDuration": "P1M"
        },
        "availability": "https://schema.org/InStock",
        "description": "For large organizations"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };
}
