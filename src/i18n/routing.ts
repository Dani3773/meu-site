export const locales = ['pt', 'en', 'de'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'pt';
export const localePrefix = 'always';

const routing = {locales, defaultLocale, localePrefix};
export default routing;
