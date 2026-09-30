export interface RoutineStep {
  productId: string;
  step: string;
  time: "AM" | "PM" | "AM+PM";
  order: number;
  note?: string;
}

export interface RoutineStack {
  id: string;
  name: string;
  description: string;
  concerns: string[];
  steps: RoutineStep[];
}

export const routineStacks: RoutineStack[] = [
  {
    id: "brightening",
    name: "Brightening Stack",
    description:
      "Target hyperpigmentation, uneven tone, and dullness with a vitamin C-led AM routine and retinaldehyde renewal at night.",
    concerns: ["dullness", "dark-spots", "uneven-tone"],
    steps: [
      {
        productId: "gentle-cleanser",
        step: "Cleanse",
        time: "AM+PM",
        order: 1,
      },
      {
        productId: "vitamin-c-brightening",
        step: "Vitamin C Serum",
        time: "AM",
        order: 2,
        note: "Apply to dry skin. Wait 60s before next step.",
      },
      {
        productId: "barrier-cream",
        step: "Moisturise",
        time: "AM",
        order: 3,
      },
      {
        productId: "spf50-powder",
        step: "Sun Protection",
        time: "AM",
        order: 4,
        note: "Reapply every 2 hours if exposed.",
      },
      {
        productId: "retinol-balm",
        step: "Retinol Treatment",
        time: "PM",
        order: 2,
        note: "Use 2–3×/week to start. Always follow with moisturiser.",
      },
    ],
  },
  {
    id: "barrier-repair",
    name: "Barrier Repair Stack",
    description:
      "For sensitised, compromised, or post-procedure skin — focus on ceramide repair, ectoin soothing, and microbiome maintenance.",
    concerns: ["sensitivity", "redness", "dehydration"],
    steps: [
      {
        productId: "gentle-cleanser",
        step: "Gentle Cleanse",
        time: "AM+PM",
        order: 1,
        note: "Use lukewarm water. Do not double-cleanse if irritated.",
      },
      {
        productId: "clarifying-serum",
        step: "Niacinamide Serum",
        time: "AM+PM",
        order: 2,
      },
      {
        productId: "barrier-cream",
        step: "Barrier Recovery Cream",
        time: "AM+PM",
        order: 3,
        note: "Press gently — do not rub.",
      },
      {
        productId: "spf50-powder",
        step: "Mineral SPF",
        time: "AM",
        order: 4,
        note: "Only after barrier feels comfortable.",
      },
      {
        productId: "retinol-balm",
        step: "Retinol (optional)",
        time: "PM",
        order: 2,
        note: "Defer until barrier is fully restored (typically 2–4 weeks).",
      },
    ],
  },
  {
    id: "acne-control",
    name: "Acne Control Stack",
    description:
      "Sebum regulation with niacinamide + zinc, gentle cleansing, and retinoid-driven cellular turnover. No harsh actives.",
    concerns: ["acne", "oiliness", "congestion"],
    steps: [
      {
        productId: "gentle-cleanser",
        step: "Double Cleanse (if wearing SPX/makeup)",
        time: "PM",
        order: 1,
      },
      {
        productId: "clarifying-serum",
        step: "Clarifying Serum",
        time: "AM+PM",
        order: 2,
        note: "Can be used as solo treatment on active breakouts.",
      },
      {
        productId: "barrier-cream",
        step: "Barrier Cream",
        time: "AM+PM",
        order: 3,
        note: "Thin layer even if oily — barrier health is critical.",
      },
      {
        productId: "spf50-powder",
        step: "Mineral SPF Powder",
        time: "AM",
        order: 4,
        note: "Sebum-absorbing — helps control shine.",
      },
      {
        productId: "retinol-balm",
        step: "Retinol Night Balm",
        time: "PM",
        order: 2,
        note: "Start 2×/week. Do not use with other exfoliants.",
      },
    ],
  },
  {
    id: "preventive",
    name: "Preventive & Maintenance Stack",
    description:
      "For healthy skin looking to maintain barrier function, prevent photoageing, and build a sustainable long-term routine.",
    concerns: ["prevention", "general", "maintenance"],
    steps: [
      {
        productId: "gentle-cleanser",
        step: "Cleanse",
        time: "PM",
        order: 1,
        note: "AM rinse with water if skin is dry.",
      },
      {
        productId: "vitamin-c-brightening",
        step: "Vitamin C",
        time: "AM",
        order: 2,
      },
      {
        productId: "barrier-cream",
        step: "Moisturise",
        time: "AM+PM",
        order: 3,
      },
      {
        productId: "spf50-powder",
        step: "SPF 50",
        time: "AM",
        order: 4,
        note: "Daily, even indoors.",
      },
      {
        productId: "retinol-balm",
        step: "Retinol (2–3×/week)",
        time: "PM",
        order: 2,
      },
    ],
  },
  {
    id: "complete",
    name: "Complete Veld Regimen",
    description:
      "The full six-product system for those who want maximum clinical coverage across all skin concerns.",
    concerns: ["complete", "maximal", "anti-aging"],
    steps: [
      {
        productId: "gentle-cleanser",
        step: "Gentle Lipid Cleanse",
        time: "AM+PM",
        order: 1,
      },
      {
        productId: "clarifying-serum",
        step: "Clarifying Serum",
        time: "PM",
        order: 2,
      },
      {
        productId: "vitamin-c-brightening",
        step: "Vitamin C Serum",
        time: "AM",
        order: 2,
      },
      {
        productId: "barrier-cream",
        step: "Barrier Recovery Cream",
        time: "AM+PM",
        order: 3,
      },
      {
        productId: "spf50-powder",
        step: "Mineral SPF 50",
        time: "AM",
        order: 4,
      },
      {
        productId: "retinol-balm",
        step: "Retinol Night Balm",
        time: "PM",
        order: 3,
        note: "3×/week, on clarifying-serum-free nights.",
      },
    ],
  },
];

export const skinConcerns = [
  { id: "dullness", label: "Dullness / Lack of Radiance", icon: "🌑" },
  { id: "dark-spots", label: "Dark Spots / Hyperpigmentation", icon: "🎯" },
  { id: "uneven-tone", label: "Uneven Skin Tone", icon: "🎨" },
  { id: "sensitivity", label: "Sensitivity / Reactive Skin", icon: "🛡️" },
  { id: "redness", label: "Redness / Inflammation", icon: "🔥" },
  { id: "dehydration", label: "Dehydration / Dryness", icon: "💧" },
  { id: "acne", label: "Acne / Breakouts", icon: "🔴" },
  { id: "oiliness", label: "Oiliness / Shine", icon: "✨" },
  { id: "congestion", label: "Congestion / Clogged Pores", icon: "🔬" },
  { id: "prevention", label: "Preventative Anti-Aging", icon: "⏳" },
  { id: "general", label: "General Maintenance", icon: "✓" },
] as const;