import Image from "next/image";
import { Reveal } from "./Reveal";

type Person = { name: string; role: string; reg?: string; note?: string; photo?: string; initials: string };

const presencial: Person[] = [
  { name: "Dra. Daniela Costa", role: "Medicina & coordenação", reg: "CRM-SP 272263", note: "Médica e coordenadora da Medicina Integrada", photo: "/img/dra-mesa.webp", initials: "DC" },
  { name: "Dra. Thalita Tormin", role: "Nutrição", reg: "CRN-3 94760", note: "Nutricionista", initials: "TT" },
  { name: "Dra. Heline Rocha", role: "Psicologia", initials: "HR" },
  { name: "Dra. Elizabete Pereira", role: "Psicologia", reg: "CRP 06/219833", initials: "EP" },
  { name: "Dailson Maramaldo", role: "Educação física", reg: "CREF 181185-G", note: "Educador físico", initials: "DM" },
  { name: "Dra. Thais Barreto", role: "Medicina · Saúde mental", reg: "CRM-BA 44.128", note: "Médica de família, ocupacional e saúde mental", photo: "/img/thais.webp", initials: "TB" },
];

const online: Person[] = [
  { name: "Dra. Marquenha Gomes Barboza", role: "Nutrição", reg: "CRN 6050", note: "Acompanhamento nutricional online", photo: "/img/marquenha.webp", initials: "MB" },
  { name: "Enf. Rebeca Uchôa", role: "Enfermagem", reg: "COREN-AM 297113", note: "Telemonitoramento e apoio ao seguimento", photo: "/img/rebeca.webp", initials: "RU" },
];

function Row({ p }: { p: Person }) {
  return (
    <li className="py-5 flex gap-5 items-center">
      {p.photo ? (
        <Image src={p.photo} alt={p.name} width={72} height={72} className="h-[72px] w-[72px] rounded-full object-cover object-[50%_26%] shrink-0 border border-line" />
      ) : (
        <span aria-hidden className="grid place-items-center h-[72px] w-[72px] rounded-full bg-sage font-serif text-2xl text-ink/70 shrink-0">
          {p.initials}
        </span>
      )}
      <div>
        <p className="font-serif text-[1.5rem] leading-tight">{p.name}</p>
        <p className="text-[0.88rem] text-rose mt-1">{p.role}</p>
        {p.note && <p className="text-[0.88rem] text-ink-soft mt-1">{p.note}</p>}
        {p.reg && <p className="text-[0.78rem] text-ink-soft mt-1 tracking-wide">{p.reg}</p>}
      </div>
    </li>
  );
}

export function Team() {
  return (
    <section id="equipe" className="bg-blush-2 border-y border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-28">
        <Reveal>
          <h2 className="h-display text-[clamp(2.2rem,5vw,3.8rem)]">
            Diferentes olhares. <em>Presencial e online.</em>
          </h2>
          <p className="mt-5 text-ink-soft max-w-xl leading-relaxed">
            Conheça os profissionais de cada modalidade. O envolvimento de cada área é combinado conforme suas
            necessidades.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <Reveal className="bg-paper border border-line">
            <div className="bg-blush px-7 py-8">
              <h3 className="font-serif text-[2.3rem]">Equipe presencial</h3>
              <p className="text-ink-soft text-[0.9rem] mt-2">Atendimento em consultório, com agenda e local confirmados pela equipe.</p>
            </div>
            <ul className="px-7 divide-y divide-line">{presencial.map((p) => <Row key={p.name} p={p} />)}</ul>
          </Reveal>
          <Reveal delay={120} className="bg-paper border border-line self-start">
            <div className="bg-sage px-7 py-8">
              <h3 className="font-serif text-[2.3rem]">Equipe online</h3>
              <p className="text-ink-soft text-[0.9rem] mt-2">Consultas por vídeo e telemonitoramento, com o mesmo plano de cuidado.</p>
            </div>
            <ul className="px-7 divide-y divide-line">{online.map((p) => <Row key={p.name} p={p} />)}</ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
