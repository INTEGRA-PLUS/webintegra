import React from 'react';
import { Check, MessageCircle } from 'lucide-react';
import { MOBILE_PLAN, MOBILE_BENEFITS, PORTABILIDAD_URL } from './data/movil';

/**
 * MovilPlan - Beneficios de la línea móvil junto a la tarjeta del plan.
 * Si el plan no tiene precio definido, invita a consultarlo por WhatsApp.
 */
export default function MovilPlan() {
  const plan = MOBILE_PLAN;

  return (
    <section id="plan-movil" className="bg-white px-4 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Beneficios */}
        <div>
          <div className="mb-5 flex items-center gap-2">
            <span className="h-px w-8 bg-tevesat-primary" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary">
              Línea móvil
            </span>
          </div>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-tevesat-tertiary-dark md:text-4xl">
            Pásate y navega <span className="italic text-tevesat-primary">sin límites</span>
          </h2>

          <div className="mt-10 space-y-6">
            {MOBILE_BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="flex items-start gap-5">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-tevesat-primary/10 text-tevesat-primary">
                    <Icon size={26} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-tevesat-tertiary-dark">{benefit.title}</h3>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-gray-500">{benefit.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tarjeta del plan */}
        <div className="relative mx-auto w-full max-w-md rounded-[2rem] border-2 border-tevesat-primary bg-white p-10 text-center shadow-[0_40px_90px_-30px_rgba(159,189,54,0.45)]">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-tevesat-primary px-5 py-1.5 text-[10px] font-black uppercase tracking-widest text-white">
            Portabilidad
          </span>

          <h3 className="text-2xl font-black uppercase tracking-tight text-tevesat-tertiary-dark">{plan.name}</h3>
          <p className="mt-1 text-sm font-medium italic text-gray-400">{plan.tagline}</p>

          <div className="my-8">
            {plan.price ? (
              <p className="flex items-end justify-center gap-1">
                <span className="text-5xl font-black tracking-tighter text-tevesat-tertiary-dark">${plan.price}</span>
                <span className="mb-2 text-sm font-bold text-gray-400">{plan.period}</span>
              </p>
            ) : (
              <p className="text-2xl font-black text-tevesat-primary">Consulta el precio</p>
            )}
          </div>

          <ul className="mb-10 space-y-4 text-left">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm font-bold text-gray-600">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-tevesat-primary/10 text-tevesat-primary">
                  <Check size={14} strokeWidth={3} />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <a
            href={PORTABILIDAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-tevesat-primary py-4 font-black uppercase tracking-widest text-white transition-all duration-300 hover:bg-tevesat-primary-light"
          >
            <MessageCircle size={20} />
            Lo quiero
          </a>
        </div>
      </div>
    </section>
  );
}
