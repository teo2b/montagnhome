"use client";

import { BOOKING_URL } from "@/lib/data";

type BookingCTAVariant = "primary" | "light";
type BookingCTASize = "sm" | "md" | "lg";

interface BookingCTAProps {
  className?: string;
  label?: string;
  variant?: BookingCTAVariant;
  size?: BookingCTASize;
  fullWidth?: boolean;
  onClick?: () => void;
}

const variantClasses: Record<BookingCTAVariant, string> = {
  primary:
    "bg-gradient-to-r from-[#003580] to-[#0048a6] text-white hover:from-[#002b66] hover:to-[#003b88] focus-visible:ring-[#003580]/30",
  light:
    "bg-white/95 text-[#003580] border border-white/60 hover:bg-white focus-visible:ring-white/50",
};

const sizeClasses: Record<BookingCTASize, string> = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-6 py-3.5 text-sm",
  lg: "px-10 py-4 text-base",
};

export default function BookingCTA({
  className = "",
  label = "Voir les disponibilités sur Booking.com",
  variant = "primary",
  size = "md",
  fullWidth = false,
  onClick,
}: BookingCTAProps) {
  const widthClass = fullWidth ? "w-full" : "w-full sm:w-auto";

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`${widthClass} inline-flex items-center justify-center rounded-2xl font-semibold tracking-tight shadow-[0_10px_25px_-12px_rgba(0,53,128,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-14px_rgba(0,53,128,0.75)] focus-visible:outline-none focus-visible:ring-4 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim()}
    >
      {label}
    </a>
  );
}
