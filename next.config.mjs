/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/NextWave",
  assetPrefix: "/NextWave",
  distDir: "out",
  images: {
    domains: ["image.tmdb.org"],
  },
};
export default nextConfig;
