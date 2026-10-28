export type EvidenceLevel = "promising" | "preliminary" | "limited" | "none" | "warning";

export interface EvidenceItem {
  id: string;
  healthOutcome: string;
  evidenceLevel: EvidenceLevel;
  interpretation: string;
  detail: string;
  primaryCitations: string[];
  badgeText: string;
  category: "metabolic" | "liver" | "cardiovascular" | "weight" | "formulation" | "safety";
}

export const evidenceMatrix: EvidenceItem[] = [
  {
    id: "blood-glucose",
    healthOutcome: "Blood Glucose Regulation",
    evidenceLevel: "promising",
    badgeText: "Promising Clinical Evidence",
    interpretation: "Promising clinical evidence",
    detail: "Statistically significant reductions in fasting blood glucose (avg −0.35 mmol/L), 2-hour postprandial glucose (−1.50 mmol/L), and HbA1c (−0.45%) documented across 17 randomized double-blind clinical trials.",
    primaryCitations: ["Lei et al. (2023)"],
    category: "metabolic"
  },
  {
    id: "ldl-cholesterol",
    healthOutcome: "LDL Cholesterol Reduction",
    evidenceLevel: "promising",
    badgeText: "Promising Clinical Evidence",
    interpretation: "Promising clinical evidence",
    detail: "Demonstrated average reduction of 0.41 mmol/L in LDL cholesterol and 0.48 mmol/L in total cholesterol across 1,485 trial participants.",
    primaryCitations: ["Lei et al. (2023)", "Ju et al. (2018)", "Zhao et al. (2021)"],
    category: "cardiovascular"
  },
  {
    id: "triglycerides",
    healthOutcome: "Triglyceride Reduction",
    evidenceLevel: "promising",
    badgeText: "Promising Clinical Evidence",
    interpretation: "Promising clinical evidence",
    detail: "Consistent mean reduction of 0.22 mmol/L in serum triglycerides in systematic meta-analyses without major safety flags.",
    primaryCitations: ["Lei et al. (2023)", "Zhao et al. (2021)"],
    category: "cardiovascular"
  },
  {
    id: "insulin-resistance",
    healthOutcome: "Insulin Resistance (HOMA-IR)",
    evidenceLevel: "promising",
    badgeText: "Promising but Heterogeneous",
    interpretation: "Promising but heterogeneous findings",
    detail: "Influences cellular AMPK energy sensor pathways to enhance glucose uptake; however, clinical trial endpoints show moderate between-study heterogeneity.",
    primaryCitations: ["Lei et al. (2023)", "Nie et al. (2024)"],
    category: "metabolic"
  },
  {
    id: "weight-loss",
    healthOutcome: "Weight Loss / Anti-Obesity",
    evidenceLevel: "limited",
    badgeText: "Limited & Inconsistent Evidence",
    interpretation: "Limited and modest clinical effect",
    detail: "A 2026 meta-analysis of 23 RCTs (Vahed et al.) reported an average weight reduction of −0.88 kg (~1.9 lbs). A 6-month trial in JAMA Network Open (Lei et al., 2026) did not find a statistically significant reduction in visceral fat or liver fat compared with placebo.",
    primaryCitations: ["Vahed et al. (2026)", "Lei et al. (2026)", "Nie et al. (2024)"],
    category: "weight"
  },
  {
    id: "fatty-liver",
    healthOutcome: "Fatty Liver Disease (NAFLD/MASLD)",
    evidenceLevel: "preliminary",
    badgeText: "Encouraging Preliminary Data",
    interpretation: "Encouraging preliminary clinical findings",
    detail: "Significant improvements in hepatic enzymes (ALT, AST, GGT) across 10 RCTs with 811 NAFLD participants, though histological fibrosis reversal remains unverified.",
    primaryCitations: ["Nie et al. (2024)"],
    category: "liver"
  },
  {
    id: "blood-pressure",
    healthOutcome: "Blood Pressure Reduction",
    evidenceLevel: "none",
    badgeText: "No Consistent Effect Established",
    interpretation: "No consistent clinically meaningful effect established",
    detail: "Clinical trials have failed to show reproducible, clinically meaningful reductions in systolic or diastolic blood pressure in hypertensive individuals.",
    primaryCitations: ["Lei et al. (2023)"],
    category: "cardiovascular"
  },
  {
    id: "cardiovascular-outcomes",
    healthOutcome: "Long-Term Cardiovascular Protection",
    evidenceLevel: "none",
    badgeText: "Not Established",
    interpretation: "Not established",
    detail: "Laboratory reductions in cholesterol and glucose have not been linked to proven reductions in hard clinical endpoints such as heart attacks, strokes, or cardiovascular mortality.",
    primaryCitations: ["Lei et al. (2023)"],
    category: "cardiovascular"
  },
  {
    id: "berberine-patches",
    healthOutcome: "Berberine Patches (Transdermal)",
    evidenceLevel: "none",
    badgeText: "Insufficient Clinical Evidence",
    interpretation: "Insufficient clinical evidence",
    detail: "Skin stratum corneum acts as a formidable biological barrier. Commercial skin patches lack human pharmacokinetic and clinical efficacy data.",
    primaryCitations: ["Theoretical & Pharmacokinetic analysis"],
    category: "formulation"
  },
  {
    id: "phytosome-superiority",
    healthOutcome: "Phytosome Superiority Over HCl",
    evidenceLevel: "limited",
    badgeText: "Requires Formulation Trials",
    interpretation: "Requires formulation-specific clinical evidence",
    detail: "While phospholipid complexes aim to boost oral absorption, head-to-head clinical trials demonstrating superior patient health outcomes are not established across all indications.",
    primaryCitations: ["Formulation comparative literature"],
    category: "formulation"
  },
  {
    id: "long-term-safety",
    healthOutcome: "Long-Term Safety (>6 Months)",
    evidenceLevel: "warning",
    badgeText: "Insufficiently Established",
    interpretation: "Insufficiently established",
    detail: "Clinical trials rarely extend beyond 12 to 24 weeks. Chronic continuous supplementation lacks robust long-term toxicological and surveillance data.",
    primaryCitations: ["Ju et al. (2018)", "Lei et al. (2023)"],
    category: "safety"
  }
];
