import { Locale, locales } from '@/i18n/routing';

type PageKey = 'home' | 'about' | 'projects' | 'resume' | 'contact';

interface PageCopy {
  title: string;
  description: string;
}

interface LocaleDictionary {
  nav: Record<'home' | 'about' | 'projects' | 'contact' | 'resume', string>;
  labels: {
    language: string;
    switcher: string;
  };
  pages: Record<PageKey, PageCopy>;
}

const fallbackLocale: Locale = 'pt';

const dictionaries: Record<Locale, LocaleDictionary> = {
  pt: {
    nav: {
      home: 'Home',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
      resume: 'Currículo',
    },
    labels: {
      language: 'Idioma atual',
      switcher: 'Trocar idioma',
    },
    pages: {
      home: {
        title: 'Bem-vindo',
        description: 'Este espaço será o ponto inicial com novidades e destaques.',
      },
      about: {
        title: 'Sobre mim',
        description: 'Conte uma história breve sobre sua trajetória e objetivos.',
      },
      projects: {
        title: 'Projetos',
        description: 'Seleção alinhada ao meu plano Alemanha 2025–2027. Em construção: em breve filtros por stack, ano e tags.',
      },
      resume: {
        title: 'Currículo',
        description: 'Resumo profissional com experiências, formação e habilidades.',
      },
      contact: {
        title: 'Contato',
        description: 'Apresente maneiras de entrar em contato em 2025 e adiante.',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      resume: 'Resume',
    },
    labels: {
      language: 'Current language',
      switcher: 'Switch',
    },
    pages: {
      home: {
        title: 'Welcome',
        description: 'This area will evolve into the landing space for fresh updates.',
      },
      about: {
        title: 'About me',
        description: 'Share a short story about your journey and goals.',
      },
      projects: {
        title: 'Projects',
        description: 'A selection aligned with my Germany 2025–2027 plan. Under construction: filters by stack, year, and tags coming soon.',
      },
      resume: {
        title: 'Resume',
        description: 'Professional summary highlighting experience, education, and skills.',
      },
      contact: {
        title: 'Contact',
        description: 'Outline the best ways to get in touch in 2025 and beyond.',
      },
    },
  },
  de: {
    nav: {
      home: 'Start',
      about: 'Über mich',
      projects: 'Projekte',
      contact: 'Kontakt',
      resume: 'Lebenslauf',
    },
    labels: {
      language: 'Aktuelle Sprache',
      switcher: 'Wechseln',
    },
    pages: {
      home: {
        title: 'Willkommen',
        description: 'Dieser Bereich wird zum Startpunkt für Neuigkeiten und Highlights.',
      },
      about: {
        title: 'Über mich',
        description: 'Erzähle kurz von deinem Werdegang und deinen Zielen.',
      },
      projects: {
        title: 'Projekte',
        description: 'Auswahl im Einklang mit meinem Deutschland-Plan 2025–2027. In Arbeit: Filter nach Stack, Jahr und Tags folgen.',
      },
      resume: {
        title: 'Lebenslauf',
        description: 'Beruflicher Überblick mit Erfahrung, Ausbildung und Kompetenzen.',
      },
      contact: {
        title: 'Kontakt',
        description: 'Beschreibe die besten Kontaktwege ab 2025.',
      },
    },
  },
};

export function resolveLocaleCandidate(locale: string): Locale {
  return (locales as readonly string[]).includes(locale) ? (locale as Locale) : fallbackLocale;
}

export function getDictionary(locale: string): LocaleDictionary {
  const key = resolveLocaleCandidate(locale);
  return dictionaries[key];
}

export type { LocaleDictionary };
