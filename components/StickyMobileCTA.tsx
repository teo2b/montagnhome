"use client";

import { BOOKING_URL } from "@/lib/data";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full rounded-xl bg-[#003580] py-3 text-center text-sm font-semibold text-white hover:bg-[#00254d] transition-colors"
      >
        Réserver sur Booking.com
      </a>
    </div>
  );
}
