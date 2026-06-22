import React from 'react';

/**
 * Barra de progreso del asistente.
 *
 * @param {string} label   - texto a la izquierda (ej: "Pregunta 2 de 5").
 * @param {number} percent - porcentaje 0-100.
 */
export default function ProgressBar({ label, percent }) {
  return (
    <div className="mb-10">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-black uppercase tracking-[0.25em] text-gray-400">
          {label}
        </span>
        <span className="text-xs font-black text-tevesat-primary">{percent}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-tevesat-primary to-tevesat-primary-light transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
