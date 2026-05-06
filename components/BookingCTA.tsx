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
  primary: "bg-[#003580] text-white hover:bg-[#00254d]",
  light: "bg-white text-[#003580] hover:bg-gray-100",
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
      className={`${widthClass} inline-flex items-center justify-center rounded-xl font-semibold shadow-md transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim()}
    >
      {label}
    </a>
  );
}
