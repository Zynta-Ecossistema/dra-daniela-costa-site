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
