import React, { useState } from 'react';
import { Clock, MapPin, Video, Check, Copy, Calendar, Bell } from 'lucide-react';
import { serviceSchedules } from '../data/initialData';

export const ServicesSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopySchedule = (schedule: typeof serviceSchedules[0]) => {
    const text = `Culto en Iglesia Vida con Propósito (Asambleas de Dios):\n${schedule.day} a las ${schedule.time}\n${schedule.title}\nLugar: ${schedule.location}`;
    navigator.clipboard.writeText(text);
    setCopiedId(schedule.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="horarios" className="py-20 bg-neutral-900/50 border-t border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Nuestra Casa te Espera
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-neutral-100 text-balance">
            Horarios de Cultos y Reuniones
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-body">
            Cada reunión está diseñada para que experimentes la presencia de Dios, te conectes con personas auténticas y crezcas espiritualmente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceSchedules.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-neutral-950/70 border border-neutral-800 hover:border-neutral-700 transition-all space-y-4 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wide">
                    <span>{item.day}</span>
                    <span aria-hidden="true" className="text-neutral-600">·</span>
                    <span className="text-neutral-300">{item.time}</span>
                  </div>
                  <h3 className="text-xl font-serif-display font-bold text-neutral-100 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <span className="text-xs font-mono text-neutral-500 shrink-0">
                  0{idx + 1}
                </span>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {item.description}
              </p>

              <div className="pt-2 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-1.5 text-neutral-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopySchedule(item)}
                  className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors flex items-center gap-1.5 self-start sm:self-auto cursor-pointer whitespace-nowrap"
                  title="Copiar información del culto"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300 font-medium">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Copiar Horario</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Live Broadcast Note */}
        <div className="mt-10 p-5 rounded-2xl bg-amber-950/20 border border-amber-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-200">
                ¿No puedes asistir de manera presencial?
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">
                Transmitimos el Culto de Celebración cada domingo en vivo por YouTube y Facebook Live.
              </div>
            </div>
          </div>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            Ver Transmisión en Vivo
          </a>
        </div>

      </div>
    </section>
  );
};
