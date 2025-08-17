"use client";

import './globals.css';
import useLanguageStore from '@/store/languageStore';

export default function RootLayout({children}: {children: React.ReactNode}) {
  const { currentLanguage } = useLanguageStore();

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const alternateLinks = [
    { href: `${baseUrl}/pt`, hrefLang: 'pt' },
    { href: `${baseUrl}/en`, hrefLang: 'en' },
    { href: `${baseUrl}/de`, hrefLang: 'de' },
    { href: baseUrl, hrefLang: 'x-default' },
  ];

  const socialPreviews = {
    pt: {
      title: 'Bem-vindo',
      description: 'Este é um exemplo de aplicação multilíngue.',
      image: `${baseUrl}/og-image-pt.png`,
    },
    en: {
      title: 'Welcome',
      description: 'This is a multilingual application example.',
      image: `${baseUrl}/og-image-en.png`,
    },
    de: {
      title: 'Willkommen',
      description: 'Dies ist ein Beispiel für eine mehrsprachige Anwendung.',
      image: `${baseUrl}/og-image-de.png`,
    },
  };

  const { title, description, image } = socialPreviews[currentLanguage];

  return (
    <html lang={currentLanguage}>
      <head>
        <title>Meu Site - {currentLanguage.toUpperCase()}</title>
        <meta name="description" content={`Descrição do site em ${currentLanguage}`} />
        <link rel="canonical" href={`${baseUrl}/${currentLanguage}`} />
        {alternateLinks.map((link) => (
          <link key={link.hrefLang} rel="alternate" href={link.href} hrefLang={link.hrefLang} />
        ))}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={`${baseUrl}/${currentLanguage}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script async defer data-domain="meu-site.com" src="https://plausible.io/js/plausible.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
