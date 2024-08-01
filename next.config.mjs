/**@type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "via.placeholder.com",
            },
            {
                protocol: "https",
                hostname: "ui-avatars.com",
            },
            {
                protocol: "https",
                hostname:
                    "firebasestorage.googleapis.com/v0/b/rxcountry-backoffice.appspot.com",
            },
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
  images: {
    loader: 'imgix',
    path: '/',
  },
};
export default nextConfig;
