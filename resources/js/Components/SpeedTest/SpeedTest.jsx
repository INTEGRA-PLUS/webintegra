import React, { useState, useRef, useEffect } from 'react';
import { Activity, Download, Upload, Play, RotateCcw, Gauge as GaugeIcon } from 'lucide-react';
import Gauge from './Gauge';
import ResultStat from './ResultStat';

/**
 * SpeedTest - Test de velocidad funcional.
 *
 * Mide latencia, descarga y subida contra la red global de Cloudflare
 * (endpoints speed.cloudflare.com, habilitados para CORS). La descarga se lee
 * por streaming para mostrar la velocidad en vivo; la subida usa XHR para
 * obtener el progreso real.
 */

const DOWN_URL = 'https://speed.cloudflare.com/__down';
const UP_URL = 'https://speed.cloudflare.com/__up';

const PHASES = {
  idle: { caption: '', label: 'Mbps', metric: null },
  ping: { caption: 'Midiendo latencia...', label: 'ms', metric: 'ping' },
  download: { caption: 'Descargando...', label: 'Mbps', metric: 'download' },
  upload: { caption: 'Subiendo...', label: 'Mbps', metric: 'upload' },
  done: { caption: 'Test completado', label: 'Mbps', metric: null },
};

export default function SpeedTest() {
  const [phase, setPhase] = useState('idle');
  const [live, setLive] = useState(0);
  const [results, setResults] = useState({ ping: null, jitter: null, download: null, upload: null });
  const [error, setError] = useState('');

  const abortRef = useRef(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (abortRef.current) abortRef.current.abort();
    };
  }, []);

  const running = phase !== 'idle' && phase !== 'done';

  async function measurePing(samples = 6) {
    const times = [];
    for (let i = 0; i < samples; i++) {
      const t = performance.now();
      await fetch(`${DOWN_URL}?bytes=1&t=${Date.now()}_${i}`, { cache: 'no-store' });
      times.push(performance.now() - t);
    }
    times.shift(); // descartar el primero (warmup)
    times.sort((a, b) => a - b);
    const ping = times[Math.floor(times.length / 2)];
    const avg = times.reduce((s, v) => s + v, 0) / times.length;
    const jitter = Math.sqrt(times.reduce((s, v) => s + (v - avg) ** 2, 0) / times.length);
    return { ping, jitter };
  }

  async function measureDownload(onLive) {
    const bytes = 100 * 1024 * 1024; // se solicita grande y se corta por tiempo
    const controller = new AbortController();
    abortRef.current = controller;
    const start = performance.now();
    let received = 0;
    const maxMs = 10000;

    try {
      const res = await fetch(`${DOWN_URL}?bytes=${bytes}&t=${Date.now()}`, {
        signal: controller.signal,
        cache: 'no-store',
      });
      const reader = res.body.getReader();
      // descartar el primer chunk como warmup
      const first = await reader.read();
      const warmStart = performance.now();
      if (!first.done) received += first.value.length;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        received += value.length;
        const el = (performance.now() - warmStart) / 1000;
        if (el > 0) onLive((received * 8) / (el * 1e6));
        if (performance.now() - start > maxMs) {
          controller.abort();
          break;
        }
      }
    } catch (e) {
      if (e.name !== 'AbortError') throw e;
    }

    const el = (performance.now() - start) / 1000;
    return el > 0 ? (received * 8) / (el * 1e6) : 0;
  }

  function measureUpload(onLive) {
    return new Promise((resolve, reject) => {
      const bytes = 12 * 1024 * 1024;
      const payload = new Uint8Array(bytes);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', UP_URL, true);
      const start = performance.now();
      let last = 0;
      xhr.upload.onprogress = (e) => {
        const el = (performance.now() - start) / 1000;
        if (el > 0 && e.loaded > 0) {
          last = (e.loaded * 8) / (el * 1e6);
          onLive(last);
        }
      };
      xhr.onload = () => {
        const el = (performance.now() - start) / 1000;
        resolve(el > 0 ? (bytes * 8) / (el * 1e6) : last);
      };
      xhr.onerror = () => reject(new Error('upload'));
      xhr.send(payload);
    });
  }

  const safeSet = (fn) => {
    if (mountedRef.current) fn();
  };

  async function runTest() {
    setError('');
    setResults({ ping: null, jitter: null, download: null, upload: null });
    setLive(0);

    try {
      // 1. Ping
      safeSet(() => setPhase('ping'));
      const { ping, jitter } = await measurePing();
      safeSet(() => {
        setResults((r) => ({ ...r, ping, jitter }));
        setLive(ping);
      });

      // 2. Descarga
      safeSet(() => {
        setPhase('download');
        setLive(0);
      });
      const down = await measureDownload((mbps) => safeSet(() => setLive(mbps)));
      safeSet(() => {
        setResults((r) => ({ ...r, download: down }));
        setLive(down);
      });

      // 3. Subida
      safeSet(() => {
        setPhase('upload');
        setLive(0);
      });
      const up = await measureUpload((mbps) => safeSet(() => setLive(mbps)));
      safeSet(() => {
        setResults((r) => ({ ...r, upload: up }));
        setLive(up);
        setPhase('done');
      });
    } catch (e) {
      safeSet(() => {
        setError('No pudimos completar el test. Revisa tu conexión e inténtalo de nuevo.');
        setPhase('idle');
      });
    }
  }

  const cfg = PHASES[phase];
  const fmt = (v, dec = 1) => (v == null ? '--' : v >= 100 ? Math.round(v) : v.toFixed(dec));
  const gaugeMax = phase === 'ping' ? 100 : 500;
  const gaugeValue = phase === 'ping' ? results.ping ?? live : live;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.25)] md:p-12">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-tevesat-primary/5 blur-[120px]" />

        <div className="relative z-10">
          {/* Medidor */}
          <Gauge
            value={gaugeValue || 0}
            max={gaugeMax}
            label={cfg.label}
            caption={cfg.caption}
            active={running}
          />

          {/* Botón principal */}
          <div className="mt-6 flex justify-center">
            {phase === 'idle' && (
              <button
                type="button"
                onClick={runTest}
                className="group flex items-center gap-3 rounded-2xl bg-tevesat-primary px-10 py-5 font-black uppercase tracking-widest text-white shadow-xl shadow-tevesat-primary/30 transition-all duration-300 hover:scale-105 hover:bg-tevesat-primary-light active:scale-95"
              >
                <Play size={20} className="fill-white" />
                Iniciar test
              </button>
            )}
            {running && (
              <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-8 py-5 font-black uppercase tracking-widest text-gray-400">
                <Activity size={20} className="animate-pulse text-tevesat-primary" />
                Midiendo...
              </div>
            )}
            {phase === 'done' && (
              <button
                type="button"
                onClick={runTest}
                className="group flex items-center gap-3 rounded-2xl border-2 border-gray-200 bg-white px-10 py-5 font-black uppercase tracking-widest text-tevesat-tertiary-dark transition-all duration-300 hover:border-tevesat-primary hover:text-tevesat-primary"
              >
                <RotateCcw size={20} />
                Repetir test
              </button>
            )}
          </div>

          {error && (
            <p className="mt-6 text-center text-sm font-bold text-tevesat-primary">{error}</p>
          )}

          {/* Resultados */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            <ResultStat
              icon={GaugeIcon}
              label="Ping"
              value={fmt(results.ping, 0)}
              unit="ms"
              active={phase === 'ping'}
            />
            <ResultStat
              icon={Download}
              label="Descarga"
              value={fmt(results.download)}
              unit="Mbps"
              active={phase === 'download'}
            />
            <ResultStat
              icon={Upload}
              label="Subida"
              value={fmt(results.upload)}
              unit="Mbps"
              active={phase === 'upload'}
            />
          </div>

          {results.jitter != null && (
            <p className="mt-5 text-center text-[11px] font-bold uppercase tracking-widest text-gray-400">
              Jitter {results.jitter.toFixed(1)} ms · Medido contra la red global de Cloudflare
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
