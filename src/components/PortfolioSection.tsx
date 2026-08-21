import { useState, useMemo, useCallback, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { useLanguage } from './LanguageContext';
import { PROJECTS_DATA, type ProjectItem } from '../data/projectsData';

interface PortfolioSectionProps {
  onOpenSamples: (projectId?: string) => void;
}

export const PortfolioSection = ({ onOpenSamples }: PortfolioSectionProps) => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'grid'>('cards');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  // Categories list
  const categories = useMemo(() => {
    return [
      { id: 'all', label: language === 'de' ? 'Alle Projekte (7)' : language === 'tr' ? 'Tüm Projeler (7)' : 'All Projects (7)' },
      { id: 'renovation', label: language === 'de' ? 'Wohnsanierung (Neu)' : language === 'tr' ? 'Konut Renovasyon (Yeni)' : 'Residential Fit-Out (New)' },
      { id: 'office', label: language === 'de' ? 'Büroausbau' : language === 'tr' ? 'Ofis Yapımı' : 'Office Fit-Out' },
      { id: 'villa', label: language === 'de' ? 'Luxusvillen' : language === 'tr' ? 'Lüks Villalar' : 'Luxury Villas' },
      { id: 'retail', label: language === 'de' ? 'Gastronomie & Retail' : language === 'tr' ? 'Gastronomi & Mağaza' : 'Hospitality & Retail' },
      { id: 'architecture', label: language === 'de' ? 'Wintergarten & Glas' : language === 'tr' ? 'Kış Bahçesi & Cam' : 'Winter Garden & Glazing' },
      { id: 'design', label: language === 'de' ? '3D Planung' : language === 'tr' ? '3D Modelleme' : '3D CGI' }
    ];
  }, [language]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Flattened samples for direct photo grid
  const directSamples = useMemo(() => {
    const samples: { project: ProjectItem; mediaIndex: number; src: string; type: string }[] = [];
    PROJECTS_DATA.forEach((project) => {
      project.media.slice(0, 6).forEach((media, mIdx) => {
        samples.push({
          project,
          mediaIndex: mIdx,
          src: media.src,
          type: media.type
        });
      });
    });
    return samples;
  }, []);

  const openDirectLightbox = (project: ProjectItem, mediaIndex: number = 0) => {
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

  const totalPhotosCount = useMemo(() => {
    return PROJECTS_DATA.reduce((acc, p) => acc + p.media.length, 0);
  }, []);

  return (
    <section id="portfolio" className="py-28 px-4 sm:px-6 md:px-12 lg:px-16 bg-black relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div>
            <FadeIn delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-gray-300 mb-4 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{language === 'de' ? 'ECHTE PROJEKTE & SAMPLES DIREKT ANSEHEN' : language === 'tr' ? 'GERÇEK PROJELERİ DOĞRUDAN İNCELEYİN' : 'DIRECT LIVE PROJECT SAMPLES & GALLERY'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-3">
                {t.samples.pageTitle}
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl">
                {t.samples.pageSubtitle}
              </p>
            </FadeIn>
          </div>

          {/* Mode Switcher & Full Gallery Action */}
          <FadeIn delay={200} className="flex flex-wrap items-center gap-3">
            {/* View Mode Buttons */}
            <div className="flex bg-white/10 p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'cards' ? 'bg-white text-black font-semibold shadow-md' : 'text-gray-300 hover:text-white'
                }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span>{language === 'de' ? 'Projekte' : language === 'tr' ? 'Projeler' : 'Projects'}</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'grid' ? 'bg-white text-black font-semibold shadow-md' : 'text-gray-300 hover:text-white'
                }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{language === 'de' ? 'Direkte Fotowand' : language === 'tr' ? 'Fotoğraf Galerisi' : 'Photo Stream'}</span>
              </button>
            </div>

            <button
              onClick={() => onOpenSamples()}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-md"
            >
              <span>{language === 'de' ? 'Vollansicht öffnen' : language === 'tr' ? 'Tam Sayfa Aç' : 'Full Page View'}</span>
              <span>→</span>
            </button>
          </FadeIn>
        </div>

        {/* Category Filters Bar */}
        <div className="mb-10 flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-white text-black font-semibold shadow-[0_0_12px_rgba(255,255,255,0.25)]'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* VIEW 1: DIRECT PROJECT CARDS WITH INLINE MINI-THUMBNAILS */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <FadeIn key={project.id} delay={idx * 80}>
                <div className="group liquid-glass border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-500 flex flex-col h-full bg-[#0a0a0a]/80 shadow-2xl">
                  
                  {/* Hero Photo with Quick Direct Click */}
                  <div
                    onClick={() => openDirectLightbox(project, 0)}
                    className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-black/40"
                  >
                    <img
                      src={project.heroImage}
                      alt={project.title[language] || project.title.de}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    
                    {/* Media Count Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-full text-xs font-mono text-white flex items-center gap-1.5 shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{project.media.length} {language === 'de' ? 'Fotos' : language === 'tr' ? 'Medya' : 'Photos'}</span>
                    </div>

                    {/* Category & Title on Hero */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                        {project.categoryLabel[language] || project.categoryLabel.de}
                      </span>
                      <h3 className="text-lg font-medium text-white group-hover:text-gray-200 transition-colors line-clamp-1">
                        {project.title[language] || project.title.de}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Location & Year */}
                      <div className="flex items-center justify-between text-xs text-gray-400 font-mono mb-3 pb-2.5 border-b border-white/10">
                        <span>📍 {project.location}</span>
                        <span>🗓️ {project.year}</span>
                      </div>

                      {/* Subtitle / Scope Summary */}
                      <p className="text-gray-300 text-xs leading-relaxed mb-4 line-clamp-2">
                        {project.subtitle[language] || project.subtitle.de}
                      </p>

                      {/* DIRECT MINI-PHOTO THUMBNAIL STRIP */}
                      <div className="mb-4">
                        <div className="text-[10px] font-mono text-gray-400 mb-1.5 flex items-center justify-between">
                          <span>{language === 'de' ? 'Direkt-Vorschau (Klick für Großansicht):' : language === 'tr' ? 'Hızlı Önizleme:' : 'Direct Preview:'}</span>
                          <span className="text-white font-semibold">+{project.media.length - 4} mehr</span>
                        </div>
                        <div className="grid grid-cols-4 gap-1.5">
                          {project.media.slice(0, 4).map((m, mIdx) => (
                            <button
                              key={mIdx}
                              onClick={() => openDirectLightbox(project, mIdx)}
                              className="relative aspect-square rounded-lg overflow-hidden border border-white/15 hover:border-white transition-all cursor-pointer group/thumb bg-black"
                            >
                              <img
                                src={m.src}
                                alt=""
                                className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-110"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-black/20 group-hover/thumb:bg-transparent transition-colors" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Direct Action Trigger */}
                    <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                      <button
                        onClick={() => openDirectLightbox(project, 0)}
                        className="flex-1 py-2.5 px-3 bg-white text-black font-semibold rounded-xl text-xs hover:bg-gray-200 transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>{language === 'de' ? 'Galerie direkt öffnen' : language === 'tr' ? 'Galeriyi Aç' : 'Open Direct Gallery'}</span>
                      </button>
                      <button
                        onClick={() => onOpenSamples(project.id)}
                        className="p-2.5 bg-white/10 hover:bg-white hover:text-black text-white rounded-xl text-xs transition-colors cursor-pointer"
                        title="Projektdetails ansehen"
                      >
                        →
                      </button>
                    </div>

                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        )}

        {/* VIEW 2: DIRECT PHOTO STREAM WALL (MASONRY GRID) */}
        {viewMode === 'grid' && (
          <div>
            <div className="text-xs font-mono text-gray-400 mb-6 flex items-center justify-between">
              <span>{language === 'de' ? 'Klicken Sie auf ein beliebiges Bild, um es hochauflösend zu vergrößern:' : language === 'tr' ? 'Büyütmek için fotoğraflara tıklayın:' : 'Click any photo to open full-resolution zoom:'}</span>
              <span className="text-white">{directSamples.length} Foto-Highlights</span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {directSamples.map((sample, sIdx) => (
                <FadeIn key={sIdx} delay={(sIdx % 6) * 50}>
                  <div
                    onClick={() => openDirectLightbox(sample.project, sample.mediaIndex)}
                    className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group border border-white/10 hover:border-white/40 transition-all bg-[#0a0a0a]"
                  >
                    <img
                      src={sample.src}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    
                    {/* Hover Info Tag */}
                    <div className="absolute bottom-2 left-2 right-2 p-1.5 bg-black/80 backdrop-blur-md rounded-lg text-[9px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity truncate">
                      {sample.project.title[language] || sample.project.title.de}
                    </div>

                    {sample.type === 'video' && (
                      <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-black/70 backdrop-blur-md rounded text-[9px] font-mono text-emerald-400">
                        ▶ Video
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Banner with Stats */}
        <FadeIn delay={300} className="mt-16">
          <div className="liquid-glass border border-white/15 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-white/5 to-transparent">
            <div>
              <div className="text-lg sm:text-xl font-light text-white mb-1">
                {language === 'de'
                  ? `Alle 7 Bau- & Sanierungsprojekte mit ${totalPhotosCount} Medien`
                  : language === 'tr'
                  ? `${totalPhotosCount} medya ile 7 büyük inşaat ve renovasyon projesi`
                  : `All 7 construction & fit-out projects with ${totalPhotosCount} high-res media`}
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-mono">
                Berlin-Charlottenburg • Berlin-Wilmersdorf • Berlin-Kladow • Berlin-Schöneberg • Berlin-Köpenick
              </p>
            </div>

            <button
              onClick={() => onOpenSamples()}
              className="bg-white text-black px-8 py-3.5 rounded-xl text-xs sm:text-sm font-semibold hover:bg-gray-200 transition-colors cursor-pointer shadow-lg whitespace-nowrap"
            >
              {language === 'de' ? 'Vollständige Projektgalerie öffnen →' : language === 'tr' ? 'Kapsamlı Galeriyi Aç →' : 'Open Complete Project Gallery →'}
            </button>
          </div>
        </FadeIn>

      </div>

      {/* DIRECT IN-PAGE HIGH-RES LIGHTBOX MODAL */}
      {isLightboxOpen && activeProject && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-fadeIn">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 z-20">
            <div>
              <div className="text-xs font-mono text-emerald-400">
                {activeProject.location} • {activeMediaIndex + 1} / {activeProject.media.length}
              </div>
              <div className="text-base sm:text-lg md:text-xl font-medium text-white">
                {activeProject.title[language] || activeProject.title.de}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={closeLightbox}
                className="px-4 py-2 bg-white/10 hover:bg-white hover:text-black text-white rounded-xl text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>{t.samples.closeModal}</span>
              </button>
            </div>
          </div>

          {/* Center Display Image / Video */}
          <div className="relative flex-1 flex items-center justify-center my-3 overflow-hidden select-none">
            {activeProject.media[activeMediaIndex].type === 'video' ? (
              <div className="w-full max-w-4xl h-full flex items-center justify-center">
                <video
                  key={activeProject.media[activeMediaIndex].src}
                  src={activeProject.media[activeMediaIndex].src}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[72vh] max-w-full rounded-2xl border border-white/10 shadow-2xl object-contain"
                />
              </div>
            ) : (
              <img
                src={activeProject.media[activeMediaIndex].src}
                alt=""
                className="max-h-[72vh] max-w-full object-contain rounded-2xl border border-white/10 shadow-2xl transition-all duration-300"
              />
            )}

            {/* Navigation Arrows */}
            <button
              onClick={prevMedia}
              aria-label={t.samples.prevMedia}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 bg-black/70 hover:bg-white hover:text-black text-white rounded-full border border-white/20 transition-all backdrop-blur-md cursor-pointer shadow-2xl"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextMedia}
              aria-label={t.samples.nextMedia}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 bg-black/70 hover:bg-white hover:text-black text-white rounded-full border border-white/20 transition-all backdrop-blur-md cursor-pointer shadow-2xl"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Bottom Thumbnails Strip */}
          <div className="pt-3 border-t border-white/10 flex items-center gap-2 overflow-x-auto py-2 z-20 scrollbar-none">
            {activeProject.media.map((m, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMediaIndex(idx)}
                className={`relative flex-shrink-0 w-14 h-11 sm:w-18 sm:h-13 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  activeMediaIndex === idx ? 'border-white scale-105 shadow-[0_0_12px_rgba(255,255,255,0.6)]' : 'border-white/20 opacity-50 hover:opacity-100'
                }`}
              >
                {m.type === 'video' ? (
                  <div className="w-full h-full bg-gray-900 flex items-center justify-center text-[10px] text-white">
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

    </section>
  );
};
