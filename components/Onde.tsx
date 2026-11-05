import { Reveal } from "./Reveal";
import { WaButton } from "./WaButton";
import { CLINIC, MSG } from "@/lib/site";

export function Onde() {
  return (
    <section id="onde" className="mx-auto max-w-6xl px-5 py-14 lg:py-24">
      <Reveal>
        <h2 className="h-display text-[clamp(2rem,4.4vw,3.2rem)]">
          Escolha o formato <em>que cabe na sua rotina.</em>
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.3fr_0.9fr]">
        <Reveal className="rounded-2xl border border-line bg-card p-6 sm:p-7">
          <h3 className="font-serif text-[1.7rem]">Presencial</h3>
          <p className="mt-4 font-serif text-[1.25rem] leading-tight">{CLINIC.name}</p>
          <p className="mt-1 text-[0.95rem] leading-snug text-ink-soft">{CLINIC.address}</p>
          <p className="mt-1 text-[0.85rem] text-ink-soft">Mediante agendamento prévio.</p>
          <a
            href={CLINIC.route}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block border-b border-ink/40 py-1.5 text-[0.9rem] hover:border-ink"
          >
            Abrir rotas ↗
          </a>
          <div className="mt-4 overflow-hidden rounded-xl border border-line bg-paper-2">
            <iframe
              src={CLINIC.embed}
              title={`Mapa: ${CLINIC.name}, ${CLINIC.address}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[260px] w-full border-0 sm:h-[320px]"
            />
          </div>
          <WaButton msg={MSG.M7} className="mt-5 w-full sm:w-auto">
            Agendar presencial
          </WaButton>
        </Reveal>

        <Reveal delay={100} className="self-start rounded-2xl border border-line bg-card p-6 sm:p-7">
          <h3 className="font-serif text-[1.7rem]">Por vídeo</h3>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Consultas on-line conforme a disponibilidade e a adequação de cada caso. Quando necessário, a médica orienta
            uma avaliação presencial.
          </p>
          <WaButton msg={MSG.M8} className="mt-5 w-full">
            Agendar por vídeo
          </WaButton>
        </Reveal>
      </div>
    </section>
  );
}
