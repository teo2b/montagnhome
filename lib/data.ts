export const SITE_URL = "https://www.muntagnhome.fr";
export const SITE_NAME = "Muntagn'home";
export const CONTACT_EMAIL = "contact@muntagnhome.fr";
export const WHATSAPP_NUMBER = "+33600000000";
export const BOOKING_URL =
  "https://www.booking.com/hotel/fr/mobile-home-corte.fr.html";

export const ADDRESS = {
  street: "Route Territoriale 50, lot Purette N°29",
  altStreet: "865 route d'Aléria",
  postalCode: "20250",
  city: "Corte",
  region: "Haute-Corse",
  country: "France",
};

export const RATING = { value: 7.8, max: 10, reviewCount: 73 };

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
  { src: "/images/mobil-home-1.svg", alt: "Mobil home Muntagn'home avec vue montagne à Corte, Corse" },
  { src: "/images/mobil-home-2.svg", alt: "Salon et cuisine équipée du mobil home location vacances Corte Corse" },
  { src: "/images/mobil-home-3.svg", alt: "Chambre double du mobil home Muntagn'home à Corte" },
  { src: "/images/mobil-home-4.svg", alt: "Terrasse avec vue montagne du mobil home en Corse" },
  { src: "/images/mobil-home-5.svg", alt: "Jardin et barbecue du mobil home Muntagn'home Corte" },
];

export const amenities = [
  { icon: "ac", label: "Climatisation" },
  { icon: "kitchen", label: "Cuisine équipée" },
  { icon: "parking", label: "Parking gratuit" },
  { icon: "terrace", label: "Terrasse vue montagne" },
  { icon: "bbq", label: "Barbecue" },
  { icon: "garden", label: "Jardin" },
  { icon: "shower", label: "Douche & sèche-cheveux" },
  { icon: "mountain", label: "Vue montagne & ville" },
  { icon: "bed", label: "Linge disponible (suppl.)" },
  { icon: "kitchen", label: "Réfrigérateur & cafetière" },
];

export const description = `Bienvenue chez Muntagn'home, votre location de mobil homes à Corte, au cœur de la Corse. Nous proposons deux mobil homes identiques de 30 m², chacun équipé pour accueillir jusqu'à 4 personnes dans un cadre naturel exceptionnel, avec vue sur les montagnes corses.

Chaque mobil home climatisé se compose de 2 chambres confortables, d'un salon lumineux avec coin repas, d'une cuisine entièrement équipée (réfrigérateur, cafetière, bouilloire, grille-pain) et d'une salle de bains avec douche et sèche-cheveux. À l'extérieur, profitez de votre terrasse privée offrant une vue imprenable sur les montagnes et la ville de Corte, d'un jardin et d'un barbecue pour des soirées conviviales.

Idéalement situé sur la Route Territoriale 50, notre hébergement vous place à seulement 20 minutes à pied de la célèbre Citadelle de Corte et à 450 mètres de la gare routière CFC. Les gorges de la Restonica et leurs piscines naturelles sont à 15 minutes en voiture, tandis que les lacs de Mélo et Capitello offrent des randonnées inoubliables à 17 km.

Le Parc Naturel Régional de Corse se trouve à seulement 1 km, et l'Université de Corse Pasquale Paoli à 1,7 km. Pour les amoureux de la montagne, le Monte Cinto, point culminant de la Corse, est accessible depuis la région.

Avec un parking gratuit, un cadre paisible et un emplacement stratégique au centre de l'île, Muntagn'home est le point de départ idéal pour explorer la Corse authentique : randonnées en montagne, baignade en rivière, découverte du patrimoine et gastronomie locale.

Réservez directement sur Booking.com et profitez d'un séjour ressourçant dans les montagnes corses, à partir de 70 € la nuit.`;

export const pricing = [
  { season: "Basse saison (oct–mars)", price: "70 €/nuit" },
  { season: "Moyenne saison (avr–juin, sept)", price: "90 €/nuit" },
  { season: "Haute saison (juil–août)", price: "110 €/nuit" },
];

