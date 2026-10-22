import Image from "next/image";
import { Reveal } from "./Reveal";
import { ENSINO_PHOTO, waLink } from "@/lib/site";

const frentes = [
  ["Preceptoria e docência", "Formação de médicos e profissionais de saúde em Medicina de Família e Comunidade."],
  ["Palestras", "Encontros e eventos com temas de saúde, qualidade de vida e cuidado integral, para profissionais e para o público."],
  ["Educação em saúde", "Informação clara para que cada pessoa participe das decisões sobre o próprio cuidado."],
];

export function Ensino() {
  return (
    <section id="ensino" className="bg-blush-2 border-y border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
        <div>
          <Reveal>
            <h2 className="h-display text-[clamp(2.2rem,5vw,3.8rem)]">
              Ensino e <em>educação.</em>
            </h2>
            <p className="mt-6 text-[1.04rem] leading-[1.75] text-ink-soft max-w-xl">
              Além da clínica, a Dra. Daniela leva o que aprendeu na prática para a sala de aula e para o palco, como
              preceptora, professora de Medicina de Família e Comunidade e palestrante.
            </p>
          </Reveal>
          <ul className="mt-9 max-w-xl divide-y divide-line border-y border-line">
            {frentes.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 90} className="py-5">
                <h3 className="font-serif text-[1.55rem] leading-tight">{t}</h3>
                <p className="text-[0.92rem] text-ink-soft leading-relaxed mt-2">{d}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200}>
            <a
              href={waLink("Olá! Gostaria de conversar sobre uma palestra ou atividade de ensino com a Dra. Daniela.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-between gap-6 bg-cocoa text-paper px-6 py-4 rounded-sm text-[0.95rem] hover:bg-cocoa-2 transition-colors"
            >
              Convidar para uma palestra <span aria-hidden>↗</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="relative aspect-[4/5] max-w-[440px] mx-auto lg:mx-0 w-full overflow-hidden bg-blush">
            <Image src={ENSINO_PHOTO.src} alt={ENSINO_PHOTO.alt} fill sizes="(min-width:1024px) 440px, 90vw" className="object-cover" style={{ objectPosition: ENSINO_PHOTO.pos }} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
