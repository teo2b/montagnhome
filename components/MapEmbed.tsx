interface MapEmbedProps {
  src: string;
  title?: string;
}

export default function MapEmbed({ src, title = "Carte Google Maps — Corte, Corse" }: MapEmbedProps) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src={src}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className="w-full"
      />
    </div>
  );
}
