import React from 'react';
import { Wifi, Tv, Smartphone, Camera } from 'lucide-react';

export default function ServicesBar() {
  const services = [
    {
      icon: Wifi,
      title: 'Internet Hogar',
      description: 'Conexión rápida y confiable',
    },
    {
      icon: Tv,
      title: 'Televisión',
      description: 'Canales HD incluidos',
    },
    {
      icon: Smartphone,
      title: 'Internet Móvil',
      description: 'Cobertura en toda la región',
    },
    {
      icon: Camera,
      title: 'Cámaras de Seguridad',
      description: 'Monitoreo 24/7',
    },
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-8 -mt-16 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-2xl p-10 text-center transition-all duration-500 transform hover:-translate-y-4 border border-gray-50 overflow-hidden relative"
              >
                {/* Decorative background circle */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-tevesat-secondary/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-tevesat-tertiary/5 rounded-2xl mb-8 group-hover:bg-tevesat-tertiary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                    <IconComponent className="text-tevesat-secondary group-hover:text-white" size={40} strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-black text-tevesat-tertiary mb-4 uppercase tracking-tighter">{service.title}</h3>
                  <div className="w-10 h-1 bg-tevesat-secondary mx-auto mb-6 rounded-full group-hover:w-20 transition-all duration-500"></div>
                  <p className="text-gray-500 font-bold text-sm tracking-wide lowercase italic opacity-60">
                    {service.description}
                  </p>
                </div>

                {/* Bottom line accent */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-tevesat-secondary transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
