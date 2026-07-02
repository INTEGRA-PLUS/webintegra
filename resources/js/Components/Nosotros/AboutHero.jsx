import React from 'react';
import { Building2, Zap, ShieldCheck, Headphones } from 'lucide-react';

const NOMBRE = import.meta.env.VITE_NOMBRE_EMPRESA;

/**
 * AboutHero - Encabezado institucional de la página Nosotros.
 *
 * Bloque oscuro en degradado con eyebrow, título y chips flotantes. El estilo
 * mantiene la línea del hero de Televisión para dar coherencia visual.
 */
export default function AboutHero() {
  const chips = [
    { icon: Zap, label: 'Fibra óptica' },
    { icon: ShieldCheck, label: 'Red confiable' },
    { icon: Headphones, label: 'Soporte 24/7' },
  ];

  return (
    <section className="relative overflow-hidden">
      <div
        className="relative overflow-hidden px-4 pt-40 pb-32 md:px-8 md:pt-48 md:pb-40"
        style={{
          background: 'linear-gradient(160deg, #171717 0%, #201013 55%, #2b0e11 100%)',
        }}
      >
        {/* Glows decorativos */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-tevesat-primary/20 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-10 right-1/4 h-96 w-96 rounded-full bg-tevesat-primary/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 backdrop-blur-sm">
            <Building2 size={16} className="text-tevesat-primary-light" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-white">
              Sobre Nosotros
            </span>
          </div>

          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
            Conectamos tu mundo con{' '}
            <span className="bg-gradient-to-r from-tevesat-primary-light to-tevesat-primary bg-clip-text text-transparent">
              {NOMBRE}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/70 md:text-xl">
            Somos una empresa de tecnología y telecomunicaciones dedicada a llevar internet de
            alta velocidad, televisión y soluciones tecnológicas con transparencia, cobertura y un
            soporte humano que siempre está para ti.
          </p>

          {/* Chips */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {chips.map((chip) => (
              <div
                key={chip.label}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm"
              >
                <chip.icon size={18} className="text-tevesat-primary-light" />
                <span className="text-sm font-black uppercase tracking-wider text-white">
                  {chip.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
