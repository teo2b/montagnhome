import { SITE_NAME, SITE_URL, CONTACT_EMAIL } from "@/lib/data";

interface JsonLdProps {
  additionalData?: Record<string, unknown>;
}

export default function JsonLd({ additionalData }: JsonLdProps) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: SITE_NAME,
    description:
      "Location de mobil homes de qualité à Corte, en Corse. Deux hébergements confortables au cœur des montagnes corses pour des vacances nature inoubliables.",
    url: SITE_URL,
    email: CONTACT_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Corte",
      addressRegion: "Corse",
      postalCode: "20250",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.3054,
      longitude: 9.1489,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      reviewCount: "56",
    },
    priceRange: "60€ - 130€ / nuit",
    ...additionalData,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  );
}
