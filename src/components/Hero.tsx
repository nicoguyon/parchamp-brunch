"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[700px] flex items-end overflow-hidden"
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <Image
          src="/images/parchamp-v2-1.webp"
          alt="Brunch du Dimanche — Le Parchamp"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-12 md:px-16 py-6">
        <a
          href="https://www.leparchamp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white text-sm tracking-[0.2em] uppercase font-light transition-colors"
        >
          Le Parchamp
        </a>
        <a
          href="https://www.leparchamp.com/eat-drink"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block border border-white/40 hover:border-white text-white text-sm tracking-[0.15em] uppercase px-5 py-2.5 transition-all hover:bg-white/10"
        >
          Réserver
        </a>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 w-full px-12 md:px-16 lg:px-24 pb-20 md:pb-28">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="text-brass-light text-sm tracking-[0.35em] uppercase mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Tous les dimanches · 12h – 15h
          </p>

          {/* Main title */}
          <h1
            className="text-white font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Le dimanche<br />
            <em className="text-[#C5A572] not-italic">a une adresse.</em>
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/75 text-lg md:text-xl font-light leading-relaxed max-w-2xl opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}
          >
            Chaque semaine, de 12h à 15h, Le Parchamp ouvre sa cour au temps qui passe —<br className="hidden md:block" />
            lentement, généreusement, les sens en éveil.
          </p>

          {/* CTA */}
          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.85s", animationFillMode: "forwards" }}
          >
            <a
              href="https://www.leparchamp.com/eat-drink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C65D3E] hover:bg-[#A84B30] text-white text-sm tracking-[0.2em] uppercase px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-terracotta/30"
            >
              Réserver une table
            </a>
            <a
              href="#brunch"
              className="inline-block border border-white/40 hover:border-white text-white text-sm tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover:bg-white/10"
            >
              Découvrir le buffet
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-2 opacity-60">
        <span className="text-white text-xs tracking-[0.2em] uppercase rotate-90 origin-center translate-y-4">
          Scroll
        </span>
        <div className="w-px h-12 bg-white/40 overflow-hidden">
          <div className="w-full h-full bg-white animate-pulse" />
        </div>
      </div>
    </section>
  );
}
