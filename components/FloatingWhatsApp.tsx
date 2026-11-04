"use client";

import { useEffect, useState } from "react";
import { waLink, MSG } from "@/lib/site";

// só aparece depois de rolar 600 px, para não disputar atenção com o botão do topo
export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <a
      href={waLink(MSG.M4)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-4 right-4 z-30 grid h-[60px] w-[60px] place-items-center rounded-full bg-cocoa text-paper shadow-[0_14px_30px_-10px_rgba(67,55,46,0.6)] transition-[opacity,transform,background-color] duration-300 hover:bg-cocoa-2 motion-reduce:transition-none sm:bottom-6 sm:right-6 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.200Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-1.400-.7-2.400-1.300-3.300-2.900-.2-.3.2-.3.700-1 .1-.2 0-.3 0-.5l-.8-1.800c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.300-.7.700-1 1.500-.9 2.400.2 1.300 1 2.500 2 3.500 1.500 1.600 3.400 2.400 4.700 2.600.9.100 1.800-.3 2.300-1 .2-.3.2-.6.1-.7l-.4-.2Z" />
      </svg>
    </a>
  );
}
