"use client";

import useLanguageStore from '@/store/languageStore';
import type {ReactNode} from 'react';

export default function LocaleLayout({children}: {children: ReactNode}) {
  const { currentLanguage } = useLanguageStore();

  return (
    <html lang={currentLanguage}>
      <body>{children}</body>
    </html>
  );
}
