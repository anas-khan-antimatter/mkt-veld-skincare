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
    tagline: "Post-retinoid repair with ectoin and beta-glucan",
    price: 56,
    category: "Moisturisers",
    description:
      "A minimalist, ceramide-rich recovery cream engineered for sensitised or barrier-compromised skin. Beta-glucan from oats provides immediate calming while ectoin and postbiotic fermentlysate repair desquamation. The lipid-phase delivers a biophilic film that doesn't suffocate pores.",
    ingredients: [
      "Beta-Glucan 2% — Oat-derived, immediate stinging relief on compromised barriers",
      "Ectoin 1.5% — Stress-protection molecule, membrane-stabilising",
      "Lactobacillus Ferment Lysate — Postbiotic, microbiome-friendly repair signal",
      "Ceramide NP — Targeted barrier gap-filling lipid",
      "Shea Butter Ethyl Esters — Non-comedogenic occlusive, lighter than traditional shea",
    ],
    howToUse:
      "Use AM and PM after serum. Dispense one pump and press gently into skin — do not rub. Can be layered over damp skin for extra hydration. Ideal cycling partner after retinol or acid exfoliation nights.",
    clinical: [
      "TEWL reduction of 44% in single application (barrier-compromised cohort, n=30)",
      "Stinging sensation resolved within 90 seconds vs 12 min for standard barrier creams",
      "Microbiome diversity score maintained (no dysbiosis) over 4-week use",
      "Non-comedogenic and ophthalmologist-tested",
    ],
    image: "/products/cream.jpg",
    sizes: [
      { label: "40ml", price: 56 },
      { label: "75ml", price: 82 },
    ],
  },
  {
    id: "gentle-cleanser",
    name: "Gentle Lipid Cleanser",
    tagline: "Micellar amino-acid gel with prebiotic oat oil",
    price: 36,
    category: "Cleansers",
    description:
      "An elegantly pH-balanced, jelly-textured cleanser that dissolves sunscreen, sebum, and urban particulate without stripping. The dual-micellar system uses amino-acid surfactants (sodium cocoyl alaninate) at a concentration high enough to cleanse but low enough to preserve the acid mantle. Oat prebiotic oil feeds the skin's commensal microbiome as you cleanse.",
    ingredients: [
      "Sodium Cocoyl Alaninate — Amino-acid derived, ultra-gentle primary surfactant",
      "Polyglyceryl-6 Laurate — Non-ionic emulsifier, removes silicone-based sunscreen",
      "Prebiotic Oat Oil — Beta-glucan-rich, feeds commensal skin bacteria",
      "Allantoin 0.5% — Mild keratolytic, smooths texture without acid sting",
      "Panthenol 1% — Anti-irritant buffer, leaves skin supple after rinse",
    ],
    howToUse:
      "Pump 2–3 doses into dry or damp hands. Massage onto dry skin for first-pass makeup/sunscreen removal, then add water for second-pass emulsification. Rinse thoroughly. Suitable for eye area.",
    clinical: [
      "pH 5.2–5.5 maintained after rinse — acid mantle preserved",
      "No increase in TEWL after 2 weeks twice-daily use (n=35)",
      "51% reduction in perceived tightness vs sulphate-based cleansers",
      "Microbiome alpha diversity maintained (16S rRNA sequencing, n=20)",
    ],
    image: "/products/cleanser.jpg",
    sizes: [
      { label: "150ml", price: 36 },
      { label: "250ml", price: 48 },
    ],
  },
  {
    id: "spf50-powder",
    name: "Mineral SPF 50 Powder",
    tagline: "Reappliable non-nano zinc with antioxidant mist",
    price: 38,
    category: "Sun Protection",
    description:
      "A reimagined mineral sunscreen in weightless powder form — designed for effortless reapplication over makeup or bare skin. Non-nano zinc oxide 22.5% provides broad-spectrum protection while a built-in kabuki buffing head delivers even, invisible deposition. The accompanying thermal antioxidant mist reactivates UV filters for second-pass protection.",
    ingredients: [
      "Non-Nano Zinc Oxide 22.5% — FDA-approved, reef-safe, broad-spectrum mineral filter",
      "Tetrahexyldecyl Ascorbate — Oil-soluble vitamin C, stabilised in dry powder",
      "Saccharomyces Ferment — Iron-chelating antioxidant, prevents oxidation discolouration",
      "Silica Silylate — Skin-blurring, sebum-absorbing spherical powder",
      "Thermal Spring Water (mist) — Selenium-rich, antioxidant reactivation trigger",
    ],
    howToUse:
      "Swipe the kabuki head across your face in circular motions. For full protection, apply 3–4 layers. Use the accompanying mist to 'reactivate' the powder for second-pass UV protection after 2 hours. Not a primary sunscreen — use with a cream SPF base.",
    clinical: [
      "SPF 50+ PPD 21 (PA++++) — Independent in-vivo testing, ISO 24444 compliant",
      "Powder particle size >100nm — no inhalation risk, no coral toxicity",
      "Reactivation spray increases effective UV protection by +18% on second pass",
      "Sebum absorption rate 2.3× standard setting powder (n=15 sebumetry)",
    ],
    image: "/products/spf.jpg",
    sizes: [
      { label: "8g (compact)", price: 38 },
      { label: "Refill", price: 30 },
    ],
  },
];

export const categories = [...new Set(products.map((p) => p.category))];