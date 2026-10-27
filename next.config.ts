import type { NextConfig } from "next";

// GITHUB_PAGES=true builds a static export served from
// https://<owner>.github.io/<repo>/ (see .github/workflows/deploy-pages.yml).
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? (process.env.PAGES_BASE_PATH ?? "") : "";

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: "export",
      basePath,
      trailingSlash: true,
      images: { unoptimized: true },
      env: { NEXT_PUBLIC_BASE_PATH: basePath },
    }
  : {
      output: "standalone",
    };

export default nextConfig;
