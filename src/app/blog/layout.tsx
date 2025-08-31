import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NDIS Practice Management Blog | Expert Insights & Tips | Bugal",
  description: "Stay updated with the latest insights, best practices, and expert tips for NDIS practice management. Discover strategies for running a successful NDIS support business.",
  keywords: [
    "NDIS blog",
    "NDIS practice management",
    "support worker tips",
    "NDIS business guide",
    "disability support blog",
    "NDIS compliance",
    "practice management tips"
  ],
  openGraph: {
    title: "NDIS Practice Management Blog | Expert Insights & Tips | Bugal",
    description: "Stay updated with the latest insights, best practices, and expert tips for NDIS practice management. Discover strategies for running a successful NDIS support business.",
    type: "website",
    url: "https://bugal.com.au/blog",
    siteName: "Bugal",
    images: [
      {
        url: "/Bugal_Full_Logo.png",
        width: 1200,
        height: 630,
        alt: "NDIS Practice Management Blog - Bugal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NDIS Practice Management Blog | Expert Insights & Tips | Bugal",
    description: "Stay updated with the latest insights, best practices, and expert tips for NDIS practice management.",
    images: ["/Bugal_Full_Logo.png"],
  },
  alternates: {
    canonical: "https://bugal.com.au/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
