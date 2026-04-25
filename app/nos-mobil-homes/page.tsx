import type { Metadata } from "next";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";
import AmenityList from "@/components/AmenityList";
import JsonLd from "@/components/JsonLd";
import {
  SITE_URL,
  SITE_NAME,
  BOOKING_URL,
  images,
  amenities,
  description,
  pricing,
  mobilHomeInfo,
  RATING,
  ADDRESS,
} from "@/lib/data";

export const metadata: Metadata = {
  title: `Nos Mobil Homes à Corte, Corse — ${SITE_NAME}`,
  description:
    "Découvrez nos 2 mobil homes tout confort à Corte en Corse : 30m², 2 chambres, 4 personnes, terrasse vue montagne, cuisine équipée, climatisation. Dès 70€/nuit sur Booking.",
  openGraph: {
    title: `Nos Mobil Homes à Corte, Corse — ${SITE_NAME}`,
    description:
      "2 mobil homes identiques de 30m² à Corte, Corse. 2 chambres, terrasse vue montagne, tout équipé. Réservez sur Booking.com.",
    url: `${SITE_URL}/nos-mobil-homes`,
    images: [
      {
        url: images[0].src,
        width: 1200,
        height: 900,
        alt: images[0].alt,
      },
    ],
  },
  alternates: {
    canonical: `${SITE_URL}/nos-mobil-homes`,
  },
};

export default function NosMobilHomesPage() {
  return (
    <>
      <JsonLd />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <ImageGallery images={images} />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="rounded-full bg-brand-beige px-3 py-1 text-xs font-semibold text-brand-green">
                  {mobilHomeInfo.count} mobil homes
                </span>
                <span className="rounded-full bg-brand-beige px-3 py-1 text-xs font-semibold text-brand-green">
                  {mobilHomeInfo.capacity} personnes
                </span>
                <span className="rounded-full bg-brand-beige px-3 py-1 text-xs font-semibold text-brand-green">
                  {mobilHomeInfo.bedrooms} chambres
                </span>
                <span className="rounded-full bg-brand-beige px-3 py-1 text-xs font-semibold text-brand-green">
                  {mobilHomeInfo.surface} m²
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
                Nos Mobil Homes à Corte
              </h1>
              <p className="mt-2 text-lg text-gray-500">
                {ADDRESS.street}, {ADDRESS.postalCode} {ADDRESS.city}
              </p>

              <div className="mt-4 flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold">{RATING.value}/10</span>
                  <span className="text-gray-500">({RATING.reviewCount} avis)</span>
                </div>
              </div>
            </div>

            <div className="prose prose-gray max-w-none">
              {description.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                Équipements et services
              </h2>
              <AmenityList amenities={amenities} />
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                Tarifs indicatifs
              </h2>
              <div className="rounded-2xl border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        Saison
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                        Tarif
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {pricing.map((p) => (
                      <tr key={p.season}>
                        <td className="px-6 py-4 text-sm text-gray-700">{p.season}</td>
                        <td className="px-6 py-4 text-right text-sm font-semibold text-brand-green">
                          {p.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                * Tarifs indicatifs. Consultez Booking.com pour les prix exacts et disponibilités.
              </p>
            </div>

            {/* Infos pratiques */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                Informations pratiques
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-gray-50 p-5">
                  <p className="text-sm font-semibold text-gray-900">Arrivée</p>
                  <p className="text-sm text-gray-600">{mobilHomeInfo.checkIn}</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-5">
                  <p className="text-sm font-semibold text-gray-900">Départ</p>
                  <p className="text-sm text-gray-600">{mobilHomeInfo.checkOut}</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-5">
                  <p className="text-sm font-semibold text-gray-900">Caution</p>
                  <p className="text-sm text-gray-600">{mobilHomeInfo.deposit} € en espèces à l&apos;arrivée</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-5">
                  <p className="text-sm font-semibold text-gray-900">Paiement</p>
                  <p className="text-sm text-gray-600">Virement, chèque, Chèques-Vacances ANCV</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Localisation
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nos mobil homes sont situés {ADDRESS.street}, {ADDRESS.postalCode} {ADDRESS.city}.
                À 20 min à pied de la Citadelle, 450 m de la gare CFC, et 15 min en voiture des gorges de la Restonica.
              </p>
              <Link
                href="/localisation"
                className="mt-4 inline-flex text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors"
              >
                Découvrir la région →
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-gray-200 p-6 shadow-lg">
                <p className="text-sm text-gray-500 mb-1">À partir de</p>
                <p className="text-3xl font-bold text-gray-900">
                  {mobilHomeInfo.priceFrom} €
                  <span className="text-base font-normal text-gray-500"> / nuit</span>
                </p>
                <div className="mt-2 flex items-center gap-1 text-sm">
                  <svg className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold">{RATING.value}/10</span>
                  <span className="text-gray-500">· {RATING.reviewCount} avis</span>
                </div>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full rounded-xl bg-[#003580] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-md hover:bg-[#00254d] transition-colors"
                >
                  Réserver sur Booking.com
                </a>

                <div className="mt-6 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    2 mobil homes disponibles
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Parking gratuit
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Climatisation
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Vue montagne
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="block rounded-2xl border border-gray-200 p-6 text-center hover:border-brand-green transition-colors"
              >
                <p className="font-semibold text-gray-900">Une question ?</p>
                <p className="mt-1 text-sm text-gray-500">Contactez-nous directement</p>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
