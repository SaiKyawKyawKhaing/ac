/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Conditionally set basePath and assetPrefix for production (GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? "https://saikyawkyawkhaing.github.io/ac" : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? "https://saikyawkyawkhaing.github.io/ac" : '',
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

export default nextConfig;