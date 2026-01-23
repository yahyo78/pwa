/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
  fallbacks: {
    document: "/offline", // Вақте ки саҳифа бор намешавад, инро нишон медиҳад
  },
});

module.exports = withPWA({
  // Танзимоти дигари Next.js
});
