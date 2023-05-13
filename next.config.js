/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build", //this line will tell the build to create a file with this name
  reactStrictMode: true,
};

module.exports = nextConfig;
