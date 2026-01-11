
export enum HairType {
  STRAIGHT = 'Straight',
  WAVY = 'Wavy',
  CURLY = 'Curly',
  COILY = 'Coily'
}

export enum ScalpCondition {
  OILY = 'Oily',
  DRY = 'Dry/Flaky',
  NORMAL = 'Normal',
  SENSITIVE = 'Sensitive'
}

export enum FaceShape {
  OVAL = 'Oval',
  SQUARE = 'Square',
  ROUND = 'Round',
  HEART = 'Heart',
  DIAMOND = 'Diamond'
}

export enum JawlineType {
  RECESSED = 'Recessed/Weak',
  UNDEFINED = 'Undefined/Soft',
  AVERAGE = 'Average',
  SHARP = 'Sharp/Defined'
}

export enum SkinType {
  DRY = 'Dry',
  OILY = 'Oily',
  COMBINATION = 'Combination',
  ACNE_PRONE = 'Acne Prone'
}

export enum EyeFeature {
  DARK_CIRCLES = 'Dark Circles/Hollow',
  HOODED = 'Hooded/Hunter',
  NEUTRAL = 'Neutral',
  PROTRUDING = 'Protruding/UPE'
}

export enum PhysiqueGoal {
  LEAN = 'Lean (Ottermode)',
  MASS = 'Mass (Bear)',
  ATHLETIC = 'Athletic (Hybrid)'
}

export interface AscensionResult {
  hairProduct: string;
  haircut: string;
  skincareRoutine: string[];
  jawlineProtocol: string;
  eyeProtocol: string;
  physiqueFocus: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  imagePlaceholder: string;
}

export interface WikiSection {
  sectionTitle: string;
  body: string;
  bulletPoints?: string[];
  diagram?: 'facial-thirds' | 'gonial-angle' | 'canthal-tilt' | 'fwhr' | 'body-ratio' | 'skincare-routine' | 'curly-stack' | 'hair-geometry' | 'skin-tone' | 'gut-skin' | 'beard-shapes' | 'voice-frequency' | 'posture-alignment' | 'style-silhouette';
}

export interface WikiModule {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  previewText: string;
  fullContent: WikiSection[];
}

export interface HardmaxxingProcedure {
  id: string;
  name: string;
  level: 1 | 2 | 3 | 4;
  zone: 'Midface' | 'Lower Third' | 'Orbital' | 'Upper Third' | 'Body';
  description: string;
  failoFix: string;
  recovery: string; // 1 week, 6 months etc
  recoveryWeeks: number; // For filtering
  cost: string;
  synergy: string;
}

export interface Fragrance {
    id: string;
    name: string;
    house: string;
    notes: string;
    vibe: string[];
    season: ('Winter' | 'Spring' | 'Summer' | 'Fall')[];
    performance: 'Moderate' | 'Long Lasting' | 'Beast Mode';
    image: string;
    projection: string;
    sillage: string;
}