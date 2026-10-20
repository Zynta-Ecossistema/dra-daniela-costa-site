import Image from "next/image";
import { HeroBackdrop } from "./HeroBackdrop";
import { waLink, SOBRE_PLANOS } from "@/lib/site";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <HeroBackdrop />
      <div
        className="absolute z-10 right-5 top-5 lg:right-8 lg:top-8 bg-cocoa/55 backdrop-blur-sm px-4 py-3 rise"
        style={{ ["--d" as string]: "700ms" }}
      >
        <Image
          src="/img/logo-dc-branca.webp"
          alt="Dra. Daniela Costa"
          width={120}
          height={73}
          priority
          className="h-auto w-[72px] lg:w-[104px]"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-5 pt-[400px] pb-14 lg:pt-24 lg:pb-28 lg:min-h-[640px] flex items-center">
        <div className="lg:max-w-[52%]">
          <h1
            className="h-display mt-2 lg:mt-6 text-[clamp(2.6rem,6.6vw,4.4rem)] rise"
            style={{ ["--d" as string]: "120ms" }}
          >
            Sua saúde merece
            <br />
            um olhar
            <br />
            <em>por inteiro.</em>
          </h1>
          <p
            className="mt-6 max-w-xl text-[1.06rem] leading-relaxed text-ink-soft rise"
            style={{ ["--d" as string]: "260ms" }}
          >
            Você tem uma história, uma rotina e suas próprias necessidades. Nosso cuidado começa pela escuta e segue com
            você, conectando mente, corpo e hormônios.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 rise" style={{ ["--d" as string]: "380ms" }}>
            <a
              href="#planos"
              className="group inline-flex items-center gap-3 bg-cocoa text-paper px-6 py-4 rounded-sm text-[0.95rem] hover:bg-cocoa-2 transition-colors"
            >
              Encontre seu acompanhamento
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a href="#programa" className="text-[0.95rem] border-b border-ink/40 pb-1 hover:border-ink transition-colors">
              Conheça o programa ↓
            </a>
          </div>
          <p
            className="mt-8 flex items-center gap-3 text-[0.85rem] text-ink-soft rise"
            style={{ ["--d" as string]: "480ms" }}
          >
            Cuidado para mulheres, homens e idosos. A partir de 18 anos.
          </p>
        </div>

      </div>

      <div className="border-y border-line bg-paper-2">
        <ul className="mx-auto max-w-6xl px-5 py-5 grid grid-cols-3 gap-4 text-[0.82rem] sm:text-[0.9rem] text-ink-soft">
          {["Escuta que acolhe", "Metas possíveis", "Cuidado que acompanha"].map((t) => (
            <li key={t} className="flex items-center justify-center sm:justify-start gap-3 text-center sm:text-left">
              {t}
            </li>
          ))}
        </ul>
      </div>
      <a href={waLink(SOBRE_PLANOS)} className="sr-only">
        Falar pelo WhatsApp
      </a>
    </section>
  );
}
