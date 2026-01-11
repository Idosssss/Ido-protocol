
import { Product, WikiModule, HardmaxxingProcedure } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'texture-powder',
    name: "Texture Powder",
    subtitle: "Instant Volume / Matte",
    description: "The ultimate tool for volume. Mimics oceanic salt on keratin, adding grit and lift to flat hair.",
    price: "$24.00",
    imagePlaceholder: "https://cdn.instant.so/sites/9m9NOCxHNwUK7yNf/assets/k8BOF8siTmcottar/collection-texturepowder.png?width=1280"
  },
  {
    id: 'sculpting-clay',
    name: "The Sculpting Clay",
    subtitle: "High Hold / Matte Finish",
    description: "Engineered for structured, defy-gravity styles. Provides a reworkable hold without the greasy residue.",
    price: "$28.00",
    imagePlaceholder: "https://cdn.instant.so/sites/9m9NOCxHNwUK7yNf/assets/BBFS0cAB47xh1jg9/collection-hair-clay.png?width=1280"
  },
  {
    id: 'pomade',
    name: "Classic Pomade",
    subtitle: "Medium Hold / High Shine",
    description: "For slick-backs and classic styles. Water-soluble formula that locks in style without flaking.",
    price: "$26.00",
    imagePlaceholder: "https://cdn.instant.so/sites/9m9NOCxHNwUK7yNf/assets/MvPjPNmujR6eP9RG/collection-pomade.png?width=1280"
  },
  {
    id: 'curly-kit',
    name: "Complete Curly Kit",
    subtitle: "Leave-in + Cream + Gel",
    description: "Heavy hydration via Ricinoleic Acid to define curl patterns and eliminate frizz in humid environments.",
    price: "$78.00",
    imagePlaceholder: "https://cdn.instant.so/sites/9m9NOCxHNwUK7yNf/assets/b0YnAOH7JxgFJLkl/collection-complete-curly-kit2.webp?width=1280"
  },
  {
    id: 'under-eye',
    name: "Under Eye Elixir",
    subtitle: "Caffeine + Peptides",
    description: "Targeted treatment for reducing dark circles and puffiness (UEE) to restore the hunter eye aesthetic.",
    price: "$32.00",
    imagePlaceholder: "https://cdn.instant.so/sites/9m9NOCxHNwUK7yNf/assets/Qk6CFeAuyBkAXFvJ/collection-undereyeelir2.png?width=1280"
  },
  {
    id: 'tallow-balm',
    name: "Tallow Balm",
    subtitle: "Ancestral Moisturizer",
    description: "Bio-identical hydration for the face and body. Rich in vitamins A, D, K, and E. 100% Grass-fed.",
    price: "$40.00",
    imagePlaceholder: "https://cdn.instant.so/sites/9m9NOCxHNwUK7yNf/assets/ECmeUXshIp1DPI1q/collection-tallowfullsize.png?width=1280"
  },
  {
    id: 'shower-duo',
    name: "Shower Duo",
    subtitle: "Body Wash + Shampoo",
    description: "Remove environmental toxins with charcoal-infused cleansing agents. pH balanced.",
    price: "$45.00",
    imagePlaceholder: "https://cdn.instant.so/sites/9m9NOCxHNwUK7yNf/assets/5jyiDhSYyAhtxR78/shower-duo-card-image.webp?width=1280"
  },
  {
    id: 'skincare-stack',
    name: "The Skincare Stack",
    subtitle: "Cleanser + Moisturizer + Serum",
    description: "A non-toxic, barrier-repairing regimen. Strips impurities without disrupting the acid mantle.",
    price: "$65.00",
    imagePlaceholder: "https://cdn.instant.so/sites/9m9NOCxHNwUK7yNf/assets/VFNwBrtC99DxHPzz/card-image.png?width=1280"
  }
];

