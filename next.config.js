/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Real images live in /public — no remote/placeholder hosts.
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
