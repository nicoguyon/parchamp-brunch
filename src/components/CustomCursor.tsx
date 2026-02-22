"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    // Only on desktop
    const mq = window.matchMedia("(max-width: 768px)");
    if (mq.matches) return;

    const ring = document.getElementById("custom-cursor-ring");
    const dot  = document.getElementById("custom-cursor-dot");
    if (!ring || !dot) return;

    let mouseX = -200, mouseY = -200;
    let ringX  = -200, ringY  = -200;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.10;
      ringY += (mouseY - ringY) * 0.10;
      ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      rafId = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      ring.style.width  = "48px";
      ring.style.height = "48px";
    };
    const onLeaveLink = () => {
      ring.style.width  = "32px";
      ring.style.height = "32px";
    };

    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(animate);

    // Grow ring on interactive elements
    const links = document.querySelectorAll("a, button, [role='button']");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterLink);
        el.removeEventListener("mouseleave", onLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div id="custom-cursor-ring" className="hidden md:block" />
      <div id="custom-cursor-dot"  className="hidden md:block" />
    </>
  );
}
