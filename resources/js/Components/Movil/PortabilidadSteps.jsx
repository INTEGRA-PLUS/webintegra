import React from 'react';
import { PORTABILIDAD_STEPS, PORTABILIDAD_REQUISITOS } from './data/movil';

/**
 * PortabilidadSteps - Explica en 3 pasos cómo traer el número y qué se necesita.
 */
export default function PortabilidadSteps() {
  return (
    <section id="portabilidad" className="scroll-mt-28 bg-gray-50 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-tevesat-primary" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary">
              Portabilidad
            </span>
            <span className="h-px w-8 bg-tevesat-primary" />
          </div>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-tevesat-tertiary-dark md:text-4xl">
            Trae tu número en <span className="italic text-tevesat-primary">3 pasos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PORTABILIDAD_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative rounded-[2rem] border border-gray-100 bg-white p-8 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.2)]"
              >
                <span className="absolute right-8 top-6 text-5xl font-black text-tevesat-primary/15">
                  {index + 1}
                </span>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-tevesat-primary text-white shadow-lg shadow-tevesat-primary/20">
                  <Icon size={26} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-black text-tevesat-tertiary-dark">{step.title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-gray-500">{step.text}</p>
              </div>
            );
          })}
        </div>

        {/* Requisitos */}
        <div className="mx-auto mt-16 max-w-4xl rounded-[2rem] border border-gray-100 bg-white p-8 md:p-10">
          <h3 className="mb-6 text-center text-sm font-black uppercase tracking-[0.3em] text-tevesat-tertiary-dark">
            ¿Qué necesitas?
          </h3>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {PORTABILIDAD_REQUISITOS.map((req) => {
              const Icon = req.icon;
              return (
                <li key={req.text} className="flex items-center gap-3 text-sm font-bold text-gray-600">
                  <Icon size={20} className="flex-shrink-0 text-tevesat-primary" />
                  {req.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
