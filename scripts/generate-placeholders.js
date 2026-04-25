const fs = require("fs");
const path = require("path");

const imagesDir = path.join(__dirname, "..", "public", "images");

function createSVG(width, height, bgColor, text) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${bgColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1a3a0a;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="Georgia, serif" font-size="${Math.min(width, height) * 0.06}" fill="#fff" opacity="0.8">${text}</text>
  <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.min(width, height) * 0.03}" fill="#fff" opacity="0.5">${width}x${height} — Remplacez par une vraie photo</text>
</svg>`;
}

const imgs = [
  { name: "hero-corse.svg", w: 1920, h: 1080, color: "#2D5016", label: "Vue montagnes corses" },
  { name: "corte-citadelle.svg", w: 1200, h: 900, color: "#3a5a1e", label: "Citadelle de Corte" },
  { name: "corte-panorama.svg", w: 1920, h: 800, color: "#1e4a0e", label: "Panorama Corte" },
  { name: "og-image.svg", w: 1200, h: 630, color: "#2D5016", label: "Muntagnhome — Mobil Home Corse" },
  { name: "mobil-home-1.svg", w: 1200, h: 900, color: "#3a6a1e", label: "Mobil home — Exterieur" },
  { name: "mobil-home-2.svg", w: 1200, h: 900, color: "#2a5a16", label: "Mobil home — Salon & Cuisine" },
  { name: "mobil-home-3.svg", w: 1200, h: 900, color: "#4a7a28", label: "Mobil home — Chambre" },
  { name: "mobil-home-4.svg", w: 1200, h: 900, color: "#3a6020", label: "Mobil home — Terrasse" },
  { name: "mobil-home-5.svg", w: 1200, h: 900, color: "#2D5016", label: "Mobil home — Jardin & BBQ" },
];

for (const img of imgs) {
  fs.writeFileSync(path.join(imagesDir, img.name), createSVG(img.w, img.h, img.color, img.label));
  console.log("Created " + img.name);
}
console.log("Done.");
