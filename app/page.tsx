import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Doctor } from "@/components/Doctor";
import { Program } from "@/components/Program";
import { Journey } from "@/components/Journey";
import { Domiciliar, Locations } from "@/components/Home";
import { Plans } from "@/components/Plans";
import { Team } from "@/components/Team";
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
        <Doctor />
        <Program />
        <Journey />
        <Domiciliar />
        <Plans />
        <Team />
        <Locations />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
