import React from 'react';
import TvPlanCard from './TvPlanCard';
import { TV_PLANS } from './data/tv';

/**
 * TvPlans - Sección de paquetes de televisión.
 */
export default function TvPlans() {
  return (
    <section id="planes-tv" className="relative overflow-hidden bg-white px-4 py-24 md:px-8">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-tevesat-primary/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-tevesat-primary" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary-deep">
              Paquetes de TV
            </span>
            <span className="h-px w-8 bg-tevesat-primary" />
          </div>
          <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-tevesat-tertiary-dark md:text-5xl">
            Elige tu paquete <span className="italic text-tevesat-primary-deep">ideal</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg font-medium leading-relaxed text-gray-500">
            Todos incluyen la App DGO para ver tus contenidos favoritos donde quieras.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-center">
          {TV_PLANS.map((plan) => (
            <TvPlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
