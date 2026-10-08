import React, { useState } from 'react';
import { Heart, Send, CheckCircle2, MessageCircle, Lock, ShieldCheck, Filter } from 'lucide-react';
import { PrayerRequest, ChurchConfig } from '../types';
import { initialPrayerRequests } from '../data/initialData';

interface PrayerWallProps {
  config: ChurchConfig;
}

export const PrayerWall: React.FC<PrayerWallProps> = ({ config }) => {
  const [requests, setRequests] = useState<PrayerRequest[]>(initialPrayerRequests);
  const [filterCategory, setFilterCategory] = useState<string>('todos');
  
  // Form State
  const [name, setName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [category, setCategory] = useState<PrayerRequest['category']>('salud');
  const [requestText, setRequestText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handlePray = (id: string) => {
    setRequests((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const hasPrayed = item.hasUserPrayed;
          return {
            ...item,
            prayingCount: hasPrayed ? item.prayingCount - 1 : item.prayingCount + 1,
            hasUserPrayed: !hasPrayed
          };
        }
        return item;
      })
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestText.trim()) return;

    const newReq: PrayerRequest = {
      id: `req-${Date.now()}`,
      name: isAnonymous ? 'Petición Anónima' : name.trim() || 'Hermano/a en Cristo',
      isAnonymous,
      category,
      request: requestText.trim(),
      date: 'Hoy',
      prayingCount: 1,
      hasUserPrayed: true
    };

    setRequests([newReq, ...requests]);
    setRequestText('');
    setName('');
    setIsAnonymous(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleSendToWhatsApp = () => {
    if (!requestText.trim()) return;
    const text = encodeURIComponent(
      `Hola Pastores de Vida con Propósito AD, les envío mi petición de oración:\n\nNombre: ${isAnonymous ? 'Anónimo' : (name || 'Creyente')}\nMotivo: [${category.toUpperCase()}]\n${requestText}`
    );
    window.open(`https://wa.me/${config.whatsapp}?text=${text}`, '_blank');
  };

  const filteredRequests = filterCategory === 'todos'
    ? requests
    : requests.filter((r) => r.category === filterCategory);

  const categoryLabels: Record<string, string> = {
    salud: 'Salud y Sanidad',
    familia: 'Familia y Hogar',
    finanzas: 'Provisión y Trabajo',
    espiritual: 'Crecimiento Espiritual',
    gratitud: 'Acción de Gracias',
    otro: 'Otras Necesidades'
  };

  return (
    <section id="oracion" className="py-20 bg-neutral-900/40 border-t border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            El Poder de la Intercesión
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-neutral-100 text-balance">
            Muro de Oración y Peticiones
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-body">
            "La oración eficaz del justo puede mucho" (Santiago 5:16). Comparte tu necesidad con nosotros; nuestro equipo pastoral y congregación interceden diariamente por cada petición.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Submission Form Column (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-950/90 border border-neutral-800 rounded-2xl p-6 sm:p-7 space-y-5">
            <div>
              <h3 className="text-xl font-serif-display font-bold text-neutral-100">
                Enviar Petición de Oración
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Puedes compartirla de forma pública en el muro o enviarla con reserva pastoral.
              </p>
            </div>

            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-600/40 text-emerald-300 text-xs flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>
                  ¡Tu petición ha sido añadida! El equipo de intercesores ya está clamando a Dios por tu vida.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Tu Nombre (opcional)
                </label>
                <input
                  type="text"
                  disabled={isAnonymous}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={isAnonymous ? "Publicar como Anónimo" : "Ej. Hermano Carlos o Familia López"}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-100 disabled:opacity-50"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="anonymousCheck"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="rounded bg-neutral-900 border-neutral-700 text-amber-500 focus:ring-0 w-4 h-4 cursor-pointer"
                />
                <label htmlFor="anonymousCheck" className="text-xs text-neutral-400 cursor-pointer flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-neutral-500" />
                  <span>Deseo que mi petición sea completamente anónima</span>
                </label>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Motivo de Oración
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as PrayerRequest['category'])}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-200 cursor-pointer"
                >
                  <option value="salud">Salud y Sanidad Divina</option>
                  <option value="familia">Familia, Matrimonio e Hijos</option>
                  <option value="finanzas">Trabajo y Finanzas</option>
                  <option value="espiritual">Crecimiento Espiritual / Salvación</option>
                  <option value="gratitud">Testimonio / Acción de Gracias</option>
                  <option value="otro">Otra Necesidad</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Escribe tu Petición
                </label>
                <textarea
                  rows={4}
                  required
                  value={requestText}
                  onChange={(e) => setRequestText(e.target.value)}
                  placeholder="Describe la situación por la que deseas que oremos..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-100 placeholder:text-neutral-600 resize-none"
                />
              </div>

              <div className="pt-1 space-y-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Publicar en el Muro de Oración</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  disabled={!requestText.trim()}
                  className="w-full py-2 px-3 text-xs font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-950/20 hover:bg-emerald-950/40 border border-emerald-800/40 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-40"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enviar directamente a WhatsApp Pastoral</span>
                </button>
              </div>

              <div className="flex items-center gap-2 pt-2 text-[11px] text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-amber-500/80 shrink-0" />
                <span>Tratamos tus peticiones con respeto, amor y confidencialidad cristiana.</span>
              </div>
            </form>
          </div>

          {/* Prayer Wall Feed Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center gap-1.5 pb-2">
              <button
                type="button"
                onClick={() => setFilterCategory('todos')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  filterCategory === 'todos'
                    ? 'bg-amber-400 text-neutral-950'
                    : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Todas
              </button>
              {Object.keys(categoryLabels).map((catKey) => (
                <button
                  key={catKey}
                  type="button"
                  onClick={() => setFilterCategory(catKey)}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    filterCategory === catKey
                      ? 'bg-amber-400 text-neutral-950'
                      : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {categoryLabels[catKey]}
                </button>
              ))}
            </div>

            {/* List of Requests */}
            <div className="space-y-3.5 max-h-[620px] overflow-y-auto pr-1">
              {filteredRequests.map((req) => (
                <div
                  key={req.id}
                  className="p-5 rounded-xl bg-neutral-950/70 border border-neutral-800 hover:border-neutral-700/80 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    {/* Clean unboxed metadata */}
                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                      <span className="font-semibold text-neutral-200">
                        {req.isAnonymous ? 'Anónimo' : req.name}
                      </span>
                      <span aria-hidden="true" className="text-neutral-700">·</span>
                      <span className="text-amber-400 font-medium">
                        {categoryLabels[req.category] || req.category}
                      </span>
                      <span aria-hidden="true" className="text-neutral-700">·</span>
                      <span>{req.date}</span>
                    </div>

                    <span className="text-xs font-mono text-neutral-400">
                      {req.prayingCount} orando
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-body">
                    "{req.request}"
                  </p>

                  <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between">
                    <span className="text-[11px] text-neutral-400 italic">
                      Únete clamando por esta petición
                    </span>

                    <button
                      type="button"
                      onClick={() => handlePray(req.id)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                        req.hasUserPrayed
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                      }`}
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${
                          req.hasUserPrayed ? 'text-amber-400 fill-amber-400' : 'text-neutral-400'
                        }`}
                      />
                      <span>{req.hasUserPrayed ? 'Estoy Orando (Amén)' : 'Me uno en oración'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
