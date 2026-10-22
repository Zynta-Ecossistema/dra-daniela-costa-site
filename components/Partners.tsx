import Image from "next/image";
import { Reveal } from "./Reveal";

import { waTo } from "@/lib/site";

type Person = {
  name: string;
  role: string;
  reg: string;
  bio: string;
  photo: string;
  pos: string;
  phone?: string;
  phoneLabel?: string;
  instagram: string;
};

const partners: Person[] = [
  {
    name: "Dra. Thalita Tormin",
    role: "Nutrição",
    reg: "CRN-3 94760",
    bio: "Nutricionista pós-graduada em Emagrecimento e Estética, Nutrição Clínica e Esportiva, Fitoterapia e Prescrição de Fitoterápicos. Atende presencialmente e online, com foco em emagrecimento e estética, saúde da mulher, nutrição esportiva e reeducação alimentar, com avaliação nutricional, planos alimentares e suplementação, sempre com acompanhamento contínuo. Antes da Nutrição, construiu mais de 15 anos de carreira em Química, com gestão, qualidade e liderança, experiência que traz organização e ética ao atendimento.",
    photo: "/img/thalita.webp",
    pos: "50% 22%",
    phone: "5511922075000",
    phoneLabel: "(11) 92207-5000",
    instagram: "nutri.thalitatormin",
  },
  {
    name: "Enf. Rebeca Uchôa",
    role: "Enfermagem",
    reg: "COREN-AM 297113",
    bio: "Enfermeira com cuidado integral, próximo e humanizado. Realiza consultas de enfermagem, avaliação antropométrica, bioimpedância e monitoramento clínico, além do telemonitoramento e do apoio ao seguimento entre as consultas.",
    photo: "/img/rebeca.webp",
    pos: "50% 24%",
    instagram: "enf.rebecauchoa",
  },
];

export function Partners() {
  return (
    <section id="parceiros" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-28">
        <Reveal>
          <h2 className="h-display text-[clamp(2.2rem,5vw,3.8rem)]">
            Parceiros no <em>seu cuidado.</em>
          </h2>
          <p className="mt-5 text-ink-soft max-w-xl leading-relaxed">
            Profissionais que trabalham junto com a Dra. Daniela para que o acompanhamento continue entre uma consulta e
            outra.
          </p>
        </Reveal>

        <ul className="mt-12 grid sm:grid-cols-2 gap-6 max-w-5xl">
          {partners.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 120} className="bg-card border border-line flex flex-col">
              <div className="relative aspect-[4/3] bg-blush-2">
                <Image src={p.photo} alt={p.name} fill sizes="(min-width:640px) 420px, 90vw" className="object-cover" style={{ objectPosition: p.pos }} />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <p className="font-serif text-[1.7rem] leading-tight">{p.name}</p>
                <p className="text-[0.9rem] text-gold mt-1.5">{p.role}</p>
                <p className="text-[0.92rem] text-ink-soft leading-relaxed mt-3 flex-1">{p.bio}</p>
                <p className="text-[0.78rem] text-ink-soft mt-4 tracking-wide">{p.reg}</p>
                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                  {p.phone && (
                  <a
                    href={waTo(p.phone, `Olá! Vim pelo site da Dra. Daniela Costa e gostaria de agendar com ${p.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-cocoa text-paper px-5 py-3 rounded-sm text-[0.9rem] hover:bg-cocoa-2 transition-colors"
                  >
                    Agendar · {p.phoneLabel}
                  </a>
                  )}
                  <a
                    href={`https://www.instagram.com/${p.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 border-b border-ink/40 text-[0.9rem] hover:border-ink"
                  >
                    @{p.instagram} ↗
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
