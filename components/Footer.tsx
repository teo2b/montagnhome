import Link from "next/link";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold text-white tracking-tight">
              {SITE_NAME}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Location de mobil homes en Corse, à Corte. Vivez des vacances authentiques au cœur des montagnes corses.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Nos hébergements
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mobil-home-1" className="text-sm hover:text-white transition-colors">
                  Le Panorama — 6 pers.
                </Link>
              </li>
              <li>
                <Link href="/mobil-home-2" className="text-sm hover:text-white transition-colors">
                  Le Maquis — 4 pers.
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Informations
            </h3>
            <ul className="space-y-2">
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
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-sm">{CONTACT_EMAIL}</li>
              <li className="text-sm">Corte, Haute-Corse, France</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {SITE_NAME}. Tous droits réservés.
          </p>
          <p className="text-xs text-gray-500">
            Location mobil home Corse — Corte, Haute-Corse
          </p>
        </div>
      </div>
    </footer>
  );
}
