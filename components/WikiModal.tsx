
import React, { useEffect } from 'react';
import { X, ExternalLink, Share2, Printer, Ruler } from 'lucide-react';
import { WikiModule, WikiSection } from '../types';

interface WikiModalProps {
  module: WikiModule;
  onClose: () => void;
}

const WikiModal: React.FC<WikiModalProps> = ({ module, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const renderDiagram = (type: string) => {
    switch (type) {
      case 'facial-thirds':
        return (
          <div className="my-8 p-6 bg-black/40 rounded-xl border border-gold-400/20 flex flex-col items-center">
             <div className="relative w-48 h-64 border-2 border-white/20 rounded-[50px] overflow-hidden">
                <div className="absolute top-0 w-full h-[33%] bg-blue-500/20 border-b border-white/30 flex items-center justify-center">
                  <span className="text-[10px] text-blue-200 uppercase tracking-widest font-bold bg-black/50 px-2 py-1 rounded">Upper 33%</span>
                </div>
                <div className="absolute top-[33%] w-full h-[33%] bg-gold-400/20 border-b border-white/30 flex items-center justify-center">
                  <span className="text-[10px] text-gold-200 uppercase tracking-widest font-bold bg-black/50 px-2 py-1 rounded">Mid 33%</span>
                </div>
                <div className="absolute bottom-0 w-full h-[34%] bg-green-500/20 flex items-center justify-center">
                   <span className="text-[10px] text-green-200 uppercase tracking-widest font-bold bg-black/50 px-2 py-1 rounded">Lower 33%</span>
                </div>
                {/* Abstract Face Features */}
                <div className="absolute top-[40%] left-[20%] w-[20%] h-1 bg-white/20 rounded-full" />
                <div className="absolute top-[40%] right-[20%] w-[20%] h-1 bg-white/20 rounded-full" />
                <div className="absolute top-[60%] left-[45%] w-[10%] h-[15%] border-2 border-white/20 border-t-0 rounded-b-lg" />
                <div className="absolute bottom-[20%] left-[35%] w-[30%] h-1 bg-white/20 rounded-full" />
             </div>
             <p className="text-xs text-gray-500 mt-4 uppercase tracking-widest">Fig 1.1: Ideal Vertical Harmony</p>
          </div>
        );
      case 'gonial-angle':
        return (
          <div className="my-8 p-6 bg-black/40 rounded-xl border border-gold-400/20 flex flex-col items-center">
              <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-80">
                  <path d="M50 40 L50 140 L160 140" fill="none" stroke="#333" strokeWidth="2" strokeDasharray="5,5" />
                  <path d="M60 40 L60 130 Q60 150 80 145 L150 130" fill="none" stroke="#D4AF37" strokeWidth="3" />
                  <circle cx="60" cy="130" r="4" fill="white" />
                  <text x="70" y="130" fill="white" fontSize="10" fontFamily="sans-serif">Gonial Angle</text>
                  <text x="90" y="160" fill="#666" fontSize="10" fontFamily="sans-serif">Ideal: 110°-120°</text>
              </svg>
              <p className="text-xs text-gray-500 mt-4 uppercase tracking-widest">Fig 1.2: Lateral Mandibular Profile</p>
          </div>
        )
      case 'canthal-tilt':
        return (
          <div className="my-8 p-6 bg-black/40 rounded-xl border border-gold-400/20 flex flex-col items-center">
              <div className="relative w-64 h-32">
                  {/* Eye Outline */}
                  <svg viewBox="0 0 200 100" className="w-full h-full">
                      {/* Neutral Line */}
                      <line x1="20" y1="50" x2="180" y2="50" stroke="#333" strokeWidth="1" strokeDasharray="4,4" />
                      
                      {/* Positive Tilt Eye */}
                      <path d="M40 50 Q100 20 160 40" fill="none" stroke="#D4AF37" strokeWidth="2" />
                      <path d="M40 50 Q100 80 160 40" fill="none" stroke="#D4AF37" strokeWidth="2" />
                      <circle cx="100" cy="50" r="12" stroke="white" strokeWidth="1" fill="none" />
                      <circle cx="100" cy="50" r="4" fill="white" />

                      {/* Tilt Line */}
                      <line x1="40" y1="50" x2="160" y2="40" stroke="red" strokeWidth="1" opacity="0.5" />
                  </svg>
              </div>
              <p className="text-xs text-gray-500 mt-4 uppercase tracking-widest">Fig 1.3: Positive Canthal Tilt (+4° to +8°)</p>
          </div>
        )
      case 'skincare-routine':
        return (
           <div className="my-8 p-6 bg-black/40 rounded-xl border border-gold-400/20 flex flex-col items-center w-full">
             <div className="flex justify-between items-center w-full max-w-lg gap-4">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center">1</div>
                    <span className="text-[10px] uppercase font-bold text-gray-400">Cleanse</span>
                </div>
                <div className="h-0.5 flex-grow bg-white/10"></div>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-yellow-500/20 border border-yellow-500 flex items-center justify-center">2</div>
                    <span className="text-[10px] uppercase font-bold text-gray-400">Treat</span>
                </div>
                <div className="h-0.5 flex-grow bg-white/10"></div>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-white/20 border border-white flex items-center justify-center">3</div>
                    <span className="text-[10px] uppercase font-bold text-gray-400">Protect</span>
                </div>
             </div>
             <p className="text-xs text-gray-500 mt-6 uppercase tracking-widest">Fig 2.1: Order of Operations</p>
           </div>
        )
      case 'curly-stack':
        return (
           <div className="my-8 p-6 bg-black/40 rounded-xl border border-gold-400/20 flex flex-col items-center w-full">
             <div className="relative w-32 h-40">
                <div className="absolute bottom-0 w-full h-12 bg-white/10 rounded-lg border border-white/20 flex items-center justify-center z-10 backdrop-blur-sm">
                    <span className="text-xs font-bold">Cream</span>
                </div>
                <div className="absolute bottom-8 w-full h-12 bg-gold-400/20 rounded-lg border border-gold-400/40 flex items-center justify-center z-20 backdrop-blur-sm scale-95">
                    <span className="text-xs font-bold text-gold-400">Oil</span>
                </div>
                <div className="absolute bottom-16 w-full h-12 bg-blue-400/20 rounded-lg border border-blue-400/40 flex items-center justify-center z-30 backdrop-blur-sm scale-90">
                    <span className="text-xs font-bold text-blue-400">Liquid</span>
                </div>
             </div>
             <p className="text-xs text-gray-500 mt-4 uppercase tracking-widest">Fig 2.2: The L.O.C. Layering Method</p>
           </div>
        )
      case 'hair-geometry':
        return (
           <div className="my-8 p-6 bg-black/40 rounded-xl border border-gold-400/20 flex flex-col items-center w-full">
             <div className="flex gap-8">
                <div className="text-center">
                    <div className="w-20 h-24 border-2 border-white/50 rounded-full mb-2 bg-white/5"></div>
                    <span className="text-[10px] text-red-400 font-bold block">Round Face</span>
                    <span className="text-[10px] text-gray-500">Needs Angles (Quiff)</span>
                </div>
                <div className="text-center">
                    <div className="w-20 h-24 border-2 border-white/50 rounded-md mb-2 bg-white/5"></div>
                    <span className="text-[10px] text-green-400 font-bold block">Square Face</span>
                    <span className="text-[10px] text-gray-500">Needs Softness (Flow)</span>
                </div>
             </div>
             <p className="text-xs text-gray-500 mt-4 uppercase tracking-widest">Fig 2.3: Counterbalancing Geometry</p>
           </div>
        )
       case 'skin-tone':
        return (
           <div className="my-8 p-6 bg-black/40 rounded-xl border border-gold-400/20 flex flex-col items-center w-full">
             <div className="w-full max-w-xs h-12 bg-gradient-to-r from-[#ffe4c4] via-[#d2b48c] to-[#8b4513] rounded-full relative mb-4">
                 <div className="absolute top-1/2 left-[20%] w-0.5 h-6 bg-red-500 -translate-y-1/2"></div>
                 <span className="absolute -bottom-6 left-[20%] -translate-x-1/2 text-[10px] text-red-400 uppercase font-bold">Burn</span>
                 
                 <div className="absolute top-1/2 left-[60%] w-0.5 h-6 bg-green-500 -translate-y-1/2"></div>
                 <span className="absolute -bottom-6 left-[60%] -translate-x-1/2 text-[10px] text-green-400 uppercase font-bold">Glow</span>
             </div>
             <p className="text-xs text-gray-500 mt-6 uppercase tracking-widest">Fig 2.4: The Melanin Sweet Spot</p>
           </div>
        )
      case 'gut-skin':
        return (
           <div className="my-8 p-6 bg-black/40 rounded-xl border border-gold-400/20 flex flex-col items-center w-full">
             <div className="flex gap-4 items-center justify-center">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full border-2 border-red-500/50 bg-red-500/10 flex items-center justify-center animate-pulse">
                        <span className="text-2xl">🔥</span>
                    </div>
                    <span className="text-[10px] text-red-400 mt-2 font-bold uppercase">Gut Inflammation</span>
                </div>
                <div className="h-0.5 w-16 bg-gradient-to-r from-red-500 to-red-300"></div>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full border-2 border-white/20 bg-white/5 flex items-center justify-center">
                        <span className="text-2xl">🦠</span>
                    </div>
                    <span className="text-[10px] text-gray-400 mt-2 font-bold uppercase">Acne/Redness</span>
                </div>
             </div>
             <p className="text-xs text-gray-500 mt-6 uppercase tracking-widest">Fig 3.1: The Inflammatory Feedback Loop</p>
           </div>
        )
      case 'beard-shapes':
        return (
            <div className="my-8 p-6 bg-black/40 rounded-xl border border-gold-400/20 flex flex-col items-center w-full">
                <div className="flex gap-8">
                    <div className="text-center opacity-50">
                        <svg viewBox="0 0 100 100" className="w-24 h-24 mb-2 border border-white/10 rounded-full">
                             <circle cx="50" cy="50" r="40" fill="#333" />
                             <path d="M30 60 Q50 90 70 60" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                        <span className="text-[10px] text-red-400 font-bold uppercase">Low Cheek Line</span>
                    </div>
                    <div className="text-center">
                        <svg viewBox="0 0 100 100" className="w-24 h-24 mb-2 border border-gold-400/30 rounded-full">
                             <circle cx="50" cy="50" r="40" fill="#333" />
                             <path d="M20 50 Q50 80 80 50" stroke="#D4AF37" strokeWidth="4" fill="none" />
                             <path d="M40 80 L60 80" stroke="#D4AF37" strokeWidth="4" />
                        </svg>
                        <span className="text-[10px] text-gold-400 font-bold uppercase">High Cheek Line</span>
                    </div>
                </div>
                <p className="text-xs text-gray-500 mt-4 uppercase tracking-widest">Fig 4.1: Beard Geometry</p>
            </div>
        )
      case 'voice-frequency':
        return (
            <div className="my-8 p-6 bg-black/40 rounded-xl border border-gold-400/20 flex flex-col items-center w-full">
                <div className="w-full h-24 flex items-end justify-center gap-1">
                    {[10, 25, 40, 30, 60, 45, 80, 50, 40, 60, 30, 20, 10].map((h, i) => (
                        <div key={i} className="w-3 bg-gold-400/50 rounded-t-sm animate-pulse" style={{ height: `${h}%` }}></div>
                    ))}
                </div>
                <div className="flex justify-between w-full max-w-xs mt-2 border-t border-white/20 pt-1">
                    <span className="text-[10px] text-gray-500">80Hz (Deep)</span>
                    <span className="text-[10px] text-gray-500">165Hz (Average)</span>
                    <span className="text-[10px] text-gray-500">250Hz (High)</span>
                </div>
                <p className="text-xs text-gray-500 mt-4 uppercase tracking-widest">Fig 4.2: Vocal Resonance Spectrum</p>
            </div>
        )
      case 'posture-alignment':
        return (
            <div className="my-8 p-6 bg-black/40 rounded-xl border border-gold-400/20 flex flex-col items-center w-full">
                <div className="flex gap-12">
                     <div className="relative h-40 w-12 bg-white/5 rounded-full border border-red-500/30 flex justify-center">
                        <div className="absolute top-4 w-6 h-6 rounded-full bg-red-500/50 ml-6"></div> {/* Head Forward */}
                        <div className="w-0.5 h-full bg-red-500/50 rotate-6"></div>
                        <span className="absolute -bottom-6 text-[10px] text-red-400 font-bold uppercase">Tech Neck</span>
                     </div>
                     <div className="relative h-40 w-12 bg-white/5 rounded-full border border-green-500/30 flex justify-center">
                        <div className="absolute top-2 w-6 h-6 rounded-full bg-green-500/50"></div> {/* Head Aligned */}
                        <div className="w-0.5 h-full bg-green-500/50"></div>
                        <span className="absolute -bottom-6 text-[10px] text-green-400 font-bold uppercase">Aligned</span>
                     </div>
                </div>
                <p className="text-xs text-gray-500 mt-8 uppercase tracking-widest">Fig 4.3: Cervical Spine Alignment</p>
            </div>
        )
      case 'style-silhouette':
        return (
            <div className="my-8 p-6 bg-black/40 rounded-xl border border-gold-400/20 flex flex-col items-center w-full">
                <svg viewBox="0 0 200 200" className="w-48 h-48">
                    {/* V Shape */}
                    <path d="M50 40 L150 40 L110 120 L90 120 Z" fill="none" stroke="#D4AF37" strokeWidth="2" />
                    <text x="100" y="30" textAnchor="middle" fill="white" fontSize="10">Shoulder Width</text>
                    <text x="100" y="140" textAnchor="middle" fill="white" fontSize="10">Waist Taper</text>
                    {/* Golden Ratio Lines */}
                    <line x1="50" y1="40" x2="50" y2="120" stroke="white" strokeDasharray="4,4" opacity="0.3" />
                    <line x1="150" y1="40" x2="150" y2="120" stroke="white" strokeDasharray="4,4" opacity="0.3" />
                </svg>
                <p className="text-xs text-gray-500 mt-4 uppercase tracking-widest">Fig 4.4: The V-Taper Ratio (1.618)</p>
            </div>
        )
      default:
        return null;
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0a0a0a] border border-gold-400/30 rounded-2xl shadow-2xl shadow-gold-400/10 overflow-hidden flex flex-col animate-fade-in-up">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/50 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gold-400/10 rounded-lg text-gold-400 border border-gold-400/20">
               <span className="font-serif font-bold text-xl">ID</span>
            </div>
            <div>
               <h3 className="text-xl font-serif font-bold text-white">{module.title}</h3>
               <p className="text-gold-400 text-xs tracking-widest uppercase">Restricted Access // Tier 1</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-8 md:p-12 custom-scrollbar bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
          
          <div className="mb-12">
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">{module.subtitle}</h2>
             <div className="flex items-start gap-4">
                <div className="w-1 bg-gold-400 self-stretch rounded-full" />
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    {module.previewText}
                </p>
             </div>
          </div>

          <div className="space-y-16">
            {module.fullContent.map((section, idx) => (
              <div key={idx} className="relative">
                {/* Connector Line */}
                {idx !== module.fullContent.length - 1 && (
                    <div className="absolute left-[19px] top-16 bottom-[-64px] w-0.5 bg-white/5" />
                )}

                <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 font-bold font-mono">
                        0{idx + 1}
                    </div>
                    <h3 className="text-2xl font-serif text-white">{section.sectionTitle}</h3>
                </div>

                <div className="ml-14">
                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    {section.body}
                    </p>

                    {/* Dynamic Diagram Rendering */}
                    {section.diagram && renderDiagram(section.diagram)}

                    {section.bulletPoints && (
                    <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                        <ul className="grid gap-4">
                        {section.bulletPoints.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-3 text-gray-400">
                            <Ruler className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                            <span className="leading-relaxed text-sm md:text-base">{point}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                    )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="mt-16 flex gap-4 pt-8 border-t border-white/10">
            <button className="flex items-center gap-2 px-6 py-3 bg-gold-400 text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors rounded">
               <Share2 className="w-4 h-4" /> Share Protocol
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-colors rounded">
               <Printer className="w-4 h-4" /> Export Data
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WikiModal;
