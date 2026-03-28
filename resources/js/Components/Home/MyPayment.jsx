import React from 'react';
import { CreditCard, MapPin, ExternalLink } from 'lucide-react';

export default function MyPayment() {
  const physicalPayments = [
    { name: 'Corresponsales Bancolombia', convenio: '94342', image: '/images/payments/bancolombia.png' },
    { name: 'Efecty', convenio: '112426', image: '/images/payments/efecty.png' },
    { name: 'Gana', convenio: '384', image: '/images/payments/gana.png' },
  ];

  const digitalPayments = [
    { name: 'PSE / OnePay', link: 'https://pagos.onepay.la/velonet', image: '/images/payments/pse.png' },
  ];

  return (
    <section id="mi-pago" className="py-24 md:py-32 px-4 md:px-8 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-velonet-purple/5 -skew-x-12 transform origin-top translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-velonet-orange/10 px-6 py-2 rounded-full border border-velonet-orange/20 mb-6">
            <span className="text-velonet-orange font-black uppercase text-xs tracking-[0.3em]">Cero complicaciones</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-velonet-purple mb-8 tracking-tighter italic">
            Paga en segundos con nuestros <br className="hidden md:block" />
            <span className="text-velonet-orange">Aliados de Confianza</span>
          </h2>
          <p className="text-gray-500 text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Realiza tus pagos de forma segura a través de los corresponsales y plataformas más grandes del país.
          </p>
        </div>

        {/* Payment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Digital Payment - PSE */}
          <a 
            href={digitalPayments[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-white p-8 rounded-[3.5rem] border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:border-velonet-orange hover:-translate-y-3 transition-all duration-500 text-center"
          >
            <div className="w-full aspect-square bg-gray-50 rounded-[2.5rem] flex items-center justify-center mb-8 group-hover:bg-velonet-orange/5 transition-colors">
               <img src={digitalPayments[0].image} alt="PSE" className="w-[80%] h-[80%] object-contain" />
            </div>
            <h3 className="text-2xl font-black text-velonet-purple mb-2">Pagar con PSE</h3>
            <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-6">Trámite 100% Digital</p>
            <div className="mt-auto bg-velonet-purple text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest group-hover:bg-velonet-orange transition-colors">
               Ir a pagar ahora
            </div>
          </a>

          {/* Physical Payments */}
          {physicalPayments.map((p) => (
            <div 
              key={p.name}
              className="group flex flex-col bg-white p-8 rounded-[3.5rem] border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-500 text-center"
            >
              <div className="w-full aspect-square bg-gray-50 rounded-[2.5rem] flex items-center justify-center mb-8 border border-gray-100/50">
                 <img src={p.image} alt={p.name} className="w-[85%] h-[85%] object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-black text-velonet-purple mb-4 leading-tight">{p.name}</h3>
              
              <div className="mt-auto bg-gray-100/50 rounded-2xl p-4 border border-dashed border-gray-200 group-hover:border-velonet-orange/50 transition-all">
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Número de Convenio</p>
                <p className="text-3xl font-black text-velonet-orange tracking-tighter">{p.convenio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-20 text-center">
            <p className="text-gray-400 font-bold text-sm flex items-center justify-center gap-3">
              <span className="w-2 h-2 bg-velonet-orange rounded-full animate-pulse"></span>
              Disponible en todo el territorio nacional a través de sus puntos de servicio.
            </p>
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
