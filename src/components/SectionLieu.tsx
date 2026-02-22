"use client";

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

const attrs = [
  { icon: "🏛️", label: "Architecture", value: "Moderniste" },
  { icon: "🏨", label: "Collection", value: "Tribute Portfolio" },
  { icon: "🍽️", label: "Restaurant", value: "La Table, RDC" },
  { icon: "🌆", label: "Rooftop", value: "Vue panoramique" },
];

export default function SectionLieu() {
  const { ref, visible } = useIntersection();

  return (
    <section id="lieu" className="py-24 md:py-36 lieu-animated-bg relative overflow-hidden">

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="lieu-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#lieu-noise)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-12 md:px-16 relative z-10">

        {/* Header */}
        <div ref={ref} className="mb-20">
          <p className={`text-[#C5A572] text-xs tracking-[0.4em] uppercase mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            114–116 route de la Reine · Boulogne-Billancourt
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl text-white transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Le Lieu
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">

          {/* Text */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Le Parchamp porte l&rsquo;héritage de Boulogne-Billancourt avec une certaine élégance discrète. Imaginé dans l&rsquo;esprit des maîtres du modernisme — Le Corbusier, Auguste Perret — cet hôtel Tribute Portfolio (Marriott) dessine une architecture de lignes franches, de matières nobles, et d&rsquo;espaces qui respirent.
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Au rez-de-chaussée, le restaurant La Table ouvre sur une cour intérieure baignée de lumière naturelle. Les verrières, les boiseries sombres, les lustres en laiton antique et les murs terracotta composent un cadre à la fois intime et généreux — le décor idéal pour que le dimanche prenne tout son sens.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              En étage, le Rooftop Bar révèle les toits de Boulogne-Billancourt et les contours lointains de Paris. Une autre manière de prolonger le dimanche — en hauteur, à l&rsquo;heure où la lumière change de nom.
            </p>

            {/* Attributes with icons */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {attrs.map((attr, i) => (
                <div
                  key={attr.label}
                  className="border-l-2 border-[#C5A572] pl-4 transition-all duration-500"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(16px)",
                    transitionDelay: visible ? `${0.4 + i * 0.1}s` : "0s",
                  }}
                >
                  <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-1 flex items-center gap-1.5">
                    <span>{attr.icon}</span>
                    {attr.label}
                  </p>
                  <p className="text-white text-sm">{attr.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Map embed — dark styled */}
          <div className={`transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="w-full h-80 md:h-full min-h-[400px] overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.0!2d2.23777!3d48.83702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6706af4a93f11%3A0x8d5c5c33b0e77d55!2sLe%20Parchamp%2C%20a%20Tribute%20Portfolio%20Hotel!5e0!3m2!1sfr!2sfr!4v1708000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(100%) invert(95%) contrast(85%) hue-rotate(180deg) brightness(0.85)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte Hôtel Le Parchamp"
              />
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <span className="text-[#C5A572] text-sm mt-0.5">📍</span>
                <div>
                  <p className="text-white text-sm">114–116 Route de la Reine</p>
                  <p className="text-white/50 text-xs">92100 Boulogne-Billancourt</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#C5A572] text-sm">📞</span>
                <a href="tel:+33181890680" className="text-white/75 hover:text-white text-sm transition-colors">
                  +33 1 81 89 06 80
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#C5A572] text-sm">🚇</span>
                <p className="text-white/50 text-xs">Métro : Boulogne — Jean Jaurès (L10) · Bus 72</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
