/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://192.168.1.69:3333/:path*", // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
