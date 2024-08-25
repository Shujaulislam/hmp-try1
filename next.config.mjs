/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
                pathname: '/**', // Allows all paths under the domain
            },
        ],
    },
}