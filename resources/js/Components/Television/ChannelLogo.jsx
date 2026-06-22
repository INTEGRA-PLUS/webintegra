import React, { useState } from 'react';

/**
 * Convierte el nombre del canal en un slug para ubicar su logo en
 * /images/channels/<slug>.png  (ej: "ESPN 2" -> "espn-2").
 */
function toSlug(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Genera las iniciales de respaldo (1-2 letras) cuando no hay logo.
 */
function initials(name) {
  const parts = name.replace(/[^a-zA-Z0-9 ]/g, '').trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

/**
 * ChannelLogo - Muestra el logo del canal desde /images/channels/<slug>.png.
 * Si la imagen no existe, cae con elegancia a las iniciales del canal.
 *
 * Para mostrar los logos reales, sube los archivos a:
 *   public/images/channels/<slug>.png
 */
export default function ChannelLogo({ name }) {
  const [error, setError] = useState(false);
  const slug = toSlug(name);

  if (error) {
    return (
      <span className="text-sm font-black tracking-tight text-tevesat-primary">
        {initials(name)}
      </span>
    );
  }

  return (
    <img
      src={`/images/channels/${slug}.png`}
      alt={name}
      loading="lazy"
      onError={() => setError(true)}
      className="h-full w-full object-contain p-1.5"
    />
  );
}
