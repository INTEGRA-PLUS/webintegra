import React from 'react';

/**
 * Gauge - Medidor circular (arco de 270°) para el speed test.
 *
 * @param {number} value    - valor actual (Mbps).
 * @param {number} max      - escala máxima del arco.
 * @param {string} label    - texto bajo el valor (ej: "Mbps").
 * @param {string} caption  - etiqueta de fase (ej: "Descargando...").
 * @param {boolean} active  - si está midiendo (anima el color).
 */
export default function Gauge({ value = 0, max = 500, label = 'Mbps', caption = '', active = false }) {
  const R = 120;
  const C = 2 * Math.PI * R;
  const ARC = 0.75; // 270°
  const fraction = Math.max(0, Math.min(value / max, 1));

  const trackDash = `${ARC * C} ${C}`;
  const progressDash = `${fraction * ARC * C} ${C}`;

  const display = value >= 100 ? Math.round(value) : value.toFixed(1);

  return (
    <div className="relative mx-auto flex h-[300px] w-[300px] items-center justify-center">
      <svg viewBox="0 0 300 300" className="h-full w-full -rotate-[135deg]">
        {/* Pista */}
        <circle
          cx="150"
          cy="150"
          r={R}
          fill="none"
          stroke="#f1f1f1"
          strokeWidth="18"
          strokeLinecap="round"
          strokeDasharray={trackDash}
        />
        {/* Progreso */}
        <circle
          cx="150"
          cy="150"
          r={R}
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="18"
          strokeLinecap="round"
          strokeDasharray={progressDash}
          style={{ transition: 'stroke-dasharray 0.25s ease-out' }}
        />
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff474b" />
            <stop offset="100%" stopColor="#ec3237" />
          </linearGradient>
        </defs>
      </svg>

      {/* Valor central */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className={`text-6xl font-black tracking-tighter text-tevesat-tertiary-dark transition-opacity ${
            active ? 'opacity-100' : 'opacity-90'
          }`}
        >
          {display}
        </span>
        <span className="mt-1 text-sm font-black uppercase tracking-[0.3em] text-tevesat-primary">
          {label}
        </span>
        {caption && (
          <span className="mt-3 text-[11px] font-black uppercase tracking-widest text-gray-400">
            {caption}
          </span>
        )}
      </div>
    </div>
  );
}
