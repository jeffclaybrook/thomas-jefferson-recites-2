/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  remotePatterns: [
   {
    protocol: "https",
    hostname: "thomasjeffersonrecites.s3.amazonaws.com"
   }
  ]
 }
};

export default nextConfig;
