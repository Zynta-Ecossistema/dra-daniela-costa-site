"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/img/dra-consultorio.webp", pos: "50% 22%", alt: "Dra. Daniela Costa em pé no consultório, ao lado da mesa" },
  { src: "/img/dra-luz.webp", pos: "50% 25%", alt: "Dra. Daniela Costa sorrindo, de braços cruzados, em ambiente claro" },
  { src: "/img/dra-mesa.webp", pos: "50% 28%", alt: "Dra. Daniela Costa sentada à mesa do consultório" },
  { src: "/img/dra-sofa.webp", pos: "62% 24%", alt: "Dra. Daniela Costa sentada no sofá" },
];

const INTERVAL = 6000;

export function HeroBackdrop() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), INTERVAL);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="hero-photo absolute inset-x-0 top-0 h-[470px] lg:inset-x-auto lg:right-0 lg:h-full lg:w-[62%]">
      {slides.map((s, n) => (
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
      ))}
    </div>
  );
}
