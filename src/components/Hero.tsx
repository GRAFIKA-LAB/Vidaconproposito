import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, ChevronRight, HeartHandshake, BookOpen } from 'lucide-react';
import { ChurchConfig } from '../types';

interface HeroProps {
  config: ChurchConfig;
  onPlanVisit: () => void;
  onRequestPrayer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ config, onPlanVisit, onRequestPrayer }) => {
  // Countdown to next Sunday 10:00 AM
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      // Target next Sunday at 10:00 AM
      const nextSunday = new Date(now);
      const dayOfWeek = now.getDay(); // 0 is Sunday
      const daysUntilSunday = (7 - dayOfWeek) % 7;
      
      nextSunday.setDate(now.getDate() + (daysUntilSunday === 0 && now.getHours() >= 12 ? 7 : daysUntilSunday));
      nextSunday.setHours(10, 0, 0, 0);

      const difference = nextSunday.getTime() - now.getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-neutral-950">
      {/* Background radial ambient glow and church cross motif */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-amber-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-amber-700/10 rounded-full blur-[120px]" />
        <div className="absolute top-2/3 -left-40 w-96 h-96 bg-neutral-800/20 rounded-full blur-[120px]" />
        
        {/* Subtle architectural sanctuary lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff07_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Clean unboxed affiliation kicker */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <span>{config.affiliation}</span>
              <span aria-hidden="true" className="text-amber-500/50">·</span>
              <span>Comunidad de Fe</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-display font-extrabold text-neutral-100 tracking-tight leading-[1.12] text-balance">
              Un lugar donde tu vida encuentra{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                propósito en Dios
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body">
              Bienvenido a una iglesia viva, apasionada por la presencia del Espíritu Santo y comprometida con el amor al prójimo. Aquí hay un lugar reservado para ti y tu familia.
            </p>

            {/* Scripture spotlight with hairline border */}
            <div className="p-4 sm:p-5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-left max-w-xl mx-auto lg:mx-0 relative">
              <div className="text-neutral-300 text-sm italic font-serif leading-relaxed">
                "{config.verse.text}"
              </div>
              <div className="text-right text-xs font-semibold text-amber-400 mt-2">
                — {config.verse.reference}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                type="button"
                onClick={onPlanVisit}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-lg shadow-lg shadow-amber-950/40 hover:shadow-amber-500/10 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap active:scale-[0.99]"
              >
                <HeartHandshake className="w-4 h-4 text-neutral-950" />
                <span>Planifica tu Primera Visita</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onRequestPrayer}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-neutral-200 bg-neutral-900 hover:bg-neutral-850 hover:text-amber-300 border border-neutral-700/80 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Pedir Oración</span>
              </button>
            </div>

            {/* Clean unboxed location & pastor metadata */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1.5 text-xs text-neutral-400 font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{config.address}, {config.city}</span>
              </span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span className="text-neutral-300">{config.pastors}</span>
            </div>
          </div>

          {/* Right Column: Next Service Countdown & Sanctuary Visual Canvas */}
          <div className="lg:col-span-5 space-y-4">
            {/* Sanctuary Art Canvas with Stained Glass Aesthetic & Cross Silhouette */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 sm:p-8 shadow-2xl">
              
              {/* Decorative Cross Radiance Graphic */}
              <div className="relative h-44 sm:h-52 w-full rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800/80 flex items-center justify-center">
                {/* Golden Sanctuary Light Rays */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/25 via-amber-950/20 to-neutral-950" />
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_45%,rgba(245,158,11,0.15)_50%,transparent_55%)]" />
                
                {/* Elegant Minimalist Cross Symbol */}
                <div className="relative flex flex-col items-center">
                  <div className="w-3.5 h-28 bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 rounded-sm shadow-[0_0_25px_rgba(245,158,11,0.6)]" />
                  <div className="absolute top-7 w-20 h-3.5 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 rounded-sm shadow-[0_0_20px_rgba(245,158,11,0.6)]" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-[11px] font-semibold text-amber-200/90 tracking-widest uppercase">
                    Comunión · Palabra · Poder del Espíritu
                  </span>
                </div>
              </div>

              {/* Next Service Live Countdown Box */}
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-200">
                      Próxima Celebración
                    </span>
                  </div>
                  <span className="text-xs text-amber-400 font-semibold">
                    Domingo 10:00 AM
                  </span>
                </div>

                <p className="text-xs text-neutral-400">
                  Culto dominical con alabanza en vivo, predicación bíblica y Escuela de Niños.
                </p>

                {/* Tabular Countdown timer */}
                <div className="grid grid-cols-4 gap-2 pt-1">
                  <div className="p-2.5 rounded-lg bg-neutral-950/80 border border-neutral-800 text-center">
                    <span className="block text-xl font-bold font-mono tabular-nums text-neutral-100">
                      {timeLeft.days}
                    </span>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider">Días</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-neutral-950/80 border border-neutral-800 text-center">
                    <span className="block text-xl font-bold font-mono tabular-nums text-neutral-100">
                      {timeLeft.hours}
                    </span>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider">Horas</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-neutral-950/80 border border-neutral-800 text-center">
                    <span className="block text-xl font-bold font-mono tabular-nums text-neutral-100">
                      {timeLeft.minutes}
                    </span>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider">Min</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-neutral-950/80 border border-neutral-800 text-center">
                    <span className="block text-xl font-bold font-mono tabular-nums text-amber-400">
                      {timeLeft.seconds}
                    </span>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider">Seg</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#horarios"
                    className="w-full py-2.5 px-3 rounded-lg bg-neutral-800/80 hover:bg-neutral-800 text-neutral-200 hover:text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 border border-neutral-700/60"
                  >
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ver todos los cultos de la semana</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
