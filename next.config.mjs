/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV === "development";

const nextConfig = {
  ...(isDevelopment ? {} : { output: "export" }),
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
