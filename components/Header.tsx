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
      <div className="bg-cocoa text-center text-[0.68rem] tracking-[0.18em] uppercase text-paper/80 py-2 px-4">
        Telemedicina · Presencial · Atendimento domiciliar
      </div>
      <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-line">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-5 h-[68px]">
          <a href="#topo" className="flex items-center gap-3" aria-label="Mente, corpo e hormônios: início">
            <Image src="/img/logo-dc-dourada.webp" alt="" width={64} height={39} priority className="h-auto w-[68px]" />
            <span className="leading-none">
              <span className="block font-serif text-[0.98rem] leading-[1.15] tracking-[0.1em] uppercase">
                Mente, Corpo
                <br />
                e Hormônios
              </span>
              <span className="block mt-1.5 text-[0.58rem] tracking-[0.24em] text-ink-soft">MEDICINA INTEGRADA</span>
            </span>
          </a>

          <nav className="hidden xl:flex items-center gap-6 text-[0.86rem]" aria-label="Seções">
            {desktopLinks.map(([h, l]) => (
              <a key={h} href={h} className="text-ink-soft hover:text-ink transition-colors">
                {l}
              </a>
            ))}
            <a
              href="#contato"
              className="ml-2 bg-cocoa text-paper px-4 py-2.5 rounded-sm hover:bg-cocoa-2 transition-colors"
            >
              Solicitar consulta
            </a>
          </nav>

          <button
            className="xl:hidden border border-line bg-paper rounded-sm px-3.5 py-2.5 text-sm flex items-center gap-2"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden className="inline-flex flex-col gap-[3px]">
              <i className="block h-px w-4 bg-ink" />
              <i className="block h-px w-4 bg-ink" />
              <i className="block h-px w-4 bg-ink" />
            </span>
            {open ? "Fechar" : "Menu"}
          </button>
        </div>
      </header>

      {open && (
        <div
          id="menu-mobile"
          className="xl:hidden fixed inset-x-0 top-[104px] bottom-0 z-30 bg-paper px-5 pt-6 overflow-auto"
        >
          <ul className="flex flex-col">
            {links.map(([h, l]) => (
              <li key={h}>
                <a
                  href={h}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 font-serif text-[1.5rem] border-b border-line/70"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-6 block text-center border border-ink py-3.5 rounded-sm"
          >
            Solicitar consulta
          </a>
          <a
            href={waLink(SOBRE_PLANOS)}
            className="mt-3 block text-center bg-cocoa text-paper py-3.5 rounded-sm"
          >
            Conversar pelo WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
