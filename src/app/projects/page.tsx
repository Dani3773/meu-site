import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos — Daniel Felisberto",
  description:
    "Seleção alinhada ao plano Alemanha 2025–2027. Em construção: em breve filtros por stack, ano e tags.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <article className="space-y-4">
      <h1 className="text-2xl font-bold">Projetos</h1>
      <p className="text-zinc-700">
        Seleção alinhada ao meu plano Alemanha 2025–2027. Em construção: em breve filtros por stack, ano e
        tags.
      </p>
      <p className="text-zinc-700">
        Este espaço vai reunir entregas profissionais, estudos dirigidos e experimentos técnicos
        relevantes para o novo ciclo internacional.
      </p>
    </article>
  );
}