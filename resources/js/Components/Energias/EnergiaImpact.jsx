import React from 'react';
import { ENERGIA_IMPACT } from './data/energias';

/**
 * EnergiaImpact - Banda de impacto ambiental con métricas de alto impacto.
 * Fondo verde natural en degradado.
 */
export default function EnergiaImpact() {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-emerald-800 to-green-900" />
      {/* Glows orgánicos */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-emerald-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-lime-400/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-300">
            Nuestro Impacto
          </span>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
            Cada proyecto <span className="italic text-emerald-300">suma al planeta</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-emerald-50/70">
            Reducimos la huella de carbono mientras te damos energía limpia y autónoma.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {ENERGIA_IMPACT.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/10"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/20 text-emerald-200">
                <stat.icon size={26} strokeWidth={2.4} />
              </div>
              <p className="text-4xl font-black tracking-tighter text-white md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-black uppercase tracking-widest text-emerald-300">
                {stat.unit}
              </p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-widest text-emerald-50/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
