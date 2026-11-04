import Image from "next/image";
import { Reveal } from "./Reveal";

export function Sobre() {
  return (
    <section id="sobre" className="border-y border-line bg-paper-2">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-24">
        <Reveal>
          <div className="relative mx-auto aspect-square w-full max-w-[440px] overflow-hidden bg-blush lg:mx-0">
            <Image
              src="/img/dra-sofa-azul.webp"
              alt="Dra. Daniela Costa, médica, sentada em um sofá claro, de terno azul"
              fill
              sizes="(min-width:1024px) 440px, 90vw"
              className="object-cover object-[50%_26%]"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="h-display text-[clamp(2rem,4.4vw,3.2rem)]">
              20 anos cuidando de gente, <em>da floresta à cidade.</em>
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-6 max-w-xl space-y-4 text-[1.04rem] leading-[1.75] text-ink-soft">
            <p>
              Amazonense, enfermeira antes de ser médica. Atuou em saúde da família, saúde indígena, urgência e telemedicina
              no Amazonas, Mato Grosso e São Paulo. Foi preceptora e professora de Medicina de Família e Comunidade.
            </p>
            <p>
              Hoje coordena o programa Mente, Corpo e Hormônios em Guarulhos e por telemedicina. O princípio é o mesmo de
              sempre: ouvir primeiro.
            </p>
          </Reveal>
          <Reveal delay={180} className="mt-8 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-6">
            {[
              ["20", "anos na saúde"],
              ["10", "anos como médica"],
              ["3", "estados (AM, MT e SP)"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-serif text-4xl text-gold">{n}</p>
                <p className="mt-1 text-[0.8rem] leading-snug text-ink-soft">{l}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
