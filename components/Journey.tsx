import { Reveal } from "./Reveal";
import { TulipMark } from "./Tulip";

const steps = [
  ["Conversar e avaliar", "Na primeira consulta, a Dra. Daniela entende sua história, seus sintomas, sua rotina e seus objetivos."],
  ["Definir prioridades", "Juntos, vocês combinam as metas e o plano de cuidado, com a equipe que faz sentido para você."],
  ["Acompanhar de perto", "Consultas, retornos, telemonitoramento e suporte semanal mantêm o plano vivo entre as consultas."],
  ["Revisar & seguir", "Avaliar a evolução, ajustar a conduta e combinar os próximos passos para resultados sustentáveis."],
];

const monthly = [
  ["Medicina", "1 consulta + retorno previsto até 15 dias"],
  ["Nutrição", "1 consulta + retorno até 15 dias"],
  ["Enfermagem", "4 encontros por telemonitoramento com a enfermeira"],
  ["Psicologia & educação física", "Acompanhamento articulado conforme necessidade, frequência e contratação"],
  ["Entre as consultas", "Suporte semanal por WhatsApp e canal individual de seguimento"],
];

const follow = [
  ["Telemonitoramento com a enfermeira", "Contatos programados para acompanhar a rotina, as orientações, as dificuldades e as mudanças que precisam ser comunicadas à equipe."],
  ["Suporte semanal por WhatsApp", "Seguimento semanal e organização de dúvidas entre consultas, com dias, horários e prazo de resposta combinados no início."],
  ["Grupo de WhatsApp de apoio", "Orientações, educação em saúde e suporte em grupo. Participação conforme modalidade e programação da equipe."],
];

export function Journey() {
  return (
    <>
      <section className="bg-paper-2 border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-28">
          <Reveal>
            <h2 className="h-display text-[clamp(2.2rem,5vw,3.8rem)] max-w-3xl">
              Um caminho de cuidado. <em>Um passo de cada vez.</em>
            </h2>
            <p className="mt-6 text-ink-soft max-w-xl leading-relaxed">
              Da primeira conversa à revisão das metas, você sabe o que esperar em cada etapa.
            </p>
          </Reveal>

          <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {steps.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 100} className="relative">
                <span className="font-serif text-[3.4rem] leading-none text-rose/70">0{i + 1}</span>
                <div className="h-px bg-ink/25 my-4" />
                <h3 className="font-serif text-[1.55rem] leading-tight">{t}</h3>
                <p className="text-[0.92rem] text-ink-soft leading-relaxed mt-3">{d}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-16 bg-paper border border-line p-6 sm:p-10 grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-14">
            <div>
              <h3 className="font-serif text-[2.1rem] leading-tight">Uma equipe. Prioridades em comum.</h3>
              <p className="text-ink-soft text-[0.92rem] mt-4 leading-relaxed">
                Coordenação do cuidado, orientações e síntese mensal da evolução.
              </p>
            </div>
            <ul className="divide-y divide-line">
              {monthly.map(([t, d]) => (
                <li key={t} className="py-4 grid sm:grid-cols-[190px_1fr] gap-1 sm:gap-6">
                  <span className="font-medium text-[0.95rem]">{t}</span>
                  <span className="text-ink-soft text-[0.92rem]">{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <Reveal>
          <h2 className="h-display text-[clamp(2rem,4.4vw,3.2rem)]">Você segue acompanhado.</h2>
          <p className="mt-5 text-ink-soft max-w-xl leading-relaxed">
            Medicina, enfermagem, nutrição, psicologia e educação física conectadas às prioridades do seu cuidado.
          </p>
        </Reveal>
        <ul className="mt-12 grid md:grid-cols-3 gap-5">
          {follow.map(([t, d], i) => (
            <Reveal as="li" key={t} delay={i * 100} className="bg-paper-2 border border-line p-7">
              <TulipMark className="h-8 w-6 opacity-90" />
              <h3 className="font-serif text-[1.45rem] leading-snug mt-5">{t}</h3>
              <p className="text-[0.9rem] text-ink-soft leading-relaxed mt-3">{d}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-20">
          <h3 className="h-display text-[clamp(1.8rem,3.6vw,2.6rem)]">
            Mais oportunidades <em>para acompanhar você.</em>
          </h3>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          <Reveal className="border border-line p-7 bg-paper">
            <h4 className="font-serif text-[1.5rem] leading-snug">Avaliação que complementa a escuta</h4>
            <ul className="mt-4 space-y-1.5 text-[0.9rem] text-ink-soft list-disc pl-5">
              <li>Bioimpedância</li>
              <li>Glicose / glicemia capilar</li>
              <li>Sinais vitais</li>
              <li>Antropometria: peso, medidas e avaliação corporal</li>
            </ul>
            <p className="text-[0.8rem] text-ink-soft mt-4">Realizados quando clinicamente adequados e tecnicamente viáveis.</p>
          </Reveal>
          <Reveal delay={100} className="border border-line p-7 bg-paper">
            <h4 className="font-serif text-[1.5rem] leading-snug">Proximidade que fortalece o cuidado</h4>
            <p className="text-[0.9rem] text-ink-soft mt-4 leading-relaxed">
              Encontros com pacientes e equipe para compartilhar orientações e conversar sobre saúde e qualidade de vida.
            </p>
            <p className="text-[0.8rem] text-ink-soft mt-4">Datas, locais e formato a definir.</p>
          </Reveal>
          <Reveal delay={200} className="border border-line p-7 bg-paper">
            <h4 className="font-serif text-[1.5rem] leading-snug">Pacientes e equipe no mesmo encontro</h4>
            <p className="text-[0.9rem] text-ink-soft mt-4 leading-relaxed">
              Momentos de educação em saúde, troca de orientações e conversa, com participação dos pacientes e da
              equipe.
            </p>
            <p className="text-[0.8rem] text-ink-soft mt-4">Calendário informado pela equipe.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
