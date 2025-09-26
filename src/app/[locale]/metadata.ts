import { getDictionary } from './translations';

interface MetadataParams {
  params: {
    locale: string;
  };
}

export function generateMetadata({ params }: MetadataParams) {
  const dictionary = getDictionary(params.locale);
  const { title, description } = dictionary.pages.home;

  return {
    title,
    description,
  };
}
