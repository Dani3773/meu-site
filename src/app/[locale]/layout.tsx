// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";

// Textos por idioma
const TEXTS = {
  pt: {
    title: "Daniel Felisberto — Java & Web (PT)",
    desc: "Portfólio, projetos e contato. Desenvolvedor Java & Web no Brasil.",
  },
  en: {
    title: "Daniel Felisberto — Java & Web (EN)",
    desc: "Portfolio, projects and contact. Java & Web Developer based in Brazil.",
  },
  de: {
    title: "Daniel Felisberto — Java & Web (DE)",
    desc: "Portfolio, Projekte und Kontakt. Java- & Webentwickler aus Brasilien.",
  },
} as const;

const BASE = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/+$/, "");

// Corrigir generateMetadata para aceitar { params }: { params: { locale: string } }
export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const l = (params.locale as "pt" | "en" | "de") ?? "pt";
  const t = TEXTS[l];
  const canonical = `${BASE}/${l}`;

  return {
    title: t.title,
    description: t.desc,
    alternates: {
      canonical,
      languages: {
        pt: `${BASE}/pt`,
        en: `${BASE}/en`,
        de: `${BASE}/de`,
        "x-default": BASE,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "Daniel Felisberto",
      title: t.title,
      description: t.desc,
      images: [`${BASE}/og-${l}.png`],
      locale: l,
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.desc,
      images: [`${BASE}/og-${l}.png`],
    },
  };
}

// Layout server-side correto
export default function LocaleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
