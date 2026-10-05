import React from 'react';
import { ArrowLeftRight, ArrowDown } from 'lucide-react';
import { PORTABILIDAD_URL } from './data/movil';

/**
 * MovilHero - Encabezado oscuro de la página de Telefonía Móvil.
 * Invita a hacer portabilidad conservando el número.
 */
export default function MovilHero() {
  return (
    <section
      className="relative overflow-hidden px-4 pt-40 pb-24 md:px-8 md:pb-32"
      style={{ background: 'linear-gradient(160deg, #121212 0%, #161b0c 55%, #1d2510 100%)' }}
    >
      {/* Glows decorativos */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-tevesat-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-10 right-1/4 h-96 w-96 rounded-full bg-tevesat-primary/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 backdrop-blur-sm">
          <ArrowLeftRight size={16} className="text-tevesat-primary-light" />
          <span className="text-xs font-black uppercase tracking-[0.3em] text-white">
            Portabilidad numérica
          </span>
        </div>

        <h1 className="text-5xl font-black leading-[1.02] tracking-tight text-white md:text-7xl">
          Telefonía móvil con internet{' '}
          <span className="bg-gradient-to-r from-tevesat-primary-light to-tevesat-primary bg-clip-text text-transparent">
            ilimitado
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/70 md:text-xl">
          Trae tu número a{' '}
          <strong className="font-black text-white">{import.meta.env.VITE_NOMBRE_EMPRESA}</strong> y
          navega sin límites. Conservas tu mismo número y el cambio no tiene costo.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={PORTABILIDAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-tevesat-primary px-9 py-5 font-black uppercase tracking-widest text-white shadow-xl shadow-tevesat-primary/30 transition-all duration-300 hover:scale-105 hover:bg-tevesat-primary-light active:scale-95"
          >
            <ArrowLeftRight size={20} />
            Quiero hacer portabilidad
          </a>
          <a
            href="#portabilidad"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/30 bg-white/5 px-9 py-5 font-black uppercase tracking-widest text-white transition-all duration-300 hover:border-white/60"
          >
            ¿Cómo funciona?
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
