import React, { useState } from 'react';
import { Dumbbell, Check, Info, Flame, Activity, Zap, TrendingUp, Calendar } from 'lucide-react';

type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';

interface Exercise {
  name: string;
  sets: number;
  reps: string;
  focus: string;
  rest: string;
  isPrimary?: boolean;
}

const ROUTINE: Record<Day, { title: string; focus: string; exercises: Exercise[] }> = {
  Monday: {
    title: "Push A",
    focus: "Upper Chest & Delt Width",
    exercises: [
      { name: "Flat Barbell Bench Press", sets: 5, reps: "5", focus: "Heavy Mechanical Tension", rest: "3 min", isPrimary: true },
      { name: "60° Incline DB Press", sets: 4, reps: "6-8", focus: "Upper Chest Shelf", rest: "2 min" },
      { name: "Lateral Raises", sets: 5, reps: "15-20", focus: "Side Delt Width", rest: "60s" },
      { name: "Cable Pec Fly", sets: 3, reps: "10-12", focus: "Deep Stretch", rest: "90s" },
      { name: "Tricep Pushdowns", sets: 4, reps: "10-12", focus: "Lateral Head", rest: "90s" },
      { name: "Overhead Press", sets: 3, reps: "8", focus: "Stability/Mass", rest: "2 min" }
    ]
  },
  Tuesday: {
    title: "Pull A",
    focus: "V-Taper & Bicep Peak",
    exercises: [
      { name: "Weighted Pull-Ups", sets: 5, reps: "5-6", focus: "Lat Width (Primary)", rest: "3 min", isPrimary: true },
      { name: "Chest-Supported T-Bar Row", sets: 4, reps: "8", focus: "Mid-Back Thickness", rest: "2 min" },
      { name: "45° Incline DB Curl", sets: 4, reps: "8-10", focus: "Long Head Bicep", rest: "90s" },
      { name: "Dumbbell Pullover", sets: 3, reps: "10-12", focus: "Ribcage Expansion", rest: "90s" },
      { name: "Rear Delt Fly (Reverse Pec Deck)", sets: 4, reps: "15", focus: "3D Delts", rest: "60s" },
      { name: "Hammer Curls", sets: 3, reps: "8-10", focus: "Brachialis Width", rest: "90s" }
    ]
  },
  Wednesday: {
    title: "Legs",
    focus: "Force & Foundation",
    exercises: [
      { name: "Barbell Squats", sets: 6, reps: "5", focus: "Mass Builder (Primary)", rest: "3-5 min", isPrimary: true },
      { name: "Leg Extensions", sets: 4, reps: "10-12", focus: "Quad Definition", rest: "90s" },
      { name: "Seated Leg Curls", sets: 4, reps: "10-12", focus: "Hamstring Density", rest: "90s" },
      { name: "Standing Calf Raises", sets: 6, reps: "12-15", focus: "Slow & Heavy", rest: "60s" }
    ]
  },
  Thursday: {
    title: "Push B",
    focus: "Shoulder Dominance",
    exercises: [
      { name: "Overhead Press", sets: 5, reps: "5", focus: "Vertical Power", rest: "3 min", isPrimary: true },
      { name: "Flat DB Press", sets: 4, reps: "8-10", focus: "Chest Volume", rest: "2 min" },
      { name: "Lateral Raises", sets: 6, reps: "15-20", focus: "Max Width", rest: "60s" },
      { name: "Skullcrushers", sets: 4, reps: "10", focus: "Tricep Mass", rest: "90s" },
      { name: "Dips (Weighted)", sets: 3, reps: "Failure", focus: "Lower Chest/Tricep", rest: "2 min" }
    ]
  },
  Friday: {
    title: "Pull B",
    focus: "Thickness & Detail",
    exercises: [
      { name: "Deadlift", sets: 3, reps: "5", focus: "Posterior Chain", rest: "3-5 min", isPrimary: true },
      { name: "Lat Pulldown (Wide)", sets: 4, reps: "10-12", focus: "Lat Width", rest: "2 min" },
      { name: "Barbell Curl", sets: 4, reps: "8", focus: "Bicep Mass", rest: "90s" },
      { name: "Face Pulls", sets: 4, reps: "15-20", focus: "Rotator Cuff/Rear Delt", rest: "60s" },
      { name: "Preacher Curls", sets: 3, reps: "10-12", focus: "Short Head Peak", rest: "90s" }
    ]
  }
};

