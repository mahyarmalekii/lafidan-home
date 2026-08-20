import { FadeIn } from './FadeIn';
import { useLanguage } from './LanguageContext';

export const SpecializationSection = () => {
  const { t } = useLanguage();

  return (
    <section id="specialization" className="py-28 px-4 sm:px-6 md:px-12 lg:px-16 bg-black relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-gray-300 mb-4">
              <span>LH LAFIDAN EXPERTISE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
              {t.specialization.title}
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              {t.specialization.subtitle}
            </p>
          </FadeIn>
        </div>

        {/* Specialization Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {t.specialization.items.map((spec, idx) => (
            <FadeIn key={idx} delay={idx * 50}>
              <div className="liquid-glass border border-white/10 hover:border-white/30 rounded-2xl p-5 text-center transition-all duration-300 group hover:-translate-y-1 bg-black/40">
                <div className="text-xs font-mono text-gray-500 mb-2 group-hover:text-white transition-colors">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
                <div className="text-sm sm:text-base font-medium text-gray-200 group-hover:text-white transition-colors">
                  {spec}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
