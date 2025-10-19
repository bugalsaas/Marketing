import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NDIS Software Pricing | Affordable Support Worker Tools | Bugal",
  description: "Transparent NDIS software pricing starting from $29/month. No hidden fees, cancel anytime. Perfect for independent support workers & small practices.",
  keywords: [
    "NDIS software pricing",
    "support worker software cost",
    "NDIS practice management price",
    "disability support software pricing",
    "NDIS billing software cost",
    "affordable NDIS software",
    "NDIS software subscription"
  ],
  openGraph: {
    title: "NDIS Software Pricing | Bugal",
    description: "Transparent NDIS software pricing starting from $29/month. No hidden fees, cancel anytime.",
    type: "website",
    url: "https://bugal.com.au/pricing",
    siteName: "Bugal",
    images: [
      {
        url: "/images/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "Bugal NDIS Software Pricing - Transparent & Affordable",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NDIS Software Pricing | Bugal",
    description: "Transparent NDIS software pricing starting from $29/month. No hidden fees, cancel anytime.",
    images: ["/images/og-pricing.jpg"],
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
  return <>{children}</>;
}