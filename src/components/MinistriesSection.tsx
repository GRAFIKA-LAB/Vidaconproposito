import React, { useState } from 'react';
import { Baby, Sparkles, Home, Heart, Shield, Music, Clock, User, Users, Check } from 'lucide-react';
import { ministries } from '../data/initialData';

interface MinistriesSectionProps {
  onJoinMinistry: (ministryName: string) => void;
}

export const MinistriesSection: React.FC<MinistriesSectionProps> = ({ onJoinMinistry }) => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const getMinistryIcon = (name: string) => {
    switch (name) {
      case 'Baby':
        return <Baby className="w-5 h-5 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-sky-400" />;
      case 'Home':
        return <Home className="w-5 h-5 text-emerald-400" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-rose-400" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-indigo-400" />;
      case 'Music':
        return <Music className="w-5 h-5 text-purple-400" />;
      default:
        return <Users className="w-5 h-5 text-amber-400" />;
    }
  };

  const filtered = activeFilter === 'todos'
    ? ministries
    : ministries.filter(m => m.id === activeFilter);

  return (
    <section id="ministerios" className="py-20 bg-neutral-900/30 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Comunidad y Servicio
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-neutral-100 text-balance">
            Nuestros Ministerios Activos
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-body">
            En Vida con Propósito cada miembro de la familia tiene un espacio de crecimiento espiritual, servicio y compañerismo cristiano.
          </p>
        </div>

        {/* Filter Bar (Interactive functional buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-neutral-900/80 rounded-xl border border-neutral-800 max-w-xl mx-auto mb-12">
          <button
            type="button"
            onClick={() => setActiveFilter('todos')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeFilter === 'todos'
                ? 'bg-amber-400 text-neutral-950 shadow-sm'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
            }`}
          >
            Todos los Grupos
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('ninos')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeFilter === 'ninos'
                ? 'bg-amber-400 text-neutral-950 shadow-sm'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
            }`}
          >
            Niños
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('jovenes')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeFilter === 'jovenes'
                ? 'bg-amber-400 text-neutral-950 shadow-sm'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
            }`}
          >
            Jóvenes
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('familias')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeFilter === 'familias'
                ? 'bg-amber-400 text-neutral-950 shadow-sm'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
            }`}
          >
            Familias
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('alabanza')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeFilter === 'alabanza'
                ? 'bg-amber-400 text-neutral-950 shadow-sm'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
            }`}
          >
            Alabanza
          </button>
        </div>

        {/* Ministries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                    {getMinistryIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-medium text-neutral-400">
                    {item.ageGroup}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-serif-display font-bold text-neutral-100">
                    {item.name}
                  </h3>
                  <div className="text-xs text-amber-400 font-medium mt-0.5">
                    {item.subtitle}
                  </div>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Clean unboxed metadata footer */}
              <div className="space-y-3 pt-3 border-t border-neutral-800/80 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{item.schedule}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span className="truncate text-neutral-300">{item.leader}</span>
                </div>

                <button
                  type="button"
                  onClick={() => onJoinMinistry(item.name)}
                  className="w-full mt-2 py-2 px-3 text-xs font-semibold text-neutral-200 bg-neutral-900 hover:bg-neutral-800 hover:text-amber-300 border border-neutral-700/80 rounded-lg transition-colors cursor-pointer text-center"
                >
                  Conectarme con este Ministerio
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
