export const WHATSAPP = "5511961727349";
export const WHATSAPP_LABEL = "(11) 96172-7349";

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

export function waTo(number: string, text: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export const SOBRE_PLANOS = "Olá! Gostaria de conversar sobre o acompanhamento Mente, Corpo e Hormônios.";

export type Modality = "tele" | "pres";

type Plan = {
  title: string;
  lead: string;
  items: string[];
  note: string;
};

const common = [
  "Consultas médicas com retornos previstos",
  "Consultas nutricionais com retornos",
  "Encontros de enfermagem por telemonitoramento",
  "Coordenação, orientações e canal de seguimento",
  "Suporte semanal e grupo de WhatsApp de apoio",
];

export const PLANS: Record<Modality, Plan> = {
  tele: {
    title: "Acompanhamento por telemedicina",
    lead: "Medicina e nutrição por vídeo, com enfermagem por telemonitoramento.",
    items: common,
    note: "Consultas remotas não incluem execução de exame físico, bioimpedância, glicemia ou sinais vitais.",
  },
  pres: {
    title: "Acompanhamento presencial em Guarulhos",
    lead: "Medicina e nutrição em consultório, com enfermagem por telemonitoramento.",
    items: [...common, "Exame físico, bioimpedância, glicemia e sinais vitais quando indicados"],
    note: "Avaliações presenciais realizadas quando clinicamente adequadas e tecnicamente viáveis.",
  },
};

export const DOCTORALIA_URL = "https://www.doctoralia.com.br/daniela-lima-da-costa/generalista/manaus";

export type Review = {
  source: "Doctoralia" | "Google";
  name: string;
  verified?: "Consulta verificada" | "Opinião verificada";
  text: string;
  date: string;
  context: string;
  reply?: string;
};

// Avaliações públicas do perfil da Dra. no Doctoralia, transcritas como publicadas.
export const REVIEWS: Review[] = [
  {
    source: "Doctoralia",
    name: "Carlos Daniel",
    verified: "Opinião verificada",
    text: "Excelente profissional, bastante atenciosa e clara!",
    date: "8 de setembro de 2024",
    context: "Teleconsulta",
    reply: "Bom Dia!! Carlos Daniel, agradeço pela confiança e carinho, estamos a disposição. Forte abraço!",
  },
  {
    source: "Doctoralia",
    name: "Laura Lima",
    verified: "Consulta verificada",
    text: "Excelente profissional, atenciosa, carismática, diagnóstico certeiro e tratamento eficaz. Gratidão!!! Dra. Daniela pela consulta maravilhosa.",
    date: "27 de agosto de 2024",
    context: "Teleconsulta",
    reply: "Olá, Dona Laura, muito obrigada pelo carinho e confiança. Forte abraço!",
  },
  {
    source: "Doctoralia",
    name: "Benigno Picanço da Costa",
    verified: "Consulta verificada",
    text: "Atendimento atencioso e eficiente. Demonstrou verdadeiro interesse em diagnosticar e tratar a doença.",
    date: "22 de agosto de 2024",
    context: "Consulta generalista",
    reply: "Olá, Sr. Benigno, agradeço pela confiança. Forte abraço!",
  },
  {
    source: "Doctoralia",
    name: "Wilson Leal",
    verified: "Opinião verificada",
    text: "Profissional presta atendimento humanizado ao paciente, isso faz a diferença positiva em relação a muitos outros profissionais da saúde.",
    date: "1 de agosto de 2024",
    context: "Telemedicina",
    reply: "Olá, Sr. Wilson, agradeço pela confiança. Forte abraço!!",
  },
  {
    source: "Doctoralia",
    name: "Gyselia de Nazaré Franco Macena",
    verified: "Consulta verificada",
    text: "Excelente profissional, atenciosa e muito dedicada aos pacientes",
    date: "31 de julho de 2024",
    context: "Consulta",
    reply: "Olá, Sra Gyselia, foi um grade prazer em atender. Estamos sempre prontos para receber com todo carinho. Forte abraço!!",
  },
  {
    source: "Doctoralia",
    name: "Afonso Martins",
    verified: "Consulta verificada",
    text: "Fui muito bem atendido pela dra Daniela Costa. A partir de agora, irei realizar o tratamento e aguardar os resultados.",
    date: "31 de julho de 2024",
    context: "Teleconsulta",
    reply: "Olá, Afonso, seu feedback é muito importante para qualidade da assistência médica. Forte Abraço!!",
  },
];

// Perfil da Dra. no Google Meu Negócio. Preencher a URL e adicionar as avaliações em REVIEWS com source "Google".
export const GOOGLE_URL = "https://share.google/Cpk7MjXd6eh02kwKj";

// Relatos em vídeo de pacientes. Cada item é um arquivo em public/videos (src) ou um id do YouTube.
export type PatientVideo = { title: string; src?: string; youtube?: string; poster?: string };
export const VIDEOS: PatientVideo[] = [];

// Fotos dos cards "Quais problemas ajudamos a cuidar?". Sem foto, o card mostra a logo como reserva.
export const PROBLEM_PHOTOS: Record<string, { src: string; pos: string } | undefined> = {
  "Mulher 40+": { src: "/img/dra-jardim-rosa.webp", pos: "50% 22%" },
  "Saúde emocional & sono": { src: "/img/dra-cafe.webp", pos: "50% 22%" },
  "Doenças crônicas": { src: "/img/dra-escritorio.webp", pos: "50% 38%" },
};

export const EXPERIENCE = [
  {
    state: "Amazonas",
    tone: "text-olive-deep",
    items: ["Saúde da Família", "Saúde Indígena", "Ambulatório", "Telemedicina", "Unidade Hospital", "Urgência e Emergência", "Preceptora e professora de MFC", "Palestrante"],
  },
  { state: "Mato Grosso", tone: "text-gold", items: ["Saúde da Família", "Unidade Hospital"] },
  {
    state: "São Paulo",
    tone: "text-lilac-deep",
    items: ["Ambulatório Ocupacional", "Telemedicina", "Medicina Integrada Mente, Corpo e Hormônios", "Unidade Hospital", "Urgência e Emergência"],
  },
];

// Foto da seção "Ensino e educação". Reserva até a Dra. enviar a foto de palestra.
export const ENSINO_PHOTO = {
  src: "/img/dra-livros.webp",
  alt: "Dra. Daniela Costa sentada em uma cadeira de madeira, apoiada sobre livros de medicina",
  pos: "50% 22%",
};
