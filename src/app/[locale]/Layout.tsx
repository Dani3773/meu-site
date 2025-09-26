"use client";

import { ReactNode, useEffect, useMemo } from 'react';
import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import useLanguageStore from '@/store/languageStore';
import { getDictionary } from './translations';

interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

type NavKey = 'home' | 'about' | 'projects' | 'contact';

interface NavItem {
  key: NavKey;
  href: (locale: string) => string;
}

const navItems: NavItem[] = [
  {
    key: 'home',
    href: (locale) => `/${locale}`,
  },
  {
    key: 'about',
    href: (locale) => `/${locale}/about`,
  },
  {
    key: 'projects',
    href: (locale) => `/${locale}/projects`,
  },
  {
    key: 'contact',
    href: (locale) => `/${locale}/contact`,
  },
];

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = params;
  const dictionary = useMemo(() => getDictionary(locale), [locale]);

  const { setLanguage } = useLanguageStore();

  useEffect(() => {
    setLanguage(locale);
  }, [locale, setLanguage]);

  return (
    <main className="mx-auto max-w-3xl space-y-6 p-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-zinc-500">
            <strong className="font-semibold text-zinc-700">{dictionary.labels.language}:</strong>{' '}
            <code>{locale}</code>
          </p>
        </div>
        <LanguageSwitcher label={dictionary.labels.switcher} />
      </header>

      <nav className="flex flex-wrap gap-4 text-sm font-medium">
        {navItems.map((item) => (
          <Link key={item.key} href={item.href(locale)} className="transition-colors hover:text-sky-600">
            {dictionary.nav[item.key]}
          </Link>
        ))}
      </nav>

      <section className="rounded-lg border border-zinc-200 p-4 shadow-sm">
        {children}
      </section>
    </main>
  );
}
