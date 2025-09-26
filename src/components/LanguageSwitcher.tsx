"use client";

import { useEffect } from 'react';
import useLanguageStore from '@/store/languageStore';
import { locales } from '@/i18n/routing';
import { useRouter } from 'next/navigation';

interface LanguageSwitcherProps {
  label?: string;
}

export default function LanguageSwitcher({ label = 'Switch' }: LanguageSwitcherProps) {
  const { currentLanguage, setLanguage } = useLanguageStore();
  const router = useRouter();

  useEffect(() => {
    const localeFromPath = window.location.pathname.split('/')[1];
    if ((locales as readonly string[]).includes(localeFromPath)) {
      setLanguage(localeFromPath as typeof locales[number]);
    }
  }, [setLanguage]);

  function changeLocale(next: string) {
    setLanguage(next as typeof locales[number]);
    router.push(`/${next}`);
  }

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="language-switcher" className="text-sm">
        {label}:
      </label>
      <select
        id="language-switcher"
        name="language-switcher"
        className="rounded border px-2 py-1"
        value={currentLanguage}
        onChange={(event) => changeLocale(event.target.value)}
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
