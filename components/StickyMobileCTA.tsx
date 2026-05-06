"use client";

import BookingCTA from "@/components/BookingCTA";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <BookingCTA fullWidth label="Voir les disponibilités sur Booking.com" />
    </div>
  );
}
