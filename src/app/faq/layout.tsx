import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NDIS Practice Management FAQ | Common Questions | Bugal",
  description: "Find answers to common questions about Bugal's NDIS practice management software. Learn about features, pricing, getting started, and technical support.",
  keywords: [
    "NDIS software FAQ",
    "practice management questions",
    "support worker software help",
    "NDIS software support",
    "practice management FAQ",
    "NDIS software guide",
    "support worker software questions"
  ],
  openGraph: {
    title: "NDIS Practice Management FAQ | Common Questions | Bugal",
    description: "Find answers to common questions about Bugal's NDIS practice management software. Learn about features, pricing, and getting started.",
    type: "website",
    url: "https://bugal.com.au/faq",
    siteName: "Bugal",
    images: [
      {
        url: "/Bugal_Full_Logo.png",
        width: 1200,
        height: 630,
        alt: "NDIS Practice Management FAQ - Bugal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NDIS Practice Management FAQ | Common Questions | Bugal",
    description: "Find answers to common questions about Bugal's NDIS practice management software.",
    images: ["/Bugal_Full_Logo.png"],
  },
  alternates: {
    canonical: "https://bugal.com.au/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
