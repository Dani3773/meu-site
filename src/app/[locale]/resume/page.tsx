import { getDictionary } from '../translations';

type LocalePromise = Promise<{ locale: string }>;

export default async function ResumePage({ params }: { params: LocalePromise }) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const copy = dictionary.pages.resume;

  return (
    <article className="space-y-4">
      <h1 className="text-2xl font-bold">{copy.title}</h1>
      <p className="text-lg text-zinc-700">{copy.description}</p>
    </article>
  );
}