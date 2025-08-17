// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";

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

const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/+$/, "");

export async function generateMetadata(
  { params }: { params: { locale: "pt" | "en" | "de" } }
): Promise<Metadata> {
  const l = params.locale;
  const t = TEXTS[l];

  return {
    title: t.title,
    description: t.desc,
    alternates: {
      canonical: `${BASE_URL}/${l}`,
      languages: {
        pt: `${BASE_URL}/pt`,
        en: `${BASE_URL}/en`,
        de: `${BASE_URL}/de`,
        "x-default": BASE_URL,
      },
    },
    openGraph: {
      type: "website",
      url: `${BASE_URL}/${l}`,
      siteName: "Daniel Felisberto",
      title: t.title,
      description: t.desc,
      images: [`${BASE_URL}/og-${l}.png`],
      locale: l,
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.desc,
      images: [`${BASE_URL}/og-${l}.png`],
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: "pt" | "en" | "de" };
}) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
