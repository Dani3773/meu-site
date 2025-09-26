import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato — Daniel Felisberto",
  description: "Formas de contato e disponibilidade durante o plano Alemanha 2025–2027.",
};

export default function ContactPage() {
  return (
    <article className="space-y-4">
      <h1 className="text-2xl font-bold">Contato</h1>
      <p className="text-zinc-700">
        Está preparando um projeto, parceria ou quer acompanhar mais de perto a mudança para a Alemanha?
        Em breve esta página reunirá e-mail profissional, redes e janelas de disponibilidade.
      </p>
      <p className="text-zinc-700">
        Até lá, utilize o e-mail <a href="mailto:contato@daniel.dev" className="text-sky-600 hover:underline">contato@daniel.dev</a>
        para conversas iniciais ou convites.
      </p>
    </article>
  );
}