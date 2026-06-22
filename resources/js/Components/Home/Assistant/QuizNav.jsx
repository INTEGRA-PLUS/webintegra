import React from 'react';
import { ArrowLeft, RotateCcw } from 'lucide-react';

/**
 * Navegación inferior del asistente: Atrás / Reiniciar.
 *
 * @param {Function} onBack
 * @param {Function} onReset
 * @param {boolean}  canGoBack - si false, el botón "Atrás" se oculta.
 */
export default function QuizNav({ onBack, onReset, canGoBack }) {
  return (
    <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6">
      <button
        type="button"
        onClick={onBack}
        disabled={!canGoBack}
        className="flex items-center gap-2 text-sm font-bold text-gray-400 transition-colors hover:text-tevesat-primary disabled:cursor-not-allowed disabled:opacity-0"
      >
        <ArrowLeft size={18} />
        Atrás
      </button>

      <button
        type="button"
        onClick={onReset}
        className="flex items-center gap-2 text-sm font-bold text-gray-400 transition-colors hover:text-tevesat-primary"
      >
        <RotateCcw size={16} />
        Reiniciar
      </button>
    </div>
  );
}
