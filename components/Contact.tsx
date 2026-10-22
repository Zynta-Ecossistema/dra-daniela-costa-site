import { Reveal } from "./Reveal";
import { waLink, WHATSAPP_LABEL, SOBRE_PLANOS } from "@/lib/site";

export function Contact() {
  return (
    <>
      <section id="contato" className="on-dark relative bg-cocoa text-paper grain overflow-hidden">
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
              className="mt-8 inline-flex w-full sm:w-auto sm:min-w-[340px] items-center justify-between gap-6 bg-blush text-cocoa px-6 py-4 rounded-sm font-medium hover:bg-paper transition-colors"
            >
              Conversar pelo WhatsApp <span aria-hidden>↗</span>
            </a>
            <p className="mt-4 text-paper/70 text-[0.95rem]">{WHATSAPP_LABEL}</p>
            <p className="mt-5 text-[0.8rem] text-paper/70 max-w-sm leading-relaxed">
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
