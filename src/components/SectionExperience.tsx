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

// Decorative ornamental separator
function OrnamentDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-10">
      <div className="h-px flex-1 max-w-[120px] bg-[#C5A572]/30" />
      <span className="text-[#C5A572] text-base tracking-widest select-none">✦</span>
      <div className="h-px flex-1 max-w-[120px] bg-[#C5A572]/30" />
    </div>
  );
}

// Scroll-zoom image with parallax scale
function ScrollZoomImage({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}) {
  const imgRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1.0);

  useEffect(() => {
    const onScroll = () => {
      const el = imgRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      // progress: 0 (entering from bottom) → 1 (exiting at top)
      const progress = 1 - (rect.bottom / (viewH + rect.height));
      const s = 1.0 + Math.min(Math.max(progress, 0), 1) * 0.05;
      setScale(s);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={imgRef} className={`relative overflow-hidden rounded-2xl aspect-[4/3] ${className}`}>
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `scale(${scale})`, transition: "transform 0.1s linear" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <span className="absolute bottom-6 left-6 text-white text-xs tracking-[0.3em] uppercase z-10">
        {caption}
      </span>
    </div>
  );
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

        {/* Main quote block — giant brass guillemets */}
        <div className={`max-w-3xl mb-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative">
            {/* Opening « */}
            <span
              className="absolute -top-8 -left-4 font-serif text-[#C5A572] leading-none select-none pointer-events-none"
              style={{ fontSize: "clamp(5rem, 12vw, 9rem)", opacity: 0.55, lineHeight: 1 }}
              aria-hidden="true"
            >
              «
            </span>
            <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed font-serif italic relative z-10 pl-8 md:pl-12">
              Le dimanche au Parchamp a une texture particulière. Quelque chose entre la lenteur choisie et la légèreté retrouvée. On arrive à deux, en famille, entre amis — et l&rsquo;on s&rsquo;installe comme si l&rsquo;on avait toujours su que cette table était la nôtre.
            </p>
            {/* Closing » */}
            <span
              className="block text-right font-serif text-[#C5A572] leading-none select-none pointer-events-none"
              style={{ fontSize: "clamp(5rem, 12vw, 9rem)", opacity: 0.55, lineHeight: 0.6 }}
              aria-hidden="true"
            >
              »
            </span>
          </div>
        </div>

        {/* Ornament divider */}
        <div className={`transition-all duration-700 delay-250 ${visible ? "opacity-100" : "opacity-0"}`}>
          <OrnamentDivider />
        </div>

        {/* Image grid with scroll-zoom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <ScrollZoomImage
              src="/images/parchamp-v2-2.webp"
              alt="Mezze levantins — Brunch du Parchamp"
              caption="Mezze levantins"
            />
          </div>
          <div className={`transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <ScrollZoomImage
              src="/images/parchamp-v2-3.webp"
              alt="Convivialité — Brunch du Parchamp"
              caption="La Table, cour intérieure"
            />
          </div>
        </div>

        {/* Ornament divider before text blocks */}
        <div className={`transition-all duration-700 delay-450 ${visible ? "opacity-100" : "opacity-0"}`}>
          <OrnamentDivider />
        </div>

        {/* Two text blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div className={`transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="w-8 h-0.5 bg-[#C5A572] mb-6" />
            <h3 className="font-serif text-2xl text-white mb-4">La cour intérieure</h3>
            <p className="text-white/65 text-sm leading-relaxed">
              Le restaurant La Table s&rsquo;ouvre sur une cour intérieure traversée de lumière naturelle. Sous les verrières, entre les boiseries sombres et les lustres en laiton antique, le brunch prend la forme d&rsquo;un interlude suspendu — là où l&rsquo;architecture moderniste de Boulogne-Billancourt dialogue avec une douceur de vivre méditerranéenne.
            </p>
          </div>

          <div className={`transition-all duration-700 delay-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="w-8 h-0.5 bg-[#C65D3E] mb-6" />
            <h3 className="font-serif text-2xl text-white mb-4">Ateliers enfants</h3>
            <p className="text-white/65 text-sm leading-relaxed">
              Pendant que le buffet vous attend, les enfants de 3 à 11 ans sont accueillis dans un espace dédié, encadrés par des animateurs qui transforment chaque dimanche en aventure créative. Dessins, modelage, histoires — une heure d&rsquo;imaginaire pendant que les adultes redécouvrent le plaisir de prendre leur temps à table.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
