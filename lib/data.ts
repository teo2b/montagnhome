export const SITE_URL = "https://www.muntagnhome.fr";
export const SITE_NAME = "Muntagn'home";
export const CONTACT_EMAIL = "contact@muntagnhome.fr";
export const WHATSAPP_NUMBER = "+33600000000";
export const BOOKING_URL =
  "https://www.booking.com/hotel/fr/mobile-home-corte.fr.html";
export const AIRBNB_URL = "https://www.airbnb.fr";

export const ADDRESS = {
  street: "Route Territoriale 50, lot Purette N°29",
  altStreet: "865 route d'Aléria",
  postalCode: "20250",
  city: "Corte",
  region: "Haute-Corse",
  country: "France",
};

export const RATING = { value: 4.8, max: 5, reviewCount: 50 };

export const mobilHomeInfo = {
  surface: 30,
  capacity: 4,
  bedrooms: 2,
  bathrooms: 1,
  beds: 2,
  priceFrom: 70,
  checkIn: "18h00 – 20h00",
  checkOut: "05h00 – 10h00",
  deposit: 100,
  count: 2,
};

export const images = [
  { src: "/images/mobil-home-1.svg", alt: "Mobil home avec terrasse vue montagne à Corte, Corse — location vacances" },
  { src: "/images/mobil-home-2.svg", alt: "Salon lumineux et cuisine équipée du mobil home à Corte, Corse" },
  { src: "/images/mobil-home-3.svg", alt: "Chambre double confortable du mobil home location Corte Corse" },
  { src: "/images/mobil-home-4.svg", alt: "Terrasse privée avec vue sur les montagnes corses au coucher du soleil" },
  { src: "/images/mobil-home-5.svg", alt: "Jardin privatif et barbecue du mobil home Muntagn'home à Corte" },
];

export const amenities = [
  { icon: "ac", label: "Climatisation" },
  { icon: "kitchen", label: "Cuisine équipée" },
  { icon: "parking", label: "Parking gratuit" },
  { icon: "terrace", label: "Terrasse vue montagne" },
  { icon: "bbq", label: "Barbecue" },
  { icon: "garden", label: "Jardin privatif" },
  { icon: "shower", label: "Douche & sèche-cheveux" },
  { icon: "mountain", label: "Vue montagne & ville" },
  { icon: "bed", label: "Linge disponible (suppl.)" },
  { icon: "kitchen", label: "Réfrigérateur & cafetière" },
];

export const description = `Imaginez vos soirées d'été sur la terrasse, un verre à la main, avec vue sur les montagnes corses baignées par la lumière dorée du couchant. C'est exactement ce qui vous attend chez Muntagn'home, à Corte, au cœur de la Corse.

Nos deux mobil homes de 30 m² vous offrent un cadre idéal pour décrocher : 2 chambres confortables, un salon lumineux, une cuisine entièrement équipée et une terrasse privée face aux montagnes. Climatisation, barbecue, jardin, parking gratuit — tout est pensé pour que vous n'ayez qu'à profiter.

Ici, pas de bétonnage ni de tourisme de masse. Juste le chant des oiseaux le matin, l'odeur du maquis et des montagnes à perte de vue. Corte est la porte d'entrée de la Corse sauvage : les gorges de la Restonica et leurs piscines naturelles sont à 15 minutes, la Citadelle historique à 20 minutes à pied, et le GR20 passe juste à côté.

Que vous soyez en couple en quête de calme ou en famille pour une aventure nature, nos mobil homes sont le camp de base parfait. À 1 km du Parc Naturel Régional de Corse, vous êtes au centre de l'île — idéalement placé pour explorer aussi bien la montagne que les plages de la côte orientale (45 min).

Réservez dès maintenant sur Airbnb ou Booking.com et vivez la Corse autrement — loin des foules, au plus près de la nature.`;

export const pricing = [
  { season: "Basse saison (oct–mars)", price: "70 €/nuit" },
  { season: "Moyenne saison (avr–juin, sept)", price: "90 €/nuit" },
  { season: "Haute saison (juil–août)", price: "110 €/nuit" },
];

