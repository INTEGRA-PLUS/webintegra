import React, { useState, useEffect } from 'react';
import { X, Phone, CheckCircle2 } from 'lucide-react';

export default function PromotionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show modal after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length >= 7) {
      setSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-tevesat-tertiary-dark/80 backdrop-blur-sm animate-fadeIn"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-gradient-to-br from-tevesat-tertiary to-tevesat-tertiary-dark rounded-[2.5rem] p-8 md:p-10 border border-white/10 shadow-[0_20px_60px_rgba(182,196,78,0.2)] animate-modalIn">

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
        >
          <X size={28} />
        </button>

        {/* Promo Content */}
        {!submitted ? (
          <>
            <div className="text-center">
              <div className="inline-block bg-tevesat-secondary text-white font-black uppercase text-[10px] tracking-widest px-6 py-2 rounded-full mb-8 shadow-lg shadow-tevesat-secondary/20">
                Lleva Internet
              </div>

              <h4 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tighter mb-2">
                {/* 20% DESCUENTO */}
              </h4>
              <h2 className="text-tevesat-primary font-black text-4xl md:text-5xl uppercase leading-none mb-6">
                Internet megas
              </h2>

              <div className="mb-8">
                <p className="text-white/70 font-bold uppercase text-sm mb-1">Mensual desde</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-black text-tevesat-primary">$79.900</span>
                </div>
                <p className="text-white/40 line-through font-bold text-lg">luego $99.900 x mes</p>
              </div>

              <div className="bg-white/5 rounded-2xl p-4 mb-8 border border-white/5">
                <p className="text-white/80 font-bold text-sm leading-relaxed">
                  Y súmale otro de nuestros servicios:<br />
                  <span className="text-tevesat-secondary uppercase text-xs font-black">Televisión DGO | Movilidad 48 GB | Cámaras 24H</span>
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <label className="block text-left text-white/60 font-black uppercase text-[10px] tracking-widest mb-2 ml-4">
                    Ingresa tu número de celular:
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                    <input
                      type="tel"
                      placeholder="Ej: 3003330000"
                      className="w-full bg-white/10 border border-white/20 rounded-2xl py-5 pl-12 pr-6 text-white font-bold placeholder:text-white/20 focus:outline-none focus:border-tevesat-primary focus:ring-1 focus:ring-tevesat-primary transition-all"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-tevesat-secondary text-tevesat-tertiary font-black uppercase py-5 rounded-2xl text-lg tracking-widest hover:bg-tevesat-primary transition-all duration-300 transform hover:scale-[1.02] shadow-xl shadow-tevesat-secondary/20"
                >
                  ¡Quiero la promo!
                </button>
              </form>

              <div className="mt-8 text-[10px] font-bold text-white/30 uppercase tracking-widest leading-relaxed">
                *Aplican términos y condiciones. Estratos 4, 5 y 6.<br />
                Velocidad garantizada por cable.
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-10 animate-fadeIn">
            <CheckCircle2 size={80} className="text-tevesat-primary mx-auto mb-6" />
            <h3 className="text-3xl font-black text-white mb-4 uppercase">¡RECIBIDO!</h3>
            <p className="text-white/70 font-bold text-lg">Te llamaremos en menos de 10 minutos para activar tu descuento.</p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalIn {
          0% { opacity: 0; transform: scale(0.8) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
        .animate-modalIn { animation: modalIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
}
