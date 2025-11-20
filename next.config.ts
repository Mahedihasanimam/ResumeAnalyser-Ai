// next.config.ts

import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // 1. Specify which packages need forced CommonJS transpilation
  // This helps prevent ESM/CJS mix-up issues with older libraries.
  transpilePackages: ["pdfjs-dist"],

  // 2. Add 'pdfjs-dist' to this list if you were calling the API route
  // from a Server Component, but since you're using a Client Component/Route Handler
  // setup, we'll focus on the 'nodejs' runtime fix instead of relying on
  // extensive webpack/external configuration here.
  // serverComponentsExternalPackages: ["pdfjs-dist"],

  // NOTE: Remove all custom webpack rules for file-loader and externals
  // as they are usually the source of hard-to-debug module resolution errors
  // in modern Next.js environments.
  webpack: (config, { isServer }) => {
    // If you MUST keep an external, use this, but test without it first!
    if (isServer) {
      // Example: Only externalize if absolutely necessary and causing dependency issues
      // config.externals.push("canvas"); // Keep canvas external if used by pdfjs-dist internally
      // We specifically avoid externalizing pdfjs-dist itself to let webpack resolve the deep import:
      // import("pdfjs-dist/build/pdf.js")
    }
    return config;
  },
};

export default nextConfig;
