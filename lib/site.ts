export const WHATSAPP = "5511961727349";
export const WHATSAPP_LABEL = "(11) 96172-7349";

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

// Cada botão abre a conversa com uma mensagem própria (M1 a M6). Assim a equipe sabe de qual parte do site o paciente veio.
export const MSG = {
  M1: "Olá! Vim pelo site e quero agendar minha primeira consulta com a Dra. Daniela.", // hero e cabeçalho
  M2: "Olá! Me identifiquei com as queixas do site e quero agendar uma consulta.", // você se reconhece
  M3: "Olá! Vi os valores no site e quero saber os horários da primeira consulta.", // primeira consulta e valores
  M4: "Olá! Vim pelo site e gostaria de agendar uma consulta.", // botão flutuante
  M5: "Olá! Gostaria de saber sobre a consulta domiciliar.", // onde atendo, em casa
  M6: "Olá! Quero dar o primeiro passo e agendar minha consulta.", // CTA final
} as const;

// Valor da primeira consulta. Enquanto SHOW_PRICE for false (ou o valor estiver vazio), o site mostra
// "Valores e horários pelo WhatsApp". Para mostrar: SHOW_PRICE = true e PRICE_FIRST = "R$ 000,00".
export const SHOW_PRICE = false;
export const PRICE_FIRST = "";

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

export const CLINICS = [
  {
    name: "Espaço Vida Acolhida",
    address: "R. Silvestre Vasconcelos Calmon, 190, Vila Pedro Moreira, Guarulhos",
    map: "https://www.google.com/maps/search/?api=1&query=R.+Silvestre+Vasconcelos+Calmon+190+Guarulhos+SP",
    photo: { src: "/img/vida-sala1.webp", alt: "Sala de atendimento do Espaço Vida Acolhida, com poltronas e luz natural" },
  },
  {
    name: "Clínica Equalize",
    address: "R. Dr. Ramos de Azevedo, 159, Centro, Guarulhos",
    map: "https://www.google.com/maps/search/?api=1&query=R.+Dr.+Ramos+de+Azevedo+159+Guarulhos+SP",
    photo: { src: "/img/equalize-entrada.webp", alt: "Entrada do edifício da Clínica Equalize, em Guarulhos" },
  },
  {
    name: "Alphaville, Barueri",
    address: "Alameda Grajaú, 98, 18º andar, Alphaville Industrial, Barueri",
    map: "https://share.google/519hn5GymrrNwVDoD",
    photo: null,
  },
] as const;

export const FAQ = [
  ["Aceita convênio?", "Atendimento particular, com recibo para reembolso quando o plano oferece."],
  ["A consulta por vídeo funciona para o meu caso?", "Na maioria dos casos, sim; sem exame físico nem bioimpedância."],
  ["O que levar na primeira consulta?", "Exames recentes (até 12 meses), lista de remédios e suplementos, queixas anotadas."],
  ["Preciso entrar no programa?", "Não. Primeira consulta e retorno bastam; o programa só é indicado se fizer sentido."],
  ["Existe garantia de resultado?", "Não. Cada pessoa responde de um jeito; o compromisso é com metas possíveis e acompanhamento próximo."],
] as const;
