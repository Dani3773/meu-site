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

const BASE =
  (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/+$/, "");

// Função de metadados multilíngue
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const l = (params.locale ?? "pt") as keyof typeof TEXTS;
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

// Layout multilíngue (sem Zustand aqui!)
export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
