export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  category: string;
  description: string;
  ingredients: string[];
  howToUse: string;
  clinical: string[];
  image: string;
  sizes: { label: string; price: number }[];
}

export const products: Product[] = [
  {
    id: "clarifying-serum",
    name: "Clarifying Serum",
    tagline: "Weightless hydration with niacinamide and zinc",
    price: 48,
    category: "Serums",
    description:
      "A featherlight, water-gel serum that refines pores and rebalances the skin barrier. Niacinamide 5% works in concert with PCA zinc to regulate sebum production while ectoin soothes visible redness. Suitable for all skin types, including sensitive and acne-prone complexions.",
    ingredients: [
      "Niacinamide (Vitamin B3) 5% — Minimises pore appearance, evens skin tone",
      "Zinc PCA — Regulates sebum production, antimicrobial support",
      "Ectoin — Clinically proven to calm irritation and protect against urban pollution",
      "Hydrolysed Hyaluronic Acid — Multi-weight hydration without tackiness",
      "Aloe Barbadensis Leaf Juice — Cooling, non-sensitising water-phase base",
    ],
    howToUse:
      "Apply 3–4 drops to clean, damp skin after cleansing. Use AM and PM. Follow with moisturiser if desired. Avoid concurrent use with other high-concentration acid exfoliants.",
    clinical: [
      "Reduction in pore visibility after 28 days (n=42, 2024)",
      "23% decrease in transepidermal water loss after 2 weeks",
      "Non-comedogenic — 0% clogging in repeat-insult patch test",
      "pH 5.5–6.0 — Respects the acid mantle",
    ],
    image: "/products/serum.jpg",
    sizes: [
      { label: "30ml", price: 48 },
      { label: "50ml", price: 68 },
    ],
  },
  {
    id: "retinol-balm",
    name: "Retinol Night Balm",
    tagline: "Encapsulated retinol with ceramide repair complex",
    price: 72,
    category: "Moisturisers",
    description:
      "A richly textured yet breathable night balm that delivers time-released retinaldehyde (a next-generation retinoid) deep into the dermis. Three-ceramide ratio (1:1:1) mirrors the skin's own lipid barrier, while bakuchiol provides a gentle botanical retinoid alternative for those building tolerance.",
    ingredients: [
      "Retinaldehyde 0.1% — Time-released for minimal irritation, maximal turnover",
      "Ceramides NP, AP, EOP — 1:1:1 ratio clinically proven to restore barrier integrity",
      "Bakuchiol — Plant-derived retinoid alternative, complements retinal activity",
      "Squalane — Olive-derived, non-comedogenic emollient",
      "Panthenol (Pro-Vitamin B5) — Accelerates barrier recovery overnight",
    ],
    howToUse:
      "After cleansing and serum, warm a pea-sized amount between fingertips and press into skin. Use 2–3 nights per week to start, increasing frequency as tolerance builds. Avoid eye area. Always use SPF the following morning.",
    clinical: [
      "63% improvement in fine-line appearance at week 12 (n=58, 2024)",
      "Ceramide barrier integrity score +41% vs baseline at 4 weeks",
      "Transepidermal water loss reduced by 31% after 14 nights",
      "RIPT-confirmed non-irritating on sensitive skin panel",
    ],
    image: "/products/balm.jpg",
    sizes: [
      { label: "30ml", price: 72 },
      { label: "50ml", price: 98 },
    ],
  },
  {
    id: "vitamin-c-brightening",
    name: "Vitamin C Brightening Fluid",
    tagline: "Gold-stabilised L-ascorbic acid with ferulic acid",
    price: 64,
    category: "Serums",
    description:
      "A truly stable, waterless formulation of 15% pure L-ascorbic acid suspended in a gold-chelated silica base. Ferulic acid and vitamin E synergise to quadruple photoprotection. The fluid-to-gel texture absorbs instantly with zero oxidation odour — a new standard for day-brightening.",
    ingredients: [
      "L-Ascorbic Acid 15% — Gold-chelated for stability, shelf-stable >24 months",
      "Ferulic Acid 1% — Quadruples UV-protection synergy with vitamin C and E",
      "Vitamin E (Tocopherol) 1% — Lipid-soluble antioxidant, prevents oxidation cascade",
      "Gold Amino Acid Chelate — Patented delivery system, enhances C absorption",
      "Snow Mushroom (Tremella Fuciformis) — Weightless hydration, holds 500× its weight",
    ],
    howToUse:
      "Apply 4–5 drops to completely dry skin every morning. Wait 60 seconds before applying moisturiser or SPF. Do not use with direct copper-peptide products in the same routine.",
    clinical: [
      "Skin brightness +37% reflectance at 8 weeks (n=45, 2023)",
      "Gold chelation reduces L-ascorbic acid degradation rate by 82% vs aqueous",
      "Ferulic acid synergy calculated to provide SPF-boost equivalent to +2.5",
      "Zero oxidation discolouration at 24 months shelf-life test",
    ],
    image: "/products/vitaminc.jpg",
    sizes: [
      { label: "30ml", price: 64 },
      { label: "50ml", price: 88 },
    ],
  },
  {
    id: "barrier-cream",
    name: "Barrier Recovery Cream",
    tagline: "Ectoin and beta-glucan for compromised barrier repair",
    price: 56,
    category: "Moisturisers",
    description:
      "A sensorial lightweight cream engineered for barrier-compromised skin. Ectoin 1.5% (a extremolyte from halophilic bacteria) reduces stinging sensation within 90 seconds of application while beta-glucan 2% forms a moisture reservoir that lasts 12 hours. The ceramide analogue (psychosine) reinforces lamellar lipid packing without the weight of traditional occlusives.",
    ingredients: [
      "Ectoin 1.5% — Extremolyte that soothes irritation, reduces stinging by 44% in 90s",
      "Beta-Glucan 2% — High-molecular-weight polysaccharide, forms hydration reservoir",
      "Psychosine (Ceramide Analogue) — Lamellar lipid packing reinforcement",
      "Squalane — Non-comedogenic emollient at physiological concentration",
      "Panthenol 2% — Pro-vitamin B5 accelerates barrier recovery",
    ],
    howToUse:
      "Apply a thin, even layer to clean skin after serum. Use AM and PM. On barrier-compromised skin, a second layer can be applied to particularly dry or irritated areas. Compatible with all Veld actives.",
    clinical: [
      "44% reduction in TEWL after single application on barrier-compromised skin (n=30)",
      "Stinging sensation resolved within 90 seconds (VAS, n=30)",
      "100% pass on repeat-insult patch test (RIPT, 2024)",
      "12-hour moisture retention vs 4 hours for ceramide-only cream",
    ],
    image: "/products/barrier.jpg",
    sizes: [
      { label: "30ml", price: 56 },
      { label: "50ml", price: 78 },
    ],
  },
  {
    id: "gentle-cleanser",
    name: "Gentle Lipid Cleanser",
    tagline: "Non-foaming, microbiome-safe lipid cleanser",
    price: 38,
    category: "Cleansers",
    description:
      "A non-foaming, cream-based cleanser that removes sunscreen, excess sebum, and urban particulates without stripping the stratum corneum. The dual lipid phase (caprylic/capric triglyceride + squalane) dissolves lipophilic debris while amino-acid-derived surfactants provide just enough lift for water-soluble impurities. pH 5.5 matches the acid mantle.",
    ingredients: [
      "Caprylic/Capric Triglyceride — Fractionated coconut oil, non-comedogenic lipid phase",
      "Squalane — Olive-derived, mimics skin's own sebum lipids",
      "Coco-Glucoside + Glyceryl Oleate — Non-ionic surfactant pair, mild enough for compromised barriers",
      "Allantoin — Soothing, keratolytic at gentle concentration",
      "Lactobacillus Ferment Lysate — Postbiotic preservation booster, microbiome-friendly",
    ],
    howToUse:
      "Dispense 2–3 pumps onto dry or pre-wetted skin. Massage gently for 45 seconds, then rinse with lukewarm water. Can be used as single cleanse in the AM or first cleanse in a double-cleanse PM routine. Not water-activated — no foam, no stripping.",
    clinical: [
      "0.3% TEWL increase vs 8% for SLS-based cleanser (n=25, occlusive patch, 2024)",
      "Stratum corneum integrity maintained (no corneocyte desquamation increase)",
      "Non-comedogenic — 0% follicular keratosis in 21-day repeat-use",
      "pH 5.5 ± 0.3 — within physiological acid mantle range",
    ],
    image: "/products/cleanser.jpg",
    sizes: [
      { label: "100ml", price: 38 },
      { label: "200ml", price: 58 },
    ],
  },
  {
    id: "spf50-powder",
    name: "Mineral SPF 50 Powder",
    tagline: "Non-nano zinc oxide, reef-safe, translucent finish",
    price: 44,
    category: "Sun Protection",
    description:
      "A loose mineral powder with SPF 50+ UVB/UVA protection using non-nano zinc oxide (mean particle size 180 nm). The powder format eliminates the need for chemical UV filters, emulsifiers, or preservatives. Iron oxides provide a universal translucent tint that adapts to all Fitzpatrick skin types I–VI. No white cast, no eye sting, no reef impact.",
    ingredients: [
      "Non-Nano Zinc Oxide 22.5% (mean 180 nm) — Broad-spectrum UV filter, SPF 50+",
      "Iron Oxides (CI 77491, CI 77492, CI 77499) — Universal translucent tint, no white cast",
      "Silica Silylate — Hydrophobic coating, oil-absorbing, 8-hour wear",
      "Tocopherol (Vitamin E) — Antioxidant, prevents oxidation of sebum on skin",
      "No oxybenzone, no octinoxate, no octocrylene, no preservatives, no fragrance",
    ],
    howToUse:
      "Swirl brush into powder, tap off excess, and dust generously over face and neck. One full brush application provides approximately SPF 25; two applications (standard for topical sunscreens) provide SPF 50+. Reapply every 2 hours if exposed to direct sun. Can be used over makeup.",
    clinical: [
      "SPF 52 ± 3 (in-vivo, ISO 24444, 2024)",
      "UVA-PF 18 (in-vivo, ISO 24442), exceeds EU recommendation of 1/3 of SPF",
      "No white cast on Fitzpatrick VI (spectrophotometry, ΔE=1.2)",
      "Reef-safe: no coral bleaching at 10 mg/L (NOAA protocol, 2022)",
    ],
    image: "/products/spf.jpg",
    sizes: [
      { label: "12g", price: 44 },
      { label: "20g refill", price: 38 },
    ],
  },
];

// Helper to get product by id
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

// Helper to get products by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

// Categories
export const categories = ["All", "Serums", "Moisturisers", "Cleansers", "Sun Protection"] as const;