import Image from "next/image";
import { Reveal } from "./Reveal";
import { waLink } from "@/lib/site";

export function Domiciliar() {
  return (
    <section id="domiciliar" className="bg-blush">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <Reveal>
          <h2 className="h-display text-[clamp(2.3rem,5vw,4rem)]">
            Cuidado que chega <em>até você.</em>
          </h2>
          <p className="mt-6 font-serif text-[1.35rem] leading-snug max-w-xl">
            Consulta domiciliar para idosos, pacientes acamados e pessoas com mobilidade reduzida.
          </p>
          <p className="mt-5 text-ink-soft leading-[1.75] max-w-xl">
            O atendimento médico no conforto do lar permite conhecer as necessidades do paciente e sua rotina, acolher a
            família e orientar o acompanhamento clínico. A participação de enfermagem, nutrição, psicologia e educação
            física é organizada conforme necessidade, disponibilidade e contratação.
          </p>
          <div className="mt-8 max-w-xl border-l-[3px] border-gold bg-card/80 px-6 py-5">
            <p className="font-serif text-[clamp(1.5rem,2.6vw,1.95rem)] leading-tight">
              Pensado para <em className="text-gold">pessoas idosas e acamadas.</em>
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {["Idosos", "Pacientes acamados"].map((t) => (
                <span key={t} className="bg-cocoa text-paper px-4 py-2 text-[0.88rem] rounded-full">
                  {t}
                </span>
              ))}
              <span className="border border-ink/25 bg-paper/60 px-4 py-2 text-[0.88rem] rounded-full">Mobilidade reduzida</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150} className="bg-card p-7 sm:p-9 border border-ink/10 shadow-[0_30px_60px_-35px_rgba(67,55,46,0.5)]">
          <h3 className="font-serif text-[2.2rem] leading-tight">Consulte valores</h3>
          <p className="text-ink-soft text-[0.92rem] leading-relaxed mt-4">
            Solicite à equipe um orçamento para sua necessidade. Área de cobertura, deslocamento, profissionais e
            disponibilidade são confirmados antes do agendamento.
          </p>
          <a
            href={waLink("Olá! Gostaria de consultar valores e disponibilidade para uma consulta domiciliar.")}
            className="mt-6 flex items-center justify-between bg-cocoa text-paper px-5 py-4 rounded-sm hover:bg-cocoa-2 transition-colors text-[0.95rem]"
          >
            Consultar valores da visita <span aria-hidden>↗</span>
          </a>
          <p className="text-[0.78rem] text-ink-soft mt-4">
            Atendimento programado. Não integra automaticamente os planos em consultório ou por telemedicina.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const photos = [
  ["/img/vida-sala1.webp", "Sala de atendimento do Espaço Vida Acolhida, com poltronas e luz natural"],
  ["/img/vida-sala2.webp", "Sala de atendimento acolhedora com sofá, poltronas e planta"],
  ["/img/vida-recepcao.webp", "Recepção do Espaço Vida Acolhida com sofá e cantinho do café"],
  ["/img/vida-cafe.webp", "Cantinho do café na recepção do Espaço Vida Acolhida"],
];

export function Locations() {
  return (
    <section id="onde" className="bg-paper-2 border-y border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-28">
        <Reveal>
          <h2 className="h-display text-[clamp(2.1rem,4.6vw,3.4rem)]">
            Presencial em Guarulhos, <em>online de onde você estiver.</em>
          </h2>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <Reveal className="bg-card border border-line">
            <div className="grid grid-cols-2 grid-rows-2 gap-px bg-line aspect-[4/3]">
              {photos.map(([src, alt]) => (
                <div key={src} className="relative bg-paper-2">
                  <Image src={src} alt={alt} fill sizes="(min-width:1024px) 280px, 45vw" className="object-cover" />
                </div>
              ))}
            </div>
            <div className="p-7">
              <Image src="/img/vida-logo.webp" alt="Espaço Vida Acolhida" width={180} height={104} className="mb-5 h-[64px] w-auto object-contain object-left mix-blend-multiply" />
              <h3 className="font-serif text-[1.8rem]">Espaço Vida Acolhida</h3>
              <p className="text-ink-soft mt-2 leading-relaxed">
                R. Silvestre Vasconcelos Calmon, 190
                <br />
                Vila Pedro Moreira, Guarulhos, SP
              </p>
              <a
                className="inline-block mt-2 py-2 border-b border-ink/40 text-[0.9rem] hover:border-ink"
                href="https://www.google.com/maps/search/?api=1&query=R.+Silvestre+Vasconcelos+Calmon+190+Guarulhos+SP"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver no mapa ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="bg-card border border-line flex flex-col">
            <div className="grid grid-cols-2 gap-px bg-line aspect-[4/3]">
              <div className="relative">
                <Image src="/img/equalize-entrada.webp" alt="Entrada do edifício da Clínica Equalize, em Guarulhos" fill sizes="(min-width:1024px) 280px, 45vw" className="object-cover" />
              </div>
              <div className="relative">
                <Image src="/img/equalize-predio.webp" alt="Fachada do edifício, número 159" fill sizes="(min-width:1024px) 280px, 45vw" className="object-cover" />
              </div>
            </div>
            <div className="p-7 flex-1">
              <Image src="/img/equalize-logo.webp" alt="Clínica Equalize" width={180} height={98} className="mb-5 h-[64px] w-auto object-contain object-left mix-blend-multiply" />
              <h3 className="font-serif text-[1.8rem]">Clínica Equalize</h3>
              <p className="text-ink-soft mt-2 leading-relaxed">
                R. Dr. Ramos de Azevedo, 159
                <br />
                Centro, Guarulhos, SP
              </p>
              <a
                className="inline-block mt-2 py-2 border-b border-ink/40 text-[0.9rem] hover:border-ink"
                href="https://www.google.com/maps/search/?api=1&query=R.+Dr.+Ramos+de+Azevedo+159+Guarulhos+SP"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver no mapa ↗
              </a>
              <div className="mt-8 pt-6 border-t border-line">
                <p className="text-ink-soft text-[0.92rem] mt-2 leading-relaxed">
                  Consultas por vídeo, de onde você estiver, com a mesma equipe e o mesmo plano de cuidado.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <p className="mt-6 text-[0.8rem] text-ink-soft">Espaço Vida Acolhida e Clínica Equalize são parceiros da Dra. Daniela Costa.</p>
      </div>
    </section>
  );
}
