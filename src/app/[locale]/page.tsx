"use client";

import LanguageSwitcher from '@/components/LanguageSwitcher';
import useLanguageStore from '@/store/languageStore';

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
        <a href="/pt">/pt</a>
        <a href="/en">/en</a>
        <a href="/de">/de</a>
      </nav>
    </main>
  );
}
