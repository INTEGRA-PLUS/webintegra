import React from 'react';
import { Wifi, Camera } from 'lucide-react';

export default function ServicesBar() {
  const services = [
    {
      icon: Wifi,
      title: 'Internet Hogar',
      description: 'Conexión rápida y confiable',
    },
    {
      icon: Camera,
      title: 'Cámaras de Seguridad',
      description: 'Monitoreo 24/7',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 px-4 md:px-8">
      {/* Acento decorativo suave */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-tevesat-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Encabezado de la sección */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-tevesat-primary" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-tevesat-primary">
              Nuestros Servicios
            </span>
            <span className="h-px w-8 bg-tevesat-primary" />
          </div>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-tevesat-tertiary-dark md:text-4xl">
            Todo lo que necesitas en <span className="text-tevesat-primary italic">un solo lugar</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white p-10 text-center shadow-[0_30px_70px_-30px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-4"
              >
                {/* Círculo decorativo de fondo */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-tevesat-primary/5 transition-transform duration-700 group-hover:scale-150" />

                <div className="relative z-10">
                  <div className="relative z-10 mb-8 inline-flex h-20 w-20 transform items-center justify-center rounded-2xl bg-tevesat-primary shadow-xl shadow-tevesat-primary/20 transition-all duration-500 group-hover:rotate-6 group-hover:bg-tevesat-primary-light">
                    <IconComponent className="text-white" size={40} strokeWidth={2.5} />
                  </div>
                  <h3 className="mb-4 text-2xl font-black uppercase tracking-tighter text-tevesat-tertiary-dark">
                    {service.title}
                  </h3>
                  <div className="mx-auto mb-6 h-1 w-10 rounded-full bg-tevesat-primary transition-all duration-500 group-hover:w-20" />
                  <p className="text-sm font-bold italic tracking-wide text-gray-500 transition-colors group-hover:text-tevesat-primary">
                    {service.description}
                  </p>
                </div>

                {/* Línea inferior de acento */}
                <div className="absolute bottom-0 left-0 h-2 w-full translate-y-full transform bg-tevesat-primary transition-transform duration-500 group-hover:translate-y-0" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
