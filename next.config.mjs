/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Conditionally set basePath and assetPrefix for production (GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASE_URL : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASE_URL : '',
};

export default nextConfig;
