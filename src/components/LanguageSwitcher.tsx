"use client";

import { useEffect } from 'react';
import useLanguageStore from '@/store/languageStore';
import { locales } from '@/i18n/routing';
import { useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const { currentLanguage, setLanguage } = useLanguageStore();
  const router = useRouter();

  useEffect(() => {
    const localeFromPath = window.location.pathname.split('/')[1];
    if (locales.includes(localeFromPath as typeof locales[number])) {
      setLanguage(localeFromPath as typeof locales[number]);
    }
  }, [setLanguage]);

  function changeLocale(next: string) {
    console.log('Current language:', currentLanguage);
    console.log('Next language:', next);
    setLanguage(next as typeof locales[number]);
    router.push(`/${next}`);
  }

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="language-switcher" className="text-sm">Switch:</label>
      <select
        id="language-switcher"
        name="language-switcher"
        className="border rounded px-2 py-1"
        value={currentLanguage}
        onChange={(e) => changeLocale(e.target.value)}
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {l.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
