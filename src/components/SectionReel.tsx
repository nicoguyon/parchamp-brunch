"use client";

import { useEffect, useRef, useState } from "react";

function useIntersection(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function SectionReel() {
  const { ref, visible } = useIntersection();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  // Auto-play when section becomes visible
  useEffect(() => {
    if (visible && videoRef.current) {
      videoRef.current.play().catch(() => {});
      setPlaying(true);
    }
  }, [visible]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section
      id="reel"
      className="bg-[#0F0F0F] py-24 md:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={ref} className="mb-16 md:mb-20">
          <p
            className={`text-[#C5A572] text-xs tracking-[0.4em] uppercase mb-4 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Le Parchamp en images
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl text-white transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Un dimanche au{" "}
            <em className="text-[#C5A572] not-italic">Parchamp</em>
          </h2>
        </div>

        {/* Cinematic layout: text left + video right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: descriptive text */}
          <div
            className={`flex-1 max-w-lg transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="w-8 h-0.5 bg-[#C5A572] mb-8" />
            <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed font-serif italic mb-8">
              &ldquo;Quelques secondes pour ressentir ce que les mots peinent à décrire — la lumière du dimanche, la générosité du buffet, le rire des enfants dans la cour.&rdquo;
            </p>
            <p className="text-white/50 text-sm leading-relaxed mb-12">
              Chaque semaine, Le Parchamp écrit la même histoire — différemment. Voici comment elle ressemble de l&rsquo;intérieur.
            </p>

            {/* CTA */}
            <a
              href="https://www.leparchamp.com/eat-drink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C65D3E] hover:bg-[#A84B30] text-white text-sm tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-[#C65D3E]/30"
            >
              Réserver une table
            </a>
          </div>

          {/* Right: portrait video */}
          <div
            className={`flex-shrink-0 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative group" style={{ width: "min(360px, 80vw)" }}>
              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-[#C5A572]/60 z-10 pointer-events-none" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t border-r border-[#C5A572]/60 z-10 pointer-events-none" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b border-l border-[#C5A572]/60 z-10 pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-[#C5A572]/60 z-10 pointer-events-none" />

              {/* Video container */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "9/16" }}>
                <video
                  ref={videoRef}
                  src="/videos/parchamp-brunch-reel.mp4"
                  loop
                  muted
                  playsInline
                  autoPlay
                  poster="/images/parchamp-v2-1.webp"
                  className="w-full h-full object-cover"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                {/* Play/pause overlay (click on video) */}
                <button
                  onClick={togglePlay}
                  aria-label={playing ? "Pause" : "Lecture"}
                  className="absolute inset-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
                >
                  <div className="bg-black/40 backdrop-blur-sm rounded-full p-4 border border-white/30">
                    {playing ? (
                      /* Pause icon */
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <rect x="5" y="4" width="4" height="16" rx="1" />
                        <rect x="15" y="4" width="4" height="16" rx="1" />
                      </svg>
                    ) : (
                      /* Play icon */
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5.14v14l11-7-11-7z" />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Bottom controls bar */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white/70 text-xs tracking-widest uppercase">
                    Le Parchamp
                  </span>
                  {/* Mute toggle */}
                  <button
                    onClick={toggleMute}
                    aria-label={muted ? "Activer le son" : "Couper le son"}
                    className="text-white/70 hover:text-white transition-colors focus:outline-none"
                  >
                    {muted ? (
                      /* Muted icon */
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                      </svg>
                    ) : (
                      /* Unmuted icon */
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
