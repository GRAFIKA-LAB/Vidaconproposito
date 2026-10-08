import React, { useState } from 'react';
import { X, Sparkles, HelpCircle, Save, Check, RefreshCw } from 'lucide-react';
import { ChurchConfig } from '../types';

interface ChurchCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ChurchConfig;
  onSaveConfig: (newConfig: ChurchConfig) => void;
  onResetDefaults: () => void;
}

export const ChurchCustomizerModal: React.FC<ChurchCustomizerModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
  onResetDefaults
}) => {
  const [formData, setFormData] = useState<ChurchConfig>(config);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5">
      <div className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-serif-display font-bold text-neutral-100">
                Cuestionario & Personalización de la Iglesia
              </h2>
              <p className="text-xs text-neutral-400">
                Responde a estas preguntas para adaptar la web a tu congregación en tiempo real
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Questions Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6 text-xs text-neutral-300 font-body">
          
          {/* Question 1: Church Name */}
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-amber-400 text-neutral-950 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                1
              </span>
              <div>
                <label className="text-sm font-bold text-neutral-100 block">
                  ¿Cómo se llama la iglesia y a qué distrito o concilio pertenece?
                </label>
                <span className="text-[11px] text-neutral-400">
                  Nombre principal de la congregación y filiación oficial.
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-7">
              <div>
                <span className="text-[11px] text-neutral-400 block mb-1">Nombre de la Iglesia:</span>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-100"
                />
              </div>
              <div>
                <span className="text-[11px] text-neutral-400 block mb-1">Concilio o Distrito:</span>
                <input
                  type="text"
                  required
                  value={formData.affiliation}
                  onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-100"
                />
              </div>
            </div>
          </div>

          {/* Question 2: Pastors */}
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-amber-400 text-neutral-950 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                2
              </span>
              <div>
                <label className="text-sm font-bold text-neutral-100 block">
                  ¿Quiénes son los pastores principales que presiden la iglesia?
                </label>
                <span className="text-[11px] text-neutral-400">
                  Aparecerán en la bienvenida, sección pastoral y mensajes oficiales.
                </span>
              </div>
            </div>

            <div className="pl-7">
              <input
                type="text"
                required
                value={formData.pastors}
                onChange={(e) => setFormData({ ...formData, pastors: e.target.value })}
                placeholder="Ej. Pastores David y Elizabeth Morales"
                className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-100"
              />
            </div>
          </div>

          {/* Question 3: Address & Location */}
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-amber-400 text-neutral-950 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                3
              </span>
              <div>
                <label className="text-sm font-bold text-neutral-100 block">
                  ¿Dónde está ubicada físicamente la iglesia?
                </label>
                <span className="text-[11px] text-neutral-400">
                  Dirección exacta para el mapa, GPS y orientar a las visitas.
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-7">
              <div>
                <span className="text-[11px] text-neutral-400 block mb-1">Calle y Número / Sector:</span>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-100"
                />
              </div>
              <div>
                <span className="text-[11px] text-neutral-400 block mb-1">Ciudad, Estado o País:</span>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-100"
                />
              </div>
            </div>
          </div>

          {/* Question 4: Communication channels */}
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-amber-400 text-neutral-950 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                4
              </span>
              <div>
                <label className="text-sm font-bold text-neutral-100 block">
                  ¿Cuáles son las vías directas de contacto (WhatsApp y Teléfono)?
                </label>
                <span className="text-[11px] text-neutral-400">
                  El WhatsApp permite que las peticiones de oración y visitas lleguen directo a tu teléfono.
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pl-7">
              <div>
                <span className="text-[11px] text-neutral-400 block mb-1">Número de WhatsApp (con código de país):</span>
                <input
                  type="text"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="Ej. 15557890123"
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-100"
                />
              </div>
              <div>
                <span className="text-[11px] text-neutral-400 block mb-1">Teléfono Fijo / Móvil:</span>
                <input
                  type="text"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-100"
                />
              </div>
              <div>
                <span className="text-[11px] text-neutral-400 block mb-1">Correo Electrónico:</span>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-100"
                />
              </div>
            </div>
          </div>

          {/* Question 5: Theme Verse */}
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-amber-400 text-neutral-950 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                5
              </span>
              <div>
                <label className="text-sm font-bold text-neutral-100 block">
                  ¿Cuál es el versículo o lema bíblico distintivo de la iglesia?
                </label>
                <span className="text-[11px] text-neutral-400">
                  Se destacará en el encabezado principal de bienvenida.
                </span>
              </div>
            </div>

            <div className="space-y-2 pl-7">
              <textarea
                rows={2}
                required
                value={formData.verse.text}
                onChange={(e) => setFormData({ ...formData, verse: { ...formData.verse, text: e.target.value } })}
                className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-100 resize-none"
              />
              <div className="w-48">
                <span className="text-[11px] text-neutral-400 block mb-1">Cita Bíblica:</span>
                <input
                  type="text"
                  required
                  value={formData.verse.reference}
                  onChange={(e) => setFormData({ ...formData, verse: { ...formData.verse, reference: e.target.value } })}
                  placeholder="Ej. Jeremías 29:11"
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-100"
                />
              </div>
            </div>
          </div>

          {/* Question 6: Giving details */}
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-amber-400 text-neutral-950 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                6
              </span>
              <div>
                <label className="text-sm font-bold text-neutral-100 block">
                  ¿Qué canales tienen activos para recibir diezmos y ofrendas?
                </label>
                <span className="text-[11px] text-neutral-400">
                  Cuentas bancarias, Zelle, Bizum o instrucciones claras.
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-7">
              <div>
                <span className="text-[11px] text-neutral-400 block mb-1">Nombre del Banco:</span>
                <input
                  type="text"
                  value={formData.donationMethods.bankName}
                  onChange={(e) => setFormData({
                    ...formData,
                    donationMethods: { ...formData.donationMethods, bankName: e.target.value }
                  })}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-100"
                />
              </div>
              <div>
                <span className="text-[11px] text-neutral-400 block mb-1">Titular de la Cuenta:</span>
                <input
                  type="text"
                  value={formData.donationMethods.accountName}
                  onChange={(e) => setFormData({
                    ...formData,
                    donationMethods: { ...formData.donationMethods, accountName: e.target.value }
                  })}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-100"
                />
              </div>
              <div>
                <span className="text-[11px] text-neutral-400 block mb-1">Número de Cuenta / IBAN:</span>
                <input
                  type="text"
                  value={formData.donationMethods.accountNumber}
                  onChange={(e) => setFormData({
                    ...formData,
                    donationMethods: { ...formData.donationMethods, accountNumber: e.target.value }
                  })}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-100"
                />
              </div>
              <div>
                <span className="text-[11px] text-neutral-400 block mb-1">Zelle, Bizum o Correo:</span>
                <input
                  type="text"
                  value={formData.donationMethods.zelleOrBizum}
                  onChange={(e) => setFormData({
                    ...formData,
                    donationMethods: { ...formData.donationMethods, zelleOrBizum: e.target.value }
                  })}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-100"
                />
              </div>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-neutral-800">
            <button
              type="button"
              onClick={onResetDefaults}
              className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Restablecer valores originales</span>
            </button>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 rounded-lg transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-neutral-950" />
                    <span>¡Página Actualizada!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 text-neutral-950" />
                    <span>Guardar y Actualizar la Web</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
