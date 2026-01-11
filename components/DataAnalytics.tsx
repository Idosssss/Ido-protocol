import React, { useState, useRef } from 'react';
import { Activity, Crosshair } from 'lucide-react';

const DataAnalytics: React.FC = () => {
  const [activeGraph, setActiveGraph] = useState<'matrix' | 'curve'>('matrix');
  const [hoveredScore, setHoveredScore] = useState<number | null>(null);
  
  // --- MATRIX STATE ---
  const graphRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState<{x: number, y: number} | null>(null);
  const [stats, setStats] = useState({ height: "", face: "", tier: "", color: "" });

  // --- CHART CONFIGURATION ---
  // X-Axis: 5'4" (64) to 6'7" (79)
  const MIN_HEIGHT = 64;
  const MAX_HEIGHT = 79;
  const X_RANGE = MAX_HEIGHT - MIN_HEIGHT;
  
  // Y-Axis: Face 2.0 to 10.0
  const MIN_FACE = 2;
  const MAX_FACE = 10;
  const Y_RANGE = MAX_FACE - MIN_FACE;

  // --- POLYLINE DATA POINTS ---
  // LOGIC: The lines represent the FLOOR of that tier.
  // If you are ABOVE Line 1 -> GIGACHAD
  // If you are ABOVE Line 2 (but below 1) -> CHAD
  // Sweet Spot: 6'3" (75) to 6'5" (77) has the lowest requirements (Dip in graph).

  // 1. GIGACHAD FLOOR (Dashed Grey)
  const LINE_1 = [
    {h: 64, f: 9.8}, {h: 66, f: 9.6}, {h: 68, f: 9.4}, {h: 70, f: 9.2}, 
    {h: 72, f: 9.0}, {h: 74, f: 8.8}, {h: 75, f: 8.5}, {h: 77, f: 8.5}, {h: 79, f: 8.8}
  ];

  // 2. CHAD FLOOR (Solid Grey)
  const LINE_2 = [
    {h: 64, f: 9.0}, {h: 66, f: 8.8}, {h: 68, f: 8.5}, {h: 70, f: 8.0}, 
    {h: 72, f: 7.5}, {h: 74, f: 7.2}, {h: 75, f: 7.0}, {h: 77, f: 7.0}, {h: 79, f: 7.2}
  ];

  // 3. CHADLITE FLOOR (Yellow)
  const LINE_3 = [
    {h: 64, f: 8.0}, {h: 66, f: 7.8}, {h: 68, f: 7.5}, {h: 70, f: 7.0}, 
    {h: 72, f: 6.5}, {h: 74, f: 6.2}, {h: 75, f: 6.0}, {h: 77, f: 6.0}, {h: 79, f: 6.2}
  ];

  // 4. HTN FLOOR (Red)
  const LINE_4 = [
    {h: 64, f: 7.0}, {h: 66, f: 6.8}, {h: 68, f: 6.5}, {h: 70, f: 6.0}, 
    {h: 72, f: 5.8}, {h: 74, f: 5.6}, {h: 75, f: 5.5}, {h: 77, f: 5.5}, {h: 79, f: 5.8}
  ];

  // Helper to interpolate Y value for a given X on a polyline
  const getThresholdAtHeight = (heightInches: number, lineData: {h: number, f: number}[]) => {
    for (let i = 0; i < lineData.length - 1; i++) {
      const p1 = lineData[i];
      const p2 = lineData[i+1];
      if (heightInches >= p1.h && heightInches <= p2.h) {
        const ratio = (heightInches - p1.h) / (p2.h - p1.h);
        return p1.f + ratio * (p2.f - p1.f);
      }
    }
    if (heightInches < lineData[0].h) return lineData[0].f;
    if (heightInches > lineData[lineData.length-1].h) return lineData[lineData.length-1].f;
    return 0;
  };

  // Convert data point to SVG coordinates (0-100 scale)
  const getCoords = (point: {h: number, f: number}) => {
    const x = ((point.h - MIN_HEIGHT) / X_RANGE) * 100;
    const y = 100 - ((point.f - MIN_FACE) / Y_RANGE) * 100; 
    return { x, y };
  };

  // Build path string for polyline
  const buildPath = (data: {h: number, f: number}[]) => {
    return data.map(p => {
      const { x, y } = getCoords(p);
      return `${x},${y}`;
    }).join(" ");
  };

  const handleInput = (clientX: number, clientY: number) => {
    if (!graphRef.current) return;
    const rect = graphRef.current.getBoundingClientRect();
    
    // Calculate raw percentages
    const xPct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    const yPct = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100));

    // Convert to Data Units
    const currentHeight = MIN_HEIGHT + (xPct / 100) * X_RANGE;
    const currentFace = MAX_FACE - (yPct / 100) * Y_RANGE;

    setCursor({ x: xPct, y: yPct });

    // Format Strings
    const feet = Math.floor(currentHeight / 12);
    const inches = Math.round(currentHeight % 12);
    const heightStr = `${feet}'${inches}"`;
    const faceStr = currentFace.toFixed(1);

    // Get Thresholds for current height
    const t1 = getThresholdAtHeight(currentHeight, LINE_1); // Gigachad Floor
    const t2 = getThresholdAtHeight(currentHeight, LINE_2); // Chad Floor
    const t3 = getThresholdAtHeight(currentHeight, LINE_3); // Chadlite Floor
    const t4 = getThresholdAtHeight(currentHeight, LINE_4); // HTN Floor

    let tier = "";
    let color = "";

    // STRICT HIERARCHY LOGIC
    // Sub-5 is strictly < 5.0 regardless of height
    if (currentFace < 5.0) {
      tier = "SUB-5";
      color = "text-red-800";
    } else if (currentFace >= t1) {
      tier = "GIGACHAD";
      color = "text-gold-400";
    } else if (currentFace >= t2) {
      tier = "CHAD";
      color = "text-gray-300";
    } else if (currentFace >= t3) {
      tier = "CHADLITE";
      color = "text-gray-500";
    } else if (currentFace >= t4) {
      tier = "HTN";
      color = "text-gold-600";
    } else {
      // Between 5.0 and HTN Floor
      tier = "NORMIE";
      color = "text-red-400";
    }

    setStats({ height: heightStr, face: faceStr, tier, color });
  };

  // Stats for the Distribution Curve
