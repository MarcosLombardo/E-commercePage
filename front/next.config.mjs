/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "support.apple.com" },
            { hostname: "i.pinimg.com" },
        ],
    },
};

export default nextConfig;
