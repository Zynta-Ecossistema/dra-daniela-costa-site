import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade | Dra. Daniela Costa",
  description: "Como este site trata os seus dados, de acordo com a LGPD.",
  alternates: { canonical: "/privacidade" },
};

const itens = [
  [
    "Quem é a responsável",
    "Dra. Daniela Lima da Costa, médica, CRM-SP 272263. Contato para assuntos de privacidade: dradanielacostamfc@gmail.com.",
  ],
  [
    "O que este site coleta",
    "Este site não tem formulários e não pede dados pessoais nem de saúde. O contato acontece pelo WhatsApp, quando você clica em um botão e decide enviar a mensagem. Evite compartilhar exames ou dados de saúde no primeiro contato.",
  ],
  [
    "WhatsApp",
    "Ao abrir a conversa, você passa a usar o WhatsApp, que tem a própria política de privacidade. O número e as mensagens que você enviar são usados apenas para responder ao seu contato e agendar a consulta.",
  ],
  [
    "Registros técnicos e cookies",
    "A hospedagem do site pode registrar dados técnicos de acesso (como endereço IP e tipo de navegador) por segurança e funcionamento. Hoje o site não usa cookies de rastreamento nem de publicidade. Se ferramentas de medição forem adotadas no futuro, elas só serão ativadas depois do seu consentimento e esta política será atualizada.",
  ],
  [
    "Seus direitos",
    "Pela Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode pedir acesso, correção ou exclusão dos seus dados e saber como eles são tratados. Escreva para o e-mail acima.",
  ],
];

export default function Privacidade() {
  return (
    <>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/img/logo-dc-dourada.webp" alt="" width={64} height={39} className="h-auto w-[54px]" />
          <span className="font-serif text-[1.05rem]">Dra. Daniela Costa</span>
        </Link>
        <Link href="/" className="border-b border-ink/40 py-1.5 text-[0.9rem] hover:border-ink">
          Voltar ao início
        </Link>
      </header>
      <main className="mx-auto max-w-3xl px-5 pb-20 pt-8 lg:pt-14">
        <h1 className="h-display text-[clamp(2.2rem,5vw,3.4rem)]">
          Política de <em>Privacidade.</em>
        </h1>
        <div className="mt-10 space-y-8">
          {itens.map(([t, d]) => (
            <section key={t}>
              <h2 className="font-serif text-[1.5rem]">{t}</h2>
              <p className="mt-2 leading-[1.75] text-ink-soft">{d}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
