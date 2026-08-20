import { useState } from 'react';
import { useLanguage } from './LanguageContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { t, language } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg liquid-glass border border-white/20 rounded-3xl p-8 bg-[#0a0a0a] shadow-2xl animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white hover:text-black text-white transition-colors cursor-pointer"
        >
          ✕
        </button>

        <div className="mb-6">
          <div className="text-xs font-mono text-gray-400 mb-1">LH LAFIDAN HOME UG</div>
          <h3 className="text-2xl font-light text-white">
            {t.contactSection.formTitle}
          </h3>
          <p className="text-gray-400 text-xs mt-1">
            Fatemeh Eyvazi • Bundesallee 187, 10717 Berlin • 0170 8853978
          </p>
        </div>

        {isSubmitted ? (
          <div className="py-12 text-center text-emerald-400">
            <div className="text-4xl mb-3">✓</div>
            <div className="text-lg font-medium text-white mb-1">{t.contactSection.successMessage}</div>
            <div className="text-xs text-gray-400 font-mono">Wir kontaktieren Sie in Kürze.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1">{t.contactSection.nameLabel} *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1">{t.contactSection.phoneLabel} *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="0170 ..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1">{t.contactSection.emailLabel}</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="E-Mail"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1">{t.contactSection.messageLabel} *</label>
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={language === 'de' ? 'Kurze Projektbeschreibung...' : language === 'tr' ? 'Kısa proje özeti...' : 'Brief project description...'}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors shadow-lg cursor-pointer text-sm"
              >
                {t.contactSection.submitButton}
              </button>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400 font-mono pt-2">
              <a href="tel:+491708853978" className="hover:text-white underline">📞 0170 8853978</a>
              <a href="mailto:Lafidanug@gmail.com" className="hover:text-white underline">✉️ Lafidanug@gmail.com</a>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
