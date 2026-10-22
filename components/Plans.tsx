"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { PLANS, waLink, type Modality } from "@/lib/site";

const compare = [
  ["Medicina e nutrição", "Consultas por vídeo", "Consultas em consultório"],
  ["Consultas", "Médicas e nutricionais, com retornos previstos", "Médicas e nutricionais, com retornos previstos"],
  ["Enfermagem", "Encontros remotos por telemonitoramento", "Encontros remotos por telemonitoramento"],
  ["Suporte de seguimento", "WhatsApp semanal e grupo de apoio", "WhatsApp semanal e grupo de apoio"],
  ["Avaliação presencial", "Exame presencial quando indicado, com organização do cuidado local", "Exame físico, glicose, sinais vitais e antropometria quando adequados e viáveis"],
];

export function Plans() {
  const [mod, setMod] = useState<Modality>("tele");
  const plan = PLANS[mod];

  const msg = `Olá! Quero conversar sobre o acompanhamento por ${mod === "tele" ? "telemedicina" : "consultório em Guarulhos"}.`;

  const pill = (active: boolean) =>
    `flex flex-col items-start justify-start text-left border p-4 sm:p-5 transition-all rounded-sm ${
      active ? "border-ink bg-olive-soft/60 shadow-[inset_0_0_0_1px_var(--ink)]" : "border-line bg-card hover:border-ink/50"
    }`;

  return (
    <section id="planos" className="mx-auto max-w-6xl px-5 py-16 lg:py-28">
      <Reveal>
        <h2 className="h-display text-[clamp(2.3rem,5vw,3.9rem)]">
          Seu cuidado, <em>no seu ritmo.</em>
        </h2>
        <p className="mt-5 text-ink-soft max-w-xl leading-relaxed">
          Escolha a modalidade e veja o que faz parte do acompanhamento.
        </p>
      </Reveal>

      <div className="mt-12 grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-10 items-start">
        <Reveal className="bg-paper-2 border border-line p-6 sm:p-8">
          <fieldset>
            <legend className="flex items-center gap-3 font-medium">
              Como prefere ser atendido?
            </legend>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button type="button" aria-pressed={mod === "tele"} onClick={() => setMod("tele")} className={pill(mod === "tele")}>
                <span className="block font-medium">Telemedicina</span>
                <span className="block text-[0.82rem] text-ink-soft mt-2 leading-snug">Consultas por vídeo, de onde você estiver.</span>
              </button>
              <button type="button" aria-pressed={mod === "pres"} onClick={() => setMod("pres")} className={pill(mod === "pres")}>
                <span className="block font-medium">Presencial</span>
                <span className="block text-[0.82rem] text-ink-soft mt-2 leading-snug">Consultório em Guarulhos, SP.</span>
              </button>
            </div>
          </fieldset>
          <p className="mt-6 text-[0.8rem] text-ink-soft leading-relaxed">
            Escolher aqui ajuda a conhecer as opções. Condições e adesão são combinadas com a equipe após avaliação.
          </p>
        </Reveal>

        <Reveal delay={120} className="on-dark relative bg-cocoa text-paper p-7 sm:p-10 grain overflow-hidden">
          <div className="relative z-10" aria-live="polite">
            <h3 className="h-display text-[clamp(1.9rem,3.6vw,2.7rem)]">{plan.title}</h3>
            <p className="mt-3 text-paper/75 leading-relaxed">{plan.lead}</p>

            <div className="h-px bg-paper/20 my-7" />
            <p className="text-[0.78rem] tracking-wide text-paper/60">O que faz parte</p>
            <ul className="mt-4 space-y-3">
              {plan.items.map((it) => (
                <li key={it} className="flex gap-3 text-[0.95rem]">
                  <span aria-hidden className="text-gold-light">✓</span>
                  {it}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[0.8rem] text-paper/60 leading-relaxed">{plan.note}</p>

            <a
              href={waLink(msg)}
              className="mt-8 flex items-center justify-between bg-blush text-cocoa px-5 py-4 rounded-sm font-medium hover:bg-paper transition-colors"
            >
              Conversar sobre este plano <span aria-hidden>↗</span>
            </a>
            <p className="mt-3 text-[0.75rem] text-paper/70">
              Condições combinadas com a equipe e formalizadas na contratação.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-20">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-serif text-[2rem]">Veja lado a lado</h3>
        </div>
        <div className="mt-6 overflow-x-auto border border-line">
          <table className="w-full min-w-[640px] text-left text-[0.9rem]">
            <thead>
              <tr className="bg-paper-2">
                <th className="p-4 font-medium w-[22%]">O que muda</th>
                <th className="p-4 font-medium">Telemedicina</th>
                <th className="p-4 font-medium">Presencial em Guarulhos</th>
              </tr>
            </thead>
            <tbody>
              {compare.map(([a, b, c]) => (
                <tr key={a} className="border-t border-line align-top">
                  <th scope="row" className="p-4 font-medium">{a}</th>
                  <td className="p-4 text-ink-soft">{b}</td>
                  <td className="p-4 text-ink-soft">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-[0.8rem] text-ink-soft leading-relaxed max-w-3xl">
O acompanhamento corresponde às consultas médicas e nutricionais, enfermagem, coordenação e suporte de
          seguimento apresentados no comparador. Psicologia, educação física e visitas domiciliares têm escopo,
          frequência e condições definidos na contratação. Os eventos seguem a programação da equipe; encontros presenciais
          em grupo têm datas e locais a definir. Você também pode escolher serviços avulsos.
        </p>
        <p className="mt-3 text-[0.75rem] text-ink-soft">
          Medicamentos, suplementos, aplicações e exames externos não estão incluídos.
        </p>
      </Reveal>
    </section>
  );
}
