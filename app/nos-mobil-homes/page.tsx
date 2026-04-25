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
  pricing,
  mobilHomeInfo,
  RATING,
  ADDRESS,
} from "@/lib/data";

export const metadata: Metadata = {
  title: `Location Mobil-Home Corte, Corse — Vue Montagne, Tout Confort | ${SITE_NAME}`,
  description:
    "Louez un mobil-home tout confort à Corte en Corse : 30m², 2 chambres, terrasse vue montagne, clim, barbecue. Dès 70€/nuit. Réservez sur Booking.com.",
  openGraph: {
    title: `Location Mobil-Home à Corte, Corse — ${SITE_NAME}`,
    description:
      "2 mobil-homes de 30m² avec terrasse vue montagne à Corte, Corse. Tout équipé, calme absolu, à 15 min des gorges de la Restonica.",
    url: `${SITE_URL}/nos-mobil-homes`,
    images: [{ url: images[0].src, width: 1200, height: 900, alt: images[0].alt }],
  },
  alternates: { canonical: `${SITE_URL}/nos-mobil-homes` },
};

function CTAButton() {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl bg-[#003580] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-md hover:bg-[#00254d] transition-colors"
    >
      Réserver sur Booking.com
    </a>
  );
}

export default function NosMobilHomesPage() {
  return (
    <>
      <JsonLd />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <ImageGallery images={images} />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="rounded-full bg-brand-beige px-3 py-1 text-xs font-semibold text-brand-green">
                  {mobilHomeInfo.count} mobil-homes
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
                Location Mobil-Home à Corte — Vue Montagne, Tout Confort
              </h1>
              <p className="mt-2 text-gray-500">
                {ADDRESS.street}, {ADDRESS.postalCode} {ADDRESS.city}
              </p>

              <div className="mt-4 flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold">{RATING.value}/5</span>
                  <span className="text-gray-500">· Plus de {RATING.reviewCount} séjours</span>
                </div>
              </div>
            </div>

            {/* Emotional projection */}
            <div className="rounded-2xl bg-brand-beige p-6 sm:p-8">
              <p className="text-lg text-gray-800 leading-relaxed italic">
                Imaginez vos soirées d&apos;été sur la terrasse, un verre à la main, avec vue sur les montagnes corses baignées par la lumière dorée du couchant. Le chant des oiseaux, l&apos;odeur du maquis, le calme absolu…
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                C&apos;est exactement ce qui vous attend chez Muntagn&apos;home. Nos deux mobil-homes de 30 m² sont votre refuge au cœur de la Corse : confortables, tout équipés, et surtout — avec cette terrasse face aux montagnes qui change tout.
              </p>
            </div>

            <div className="sm:hidden">
              <CTAButton />
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Un mobil-home tout confort au cœur de la montagne corse
              </h2>
              <div className="prose prose-gray max-w-none space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Chaque mobil-home climatisé offre {mobilHomeInfo.surface} m² d&apos;espace de vie optimisé : 2 chambres doubles confortables, un salon lumineux avec coin repas, et une cuisine entièrement équipée (réfrigérateur, cafetière, bouilloire, grille-pain, micro-ondes). La salle de bains dispose d&apos;une douche et d&apos;un sèche-cheveux.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Mais le vrai plus, c&apos;est l&apos;extérieur : votre terrasse privée face aux montagnes, un jardin clos où les enfants peuvent jouer, et un barbecue pour des soirées conviviales sous les étoiles corses. Le parking gratuit est à deux pas.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Situé Route Territoriale 50 à Corte, à seulement 20 minutes à pied de la Citadelle historique et à 450 mètres de la gare routière CFC, vous êtes idéalement placé pour explorer la Corse sans voiture — ou avec, pour rejoindre les gorges de la Restonica en 15 minutes et plonger dans les piscines naturelles turquoise de cette vallée classée Grand Site de France.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Le Parc Naturel Régional de Corse est à 1 km. Le GR20 passe à proximité. Les lacs de Mélo et Capitello sont accessibles en randonnée. La vallée du Tavignano offre des balades familiales au bord de l&apos;eau. Et pour les journées plage, la côte orientale est à 45 minutes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Que vous soyez en couple en quête de calme, en famille pour une aventure nature ou entre amis pour randonner, nos mobil-homes sont le camp de base idéal pour une Corse authentique — loin des foules du littoral, au plus près des montagnes.
                </p>
              </div>
            </div>

            <CTAButton />

            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                Équipements et services
              </h2>
              <AmenityList amenities={amenities} />
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                Tarifs
              </h2>
              <div className="rounded-2xl border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Saison</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Tarif</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {pricing.map((p) => (
                      <tr key={p.season}>
                        <td className="px-6 py-4 text-sm text-gray-700">{p.season}</td>
                        <td className="px-6 py-4 text-right text-sm font-semibold text-brand-green">{p.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                * Tarifs indicatifs. Consultez Booking.com pour les prix exacts et disponibilités.
              </p>
            </div>

            <CTAButton />

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
                Nos mobil-homes se trouvent {ADDRESS.street} ({ADDRESS.altStreet}), {ADDRESS.postalCode} {ADDRESS.city}. À 20 min à pied de la Citadelle, 450 m de la gare CFC, et 15 min en voiture des gorges de la Restonica.
              </p>
              <Link
                href="/localisation"
                className="mt-4 inline-flex text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors"
              >
                Voir la carte et les activités →
              </Link>
            </div>
          </div>

          {/* Sidebar sticky */}
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
                  <span className="font-bold">{RATING.value}/5</span>
                  <span className="text-gray-500">· {RATING.reviewCount}+ séjours</span>
                </div>

                <div className="mt-6">
                  <CTAButton />
                </div>

                <div className="mt-6 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    2 mobil-homes disponibles
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
                    Vue montagne depuis la terrasse
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Restonica à 15 min
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="block rounded-2xl border border-gray-200 p-6 text-center hover:border-brand-green transition-colors"
              >
                <p className="font-semibold text-gray-900">Une question ?</p>
                <p className="mt-1 text-sm text-gray-500">Contactez-nous par email ou WhatsApp</p>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
