export const WHATSAPP = "5511961727349";
export const WHATSAPP_LABEL = "(11) 96172-7349";

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

export const SOBRE_PLANOS = "Olá! Gostaria de conversar sobre o acompanhamento Mente, Corpo e Hormônios.";

export type Modality = "tele" | "pres";
export type Months = 4 | 6;

type Plan = {
  title: string;
  lead: string;
  installment: number | null; // null = valor ainda a confirmar
  items: string[];
  note: string;
};

const common = (m: Months) => [
  `${m} consultas médicas + ${m} retornos previstos`,
  `${m} consultas nutricionais + ${m} retornos`,
  `${m * 4} encontros de enfermagem`,
  "Coordenação, orientações e canal de seguimento",
  "Suporte semanal e grupo de WhatsApp de apoio",
];

export const PLANS: Record<Modality, Record<Months, Plan>> = {
  tele: {
    4: {
      title: "Acompanhamento por telemedicina",
      lead: "Medicina e nutrição por vídeo, com enfermagem por telemonitoramento.",
      installment: 997,
      items: common(4),
      note: "Consultas remotas não incluem execução de exame físico, bioimpedância, glicemia ou sinais vitais.",
    },
    6: {
      title: "Acompanhamento por telemedicina",
      lead: "Medicina e nutrição por vídeo, com enfermagem por telemonitoramento.",
      installment: null,
      items: common(6),
      note: "Consultas remotas não incluem execução de exame físico, bioimpedância, glicemia ou sinais vitais.",
    },
  },
  pres: {
    4: {
      title: "Acompanhamento presencial em Guarulhos",
      lead: "Medicina e nutrição em consultório, com enfermagem por telemonitoramento.",
      installment: 1399,
      items: [
        ...common(4),
        "Exame físico, bioimpedância, glicemia e sinais vitais quando indicados",
      ],
      note: "Avaliações presenciais realizadas quando clinicamente adequadas e tecnicamente viáveis.",
    },
    6: {
      title: "Acompanhamento presencial em Guarulhos",
      lead: "Medicina e nutrição em consultório, com enfermagem por telemonitoramento.",
      installment: null,
      items: [
        ...common(6),
        "Exame físico, bioimpedância, glicemia e sinais vitais quando indicados",
      ],
      note: "Avaliações presenciais realizadas quando clinicamente adequadas e tecnicamente viáveis.",
    },
  },
};

export const brl = (n: number) =>
  n.toLocaleString("pt-BR", { minimumFractionDigits: 0 });

export const DOCTORALIA_URL = "https://www.doctoralia.com.br/daniela-lima-da-costa/generalista/manaus";

export type Review = {
  name: string;
  verified: "Consulta verificada" | "Opinião verificada";
  text: string;
  date: string;
  context: string;
  reply: string;
};

// Avaliações públicas do perfil da Dra. no Doctoralia, transcritas como publicadas.
export const REVIEWS: Review[] = [
  {
    name: "Carlos Daniel",
    verified: "Opinião verificada",
    text: "Excelente profissional, bastante atenciosa e clara!",
    date: "8 de setembro de 2024",
    context: "Teleconsulta",
    reply: "Bom Dia!! Carlos Daniel, agradeço pela confiança e carinho, estamos a disposição. Forte abraço!",
  },
  {
    name: "Laura Lima",
    verified: "Consulta verificada",
    text: "Excelente profissional, atenciosa, carismática, diagnóstico certeiro e tratamento eficaz. Gratidão!!! Dra. Daniela pela consulta maravilhosa.",
    date: "27 de agosto de 2024",
    context: "Teleconsulta",
    reply: "Olá, Dona Laura, muito obrigada pelo carinho e confiança. Forte abraço!",
  },
  {
    name: "Benigno Picanço da Costa",
    verified: "Consulta verificada",
    text: "Atendimento atencioso e eficiente. Demonstrou verdadeiro interesse em diagnosticar e tratar a doença.",
    date: "22 de agosto de 2024",
    context: "Consulta generalista",
    reply: "Olá, Sr. Benigno, agradeço pela confiança. Forte abraço!",
  },
  {
    name: "Wilson Leal",
    verified: "Opinião verificada",
    text: "Profissional presta atendimento humanizado ao paciente, isso faz a diferença positiva em relação a muitos outros profissionais da saúde.",
    date: "1 de agosto de 2024",
    context: "Telemedicina",
    reply: "Olá, Sr. Wilson, agradeço pela confiança. Forte abraço!!",
  },
  {
    name: "Gyselia de Nazaré Franco Macena",
    verified: "Consulta verificada",
    text: "Excelente profissional, atenciosa e muito dedicada aos pacientes",
    date: "31 de julho de 2024",
    context: "Consulta",
    reply: "Olá, Sra Gyselia, foi um grade prazer em atender. Estamos sempre prontos para receber com todo carinho. Forte abraço!!",
  },
  {
    name: "Afonso Martins",
    verified: "Consulta verificada",
    text: "Fui muito bem atendido pela dra Daniela Costa. A partir de agora, irei realizar o tratamento e aguardar os resultados.",
    date: "31 de julho de 2024",
    context: "Teleconsulta",
    reply: "Olá, Afonso, seu feedback é muito importante para qualidade da assistência médica. Forte Abraço!!",
  },
];
