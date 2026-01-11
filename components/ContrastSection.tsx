import React, { useState } from 'react';
import { Layers, ScanFace } from 'lucide-react';

const ContrastSection: React.FC = () => {
  const [contrastMode, setContrastMode] = useState<'low' | 'high'>('low');

  const images = {
    low: "https://gcdnb.pbrd.co/images/Xhvn7wmowi9y.png?o=1",
    high: "https://gcdnb.pbrd.co/images/ahzh3wO56Sbg.png?o=1"
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://cdn.instant.so/sites/9m9NOCxHNwUK7yNf/assets/5jyiDhSYyAhtxR78/shower-duo-card-image.webp?width=1280"; // Fallback to a known working asset
  }

  return (
    <section id="hair-protocol" className="py-32 relative scroll-mt-20 border-t border-white/5 bg-[#030303]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Content Logic */}
          <div className="w-full lg:w-1/2">
             <div className="mb-12">
                <span className="text-gold-400 font-bold tracking-widest uppercase mb-2 block">Phase II</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Contrast Theory</h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Facial contrast—the difference in luminance between features (eyes, brows, lips) and skin—is a sexually dimorphic trait. High contrast signals youth and high testosterone.
                </p>
             </div>

             <div className="space-y-6">
                 <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                    <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                        <Layers className="text-gold-400 w-5 h-5" /> The Protocol
                    </h3>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-gold-400 rounded-full mt-2 flex-shrink-0" />
                            <span><strong>Brow Tinting:</strong> Dye eyebrows dark brown/black. Thick, dark brows create a "heavy" orbital ridge illusion.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-gold-400 rounded-full mt-2 flex-shrink-0" />
                            <span><strong>Skin Luminosity:</strong> Use Vitamin C + Beta Carotene to brighten skin tone, increasing the delta between skin and hair.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-gold-400 rounded-full mt-2 flex-shrink-0" />
                            <span><strong>The Goatee Protocol:</strong> A darkened goatee mimics chin projection and masks downward growth, improving the perceived gonial angle.</span>
                        </li>
                    </ul>
                 </div>
             </div>
          </div>

          {/* Right: Image Face Simulator */}
          <div className="w-full lg:w-1/2 flex justify-center">
             <div className="relative w-full max-w-md aspect-[3/4] glass-panel rounded-2xl border-gold-400/20 p-1 overflow-hidden group">
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 bg-black/50 rounded-full border border-white/10">
                    <ScanFace className="w-4 h-4 text-gold-400 animate-pulse" />
                    <span className="text-[10px] text-gold-400 uppercase tracking-widest font-bold">Biometric Analysis</span>
                </div>

                {/* The Image Canvas */}
                <div className="w-full h-full bg-[#050505] rounded-xl relative overflow-hidden">
                    <img 
                        src={images[contrastMode]} 
                        alt="Contrast Analysis" 
                        onError={handleImageError}
                        className="w-full h-full object-cover transition-opacity duration-500"
                    />
                    
                    {/* Scan Line Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-400/20 to-transparent h-[10%] w-full animate-scan pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gold-400/5 mix-blend-overlay pointer-events-none"></div>
                </div>

                {/* Control Panel */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 bg-black/80 backdrop-blur-md p-2 rounded-full border border-white/10 z-20">
                    <button 
                        onClick={() => setContrastMode('low')}
                        className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${contrastMode === 'low' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
                    >
                        Low Contrast
                    </button>
                    <button 
                        onClick={() => setContrastMode('high')}
                        className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${contrastMode === 'high' ? 'bg-gold-400 text-black shadow-[0_0_15px_#D4AF37]' : 'text-gray-500 hover:text-white'}`}
                    >
                        High Contrast
                    </button>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContrastSection;