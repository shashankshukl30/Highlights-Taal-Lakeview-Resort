import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "highlightslakeview.com" },
      { protocol: "https", hostname: "www.highlightslakeview.com" },
    ],
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 90],
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-tabs",
      "embla-carousel-react",
    ],
  },
};

export default nextConfig;
