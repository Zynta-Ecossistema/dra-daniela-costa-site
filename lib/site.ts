export const WHATSAPP = "5511961727349";
export const WHATSAPP_LABEL = "(11) 96172-7349";

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

// Cada botão abre a conversa com uma mensagem própria (M1 a M6). Assim a equipe sabe de qual parte do site o paciente veio.
export const MSG = {
  M1: "Olá! Vim pelo site e quero agendar minha primeira consulta com a Dra. Daniela.", // hero e cabeçalho
  M2: "Olá! Quero agendar uma consulta.", // você se reconhece, quando nada foi marcado
  M4: "Olá! Vim pelo site e gostaria de agendar uma consulta.", // botão flutuante
  M6: "Olá! Quero dar o primeiro passo e agendar minha consulta.", // CTA final
  M7: "Olá! Quero agendar uma consulta presencial na Livance Alphaville.", // onde atendo, presencial
  M8: "Olá! Quero agendar uma consulta por vídeo.", // onde atendo, por vídeo
} as const;

// Mensagem do bloco "Você se reconhece": inclui só o que a visitante marcou, na hora do clique. Nada é guardado nem enviado a analytics.
export function msgSintomas(marcados: string[]) {
  if (marcados.length === 0) return MSG.M2;
  return `Olá! Quero agendar uma consulta. Tenho sentido: ${marcados.join("; ")}.`;
}

export const DOCTORALIA_URL = "https://www.doctoralia.com.br/daniela-lima-da-costa/generalista/manaus";
export const GOOGLE_URL = "https://share.google/Cpk7MjXd6eh02kwKj";

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

export const TEAM = [
  ["Dra. Daniela Costa", "Medicina · CRM-SP 272263"],
  ["Dra. Thalita Tormin", "Nutrição · CRN-3 94760"],
  ["Enf. Rebeca Uchôa", "Enfermagem · COREN-AM 297113"],
] as const;

export const CLINIC = {
  name: "Livance Alphaville",
  address: "Alameda Grajaú, 98, 18º andar, Alphaville Industrial, Barueri, SP",
  route: "https://www.google.com/maps/search/?api=1&query=Alameda+Gra%C3%BAj%C3%A1+98+Alphaville+Industrial+Barueri+SP",
  embed: "https://www.google.com/maps?q=Alameda+Gra%C3%BAj%C3%A1+98+Alphaville+Industrial+Barueri+SP&output=embed",
} as const;

export const FAQ = [
  [
    "Como funciona a primeira consulta?",
    "Conversamos sobre sua história, rotina, sintomas e objetivos. A partir dessa avaliação, definimos juntas os próximos passos do cuidado, respeitando suas necessidades.",
  ],
  [
    "Como funciona o programa de acompanhamento?",
    "O programa Mente, Corpo e Hormônios oferece cuidado contínuo e individualizado, com avaliação médica, definição de objetivos e acompanhamento da evolução, conforme o plano escolhido.",
  ],
  [
    "Como é o acompanhamento da menopausa?",
    "Cada mulher tem sua história. São avaliados os sintomas, o histórico de saúde e os exames, quando indicados. As orientações e o acompanhamento são definidos de acordo com as necessidades de cada paciente.",
  ],
  [
    "Existe atendimento por telemedicina?",
    "Sim. As consultas on-line são realizadas conforme a disponibilidade e a adequação de cada caso. Quando necessário, a médica orienta uma avaliação presencial.",
  ],
  [
    "Onde fica o consultório?",
    "O atendimento presencial acontece na Livance Alphaville, Alameda Grajaú, 98, 18º andar, Alphaville Industrial, Barueri, SP, mediante agendamento prévio.",
  ],
] as const;

// Áreas de atuação por estado, no mapa da trajetória (informativo, sem botões).
export const EXPERIENCE = [
  {
    state: "Amazonas",
    items: ["Saúde da Família", "Saúde Indígena", "Ambulatório", "Telemedicina", "Unidade Hospital", "Urgência e Emergência", "Preceptora e professora de MFC", "Palestrante"],
  },
  { state: "Mato Grosso", items: ["Saúde da Família", "Unidade Hospital"] },
  {
    state: "São Paulo",
    items: ["Ambulatório Ocupacional", "Telemedicina", "Programa Mente, Corpo e Hormônios", "Unidade Hospital", "Urgência e Emergência"],
  },
] as const;
