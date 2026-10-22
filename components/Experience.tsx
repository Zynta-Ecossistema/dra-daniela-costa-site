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

export function Experience() {
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
              Brasil.
            </p>
          </Reveal>

          <div className="mt-9 space-y-8">
            {EXPERIENCE.map((g, gi) => (
              <Reveal key={g.state} delay={gi * 90}>
                <h3 className={`font-serif text-[1.7rem] uppercase tracking-wide ${g.tone}`}>{g.state}</h3>
                <ul className="mt-3 divide-y divide-line/80 border-y border-line/80">
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
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={150} className="lg:sticky lg:top-28">
          <Image
            src="/img/mapa-experiencia.webp"
            alt="Mapa do Brasil com o Amazonas, o Mato Grosso e São Paulo em destaque, estados onde a Dra. Daniela atuou"
            width={754}
            height={706}
            sizes="(min-width:1024px) 520px, 92vw"
            className="h-auto w-full mix-blend-multiply"
          />
        </Reveal>
      </div>
    </section>
  );
}
