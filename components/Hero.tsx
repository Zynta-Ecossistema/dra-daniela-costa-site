import Image from "next/image";
import { WaButton } from "./WaButton";
import { MSG } from "@/lib/site";

const proofs = ["Presencial ou por vídeo", "Retorno em até 15 dias incluso"];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      {/* desktop: foto à direita, esmaecendo para o texto */}
      <div className="hero-photo absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <Image
          src="/img/dra-banner-v2.webp"
          alt="Dra. Daniela Costa, médica, em consultório em Guarulhos"
          fill
          priority
          sizes="58vw"
          className="object-cover"
          style={{ objectPosition: "50% 14%" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl items-center px-5 pb-8 pt-[104px] lg:min-h-[660px] lg:pb-24 lg:pt-28">
        <div className="lg:max-w-[50%]">
          <p className="eyebrow text-gold rise">Programa Mente, Corpo e Hormônios · Guarulhos e online</p>
          <h1
            className="h-display rise mt-4 text-[clamp(2.15rem,5.6vw,3.9rem)]"
            style={{ ["--d" as string]: "100ms" }}
          >
            Cansaço, peso que não sai e sono ruim <em>não precisam ser o seu normal.</em>
          </h1>
          <p className="rise mt-5 max-w-xl text-[1.02rem] leading-relaxed text-ink-soft" style={{ ["--d" as string]: "200ms" }}>
            Uma primeira consulta sem pressa para entender sua história, exames bem indicados e uma equipe que acompanha
            você toda a semana, não só no dia da consulta.
          </p>
          <div className="rise mt-7 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ ["--d" as string]: "300ms" }}>
            <WaButton msg={MSG.M1}>Agendar minha primeira consulta</WaButton>
            <a href="#como" className="btn btn-ghost">
              Ver como funciona
            </a>
          </div>
          <ul className="rise mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[0.85rem] text-ink-soft" style={{ ["--d" as string]: "400ms" }}>
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
      <div className="hero-photo-m relative mx-auto h-[400px] w-full max-w-xl lg:hidden">
        <Image
          src="/img/dra-banner-v2.webp"
          alt="Dra. Daniela Costa, médica, em consultório em Guarulhos"
          fill
          sizes="(max-width:576px) 100vw, 576px"
          className="object-cover"
          style={{ objectPosition: "50% 14%" }}
        />
      </div>
    </section>
  );
}
