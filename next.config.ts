const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://meu-site.com',
  },
};

export default nextConfig;
