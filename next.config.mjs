// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    const csp = [
      "default-src 'self' https: data: blob:",
      "img-src 'self' https: data: blob:",
      "media-src 'self' https: data: blob:",
      `script-src 'self' ${isProd ? "" : "'unsafe-inline' 'unsafe-eval'"} https:`,
      `style-src 'self' ${isProd ? "" : "'unsafe-inline'"} https:`,
      "connect-src 'self' https:",
      "frame-ancestors 'self'",
      "frame-src https:",
    ].filter(Boolean).join('; ');

    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-XSS-Protection', value: '0' },
          { key: 'Permissions-Policy', value: "camera=(), microphone=(), geolocation=()" },
          { key: 'Strict-Transport-Security', value: 'max-age=15552000; includeSubDomains; preload' },
          { key: 'Content-Security-Policy', value: csp },
        ],
      },
    ];
  },
};

export default nextConfig;
