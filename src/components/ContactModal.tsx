import { useState } from 'react';
import { inquiryEmail, emailHelp } from './inquiryEmail';
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = inquiryEmail(formData, t.contactSection);
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg inquiry-dialog liquid-glass border border-white/20 rounded-3xl p-5 sm:p-8 bg-[#0a0a0a] shadow-2xl animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white hover:text-black text-white transition-colors cursor-pointer"
        >
          ✕
        </button>

        <div className="mb-6">
          <div className="text-xs font-mono text-gray-400 mb-1">LAFIDAN BAUUNTERNEHMEN UG</div>
          <h3 className="text-2xl font-light text-white">
            {t.contactSection.formTitle}
          </h3>
          <p className="text-gray-400 text-xs mt-1">
            Bundesallee 187, 10717 Berlin • 0170 8853978
          </p>
        </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-gray-300" role={isSubmitted ? 'status' : undefined}>{emailHelp[language]}</p>
            <div>
              <label htmlFor="inquiry-name" className="block text-xs font-mono text-gray-400 mb-1">{t.contactSection.nameLabel} *</label>
              <input
                type="text"
                required
                id="inquiry-name" name="name" autoComplete="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label htmlFor="inquiry-phone" className="block text-xs font-mono text-gray-400 mb-1">{t.contactSection.phoneLabel} *</label>
              <input
                type="tel"
                required
                id="inquiry-phone" name="phone" autoComplete="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="0170 ..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label htmlFor="inquiry-email" className="block text-xs font-mono text-gray-400 mb-1">{t.contactSection.emailLabel}</label>
              <input
                type="email"
                id="inquiry-email" name="email" autoComplete="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="E-Mail"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label htmlFor="inquiry-message" className="block text-xs font-mono text-gray-400 mb-1">{t.contactSection.messageLabel} *</label>
              <textarea
                required
                rows={3}
                id="inquiry-message" name="message"
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

            <div className="flex items-center justify-between flex-wrap gap-3 text-xs text-gray-400 font-mono pt-2">
              <a href="tel:+491708853978" className="hover:text-white underline">📞 0170 8853978</a>
              <a href="mailto:Lafidanug@gmail.com" className="hover:text-white underline">✉️ Lafidanug@gmail.com</a>
            </div>
          </form>


      </div>
    </div>
  );
};
