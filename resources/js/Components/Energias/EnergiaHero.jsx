import React from 'react';
import { Leaf, ArrowRight, Sun } from 'lucide-react';
import { WHATSAPP_URL } from './data/energias';

/**
 * EnergiaHero - Encabezado de Energías Renovables con estética natural.
 * Imagen de naturaleza + degradado verde, mensaje de alto impacto ambiental.
 */
export default function EnergiaHero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      {/* Imagen de fondo (naturaleza) */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1466611653911-954ff21276d1?q=80&w=2000"
          alt="Energía renovable en la naturaleza"
          className="h-full w-full object-cover"
        />
        {/* Degradado verde natural */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/75 to-emerald-800/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 md:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-5 py-2 backdrop-blur-sm">
            <Leaf size={16} className="text-emerald-300" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-100">
              Energía Sostenible
            </span>
          </div>

          <h1 className="text-5xl font-black leading-[0.98] tracking-tight text-white md:text-7xl">
            ENERGÍA <span className="text-emerald-300 italic">LIMPIA</span> <br />
            PARA UN FUTURO VERDE
          </h1>

          <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-emerald-50/80 md:text-xl">
            Transformamos la energía del sol en potencia para tu futuro. Soluciones renovables
            que cuidan el planeta y te dan autonomía total.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-9 py-5 font-black uppercase tracking-wider text-white shadow-xl shadow-emerald-900/40 transition-all duration-300 hover:scale-105 hover:bg-emerald-400 active:scale-95"
            >
              <Sun size={20} />
              Cotiza tu proyecto
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#soluciones"
              className="flex items-center justify-center gap-2 rounded-2xl border-2 border-white/30 bg-white/5 px-9 py-5 font-black uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
            >
              Ver soluciones
            </a>
          </div>
        </div>
      </div>

      {/* Curva natural inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
