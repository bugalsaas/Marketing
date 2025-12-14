import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NextAuthProvider } from "@/components/NextAuthProvider";
import { ServerStructuredData } from "@/components/StructuredData";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import AdvancedAnalytics from "@/components/AdvancedAnalytics";
import SmartContentRecommendations from "@/components/SmartContentRecommendations";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/structured-data";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bugal.com.au'),
  title: "NDIS Practice Management Software Australia | Bugal - #1 Support Worker Tool",
  description: "Australia's #1 NDIS practice management software for support workers. Streamline client management, billing, scheduling & compliance. Start free trial today.",
  keywords: [
    "NDIS software Australia",
    "support worker management",
    "NDIS practice management",
    "disability support software",
    "NDIS billing software",
    "support worker admin tool",
    "NDIS client management",
    "disability support worker software",
    "NDIS compliance software",
    "practice management Australia"
  ],
  authors: [{ name: "Bugal" }],
  creator: "Bugal",
  publisher: "Bugal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://bugal.com.au",
    title: "NDIS Practice Management Software Australia | Bugal - #1 Support Worker Tool",
    description: "Australia's #1 NDIS practice management software for support workers. Streamline client management, billing, scheduling & compliance. Start free trial today.",
    siteName: "Bugal",
    images: [
      {
        url: "/images/og-homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Bugal NDIS Practice Management Software - Australia's #1 Support Worker Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NDIS Practice Management Software Australia | Bugal",
    description: "Australia's #1 NDIS practice management software for support workers. Streamline client management, billing, scheduling & compliance.",
    images: ["/images/og-homepage.jpg"],
    creator: "@bugal_au",
    site: "@bugal_au",
  },
  // Viewport and themeColor moved to separate export below
};

// Separate viewport export to fix Next.js warnings
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate structured data for the website
  const organizationSchema = generateOrganizationSchema({
    name: "Bugal",
    url: "https://bugal.com.au",
    logo: "https://bugal.com.au/Bugal_Full_Logo.png",
    description: "The most trusted and easiest to use practice management tool for independent NDIS support workers in Australia.",
    address: {
      streetAddress: "123 Business Street",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      postalCode: "3000",
      addressCountry: "AU",
    },
    contactPoint: {
      telephone: "+61-3-9000-0000",
      contactType: "customer service",
      email: "hello@bugal.com.au",
    },
    sameAs: [
      "https://www.linkedin.com/company/bugal",
      "https://twitter.com/bugal_au",
    ],
  });

  const websiteSchema = generateWebsiteSchema({
    name: "Bugal - NDIS Practice Management Software",
    url: "https://bugal.com.au",
    description: "The most trusted and easiest to use practice management tool for independent NDIS support workers in Australia.",
  });

  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        
        {/* Font Preloading for Performance */}
        <link
          rel="preload"
          href="/fonts/geist-sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Structured Data */}
        <ServerStructuredData data={organizationSchema} />
        <ServerStructuredData data={websiteSchema} />
        
        {/* FAQ Schema for better SERP presence */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does Bugal cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Bugal starts from $29/month with no setup fees. We offer three plans: Starter ($29), Professional ($59), and Enterprise ($99). All plans include core features with no hidden costs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Bugal suitable for independent NDIS support workers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Bugal is specifically designed for independent NDIS support workers and small practices. Our Starter plan is perfect for individual support workers managing their own clients."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Bugal handle NDIS billing and compliance?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Bugal includes comprehensive NDIS billing features, compliance tracking, and reporting tools to help you stay compliant with NDIS requirements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I try Bugal before committing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We offer a free trial with no credit card required. You can explore all features and see how Bugal can streamline your practice management."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <NextAuthProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster />
          
          {/* Performance Monitoring */}
          <PerformanceMonitor />
          
          {/* Advanced Analytics & Tracking */}
          <AdvancedAnalytics />
          
          {/* Smart Content Recommendations - Temporarily disabled */}
          {/* <SmartContentRecommendations /> */}
          
          {/* Google Analytics */}
          {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
            <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
          )}
        </NextAuthProvider>
      </body>
    </html>
  );
}
