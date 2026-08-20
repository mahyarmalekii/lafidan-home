// Auto-generated project catalog from public/projects assets
export interface ProjectMedia {
  src: string;
  type: 'image' | 'video';
  filename: string;
  caption?: {
    de: string;
    en: string;
    tr?: string;
  };
}

export interface ProjectTestimonial {
  quote: {
    de: string;
    en: string;
    tr?: string;
  };
  author: string;
  role: {
    de: string;
    en: string;
    tr?: string;
  };
}

export interface ProjectItem {
  id: string;
  title: {
    de: string;
    en: string;
    tr?: string;
  };
  subtitle: {
    de: string;
    en: string;
    tr?: string;
  };
  location: string;
  category: 'office' | 'villa' | 'architecture' | 'retail' | 'residential' | 'design';
  categoryLabel: {
    de: string;
    en: string;
    tr?: string;
  };
  client?: string;
  year: string;
  scope: {
    de: string[];
    en: string[];
    tr?: string[];
  };
  description: {
    de: string;
    en: string;
    tr?: string;
  };
  testimonial?: ProjectTestimonial;
  heroImage: string;
  mediaCount: number;
  media: ProjectMedia[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    "id": "charlottenburg",
    "title": {
      "de": "Büroausbau Charlottenburg",
      "en": "Charlottenburg Office Headquarters",
      "tr": "Charlottenburg Ofis Binası"
    },
    "subtitle": {
      "de": "Repräsentativer Innenausbau & Q4 Spachtelarbeiten",
      "en": "Executive Office Fit-Out & Q4 Skimming",
      "tr": "Prestijli Ofis Yapımı & Q4 Alçı Sıva İşleri"
    },
    "location": "Berlin-Charlottenburg",
    "category": "office",
    "categoryLabel": {
      "de": "Büro & Gewerbe",
      "en": "Office & Commercial",
      "tr": "Ofis & Ticari"
    },
    "client": "Charlotte Tim Berg / Charlottenburg Office Management",
    "year": "2024–2025",
    "scope": {
      "de": [
        "Spachtelarbeiten Q1–Q4",
        "Akustik- & Deckensysteme",
        "Malerarbeiten & Designwände",
        "Glas- & Raumtrennwände",
        "Bodenbeläge & Feinmontage"
      ],
      "en": [
        "Skimming Levels Q1–Q4",
        "Acoustic & Ceiling Systems",
        "Painting & Accent Walls",
        "Glass & Partition Walls",
        "Flooring & Finishing"
      ],
      "tr": [
        "Q1–Q4 Alçı Sıva İşleri",
        "Akustik ve Asma Tavan Sistemleri",
        "Boya ve Tasarım Duvarlar",
        "Cam ve Bölme Duvarlar",
        "Zemin Kaplama ve İnce Montaj"
      ]
    },
    "testimonial": {
      "quote": {
        "de": "„LH Lafidan Home hat unseren Büroausbau in Charlottenburg mit herausragender Präzision und erstklassigem Design verwirklicht. Von den perfekten Q4-Spachtelarbeiten bis hin zu den individuellen Wandgestaltungen und maßgefertigten Details – absolut professionell, termintreu und meisterhaft.“",
        "en": "“LH Lafidan Home realized our office fit-out in Charlottenburg with outstanding precision and world-class design. From flawless Q4 skimming to bespoke wall aesthetics and tailored details – entirely professional, punctual, and masterful.”",
        "tr": "“LH Lafidan Home, Charlottenburg'daki ofis projemizi olağanüstü bir hassasiyet ve üstün tasarımla tamamladı. Kusursuz Q4 alçı işlerinden özel duvar tasarımlarına kadar her şey tam zamanında ve ustalıkla yapıldı.”"
      },
      "author": "Charlotte Tim Berg",
      "role": {
        "de": "Projektleitung Charlottenburg",
        "en": "Charlottenburg Project Director",
        "tr": "Charlottenburg Proje Direktörü"
      }
    },
    "description": {
      "de": "Ein hochmoderner Büro- und Konferenzbereich im Herzen von Berlin-Charlottenburg. Das Projekt umfasste den kompletten Innenausbau mit höchster Oberflächengüte (Q4), maßgefertigten Deckenelementen, integrierter Architekturbeleuchtung sowie stilvollen Farb- und Materialkonzepten für eine inspirierende Arbeitsumgebung.",
      "en": "A state-of-the-art office and conference environment in Berlin-Charlottenburg. The project encompassed complete interior construction with highest surface quality (Q4), custom ceiling elements, integrated architectural lighting, and refined color and material concepts.",
      "tr": "Berlin-Charlottenburg'un merkezinde son teknoloji ofis ve konferans alanı. Proje, en yüksek yüzey kalitesi (Q4), özel tavan elemanları, entegre mimari aydınlatma ve ilham verici renk ve malzeme konseptleriyle komple iç mekan inşasını kapsamaktadır."
    },
    "heroImage": "/projects/charlottenburg/photo_2026-08-20_14.53.54.jpeg",
    "mediaCount": 13,
    "media": [
      {
        "src": "/projects/charlottenburg/photo_2026-08-20_14.53.54.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.53.54.jpeg"
      },
      {
        "src": "/projects/charlottenburg/photo_2026-08-20_14.53.59.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.53.59.jpeg"
      },
      {
        "src": "/projects/charlottenburg/photo_2026-08-20_14.54.01.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.54.01.jpeg"
      },
      {
        "src": "/projects/charlottenburg/photo_2026-08-20_14.54.02.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.54.02.jpeg"
      },
      {
        "src": "/projects/charlottenburg/photo_2026-08-20_14.54.04.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.54.04.jpeg"
      },
      {
        "src": "/projects/charlottenburg/photo_2026-08-20_14.54.06.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.54.06.jpeg"
      },
      {
        "src": "/projects/charlottenburg/photo_2026-08-20_14.54.09.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.54.09.jpeg"
      },
      {
        "src": "/projects/charlottenburg/photo_2026-08-20_14.54.11.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.54.11.jpeg"
      },
      {
        "src": "/projects/charlottenburg/photo_2026-08-20_14.54.14.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.54.14.jpeg"
      },
      {
        "src": "/projects/charlottenburg/photo_2026-08-20_14.54.21.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.54.21.jpeg"
      },
      {
        "src": "/projects/charlottenburg/photo_2026-08-20_14.54.24.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.54.24.jpeg"
      },
      {
        "src": "/projects/charlottenburg/photo_2026-08-20_14.54.25.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.54.25.jpeg"
      },
      {
        "src": "/projects/charlottenburg/photo_2026-08-20_14.54.28.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.54.28.jpeg"
      }
    ]
  },
  {
    "id": "kladow",
    "title": {
      "de": "Haus & Luxusvilla Kladow",
      "en": "Kladow House & Luxury Villa",
      "tr": "Kladow Müstakil Ev & Lüks Villa"
    },
    "subtitle": {
      "de": "Projektplanung, Spachteln Q4, Deckenbau, Parkett & Fenster",
      "en": "Project Design, Q4 Skimming, Ceilings, Parquet & Windows",
      "tr": "Proje Tasarımı, Q4 Alçı Sıva, Tavan İmalatı, Parke & Pencereler"
    },
    "location": "Berlin-Kladow",
    "category": "villa",
    "categoryLabel": {
      "de": "Luxusvillen & Wohnen",
      "en": "Luxury Villas & Residential",
      "tr": "Lüks Villalar & Konut"
    },
    "year": "2024",
    "scope": {
      "de": [
        "Ganzheitliche Projektplanung & Design",
        "Spachteln & Spachtelarbeiten Q1–Q4",
        "Malerarbeiten & hochwertige Anstriche",
        "Deckenbau, Deckenreparatur & Deckensysteme",
        "Parkettverlegung & edle Bodenarbeiten",
        "Fensterverkleidung, Fensterintegration & Sichtschutz",
        "Großformatige Fliesen & Luxusbäder"
      ],
      "en": [
        "Turnkey Project Planning & Architectural Design",
        "Master Skimming Standards Q1–Q4",
        "Fine Painting & Protective Coatings",
        "Ceiling Construction & Structural Restoration",
        "Parquet Flooring Installation",
        "Window Trim, Window Finishes & Integration",
        "Large-Format Tiling & Luxury Bathrooms"
      ],
      "tr": [
        "Anahtar Teslim Proje Planlama ve Mimari Tasarım",
        "Q1–Q4 Standartlarında Usta Alçı Sıva",
        "Özel Boya ve Koruyucu Kaplamalar",
        "Asma Tavan İmalatı ve Tavan Sistemleri",
        "Doğal Ahşap Parke Döşeme",
        "Pencere İçi ve Çevresi Kaplama ve İzolasyon",
        "Büyük Ebat Seramik ve Lüks Banyolar"
      ]
    },
    "description": {
      "de": "Umfassender Innenausbau und Veredelung des Villen- und Hausprojekts in Berlin-Kladow. Von der ersten Projektplanung über meisterhaftes Spachteln (Q4) und Malerarbeiten, professionellen Deckenbau und Parkettverlegung bis hin zur millimetergenauen Fensterverkleidung und Badsanierung wurde die Immobilie in eine exklusive Residenz verwandelt.",
      "en": "Comprehensive interior construction and refinement of the Kladow residence. From project planning, master Q1–Q4 surface skimming, and painting to custom ceiling architecture, hardwood parquet flooring, seamless window finishes, and wellness bathroom tiling, the home was transformed into an extraordinary private estate.",
      "tr": "Berlin-Kladow'daki lüks villa ve konut projesinin anahtar teslim iç mekan inşası. Proje tasarımından Q4 alçı sıva ve boyaya, özel tavan sistemleri ve parke döşemeden pencere kaplamalarına ve spa standartlarında banyolara kadar mülk baştan yaratılmıştır."
    },
    "heroImage": "/projects/kladow/photo_2026-08-20_15.06.44.jpeg",
    "mediaCount": 46,
    "media": [
      {
        "src": "/projects/kladow/photo_2026-08-20_15.06.44.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.06.44.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.06.45.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.06.45.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.06.46.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.06.46.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.06.47.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.06.47.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.06.48.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.06.48.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.06.49.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.06.49.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.06.50.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.06.50.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.06.51.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.06.51.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.06.52.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.06.52.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.06.53.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.06.53.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.06.54.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.06.54.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.06.55.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.06.55.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.06.56.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.06.56.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.06.56_1_.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.06.56_1_.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.06.57.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.06.57.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.06.58.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.06.58.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.06.59.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.06.59.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.00.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.00.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.01.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.01.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.02.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.02.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.03.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.03.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.04.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.04.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.05.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.05.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.06.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.06.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.07.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.07.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.08.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.08.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.09.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.09.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.10.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.10.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.11.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.11.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.12.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.12.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.13.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.13.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.14.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.14.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.15.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.15.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.16.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.16.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.17.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.17.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.19.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.19.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.20.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.20.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.21.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.21.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.22.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.22.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.23.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.23.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.24.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.24.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.24_1_.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.24_1_.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.25.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.25.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.26.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.26.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.27.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.27.jpeg"
      },
      {
        "src": "/projects/kladow/photo_2026-08-20_15.07.28.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.07.28.jpeg"
      }
    ]
  },
  {
    "id": "winter-garden",
    "title": {
      "de": "Bauprojekt Berlin: Haus, Wintergarten & Garten",
      "en": "Berlin Building Project: House, Winter Garden & Landscape",
      "tr": "Berlin İnşaat Projesi: Ev, Kış Bahçesi ve Peyzaj"
    },
    "subtitle": {
      "de": "Architektur, Glas-Wintergarten & harmonische Außenanbindung",
      "en": "Architecture, Glass Winter Garden & Garden Integration",
      "tr": "Mimari, Cam Kış Bahçesi ve Dış Mekan Entegrasyonu"
    },
    "location": "Berlin & Umgebung",
    "category": "architecture",
    "categoryLabel": {
      "de": "Architektur & Glasbau",
      "en": "Architecture & Glazing",
      "tr": "Mimari & Cam Sistemleri"
    },
    "year": "2024",
    "scope": {
      "de": [
        "Ganzheitliche Haus- & Architekturplanung",
        "Wintergartengestaltung & Glasausbau",
        "Gartengestaltung & Außenbereichsanbindung",
        "Trockenbau & Deckenverkleidung",
        "Fliesen- & Natursteinböden",
        "Wärme-, Feuchtigkeits- & Lichtintegration"
      ],
      "en": [
        "Holistic Residential House Architecture",
        "Winter Garden Design & Glass Fit-Out",
        "Garden Landscaping & Exterior Transition",
        "Drywall & Ceiling Cladding",
        "Tile & Natural Stone Flooring",
        "Thermal, Moisture & Lighting Integration"
      ],
      "tr": [
        "Bütüncül Konut ve Mimari Tasarım",
        "Kış Bahçesi ve Cam İnce Yapı",
        "Bahçe Peyzajı ve Dış Mekan Geçişi",
        "Alçıpan ve Tavan Kaplama",
        "Doğal Taş ve Seramik Zeminler",
        "Isı, Nem Yalıtımı ve Aydınlatma"
      ]
    },
    "description": {
      "de": "Ein repräsentatives Berliner Bauprojekt, das anspruchsvolle Hausarchitektur, einen maßgefertigten Glas-Wintergarten und harmonische Gartenstrukturen vereint. Durch meisterhafte Übergänge zwischen Glas-, Metall-, Stein- und Trockenbau entstand ein lichtdurchfluteter Raum für höchste Wohnansprüche.",
      "en": "A prestigious Berlin building project uniting bespoke residential architecture, a panoramic glass winter garden, and harmonious garden integration. Flawless transitions between glass, metal, masonry, and drywall create an expansive, light-filled living environment.",
      "tr": "Seçkin bir konut mimarisi, panoramik cam kış bahçesi ve peyzajı birleştiren prestijli bir Berlin projesi. Cam, metal, taş ve alçıpan arasındaki kusursuz geçişlerle ışık dolu, lüks bir yaşam alanı oluşturuldu."
    },
    "heroImage": "/projects/winter-garden/photo_2026-08-20_15.04.53.jpeg",
    "mediaCount": 39,
    "media": [
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.04.53.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.04.53.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.04.55.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.04.55.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.04.56.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.04.56.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.04.57.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.04.57.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.04.59.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.04.59.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.00.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.00.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.01.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.01.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.02.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.02.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.03.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.03.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.05.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.05.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.06.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.06.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.07.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.07.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.08.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.08.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.10.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.10.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.11.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.11.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.12.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.12.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.13.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.13.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.14.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.14.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.15.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.15.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.16.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.16.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.18.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.18.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.19.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.19.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.20.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.20.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.21.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.21.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.22.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.22.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.24.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.24.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.25.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.25.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.26.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.26.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.27.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.27.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.28.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.28.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.29.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.29.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.30.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.30.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.31.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.31.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.32.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.32.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.33.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.33.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.34.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.34.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.35.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.35.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.38.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.38.jpeg"
      },
      {
        "src": "/projects/winter-garden/photo_2026-08-20_15.05.40.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.05.40.jpeg"
      }
    ]
  },
  {
    "id": "sezai-baklava",
    "title": {
      "de": "Café Sezai Baklava – Schöneberg, Berlin",
      "en": "Café Sezai Baklava – Schöneberg, Berlin",
      "tr": "Café Sezai Baklava – Schöneberg, Berlin"
    },
    "subtitle": {
      "de": "Von der Planung bis zur Fertigstellung – Kunst & Innenarchitektur",
      "en": "From Concept to Execution – Art & Interior Architecture",
      "tr": "Tasarım ve Uygulama – Sanat ve İç Mimarlık Deneyimi"
    },
    "location": "Berlin-Schöneberg",
    "category": "retail",
    "categoryLabel": {
      "de": "Gastronomie & Retail",
      "en": "Gastronomy & Retail",
      "tr": "Gastronomi & Mağaza"
    },
    "year": "2024–2025",
    "scope": {
      "de": [
        "Ganzheitliches Raum- & Gestaltungskonzept",
        "Spezialisierte Malerarbeiten & präzise Farbgebung",
        "Professionelle Fliesenarbeiten (Küche & Service)",
        "Trockenbau, Trennwände & Formelemente",
        "Design & Maßanfertigung von Möbeln und Stühlen",
        "Individueller Thekenbau & Kassenbereich"
      ],
      "en": [
        "Full Spatial Planning & Bespoke Concept Design",
        "Specialized Painting & Precision Color Harmony",
        "Professional Tiling (Kitchen & Service Areas)",
        "Drywall Partitions & Architectural False Walls",
        "Custom Furniture & Seating Fabrication",
        "Bespoke Service Counter & POS Area"
      ],
      "tr": [
        "Bütüncül Mekan ve Konsept Tasarımı",
        "Özel Boya ve Hassas Renk Uygulaması",
        "Profesyonel Fayans ve Seramik İşleri",
        "Alçıpan Bölme Duvar ve Asma Tavan",
        "Özel Mobilya, Sandalye ve Banket İmalatı",
        "Özel Tezgah, Servis Bankosu ve Kasa Alanı"
      ]
    },
    "description": {
      "de": "Das Projekt Café Sezai Baklava im Berliner Bezirk Schöneberg ist eines der herausragenden Referenzprojekte von LH Lafidan Home – vollständig realisiert von der ersten Idee bis zur schlüsselfertigen Eröffnung. Mit Liebe zum Detail, erlesenen Materialien und jahrelanger Erfahrung im gewerblichen Ausbau schufen wir ein modernes, warmes und identitätsstarkes Ambiente, in dem Stil, Kunst und Ausführungsqualität perfekt harmonieren.",
      "en": "The Café Sezai Baklava project in Berlin-Schöneberg is a hallmark turnkey project by LH Lafidan Home, delivered end-to-end from conceptualization to grand opening. With meticulous attention to detail, premium materials, and deep commercial expertise, we crafted an inviting, modern, and identity-defining environment where taste, art, and craft excellence meet.",
      "tr": "Berlin-Schöneberg'deki Café Sezai Baklava projesi, LH Lafidan Home'un ilk fikirden anahtar teslim açılışa kadar gerçekleştirdiği prestijli projelerden biridir. Detaylara gösterilen özen, seçkin malzemeler ve ticari mekanlardaki tecrübemizle stil, sanat ve işçilik kalitesinin buluştuğu modern ve sıcak bir atmosfer yarattık."
    },
    "heroImage": "/projects/sezai-baklava/photo_2026-08-20_14.55.27.jpeg",
    "mediaCount": 29,
    "media": [
      {
        "src": "/projects/sezai-baklava/IMG_3643.MP4",
        "type": "video",
        "filename": "IMG_3643.MP4"
      },
      {
        "src": "/projects/sezai-baklava/IMG_3644.MP4",
        "type": "video",
        "filename": "IMG_3644.MP4"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_14.55.27.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.55.27.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_14.55.29.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.55.29.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_14.55.32.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.55.32.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_14.55.34.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.55.34.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.00.24.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.00.24.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.00.29.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.00.29.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.00.30.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.00.30.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.00.31.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.00.31.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.00.32.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.00.32.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.00.34.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.00.34.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.00.35.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.00.35.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.00.36.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.00.36.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.00.38.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.00.38.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.00.39.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.00.39.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.00.40.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.00.40.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.00.42.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.00.42.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.00.43.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.00.43.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.00.45.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.00.45.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.00.53.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.00.53.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.00.55.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.00.55.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.00.56.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.00.56.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.00.57.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.00.57.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.01.01.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.01.01.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.01.02.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.01.02.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.01.03.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.01.03.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.01.04.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.01.04.jpeg"
      },
      {
        "src": "/projects/sezai-baklava/photo_2026-08-20_15.01.07.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_15.01.07.jpeg"
      }
    ]
  },
  {
    "id": "koepenick",
    "title": {
      "de": "Projekt Köpenick (Café Scoop & Wohnresidenz)",
      "en": "Köpenick Project (Café Scoop & Living)",
      "tr": "Köpenick Projesi (Café Scoop & Konut)"
    },
    "subtitle": {
      "de": "Design bis Umsetzung: Café Scoop, Möbel, Trockenbau & Türentausch",
      "en": "Design to Execution: Scoop Café, Millwork, Drywall & Door Fitting",
      "tr": "Tasarım ve Uygulama: Café Scoop, Mobilya, Alçıpan & Kapı Değişimi"
    },
    "location": "Berlin-Köpenick",
    "category": "residential",
    "categoryLabel": {
      "de": "Gastronomie & Wohnen",
      "en": "Gastronomy & Living",
      "tr": "Gastronomi & Konut"
    },
    "year": "2024",
    "scope": {
      "de": [
        "Design & Ausbau Café Scoop von A bis Z",
        "Maßgefertigte Möbel & Sitzbereiche",
        "Malerarbeiten & Farbkonzeption",
        "Fliesenverlegung & Naturstein",
        "Trockenbau & Einziehen von Trennwänden",
        "Kompletter Türenaustausch & Zargenmontage"
      ],
      "en": [
        "Full Turnkey Build-Out of Scoop Café",
        "Custom Furniture & Seating Millwork",
        "Interior Painting & Color Harmonization",
        "Precision Tile Installation",
        "Drywall & Partition False Walls",
        "Complete Door & Frame Replacement"
      ],
      "tr": [
        "Café Scoop Baştan Sona Tasarım ve İnce Yapı",
        "Özel Mobilya ve Oturma Alanı İmalatı",
        "İç Mekan Boya ve Renk Tasarımı",
        "Hassas Fayans ve Seramik Uygulaması",
        "Alçıpan Bölme Duvar Sistemleri",
        "Komple Kapı ve Kasa Değişimi"
      ]
    },
    "description": {
      "de": "Ganzheitliches Ausbau- und Sanierungsprojekt in Berlin-Köpenick. Neben der kompletten Neugestaltung des Café Scoop (Design, Möbelanfertigung, Fliesen, Trennwände und Malerarbeiten) wurden umfassende Modernisierungen einschließlich des Austauschs aller Türelemente und Wohnraumveredelungen realisiert.",
      "en": "Holistic fit-out and modernization project in Berlin-Köpenick. Alongside the full turnkey creation of Café Scoop (concept design, bespoke furniture, tiling, drywall partitions, and paintwork), extensive residential improvements including complete interior door replacements were expertly delivered.",
      "tr": "Berlin-Köpenick'te kapsamlı yapım ve renovasyon projesi. Café Scoop'un komple anahtar teslimi yapımının (tasarım, özel mobilya, seramik, bölme duvarlar ve boya) yanı sıra tüm iç kapıların değişimi ve konut alanlarının modernizasyonu tamamlanmıştır."
    },
    "heroImage": "/projects/koepenick/2026-08-20_14.50.12.jpg",
    "mediaCount": 13,
    "media": [
      {
        "src": "/projects/koepenick/2026-08-20_14.50.12.jpg",
        "type": "image",
        "filename": "2026-08-20_14.50.12.jpg"
      },
      {
        "src": "/projects/koepenick/photo_2026-08-20_14.50.35.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.50.35.jpeg"
      },
      {
        "src": "/projects/koepenick/photo_2026-08-20_14.50.37.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.50.37.jpeg"
      },
      {
        "src": "/projects/koepenick/photo_2026-08-20_14.50.39.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.50.39.jpeg"
      },
      {
        "src": "/projects/koepenick/photo_2026-08-20_14.50.40.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.50.40.jpeg"
      },
      {
        "src": "/projects/koepenick/photo_2026-08-20_14.50.41.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.50.41.jpeg"
      },
      {
        "src": "/projects/koepenick/photo_2026-08-20_14.50.43.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.50.43.jpeg"
      },
      {
        "src": "/projects/koepenick/photo_2026-08-20_14.50.44.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.50.44.jpeg"
      },
      {
        "src": "/projects/koepenick/photo_2026-08-20_14.50.45.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.50.45.jpeg"
      },
      {
        "src": "/projects/koepenick/photo_2026-08-20_14.50.47.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.50.47.jpeg"
      },
      {
        "src": "/projects/koepenick/photo_2026-08-20_14.50.48.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.50.48.jpeg"
      },
      {
        "src": "/projects/koepenick/photo_2026-08-20_14.50.49.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.50.49.jpeg"
      },
      {
        "src": "/projects/koepenick/photo_2026-08-20_14.50.51.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.50.51.jpeg"
      }
    ]
  },
  {
    "id": "3d-berlin",
    "title": {
      "de": "3D Planung & Visualisierung Berlin",
      "en": "3D Architectural Planning & CGI Berlin",
      "tr": "3D Mimari Planlama & Görselleştirme Berlin"
    },
    "subtitle": {
      "de": "Fotorealistische Raum- & Hauskonzepte vor Baubeginn",
      "en": "Photorealistic CGI & Spatial Walkthroughs",
      "tr": "İnşaat Öncesi Fotogerçekçi 3D Mekan Modellemesi"
    },
    "location": "Berlin",
    "category": "design",
    "categoryLabel": {
      "de": "Architektur & 3D Planung",
      "en": "Architecture & 3D CGI",
      "tr": "Mimari & 3D Modelleme"
    },
    "year": "2024–2025",
    "scope": {
      "de": [
        "Fotorealistische 3D-Visualisierung",
        "Material- & Farbkonzeption",
        "Licht- & Schattensimulation",
        "Machbarkeitsanalyse & Detailplanung"
      ],
      "en": [
        "Photorealistic 3D CGI Renderings",
        "Material & Color Palette Testing",
        "Lighting & Spatial Simulation",
        "Feasibility & Architectural Detailing"
      ],
      "tr": [
        "Fotogerçekçi 3D Render ve Modelleme",
        "Malzeme, Doku ve Renk Testleri",
        "Doğal ve Yapay Işık Simülasyonu",
        "Uygulanabilirlik ve Detay Planlaması"
      ]
    },
    "description": {
      "de": "Bereits vor dem ersten Baustelleneinsatz ermöglichen wir unseren Bauherren, ihre zukünftigen Villen, Cafés, Büros und Wintergärten digital und fotorealistisch zu erleben. Licht, Materialien und Möblierung werden vorab bis ins Detail abgestimmt.",
      "en": "Before on-site construction begins, we enable our clients to experience their future villas, cafés, offices, and winter gardens in photorealistic 3D. Lighting, textures, and furnishings are meticulously coordinated beforehand.",
      "tr": "Şantiye aşamasından önce müşterilerimizin gelecekteki villalarını, kafelerini, ofislerini ve kış bahçelerini 3D olarak deneyimlemelerini sağlıyoruz. Işık, malzemeler ve mobilyalar önceden en ince ayrıntısına kadar planlanır."
    },
    "heroImage": "/projects/3d-berlin/photo_2026-08-20_14.55.27.jpeg",
    "mediaCount": 4,
    "media": [
      {
        "src": "/projects/3d-berlin/photo_2026-08-20_14.55.27.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.55.27.jpeg"
      },
      {
        "src": "/projects/3d-berlin/photo_2026-08-20_14.55.29.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.55.29.jpeg"
      },
      {
        "src": "/projects/3d-berlin/photo_2026-08-20_14.55.32.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.55.32.jpeg"
      },
      {
        "src": "/projects/3d-berlin/photo_2026-08-20_14.55.34.jpeg",
        "type": "image",
        "filename": "photo_2026-08-20_14.55.34.jpeg"
      }
    ]
  }
];
