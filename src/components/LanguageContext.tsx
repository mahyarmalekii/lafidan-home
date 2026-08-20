import { createContext, useContext, useState, type ReactNode } from 'react';

export type Language = 'de' | 'en' | 'tr';

export const translations = {
  de: {
    brand: {
      name: 'LH Lafidan Home',
      fullName: 'LH Lafidan Home UG',
      tagline: 'Bau · Innenausbau · Architektur · Interior Design',
      slogan: 'Von der ersten Idee bis zur fertigen Umsetzung – alles aus einer Hand.'
    },
    contactInfo: {
      company: 'LH Lafidan Home UG',
      representative: 'Fatemeh Eyvazi',
      address: 'Bundesallee 187',
      zipCity: '10717 Berlin',
      fullAddress: 'Bundesallee 187, 10717 Berlin',
      phone: '0170 8853978',
      phoneDisplay: '0170 8853978',
      phoneHref: 'tel:+491708853978',
      email: 'Lafidanug@gmail.com',
      emailHref: 'mailto:Lafidanug@gmail.com',
      taxNumber: '29/418/31172',
      region: 'Berlin, Brandenburg & bundesweit'
    },
    nav: {
      home: 'Start',
      story: 'Über uns',
      services: 'Leistungen',
      specialization: 'Spezialisierung',
      samples: 'Samples / Projekte',
      whyUs: 'Vorteile',
      contact: 'Kontakt',
      startChat: 'Projekt anfragen'
    },
    hero: {
      heading: 'Räume prägen\nmit Vision und Handwerk.',
      subheading: 'Wir schaffen außergewöhnliche Räume mit Präzision und machen Ihre Vision zur hochwertigen Realität.',
      startChat: 'Projekt anfragen',
      exploreNow: 'Samples ansehen',
      tag: 'Malerei. Spachteltechnik. Fliesenverlegung.'
    },
    story: {
      badge: 'Ganzheitliches Leistungskonzept',
      title: 'Von der ersten Idee bis zur fertigen Umsetzung.',
      p1: 'LH Lafidan Home UG ist ein in Berlin ansässiges Unternehmen für anspruchsvolle Bau-, Innenausbau-, Sanierungs- und Designprojekte. Wir verbinden Planung, Design, handwerkliche Ausführung und Projektkoordination zu einem ganzheitlichen Leistungskonzept.',
      p2: 'Unsere besondere Stärke liegt in der Realisierung hochwertiger und individueller Projekte – von Luxusvillen und exklusiven Wohnimmobilien über Hotels und Restaurants bis hin zu Geschäften, Büros und Gewerbeobjekten.',
      p3: 'Mit langjähriger Erfahrung, einem eingespielten Team und einem hohen Qualitätsanspruch begleiten wir unsere Auftraggeber von der ersten Idee über die Planung und Materialauswahl bis zur fachgerechten Ausführung und Fertigstellung.'
    },
    services: {
      title: 'Unsere Leistungen',
      subtitle: 'Maßgeschneiderte Lösungen für höchste architektonische und handwerkliche Ansprüche.',
      items: [
        {
          id: 'architecture',
          title: 'Architektur & Planung',
          shortDesc: 'Ein erfolgreiches Projekt beginnt mit einer durchdachten Planung und Begleitung von der Konzeptphase bis zur Umsetzung.',
          details: 'Wir unterstützen unsere Kunden bei der Entwicklung individueller Lösungen. Dabei berücksichtigen wir Gestaltung, Funktionalität, Materialien, technische Anforderungen und die individuellen Wünsche unserer Auftraggeber.'
        },
        {
          id: 'interior-design',
          title: 'Innenarchitektur & Interior Design',
          shortDesc: 'Individuelle Innenraumkonzepte, die Ästhetik, Funktionalität und erlesene Materialien perfekt vereinen.',
          details: 'Raum- & Gestaltungskonzepte, Material- & Farbauswahl, Wand- & Deckendesign, Beleuchtungskonzepte, Möbelkonzepte, Hotelzimmer, Lobbys, Restaurants, Ladenflächen und Luxusvillen.'
        },
        {
          id: 'drywall-fitout',
          title: 'Innenausbau',
          shortDesc: 'Komplette Innenausbauarbeiten für Neubauten, Bestandsimmobilien und Renovierungsprojekte mit koordinierter Gewerkeabwicklung.',
          details: 'Trockenbau, Decken- & Wandsysteme, abgehängte Decken, Akustiklösungen, Fliesenarbeiten, Natursteinarbeiten, Parkett- & Bodenbeläge, individuelle Oberflächen und Möbelmontage.'
        },
        {
          id: 'skimming-q1-q4',
          title: 'Spachtelarbeiten Q1–Q4',
          shortDesc: 'Hochwertige Oberflächen in den Qualitätsstufen Q1 bis Q4 für absolut makellose Wand- und Deckenflächen.',
          details: 'Hochwertige Oberflächen sind ein entscheidender Bestandteil eines professionellen Innenausbaus. Von Standardoberflächen bis zu besonders glatten und hochwertigen Flächen für Villen, Hotels und repräsentative Gewerbeflächen.'
        },
        {
          id: 'painting-walls',
          title: 'Malerarbeiten & exklusive Wandgestaltung',
          shortDesc: 'Klassische Malerarbeiten, hochwertige Spachteltechniken, Struktur- & Designwände für besondere Innenräume.',
          details: 'Innenanstriche, Lackierarbeiten, hochwertige Spachteltechniken, dekorative Wandtechniken, Design- und Akzentwände sowie repräsentative Wandgestaltungen für Lobbys, Restaurants und Luxusimmobilien.'
        },
        {
          id: 'renovation',
          title: 'Sanierung & Renovierung',
          shortDesc: 'Professionelle Komplettsanierung und Modernisierung von Wohn- und Gewerbeimmobilien.',
          details: 'Von einzelnen Räumen bis zur umfangreichen Modernisierung eines gesamten Objekts koordinieren wir alle Gewerke, um bestehende Immobilien technisch und optisch auf höchstes Niveau zu heben.'
        },
        {
          id: 'villas',
          title: 'Luxusvillen & exklusive Wohnprojekte',
          shortDesc: 'Design und schlüsselfertige Umsetzung hochkarätiger Privatresidenzen und Villen mit höchster handwerklicher Präzision.',
          details: 'Individuelle Architekturkonzepte, edelste Natursteine, maßgefertigte Möbel, exklusive Beleuchtung, Luxusbäder und anspruchsvolle Sonderanfertigungen.'
        },
        {
          id: 'hospitality',
          title: 'Hotels & Hospitality',
          shortDesc: 'Komplette Planung, Ausbau, Renovierung und schlüsselfertige Ausstattung für Hotels und Serviced Apartments.',
          details: 'Zimmer & Suiten, Lobbys, Flure, Bars & Restaurants, Wand- & Deckendesign, Trockenbau, Malerarbeiten, Beleuchtungskonzepte sowie maßgeschneiderte Hotelmöbel, Betten, Textilien und Montage.'
        },
        {
          id: 'retail',
          title: 'Ladenbau & Retail',
          shortDesc: 'Markenadäquate Retailflächen, Boutiquen, Showrooms und Verkaufsräume mit bleibendem Eindruck.',
          details: 'Shops, Boutiquen, Showrooms, Empfangsbereiche und Beauty-/Wellnessflächen: Trockenbau, Bodenbeläge, Lichtdesign, dekorative Wände und individuelle Möbelierung aus einer Hand.'
        },
        {
          id: 'gastronomy',
          title: 'Restaurants & Gastronomie',
          shortDesc: 'Stimmungsvolle Gastronomiekonzepte, bei denen Atmosphäre, Design und Betriebsabläufe perfekt harmonieren.',
          details: 'Ganzheitliche Umsetzung von Restaurants, Bars und Cafés – von Wand- und Deckeninszenierungen über strapazierfähige Böden bis hin zu Thekenanlagen und maßgeschneidertem Mobiliar.'
        },
        {
          id: 'custom-furniture',
          title: 'Möbel & individuelle Sonderanfertigungen',
          shortDesc: 'Planung und Fertigung individueller Möbelstücke, Hotelbetten, Einbauschränke und Empfangstheken.',
          details: 'Betten, Kopfteile, Sofas, Sessel, Tische, Schränke, Einbaumöbel, Empfangstresen, Gastronomiemöbel, Vorhänge, Textilien und individuelle Spezialanfertigungen.'
        },
        {
          id: 'turkey-procurement',
          title: 'Beschaffung aus der Türkei',
          shortDesc: 'Direkter Bezug ausgewählter Möbel, Materialien und Innenausstattung von führenden Herstellern in der Türkei.',
          details: 'Ein herausragender wirtschaftlicher und gestalterischer Vorteil: Erstklassige Qualität, maximale Individualisierung, direkte Lieferlogistik und fachgerechte Montage in Deutschland für Großprojekte wie Hotels, Restaurants und Villen.'
        },
        {
          id: 'one-stop',
          title: 'Projektabwicklung aus einer Hand',
          shortDesc: 'Ein zentraler Ansprechpartner für Beratung, Planung, Design, Materialauswahl, Ausbau, Montage und Übergabe.',
          details: 'Beratung → Planung → Design → Materialauswahl → Innenausbau → Renovierung → Ausstattung → Montage → Fertigstellung. Klare Prozesse, terminsicher und transparent.'
        }
      ]
    },
    specialization: {
      title: 'Unsere Spezialisierung',
      subtitle: 'Präzision und Leidenschaft für anspruchsvolle Objektbereiche.',
      items: [
        'Luxusvillen',
        'Hochwertige Wohnungen',
        'Mehrfamilienhäuser',
        'Hotels',
        'Serviced Apartments',
        'Restaurants & Cafés',
        'Geschäfte & Boutiquen',
        'Retailflächen',
        'Büros & Arbeitswelten',
        'Gewerbeimmobilien',
        'Empfangs- und Lobbybereiche',
        'Neubauprojekte',
        'Sanierungs- und Renovierungsprojekte'
      ]
    },
    whyUs: {
      title: 'Warum LH Lafidan Home?',
      subtitle: 'Sechs überzeugende Gründe für eine erfolgreiche Zusammenarbeit.',
      pillars: [
        {
          title: 'Langjährige Erfahrung',
          desc: 'Fundierte Bau- und Innenausbau-Expertise bildet die Basis für eine lösungsorientierte und reibungslose Projektabwicklung.'
        },
        {
          title: 'Höchste Qualität',
          desc: 'Wir setzen kompromisslos auf erstklassige Materialien, saubere Verarbeitung und Liebe zum Detail bis zur Qualitätsstufe Q4.'
        },
        {
          title: 'Alles aus einer Hand',
          desc: 'Design, Planung, Handwerk, Beschaffung und Möblierung werden zentral koordiniert – Sie haben nur einen kompetenten Ansprechpartner.'
        },
        {
          title: 'Maximale Flexibilität',
          desc: 'Jedes Bauvorhaben ist einzigartig. Wir passen uns agil an individuelle Wünsche, Terminlagen und Bauherrenbedürfnisse an.'
        },
        {
          title: 'Zuverlässigkeit & Termintreue',
          desc: 'Transparente Kommunikation, strukturierte Bauzeitenpläne und verlässliche Absprachen garantieren planbare Sicherheit.'
        },
        {
          title: 'Türkei-Netzwerk & Beschaffung',
          desc: 'Direkter Zugriff auf renommierte Hersteller ermöglicht exklusive Sonderanfertigungen zu hochattraktiven Konditionen.'
        }
      ]
    },
    clients: {
      title: 'Für private und gewerbliche Auftraggeber',
      subtitle: 'Wir stehen sowohl für Gesamtprojekte als auch für die Übernahme einzelner Gewerke zur Verfügung.',
      list: [
        'Private Bauherren',
        'Investoren',
        'Projektentwickler',
        'Bauträger',
        'Generalunternehmer',
        'Architekten & Planer',
        'Immobiliengesellschaften',
        'Hotelbetreiber',
        'Gastronomiebetriebe',
        'Gewerbliche Auftraggeber'
      ]
    },
    samples: {
      pageTitle: 'Samples & Projekte',
      pageSubtitle: 'Entdecken Sie unsere realisierten Bau-, Ausbau- und Designprojekte in Berlin und Umgebung.',
      allCategories: 'Alle Projekte',
      photosCount: 'Fotos & Medien',
      viewGallery: 'Galerie öffnen',
      viewDetails: 'Projektdetails',
      closeModal: 'Schließen',
      prevMedia: 'Vorheriges',
      nextMedia: 'Nächstes',
      testimonialBadge: 'Kundenstimme & Referenz',
      featuredProject: 'Projekt-Spotlight',
      clientLabel: 'Auftraggeber',
      locationLabel: 'Standort',
      yearLabel: 'Jahr',
      scopeLabel: 'Leistungen',
      allMediaTitle: 'Projektfotos & Videos'
    },
    charlottenburgTestimonial: {
      title: 'Projekt-Referenz: Büroausbau Charlottenburg',
      quote: '„LH Lafidan Home hat unseren Büroausbau in Charlottenburg mit herausragender Präzision und erstklassigem Design verwirklicht. Von den perfekten Q4-Spachtelarbeiten bis hin zu den individuellen Wandgestaltungen und maßgefertigten Details – absolut professionell, termintreu und meisterhaft.“',
      author: 'Charlotte Tim Berg',
      role: 'Projektleitung & Auftraggeber Charlottenburg'
    },
    process: {
      title: 'Unser Ablauf',
      subtitle: 'Strukturiert. Transparent. Termingetreu.',
      steps: [
        { title: '1. Beratung & Konzept', desc: 'Wir erfassen Ihre Vision, Vorstellungen und Anforderungen in einem ersten persönlichen Gespräch.' },
        { title: '2. Planung & Materialauswahl', desc: 'Detaillierte Ausführungsplanung, 3D-Visualisierung und Auswahl hochwertiger Materialien.' },
        { title: '3. Handwerk & Koordination', desc: 'Fachgerechte Umsetzung aller Gewerke durch Meisterhand unter zentraler Bauleitung.' },
        { title: '4. Abnahme & Schlüsselübergabe', desc: 'Gemeinsame Endkontrolle für absolute Perfektion und termingerechte Übergabe.' }
      ]
    },
    cta: {
      title: 'Ihr Projekt. Unsere Erfahrung.',
      subtitle: 'Sie planen einen Neubau, eine Renovierung oder einen hochwertigen Innenausbau?',
      desc: 'LH Lafidan Home begleitet Sie von der ersten Idee bis zur fertigen Umsetzung. Planung. Design. Innenausbau. Renovierung. Ausstattung. Alles aus einer Hand.',
      button: 'Jetzt unverbindlich anfragen'
    },
    contactSection: {
      title: 'Kontakt & Standort',
      subtitle: 'Sprechen Sie direkt mit uns über Ihr anstehendes Vorhaben.',
      callNow: 'Jetzt anrufen',
      sendEmail: 'E-Mail senden',
      whatsApp: 'WhatsApp schreiben',
      addressTitle: 'Unser Standort',
      formTitle: 'Projektanfrage senden',
      nameLabel: 'Ihr Name',
      emailLabel: 'Ihre E-Mail-Adresse',
      phoneLabel: 'Ihre Telefonnummer',
      projectTypeLabel: 'Projektart',
      messageLabel: 'Ihre Nachricht / Projektbeschreibung',
      submitButton: 'Anfrage absenden',
      successMessage: 'Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.',
      legalInfoTitle: 'Unternehmensangaben'
    },
    footer: {
      rights: 'LH Lafidan Home UG. Alle Rechte vorbehalten.',
      impressum: 'Impressum & Datenschutz',
      taxNote: 'St.-Nr.: 29/418/31172'
    }
  },
  en: {
    brand: {
      name: 'LH Lafidan Home',
      fullName: 'LH Lafidan Home UG',
      tagline: 'Construction · Interior Fit-Out · Architecture · Interior Design',
      slogan: 'From initial concept to turnkey completion – all from a single source.'
    },
    contactInfo: {
      company: 'LH Lafidan Home UG',
      representative: 'Fatemeh Eyvazi',
      address: 'Bundesallee 187',
      zipCity: '10717 Berlin, Germany',
      fullAddress: 'Bundesallee 187, 10717 Berlin, Germany',
      phone: '+49 170 8853978',
      phoneDisplay: '0170 8853978',
      phoneHref: 'tel:+491708853978',
      email: 'Lafidanug@gmail.com',
      emailHref: 'mailto:Lafidanug@gmail.com',
      taxNumber: '29/418/31172',
      region: 'Berlin, Brandenburg & nationwide'
    },
    nav: {
      home: 'Home',
      story: 'About Us',
      services: 'Services',
      specialization: 'Specialization',
      samples: 'Samples / Projects',
      whyUs: 'Why Us',
      contact: 'Contact',
      startChat: 'Request Project'
    },
    hero: {
      heading: 'Shaping spaces\nwith vision and craft.',
      subheading: 'We craft exceptional spaces with precision, turning your vision into high-end reality.',
      startChat: 'Request Project',
      exploreNow: 'Explore Now',
      tag: 'Painting. Skimming. Tiling.'
    },
    story: {
      badge: 'Holistic Service Concept',
      title: 'From initial concept to turnkey completion.',
      p1: 'LH Lafidan Home UG is a Berlin-based company specializing in high-end construction, interior fit-out, renovation, and architectural design projects. We integrate planning, design, master craft execution, and turnkey project coordination into a unified service concept.',
      p2: 'Our key strength lies in realizing prestigious and bespoke projects – from luxury villas and prime private residences to hotels, restaurants, retail flagship stores, and commercial headquarters.',
      p3: 'With years of experience, a synchronized team of master craftsmen, and an uncompromising commitment to quality, we guide our clients through every stage: concept, planning, material selection, precision execution, and final handover.'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Tailored solutions engineered to the highest architectural and craftsmanship standards.',
      items: [
        {
          id: 'architecture',
          title: 'Architecture & Planning',
          shortDesc: 'A successful project begins with deliberate planning and expert guidance from concept phase to physical realization.',
          details: 'We support our clients in developing custom solutions, accounting for aesthetics, functional flow, material durability, structural requirements, and client aspirations.'
        },
        {
          id: 'interior-design',
          title: 'Interior Architecture & Design',
          shortDesc: 'Bespoke interior concepts seamlessly blending aesthetics, ergonomics, and fine materials.',
          details: 'Spatial layout planning, color & material palettes, custom ceiling & wall architecture, lighting design, bespoke furniture concepts, hotel rooms, suites, lobbies, restaurants, and luxury villas.'
        },
        {
          id: 'drywall-fitout',
          title: 'Interior Construction & Fit-Out',
          shortDesc: 'Full-scope interior fit-out for new builds, existing properties, and complex refurbishments with streamlined trade management.',
          details: 'Drywall partitioning, wall & ceiling systems, suspended ceilings, acoustic engineering, master tiling, natural stone masonry, parquet & flooring, and custom cabinetry installation.'
        },
        {
          id: 'skimming-q1-q4',
          title: 'Skimming & Plastering Q1–Q4',
          shortDesc: 'Master-level surface preparation across quality standards Q1 to Q4 for glass-smooth walls and ceilings.',
          details: 'Flawless wall finishes are the hallmark of luxury interiors. From standard smooth surfaces to ultra-refined Q4 finishes for prestigious villas, boutique hotels, and corporate executive suites.'
        },
        {
          id: 'painting-walls',
          title: 'Painting & Exclusive Wall Design',
          shortDesc: 'Classic interior painting, luxury skim coatings, structured finishes, and architectural feature walls.',
          details: 'High-end interior paints, lacquer work, Venetian plaster, textured micro-coatings, signature accent walls, and statement surfaces for hospitality lobbies and luxury private estates.'
        },
        {
          id: 'renovation',
          title: 'Renovation & Refurbishment',
          shortDesc: 'Turnkey renovation, modernization, and value appreciation for residential and commercial real estate.',
          details: 'From single-room transformations to comprehensive full-building rehabilitations, we coordinate all trades to elevate properties structurally, aesthetically, and technically.'
        },
        {
          id: 'villas',
          title: 'Luxury Villas & Exclusive Residences',
          shortDesc: 'Design and master execution of prestigious private estates with uncompromising craftsmanship.',
          details: 'Bespoke architectural styling, imported natural stone, custom joinery, integrated ambient lighting, spa-grade wellness bathrooms, and tailor-made architectural features.'
        },
        {
          id: 'hospitality',
          title: 'Hotels & Hospitality',
          shortDesc: 'End-to-end fit-out, renovation, and turnkey FF&E furnishing for hotels and serviced apartments.',
          details: 'Guestrooms & suites, lobby & reception spaces, corridors, restaurants, bars & lounges, custom headboards, bespoke built-in furniture, textiles, curtains, and professional on-site assembly.'
        },
        {
          id: 'retail',
          title: 'Retail & Store Build-Out',
          shortDesc: 'Brand-centric retail spaces, boutiques, and showrooms designed to leave a lasting customer impression.',
          details: 'Boutiques, showrooms, beauty & wellness facilities, and commercial shops: drywalling, flooring, architectural lighting, wall paneling, and custom retail display fixtures.'
        },
        {
          id: 'gastronomy',
          title: 'Restaurants & Gastronomie',
          shortDesc: 'Atmospheric dining and hospitality environments where ambiance, design, and kitchen workflows harmonize.',
          details: 'Full-scope execution of fine dining restaurants, cafes, and bars – encompassing ceiling installations, high-durability flooring, custom bar counters, and tailored furniture.'
        },
        {
          id: 'custom-furniture',
          title: 'Custom Furniture & Bespoke Millwork',
          shortDesc: 'Design, fabrication, and installation of custom cabinetry, hotel beds, counters, and decorative joinery.',
          details: 'Beds, custom headboards, sofas, lounge chairs, dining tables, wardrobe systems, reception desks, hospitality furniture, drapery, and unique architectural joinery.'
        },
        {
          id: 'turkey-procurement',
          title: 'Procurement from Turkey',
          shortDesc: 'Direct sourcing of curated furniture, custom millwork, and premium finishes directly from leading Turkish manufacturers.',
          details: 'A tremendous design and cost advantage for our clients: direct manufacturer sourcing, high customization flexibility, complete shipping coordination, and precision installation across Germany.'
        },
        {
          id: 'one-stop',
          title: 'Single-Source Project Delivery',
          shortDesc: 'A single dedicated point of contact for consulting, design, procurement, construction, and handover.',
          details: 'Consultation → Planning → Design → Material Selection → Interior Fit-Out → Renovation → Furnishing → Assembly → Handover. Clear, reliable, and transparent.'
        }
      ]
    },
    specialization: {
      title: 'Our Specialization',
      subtitle: 'Precision engineering and passion for high-demand sectors.',
      items: [
        'Luxury Villas',
        'High-End Apartments',
        'Multi-Family Residences',
        'Hotels & Resorts',
        'Serviced Apartments',
        'Restaurants & Cafes',
        'Boutiques & Retail Shops',
        'Commercial Showrooms',
        'Offices & Corporate Spaces',
        'Commercial Real Estate',
        'Lobby & Reception Areas',
        'New Construction Projects',
        'Full Modernization & Refurbishment'
      ]
    },
    whyUs: {
      title: 'Why LH Lafidan Home?',
      subtitle: 'Six compelling pillars for a seamless, successful collaboration.',
      pillars: [
        {
          title: 'Decades of Experience',
          desc: 'Extensive construction and fit-out expertise ensures proactive problem-solving and structured project coordination.'
        },
        {
          title: 'Uncompromising Quality',
          desc: 'We use premium materials and execute with meticulous attention to detail up to perfectionist Q4 surface standards.'
        },
        {
          title: 'All Under One Roof',
          desc: 'Design, planning, craft trades, procurement, and furniture assembly are handled centrally – one point of contact for you.'
        },
        {
          title: 'Maximum Agility',
          desc: 'Every project is unique. We adapt flexibly to individual client timelines, structural requirements, and aesthetic desires.'
        },
        {
          title: 'Punctuality & Reliability',
          desc: 'Transparent communication, structured milestones, and dependable commitments ensure peace of mind.'
        },
        {
          title: 'Direct Manufacturing Network',
          desc: 'Direct access to premier manufacturers in Turkey unlocks bespoke luxury furnishings at competitive terms.'
        }
      ]
    },
    clients: {
      title: 'For Private & Commercial Clients',
      subtitle: 'We are available for complete turnkey projects as well as specialized individual trade assignments.',
      list: [
        'Private Homeowners & Builders',
        'Real Estate Investors',
        'Property Developers',
        'General Contractors',
        'Architects & Interior Designers',
        'Housing & Real Estate Corporations',
        'Hotel Operators',
        'Gastronomy & Restaurant Owners',
        'Commercial Enterprise Clients'
      ]
    },
    samples: {
      pageTitle: 'Samples & Projects',
      pageSubtitle: 'Explore our completed construction, fit-out, and interior design projects in Berlin and surrounding areas.',
      allCategories: 'All Projects',
      photosCount: 'Photos & Media',
      viewGallery: 'Open Gallery',
      viewDetails: 'Project Details',
      closeModal: 'Close',
      prevMedia: 'Previous',
      nextMedia: 'Next',
      testimonialBadge: 'Client Testimonial & Review',
      featuredProject: 'Project Spotlight',
      clientLabel: 'Client',
      locationLabel: 'Location',
      yearLabel: 'Year',
      scopeLabel: 'Scope of Work',
      allMediaTitle: 'Project Photos & Video Reel'
    },
    charlottenburgTestimonial: {
      title: 'Project Reference: Charlottenburg Office Fit-Out',
      quote: '“LH Lafidan Home realized our office fit-out in Charlottenburg with outstanding precision and world-class design. From flawless Q4 skimming to bespoke wall aesthetics and tailored details – entirely professional, punctual, and masterful.”',
      author: 'Charlotte Tim Berg',
      role: 'Project Director & Client, Charlottenburg'
    },
    process: {
      title: 'How We Work',
      subtitle: 'Structured. Transparent. On Schedule.',
      steps: [
        { title: '1. Consultation & Vision', desc: 'We discuss your project vision, requirements, and timeline during an initial in-depth consultation.' },
        { title: '2. Planning & Material Selection', desc: 'Detailed execution planning, 3D visualizations, and selecting premium surface and finishing materials.' },
        { title: '3. Craftsmanship & Execution', desc: 'Master-level execution of all trades overseen by our dedicated on-site project management.' },
        { title: '4. Final Inspection & Handover', desc: 'Collaborative final walkthrough ensuring 100% satisfaction before handing over the keys.' }
      ]
    },
    cta: {
      title: 'Your Project. Our Expertise.',
      subtitle: 'Are you planning a new build, renovation, or high-end interior fit-out?',
      desc: 'LH Lafidan Home guides you from the very first spark of inspiration to turnkey completion. Architecture. Design. Fit-out. Renovation. Furnishing. Everything from a single source.',
      button: 'Request Free Consultation'
    },
    contactSection: {
      title: 'Contact & Berlin Office',
      subtitle: 'Speak directly with us about your upcoming project.',
      callNow: 'Call Now',
      sendEmail: 'Send Email',
      whatsApp: 'Chat on WhatsApp',
      addressTitle: 'Our Office',
      formTitle: 'Send a Project Inquiry',
      nameLabel: 'Your Name',
      emailLabel: 'Your Email',
      phoneLabel: 'Your Phone Number',
      projectTypeLabel: 'Project Type',
      messageLabel: 'Your Message / Project Details',
      submitButton: 'Submit Inquiry',
      successMessage: 'Thank you for your inquiry! We will get back to you promptly.',
      legalInfoTitle: 'Company Details'
    },
    footer: {
      rights: 'LH Lafidan Home UG. All rights reserved.',
      impressum: 'Imprint & Privacy',
      taxNote: 'Tax ID: 29/418/31172'
    }
  },
  tr: {
    brand: {
      name: 'LH Lafidan Home',
      fullName: 'LH Lafidan Home UG',
      tagline: 'İnşaat · İç Mekan Tasarımı · Mimarlık · İç Mimarlık',
      slogan: 'İlk fikirden anahtar teslim tamamlanmaya kadar – hepsi tek elden.'
    },
    contactInfo: {
      company: 'LH Lafidan Home UG',
      representative: 'Fatemeh Eyvazi',
      address: 'Bundesallee 187',
      zipCity: '10717 Berlin, Almanya',
      fullAddress: 'Bundesallee 187, 10717 Berlin, Almanya',
      phone: '+49 170 8853978',
      phoneDisplay: '0170 8853978',
      phoneHref: 'tel:+491708853978',
      email: 'Lafidanug@gmail.com',
      emailHref: 'mailto:Lafidanug@gmail.com',
      taxNumber: '29/418/31172',
      region: 'Berlin, Brandenburg ve Almanya geneli'
    },
    nav: {
      home: 'Ana Sayfa',
      story: 'Hakkımızda',
      services: 'Hizmetler',
      specialization: 'Uzmanlıklar',
      samples: 'Projeler / Örnekler',
      whyUs: 'Avantajlar',
      contact: 'İletişim',
      startChat: 'Proje Başlat'
    },
    hero: {
      heading: 'Mekanlara vizyon ve\nustalıkla hayat veriyoruz.',
      subheading: 'Berlin ve Almanya genelinde üst düzey inşaat, iç mekan yapımı, tadilat ve anahtar teslim mimari çözümler sunuyoruz.',
      startChat: 'Proje Başlat',
      exploreNow: 'Projeleri İncele',
      tag: 'Alçı Sıva Q1–Q4 · Lüks Villalar · Gastronomi & Mağaza'
    },
    story: {
      badge: 'Bütüncül Hizmet Konsepti',
      title: 'İlk fikirden anahtar teslim tamamlanmaya kadar.',
      p1: 'LH Lafidan Home UG, Berlin merkezli olup lüks inşaat, iç mekan düzenleme, tadilat ve mimari tasarım projelerinde uzmanlaşmış bir kuruluştur. Planlama, tasarım, ustalık ve şantiye yönetimini tek bir çatı altında birleştiriyoruz.',
      p2: 'En büyük gücümüz; lüks villalardan seçkin konutlara, otellerden restoranlara, mağaza ve ticari genel merkezlere kadar özel projeleri hayata geçirmektir.',
      p3: 'Yılların tecrübesi, uyumlu usta kadromuz ve tavizsiz kalite anlayışımızla müşterilerimize konseptten anahtar teslimine kadar eşlik ediyoruz.'
    },
    services: {
      title: 'Hizmetlerimiz',
      subtitle: 'En yüksek mimari ve işçilik standartlarına göre tasarlanmış anahtar teslim çözümler.',
      items: [
        {
          id: 'architecture',
          title: 'Mimarlık & Planlama',
          shortDesc: 'Başarılı bir proje doğru planlama ve konsept aşamasından itibaren profesyonel rehberlikle başlar.',
          details: 'Müşterilerimize özel çözümler geliştiriyoruz; estetik, fonksiyonellik, malzeme kalitesi ve teknik gereksinimleri bir arada planlıyoruz.'
        },
        {
          id: 'interior-design',
          title: 'İç Mimarlık & Mekan Tasarımı',
          shortDesc: 'Estetik, fonksiyonellik ve seçkin malzemeleri buluşturan özgün mekan konseptleri.',
          details: 'Mekan ve yerleşim planlaması, renk ve malzeme seçimi, duvar ve tavan tasarımı, aydınlatma konseptleri, özel mobilya tasarımı, otel süitleri, lobi ve lüks villalar.'
        },
        {
          id: 'drywall-fitout',
          title: 'İç Mekan Yapımı & İnce İşler',
          shortDesc: 'Yeni yapılar ve tadilat projeleri için koordine edilmiş komple iç mekan ve ince inşaat işleri.',
          details: 'Alçıpan bölme duvarlar, asma tavan sistemleri, akustik çözümler, seramik ve fayans işleri, doğal taş, parke ve zemin kaplamaları ile mobilya montajı.'
        },
        {
          id: 'skimming-q1-q4',
          title: 'Alçı Sıva İşleri Q1–Q4',
          shortDesc: 'Kusursuz duvar ve tavan yüzeyleri için Q1 ila Q4 kalite standartlarında usta alçı sıva işleri.',
          details: 'Yüksek kaliteli yüzeyler lüks iç mekanların temelidir. Villalar, oteller ve seçkin iş merkezleri için pürüzsüz ve mükemmel yüzey uygulamaları gerçekleştiriyoruz.'
        },
        {
          id: 'painting-walls',
          title: 'Boya & Özel Duvar Tasarımı',
          shortDesc: 'Klasik iç cephe boyası, İtalyan sıva, dokulu yüzeyler ve özel tasarım efekt duvarları.',
          details: 'Özel boya teknikleri, Venedik sıva, lake işleri, lobi ve lüks konutlar için sanatsal ve prestijli duvar kaplamaları.'
        },
        {
          id: 'renovation',
          title: 'Tadilat & Komple Renovasyon',
          shortDesc: 'Konut ve ticari gayrimenkullerin anahtar teslim modernizasyonu ve değer artırımı.',
          details: 'Tekil odalardan komple bina yenilemelerine kadar tüm disiplinleri koordine ederek mekanları teknik ve estetik olarak en üst seviyeye taşıyoruz.'
        },
        {
          id: 'villas',
          title: 'Lüks Villalar & Özel Konutlar',
          shortDesc: 'Seçkin özel mülklerin ve villaların en yüksek işçilik standartlarıyla inşası ve dekorasyonu.',
          details: 'Özgün mimari konseptler, ithal doğal mermer ve taşlar, özel tasarım mobilyalar, lüks banyolar ve mekana özel üretimler.'
        },
        {
          id: 'hospitality',
          title: 'Otel & Ağırlama Alanları',
          shortDesc: 'Oteller ve rezidanslar için anahtar teslim yapım, yenileme ve komple FF&E mobilya donatımı.',
          details: 'Otel odaları ve süitler, lobi alanları, koridorlar, restoranlar, barlar, özel yatak başlıkları, sabit mobilyalar, perdeler, tekstil ve yerinde montaj.'
        },
        {
          id: 'retail',
          title: 'Mağaza & Perakende Alanları',
          shortDesc: 'Markanızın kimliğini yansıtan şık butikler, showroomlar ve satış alanları.',
          details: 'Butikler, showroomlar, güzellik merkezleri ve ticari mağazalar: alçıpan, zemin kaplamaları, mimari aydınlatma ve özel mağaza teşhir üniteleri tek elden.'
        },
        {
          id: 'gastronomy',
          title: 'Restoran & Gastronomi',
          shortDesc: 'Atmosfer, estetik ve servis dinamiklerinin kusursuz uyum sağladığı gastronomi mekanları.',
          details: 'Restoran, kafe ve barların komple yapımı – tavan ve duvar tasarımlarından dayanıklı zeminlere, bar tezgahlarından özel oturma gruplarına kadar.'
        },
        {
          id: 'custom-furniture',
          title: 'Özel Mobilya & Ahşap İmalatı',
          shortDesc: 'Projeye özel mobilya, otel yatakları, gardıroplar ve karşılama bankolarının tasarımı ve üretimi.',
          details: 'Yataklar, yatak başlıkları, koltuklar, sandalyeler, masalar, dolaplar, gömme mobilyalar, resepsiyon bankoları ve mekana özel ahşap imalatı.'
        },
        {
          id: 'turkey-procurement',
          title: 'Türkiye\'den Doğrudan Tedarik',
          shortDesc: 'Seçkin mobilya, mermer ve dekorasyon ürünlerinin Türkiye\'deki üreticilerden doğrudan temini.',
          details: 'Büyük avantaj: Doğrudan üretici fiyatları, yüksek kişiselleştirme, Türkiye\'den Almanya\'ya sorunsuz lojistik ve yerinde profesyonel montaj imkanı.'
        },
        {
          id: 'one-stop',
          title: 'Tek Elden Proje Yönetimi',
          shortDesc: 'Danışmanlık, tasarım, tedarik, inşaat ve teslimat süreçlerinde tek bir güvenilir muhatap.',
          details: 'Danışmanlık → Planlama → Tasarım → Malzeme Seçimi → İnce Yapı → Tadilat → Mobilya Donatımı → Montaj → Anahtar Teslimi.'
        }
      ]
    },
    specialization: {
      title: 'Uzmanlık Alanlarımız',
      subtitle: 'Yüksek standartlı mekanlar için hassas mühendislik ve tutku.',
      items: [
        'Lüks Villalar',
        'Yüksek Standartlı Daireler',
        'Çok Katlı Konutlar',
        'Oteller & Tatil Köyleri',
        'Rezidans & Süitler',
        'Restoranlar & Kafeler',
        'Butikler & Mağazalar',
        'Ticari Showroomlar',
        'Ofisler & İş Merkezleri',
        'Ticari Gayrimenkuller',
        'Lobi & Resepsiyon Alanları',
        'Yeni İnşaat Projeleri',
        'Komple Renovasyon & Modernizasyon'
      ]
    },
    whyUs: {
      title: 'Neden LH Lafidan Home?',
      subtitle: 'Kusursuz ve başarılı bir iş birliği için altı güçlü neden.',
      pillars: [
        {
          title: 'Yılların Tecrübesi',
          desc: 'İnşaat ve iç mekan yapımındaki derin tecrübemiz, sorunsuz ve çözüm odaklı bir şantiye süreci sağlar.'
        },
        {
          title: 'Tavizsiz Kalite & Q4',
          desc: 'Birinci sınıf malzemeler ve Q4 seviyesine kadar detaylara gösterilen titizlikle kusursuz işçilik sunuyoruz.'
        },
        {
          title: 'Her Şey Tek Elden',
          desc: 'Tasarım, planlama, inşaat, tedarik ve mobilya montajı tek elden yönetilir – tek muhatabınız biziz.'
        },
        {
          title: 'Maksimum Esneklik',
          desc: 'Her proje benzersizdir. Müşterilerimizin özel isteklerine ve zaman planlarına esnek şekilde uyum sağlıyoruz.'
        },
        {
          title: 'Güvenilirlik & Zamanlama',
          desc: 'Şeffaf iletişim ve planlanan takvime sadık kalarak güvenli ve öngörülebilir bir teslimat garanti ediyoruz.'
        },
        {
          title: 'Doğrudan Türkiye Tedarik Ağı',
          desc: 'Türkiye\'deki güçlü üretici ağımızla lüks mobilya ve malzemeleri en avantajlı şartlarla temin ediyoruz.'
        }
      ]
    },
    clients: {
      title: 'Bireysel ve Kurumsal Müşteriler İçin',
      subtitle: 'Hem komple anahtar teslim projeler hem de bağımsız iş kalemleri için hizmetinizdeyiz.',
      list: [
        'Özel Mülk Sahipleri',
        'Gayrimenkul Yatırımcıları',
        'Proje Geliştiricileri',
        'Müteahhitler',
        'Genel Yükleniciler',
        'Mimarlar & Tasarımcılar',
        'Gayrimenkul Şirketleri',
        'Otel İşletmecileri',
        'Gastronomi Sahipleri',
        'Kurumsal Müşteriler'
      ]
    },
    samples: {
      pageTitle: 'Projeler & Referanslar',
      pageSubtitle: 'Berlin ve çevresinde gerçekleştirdiğimiz seçkin inşaat, iç mekan ve tasarım projelerimizi inceleyin.',
      allCategories: 'Tüm Projeler',
      photosCount: 'Fotoğraf & Medya',
      viewGallery: 'Galeriyi Aç',
      viewDetails: 'Proje Detayları',
      closeModal: 'Kapat',
      prevMedia: 'Önceki',
      nextMedia: 'Sonraki',
      testimonialBadge: 'Müşteri Görüşü & Referans',
      featuredProject: 'Öne Çıkan Proje',
      clientLabel: 'Müşteri',
      locationLabel: 'Konum',
      yearLabel: 'Yıl',
      scopeLabel: 'Kapsam',
      allMediaTitle: 'Proje Fotoğrafları & Video Galeri'
    },
    charlottenburgTestimonial: {
      title: 'Proje Referansı: Charlottenburg Ofis Binası',
      quote: '„LH Lafidan Home, Charlottenburg\'daki ofis projemizi olağanüstü bir hassasiyet ve üstün tasarımla tamamladı. Kusursuz Q4 alçı işlerinden özel duvar tasarımlarına kadar her şey tam zamanında ve ustalıkla yapıldı.“',
      author: 'Charlotte Tim Berg',
      role: 'Proje Direktörü & Müşteri, Charlottenburg'
    },
    process: {
      title: 'Çalışma Sürecimiz',
      subtitle: 'Yapılandırılmış. Şeffaf. Zamanında.',
      steps: [
        { title: '1. Danışmanlık & Vizyon', desc: 'İlk görüşmemizde hedeflerinizi, bütçenizi ve proje gereksinimlerinizi detaylıca analiz ediyoruz.' },
        { title: '2. Planlama & Malzeme', desc: 'Detaylı uygulama projeleri, 3D görselleştirme ve birinci sınıf malzemelerin seçimi.' },
        { title: '3. Usta İşçilik & Uygulama', desc: 'Tüm imalatların merkezi şantiye yönetimi altında usta ellerle titizlikle uygulanması.' },
        { title: '4. Son Kontrol & Teslimat', desc: 'Eksiksiz memnuniyet sağlayan ortak kontrollerin ardından anahtar teslimi.' }
      ]
    },
    cta: {
      title: 'Sizin Projeniz. Bizim Tecrübemiz.',
      subtitle: 'Yeni bir bina, renovasyon veya lüks iç mekan yapımı mı planlıyorsunuz?',
      desc: 'LH Lafidan Home ilk fikirden anahtar teslimine kadar yanınızda. Mimarlık. Tasarım. İnce Yapı. Tadilat. Mobilya. Her şey tek elden.',
      button: 'Hemen Ücretsiz Danışın'
    },
    contactSection: {
      title: 'İletişim & Berlin Ofisimiz',
      subtitle: 'Gelecek projeniz hakkında doğrudan bizimle görüşün.',
      callNow: 'Hemen Arayın',
      sendEmail: 'E-Posta Gönderin',
      whatsApp: 'WhatsApp\'tan Yazın',
      addressTitle: 'Ofisimiz',
      formTitle: 'Proje Talebi Gönderin',
      nameLabel: 'Adınız Soyadınız',
      emailLabel: 'E-Posta Adresiniz',
      phoneLabel: 'Telefon Numaranız',
      projectTypeLabel: 'Proje Türü',
      messageLabel: 'Mesajınız / Proje Detayları',
      submitButton: 'Talebi Gönder',
      successMessage: 'Talebiniz için teşekkür ederiz! En kısa sürede sizinle iletişime geçeceğiz.',
      legalInfoTitle: 'Şirket Bilgileri'
    },
    footer: {
      rights: 'LH Lafidan Home UG. Tüm hakları saklıdır.',
      impressum: 'Künye & Gizlilik',
      taxNote: 'Vergi No: 29/418/31172'
    }
  }
};

export type Translations = typeof translations.de;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Default language is German ('de')
  const [language, setLanguage] = useState<Language>("de");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
