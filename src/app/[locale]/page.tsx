import { getDictionary } from './translations';

interface HomePageProps {
  params: {
    locale: string;
  };
}

export default function HomePage({ params }: HomePageProps) {
  const dictionary = getDictionary(params.locale);
  const copy = dictionary.pages.home;

  return (
    <article className="space-y-4">
      <h1 className="text-2xl font-bold">{copy.title}</h1>
      <p className="text-lg text-zinc-700">{copy.description}</p>
    </article>
  );
}
