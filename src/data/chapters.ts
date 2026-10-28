export interface ChapterInfo {
  number: number;
  title: string;
  slug: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  summary: string;
  parentUrl: string;
  anchor: string;
  badge: string;
}

export const chaptersRegistry: ChapterInfo[] = [
  {
    number: 1,
    title: "What Is Berberine? Origins, Plants & Chemistry",
    slug: "what-is-berberine",
    primaryKeyword: "What is Berberine?",
    secondaryKeywords: ["Berberine", "Berberine Plant", "Berberine in Chinese"],
    summary: "Natural isoquinoline alkaloid origin, botanical species (Barberry, Goldenseal, Huang Lian), chemical classification, and low oral bioavailability reality.",
    parentUrl: "/what-is-berberine/",
    anchor: "#overview",
    badge: "Pillar Foundation"
  },
  {
    number: 2,
    title: "Berberine Benefits: Glucose, Lipids & Liver Health",
    slug: "benefits",
    primaryKeyword: "Berberine Benefits",
    secondaryKeywords: ["Benefits of Berberine", "What Does Berberine Do", "What Is Berberine Good For?"],
    summary: "Comprehensive meta-analysis data from Lei (2023) and Nie (2024) across fasting glucose, HbA1c, total & LDL cholesterol, triglycerides, and hepatic enzymes.",
    parentUrl: "/benefits/",
    anchor: "#overview",
    badge: "Clinical Evidence"
  },
  {
    number: 3,
    title: "Berberine for Weight Loss & The 'Ozempic' Myth",
    slug: "weight-loss",
    primaryKeyword: "Berberine for Weight Loss",
    secondaryKeywords: ["Berberine Weight Loss", "Does Berberine Help With Weight Loss?"],
    summary: "AMPK mechanisms, gut microbiota interactions, NAFLD BMI findings (SMD -0.58), and a rigorous scientific comparison with GLP-1 receptor agonist semaglutide.",
    parentUrl: "/weight-loss/",
    anchor: "#overview",
    badge: "Special Investigation"
  },
  {
    number: 4,
    title: "Berberine Supplements: Delivery Forms & Dosages",
    slug: "supplements-overview",
    primaryKeyword: "Berberine Supplement",
    secondaryKeywords: ["Berberine Supplements", "Berberine Tablets", "Berberine Capsules"],
    summary: "Delivery formats breakdown, clinical trial dosing (500 mg 2-3x daily), pharmacokinetics, and individual variables.",
    parentUrl: "/supplements/",
    anchor: "#supplement-types",
    badge: "Supplement Guide"
  },
  {
    number: 5,
    title: "Best Berberine Supplement: Evidence-Based Buying Guide",
    slug: "best-berberine-supplement",
    primaryKeyword: "Best Berberine Supplement",
    secondaryKeywords: ["Quality Berberine", "Berberine Testing", "Third-Party Certified Berberine"],
    summary: "How to evaluate brands using transparency, third-party laboratory verification, cGMP compliance, and dosage realism rather than marketing claims.",
    parentUrl: "/supplements/",
    anchor: "#buying-guide",
    badge: "Buyer's Guide"
  },
  {
    number: 6,
    title: "Berberine Side Effects & Clinical Tolerability",
    slug: "side-effects",
    primaryKeyword: "Berberine Side Effects",
    secondaryKeywords: ["Side Effects of Berberine", "Gastrointestinal Effects of Berberine"],
    summary: "Adverse event incidence evaluated in 2,147 patients (Ju et al. 2018): constipation, nausea, flatulence, headache, and medication interaction risks.",
    parentUrl: "/safety-and-side-effects/",
    anchor: "#side-effects",
    badge: "Safety Guide"
  },
  {
    number: 7,
    title: "Is Berberine Safe? Vulnerable Groups & Precautions",
    slug: "safety",
    primaryKeyword: "Is Berberine Safe?",
    secondaryKeywords: ["Berberine Safety", "Is Berberine Safe for Daily Use?"],
    summary: "Short vs long-term safety, pregnancy and breastfeeding contraindications, neonatal bilirubin displacement risks, and prescription drug interactions.",
    parentUrl: "/safety-and-side-effects/",
    anchor: "#contraindications",
    badge: "Medical Safety"
  },
  {
    number: 8,
    title: "Berberine HCl: The Gold Standard Research Salt",
    slug: "berberine-hcl",
    primaryKeyword: "Berberine HCl",
    secondaryKeywords: ["Berberine Hydrochloride", "Berberine Salt Form"],
    summary: "Molecular formula C20H18ClNO4, molecular weight 371.81 g/mol, difference from free-base cation, and why it is the standard research benchmark.",
    parentUrl: "/what-is-berberine/",
    anchor: "#berberine-hcl",
    badge: "Chemistry Guide"
  },
  {
    number: 9,
    title: "Berberine Phytosome: Phospholipids vs Clinical Reality",
    slug: "berberine-phytosome",
    primaryKeyword: "Berberine Phytosome",
    secondaryKeywords: ["Phospholipid Berberine", "High Absorption Berberine"],
    summary: "Phospholipid association technology, pharmacokinetic claims vs lack of comparative hard endpoint clinical trials, and head-to-head HCl comparison.",
    parentUrl: "/supplements/",
    anchor: "#phytosome-vs-hcl",
    badge: "Formulation Science"
  },
  {
    number: 10,
    title: "Berberine Patches: Transdermal Evidence Review",
    slug: "berberine-patches",
    primaryKeyword: "Berberine Patches",
    secondaryKeywords: ["Transdermal Berberine", "Berberine Skin Patch"],
    summary: "Skin stratum corneum barrier physics, why swallowing a compound differs from skin application, and the lack of published human clinical data.",
    parentUrl: "/supplements/",
    anchor: "#transdermal-patches",
    badge: "Evidence Review"
  },
  {
    number: 11,
    title: "Berberine Drops & Dietary Foods Reality Check",
    slug: "drops-and-foods",
    primaryKeyword: "Berberine Drops",
    secondaryKeywords: ["Berberine Foods", "Foods with Berberine", "Liquid Berberine"],
    summary: "Liquid extracts vs purified salts, barberry fruit culinary use, and why everyday diet cannot substitute for standardized supplements.",
    parentUrl: "/what-is-berberine/",
    anchor: "#drops-and-foods",
    badge: "Informational Guide"
  },
  {
    number: 12,
    title: "Thorne Berberine & Reddit User Reviews Analysis",
    slug: "brands-and-reddit",
    primaryKeyword: "Thorne Berberine",
    secondaryKeywords: ["Berberine Reddit", "Berberine Experiences"],
    summary: "Distinguishing brand formulation from clinical evidence, and analyzing anecdotal Reddit reports against rigorous scientific trial methodologies.",
    parentUrl: "/research/",
    anchor: "#consumer-experiences",
    badge: "Critical Review"
  }
];
