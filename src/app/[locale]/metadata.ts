import { getDictionary } from './translations';

type LocalePromise = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: LocalePromise }) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const copy = dictionary.pages.home;

  return {
    title: copy.title,
    description: copy.description,
  };
}