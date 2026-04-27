import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialCard";
import JsonLd from "@/components/JsonLd";
import HomeSnapClass from "@/components/HomeSnapClass";
import { images, mobilHomeInfo, RATING, BOOKING_URL, seoHomeText } from "@/lib/data";

function CTABlock() {
  return (
    <div className="flex justify-center py-4">
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto rounded-xl bg-[#003580] px-10 py-4 text-center text-base font-semibold text-white shadow-md hover:bg-[#00254d] transition-colors"
      >
        Voir les disponibilités sur Booking.com
      </a>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <HomeSnapClass />
      <Hero />

      {/* Étape 2 — Nos mobil-homes */}
      <section className="snap-step min-h-screen py-20 flex flex-col justify-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
            Votre mobil-home à Corte, au cœur de la Corse
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600 max-w-2xl mx-auto">
            Imaginez vos matins avec vue sur les montagnes, vos après-midi dans les piscines naturelles de la Restonica, vos soirées barbecue sur la terrasse…
          </p>

          <div className="mt-14">
            <article className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-[4/3] md:aspect-auto min-h-[300px] overflow-hidden">
                  <Image
                    src={images[0].src}
                    alt={images[0].alt}
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>

                <div className="p-8 sm:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm mb-3">
                    <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-bold text-gray-900">{RATING.value}/5</span>
                    <span className="text-gray-500">· Déjà réservé plus de {RATING.reviewCount} fois</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    2 mobil-homes · {mobilHomeInfo.surface} m² · Vue montagne
                  </h3>
                  <p className="mt-2 text-gray-500">
                    {mobilHomeInfo.bedrooms} chambres · {mobilHomeInfo.capacity} pers. · Terrasse privée
                  </p>

                  <p className="mt-5 text-gray-700 leading-relaxed">
                    Mobil-home climatisé avec terrasse face aux montagnes, cuisine équipée, jardin et barbecue. À 15 min des gorges de la Restonica et 20 min de la Citadelle de Corte.
                  </p>

                  <p className="mt-5 text-2xl font-bold text-brand-green">
                    Dès {mobilHomeInfo.priceFrom} €
                    <span className="text-base font-normal text-gray-500"> / nuit</span>
                  </p>

                  <div className="mt-6">
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full rounded-xl bg-[#003580] px-6 py-3.5 text-center text-sm font-semibold text-white hover:bg-[#00254d] transition-colors"
                    >
                      Réserver sur Booking.com
                    </a>
                  </div>

                  <Link
                    href="/nos-mobil-homes"
                    className="mt-4 text-center text-sm font-medium text-brand-green hover:text-brand-green-light transition-colors"
                  >
                    Voir tous les détails et équipements →
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Étape 3 — Avantages + CTA fusionné */}
      <div className="snap-step min-h-screen bg-brand-beige flex flex-col justify-center">
        <BenefitsSection />
        <div className="py-4">
          <div className="mx-auto max-w-7xl px-4">
            <CTABlock />
          </div>
        </div>
      </div>

      {/* Étape 4 — Témoignages + CTA fusionné */}
      <div className="snap-step min-h-screen bg-gray-50 flex flex-col justify-center">
        <TestimonialsSection />
        <div className="py-4">
          <div className="mx-auto max-w-7xl px-4">
            <CTABlock />
          </div>
        </div>
      </div>

      {/* Étape 5 — Aperçu localisation */}
      <section className="snap-step min-h-screen py-20 bg-brand-beige flex flex-col justify-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Corte : la Corse authentique, loin des foules
              </h2>
              <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                Imaginez-vous plonger dans les vasques turquoise de la Restonica, randonner sur le mythique GR20, explorer une citadelle du XVème siècle… Tout ça à moins de 20 minutes de votre terrasse.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Corte est au centre de la Corse — vous pouvez rejoindre les plages de la côte Est en 45 min, Ajaccio ou Bastia en 1h15. Le meilleur des deux mondes.
              </p>
              <Link
                href="/localisation"
                className="mt-8 inline-flex rounded-xl bg-brand-green px-6 py-3 text-sm font-semibold text-white hover:bg-brand-green-light transition-colors"
              >
                Voir les activités à proximité
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/corte-citadelle.png"
                alt="Citadelle de Corte avec vue sur les montagnes — location mobil home Corse"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Étape 6 — Bandeau réassurance + CTA */}
      <section className="snap-step min-h-screen py-16 bg-brand-green text-white flex flex-col justify-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-10">
            <div>
              <p className="text-3xl font-bold">{RATING.value}/5</p>
              <p className="mt-1 text-sm text-gray-200">Note moyenne</p>
            </div>
            <div>
              <p className="text-3xl font-bold">50+</p>
              <p className="mt-1 text-sm text-gray-200">Séjours réalisés</p>
            </div>
            <div>
              <p className="text-3xl font-bold">15 min</p>
              <p className="mt-1 text-sm text-gray-200">De la Restonica</p>
            </div>
            <div>
              <p className="text-3xl font-bold">70 €</p>
              <p className="mt-1 text-sm text-gray-200">À partir de / nuit</p>
            </div>
          </div>
          <div className="flex justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-xl bg-white px-10 py-4 text-center text-base font-semibold text-[#003580] hover:bg-gray-100 transition-colors"
            >
              Voir les disponibilités sur Booking.com
            </a>
          </div>
        </div>
      </section>

      {/* SEO text block — pas de snap, scroll libre */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            {seoHomeText.split("\n\n").map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
