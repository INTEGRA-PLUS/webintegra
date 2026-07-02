import React, { useState } from 'react';
import { CATEGORY_GRADIENTS } from './data/tv';

/**
 * Iniciales de respaldo (1-2 letras) a partir del nombre del canal.
 */
function initials(name) {
  if (!name) return 'TV';
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
}

/**
 * LogoTile - Baldosa blanca con el logo del canal.
 *
 * Intenta cargar /images/channels/<slug>.png. Si no existe, cae con elegancia
 * a un cuadro con gradiente (según la categoría) y las iniciales del canal,
 * igual que la parrilla oficial de TVYMAS.
 *
 * @param {{ name, slug, category }} channel
 * @param {string} size - alto de la baldosa (clase Tailwind), por defecto h-11.
 */
export default function LogoTile({ channel, size = 'h-11' }) {
  const [failed, setFailed] = useState(false);
  const gradient = CATEGORY_GRADIENTS[channel.category] || CATEGORY_GRADIENTS.default;
  const hasLogo = Boolean(channel.slug) && !failed;

  return (
    <div
      title={channel.name}
      className={`group relative flex w-full ${size} cursor-pointer select-none items-center justify-center rounded-xl bg-white p-1.5 text-center shadow-md transition-transform duration-150 hover:scale-105`}
    >
      {hasLogo ? (
        <img
          src={`/images/channels/${channel.slug}.png`}
          alt={channel.name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="max-h-full max-w-full object-contain"
        />
      ) : (
        <div
          className={`flex h-full w-full items-center justify-center rounded-md bg-gradient-to-tr ${gradient} text-[9px] font-black text-white`}
        >
          {initials(channel.name)}
        </div>
      )}
    </div>
  );
}
