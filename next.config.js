/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    dirs: ["pages", "components", "styles"],
  },
  env: {
    cloudinaryCloudName: process.env.API_CloudinaryCloudName,
    cloudinaryUploadPreset: process.env.API_CloudinaryUploadPreset,
  },
};

module.exports = nextConfig;
