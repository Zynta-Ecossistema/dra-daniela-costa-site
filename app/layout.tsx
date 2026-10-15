import type { Metadata, Viewport } from "next";
import { Newsreader, Instrument_Sans } from "next/font/google";
import "./globals.css";

const serif = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dradanielacosta.com.br"),
  alternates: { canonical: "/" },
  title,
  description,
  openGraph: { title, description, locale: "pt_BR", type: "website" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#f7f1e7" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
