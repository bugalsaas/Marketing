import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NDIS Practice Management Testimonials | Customer Success Stories | Bugal",
  description: "Read real testimonials from NDIS support workers and teams using Bugal. Discover how our practice management software is transforming NDIS practices across Australia.",
  keywords: [
    "NDIS software testimonials",
    "practice management reviews",
    "support worker software reviews",
    "NDIS software success stories",
    "practice management testimonials",
    "support worker software feedback",
    "NDIS software customer reviews"
  ],
  openGraph: {
    title: "NDIS Practice Management Testimonials | Customer Success Stories | Bugal",
    description: "Read real testimonials from NDIS support workers and teams using Bugal. Discover how our software is transforming NDIS practices.",
    type: "website",
    url: "https://bugal.com.au/testimonials",
    siteName: "Bugal",
    images: [
      {
        url: "/Bugal_Full_Logo.png",
        width: 1200,
        height: 630,
        alt: "NDIS Practice Management Testimonials - Bugal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NDIS Practice Management Testimonials | Customer Success Stories | Bugal",
    description: "Read real testimonials from NDIS support workers and teams using Bugal.",
    images: ["/Bugal_Full_Logo.png"],
  },
  alternates: {
    canonical: "https://bugal.com.au/testimonials",
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
