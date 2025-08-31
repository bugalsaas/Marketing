import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NDIS Practice Management Pricing | Affordable Plans | Bugal",
  description: "Simple, transparent pricing for NDIS practice management software. Start free forever or choose from our affordable plans designed for independent support workers.",
  keywords: [
    "NDIS software pricing",
    "practice management cost",
    "support worker software pricing",
    "NDIS software plans",
    "affordable NDIS software",
    "free NDIS software",
    "NDIS practice management cost"
  ],
  openGraph: {
    title: "NDIS Practice Management Pricing | Affordable Plans | Bugal",
    description: "Simple, transparent pricing for NDIS practice management software. Start free forever or choose from our affordable plans.",
    type: "website",
    url: "https://bugal.com.au/pricing",
    siteName: "Bugal",
    images: [
      {
        url: "/Bugal_Full_Logo.png",
        width: 1200,
        height: 630,
        alt: "NDIS Practice Management Pricing - Bugal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NDIS Practice Management Pricing | Affordable Plans | Bugal",
    description: "Simple, transparent pricing for NDIS practice management software. Start free forever.",
    images: ["/Bugal_Full_Logo.png"],
  },
  alternates: {
    canonical: "https://bugal.com.au/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
