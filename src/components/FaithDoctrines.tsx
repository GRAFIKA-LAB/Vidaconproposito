import React, { useState } from 'react';
import { BookOpen, Sparkles, Flame, HeartPulse, Sun, Cross, CheckCircle2, ChevronRight } from 'lucide-react';
import { cardinalDoctrines } from '../data/initialData';

export const FaithDoctrines: React.FC = () => {
  const [selectedDoctrine, setSelectedDoctrine] = useState<number | null>(null);

  const doctrineVerses: Record<number, { text: string; reference: string }> = {
    0: {
      reference: "Juan 3:16 & Romanos 10:9-10",
      text: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna... Que si confesares con tu boca que Jesús es el Señor, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo."
    },
    1: {
      reference: "Hechos 1:8 & Hechos 2:4",
      text: "Pero recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra... Y fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen."
    },
    2: {
      reference: "Santiago 5:14-15 & Isaías 53:5",
      text: "¿Está alguno enfermo entre vosotros? Llame a los ancianos de la iglesia, y oren por él, ungiéndole con aceite en el nombre del Señor. Y la oración de fe salvará al enfermo, y el Señor lo levantará; y si hubiere cometido pecados, le serán perdonados."
    },
    3: {
      reference: "1 Tesalonicenses 4:16-17",
      text: "Porque el Señor mismo con voz de mando, con voz de arcángel, y con trompeta de Dios, descenderá del cielo; y los muertos en Cristo resucitarán primero. Luego nosotros los que vivimos, los que hayamos quedado, seremos arrebatados juntamente con ellos en las nubes para recibir al Señor en el aire."
    }
  };

  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Cross className="w-5 h-5 text-amber-400" />;
      case 1:
        return <Flame className="w-5 h-5 text-orange-400" />;
      case 2:
        return <HeartPulse className="w-5 h-5 text-rose-400" />;
      case 3:
        return <Sun className="w-5 h-5 text-amber-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="doctrina" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Fundamentos Bíblicos
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-neutral-100 text-balance">
            Nuestra Fe y Doctrinas Cardinales
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-body">
            Como congregación afiliada a las Asambleas de Dios, sostenemos la infalibilidad de la Biblia y proclamamos las cuatro verdades cardinales que transforman vidas.
          </p>
        </div>

        {/* 4 Cardinal Doctrines Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardinalDoctrines.map((item, idx) => (
            <div
              key={item.title}
              onClick={() => setSelectedDoctrine(selectedDoctrine === idx ? null : idx)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                selectedDoctrine === idx
                  ? 'bg-neutral-900 border-amber-500/80 shadow-lg shadow-amber-950/30'
                  : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/80'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800">
                    {getIcon(idx)}
                  </div>
                  <span className="text-xs font-mono text-neutral-500">
                    Verdad 0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-serif-display font-bold text-neutral-100 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs text-amber-400/90 font-medium mt-1">
                    {item.subtitle}
                  </div>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                <span className="font-mono text-[11px] truncate">{item.verse}</span>
                <span className="text-amber-400 font-medium flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                  {selectedDoctrine === idx ? 'Cerrar' : 'Leer'}
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Scripture Modal / Panel */}
        {selectedDoctrine !== null && doctrineVerses[selectedDoctrine] && (
          <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-neutral-900 border border-amber-500/40 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                    Pasaje Bíblico Sagrado
                  </div>
                  <div className="text-base font-serif-display font-bold text-neutral-100">
                    {doctrineVerses[selectedDoctrine].reference}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedDoctrine(null)}
                className="text-xs text-neutral-400 hover:text-white px-3 py-1 rounded bg-neutral-800 hover:bg-neutral-700 transition-colors cursor-pointer"
              >
                Cerrar Pasaje
              </button>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-200 text-sm font-serif italic leading-relaxed">
              "{doctrineVerses[selectedDoctrine].text}"
            </div>
          </div>
        )}

        {/* Additional 16 Fundamental Truths Statement */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
            Declaración de Fe Completa
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed">
            Nuestra iglesia sostiene las 16 Verdades Fundamentales de las Asambleas de Dios, incluyendo la inspiración de las Escrituras, la Santa Trinidad, el bautismo en agua por inmersión y la mayordomía cristiana.
          </p>
        </div>

      </div>
    </section>
  );
};
