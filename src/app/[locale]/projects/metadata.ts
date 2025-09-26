import { locales } from '@/i18n/routing';
import { getDictionary } from '../translations';

interface MetadataParams {
  params: {
    locale: string;
  };
}

const canonicalPath = '/projects';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? '';

function withSiteUrl(path: string) {
  if (!siteUrl) {
    return path;
  }

  return `${siteUrl}${path}`;
}

function localeProjectsPath(locale: string) {
  return `/${locale}/projects`;
}

export function generateMetadata({ params }: MetadataParams) {
  const { locale } = params;
  const dictionary = getDictionary(locale);
  const copy = dictionary.pages.projects;

  const languageAlternates = locales.reduce<Record<string, string>>((acc, languageCode) => {
    acc[languageCode] = withSiteUrl(localeProjectsPath(languageCode));
    return acc;
  }, {});

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: withSiteUrl(canonicalPath),
      languages: languageAlternates,
    },
  };
}
