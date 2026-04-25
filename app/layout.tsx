import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { SITE_NAME, SITE_URL } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Location Mobil Home en Corse près de Corte`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Louez nos mobil homes tout confort à Corte, en Corse. Vacances nature en montagne, vue exceptionnelle, calme et authenticité. Réservez sur Airbnb ou Booking.",
  keywords: [
    "location mobil home Corse",
    "mobil home vacances Corse",
    "location saisonnière mobil home France",
    "mobil home Corte",
    "vacances montagne Corse",
    "hébergement Corte Corse",
    "location vacances Haute-Corse",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Location Mobil Home en Corse`,
    description:
      "Deux mobil homes de charme à Corte, au cœur des montagnes corses. Nature, calme et confort pour des vacances inoubliables.",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Muntagn\u0027home — Location mobil home en Corse à Corte",
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
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans pb-20 md:pb-0">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
