import React from 'react';
import { ArrowRight, ShieldCheck, Headphones, Zap, MapPin } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-24 pb-16"
    >
      {/* Fondo claro con acentos suaves del rojo del logo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-32 h-[640px] w-[640px] rounded-full bg-tevesat-primary/10 blur-[140px]" />
        <div className="absolute -bottom-40 -left-32 h-[520px] w-[520px] rounded-full bg-tevesat-primary/5 blur-[140px]" />
        {/* Grid sutil */}
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)',
            backgroundSize: '34px 34px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-12 lg:gap-8">
        {/* Lado izquierdo: contenido */}
        <div className="lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-tevesat-primary/20 bg-tevesat-primary/5 px-5 py-2 animate-[fadeIn_0.8s_ease]">
            <ShieldCheck size={16} className="text-tevesat-primary" />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-tevesat-primary">
              Protección avanzada y respaldo total
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-black leading-[0.95] tracking-tight text-tevesat-tertiary-dark animate-[fadeIn_0.8s_ease] md:text-7xl">
            SEGURIDAD Y<br />
            <span className="text-tevesat-primary italic">RESPALDO</span>
          </h1>

          <p
            className="mb-10 max-w-xl text-lg font-medium leading-relaxed text-gray-500 animate-[fadeIn_0.8s_ease] md:text-xl"
            style={{ animationDelay: '0.15s' }}
          >
            Somos tu mejor aliado. Tu tranquilidad es nuestra prioridad con soluciones
            integrales de alta tecnología para tu hogar y tu empresa.
          </p>

          {/* Botones CTA */}
          <div
            className="flex flex-col gap-4 sm:flex-row animate-[fadeIn_0.8s_ease]"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href="https://wa.me/573506833695"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-2xl bg-tevesat-primary px-9 py-5 font-black uppercase tracking-wider text-white shadow-xl shadow-tevesat-primary/30 transition-all duration-300 hover:scale-105 hover:bg-tevesat-primary-light active:scale-95"
            >
              Me interesa
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#cobertura"
              className="flex items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-9 py-5 font-black uppercase tracking-wider text-tevesat-tertiary-dark transition-all duration-300 hover:border-tevesat-primary hover:text-tevesat-primary"
            >
              <MapPin size={20} />
              Ver cobertura
            </a>
          </div>

          {/* Sellos de confianza */}
          <div
            className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-5 animate-[fadeIn_0.8s_ease]"
            style={{ animationDelay: '0.45s' }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-tevesat-primary/10 text-tevesat-primary">
                <Headphones size={20} strokeWidth={2.4} />
              </div>
              <span className="text-sm font-black uppercase tracking-wide text-gray-600">
                Soporte 24/7
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-tevesat-primary/10 text-tevesat-primary">
                <ShieldCheck size={20} strokeWidth={2.4} />
              </div>
              <span className="text-sm font-black uppercase tracking-wide text-gray-600">
                Respaldo Total
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-tevesat-primary/10 text-tevesat-primary">
                <Zap size={20} strokeWidth={2.4} />
              </div>
              <span className="text-sm font-black uppercase tracking-wide text-gray-600">
                Fibra Óptica
              </span>
            </div>
          </div>
        </div>

        {/* Lado derecho: imagen más pequeña enmarcada con detalles flotantes */}
        <div className="lg:col-span-5">
          <div
            className="group relative mx-auto max-w-md animate-[fadeIn_1s_ease]"
            style={{ animationDelay: '0.3s' }}
          >
            {/* Marco decorativo detrás */}
            <div className="absolute -right-5 -top-5 h-full w-full rounded-[2.5rem] border-2 border-tevesat-primary/15 transition-transform duration-700 group-hover:translate-x-3 group-hover:-translate-y-3" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.3)]">
              <img
                src="/images/hero.png"
                alt={`Familia disfrutando del servicio ${import.meta.env.VITE_NOMBRE_EMPRESA}`}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Velo blanco inferior muy sutil para integrar al fondo claro */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
            </div>

            {/* Badge flotante */}
            <div className="absolute -bottom-6 -left-6 flex items-center gap-4 rounded-3xl border border-gray-100 bg-white/90 p-5 shadow-2xl backdrop-blur-md animate-bounce-slow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tevesat-primary text-lg font-black italic text-white">
                100%
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Tecnología
                </p>
                <p className="text-base font-black leading-none text-tevesat-tertiary-dark">
                  FIBRA ÓPTICA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
