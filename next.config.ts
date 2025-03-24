import type { NextConfig } from "next";

// Check if we're in a GitHub Pages environment
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'jaan-movie'; // Replace with your repository name

const nextConfig: NextConfig = {
  basePath: "/jaan-landing",
  assetPrefix: "/jaan-landing/",
};

export default nextConfig;
