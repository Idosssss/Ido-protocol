import React, { useState } from 'react';
import { HARDMAXXING_PROCEDURES } from '../data';
import { HardmaxxingProcedure } from '../types';
import { Activity, AlertTriangle, ArrowRight, Bone, Clock, DollarSign, Filter, Layers, LayoutGrid, Microscope, MoveHorizontal, RefreshCcw, Search, Shield, User } from 'lucide-react';

const HardmaxxingGuide: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [maxDowntime, setMaxDowntime] = useState<number>(12); // Weeks
  const [searchQuery, setSearchQuery] = useState('');
  const [simulatorValue, setSimulatorValue] = useState(50); // 0 = Recessed, 100 = Projected

  // Filter Logic
  const filteredProcedures = HARDMAXXING_PROCEDURES.filter(proc => {
    const matchesLevel = selectedLevel ? proc.level === selectedLevel : true;
    const matchesDowntime = proc.recoveryWeeks <= maxDowntime;
    const matchesSearch = proc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          proc.zone.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesDowntime && matchesSearch;
  });

  const getLevelColor = (level: number) => {
    switch(level) {
        case 1: return "text-emerald-400 border-emerald-500/50 bg-emerald-500/10";
        case 2: return "text-blue-400 border-blue-500/50 bg-blue-500/10";
        case 3: return "text-orange-400 border-orange-500/50 bg-orange-500/10";
        case 4: return "text-red-500 border-red-500/50 bg-red-500/10";
        default: return "text-gray-400";
    }
  };

  const renderSimulator = () => {
      // Simple SVG morphing logic for Profile View (Chin/Jaw)
      // Base Chin X = 120. Range: 100 (Recessed) to 140 (Projected)
      const chinX = 100 + (simulatorValue / 100) * 40; 
      
      return (
          <div className="relative w-full h-64 bg-[#050910] rounded-xl border border-blue-500/20 overflow-hidden flex items-center justify-center">
              <div className="absolute top-4 left-4 flex items-center gap-2">
                  <Microscope className="w-4 h-4 text-blue-400" />
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Skeletal Simulation: Genioplasty</span>
              </div>

              <svg viewBox="0 0 200 200" className="w-full h-full opacity-80">
                  {/* Skull Outline (Static) */}
                  <path d="M50 50 Q100 20 150 50 L150 100" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4,4" />
                  <path d="M50 50 L50 100" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4,4" />
                  
                  {/* Dynamic Lower Jaw */}
                  {/* Nose (Static) */}
                  <path d="M150 50 L180 80 L160 90" fill="none" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Lips (Static) */}
                  <path d="M160 100 Q170 105 160 110" fill="none" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Mandible & Chin (Dynamic) */}
                  <path 
                    d={`M150 100 L150 120 L${chinX} 160 L80 160 L80 120`} 
                    fill="none" 
                    stroke={simulatorValue > 50 ? "#60a5fa" : "#94a3b8"} 
                    strokeWidth="3"
                    className="transition-all duration-300 ease-out"
                  />

                  {/* Measurement Lines */}
                  <line x1="160" y1="90" x2={chinX} y2="160" stroke="white" strokeWidth="1" strokeDasharray="2,2" opacity="0.3" />
                  
                  {/* Bone Cut Line (Genioplasty) */}
                  {simulatorValue > 10 && (
                      <line x1="120" y1="140" x2="160" y2="140" stroke="red" strokeWidth="1" opacity="0.5" />
                  )}
              </svg>
              
              {/* Overlay Text */}
              <div className="absolute bottom-4 right-4 text-right">
                  <span className={`text-2xl font-bold font-mono ${simulatorValue > 60 ? 'text-blue-400' : 'text-gray-500'}`}>
                      {simulatorValue > 60 ? 'PROJECTED' : simulatorValue < 40 ? 'RECESSED' : 'NEUTRAL'}
                  </span>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Mandibular Plane</p>
              </div>
          </div>
      )
  }

  return (
    <section id="hardmaxxing" className="py-24 bg-[#020408] relative border-t border-white/5 scroll-mt-20">
      {/* Medical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b1a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b1a_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-blue-900/30 pb-8">
            <div>
                <div className="flex items-center gap-2 mb-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full w-fit">
                    <Bone className="w-4 h-4 text-blue-400" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">Phase III: Hardmaxxing</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-4">
                    Skeletal & Soft-Tissue <span className="text-blue-500">Mastery</span>
                </h2>
                <p className="text-gray-400 mt-2 max-w-2xl text-sm font-light">
                    Intervention protocols ranging from minimally invasive injectables to LeFort osteotomies. 
                    <span className="text-red-400 block mt-1 text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> Warning: Consult board-certified surgeons only.
                    </span>
                </p>
            </div>

            {/* Simulator Control */}
            <div className="w-full md:w-1/3 mt-8 md:mt-0">
                <div className="flex justify-between items-center mb-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Projection Simulator</label>
                    <RefreshCcw className="w-3 h-3 text-gray-600 cursor-pointer hover:text-white" onClick={() => setSimulatorValue(50)} />
                </div>
                <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={simulatorValue} 
                    onChange={(e) => setSimulatorValue(Number(e.target.value))}
                    className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
            </div>
        </div>

        {/* Layout: Filters & Content */}
        <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Controls */}
            <div className="w-full lg:w-1/4 space-y-8">
                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input 
                        type="text" 
                        placeholder="Search procedures..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-[#0a0f18] border border-blue-900/30 rounded-lg py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                </div>

                {/* Level Select */}
                <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Layers className="w-4 h-4" /> Intervention Level
                    </h4>
                    <div className="space-y-2">
                        {[1, 2, 3, 4].map(level => (
                            <button
                                key={level}
                                onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
                                className={`w-full text-left px-4 py-3 rounded-lg border transition-all duration-300 flex items-center justify-between group ${
                                    selectedLevel === level 
                                    ? 'bg-blue-600 border-blue-500 text-white' 
                                    : 'bg-[#0a0f18] border-blue-900/20 text-gray-400 hover:border-blue-500/50'
                                }`}
                            >
                                <span className="text-xs font-bold uppercase tracking-wider">Level 0{level}</span>
                                <ArrowRight className={`w-3 h-3 transition-transform ${selectedLevel === level ? 'translate-x-1' : 'opacity-0 group-hover:opacity-50'}`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Downtime Filter */}
                <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Clock className="w-4 h-4" /> Max Downtime
                    </h4>
                    <input 
                        type="range" 
                        min="1" 
                        max="12" 
                        value={maxDowntime} 
                        onChange={(e) => setMaxDowntime(Number(e.target.value))}
                        className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500 mb-2"
                    />
                    <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                        <span>1 Week</span>
                        <span className="text-blue-400 font-bold">{maxDowntime} Weeks</span>
                        <span>3 Months</span>
                    </div>
                </div>

                {/* Simulator Visual (Sidebar) */}
                <div className="hidden lg:block">
                     {renderSimulator()}
                </div>
            </div>

            {/* Main Grid */}
            <div className="w-full lg:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProcedures.map((proc) => (
                        <div key={proc.id} className="group relative bg-[#0a0f18] border border-blue-900/20 rounded-xl overflow-hidden hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                            {/* Card Header */}
                            <div className="p-6 border-b border-blue-900/20 bg-gradient-to-r from-[#0a0f18] to-[#0f172a]">
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest border ${getLevelColor(proc.level)}`}>
                                        Level 0{proc.level}
                                    </span>
                                    <span className="text-[10px] text-gray-500 font-mono uppercase">
                                        {proc.zone}
                                    </span>
                                </div>
                                <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                    {proc.name}
                                </h3>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 space-y-4">
                                <div>
                                    <span className="text-[10px] text-red-400 font-bold uppercase tracking-widest block mb-1">Failo Fix</span>
                                    <p className="text-sm text-gray-300">{proc.failoFix}</p>
                                </div>
                                
                                <p className="text-xs text-gray-500 leading-relaxed border-l-2 border-blue-900/50 pl-3">
                                    {proc.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4 py-4 border-t border-blue-900/20 border-b">
                                    <div>
                                        <div className="flex items-center gap-1 text-[10px] text-gray-500 uppercase font-bold mb-1">
                                            <Clock className="w-3 h-3" /> Recovery
                                        </div>
                                        <span className="text-white text-xs font-mono">{proc.recovery}</span>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1 text-[10px] text-gray-500 uppercase font-bold mb-1">
                                            <DollarSign className="w-3 h-3" /> Cost
                                        </div>
                                        <span className="text-gold-400 text-xs font-mono">{proc.cost}</span>
                                    </div>
                                </div>

                                <div>
                                    <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest block mb-1">Synergy</span>
                                    <p className="text-xs text-gray-400 italic">{proc.synergy}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProcedures.length === 0 && (
                    <div className="text-center py-20 border border-dashed border-gray-800 rounded-xl">
                        <Activity className="w-8 h-8 text-gray-600 mx-auto mb-4" />
                        <h3 className="text-gray-400 font-bold">No Protocols Found</h3>
                        <p className="text-sm text-gray-600">Adjust filters to view invasive procedures.</p>
                    </div>
                )}
            </div>

        </div>

        {/* Footer Disclaimer */}
        <div className="mt-16 pt-8 border-t border-blue-900/30 text-center">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-900/10 rounded-full border border-red-900/30 mb-4">
                <Shield className="w-4 h-4 text-red-500" />
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Medical Disclaimer</span>
             </div>
             <p className="text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed">
                The information provided in the Hardmaxxing Guide is for educational and theoretical purposes only. 
                Surgical interventions carry significant risks including nerve damage, infection, and permanent disfigurement. 
                Always consult with a board-certified Craniofacial or Plastic Surgeon before considering any procedure.
             </p>
        </div>

      </div>
    </section>
  );
};

export default HardmaxxingGuide;