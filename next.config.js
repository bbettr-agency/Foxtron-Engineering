/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Real images live in /public — no remote/placeholder hosts.
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },

  // Old (GoHighLevel / LeadConnector) site → new Next.js routes.
  // Permanent (308) redirects preserve SEO value, indexed URLs, backlinks and bookmarks.
  // Evidence: Phase 1 audit of the old site's sitemap.xml + fetched pages
  // (/home, /about-us, /services, /contact-us, /iso-9001) and the legacy index.php
  // duplicate still indexed. Each is a single hop to its final destination (no chains).
  // Apex→www is handled by Vercel at the domain level; these are path-only, host-agnostic.
  async redirects() {
    return [
      // The old homepage was served at both "/" and "/home" — collapse the duplicate.
      { source: "/home", destination: "/", permanent: true },

      // Core old pages → closest equivalent on the new site.
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/iso-9001", destination: "/about#quality", permanent: true }, // ISO page → Quality & Standards
      { source: "/projects", destination: "/gallery", permanent: true }, // old portfolio intent → new gallery

      // Legacy index.php site (duplicate content still indexed) → canonical equivalents.
      // Specific rules first, then safe catch-alls to avoid redirecting to 404s.
      { source: "/index.php/services/laser-cutting", destination: "/services/laser-cutting", permanent: true },
      { source: "/index.php/about-us", destination: "/about", permanent: true },
      { source: "/index.php/contact-us", destination: "/contact", permanent: true },
      { source: "/index.php/services/:slug*", destination: "/services", permanent: true },
      { source: "/index.php/:path*", destination: "/", permanent: true },
      { source: "/index.php", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
