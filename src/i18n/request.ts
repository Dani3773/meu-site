import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale} from './routing';

export default getRequestConfig(async ({locale}) => {
  const current =
    locale && (locales as readonly string[]).includes(locale as string)
      ? (locale as string)
      : defaultLocale;

  return {
    locale: current,
    messages: (await import(`./messages/${current}.json`)).default
  };
});
