"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function SectionDesserts() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionTop, setSectionTop] = useState(0);
  const [visible, setVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (sectionRef.current) {
        setSectionTop(sectionRef.current.offsetTop);
      }
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
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Quote */}
      <div
        ref={textRef}
        className={`relative z-10 text-center px-6 max-w-3xl mx-auto transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <span className="text-[#C5A572] text-4xl font-serif leading-none block mb-6">&ldquo;</span>
        <p className="font-serif text-white text-2xl md:text-3xl lg:text-4xl font-light italic leading-relaxed">
          On s&rsquo;était promis de ne prendre qu&rsquo;un dessert. La crème brûlée arrive, avec son craquement net sous la cuillère.
        </p>
        <span className="text-[#C5A572] text-4xl font-serif leading-none block mt-4">&rdquo;</span>
        <div className="mt-8 w-12 h-px bg-[#C5A572] mx-auto" />
        <p className="text-white/50 text-xs tracking-[0.3em] uppercase mt-4">Le sucré du brunch</p>
      </div>
    </section>
  );
}
