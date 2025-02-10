/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Conditionally set basePath and assetPrefix for production (GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
};

export default nextConfig;
