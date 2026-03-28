import React from 'react';
import { Zap, Shield, Headphones, ArrowRightLeft } from 'lucide-react';

export default function WhyTevesat() {
  const features = [
    {
      icon: Zap,
      title: 'Velocidad Imbatible',
      description: 'Conéctate al instante con nuestra fibra óptica ultrarrápida.',
      color: 'bg-red-500',
    },
    {
      icon: Shield,
      title: 'Confiabilidad Garantizada',
      description: 'Navega tranquilo con un servicio estable y avanzado.',
      color: 'bg-purple-500',
    },
    {
      icon: Headphones,
      title: 'Atención al Cliente',
      description: 'Soporte dedicado, siempre disponible para ti.',
      color: 'bg-orange-500',
    },
    {
      icon: ArrowRightLeft,
      title: 'Planes Flexibles',
      description: 'Encuentra el plan perfecto que se adapta a tu necesidad.',
      color: 'bg-blue-500',
    },
  ];

  return (
    <section id="quienes-somos" className="py-24 md:py-32 px-4 md:px-8 bg-[#F4F7FA] relative overflow-hidden">
      {/* Background blobs for depth */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-tevesat-tertiary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-tevesat-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
        {/* Left Side: Content */}
        <div className="lg:w-1/2">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-tevesat-secondary"></div>
              <span className="text-tevesat-secondary font-black uppercase text-[10px] tracking-[0.3em]">Beneficios Redes Tevesat S.A.S</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-tevesat-tertiary mb-8 leading-[1.1] tracking-tight">
              Conéctate con la red que <span className="text-tevesat-secondary">potencia</span> tu vida
            </h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-xl border-l-4 border-tevesat-secondary/20 pl-6">
              Descubre por qué miles de usuarios en Colombia confían en Redes Tevesat S.A.S para sus necesidades de conectividad. Con opciones de planes flexibles y un servicio al cliente inigualable.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-5 group">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white" size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-tevesat-tertiary mb-2 tracking-tight">
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
          <div className="absolute -top-10 -right-10 w-full h-full border-2 border-tevesat-tertiary/10 rounded-[4rem] -z-10 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700"></div>
          
          <div className="rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-8 border-white relative">
             <img 
               src="/images/couple_sofa.png" 
               alt="Gente disfrutando internet Redes Tevesat S.A.S" 
               className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
             />
             
             {/* Floating Badge */}
             <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-tevesat-secondary rounded-xl flex items-center justify-center text-white font-black text-xl italic">
                  100%
                </div>
                <div>
                   <p className="text-tevesat-tertiary font-black text-xs uppercase tracking-widest">Tecnología</p>
                   <p className="text-tevesat-secondary font-black text-lg leading-none">FIBRA ÓPTICA</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Stats Integrated below - Professional Redesign */}
      <div className="max-w-7xl mx-auto mt-24 px-4">
         <div className="relative rounded-[3.5rem] bg-tevesat-tertiary p-12 md:p-16 shadow-[0_50px_100px_rgba(89,37,130,0.3)] overflow-hidden">
            {/* Background glowing accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-tevesat-secondary/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
               <div className="pb-12 md:pb-0 text-center animate-fade-in">
                 <p className="text-6xl md:text-7xl font-black text-tevesat-secondary mb-4 tracking-tighter drop-shadow-[0_0_20px_rgba(255,170,0,0.4)]">
                   +50K
                 </p>
                 <p className="text-white/60 font-black uppercase text-[10px] tracking-[0.4em] mt-2">Usuarios Activos</p>
               </div>
               
               <div className="py-12 md:py-0 md:px-12 text-center">
                 <p className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter shadow-white/10 group-hover:text-tevesat-secondary transition-colors">
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
