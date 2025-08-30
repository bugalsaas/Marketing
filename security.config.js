// Security configuration for Bugal Marketing Website
module.exports = {
  // Content Security Policy
  csp: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: [
        "'self'",
        "'unsafe-inline'", // Required for Next.js
        "'unsafe-eval'", // Required for Next.js development
        "https://www.googletagmanager.com",
        "https://www.google-analytics.com",
      ],
      styleSrc: [
        "'self'",
        "'unsafe-inline'", // Required for Tailwind CSS
        "https://fonts.googleapis.com",
      ],
      fontSrc: [
        "'self'",
        "https://fonts.gstatic.com",
        "data:",
      ],
      imgSrc: [
        "'self'",
        "data:",
        "https:",
        "https://www.google-analytics.com",
      ],
      connectSrc: [
        "'self'",
        "https://www.google-analytics.com",
        "https://analytics.google.com",
      ],
      frameSrc: [
        "'self'",
        "https://www.google.com",
        "https://www.youtube.com",
      ],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameAncestors: ["'self'"],
    },
  },

  // Security Headers
  headers: {
    // Prevent clickjacking
    'X-Frame-Options': 'DENY',
    
    // Prevent MIME type sniffing
    'X-Content-Type-Options': 'nosniff',
    
    // Enable XSS protection
    'X-XSS-Protection': '1; mode=block',
    
    // Referrer policy
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    
    // Permissions policy
    'Permissions-Policy': [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'payment=()',
      'usb=()',
      'magnetometer=()',
      'gyroscope=()',
      'accelerometer=()',
    ].join(', '),
    
    // Strict transport security (HTTPS only)
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  },

  // Rate limiting configuration
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
  },

  // CORS configuration
  cors: {
    origin: [
      'https://bugal.com.au',
      'https://www.bugal.com.au',
      'http://localhost:3000', // Development
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    maxAge: 86400, // 24 hours
  },

  // Helmet configuration
  helmet: {
    contentSecurityPolicy: true,
    crossOriginEmbedderPolicy: false, // Required for Next.js
    crossOriginOpenerPolicy: { policy: 'same-origin' },
    crossOriginResourcePolicy: { policy: 'cross-origin' },
    dnsPrefetchControl: { allow: false },
    frameguard: { action: 'deny' },
    hidePoweredBy: true,
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true,
    },
    ieNoOpen: true,
    noSniff: true,
    permittedCrossDomainPolicies: { permittedPolicies: 'none' },
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
    xssFilter: true,
  },

  // Input validation rules
  validation: {
    // SQL injection prevention
    sqlInjection: {
      patterns: [
        /(\b(union|select|insert|update|delete|drop|create|alter|exec|execute|script)\b)/i,
        /(\b(union|select|insert|update|delete|drop|create|alter|exec|execute|script)\s+)/i,
        /(\b(union|select|insert|update|delete|drop|create|alter|exec|execute|script)\s*\(/i,
      ],
      action: 'block',
    },
    
    // XSS prevention
    xss: {
      patterns: [
        /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        /javascript:/gi,
        /on\w+\s*=/gi,
        /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
      ],
      action: 'block',
    },
    
    // Path traversal prevention
    pathTraversal: {
      patterns: [
        /\.\.\//,
        /\.\.\\/,
        /%2e%2e%2f/,
        /%2e%2e%5c/,
      ],
      action: 'block',
    },
  },

  // Authentication security
  auth: {
    // Password requirements
    passwordPolicy: {
      minLength: 12,
      requireUppercase: true,
      requireLowercase: true,
      requireNumbers: true,
      requireSpecialChars: true,
      preventCommonPasswords: true,
    },
    
    // Session security
    session: {
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      secure: true, // HTTPS only
      httpOnly: true,
      sameSite: 'strict',
    },
    
    // JWT security
    jwt: {
      secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
      expiresIn: '24h',
      algorithm: 'HS256',
    },
  },

  // File upload security
  fileUpload: {
    allowedTypes: [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'application/pdf',
      'text/plain',
    ],
    maxSize: 5 * 1024 * 1024, // 5MB
    maxFiles: 10,
    scanForViruses: true,
  },

  // API security
  api: {
    // Rate limiting per endpoint
    endpoints: {
      '/api/admin/*': {
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 50, // 50 requests per 15 minutes
      },
      '/api/auth/*': {
        windowMs: 15 * 60 * 1000,
        max: 10, // 10 auth attempts per 15 minutes
      },
    },
    
    // API key validation
    requireApiKey: false, // Set to true for external APIs
    
    // Request size limits
    maxBodySize: '10mb',
    maxUrlLength: 2048,
  },
}
