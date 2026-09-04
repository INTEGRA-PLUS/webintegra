import React from 'react';
import { PlayCircle } from 'lucide-react';
import { WHATSAPP_URL } from './data/tv';

/**
 * TvCta - Banda roja de llamado a la acción al final de la página de TV.
 */
export default function TvCta() {
  return (
    <section className="bg-white px-4 pb-24 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-tevesat-primary to-tevesat-primary-light p-10 text-center shadow-[0_40px_90px_-30px_rgba(239,205,40,0.5)] md:p-16">
          <div className="pointer-events-none absolute -top-1/2 -left-1/2 h-full w-full rounded-full bg-white/10 blur-[100px]" />
          <div className="relative z-10">
            <h2 className="text-3xl font-black leading-tight tracking-tight text-tevesat-tertiary-dark md:text-4xl">
              Combina tu Internet + TV y ahorra
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-tevesat-tertiary-dark/80">
              Arma el paquete perfecto para tu hogar. Un asesor te ayuda a elegir en minutos.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-10 py-5 font-black uppercase tracking-widest text-tevesat-primary-deep shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <PlayCircle size={20} />
              Quiero mi paquete
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
