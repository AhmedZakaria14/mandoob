import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  async redirects() {
    return [
      { source: '/blog/9', destination: '/', permanent: true },
      { source: '/blog/12', destination: '/', permanent: true },
      { source: '/blog/13', destination: '/', permanent: true },
      { source: '/blog/15', destination: '/', permanent: true },
      { source: '/blog/17', destination: '/', permanent: true },
      { source: '/blog/18', destination: '/', permanent: true },
      { source: '/blog/22', destination: '/', permanent: true },
      { source: '/blog/23', destination: '/', permanent: true },
      { source: '/blog/25', destination: '/', permanent: true },
      { source: '/blog/26', destination: '/', permanent: true },
    ];
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**', // Allow cloudinary images
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
