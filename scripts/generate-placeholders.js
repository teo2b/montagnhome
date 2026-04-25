const fs = require("fs");
const path = require("path");

const imagesDir = path.join(__dirname, "..", "public", "images");

function createSVG(width, height, bgColor, text, textColor = "#fff") {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${bgColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1a3a0a;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="Georgia, serif" font-size="${Math.min(width, height) * 0.06}" fill="${textColor}" opacity="0.8">${text}</text>
  <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.min(width, height) * 0.03}" fill="${textColor}" opacity="0.5">${width}x${height} — Remplacez par une vraie photo</text>
</svg>`;
}

const images = [
  { name: "hero-corse.jpg", w: 1920, h: 1080, color: "#2D5016", label: "Vue montagnes corses" },
  { name: "corte-citadelle.jpg", w: 1200, h: 900, color: "#3a5a1e", label: "Citadelle de Corte" },
  { name: "corte-panorama.jpg", w: 1920, h: 800, color: "#1e4a0e", label: "Panorama Corte" },
  { name: "og-image.jpg", w: 1200, h: 630, color: "#2D5016", label: "Muntagn'home — Mobil Home Corse" },
  { name: "panorama-1.jpg", w: 1200, h: 900, color: "#3a6a1e", label: "Le Panorama — Extérieur" },
  { name: "panorama-2.jpg", w: 1200, h: 900, color: "#2a5a16", label: "Le Panorama — Salon" },
  { name: "panorama-3.jpg", w: 1200, h: 900, color: "#4a7a28", label: "Le Panorama — Chambre" },
  { name: "panorama-4.jpg", w: 1200, h: 900, color: "#3a6020", label: "Le Panorama — Cuisine" },
  { name: "panorama-5.jpg", w: 1200, h: 900, color: "#2D5016", label: "Le Panorama — Terrasse" },
  { name: "maquis-1.jpg", w: 1200, h: 900, color: "#3a5a20", label: "Le Maquis — Extérieur" },
  { name: "maquis-2.jpg", w: 1200, h: 900, color: "#2a4a18", label: "Le Maquis — Intérieur" },
  { name: "maquis-3.jpg", w: 1200, h: 900, color: "#4a6a30", label: "Le Maquis — Chambre" },
  { name: "maquis-4.jpg", w: 1200, h: 900, color: "#3a5a1a", label: "Le Maquis — Cuisine" },
  { name: "maquis-5.jpg", w: 1200, h: 900, color: "#2D5016", label: "Le Maquis — Terrasse" },
];

for (const img of images) {
  const svgName = img.name.replace(/\.jpg$/, ".svg");
  const svg = createSVG(img.w, img.h, img.color, img.label);
  fs.writeFileSync(path.join(imagesDir, svgName), svg);
  console.log(`Created ${svgName}`);
}

console.log("\nDone! Note: These are SVG placeholders.");
console.log("Replace them with real .jpg photos for production.");
