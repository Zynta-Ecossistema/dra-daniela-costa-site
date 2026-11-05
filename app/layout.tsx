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

const title = "Dra. Daniela Costa · Médica em Alphaville e Telemedicina";
const description =
  "Avaliação e acompanhamento da saúde da mulher 40+, com atenção à mente, ao corpo e às mudanças hormonais. Presencial em Alphaville ou por vídeo. Agende pelo WhatsApp.";

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
  address: {
    "@type": "PostalAddress",
    streetAddress: "Alameda Grajaú, 98, 18º andar, Alphaville Industrial",
    addressLocality: "Barueri",
    addressRegion: "SP",
    postalCode: "06454-050",
    addressCountry: "BR",
  },
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
