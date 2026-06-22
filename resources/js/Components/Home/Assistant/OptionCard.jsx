import React from 'react';
import { Check } from 'lucide-react';

/**
 * Tarjeta de opción seleccionable.
 *
 * - `featured`: layout grande vertical (ícono arriba + descripción amplia),
 *   usado en el paso de ubicación.
 * - layout por defecto: compacto horizontal (ícono · texto · check).
 *
 * @param {Object}   option   - { label, sub, icon? }
 * @param {boolean}  selected
 * @param {boolean}  featured
 * @param {Function} onSelect
 */
export default function OptionCard({ option, selected, featured = false, onSelect }) {
  const OptIcon = option.icon;

  if (featured) {
    return (
      <button
        type="button"
        onClick={onSelect}
        className={`group flex flex-col rounded-3xl border-2 p-7 text-left transition-all duration-300 ${
          selected
            ? 'border-tevesat-primary bg-tevesat-primary/5 shadow-xl shadow-tevesat-primary/10'
            : 'border-gray-100 bg-white hover:border-tevesat-primary/40 hover:shadow-lg'
        }`}
      >
        <div className="mb-5 flex items-center justify-between">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors ${
              selected
                ? 'bg-tevesat-primary text-white'
                : 'bg-gray-50 text-gray-400 group-hover:bg-tevesat-primary/10 group-hover:text-tevesat-primary'
            }`}
          >
            {OptIcon && <OptIcon size={26} strokeWidth={2.4} />}
          </div>
          <div
            className={`flex h-7 w-7 items-center justify-center rounded-full border-2 transition-all ${
              selected
                ? 'border-tevesat-primary bg-tevesat-primary text-white'
                : 'border-gray-200 text-transparent group-hover:border-tevesat-primary/40'
            }`}
          >
            <Check size={15} strokeWidth={3.5} />
          </div>
        </div>
        <p className="text-xl font-black tracking-tight text-tevesat-tertiary-dark">
          {option.label}
        </p>
        <p className="mt-2 text-sm font-medium leading-relaxed text-gray-500">{option.sub}</p>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group flex items-center gap-4 rounded-2xl border-2 p-5 text-left transition-all duration-300 ${
        selected
          ? 'border-tevesat-primary bg-tevesat-primary/5 shadow-lg shadow-tevesat-primary/10'
          : 'border-gray-100 bg-white hover:border-tevesat-primary/40 hover:shadow-md'
      }`}
    >
      {OptIcon && (
        <div
          className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-colors ${
            selected
              ? 'bg-tevesat-primary text-white'
              : 'bg-gray-50 text-gray-400 group-hover:bg-tevesat-primary/10 group-hover:text-tevesat-primary'
          }`}
        >
          <OptIcon size={20} strokeWidth={2.4} />
        </div>
      )}
      <div className="flex-1">
        <p className="font-black leading-tight text-tevesat-tertiary-dark">{option.label}</p>
        <p className="text-xs font-medium text-gray-400">{option.sub}</p>
      </div>
      <div
        className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all ${
          selected
            ? 'border-tevesat-primary bg-tevesat-primary text-white'
            : 'border-gray-200 text-transparent group-hover:border-tevesat-primary/40'
        }`}
      >
        <Check size={14} strokeWidth={3.5} />
      </div>
    </button>
  );
}
