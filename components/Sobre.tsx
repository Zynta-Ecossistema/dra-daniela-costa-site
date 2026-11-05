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
              Quem é a <em>Dra. Daniela Costa?</em>
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-6 max-w-xl space-y-4 text-[1.04rem] leading-[1.75] text-ink-soft">
            <p>
              Sou médica e bacharel em Enfermagem, com 20 anos na saúde e 10 anos de medicina. Tenho experiência em clínica médica, Saúde da Família, urgência e emergência, hospitais e telemedicina.
            </p>
            <p>
              Mestre em Administração e Gestão da Saúde Pública, com pós-graduação em Saúde e Qualidade de Vida, Saúde da
              Família e Comunidade, Saúde e Medicina de Emergência. Sigo ampliando minha formação em Endocrinologia e
              Saúde Integrativa.
            </p>
            <p>
              Na consulta, você encontra escuta atenta, avaliação individualizada e um plano de cuidado que considera sua
              história, suas necessidades e sua rotina.
            </p>
          </Reveal>
        </div>
      </div>

    </section>
  );
}
