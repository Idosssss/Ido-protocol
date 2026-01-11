import React, { useState } from 'react';
import Header from './components/Header';
import AscensionSelector from './components/AscensionSelector';
import ProductCatalog from './components/ProductCatalog';
import WikiModal from './components/WikiModal';
import ContrastSection from './components/ContrastSection';
import DataAnalytics from './components/DataAnalytics';
import HardmaxxingGuide from './components/HardmaxxingGuide';
import GymRoutine from './components/GymRoutine';
import FragranceDashboard from './components/FragranceDashboard'; // New Import
import { WIKI_MODULES } from './data';
import { WikiModule } from './types';
import { ArrowDown, Zap, Droplet, Crown, Dna, Eye, MoveRight, Layers, Flame, Search, ArrowRight, Grid3X3, Beaker } from 'lucide-react';

function App() {
  const [selectedModule, setSelectedModule] = useState<WikiModule | null>(null);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold-400 selection:text-black font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-400/10 via-black to-black opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
        {/* Subtle Grid Pattern for "Tech" Feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-8 inline-flex items-center gap-3 px-6 py-2 rounded-full border border-gold-400/30 bg-gold-400/5 text-gold-400 text-xs font-bold tracking-[0.3em] uppercase animate-fade-in-up backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            Ido Protocol Online
          </div>
          
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-[1.1] animate-fade-in-up delay-100 uppercase tracking-tight">
            IDO PROTOCOL<br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]">
              2026
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
            The definitive cyber-luxury framework for aesthetic maximization. Analyze phenotype. Optimize metrics. Ascend.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <a href="#ascension" className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold-400 text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 rounded-sm">
              Start Analysis <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a href="#catalog" className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-all duration-300 rounded-sm hover:border-gold-400/50">
              View Armory
            </a>
          </div>
        </div>
      </section>

      {/* Ascension Selector */}
      <section id="ascension" className="py-32 relative scroll-mt-32 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16 text-center">
             <div className="w-px h-16 bg-gold-400 mb-6"></div>
             <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Phase I: Analysis</h2>
             <p className="text-gray-500 uppercase tracking-widest text-sm">Input Phenotype Data Below</p>
          </div>
          <AscensionSelector />
        </div>
      </section>

      {/* VISUAL SECTION 1: Contrast Theory */}
      <ContrastSection />

      {/* VISUAL SECTION 2: Castor Oil */}
      <section id="castor-wiki" className="py-32 relative bg-[#050505] scroll-mt-32 border-t border-white/5">
         <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-gold-400/5 to-transparent pointer-events-none" />
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2">
                <span className="text-gold-400 font-bold tracking-widest uppercase mb-4 block">The Secret Compound</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Ricinoleic Acid</h2>
                
                {/* Molecule / Science Card */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-xl mb-8 relative overflow-hidden group">
                  <div className="absolute right-0 top-0 p-4 opacity-10">
                      <Beaker size={80} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <Dna className="text-gold-400 w-5 h-5" /> Mechanism of Action
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed z-10 relative">
                    Castor Oil is 90% <strong>Ricinoleic Acid</strong>. This unique fatty acid inhibits <strong>Prostaglandin D2 (PGD2)</strong> synthase.
                  </p>
                  <div className="mt-4 p-4 bg-black/50 rounded-lg border-l-2 border-red-500">
                     <p className="text-sm text-gray-400">
                        <span className="text-red-500 font-bold uppercase text-xs tracking-widest block mb-1">Biological Fact</span>
                        PGD2 is the primary calcification signal that causes hair follicles to miniaturize. Blocking it allows the follicle to return to Anagen (Growth) phase.
                     </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-full bg-gold-400 text-black flex items-center justify-center font-bold flex-shrink-0">1</div>
                     <div>
                       <h4 className="text-white font-bold mb-1">Nightly Brow Application</h4>
                       <p className="text-sm text-gray-500">Apply cold-pressed oil to brows and lashes to increase shaft diameter.</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-full bg-transparent border border-gray-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                     <div>
                       <h4 className="text-white font-bold mb-1">Hairline Massage</h4>
                       <p className="text-sm text-gray-500">Use as a carrier oil for 5-minute mechanical massage to stimulate blood flow.</p>
                     </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="glass-panel p-2 rounded-2xl border border-gold-400/20 shadow-2xl shadow-gold-400/10 rotate-3 hover:rotate-0 transition-transform duration-500">
                   <div className="bg-black/50 rounded-xl p-8 text-center">
                      <Droplet className="w-16 h-16 text-gold-400 mx-auto mb-6 animate-pulse-slow" />
                      <h3 className="text-2xl font-serif text-white">Recommended Source</h3>
                      <p className="text-gray-400 mb-6 font-bold text-lg">Pure Organic Cold-Pressed Castor Oil</p>
                      <div className="inline-block px-4 py-2 bg-gold-400/10 text-gold-400 text-xs font-bold uppercase tracking-widest rounded border border-gold-400/20">
                        Raw Ingredient
                      </div>
                   </div>
                </div>
              </div>
            </div>
         </div>
      </section>

      {/* NEW SECTION: Data Analytics */}
      <DataAnalytics />
      
      {/* NEW SECTION: Gym Routine */}
      <GymRoutine />
      
      {/* NEW SECTION: Fragrance Dashboard */}
      <FragranceDashboard />

      {/* VISUAL SECTION 3: Softmaxxing Grid (Interactive) */}
      <section id="softmaxxing" className="py-32 relative scroll-mt-32">
        <div className="container mx-auto px-6">
           <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-4 text-gold-400 border border-gold-400/30 px-4 py-1 rounded-full bg-gold-400/5">
                 <Grid3X3 className="w-3 h-3" />
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Knowledge Base</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">Softmaxxing Wiki</h2>
              <p className="text-gray-500 uppercase tracking-widest">Select a module to access classified data</p>
           </div>

           {/* RESTORED TO 3 COLUMNS FOR GRID UI */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WIKI_MODULES.map((module, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setSelectedModule(module)}
                  className="glass-panel rounded-xl overflow-hidden border border-white/5 flex flex-col hover:border-gold-400/40 transition-all text-left group hover:scale-[1.02] active:scale-[0.99] h-full"
                >
                   <div className="p-8 bg-white/5 border-b border-white/5 flex justify-between items-start">
                      <div>
                        <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-2">Module {idx < 9 ? `0${idx+1}` : idx+1}</span>
                        <h3 className="text-2xl font-serif text-white mb-2">{module.title}</h3>
                        <p className="text-gray-500 text-xs uppercase tracking-wider">{module.subtitle}</p>
                      </div>
                      <div className="p-2 bg-white/5 rounded-full group-hover:bg-gold-400 group-hover:text-black transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                   </div>
                   <div className="p-8 flex-grow">
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                         {module.previewText}
                      </p>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2 group-hover:text-white transition-colors mt-auto">
                        <Search className="w-3 h-3" /> Access Full Protocol
                      </span>
                   </div>
                </button>
              ))}
           </div>
        </div>
      </section>

      {/* NEW SECTION: Hardmaxxing Guide */}
      <HardmaxxingGuide />

      {/* Product Catalog */}
      <ProductCatalog />

      {/* Footer */}
      <footer className="py-20 border-t border-white/10 bg-black text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold-400/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl font-serif font-bold text-white mb-2">IDO PROTOCOL <span className="text-gold-400">2026</span></h2>
          <p className="text-gray-600 text-xs uppercase tracking-[0.3em] mb-10">Ascend to your potential</p>
          <div className="flex justify-center gap-8 text-gray-500 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-gold-400 transition-colors">Legal</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Shipping</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Instagram</a>
          </div>
          <p className="mt-12 text-[10px] text-gray-800">© 2026 IDO PROTOCOL. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

      {/* Wiki Detail Modal */}
      {selectedModule && (
        <WikiModal 
          module={selectedModule} 
          onClose={() => setSelectedModule(null)} 
        />
      )}
    </div>
  );
}

export default App;