import React from 'react';
import ServiceLayout from '../../Layouts/ServiceLayout';
import { Camera, Shield, Settings, Wrench, Cable, RefreshCw, Eye, Layout } from 'lucide-react';

export default function Cctv() {
  const items = [
    {
      title: "Diseño y Planificación",
      description: "Diseño estratégico de sistemas de vigilancia para cubrir puntos ciegos y maximizar la seguridad perimetral.",
      icon: <Layout className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Administración del Sistema",
      description: "Gestión centralizada de servidores de video, almacenamiento en la nube y visualización remota en tiempo real.",
      icon: <Shield className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Instalación Profesional",
      description: "Montaje y puesta en marcha de cámaras IP, análogas y térmicas con los más altos estándares de calidad.",
      icon: <Camera className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Configuración Avanzada",
      description: "Optimización de grabadores (DVR/NVR), analíticas de video, detección de movimiento y alertas inteligentes.",
      icon: <Settings className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Mantenimiento Preventivo",
      description: "Limpieza de lentes, revisión de conexiones y actualización de firmware para asegurar operatividad 24/7.",
      icon: <Wrench className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Reemplazo de Cableado",
      description: "Revisión y cambio de cableado UTP o coaxial para solucionar problemas de interferencia o pérdida de señal.",
      icon: <Cable className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Reprogramación de Grabadores",
      description: "Configuración de acceso remoto, respaldo de grabaciones y gestión de usuarios autorizados.",
      icon: <RefreshCw className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Visión Nocturna y Especializada",
      description: "Implementación de tecnologías ColorVu, DarkFighter e Infrarrojos para visibilidad total en cualquier condición.",
      icon: <Eye className="w-8 h-8 text-tevesat-primary" />
    }
  ];

  return (
    <ServiceLayout 
      title="Circuito Cerrado de TV (CCTV)"
      subtitle="Vigilancia inteligente para su tranquilidad. Protegemos lo que más le importa con tecnología de video avanzada."
      bgImage="https://images.unsplash.com/photo-1557597774-9d2739f85a76?q=80&w=2000"
    >
      <section className="py-20 bg-tevesat-tertiary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-tevesat-primary/5 transition-all duration-300 group"
              >
                <div className="mb-6 bg-tevesat-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-white/5 border border-white/10 rounded-[4rem] overflow-hidden p-10 md:p-20 relative">
            <div className="absolute inset-0 z-0">
               <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2923216?q=80&w=2000" 
                alt="Business trust"
                className="w-full h-full object-cover opacity-10"
              />
            </div>
            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black text-white mb-8 uppercase">Seguridad Integral 24/7</h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Nuestros sistemas de CCTV permiten monitorear su empresa u hogar desde cualquier parte del mundo a través de su smartphone. Integramos analíticas inteligentes que le avisan ante cualquier actividad sospechosa, permitiéndole actuar a tiempo.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-6 py-2 rounded-full bg-tevesat-primary/20 text-tevesat-primary text-sm font-bold border border-tevesat-primary/30">Acceso Remoto</span>
                  <span className="px-6 py-2 rounded-full bg-tevesat-primary/20 text-tevesat-primary text-sm font-bold border border-tevesat-primary/30">Full HD / 4K</span>
                  <span className="px-6 py-2 rounded-full bg-tevesat-primary/20 text-tevesat-primary text-sm font-bold border border-tevesat-primary/30">IA Integrada</span>
                </div>
              </div>
              <div className="flex justify-center">
                 <button className="bg-tevesat-primary text-white text-xl px-12 py-6 rounded-3xl font-black uppercase tracking-widest hover:scale-110 transition-all shadow-[0_30px_60px_rgba(127,171,60,0.4)]">
                    Solicitar Diseño
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}
