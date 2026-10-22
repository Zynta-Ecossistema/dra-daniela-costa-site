"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { waLink, SOBRE_PLANOS } from "@/lib/site";

const links = [
  ["#dra-daniela", "Dra. Daniela"],
  ["#programa", "O programa"],
  ["#acompanhamento", "Acompanhamento"],
  ["#avaliacoes", "Avaliações"],
  ["#domiciliar", "Domiciliar"],
  ["#planos", "Planos"],
  ["#ensino", "Ensino e educação"],
  ["#parceiros", "Parceiros"],
  ["#onde", "Onde atendemos"],
  ["#duvidas", "Dúvidas"],
] as const;

// no desktop o menu enxuto cabe em uma linha; o menu mobile mostra tudo
const desktopLinks = links.filter(([h]) => ["#dra-daniela", "#programa", "#domiciliar", "#planos", "#ensino", "#parceiros", "#onde"].includes(h));

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* pílula flutuante em vidro fosco sobre o banner; h-0 deixa o conteúdo subir por baixo dela */}
      <div className="sticky top-0 z-40 h-0 px-3 sm:px-5">
        <div className="relative top-4 mx-auto max-w-6xl">
          <header className="flex h-[68px] items-center justify-between gap-4 rounded-full border border-paper/20 bg-cocoa/90 pl-5 pr-2.5 text-paper shadow-[0_18px_40px_-18px_rgba(40,30,22,0.55)] backdrop-blur-xl backdrop-saturate-150">
            <a href="#topo" className="flex items-center gap-3" aria-label="Mente, Corpo e Hormônios: início">
              <Image src="/img/logo-dc-dourada.webp" alt="" width={64} height={39} priority className="h-auto w-[62px]" />
              <span className="leading-none">
                <span className="block font-serif text-[0.92rem] leading-[1.15] tracking-[0.1em] uppercase">
                  Mente, Corpo
                  <br />
                  e Hormônios
                </span>
                <span className="block mt-1.5 text-[0.56rem] tracking-[0.24em] text-paper/70">MEDICINA INTEGRADA</span>
              </span>
            </a>

            <nav className="hidden xl:flex items-center gap-6 text-[0.86rem]" aria-label="Seções">
              {desktopLinks.map(([h, l]) => (
                <a key={h} href={h} className="text-paper/85 hover:text-paper transition-colors">
                  {l}
                </a>
              ))}
            </nav>

            <a
              href="#contato"
              className="hidden xl:inline-flex items-center gap-2.5 rounded-full bg-blush px-6 py-3.5 text-[0.88rem] font-medium text-cocoa hover:bg-paper transition-colors"
            >
              Solicitar consulta <span aria-hidden>→</span>
            </a>

            <button
              className="xl:hidden flex items-center gap-2 rounded-full border border-paper/35 px-4 py-3 text-sm"
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen((v) => !v)}
            >
              <span aria-hidden className="inline-flex flex-col gap-[3px]">
                <i className="block h-px w-4 bg-paper" />
                <i className="block h-px w-4 bg-paper" />
                <i className="block h-px w-4 bg-paper" />
              </span>
              {open ? "Fechar" : "Menu"}
            </button>
          </header>

          {open && (
            <div
              id="menu-mobile"
              className="xl:hidden absolute inset-x-0 top-full mt-2 max-h-[calc(100vh-110px)] overflow-auto rounded-3xl border border-paper/20 bg-cocoa/95 px-6 pb-6 pt-3 text-paper shadow-[0_24px_50px_-20px_rgba(40,30,22,0.6)] backdrop-blur-xl"
            >
              <ul className="flex flex-col">
                {links.map(([h, l]) => (
                  <li key={h}>
                    <a
                      href={h}
                      onClick={() => setOpen(false)}
                      className="block py-3 font-serif text-[1.45rem] border-b border-paper/15"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="mt-5 block rounded-full border border-paper/40 py-3.5 text-center"
              >
                Solicitar consulta
              </a>
              <a href={waLink(SOBRE_PLANOS)} className="mt-3 block rounded-full bg-blush py-3.5 text-center text-cocoa font-medium">
                Conversar pelo WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
