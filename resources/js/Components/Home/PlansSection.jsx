import React from 'react';
import { MessageCircle, Zap, Radio } from 'lucide-react';

const NewPlanCard = ({ speed, category }) => {
  const isFiber = category === 'Fibra Óptica';
  
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-tevesat-primary to-tevesat-tertiary rounded-[2rem] opacity-20 group-hover:opacity-100 transition duration-500 blur"></div>
      <div className="relative bg-tevesat-secondary border border-white/10 rounded-[2rem] p-8 transition-all duration-500 group-hover:-translate-y-2 flex flex-col items-center text-center h-full">
        <div className={`w-16 h-16 rounded-2xl ${isFiber ? 'bg-tevesat-primary' : 'bg-white/5'} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
          {isFiber ? (
            <Zap className="text-white" size={32} />
          ) : (
            <Radio className="text-white" size={32} />
          )}
        </div>
        
        <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-2 opacity-60">Internet {isFiber ? 'Fibra' : 'Inalámbrico'}</h3>
        <div className="flex items-baseline gap-2 mb-8">
          <span className="text-5xl font-black text-white tracking-tighter">{speed}</span>
          <span className="text-xl font-black text-tevesat-primary italic">MEGAS</span>
        </div>

        <div className="mt-auto w-full">
          <a 
            href="https://wa.me/573142497234" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-3 hover:bg-tevesat-primary hover:border-tevesat-primary transition-all duration-300"
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
    <section id="planes" className="py-24 md:py-32 px-4 md:px-8 bg-tevesat-tertiary-dark relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-tevesat-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-tevesat-tertiary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-tevesat-primary/10 px-6 py-2 rounded-full border border-tevesat-primary/20 mb-6">
            <span className="text-tevesat-primary-light font-black uppercase text-xs tracking-[0.3em]">Nuestros Servicios</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            ELIGE TU <span className="text-tevesat-primary italic">PLAN IDEAL</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto font-medium leading-relaxed italic">
            Conectividad a tu medida. Selecciona la velocidad que mejor se adapte a tus necesidades.
          </p>
        </div>

        {/* Wireless Section */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <h3 className="text-white/40 font-black uppercase text-sm tracking-[0.4em] px-8">Internet Inalámbrico</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {wirelessPlans.map((speed) => (
              <NewPlanCard key={speed} speed={speed} category="Internet Inalámbrico" />
            ))}
          </div>
        </div>

        {/* Fiber Section */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <h3 className="text-white font-black uppercase text-sm tracking-[0.4em] px-8 text-tevesat-primary">Fibra Óptica</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {fiberPlans.map((speed) => (
              <NewPlanCard key={speed} speed={speed} category="Fibra Óptica" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
