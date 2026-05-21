import React, { useState } from 'react';
import { MessageCircle, Check, ArrowRight, Zap, Wifi } from 'lucide-react';

const PlanCard = ({ plan }) => {
  const [showBenefits, setShowBenefits] = useState(false);

  const benefitsList = [
    { title: 'Internet', items: ['Equipo Router Wifi 6', 'Reconexión gratis', '2 traslados gratis', 'Cambio de contraseña gratis ilimitado', 'Latencia Baja', 'Con Simetría', 'Cobertura en todos los rincones de tu hogar'] },
    { title: 'Televisión', items: ['Hasta 13 canales.', 'Canales exclusivos Directv'] }
  ];

  return (
    <div className="flex flex-col h-full w-full min-w-[300px] max-w-[380px]">
      <div
        className="group relative rounded-[2.5rem] p-8 md:p-10 bg-gradient-to-b from-tevesat-tertiary-light/40 via-tevesat-tertiary to-tevesat-tertiary-dark border border-white/15 transition-all duration-500 hover:-translate-y-2 hover:border-tevesat-primary/30 text-center overflow-hidden flex-1 flex flex-col shadow-[0_25px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_30px_70px_rgba(182,196,78,0.15)]"
      >
        {/* Decorative background */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-tevesat-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-tevesat-primary/20 transition-colors duration-700" />
        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-tevesat-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_0_40px_rgba(182,196,78,0.08)] pointer-events-none" />

        {/* Top Badge */}
        {plan.badge && (
          <div className="relative z-10 mb-6">
            <div className="inline-block bg-tevesat-primary rounded-full py-2.5 px-5 shadow-lg shadow-tevesat-primary/25 border border-white/25">
              <span className="text-tevesat-tertiary font-black uppercase text-[10px] tracking-wide leading-tight">
                {plan.badge}
              </span>
            </div>
          </div>
        )}

        {/* Speed Section */}
        <div className={`relative z-10 flex flex-col items-center ${plan.badge ? 'mb-6' : 'mt-4 mb-6'}`}>
          {plan.velocidad ? (
            <div className="flex items-end justify-center gap-3">
              <span className="text-6xl md:text-7xl font-black text-white leading-none tracking-tighter drop-shadow-lg">
                {plan.velocidad}
              </span>
              <div className="text-left pb-2">
                <p className="text-white font-black text-xl uppercase leading-none mb-1">Megas</p>
                <p className="text-tevesat-primary font-black text-[10px] uppercase tracking-widest">Para tu hogar</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-tevesat-primary/15 border border-tevesat-primary/30 flex items-center justify-center shadow-[0_0_30px_rgba(182,196,78,0.2)] group-hover:scale-110 transition-transform duration-500">
                <Wifi className="text-tevesat-primary" size={32} strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-white font-black text-3xl md:text-4xl uppercase leading-none tracking-tight">Megas</p>
                <p className="text-tevesat-primary font-black text-xs uppercase tracking-[0.25em] mt-2">Para tu hogar</p>
              </div>
            </div>
          )}
        </div>

        {/* Product Logo / Promo */}
        {plan.promo && (
          <div className="relative z-10 mb-8 flex items-center justify-center gap-3">
            <div className="w-7 h-7 rounded-full border border-white/25 bg-white/5 flex items-center justify-center text-white font-black text-sm shrink-0">+</div>
            <div className="bg-tevesat-secondary rounded-xl py-3 px-5 flex items-center gap-3 shadow-lg shadow-tevesat-secondary/20 transform group-hover:scale-105 transition-transform duration-500">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white shrink-0">
                <Zap className="w-4 h-4" fill="currentColor" />
              </div>
              <span className="text-tevesat-tertiary font-black uppercase text-[11px] tracking-tight leading-tight text-left">
                {plan.promo.split(' ')[0]}<br />{plan.promo.split(' ').slice(1).join(' ')}
              </span>
            </div>
          </div>
        )}

        {/* Price divider */}
        <div className="relative z-10 w-16 h-px bg-gradient-to-r from-transparent via-tevesat-primary/50 to-transparent mx-auto mb-6" />

        <p className="relative z-10 text-white/50 font-black uppercase text-[10px] tracking-[0.3em] mb-3">Por solo</p>

        {/* Price */}
        <div className="relative z-10 flex items-start justify-center mb-8 text-white">
          <span className="text-xl font-black mt-3 mr-0.5 text-tevesat-primary">$</span>
          <span className="text-6xl md:text-7xl font-black leading-none tracking-tighter">{plan.precio}</span>
          <div className="text-left mt-3 ml-1">
            <p className="text-2xl font-black leading-none text-white/90">{plan.decimal}</p>
            <p className="text-[9px] font-black uppercase text-white/50 tracking-wider mt-1.5 whitespace-nowrap">
              {plan.priceLabel || 'Mensual IVA Incluido'}
            </p>
          </div>
        </div>

        {/* Action Button & More */}
        <div className="relative z-10 mt-auto">
          <button
            type="button"
            className="w-full bg-tevesat-primary text-tevesat-tertiary py-4 rounded-full font-black uppercase tracking-[0.12em] text-[12px] flex items-center justify-center gap-3 hover:bg-white hover:shadow-[0_12px_40px_rgba(255,255,255,0.25)] transition-all duration-300 shadow-xl shadow-tevesat-primary/30 mb-6 active:scale-[0.98]"
          >
            Compra ahora <MessageCircle size={20} strokeWidth={2.5} />
          </button>

          <button
            type="button"
            onClick={() => setShowBenefits(!showBenefits)}
            className="text-white/40 hover:text-tevesat-primary font-black uppercase text-[10px] tracking-[0.2em] underline decoration-tevesat-primary/40 underline-offset-8 transition-all flex items-center justify-center mx-auto gap-2"
          >
            {showBenefits ? 'Cerrar beneficios' : 'Ver más beneficios'}
          </button>
        </div>
      </div>

      {/* Benefits Content */}
      <div className={`transition-all duration-700 overflow-hidden ${showBenefits ? 'max-h-[800px] mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-8 border border-white/10 text-left">
          {benefitsList.map((section, sidx) => (
            <div key={sidx} className="mb-6 last:mb-0">
              <h4 className="text-tevesat-secondary font-black text-sm uppercase mb-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-tevesat-secondary rounded-full" />
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
      <button type="button" className="flex items-center gap-4 text-white group bg-white/5 pr-8 pl-2 py-2 rounded-full border border-white/10 hover:border-tevesat-primary transition-all">
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
  ];

  const stratum123Plans = [
    { velocidad: '', precio: '109', decimal: '.900', priceLabel: 'Mensual' },
  ];

  return (
    <section id="planes" className="py-24 md:py-32 px-4 md:px-8 bg-tevesat-tertiary relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tevesat-tertiary-light/10 via-transparent to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto flex flex-col gap-32 relative z-10">

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <StratumHeader
            subtitle="Oferta de lanzamiento para nuestros planes"
            title="¡Redes Tevesat S.A.S te ofrece la velocidad y estabilidad que necesitas en Fibra Óptica!"
            arrowText="Ver todos los planes"
          />
          <div className="lg:w-2/3 flex flex-wrap gap-8 justify-center lg:justify-start">
            {stratum456Plans.map((plan, idx) => (
              <PlanCard key={idx} plan={plan} />
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start relative">
          <div className="absolute -top-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <StratumHeader
            subtitle="Nuestros planes"
            title="Conéctate con la mejor red de Fibra Óptica"
            arrowText="Ver todos los planes"
          />
          <div className="lg:w-2/3 flex flex-wrap gap-8 justify-center lg:justify-start">
            {stratum123Plans.map((plan, idx) => (
              <PlanCard key={idx} plan={plan} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
