import React from 'react';
import { Shield, Globe, ArrowRight } from 'lucide-react';

export default function ServicesOverview() {
  const scrollToPlans = (e) => {
    e.preventDefault();
    const plansSection = document.getElementById('planes');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-black relative overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tevesat-primary/5 rounded-full blur-[150px] -mr-96 -mt-96"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Services Titles */}
          <div className="lg:col-span-3 space-y-12">
            <div className="group cursor-default">
              <h3 className="text-tevesat-primary font-black text-xs uppercase tracking-[0.3em] mb-4">Soluciones Corporativas</h3>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight group-hover:text-tevesat-primary transition-colors duration-300">
                SERVICIOS PARA <span className="italic">EMPRESAS</span>
              </h2>
              <div className="w-12 h-1 bg-tevesat-primary mt-4 group-hover:w-full transition-all duration-700"></div>
            </div>

            <div className="group cursor-default">
              <h3 className="text-tevesat-primary font-black text-xs uppercase tracking-[0.3em] mb-4">Conectividad Total</h3>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight group-hover:text-tevesat-primary transition-colors duration-300">
                SERVICIOS PARA <span className="italic">HOGAR</span>
              </h2>
              <div className="w-12 h-1 bg-tevesat-primary mt-4 group-hover:w-full transition-all duration-700"></div>
            </div>
          </div>

          {/* Middle: Professional Design (Image) */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-tevesat-primary/20 rounded-[3rem] blur-2xl group-hover:bg-tevesat-primary/30 transition-all duration-700"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000" 
                alt="Diseño de Servicios Integra" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3 text-white/80 font-bold text-sm uppercase tracking-widest mb-2">
                  <Shield size={18} className="text-tevesat-primary" />
                  Garantía de Conexión
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Respaldo and CTA */}
          <div className="lg:col-span-4 space-y-8 lg:pl-8">
            <div className="space-y-4">
              <h4 className="text-tevesat-primary font-black text-sm uppercase tracking-[0.2em] italic">
                Nuestra Promesa
              </h4>
              <p className="text-4xl md:text-5xl font-black text-white leading-[0.9] tracking-tighter">
                SOMOS EL <br />
                <span className="text-tevesat-primary italic">RESPALDO</span> <br />
                DE NUESTROS CLIENTES
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/70">
                <Globe size={24} className="text-tevesat-primary flex-shrink-0" />
                <p className="font-bold text-lg leading-tight">
                  INTERNET HOGAR Y EMPRESAS <br />
                  <span className="text-sm font-medium text-white/40 uppercase tracking-widest">Al alcance de todos, zona rural y urbana</span>
                </p>
              </div>

              <a 
                href="#planes"
                onClick={scrollToPlans}
                className="group flex items-center justify-between bg-white text-black px-8 py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-tevesat-primary hover:text-white transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
              >
                Ver nuestros planes
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
