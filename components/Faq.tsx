import { Reveal } from "./Reveal";
import { FAQ } from "@/lib/site";

// acordeão nativo (details/summary), sem JavaScript, com schema FAQPage
const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export function Faq() {
  return (
    <section id="duvidas" className="border-t border-line bg-paper-2">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-24">
        <Reveal>
          <h2 className="h-display text-[clamp(2rem,4.4vw,3.2rem)]">
            Dúvidas <em>frequentes.</em>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <ul className="border-t border-line">
            {FAQ.map(([q, a]) => (
              <li key={q} className="border-b border-line">
                <details>
                  <summary className="flex min-h-[56px] cursor-pointer items-center justify-between gap-6 py-4 font-serif text-[1.25rem] leading-snug">
                    {q}
                    <span aria-hidden className="faq-plus text-2xl text-gold transition-transform duration-300">+</span>
                  </summary>
                  <p className="max-w-xl pb-5 leading-[1.75] text-ink-soft">{a}</p>
                </details>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </section>
  );
}
