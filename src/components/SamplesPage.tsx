import { useState, useMemo, useEffect, useCallback } from 'react';
import { PROJECTS_DATA, type ProjectItem } from '../data/projectsData';
import { useLanguage } from './LanguageContext';
import { FadeIn } from './FadeIn';

interface SamplesPageProps {
  initialProjectId?: string | null;
  onNavigateHome?: () => void;
  onRequestContact?: () => void;
}

export const SamplesPage = ({ initialProjectId, onNavigateHome, onRequestContact }: SamplesPageProps) => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  useEffect(() => {
    if (initialProjectId) {
      const found = PROJECTS_DATA.find((p) => p.id === initialProjectId);
      if (found) {
        setActiveProject(found);
      }
    }
  }, [initialProjectId]);

  // Categories list
  const categories = useMemo(() => {
    return [
      { id: 'all', label: t.samples.allCategories },
      { id: 'office', label: language === 'de' ? 'Büro & Gewerbe (Charlottenburg)' : language === 'tr' ? 'Ofis & Ticari (Charlottenburg)' : 'Office & Commercial (Charlottenburg)' },
      { id: 'villa', label: language === 'de' ? 'Luxusvillen (Kladow)' : language === 'tr' ? 'Lüks Villalar (Kladow)' : 'Luxury Villas (Kladow)' },
      { id: 'architecture', label: language === 'de' ? 'Wintergarten & Glasbau' : language === 'tr' ? 'Kış Bahçesi & Cam Sistemleri' : 'Winter Garden & Glazing' },
      { id: 'retail', label: language === 'de' ? 'Gastronomie & Retail (Sezai Baklava)' : language === 'tr' ? 'Gastronomi & Mağaza (Sezai Baklava)' : 'Gastronomy & Retail (Sezai Baklava)' },
      { id: 'residential', label: language === 'de' ? 'Sanierung & Wohnen (Köpenick)' : language === 'tr' ? 'Renovasyon & Konut (Köpenick)' : 'Renovation & Living (Köpenick)' },
      { id: 'design', label: language === 'de' ? '3D Planung & Visualisierung' : language === 'tr' ? '3D Planlama & Modelleme' : '3D Architecture CGI' }
    ];
  }, [language, t.samples.allCategories]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const charlottenburgProject = useMemo(() => {
    return PROJECTS_DATA.find((p) => p.id === 'charlottenburg');
  }, []);

  const openLightbox = (project: ProjectItem, mediaIndex: number = 0) => {
    setActiveProject(project);
    setActiveMediaIndex(mediaIndex);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextMedia = useCallback(() => {
    if (!activeProject) return;
    setActiveMediaIndex((prev) => (prev + 1) % activeProject.media.length);
  }, [activeProject]);

  const prevMedia = useCallback(() => {
    if (!activeProject) return;
    setActiveMediaIndex((prev) => (prev - 1 + activeProject.media.length) % activeProject.media.length);
  }, [activeProject]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextMedia();
      if (e.key === 'ArrowLeft') prevMedia();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, nextMedia, prevMedia]);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 pb-32 px-4 sm:px-6 md:px-12 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Breadcrumb & Title */}
        <div className="mb-12">
          {onNavigateHome && (
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition-colors group cursor-pointer"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>{language === 'de' ? 'Zurück zur Startseite' : language === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}</span>
            </button>
          )}

          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-gray-300 mb-4">
              <span>LH LAFIDAN HOME</span>
              <span>•</span>
              <span>PORTFOLIO & SAMPLES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-4">
              {t.samples.pageTitle}
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl">
              {t.samples.pageSubtitle}
            </p>
          </FadeIn>
        </div>

        {/* FEATURED SPOTLIGHT / TESTIMONIAL: Charlottenburg Office */}
        {charlottenburgProject && (
          <FadeIn delay={200} className="mb-16">
            <div className="relative liquid-glass border border-white/15 rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden shadow-2xl">
              <div className="absolute -right-24 -top-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Left Text & Testimonial */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-white text-black text-xs font-semibold tracking-wide uppercase">
                        {t.samples.featuredProject}
                      </span>
                      <span className="text-xs font-mono text-gray-400">
                        {charlottenburgProject.location} • {charlottenburgProject.year}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-3">
                      {charlottenburgProject.title[language] || charlottenburgProject.title.de}
                    </h2>
                    <p className="text-gray-300 text-base mb-6">
                      {charlottenburgProject.description[language] || charlottenburgProject.description.de}
                    </p>
                  </div>

                  {/* Testimonial Quote Box */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-3 uppercase tracking-wider">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <span>{t.samples.testimonialBadge}</span>
                    </div>
                    <blockquote className="text-white text-base sm:text-lg italic font-light leading-relaxed mb-4">
                      {charlottenburgProject.testimonial?.quote[language] || charlottenburgProject.testimonial?.quote.de}
                    </blockquote>
                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div>
                        <div className="text-sm font-medium text-white">{charlottenburgProject.testimonial?.author}</div>
                        <div className="text-xs text-gray-400">{charlottenburgProject.testimonial?.role[language] || charlottenburgProject.testimonial?.role.de}</div>
                      </div>
                      <div className="text-xs text-gray-400 font-mono">100% Empfehlung</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => openLightbox(charlottenburgProject, 0)}
                      className="bg-white text-black px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-2 cursor-pointer shadow-lg"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>
                        {language === 'de'
                          ? `Alle ${charlottenburgProject.media.length} Charlottenburg Fotos ansehen`
                          : language === 'tr'
                          ? `Tüm ${charlottenburgProject.media.length} Charlottenburg Fotoğrafını Gör`
                          : `View all ${charlottenburgProject.media.length} Charlottenburg Photos`}
                      </span>
                    </button>
                    {onRequestContact && (
                      <button
                        onClick={onRequestContact}
                        className="liquid-glass border border-white/20 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer"
                      >
                        {language === 'de' ? 'Ähnliches Projekt anfragen' : language === 'tr' ? 'Benzer Proje Talebi' : 'Inquire Similar Project'}
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Interactive Preview Grid */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                  {charlottenburgProject.media.slice(0, 4).map((m, idx) => (
                    <div
                      key={idx}
                      onClick={() => openLightbox(charlottenburgProject, idx)}
                      className={`relative rounded-2xl overflow-hidden cursor-pointer group border border-white/10 ${idx === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'}`}
                    >
                      <img
                        src={m.src}
                        alt={`Charlottenburg Office ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded-md text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        Foto {idx + 1}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </FadeIn>
        )}

        {/* Category Filters */}
        <div className="mb-12 flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, pIdx) => {
            return (
              <FadeIn key={project.id} delay={pIdx * 100}>
                <div className="group liquid-glass border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-500 flex flex-col h-full bg-[#0a0a0a]/60">
                  
                  {/* Thumbnail Banner */}
                  <div
                    className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-black/40"
                    onClick={() => openLightbox(project, 0)}
                  >
                    <img
                      src={project.heroImage}
                      alt={project.title[language] || project.title.de}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Media Count Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-full text-xs font-mono text-white flex items-center gap-1.5 shadow-lg">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{project.media.length} {language === 'de' ? 'Medien' : language === 'tr' ? 'Medya' : 'Files'}</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[11px] font-mono text-gray-300 uppercase tracking-wider block mb-1">
                        {project.categoryLabel[language] || project.categoryLabel.de}
                      </span>
                      <h3 className="text-xl font-medium text-white group-hover:text-gray-200 transition-colors">
                        {project.title[language] || project.title.de}
                      </h3>
                    </div>
                  </div>

                  {/* Project Info & Description */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-gray-400 font-mono mb-4 pb-3 border-b border-white/10">
                        <span>📍 {project.location}</span>
                        <span>🗓️ {project.year}</span>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {project.description[language] || project.description.de}
                      </p>

                      {/* Scope Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {(project.scope[language] || project.scope.de).map((scopeItem, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300"
                          >
                            {scopeItem}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                      <button
                        onClick={() => openLightbox(project, 0)}
                        className="flex-1 py-2.5 px-4 bg-white/10 hover:bg-white text-white hover:text-black rounded-xl text-xs font-medium transition-all text-center cursor-pointer flex items-center justify-center gap-2"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>{t.samples.viewGallery} ({project.media.length})</span>
                      </button>

                      {project.testimonial && (
                        <div
                          title="Referenz & Testimonial vorhanden"
                          className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-yellow-400 text-xs flex items-center justify-center"
                        >
                          ⭐
                        </div>
                      )}
                    </div>

                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Global CTA at Bottom of Samples */}
        <div className="mt-24 text-center">
          <div className="liquid-glass border border-white/10 rounded-3xl p-10 md:p-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              {language === 'de' ? 'Haben Sie ein konkretes Projekt im Sinn?' : language === 'tr' ? 'Aklınızda somut bir proje mi var?' : 'Do you have a specific project in mind?'}
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              {language === 'de'
                ? 'Wir beraten Sie persönlich und unverbindlich zu Ihrem Bau- oder Sanierungsvorhaben in Berlin und Umgebung.'
                : language === 'tr'
                ? 'Berlin ve çevresindeki inşaat, iç mekan veya renovasyon projeniz için size özel ve ücretsiz danışmanlık sunuyoruz.'
                : 'We provide personalized, no-obligation consultations for your construction, fit-out, or renovation project in Berlin and beyond.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+491708853978"
                className="bg-white text-black px-8 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors shadow-lg flex items-center gap-2"
              >
                <span>📞 0170 8853978</span>
              </a>
              <a
                href="mailto:Lafidanug@gmail.com"
                className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-xl font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <span>✉️ Lafidanug@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX & MEDIA VIEWER */}
      {isLightboxOpen && activeProject && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 z-20">
            <div>
              <div className="text-xs font-mono text-gray-400">
                {activeProject.location} • {activeMediaIndex + 1} / {activeProject.media.length}
              </div>
              <div className="text-lg md:text-xl font-medium text-white">
                {activeProject.title[language] || activeProject.title.de}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={closeLightbox}
                className="px-4 py-2 bg-white/10 hover:bg-white hover:text-black text-white rounded-xl text-sm font-medium transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="hidden sm:inline">{t.samples.closeModal}</span>
              </button>
            </div>
          </div>

          {/* Center Stage: Image or Video */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden select-none">
            {activeProject.media[activeMediaIndex].type === 'video' ? (
              <div className="w-full max-w-4xl h-full flex items-center justify-center">
                <video
                  key={activeProject.media[activeMediaIndex].src}
                  src={activeProject.media[activeMediaIndex].src}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[75vh] max-w-full rounded-2xl border border-white/10 shadow-2xl object-contain"
                />
              </div>
            ) : (
              <img
                src={activeProject.media[activeMediaIndex].src}
                alt=""
                className="max-h-[75vh] max-w-full object-contain rounded-2xl border border-white/10 shadow-2xl transition-opacity duration-300"
              />
            )}

            {/* Navigation Arrows */}
            <button
              onClick={prevMedia}
              aria-label={t.samples.prevMedia}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-black/60 hover:bg-white hover:text-black text-white rounded-full border border-white/20 transition-all backdrop-blur-md cursor-pointer shadow-2xl"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextMedia}
              aria-label={t.samples.nextMedia}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-black/60 hover:bg-white hover:text-black text-white rounded-full border border-white/20 transition-all backdrop-blur-md cursor-pointer shadow-2xl"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Bottom Thumbnails Strip */}
          <div className="pt-4 border-t border-white/10 flex items-center gap-2 overflow-x-auto py-2 z-20 scrollbar-none">
            {activeProject.media.map((m, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMediaIndex(idx)}
                className={`relative flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  activeMediaIndex === idx ? 'border-white scale-105 shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'border-white/20 opacity-50 hover:opacity-100'
                }`}
              >
                {m.type === 'video' ? (
                  <div className="w-full h-full bg-gray-900 flex items-center justify-center text-xs text-white">
                    ▶ MP4
                  </div>
                ) : (
                  <img src={m.src} alt="" className="w-full h-full object-cover" />
                )}
              </button>
            ))}
          </div>

        </div>
      )}

    </div>
  );
};
