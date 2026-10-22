"use client";

import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { DOCTORALIA_URL, GOOGLE_URL, REVIEWS, VIDEOS, type PatientVideo } from "@/lib/site";

const INTERVAL = 8000;
const HAS_GOOGLE = REVIEWS.some((r) => r.source === "Google");

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} role="img" aria-label="5 de 5 estrelas">
      {[0, 1, 2, 3, 4].map((n) => (
        <svg key={n} viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden>
          <path d="M10 1.6l2.5 5.4 5.9.7-4.4 4 1.2 5.8L10 14.6 4.8 17.5 6 11.7 1.6 7.7l5.9-.7z" />
        </svg>
      ))}
    </span>
  );
}

function initials(name: string) {
  const p = name.split(" ").filter((w) => w.length > 2 || /^[A-Z]/.test(w));
  return (p[0][0] + (p.length > 1 ? p[p.length - 1][0] : "")).toUpperCase();
}

function VideoCard({ v }: { v: PatientVideo }) {
  return (
    <figure className="overflow-hidden rounded-2xl bg-cocoa border border-line">
      <div className="relative aspect-[9/16] sm:aspect-video bg-cocoa">
        {v.youtube ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${v.youtube}`}
            title={v.title}
            loading="lazy"
            allow="accelerometer; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <video src={v.src} poster={v.poster} controls preload="none" playsInline className="absolute inset-0 h-full w-full object-cover" />
        )}
      </div>
      <figcaption className="px-5 py-4 text-[0.9rem] text-paper/85">{v.title}</figcaption>
    </figure>
  );
}

export function Reviews() {
  const n = REVIEWS.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // o card em destaque troca sozinho; a lista ao lado rola sem parar (CSS)
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive((v) => (v + 1) % n), INTERVAL);
    return () => clearTimeout(t);
  }, [active, paused, n]);

  const r = REVIEWS[active];

  return (
    <section id="avaliacoes" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-28">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
          <h2 className="h-display text-[clamp(2.2rem,4.8vw,3.6rem)]">
            Quem já passou por aqui <em>conta como foi.</em>
          </h2>
          <p className="flex items-center gap-3 text-[0.88rem] text-ink-soft">
            <Stars className="text-gold" />
            {HAS_GOOGLE ? "Avaliações de pacientes no Doctoralia e no Google" : "Avaliações de pacientes no Doctoralia"}
          </p>
        </Reveal>

        <div
          className="mt-12 grid lg:grid-cols-[1.15fr_0.85fr] gap-5"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <Reveal className="on-dark relative overflow-hidden rounded-[28px] bg-cocoa text-paper grain p-7 sm:p-10 flex flex-col min-h-[460px] shadow-[0_40px_70px_-45px_rgba(67,55,46,0.7)]">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-paper/10" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-lilac/15 blur-2xl" />

            <div key={active} className="relative flex flex-col flex-1 review-in" aria-live="polite">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-blush text-cocoa font-serif text-[1.05rem]">
                    {initials(r.name)}
                  </span>
                  <div>
                    <p className="font-medium leading-tight">{r.name}</p>
                    <p className="text-[0.8rem] text-paper/70 mt-0.5">{r.verified ? `${r.verified} · ${r.source}` : r.source}</p>
                  </div>
                </div>
                <Stars className="text-gold-light mt-1.5" />
              </div>

              <span aria-hidden className="font-serif text-[4.5rem] leading-none text-gold-light/80 mt-8 h-10">
                “
              </span>
              <blockquote className="font-serif text-[clamp(1.5rem,2.7vw,2.15rem)] leading-[1.22] mt-3 flex-1">
                {r.text}
              </blockquote>

              {r.reply && (
                <div className="mt-7 rounded-2xl bg-paper/10 px-5 py-4">
                  <p className="text-[0.78rem] text-gold-light">Resposta da Dra. Daniela</p>
                  <p className="text-[0.9rem] text-paper/85 mt-1 leading-relaxed">{r.reply}</p>
                </div>
              )}

              <p className="mt-5 text-[0.8rem] text-paper/70">
                {[r.date, r.context].filter(Boolean).join(" · ")}
              </p>
            </div>

            <div className="relative mt-6 h-px bg-paper/20" aria-hidden>
              <span
                key={`${active}-${paused}`}
                className={`absolute inset-y-0 left-0 bg-gold-light ${paused ? "w-0" : "review-bar"}`}
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="review-viewport relative h-[420px] lg:h-full lg:min-h-[460px] overflow-hidden">
              <ul className="review-track absolute inset-x-0 top-0 flex flex-col gap-3" aria-label="Todas as avaliações">
                {[...REVIEWS, ...REVIEWS].map((x, k) => (
                  <li key={k} aria-hidden={k >= n}>
                    <button
                      type="button"
                      tabIndex={k >= n ? -1 : 0}
                      onClick={() => setActive(k % n)}
                      aria-current={k % n === active}
                      className={`w-full text-left rounded-2xl border p-5 transition-colors ${
                        k % n === active ? "bg-card border-gold/50 shadow-[0_20px_40px_-28px_rgba(67,55,46,0.5)]" : "bg-card/60 border-line hover:bg-card"
                      }`}
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span className="flex items-center gap-3 min-w-0">
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blush text-cocoa font-serif text-[0.85rem]">
                            {initials(x.name)}
                          </span>
                          <span className="text-[0.92rem] font-medium truncate">{x.name}</span>
                        </span>
                        <Stars className="text-gold shrink-0 scale-90 origin-right" />
                      </span>
                      <span className="block font-serif text-[1.02rem] leading-snug text-ink-soft mt-3 line-clamp-3">{x.text}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {VIDEOS.length > 0 && (
          <div className="mt-16">
            <h3 className="font-serif text-[clamp(1.8rem,3.2vw,2.4rem)]">
              Relatos <em className="text-gold">em vídeo.</em>
            </h3>
            <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {VIDEOS.map((v) => (
                <li key={v.title}>
                  <VideoCard v={v} />
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-10 pt-6 border-t border-line flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <p className="text-[0.8rem] text-ink-soft max-w-xl">
            Avaliações publicadas por pacientes nos perfis da Dra. Daniela no {HAS_GOOGLE ? "Doctoralia e no Google" : "Doctoralia"}.
            Refletem experiências individuais.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={DOCTORALIA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-6 bg-cocoa text-paper px-6 py-4 rounded-full text-[0.92rem] hover:bg-cocoa-2 transition-colors"
            >
              Ver mais avaliações no Doctoralia <span aria-hidden>↗</span>
            </a>
            {GOOGLE_URL && (
              <a
                href={GOOGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-6 border border-cocoa text-cocoa px-6 py-4 rounded-full text-[0.92rem] hover:bg-cocoa hover:text-paper transition-colors"
              >
                Ver avaliações no Google <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
