"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

const faq = [
  ["A telemedicina é adequada para mim?", "Em muitos casos, sim. A consulta por vídeo permite conversar, avaliar sua história e acompanhar a evolução. Ela não inclui exame físico, bioimpedância, glicemia ou sinais vitais. Quando a avaliação presencial for necessária, a equipe orienta o melhor caminho."],
  ["O que faz parte dos planos de 4 e 6 meses?", "Consultas médicas e nutricionais com retornos previstos, encontros mensais de enfermagem por telemonitoramento, coordenação do cuidado, suporte semanal por WhatsApp e grupo de apoio. Psicologia e educação física são articuladas conforme necessidade e contratação."],
  ["Posso participar se já tenho acompanhamento com outros profissionais?", "Pode. A participação no programa pode ser articulada aos profissionais que já acompanham você, e os encaminhamentos são definidos após a avaliação."],
  ["Medicamentos e suplementos estão inclusos?", "Não. Medicamentos, suplementos, aplicações e exames externos não estão incluídos nos valores. A suplementação só é orientada quando houver indicação clínica."],
  ["Existe garantia de resultado?", "Não. Os resultados variam entre pessoas. O objetivo é construir metas possíveis junto com você e acompanhar a evolução de forma contínua e responsável."],
  ["Precisa de atendimento domiciliar?", "A consulta domiciliar é indicada para idosos, pessoas com mobilidade reduzida e pacientes acamados. Fale com a equipe para confirmar área de cobertura, disponibilidade e valores antes do agendamento."],
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="duvidas" className="mx-auto max-w-6xl px-5 py-16 lg:py-28 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20">
      <Reveal>
        <h2 className="h-display text-[clamp(2.2rem,5vw,3.6rem)]">
          Clareza também <em>é cuidado.</em>
        </h2>
        <p className="mt-5 text-ink-soft leading-relaxed max-w-sm">
          As escolhas são feitas com você. Conte com a equipe para esclarecer os detalhes.
        </p>
      </Reveal>
      <Reveal delay={120}>
        <ul className="border-t border-line">
          {faq.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <li key={q} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-5 text-left font-serif text-[1.35rem] leading-snug"
                  >
                    {q}
                    <span aria-hidden className={`text-rose text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-${i}`}
                  role="region"
                  className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-ink-soft leading-[1.75] max-w-xl">{a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
