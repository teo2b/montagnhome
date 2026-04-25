import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialCard";
import JsonLd from "@/components/JsonLd";
import { images, mobilHomeInfo, RATING, BOOKING_URL } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <JsonLd />

      <Hero />

      {/* Nos mobil homes */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center text-gray-900">
            Nos mobil homes à Corte
          </h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Deux mobil homes identiques de {mobilHomeInfo.surface} m², tout équipés,
            avec terrasse vue montagne. Idéal pour 2 à {mobilHomeInfo.capacity} personnes.
          </p>

          <div className="mt-14">
            <article className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                  <Image
                    src={images[0].src}
                    alt={images[0].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-brand-green">
                      {mobilHomeInfo.count} mobil homes
                    </span>
                    <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-brand-green">
                      {mobilHomeInfo.capacity} personnes
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm mb-4">
                    <svg className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold text-gray-900">{RATING.value}/10</span>
                    <span className="text-gray-400">({RATING.reviewCount} avis)</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-gray-900">
                    Mobil Home tout confort
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {mobilHomeInfo.surface} m² · {mobilHomeInfo.bedrooms} chambres · {mobilHomeInfo.bathrooms} salle de bain
                  </p>

                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                    Mobil home climatisé avec cuisine équipée, terrasse avec vue sur les montagnes corses,
                    jardin et barbecue. À 20 min à pied de la Citadelle de Corte et à 15 min des gorges de la Restonica.
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <p className="text-lg font-bold text-brand-green">
                      Dès {mobilHomeInfo.priceFrom} €
                      <span className="text-sm font-normal text-gray-500"> / nuit</span>
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/nos-mobil-homes"
                      className="rounded-xl bg-brand-green px-6 py-3 text-center text-sm font-semibold text-white hover:bg-brand-green-light transition-colors"
                    >
                      Découvrir
                    </Link>
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-[#003580] px-6 py-3 text-center text-sm font-semibold text-white hover:bg-[#00254d] transition-colors"
                    >
                      Réserver sur Booking
                    </a>
                  </div>
                </div>
              </div>
            </article>
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
              <p className="text-3xl font-bold">{RATING.value}/10</p>
              <p className="mt-1 text-sm text-gray-200">Note Booking</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{RATING.reviewCount}</p>
              <p className="mt-1 text-sm text-gray-200">Avis clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold">2</p>
              <p className="mt-1 text-sm text-gray-200">Mobil homes</p>
            </div>
            <div>
              <p className="text-3xl font-bold">30 m²</p>
              <p className="mt-1 text-sm text-gray-200">Tout équipé</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
