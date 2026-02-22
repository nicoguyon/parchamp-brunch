"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// ─── Word-by-word animated reveal ───────────────────────────────────────────
function WordReveal({
  text,
  className,
  baseDelay = 0,
  delayPerWord = 0.075,
}: {
  text: string;
  className?: string;
  baseDelay?: number;
  delayPerWord?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block animate-word-reveal opacity-0"
          style={{
            animationDelay: `${baseDelay + i * delayPerWord}s`,
            animationFillMode: "forwards",
          }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}

// ─── Grain SVG overlay ──────────────────────────────────────────────────────
function GrainOverlay() {
  return (
    <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.038]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="hero-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.68"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-noise)" />
      </svg>
    </div>
  );
}

// ─── Animated arrow scroll indicator ────────────────────────────────────────
function ScrollArrow() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70">
      <span className="text-white text-[10px] tracking-[0.3em] uppercase mb-1">
        Scroll
      </span>
      <div className="relative w-5 h-5">
        <span
          className="animate-arrow-bounce block w-3 h-3 border-r-2 border-b-2 border-white"
          style={{ transform: "rotate(45deg)" }}
        />
      </div>
    </div>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────
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
        {/* Rich gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
        {/* Subtle left vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>

      {/* Grain texture */}
      <GrainOverlay />

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
      <div className="relative z-10 w-full px-12 md:px-16 lg:px-24 pb-24 md:pb-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p
            className="text-[#C5A572] text-sm tracking-[0.35em] uppercase mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            Tous les dimanches · 12h – 15h
          </p>

          {/* Main title — word by word */}
          <h1 className="text-white font-serif text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.05] mb-6">
            <WordReveal
              text="Le dimanche"
              baseDelay={0.35}
              delayPerWord={0.1}
            />
            <br />
            <em
              className="not-italic text-[#C5A572]"
              aria-label="a une adresse."
            >
              {["a", "une", "adresse."].map((word, i) => (
                <span
                  key={i}
                  className="inline-block animate-word-reveal opacity-0"
                  style={{
                    animationDelay: `${0.55 + i * 0.1}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  {word}
                  {i < 2 ? "\u00A0" : ""}
                </span>
              ))}
            </em>
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/75 text-lg md:text-xl font-light leading-relaxed max-w-2xl opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
          >
            Chaque semaine, de 12h à 15h, Le Parchamp ouvre sa cour au temps qui passe —
            <br className="hidden md:block" />
            lentement, généreusement, les sens en éveil.
          </p>

          {/* CTA */}
          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}
          >
            <a
              href="https://www.leparchamp.com/eat-drink"
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn inline-block bg-[#C65D3E] hover:bg-[#A84B30] text-white text-sm tracking-[0.2em] uppercase px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#C65D3E]/30"
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

      {/* Animated scroll arrow */}
      <ScrollArrow />
    </section>
  );
}
