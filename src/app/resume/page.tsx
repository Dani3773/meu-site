import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Currículo — Daniel Felisberto",
  description: "Resumo profissional, experiências, formação e habilidades.",
};

export default function ResumePage() {
  return (
    <article className="space-y-4">
      <h1 className="text-2xl font-bold">Currículo</h1>
      <p className="text-zinc-700">
        Um recorte das experiências em Java, desenvolvimento web e liderança técnica estará disponível em
        breve. A meta é apresentar um material enxuto, bilíngue e atualizado com foco em oportunidades na
        Alemanha a partir de 2025.
      </p>
      <p className="text-zinc-700">
        Enquanto isso, o LinkedIn permanece como referência principal para histórico profissional e
        recomendações.
      </p>
    </article>
  );
}