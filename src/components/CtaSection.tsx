import { FadeIn } from './FadeIn';
import { useLanguage } from './LanguageContext';

export const CtaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#050505] relative z-10 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn delay={200}>
          <div className="liquid-glass border border-white/10 rounded-3xl p-12 md:p-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 text-white relative z-10">
              {t.cta.title}
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
              {t.cta.desc}
            </p>
            <button className="bg-white text-black px-10 py-4 rounded-xl font-medium hover:bg-gray-200 transition-colors relative z-10 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              {t.cta.button}
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
