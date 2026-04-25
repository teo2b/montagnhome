import Link from "next/link";
import Image from "next/image";
import type { MobileHome } from "@/lib/data";

interface MobileHomeCardProps {
  mobileHome: MobileHome;
}

export default function MobileHomeCard({ mobileHome }: MobileHomeCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={mobileHome.images[0].src}
          alt={mobileHome.images[0].alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-brand-green">
            {mobileHome.capacity} personnes
          </span>
          <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-brand-green">
            {mobileHome.bedrooms} chambres
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-serif text-2xl font-bold text-gray-900">
              {mobileHome.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{mobileHome.tagline}</p>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <svg className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold text-gray-900">{mobileHome.rating}</span>
            <span className="text-gray-400">({mobileHome.reviewCount})</span>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-600 leading-relaxed line-clamp-2">
          {mobileHome.description.substring(0, 150)}…
        </p>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-bold text-brand-green">
            À partir de {mobileHome.priceFrom} €
            <span className="text-sm font-normal text-gray-500"> / nuit</span>
          </p>
          <Link
            href={`/${mobileHome.slug}`}
            className="rounded-xl bg-brand-green px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-green-light transition-colors"
          >
            Découvrir
          </Link>
        </div>
      </div>
    </article>
  );
}
