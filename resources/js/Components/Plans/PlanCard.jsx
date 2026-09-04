import React from 'react';
import { Check, Zap, ArrowRight, Star } from 'lucide-react';
import { WHATSAPP_URL } from './data/plans';

/**
 * PlanCard - Tarjeta de plan reutilizable (Home destacados y página /planes).
 *
 * El plan marcado como `popular` se resalta: borde rojo, escala mayor,
 * encabezado rojo y badge "Más popular".
 *
 * @param {Object} plan - ver estructura en ./data/plans.js
 */
export default function PlanCard({ plan }) {
  const popular = plan.popular;

  return (
    <div
      className={`group relative flex flex-col rounded-[2.5rem] p-8 transition-all duration-500 ${
        popular
          ? 'border-2 border-tevesat-primary bg-white shadow-[0_40px_90px_-30px_rgba(239,205,40,0.45)] lg:-translate-y-4 lg:scale-[1.03]'
          : 'border border-gray-100 bg-white shadow-[0_30px_70px_-30px_rgba(0,0,0,0.2)] hover:-translate-y-2'
      }`}
    >
      {/* Badge popular */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-tevesat-primary px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-tevesat-tertiary-dark shadow-lg shadow-tevesat-primary/30">
            <Star size={12} className="fill-white" /> Más popular
          </span>
        </div>
      )}

      {/* Encabezado */}
      <div className="mb-6 text-center">
        <h3 className="text-xl font-black uppercase tracking-tight text-tevesat-tertiary-dark">
          {plan.name}
        </h3>
        <p className="mt-1 text-sm font-medium italic text-gray-400">{plan.tagline}</p>
      </div>

      {/* Velocidad */}
      <div className="mb-6 flex items-end justify-center gap-2">
        <span className="text-6xl font-black leading-none tracking-tighter text-tevesat-tertiary-dark">
          {plan.speed}
        </span>
        <span className="mb-2 text-lg font-black italic text-tevesat-primary-deep">{plan.unit}</span>
      </div>

      {/* Tecnología */}
      <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-tevesat-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-tevesat-primary-deep">
        <Zap size={12} /> {plan.tech}
      </div>

      {/* Precio */}
      <div className="mb-8 text-center">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-2xl font-black text-tevesat-tertiary-dark">$</span>
          <span className="text-4xl font-black tracking-tighter text-tevesat-tertiary-dark">{plan.price}</span>
          <span className="text-sm font-bold text-gray-400">{plan.period}</span>
        </div>
      </div>

      {/* Beneficios */}
      <ul className="mb-8 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm font-bold text-gray-600">
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-tevesat-primary/10">
              <Check size={12} className="text-tevesat-primary-deep" strokeWidth={3.5} />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`group/cta mt-auto flex items-center justify-center gap-2 rounded-2xl py-4 text-xs font-black uppercase tracking-widest transition-all duration-300 ${
          popular
            ? 'bg-tevesat-primary text-tevesat-tertiary-dark shadow-xl shadow-tevesat-primary/30 hover:bg-tevesat-primary-light hover:scale-105'
            : 'border-2 border-gray-200 bg-white text-tevesat-tertiary-dark hover:border-tevesat-primary hover:text-tevesat-primary-deep'
        }`}
      >
        Lo quiero
        <ArrowRight size={16} className="transition-transform group-hover/cta:translate-x-1" />
      </a>
    </div>
  );
}
