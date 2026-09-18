import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

export interface LegalModalProps {
  isOpen: boolean;
  initialTab?: 'impressum' | 'privacy';
  onClose: () => void;
}

export const LegalModal = ({ isOpen, initialTab = 'impressum', onClose }: LegalModalProps) => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'impressum' | 'privacy'>(initialTab);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && initialTab) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const titles = {
    de: {
      title: 'Rechtliche Angaben & Datenschutz',
      subtitle: 'Transparenz, Verantwortung und rechtliche Sicherheit für unsere Kunden und Partner',
      tabImpressum: 'Impressum',
      tabPrivacy: 'Datenschutzerklärung',
      badge: 'Rechtliches',
      close: 'Schließen',
      copiedText: 'Kopiert!'
    },
    en: {
      title: 'Legal Notice & Privacy Policy',
      subtitle: 'Transparency, compliance, and legal security for our clients and partners',
      tabImpressum: 'Imprint / Legal Notice',
      tabPrivacy: 'Privacy Policy',
      badge: 'Legal',
      close: 'Close',
      copiedText: 'Copied!'
    },
    tr: {
      title: 'Yasal Bilgiler & Gizlilik Politikası',
      subtitle: 'Müşterilerimiz ve iş ortaklarımız için şeffaflık ve yasal güvence',
      tabImpressum: 'Künye (Impressum)',
      tabPrivacy: 'Gizlilik Politikası (Datenschutz)',
      badge: 'Yasal',
      close: 'Kapat',
      copiedText: 'Kopyalandı!'
    }
  };

  const tUI = titles[language] || titles.de;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col liquid-glass border border-white/20 rounded-3xl bg-[#0a0a0a]/95 text-white shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 sm:p-8 pb-4 border-b border-white/10 flex-shrink-0 relative">
          <button
            onClick={onClose}
            aria-label={tUI.close}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white hover:text-black text-white transition-all cursor-pointer z-10"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-[#d4af37]/15 text-[#e5c158] border border-[#d4af37]/30">
              {tUI.badge}
            </span>
            <span className="text-xs text-gray-400 font-mono">Lafidan Bauunternehmen UG</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-1">
            {tUI.title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-light max-w-2xl">
            {tUI.subtitle}
          </p>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 mt-6 p-1 bg-white/5 rounded-2xl border border-white/10 w-fit">
            <button
              onClick={() => setActiveTab('impressum')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'impressum'
                  ? 'bg-white text-black font-semibold shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>⚖️</span>
              <span>{tUI.tabImpressum}</span>
            </button>

            <button
              onClick={() => setActiveTab('privacy')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'privacy'
                  ? 'bg-white text-black font-semibold shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>🛡️</span>
              <span>{tUI.tabPrivacy}</span>
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm text-gray-300 leading-relaxed font-sans">
          
          {/* TAB 1: IMPRESSUM */}
          {activeTab === 'impressum' && (
            <div className="space-y-6">
              
              {/* Quick Company Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">
                    {language === 'de' ? 'Unternehmen' : language === 'tr' ? 'Şirket Adı' : 'Company'}
                  </div>
                  <div className="text-lg font-medium text-white">Lafidan Bauunternehmen UG</div>
                  <div className="text-xs text-gray-400 font-mono mt-0.5">(haftungsbeschränkt)</div>
                  
                  <div className="mt-4 text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">
                    {language === 'de' ? 'Geschäftsanschrift' : language === 'tr' ? 'Adres' : 'Registered Address'}
                  </div>
                  <div className="text-sm text-gray-200">
                    Bundesallee 187<br />
                    10717 Berlin<br />
                    Deutschland
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">
                    {language === 'de' ? 'Vertreten durch' : language === 'tr' ? 'Temsilci / Yönetici' : 'Represented by'}
                  </div>
                  <div className="text-base text-white font-medium">Fatemeh Eyvazi</div>
                  <div className="text-xs text-gray-400">Geschäftsführerin / Managing Director</div>

                  <div className="mt-4 text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">
                    {language === 'de' ? 'Steuerliche Angaben' : language === 'tr' ? 'Vergi Bilgileri' : 'Tax Details'}
                  </div>
                  <div className="text-sm text-gray-200 font-mono">
                    Steuernummer: 29/418/31172<br />
                    Finanzamt Berlin
                  </div>
                </div>
              </div>

              {/* Direct Contact Options */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-gray-400 uppercase">
                    {language === 'de' ? 'Direkter Kontakt' : language === 'tr' ? 'Doğrudan İletişim' : 'Direct Contact'}
                  </div>
                  <div className="text-sm text-white mt-1 flex flex-wrap items-center gap-4">
                    <a href="tel:+491708853978" className="hover:text-[#e5c158] transition-colors underline font-mono">
                      +49 170 8853978
                    </a>
                    <span className="text-gray-600">•</span>
                    <a href="mailto:Lafidanug@gmail.com" className="hover:text-[#e5c158] transition-colors underline font-mono">
                      Lafidanug@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => copyToClipboard('Lafidanug@gmail.com', 'email')}
                    className="px-3 py-1.5 rounded-lg text-xs bg-white/10 hover:bg-white hover:text-black transition-colors cursor-pointer"
                  >
                    {copied === 'email' ? tUI.copiedText : (language === 'de' ? 'E-Mail kopieren' : language === 'tr' ? 'E-Posta Kopyala' : 'Copy Email')}
                  </button>
                  <button
                    onClick={() => copyToClipboard('+491708853978', 'phone')}
                    className="px-3 py-1.5 rounded-lg text-xs bg-white/10 hover:bg-white hover:text-black transition-colors cursor-pointer"
                  >
                    {copied === 'phone' ? tUI.copiedText : (language === 'de' ? 'Telefon kopieren' : language === 'tr' ? 'Telefon Kopyala' : 'Copy Phone')}
                  </button>
                </div>
              </div>

              {/* Content Sections */}
              <div className="space-y-5 text-xs sm:text-sm">
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    {language === 'de' ? 'Angaben gemäß § 5 DDG (ehemals TMG)' : language === 'tr' ? 'Alman Dijital Hizmetler Yasası (§ 5 DDG) Uyarınca Bilgiler' : 'Information according to § 5 DDG (German Digital Services Act)'}
                  </h4>
                  <p className="text-gray-300">
                    Lafidan Bauunternehmen UG (haftungsbeschränkt)<br />
                    Bundesallee 187, 10717 Berlin, Deutschland<br />
                    Vertreten durch die Geschäftsführerin: Fatemeh Eyvazi
                  </p>
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    {language === 'de' ? 'Unternehmensgegenstand & Tätigkeitsbereich' : language === 'tr' ? 'Faaliyet Alanı ve Hizmet Kapsamı' : 'Business Scope & Construction Services'}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {language === 'de' ? (
                      'Ausführung von Hoch- und Innenausbauarbeiten, handwerkliche Baudienstleistungen, Trockenbau, hochwertige Spachtelarbeiten der Qualitätsstufen Q1 bis Q4, Fliesen-, Platten- und Natursteinarbeiten, Maler- und Lackierarbeiten, Komplettsanierung, energetische und bauliche Modernisierung, schlüsselfertige Übergabe, Architektur- und Innenarchitekturplanung, Möbelbeschaffung sowie fachgerechte Montage.'
                    ) : language === 'tr' ? (
                      'İnşaat, anahtar teslim iç mekan tadilatı, alçıpan ve bölme duvar sistemleri, Q1–Q4 kalite seviyelerinde macun ve sıva işleri, boya ve badana, seramik, fayans ve doğal taş kaplama, komple bina renovasyonu ve modernizasyon, mimari ve iç mimari proje tasarımı, mobilya tedarik ve montaj hizmetleri.'
                    ) : (
                      'Execution of structural and interior construction works, drywall systems, premium surface finishing (Q1 to Q4), tile and natural stone installation, painting and decorating, complete renovation and modernization, turnkey completion, architectural and interior design planning, furniture procurement and assembly.'
                    )}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    {language === 'de' ? 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV' : language === 'tr' ? 'İçerikten Sorumlu Kişi (§ 18 Abs. 2 MStV)' : 'Responsible for Editorial Content (§ 18 Para. 2 MStV)'}
                  </h4>
                  <p className="text-gray-300">
                    Fatemeh Eyvazi<br />
                    Bundesallee 187, 10717 Berlin, Deutschland
                  </p>
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    {language === 'de' ? 'EU-Streitschlichtung & Verbraucherstreitbeilegung' : language === 'tr' ? 'Tüketici Uyuşmazlık Çözümü' : 'Dispute Resolution'}
                  </h4>
                  <div className="text-gray-300 leading-relaxed">
                    {language === 'de' ? (
                      <div>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                          https://ec.europa.eu/consumers/odr/
                        </a>
                        .<br />
                        Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
                      </div>
                    ) : language === 'tr' ? (
                      <div>
                        Avrupa Komisyonu çevrimiçi uyuşmazlık çözümü (OS) platformu sunmaktadır:{' '}
                        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                          https://ec.europa.eu/consumers/odr/
                        </a>
                        . Tüketici tahkim kurulundaki bir uyuşmazlık çözüm prosedürüne katılma zorunluluğumuz veya niyetimiz bulunmamaktadır.
                      </div>
                    ) : (
                      <div>
                        The European Commission provides a platform for online dispute resolution (ODR):{' '}
                        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                          https://ec.europa.eu/consumers/odr/
                        </a>
                        . We are not obliged or willing to participate in dispute resolution proceedings before a consumer arbitration board.
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    {language === 'de' ? 'Haftung für Inhalte und Links' : language === 'tr' ? 'İçerik ve Bağlantı Sorumluluğu' : 'Liability for Content and External Links'}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {language === 'de' ? (
                      'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.'
                    ) : language === 'tr' ? (
                      'Hizmet sağlayıcı olarak, genel yasalara uygun olarak bu sayfalardaki kendi içeriklerimizden sorumluyuz. Ancak aktarılan veya depolanan üçüncü taraf bilgilerini denetleme yükümlülüğümüz bulunmamaktadır. İhlallerden haberdar olunduğunda ilgili içerikler derhal kaldırılacaktır.'
                    ) : (
                      'As a service provider, we are responsible for our own content on these pages under general laws. We are not obligated to monitor transmitted or stored third-party information. Upon becoming aware of specific legal violations, we will remove such content immediately.'
                    )}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    {language === 'de' ? 'Urheberrecht' : language === 'tr' ? 'Telif Hakkı' : 'Copyright'}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {language === 'de' ? (
                      'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.'
                    ) : language === 'tr' ? (
                      'Bu sayfalardaki içerikler ve çalışmalar telif hakkı yasalarına tabidir. Çoğaltma, işleme ve her türlü dağıtım hak sahibinin yazılı iznini gerektirir.'
                    ) : (
                      'The content and works published on this website are governed by the copyright laws of Germany. Any duplication, processing, or distribution requires prior written consent.'
                    )}
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: DATENSCHUTZ (PRIVACY POLICY / GDPR) */}
          {activeTab === 'privacy' && (
            <div className="space-y-6">
              
              {/* Privacy Highlights Banner */}
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-100">
                <div className="flex items-center gap-2 font-medium text-emerald-300 text-sm mb-2">
                  <span>🔒</span>
                  <span>{language === 'de' ? 'Datenschutz auf einen Blick' : language === 'tr' ? 'Bir Bakışta Gizlilik' : 'Privacy at a Glance'}</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                  {language === 'de' ? (
                    'Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO, BDSG, TDDDG) sowie dieser Datenschutzerklärung. Ihre Daten werden niemals ohne Ihre ausdrückliche Zustimmung an unbefugte Dritte weitergegeben.'
                  ) : language === 'tr' ? (
                    'Kişisel verileriniz gizli tutulmakta ve yürürlükteki veri koruma mevzuatına (GDPR/KVKK) uygun olarak işlenmektedir. Bilgileriniz izniniz olmadan üçüncü kişilerle asla paylaşılmaz.'
                  ) : (
                    'We treat your personal data confidentially and strictly in accordance with statutory data protection regulations (GDPR, BDSG, TDDDG) and this privacy policy. Your data is never sold or shared with unauthorized third parties.'
                  )}
                </p>
              </div>

              {/* Section 1: Responsible Controller */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <h4 className="text-base font-semibold text-white">
                  1. {language === 'de' ? 'Verantwortliche Stelle gem. Art. 4 Abs. 7 DSGVO' : language === 'tr' ? 'Veri Sorumlusu (Controller)' : 'Data Controller (Art. 4(7) GDPR)'}
                </h4>
                <div className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  <p className="font-medium text-white">Lafidan Bauunternehmen UG (haftungsbeschränkt)</p>
                  <p>Bundesallee 187, 10717 Berlin, Deutschland</p>
                  <p>Geschäftsführung: Fatemeh Eyvazi • St.-Nr.: 29/418/31172</p>
                  <p className="font-mono mt-2">
                    E-Mail:{' '}
                    <a href="mailto:Lafidanug@gmail.com" className="text-white hover:underline">
                      Lafidanug@gmail.com
                    </a>{' '}
                    • Tel:{' '}
                    <a href="tel:+491708853978" className="text-white hover:underline">
                      +49 170 8853978
                    </a>
                  </p>
                </div>
              </div>

              {/* Section 2: Data Collection on this Website */}
              <div className="space-y-4">
                <h4 className="text-base font-semibold text-white">
                  2. {language === 'de' ? 'Datenerfassung auf unserer Website' : language === 'tr' ? 'Web Sitemizde Veri Toplama' : 'Data Collection on Our Website'}
                </h4>

                {/* Sub-item: Server Log Files */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm">
                  <h5 className="font-medium text-white mb-1">
                    {language === 'de' ? 'Server-Log-Dateien' : language === 'tr' ? 'Sunucu Günlük Dosyaları' : 'Server Log Files'}
                  </h5>
                  <p className="text-gray-300 leading-relaxed">
                    {language === 'de' ? (
                      'Beim Aufrufen unserer Website erfasst der Webserver automatisch technische Daten in Server-Logfiles: Browsertyp und -version, verwendetes Betriebssystem, Referrer URL (die zuvor besuchte Seite), IP-Adresse des anfragenden Rechners sowie Datum und Uhrzeit der Serveranfrage. Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der technisch fehlerfreien Bereitstellung und Stabilität unserer Website.'
                    ) : language === 'tr' ? (
                      'Web sitemizi ziyaret ettiğinizde sunucu otomatik olarak teknik günlük dosyaları toplar: Tarayıcı türü, işletim sistemi, yönlendiren URL, IP adresi ve erişim saati. Bu veriler GDPR Madde 6(1)(f) uyarınca sitemizin teknik güvenliğini sağlamak amacıyla işlenir.'
                    ) : (
                      'When accessing our website, the server automatically collects and stores technical log files: browser type and version, operating system, referrer URL, host IP address, and timestamp of the request. Processing is based on Art. 6(1)(f) GDPR for legitimate operational and security interests.'
                    )}
                  </p>
                </div>

                {/* Sub-item: Contact Inquiries */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm">
                  <h5 className="font-medium text-white mb-1">
                    {language === 'de' ? 'Kontaktformular & Anfragen per E-Mail / Telefon' : language === 'tr' ? 'İletişim Formu, E-Posta ve Telefon Talepleri' : 'Contact Form & Inquiries via Email / Phone'}
                  </h5>
                  <p className="text-gray-300 leading-relaxed">
                    {language === 'de' ? (
                      'Wenn Sie uns über das Kontaktformular, per E-Mail oder telefonisch Anfragen zukommen lassen, werden Ihre Angaben (Name, E-Mail-Adresse, Telefonnummer, Art des Projekts und Ihre Nachricht) zur Bearbeitung der Anfrage und für etwaige Folgefragen gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO. Die Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern oder der Zweck der Speicherung entfällt.'
                    ) : language === 'tr' ? (
                      'İletişim formu, e-posta veya telefonla tarafımıza ulaştığınızda, paylaştığınız iletişim ve proje bilgileri talebinizin yanıtlanması amacıyla saklanır (GDPR Madde 6(1)(b) ve (f)). Bilgileriniz talep sonlandığında veya yasal saklama süreleri dolduğunda silinir.'
                    ) : (
                      'When you submit an inquiry via our contact form, email, or telephone, the submitted details (name, email, phone number, project type, message) are stored to process your request and handle follow-up questions. Legal basis: Art. 6(1)(b) and Art. 6(1)(f) GDPR.'
                    )}
                  </p>
                </div>
              </div>

              {/* Section 3: Data Subject Rights (DSGVO) */}
              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">
                  3. {language === 'de' ? 'Ihre Rechte als betroffene Person' : language === 'tr' ? 'İlgili Kişi Haklarınız (GDPR Hakları)' : 'Your Rights as a Data Subject'}
                </h4>
                <p className="text-xs sm:text-sm text-gray-300">
                  {language === 'de' ? (
                    'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:'
                  ) : language === 'tr' ? (
                    'Yasal mevzuat uyarınca dilediğiniz zaman aşağıdaki haklara sahipsiniz:'
                  ) : (
                    'Under applicable GDPR provisions, you have the right at any time to:'
                  )}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                    <div className="font-semibold text-white mb-1">
                      {language === 'de' ? 'Auskunftsrecht (Art. 15 DSGVO)' : language === 'tr' ? 'Bilgi Edinme (Art. 15)' : 'Access (Art. 15 GDPR)'}
                    </div>
                    <div className="text-gray-400">
                      {language === 'de' ? 'Kostenlose Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten Daten.' : 'Right to receive information about your stored personal data.'}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                    <div className="font-semibold text-white mb-1">
                      {language === 'de' ? 'Berichtigung (Art. 16 DSGVO)' : language === 'tr' ? 'Düzeltme (Art. 16)' : 'Rectification (Art. 16 GDPR)'}
                    </div>
                    <div className="text-gray-400">
                      {language === 'de' ? 'Recht auf unverzügliche Berichtigung unrichtiger Daten.' : 'Right to obtain without undue delay the rectification of inaccurate data.'}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                    <div className="font-semibold text-white mb-1">
                      {language === 'de' ? 'Löschung (Art. 17 DSGVO)' : language === 'tr' ? 'Silme (Art. 17)' : 'Erasure (Art. 17 GDPR)'}
                    </div>
                    <div className="text-gray-400">
                      {language === 'de' ? 'Recht auf Löschung („Recht auf Vergessenwerden“), sofern keine gesetzlichen Aufbewahrungsfristen entgegenstehen.' : 'Right to request the deletion of your personal data.'}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                    <div className="font-semibold text-white mb-1">
                      {language === 'de' ? 'Einschränkung & Widerspruch' : language === 'tr' ? 'Kısıtlama & İtiraz' : 'Restriction & Objection'}
                    </div>
                    <div className="text-gray-400">
                      {language === 'de' ? 'Recht auf Einschränkung der Verarbeitung (Art. 18) sowie Widerspruch (Art. 21 DSGVO).' : 'Right to restriction (Art. 18) and objection to processing (Art. 21).'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Supervisory Authority */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs sm:text-sm">
                <h4 className="font-semibold text-white">
                  4. {language === 'de' ? 'Beschwerderecht bei der zuständigen Aufsichtsbehörde' : language === 'tr' ? 'Denetim Makamına Şikayet Hakkı' : 'Right to Lodge a Complaint with a Supervisory Authority'}
                </h4>
                <div className="text-gray-300 leading-relaxed">
                  {language === 'de' ? (
                    <div>
                      Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu. Die für uns zuständige Landesdatenschutzbehörde ist:<br />
                      <strong className="text-white">Berliner Beauftragte für Datenschutz und Informationsfreiheit</strong><br />
                      Alt-Moabit 59-61, 10555 Berlin<br />
                      Webseite:{' '}
                      <a href="https://www.datenschutz-berlin.de" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                        https://www.datenschutz-berlin.de
                      </a>
                    </div>
                  ) : language === 'tr' ? (
                    <div>
                      Veri koruma ihlali durumunda yetkili denetim makamına şikayette bulunma hakkınız vardır. Yetkili kurum: <strong>Berliner Beauftragte für Datenschutz und Informationsfreiheit</strong>, Alt-Moabit 59-61, 10555 Berlin.
                    </div>
                  ) : (
                    <div>
                      In the event of GDPR infringements, data subjects have the right to lodge a complaint with a supervisory authority. The competent authority is: <strong>Berlin Commissioner for Data Protection and Freedom of Information</strong>, Alt-Moabit 59-61, 10555 Berlin, Germany.
                    </div>
                  )}
                </div>
              </div>

              {/* Section 5: Encryption & Security */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm">
                <h4 className="font-semibold text-white mb-1">
                  5. {language === 'de' ? 'SSL- bzw. TLS-Verschlüsselung' : language === 'tr' ? 'SSL / TLS Şifrelemesi' : 'SSL / TLS Encryption'}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {language === 'de' ? (
                    'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.'
                  ) : language === 'tr' ? (
                    'Bu site, güvenlik nedenleriyle ve gizli içeriklerin iletimini korumak için SSL/TLS şifrelemesi kullanır.'
                  ) : (
                    'For security reasons and to protect the transmission of confidential content, this site uses SSL/TLS encryption. You can recognize an encrypted connection by the "https://" protocol and the lock icon in your browser.'
                  )}
                </p>
              </div>

            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-black/40 flex items-center justify-between flex-shrink-0">
          <div className="text-xs text-gray-500 font-mono hidden sm:block">
            {activeTab === 'impressum' ? '§ 5 DDG & § 18 MStV konform' : 'DSGVO & BDSG konform'}
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={() => setActiveTab(activeTab === 'impressum' ? 'privacy' : 'impressum')}
              className="px-4 py-2 rounded-xl text-xs font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
            >
              {activeTab === 'impressum' ? `→ ${tUI.tabPrivacy}` : `← ${tUI.tabImpressum}`}
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-white text-black rounded-xl text-xs font-semibold hover:bg-gray-200 transition-colors cursor-pointer shadow-md"
            >
              {tUI.close}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
