import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { ChurchConfig } from '../types';

interface ContactMapProps {
  config: ChurchConfig;
}

export const ContactMap: React.FC<ContactMapProps> = ({ config }) => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formMessage) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormName('');
      setFormEmail('');
      setFormMessage('');
    }, 4000);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${config.address}, ${config.city}`);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="contacto" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Conéctate con Nosotros
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-neutral-100 text-balance">
            Ubicación y Atención Pastoral
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-body">
            Nuestras puertas y corazones están abiertos. Si necesitas consejería espiritual, información o una visita pastoral, comunícate con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Church Contact & Location Info (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-neutral-900/70 border border-neutral-800 space-y-6">
              <h3 className="text-xl font-serif-display font-bold text-neutral-100">
                Información de Contacto
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-neutral-400 text-xs">Dirección del Templo:</div>
                    <div className="text-neutral-200 font-medium mt-0.5">{config.address}</div>
                    <div className="text-neutral-400">{config.city}</div>
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="mt-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      {copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedAddress ? '¡Dirección copiada!' : 'Copiar dirección para GPS'}</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-amber-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-neutral-400 text-xs">Teléfono de Oficina:</div>
                    <a href={`tel:${config.phone}`} className="text-neutral-200 font-medium hover:text-amber-300 transition-colors">
                      {config.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-amber-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-neutral-400 text-xs">Correo Electrónico:</div>
                    <a href={`mailto:${config.email}`} className="text-neutral-200 font-medium hover:text-amber-300 transition-colors">
                      {config.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-amber-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-neutral-400 text-xs">Atención Pastoral y Consejería:</div>
                    <div className="text-neutral-200 font-medium">Martes a Jueves: 9:00 AM – 1:00 PM / 3:00 PM – 6:00 PM</div>
                    <div className="text-neutral-400 text-xs">Previa cita programada</div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent('Hola Iglesia Vida con Propósito AD, me gustaría recibir más información.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Escribir por WhatsApp al Equipo Pastoral</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact & Message Form (6 cols) */}
          <div className="lg:col-span-6 bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 sm:p-7 space-y-5">
            <div>
              <h3 className="text-xl font-serif-display font-bold text-neutral-100">
                Envíanos un Mensaje
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Responderemos a tu solicitud con la mayor brevedad posible.
              </p>
            </div>

            {submitted ? (
              <div className="p-5 rounded-xl bg-emerald-950/50 border border-emerald-500/50 text-emerald-200 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-emerald-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>¡Mensaje enviado exitosamente!</span>
                </div>
                <p>
                  Gracias por comunicarte con la Iglesia Vida con Propósito. Nos pondremos en contacto contigo pronto. ¡Dios te bendiga!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Ej. María Rodríguez"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Correo Electrónico o Teléfono
                  </label>
                  <input
                    type="text"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="maria@ejemplo.com o +1 555 123456"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Mensaje o Consulta
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="¿En qué podemos servirte o apoyarte espiritualmente?"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 focus:border-amber-400 focus:outline-none text-xs text-neutral-100 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Consulta</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
