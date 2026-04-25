import { BOOKING_URL } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-corse.png')" }}
        role="img"
        aria-label="Vue panoramique des montagnes corses près de Corte — location mobil home Corse"
      />

      <div className="relative z-20 mx-auto max-w-4xl px-4 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brand-sand">
          Corte, Corse — Au cœur des montagnes
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          Votre escapade en mobil home au&nbsp;cœur de&nbsp;la&nbsp;Corse
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Deux mobil homes tout confort à Corte, au pied des montagnes.
          Terrasse vue montagne, cuisine équipée, nature préservée.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-xl bg-[#003580] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#00254d] transition-colors"
          >
            Réserver sur Booking.com
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-300">
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            7.8/10 — 73 avis
          </span>
          <span>2 mobil homes · 4 pers. · 2 ch.</span>
        </div>
      </div>
    </section>
  );
}
