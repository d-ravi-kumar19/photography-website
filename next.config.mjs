/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/photography-website", // Base path for the site (useful for deployment on subdirectories)
  assetPrefix: "/photography-website/", // Prefix for static assets
  output: "export", // Enables static export (for GitHub Pages or similar)
  images: {
    loader: "imgix", // Uses imgix loader for handling images
    path: "", // Required for static exports; ensures images load correctly
    unoptimized: true, // Prevents automatic image optimization, needed for static export
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during the build process
  },
};

export default nextConfig;
