"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE_NAME } from "@/lib/data";
import BookingCTA from "@/components/BookingCTA";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/nos-mobil-homes", label: "Nos Mobil-Homes" },
  { href: "/localisation", label: "Localisation" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/75 backdrop-blur-xl shadow-[0_10px_30px_-22px_rgba(15,23,42,0.8)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-brand-green tracking-tight sm:text-2xl">
              {SITE_NAME}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/70 p-1.5" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-brand-beige hover:text-brand-green"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <BookingCTA size="sm" label="Réserver" className="rounded-lg shadow-none" />
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100/80 bg-white/90 backdrop-blur-xl">
          <nav className="flex flex-col px-4 py-4 space-y-3" aria-label="Menu mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-brand-beige hover:text-brand-green"
              >
                {link.label}
              </Link>
            ))}
            <BookingCTA
              fullWidth
              onClick={() => setMobileOpen(false)}
              label="Voir les disponibilités sur Booking.com"
            />
          </nav>
        </div>
      )}
    </header>
  );
}
