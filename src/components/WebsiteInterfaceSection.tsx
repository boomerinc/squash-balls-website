import { useState } from 'react';
import {
  ExternalLink,
  ZoomIn,
  Sparkles,
  ArrowRight,
  Layout,
  Layers,
  FileText,
  Calculator,
  Compass,
  CheckCircle2,
  Share2
} from 'lucide-react';

interface WebsiteInterfaceSectionProps {
  onOpenImageModal: (imgUrl: string, title: string, caption: string) => void;
  onOpenPdfModal: () => void;
}

export default function WebsiteInterfaceSection({
  onOpenImageModal,
  onOpenPdfModal,
}: WebsiteInterfaceSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'core' | 'features'>('all');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sectionsData = [
    {
      id: 'home',
      targetId: 'home',
      name: 'Home Section',
      subtitle: 'Primary Landing, Value Proposition & Brand Identity',
      category: 'core',
      badge: 'Hero Interface',
      imageUrl: './header_banner.png',
      description:
        'The opening viewport features the brand banner, university institutional credentials (ESSU Borongan, College of Computer Studies, BCSC-2A), official mascot insignia, headline value metrics (₱10.00/pc, 41% markup, ₱2.91 unit profit, Tuesday/Thursday sales schedule), and immediate calls-to-action for order reservation and full business plan PDF review.',
      discussion:
        'The Home interface is engineered to capture immediate customer interest within 3 seconds of landing. For student consumers, displaying the clear ₱10 price tag eliminates hesitation. For academic evaluators, institutional ribbons establish academic legitimacy under Elective 211.',
      features: [
        'Interactive Order Now & Read Full Plan CTA buttons',
        'Mascot logo modal with zoom examination',
        'KPI pill grid summarizing price, margin, and selling days',
        'Floating hygiene and fresh produce certification badges',
      ],
    },
    {
      id: 'products',
      targetId: 'product',
      name: 'Products Section',
      subtitle: 'Signature Offerings, Portioning & Sensory Plating',
      category: 'core',
      badge: 'Product Catalog',
      imageUrl: './test_plating.png',
      description:
        'Showcases the flagship Original Squash Cheesy Balls with high-resolution photographic evidence of freshly fried golden balls garnished with mayonnaise and sweet banana ketchup. Details portion pricing (₱10/pc, ₱30 for 3 pcs with dip cup, ₱50 for 5 pcs sampler pack), dough texture, and cheesy core attributes.',
      discussion:
        'Visual proof of product quality is paramount in food entrepreneurship. By featuring real, unedited photos from the student batch testing phase, this section overcomes consumer skepticism regarding vegetable snacks, emphasizing taste alongside nutrition.',
      features: [
        'High-resolution sensory plating photo with click-to-enlarge',
        'Multi-ball bundle pricing cards with quick order triggers',
        'Production batch highlights (steamed kalabasa, melted cheddar)',
        'Sensory test thumbnail carousel (cooking, tasting, raw squash)',
      ],
    },
    {
      id: 'ingredients',
      targetId: 'ingredients',
      name: 'Ingredients Section',
      subtitle: 'Raw Materials, Sourcing, Nutritional Profile & Allergen Guide',
      category: 'core',
      badge: 'Nutrition & Sourcing',
      imageUrl: './test_squash.png',
      description:
        'A dedicated educational breakdown of all 8 core ingredients: Farm-fresh local squash (Kalabasa), quick-melt cheddar cheese blocks, Japanese panko breadcrumbs, all-purpose flour, cornstarch, fresh shell eggs, Spanish paprika seasoning, and high-smoke cooking oil, supplemented with health benefits and sourcing protocols.',
      discussion:
        'Promotes radical transparency in food preparation. Students and faculty can inspect exactly what goes into each ball, verifying high Vitamin A and dietary fiber content while reviewing clear allergen disclosures (Contains Gluten & Dairy) in compliance with RA 7394.',
      features: [
        'Dedicated Kalabasa hero spotlight with local farmer sourcing data',
        '8 detailed cards with dietary benefits and sanitation handling',
        '₱700 daily batch raw material cost preview',
        'Vitamin A, Beta-Carotene, and fiber health impact indicators',
      ],
    },
    {
      id: 'contact',
      targetId: 'contact',
      name: 'Contact Us Section',
      subtitle: 'Campus Coordinates, Stall Schedule, Facebook & Inquiries',
      category: 'core',
      badge: 'Customer Touchpoint',
      imageUrl: './phase2_campus.png',
      description:
        'Provides all channels for customer reach, including physical booth location coordinates at ESSU Main Campus in Maypangdan, selling operating hours (Tuesdays & Thursdays, 9:00 AM – 4:30 PM), direct Facebook community link, feedback inquiry form, and student team hotlines.',
      discussion:
        'Bridging the physical and digital marketplace. Because our student business operates on scheduled days, clear campus booth instructions ensure students and faculty know exactly where and when to collect warm batches during break periods.',
      features: [
        'ESSU Main Campus interactive booth direction card',
        'Direct link to official Facebook community page',
        'Student team hotline and email inquiry form',
        'Schedule indicators for Tuesday & Thursday recess pickups',
      ],
    },
    {
      id: 'about',
      targetId: 'about',
      name: 'About Us Section',
      subtitle: 'Founding Narrative, Mission, Vision & Strategic SWOT Matrix',
      category: 'core',
      badge: 'Venture Background',
      imageUrl: './phase_documentation.png',
      description:
        'Chronicles the entrepreneurial inception of Squash Cheesy Balls by the BCSC-2A cohort under the guidance of instructor Ms. Alexis Oliver Caraga. Encapsulates our organizational mission, vision for healthier youth snacks, educational objectives, and comprehensive SWOT strategic matrix.',
      discussion:
        'Anchors the enterprise in academic rigor. It articulates our strategic thinking—how internal strengths (₱10 coin price, high nutrition) address market threats (campus canteen alternatives, vegetable price inflation) to build a sustainable student venture.',
      features: [
        'Course context: Entrepreneurial Mind (Elective 211) at ESSU',
        'Formal Mission and Vision statements for campus nutrition',
        '4-Quadrant SWOT Matrix (Strengths, Weaknesses, Opportunities, Threats)',
        'Full Phase 1 & Phase 2 photographic collage record',
      ],
    },
    {
      id: 'feature-calculator',
      targetId: 'financial',
      name: 'Interactive Profit & Batch Simulator',
      subtitle: 'Dynamic Production Calculator & Financial Feasibility Tool',
      category: 'features',
      badge: 'Other Features',
      imageUrl: './financial_line_graph.png',
      description:
        'A fully responsive client-side financial simulator allowing stakeholders to adjust production volume from 20 to 1,000 pieces using an interactive slider. Instantly recomputes Total Sales (@ ₱10.00), Cost of Goods (@ ₱7.09), Net Gross Profit, ROI percentage, and equal 10-way profit dividend per team member.',
      discussion:
        'Brings accounting theory to life. Instead of static textbook tables, students and instructors can test real-time scaling scenarios, visualizing how increasing batch volume from 200 pcs (Phase 1: ₱582 profit) to 300 pcs (Phase 2: ₱873 profit) boosts profitability.',
      features: [
        'Real-time interactive slider from 20 to 1,000 balls',
        'Preset buttons for Daily (100 pcs), Phase 1 (200 pcs), and Phase 2 (300 pcs)',
        'Live ROI and 10-member dividend calculations',
        'Accompanied by documented financial line graph from page 11',
      ],
    },
    {
      id: 'feature-pdf',
      targetId: 'home',
      name: '19-Page Business Plan PDF Reader',
      subtitle: 'Complete Academic Course Submission in Interactive Modal',
      category: 'features',
      badge: 'Other Features',
      imageUrl: './page_01.png',
      description:
        'A custom in-app document viewer displaying all 19 scanned high-resolution pages of the formal Mini Business Plan. Includes page flip controls, thumbnail navigation strip, page jump selector, direct PDF download button, and raw PDF new-tab opener.',
      discussion:
        'Ensures total academic accountability. Anyone inspecting the website can review the original 19-page thesis document submitted to the College of Computer Studies, examining executive summaries, target market demographics, and production flowcharts.',
      features: [
        'Interactive in-browser viewer for pages 1 through 19',
        'Instant one-click PDF download for offline grading',
        'Page indicator with previous / next navigation controls',
        'Direct link to view raw PDF document',
      ],
    },
    {
      id: 'feature-org',
      targetId: 'structure',
      name: 'Management Hierarchy & Org Chart',
      subtitle: 'Executive Leadership, Functional Departments & Kitchen Staff',
      category: 'features',
      badge: 'Other Features',
      imageUrl: './org_chart.png',
      description:
        'Presents the organizational structure of Squash Cheesy Balls Food Enterprise, detailing the CEO (Jhelanz O. Sucatan), 4 Department Managers (Marketing, Sales, IT, Admin, Accounting), and 4 Culinary/Hygiene Production specialists.',
      discussion:
        'Demonstrates team governance and operational division of labor. Each member has explicit job responsibilities, ensuring sanitation compliance, financial transparency, and smooth daily sales logistics on campus.',
      features: [
        'Executive tier down to kitchen crew flow tree',
        'Zoomable original page 9 Org Chart image from plan',
        'Department badges for marketing, finance, tech, and hygiene',
        'Individual roles with operational bio descriptions',
      ],
    },
    {
      id: 'feature-permits',
      targetId: 'permits',
      name: 'Regulatory Dossier & Mayor’s Permit',
      subtitle: 'Simulated Local Government Licensing & Food Safety Compliance',
      category: 'features',
      badge: 'Other Features',
      imageUrl: './business_permit.png',
      description:
        'Features the mock City of Borongan Mayor’s Business Permit (Permit No. 2026-BPLO-0094821) with municipal tax assessment breakdown, alongside compliance dossiers for DTI Name Registration, Food Safety Act (RA 10611), and Code on Sanitation (PD 856).',
      discussion:
        'Educates students on Philippine commercial legalities. Simulates the actual steps required to register a food venture with LGUs and national agencies, reinforcing compliance before commercial launch.',
      features: [
        'Zoomable high-res Borongan BPLO Mayor\'s Permit table',
        'Itemized assessment list: Taxes, Sanitary fees, Fire inspection',
        '6 legal dossier summary cards citing specific Republic Acts',
        'Prominent academic simulation disclaimer notice',
      ],
    },
    {
      id: 'feature-order',
      targetId: 'order',
      name: 'Pre-Order Builder & Facebook Dispatch',
      subtitle: 'Custom Order Slip Generator with Celebration Confetti',
      category: 'features',
      badge: 'Other Features',
      imageUrl: './phase1_cooking.png',
      description:
        'An interactive customer order builder where buyers select quantity, pick dips (Garlic Mayo, Sweet Chili Ketchup, or Mayo-Ketchup Swirl), choose serving style (side cup or drizzled), and specify campus pickup day. Generates a printable receipt slip, copies it to clipboard, launches confetti, and dispatches to Facebook.',
      discussion:
        'Streamlines order taking and reduces food waste by enabling pre-ordered batch forecasting. Avoids popup blocking in browser iframes while creating a joyful, memorable purchasing experience.',
      features: [
        'Real-time price calculator based on ₱10.00 unit pricing',
        'Dip pairing and serving container selectors',
        'Printable ASCII-styled student receipt slip',
        'Canvas confetti explosion and automatic clipboard copy for Facebook',
      ],
    },
  ];

  const filteredSections =
    activeFilter === 'all'
      ? sectionsData
      : sectionsData.filter((sec) => sec.category === activeFilter);

  return (
    <section id="interface" className="py-20 bg-[#fffdfa] border-b border-stone-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Layout className="w-3.5 h-3.5 text-amber-700" />
            Website Interface Documentation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight font-heading">
            Website Interface & Sections
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            A comprehensive, interactive showcase of all distinct sections and specialized features of the Squash Cheesy Balls website. Each section is presented with visual screenshots, functional descriptions, and academic discussions.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-stone-900 text-white shadow-md'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            All Sections ({sectionsData.length})
          </button>

          <button
            onClick={() => setActiveFilter('core')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'core'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Core Pages (Home, Products, Ingredients, Contact, About)</span>
          </button>

          <button
            onClick={() => setActiveFilter('features')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'features'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Other Website Features (Calculator, PDF, Org, Permits, Order)</span>
          </button>
        </div>

        {/* Interface Sections Grid */}
        <div className="space-y-12">
          {filteredSections.map((sec, index) => (
            <div
              key={sec.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Visual Column: Screenshot / Preview Card */}
                <div className="lg:col-span-5 space-y-3">
                  <div
                    onClick={() =>
                      sec.id === 'feature-pdf'
                        ? onOpenPdfModal()
                        : onOpenImageModal(sec.imageUrl, sec.name, sec.subtitle)
                    }
                    className="group relative cursor-pointer rounded-2xl overflow-hidden border-2 border-amber-300 bg-stone-900 aspect-16/10 shadow-sm flex items-center justify-center"
                  >
                    <img
                      src={sec.imageUrl}
                      alt={sec.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Category Overlay Tag */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-stone-900/90 text-amber-400 border border-amber-400/30 shadow-sm">
                        {sec.badge}
                      </span>
                    </div>

                    {/* Hover Overlay Button */}
                    <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/40 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-stone-950 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                        <ZoomIn className="w-3.5 h-3.5 text-amber-600" />
                        {sec.id === 'feature-pdf' ? 'Open PDF Reader' : 'Enlarge Screenshot'}
                      </span>
                    </div>
                  </div>

                  {/* Action Bar for the Screenshot */}
                  <div className="flex items-center justify-between gap-2 pt-1 text-xs">
                    <button
                      onClick={() =>
                        sec.id === 'feature-pdf'
                          ? onOpenPdfModal()
                          : onOpenImageModal(sec.imageUrl, sec.name, sec.subtitle)
                      }
                      className="inline-flex items-center gap-1 text-stone-600 hover:text-amber-700 font-semibold cursor-pointer"
                    >
                      <ZoomIn className="w-3.5 h-3.5 text-amber-500" />
                      <span>Click to view full image</span>
                    </button>

                    {sec.id === 'feature-pdf' ? (
                      <button
                        onClick={onOpenPdfModal}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold transition-colors cursor-pointer shadow-xs"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Launch PDF Viewer</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => scrollToSection(sec.targetId)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold transition-colors cursor-pointer shadow-xs"
                      >
                        <span>Visit Section</span>
                        <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Column: Description & Academic Discussion */}
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                        Section #{index + 1}
                      </span>
                      <span className="text-stone-300">•</span>
                      <span className="text-xs text-stone-500 font-medium">
                        Target anchor: #{sec.targetId}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-stone-900 font-heading">
                      {sec.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-amber-800 mt-0.5">
                      {sec.subtitle}
                    </p>
                  </div>

                  {/* Section Description */}
                  <div className="bg-[#fffdf7] border border-amber-200/80 rounded-2xl p-4 shadow-2xs">
                    <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wide flex items-center gap-1.5 mb-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      Section Description & User Experience:
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {sec.description}
                    </p>
                  </div>

                  {/* Academic Discussion */}
                  <div className="bg-amber-50/70 border border-amber-300/80 rounded-2xl p-4 shadow-2xs">
                    <h4 className="text-xs font-bold text-amber-950 uppercase tracking-wide flex items-center gap-1.5 mb-1.5">
                      <FileText className="w-3.5 h-3.5 text-amber-700" />
                      Academic Discussion & Entrepreneurial Value:
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                      {sec.discussion}
                    </p>
                  </div>

                  {/* Features Bullet List */}
                  <div>
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">
                      Key Interactive Features:
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {sec.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-1.5 text-stone-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold font-heading text-white">
              Prepared for Elective 211 Course Evaluation
            </h4>
            <p className="text-xs text-stone-400 max-w-xl">
              All website sections are live, modular, and directly navigable. Evaluators can inspect code, live layouts, or raw academic business documentation.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('home')}
              className="px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold transition-colors cursor-pointer"
            >
              Back to Top
            </button>
            <button
              onClick={onOpenPdfModal}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-colors cursor-pointer"
            >
              Read Business Plan (19 Pages)
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
