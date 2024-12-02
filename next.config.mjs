/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/photography-website",  
    assetPrefix: "/photography-website/", 
    output: 'export',  // Makes it static export for GitHub Pages
    images: {
      loader: "imgix", // Uses imgix loader for optimized image loading in a static site
      path: "",  
    },
  };
  
  export default nextConfig;
  