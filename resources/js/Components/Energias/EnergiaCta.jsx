import React from 'react';
import { Sun } from 'lucide-react';
import { WHATSAPP_URL } from './data/energias';

/**
 * EnergiaCta - Banda verde de cierre con llamado a la acción.
 */
export default function EnergiaCta() {
  return (
    <section className="bg-gradient-to-b from-white to-emerald-50/60 px-4 pb-24 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-600 to-green-700 p-10 text-center shadow-[0_40px_90px_-30px_rgba(6,78,59,0.5)] md:p-16">
          <div className="pointer-events-none absolute -top-1/2 -left-1/2 h-full w-full rounded-full bg-lime-300/10 blur-[100px]" />
          <div className="relative z-10">
            <h2 className="text-3xl font-black leading-tight tracking-tight text-white md:text-4xl">
              Da el paso hacia la energía limpia
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-emerald-50/90">
              Cuéntanos sobre tu proyecto y diseñamos la solución renovable ideal para ti.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-10 py-5 font-black uppercase tracking-widest text-emerald-700 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Sun size={20} />
              Quiero mi proyecto solar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
