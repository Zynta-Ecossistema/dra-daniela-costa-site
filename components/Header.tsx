"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { waLink, MSG } from "@/lib/site";

const links = [
  ["#como", "Como funciona"],
  ["#consulta", "Consulta"],
  ["#avaliacoes", "Avaliações"],
  ["#sobre", "Sobre"],
  ["#onde", "Onde atendo"],
] as const;

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
      {/* pílula flutuante em vidro fosco sobre o topo; h-0 deixa o conteúdo subir por baixo dela */}
      <div className="sticky top-0 z-40 h-0 px-3 sm:px-5">
        <div className="relative top-4 mx-auto max-w-6xl">
          <header className="flex h-[68px] items-center justify-between gap-2 rounded-full border border-paper/20 bg-cocoa/90 pl-4 pr-2 text-paper sm:pl-5 shadow-[0_18px_40px_-18px_rgba(40,30,22,0.55)] backdrop-blur-xl backdrop-saturate-150">
            <a href="#topo" className="flex min-w-0 items-center gap-3">
              <Image src="/img/logo-dc-dourada.webp" alt="" width={64} height={39} priority className="hidden h-auto w-[54px] shrink-0 sm:block" />
              <span className="min-w-0 leading-none">
                <span className="block whitespace-nowrap font-serif text-[0.98rem] leading-[1.1]">Dra. Daniela Costa</span>
                <span className="mt-1.5 block whitespace-nowrap text-[0.56rem] tracking-[0.1em] sm:text-[0.62rem] sm:tracking-[0.14em] text-paper/70">MÉDICA · CRM-SP 272263</span>
              </span>
            </a>

            <nav className="hidden items-center gap-7 text-[0.9rem] lg:flex" aria-label="Seções">
              {links.map(([h, l]) => (
                <a key={h} href={h} className="whitespace-nowrap text-paper/85 transition-colors hover:text-paper">
                  {l}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={waLink(MSG.M1)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary !bg-blush !text-cocoa hover:!bg-paper whitespace-nowrap !px-4 !text-[0.82rem] sm:!px-5 sm:!text-[0.88rem]"
              >
                Agendar consulta
              </a>
              <button
                className="flex h-12 w-12 items-center justify-center rounded-full border border-paper/35 lg:hidden"
                aria-expanded={open}
                aria-controls="menu-mobile"
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                onClick={() => setOpen((v) => !v)}
              >
                <span aria-hidden className="inline-flex flex-col gap-[3px]">
                  <i className="block h-px w-4 bg-paper" />
                  <i className="block h-px w-4 bg-paper" />
                  <i className="block h-px w-4 bg-paper" />
                </span>
              </button>
            </div>
          </header>

          {open && (
            <div
              id="menu-mobile"
              className="absolute inset-x-0 top-full mt-2 max-h-[calc(100vh-110px)] overflow-auto rounded-3xl border border-paper/20 bg-cocoa/95 px-6 pb-4 pt-3 text-paper shadow-[0_24px_50px_-20px_rgba(40,30,22,0.6)] backdrop-blur-xl lg:hidden"
            >
              <ul className="flex flex-col">
                {links.map(([h, l]) => (
                  <li key={h}>
                    <a href={h} onClick={() => setOpen(false)} className="block border-b border-paper/15 py-3.5 font-serif text-[1.45rem] last:border-0">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
