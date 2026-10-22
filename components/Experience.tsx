"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { EXPERIENCE, waLink } from "@/lib/site";

function WhatsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.200Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-1.400-.7-2.400-1.300-3.300-2.900-.2-.3.2-.3.700-1 .1-.2 0-.3 0-.5l-.8-1.800c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.300-.7.700-1 1.500-.9 2.400.2 1.300 1 2.500 2 3.500 1.500 1.600 3.400 2.400 4.700 2.600.9.100 1.800-.3 2.300-1 .2-.3.2-.6.1-.7l-.4-.2Z" />
    </svg>
  );
}

// posição de cada pino no mapa (em % da imagem)
const PINS: Record<string, { x: number; y: number; uf: string }> = {
  Amazonas: { x: 30.6, y: 22, uf: "AM" },
  "Mato Grosso": { x: 50.8, y: 51.5, uf: "MT" },
  "São Paulo": { x: 67.3, y: 70.5, uf: "SP" },
};

export function Experience() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (state: string) => setOpen((v) => (v === state ? null : state));

  return (
    <section id="experiencia" className="bg-paper border-y border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-28 grid lg:grid-cols-[1fr_0.95fr] gap-12 lg:gap-16 items-start">
        <div>
          <Reveal>
            <h2 className="h-display text-[clamp(2.1rem,4.6vw,3.4rem)]">
              Experiência em <em>diferentes cenários.</em>
            </h2>
            <p className="mt-5 text-ink-soft max-w-md leading-relaxed">
              Cuidar de pessoas levou a Dra. Daniela a conhecer realidades, culturas e histórias em diferentes regiões do
              Brasil. Toque em um estado, na lista ou no mapa, para ver onde ela atuou.
            </p>
          </Reveal>

          <div className="mt-9 border-t border-line">
            {EXPERIENCE.map((g) => {
              const isOpen = open === g.state;
              const id = `exp-${PINS[g.state].uf}`;
              return (
                <div key={g.state} className="border-b border-line">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={id}
                      onClick={() => toggle(g.state)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className={`font-serif text-[1.7rem] uppercase tracking-wide ${g.tone}`}>{g.state}</span>
                      <span className="flex items-center gap-3 text-[0.82rem] text-ink-soft">
                        {g.items.length} áreas
                        <span aria-hidden className={`text-xl leading-none transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                          +
                        </span>
                      </span>
                    </button>
                  </h3>
                  <div id={id} className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <ul className="mb-5 divide-y divide-line/80 border-y border-line/80" inert={!isOpen}>
                        {g.items.map((it) => (
                          <li key={it} className="flex items-center justify-between gap-4 py-2 text-[0.95rem]">
                            <span>{it}</span>
                            <a
                              href={waLink(`Olá! Vi que a Dra. Daniela tem experiência em ${it} (${g.state}) e gostaria de conversar.`)}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Conversar pelo WhatsApp sobre ${it}`}
                              className="shrink-0 grid h-8 w-8 place-items-center rounded-full border border-line bg-card text-cocoa hover:bg-cocoa hover:text-paper transition-colors"
                            >
                              <WhatsIcon />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Reveal delay={150} className="lg:sticky lg:top-28">
          <div className="relative mx-auto w-full max-w-[560px]">
            <Image
              src="/img/mapa-brasil.webp"
              alt="Mapa do Brasil com o Amazonas, o Mato Grosso e São Paulo em destaque, estados onde a Dra. Daniela atuou"
              width={1100}
              height={1089}
              sizes="(min-width:1024px) 520px, 92vw"
              className="h-auto w-full drop-shadow-[0_24px_30px_rgba(67,55,46,0.18)]"
            />
            {EXPERIENCE.map((g) => {
              const pin = PINS[g.state];
              const isOpen = open === g.state;
              return (
                <button
                  key={g.state}
                  type="button"
                  onClick={() => toggle(g.state)}
                  aria-label={`${g.state}: ${isOpen ? "recolher" : "ver"} áreas de atuação`}
                  aria-pressed={isOpen}
                  className="absolute -translate-x-1/2 -translate-y-1/2 grid h-14 w-14 place-items-center rounded-full"
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                >
                  <span
                    aria-hidden
                    className={`h-11 w-11 rounded-full border-2 transition-all duration-300 ${
                      isOpen ? "border-paper bg-paper/25 scale-110 shadow-[0_0_0_6px_rgba(247,241,231,0.35)]" : "border-paper/0 bg-transparent hover:border-paper/80"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
