import { useState } from 'react';
import { FadeIn } from './FadeIn';
import { useLanguage } from './LanguageContext';

interface ServicesSectionProps {
  onExploreSamples?: () => void;
}

export const ServicesSection = ({ onExploreSamples }: ServicesSectionProps) => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<number>(0);

  const serviceCategories = [
    {
      title: language === 'de' ? 'Planung & Design' : 'Planning & Design',
      indices: [0, 1, 11, 12] // Architektur, Interior Design, Türkei-Beschaffung, Aus einer Hand
    },
    {
      title: language === 'de' ? 'Innenausbau & Handwerk' : 'Fit-Out & Craftsmanship',
      indices: [2, 3, 4, 5, 10] // Innenausbau, Spachtelarbeiten Q1-Q4, Malerarbeiten, Sanierung, Möbel
    },
    {
      title: language === 'de' ? 'Spezialobjekte' : 'Commercial & Luxury',
      indices: [6, 7, 8, 9] // Luxusvillen, Hotels, Retail, Restaurants
    }
  ];

  return (
    <section id="services" className="py-32 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#070707] relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-gray-300 mb-4">
              <span>{language === 'de' ? 'KOMPLETTE GEWERKE' : 'FULL TRADE SPECTRUM'}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
              {t.services.title}
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </FadeIn>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {serviceCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-white text-black shadow-lg'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active Category Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceCategories[activeTab].indices.map((sIdx, cardIdx) => {
            const item = t.services.items[sIdx];
            if (!item) return null;
            return (
              <FadeIn key={item.id} delay={cardIdx * 100}>
                <div className="liquid-glass border border-white/10 rounded-3xl p-8 h-full flex flex-col justify-between hover:border-white/25 transition-all duration-300 group bg-black/40">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-gray-400">
                        0{sIdx + 1}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-white/30 group-hover:bg-white transition-colors" />
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-medium text-white mb-3 group-hover:text-gray-100 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                      {item.shortDesc}
                    </p>
                    
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed border-t border-white/10 pt-4">
                      {item.details}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 flex items-center justify-between text-xs font-mono text-gray-400 group-hover:text-white transition-colors">
                    <span>LH LAFIDAN STANDARD</span>
                    <span>→</span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Turkey Procurement & One-Stop Banner */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Turkey Procurement Card */}
          <FadeIn delay={200}>
            <div className="liquid-glass border border-white/15 rounded-3xl p-8 sm:p-10 relative overflow-hidden bg-gradient-to-br from-white/10 via-black to-black">
              <div className="text-xs font-mono text-amber-400 mb-2 uppercase tracking-wider">
                {language === 'de' ? 'Exklusiver Beschaffungsvorteil' : language === 'tr' ? 'Özel Tedarik Avantajı' : 'Exclusive Sourcing Advantage'}
              </div>
              <h3 className="text-2xl font-light text-white mb-3">
                {language === 'de' ? 'Beschaffung direkt aus der Türkei' : language === 'tr' ? 'Türkiye\'den Doğrudan Tedarik' : 'Direct Procurement from Turkey'}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {language === 'de'
                  ? 'Direkter Bezug ausgewählter Möbel, Luxus-Natursteine, Fliesen und individueller Innenausstattung von führenden Herstellern in der Türkei. Höchste Individualisierung, termintreue Lieferung und fachgerechte Montage in Deutschland.'
                  : language === 'tr'
                  ? 'Seçkin mobilyalar, lüks doğal taşlar, seramikler ve özel tasarım iç mekan ürünlerinin Türkiye\'deki lider üreticilerden doğrudan temini. Yüksek kişiselleştirme, zamanında teslimat ve Almanya\'da profesyonel montaj.'
                  : 'Direct sourcing of bespoke furniture, fine natural stones, ceramic tiles, and customized interior elements directly from leading manufacturers in Turkey. Maximum custom design, coordinated delivery, and professional installation in Germany.'}
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-300">
                <span className="px-2.5 py-1 bg-white/10 rounded-md">{language === 'tr' ? 'Oteller & Süitler' : 'Hotels & Suiten'}</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-md">{language === 'tr' ? 'Restoranlar' : 'Restaurants'}</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-md">{language === 'tr' ? 'Villalar' : 'Villen'}</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-md">{language === 'tr' ? 'Özel İmalat' : 'Sonderanfertigungen'}</span>
              </div>
            </div>
          </FadeIn>

          {/* Single-Source Project Delivery Card */}
          <FadeIn delay={300}>
            <div className="liquid-glass border border-white/15 rounded-3xl p-8 sm:p-10 relative overflow-hidden bg-gradient-to-br from-white/10 via-black to-black flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-emerald-400 mb-2 uppercase tracking-wider">
                  {language === 'de' ? 'Zentral gesteuert' : language === 'tr' ? 'Merkezi Yönetim' : 'Turnkey Coordination'}
                </div>
                <h3 className="text-2xl font-light text-white mb-3">
                  {language === 'de' ? 'Projektabwicklung aus einer Hand' : language === 'tr' ? 'Tek Elden Proje Yönetimi' : 'Turnkey Delivery from a Single Source'}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {language === 'de'
                    ? 'Beratung → Planung → Design → Materialauswahl → Innenausbau → Renovierung → Ausstattung → Montage → Fertigstellung. Ein zentraler Ansprechpartner für alle Gewerke.'
                    : language === 'tr'
                    ? 'Danışmanlık → Planlama → Tasarım → Malzeme Seçimi → İnce Yapı → Tadilat → Mobilya Donatımı → Montaj → Teslimat. Tüm disiplinler için tek muhatap.'
                    : 'Consultation → Planning → Design → Material Selection → Fit-Out → Renovation → Furnishing → Assembly → Handover. One dedicated point of contact.'}
                </p>
              </div>
              {onExploreSamples && (
                <button
                  onClick={onExploreSamples}
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-xl text-xs font-medium hover:bg-gray-200 transition-colors w-fit cursor-pointer"
                >
                  <span>{language === 'de' ? 'Ergebnisse in Samples ansehen' : language === 'tr' ? 'Projeleri İnceleyin' : 'See results in Samples'}</span>
                  <span>→</span>
                </button>
              )}
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
};
