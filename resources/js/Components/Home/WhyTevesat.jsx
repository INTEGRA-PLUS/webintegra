import React from 'react';
import { Zap, Shield, Headphones, ArrowRightLeft } from 'lucide-react';

export default function WhyTevesat() {
  const features = [
    {
      icon: Zap,
      title: 'Velocidad Imbatible',
      description: 'Conéctate al instante con nuestra fibra óptica ultrarrápida.',
      filled: true,
    },
    {
      icon: Shield,
      title: 'Confiabilidad Garantizada',
      description: 'Navega tranquilo con un servicio estable y avanzado.',
      filled: false,
    },
    {
      icon: Headphones,
      title: 'Atención al Cliente',
      description: 'Soporte dedicado, siempre disponible para ti.',
      filled: true,
    },
    {
      icon: ArrowRightLeft,
      title: 'Planes Flexibles',
      description: 'Encuentra el plan perfecto que se adapta a tu necesidad.',
      filled: false,
    },
  ];

  return (
    <section id="quienes-somos" className="relative overflow-hidden bg-gray-50 py-24 px-4 md:px-8 md:py-32">
      {/* Acentos decorativos */}
      <div className="pointer-events-none absolute top-0 -left-20 h-96 w-96 rounded-full bg-tevesat-primary/5 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 -right-20 h-96 w-96 rounded-full bg-tevesat-primary/5 blur-[100px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-20 lg:flex-row">
        {/* Izquierda: contenido */}
        <div className="lg:w-1/2">
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-2">
              <div className="h-px w-8 bg-tevesat-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-tevesat-primary-deep">Beneficios {import.meta.env.VITE_NOMBRE_EMPRESA}</span>
            </div>
            <h2 className="mb-8 text-4xl font-black leading-[1.1] tracking-tight text-tevesat-tertiary-dark md:text-5xl">
              Seguridad y <span className="text-tevesat-primary-deep">respaldo</span> para tu vida
            </h2>
            <p className="max-w-xl border-l-4 border-tevesat-primary/30 pl-6 text-lg font-medium italic leading-relaxed text-gray-500">
              En <span className="text-tevesat-tertiary-dark">{import.meta.env.VITE_NOMBRE_EMPRESA}</span> somos tu mejor aliado. Brindamos la protección y el respaldo tecnológico que tu familia y empresa necesitan para estar siempre tranquilos.
            </p>
          </div>

          {/* Grid de beneficios */}
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
            {features.map((feature, idx) => (
              <div key={idx} className="group flex items-start gap-5">
                <div className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-110 ${feature.filled ? 'bg-tevesat-primary shadow-tevesat-primary/20' : 'border border-gray-100 bg-white'}`}>
                  <feature.icon className={feature.filled ? 'text-tevesat-tertiary-dark' : 'text-tevesat-primary-deep'} size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-black tracking-tight text-tevesat-tertiary-dark">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-bold leading-relaxed text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Derecha: imagen con elementos flotantes */}
        <div className="group relative lg:w-1/2">
          <div className="absolute -top-10 -right-10 -z-10 h-full w-full rounded-[4rem] border-2 border-tevesat-primary/15 transition-transform duration-700 group-hover:translate-x-4 group-hover:-translate-y-4" />

          <div className="relative overflow-hidden rounded-[4rem] border-8 border-white shadow-[0_50px_100px_-30px_rgba(0,0,0,0.3)]">
            <img
              src="/images/couple_sofa.png"
              alt={`Gente disfrutando internet ${import.meta.env.VITE_NOMBRE_EMPRESA}`}
              className="h-full w-full scale-110 object-cover transition-transform duration-1000 group-hover:scale-100"
            />

            {/* Badge flotante */}
            <div className="absolute bottom-10 left-10 flex animate-bounce-slow items-center gap-4 rounded-3xl border border-gray-100 bg-white/90 p-6 shadow-2xl backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tevesat-primary text-xl font-black italic text-tevesat-tertiary-dark">
                100%
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gray-400">Tecnología</p>
                <p className="text-lg font-black leading-none text-tevesat-tertiary-dark">FIBRA ÓPTICA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="mx-auto mt-24 max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[3.5rem] border border-gray-100 bg-white p-12 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.25)] md:p-16">
          <div className="absolute top-0 right-0 -mr-48 -mt-48 h-96 w-96 rounded-full bg-tevesat-primary/5 blur-[100px]" />
          <div className="absolute bottom-0 left-0 -ml-48 -mb-48 h-96 w-96 rounded-full bg-tevesat-primary/5 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 gap-12 divide-y divide-gray-100 md:grid-cols-3 md:divide-y-0 md:divide-x">
            <div className="pb-12 text-center md:pb-0">
              <p className="mb-4 text-6xl font-black tracking-tighter text-tevesat-primary-deep md:text-7xl">+50K</p>
              <p className="mt-2 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Usuarios Activos</p>
            </div>

            <div className="py-12 text-center md:px-12 md:py-0">
              <p className="mb-4 text-6xl font-black tracking-tighter text-tevesat-tertiary-dark md:text-7xl">99.9%</p>
              <p className="mt-2 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Disponibilidad Real</p>
            </div>

            <div className="pt-12 text-center md:pt-0">
              <p className="mb-4 text-6xl font-black tracking-tighter text-tevesat-tertiary-dark md:text-7xl">24/7</p>
              <p className="mt-2 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Soporte Humano</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
