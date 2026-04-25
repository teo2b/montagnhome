export const SITE_URL = "https://www.muntagnhome.fr";
export const SITE_NAME = "Muntagn'home";
export const CONTACT_EMAIL = "contact@muntagnhome.fr";
export const WHATSAPP_NUMBER = "+33600000000";
export const AIRBNB_URL = "https://www.airbnb.fr";
export const BOOKING_URL = "https://www.booking.com";

export interface MobileHome {
  slug: string;
  name: string;
  tagline: string;
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  priceFrom: number;
  rating: number;
  reviewCount: number;
  bookingCount: number;
  airbnbUrl: string;
  bookingUrl: string;
  images: { src: string; alt: string }[];
  amenities: { icon: string; label: string }[];
  description: string;
  seoTitle: string;
  seoDescription: string;
  pricing: { season: string; price: string }[];
}

export const mobileHomes: MobileHome[] = [
  {
    slug: "mobil-home-1",
    name: "Le Panorama",
    tagline: "Espace et confort pour toute la famille",
    capacity: 6,
    bedrooms: 3,
    bathrooms: 1,
    priceFrom: 80,
    rating: 4.9,
    reviewCount: 32,
    bookingCount: 127,
    airbnbUrl: AIRBNB_URL,
    bookingUrl: BOOKING_URL,
    images: [
      { src: "/images/panorama-1.svg", alt: "Mobil home Le Panorama avec vue sur les montagnes corses à Corte" },
      { src: "/images/panorama-2.svg", alt: "Salon spacieux du mobil home Le Panorama location vacances Corse" },
      { src: "/images/panorama-3.svg", alt: "Chambre double du mobil home familial Le Panorama Corte" },
      { src: "/images/panorama-4.svg", alt: "Cuisine équipée du mobil home Le Panorama en Corse" },
      { src: "/images/panorama-5.svg", alt: "Terrasse extérieure du mobil home Le Panorama avec vue montagne" },
    ],
    amenities: [
      { icon: "wifi", label: "Wi-Fi gratuit" },
      { icon: "parking", label: "Parking privé" },
      { icon: "terrace", label: "Terrasse couverte" },
      { icon: "kitchen", label: "Cuisine équipée" },
      { icon: "ac", label: "Climatisation" },
      { icon: "tv", label: "TV écran plat" },
      { icon: "bbq", label: "Barbecue" },
      { icon: "garden", label: "Jardin privatif" },
      { icon: "washing", label: "Lave-linge" },
      { icon: "bed", label: "Linge de lit fourni" },
      { icon: "shower", label: "Salle d'eau moderne" },
      { icon: "mountain", label: "Vue montagne" },
    ],
    description: `Bienvenue dans Le Panorama, notre mobil home premium idéalement situé à Corte, au cœur de la Corse. Avec ses 3 chambres spacieuses et sa capacité d'accueil de 6 personnes, c'est le choix parfait pour des vacances en famille inoubliables dans les montagnes corses.

Dès votre arrivée, vous serez séduit par la vue imprenable sur les montagnes environnantes depuis la terrasse couverte. Le matin, prenez votre petit-déjeuner en admirant les sommets corses baignés par la lumière dorée du soleil levant. Le soir, profitez du barbecue en famille tout en savourant la douceur des soirées méditerranéennes.

À l'intérieur, Le Panorama offre tout le confort nécessaire pour un séjour sans souci. La cuisine est entièrement équipée avec réfrigérateur, plaques de cuisson, four micro-ondes et tout le nécessaire pour préparer vos repas. Le salon lumineux dispose d'un canapé confortable et d'une télévision écran plat pour les soirées en famille.

Les trois chambres se composent d'une chambre parentale avec lit double, d'une chambre avec deux lits simples et d'une troisième chambre avec un lit double. La salle d'eau moderne avec douche à l'italienne complète cet espace de vie pensé pour votre bien-être.

Situé à quelques minutes du centre historique de Corte et des gorges de la Restonica, Le Panorama est le point de départ idéal pour explorer la Corse authentique. Randonnées, baignade en rivière, découverte du patrimoine corse… vos journées seront aussi riches que reposantes.

Profitez de la connexion Wi-Fi gratuite, du parking privé et du jardin privatif pour un séjour en toute sérénité. Notre mobil home est régulièrement entretenu et nettoyé avec le plus grand soin pour vous garantir un accueil irréprochable.`,
    seoTitle: "Le Panorama — Mobil Home 6 Personnes à Corte, Corse | Muntagn'home",
    seoDescription: "Louez Le Panorama, mobil home familial de 3 chambres à Corte en Corse. Vue montagne, terrasse, cuisine équipée. Idéal pour des vacances nature en famille. À partir de 80€/nuit.",
    pricing: [
      { season: "Basse saison (oct–mars)", price: "80 €/nuit" },
      { season: "Moyenne saison (avr–juin, sept)", price: "100 €/nuit" },
      { season: "Haute saison (juil–août)", price: "130 €/nuit" },
      { season: "Semaine haute saison", price: "790 €" },
    ],
  },
  {
    slug: "mobil-home-2",
    name: "Le Maquis",
    tagline: "Un cocon intimiste au cœur de la nature",
    capacity: 4,
    bedrooms: 2,
    bathrooms: 1,
    priceFrom: 60,
    rating: 4.8,
    reviewCount: 24,
    bookingCount: 98,
    airbnbUrl: AIRBNB_URL,
    bookingUrl: BOOKING_URL,
    images: [
      { src: "/images/maquis-1.svg", alt: "Mobil home Le Maquis entouré de nature corse à Corte" },
      { src: "/images/maquis-2.svg", alt: "Intérieur chaleureux du mobil home Le Maquis location Corse" },
      { src: "/images/maquis-3.svg", alt: "Chambre confortable du mobil home Le Maquis vacances Corte" },
      { src: "/images/maquis-4.svg", alt: "Coin cuisine aménagé du mobil home Le Maquis en Corse" },
      { src: "/images/maquis-5.svg", alt: "Terrasse ombragée du mobil home Le Maquis avec vue nature" },
    ],
    amenities: [
      { icon: "wifi", label: "Wi-Fi gratuit" },
      { icon: "parking", label: "Parking privé" },
      { icon: "terrace", label: "Terrasse ombragée" },
      { icon: "kitchen", label: "Cuisine équipée" },
      { icon: "ac", label: "Climatisation" },
      { icon: "tv", label: "TV écran plat" },
      { icon: "bbq", label: "Barbecue partagé" },
      { icon: "garden", label: "Espace vert" },
      { icon: "bed", label: "Linge de lit fourni" },
      { icon: "shower", label: "Salle d'eau" },
      { icon: "mountain", label: "Vue nature" },
      { icon: "pets", label: "Animaux acceptés" },
    ],
    description: `Découvrez Le Maquis, notre mobil home cosy niché dans un écrin de verdure à Corte, en Haute-Corse. Avec ses 2 chambres confortables et sa capacité de 4 personnes, il est idéal pour un couple ou une petite famille en quête de tranquillité et de nature.

Le Maquis tire son nom du maquis corse, cette végétation sauvage et parfumée qui entoure votre hébergement. Depuis la terrasse ombragée, respirez les senteurs de romarin, de thym et d'immortelle tout en contemplant les collines verdoyantes. Un véritable havre de paix pour se ressourcer loin de l'agitation quotidienne.

L'intérieur, décoré avec goût dans un esprit nature et chaleureux, comprend un séjour lumineux avec coin repas, une cuisine fonctionnelle entièrement équipée, une chambre parentale avec lit double et une seconde chambre avec deux lits simples. La salle d'eau avec douche complète cet espace de vie intime et bien pensé.

Le Maquis est le point de départ rêvé pour les amoureux de la nature et de la randonnée. Les gorges de la Restonica sont accessibles en quelques minutes, tout comme les sentiers menant aux lacs de montagne emblématiques de la région. Le centre historique de Corte, avec sa citadelle et ses ruelles pittoresques, est également à proximité immédiate.

Profitez du Wi-Fi gratuit pour planifier vos excursions, du parking privé pour stationner en toute tranquillité, et du barbecue partagé pour des soirées conviviales sous les étoiles corses. Les animaux de compagnie sont les bienvenus, car nous savons que les vacances sont encore meilleures quand toute la famille est réunie.

Réservez dès maintenant votre séjour au Maquis et vivez l'expérience authentique de la montagne corse dans un confort moderne.`,
    seoTitle: "Le Maquis — Mobil Home 4 Personnes à Corte, Corse | Muntagn'home",
    seoDescription: "Louez Le Maquis, mobil home cosy de 2 chambres à Corte en Corse. Terrasse ombragée, nature préservée, animaux acceptés. Parfait pour couple ou petite famille. Dès 60€/nuit.",
    pricing: [
      { season: "Basse saison (oct–mars)", price: "60 €/nuit" },
      { season: "Moyenne saison (avr–juin, sept)", price: "80 €/nuit" },
      { season: "Haute saison (juil–août)", price: "100 €/nuit" },
      { season: "Semaine haute saison", price: "590 €" },
    ],
  },
];

