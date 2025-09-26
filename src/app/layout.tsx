import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Sobre' },
  { href: '/projects', label: 'Projetos' },
  { href: '/contact', label: 'Contato' },
  { href: '/resume', label: 'Currículo' },
] as const;

export const metadata: Metadata = {
  title: 'Daniel Felisberto — Java & Web',
  description: 'Portfólio, projetos e contato. Desenvolvedor focado no plano Alemanha 2025–2027.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
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
      <body className="bg-white text-zinc-900">
        <div className="mx-auto max-w-3xl space-y-8 p-6">
          <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <Link href="/" className="text-2xl font-semibold text-zinc-800 hover:text-sky-600">
                Daniel Felisberto
              </Link>
              <p className="text-sm text-zinc-500">Portfolio em construção para o plano Alemanha 2025–2027.</p>
            </div>
            <nav className="flex flex-wrap gap-4 text-sm font-medium">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition-colors hover:text-sky-600">
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>

          <main className="rounded-lg border border-zinc-200 p-6 shadow-sm">{children}</main>
        </div>
      </body>
    </html>
  );
}