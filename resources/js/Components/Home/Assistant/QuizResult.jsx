import React from 'react';
import { Zap, Check, ArrowRight } from 'lucide-react';

/**
 * Pantalla de resultado: velocidad recomendada, tecnología, plan sugerido,
 * beneficios y CTAs.
 *
 * @param {Object}   recommendation - { speed, planName, tagline, perks, technology, technologyIcon }
 * @param {Function} onScrollPlans  - handler del botón "Ver planes".
 * @param {string}   whatsappUrl    - enlace del asesor.
 */
export default function QuizResult({ recommendation, onScrollPlans, whatsappUrl }) {
  const TechIcon = recommendation.technologyIcon;

  return (
    <div className="animate-[fadeIn_0.5s_ease]">
      <div className="flex flex-col items-center text-center">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-tevesat-primary/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-tevesat-primary">
          <Zap size={14} /> Tu velocidad ideal
        </span>

        {/* Velocidad recomendada */}
        <div className="my-4 flex items-end justify-center gap-2">
          <span className="text-7xl font-black leading-none tracking-tighter text-tevesat-tertiary-dark md:text-8xl">
            {recommendation.speed}
          </span>
          <span className="mb-3 text-2xl font-black text-tevesat-primary">Mbps</span>
        </div>

        {/* Tecnología (definida por la ubicación) */}
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-100 bg-white px-4 py-1.5 text-xs font-black uppercase tracking-widest text-gray-500 shadow-sm">
          {TechIcon && <TechIcon size={14} className="text-tevesat-primary" />}
          {recommendation.technology}
        </div>

        <h3 className="text-2xl font-black tracking-tight text-tevesat-primary md:text-3xl">
          {recommendation.planName}
        </h3>
        <p className="mt-3 max-w-md text-base font-medium leading-relaxed text-gray-500">
          {recommendation.tagline}
        </p>

        {/* Beneficios */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {recommendation.perks.map((perk) => (
            <div
              key={perk}
              className="flex items-center gap-2 rounded-full border border-gray-100 bg-white px-4 py-2 text-sm font-bold text-gray-600 shadow-sm"
            >
              <Check size={15} className="text-tevesat-primary" strokeWidth={3} />
              {perk}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="#planes"
            onClick={onScrollPlans}
            className="group flex items-center justify-center gap-2 rounded-2xl bg-tevesat-primary px-8 py-4 font-black uppercase tracking-widest text-white shadow-xl shadow-tevesat-primary/30 transition-all duration-300 hover:scale-105 hover:bg-tevesat-primary-light active:scale-95"
          >
            Ver planes que encajan
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-8 py-4 font-black uppercase tracking-widest text-tevesat-tertiary-dark transition-all duration-300 hover:border-tevesat-primary hover:text-tevesat-primary"
          >
            Hablar con un asesor
          </a>
        </div>
      </div>
    </div>
  );
}
