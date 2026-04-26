import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import HostContactBubble from "@/components/HostContactBubble";
import { SITE_NAME, SITE_URL } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Location Mobil-Home Corte, Corse — Vue Montagne, Tout Confort | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Louez un mobil-home tout confort à Corte, en Corse. 30m², terrasse vue montagne, calme absolu, à 15 min des gorges de la Restonica. Dès 70€/nuit. Réservez sur Booking.com.",
  keywords: [
    "location mobil home Corte",
    "mobil home Corse centre",
    "location mobil home Corse",
    "mobil home Corte Corse",
    "vacances montagne Corse",
    "hébergement Corte",
    "location vacances Haute-Corse",
    "mobil home Restonica",
    "location saisonnière Corse",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `Location Mobil-Home à Corte, Corse — ${SITE_NAME}`,
    description:
      "2 mobil-homes tout confort à Corte, Corse. Terrasse vue montagne, calme, nature. Dès 70€/nuit.",
    images: [
      {
        url: "/images/hero-corse.png",
        width: 1200,
        height: 630,
        alt: "Muntagn'home — Location mobil-home à Corte, Corse, vue montagne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable}`}>
      <body className="font-sans flex flex-col min-h-[100dvh]">
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <HostContactBubble />
      </body>
    </html>
  );
}