export const WIKI_MODULES: WikiModule[] = [
  {
    id: 'facial-metrics',
    title: "Metrics & PSL",
    subtitle: "The Mathematics of Aesthetics",
    icon: "dna",
    previewText: "Learn to measure the Facial Width-to-Height Ratio (FWHR), Facial Thirds, and the Golden Ratio boundaries of the human face.",
    fullContent: [
      {
        sectionTitle: "The Rule of Thirds",
        body: "A perfectly balanced face is vertically divided into three equal sections. Deviations here dictate your ideal hairstyle.",
        diagram: "facial-thirds",
        bulletPoints: [
          "Upper Third: Hairline to Glabella (Eyebrows).",
          "Middle Third: Glabella to Subnasale (Bottom of Nose).",
          "Lower Third: Subnasale to Menton (Bottom of Chin).",
          "Correction: If the Upper Third is large, style hair down (Fringe). If small, style up (Quiff)."
        ]
      },
      {
        sectionTitle: "FWHR (Facial Width-to-Height)",
        body: "The primary indicator of testosterone exposure during puberty. It is calculated by dividing the Bizygomatic Width by the Midface Height.",
        diagram: "fwhr",
        bulletPoints: [
          "Measurement A (Width): Distance between left and right zygomatic arches (cheekbones).",
          "Measurement B (Height): Distance from upper lip to mid-brow.",
          "Ideal Ratio: 1.8 to 2.0 is considered highly dimorphic/masculine.",
          "Softmaxxing: You cannot change bone width, but you can narrow the cheeks visually with beard stubble or widen the jaw with masseter hypertrophy."
        ]
      }
    ]
  },
  {
    id: 'facial-structure',
    title: "Facial Structure",
    subtitle: "Mewing & Bone Growth",
    icon: "crown",
    previewText: "Protocols for maxilla projection, ramus length, and the gonial angle. Correct recession and weak chins.",
    fullContent: [
      {
        sectionTitle: "The Gonial Angle",
        body: "The angle of the jawline viewed from the profile. A sharp, roughly 110-120 degree angle is ideal. High angles (>130) indicate recession or downward growth.",
        diagram: "gonial-angle",
        bulletPoints: [
          "Ramus Length: The vertical drop from the ear to the jaw corner. Longer ramus = more masculine.",
          "Mandibular Plane: The slope of the jaw. It should be relatively parallel to the ground, not steep."
        ]
      },
      {
        sectionTitle: "The Mewing Protocol (Orthotropics)",
        body: "Correct tongue posture forces the maxilla (upper jaw) upwards and forwards, counteracting gravity and soft food diets.",
        bulletPoints: [
          "The Suction Hold: Create a vacuum to stick the posterior third of the tongue to the soft palate.",
          "The Swallow: Swallow using only the tongue (Mona Lisa swallow), not the cheeks.",
          "Duration: This is a 24/7 posture, not an exercise."
        ]
      }
    ]
  },
  {
    title: "Eye Area (Orbital)",
    id: "hunter-eye",
    subtitle: "Canthal Tilt & UEE",
    icon: "eye",
    previewText: "Maximize positive canthal tilt, reduce Upper Eyelid Exposure (UEE), and increase IPD illusion.",
    fullContent: [
      {
        sectionTitle: "Canthal Tilt",
        body: "The angle of the eye fissure relative to the horizon. Positive tilt is a universal indicator of dimorphism.",
        diagram: "canthal-tilt",
        bulletPoints: [
          "Positive Tilt: Outer corner is higher than inner corner. Associated with predator/hunter aesthetics.",
          "Neutral Tilt: Corners are level.",
          "Negative Tilt: Outer corner is lower. Can create a tired or sad appearance.",
          "Fix: 'Eyebrow Tinting' to straighten the brow tail can create an optical illusion of a neutral tilt."
        ]
      },
      {
        sectionTitle: "Reducing UEE (Upper Eyelid Exposure)",
        body: "Visible upper eyelids create a 'prey' look. The goal is to have the skin fold rest directly on the lashes.",
        bulletPoints: [
          "Orbital Decompression: Reduce sodium (<1500mg) and increase potassium to flush water from the eyelids.",
          "Volumizing: Apply castor oil to lashes nightly. Longer lashes hide the eyelid crease.",
          "Squinting: Slight activation of the lower eyelid (orbicularis oculi) reduces vertical eye height."
        ]
      }
    ]
  },
  {
    title: "Skin Mastery",
    id: "skincare-routine",
    subtitle: "Cleansing & Hydration",
    icon: "dna",
    previewText: "A non-negotiable routine to maintain the Acid Mantle and prevent inflammation. AM/PM split.",
    fullContent: [
      {
        sectionTitle: "The AM/PM Protocol",
        body: "Skincare is not about adding products; it is about protecting the barrier. Do not over-cleanse.",
        diagram: "skincare-routine",
        bulletPoints: [
          "AM (Morning): Rinse with cold water. Apply Vitamin C (Brightening). Apply SPF 50 (Anti-Aging).",
          "PM (Night): Oil Cleanser (Remove SPF). Water-based Cleanser (Remove Dirt). Retinol (Collagen). Squalane (Moisture).",
          "Rule of Thumb: Apply products from thinnest to thickest consistency."
        ]
      },
      {
        sectionTitle: "Collagen Loading",
        body: "Collagen is the scaffolding of the face. Loss of collagen leads to thin, sagging skin that reveals poor bone structure.",
        bulletPoints: [
          "Diet: Bone broth and Vitamin C are precursors to collagen synthesis.",
          "Retinoids: Tretinoin (Vitamin A) is the only proven topical to increase collagen turnover.",
          "Microneedling: Controlled damage (0.5mm - 1.5mm) forces the skin to repair itself with new collagen."
        ]
      }
    ]
  },
  {
    title: "Curly Protocol",
    id: "curly-hair",
    subtitle: "Definition & Volume",
    icon: "zap",
    previewText: "Maximize texture type 3A to 4C. The LOC method and Castor Oil application.",
    fullContent: [
      {
        sectionTitle: "The L.O.C Method",
        body: "Curly hair is naturally dry because scalp oils cannot travel down the spiraled shaft. You must manually seal moisture in.",
        diagram: "curly-stack",
        bulletPoints: [
          "L (Liquid): Water or Leave-in Conditioner to hydrate the cortex.",
          "O (Oil): Castor Oil or Argan Oil to seal the cuticle and prevent evaporation.",
          "C (Cream): Curl Cream to define the pattern and provide hold.",
          "Technique: Apply products to soaking wet hair. Do not towel dry (frizz)."
        ]
      },
      {
        sectionTitle: "Nightly Maintenance",
        body: "Friction is the enemy of texture.",
        bulletPoints: [
          "Pineapple Method: Tie hair loosely on top of head to preserve volume.",
          "Silk Pillowcase: Cotton absorbs moisture; silk allows hair to glide.",
          "Refresh: Spray water mixed with a little conditioner in the morning. Do not brush dry curls."
        ]
      }
    ]
  },
  {
    title: "Hair Geometry",
    id: "hair-matching",
    subtitle: "Face Shape Harmony",
    icon: "crown",
    previewText: "Selecting a haircut that counterbalances your bone structure (Square, Round, Oval).",
    fullContent: [
      {
        sectionTitle: "Visual Counterbalancing",
        body: "The goal of hair is to create the illusion of an Oval face shape.",
        diagram: "hair-geometry",
        bulletPoints: [
          "Round Face: Needs height and angles. Go for a Quiff, Pompadour, or Faux Hawk. Avoid fringes (makes face rounder).",
          "Square Face: Already angular. Can handle buzz cuts or classic side parts. Avoid too much width on sides.",
          "Long/Oblong Face: Needs width. Grow out the sides. Wear a fringe to shorten the forehead."
        ]
      },
      {
        sectionTitle: "The Fringe Theory",
        body: "A textured fringe (French Crop) is the ultimate softmax for receding hairlines or large foreheads.",
        bulletPoints: [
          "Texture Powder: Essential for the 'messy' look. Hides scalp visibility.",
          "Fade: A mid-to-high fade sharpens the jawline by removing bulk from the ears."
        ]
      }
    ]
  },
  {
    title: "Melanin & Tone",
    id: "skin-tone",
    subtitle: "Carotenoids & UV",
    icon: "dna",
    previewText: "Optimizing skin color for health signaling. The Beta-Carotene glow vs UV damage.",
    fullContent: [
      {
        sectionTitle: "The Carotenoid Glow",
        body: "Evolutionary psychology suggests yellow/red skin undertones signal a strong immune system.",
        diagram: "skin-tone",
        bulletPoints: [
          "Carrots & Sweet Potatoes: Consume 3-5 servings daily for a 'golden' glow within 4 weeks.",
          "Astaxanthin: A potent antioxidant supplement that adds a bronze hue.",
          "Vs Tanning: Carotenoid coloration is preferred 70% of the time over melanin tanning in studies."
        ]
      },
      {
        sectionTitle: "Strategic UV Exposure",
        body: "Pale skin highlights imperfections (acne, scars). A slight tan blurs blemishes.",
        bulletPoints: [
          "Melanotan II (Warning): Peptide that stimulates melanin. High risk/High reward.",
          "Natural Sun: 20 mins daily without burning. Burning destroys collagen (photoaging).",
          "Undertones: Cool undertones need bronzer. Warm undertones tan easily."
        ]
      }
    ]
  },
  {
    title: "Body Architecture",
    id: "body-arch",
    subtitle: "Frame & Proportions",
    icon: "zap",
    previewText: "Engineering the V-Taper, clavicle width, and muscle insertions for the ideal silhouette.",
    fullContent: [
      {
        sectionTitle: "Shoulder-to-Waist Ratio",
        body: "The golden ratio of bodybuilding. Your bi-acromial width (shoulders) should be approximately 1.618x your waist circumference.",
        diagram: "body-ratio",
        bulletPoints: [
          "Illusion of Width: Training lateral delts and lats is more important than chest for aesthetics.",
          "Small Waist: Stomach vacuums train the transverse abdominis, acting as a natural corset.",
          "Clavicle Length: Genetic, but posture (shoulders back/down) maximizes visible length."
        ]
      },
      {
        sectionTitle: "The Neck Pill",
        body: "A thick neck signals physical dominance and combats the 'bobblehead' look.",
        bulletPoints: [
          "Measurement: Neck circumference should ideally match flexed arm circumference or jaw width.",
          "Training: Weighted neck curls and extensions. The Trapezius muscles also frame the neck visually."
        ]
      }
    ]
  },
  {
    title: "Beard Architecture",
    id: "beard-maxxing",
    subtitle: "Jawline Reinforcement",
    icon: "crown",
    previewText: "Using facial hair geometry to create the illusion of a stronger jaw and hide submental fat.",
    fullContent: [
      {
        sectionTitle: "The 10-Day Stubble Rule",
        body: "Heavy stubble (3-5mm) is statistically the most attractive facial hair style. It contours the face without hiding the bone structure.",
        diagram: "beard-shapes",
        bulletPoints: [
          "Cheek Line: Keep it high. A low cheek line creates a 'double chin' illusion and rounds the face.",
          "Neck Line: Two fingers above the Adam's apple. Following the jawline perfectly creates structure.",
          "Minoxidil 5%: Can be used on the beard area to convert vellus hairs to terminal hairs (permanent)."
        ]
      },
      {
        sectionTitle: "The Goatee Protocol",
        body: "For recessed chins, a goatee adds anterior projection, simulating a stronger chin point.",
        bulletPoints: [
          "Width: The goatee should match the width of the mouth corners.",
          "Length: Keep the chin hair slightly longer than the sides to elongate the face vertically."
        ]
      }
    ]
  },
  {
    title: "Voice & Resonance",
    id: "voice-maxxing",
    subtitle: "Subharmonics & Pitch",
    icon: "activity",
    previewText: "Lowering vocal pitch and increasing chest resonance for a more commanding presence.",
    fullContent: [
      {
        sectionTitle: "Diaphragmatic Breathing",
        body: "Most men breathe shallowly into their chest. Deep belly breathing allows for fuller, deeper vocal projection.",
        diagram: "voice-frequency",
        bulletPoints: [
          "Exercise: Place hand on stomach. Inhale so stomach expands, not chest. Speak from this reservoir of air.",
          "The Hum: Humming deep in the throat before speaking warms up the vocal cords for lower frequencies."
        ]
      },
      {
        sectionTitle: "Resonance vs Pitch",
        body: "You don't need a deeper voice; you need a bigger sound. Chest resonance fills the room.",
        bulletPoints: [
          "Open Throat: Yawn to feel the back of your throat open. Maintain this space while speaking.",
          "Inflection: Avoid 'uptalk' (raising pitch at the end of sentences). End sentences with a downward inflection."
        ]
      }
    ]
  },
  {
    title: "Posture & Alignment",
    id: "posture-maxxing",
    subtitle: "The Height Pill",
    icon: "activity",
    previewText: "Correcting Anterior Pelvic Tilt and Upper Cross Syndrome to reclaim 1-2 inches of height.",
    fullContent: [
      {
        sectionTitle: "Upper Cross Syndrome",
        body: "Tech neck (forward head posture) kills aesthetic lines and makes you look shorter and submissive.",
        diagram: "posture-alignment",
        bulletPoints: [
          "The Fix: Chin Tucks. Pull your head straight back like making a double chin. Hold for 5s. Repeat 20x.",
          "Chest Opener: Doorway stretches to loosen tight pecs that pull shoulders forward."
        ]
      },
      {
        sectionTitle: "Anterior Pelvic Tilt",
        body: "A protruding gut even when skinny. Caused by tight hip flexors from sitting.",
        bulletPoints: [
          "Glute Activation: Weak glutes force the pelvis to tilt forward. Heavy Hip Thrusts correct this.",
          "Stomach Vacuum: Strengthens the TVA to pull the stomach in and stabilize the spine."
        ]
      }
    ]
  },
  {
    title: "Style & Silhouette",
    id: "style-maxxing",
    subtitle: "Color Theory & Fit",
    icon: "crown",
    previewText: "Optimizing wardrobe based on body type and contrast levels. The V-Taper illusion.",
    fullContent: [
      {
        sectionTitle: "The Silhouette Rule",
        body: "Clothes should emphasize the shoulder-to-waist ratio. Fit is king.",
        diagram: "style-silhouette",
        bulletPoints: [
          "Rule of Thirds: Your torso should look shorter than your legs. Tuck in shirts or wear cropped jackets.",
          "Structured Shoulders: Coats with padding add width to the frame.",
          "Tapered Pants: Avoid skinny jeans. Straight or tapered leg creates a clean vertical line."
        ]
      },
      {
        sectionTitle: "Color Contrast",
        body: "Match your outfit contrast to your facial contrast.",
        bulletPoints: [
          "High Contrast Face (Dark hair, pale skin): Wear Black/White, Navy/Grey.",
          "Low Contrast Face (Blonde/Tan): Wear Monochromatic tones (Beige, Earth tones, Olive).",
          "Old Money Aesthetic: Stick to neutrals (Navy, Cream, Brown, Charcoal). No logos."
        ]
      }
    ]
  },
  {
    title: "Eyebrow & Lash Density",
    id: "eyebrow-maxxing",
    subtitle: "Contrast & Frame",
    icon: "eye",
    previewText: "Increasing orbital contrast through darkening and thickening of hair follicles in the brow ridge.",
    fullContent: [
      {
        sectionTitle: "Minoxidil Protocol",
        body: "Topical Minoxidil (5%) can be applied to eyebrows to stimulate dormant follicles.",
        bulletPoints: [
          "Mechanism: Vasodilation increases blood flow to the follicle.",
          "Warning: Collagen inhibition is a side effect. Pair with Retinol or Microneedling.",
          "Application: Use a Q-tip to apply precisely to the brow ridge. Avoid contact with eyes."
        ]
      },
      {
        sectionTitle: "Dyeing for Contrast",
        body: "Darker eyebrows frame the eyes and lower the perceived eyebrow height, increasing the 'Hunter' look.",
        bulletPoints: [
          "Beard Dye: Use a kit one shade darker than your natural hair color.",
          "Duration: Leave on for 3-5 minutes. The skin under the brow may stain temporarily, adding density."
        ]
      }
    ]
  },
  {
    title: "Sleep Optimization",
    id: "sleep-maxxing",
    subtitle: "HGH & Symmetry",
    icon: "activity",
    previewText: "Correcting sleep posture to prevent facial asymmetry and fluid retention (bloat).",
    fullContent: [
      {
        sectionTitle: "Back Sleeping",
        body: "Sleeping on your side smashes the face into the pillow for 8 hours, causing long-term asymmetry and wrinkles.",
        bulletPoints: [
          "The Protocol: Sleep on your back with a thin pillow under the neck.",
          "Fluid Drainage: Elevate the head slightly to allow lymphatic drainage and prevent puffy eyes."
        ]
      },
      {
        sectionTitle: "Nasal Breathing (Mouth Tape)",
        body: "Mouth breathing during sleep causes the tongue to drop, ruining maxilla support.",
        bulletPoints: [
          "Tape: Use porous micropore tape vertically across the lips.",
          "Benefit: Forces nasal breathing, increasing nitric oxide production and maintaining tongue posture."
        ]
      }
    ]
  },
  {
    title: "Hormonal Maxxing",
    id: "testosterone",
    subtitle: "Bone Density & Dimorphism",
    icon: "flame",
    previewText: "Natural methods to optimize Free Testosterone, directly impacting bone density and fat distribution.",
    fullContent: [
      {
        sectionTitle: "Micronutrients",
        body: "Deficiencies in Zinc and Magnesium plummet testosterone levels.",
        bulletPoints: [
          "Zinc Picolinate: 30mg daily. Essential for androgen receptor sensitivity.",
          "Magnesium Glycinate: 400mg before bed. Lowers cortisol (stress hormone which kills T).",
          "Vitamin D3: The 'sun hormone'. Supplement 5000IU daily if you don't get direct sun."
        ]
      },
      {
        sectionTitle: "Competition & Status",
        body: "Winning in competitive environments (sports, business) creates a positive feedback loop for Androgens.",
        bulletPoints: [
          "The Winner Effect: Success spikes T-levels temporarily.",
          "Body Language: Taking up space (power posing) has been shown to lower cortisol and raise testosterone."
        ]
      }
    ]
  },
  {
    title: "Philtrum & Lips",
    id: "lips-philtrum",
    subtitle: "The Lower Third Anchor",
    icon: "crown",
    previewText: "Optimizing the Philtrum-to-Chin ratio and enhancing lip seal for a composed, high-status look.",
    fullContent: [
      {
        sectionTitle: "Ideal Philtrum Ratios",
        body: "The philtrum (space between nose and lip) should be relatively short (11-14mm). A long philtrum is a sign of aging.",
        bulletPoints: [
          "Ratio: The chin vertical height should be 2.5x the philtrum length.",
          "The Lip Flip: Botox can slightly roll the upper lip out, shortening the visible philtrum.",
          "Lip Seal: Resting with lips fully closed dictates nasal breathing and proper tongue posture."
        ]
      },
      {
        sectionTitle: "Lip Care & Volume",
        body: "Chapped, pale lips signal poor health. Hydrated, red lips signal vascular health.",
        bulletPoints: [
          "Exfoliation: Use a toothbrush gently to remove dead skin and increase blood flow (temporary plump).",
          "Hydration: Lanolin or Tallow are superior to petroleum-based balms which dry lips out long-term."
        ]
      }
    ]
  },
  {
    title: "Hairline & Forehead",
    id: "hairline-maxxing",
    subtitle: "Norwood Reaper Defense",
    icon: "shield",
    previewText: "Combating recession, forehead size reduction, and the science of the hairline shape.",
    fullContent: [
      {
        sectionTitle: "The Norwood Scale",
        body: "Identifying your stage of recession is critical. Prevention is 10x easier than regrowth.",
        bulletPoints: [
          "The Big 3: Finasteride (DHT Blocker), Minoxidil (Stimulant), Microneedling (Growth Factor).",
          "Natural Alternative: Rosemary Oil (diluted) has shown efficacy similar to 2% Minoxidil in studies.",
          "Maturation vs Recession: A mature hairline moves up slightly at the corners (NW2). This is normal for adult men."
        ]
      },
      {
        sectionTitle: "Forehead Reduction",
        body: "A large forehead (high thirds) throws off facial harmony.",
        bulletPoints: [
          "Hair Transplant: Lowering the hairline by 1-2cm can drastically improve ratios.",
          "Styling: A messy fringe or 'French Crop' completely negates a large forehead visually."
        ]
      }
    ]
  },
  {
    title: "Digestion & Gut",
    id: "gut-skin-axis",
    subtitle: "Internal Bloat & Clarity",
    icon: "activity",
    previewText: "The direct link between gut microbiome health, facial bloating, and skin inflammation.",
    fullContent: [
      {
        sectionTitle: "The Gut-Skin Axis",
        body: "Inflammation in the gut (Leaky Gut) releases cytokines that manifest as acne and redness on the face.",
        diagram: "gut-skin", // New Diagram Trigger
        bulletPoints: [
          "Elimination Diet: Cut Dairy, Gluten, and Seed Oils for 2 weeks to test for sensitivity.",
          "Probiotics: Fermented foods (Kimchi, Kefir) reseed the gut with beneficial bacteria.",
          "Water Retention: High sodium + low potassium = Facial Bloat. Balance electrolytes."
        ]
      },
      {
        sectionTitle: "Debloating Protocol",
        body: "Reduce facial puffiness to reveal bone structure.",
        bulletPoints: [
          "Potassium Loading: Banana, Avocado, Coconut Water flush out excess sodium.",
          "Fasting: A 16-20 hour fast depletes glycogen stores and associated water weight.",
          "Sweating: Sauna use purges subcutaneous water."
        ]
      }
    ]
  }
];

