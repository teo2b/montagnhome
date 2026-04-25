interface CTAButtonsProps {
  airbnbUrl: string;
  bookingUrl: string;
  className?: string;
}

export default function CTAButtons({ airbnbUrl, bookingUrl, className = "" }: CTAButtonsProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <a
        href={airbnbUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 rounded-xl bg-[#FF5A5F] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-md hover:bg-[#e04e52] transition-colors"
      >
        Réserver sur Airbnb
      </a>
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 rounded-xl bg-[#003580] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-md hover:bg-[#00254d] transition-colors"
      >
        Réserver sur Booking
      </a>
    </div>
  );
}
