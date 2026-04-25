import type { Metadata } from "next";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";
import AmenityList from "@/components/AmenityList";
import CTAButtons from "@/components/CTAButtons";
import JsonLd from "@/components/JsonLd";
import { mobileHomes, SITE_URL } from "@/lib/data";

const mobileHome = mobileHomes[1];
const otherMobileHome = mobileHomes[0];

export const metadata: Metadata = {
  title: mobileHome.seoTitle,
  description: mobileHome.seoDescription,
  openGraph: {
    title: mobileHome.seoTitle,
    description: mobileHome.seoDescription,
    url: `${SITE_URL}/mobil-home-2`,
    images: [
      {
        url: mobileHome.images[0].src,
        width: 1200,
        height: 900,
        alt: mobileHome.images[0].alt,
      },
    ],
  },
  alternates: {
    canonical: `${SITE_URL}/mobil-home-2`,
  },
};

export default function MobilHome2Page() {
  return (
    <>
      <JsonLd
        additionalData={{
          containsPlace: {
            "@type": "Accommodation",
            name: mobileHome.name,
            description: mobileHome.seoDescription,
            numberOfBedrooms: mobileHome.bedrooms,
            numberOfBathroomsTotal: mobileHome.bathrooms,
            occupancy: {
              "@type": "QuantitativeValue",
              maxValue: mobileHome.capacity,
            },
          },
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <ImageGallery images={mobileHome.images} />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="rounded-full bg-brand-beige px-3 py-1 text-xs font-semibold text-brand-green">
                  {mobileHome.capacity} personnes
                </span>
                <span className="rounded-full bg-brand-beige px-3 py-1 text-xs font-semibold text-brand-green">
                  {mobileHome.bedrooms} chambres
                </span>
                <span className="rounded-full bg-brand-beige px-3 py-1 text-xs font-semibold text-brand-green">
                  {mobileHome.bathrooms} salle de bain
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
                {mobileHome.name}
              </h1>
              <p className="mt-2 text-lg text-gray-500">{mobileHome.tagline}</p>

              <div className="mt-4 flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold">{mobileHome.rating}</span>
                  <span className="text-gray-500">({mobileHome.reviewCount} avis)</span>
                </div>
                <span className="text-sm text-gray-500">
                  Déjà réservé {mobileHome.bookingCount} fois
                </span>
              </div>
            </div>

            <div className="prose prose-gray max-w-none">
              {mobileHome.description.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                Équipements et services
              </h2>
              <AmenityList amenities={mobileHome.amenities} />
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
                    {mobileHome.pricing.map((p) => (
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
                * Tarifs indicatifs, susceptibles de varier. Consultez les plateformes de réservation pour les prix exacts.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Localisation
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le Maquis est situé à Corte, au cœur de la Haute-Corse. Un cadre naturel
                exceptionnel, à proximité immédiate des gorges de la Restonica et du centre historique.
              </p>
              <Link
                href="/localisation"
                className="mt-4 inline-flex text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors"
              >
                Découvrir la région →
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-gray-200 p-6 shadow-lg">
                <p className="text-3xl font-bold text-gray-900">
                  {mobileHome.priceFrom} €
                  <span className="text-base font-normal text-gray-500"> / nuit</span>
                </p>
                <div className="mt-2 flex items-center gap-1 text-sm">
                  <svg className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold">{mobileHome.rating}</span>
                  <span className="text-gray-500">· {mobileHome.reviewCount} avis</span>
                </div>

                <CTAButtons
                  airbnbUrl={mobileHome.airbnbUrl}
                  bookingUrl={mobileHome.bookingUrl}
                  className="mt-6"
                />

                <div className="mt-6 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Réponse rapide
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Annulation flexible
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Animaux acceptés
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Découvrez aussi</h3>
                <Link
                  href={`/${otherMobileHome.slug}`}
                  className="group flex items-center gap-4"
                >
                  <div className="relative h-16 w-16 shrink-0 rounded-xl overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundImage: `url('${otherMobileHome.images[0].src}')` }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-brand-green transition-colors">
                      {otherMobileHome.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {otherMobileHome.capacity} pers. · dès {otherMobileHome.priceFrom}€/nuit
                    </p>
                  </div>
                </Link>
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
