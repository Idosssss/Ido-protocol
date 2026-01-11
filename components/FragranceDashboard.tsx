import React, { useState } from 'react';
import { Droplet, Wind, Sun, Snowflake, Cloud, Flame, Crown, SprayCan, Clock, Activity, Radar } from 'lucide-react';
import { Fragrance } from '../types';

const FRAGRANCES: Fragrance[] = [
    {
        id: 'ysl-y-edp',
        name: 'Y EDP',
        house: 'Yves Saint Laurent',
        notes: 'Apple, Sage, Amberwood',
        vibe: ['Fresh', 'Versatile'],
        season: ['Spring', 'Summer', 'Fall'],
        performance: 'Beast Mode',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.50757.avif',
        projection: '6 Feet',
        sillage: 'Strong'
    },
    {
        id: 'le-beau-le-parfum',
        name: 'Le Beau Le Parfum',
        house: 'Jean Paul Gaultier',
        notes: 'Coconut, Pineapple, Tonka',
        vibe: ['Tropical', 'Sexy'],
        season: ['Summer'],
        performance: 'Long Lasting',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.72158.avif',
        projection: '5 Feet',
        sillage: 'Moderate'
    },
    {
        id: 'bleu-de-chanel',
        name: 'Bleu de Chanel',
        house: 'Chanel',
        notes: 'Grapefruit, Incense, Amber',
        vibe: ['Classy', 'Office'],
        season: ['Spring', 'Summer', 'Fall', 'Winter'],
        performance: 'Moderate',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.25967.avif',
        projection: '3 Feet',
        sillage: 'Moderate'
    },
    {
        id: 'born-in-roma',
        name: 'Born in Roma',
        house: 'Valentino',
        notes: 'Vanilla, Vetiver, Salt',
        vibe: ['Sweet', 'Playful'],
        season: ['Fall', 'Winter', 'Spring'],
        performance: 'Long Lasting',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.78740.avif',
        projection: '5 Feet',
        sillage: 'Strong'
    },
    {
        id: 'cdnim',
        name: 'Club de Nuit Intense Man',
        house: 'Armaf',
        notes: 'Lemon, Pineapple, Birch',
        vibe: ['Loud', 'Masculine'],
        season: ['Spring', 'Summer', 'Fall'],
        performance: 'Beast Mode',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.34696.avif',
        projection: '8 Feet',
        sillage: 'Enormous'
    },
    {
        id: 'lv-imagination',
        name: 'Imagination',
        house: 'Louis Vuitton',
        notes: 'Citron, Tea, Ambroxan',
        vibe: ['Luxury', 'Clean'],
        season: ['Spring', 'Summer'],
        performance: 'Long Lasting',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.67370.avif',
        projection: '4 Feet',
        sillage: 'Moderate'
    },
    {
        id: 'swy-intense',
        name: 'Stronger With You Intensely',
        house: 'Emporio Armani',
        notes: 'Toffee, Cinnamon, Vanilla',
        vibe: ['Cozy', 'Date Night'],
        season: ['Winter', 'Fall'],
        performance: 'Beast Mode',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.52802.avif',
        projection: '7 Feet',
        sillage: 'Strong'
    },
    {
        id: 'adg',
        name: 'Acqua di Giò',
        house: 'Giorgio Armani',
        notes: 'Marine, Lime, Jasmine',
        vibe: ['Classic', 'Fresh'],
        season: ['Summer', 'Spring'],
        performance: 'Moderate',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.410.avif',
        projection: '3 Feet',
        sillage: 'Moderate'
    },
    {
        id: 'le-male',
        name: 'Le Male',
        house: 'Jean Paul Gaultier',
        notes: 'Mint, Lavender, Vanilla',
        vibe: ['Club', 'Iconic'],
        season: ['Fall', 'Winter', 'Spring'],
        performance: 'Long Lasting',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.430.avif',
        projection: '5 Feet',
        sillage: 'Strong'
    },
    {
        id: 'one-million',
        name: '1 Million',
        house: 'Paco Rabanne',
        notes: 'Blood Mandarin, Cinnamon, Leather',
        vibe: ['Party', 'Flashy'],
        season: ['Winter', 'Fall'],
        performance: 'Beast Mode',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.3747.avif',
        projection: '7 Feet',
        sillage: 'Enormous'
    },
    {
        id: 'adg-parfum',
        name: 'Acqua di Giò Parfum',
        house: 'Giorgio Armani',
        notes: 'Marine, Rosemary, Incense',
        vibe: ['Mature', 'Dark Fresh'],
        season: ['Spring', 'Summer', 'Fall'],
        performance: 'Long Lasting',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.81508.avif',
        projection: '4 Feet',
        sillage: 'Moderate'
    },
    {
        id: 'eros',
        name: 'Eros',
        house: 'Versace',
        notes: 'Mint, Apple, Vanilla',
        vibe: ['Party', 'Youthful'],
        season: ['Winter', 'Spring', 'Fall', 'Summer'],
        performance: 'Long Lasting',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.62762.avif',
        projection: '6 Feet',
        sillage: 'Strong'
    },
    {
        id: 'spicebomb',
        name: 'Spicebomb',
        house: 'Viktor&Rolf',
        notes: 'Cinnamon, Leather, Tobacco',
        vibe: ['Spicy', 'Warm'],
        season: ['Winter', 'Fall'],
        performance: 'Long Lasting',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.13857.avif',
        projection: '6 Feet',
        sillage: 'Strong'
    },
    {
        id: 'the-most-wanted',
        name: 'The Most Wanted',
        house: 'Azzaro',
        notes: 'Ginger, Wood, Vanilla',
        vibe: ['Seductive', 'Night'],
        season: ['Winter', 'Fall'],
        performance: 'Long Lasting',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.90953.avif',
        projection: '5 Feet',
        sillage: 'Strong'
    },
    {
        id: 'sauvage',
        name: 'Sauvage (Elixir)',
        house: 'Dior',
        notes: 'Lavender, Licorice, Sandalwood',
        vibe: ['Power', 'Alpha'],
        season: ['Winter', 'Fall', 'Spring'],
        performance: 'Beast Mode',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.31861.avif',
        projection: '9 Feet',
        sillage: 'Nuclear'
    },
    {
        id: 'meteore',
        name: 'Météore',
        house: 'Louis Vuitton',
        notes: 'Mandarin, Pepper, Vetiver',
        vibe: ['Fresh', 'Sharp'],
        season: ['Summer', 'Spring'],
        performance: 'Moderate',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.62251.avif',
        projection: '4 Feet',
        sillage: 'Moderate'
    },
    {
        id: 'limmensite',
        name: 'L\'Immensité',
        house: 'Louis Vuitton',
        notes: 'Grapefruit, Ginger, Ambroxan',
        vibe: ['Rich', 'Sophisticated'],
        season: ['Summer', 'Spring', 'Fall'],
        performance: 'Long Lasting',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.49751.avif',
        projection: '5 Feet',
        sillage: 'Strong'
    },
    {
        id: 'ultra-male',
        name: 'Ultra Male',
        house: 'Jean Paul Gaultier',
        notes: 'Pear, Vanilla, Cinnamon',
        vibe: ['Party', 'Sweet'],
        season: ['Winter', 'Fall'],
        performance: 'Beast Mode',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.30947.avif',
        projection: '6 Feet',
        sillage: 'Strong'
    },
    {
        id: 'layton',
        name: 'Layton',
        house: 'Parfums de Marly',
        notes: 'Apple, Vanilla, Cardamom',
        vibe: ['Date Night', 'Noble'],
        season: ['Winter', 'Fall', 'Spring'],
        performance: 'Long Lasting',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.39314.avif',
        projection: '5 Feet',
        sillage: 'Strong'
    },
    {
        id: 'hawas',
        name: 'Hawas',
        house: 'Rasasi',
        notes: 'Plum, Watery Notes, Ambergris',
        vibe: ['Playful', 'Bubblegum'],
        season: ['Summer', 'Spring'],
        performance: 'Beast Mode',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.46890.avif',
        projection: '7 Feet',
        sillage: 'Strong'
    },
    {
        id: 'ombre-leather',
        name: 'Ombré Leather',
        house: 'Tom Ford',
        notes: 'Leather, Amber, Jasmine',
        vibe: ['Bad Boy', 'Leather'],
        season: ['Winter', 'Fall'],
        performance: 'Long Lasting',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.95389.avif',
        projection: '4 Feet',
        sillage: 'Moderate'
    },
    {
        id: 'prada-lhomme',
        name: 'Prada L\'Homme',
        house: 'Prada',
        notes: 'Iris, Neroli, Amber',
        vibe: ['Clean', 'Office', 'Soap'],
        season: ['Spring', 'Summer'],
        performance: 'Moderate',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.39029.avif',
        projection: '3 Feet',
        sillage: 'Moderate'
    },
    // --- NEW ADDITIONS ---
    {
        id: 'erba-pura',
        name: 'Erba Pura',
        house: 'Xerjoff',
        notes: 'Orange, Lemon, Musk',
        vibe: ['Fruity', 'Loud'],
        season: ['Summer', 'Spring'],
        performance: 'Beast Mode',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.55157.avif',
        projection: '8 Feet',
        sillage: 'Nuclear'
    },
    {
    id: 'vulcan-flame',
    name: 'Vulcan Flame',
    house: 'IDO Protocol',
    notes: 'Saffron, Molten Amber, Incense, Smoked Oud',
    vibe: ['Radiant', 'Intense', 'Ascended'],
    season: ['Winter', 'Fall'],
    performance: 'Beast Mode',
    image: 'https://images.unsplash.com/photo-1595433707802-68067d84985a?q=80&w=270&h=270&auto=format&fit=crop', 
    projection: 'Room Filling',
    sillage: 'Extreme'
},
    {
        id: 'khamrah',
        name: 'Khamrah',
        house: 'Lattafa',
        notes: 'Cinnamon, Dates, Praline',
        vibe: ['Sweet', 'Cozy'],
        season: ['Winter', 'Fall'],
        performance: 'Beast Mode',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.75805.avif',
        projection: '6 Feet',
        sillage: 'Strong'
    },
    {
        id: 'god-of-fire',
        name: 'God of Fire',
        house: 'Stéphane Humbert Lucas 777',
        notes: 'Mango, Ginger, Lemon, Woods',
        vibe: ['Exotic', 'Tropical'],
        season: ['Summer', 'Spring'],
        performance: 'Long Lasting',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.72381.avif',
        projection: '6 Feet',
        sillage: 'Strong'
    },
    {
        id: 'afternoon-swim',
        name: 'Afternoon Swim',
        house: 'Louis Vuitton',
        notes: 'Orange, Bergamot, Mandarin',
        vibe: ['Fresh', 'Citrus'],
        season: ['Summer'],
        performance: 'Moderate',
        image: 'https://fimgs.net/mdimg/perfume-thumbs/dark-270x270.53947.avif',
        projection: '3 Feet',
        sillage: 'Moderate'
    }
];