export interface Testimonial {
  name: string;
  city: string;
  rating: number;
  date: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marie",
    city: "Lyon",
    rating: 5,
    date: "Août 2025",
    text: "Coup de cœur total. La terrasse avec vue sur les montagnes, c'est juste magique au coucher du soleil. Mobil home impeccable, super bien équipé. Les gorges de la Restonica à 15 min, on y est allé tous les jours. On revient l'été prochain, c'est sûr !",
  },
  {
    name: "Thomas",
    city: "Paris",
    rating: 5,
    date: "Juillet 2025",
    text: "On cherchait le calme, on a trouvé le paradis. Loin des stations balnéaires bondées, ici c'est la vraie Corse. Le mobil home est nickel, la terrasse incroyable. Corte est une ville magnifique et les randonnées autour sont exceptionnelles.",
  },
  {
    name: "Sophie & Marc",
    city: "Marseille",
    rating: 5,
    date: "Juin 2025",
    text: "3ème séjour et toujours aussi bien. L'emplacement est parfait : restonica, tavignano, citadelle, tout est accessible. Rapport qualité-prix imbattable pour la Corse. On recommande les yeux fermés.",
  },
  {
    name: "Laurent",
    city: "Toulouse",
    rating: 5,
    date: "Septembre 2025",
    text: "Séjour en septembre, hors saison, un vrai bonheur. Calme absolu, températures parfaites, sentiers de rando déserts. Le mobil home est très propre et bien pensé. La vue depuis la terrasse vaut à elle seule le déplacement.",
  },
];

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: "mountain",
    title: "Vue montagne depuis la terrasse",
    description: "Réveillez-vous face aux montagnes corses. Terrasse privée avec panorama exceptionnel.",
  },
  {
    icon: "peace",
    title: "Calme absolu, zéro tourisme de masse",
    description: "Pas de béton, pas de foule. Juste la nature, le maquis et le silence.",
  },
  {
    icon: "family",
    title: "Tout confort, rien à prévoir",
    description: "Clim, cuisine équipée, parking, barbecue, jardin. Posez vos valises, on s'occupe du reste.",
  },
  {
    icon: "compass",
    title: "Restonica à 15 min, Citadelle à 20 min",
    description: "Piscines naturelles, randonnées mythiques, patrimoine corse — tout est à côté.",
  },
];

export interface Activity {
  title: string;
  description: string;
  distance: string;
  icon: string;
}

export const activities: Activity[] = [
  {
    title: "Gorges de la Restonica",
    description: "Vallée spectaculaire avec piscines naturelles et sentiers de randonnée menant aux lacs de Mélo et Capitello.",
    distance: "15 min en voiture",
    icon: "water",
  },
  {
    title: "Citadelle de Corte",
    description: "Forteresse historique surplombant la ville, abritant le Musée de la Corse. Vue panoramique exceptionnelle.",
    distance: "20 min à pied",
    icon: "castle",
  },
  {
    title: "GR20 — Sentier mythique",
    description: "Le plus célèbre sentier de grande randonnée d'Europe traverse la région. Étapes accessibles depuis Corte.",
    distance: "Accès direct",
    icon: "hiking",
  },
  {
    title: "Vallée du Tavignano",
    description: "Randonnée familiale le long du fleuve Tavignano avec vasques naturelles pour la baignade.",
    distance: "10 min en voiture",
    icon: "tree",
  },
  {
    title: "Forêt de Vizzavona",
    description: "Forêt de pins laricio centenaires, cascades et piscines naturelles. Idéal pour une journée fraîcheur.",
    distance: "30 min en voiture",
    icon: "forest",
  },
  {
    title: "Plages de la côte Est",
    description: "Les belles plages d'Aléria et de la côte orientale sont accessibles pour une journée balnéaire.",
    distance: "45 min en voiture",
    icon: "beach",
  },
];

