import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tevesat-tertiary-dark text-white pt-24 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-tevesat-primary/5 to-transparent pointer-events-none"></div>

      <div className="px-4 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
            
            {/* Column 1: Brand & Social */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-4">
                <img src="/images/empresa/logo.png" alt={import.meta.env.VITE_NOMBRE_EMPRESA} className="h-14 w-auto" />
                <div className="flex flex-col">
                  <span className="text-white font-black text-2xl tracking-tighter leading-none uppercase">{import.meta.env.VITE_NOMBRE_EMPRESA}</span>
                </div>
              </div>
              
              <p className="text-white/70 text-lg font-medium leading-relaxed max-w-sm">
                Conectando familias y negocios con lo mejor en tecnología. <br />
                <span className="text-tevesat-primary font-black">¡Más cerca es mejor!</span>
              </p>

              <div className="flex flex-wrap gap-4">
                {[
                  { Icon: Facebook, href: '#' },
                  { Icon: Instagram, href: '#' },
                  { Icon: Youtube, href: '#' },
                  { Icon: Linkedin, href: '#' },
                  { Icon: TwitterIcon, href: '#' },
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-tevesat-primary hover:text-white hover:border-tevesat-primary transition-all duration-500 hover:-translate-y-2 shadow-lg"
                  >
                    <social.Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Sitios de Interés */}
            <div>
              <h4 className="text-base font-black uppercase tracking-widest text-tevesat-primary mb-8 italic">Sitios de Interés</h4>
              <ul className="space-y-4">
                {['Planes de Internet', 'Medidor de Velocidad', 'Internet Móvil', 'Cámaras de Seguridad', 'Soluciones PYME', 'Trabaja con nosotros'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/50 hover:text-white transition-all font-bold text-sm uppercase tracking-wider flex items-center gap-2 group">
                      <div className="w-1 h-1 bg-tevesat-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h4 className="text-base font-black uppercase tracking-widest text-tevesat-primary mb-8 italic">Legal</h4>
              <ul className="space-y-4">
                {[`Contrato ${import.meta.env.VITE_NOMBRE_EMPRESA}`, 'Mapa de cobertura', 'Protección al usuario', 'Neutralidad en la red', 'Internet Sano', 'PQRS'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/50 hover:text-white transition-all font-bold text-sm uppercase tracking-wider flex items-center gap-2 group">
                      <div className="w-1 h-1 bg-tevesat-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contacto */}
            <div className="space-y-8">
              <h4 className="text-base font-black uppercase tracking-widest text-tevesat-primary mb-8 italic">Contacto</h4>
              
              <div className="space-y-6">
                <a href="tel:3009109110" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-tevesat-primary group-hover:bg-tevesat-primary group-hover:text-white transition-all duration-300">
                    <Phone size={22} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-white font-black text-lg leading-none">300 910 9110</p>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1">Línea Nacional</p>
                  </div>
                </a>

                <a href="https://wa.me/573004798909" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-tevesat-primary group-hover:bg-tevesat-primary group-hover:text-white transition-all duration-300">
                     <WhatsappIcon className="w-6 h-6 text-tevesat-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-white font-black text-lg leading-none">300 479 8909</p>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1">WhatsApp Ventas</p>
                  </div>
                </a>

                <a href="mailto:internet@tevesat.co" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-tevesat-primary group-hover:bg-tevesat-primary group-hover:text-white transition-all duration-300">
                    <Mail size={22} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-white font-black text-sm break-all leading-none italic">internet@tevesat.co</p>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1">Correo Soporte</p>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/20 border-t border-white/5 py-8 px-4 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 font-black uppercase text-[10px] tracking-[0.3em] text-center md:text-left">
            © {currentYear} <span className="text-white">{import.meta.env.VITE_NOMBRE_EMPRESA}</span> | Todos los derechos reservados
          </p>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full hover:bg-tevesat-primary transition-all duration-500"
          >
            <span className="text-white font-black text-[10px] uppercase tracking-widest">Volver al inicio</span>
            <div className="w-8 h-8 rounded-full bg-tevesat-primary group-hover:bg-white flex items-center justify-center transition-all">
               <ArrowUp size={16} className="text-white group-hover:text-tevesat-primary" strokeWidth={3} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

const TwitterIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const WhatsappIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);
