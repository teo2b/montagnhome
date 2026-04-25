import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-serif text-6xl font-bold text-brand-green">404</h1>
      <p className="mt-4 text-xl text-gray-600">
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="rounded-xl bg-brand-green px-6 py-3 text-sm font-semibold text-white hover:bg-brand-green-light transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/contact"
          className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-brand-green hover:text-brand-green transition-colors"
        >
          Nous contacter
        </Link>
      </div>
    </div>
  );
}
