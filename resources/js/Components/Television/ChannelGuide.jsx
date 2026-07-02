import React, { useState } from 'react';
import { Sparkles, SlidersHorizontal } from 'lucide-react';
import TvFlyer from './TvFlyer';
import ChannelSearch from './ChannelSearch';

/**
 * ChannelGuide - Parrilla oficial de canales con dos vistas conmutables:
 *
 *   1. "Parrilla Oficial (Folleto Recreado)" -> folleto NUPLIN (TvFlyer)
 *   2. "Buscador Interactivo"                -> buscador filtrable (ChannelSearch)
 *
 * Replica la sección de televisión de la parrilla oficial autorizada por TVYMAS.
 */
export default function ChannelGuide() {
  const [view, setView] = useState('flyer');

  return (
    <section className="relative overflow-hidden bg-gray-50 px-4 py-24 md:px-8">
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-tevesat-primary/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary">
            Todos nuestros canales
          </span>
          <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-tevesat-tertiary-dark md:text-5xl">
            Parrilla <span className="italic text-tevesat-primary">Oficial</span>
          </h2>
        </div>

        {/* Toggle de vista */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex gap-1 rounded-2xl border border-gray-200 bg-white p-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => setView('flyer')}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-extrabold uppercase tracking-wide transition-all ${
                view === 'flyer'
                  ? 'bg-tevesat-primary font-black text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Sparkles
                size={16}
                className={view === 'flyer' ? 'text-amber-300' : 'animate-pulse text-amber-500'}
              />
              Parrilla Oficial (Folleto Recreado)
            </button>
            <button
              type="button"
              onClick={() => setView('search')}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-extrabold uppercase tracking-wide transition-all ${
                view === 'search'
                  ? 'bg-tevesat-primary font-black text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <SlidersHorizontal
                size={16}
                className={view === 'search' ? 'text-white' : 'text-tevesat-primary'}
              />
              Buscador Interactivo
            </button>
          </div>
        </div>

        {/* Vista activa */}
        {view === 'flyer' ? <TvFlyer /> : <ChannelSearch />}
      </div>
    </section>
  );
}
