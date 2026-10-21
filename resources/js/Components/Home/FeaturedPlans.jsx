import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import PlanCard from '../Plans/PlanCard';
import { HOME_PLANS } from '../Plans/data/plans';

/**
 * FeaturedPlans - Sección "Planes diseñados para ti" del Home.
 * Muestra 3 planes destacados (uno marcado como popular) y enlaza a la
 * página completa /planes.
 */
export default function FeaturedPlans() {
  return (
    <section id="planes" className="relative overflow-hidden bg-white px-4 pt-8 pb-24 md:px-8 md:pt-12 md:pb-32">
      {/* Acentos decorativos suaves */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-tevesat-primary/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-tevesat-primary" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary">
              Nuestros Planes
            </span>
            <span className="h-px w-8 bg-tevesat-primary" />
          </div>
          <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-tevesat-tertiary-dark md:text-5xl">
            Planes diseñados <span className="text-tevesat-primary italic">para ti</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg font-medium leading-relaxed text-gray-500">
            Elige el plan perfecto para tu hogar. Velocidad de fibra óptica, instalación
            sin costo y soporte que nunca te deja solo.
          </p>
        </div>

        {/* Grid de 3 planes */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-center">
          {HOME_PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        {/* CTA a la página completa */}
        <div className="mt-14 text-center">
          <Link
            href="/planes"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-8 py-4 font-black uppercase tracking-widest text-tevesat-tertiary-dark transition-all duration-300 hover:border-tevesat-primary hover:text-tevesat-primary"
          >
            Ver todos los planes
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
