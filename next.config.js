/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      's3.us-west-2.amazonaws.com',
      'res.cloudinary.com',
      'github-contributions-api.deno.dev',
    ],
  },
  // experimental: {
  //   appDir: true,
  // },
};

module.exports = nextConfig;
