import { SITE_NAME, SITE_URL, CONTACT_EMAIL, ADDRESS, RATING } from "@/lib/data";

interface JsonLdProps {
  additionalData?: Record<string, unknown>;
}

export default function JsonLd({ additionalData }: JsonLdProps) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: SITE_NAME,
    description:
      "Location de mobil-homes à Corte, en Corse. Deux hébergements de 30m² tout équipés au cœur des montagnes corses avec terrasse vue montagne.",
    url: SITE_URL,
    email: CONTACT_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.3054,
      longitude: 9.1489,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(RATING.value),
      bestRating: String(RATING.max),
      reviewCount: String(RATING.reviewCount),
    },
    priceRange: "70€ - 110€ / nuit",
    numberOfRooms: 2,
    checkinTime: "18:00",
    checkoutTime: "10:00",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Climatisation", value: true },
      { "@type": "LocationFeatureSpecification", name: "Parking gratuit", value: true },
      { "@type": "LocationFeatureSpecification", name: "Terrasse vue montagne", value: true },
      { "@type": "LocationFeatureSpecification", name: "Barbecue", value: true },
      { "@type": "LocationFeatureSpecification", name: "Cuisine équipée", value: true },
    ],
    ...additionalData,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  );
}
