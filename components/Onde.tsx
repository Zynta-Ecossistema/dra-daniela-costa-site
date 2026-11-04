import Image from "next/image";
import { Reveal } from "./Reveal";
import { WaButton } from "./WaButton";
import { CLINICS, MSG } from "@/lib/site";

export function Onde() {
  return (
    <section id="onde" className="mx-auto max-w-6xl px-5 py-14 lg:py-24">
      <Reveal>
        <h2 className="h-display text-[clamp(2rem,4.4vw,3.2rem)]">
          Escolha o formato <em>que cabe na sua rotina.</em>
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.3fr_0.85fr_0.85fr]">
        <Reveal className="rounded-2xl border border-line bg-card p-6 sm:p-7">
          <h3 className="font-serif text-[1.7rem]">Presencial</h3>
          <ul className="mt-4 divide-y divide-line">
            {CLINICS.map((c) => (
              <li key={c.name} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                {c.photo && (
                  <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg bg-paper-2">
                    <Image src={c.photo.src} alt={c.photo.alt} fill sizes="96px" loading="lazy" className="object-cover" />
                  </div>
                )}
                <div className="min-w-0">
                  <p className="font-serif text-[1.2rem] leading-tight">{c.name}</p>
                  <p className="mt-1 text-[0.88rem] leading-snug text-ink-soft">{c.address}</p>
                  <a href={c.map} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block border-b border-ink/40 py-1.5 text-[0.85rem] hover:border-ink">
                    Ver no mapa ↗
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="rounded-2xl border border-line bg-card p-6 sm:p-7">
          <h3 className="font-serif text-[1.7rem]">Por vídeo</h3>
          <p className="mt-4 leading-relaxed text-ink-soft">
            De qualquer cidade, com a mesma equipe e o mesmo plano. Se precisar de exame físico, a equipe orienta o caminho.
          </p>
        </Reveal>

        <Reveal delay={200} className="rounded-2xl border border-line bg-card p-6 sm:p-7">
          <h3 className="font-serif text-[1.7rem]">Em casa</h3>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Para idosos, pessoas acamadas ou com mobilidade reduzida. Área de cobertura e valores sob consulta.
          </p>
          <WaButton msg={MSG.M5} variant="ghost" className="mt-5 w-full">
            Consultar valores da visita
          </WaButton>
        </Reveal>
      </div>
    </section>
  );
}
