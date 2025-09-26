import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre — Daniel Felisberto",
  description: "Breve história, objetivos e contexto do plano Alemanha 2025–2027.",
};

export default function AboutPage() {
  return (
    <article className="space-y-4">
      <h1 className="text-2xl font-bold">Sobre mim</h1>
      <p className="text-zinc-700">
        Desenvolvedor focado em Java e tecnologias web, planejando um ciclo internacional entre 2025 e
        2027 na Alemanha. Esta página receberá em breve uma narrativa mais completa sobre a trajetória,
        motivadores e próximos passos.
      </p>
      <p className="text-zinc-700">
        Enquanto os detalhes são preparados, use este espaço como ponto de referência para alinhamento
        estratégico, apresentações e networking.
      </p>
    </article>
  );
}