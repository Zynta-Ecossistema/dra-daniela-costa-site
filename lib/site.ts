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
  date?: string;
  context?: string;
  reply?: string;
};

// Avaliações públicas do Doctoralia e do Google, transcritas como publicadas (sem emojis). O Google não traz data exata, só "há X meses".
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
    source: "Google",
    name: "Dayanne Celestino de Oliveira",
    text: "A Dra Daniela juntamente com a sua equipe são maravilhosos, atenciosos e o atendimento é de excelência. Desde que iniciei no programa vi que o atendimento era diferenciado, a Dra me fez várias perguntas, passou vários exames e me medicou conforme os sintomas que estava sentindo, graças a Deus melhorei e muito, minha energia foi restaurada e agora posso dizer que estou no caminho da qualidade de vida. O acompanhamento da Enfermeira Rebeca nas consultas faz toda diferença na nossa saúde, nas orientações e nas aplicações das medicações. Gratidão por todo apoio e acompanhamento Dra e a equipe.",
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
    source: "Google",
    name: "Alexandre Rodrigues",
    text: "Uma excelente profissional quando fui atendido por ela foi muito atenciosa ,que Deus continue abençoando grandemente sua vida",
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
    source: "Google",
    name: "Daniela Santos",
    text: "Uma excelente profissional super indico sempre preocupada com agente obrigada Dra Daniela Lima por ter cuidado tão bem de mim",
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
    source: "Google",
    name: "Soraia Souza",
    text: "Dr Daniela é uma excelente profissional. Atenciosa, tem empatia , passa segurança, e resolve os problemas de nossa saúde, vale a pena conhecer eu recomendo.",
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
    source: "Google",
    name: "Karimme Martins",
    text: "Atendimento excelente e prático principalmente para mim que moro no interior do estado e muitas vezes não tem recursos para chegar até a capital.",
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

// Fotos dos cards "Quais problemas ajudamos a cuidar?". Sem foto, o card mostra a logo.
export const PROBLEM_PHOTOS: Record<string, { src: string; pos: string; alt: string } | undefined> = {
  "Peso & metabolismo": { src: "/img/tema-peso.webp", pos: "50% 62%", alt: "Mulher medindo a cintura com uma fita métrica" },
  "Mulher 40+": { src: "/img/tema-mulher.webp", pos: "40% 32%", alt: "Mulher madura sorrindo de perfil, em frente a uma janela com cortina clara" },
  "Saúde do homem 40+": { src: "/img/tema-homem.webp", pos: "50% 30%", alt: "Homem de barba grisalha sorrindo, com um tapete de exercício e uma garrafa de água" },
  "Saúde emocional & sono": { src: "/img/tema-sono.webp", pos: "50% 38%", alt: "Mulher sorrindo deitada na cama, com máscara de dormir sobre os olhos" },
  "Dor, ossos & movimento": { src: "/img/tema-movimento.webp", pos: "60% 55%", alt: "Mão de uma mulher madura sobre o joelho" },
  "Doenças crônicas": { src: "/img/tema-cronicas.webp", pos: "50% 55%", alt: "Profissional de saúde medindo a glicemia de um paciente" },
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
