import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WaButton } from "@/components/WaButton";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Palestras e ensino | Dra. Daniela Costa",
  description: "Preceptoria, docência, palestras e educação em saúde com a Dra. Daniela Costa.",
  alternates: { canonical: "/palestras" },
};

const frentes = [
  ["Preceptoria e docência", "Formação de médicos e profissionais de saúde em Medicina de Família e Comunidade."],
  ["Palestras", "Encontros e eventos com temas de saúde, qualidade de vida e cuidado integral, para profissionais e para o público."],
  ["Educação em saúde", "Informação clara para que cada pessoa participe das decisões sobre o próprio cuidado."],
];

export default function Palestras() {
  return (
    <>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/img/logo-dc-dourada.webp" alt="" width={64} height={39} className="h-auto w-[54px]" />
          <span className="font-serif text-[1.05rem]">Dra. Daniela Costa</span>
        </Link>
        <Link href="/" className="text-[0.9rem] border-b border-ink/40 py-1.5 hover:border-ink">
          Voltar ao início
        </Link>
      </header>

      <main className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:pt-16">
        <div>
          <h1 className="h-display text-[clamp(2.4rem,5vw,3.8rem)]">
            Ensino e <em>educação.</em>
          </h1>
          <p className="mt-6 max-w-xl text-[1.04rem] leading-[1.75] text-ink-soft">
            Além da clínica, a Dra. Daniela leva o que aprendeu na prática para a sala de aula e para o palco, como
            preceptora, professora de Medicina de Família e Comunidade e palestrante.
          </p>
          <ul className="mt-9 max-w-xl divide-y divide-line border-y border-line">
            {frentes.map(([t, d]) => (
              <li key={t} className="py-5">
                <h2 className="font-serif text-[1.55rem] leading-tight">{t}</h2>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-soft">{d}</p>
              </li>
            ))}
          </ul>
          <WaButton msg="Olá! Gostaria de conversar sobre uma palestra ou atividade de ensino com a Dra. Daniela." className="mt-8">
            Convidar para uma palestra <span aria-hidden>↗</span>
          </WaButton>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden bg-blush lg:mx-0">
          <Image
            src="/img/dra-livros.webp"
            alt="Dra. Daniela Costa sentada em uma cadeira de madeira, apoiada sobre livros de medicina"
            fill
            priority
            sizes="(min-width:1024px) 440px, 90vw"
            className="object-cover"
            style={{ objectPosition: "50% 22%" }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
