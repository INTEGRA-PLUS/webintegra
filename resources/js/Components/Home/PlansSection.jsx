import React, { useState } from 'react';
import { MessageCircle, Check, ArrowRight } from 'lucide-react';

const PlanCard = ({ plan }) => {
  const [showBenefits, setShowBenefits] = useState(false);

  const benefitsList = [
    { title: 'Internet', items: ['Equipo Router Wifi 6', 'Reconexión gratis', '2 traslados gratis', 'Cambio de contraseña gratis ilimitado', 'Latencia Baja', 'Con Simetría', 'Cobertura en todos los rincones de tu hogar'] },
    { title: 'DGO Flex', items: ['Hasta 13 canales.', 'Canales exclusivos Directv'] }
  ];

  return (
    <div className="flex flex-col h-full">
      <div
        className="group relative rounded-[2.5rem] p-8 md:p-10 bg-gradient-to-b from-tevesat-tertiary-light/50 to-tevesat-tertiary border border-white/10 transition-all duration-700 hover:-translate-y-2 text-center overflow-hidden flex-1 flex flex-col"
        style={{ boxShadow: '2px 2px 20px 10px #b6c44e3d inset' }}
      >
        {/* Top Badge */}
        {plan.badge && (
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full px-10">
            <div className="bg-tevesat-primary rounded-full py-2 px-4 shadow-lg border border-white/20">
              <span className="text-tevesat-tertiary font-black uppercase text-[10px] tracking-tight block leading-tight">
                {plan.badge}
              </span>
            </div>
          </div>
        )}

        {/* Speed Section */}
        <div className="mt-14 mb-8 flex items-center justify-center gap-4">
          <span className="text-5xl md:text-6xl font-black text-white leading-none tracking-tighter drop-shadow-2xl">
            {plan.velocidad}
          </span>
          <div className="text-left">
            <p className="text-white font-black text-xl uppercase leading-none mb-1">Megas</p>
            <p className="text-tevesat-primary font-black text-[10px] uppercase tracking-widest">Para tu hogar</p>
          </div>
        </div>

        {/* Product Logo / Promo */}
        <div className="mb-10 flex items-center justify-center gap-3">
          <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-white font-black text-sm">+</div>
          {plan.promo ? (
            <div className="bg-tevesat-secondary rounded-xl py-3 px-6 flex items-center gap-3 shadow-lg transform group-hover:scale-110 transition-transform duration-500">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 18H7V5h10v14z" /></svg>
              </div>
              <span className="text-tevesat-tertiary font-black uppercase text-[12px] tracking-tighter leading-tight text-left">
                {plan.promo.split(' ')[0]}<br />{plan.promo.split(' ').slice(1).join(' ')}
              </span>
            </div>
          ) : (
            <div className="bg-tevesat-tertiary-dark border border-white/10 rounded-xl py-3 px-6 flex items-center gap-1">
              <span className="text-white font-black text-xl tracking-tighter italic">DGO</span>
              <span className="text-tevesat-primary font-black text-xl tracking-tighter italic">FLEX</span>
            </div>
          )}
        </div>

        <p className="text-white/60 font-black uppercase text-[10px] tracking-widest mb-2">Por solo:</p>

        {/* Price */}
        <div className="flex items-start justify-center mb-10 text-white">
          <span className="text-lg font-black mt-2 mr-1 text-tevesat-primary">$</span>
          <span className="text-5xl font-black leading-none tracking-tighter">{plan.precio}</span>
          <div className="text-left mt-2 ml-1">
            <p className="text-xl font-black leading-none">{plan.decimal}</p>
            <p className="text-[9px] font-black uppercase opacity-60 tracking-tighter mt-1 whitespace-nowrap">
              {plan.priceLabel || 'Mensual IVA Incluido'}
            </p>
          </div>
        </div>

        {/* Action Button & More - Pushed to bottom */}
        <div className="mt-auto">
          <button className="w-full bg-tevesat-primary text-tevesat-tertiary py-4 rounded-[2rem] font-black uppercase tracking-[0.1em] text-[12px] flex items-center justify-center gap-3 hover:bg-white transition-all duration-300 shadow-xl shadow-tevesat-primary/20 mb-8 font-outfit">
            Compra ahora <MessageCircle size={20} />
          </button>

          <button
            onClick={() => setShowBenefits(!showBenefits)}
            className="text-white/40 hover:text-white font-black uppercase text-[10px] tracking-[0.2em] underline decoration-tevesat-secondary/30 underline-offset-8 transition-all flex items-center justify-center mx-auto gap-2"
          >
            {showBenefits ? 'Cerrar beneficios' : 'Ver más beneficios'}
          </button>
        </div>
      </div>

      {/* Benefits Content (Dynamic) */}
      <div className={`transition-all duration-700 overflow-hidden ${showBenefits ? 'max-h-[800px] mt-8 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-8 border border-white/10 text-left">
          {benefitsList.map((section, sidx) => (
            <div key={sidx} className="mb-6 last:mb-0">
              <h4 className="text-tevesat-secondary font-black text-sm uppercase mb-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-tevesat-secondary rounded-full"></div>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.items.map((item, iidx) => (
                  <li key={iidx} className="flex items-start gap-3 text-white/70 text-xs font-bold leading-relaxed">
                    <Check size={14} className="text-tevesat-secondary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StratumHeader = ({ subtitle, title, arrowText }) => (
  <div className="lg:w-1/3 text-left">
    <div className="mb-8">
      <div className="w-16 h-16 bg-tevesat-secondary/20 rounded-2xl flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(255,170,0,0.2)]">
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-tevesat-secondary fill-current">
          <circle cx="12" cy="5" r="3" />
          <circle cx="5" cy="19" r="3" />
          <circle cx="19" cy="19" r="3" />
          <path d="M12 8l-5 8M12 8l5 8" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M8 12h8" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      </div>
      <p className="text-tevesat-secondary font-black uppercase text-[9px] tracking-[0.2em] mb-4 border-l-2 border-tevesat-secondary pl-3 max-w-[280px]">
        {subtitle}
      </p>
      <h2 className="text-2xl md:text-4xl font-black text-white mb-10 leading-[1.2] tracking-tight italic">
        {title}
      </h2>
      <button className="flex items-center gap-4 text-white group bg-white/5 pr-8 pl-2 py-2 rounded-full border border-white/10 hover:border-tevesat-primary transition-all">
        <div className="w-12 h-12 rounded-full bg-tevesat-primary flex items-center justify-center shadow-lg shadow-tevesat-primary/30">
          <ArrowRight className="text-tevesat-tertiary" size={24} strokeWidth={3} />
        </div>
        <span className="font-black uppercase text-[10px] tracking-widest group-hover:text-tevesat-primary transition-colors">
          {arrowText}
        </span>
      </button>
    </div>
  </div>
);

export default function PlansSection() {
  const stratum456Plans = [
    { velocidad: '', precio: '99', decimal: '.900', badge: 'Oferta de lanzamiento zonas nuevas' },
    { velocidad: '', precio: '99', decimal: '.900', badge: 'Oferta de lanzamiento zonas nuevas', promo: 'MOVILIDAD PROMO 48GB' },
    { velocidad: '', precio: '99', decimal: '.900', badge: 'Oferta de lanzamiento zonas nuevas', promo: 'CÁMARA DE MONITOREO 24H' },
  ];

  const stratum123Plans = [
    { velocidad: '', precio: '109', decimal: '.900', priceLabel: 'Mensual' },
    { velocidad: '', precio: '109', decimal: '.900', priceLabel: 'Mensual', promo: 'MOVILIDAD PROMO 48GB' },
    { velocidad: '', precio: '109', decimal: '.900', priceLabel: 'Mensual', promo: 'CÁMARA DE MONITOREO 24H' },
  ];

  return (
    <section id="planes" className="py-24 md:py-32 px-4 md:px-8 bg-tevesat-tertiary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tevesat-tertiary-light/10 via-transparent to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-32 relative z-10">

        {/* Stratum 4, 5, 6 Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <StratumHeader
            subtitle="Oferta de lanzamiento para nuestros planes para estratos 4, 5 y 6"
            title="¡Redes Tevesat S.A.S te ofrece la velocidad y estabilidad que necesitas en Fibra Óptica!"
            arrowText="Ver todos los planes estratos 4, 5 y 6"
          />
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {stratum456Plans.map((plan, idx) => (
              <PlanCard key={idx} plan={plan} />
            ))}
          </div>
        </div>

        {/* Stratum 1, 2, 3 Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-start relative">
          {/* Subtle Professional Divider Line */}
          <div className="absolute -top-16 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <StratumHeader
            subtitle="Nuestros planes estratos 1, 2 y 3"
            title="Conéctate con la mejor red de Fibra Óptica"
            arrowText="Ver todos los planes estratos 1, 2 y 3"
          />
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {stratum123Plans.map((plan, idx) => (
              <PlanCard key={idx} plan={plan} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
