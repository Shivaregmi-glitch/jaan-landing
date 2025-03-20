import type { NextConfig } from "next";

// Check if we're in a GitHub Pages environment
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'jaan-movie'; // Replace with your repository name

const nextConfig: NextConfig = {
  /* config options here */
  
  // Configure basePath and assetPrefix for GitHub Pages deployment
  ...(isGitHubPages ? {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
    images: {
      unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
    },
    output: 'export', // Static HTML export for GitHub Pages
  } : {}),
};

export default nextConfig;
