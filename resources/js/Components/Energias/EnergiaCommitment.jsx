import React from 'react';
import { Leaf, Recycle, ShieldCheck } from 'lucide-react';

/**
 * EnergiaCommitment - Compromiso ambiental: texto + imagen de naturaleza.
 */
const POINTS = [
  { icon: Recycle, title: 'Cero emisiones', text: 'Energía 100% limpia que reduce tu huella de carbono.' },
  { icon: ShieldCheck, title: 'Autonomía total', text: 'Respaldo energético confiable las 24 horas del día.' },
  { icon: Leaf, title: 'Futuro sostenible', text: 'Inversión que cuida tu bolsillo y al medio ambiente.' },
];

export default function EnergiaCommitment() {
  return (
    <section className="bg-white px-4 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Texto */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2">
            <Leaf size={16} className="text-emerald-600" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-600">
              Compromiso Ambiental
            </span>
          </div>
          <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-emerald-950 md:text-5xl">
            Potencia tu vida, <span className="italic text-emerald-600">protege la tierra</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-emerald-900/60">
            Nuestras soluciones no solo reducen tus costos operativos, también disminuyen la
            huella de carbono de tu organización con tecnología de punta y máxima eficiencia.
          </p>

          <div className="mt-10 space-y-6">
            {POINTS.map((point) => (
              <div key={point.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg shadow-emerald-500/30">
                  <point.icon size={22} strokeWidth={2.4} />
                </div>
                <div>
                  <h3 className="text-lg font-black tracking-tight text-emerald-950">
                    {point.title}
                  </h3>
                  <p className="text-sm font-medium text-emerald-900/60">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen */}
        <div className="group relative">
          <div className="absolute -inset-4 rounded-[3rem] bg-emerald-200/40 blur-2xl transition-all duration-700 group-hover:bg-emerald-300/50" />
          <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white shadow-[0_40px_90px_-30px_rgba(6,78,59,0.4)]">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200"
              alt="Paneles solares y naturaleza"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Badge flotante */}
            <div className="absolute bottom-8 left-8 flex items-center gap-4 rounded-3xl border border-emerald-100 bg-white/90 p-5 shadow-2xl backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-lg font-black italic text-white">
                100%
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500">
                  Energía
                </p>
                <p className="text-base font-black leading-none text-emerald-950">RENOVABLE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
