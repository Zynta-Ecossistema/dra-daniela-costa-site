import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Doctor } from "@/components/Doctor";
import { Program } from "@/components/Program";
import { Journey } from "@/components/Journey";
import { Domiciliar, Locations } from "@/components/Home";
import { Plans } from "@/components/Plans";
import { Partners } from "@/components/Partners";
import { Experience } from "@/components/Experience";
import { Ensino } from "@/components/Ensino";
import { Reviews } from "@/components/Reviews";
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
        <Experience />
        <Program />
        <Reviews />
        <Journey />
        <Domiciliar />
        <Plans />
        <Ensino />
        <Partners />
        <Locations />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