export interface Testimonial {
  name: string;
  rating: number;
  date: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marie L.",
    rating: 5,
    date: "Août 2025",
    text: "Un séjour merveilleux ! La vue depuis la terrasse est à couper le souffle. Le mobil home était propre et bien équipé. Corte est une ville magnifique, on a adoré les gorges de la Restonica. On revient l'année prochaine !",
  },
  {
    name: "Thomas & Julie",
    rating: 5,
    date: "Juillet 2025",
    text: "On cherchait un endroit calme en Corse, loin des stations balnéaires bondées, et on a trouvé le paradis. Le mobil home est confortable, la terrasse avec vue montagne est un vrai plus. Corte est magnifique.",
  },
  {
    name: "Patrick D.",
    rating: 4,
    date: "Septembre 2025",
    text: "Troisième séjour chez Muntagn'home et toujours aussi bien. L'emplacement est parfait pour randonner dans les gorges de la Restonica et la vallée du Tavignano. Bon rapport qualité-prix. Je recommande.",
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
    title: "Nature préservée",
    description: "Au cœur des montagnes corses, à 1 km du Parc Naturel Régional de Corse.",
  },
  {
    icon: "peace",
    title: "Calme & vue montagne",
    description: "Terrasse avec vue sur les montagnes, loin de l'agitation touristique du littoral.",
  },
  {
    icon: "family",
    title: "Tout équipé",
    description: "Climatisation, cuisine équipée, parking gratuit, barbecue et jardin privatif.",
  },
  {
    icon: "compass",
    title: "Emplacement idéal",
    description: "20 min à pied de la Citadelle, 15 min des gorges de la Restonica en voiture.",
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
    distance: "15 min en voiture (17 km)",
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
    description: "Les belles plages d'Aléria et de la côte orientale sont accessibles pour une journée farniente.",
    distance: "45 min en voiture",
    icon: "beach",
  },
];

export const locationContent = {
  title: "Découvrir Corte et la Corse",
  seoTitle: "Découvrir Corte et la Corse — Activités & Nature | Muntagn'home",
  seoDescription:
    "Explorez Corte, capitale historique de la Corse, et ses environs : gorges de la Restonica, GR20, citadelle, baignade en rivière. Location mobil home à Corte.",
  intro: `Corte, ancienne capitale de la Corse indépendante, est une ville chargée d'histoire nichée au cœur des montagnes. Située au centre géographique de l'île de Beauté, elle offre un accès privilégié aux plus beaux sites naturels de la Corse intérieure.`,
  description: `Choisir Corte pour vos vacances en mobil home, c'est opter pour une Corse authentique, loin des foules estivales du littoral. Ici, la montagne est reine : sommets enneigés au printemps, forêts de pins laricio centenaires, rivières cristallines et vallées sauvages composent un décor naturel exceptionnel.

La ville elle-même mérite le détour. Sa citadelle, perchée sur un promontoire rocheux, domine les toits de la vieille ville et offre une vue imprenable sur les vallées de la Restonica et du Tavignano. Le Musée de la Corse, installé dans la citadelle, retrace l'histoire et les traditions de l'île à travers des expositions fascinantes.

Les gorges de la Restonica sont le joyau naturel de la région. Cette vallée glaciaire, classée Grand Site de France, offre des paysages à couper le souffle. En été, les vasques d'eau turquoise sont des piscines naturelles idéales pour se rafraîchir après une randonnée. Le sentier menant aux lacs de Mélo (1 711 m) et Capitello (1 930 m) est une randonnée emblématique accessible à toute la famille.

Pour les plus sportifs, Corte est un point d'accès privilégié au célèbre GR20, considéré comme le plus beau sentier de grande randonnée d'Europe. Plusieurs étapes du sentier sont accessibles depuis la région, permettant des randonnées à la journée spectaculaires.

La vallée du Tavignano offre une alternative plus tranquille, avec un sentier longeant le fleuve entre piscines naturelles et forêts ombragées. C'est une randonnée idéale pour les familles avec enfants.

Au-delà de la nature, la gastronomie corse est un autre trésor à découvrir. Fromages de brebis, charcuterie artisanale, miel de maquis, vins de terroir… les producteurs locaux et les restaurants de Corte vous feront goûter aux saveurs authentiques de l'île.

En séjournant dans nos mobil homes à Corte, vous bénéficiez d'un emplacement stratégique pour explorer toute la Corse : la côte orientale et ses plages sont à moins d'une heure, Ajaccio et Bastia sont facilement accessibles, et les plus beaux villages de montagne sont à portée de main.`,
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2930.5!2d9.1489!3d42.3054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12da29e0a5e3e3e3%3A0x1234567890abcdef!2sCorte%2C+France!5e0!3m2!1sfr!2sfr!4v1234567890",
};
