/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["https://www.gravatar.com/"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gravatar.com",
        port: "",
        pathname: "/avatar/**",
      },
    ],
  },
};

export default nextConfig;
