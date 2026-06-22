import React from 'react';
import { ENERGIA_SERVICES } from './data/energias';

/**
 * EnergiaServices - Grilla de soluciones renovables (estética clara/verde).
 */
export default function EnergiaServices() {
  return (
    <section
      id="soluciones"
      className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-50/60 px-4 py-24 md:px-8"
    >
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-emerald-200/30 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-emerald-500" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-600">
              Nuestras Soluciones
            </span>
            <span className="h-px w-8 bg-emerald-500" />
          </div>
          <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-emerald-950 md:text-5xl">
            Tecnología que <span className="italic text-emerald-600">cuida el planeta</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ENERGIA_SERVICES.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-[0_30px_70px_-30px_rgba(6,78,59,0.25)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-100/50 blur-2xl transition-all duration-700 group-hover:bg-emerald-200/60" />
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg shadow-emerald-500/30 transition-transform duration-500 group-hover:scale-110">
                  <service.icon size={28} strokeWidth={2.4} />
                </div>
                <h3 className="mb-3 text-xl font-black tracking-tight text-emerald-950">
                  {service.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-emerald-900/60">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
