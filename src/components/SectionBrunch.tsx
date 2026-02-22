"use client";

import { useEffect, useRef, useState } from "react";

const columns = [
  {
    icon: "◈",
    label: "Salé",
    color: "terracotta",
    border: "border-[#C65D3E]",
    accent: "text-[#C65D3E]",
    bg: "bg-[#C65D3E]",
    items: [
      "Houmous nacré & falafels",
      "Mezze levantins",
      "Antipasti à l'huile d'olive",
      "Œufs mimosa fondants",
      "Croque-monsieur",
      "Ratatouille mijotée",
      "Riz pilaf",
      "Rôti de volaille doré, découpé à la minute",
    ],
    text: "Houmous nacré, falafels croustillants à cœur, mezze qui s'enchaînent sans qu'on sache vraiment comment. Il y a de l'antipasti qui sent l'huile d'olive et l'été, des œufs mimosa fondants, un croque-monsieur qui rappelle les bonnes adresses de quartier — et, au centre du buffet, un rôti de volaille doré à point, découpé à la minute.",
  },
  {
    icon: "◇",
    label: "Sucré",
    color: "brass",
    border: "border-[#C5A572]",
    accent: "text-[#C5A572]",
    bg: "bg-[#C5A572]",
    items: [
      "Viennoiseries du four",
      "Crèmes brûlées caramélisées",
      "Moelleux au chocolat",
      "Fruits de saison",
    ],
    text: "La viennoiserie sort du four. Les crèmes brûlées attendent sous leur fine croûte de sucre caramélisé, à peine craquelée. Le moelleux au chocolat ne se justifie pas — il se vit.",
  },
  {
    icon: "◉",
    label: "Boissons",
    color: "forest",
    border: "border-[#2D4739]",
    accent: "text-[#2D4739]",
    bg: "bg-[#2D4739]",
    items: [
      "Jus de fruits pressés",
      "Café serré ou allongé",
      "Thés sélectionnés",
      "Eau pétillante maison",
      "Cocktails signature au bar",
    ],
    text: "Jus pressés, café serré ou allongé à discrétion, thés sélectionnés, eau pétillante de la maison.",
  },
];

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

export default function SectionBrunch() {
  const { ref, visible } = useIntersection();

  return (
    <section id="brunch" className="py-24 md:py-32 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div ref={ref} className="text-center mb-20">
          <p className={`text-[#C65D3E] text-xs tracking-[0.4em] uppercase mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Buffet à volonté
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-6 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Le Brunch
          </h2>
          <div className={`w-16 h-px bg-[#C5A572] mx-auto transition-all duration-700 delay-200 ${visible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {columns.map((col, i) => (
            <div
              key={col.label}
              className={`group transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${0.15 + i * 0.15}s` }}
            >
              <div className="bg-white border border-stone-100 p-8 md:p-10 h-full flex flex-col hover:shadow-xl hover:shadow-stone-100 transition-shadow duration-500">
                {/* Column header */}
                <div className="mb-8">
                  <span className={`${col.accent} text-2xl mb-4 block`}>{col.icon}</span>
                  <h3 className={`font-serif text-3xl text-[#1A1A1A] mb-4`}>{col.label}</h3>
                  <div className={`w-8 h-0.5 ${col.bg}`} />
                </div>

                {/* Description */}
                <p className="text-stone-600 text-sm leading-relaxed mb-8 flex-1">
                  {col.text}
                </p>

                {/* Items list */}
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-stone-700">
                      <span className={`${col.accent} mt-0.5 text-xs`}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className={`text-center mt-16 text-stone-400 text-xs tracking-[0.25em] uppercase transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}>
          Produits locaux · Bio · Circuit court
        </p>
      </div>
    </section>
  );
}
