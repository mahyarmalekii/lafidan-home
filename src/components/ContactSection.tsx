import { useState } from 'react';
import { FadeIn } from './FadeIn';
import { useLanguage } from './LanguageContext';

export const ContactSection = () => {
  const { t, language } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'innenausbau',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'innenausbau',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 md:px-12 lg:px-16 bg-black relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-gray-300 mb-4">
              <span>BERLIN STANDORT & KONTAKT</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
              {t.contactSection.title}
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              {t.contactSection.subtitle}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Location Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <FadeIn delay={200}>
              <div className="liquid-glass border border-white/10 rounded-3xl p-8 bg-[#0a0a0a]/60">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-4">
                  {t.contactSection.legalInfoTitle}
                </div>
                
                <h3 className="text-2xl font-light text-white mb-6">
                  Lafidan Bauunternehmen UG
                </h3>

                {/* Info List */}
                <div className="flex flex-col gap-4 text-sm text-gray-300">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                      📍
                    </div>
                    <div>
                      <div className="font-medium text-white">Standort Berlin</div>
                      <div className="text-gray-400">Bundesallee 187, 10717 Berlin</div>
                      <div className="text-xs text-gray-500 font-mono mt-0.5">Einsatzgebiet: Berlin, Brandenburg & bundesweit</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                      📞
                    </div>
                    <div>
                      <div className="font-medium text-white">Telefon / Mobil</div>
                      <a href="tel:+491708853978" className="text-white hover:underline font-mono text-base">
                        0170 8853978
                      </a>
                      <div className="text-xs text-gray-400">Mo – Sa: 08:00 – 19:00 Uhr</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                      ✉️
                    </div>
                    <div>
                      <div className="font-medium text-white">E-Mail</div>
                      <a href="mailto:Lafidanug@gmail.com" className="text-white hover:underline font-mono">
                        Lafidanug@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-3">
                  <a
                    href="tel:+491708853978"
                    className="flex-1 py-3 px-4 bg-white text-black text-center rounded-xl text-xs font-semibold hover:bg-gray-200 transition-colors"
                  >
                    {t.contactSection.callNow}
                  </a>
                  <a
                    href="https://wa.me/491708853978"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-4 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-center rounded-xl text-xs font-semibold hover:bg-[#25D366] hover:text-black transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>

              </div>
            </FadeIn>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={300}>
              <div className="liquid-glass border border-white/10 rounded-3xl p-8 sm:p-12 bg-[#0a0a0a]/60">
                <h3 className="text-2xl font-light text-white mb-2">
                  {t.contactSection.formTitle}
                </h3>
                <p className="text-gray-400 text-sm mb-8">
                  {language === 'de'
                    ? 'Beschreiben Sie kurz Ihr Vorhaben – wir melden uns innerhalb von 24 Stunden bei Ihnen.'
                    : 'Briefly outline your planned project – we will respond within 24 hours.'}
                </p>

                {isSubmitted ? (
                  <div className="p-8 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center text-emerald-400 animate-fadeIn">
                    <div className="text-3xl mb-2">✓</div>
                    <div className="font-medium text-lg text-white mb-1">
                      {t.contactSection.successMessage}
                    </div>
                    <div className="text-xs text-gray-300 font-mono">
                      Lafidan Bauunternehmen Team • 0170 8853978
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-gray-400 mb-1.5">{t.contactSection.nameLabel} *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="z.B. Markus Weber"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-gray-400 mb-1.5">{t.contactSection.phoneLabel} *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="0170 ..."
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-gray-400 mb-1.5">{t.contactSection.emailLabel} *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="beispiel@domain.de"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-gray-400 mb-1.5">{t.contactSection.projectTypeLabel}</label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full bg-[#151515] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                        >
                          <option value="innenausbau">{language === 'de' ? 'Kompletter Innenausbau' : language === 'tr' ? 'Komple İç Mekan Yapımı' : 'Full Interior Fit-Out'}</option>
                          <option value="villa">{language === 'de' ? 'Luxusvilla / Wohnimmobilie' : language === 'tr' ? 'Lüks Villa / Konut' : 'Luxury Villa / Residential'}</option>
                          <option value="office">{language === 'de' ? 'Büroausbau / Gewerbe' : language === 'tr' ? 'Ofis / Ticari Alan' : 'Office Fit-Out / Commercial'}</option>
                          <option value="hotel">{language === 'de' ? 'Hotel & Gastronomie' : language === 'tr' ? 'Otel & Restoran' : 'Hospitality & Gastronomy'}</option>
                          <option value="spachtel">{language === 'de' ? 'Spachtel- & Malerarbeiten Q1–Q4' : language === 'tr' ? 'Alçı Sıva & Boya Q1–Q4' : 'Skimming & Painting Q1–Q4'}</option>
                          <option value="sanierung">{language === 'de' ? 'Sanierung & Renovierung' : language === 'tr' ? 'Tadilat & Renovasyon' : 'Renovation & Refurbishment'}</option>
                          <option value="sonstiges">{language === 'de' ? 'Sonstiges / Beratung' : language === 'tr' ? 'Diğer / Danışmanlık' : 'Other / Consultation'}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1.5">{t.contactSection.messageLabel} *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={language === 'de' ? 'Projektstandort, gewünschter Zeitraum, Gewerke...' : language === 'tr' ? 'Proje konumu, tahmini süre, talepler...' : 'Project location, estimated timeline, requirements...'}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors shadow-lg cursor-pointer text-sm"
                    >
                      {t.contactSection.submitButton}
                    </button>

                  </form>
                )}

              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};
