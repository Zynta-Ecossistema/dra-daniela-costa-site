"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/img/dra-jardim-renda.webp", pos: "50% 6%", alt: "Dra. Daniela Costa sorrindo, de vestido claro de renda, em um jardim com flores" },
  { src: "/img/dra-cafe.webp", pos: "50% 10%", alt: "Dra. Daniela Costa sorrindo, de terno azul-marinho, tomando café" },
  { src: "/img/dra-jardim-rosa.webp", pos: "50% 6%", alt: "Dra. Daniela Costa sorrindo, de vestido rosa, em um jardim com flores" },
  { src: "/img/dra-consultorio.webp", pos: "50% 22%", alt: "Dra. Daniela Costa em pé no consultório, ao lado da mesa" },
  { src: "/img/dra-escritorio.webp", pos: "50% 30%", alt: "Dra. Daniela Costa sorrindo, de blusa de renda, trabalhando no consultório" },
];

const INTERVAL = 6500;

export function HeroBackdrop() {
  // t conta as trocas; a foto atual é t % total. Só monta o que já apareceu e a próxima,
  // para não baixar as 5 fotos de uma vez.
  const [t, setT] = useState(0);
  const i = t % slides.length;

  useEffect(() => {
    const id = setInterval(() => setT((v) => v + 1), INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-photo absolute inset-x-0 top-0 h-[470px] lg:inset-x-auto lg:right-0 lg:h-full lg:w-[62%]">
      {slides.map((s, n) => {
        const mounted = t + 1 >= slides.length || n <= t + 1;
        if (!mounted) return null;
        return (
          <Image
            key={s.src}
            src={s.src}
            alt={n === i ? s.alt : ""}
            fill
            priority={n === 0}
            sizes="(min-width:1024px) 62vw, 100vw"
            className="object-cover transition-opacity duration-[1600ms] ease-in-out"
            style={{ objectPosition: s.pos, opacity: n === i ? 1 : 0 }}
          />
        );
      })}
    </div>
  );
}
