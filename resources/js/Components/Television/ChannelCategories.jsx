import React from 'react';
import { CHANNEL_CATEGORIES } from './data/tv';

/**
 * ChannelCategories - Grid de categorías de canales disponibles.
 */
export default function ChannelCategories() {
  return (
    <section className="bg-white px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary">
            Para todos los gustos
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-tevesat-tertiary-dark md:text-4xl">
            Canales que <span className="italic text-tevesat-primary">amarás</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {CHANNEL_CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              className="group flex flex-col items-center gap-4 rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-tevesat-primary/40 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tevesat-primary/5 text-tevesat-primary transition-colors duration-300 group-hover:bg-tevesat-primary group-hover:text-white">
                <cat.icon size={26} strokeWidth={2.4} />
              </div>
              <span className="text-sm font-black uppercase tracking-wide text-tevesat-tertiary-dark">
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
