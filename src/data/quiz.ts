export interface QuizQuestion {
  id: string;
  question: string;
  options: { value: string; label: string; concern: string }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "concern",
    question: "What's your primary skin concern?",
    options: [
      { value: "dullness", label: "Dullness / uneven tone", concern: "dullness" },
      { value: "acne", label: "Breakouts / congestion", concern: "acne" },
      { value: "sensitivity", label: "Sensitivity / redness", concern: "sensitivity" },
      { value: "aging", label: "Fine lines / prevention", concern: "prevention" },
    ],
  },
  {
    id: "texture",
    question: "How would you describe your skin texture?",
    options: [
      { value: "smooth", label: "Smooth and even", concern: "general" },
      { value: "rough", label: "Rough or bumpy", concern: "congestion" },
      { value: "oily", label: "Oily / shiny", concern: "oiliness" },
      { value: "flaky", label: "Flaky / dehydrated", concern: "dehydration" },
    ],
  },
  {
    id: "sensitivity",
    question: "How does your skin react to new products?",
    options: [
      { value: "never", label: "Never reacts — I can use anything", concern: "general" },
      { value: "sometimes", label: "Occasional stinging with strong actives", concern: "general" },
      { value: "easily", label: "Easily irritated — reddens or stings", concern: "sensitivity" },
      { value: "allergic", label: "History of contact allergies / dermatitis", concern: "sensitivity" },
    ],
  },
  {
    id: "retinol",
    question: "Have you used retinoids before?",
    options: [
      { value: "current", label: "Yes — currently using regularly", concern: "prevention" },
      { value: "tried", label: "Tried but stopped (irritation)", concern: "sensitivity" },
      { value: "no", label: "No — never tried", concern: "general" },
      { value: "dont-know", label: "Not sure what retinoids are", concern: "general" },
    ],
  },
  {
    id: "spf",
    question: "How consistent is your sun protection?",
    options: [
      { value: "daily", label: "Every day, rain or shine", concern: "prevention" },
      { value: "mostly", label: "Most days when I go outside", concern: "prevention" },
      { value: "rarely", label: "Rarely — I forget", concern: "general" },
      { value: "never", label: "I don't use sunscreen", concern: "general" },
    ],
  },
  {
    id: "goal",
    question: "What's your main skincare goal?",
    options: [
      { value: "glow", label: "Radiance / glow", concern: "dullness" },
      { value: "clear", label: "Clear skin / no breakouts", concern: "acne" },
      { value: "calm", label: "Calm / soothed skin", concern: "sensitivity" },
      { value: "maintain", label: "Maintain healthy skin long-term", concern: "prevention" },
    ],
  },
];

export function getRoutineIdFromAnswers(answers: Record<string, string>): string {
  const concernCounts: Record<string, number> = {};

  for (const val of Object.values(answers)) {
    const optionMap: Record<string, string> = {
      dullness: "dullness",
      "dark-spots": "dullness",
      acne: "acne-control",
      congestion: "acne-control",
      oiliness: "acne-control",
      sensitivity: "barrier-repair",
      redness: "barrier-repair",
      dehydration: "barrier-repair",
      prevention: "preventive",
      general: "preventive",
      "anti-aging": "preventive",
      complete: "complete",
    };

    const mapped = optionMap[val] || "complete";
    concernCounts[mapped] = (concernCounts[mapped] || 0) + 1;
  }

  const sorted = Object.entries(concernCounts).sort((a, b) => b[1] - a[1]);
  return sorted[0]?.[0] || "complete";
}