export interface Testimonial {
  name: string;
  rating: number;
  date: string;
  text: string;
  mobileHome: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marie L.",
    rating: 5,
    date: "Août 2025",
    text: "Un séjour absolument merveilleux ! Le Panorama porte bien son nom, la vue depuis la terrasse est à couper le souffle. Les enfants ont adoré et le mobil home était impeccable. On revient l'année prochaine !",
    mobileHome: "Le Panorama",
  },
  {
    name: "Thomas & Julie",
    rating: 5,
    date: "Juillet 2025",
    text: "Le Maquis est un vrai petit cocon. On cherchait un endroit calme en Corse, loin des stations balnéaires bondées, et on a trouvé le paradis. Corte est magnifique et les gorges de la Restonica sont inoubliables.",
    mobileHome: "Le Maquis",
  },
  {
    name: "Patrick D.",
    rating: 5,
    date: "Septembre 2025",
    text: "Troisième séjour chez Muntagn'home et toujours aussi bien. L'accueil est chaleureux, les mobil homes sont très bien entretenus et l'emplacement est parfait pour randonner. Je recommande à 100%.",
    mobileHome: "Le Panorama",
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
    description: "Au cœur des montagnes corses, entre maquis parfumé et sommets majestueux.",
  },
  {
    icon: "peace",
    title: "Calme absolu",
    description: "Loin de l'agitation touristique, un havre de paix pour se ressourcer vraiment.",
  },
  {
    icon: "family",
    title: "Idéal en famille",
    description: "Des hébergements pensés pour le confort de toute la famille, petits et grands.",
  },
  {
    icon: "compass",
    title: "Activités à proximité",
    description: "Randonnées, baignade en rivière, patrimoine corse… l'aventure est à votre porte.",
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
    distance: "5 min en voiture",
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
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23456.789!2d9.1489!3d42.3054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12da29e0a5e3e3e3%3A0x1234567890abcdef!2sCorte%2C+France!5e0!3m2!1sfr!2sfr!4v1234567890",
};
