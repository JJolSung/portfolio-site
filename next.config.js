/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: process.env.LOCAL_IP_ADDRESS
    ? [process.env.LOCAL_IP_ADDRESS]
    : [],
};

module.exports = nextConfig;
