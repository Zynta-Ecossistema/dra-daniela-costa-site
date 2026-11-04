import { Reveal } from "./Reveal";
import { TEAM } from "@/lib/site";

const steps = [
  ["01", "Primeira consulta", "História, sintomas, rotina e objetivos; só os exames que fazem sentido."],
  ["02", "Plano com metas", "No retorno (até 15 dias), prioridades e metas possíveis."],
  ["03", "Acompanhamento semanal", "Nutrição, telemonitoramento com a enfermeira e suporte semanal no WhatsApp."],
  ["04", "Revisão e ajuste", "Evolução revisada e conduta ajustada."],
];

export function Como() {
  return (
    <section id="como" className="mx-auto max-w-6xl px-5 py-14 lg:py-24">
      <Reveal className="max-w-3xl">
        <h2 className="h-display text-[clamp(2rem,4.4vw,3.2rem)]">
          Você não sai da consulta <em>sozinha(o) com uma receita na mão.</em>
        </h2>
        <p className="mt-4 text-ink-soft max-w-xl">
          Medicina, nutrição e enfermagem trabalham juntas no mesmo plano, e acompanham você entre uma consulta e outra.
        </p>
      </Reveal>

      <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(([n, t, d], i) => (
          <Reveal as="li" key={n} delay={i * 80} className="border-t border-ink/25 pt-5">
            <span className="font-serif text-[2.4rem] leading-none text-gold">{n}</span>
            <h3 className="mt-4 font-serif text-[1.45rem] leading-tight">{t}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{d}</p>
          </Reveal>
        ))}
      </ol>

      <Reveal className="on-dark mt-12 rounded-[28px] bg-cocoa px-7 py-8 text-paper sm:px-10">
        <p className="eyebrow text-gold-light">Quem cuida de você</p>
        <ul className="mt-5 grid gap-6 sm:grid-cols-3">
          {TEAM.map(([n, r]) => (
            <li key={n}>
              <p className="font-serif text-[1.45rem] leading-tight">{n}</p>
              <p className="mt-1 text-[0.88rem] text-paper/75">{r}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