const bellCurveStats = {
  1: { tier: "It's Over", percentile: "Bottom 0.01%", ratio: "1 in 10,000", mog: "0.01%" },
  2: { tier: "Sub-Human", percentile: "Bottom 0.1%", ratio: "1 in 1,000", mog: "0.1%" },
  3: { tier: "Sub-5", percentile: "Bottom 2.5%", ratio: "1 in 40", mog: "2.5%" },
  4: { tier: "LTN", percentile: "Bottom 16%", ratio: "1 in 6", mog: "16%" },
  5: { tier: "MTN", percentile: "Average (50%)", ratio: "1 in 2", mog: "50%" },
  6: { tier: "HTN", percentile: "Top 16%", ratio: "1 in 6", mog: "84%" },
  7: { tier: "Chadlite", percentile: "Top 2.5%", ratio: "1 in 40", mog: "97.5%" },
  8: { tier: "Chad", percentile: "Top 0.1%", ratio: "1 in 1,000", mog: "99.9%" },
  9: { tier: "Gigachad", percentile: "Top 0.01%", ratio: "1 in 10,000", mog: "99.99%" },
  10: { tier: "True Adam", percentile: "Top 0.0001%", ratio: "1 in 1M", mog: "99.9999%" },
};

  const getActiveStat = () => {
    if (hoveredScore !== null) return bellCurveStats[hoveredScore as keyof typeof bellCurveStats];
    return null;
  };

  return (
    <section id="analytics" className="py-24 bg-black relative border-t border-white/5 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2 text-gold-400">
              <Activity className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-[0.3em]">Blackpill Analytics</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">The Mog Chart</h2>
            <p className="text-gray-400 mt-2 max-w-xl">
               Interactive SMV Calculator. Accurate "Height Halo" scaling. 
               <br/>
               <span className="text-gold-400/80 text-xs">Sweet Spot identified: 6'3" - 6'5".</span>
            </p>
          </div>
          
          <div className="flex gap-4 mt-6 md:mt-0">
            <button 
              onClick={() => setActiveGraph('matrix')}
              className={`px-6 py-2 text-xs font-bold uppercase tracking-widest border transition-all ${activeGraph === 'matrix' ? 'bg-gold-400 text-black border-gold-400' : 'bg-transparent text-gray-500 border-white/10 hover:border-gold-400'}`}
            >
              Height/Face Matrix
            </button>
            <button 
              onClick={() => setActiveGraph('curve')}
              className={`px-6 py-2 text-xs font-bold uppercase tracking-widest border transition-all ${activeGraph === 'curve' ? 'bg-gold-400 text-black border-gold-400' : 'bg-transparent text-gray-500 border-white/10 hover:border-gold-400'}`}
            >
              Distribution Curve
            </button>
          </div>
        </div>

        <div className="glass-panel p-1 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl relative min-h-[600px] flex items-center justify-center overflow-hidden">
          
          {/* --- THE MOG CHART (MATRIX) --- */}
          {activeGraph === 'matrix' && (
            <div className="w-full h-full p-4 md:p-8 animate-fade-in flex flex-col relative">
              
              <div 
                ref={graphRef}
                onMouseMove={(e) => handleInput(e.clientX, e.clientY)}
                onTouchMove={(e) => {
                    handleInput(e.touches[0].clientX, e.touches[0].clientY);
                }}
                onMouseLeave={() => setCursor(null)}
                className="relative w-full aspect-[4/3] md:aspect-[16/9] border-l border-b border-gray-800 bg-[#0a0a0a] cursor-crosshair overflow-hidden touch-none"
              >
                
                {/* Labels: Positioned explicitly in the zones between lines */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* GIGACHAD: Above Line 1 (> 9.0) */}
                    <div className="absolute left-[70%] top-[8%] -translate-x-1/2 -translate-y-1/2 text-gold-400 font-serif font-bold text-xl md:text-3xl opacity-90 tracking-widest">GIGACHAD</div>
                    
                    {/* CHAD: Between Line 1 and Line 2 */}
                    <div className="absolute left-[70%] top-[22%] -translate-x-1/2 -translate-y-1/2 text-gray-300 font-serif font-bold text-sm md:text-base opacity-80 tracking-widest">CHAD</div>
                    
                    {/* CHADLITE: Between Line 2 and Line 3 */}
                    <div className="absolute left-[70%] top-[38%] -translate-x-1/2 -translate-y-1/2 text-gray-500 font-serif font-bold text-xs md:text-sm opacity-90 tracking-widest">CHADLITE</div>
                    
                    {/* HTN: Between Line 3 and Line 4 */}
                    <div className="absolute left-[65%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-gold-600 font-serif font-bold text-sm md:text-base opacity-90 tracking-widest">HTN</div>
                    
                    {/* NORMIE: Between Line 4 and 5.0 */}
                    <div className="absolute left-[50%] top-[60%] -translate-x-1/2 -translate-y-1/2 text-red-400 font-serif font-bold text-lg md:text-xl opacity-60 tracking-widest">NORMIE</div>

                     {/* SUB-5: Below 5.0 */}
                     <div className="absolute left-[50%] top-[80%] -translate-x-1/2 -translate-y-1/2 text-red-900 font-serif font-bold text-2xl md:text-4xl opacity-40 tracking-widest">SUB-5</div>
                </div>

                {/* Axis Labels */}
                <div className="absolute -left-6 top-1/2 -rotate-90 text-[10px] md:text-xs font-bold tracking-widest text-gold-400 whitespace-nowrap origin-center translate-y-1/2">FACE RATING (2-10)</div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-bold tracking-widest text-gold-400">HEIGHT (FT)</div>

                {/* THE LINES & GRID */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                    
                    {/* LINE 1: Gigachad Floor (Dashed Grey) */}
                    <polyline points={buildPath(LINE_1)} fill="none" stroke="#a1a1aa" strokeWidth="0.5" strokeDasharray="2,2" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                    {LINE_1.map((p, i) => {
                       const { x, y } = getCoords(p);
                       return <circle key={`t-${i}`} cx={x} cy={y} r="0.25" fill="#a1a1aa" />;
                    })}

                    {/* LINE 2: Chad Floor (Solid Grey) */}
                    <polyline points={buildPath(LINE_2)} fill="none" stroke="#52525b" strokeWidth="0.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                    {LINE_2.map((p, i) => {
                       const { x, y } = getCoords(p);
                       return <circle key={`m1-${i}`} cx={x} cy={y} r="0.25" fill="#52525b" />;
                    })}

                    {/* LINE 3: Chadlite Floor (Yellow) */}
                    <polyline points={buildPath(LINE_3)} fill="none" stroke="#facc15" strokeWidth="0.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                    {LINE_3.map((p, i) => {
                       const { x, y } = getCoords(p);
                       return <circle key={`m2-${i}`} cx={x} cy={y} r="0.25" fill="#facc15" />;
                    })}

                    {/* LINE 4: HTN Floor (Red) */}
                    <polyline points={buildPath(LINE_4)} fill="none" stroke="#ef4444" strokeWidth="0.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                    {LINE_4.map((p, i) => {
                       const { x, y } = getCoords(p);
                       return <circle key={`b-${i}`} cx={x} cy={y} r="0.25" fill="#ef4444" />;
                    })}
                    
                    {/* SUB-5 CUTOFF LINE (Invisible/Reference) at 5.0 */}
                    <line x1="0" y1="62.5" x2="100" y2="62.5" stroke="#ef4444" strokeWidth="0.2" strokeDasharray="1,1" opacity="0.5" />
                </svg>

                {/* Grid Lines Vertical (Height) */}
                {Array.from({length: 16}).map((_, i) => {
                    const h = MIN_HEIGHT + i;
                    const feet = Math.floor(h / 12);
                    const inches = h % 12;
                    const leftPos = (i / X_RANGE) * 100;
                    return (
                        <div key={i} className="absolute bottom-0 h-full w-px bg-white/5 pointer-events-none" style={{ left: `${leftPos}%` }}>
                            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] md:text-[9px] text-gray-600 font-mono whitespace-nowrap">
                                {feet}'{inches}"
                            </span>
                        </div>
                    );
                })}

                {/* Grid Lines Horizontal (Face 2-10) */}
                {Array.from({length: 9}).map((_, i) => {
                    const f = MIN_FACE + i;
                    const bottomPos = (i / Y_RANGE) * 100;
                    return (
                        <div key={i} className="absolute left-0 w-full h-px bg-white/5 pointer-events-none" style={{ bottom: `${bottomPos}%` }}>
                            <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-[9px] md:text-[10px] text-gold-400/50 font-mono">{f}</span>
                        </div>
                    );
                })}

                {/* INTERACTIVE CURSOR & TOOLTIP */}
                {cursor && (
                    <>
                        <div className="absolute top-0 bottom-0 w-px bg-gold-400/50 pointer-events-none z-10" style={{ left: `${cursor.x}%` }} />
                        <div className="absolute left-0 right-0 h-px bg-gold-400/50 pointer-events-none z-10" style={{ top: `${cursor.y}%` }} />
                        
                        <div 
                            className="absolute w-3 h-3 bg-gold-400 rounded-full shadow-[0_0_10px_#D4AF37] z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                            style={{ left: `${cursor.x}%`, top: `${cursor.y}%` }}
                        />

                        <div 
                            className="absolute z-30 bg-black/95 border border-gold-400/50 p-3 md:p-4 rounded-xl shadow-2xl backdrop-blur-md min-w-[160px] pointer-events-none"
                            style={{ 
                                left: cursor.x > 50 ? 'auto' : `${cursor.x + 4}%`, 
                                right: cursor.x > 50 ? `${100 - cursor.x + 4}%` : 'auto',
                                top: cursor.y > 60 ? 'auto' : `${cursor.y + 4}%`,
                                bottom: cursor.y > 60 ? `${100 - cursor.y + 4}%` : 'auto',
                            }}
                        >
                            <div className="flex items-center gap-2 mb-2 border-b border-white/20 pb-2">
                                <Crosshair className="w-3 h-3 text-gold-400" />
                                <span className="text-[10px] font-bold text-white uppercase tracking-wider">Mog Report</span>
                            </div>
                            <div className="space-y-1.5">
                                <div className="flex justify-between text-xs">
                                    <span className="text-gray-400">Height</span>
                                    <span className="text-white font-mono font-bold">{stats.height}</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-gray-400">Face</span>
                                    <span className="text-white font-mono font-bold">{stats.face}/10.0</span>
                                </div>
                                <div className={`mt-2 text-center text-[10px] font-bold uppercase tracking-widest ${stats.color} py-1 px-2 rounded w-full border border-white/10 bg-white/5`}>
                                    {stats.tier}
                                </div>
                            </div>
                        </div>
                    </>
                )}

              </div>
              
              <div className="md:hidden text-center mt-4 text-[10px] text-gray-500 uppercase tracking-widest animate-pulse">
                Touch and drag chart to simulate
              </div>
            </div>
          )}

          {/* --- DISTRIBUTION CURVE (UNCHANGED) --- */}
          {activeGraph === 'curve' && (
             <div className="w-full h-full p-8 md:p-12 animate-fade-in flex flex-col items-center">
                <div className="text-center mb-8">
                    <h3 className="text-3xl font-serif text-white mb-2">The Bell Curve (SMV)</h3>
                    <p className="text-gray-400 text-sm">Strict rating scale. 5.0 is the mathematical mean. 6.0 is top 5%.</p>
                </div>

                <div className="relative w-full max-w-4xl aspect-[2/1] flex items-end justify-center">
                   <svg viewBox="0 0 500 250" className="w-full h-full overflow-visible">
                      <line x1="0" y1="240" x2="500" y2="240" stroke="white" strokeWidth="1" />
                      
                      {[
                          { score: 1, x: 20, h: 5, c: "#ef4444" },
                          { score: 2, x: 60, h: 15, c: "#ef4444" },
                          { score: 3, x: 100, h: 40, c: "#ef4444" },
                          { score: 4, x: 140, h: 90, c: "#ef4444" },
                          { score: 5, x: 180, h: 180, c: "#fbbf24" },
                          { score: 6, x: 220, h: 80, c: "#D4AF37" },
                          { score: 7, x: 260, h: 40, c: "#D4AF37" },
                          { score: 8, x: 300, h: 15, c: "#D4AF37" },
                          { score: 9, x: 340, h: 5, c: "#fff" },
                          { score: 10, x: 380, h: 2, c: "#fff" },
                      ].map((bar, i) => {
                          const isHovered = hoveredScore === bar.score;
                          return (
                            <g key={i} onMouseEnter={() => setHoveredScore(bar.score)} onMouseLeave={() => setHoveredScore(null)} className="cursor-pointer group">
                                <rect 
                                    x={bar.x} 
                                    y={240 - bar.h} 
                                    width="30" 
                                    height={bar.h} 
                                    fill={isHovered ? bar.c : 'white'}
                                    fillOpacity={isHovered ? 1 : 0.1}
                                    rx="2"
                                    className="transition-all duration-300"
                                />
                                <text x={bar.x + 15} y={260} textAnchor="middle" fill={isHovered ? bar.c : '#666'} fontSize="12" fontWeight="bold">{bar.score}</text>
                            </g>
                          )
                      })}
                   </svg>

                   {hoveredScore && getActiveStat() && (
                       <div className="absolute top-0 right-0 glass-panel p-6 rounded-xl border border-gold-400/30 animate-fade-in-up min-w-[250px] z-50 bg-black/90">
                           <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                               <span className="text-3xl font-serif font-bold text-white">{hoveredScore}<span className="text-sm text-gray-500">/10</span></span>
                               <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${hoveredScore >= 6 ? 'bg-gold-400 text-black' : 'bg-white/10 text-white'}`}>
                                   {getActiveStat()?.tier}
                               </span>
                           </div>
                           <div className="space-y-3">
                               <div className="flex justify-between">
                                   <p className="text-[10px] text-gray-500 uppercase tracking-widest">Percentile</p>
                                   <p className="text-white font-mono text-sm">{getActiveStat()?.percentile}</p>
                               </div>
                               <div className="flex justify-between">
                                   <p className="text-[10px] text-gray-500 uppercase tracking-widest">Rarity</p>
                                   <p className="text-gold-400 font-mono text-sm">{getActiveStat()?.ratio}</p>
                               </div>
                           </div>
                       </div>
                   )}
                </div>
             </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default DataAnalytics;