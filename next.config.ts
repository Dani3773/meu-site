const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://meu-site.com',
  },
  experimental: {
    metadataRoutes: true, // Habilita suporte experimental para rotas de metadados
  },
};

export default nextConfig;
