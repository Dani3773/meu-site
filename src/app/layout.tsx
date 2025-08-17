"use client";

import './globals.css';
import useLanguageStore from '@/store/languageStore';

export default function RootLayout({children}: {children: React.ReactNode}) {
  const { currentLanguage } = useLanguageStore();

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
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
        <title>{title}</title>
        <meta name="description" content={description} />
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
        <script async defer data-domain={process.env.NEXT_PUBLIC_SITE_URL?.replace(/^https?:\/\//, '')} src="https://plausible.io/js/plausible.js"></script>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { send_page_view: true });
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
