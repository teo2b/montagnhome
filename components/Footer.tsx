import Link from "next/link";
import { SITE_NAME, CONTACT_EMAIL, ADDRESS, BOOKING_URL } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pb-20 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold text-white tracking-tight">
              {SITE_NAME}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Location mobil-home à Corte, Corse. Calme, nature et vue montagne au cœur de l&apos;île de Beauté.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nos-mobil-homes" className="text-sm hover:text-white transition-colors">
                  Nos Mobil-Homes
                </Link>
              </li>
              <li>
                <Link href="/localisation" className="text-sm hover:text-white transition-colors">
                  Localisation & activités
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Réserver
            </h3>
            <ul className="space-y-2">
              <li>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">
                  Réserver sur Booking.com →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-sm">{CONTACT_EMAIL}</li>
              <li className="text-sm">{ADDRESS.street}</li>
              <li className="text-sm">{ADDRESS.postalCode} {ADDRESS.city}, {ADDRESS.region}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {SITE_NAME}. Tous droits réservés.
          </p>
          <p className="text-xs text-gray-500">
            Location mobil-home Corte, Corse — Calme, nature et vue montagne
          </p>
        </div>
      </div>
    </footer>
  );
}
