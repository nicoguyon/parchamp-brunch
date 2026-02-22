"use client";

import { useEffect, useRef, useState } from "react";

const columns = [
  {
    num: "01",
    icon: "◈",
    label: "Salé",
    color: "terracotta",
    border: "border-[#C65D3E]",
    accent: "text-[#C65D3E]",
    bg: "bg-[#C65D3E]",
    hoverGradient: "hover:bg-gradient-to-br hover:from-white hover:to-[#C65D3E]/6",
    glowColor: "rgba(198,93,62,0.12)",
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
    num: "02",
    icon: "◇",
    label: "Sucré",
    color: "brass",
    border: "border-[#C5A572]",
    accent: "text-[#C5A572]",
    bg: "bg-[#C5A572]",
    hoverGradient: "hover:bg-gradient-to-br hover:from-white hover:to-[#C5A572]/6",
    glowColor: "rgba(197,165,114,0.12)",
    items: [
      "Viennoiseries du four",
      "Crèmes brûlées caramélisées",
      "Moelleux au chocolat",
      "Fruits de saison",
    ],
    text: "La viennoiserie sort du four. Les crèmes brûlées attendent sous leur fine croûte de sucre caramélisé, à peine craquelée. Le moelleux au chocolat ne se justifie pas — il se vit.",
  },
  {
    num: "03",
    icon: "◉",
    label: "Boissons",
    color: "forest",
    border: "border-[#2D4739]",
    accent: "text-[#2D4739]",
    bg: "bg-[#2D4739]",
    hoverGradient: "hover:bg-gradient-to-br hover:from-white hover:to-[#2D4739]/6",
    glowColor: "rgba(45,71,57,0.10)",
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

function useIntersection(threshold = 0.1) {
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

// Stagger-reveals each list item when the card becomes visible
function AnimatedList({
  items,
  accentClass,
  cardVisible,
  baseDelay,
}: {
  items: string[];
  accentClass: string;
  cardVisible: boolean;
  baseDelay: number;
}) {
  return (
    <ul className="space-y-2.5 mt-auto">
      {items.map((item, i) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm text-stone-700 transition-all duration-500"
          style={{
            opacity: cardVisible ? 1 : 0,
            transform: cardVisible ? "translateY(0)" : "translateY(12px)",
            transitionDelay: cardVisible ? `${baseDelay + i * 0.07}s` : "0s",
          }}
        >
          <span className={`${accentClass} mt-0.5 text-xs`}>—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SectionBrunch() {
  const { ref, visible } = useIntersection();

  return (
    <section id="brunch" className="py-24 md:py-32 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-12 md:px-16">

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
              <div
                className={`relative bg-white border border-stone-100 rounded-2xl p-10 md:p-12 h-full flex flex-col transition-all duration-500 ${col.hoverGradient} hover:border-stone-200 overflow-hidden`}
                style={{
                  // Gradient glow shadow on hover
                  transition: "box-shadow 0.4s ease, background 0.4s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px ${col.glowColor}, 0 4px 16px rgba(0,0,0,0.06)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                }}
              >
                {/* Watermark number */}
                <span
                  className="absolute top-4 right-4 font-serif font-bold text-[#1A1A1A] select-none pointer-events-none leading-none"
                  style={{ fontSize: "clamp(5rem, 10vw, 8rem)", opacity: 0.04 }}
                  aria-hidden="true"
                >
                  {col.num}
                </span>

                {/* Column header */}
                <div className="mb-8 relative z-10">
                  <span className={`${col.accent} text-2xl mb-4 block`}>{col.icon}</span>
                  <h3 className="font-serif text-3xl text-[#1A1A1A] mb-4">{col.label}</h3>
                  <div className={`w-8 h-0.5 ${col.bg}`} />
                </div>

                {/* Description */}
                <p className="text-stone-600 text-sm leading-relaxed mb-8 flex-1 relative z-10">
                  {col.text}
                </p>

                {/* Stagger-animated items list */}
                <div className="relative z-10">
                  <AnimatedList
                    items={col.items}
                    accentClass={col.accent}
                    cardVisible={visible}
                    baseDelay={0.3 + i * 0.15}
                  />
                </div>
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
