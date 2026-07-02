import React from 'react';
import { VALUES } from './data/nosotros';

/**
 * AboutValues - Grid de valores corporativos.
 */
export default function AboutValues() {
  return (
    <section className="relative overflow-hidden bg-gray-50 px-4 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-tevesat-primary/5 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-tevesat-primary/5 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary">
            Lo que nos define
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-tevesat-tertiary-dark md:text-4xl">
            Nuestros <span className="italic text-tevesat-primary">valores</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="group flex flex-col items-start gap-5 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-tevesat-primary/40 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tevesat-primary/5 text-tevesat-primary transition-colors duration-300 group-hover:bg-tevesat-primary group-hover:text-white">
                <value.icon size={26} strokeWidth={2.4} />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-black tracking-tight text-tevesat-tertiary-dark">
                  {value.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-gray-500">{value.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
