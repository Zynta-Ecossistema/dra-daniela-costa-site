import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-cocoa text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-start gap-4">
          <Image src="/img/logo-dc-branca.webp" alt="Dra. Daniela Costa" width={96} height={58} className="h-auto w-[84px]" />
          <div>
            <p className="font-serif text-[1.15rem] leading-tight">Dra. Daniela Lima da Costa</p>
            <p className="mt-1 text-[0.85rem] text-paper/75">Médica · CRM-SP 272263</p>
            <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[0.85rem] text-paper/80">
              <a href="https://www.instagram.com/dra_danielacosta" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-paper/30 hover:text-paper">
                Instagram
              </a>
              <a href="mailto:dradanielacostamfc@gmail.com" className="underline underline-offset-4 decoration-paper/30 hover:text-paper">
                dradanielacostamfc@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="max-w-md">
          <p className="text-[0.78rem] leading-relaxed text-paper/70">
            As informações deste site têm caráter educativo e não substituem consulta médica. Cada pessoa é avaliada
            individualmente.
          </p>
          <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[0.85rem]">
            <Link href="/palestras" className="underline underline-offset-4 decoration-paper/30 hover:text-paper">
              Palestras e ensino
            </Link>
            <Link href="/privacidade" className="underline underline-offset-4 decoration-paper/30 hover:text-paper">
              Política de Privacidade
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
