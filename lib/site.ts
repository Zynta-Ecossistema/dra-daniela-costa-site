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
} as const;

// Mensagem do bloco "Você se reconhece": inclui só o que a visitante marcou, na hora do clique. Nada é guardado nem enviado a analytics.
export function msgSintomas(marcados: string[]) {
  if (marcados.length === 0) return MSG.M2;
  return `Olá! Quero agendar uma consulta. Tenho sentido: ${marcados.join("; ")}.`;
}

export const DOCTORALIA_URL = "https://www.doctoralia.com.br/daniela-lima-da-costa/generalista/manaus";
export const GOOGLE_URL = "https://share.google/Cpk7MjXd6eh02kwKj";

export type Review = { source: "Doctoralia" | "Google"; name: string; text: string };

// Avaliações públicas, transcritas como publicadas na plataforma (trechos curtos, sem alterar o sentido).
export const FEATURED_REVIEW: Review = {
  source: "Google",
  name: "Dayanne Celestino de Oliveira",
  text: "minha energia foi restaurada e agora posso dizer que estou no caminho da qualidade de vida.",
};

export const SHORT_REVIEWS: Review[] = [
  { source: "Doctoralia", name: "Laura Lima", text: "Excelente profissional, atenciosa, carismática." },
  {
    source: "Doctoralia",
    name: "Wilson Leal",
    text: "Profissional presta atendimento humanizado ao paciente, isso faz a diferença positiva...",
  },
  {
    source: "Google",
    name: "Karimme Martins",
    text: "Atendimento excelente e prático principalmente para mim que moro no interior do estado.",
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
