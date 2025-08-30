"use client";

import { useEffect } from "react";

interface StructuredDataProps {
  data: any;
  type?: "application/ld+json" | "application/json";
}

export function StructuredData({ data, type = "application/ld+json" }: StructuredDataProps) {
  useEffect(() => {
    // Create script element for structured data
    const script = document.createElement("script");
    script.type = type;
    script.text = JSON.stringify(data);
    script.id = "structured-data";

    // Remove existing structured data if present
    const existingScript = document.getElementById("structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    // Add to head
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.getElementById("structured-data");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data, type]);

  return null; // This component doesn't render anything
}

// Server-side structured data component (for Next.js App Router)
export function ServerStructuredData({ data, type = "application/ld+json" }: StructuredDataProps) {
  return (
    <script
      type={type}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