export const HARDMAXXING_PROCEDURES: HardmaxxingProcedure[] = [
  // --- LEVEL 1: INJECTABLES ---
  {
    id: 'malar-filler',
    name: 'Malar (Cheek) Fillers',
    level: 1,
    zone: 'Midface',
    description: 'Strategic injection of dense Hyaluronic Acid (HA) into the zygomatic bone to create high cheekbones and support the under-eye area.',
    failoFix: 'Flat midface, tired under-eyes, lack of Ogee Curve.',
    recovery: '2-3 Days',
    recoveryWeeks: 0.5,
    cost: '$800 - $2,000',
    synergy: 'Pairs with Infraorbital Filler to smooth the lid-cheek junction.'
  },
  {
    id: 'jawline-filler',
    name: 'Jawline Contouring',
    level: 1,
    zone: 'Lower Third',
    description: 'Injecting filler along the mandible body and angle to widen the lower third and sharpen the gonial angle artificially.',
    failoFix: 'Weak jawline definition, round face shape.',
    recovery: '2-5 Days',
    recoveryWeeks: 0.5,
    cost: '$1,200 - $3,000',
    synergy: 'Masseter Botox to slim the cheeks while widening the bone.'
  },
  {
    id: 'lip-lift-filler',
    name: 'Liquid Lip Lift',
    level: 1,
    zone: 'Lower Third',
    description: 'Using filler to roll the vermilion border of the lip outward, shortening the philtrum distance visually.',
    failoFix: 'Long philtrum, thin lips.',
    recovery: '2-4 Days',
    recoveryWeeks: 0.5,
    cost: '$600 - $1,200',
    synergy: 'Pairs with Chin Filler to balance lower third ratios.'
  },
  // --- LEVEL 2: SOFT TISSUE ---
  {
    id: 'fat-grafting-midface',
    name: 'Fat Grafting (Midface)',
    level: 2,
    zone: 'Midface',
    description: 'Harvesting fat from the abdomen or thighs and injecting it into the cheeks and under-eyes. Unlike fillers, this contains stem cells and is semi-permanent.',
    failoFix: 'Volume loss, gaunt appearance, deep tear troughs.',
    recovery: '1-2 Weeks',
    recoveryWeeks: 2,
    cost: '$3,000 - $6,000',
    synergy: 'Skin resurfacing (Laser) to tighten the skin over the new volume.'
  },
  {
    id: 'buccal-fat',
    name: 'Buccal Fat Removal',
    level: 2,
    zone: 'Midface',
    description: 'Surgical removal of the buccal fat pad to create hollow cheeks. Warning: Can age the face prematurely if overdone.',
    failoFix: 'Chipmunk cheeks, round face, lack of hollows.',
    recovery: '1-2 Weeks',
    recoveryWeeks: 2,
    cost: '$3,000 - $5,000',
    synergy: 'Jawline Filler to accentuate the new hollows.'
  },
  {
    id: 'canthoplasty',
    name: 'Canthoplasty',
    level: 2,
    zone: 'Orbital',
    description: 'Surgical tightening and lifting of the lateral canthal tendon to create a positive canthal tilt and almond eye shape.',
    failoFix: 'Negative canthal tilt (droopy eyes), rounded prey eyes.',
    recovery: '2-3 Weeks',
    recoveryWeeks: 3,
    cost: '$4,000 - $7,000',
    synergy: 'Brow Lift to reduce upper eyelid hooding.'
  },
  {
    id: 'brow-lift',
    name: 'Endoscopic Brow Lift',
    level: 2,
    zone: 'Orbital',
    description: 'Lifting the forehead skin to raise the eyebrows and reduce hooding. Can be done laterally for the "Bella Hadid" look.',
    failoFix: 'Low brows, angry expression, excessive hooding.',
    recovery: '2 Weeks',
    recoveryWeeks: 2,
    cost: '$5,000 - $8,000',
    synergy: 'Upper Blepharoplasty.'
  },
  // --- LEVEL 3: BONE CONTOURING ---
  {
    id: 'rhinoplasty',
    name: 'Rhinoplasty (Open/Closed)',
    level: 3,
    zone: 'Midface',
    description: 'Reshaping the nasal bone and cartilage. Focus on dorsal hump removal, tip refinement, and radix height adjustment.',
    failoFix: 'Large nose, hooked nose, wide nasal base.',
    recovery: '2-4 Weeks (Swelling 6mo+)',
    recoveryWeeks: 4,
    cost: '$8,000 - $15,000',
    synergy: 'Genioplasty. Balancing the nose and chin projection is critical for the profile.'
  },
  {
    id: 'genioplasty',
    name: 'Sliding Genioplasty',
    level: 3,
    zone: 'Lower Third',
    description: 'Cutting the chin bone (mental protuberance) and sliding it forward, down, or widening it. Fixes recession permanently.',
    failoFix: 'Recessed chin, weak profile, sleep apnea (mild).',
    recovery: '2-4 Weeks',
    recoveryWeeks: 4,
    cost: '$6,000 - $10,000',
    synergy: 'Rhinoplasty and Jaw Implants.'
  },
  {
    id: 'otoplasty',
    name: 'Otoplasty',
    level: 3,
    zone: 'Midface',
    description: 'Pinning back protruding ears. Ears that stick out disrupt facial framing and width perception.',
    failoFix: 'Dumbo ears, asymmetry.',
    recovery: '1-2 Weeks',
    recoveryWeeks: 2,
    cost: '$4,000 - $6,000',
    synergy: 'Haircut optimization.'
  },
  {
    id: 'hair-transplant',
    name: 'Hair Transplant (FUE)',
    level: 3,
    zone: 'Upper Third',
    description: 'Extraction of follicles from donor area (back of head) to hairline. Lowers the thirds and frames the face.',
    failoFix: 'Receding hairline, Norwood 2-5, large forehead.',
    recovery: '2 Weeks (Growth 12mo)',
    recoveryWeeks: 2,
    cost: '$5,000 - $15,000',
    synergy: 'Finasteride/Minoxidil stabilization.'
  },
  {
    id: 'infraorbital-implants',
    name: 'Infraorbital Implants',
    level: 3,
    zone: 'Orbital',
    description: 'Custom PEEK or Silicone implants placed on the orbital rim to fix "bug eyes" and provide under-eye support.',
    failoFix: 'Protruding eyes, negative vector (eyes ahead of cheeks).',
    recovery: '3-5 Weeks',
    recoveryWeeks: 5,
    cost: '$7,000 - $12,000',
    synergy: 'Cheek Implants for total midface continuity.'
  },
  // --- LEVEL 4: MAJOR SKELETAL ---
  {
    id: 'bimax',
    name: 'Bimaxillary Osteotomy (DJS)',
    level: 4,
    zone: 'Lower Third',
    description: 'The "Holy Grail". Cutting both the upper (LeFort I) and lower jaw (BSSO) to move the entire complex forward.',
    failoFix: 'Severe recession, malocclusion, long midface, sleep apnea.',
    recovery: '6-12 Weeks',
    recoveryWeeks: 12,
    cost: '$20,000 - $50,000',
    synergy: 'Everything. It changes the entire foundation of the face.'
  },
  {
    id: 'limb-lengthening',
    name: 'Limb Lengthening',
    level: 4,
    zone: 'Body',
    description: 'Fracturing the femur or tibia and using an internal nail to slowly distract the bone, adding up to 6 inches of height.',
    failoFix: 'Short stature (<5\'9"), proportion imbalances.',
    recovery: '3-6 Months (Full athletic recovery 1-2y)',
    recoveryWeeks: 24,
    cost: '$75,000 - $150,000',
    synergy: 'Physical Therapy (Mandatory).'
  },
  {
    id: 'orbital-decompression',
    name: 'Orbital Decompression',
    level: 4,
    zone: 'Orbital',
    description: 'Removing bone from the eye socket to allow the eye to sit further back. Dangerous but effective for severe protrusion.',
    failoFix: 'Severe bug eyes (Exophthalmos), negative vector.',
    recovery: '4-6 Weeks',
    recoveryWeeks: 6,
    cost: '$10,000 - $20,000',
    synergy: 'Infraorbital Implants.'
  }
];
