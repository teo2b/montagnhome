"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const message = String(formData.get("message") || "").trim();
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();

    if (!name || !email || message.length < 10) {
      setError("Merci de completer les champs obligatoires et de preciser votre message (10 caracteres minimum).");
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center" aria-live="polite">
        <svg className="mx-auto h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="mt-4 text-xl font-bold text-gray-900">
          Message envoyé !
        </h3>
        <p className="mt-2 text-gray-600">
          Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="sr-only" aria-live="polite">
        {error || "Formulaire pret a etre envoye"}
      </p>
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700" role="alert">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 focus:outline-none transition-colors"
            placeholder="Jean Dupont"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 focus:outline-none transition-colors"
            placeholder="jean@exemple.fr"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 focus:outline-none transition-colors"
            placeholder="+33 6 12 34 56 78"
          />
        </div>
        <div>
          <label htmlFor="dates" className="block text-sm font-medium text-gray-700 mb-2">
            Dates souhaitées
          </label>
          <input
            type="text"
            id="dates"
            name="dates"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 focus:outline-none transition-colors"
            placeholder="Ex : 15 juil. — 22 juil."
          />
        </div>
      </div>

      <div>
        <label htmlFor="mobilhome" className="block text-sm font-medium text-gray-700 mb-2">
          Mobil home souhaité
        </label>
        <select
          id="mobilhome"
          name="mobilhome"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 focus:outline-none transition-colors"
        >
          <option value="">— Choisir —</option>
          <option value="panorama">Le Panorama (6 pers.)</option>
          <option value="maquis">Le Maquis (4 pers.)</option>
          <option value="both">Les deux / indifférent</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 focus:outline-none transition-colors resize-none"
          placeholder="Votre message…"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-brand-green px-6 py-4 text-base font-semibold text-white shadow-md hover:bg-brand-green-light transition-colors"
      >
        Envoyer le message
      </button>
    </form>
  );
}
