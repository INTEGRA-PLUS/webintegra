import React from 'react';

/**
 * ResultStat - Tarjeta de resultado (ping / descarga / subida).
 *
 * @param {Function} icon   - componente de ícono (lucide).
 * @param {string}   label
 * @param {string|number} value
 * @param {string}   unit
 * @param {boolean}  active - resalta la métrica que se está midiendo.
 */
export default function ResultStat({ icon: Icon, label, value, unit, active = false }) {
  return (
    <div
      className={`flex flex-col items-center rounded-3xl border bg-white p-6 text-center transition-all duration-300 ${
        active
          ? 'border-tevesat-primary shadow-lg shadow-tevesat-primary/10'
          : 'border-gray-100 shadow-sm'
      }`}
    >
      <div
        className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
          active ? 'bg-tevesat-primary text-white' : 'bg-tevesat-primary/5 text-tevesat-primary'
        }`}
      >
        <Icon size={20} strokeWidth={2.4} />
      </div>
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{label}</p>
      <p className="mt-1 flex items-baseline gap-1">
        <span className="text-2xl font-black tracking-tighter text-tevesat-tertiary-dark">
          {value}
        </span>
        <span className="text-xs font-bold text-gray-400">{unit}</span>
      </p>
    </div>
  );
}
