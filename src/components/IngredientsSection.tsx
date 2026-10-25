import { Sparkles, Heart, ShieldCheck, Check, Info, Apple, Flame, Utensils } from 'lucide-react';
import { DAILY_EXPENSES } from '../data/businessData';

interface IngredientsSectionProps {
  onOpenImageModal: (imgUrl: string, title: string, caption: string) => void;
  onOpenOrderModal: () => void;
}

export default function IngredientsSection({ onOpenImageModal, onOpenOrderModal }: IngredientsSectionProps) {
  const coreIngredients = [
    {
      name: 'Fresh Kalabasa (Local Squash)',
      category: 'Primary Base & Nutrient Core',
      role: 'Forms the golden dough body, providing natural sweet flavor, moist texture, and vibrant amber color.',
      benefits: 'Rich in Vitamin A, Beta-Carotene, Vitamin C, Dietary Fiber, and antioxidant carotenoids.',
      sourcing: 'Locally procured from Eastern Samar farmers, supporting provincial agricultural produce.',
      highlight: 'High Vitamin A & Low Calorie',
      icon: '🌿',
    },
    {
      name: 'Quick-Melt Cheddar Cheese',
      category: 'Savory Center Core',
      role: 'Enclosed within each squash dough sphere to melt into a gooey, savory cream center upon frying.',
      benefits: 'High in dietary Calcium, Protein, and Vitamin B12 for active university students.',
      sourcing: 'Hygienically sliced into uniform cubes and refrigerated below 4°C prior to stuffing.',
      highlight: 'Signature Melty Cheese Stretch',
      icon: '🧀',
    },
    {
      name: 'Japanese Panko Breadcrumbs',
      category: 'Crispy Outer Crust',
      role: 'Covers the double-dredged ball to create an audibly crunchy barrier that locks in moisture.',
      benefits: 'Delivers a lightweight, non-greasy exterior that holds crispness for hours.',
      sourcing: 'Store-grade breadcrumb flakes inspected daily for zero moisture contamination.',
      highlight: 'Golden Crunch Shield',
      icon: '🍞',
    },
    {
      name: 'All-Purpose Flour & Cornstarch Blend',
      category: 'Dough Binder & Texture Stabilizer',
      role: 'Binds steamed mashed squash puree without masking its natural aroma; cornstarch adds featherweight crispness.',
      benefits: 'Provides steady carbohydrate energy and holds structural integrity in 175°C oil.',
      sourcing: 'Fine-sifted food-grade baking wheat flour.',
      highlight: 'Pliable & Tear-Resistant',
      icon: '🌾',
    },
    {
      name: 'Fresh Farm Eggs',
      category: 'Adhesion & Protein Matrix',
      role: 'Serves as an egg wash that anchors breadcrumbs firmly to the squash dough during rapid frying.',
      benefits: 'Adds richness, golden hue, and essential amino acids.',
      sourcing: 'Fresh shell eggs washed and sanitized before batch whisking.',
      highlight: '100% Crumb Adhesion',
      icon: '🥚',
    },
    {
      name: 'Spanish Paprika, Black Pepper & Iodized Salt',
      category: 'Savory Seasoning Symphony',
      role: 'Balances squash sweetness with warmth, gentle smokiness, and peppery bite.',
      benefits: 'Capsaicin and piperine stimulate digestion; iodized salt prevents micronutrient deficiency.',
      sourcing: 'Aromatic food spices sealed in hygienic shaker dispensers.',
      highlight: 'Harmonious Sweet-Savory Blend',
      icon: '🌶️',
    },
    {
      name: 'Pure High-Smoke Vegetable Oil',
      category: 'Cooking Medium',
      role: 'Deep-fries the balls at 175°C to 185°C, expanding breadcrumbs into a crisp golden coat.',
      benefits: 'Zero trans fats, cholesterol-free, filtered after each cooking cycle.',
      sourcing: 'Fresh commercial cooking oil never re-used past recommended degradation limits.',
      highlight: 'Clean Golden Frying',
      icon: '🍳',
    },
    {
      name: 'House Garlic Mayo & Sweet Chili Ketchup',
      category: 'Signature Dipping Sauces',
      role: 'Available in side cups or drizzled directly on top for contrasting creamy tanginess.',
      benefits: 'Customizable flavor profile based on customer taste preference.',
      sourcing: 'Dispensed through hygienic food-grade squeeze bottles with tip seals.',
      highlight: 'Complimentary Sauce Pairings',
      icon: '🥣',
    },
  ];

  return (
    <section id="ingredients" className="py-20 bg-[#fbf9f3] border-b border-stone-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Wholesome Raw Materials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight font-heading">
            Ingredients & Formulation
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Every piece of Squash Cheesy Balls is crafted from locally grown produce and kitchen-staple ingredients. We balance wholesome vegetable nutrition with street snack indulgence.
          </p>
        </div>

        {/* Featured Squash Hero Highlight Banner */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-14 overflow-hidden relative">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-4 flex justify-center">
              <div
                onClick={() => onOpenImageModal('./test_squash.png', 'Fresh Local Squash (Kalabasa)', 'Farm-fresh local squash photographed during Phase 1 formulation testing.')}
                className="group cursor-pointer rounded-2xl overflow-hidden border-4 border-white/30 bg-amber-700/40 p-2 aspect-square max-w-xs w-full shadow-lg hover:scale-105 transition-transform"
              >
                <img
                  src="./test_squash.png"
                  alt="Fresh Local Squash"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="mt-2 text-center text-xs font-semibold text-amber-100 flex items-center justify-center gap-1">
                  <span>Click to view raw produce</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 fill-white" />
                The Star Ingredient: Kalabasa
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-heading leading-tight">
                Why Fresh Local Squash?
              </h3>
              <p className="text-amber-100 text-sm sm:text-base leading-relaxed">
                Squash (Kalabasa) is an abundant, budget-friendly agricultural crop in Eastern Samar. Many students skip vegetables due to taste or preparation, but by mashing sweet steamed squash and wrapping it around molten cheddar cheese, we transform an essential dietary staple into an irresistible campus craving.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-stone-900">
                <div className="bg-white/95 rounded-xl p-3 text-center shadow-xs">
                  <span className="block text-xl font-black text-amber-600 font-heading">High Vit. A</span>
                  <span className="text-[11px] font-semibold text-stone-600">Eye Health</span>
                </div>
                <div className="bg-white/95 rounded-xl p-3 text-center shadow-xs">
                  <span className="block text-xl font-black text-orange-600 font-heading">Fiber-Rich</span>
                  <span className="text-[11px] font-semibold text-stone-600">Easy Digestion</span>
                </div>
                <div className="bg-white/95 rounded-xl p-3 text-center shadow-xs">
                  <span className="block text-xl font-black text-emerald-600 font-heading">Local Crop</span>
                  <span className="text-[11px] font-semibold text-stone-600">Farm Direct</span>
                </div>
                <div className="bg-white/95 rounded-xl p-3 text-center shadow-xs">
                  <span className="block text-xl font-black text-amber-700 font-heading">0% Added Sugar</span>
                  <span className="text-[11px] font-semibold text-stone-600">Natural Sweetness</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Ingredient Detailed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {coreIngredients.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-amber-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                    {item.highlight}
                  </span>
                </div>
                <h4 className="font-bold text-stone-900 text-base font-heading mb-1">
                  {item.name}
                </h4>
                <p className="text-[11px] text-amber-700 font-semibold mb-2">
                  {item.category}
                </p>
                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  {item.role}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 space-y-1.5 text-[11px]">
                <div className="flex items-start gap-1.5 text-stone-700">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Benefits:</strong> {item.benefits}</span>
                </div>
                <div className="flex items-start gap-1.5 text-stone-500">
                  <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Handling:</strong> {item.sourcing}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Daily Batch Costing Table Preview Banner */}
        <div className="bg-[#fffdf8] border-2 border-stone-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
              Transparent Raw Material Costing
            </span>
            <h3 className="text-xl font-bold text-stone-900 font-heading">
              100-Piece Daily Batch Budget: ₱700.00
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl">
              Fresh squash, cheese blocks, panko crumbs, and cooking oil account for ₱7.09 per piece in production, giving consumers unmatched nutritious value at ₱10.00.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#financial"
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-5 py-3 rounded-xl text-xs font-bold transition-colors"
            >
              <span>View Full Cost Breakdown</span>
            </a>
            <button
              onClick={onOpenOrderModal}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 px-5 py-3 rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              <span>Order Fresh Batch (₱10)</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
