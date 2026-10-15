import { TulipsArt } from "./Tulip";
import { waLink, SOBRE_PLANOS } from "@/lib/site";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pt-10 pb-14 lg:pt-14 lg:pb-20 grid lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-16 items-center">
        <div>
          <h1
            className="h-display mt-6 text-[clamp(2.6rem,6.6vw,4.4rem)] rise"
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

        <div className="relative rise" style={{ ["--d" as string]: "300ms" }}>
          <TulipsArt className="w-full max-w-[440px] mx-auto drop-shadow-[0_30px_40px_rgba(67,55,46,0.12)]" />
          <div className="absolute left-0 sm:left-4 bottom-6 bg-paper/95 backdrop-blur border border-line px-5 py-4 max-w-[230px] shadow-[0_18px_40px_-20px_rgba(67,55,46,0.35)]">
            <p className="font-serif text-[1.55rem] leading-tight mt-1.5">
              No seu tempo.
              <br />
              Com você.
            </p>
          </div>
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
