import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Reconhece } from "@/components/Reconhece";
import { Como } from "@/components/Como";
import { Reviews } from "@/components/Reviews";
import { Sobre } from "@/components/Sobre";
import { Trajetoria } from "@/components/Trajetoria";
import { Equipe } from "@/components/Equipe";
import { Onde } from "@/components/Onde";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reconhece />
        <Como />
        <Reviews />
        <Sobre />
        <Trajetoria />
        <Equipe />
        <Onde />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
