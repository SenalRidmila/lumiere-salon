import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // WebP සහ AVIF formats - modern browsers වලදී file size 30-50% අඩු වෙනවා
    formats: ["image/avif", "image/webp"],
    // Responsive image breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // 30 days cache - images නැවත download කරන්නේ නෑ
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
