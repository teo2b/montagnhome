import type { Metadata } from "next";
import Link from "next/link";
import MapEmbed from "@/components/MapEmbed";
import JsonLd from "@/components/JsonLd";
import { locationContent, activities, SITE_URL, BOOKING_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: locationContent.seoTitle,
  description: locationContent.seoDescription,
  openGraph: {
    title: locationContent.seoTitle,
    description: locationContent.seoDescription,
    url: `${SITE_URL}/localisation`,
    images: [
      {
        url: "/images/corte-citadelle.png",
        width: 1200,
        height: 630,
        alt: "Vue de Corte et sa citadelle en Corse — location mobil home",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_URL}/localisation`,
  },
};

const activityIcons: Record<string, React.ReactNode> = {
  water: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" />
    </svg>
  ),
  castle: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>
  ),
  hiking: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  tree: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" />
    </svg>
  ),
  forest: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5" />
    </svg>
  ),
  beach: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ),
};

export default function LocalisationPage() {
  return (
    <>
      <JsonLd />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/40 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/corte-panorama.png')" }}
          role="img"
          aria-label="Vue panoramique de Corte en Corse — découvrir la région pour location mobil home"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            {locationContent.title}
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            {locationContent.intro}
          </p>
        </div>
      </section>

      {/* Description de la région */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">
            Corte, capitale historique au cœur des montagnes
          </h2>
          <div className="prose prose-lg prose-gray max-w-none">
            {locationContent.description.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Activités */}
      <section className="py-20 bg-brand-beige">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center text-gray-900">
            Activités à proximité
          </h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            La région de Corte regorge d&apos;activités pour tous les goûts : randonnée, baignade, patrimoine, gastronomie…
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <article
                key={activity.title}
                className="rounded-2xl bg-white p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-beige text-brand-green">
                  {activityIcons[activity.icon] || activityIcons.hiking}
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-gray-900">
                  {activity.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
                <p className="mt-4 text-xs font-semibold text-brand-green">
                  {activity.distance}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center text-gray-900 mb-10">
            Nous trouver
          </h2>
          <MapEmbed src={locationContent.mapEmbedUrl} />
          <p className="mt-6 text-center text-gray-600">
            Corte, Haute-Corse — Au centre de la Corse, accessible depuis Bastia (1h15) et Ajaccio (1h15).
          </p>
        </div>
      </section>

      {/* CTA vers hébergements */}
      <section className="py-16 bg-brand-green text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold">
            Prêt à découvrir la Corse ?
          </h2>
          <p className="mt-4 text-gray-200">
            Réservez votre mobil home à Corte et profitez de tout ce que la région a à offrir.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/nos-mobil-homes"
              className="w-full sm:w-auto rounded-xl bg-white px-8 py-4 text-base font-semibold text-brand-green hover:bg-brand-beige transition-colors"
            >
              Voir nos mobil homes
            </Link>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-xl bg-white/20 border border-white px-8 py-4 text-base font-semibold text-white hover:bg-white/30 transition-colors"
            >
              Réserver sur Booking
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
