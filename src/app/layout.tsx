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
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bugal - NDIS Practice Management Software",
  description: "The most trusted and easiest to use practice management tool for independent NDIS support workers in Australia.",
  keywords: ["NDIS software", "support worker admin tool", "practice management", "NDIS support", "disability support"],
  authors: [{ name: "Bugal" }],
  creator: "Bugal",
  publisher: "Bugal",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/Bugal_Full_Logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/Bugal_Full_Logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.bugal.com.au",
    title: "Bugal - NDIS Practice Management Software",
    description: "The most trusted and easiest to use practice management tool for independent NDIS support workers in Australia.",
    siteName: "Bugal",
    images: [
      {
        url: "/Bugal_Full_Logo.png",
        width: 1200,
        height: 630,
        alt: "Bugal - NDIS Practice Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bugal - NDIS Practice Management Software",
    description: "The most trusted and easiest to use practice management tool for independent NDIS support workers in Australia.",
    images: ["/Bugal_Full_Logo.png"],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover'
  },
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
        <link rel="icon" href="/Bugal_Full_Logo.png" />
        <link rel="apple-touch-icon" href="/Bugal_Full_Logo.png" />
        
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
