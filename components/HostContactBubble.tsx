"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  HOST_FIRST_NAME,
  HOST_PHONE_DISPLAY,
  HOST_PHONE_E164,
  HOST_PHOTO_SRC,
} from "@/lib/data";

export default function HostContactBubble() {
  const [open, setOpen] = useState(false);
  const telHref = `tel:${HOST_PHONE_E164.replace(/\s/g, "")}`;

  return (
    <div className="fixed bottom-24 right-4 z-50 md:bottom-8 md:right-6">
      {open ? (
        <div
          id="host-contact-panel"
          className="w-[min(100vw-2rem,20rem)] rounded-2xl border border-gray-200/80 bg-white p-4 shadow-xl shadow-gray-900/10"
          role="dialog"
          aria-label="Contacter la locatrice"
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex min-w-0 items-center gap-3">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-beige">
                <Image
                  src={HOST_PHOTO_SRC}
                  alt={`Photo de ${HOST_FIRST_NAME}`}
                  width={112}
                  height={112}
                  className="h-full w-full object-cover object-[center_20%]"
                  sizes="56px"
                />
              </div>
              <div className="min-w-0">
                <p className="font-serif text-lg font-semibold leading-tight text-gray-900">
                  Bonjour, c'est {HOST_FIRST_NAME} 👋
                </p>
                <p className="mt-0.5 text-sm text-gray-600">
                  Je me ferai un plaisir de répondre à vos questions.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="shrink-0 rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/40"
              aria-label="Fermer"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <a
              href={telHref}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/50 focus-visible:ring-offset-2"
            >
              <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.608-1.288.608-.047 0-.094 0-.141-.003l-2.725-.189A18.003 18.003 0 012.25 6.75z"
                />
              </svg>
              M'appeler au {HOST_PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-xl border border-brand-green/30 bg-brand-beige/60 px-4 py-3 text-center text-sm font-semibold text-brand-green-dark transition-colors hover:bg-brand-beige focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/30 focus-visible:ring-offset-2"
            >
              M'envoyer un message
            </Link>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="host-contact-panel"
          id="host-contact-trigger"
          className="flex items-center gap-2 rounded-full border border-gray-200 bg-white py-2.5 pl-2.5 pr-4 text-sm font-semibold text-gray-800 shadow-lg shadow-gray-900/10 transition hover:border-brand-green/30 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/40"
        >
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-beige" aria-hidden>
            <Image
              src={HOST_PHOTO_SRC}
              alt=""
              width={80}
              height={80}
              className="h-full w-full object-cover object-[center_20%]"
              sizes="40px"
            />
          </span>
          Une question ? Je vous écoute
        </button>
      )}
    </div>
  );
}
