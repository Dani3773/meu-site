"use client";

import useLanguageStore from '@/store/languageStore';
import { Metadata } from "next";

const resumeContent = {
  pt: {
    title: 'Currículo',
    content: 'Este é o meu currículo. Aqui você encontrará informações sobre minha experiência, educação e habilidades.',
    ogImage: "/og-pt.png",
  },
  en: {
    title: 'Resume',
    content: 'This is my resume. Here you will find information about my experience, education, and skills.',
    ogImage: "/og-en.png",
  },
  de: {
    title: 'Lebenslauf',
    content: 'Dies ist mein Lebenslauf. Hier finden Sie Informationen über meine Erfahrung, Ausbildung und Fähigkeiten.',
    ogImage: "/og-de.png",
  },
};

export function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const { title } = resumeContent[locale as keyof typeof resumeContent];

  return {
    title,
    description: `Página de currículo em ${locale}`,
  };
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const messages = {
    pt: {
      title: "Currículo",
      description: "Este é o meu currículo. Aqui você encontrará informações sobre minha experiência, educação e habilidades.",
      ogImage: "/og-pt.png",
    },
    en: {
      title: "Resume",
      description: "This is my resume. Here you will find information about my experience, education, and skills.",
      ogImage: "/og-en.png",
    },
    de: {
      title: "Lebenslauf",
      description: "Dies ist mein Lebenslauf. Hier finden Sie Informationen über meine Erfahrung, Ausbildung und Fähigkeiten.",
      ogImage: "/og-de.png",
    },
  };

  const { locale } = params;
  const msg = messages[locale as "pt"|"en"|"de"] ?? messages.en;

  return {
    title: msg.title,
    description: msg.description,
    openGraph: {
      title: msg.title,
      description: msg.description,
      url: `https://meu-site.com/${locale}/resume`,
      images: [{ url: msg.ogImage }],
      siteName: "Daniel Felisberto",
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: msg.title,
      description: msg.description,
      images: [msg.ogImage],
    },
  };
}

export default function Resume() {
  const { currentLanguage } = useLanguageStore();
  const { title, content } = resumeContent[currentLanguage];

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <header>
        <h1 className="text-2xl font-bold">{title}</h1>
      </header>
      <p className="text-lg">{content}</p>
    </main>
  );
}
