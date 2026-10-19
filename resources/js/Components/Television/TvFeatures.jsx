import React from 'react';
import { TV_FEATURES } from './data/tv';

/**
 * TvFeatures - Grid de beneficios destacados de la televisión (App DGO,
 * multipantalla, on-demand, etc.).
 */
export default function TvFeatures() {
  return (
    <section className="bg-gray-50 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary-deep">
            Mucho más que TV
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-tevesat-tertiary-dark md:text-4xl">
            Una experiencia <span className="italic text-tevesat-primary-deep">sin límites</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TV_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-tevesat-primary text-tevesat-tertiary-dark shadow-lg shadow-tevesat-primary/20 transition-transform duration-300 group-hover:scale-110">
                <feature.icon size={28} strokeWidth={2.4} />
              </div>
              <h3 className="mb-2 text-xl font-black tracking-tight text-tevesat-tertiary-dark">
                {feature.title}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-gray-500">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
