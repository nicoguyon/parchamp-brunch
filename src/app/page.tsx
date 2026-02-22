import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionBrunch from "@/components/SectionBrunch";
import SectionExperience from "@/components/SectionExperience";
import SectionDesserts from "@/components/SectionDesserts";
import SectionReel from "@/components/SectionReel";
import SectionTarifs from "@/components/SectionTarifs";
import SectionLieu from "@/components/SectionLieu";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Brunch dominical au Parchamp · Boulogne-Billancourt · 12h–15h",
  description:
    "Brunch dominical au Parchamp, Boulogne-Billancourt · 12h–15h · Buffet levantin à volonté · 44€ adulte · Ateliers enfants · Cour intérieure lumineuse · Réservez.",
};

// Light divider — shown on cream/light background boundaries
function DividerLight() {
  return (
    <div className="bg-[#FAF7F2] py-1">
      <div className="flex items-center justify-center gap-4 max-w-xs mx-auto">
        <div className="h-px flex-1 bg-[#C65D3E]/25" />
        <span className="text-[#C65D3E]/50 text-xs select-none">✦</span>
        <div className="h-px flex-1 bg-[#C65D3E]/25" />
      </div>
    </div>
  );
}

// Dark divider — shown on dark background boundaries
function DividerDark() {
  return (
    <div className="bg-[#1A1A1A] py-1">
      <div className="flex items-center justify-center gap-4 max-w-xs mx-auto">
        <div className="h-px flex-1 bg-[#C5A572]/30" />
        <span className="text-[#C5A572]/50 text-xs select-none">✦</span>
        <div className="h-px flex-1 bg-[#C5A572]/30" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main>
        <Hero />
        <DividerLight />
        <SectionBrunch />
        <DividerLight />
        <SectionExperience />
        <SectionDesserts />
        <SectionReel />
        <DividerLight />
        <SectionTarifs />
        <DividerLight />
        <SectionLieu />
        <DividerDark />
        <Footer />
      </main>
    </>
  );
}
