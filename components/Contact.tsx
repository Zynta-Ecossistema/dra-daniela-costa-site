"use client";

import { useMemo, useState } from "react";
import { Reveal } from "./Reveal";
import { waLink, WHATSAPP_LABEL, SOBRE_PLANOS } from "@/lib/site";

const periods = ["Manhã", "Tarde", "Noite"];

function BookingForm() {
  const [mod, setMod] = useState<"Telemedicina" | "Presencial em Guarulhos">("Telemedicina");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [period, setPeriod] = useState("");
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const [y, m, d] = date ? date.split("-") : [];
    const parts = [
      `Olá! Gostaria de solicitar uma consulta médica${name ? `. Meu nome é ${name}` : ""}.`,
      `Modalidade: ${mod}.`,
      date ? `Data de preferência: ${d}/${m}/${y}.` : "",
      period ? `Período de preferência: ${period}.` : "",
    ].filter(Boolean);
    window.open(waLink(parts.join(" ")), "_blank", "noopener,noreferrer");
  }

  const field = "w-full bg-paper border border-line rounded-sm px-4 py-3.5 text-[0.95rem] focus:border-ink outline-none";

  return (
    <form onSubmit={submit} className="bg-paper border border-line p-7 sm:p-9">
      <h3 className="h-display text-[clamp(1.9rem,3.4vw,2.6rem)]">
        Um próximo passo <em>para cuidar de você.</em>
      </h3>
      <p className="text-ink-soft text-[0.92rem] mt-3 leading-relaxed">
        Escolha atendimento presencial em Guarulhos ou por telemedicina. Você finaliza a conversa pelo WhatsApp.
      </p>

      <div className="mt-7 space-y-5">
        <div>
          <label htmlFor="nome" className="block text-[0.82rem] font-medium mb-2">Seu nome</label>
          <input id="nome" className={field} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="Como prefere ser chamado(a)" />
        </div>
        <div>
          <span className="block text-[0.82rem] font-medium mb-2">Modalidade da consulta médica</span>
          <div className="grid grid-cols-2 gap-1 bg-paper-2 p-1 rounded-sm border border-line">
            {(["Telemedicina", "Presencial em Guarulhos"] as const).map((o) => (
              <button
                type="button"
                key={o}
                aria-pressed={mod === o}
                onClick={() => setMod(o)}
                className={`py-3 text-[0.88rem] rounded-sm transition-colors ${mod === o ? "bg-paper shadow-sm font-medium" : "text-ink-soft"}`}
              >
                {o === "Presencial em Guarulhos" ? "Presencial · Guarulhos" : o}
              </button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="data" className="block text-[0.82rem] font-medium mb-2">Data de preferência</label>
            <input id="data" type="date" min={today} className={field} value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div>
            <label htmlFor="periodo" className="block text-[0.82rem] font-medium mb-2">Período de preferência</label>
            <select id="periodo" className={field} value={period} onChange={(e) => setPeriod(e.target.value)}>
              <option value="">Selecione um período</option>
              {periods.map((p) => <option key={p}>{p}</option>)}
            </select>
          </div>
        </div>
      </div>

      <button type="submit" className="mt-7 w-full flex items-center justify-between bg-forest text-paper px-5 py-4 rounded-sm hover:bg-forest-2 transition-colors">
        Preparar solicitação pelo WhatsApp <span aria-hidden>↗</span>
      </button>
      <p className="mt-4 text-[0.78rem] text-ink-soft leading-relaxed">
        O agendamento é confirmado pela equipe após o contato. Escolher a preferência não reserva um horário.
      </p>
    </form>
  );
}

export function Contact() {
  return (
    <>
      <section id="solicitar" className="bg-sage/50 border-y border-line">
        <div className="mx-auto max-w-3xl px-5 py-16 lg:py-24">
          <Reveal>
            <BookingForm />
          </Reveal>
        </div>
      </section>

      <section id="contato" className="on-dark relative bg-forest text-paper grain overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <Reveal>
            <h2 className="h-display text-[clamp(2.6rem,6vw,4.6rem)]">
              Vamos cuidar <em>de você?</em>
            </h2>
            <p className="mt-6 text-paper/75 max-w-md leading-relaxed">
              Fale com a equipe para conhecer a agenda, esclarecer dúvidas e encontrar o cuidado adequado ao seu momento.
            </p>
            <a
              href={waLink(SOBRE_PLANOS)}
              className="mt-8 inline-flex w-full sm:w-auto sm:min-w-[340px] items-center justify-between gap-6 bg-blush text-forest px-6 py-4 rounded-sm font-medium hover:bg-paper transition-colors"
            >
              Conversar pelo WhatsApp <span aria-hidden>↗</span>
            </a>
            <p className="mt-4 text-paper/70 text-[0.95rem]">{WHATSAPP_LABEL}</p>
            <p className="mt-5 text-[0.8rem] text-paper/55 max-w-sm leading-relaxed">
              O botão abre uma conversa que você pode revisar antes de enviar. Evite compartilhar exames ou dados de saúde
              no primeiro contato.
            </p>
          </Reveal>
          <Reveal delay={150} className="space-y-9 lg:pt-3">
            <div>
              <p className="font-serif text-[1.8rem] mt-3">Espaço Vida Acolhida</p>
              <p className="text-paper/70 text-[0.95rem] mt-1">R. Silvestre Vasconcelos Calmon, 190<br />Vila Pedro Moreira</p>
            </div>
            <div className="border-t border-paper/15 pt-8">
              <p className="font-serif text-[1.8rem]">Clínica Equalize</p>
              <p className="text-paper/70 text-[0.95rem] mt-1">R. Dr. Ramos de Azevedo, 159<br />Centro</p>
            </div>
            <div className="border-t border-paper/15 pt-8 text-[0.95rem] text-paper/80 space-y-1.5">
              <p>
                <a className="hover:text-paper underline underline-offset-4 decoration-paper/30" href="https://www.instagram.com/dra_danielacosta" target="_blank" rel="noopener noreferrer">@dra_danielacosta</a>
                {"  ·  "}
                <span>@mente.corpo.hormônio</span>
              </p>
              <p>
                <a className="hover:text-paper underline underline-offset-4 decoration-paper/30" href="mailto:dradanielacostamfc@gmail.com">dradanielacostamfc@gmail.com</a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
