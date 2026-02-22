import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brunch dominical au Parchamp · Boulogne-Billancourt · 12h–15h",
  description:
    "Brunch dominical au Parchamp, Boulogne-Billancourt · 12h–15h · Buffet levantin à volonté · 44€ adulte · Ateliers enfants · Cour intérieure lumineuse · Réservez.",
  keywords: [
    "brunch boulogne-billancourt",
    "brunch dimanche paris",
    "buffet levantin méditerranéen",
    "restaurant la table parchamp",
    "brunch famille ateliers enfants",
    "hôtel parchamp tribute portfolio",
  ],
  openGraph: {
    title: "Brunch du Dimanche — Le Parchamp, Boulogne-Billancourt",
    description:
      "Buffet levantin à volonté, tous les dimanches 12h–15h. Adulte 44€ · Enfant 19€. Ateliers créatifs. Cour intérieure lumineuse.",
    images: [{ url: "/images/parchamp-v2-1.webp", width: 1200, height: 800 }],
    locale: "fr_FR",
    type: "website",
    siteName: "Le Parchamp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brunch du Dimanche — Le Parchamp",
    description: "Buffet levantin à volonté · Dimanche 12h–15h · Boulogne-Billancourt",
    images: ["/images/parchamp-v2-1.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
