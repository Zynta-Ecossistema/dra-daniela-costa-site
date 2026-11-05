import Image from "next/image";
import { WaButton } from "./WaButton";
import { MSG } from "@/lib/site";

const proofs = ["Presencial em Alphaville ou por vídeo"];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      {/* desktop: foto à direita, esmaecendo para o texto */}
      <div className="hero-photo absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <Image
          src="/img/dra-banner-v2.webp"
          alt="Dra. Daniela Costa, médica, em consultório"
          fill
          priority
          sizes="58vw"
          className="object-cover"
          style={{ objectPosition: "50% 14%" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl items-center px-5 pb-5 pt-[92px] lg:min-h-[660px] lg:pb-24 lg:pt-28">
        <div className="lg:max-w-[50%]">
          <p className="eyebrow text-gold rise">Programa Mente, Corpo e Hormônios · Alphaville e online</p>
          <h1
            className="h-display rise mt-4 text-[clamp(2.15rem,5.6vw,3.9rem)]"
            style={{ ["--d" as string]: "100ms" }}
          >
            Seu cansaço, seu sono e suas mudanças de peso <em>merecem atenção.</em>
          </h1>
          <p className="rise mt-4 max-w-xl text-[1.02rem] leading-relaxed text-ink-soft" style={{ ["--d" as string]: "200ms" }}>
            Avaliação e acompanhamento da saúde da mulher 40+, com atenção integrada à mente, ao corpo e às mudanças
            hormonais. Cuidado individualizado, com foco em bem-estar e qualidade de vida.
          </p>
          <div className="rise mt-5 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ ["--d" as string]: "300ms" }}>
            <WaButton msg={MSG.M1}>Agendar minha primeira consulta</WaButton>
            <a href="#como" className="btn btn-ghost">
              Ver como funciona
            </a>
          </div>
          <ul className="rise mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[0.85rem] text-ink-soft" style={{ ["--d" as string]: "400ms" }}>
            {proofs.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* celular: a foto vem depois do botão, para o agendamento aparecer sem rolar */}
      <div className="hero-photo-m relative mx-auto h-[340px] w-full max-w-xl lg:hidden">
        <Image
          src="/img/dra-banner-v2.webp"
          alt="Dra. Daniela Costa, médica, em consultório"
          fill
          sizes="(max-width:576px) 100vw, 576px"
          className="object-cover"
          style={{ objectPosition: "50% 14%" }}
        />
      </div>
    </section>
  );
}
