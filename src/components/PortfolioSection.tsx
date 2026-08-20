import { FadeIn } from './FadeIn';
import { useLanguage } from './LanguageContext';
import { PROJECTS_DATA } from '../data/projectsData';

interface PortfolioSectionProps {
  onOpenSamples: (projectId?: string) => void;
}

export const PortfolioSection = ({ onOpenSamples }: PortfolioSectionProps) => {
  const { t, language } = useLanguage();

  return (
    <section id="portfolio" className="py-32 px-4 sm:px-6 md:px-12 lg:px-16 bg-black relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <FadeIn delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-gray-300 mb-4">
                <span>{language === 'de' ? 'ECHTE PROJEKTE & SAMPLES' : language === 'tr' ? 'GERÇEK PROJELER & REFERANSLAR' : 'REAL PROJECTS & SAMPLES'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-3">
                {t.samples.pageTitle}
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-xl">
                {t.samples.pageSubtitle}
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={200}>
            <button
              onClick={() => onOpenSamples()}
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors cursor-pointer shadow-lg w-fit"
            >
              <span>{language === 'de' ? 'Alle Samples & Galerien öffnen' : language === 'tr' ? 'Tüm Projeleri ve Galeriyi Aç' : 'Open Full Samples & Galleries'}</span>
              <span>→</span>
            </button>
          </FadeIn>
        </div>

        {/* Featured Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project, idx) => (
            <FadeIn key={project.id} delay={idx * 100}>
              <div
                onClick={() => onOpenSamples(project.id)}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-white/30 transition-all duration-500 bg-[#0a0a0a]"
              >
                <img
                  src={project.heroImage}
                  alt={project.title[language] || project.title.de}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:via-black/20 transition-all duration-500" />

                {/* Top Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-mono text-white border border-white/10">
                  {project.media.length} {language === 'de' ? 'Fotos' : language === 'tr' ? 'Medya' : 'Photos'}
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1">
                    {project.categoryLabel[language] || project.categoryLabel.de}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-1 group-hover:text-gray-200 transition-colors">
                    {project.title[language] || project.title.de}
                  </h3>
                  <div className="text-xs text-gray-400 flex items-center justify-between pt-2 border-t border-white/10">
                    <span>📍 {project.location}</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {language === 'de' ? 'Samples ansehen →' : language === 'tr' ? 'Detayları Gör →' : 'View Samples →'}
                    </span>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onOpenSamples()}
            className="liquid-glass border border-white/20 text-white px-8 py-4 rounded-2xl text-sm font-medium hover:bg-white hover:text-black transition-all cursor-pointer inline-flex items-center gap-3"
          >
            <span>
              {language === 'de'
                ? 'Komplette Fotogalerie aller 6 Projekte erkunden'
                : language === 'tr'
                ? 'Tüm 6 Projenin Kapsamlı Fotoğraf Galerisini İnceleyin'
                : 'Explore Complete Photo Gallery of All 6 Projects'}
            </span>
            <span className="font-mono text-xs px-2 py-0.5 bg-white/20 rounded-md">130+ {language === 'tr' ? 'Medya' : 'Bilder'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
