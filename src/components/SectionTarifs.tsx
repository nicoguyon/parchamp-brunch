"use client";

import { useEffect, useRef, useState } from "react";

function useIntersection(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const tarifs = [
  {
    label: "Adulte",
    price: "44",
    unit: "€",
    desc: "Tout le dimanche qu'il vous faut.",
    detail: "Buffet complet à volonté",
    color: "terracotta",
    highlight: true,
  },
  {
    label: "Enfant",
    price: "19",
    unit: "€",
    desc: "Les moins de 3 ans sont nos invités.",
    detail: "Brunch + animations inclus",
    color: "brass",
    highlight: false,
  },
  {
    label: "Atelier seul",
    price: "+10",
    unit: "€",
    desc: "Une heure d'imaginaire pendant que le buffet vous attend.",
    detail: "Animations créatives 3–11 ans",
    color: "forest",
    highlight: false,
  },
];

export default function SectionTarifs() {
  const { ref, visible } = useIntersection();

  return (
    <section id="tarifs" className="py-24 md:py-36 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-8 md:px-12">

        {/* Header */}
        <div ref={ref} className="text-center mb-20">
          <p className={`text-[#C65D3E] text-xs tracking-[0.4em] uppercase mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Dimanche 12h – 15h
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Tarifs
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {tarifs.map((t, i) => (
            <div
              key={t.label}
              className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${0.15 + i * 0.15}s` }}
            >
              <div className={`relative h-full flex flex-col p-10 border ${
                t.highlight
                  ? "bg-[#C65D3E] border-[#C65D3E] text-white"
                  : "bg-white border-stone-100 text-[#1A1A1A] hover:border-stone-200 hover:shadow-lg"
              } transition-all duration-300`}>

                {t.highlight && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 bg-[#C5A572] text-white text-[10px] tracking-[0.2em] uppercase px-4 py-1.5">
                    Le plus populaire
                  </span>
                )}

                <div className="mb-6">
                  <p className={`text-xs tracking-[0.3em] uppercase mb-2 ${t.highlight ? "text-white/70" : "text-stone-400"}`}>
                    {t.label}
                  </p>
                  <div className="flex items-end gap-1">
                    <span className={`font-serif text-6xl font-medium leading-none ${t.highlight ? "text-white" : "text-[#1A1A1A]"}`}>
                      {t.price}
                    </span>
                    <span className={`font-serif text-3xl mb-1 ${t.highlight ? "text-white/80" : "text-stone-400"}`}>
                      {t.unit}
                    </span>
                  </div>
                </div>

                <div className={`w-8 h-px mb-6 ${t.highlight ? "bg-white/40" : "bg-[#C5A572]"}`} />

                <p className={`text-sm font-light leading-relaxed mb-4 flex-1 ${t.highlight ? "text-white/85" : "text-stone-600"}`}>
                  {t.desc}
                </p>

                <p className={`text-xs tracking-wide ${t.highlight ? "text-white/60" : "text-stone-400"}`}>
                  {t.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div className={`text-center transition-all duration-700 delay-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-stone-500 text-base font-light mb-8 font-serif italic">
            Les dimanches se réservent — et celui-ci aussi.
          </p>
          <a
            href="https://www.leparchamp.com/eat-drink"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2D4739] hover:bg-[#1E3027] text-white text-sm tracking-[0.25em] uppercase px-12 py-5 transition-all duration-300 hover:shadow-xl"
          >
            Réserver une table
          </a>
          <p className="mt-6 text-stone-400 text-xs tracking-widest uppercase">
            leparchamp.com/eat-drink
          </p>
        </div>
      </div>
    </section>
  );
}
