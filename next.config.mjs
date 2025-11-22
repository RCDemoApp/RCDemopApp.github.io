/** @type {import('next').NextConfig} */
const nextConfig = {
  // <CHANGE> Added output: 'export' for static site generation required by GitHub Pages
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
