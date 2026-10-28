import type { NextConfig } from "next";

// GITHUB_PAGES=true builds a static export served from
// https://<owner>.github.io/<repo>/ (see .github/workflows/deploy-pages.yml).
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? (process.env.PAGES_BASE_PATH ?? "") : "";
const siteOrigin = isGitHubPages ? (process.env.PAGES_ORIGIN ?? "") : "";

const nextConfig: NextConfig = {
  // Each locale has its own root layout (for <html lang>), so the 404 page
  // cannot be composed from a single layout.
  experimental: { globalNotFound: true },
  ...(isGitHubPages
    ? {
        output: "export",
        basePath,
        trailingSlash: true,
        images: { unoptimized: true },
        env: { NEXT_PUBLIC_BASE_PATH: basePath, NEXT_PUBLIC_SITE_ORIGIN: siteOrigin },
      }
    : {
        output: "standalone",
      }),
};

export default nextConfig;
