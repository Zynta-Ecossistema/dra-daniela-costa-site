"use client";

import { useId, useState } from "react";
import { Reveal } from "./Reveal";
import { waLink, msgSintomas } from "@/lib/site";

const itens = [
  "Acorda cansada(o), mesmo depois de dormir",
  "Já fez dieta, perdeu peso e ele voltou",
  "Depois dos 40, sono, humor e corpo mudaram",
  "Ansiedade e estresse já estão pesando no corpo",
  "Os exames dão “normal”, mas você não se sente bem",
  "Cansou de consultas de 10 minutos sem resposta",
];

// As respostas ficam só neste estado do navegador. Vão para o WhatsApp apenas quando a visitante clica em agendar.
export function Reconhece() {
  const [marcados, setMarcados] = useState<boolean[]>(() => itens.map(() => false));
  const [aberto, setAberto] = useState(false);
  const listaId = useId();

  const href = waLink(msgSintomas(itens.filter((_, i) => marcados[i])));

  return (
    <section id="reconhece" className="border-y border-line bg-paper-2">
      <div className="mx-auto max-w-3xl px-5 py-12 lg:py-20">
        <Reveal>
          <h2 className="h-display text-[clamp(1.9rem,4.2vw,3rem)]">
            Você se reconhece em <em>alguma destas situações?</em>
          </h2>
          <p className="mt-3 text-ink-soft">Marque o que você sente. Se quiser, levamos isso para a conversa.</p>
          {/* o wrapper some no desktop; .btn tem display próprio e vence sm:hidden se estiver no próprio botão */}
          <div className="mt-5 sm:hidden">
            <button
              type="button"
              className="btn btn-ghost"
              aria-expanded={aberto}
              aria-controls={listaId}
              onClick={() => setAberto((v) => !v)}
            >
              {aberto ? "Ocultar situações" : "Ver situações"}
            </button>
          </div>
        </Reveal>

        <fieldset id={listaId} className={`mt-6 ${aberto ? "block" : "hidden"} sm:block`}>
          <legend className="sr-only">Situações que você reconhece</legend>
          <ul className="divide-y divide-line rounded-2xl border border-line bg-card">
            {itens.map((t, i) => (
              <li key={t}>
                <label className="flex min-h-[56px] cursor-pointer items-center gap-4 px-4 py-3 sm:px-5">
                  <input
                    type="checkbox"
                    checked={marcados[i]}
                    onChange={() => setMarcados((m) => m.map((v, k) => (k === i ? !v : v)))}
                    className="h-5 w-5 shrink-0 accent-[#8c5e1a]"
                  />
                  <span className="leading-snug">{t}</span>
                </label>
              </li>
            ))}
          </ul>
        </fieldset>

        <div className="mt-6">
          <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">
            Agendar
          </a>
        </div>
      </div>
    </section>
  );
}