const FragranceDashboard: React.FC = () => {
  const [activeSeason, setActiveSeason] = useState<'Winter' | 'Spring' | 'Summer' | 'Fall'>('Winter');

  const filteredScents = FRAGRANCES.filter(f => f.season.includes(activeSeason));

  const renderBodyMap = () => (
      <div className="relative w-64 h-96 mx-auto bg-[#0a0f18] rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-400/5 via-transparent to-transparent opacity-50 pointer-events-none" />
          
          {/* Improved Silhouette - Stylized Abstract Body */}
          <svg viewBox="0 0 200 400" className="h-[90%] w-auto opacity-40 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                {/* Head */}
                <ellipse cx="100" cy="50" rx="25" ry="30" fill="none" stroke="#64748b" strokeWidth="2" />
                {/* Neck */}
                <path d="M85 75 L85 100 L115 100 L115 75" fill="none" stroke="#64748b" strokeWidth="2" />
                {/* Shoulders */}
                <path d="M50 120 Q100 100 150 120" fill="none" stroke="#64748b" strokeWidth="2" />
                {/* Arms */}
                <path d="M50 120 L30 200 L20 280" fill="none" stroke="#64748b" strokeWidth="2" />
                <path d="M150 120 L170 200 L180 280" fill="none" stroke="#64748b" strokeWidth="2" />
                {/* Torso */}
                <path d="M85 100 L60 140 L70 250 L100 260 L130 250 L140 140 L115 100" fill="none" stroke="#64748b" strokeWidth="2" />
          </svg>

          {/* Pulse Points - Accurate Locations with Glow */}
          
          {/* Neck / Carotid */}
          <div className="absolute top-[22%] left-[43%] w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_15px_red] z-10"></div>
          <div className="absolute top-[22%] right-[43%] w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_15px_red] z-10"></div>
          
          {/* Base of Throat */}
          <div className="absolute top-[25%] left-[50%] -translate-x-1/2 w-3 h-3 bg-red-500/80 rounded-full animate-pulse shadow-[0_0_20px_red] z-10"></div>

          {/* Wrists (Estimated position based on arms down) */}
          <div className="absolute bottom-[28%] left-[15%] w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_15px_red] z-10"></div>
          <div className="absolute bottom-[28%] right-[15%] w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_15px_red] z-10"></div>

          {/* Inner Elbows */}
          <div className="absolute top-[48%] left-[22%] w-2 h-2 bg-red-500/60 rounded-full animate-pulse shadow-[0_0_10px_red] z-10"></div>
          <div className="absolute top-[48%] right-[22%] w-2 h-2 bg-red-500/60 rounded-full animate-pulse shadow-[0_0_10px_red] z-10"></div>

          <div className="absolute bottom-4 text-center w-full">
              <p className="text-[10px] text-red-400 font-bold uppercase tracking-widest animate-pulse flex items-center justify-center gap-2">
                  <Flame className="w-3 h-3" /> Thermal Projection Zones
              </p>
          </div>
      </div>
  );

  return (
    <section id="fragrance" className="py-24 bg-[#050505] relative border-t border-white/5 scroll-mt-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3705_1px,transparent_1px),linear-gradient(to_bottom,#d4af3705_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
                <span className="text-gold-400 font-bold tracking-widest uppercase mb-2 block flex items-center gap-2">
                    <Crown className="w-4 h-4" /> Olfactory Mastery
                </span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2">The Scent Wardrobe</h2>
                <p className="text-gray-400 text-sm max-w-lg">
                    Fragrance is invisible architecture. It occupies space before you are seen and lingers after you leave.
                </p>
            </div>
            <div className="flex gap-2 mt-6 md:mt-0">
                 {['Winter', 'Spring', 'Summer', 'Fall'].map((season) => (
                     <button
                        key={season}
                        onClick={() => setActiveSeason(season as any)}
                        className={`px-4 py-2 rounded-lg border text-xs font-bold uppercase tracking-widest transition-all ${
                            activeSeason === season 
                            ? 'bg-gold-400 text-black border-gold-400' 
                            : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white'
                        }`}
                     >
                        {season}
                     </button>
                 ))}
            </div>
        </div>

        {/* Feature: The "Eternal Scent" Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <div className="lg:col-span-1 bg-[#0a0f18] rounded-2xl border border-gold-400/20 p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Clock size={80} />
                </div>
                <h3 className="text-2xl font-serif text-white mb-6">Longevity Protocol</h3>
                
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                            <Droplet className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm mb-1">1. Moisture Lock</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Fragrance evaporates 5x faster on dry skin. Apply unscented lotion or Vaseline to pulse points first.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                            <Flame className="w-5 h-5 text-red-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm mb-1">2. Heat Targeting</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Spray where blood vessels are closest to skin (Neck, Behind Ears, Inner Elbows).
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center flex-shrink-0">
                            <SprayCan className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm mb-1">3. The "No-Rub" Rule</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                <span className="text-red-500 font-bold">NEVER</span> rub wrists together. Friction destroys the top notes and alters development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-2 flex items-center justify-center bg-black/50 rounded-2xl border border-white/5 p-8 relative">
                 {/* Decorative */}
                 <div className="absolute top-4 left-4 text-[10px] text-gray-600 font-mono uppercase">Fig 4.0: Projection Dynamics</div>
                 
                 <div className="flex flex-col md:flex-row items-center gap-12 w-full">
                     {renderBodyMap()}
                     <div className="flex-1 space-y-4">
                         <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                             <div className="flex justify-between items-center mb-2">
                                 <span className="text-xs font-bold text-white uppercase flex items-center gap-2">
                                     <Radar className="w-3 h-3" /> Projection Radius
                                 </span>
                                 <span className="text-xs text-gold-400">Variable (3-9 Feet)</span>
                             </div>
                             <div className="w-full h-1 bg-gray-800 rounded-full">
                                 <div className="w-[80%] h-full bg-gold-400 rounded-full shadow-[0_0_10px_#D4AF37]"></div>
                             </div>
                             <p className="text-[10px] text-gray-500 mt-2">
                                Distance at which scent is detectable. Influenced by ambroxan and alcohol concentration.
                             </p>
                         </div>
                         <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                             <div className="flex justify-between items-center mb-2">
                                 <span className="text-xs font-bold text-white uppercase flex items-center gap-2">
                                     <Wind className="w-3 h-3" /> Scent Trail (Sillage)
                                 </span>
                                 <span className="text-xs text-blue-400">High</span>
                             </div>
                             <div className="w-full h-1 bg-gray-800 rounded-full">
                                 <div className="w-[90%] h-full bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"></div>
                             </div>
                             <p className="text-[10px] text-gray-500 mt-2">
                                The olfactory wake left behind as you move through space.
                             </p>
                         </div>
                     </div>
                 </div>
            </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredScents.map((scent) => (
                <div key={scent.id} className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-gold-400/50 transition-all duration-300">
                    <div className="aspect-square bg-[#111] relative p-6 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gold-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <img 
                            src={scent.image} 
                            alt={scent.name}
                            className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110 z-10"
                        />

                        {scent.performance === 'Beast Mode' && (
                            <div className="absolute top-3 right-3 px-2 py-1 bg-red-900/80 border border-red-500/30 rounded text-[10px] font-bold text-red-200 uppercase tracking-wider backdrop-blur-sm z-20">
                                Beast Mode
                            </div>
                        )}
                    </div>
                    
                    <div className="p-6">
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{scent.house}</p>
                        <h4 className="text-lg font-serif font-bold text-white mb-3 group-hover:text-gold-400 transition-colors truncate">{scent.name}</h4>
                        
                        <div className="space-y-3">
                            <div>
                                <span className="text-[10px] text-gray-600 uppercase block mb-1">Key Notes</span>
                                <p className="text-xs text-gray-300 truncate">{scent.notes}</p>
                            </div>
                            
                            {/* Projection & Sillage Stats */}
                            <div className="grid grid-cols-2 gap-2 border-t border-white/5 pt-3 mt-3">
                                <div>
                                    <span className="text-[9px] text-gray-500 uppercase block">Projection</span>
                                    <span className="text-xs text-white font-mono">{scent.projection}</span>
                                </div>
                                <div>
                                    <span className="text-[9px] text-gray-500 uppercase block">Sillage</span>
                                    <span className="text-xs text-white font-mono">{scent.sillage}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {scent.vibe.map(v => (
                                    <span key={v} className="px-2 py-1 bg-white/5 rounded border border-white/10 text-[9px] text-gray-400 uppercase">
                                        {v}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default FragranceDashboard;