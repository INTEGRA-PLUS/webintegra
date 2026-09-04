import React from 'react';
import { PlayCircle, Tv } from 'lucide-react';
import { WHATSAPP_URL } from './data/tv';

/**
 * TvHero - Encabezado de la página de Televisión.
 * Diseño centrado y limpio (sin imagen), consistente con las demás páginas.
 */
export default function TvHero() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pt-40 pb-16 md:px-8">
      <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-tevesat-primary/10 blur-[130px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)',
          backgroundSize: '34px 34px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-tevesat-primary/20 bg-tevesat-primary/5 px-5 py-2">
          <Tv size={16} className="text-tevesat-primary-deep" />
          <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary-deep">
            Televisión Digital IPTV
          </span>
        </div>

        <h1 className="text-5xl font-black leading-[0.98] tracking-tight text-tevesat-tertiary-dark md:text-7xl">
          DISFRUTA LOS <span className="italic text-tevesat-primary-deep">MEJORES CANALES</span> PARA TU FAMILIA
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg font-medium leading-relaxed text-gray-500 md:text-xl">
          Películas, series, deportes y mucho más en vivo y on-demand. Llévalos contigo en
          cualquier dispositivo con tu servicio de televisión interactivo.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 rounded-2xl bg-tevesat-primary px-9 py-5 font-black uppercase tracking-wider text-tevesat-tertiary-dark shadow-xl shadow-tevesat-primary/30 transition-all duration-300 hover:scale-105 hover:bg-tevesat-primary-light active:scale-95"
          >
            <PlayCircle size={20} />
            Quiero mi TV
          </a>
          <a
            href="#planes-tv"
            className="flex items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-9 py-5 font-black uppercase tracking-wider text-tevesat-tertiary-dark transition-all duration-300 hover:border-tevesat-primary hover:text-tevesat-primary-deep"
          >
            Ver paquetes
          </a>
        </div>
      </div>
    </section>
  );
}
