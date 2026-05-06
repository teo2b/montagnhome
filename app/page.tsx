import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialCard";
import JsonLd from "@/components/JsonLd";
import HomeSnapClass from "@/components/HomeSnapClass";
import BookingCTA from "@/components/BookingCTA";
import { images, mobilHomeInfo, RATING, seoHomeText, SITE_URL } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <JsonLd
        additionalData={{
          "@type": "WebPage",
          name: "Location mobil-home a Corte en Corse",
          url: SITE_URL,
          description: "2 mobil-homes avec terrasse vue montagne a Corte, au coeur de la Corse.",
        }}
      />
      <HomeSnapClass />
      <Hero />

      <section className="snap-step min-h-screen py-24 flex flex-col justify-center">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">Notre promesse</p>
            <h2 className="section-title mt-3">Un séjour simple, beau et reposant au coeur de la montagne corse</h2>
            <p className="section-subtitle">
              Deux mobil-homes tout confort a Corte, une vue degagee sur les montagnes, et un emplacement ideal entre Restonica, GR20 et Citadelle.
            </p>
          </div>

          <article className="card-surface reveal-on-scroll mt-12 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative min-h-[320px] overflow-hidden">
                <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="p-8 sm:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-200/70 bg-yellow-50 px-4 py-2 text-sm">
                  <span className="font-bold text-gray-900">{RATING.value}/5</span>
                  <span className="text-gray-600">- Plus de {RATING.reviewCount} sejours</span>
                </div>
                <h3 className="mt-5 text-2xl font-bold text-gray-900">
                  {mobilHomeInfo.count} mobil-homes - {mobilHomeInfo.surface} m2 - vue montagne
                </h3>
                <p className="mt-2 text-gray-500">
                  {mobilHomeInfo.bedrooms} chambres - {mobilHomeInfo.capacity} personnes - terrasse privee
                </p>
                <p className="mt-5 text-gray-700 leading-relaxed">
                  Climatisation, cuisine equipee, jardin et barbecue. Le point de depart ideal pour decouvrir la Corse authentique sans compromis sur le confort.
                </p>
                <p className="mt-6 text-3xl font-bold text-brand-green">
                  Des {mobilHomeInfo.priceFrom} €
                  <span className="text-base font-normal text-gray-500"> / nuit</span>
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <BookingCTA />
                  <Link
                    href="/nos-mobil-homes"
                    className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-6 py-3.5 text-sm font-semibold text-gray-700 transition-colors hover:border-brand-green hover:text-brand-green"
                  >
                    Voir tous les details
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div className="snap-step min-h-screen flex flex-col justify-center bg-brand-beige/70">
        <BenefitsSection />
        <div className="section-shell pb-10">
          <BookingCTA size="lg" />
        </div>
      </div>

      <div className="snap-step min-h-screen flex flex-col justify-center bg-gray-50/80">
        <TestimonialsSection />
        <div className="section-shell pb-10">
          <BookingCTA size="lg" />
        </div>
      </div>

      <section className="snap-step min-h-screen py-24 bg-brand-beige/70 flex flex-col justify-center">
        <div className="section-shell">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Corte, le meilleur de la Corse a portee de main</h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                Restonica a 15 min, citadelle a 20 min a pied, GR20 a proximite: vous etes au centre de l&apos;ile, entre nature sauvage et patrimoine.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Depuis votre terrasse, vous pouvez organiser une journee rando, baignade en riviere ou escapade plage sans perdre de temps sur la route.
              </p>
              <div className="mt-8 flex gap-3">
                <Link href="/localisation" className="inline-flex rounded-xl bg-brand-green px-6 py-3 text-sm font-semibold text-white hover:bg-brand-green-light transition-colors">
                  Voir les activites
                </Link>
                <Link href="/contact" className="inline-flex rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-brand-green hover:text-brand-green transition-colors">
                  Poser une question
                </Link>
              </div>
            </div>
            <div className="card-surface reveal-on-scroll relative aspect-[4/3] overflow-hidden">
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

      <section className="snap-step min-h-screen py-20 bg-gradient-to-br from-brand-green to-brand-green-dark text-white flex flex-col justify-center">
        <div className="section-shell">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
            <div className="glass-surface p-4">
              <p className="text-3xl font-bold">{RATING.value}/5</p>
              <p className="mt-1 text-sm text-gray-200">Note moyenne</p>
            </div>
            <div className="glass-surface p-4">
              <p className="text-3xl font-bold">{RATING.reviewCount}+</p>
              <p className="mt-1 text-sm text-gray-200">Séjours réalisés</p>
            </div>
            <div className="glass-surface p-4">
              <p className="text-3xl font-bold">15 min</p>
              <p className="mt-1 text-sm text-gray-200">De la Restonica</p>
            </div>
            <div className="glass-surface p-4">
              <p className="text-3xl font-bold">{mobilHomeInfo.priceFrom} €</p>
              <p className="mt-1 text-sm text-gray-200">À partir de / nuit</p>
            </div>
          </div>
          <div className="flex justify-center">
            <BookingCTA variant="light" size="lg" />
          </div>
        </div>
      </section>

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
