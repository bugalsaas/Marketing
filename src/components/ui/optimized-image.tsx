"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  sizes?: string;
  fill?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  objectPosition?: string;
  loading?: "lazy" | "eager";
  onLoad?: () => void;
  onError?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 75,
  placeholder = "empty",
  blurDataURL,
  sizes,
  fill = false,
  objectFit = "cover",
  objectPosition = "center",
  loading = "lazy",
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px", // Start loading 50px before the image comes into view
        threshold: 0.1,
      }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  // Generate optimized image URL (you can integrate with services like Cloudinary, ImageKit, etc.)
  const getOptimizedSrc = (originalSrc: string) => {
    // For now, return the original src
    // In production, you'd integrate with an image optimization service
    return originalSrc;
  };

  // Show skeleton while loading
  if (isLoading && !isInView) {
    return (
      <Skeleton
        className={cn(
          "bg-gray-200 animate-pulse",
          fill ? "w-full h-full" : "",
          className
        )}
        style={{
          width: fill ? "100%" : width,
          height: fill ? "100%" : height,
        }}
      />
    );
  }

  // Show error state
  if (hasError) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gray-100 text-gray-500",
          fill ? "w-full h-full" : "",
          className
        )}
        style={{
          width: fill ? "100%" : width,
          height: fill ? "100%" : height,
        }}
      >
        <div className="text-center">
          <svg
            className="w-12 h-12 mx-auto mb-2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm">Image failed to load</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Blur placeholder */}
      {placeholder === "blur" && blurDataURL && isLoading && (
        <img
          src={blurDataURL}
          alt=""
          className={cn(
            "absolute inset-0 w-full h-full object-cover filter blur-sm scale-110",
            className
          )}
          style={{
            width: fill ? "100%" : width,
            height: fill ? "100%" : height,
          }}
        />
      )}

      {/* Main image */}
      <img
        ref={imgRef}
        src={isInView ? getOptimizedSrc(src) : ""}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          fill ? "w-full h-full" : "",
          className
        )}
        style={{
          objectFit,
          objectPosition,
          width: fill ? "100%" : width,
          height: fill ? "100%" : height,
        }}
        loading={loading}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        // Performance attributes
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </>
  );
}

// Specialized image components for common use cases
export function HeroImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      priority={true}
      loading="eager"
      sizes="100vw"
      className={cn("w-full h-full object-cover", props.className)}
    />
  );
}

export function ThumbnailImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      priority={false}
      loading="lazy"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={cn("w-full h-full object-cover", props.className)}
    />
  );
}

export function AvatarImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      priority={false}
      loading="lazy"
      objectFit="cover"
      className={cn("rounded-full", props.className)}
    />
  );
}
