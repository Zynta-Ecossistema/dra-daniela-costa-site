import { Reveal } from "./Reveal";
import { WaButton } from "./WaButton";
import { MSG, WHATSAPP_LABEL } from "@/lib/site";

export function Contact() {
  return (
    <section id="contato" className="on-dark relative overflow-hidden bg-cocoa text-paper grain">
      <div className="relative z-10 mx-auto max-w-3xl px-5 py-16 text-center lg:py-24">
        <Reveal>
          <h2 className="h-display text-[clamp(2.2rem,5.4vw,4rem)]">
            O primeiro passo <em>é uma conversa.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-lg leading-relaxed text-paper/75">
            A equipe responde pelo WhatsApp com os horários da semana. Não precisa enviar exames agora.
          </p>
          <WaButton msg={MSG.M6} className="mt-8 w-full sm:w-auto">
            Agendar pelo WhatsApp · {WHATSAPP_LABEL}
          </WaButton>
        </Reveal>
      </div>
    </section>
  );
}
