import { Reveal } from "./Reveal";

const pillars = [
  ["Mente", "Emoções, sono e estresse.", "border-lilac"],
  ["Corpo", "Metabolismo, nutrição e movimento.", "border-olive"],
  ["Hormônios", "Avaliação clínica e acompanhamento das alterações identificadas.", "border-gold"],
];

const problems = [
  ["Peso & metabolismo", "Sobrepeso, obesidade, dificuldade para emagrecer, resistência insulínica, diabetes e recomposição corporal."],
  ["Mulher 40+", "Pré-menopausa, transição menopausal, climatério e menopausa, com investigação de alterações hormonais e acompanhamento dos sintomas."],
  ["Saúde do homem 40+", "Avaliação da saúde, das queixas e das necessidades próprias dessa fase, com atenção à prevenção e à qualidade de vida."],
  ["Saúde emocional & sono", "Ansiedade, insônia e estresse, com avaliação clínica e articulação com psicologia e saúde mental quando indicado."],
  ["Dor, ossos & movimento", "Dores, queixas osteomusculares e orientação de movimento, respeitando a avaliação e as necessidades individuais."],
  ["Doenças crônicas", "Hipertensão, tireoide e outras condições crônicas, com foco em prevenção e acompanhamento contínuo."],
];

const results = [
  ["Emagrecimento saudável", "Buscar uma evolução sustentável do peso e da composição corporal, quando indicado, com atenção à alimentação e ao movimento."],
  ["Saúde hormonal", "Investigar alterações, acompanhar sintomas e definir a conduta adequada à sua fase de vida e às necessidades clínicas."],
  ["Suplementação de vitaminas", "Identificar deficiências e orientar a suplementação somente quando houver indicação, com acompanhamento da resposta."],
  ["Longevidade & qualidade de vida", "Promover hábitos de cuidado, bem-estar, autonomia e envelhecimento saudável com perspectiva de longo prazo."],
];

export function Program() {
  return (
    <>
      <section id="programa" className="bg-paper-2 border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-24">
          <Reveal>
            <h2 className="h-display text-[clamp(2.2rem,5vw,3.8rem)]">
              Um olhar para a mente, o corpo <em>e os hormônios.</em>
            </h2>
            <p className="mt-7 text-[1.04rem] leading-[1.75] text-ink-soft max-w-lg">
              No Mente, Corpo e Hormônios, medicina integrada significa organizar o cuidado de forma conjunta:
              compreender a saúde física, a rotina, os aspectos emocionais e as necessidades hormonais de cada pessoa.
            </p>
            <ul className="mt-8 space-y-5">
              {pillars.map(([t, d, c]) => (
                <li key={t} className={`border-l-[3px] ${c} pl-5`}>
                  <p className="font-serif text-2xl">{t}</p>
                  <p className="text-[0.92rem] text-ink-soft mt-1">{d}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150} className="lg:pt-24">
            <p className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] leading-snug">
              Um programa de 4 ou 6 meses para acompanhar sua saúde com continuidade e participação de uma equipe
              multiprofissional.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {["Adultos 18+", "Mulheres", "Homens", "Idosos"].map((t) => (
                <span key={t} className="border border-line bg-card px-3.5 py-1.5 text-[0.8rem] rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-6 text-[0.88rem] text-ink-soft leading-relaxed max-w-md">
              A partir de 18 anos, com atenção às diferentes fases da vida e às necessidades de cada pessoa.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="acompanhamento" className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <Reveal>
          <h2 className="h-display text-[clamp(2rem,4.2vw,3.1rem)] max-w-2xl">Quais problemas ajudamos a cuidar?</h2>
        </Reveal>
        <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {problems.map(([t, d], i) => (
            <Reveal as="li" key={t} delay={(i % 3) * 90} className="border-t border-ink/25 pt-5">
              <h3 className="font-serif text-[1.6rem] leading-tight">{t}</h3>
              <p className="text-[0.92rem] text-ink-soft leading-relaxed mt-3">{d}</p>
            </Reveal>
          ))}
        </ol>
        <p className="mt-10 text-[0.82rem] text-ink-soft border-l-2 border-gold/50 pl-4 max-w-2xl">
          O plano de cuidado e os encaminhamentos são definidos após avaliação. A participação no programa pode ser
          articulada aos profissionais que já acompanham você.
        </p>
      </section>

      <section className="on-dark relative bg-cocoa text-paper grain overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 lg:py-28">
          <Reveal>
            <h2 className="h-display text-[clamp(2.2rem,5vw,3.8rem)] max-w-3xl">
              Metas para sua saúde. <em>Construídas com você.</em>
            </h2>
            <p className="mt-6 text-paper/75 max-w-xl leading-relaxed">
              Objetivos individualizados, revistos ao longo do acompanhamento conforme sua evolução.
            </p>
          </Reveal>
          <ol className="mt-14 grid sm:grid-cols-2 gap-x-14 gap-y-12">
            {results.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={(i % 2) * 100} className="border-t border-paper/25 pt-5">
                <h3 className="font-serif text-[1.9rem] leading-tight">{t}</h3>
                <p className="text-paper/70 text-[0.95rem] leading-relaxed mt-3 max-w-md">{d}</p>
              </Reveal>
            ))}
          </ol>
          <p className="mt-14 pt-6 border-t border-paper/20 text-[0.8rem] text-paper/60 max-w-3xl leading-relaxed">
            Os resultados variam entre pessoas. Não há garantia de perda de peso, normalização hormonal ou aumento do
            tempo de vida. Medicamentos e suplementos não estão incluídos nos valores do programa.
          </p>
        </div>
      </section>
    </>
  );
}
