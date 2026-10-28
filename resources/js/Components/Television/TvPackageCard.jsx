import React, { useState } from 'react';
import { Tv, Trophy, Check, Star, ArrowRight } from 'lucide-react';
import { CHANNELS, WHATSAPP_URL } from './data/tv';
import LogoTile from './LogoTile';

/**
 * TvPackageCard - Tarjeta de paquete IPTV con selector interactivo de
 * adicionales (WIN SPORTS). El precio mostrado se actualiza según la opción
 * seleccionada.
 *
 * @param {Object} pkg - ver estructura en TV_PACKAGES (./data/tv.js)
 */
export default function TvPackageCard({ pkg }) {
  const [selected, setSelected] = useState(0);
  const recommended = pkg.recommended;
  const current = pkg.options[selected];
  const canales = CHANNELS.filter((ch) => ch[pkg.flag]).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div
      className={`group relative flex flex-col rounded-[2.5rem] p-8 transition-all duration-500 ${
        recommended
          ? 'border-2 border-tevesat-primary bg-white shadow-[0_40px_90px_-30px_rgba(236,50,55,0.45)] lg:-translate-y-4 lg:scale-[1.03]'
          : 'border border-gray-100 bg-white shadow-[0_30px_70px_-30px_rgba(0,0,0,0.2)] hover:-translate-y-2'
      }`}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-tevesat-primary px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-tevesat-primary/30">
            <Star size={12} className="fill-white" /> Altamente Recomendado
          </span>
        </div>
      )}

      {/* Encabezado */}
      <div className="mb-5 text-center">
        <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary">
          {pkg.name}
        </span>
        <h3 className="mt-2 text-2xl font-black tracking-tight text-tevesat-tertiary-dark">
          {pkg.title}
        </h3>
        <p className="mt-1 flex items-center justify-center gap-1.5 text-sm font-bold text-gray-400">
          <Tv size={14} className="text-tevesat-primary" /> {pkg.channels}
        </p>
      </div>

      {/* Precio dinámico */}
      <div className="mb-6 rounded-2xl bg-gray-50 py-5 text-center">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-2xl font-black text-tevesat-tertiary-dark">$</span>
          <span className="text-5xl font-black tracking-tighter text-tevesat-tertiary-dark">
            {current.total}
          </span>
          <span className="text-sm font-bold text-gray-400">/mes</span>
        </div>
        <p className="mt-1 text-[11px] font-black uppercase tracking-widest text-tevesat-primary">
          {selected === 0 ? 'Valor Mensual' : current.note}
        </p>
      </div>

      {/* Descripción */}
      <p className="mb-6 text-sm font-medium leading-relaxed text-gray-500">{pkg.description}</p>

      {/* Canales incluidos: grilla de logos con desplazamiento propio */}
      <p className="mb-3 flex items-center justify-between text-sm font-black text-tevesat-tertiary-dark">
        <span className="flex items-center gap-2">
          <Tv size={16} className="text-tevesat-primary" /> Canales incluidos
        </span>
        <span className="text-xs font-bold text-gray-400">{canales.length}</span>
      </p>
      <div className="mb-8 grid max-h-64 grid-cols-4 gap-x-2 gap-y-3 overflow-y-auto rounded-2xl bg-gray-50 p-3 [scrollbar-width:thin] sm:grid-cols-5 md:grid-cols-4">
        {canales.map((ch) => (
          <div key={ch.slug} className="flex min-w-0 flex-col items-center gap-1">
            <LogoTile channel={ch} size="h-12" />
            <span className="w-full truncate text-center text-[9px] font-bold text-gray-500">{ch.name}</span>
          </div>
        ))}
      </div>

      {/* Selector de adicionales */}
      <p className="mb-3 flex items-center gap-2 text-sm font-black text-tevesat-tertiary-dark">
        <Trophy size={16} className="text-tevesat-primary" /> {pkg.addonQuestion}
      </p>
      <div className="mb-8 space-y-3">
        {pkg.options.map((opt, idx) => {
          const active = selected === idx;
          return (
            <button
              key={opt.label}
              type="button"
              onClick={() => setSelected(idx)}
              className={`flex w-full items-center gap-3 rounded-2xl border-2 p-4 text-left transition-all duration-300 ${
                active
                  ? 'border-tevesat-primary bg-tevesat-primary/5'
                  : 'border-gray-100 bg-white hover:border-tevesat-primary/40'
              }`}
            >
              <span
                className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                  active
                    ? 'border-tevesat-primary bg-tevesat-primary text-white'
                    : 'border-gray-300 text-transparent'
                }`}
              >
                <Check size={12} strokeWidth={3.5} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-black leading-tight text-tevesat-tertiary-dark">
                  {opt.label}
                </span>
                <span className="block text-xs font-bold text-gray-400">
                  {opt.note}: ${opt.total}/mes
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* CTA */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`group/cta mt-auto flex items-center justify-center gap-2 rounded-2xl py-4 text-xs font-black uppercase tracking-widest transition-all duration-300 ${
          recommended
            ? 'bg-tevesat-primary text-white shadow-xl shadow-tevesat-primary/30 hover:bg-tevesat-primary-light hover:scale-105'
            : 'border-2 border-gray-200 bg-white text-tevesat-tertiary-dark hover:border-tevesat-primary hover:text-tevesat-primary'
        }`}
      >
        Contratar {pkg.name}
        <ArrowRight size={16} className="transition-transform group-hover/cta:translate-x-1" />
      </a>
    </div>
  );
}
