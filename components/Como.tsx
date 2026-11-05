import { Reveal } from "./Reveal";

const steps = [
  ["01", "Primeira consulta", "Escuta da sua história, sintomas, rotina e objetivos, com os exames que fizerem sentido.", "Consulta"],
  ["02", "Plano de cuidado", "Prioridades e metas definidas juntas, respeitando as suas necessidades.", "Consulta"],
  ["03", "Programa de acompanhamento", "Cuidado contínuo com a equipe, conforme o plano escolhido.", "Programa opcional"],
  ["04", "Revisão e ajuste", "Evolução revisada e conduta ajustada ao longo do programa.", "Programa opcional"],
];

export function Como() {
  return (
    <section id="como" className="mx-auto max-w-6xl px-5 py-14 lg:py-24">
      <Reveal className="max-w-3xl">
        <h2 className="h-display text-[clamp(2rem,4.4vw,3.2rem)]">
          Como funciona o <em>nosso acompanhamento</em>
        </h2>
      </Reveal>

      <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(([n, t, d, tag], i) => (
          <Reveal as="li" key={n} delay={i * 80} className="border-t border-ink/25 pt-5">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-serif text-[2.4rem] leading-none text-gold">{n}</span>
              <span className="text-[0.72rem] uppercase tracking-[0.12em] text-ink-soft">{tag}</span>
            </div>
            <h3 className="mt-4 font-serif text-[1.45rem] leading-tight">{t}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{d}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
