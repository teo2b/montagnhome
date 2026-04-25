import { BOOKING_URL } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-corse.png')" }}
        role="img"
        aria-label="Vue panoramique des montagnes corses depuis la terrasse du mobil home à Corte"
      />

      <div className="relative z-20 mx-auto max-w-4xl px-4 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          Location mobil-home à&nbsp;Corte en&nbsp;Corse
          <span className="block mt-2 text-brand-sand">Calme, nature et vue&nbsp;montagne</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          2 mobil-homes tout confort au cœur de la vallée de&nbsp;la&nbsp;Restonica
        </p>

        <div className="mt-10">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-[#003580] px-10 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#00254d] transition-colors"
          >
            Réserver sur Booking.com
          </a>
        </div>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-5 py-2.5">
          <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm font-semibold text-white">
            Noté 4.8/5 — Plus de 50 séjours réalisés
          </span>
        </div>
      </div>
    </section>
  );
}
