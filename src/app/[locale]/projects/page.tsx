import { getDictionary } from '../translations';

interface ProjectsPageProps {
  params: {
    locale: string;
  };
}

export default function ProjectsPage({ params }: ProjectsPageProps) {
  const dictionary = getDictionary(params.locale);
  const copy = dictionary.pages.projects;

  return (
    <article className="space-y-4">
      <h1 className="text-2xl font-bold">{copy.title}</h1>
      <p className="text-lg text-zinc-700">{copy.description}</p>
    </article>
  );
}
