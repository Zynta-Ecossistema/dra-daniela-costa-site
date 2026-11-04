import { Reveal } from "./Reveal";
import { WaButton } from "./WaButton";
import { MSG } from "@/lib/site";

const cards = [
  "Acorda cansada(o), mesmo depois de dormir.",
  "Já fez dieta, perdeu peso, e ele voltou.",
  "Depois dos 40, sono, humor e corpo mudaram.",
  "Ansiedade e estresse já estão pesando no corpo.",
  "Os exames dão “normal”, mas você não se sente bem.",
  "Cansou de consultas de 10 minutos sem resposta.",
];

export function Reconhece() {
  return (
    <section id="reconhece" className="border-y border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:py-24">
        <Reveal className="max-w-2xl">
          <h2 className="h-display text-[clamp(2rem,4.4vw,3.2rem)]">
            Você se reconhece em <em>alguma destas situações?</em>
          </h2>
          <p className="mt-4 text-ink-soft">São as queixas que mais trazem pacientes até aqui.</p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((t, i) => (
            <Reveal as="li" key={t} delay={(i % 3) * 80} className="rounded-2xl border border-line bg-card p-6">
              <span className="font-serif text-[1.1rem] text-gold">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 font-serif text-[1.3rem] leading-snug">{t}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-[clamp(1.3rem,2.4vw,1.8rem)] leading-snug max-w-xl">
            Se marcou duas ou mais, a primeira consulta foi pensada para você.
          </p>
          <WaButton msg={MSG.M2}>Quero agendar</WaButton>
        </Reveal>
      </div>
    </section>
  );
}
