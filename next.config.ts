import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/SureMechanical" : "";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : "standalone",
  basePath,
  trailingSlash: isGitHubPages,
  images: {
    unoptimized: isGitHubPages,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  reactStrictMode: false,
};

export default nextConfig;
