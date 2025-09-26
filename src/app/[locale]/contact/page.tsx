import { getDictionary } from '../translations';

interface ContactPageProps {
  params: {
    locale: string;
  };
}

export default function ContactPage({ params }: ContactPageProps) {
  const dictionary = getDictionary(params.locale);
  const copy = dictionary.pages.contact;

  return (
    <article className="space-y-4">
      <h1 className="text-2xl font-bold">{copy.title}</h1>
      <p className="text-lg text-zinc-700">{copy.description}</p>
    </article>
  );
}
