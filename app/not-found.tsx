import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { waLink, SOBRE_PLANOS } from "@/lib/site";

export const metadata: Metadata = { title: "Página não encontrada | Dra. Daniela Costa" };

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-paper px-5 py-16 text-center">
      <div className="max-w-xl">
        <Image src="/img/logo-dc-dourada.webp" alt="Dra. Daniela Costa" width={120} height={73} className="mx-auto h-auto w-[110px]" />
        <p className="mt-8 font-serif text-[clamp(4rem,12vw,7rem)] leading-none text-gold">404</p>
        <h1 className="h-display mt-4 text-[clamp(2rem,5vw,3rem)]">
          Essa página <em>não foi encontrada.</em>
        </h1>
        <p className="mt-5 leading-relaxed text-ink-soft">
          O endereço pode ter mudado ou ter sido digitado errado. Volte para o início ou fale com a equipe pelo WhatsApp.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link href="/" className="rounded-full bg-cocoa px-7 py-4 text-[0.95rem] text-paper transition-colors hover:bg-cocoa-2">
            Voltar ao início
          </Link>
          <a
            href={waLink(SOBRE_PLANOS)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cocoa px-7 py-4 text-[0.95rem] text-cocoa transition-colors hover:bg-cocoa hover:text-paper"
          >
            Conversar pelo WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
