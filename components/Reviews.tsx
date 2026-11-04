import { Reveal } from "./Reveal";
import { DOCTORALIA_URL, GOOGLE_URL, FEATURED_REVIEW, SHORT_REVIEWS } from "@/lib/site";

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

// grade estática: sem carrossel, sem JavaScript
export function Reviews() {
  return (
    <section id="avaliacoes" className="mx-auto max-w-6xl px-5 py-14 lg:py-24">
      <Reveal>
        <h2 className="h-display text-[clamp(2rem,4.4vw,3.2rem)]">
          Quem já passou por aqui <em>conta como foi.</em>
        </h2>
      </Reveal>

      <Reveal className="on-dark relative mt-10 overflow-hidden rounded-[28px] bg-cocoa p-7 text-paper sm:p-10">
        <Stars className="text-gold-light" />
        <blockquote className="mt-5 font-serif text-[clamp(1.4rem,2.8vw,2.1rem)] leading-[1.25]">
          “...{FEATURED_REVIEW.text}”
        </blockquote>
        <p className="mt-5 text-[0.9rem] text-paper/75">
          {FEATURED_REVIEW.name} · {FEATURED_REVIEW.source}
        </p>
      </Reveal>

      <ul className="mt-5 grid gap-4 md:grid-cols-3">
        {SHORT_REVIEWS.map((r, i) => (
          <Reveal as="li" key={r.name} delay={i * 80} className="rounded-2xl border border-line bg-card p-6">
            <Stars className="text-gold" />
            <p className="mt-4 font-serif text-[1.15rem] leading-snug">“{r.text}”</p>
            <p className="mt-4 text-[0.85rem] text-ink-soft">
              {r.name} · {r.source}
            </p>
          </Reveal>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href={DOCTORALIA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Ver avaliações no Doctoralia <span aria-hidden>↗</span>
        </a>
        <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          Ver avaliações no Google <span aria-hidden>↗</span>
        </a>
      </div>
    </section>
  );
}
