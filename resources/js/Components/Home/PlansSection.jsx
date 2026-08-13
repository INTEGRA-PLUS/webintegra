import React from 'react';
import { MessageCircle, Zap, Radio } from 'lucide-react';

const NewPlanCard = ({ speed, category }) => {
  const isFiber = category === 'Fibra Óptica';

  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 rounded-[2rem] bg-gradient-to-r from-tevesat-primary to-tevesat-primary-light opacity-0 blur transition duration-500 group-hover:opacity-30"></div>
      <div className="relative flex h-full flex-col items-center rounded-[2rem] border border-gray-100 bg-white p-8 text-center shadow-[0_30px_70px_-30px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover:-translate-y-2">
        <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${isFiber ? 'bg-tevesat-primary' : 'bg-gray-100'} shadow-lg transition-transform duration-500 group-hover:scale-110`}>
          {isFiber ? (
            <Zap className="text-white" size={32} />
          ) : (
            <Radio className="text-tevesat-primary" size={32} />
          )}
        </div>

        <h3 className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-gray-400">Internet {isFiber ? 'Fibra' : 'Inalámbrico'}</h3>
        <div className="mb-8 flex items-baseline gap-2">
          <span className="text-5xl font-black tracking-tighter text-tevesat-tertiary-dark">{speed}</span>
          <span className="text-xl font-black italic text-tevesat-primary">MEGAS</span>
        </div>

        <div className="mt-auto w-full">
          <a
            href="https://wa.me/573334010174"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-gray-50 py-4 text-[10px] font-black uppercase tracking-widest text-tevesat-tertiary-dark transition-all duration-300 hover:border-tevesat-primary hover:bg-tevesat-primary hover:text-white"
          >
            Lo quiero <MessageCircle size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function PlansSection() {
  const wirelessPlans = ['5', '10', '20', '25'];
  const fiberPlans = ['40', '60', '80', '200', '300'];

  return (
    <section id="planes" className="relative overflow-hidden bg-gray-50 py-24 px-4 md:px-8 md:py-32">
      {/* Acentos decorativos suaves */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full">
        <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-tevesat-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-tevesat-primary/5 blur-[120px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <div className="mb-6 inline-block rounded-full border border-tevesat-primary/20 bg-tevesat-primary/5 px-6 py-2">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary">Nuestros Planes</span>
          </div>
          <h2 className="mb-8 text-5xl font-black tracking-tighter text-tevesat-tertiary-dark md:text-7xl">
            ELIGE TU <span className="italic text-tevesat-primary">PLAN IDEAL</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl font-medium italic leading-relaxed text-gray-500">
            Conectividad a tu medida. Selecciona la velocidad que mejor se adapte a tus necesidades.
          </p>
        </div>

        {/* Sección inalámbrica */}
        <div className="mb-32">
          <div className="mb-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            <h3 className="px-8 text-sm font-black uppercase tracking-[0.4em] text-gray-400">Internet Inalámbrico</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {wirelessPlans.map((speed) => (
              <NewPlanCard key={speed} speed={speed} category="Internet Inalámbrico" />
            ))}
          </div>
        </div>

        {/* Sección fibra */}
        <div>
          <div className="mb-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            <h3 className="px-8 text-sm font-black uppercase tracking-[0.4em] text-tevesat-primary">Fibra Óptica</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {fiberPlans.map((speed) => (
              <NewPlanCard key={speed} speed={speed} category="Fibra Óptica" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
