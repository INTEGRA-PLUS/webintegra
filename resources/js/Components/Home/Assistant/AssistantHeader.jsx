import React from 'react';
import { Sparkles } from 'lucide-react';

/**
 * Encabezado del Asistente Interactivo: badge, título y subtítulo.
 */
export default function AssistantHeader() {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-tevesat-primary/20 bg-tevesat-primary/5 px-5 py-2">
        <Sparkles size={16} className="text-tevesat-primary" />
        <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary">
          Asistente Interactivo
        </span>
      </div>
      <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-tevesat-tertiary-dark md:text-5xl">
        ¿Qué plan necesitas <span className="text-tevesat-primary italic">realmente</span>?
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-lg font-medium leading-relaxed text-gray-500">
        Responde unas preguntas sencillas y calcularemos la velocidad óptima para ti.
      </p>
    </div>
  );
}
