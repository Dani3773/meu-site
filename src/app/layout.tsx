import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        {/* Plausible Analytics */}
        <script
          async
          defer
          data-domain={process.env.NEXT_PUBLIC_SITE_URL?.replace(/^https?:\/\//, '')}
          src="https://plausible.io/js/plausible.js"
        ></script>

        {/* Google Analytics */}
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
