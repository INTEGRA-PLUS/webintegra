import React from 'react';
import { MISSION_VISION } from './data/nosotros';

/**
 * AboutMissionVision - Tarjetas de Misión y Visión corporativa.
 */
export default function AboutMissionVision() {
  return (
    <section className="bg-white px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary">
            Nuestro propósito
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-tevesat-tertiary-dark md:text-4xl">
            Lo que nos <span className="italic text-tevesat-primary">mueve</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {MISSION_VISION.map((item) => (
            <div
              key={item.tag}
              className="group relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.2)] md:p-10"
            >
              <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-tevesat-primary/5 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />

              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-tevesat-primary text-white shadow-lg shadow-tevesat-primary/25">
                  <item.icon size={28} strokeWidth={2.3} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-tevesat-primary">
                  {item.tag}
                </span>
                <h3 className="mb-4 mt-2 text-2xl font-black tracking-tight text-tevesat-tertiary-dark">
                  {item.title}
                </h3>
                <p className="text-base font-medium leading-relaxed text-gray-500">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
