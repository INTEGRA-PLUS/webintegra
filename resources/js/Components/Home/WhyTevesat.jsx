import React from 'react';
import { Zap, Shield, Headphones, ArrowRightLeft } from 'lucide-react';

export default function WhyTevesat() {
  const features = [
    {
      icon: Zap,
      title: 'Velocidad Imbatible',
      description: 'Conéctate al instante con nuestra fibra óptica ultrarrápida.',
      color: 'bg-tevesat-primary',
    },
    {
      icon: Shield,
      title: 'Confiabilidad Garantizada',
      description: 'Navega tranquilo con un servicio estable y avanzado.',
      color: 'bg-tevesat-tertiary',
    },
    {
      icon: Headphones,
      title: 'Atención al Cliente',
      description: 'Soporte dedicado, siempre disponible para ti.',
      color: 'bg-tevesat-primary',
    },
    {
      icon: ArrowRightLeft,
      title: 'Planes Flexibles',
      description: 'Encuentra el plan perfecto que se adapta a tu necesidad.',
      color: 'bg-tevesat-tertiary',
    },
  ];

  return (
    <section id="quienes-somos" className="py-24 md:py-32 px-4 md:px-8 bg-tevesat-tertiary-dark relative overflow-hidden">
      {/* Background blobs for depth */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-tevesat-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-tevesat-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
        {/* Left Side: Content */}
        <div className="lg:w-1/2">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-tevesat-primary"></div>
              <span className="text-tevesat-primary font-black uppercase text-[10px] tracking-[0.3em]">Beneficios {import.meta.env.VITE_NOMBRE_EMPRESA}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Conéctate con la red que <span className="text-tevesat-primary">potencia</span> tu vida
            </h2>
            <p className="text-white/60 text-lg font-medium leading-relaxed max-w-xl border-l-4 border-tevesat-primary/20 pl-6 group-hover:text-white transition-colors italic">
              Descubre por qué miles de usuarios en Colombia confían en <span className="text-white">{import.meta.env.VITE_NOMBRE_EMPRESA}</span> para sus necesidades de conectividad. Con opciones de planes flexibles y un servicio al cliente inigualable.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-5 group">
                <div className={`w-16 h-16 ${feature.color === 'bg-tevesat-primary' ? 'bg-tevesat-primary' : 'bg-white/5 border border-white/10'} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white" size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white mb-2 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-bold leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image Column with floating elements */}
        <div className="lg:w-1/2 relative group">
          <div className="absolute -top-10 -right-10 w-full h-full border-2 border-tevesat-primary/10 rounded-[4rem] -z-10 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700"></div>
          
          <div className="rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-8 border-tevesat-secondary relative">
             <img 
               src="/images/couple_sofa.png" 
               alt={`Gente disfrutando internet ${import.meta.env.VITE_NOMBRE_EMPRESA}`} 
               className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
             />
             
             {/* Floating Badge */}
             <div className="absolute bottom-10 left-10 bg-tevesat-tertiary-dark/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl flex items-center gap-4 animate-bounce-slow border border-white/10">
                <div className="w-12 h-12 bg-tevesat-primary rounded-xl flex items-center justify-center text-white font-black text-xl italic">
                  100%
                </div>
                <div>
                   <p className="text-white/60 font-black text-xs uppercase tracking-widest">Tecnología</p>
                   <p className="text-white font-black text-lg leading-none">FIBRA ÓPTICA</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Stats Integrated below - Professional Redesign */}
      <div className="max-w-7xl mx-auto mt-24 px-4">
         <div className="relative rounded-[3.5rem] bg-tevesat-secondary p-12 md:p-16 shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden border border-white/5">
            {/* Background glowing accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-tevesat-secondary/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
               <div className="pb-12 md:pb-0 text-center animate-fade-in">
                 <p className="text-6xl md:text-7xl font-black text-tevesat-primary mb-4 tracking-tighter drop-shadow-[0_0_20px_rgba(236,50,55,0.2)]">
                   +50K
                 </p>
                 <p className="text-white/60 font-black uppercase text-[10px] tracking-[0.4em] mt-2">Usuarios Activos</p>
               </div>
               
               <div className="py-12 md:py-0 md:px-12 text-center">
                 <p className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter shadow-white/10 group-hover:text-tevesat-primary transition-colors">
                   99.9%
                 </p>
                 <p className="text-white/60 font-black uppercase text-[10px] tracking-[0.4em] mt-2">Disponibilidad Real</p>
               </div>
               
               <div className="pt-12 md:pt-0 text-center">
                 <p className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">
                   24/7
                 </p>
                 <p className="text-white/60 font-black uppercase text-[10px] tracking-[0.4em] mt-2">Soporte Humano</p>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}
