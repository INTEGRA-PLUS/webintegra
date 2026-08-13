import React from 'react';
import { ShoppingCart, Headset, Settings, Clock, CalendarDays, Sun, CloudSun, Wifi, Globe, Network, ArrowUpRight } from 'lucide-react';
import { CONTACT_CHANNELS, SCHEDULE } from './data/contact';

const CHANNEL_ICONS = {
  ventas: ShoppingCart,
  atencion: Headset,
  soporte: Settings,
};

/**
 * ContactChannels - Líneas de atención oficiales (Ventas, Atención al Cliente,
 * Soporte de Ingeniería) + horario, según la pieza gráfica de Reintech.
 * Se renderiza dentro de la sección #contacto del Home.
 */
export default function ContactChannels() {
  return (
    <div className="mt-20">
      {/* Encabezado */}
      <div className="mb-10 text-center">
        <div className="inline-block bg-tevesat-primary/5 px-4 py-1 rounded-full border border-tevesat-primary/20 mb-4 font-black uppercase text-xs tracking-widest text-tevesat-primary">
          Líneas de Atención
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-tevesat-tertiary-dark tracking-tighter italic uppercase">
          Escríbenos por <span className="text-tevesat-primary">WhatsApp</span>
        </h3>
      </div>

      {/* Canales */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {CONTACT_CHANNELS.map((channel) => {
          const Icon = CHANNEL_ICONS[channel.key];
          return (
            <a
              key={channel.key}
              href={channel.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-5 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 hover:border-tevesat-primary/40"
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-tevesat-primary to-tevesat-primary-light text-white shadow-lg shadow-tevesat-primary/30">
                <Icon size={26} strokeWidth={2.25} />
              </div>
              <div className="min-w-0 flex-1 border-l border-gray-100 pl-5">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{channel.label}</p>
                <div className="mt-1.5 flex items-center gap-2">
                  <WhatsappIcon className="h-5 w-5 flex-shrink-0 text-tevesat-primary" />
                  <span className="text-xl font-black tracking-tight text-tevesat-tertiary-dark whitespace-nowrap">
                    {channel.number}
                  </span>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="absolute right-5 top-5 text-gray-300 transition-all duration-300 group-hover:text-tevesat-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          );
        })}
      </div>

      {/* Horario de atención */}
      <div className="mt-8 rounded-[2rem] border-2 border-tevesat-primary/80 bg-white p-8 shadow-[0_30px_70px_-30px_rgba(236,50,55,0.35)] md:p-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          <div className="flex items-center gap-4 md:w-1/3">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-[3px] border-tevesat-primary text-tevesat-primary">
              <Clock size={26} strokeWidth={2.5} />
            </div>
            <h4 className="text-xl font-black uppercase tracking-tight text-tevesat-tertiary-dark">
              Horario de Atención
            </h4>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2">
            {SCHEDULE.map((block, i) => (
              <div key={block.days} className={`space-y-3 ${i > 0 ? 'sm:border-l sm:border-gray-200 sm:pl-8' : ''}`}>
                <p className="flex items-center gap-2.5 text-sm font-black uppercase tracking-widest text-tevesat-tertiary-dark">
                  <CalendarDays size={18} className="text-tevesat-primary" /> {block.days}
                </p>
                {block.slots.map((slot, j) => {
                  const SlotIcon = j === 0 ? Sun : CloudSun;
                  return (
                    <p key={slot} className="flex items-center gap-2.5 text-sm font-bold text-gray-600">
                      <SlotIcon size={18} className="flex-shrink-0 text-tevesat-primary" /> {slot}
                    </p>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tagline */}
      <p className="mt-10 text-center text-sm font-black uppercase italic tracking-[0.15em] text-tevesat-tertiary-dark md:text-base">
        Conectividad que <span className="text-tevesat-primary">impulsa</span>, soporte que{' '}
        <span className="text-tevesat-primary">respalda</span>.
      </p>

      {/* Redes · Internet · Tecnología */}
      <div className="mt-8 flex items-center justify-center gap-8 md:gap-12">
        {[
          { Icon: Wifi, label: 'Redes' },
          { Icon: Globe, label: 'Internet' },
          { Icon: Network, label: 'Tecnología' },
        ].map(({ Icon, label }, i) => (
          <React.Fragment key={label}>
            {i > 0 && <span className="h-10 w-px bg-gray-200" />}
            <div className="flex flex-col items-center gap-2">
              <Icon size={26} className="text-tevesat-primary" strokeWidth={2} />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{label}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

const WhatsappIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);
