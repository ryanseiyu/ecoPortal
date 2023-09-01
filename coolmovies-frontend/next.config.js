/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['upload.wikimedia.org', 'images-na.ssl-images-amazon.com'],
  },
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  async rewrites() {
    return [
      {
        source: '/graphql',
        destination: 'http://localhost:5001/graphql',
      },
    ];
  },
  reactStrictMode: true,
};
