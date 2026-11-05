import { Reveal } from "./Reveal";
import { TEAM } from "@/lib/site";

export function Equipe() {
  return (
    <section id="equipe" className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
      <Reveal className="on-dark rounded-[28px] bg-cocoa px-7 py-8 text-paper sm:px-10">
        <p className="eyebrow text-gold-light">Equipe do programa</p>
        <ul className="mt-5 grid gap-6 sm:grid-cols-3">
          {TEAM.map(([n, r]) => (
            <li key={n}>
              <p className="font-serif text-[1.45rem] leading-tight">{n}</p>
              <p className="mt-1 text-[0.88rem] text-paper/75">{r}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
