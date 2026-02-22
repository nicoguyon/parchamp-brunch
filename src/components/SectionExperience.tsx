"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useIntersection(threshold = 0.12) {
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

export default function SectionExperience() {
  const { ref, visible } = useIntersection();

  return (
    <section id="experience" className="bg-[#2D4739] py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 md:px-16">

        {/* Header */}
        <div ref={ref} className="mb-20">
          <p className={`text-[#C5A572] text-xs tracking-[0.4em] uppercase mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Chaque dimanche
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-0 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            L&rsquo;Expérience
          </h2>
        </div>

        {/* Main text block */}
        <div className={`max-w-3xl mb-20 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed font-serif italic max-w-prose mx-auto">
            &ldquo;Le dimanche au Parchamp a une texture particulière. Quelque chose entre la lenteur choisie et la légèreté retrouvée. On arrive à deux, en famille, entre amis — et l&rsquo;on s&rsquo;installe comme si l&rsquo;on avait toujours su que cette table était la nôtre.&rdquo;
          </p>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {/* Image 2 — mezze */}
          <div
            className={`relative overflow-hidden rounded-2xl aspect-[4/3] transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <Image
              src="/images/parchamp-v2-2.webp"
              alt="Mezze levantins — Brunch du Parchamp"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <span className="absolute bottom-6 left-6 text-white text-xs tracking-[0.3em] uppercase">Mezze levantins</span>
          </div>

          {/* Image 3 — convivialité */}
          <div
            className={`relative overflow-hidden rounded-2xl aspect-[4/3] transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <Image
              src="/images/parchamp-v2-3.webp"
              alt="Convivialité — Brunch du Parchamp"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <span className="absolute bottom-6 left-6 text-white text-xs tracking-[0.3em] uppercase">La Table, cour intérieure</span>
          </div>
        </div>

        {/* Two text blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* La cour */}
          <div className={`transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="w-8 h-0.5 bg-[#C5A572] mb-6" />
            <h3 className="font-serif text-2xl text-white mb-4">La cour intérieure</h3>
            <p className="text-white/65 text-sm leading-relaxed max-w-prose mx-auto">
              Le restaurant La Table s&rsquo;ouvre sur une cour intérieure traversée de lumière naturelle. Sous les verrières, entre les boiseries sombres et les lustres en laiton antique, le brunch prend la forme d&rsquo;un interlude suspendu — là où l&rsquo;architecture moderniste de Boulogne-Billancourt dialogue avec une douceur de vivre méditerranéenne.
            </p>
          </div>

          {/* Ateliers enfants */}
          <div className={`transition-all duration-700 delay-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="w-8 h-0.5 bg-[#C65D3E] mb-6" />
            <h3 className="font-serif text-2xl text-white mb-4">Ateliers enfants</h3>
            <p className="text-white/65 text-sm leading-relaxed max-w-prose mx-auto">
              Pendant que le buffet vous attend, les enfants de 3 à 11 ans sont accueillis dans un espace dédié, encadrés par des animateurs qui transforment chaque dimanche en aventure créative. Dessins, modelage, histoires — une heure d&rsquo;imaginaire pendant que les adultes redécouvrent le plaisir de prendre leur temps à table.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
