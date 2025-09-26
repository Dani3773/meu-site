import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Bem-vindo</h1>
        <p className="text-lg text-zinc-700">
          Este espaço será o ponto inicial com novidades, bastidores do plano Alemanha 2025–2027 e
          atalhos para os conteúdos principais.
        </p>
      </header>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Por onde começar</h2>
        <ul className="list-inside list-disc space-y-2 text-zinc-700">
          <li>
            Conheça a jornada em <Link href="/about" className="text-sky-600 hover:underline">Sobre</Link>.
          </li>
          <li>
            Veja o que está em construção na área de{' '}
            <Link href="/projects" className="text-sky-600 hover:underline">Projetos</Link>.
          </li>
          <li>
            Consulte experiências e formação em{' '}
            <Link href="/resume" className="text-sky-600 hover:underline">Currículo</Link>.
          </li>
          <li>
            Entre em contato direto pela seção{' '}
            <Link href="/contact" className="text-sky-600 hover:underline">Contato</Link>.
          </li>
        </ul>
      </div>

      <aside className="rounded-lg border border-dashed border-zinc-300 p-4 text-sm text-zinc-600">
        Atualização contínua: as páginas recebem melhorias conforme o plano avança.
      </aside>
    </section>
  );
}