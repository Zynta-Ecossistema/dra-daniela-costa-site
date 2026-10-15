import Image from "next/image";
import { Reveal } from "./Reveal";

export function Doctor() {
  return (
    <section id="dra-daniela" className="mx-auto max-w-6xl px-5 py-16 lg:py-28 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-20 items-center">
      <Reveal>
        <div className="relative bg-blush overflow-hidden aspect-[4/5] max-w-[460px] mx-auto lg:mx-0 w-full">
          <span
            aria-hidden
            className="absolute -right-4 top-6 font-serif italic text-[9rem] leading-none text-gold/15 select-none"
          >
            DC
          </span>
          <Image
            src="/img/dra-livros.webp"
            alt="Dra. Daniela Lima da Costa sentada em uma cadeira de madeira, apoiada sobre livros de medicina"
            fill
            sizes="(min-width:1024px) 460px, 90vw"
            className="object-cover object-[50%_20%]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cocoa/85 to-transparent pt-16 pb-5 px-6 text-paper">
            <p className="font-serif text-2xl leading-tight">
              Dra. Daniela <i>Costa</i>
            </p>
            <p className="text-[0.78rem] tracking-wide mt-1 text-paper/85">
              Médica · CRM-SP 272263
              <br />
              Coordenadora da Medicina Integrada Mente, Corpo e Hormônios
            </p>
          </div>
        </div>
      </Reveal>

      <div>
        <Reveal>
          <h2 className="h-display text-[clamp(2.1rem,4.6vw,3.4rem)]">
            Da escuta à continuidade, <em>cada história importa.</em>
          </h2>
        </Reveal>
        <Reveal delay={120} className="mt-7 space-y-5 text-[1.04rem] leading-[1.75] text-ink-soft max-w-xl">
          <p>
            Amazonense, médica e com formação também em Enfermagem, a Dra. Daniela Lima da Costa construiu sua trajetória
            em diferentes realidades da saúde: atenção à família, saúde indígena, urgência e emergência, telemedicina,
            preceptoria e palestras.
          </p>
          <p>
            Hoje, atua presencialmente em Guarulhos e por telemedicina. À frente do Mente, Corpo e Hormônios, coordena um
            cuidado que combina avaliação clínica, alimentação, saúde emocional e movimento.
          </p>
          <p>
            Seu compromisso é ouvir, compreender o contexto de cada pessoa e construir um acompanhamento individualizado,
            com atenção à saúde, à autonomia e à qualidade de vida.
          </p>
        </Reveal>
        <Reveal delay={200} className="mt-8 grid grid-cols-3 gap-4 max-w-xl border-t border-line pt-6">
          {[
            ["20", "anos na área da saúde"],
            ["10", "anos de atuação na Medicina"],
            ["3", "estados de experiência: AM, MT e SP"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-serif text-4xl text-gold">{n}</p>
              <p className="text-[0.78rem] text-ink-soft leading-snug mt-1">{l}</p>
            </div>
          ))}
        </Reveal>
        <Reveal delay={260} className="mt-8">
          <a href="#equipe" className="border-b border-ink/40 pb-1 text-[0.95rem] hover:border-ink transition-colors">
            Conheça a equipe multiprofissional ↓
          </a>
        </Reveal>
      </div>
    </section>
  );
}
