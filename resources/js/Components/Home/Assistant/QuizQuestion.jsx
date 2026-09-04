import React from 'react';
import OptionCard from './OptionCard';

/**
 * Renderiza una pregunta del asistente: encabezado (ícono, paso, pregunta,
 * ayuda) y la grilla de opciones.
 *
 * @param {Object}   step          - configuración del paso (ver quizSteps.js).
 * @param {number}   selectedIndex - índice de la opción elegida (o undefined).
 * @param {Function} onSelect      - (optionIndex) => void.
 */
export default function QuizQuestion({ step, selectedIndex, onSelect }) {
  const StepIcon = step.icon;

  return (
    <div className="animate-[fadeIn_0.4s_ease]">
      <div className="mb-8 flex flex-col items-center text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-tevesat-primary text-tevesat-tertiary-dark shadow-lg shadow-tevesat-primary/30">
          <StepIcon size={30} strokeWidth={2.4} />
        </div>
        <span className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary-deep">
          {step.eyebrow}
        </span>
        <h3 className="text-2xl font-black tracking-tight text-tevesat-tertiary-dark md:text-3xl">
          {step.question}
        </h3>
        <p className="mt-2 max-w-md text-sm font-medium text-gray-500">{step.help}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {step.options.map((opt, idx) => (
          <OptionCard
            key={opt.value}
            option={opt}
            featured={step.featured}
            selected={selectedIndex === idx}
            onSelect={() => onSelect(idx)}
          />
        ))}
      </div>
    </div>
  );
}
