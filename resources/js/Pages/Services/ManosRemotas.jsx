import React from 'react';
import ServiceLayout from '../../Layouts/ServiceLayout';
import { Settings, Cpu, Globe, Server, Monitor, Shield } from 'lucide-react';

export default function ManosRemotas() {
  const items = [
    {
      title: "Configuración ONT y OLT",
      description: "Servicios especializados en el aprovisionamiento y gestión de redes GPON, asegurando una conectividad de última milla eficiente y estable.",
      icon: <Globe className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Networking Avanzado",
      description: "Configuración de equipos Mikrotik en capas 1, 2, 3 y 4. Gestión de ruteo, switching y políticas de red personalizadas.",
      icon: <Server className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Soporte Multi-marca",
      description: "Experiencia técnica en dispositivos Cisco y Fortinet. Implementación de reglas de firewall y segmentación de redes corporativas.",
      icon: <Shield className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Gestión de Routers",
      description: "Configuración y optimización de routers de todas las marcas del mercado para maximizar el rendimiento de la conexión local.",
      icon: <Settings className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Mantenimiento de PC",
      description: "Soporte técnico integral para estaciones de trabajo, incluyendo limpieza de hardware, optimización de software y eliminación de malware.",
      icon: <Monitor className="w-8 h-8 text-tevesat-primary" />
    },
    {
      title: "Sistemas Inteligentes",
      description: "Configuración e integración de dispositivos IoT y sistemas inteligentes para automatización de oficinas y hogares.",
      icon: <Cpu className="w-8 h-8 text-tevesat-primary" />
    }
  ];

  return (
    <ServiceLayout 
      title="Soluciones Manos Remotas"
      subtitle="Soporte técnico profesional y avanzado a su disposición para resolver cualquier inconveniente tecnológico de forma ágil."
      bgImage="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000"
    >
      <section className="py-20 bg-tevesat-tertiary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16 mb-20">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-8 uppercase">Soporte Técnico de Élite</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Este servicio profesional permite tener a tu disposición servicios técnicos avanzados con el fin de dar soporte a los problemas y dificultades que se presenten en relación a equipos, dispositivos, conectividad y de sistemas inteligentes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="mb-6 bg-tevesat-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col md:flex-row items-center gap-12 bg-tevesat-primary rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative">
            <div className="flex-1 relative z-10">
              <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">¿Necesitas ayuda inmediata?</h2>
              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                Nuestros técnicos están listos para intervenir de forma remota o presencial según la necesidad de su infraestructura. Optimizamos sus tiempos de respuesta y minimizamos el downtime.
              </p>
              <a 
                href="https://wa.me/573144333896" 
                target="_blank" 
                className="inline-block bg-white text-tevesat-primary px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-2xl"
              >
                Contactar Soporte
              </a>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1454165833767-1330084b1711?q=80&w=1000" 
                alt="Support team"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}