export const locationContent = {
  title: "Découvrir Corte et la Corse",
  seoTitle: "Corte, Corse — Activités, Nature & Randonnées | Muntagn'home",
  seoDescription:
    "Découvrez Corte, capitale historique de la Corse : gorges de la Restonica, GR20, citadelle, baignade en rivière. Location mobil home au cœur de la montagne corse.",
  intro: `Corte n'est pas une destination balnéaire comme les autres. C'est la Corse authentique : montagnes sauvages, rivières cristallines, patrimoine millénaire. Et c'est exactement là que se trouve Muntagn'home.`,
  description: `Choisir Corte pour vos vacances en mobil home, c'est opter pour une Corse authentique, loin des foules estivales du littoral. Ici, la montagne est reine : sommets enneigés au printemps, forêts de pins laricio centenaires, rivières cristallines et vallées sauvages composent un décor naturel exceptionnel.

La ville elle-même mérite le détour. Sa citadelle, perchée sur un promontoire rocheux, domine les toits de la vieille ville et offre une vue imprenable sur les vallées de la Restonica et du Tavignano. Le Musée de la Corse, installé dans la citadelle, retrace l'histoire et les traditions de l'île à travers des expositions fascinantes.

Les gorges de la Restonica sont le joyau naturel de la région. Cette vallée glaciaire, classée Grand Site de France, offre des paysages à couper le souffle. En été, les vasques d'eau turquoise sont des piscines naturelles idéales pour se rafraîchir après une randonnée. Le sentier menant aux lacs de Mélo (1 711 m) et Capitello (1 930 m) est une randonnée emblématique accessible à toute la famille.

Pour les plus sportifs, Corte est un point d'accès privilégié au célèbre GR20, considéré comme le plus beau sentier de grande randonnée d'Europe. Plusieurs étapes du sentier sont accessibles depuis la région, permettant des randonnées à la journée spectaculaires.

La vallée du Tavignano offre une alternative plus tranquille, avec un sentier longeant le fleuve entre piscines naturelles et forêts ombragées. C'est une randonnée idéale pour les familles avec enfants.

Au-delà de la nature, la gastronomie corse est un autre trésor à découvrir. Fromages de brebis, charcuterie artisanale, miel de maquis, vins de terroir… les producteurs locaux et les restaurants de Corte vous feront goûter aux saveurs authentiques de l'île.

En séjournant dans nos mobil homes à Corte, vous bénéficiez d'un emplacement stratégique pour explorer toute la Corse : la côte orientale et ses plages sont à moins d'une heure, Ajaccio et Bastia sont facilement accessibles, et les plus beaux villages de montagne sont à portée de main.`,
  mapEmbedUrl:
    "https://maps.google.com/maps?q=865+route+d%27Aleria+20250+Corte+France&t=&z=15&ie=UTF8&iwloc=&output=embed",
};

export const seoHomeText = `Vous cherchez une location de mobil home à Corte, en Corse ? Muntagn'home vous propose deux hébergements tout confort au cœur de la montagne corse, à deux pas des gorges de la Restonica et de la Citadelle historique.

Nos mobil homes de 30 m² sont idéalement situés sur la Route Territoriale 50 à Corte (20250), au centre géographique de l'île de Beauté. Chaque hébergement dispose de 2 chambres, d'une cuisine équipée, d'une terrasse privée avec vue sur les montagnes et d'un jardin avec barbecue. Climatisation, parking gratuit et linge de maison disponible.

Contrairement aux locations mobil home du littoral corse souvent bondées en été, Corte offre une expérience différente : calme, nature préservée et authenticité. Les piscines naturelles de la Restonica remplacent avantageusement les plages surpeuplées, et les sentiers de randonnée (GR20, vallée du Tavignano) sont accessibles à pied.

Que vous cherchiez un mobil home en Corse pour un séjour en famille, un week-end en couple ou une semaine de randonnée, Muntagn'home est le point de départ idéal. Notre emplacement au centre de la Corse vous permet de rejoindre aussi bien les plages de la côte orientale (45 min) que les plus beaux villages de montagne de l'île.

Réservez votre mobil home à Corte dès maintenant sur Airbnb ou Booking.com et découvrez la Corse autrement.`;
