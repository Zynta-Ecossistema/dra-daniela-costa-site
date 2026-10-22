import Image from "next/image";
import { Reveal } from "./Reveal";

type Person = { name: string; role: string; reg: string; note: string; photo: string };

const partners: Person[] = [
  { name: "Dra. Marquenha Gomes Barboza", role: "Nutrição", reg: "CRN 6050", note: "Acompanhamento nutricional, integrado ao plano de cuidado da Dra. Daniela.", photo: "/img/marquenha.webp" },
  { name: "Enf. Rebeca Uchôa", role: "Enfermagem", reg: "COREN-AM 297113", note: "Telemonitoramento e apoio ao seguimento entre as consultas.", photo: "/img/rebeca.webp" },
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

        <ul className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl">
          {partners.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 120} className="bg-card border border-line">
              <div className="relative aspect-[4/3] bg-blush-2">
                <Image src={p.photo} alt={p.name} fill sizes="(min-width:640px) 420px, 90vw" className="object-cover object-[50%_24%]" />
              </div>
              <div className="p-7">
                <p className="font-serif text-[1.7rem] leading-tight">{p.name}</p>
                <p className="text-[0.9rem] text-gold mt-1.5">{p.role}</p>
                <p className="text-[0.92rem] text-ink-soft leading-relaxed mt-3">{p.note}</p>
                <p className="text-[0.78rem] text-ink-soft mt-3 tracking-wide">{p.reg}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
