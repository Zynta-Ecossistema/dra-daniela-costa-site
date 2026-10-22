import type { Metadata, Viewport } from "next";
import { Newsreader, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { DOCTORALIA_URL, GOOGLE_URL } from "@/lib/site";

const serif = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const title = "Dra. Daniela Costa | Medicina Integrada em Guarulhos e telemedicina";
const description =
  "Acompanhamento multiprofissional em mente, corpo e hormônios com a Dra. Daniela Lima da Costa (CRM-SP 272263). Atendimento presencial em Guarulhos, telemedicina e consulta domiciliar.";

const SITE = "https://www.dradanielacosta.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  alternates: { canonical: "/" },
  title,
  description,
  applicationName: "Dra. Daniela Costa",
  authors: [{ name: "Dra. Daniela Lima da Costa" }],
  openGraph: { title, description, url: "/", siteName: "Dra. Daniela Costa", locale: "pt_BR", type: "website" },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
};

// Dados estruturados para o Google entender quem é a profissional e onde atende
const physician = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dra. Daniela Lima da Costa",
  url: SITE,
  image: `${SITE}/opengraph-image.jpg`,
  description,
  identifier: "CRM-SP 272263",
  medicalSpecialty: "PrimaryCare",
  telephone: "+55 11 96172-7349",
  email: "dradanielacostamfc@gmail.com",
  knowsLanguage: "pt-BR",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "R. Silvestre Vasconcelos Calmon, 190",
      addressLocality: "Guarulhos",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "R. Dr. Ramos de Azevedo, 159",
      addressLocality: "Guarulhos",
      addressRegion: "SP",
      addressCountry: "BR",
    },
  ],
  sameAs: ["https://www.instagram.com/dra_danielacosta", DOCTORALIA_URL, ...(GOOGLE_URL ? [GOOGLE_URL] : [])],
};

export const viewport: Viewport = { themeColor: "#f7f1e7" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body>
        {/* sem JavaScript os blocos continuam visíveis (a animação de entrada depende dele) */}
        <noscript>
          <style>{".reveal{opacity:1;transform:none}"}</style>
        </noscript>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physician).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
