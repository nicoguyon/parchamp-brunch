"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const quoteWords =
  "On s'était promis de ne prendre qu'un dessert. La crème brûlée arrive, avec son craquement net sous la cuillère.".split(
    " "
  );

// Word-by-word fade with stagger
function WordFadeQuote({ visible }: { visible: boolean }) {
  return (
    <p className="font-serif text-white text-2xl md:text-3xl lg:text-4xl font-light italic leading-relaxed">
      {quoteWords.map((word, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-500"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(10px)",
            transitionDelay: visible ? `${0.05 + i * 0.055}s` : "0s",
          }}
        >
          {word}
          {i < quoteWords.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
}

export default function SectionDesserts() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionTop, setSectionTop] = useState(0);
  const [visible, setVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (sectionRef.current) setSectionTop(sectionRef.current.offsetTop);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const parallaxOffset = (scrollY - sectionTop + 600) * 0.25;

  return (
    <section
      ref={sectionRef}
      id="desserts"
      className="relative h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${parallaxOffset}px) scale(1.15)` }}
      >
        <Image
          src="/images/parchamp-v2-4.webp"
          alt="Desserts — Brunch du Parchamp"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Sophisticated multi-stop gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,6,4,0.90) 0%, rgba(30,14,8,0.75) 30%, rgba(45,20,10,0.45) 60%, rgba(15,8,4,0.30) 80%, rgba(0,0,0,0.15) 100%)",
        }}
      />
      {/* Additional radial vignette at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.50) 100%)",
        }}
      />

      {/* Quote */}
      <div
        ref={textRef}
        className={`relative z-10 text-center px-12 max-w-3xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Big brass opening quote mark */}
        <span
          className="font-serif text-[#C5A572] block mb-4 leading-none select-none"
          style={{ fontSize: "4rem", opacity: 0.8 }}
          aria-hidden="true"
        >
          «
        </span>

        <WordFadeQuote visible={visible} />

        {/* Closing */}
        <span
          className="font-serif text-[#C5A572] block mt-4 leading-none select-none"
          style={{ fontSize: "4rem", opacity: 0.8 }}
          aria-hidden="true"
        >
          »
        </span>

        {/* Ornament */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-[#C5A572]/60" />
          <span className="text-[#C5A572] text-xs">✦</span>
          <div className="h-px w-12 bg-[#C5A572]/60" />
        </div>
        <p className="text-white/50 text-xs tracking-[0.3em] uppercase mt-4">Le sucré du brunch</p>
      </div>
    </section>
  );
}
