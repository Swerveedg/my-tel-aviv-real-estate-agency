import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable stable config options for Next.js 15
  bundlePagesRouterDependencies: true, // replaces experimental.bundlePagesExternals
  serverExternalPackages: [], // add package names if you want to exclude from bundling

  // Uncomment to enable experimental features:
  // experimental: {
  //   ppr: 'incremental', // Partial Prerendering (optional, if you want to try PPR)
  //   viewTransition: true, // React View Transitions (optional, experimental)
  //   nodeMiddleware: true, // Node.js Middleware (optional, experimental)
  // },
};

export default nextConfig; 