import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 is used for the hero and gallery photos.
    qualities: [75, 90],
  },
  // Older pages were merged into /about.
  async redirects() {
    return [
      { source: "/more", destination: "/about", permanent: true },
      { source: "/read-more", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
