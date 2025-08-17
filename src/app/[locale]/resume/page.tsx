"use client";

import useLanguageStore from '@/store/languageStore';

const resumeContent = {
  pt: {
    title: 'Currículo',
    content: 'Este é o meu currículo. Aqui você encontrará informações sobre minha experiência, educação e habilidades.',
  },
  en: {
    title: 'Resume',
    content: 'This is my resume. Here you will find information about my experience, education, and skills.',
  },
  de: {
    title: 'Lebenslauf',
    content: 'Dies ist mein Lebenslauf. Hier finden Sie Informationen über meine Erfahrung, Ausbildung und Fähigkeiten.',
  },
};

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
