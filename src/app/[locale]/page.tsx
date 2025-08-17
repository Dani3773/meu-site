"use client";

import LanguageSwitcher from '@/components/LanguageSwitcher';
import useLanguageStore from '@/store/languageStore';
import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from "next";

const TEXTS = {
  pt: { title: "Seu Nome — Java & Web (PT)", desc: "Desenvolvedor Java & Web. Projetos, contato e CV." },
  en: { title: "Your Name — Java & Web (EN)", desc: "Java & Web developer. Projects, contact and resume." },
  de: { title: "Ihr Name — Java & Web (DE)", desc: "Java- & Webentwickler. Projekte, Kontakt und Lebenslauf." },
} as const;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

type Props = { params: { locale: "pt" | "en" | "de" } };

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const l = params.locale ?? "pt";
  const t = TEXTS[l];

  const canonical = `${SITE_URL}/${l}`;
  const alternates = {
    canonical,
    languages: {
      pt: `${SITE_URL}/pt`,
      en: `${SITE_URL}/en`,
      de: `${SITE_URL}/de`,
      "x-default": SITE_URL,
    },
  } as const;

  return {
    title: t.title,
    description: t.desc,
    alternates,
    openGraph: {
      url: canonical,
      type: "website",
      title: t.title,
      description: t.desc,
      images: [`${SITE_URL}/og-${l}.png`],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.desc,
      images: [`${SITE_URL}/og-${l}.png`],
    },
  };
}

const messages = {
  pt: {
    title: 'Bem-vindo',
    description: 'Este é um exemplo de aplicação multilíngue.',
  },
  en: {
    title: 'Welcome',
    description: 'This is a multilingual application example.',
  },
  de: {
    title: 'Willkommen',
    description: 'Dies ist ein Beispiel für eine mehrsprachige Anwendung.',
  },
};

export default function Home() {
  const { currentLanguage } = useLanguageStore();
  const { title, description } = messages[currentLanguage];

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{title} ({currentLanguage.toUpperCase()})</h1>
        <LanguageSwitcher />
      </header>

      <p className="text-lg">{description}</p>

      <section className="rounded-lg border p-4 text-sm">
        <div><strong>Idioma atual:</strong> <code>{currentLanguage}</code></div>
      </section>

      <nav className="mt-6 flex gap-4 underline">
        <Link href="/pt">PT</Link>
        <Link href="/en">EN</Link>
        <Link href="/de">DE</Link>
        <Link href="/resume">Resume</Link>
      </nav>
    </main>
  );
}
