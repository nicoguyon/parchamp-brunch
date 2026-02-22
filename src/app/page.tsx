import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionBrunch from "@/components/SectionBrunch";
import SectionExperience from "@/components/SectionExperience";
import SectionDesserts from "@/components/SectionDesserts";
import SectionTarifs from "@/components/SectionTarifs";
import SectionLieu from "@/components/SectionLieu";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Brunch dominical au Parchamp · Boulogne-Billancourt · 12h–15h",
  description:
    "Brunch dominical au Parchamp, Boulogne-Billancourt · 12h–15h · Buffet levantin à volonté · 44€ adulte · Ateliers enfants · Cour intérieure lumineuse · Réservez.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionBrunch />
      <SectionExperience />
      <SectionDesserts />
      <SectionTarifs />
      <SectionLieu />
      <Footer />
    </main>
  );
}
