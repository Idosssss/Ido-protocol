import React, { useState, useRef, useEffect } from 'react';
import { HairType, FaceShape, EyeFeature, ScalpCondition, JawlineType, SkinType, PhysiqueGoal, AscensionResult } from '../types';
import { ChevronRight, RefreshCw, Check, Sparkles, Activity, User, Shield, Zap, Info, HelpCircle } from 'lucide-react';

const steps = [
  { id: 1, title: 'Hair Texture', key: 'hair', options: Object.values(HairType) },
  { id: 2, title: 'Scalp Health', key: 'scalp', options: Object.values(ScalpCondition) },
  { id: 3, title: 'Face Shape', key: 'face', options: Object.values(FaceShape) },
  { id: 4, title: 'Jawline Definition', key: 'jaw', options: Object.values(JawlineType) },
  { id: 5, title: 'Skin Type', key: 'skin', options: Object.values(SkinType) },
  { id: 6, title: 'Eye Area', key: 'eyes', options: Object.values(EyeFeature) },
  { id: 7, title: 'Physique Goal', key: 'physique', options: Object.values(PhysiqueGoal) },
];

const AscensionSelector: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState<any>({});
  const [tempSelection, setTempSelection] = useState<string | null>(null);
  const [result, setResult] = useState<AscensionResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    setTempSelection(option);
  };

  const handleConfirm = () => {
    if (!tempSelection) return;
    
    const stepKey = steps[currentStep - 1].key;
    const newSelections = { ...selections, [stepKey]: tempSelection };
    setSelections(newSelections);
    setTempSelection(null);

    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsCalculating(true);
      setTimeout(() => {
        generateBlueprint(newSelections);
        setIsCalculating(false);
      }, 1500);
    }
  };

  const generateBlueprint = (finalSelections: any) => {
    // --- Hair Protocol ---
    let hairProduct = "The Sculpting Clay";
    let haircut = "Textured French Crop (Mid Fade)";
    
    if (finalSelections.hair === HairType.CURLY || finalSelections.hair === HairType.COILY) {
      hairProduct = "Complete Curly Kit";
      haircut = "Taper Fade with Top Volume / Fringe";
    } else if (finalSelections.hair === HairType.WAVY) {
      hairProduct = "Texture Powder + Sea Salt";
      haircut = "Surfer Curtain Flow / Wolf Cut";
    } else if (finalSelections.hair === HairType.STRAIGHT) {
      if (finalSelections.face === FaceShape.OVAL) {
         haircut = "Buzz Cut or Slick Back";
         hairProduct = "Classic Pomade";
      } else {
         haircut = "Textured Fringe (Hides Forehead)";
         hairProduct = "Texture Powder";
      }
    }

    if (finalSelections.scalp === ScalpCondition.DRY) {
       hairProduct += " + Castor Oil Scalp Massage";
    }

    // --- Skincare Protocol ---
    let skincareRoutine = ["AM: Cleanser + SPF 50"];
    
    if (finalSelections.skin === SkinType.ACNE_PRONE || finalSelections.skin === SkinType.OILY) {
       skincareRoutine.push("PM: Double Cleanse + Salicylic Acid + Light Moisturizer");
    } else if (finalSelections.skin === SkinType.DRY) {
       skincareRoutine.push("PM: Oil Cleanser + Tallow Balm + Occlusive");
    } else {
       skincareRoutine.push("PM: Cleanser + Retinol + Squalane");
    }

    // --- Jawline & Eyes ---
    let jawlineProtocol = "Maintenance: Gum Chewing 15min/day";
    if (finalSelections.jaw === JawlineType.RECESSED || finalSelections.jaw === JawlineType.UNDEFINED) {
      jawlineProtocol = "Priority: Hard Mastic Gum (30min/day) + Mewing Suction Hold 24/7";
    }

    let eyeProtocol = "Basic: Sleep 8h + Hydration";
    if (finalSelections.eyes === EyeFeature.DARK_CIRCLES) {
      eyeProtocol = "Protocol: Under Eye Elixir (Caffeine) + Vitamin K + Iron Supplements";
    } else if (finalSelections.eyes === EyeFeature.PROTRUDING) {
      eyeProtocol = "Protocol: Ice Rolling (AM) + Reduce Sodium Intake (<2g/day)";
    }

    // --- Physique ---
    let physiqueFocus = "Balanced Hypertrophy";
    if (finalSelections.physique === PhysiqueGoal.LEAN) {
      physiqueFocus = "Caloric Deficit (300kcal) + High Protein + Intermittent Fasting";
    } else if (finalSelections.physique === PhysiqueGoal.MASS) {
      physiqueFocus = "Caloric Surplus (500kcal) + Heavy Compound Lifts (5x5)";
    } else {
      physiqueFocus = "Maintenance Calories + Athletic Conditioning + Neck Training";
    }

    setResult({
      hairProduct,
      haircut,
      skincareRoutine,
      jawlineProtocol,
      eyeProtocol,
      physiqueFocus
    });
  };

  useEffect(() => {
    if (result && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [result]);

  const reset = () => {
    setSelections({});
    setTempSelection(null);
    setCurrentStep(1);
    setResult(null);
  };

  const renderVisualGuide = (option: string | null) => {
    if (!option) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-gray-600 text-center p-8">
                <Info className="w-8 h-8 mb-4 opacity-50" />
                <p className="text-sm">Select an option to visualize.</p>
            </div>
        );
    }

    let description = "";
    let visual = null;

    // --- HAIR ---
    if (option === HairType.STRAIGHT) {
        description = "Follicles grow perpendicular to scalp. Lacks volume but reflects light well. Hard to style without product.";
        visual = <svg viewBox="0 0 100 100" className="w-24 h-24"><path d="M20 20 L20 80 M40 20 L40 80 M60 20 L60 80 M80 20 L80 80" stroke="white" strokeWidth="2" /></svg>;
    } else if (option === HairType.WAVY) {
        description = "S-shape pattern. The most versatile texture. Can be straightened or scrunched for curls.";
        visual = <svg viewBox="0 0 100 100" className="w-24 h-24"><path d="M20 20 Q35 40 20 60 Q5 80 20 100 M50 20 Q65 40 50 60 Q35 80 50 100 M80 20 Q95 40 80 60 Q65 80 80 100" stroke="white" strokeWidth="2" fill="none" /></svg>;
    } else if (option === HairType.CURLY) {
        description = "Defined loops or ringlets. Prone to dryness as oils struggle to travel down the shaft.";
        visual = <svg viewBox="0 0 100 100" className="w-24 h-24"><path d="M30 30 Q50 10 70 30 Q90 50 70 70 Q50 90 30 70 Q10 50 30 30" stroke="white" strokeWidth="2" fill="none" /></svg>;
    } else if (option === HairType.COILY) {
        description = "Tight Z-pattern zig-zags. High density, significant shrinkage, requires heavy moisture.";
        visual = <svg viewBox="0 0 100 100" className="w-24 h-24"><path d="M10 20 L30 30 L10 40 L30 50 L10 60" stroke="white" strokeWidth="2" fill="none" /></svg>;
    }
    // --- SCALP ---
    else if (option === ScalpCondition.DRY) {
        description = "White flakes visible. Itchiness. Often caused by dehydration or harsh sulfates stripping natural oils.";
        visual = <svg viewBox="0 0 100 100" className="w-24 h-24"><circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" /><path d="M30 30 L40 40 M60 70 L70 80 M80 30 L70 40" stroke="white" strokeWidth="2" /></svg>;
    } else if (option === ScalpCondition.OILY) {
        description = "Roots appear greasy <24h after washing. Excess sebum production can clog follicles.";
        visual = <svg viewBox="0 0 100 100" className="w-24 h-24"><path d="M50 20 Q80 80 50 80 Q20 80 50 20" fill="white" opacity="0.8" /></svg>;
    } else if (option === ScalpCondition.SENSITIVE) {
        description = "Redness, irritation, or burning sensation. Requires pH balanced formulas.";
        visual = <svg viewBox="0 0 100 100" className="w-24 h-24"><circle cx="50" cy="50" r="40" stroke="#ef4444" strokeWidth="2" fill="none" className="animate-pulse" /></svg>;
    } else if (option === ScalpCondition.NORMAL) {
        description = "Balanced oil production. No itchiness or visible flakes.";
        visual = <svg viewBox="0 0 100 100" className="w-24 h-24"><circle cx="50" cy="50" r="40" stroke="#4ade80" strokeWidth="2" fill="none" /><path d="M30 50 L45 65 L70 35" stroke="#4ade80" strokeWidth="4" fill="none" /></svg>;
    }
    // --- FACE ---
    else if (option === FaceShape.SQUARE) {
        description = "Jaw width is roughly equal to forehead width. Sharp, angular jawline. Masculine ideal.";
        visual = <div className="w-20 h-24 border-2 border-white rounded-md mx-auto"></div>;
    } else if (option === FaceShape.OVAL) {
        description = "Face length is greater than width. Jaw is rounded but defined. Balanced aesthetic.";
        visual = <div className="w-20 h-28 border-2 border-white rounded-[40px] mx-auto"></div>;
    } else if (option === FaceShape.ROUND) {
        description = "Width equals length. Soft jawline. Lacks angular definition. Needs leaning out.";
        visual = <div className="w-24 h-24 border-2 border-white rounded-full mx-auto"></div>;
    } else if (option === FaceShape.HEART) {
        description = "Wide forehead, narrow chin. Prominent cheekbones.";
        visual = <svg viewBox="0 0 100 100" className="w-24 h-24"><path d="M20 30 Q50 10 80 30 Q90 60 50 90 Q10 60 20 30" stroke="white" strokeWidth="2" fill="none" /></svg>;
    } else if (option === FaceShape.DIAMOND) {
        description = "Cheekbones are the widest point. Narrow forehead and chin. Highly aesthetic.";
        visual = <svg viewBox="0 0 100 100" className="w-24 h-24"><path d="M50 10 L90 50 L50 90 L10 50 Z" stroke="white" strokeWidth="2" fill="none" /></svg>;
    }
    // --- JAW ---
    else if (option === JawlineType.SHARP) {
        description = "Clear L-shape bone structure visible from ear to chin. Low body fat.";
        visual = <svg viewBox="0 0 100 100" className="w-24 h-24"><path d="M20 30 L20 75 L80 75" stroke="#D4AF37" strokeWidth="3" fill="none" /></svg>;
    } else if (option === JawlineType.RECESSED) {
        description = "Chin sits behind the lower lip when viewed from profile. Weak structure.";
        visual = <svg viewBox="0 0 100 100" className="w-24 h-24"><path d="M30 20 L30 60 L10 80" stroke="white" strokeWidth="2" fill="none" opacity="0.5" /></svg>;
    } else if (option === JawlineType.UNDEFINED) {
        description = "No visible separation between jaw and neck. Usually caused by excess body fat.";
        visual = <svg viewBox="0 0 100 100" className="w-24 h-24"><path d="M20 20 Q20 80 80 80" stroke="white" strokeWidth="2" fill="none" /></svg>;
    } else if (option === JawlineType.AVERAGE) {
        description = "Visible but soft edges. Can be improved with chewing and weight loss.";
        visual = <svg viewBox="0 0 100 100" className="w-24 h-24"><path d="M20 20 L20 70 Q50 75 80 70" stroke="white" strokeWidth="2" fill="none" /></svg>;
    }
    // --- SKIN ---
    else if (option === SkinType.DRY) {
        description = "Feels tight after washing. Prone to fine lines and flaking.";
        visual = <svg viewBox="0 0 100 100" className="w-24 h-24"><path d="M20 20 L40 40 M60 20 L40 40 M20 80 L50 50" stroke="white" strokeWidth="1" /></svg>;
    } else if (option === SkinType.OILY) {
        description = "Shiny all over. Enlarged pores. Prone to blackheads.";
        visual = <svg viewBox="0 0 100 100" className="w-24 h-24"><circle cx="30" cy="30" r="2" fill="white" /><circle cx="70" cy="40" r="2" fill="white" /><circle cx="50" cy="80" r="2" fill="white" /></svg>;
    } else if (option === SkinType.ACNE_PRONE) {
        description = "Active breakouts, redness, and inflammation.";
        visual = <svg viewBox="0 0 100 100" className="w-24 h-24"><circle cx="40" cy="40" r="5" fill="#ef4444" opacity="0.5" /><circle cx="60" cy="70" r="4" fill="#ef4444" opacity="0.5" /></svg>;
    } else if (option === SkinType.COMBINATION) {
        description = "Oily T-Zone (Forehead/Nose), dry cheeks.";
        visual = <svg viewBox="0 0 100 100" className="w-24 h-24"><path d="M30 20 H70 V80 H50 V20" fill="white" opacity="0.2" /></svg>;
    }
    // --- EYES ---
    else if (option === EyeFeature.HOODED) {
        description = "Upper eyelid skin hangs over the lashes. The 'Hunter' eye. Highly aesthetic.";
        visual = <div className="w-20 h-10 border-t-4 border-white rounded-t-full overflow-hidden relative mx-auto"><div className="absolute bottom-0 w-full h-1/2 bg-white/20"></div></div>;
    } else if (option === EyeFeature.PROTRUDING) {
        description = "Upper eyelid is fully visible. 'Prey' eyes. Needs orbital decompression maxxing.";
        visual = <div className="w-20 h-12 border border-white rounded-[100%] mx-auto relative"><div className="absolute top-0 w-full h-full border-t border-white"></div></div>;
    } else if (option === EyeFeature.DARK_CIRCLES) {
        description = "Dark shadowing under eyes. Thin skin or lack of sleep.";
        visual = <div className="w-20 h-10 border-b-4 border-gray-600 rounded-b-full mx-auto"></div>;
    } else if (option === EyeFeature.NEUTRAL) {
        description = "Balanced exposure. Neither deep set nor protruding.";
        visual = <div className="w-20 h-8 border border-white rounded-[50%] mx-auto"></div>;
    }
    // --- PHYSIQUE ---
    else if (option === PhysiqueGoal.LEAN) {
        description = "Ottermode. Low body fat (<10%), visible abs, swimmer's build. Clothes hang well.";
        visual = <svg viewBox="0 0 100 100" className="w-24 h-24"><path d="M20 20 L40 80 L60 80 L80 20" stroke="white" strokeWidth="2" fill="none" /></svg>;
    } else if (option === PhysiqueGoal.MASS) {
        description = "Bear mode. High muscle mass, higher body fat. Physical dominance.";
        visual = <svg viewBox="0 0 100 100" className="w-24 h-24"><rect x="20" y="20" width="60" height="60" stroke="white" strokeWidth="2" fill="none" /></svg>;
    } else if (option === PhysiqueGoal.ATHLETIC) {
        description = "Hybrid. Functional strength, moderate size, low enough body fat for definition.";
        visual = <svg viewBox="0 0 100 100" className="w-24 h-24"><path d="M20 20 L50 80 L80 20" stroke="white" strokeWidth="2" fill="none" /></svg>;
    }

    return (
        <div className="flex flex-col items-center justify-center text-center animate-fade-in p-6 bg-white/5 rounded-xl border border-white/10 mb-6 md:mb-0 md:h-full">
            <div className="mb-4 p-4 bg-black/40 rounded-full border border-gold-400/20 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                {visual}
            </div>
            <h4 className="text-lg font-serif font-bold text-white mb-2">{option}</h4>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs mx-auto">
                {description}
            </p>
        </div>
    );
  };

  const renderResultDiagram = (label: string) => {
    if (label.includes("French Crop")) {
        return (
            <svg viewBox="0 0 100 100" className="w-16 h-16 opacity-50">
                <path d="M 30 40 Q 50 10 70 40 L 70 60 L 30 60 Z" fill="none" stroke="white" strokeWidth="2" />
                <path d="M 30 40 L 70 40" fill="none" stroke="white" strokeWidth="2" strokeDasharray="2,2" />
                <text x="50" y="80" textAnchor="middle" fill="white" fontSize="10">Texture</text>
            </svg>
        )
    }
    if (label.includes("Fringe")) {
        return (
            <svg viewBox="0 0 100 100" className="w-16 h-16 opacity-50">
                <path d="M 20 30 Q 50 80 80 30" fill="none" stroke="white" strokeWidth="2" />
                <path d="M 20 30 L 20 60 L 80 60 L 80 30" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4,4" />
                <text x="50" y="80" textAnchor="middle" fill="white" fontSize="10">Volume</text>
            </svg>
        )
    }
    return <User className="w-12 h-12 opacity-20" />;
  }

  if (isCalculating) {
    return (
      <div className="w-full max-w-2xl mx-auto glass-panel p-20 rounded-2xl border border-gold-400/20 text-center">
         <div className="inline-block w-16 h-16 border-4 border-gold-400 border-t-transparent rounded-full animate-spin mb-8"></div>
         <h3 className="text-2xl font-serif animate-pulse">Analyzing Phenotype Data...</h3>
         <p className="text-gray-500 mt-4">Comparing against 10,000+ data points.</p>
      </div>
    )
  }

  if (result) {
    return (
      <div ref={resultsRef} className="w-full max-w-4xl mx-auto glass-panel p-1 rounded-2xl border border-gold-400/30 shadow-2xl shadow-gold-400/10 animate-fade-in-up bg-black/80">
        <div className="p-8 md:p-12">
            <div className="text-center mb-12 border-b border-white/10 pb-8">
            <Sparkles className="w-16 h-16 text-gold-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">Ascension Blueprint <span className="text-gold-400">v3.0</span></h2>
            <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Hair Card */}
            <div className="bg-white/5 p-8 rounded-xl border-l-4 border-gold-400 relative overflow-hidden group hover:bg-white/10 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    {renderResultDiagram(result.haircut)}
                </div>
                <h3 className="text-gold-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                    <Check className="w-4 h-4" /> Hair Protocol
                </h3>
                <div className="mb-4 relative z-10">
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Recommended Cut</p>
                    <p className="text-xl font-serif text-white">{result.haircut}</p>
                </div>
                <div className="relative z-10">
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Required Arsenal</p>
                    <p className="text-lg font-bold text-white">{result.hairProduct}</p>
                </div>
            </div>

            {/* Skincare Card */}
            <div className="bg-white/5 p-8 rounded-xl border-l-4 border-blue-400 relative overflow-hidden group hover:bg-white/10 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20">
                    <Shield size={64} />
                </div>
                <h3 className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                    <Activity className="w-4 h-4" /> Skin & Barrier
                </h3>
                <ul className="space-y-3 relative z-10">
                    {result.skincareRoutine.map((step, i) => (
                        <li key={i} className="text-sm text-gray-300 border-b border-white/5 pb-2 last:border-0 flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span> {step}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Jaw/Eye Card */}
            <div className="bg-white/5 p-8 rounded-xl border-l-4 border-red-500 relative overflow-hidden group hover:bg-white/10 transition-colors">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20">
                    <Zap size={64} />
                </div>
                <h3 className="text-red-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">Facial Structure</h3>
                <div className="mb-4 relative z-10">
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Jawline</p>
                    <p className="text-md text-white">{result.jawlineProtocol}</p>
                </div>
                <div className="relative z-10">
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Eyes</p>
                    <p className="text-md text-white">{result.eyeProtocol}</p>
                </div>
            </div>

            {/* Body Card */}
             <div className="bg-white/5 p-8 rounded-xl border-l-4 border-green-500 relative overflow-hidden group hover:bg-white/10 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20">
                    <Activity size={64} />
                </div>
                <h3 className="text-green-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">Physique Architecture</h3>
                <div className="relative z-10">
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Primary Directive</p>
                    <p className="text-lg font-bold text-white">{result.physiqueFocus}</p>
                </div>
                {/* Mini Graph Diagram for Body */}
                <div className="absolute bottom-4 right-4 w-16 h-8 flex items-end gap-1 opacity-20">
                    <div className="w-1/3 bg-green-500 h-[60%]"></div>
                    <div className="w-1/3 bg-green-500 h-[80%]"></div>
                    <div className="w-1/3 bg-green-500 h-[100%]"></div>
                </div>
            </div>
            </div>

            <button
            onClick={reset}
            className="w-full py-6 flex items-center justify-center gap-3 bg-white/5 hover:bg-gold-400 hover:text-black transition-all border border-white/10 uppercase tracking-widest text-sm font-bold rounded-lg"
            >
            <RefreshCw className="w-4 h-4" /> Initialize New Scan
            </button>
        </div>
      </div>
    );
  }

  const currentStepData = steps[currentStep - 1];

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-stretch min-h-[600px]">
      
      {/* LEFT: Questions Panel */}
      <div className="w-full md:w-1/2 glass-panel p-8 md:p-12 rounded-2xl border border-white/10 flex flex-col">
          <div className="mb-8">
             <div className="flex justify-between items-center mb-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
                <span>Step 0{currentStep}</span>
                <span>Total 0{steps.length}</span>
             </div>
             <div className="h-1 bg-gray-800 w-full rounded-full overflow-hidden">
                <div 
                    className="h-full bg-gold-400 transition-all duration-500 ease-out"
                    style={{ width: `${((currentStep - 1) / steps.length) * 100}%` }}
                />
             </div>
          </div>

          <h3 className="text-3xl font-serif mb-8">
             <span className="block text-sm font-sans font-bold text-gold-400 uppercase tracking-widest mb-2">Subject Analysis</span>
             Select {currentStepData.title}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-auto">
            {currentStepData.options.map((option) => (
                <button
                key={option}
                onClick={() => handleSelect(option as string)}
                className={`group relative p-4 md:p-6 text-left rounded-xl transition-all duration-300 border ${
                    tempSelection === option 
                    ? 'bg-gold-400 text-black border-gold-400 shadow-[0_0_20px_rgba(212,175,55,0.3)]' 
                    : 'bg-white/5 border-white/10 hover:border-gold-400 hover:bg-white/10'
                }`}
                >
                    <div className="flex items-center justify-between">
                        <span className={`text-base font-medium tracking-wide transition-colors ${tempSelection === option ? 'text-black' : 'text-white'}`}>
                            {option}
                        </span>
                        <ChevronRight className={`w-4 h-4 transition-all ${tempSelection === option ? 'opacity-100 text-black translate-x-1' : 'opacity-0 text-white'}`} />
                    </div>
                </button>
            ))}
          </div>

          {/* MOBILE ONLY: Visual Guide appears here */}
          <div className="md:hidden mt-6">
              {renderVisualGuide(tempSelection)}
          </div>

          <button 
            onClick={handleConfirm}
            disabled={!tempSelection}
            className={`w-full mt-8 py-4 flex items-center justify-center gap-2 font-bold uppercase tracking-widest transition-all rounded-lg ${
                tempSelection 
                ? 'bg-white text-black hover:bg-gray-200 cursor-pointer' 
                : 'bg-white/10 text-gray-500 cursor-not-allowed'
            }`}
          >
            Confirm Selection <ChevronRight className="w-4 h-4" />
          </button>
      </div>

      {/* RIGHT: Dynamic Visual Guide (Desktop Only) */}
      <div className="hidden md:flex w-full md:w-1/2 bg-white/5 rounded-2xl border border-white/10 p-8 flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
             <HelpCircle className="w-5 h-5 text-gray-600" />
          </div>
          <h4 className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
             <Info className="w-4 h-4" /> Visual Guide
          </h4>
          
          <div className="flex-grow flex items-center justify-center">
             {renderVisualGuide(tempSelection)}
          </div>
      </div>

    </div>
  );
};

export default AscensionSelector;