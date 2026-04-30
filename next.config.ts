import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "http", // Use 'http' for localhost development
                hostname: "localhost",
                port: "8000", // Specify your Django port
                pathname: "/media/**" // Adjust the path to where your images are served
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: `${process.env.API_URL}/:path*`
            }
        ]
    }
}

export default nextConfig
