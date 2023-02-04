/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https", "a.storyblok.com"],
    loader: "imgix",
    path: "*"
  },
  env: {
    STORYBLOK_API_TOKEN: process.env.STORYBLOK_API_TOKEN,
    STORYBLOK_PREVIEW_SECRET: process.env.STORYBLOK_PREVIEW_SECRET
  }
};

module.exports = nextConfig
