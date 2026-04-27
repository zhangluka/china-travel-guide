import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/china-travel-guide',
  images: { unoptimized: true },
}

export default nextConfig