const GymRoutine: React.FC = () => {
  const [activeDay, setActiveDay] = useState<Day>('Monday');
  const [completedSets, setCompletedSets] = useState<Record<string, boolean>>({});

  const toggleSet = (day: string, exerciseIdx: number, setIdx: number) => {
    const key = `${day}-${exerciseIdx}-${setIdx}`;
    setCompletedSets(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getProgress = (day: Day) => {
    const exercises = ROUTINE[day].exercises;
    let totalSets = 0;
    let doneSets = 0;
    exercises.forEach((ex, exIdx) => {
      totalSets += ex.sets;
      for (let i = 0; i < ex.sets; i++) {
        if (completedSets[`${day}-${exIdx}-${i}`]) doneSets++;
      }
    });
    return (doneSets / totalSets) * 100;
  };

  const renderVisualizer = () => {
     // Simple dynamic visual based on active day
     const isPush = activeDay === 'Monday' || activeDay === 'Thursday';
     const isPull = activeDay === 'Tuesday' || activeDay === 'Friday';
     
     return (
        <div className="relative w-full h-64 bg-[#0a0f18] rounded-xl border border-white/10 overflow-hidden flex items-center justify-center mb-8 group">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shine pointer-events-none" />
            
            {/* Silhouette Outline */}
            <svg viewBox="0 0 200 200" className="h-full w-auto opacity-80">
                {/* Base Body */}
                <path d="M70 40 L130 40 L140 60 L130 100 L110 160 L90 160 L70 100 L60 60 Z" fill="#1e293b" />
                <circle cx="100" cy="30" r="15" fill="#1e293b" />
                
                {/* Highlight Muscles based on Day */}
                {isPush && (
                   <>
                    {/* Shoulders */}
                    <circle cx="65" cy="55" r="12" className="text-gold-400 fill-current animate-pulse-slow" />
                    <circle cx="135" cy="55" r="12" className="text-gold-400 fill-current animate-pulse-slow" />
                    {/* Chest */}
                    <path d="M80 60 L120 60 L115 85 L85 85 Z" className="text-gold-400 fill-current opacity-80" />
                   </>
                )}
                
                {isPull && (
                   <>
                    {/* Lats */}
                    <path d="M60 60 L70 100 L85 85 Z" className="text-blue-400 fill-current animate-pulse-slow" />
                    <path d="M140 60 L130 100 L115 85 Z" className="text-blue-400 fill-current animate-pulse-slow" />
                    {/* Biceps */}
                    <circle cx="50" cy="90" r="8" className="text-blue-400 fill-current opacity-80" />
                    <circle cx="150" cy="90" r="8" className="text-blue-400 fill-current opacity-80" />
                   </>
                )}

                {activeDay === 'Wednesday' && (
                   <>
                    {/* Quads */}
                    <path d="M75 110 L95 110 L90 160 L80 160 Z" className="text-red-500 fill-current animate-pulse-slow" />
                    <path d="M125 110 L105 110 L110 160 L120 160 Z" className="text-red-500 fill-current animate-pulse-slow" />
                   </>
                )}
            </svg>

            <div className="absolute bottom-4 left-4">
                 <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Target Analysis</p>
                 <p className="text-white font-serif text-lg">{ROUTINE[activeDay].focus}</p>
            </div>
        </div>
     )
  }

  return (
    <section id="gym-protocol" className="py-24 bg-[#050505] relative border-t border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                <Dumbbell className="w-4 h-4 text-gold-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">Hypertrophy Engine</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Peak Aesthetic <span className="text-gold-400">Split</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
               A specialized 5-day protocol focusing on the golden ratio: Broad shoulders, wide lats, and a narrow waist.
            </p>
            
            <div className="mt-8 bg-blue-900/10 border border-blue-900/30 p-4 rounded-lg inline-block text-left max-w-xl">
                 <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Progressive Overload Rule</h4>
                        <p className="text-sm text-gray-300">
                           If you hit the top of the rep range for all sets, increase weight by 2.5kg next session. 
                           Never train to failure on the first set of heavy compounds; leave 1-2 reps in the tank.
                        </p>
                    </div>
                 </div>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar / Tabs */}
            <div className="w-full lg:w-1/4">
                <div className="bg-[#0a0f18] rounded-xl border border-white/10 overflow-hidden sticky top-24">
                   <div className="p-4 bg-white/5 border-b border-white/5">
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                         <Calendar className="w-4 h-4" /> Weekly Schedule
                      </h3>
                   </div>
                   <div>
                      {(Object.keys(ROUTINE) as Day[]).map((day) => (
                          <button
                            key={day}
                            onClick={() => setActiveDay(day)}
                            className={`w-full text-left px-6 py-4 border-b border-white/5 transition-all flex items-center justify-between group ${
                                activeDay === day ? 'bg-gold-400 text-black font-bold' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                             <div className="flex flex-col">
                                <span className="text-sm">{day}</span>
                                <span className={`text-[10px] uppercase tracking-wider ${activeDay === day ? 'text-black/70' : 'text-gray-600'}`}>{ROUTINE[day].title}</span>
                             </div>
                             {activeDay === day && <Check className="w-4 h-4" />}
                          </button>
                      ))}
                   </div>
                   
                   {/* Daily Progress */}
                   <div className="p-6">
                      <div className="flex justify-between text-xs mb-2">
                         <span className="text-gray-500 uppercase tracking-widest">Session Completion</span>
                         <span className="text-gold-400 font-mono">{Math.round(getProgress(activeDay))}%</span>
                      </div>
                      <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                         <div className="h-full bg-gold-400 transition-all duration-500" style={{ width: `${getProgress(activeDay)}%` }} />
                      </div>
                   </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-3/4">
                
                {renderVisualizer()}

                <div className="bg-[#0a0f18] rounded-xl border border-white/10 overflow-hidden">
                    <div className="p-6 md:p-8 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-[#0a0f18] to-[#0f172a]">
                        <div>
                            <h3 className="text-2xl font-serif text-white">{ROUTINE[activeDay].title}</h3>
                            <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mt-1">{ROUTINE[activeDay].focus}</p>
                        </div>
                        <div className="hidden md:block">
                            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-gray-400 uppercase tracking-widest">
                                Est. Time: 65 Min
                            </span>
                        </div>
                    </div>

                    <div className="divide-y divide-white/5">
                        {ROUTINE[activeDay].exercises.map((ex, exIdx) => (
                            <div key={exIdx} className={`p-6 transition-colors ${ex.isPrimary ? 'bg-gold-400/5' : 'hover:bg-white/5'}`}>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    
                                    {/* Exercise Info */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            {ex.isPrimary && <Flame className="w-4 h-4 text-gold-400" />}
                                            <h4 className={`text-lg font-bold ${ex.isPrimary ? 'text-white' : 'text-gray-300'}`}>{ex.name}</h4>
                                        </div>
                                        <div className="flex items-center gap-4 text-xs text-gray-500 uppercase tracking-wider font-mono">
                                            <span>{ex.sets} Sets</span>
                                            <span>{ex.reps} Reps</span>
                                            <span className="flex items-center gap-1 text-blue-400">
                                                <Activity className="w-3 h-3" /> Rest: {ex.rest}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-600 mt-2 italic">{ex.focus}</p>
                                    </div>

                                    {/* Set Tracker */}
                                    <div className="flex gap-2 flex-wrap">
                                        {Array.from({ length: ex.sets }).map((_, setIdx) => {
                                            const isDone = completedSets[`${activeDay}-${exIdx}-${setIdx}`];
                                            return (
                                                <button
                                                    key={setIdx}
                                                    onClick={() => toggleSet(activeDay, exIdx, setIdx)}
                                                    className={`w-10 h-10 rounded border flex items-center justify-center transition-all ${
                                                        isDone 
                                                        ? 'bg-gold-400 border-gold-400 text-black' 
                                                        : 'bg-transparent border-white/20 text-gray-600 hover:border-gold-400/50'
                                                    }`}
                                                    title={`Log Set ${setIdx + 1}`}
                                                >
                                                    {isDone ? <Check className="w-5 h-5" /> : <span className="text-xs font-mono">{setIdx + 1}</span>}
                                                </button>
                                            )
                                        })}
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default GymRoutine;