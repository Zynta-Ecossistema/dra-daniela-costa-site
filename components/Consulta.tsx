import { Reveal } from "./Reveal";
import { WaButton } from "./WaButton";
import { MSG, SHOW_PRICE, PRICE_FIRST } from "@/lib/site";

const incluso = [
  "Consulta com a Dra. Daniela",
  "Retorno para avaliar exames em até 15 dias",
  "Bioimpedância, medidas e sinais vitais (no presencial)",
  "Plano de cuidado por escrito, com metas",
];

export function Consulta() {
  const showPrice = SHOW_PRICE && PRICE_FIRST.trim() !== "";
  return (
    <section id="consulta" className="border-y border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:py-24">
        <Reveal>
          <h2 className="h-display text-[clamp(2rem,4.4vw,3.2rem)]">
            O que está incluso, <em>sem letra miúda.</em>
          </h2>
        </Reveal>

        {/* no celular o card de preço vem antes da lista: o valor aparece antes do detalhe */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal className="on-dark order-1 rounded-[28px] bg-cocoa p-7 text-paper sm:p-9 lg:order-2">
            <p className="eyebrow text-gold-light">Primeira consulta + retorno</p>
            <p className="mt-4 font-serif text-[clamp(1.9rem,3.6vw,2.7rem)] leading-tight">
              {showPrice ? PRICE_FIRST : "Valores e horários pelo WhatsApp"}
            </p>
            <p className="mt-3 text-paper/75">Presencial em Guarulhos ou por vídeo.</p>
            <WaButton msg={MSG.M3} className="mt-7 w-full sm:w-auto">
              Ver horários disponíveis
            </WaButton>
          </Reveal>

          <Reveal delay={100} className="order-2 lg:order-1">
            <ul className="divide-y divide-line border-y border-line">
              {incluso.map((t) => (
                <li key={t} className="flex gap-3 py-4 text-[1.02rem]">
                  <span aria-hidden className="text-gold">✓</span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[0.85rem] text-ink-soft">Medicamentos, suplementos e exames laboratoriais não estão inclusos.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
