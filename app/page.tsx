import Link from "next/link";
import Hero from "@/components/Hero";
import MobileHomeCard from "@/components/MobileHomeCard";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialCard";
import JsonLd from "@/components/JsonLd";
import { mobileHomes } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <JsonLd />

      <Hero />

      {/* Nos hébergements */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center text-gray-900">
            Nos mobil homes en Corse
          </h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Deux hébergements de charme à Corte, au pied des montagnes.
            Choisissez celui qui correspond à vos envies.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobileHomes.map((mh) => (
              <MobileHomeCard key={mh.slug} mobileHome={mh} />
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection />

      <TestimonialsSection />

      {/* Aperçu localisation */}
      <section className="py-20 bg-brand-beige">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
                Corte, joyau de la Corse intérieure
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Ancienne capitale de la Corse indépendante, Corte est nichée au
                cœur des montagnes. Gorges de la Restonica, GR20, citadelle
                historique, rivières cristallines… Un cadre exceptionnel pour des
                vacances nature et culture.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Nos mobil homes sont idéalement situés pour explorer toute la
                richesse de la région, des sommets enneigés aux plages de la côte
                orientale.
              </p>
              <Link
                href="/localisation"
                className="mt-8 inline-flex rounded-xl bg-brand-green px-6 py-3 text-sm font-semibold text-white hover:bg-brand-green-light transition-colors"
              >
                Découvrir la région
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/corte-citadelle.svg')" }}
                role="img"
                aria-label="Citadelle de Corte en Corse — découvrir la région pour vos vacances mobil home"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau réassurance */}
      <section className="py-16 bg-brand-green text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold">4.8/5</p>
              <p className="mt-1 text-sm text-gray-200">Note moyenne</p>
            </div>
            <div>
              <p className="text-3xl font-bold">225+</p>
              <p className="mt-1 text-sm text-gray-200">Réservations</p>
            </div>
            <div>
              <p className="text-3xl font-bold">2</p>
              <p className="mt-1 text-sm text-gray-200">Mobil homes</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="mt-1 text-sm text-gray-200">Satisfaits</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
