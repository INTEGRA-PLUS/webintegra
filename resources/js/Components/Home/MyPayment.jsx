import React from 'react';
import { CreditCard, MapPin, ExternalLink } from 'lucide-react';
export default function MyPayment() {
  return (
    <section id="mi-pago" className="py-24 md:py-32 px-4 md:px-8 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-tevesat-tertiary/5 -skew-x-12 transform origin-top translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-tevesat-secondary/10 px-6 py-2 rounded-full border border-tevesat-secondary/20 mb-6">
            <span className="text-tevesat-secondary font-black uppercase text-xs tracking-[0.3em]">Cero complicaciones</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-tevesat-tertiary mb-8 tracking-tighter italic">
            Paga en segundos con <br className="hidden md:block" />
            <span className="text-tevesat-secondary">IntegraPay</span>
          </h2>
          <p className="text-gray-500 text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Realiza tus pagos de forma rápida y segura a través de nuestra pasarela de pagos oficial.
          </p>
        </div>

        {/* IntegraPay Central Card */}
        <div className="flex justify-center">
          <a 
            href="https://redestvsat.com/pay.php"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:border-tevesat-secondary hover:-translate-y-3 transition-all duration-500 text-center w-full max-w-lg"
          >
            <div className="w-32 h-32 bg-tevesat-tertiary/5 rounded-[2.5rem] flex items-center justify-center mb-8 group-hover:bg-tevesat-secondary/10 transition-colors">
               <CreditCard className="w-16 h-16 text-tevesat-secondary" strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-black text-tevesat-tertiary mb-4">IntegraPay</h3>
            <p className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-8">Trámite 100% Digital y Seguro</p>
            <div className="w-full bg-tevesat-primary text-tevesat-tertiary py-5 rounded-2xl font-black uppercase text-sm tracking-[0.2em] group-hover:bg-tevesat-secondary group-hover:text-white transition-all shadow-xl shadow-tevesat-primary/20">
               Paga Aquí
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

const ArrowRight = ({ size, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);
