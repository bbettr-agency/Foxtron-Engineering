/**
 * Security headers (sitewide). CSP ships in REPORT-ONLY mode first: Next.js injects
 * inline bootstrap scripts and the contact page embeds a Google Maps iframe. Once the
 * browser console shows no CSP reports in production, rename the header to
 * `Content-Security-Policy` to enforce it.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src https://www.google.com https://maps.google.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy-Report-Only", value: csp },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

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
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },

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
