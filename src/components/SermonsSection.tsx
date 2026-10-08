import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, BookOpen, Share2, Download, Check, Sparkles, Radio } from 'lucide-react';
import { sampleSermons } from '../data/initialData';
import { Sermon } from '../types';

export const SermonsSection: React.FC = () => {
  const [activeSermon, setActiveSermon] = useState<Sermon>(sampleSermons[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackProgress, setPlaybackProgress] = useState<number>(32);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setPlaybackProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleShare = () => {
    navigator.clipboard.writeText(`Escucha la prédica "${activeSermon.title}" (${activeSermon.passage}) de la Iglesia Vida con Propósito.`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="predicas" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            La Palabra de Dios
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-neutral-100 text-balance">
            Mensajes y Prédicas Recientes
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-body">
            Escucha la predicación de las Sagradas Escrituras impartida por nuestros pastores para fortalecer tu caminar con Cristo dondequiera que estés.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Featured Player & Sermon Notes (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
            
            {/* Player Header */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                {/* Clean unboxed metadata */}
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <span className="text-amber-400 font-medium">{activeSermon.series}</span>
                  <span aria-hidden="true" className="text-neutral-700">·</span>
                  <span>{activeSermon.date}</span>
                </div>
                <span className="text-xs font-mono text-neutral-400">{activeSermon.duration}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-neutral-100">
                {activeSermon.title}
              </h3>
              
              <div className="flex items-center gap-2 text-xs font-medium text-amber-300">
                <span>{activeSermon.speaker}</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span className="font-mono text-neutral-300">{activeSermon.passage}</span>
              </div>
            </div>

            {/* Audio Player Interactive Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-neutral-950 border border-neutral-800/90 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    aria-label={isPlaying ? 'Pausar audio' : 'Reproducir audio'}
                    className="w-12 h-12 rounded-full bg-amber-400 hover:bg-amber-300 text-neutral-950 flex items-center justify-center transition-transform active:scale-95 shadow-md shadow-amber-950/40 cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                  </button>

                  <div>
                    <div className="text-xs font-semibold text-neutral-200">
                      {isPlaying ? 'Reproduciendo audio...' : 'Listo para reproducir'}
                    </div>
                    <div className="text-[11px] text-neutral-400 font-mono">
                      {Math.floor((playbackProgress / 100) * 44)}:15 / {activeSermon.duration}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleShare}
                    className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
                    title="Compartir mensaje"
                  >
                    {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Progress Scrubber */}
              <div className="space-y-1">
                <div
                  className="w-full h-2 rounded-full bg-neutral-800 cursor-pointer relative overflow-hidden"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const newProgress = Math.round((clickX / rect.width) * 100);
                    setPlaybackProgress(Math.max(0, Math.min(100, newProgress)));
                  }}
                >
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all"
                    style={{ width: `${playbackProgress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Sermon Summary and Key Biblical Points */}
            <div className="space-y-4 pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Resumen de la Enseñanza
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {activeSermon.summary}
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-semibold text-neutral-300">
                  Puntos Claves para Meditar:
                </div>
                <div className="space-y-2">
                  {activeSermon.keyPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs text-neutral-400">
                      <span className="font-mono text-amber-400 font-bold shrink-0">0{index + 1}.</span>
                      <span className="text-neutral-300">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Sermon Playlist / Archive (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              Prédicas Disponibles
            </div>

            <div className="space-y-3">
              {sampleSermons.map((sermon) => {
                const isSelected = sermon.id === activeSermon.id;
                return (
                  <div
                    key={sermon.id}
                    onClick={() => {
                      setActiveSermon(sermon);
                      setIsPlaying(true);
                    }}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-neutral-900 border-amber-500/80'
                        : 'bg-neutral-900/40 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/70'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                        <span className="text-amber-400 font-medium">{sermon.speaker}</span>
                        <span aria-hidden="true" className="text-neutral-700">·</span>
                        <span className="font-mono">{sermon.passage}</span>
                      </div>
                      <h4 className="text-sm font-serif-display font-bold text-neutral-200">
                        {sermon.title}
                      </h4>
                      <div className="text-[11px] text-neutral-500">
                        {sermon.series}
                      </div>
                    </div>

                    <div className="shrink-0">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-amber-400 text-neutral-950'
                            : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                        }`}
                      >
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-3">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-850 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>Ver Canal Completo en YouTube</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
