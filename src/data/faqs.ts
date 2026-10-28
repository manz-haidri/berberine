export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Basics & Biological Mechanisms" | "Metabolic Benefits & Blood Sugar" | "Weight Loss & Clinical Reality" | "Dosage, Timing & Administration" | "Clinical Safety, Kidneys & Interactions" | "Supplement Forms & Delivery";
  searchQuery: string;
  linkText?: string;
  linkUrl?: string;
}

export const berberineFaqs: FaqItem[] = [
  // 1. BASICS & BIOLOGICAL MECHANISMS
  {
    id: "what-is-berberine",
    question: "What is berberine?",
    searchQuery: "what is berberine",
    category: "Basics & Biological Mechanisms",
    answer: "Berberine is a bioactive quaternary isoquinoline alkaloid naturally found in medicinal plants including European barberry (Berberis vulgaris), goldenseal (Hydrastis canadensis), and Chinese goldthread (Coptis chinensis). Used for centuries in traditional Ayurvedic and Chinese herbal practices, modern medical research evaluates oral berberine supplements for glycemic control, lipid regulation, and metabolic health.",
    linkText: "Read complete introductory guide",
    linkUrl: "/what-is-berberine/"
  },
  {
    id: "what-does-berberine-do",
    question: "What does berberine do?",
    searchQuery: "what does berberine do",
    category: "Basics & Biological Mechanisms",
    answer: "Berberine activates AMP-activated protein kinase (AMPK), known as the cell's master energy regulator. Through AMPK stimulation, berberine promotes glucose uptake into muscle tissue, suppresses liver glucose production (gluconeogenesis), accelerates fatty acid breakdown, and enhances insulin sensitivity across peripheral tissues. It also modulates gut microbiota composition and intestinal endocrine signaling.",
    linkText: "Explore cellular mechanisms",
    linkUrl: "/what-is-berberine/#chemical-properties"
  },
  {
    id: "what-does-berberine-do-for-the-body",
    question: "What does berberine do for the body?",
    searchQuery: "what does berberine do for the body",
    category: "Basics & Biological Mechanisms",
    answer: "In the human body, berberine exerts multi-system metabolic benefits: it lowers elevated blood glucose and HbA1c, improves circulating lipid profiles (reducing LDL cholesterol and triglycerides), decreases elevated liver transaminases (ALT/AST) in fatty liver disease, and supports healthy gut barrier integrity through microbiome modulation.",
    linkText: "Review full clinical benefits",
    linkUrl: "/benefits/"
  },
  {
    id: "how-does-berberine-work",
    question: "How does berberine work?",
    searchQuery: "how does berberine work",
    category: "Basics & Biological Mechanisms",
    answer: "Berberine works through multi-targeted cellular pathways: (1) transient inhibition of mitochondrial respiratory Complex I, shifting the intracellular AMP/ATP ratio to activate AMPK, (2) post-transcriptional downregulation of PCSK9 to prolong LDL receptor half-life in the liver, and (3) local alteration of gut microbial diversity, enhancing short-chain fatty acid (SCFA) production and GLP-1 secretion from intestinal L-cells.",
    linkText: "Detailed pharmacology & pathways",
    linkUrl: "/what-is-berberine/#chemical-properties"
  },

  // 2. METABOLIC BENEFITS & BLOOD SUGAR
  {
    id: "what-is-berberine-used-for",
    question: "What is berberine used for?",
    searchQuery: "what is berberine used for",
    category: "Metabolic Benefits & Blood Sugar",
    answer: "Berberine is used primarily as an evidence-supported dietary supplement for managing prediabetes and type 2 diabetes blood glucose, correcting dyslipidemia (high LDL cholesterol and triglycerides), and supporting liver health in metabolic dysfunction-associated steatotic liver disease (MASLD / NAFLD). Many clinicians also recommend it for polycystic ovary syndrome (PCOS) insulin resistance.",
    linkText: "View clinical conditions & evidence",
    linkUrl: "/benefits/"
  },
  {
    id: "what-is-berberine-good-for",
    question: "What is berberine good for?",
    searchQuery: "what is berberine good for",
    category: "Metabolic Benefits & Blood Sugar",
    answer: "Berberine is most effective for metabolic biomarker optimization. Human clinical trials show consistent benefits for fasting plasma glucose (-0.35 to -0.80 mmol/L), HbA1c reduction (-0.45% to -0.70%), total cholesterol (-0.48 mmol/L), and triglycerides (-0.22 mmol/L). Evidence for standalone athletic performance, acute fat loss, or cognitive enhancement remains unproven.",
    linkText: "Check evidence strength matrix",
    linkUrl: "/research/#evidence-matrix"
  },
  {
    id: "does-berberine-work",
    question: "Does berberine work?",
    searchQuery: "does berberine work",
    category: "Metabolic Benefits & Blood Sugar",
    answer: "Yes, berberine works effectively for metabolic and glycemic endpoints, supported by dozens of peer-reviewed randomized controlled trials (RCTs). However, it does not work as a standalone obesity cure or an unguided replacement for prescription therapies such as metformin, statins, or GLP-1 agonists. Meaningful therapeutic outcomes require consistent dosing alongside dietary modifications.",
    linkText: "Examine published RCT library",
    linkUrl: "/research/"
  },
  {
    id: "does-berberine-lower-blood-sugar",
    question: "Does berberine lower blood sugar?",
    searchQuery: "does berberine lower blood sugar",
    category: "Metabolic Benefits & Blood Sugar",
    answer: "Yes, berberine reliably lowers blood sugar. Meta-analyses of over 30 clinical trials demonstrate that 1,000 mg to 1,500 mg daily reduces fasting blood glucose by 15 to 20 mg/dL (0.8 mmol/L) and decreases HbA1c by 0.45 to 0.70 percentage points. Berberine acts by stimulating glycolysis, enhancing peripheral insulin sensitivity, and reducing hepatic glucose output.",
    linkText: "Read blood glucose trials",
    linkUrl: "/benefits/#blood-sugar"
  },

  // 3. WEIGHT LOSS & CLINICAL REALITY
  {
    id: "does-berberine-help-with-weight-loss",
    question: "Does berberine help with weight loss?",
    searchQuery: "does berberine help with weight loss",
    category: "Weight Loss & Clinical Reality",
    answer: "Berberine provides only modest weight loss in clinical trials, averaging 0.88 kg to 2.0 kg (~1.9 to 4.4 lbs) over 12 weeks according to a 2026 meta-analysis of 23 RCTs. A 2026 multicenter double-blind trial in JAMA Network Open found no statistically significant difference in visceral fat or liver fat versus placebo over 6 months. It does not replicate the dramatic appetite suppression or 15–20% weight loss of prescription GLP-1 medications.",
    linkText: "Read the weight loss reality analysis",
    linkUrl: "/weight-loss/"
  },
  {
    id: "is-berberine-good-for-weight-loss",
    question: "Is berberine good for weight loss?",
    searchQuery: "is berberine good for weight loss",
    category: "Weight Loss & Clinical Reality",
    answer: "Berberine is rated 'Limited' for standalone weight loss. While it can assist body composition indirectly by improving insulin sensitivity and blunting postprandial glucose excursions, clinical evidence does not support using berberine as a primary anti-obesity intervention without caloric restriction and exercise.",
    linkText: "Explore clinical trials on weight",
    linkUrl: "/weight-loss/"
  },
  {
    id: "does-berberine-help-you-lose-weight",
    question: "Does berberine help you lose weight?",
    searchQuery: "does berberine help you lose weight",
    category: "Weight Loss & Clinical Reality",
    answer: "Berberine can assist with slight weight loss—typically between 1 and 4 pounds over 8 to 12 weeks—predominantly in individuals with preexisting insulin resistance or metabolic syndrome. It does not induce central nervous system appetite suppression, meaning lifestyle and dietary habits remain the dominant determinants of actual weight reduction.",
    linkText: "View JAMA 2026 trial findings",
    linkUrl: "/weight-loss/#jama-trial"
  },
  {
    id: "how-long-does-it-take-for-berberine-to-work-for-weight-loss",
    question: "How long does it take for berberine to work for weight loss?",
    searchQuery: "how long does it take for berberine to work for weight loss",
    category: "Weight Loss & Clinical Reality",
    answer: "In human trials, measurable changes in body weight and BMI require at least 8 to 12 consecutive weeks of consistent daily supplementation (1,000 to 1,500 mg daily). Noticeable shifts in blood glucose or digestion may occur within 2 to 4 weeks, but meaningful lipid and weight adaptations require 2 to 3 months of consistent use.",
    linkText: "Check research timeline details",
    linkUrl: "/weight-loss/"
  },
  {
    id: "how-to-take-berberine-for-weight-loss",
    question: "How to take berberine for weight loss?",
    searchQuery: "how to take berberine for weight loss",
    category: "Weight Loss & Clinical Reality",
    answer: "In clinical trials evaluating metabolic and weight markers, researchers evaluated 500 mg of Berberine HCl taken orally 2 to 3 times daily alongside or immediately before carbohydrate-containing meals (totaling 1,000–1,500 mg/day). Dosing alongside meals was chosen in trials to blunt postprandial glucose excursions and reduce gastrointestinal irritation. Individual supplementation should be discussed with a qualified physician.",
    linkText: "Review research dosage guide",
    linkUrl: "/supplements/#research-dosages"
  },

  // 4. DOSAGE, TIMING & ADMINISTRATION
  {
    id: "how-much-berberine-should-i-take",
    question: "How much berberine should I take?",
    searchQuery: "how much berberine should i take",
    category: "Dosage, Timing & Administration",
    answer: "Clinical trials typically evaluate 1,000 mg to 1,500 mg of Berberine HCl daily, divided into 500 mg doses taken two or three times daily with meals. Doses exceeding 1,500 mg daily have not demonstrated additional clinical benefits in trials and significantly increase the incidence of gastrointestinal adverse effects. Dosing schedules should be determined by a healthcare provider rather than self-prescribed.",
    linkText: "Compare verified product doses",
    linkUrl: "/supplements/"
  },
  {
    id: "when-is-the-best-time-to-take-berberine",
    question: "When is the best time to take berberine?",
    searchQuery: "when is the best time to take berberine",
    category: "Dosage, Timing & Administration",
    answer: "In clinical trials, berberine has been administered either directly with meals or shortly before eating. Because berberine has a short elimination half-life of several hours and impacts postprandial glucose uptake, trials commonly divided daily amounts across two or three meals. Consuming berberine with food also helps mitigate gastrointestinal irritation compared to taking it on an empty stomach.",
    linkText: "Learn about split dosing protocols",
    linkUrl: "/supplements/#research-dosages"
  },
  {
    id: "when-to-take-berberine",
    question: "When to take berberine?",
    searchQuery: "when to take berberine",
    category: "Dosage, Timing & Administration",
    answer: "Clinical trial protocols consistently administered berberine with or immediately before meals rather than on an empty stomach, which frequently provokes nausea, abdominal cramping, and diarrhea. For standard trial regimens of 1,000 to 1,500 mg daily, researchers divided doses evenly across main meals to maintain steady concentrations and minimize gastrointestinal side effects.",
    linkText: "Read daily-use instructions",
    linkUrl: "/supplements/#research-dosages"
  },
  {
    id: "how-to-take-berberine",
    question: "How to take berberine?",
    searchQuery: "how to take berberine",
    category: "Dosage, Timing & Administration",
    answer: "In research protocols, oral capsules were taken with water alongside meals. In clinical practice, healthcare providers often monitor patient tolerance by starting with lower divided amounts before reaching full study-equivalent doses, always taken with food to reduce gastrointestinal irritation. Screening for cytochrome P450 drug interactions with a physician or pharmacist is essential prior to initiation.",
    linkText: "Step-by-step administration guide",
    linkUrl: "/supplements/#buying-guide"
  },

  // 5. CLINICAL SAFETY, KIDNEYS & INTERACTIONS
  {
    id: "is-berberine-safe",
    question: "Is berberine safe?",
    searchQuery: "is berberine safe",
    category: "Clinical Safety, Kidneys & Interactions",
    answer: "In clinical trials lasting 12 to 24 weeks, oral berberine HCl (typically 1,000–1,500 mg/day) demonstrated acceptable tolerability in screened adult cohorts. However, adverse gastrointestinal events (diarrhea, constipation, flatulence, abdominal pain) are common, occurring in 10% to 34.5% of trial participants dose-dependently. Comprehensive safety data for continuous use beyond six months remain limited. Berberine is strictly contraindicated during pregnancy, lactation, and infancy, and carries major cytochrome P450 drug interaction risks.",
    linkText: "Review safety pharmacology",
    linkUrl: "/safety-and-side-effects/"
  },
  {
    id: "is-berberine-bad-for-kidneys",
    question: "Is berberine bad for kidneys?",
    searchQuery: "is berberine bad for kidneys",
    category: "Clinical Safety, Kidneys & Interactions",
    answer: "In short-term trials of adults with normal renal function, berberine at research doses (1,000–1,500 mg/day) has not shown evidence of nephrotoxicity. While preliminary animal and cellular studies suggest pathways that may protect against diabetic renal injury, these findings have not been demonstrated in clinical endpoint trials. Because berberine metabolites rely on renal elimination, individuals with preexisting chronic kidney disease (CKD) or reduced eGFR (<60 mL/min/1.73m²) face altered clearance kinetics and should not use berberine without direct nephrologist oversight.",
    linkText: "Read renal & organ safety review",
    linkUrl: "/safety-and-side-effects/#kidneys-renal-safety"
  },

  // 6. SUPPLEMENT FORMS & DELIVERY
  {
    id: "do-berberine-patches-work",
    question: "Do berberine patches work?",
    searchQuery: "do berberine patches work",
    category: "Supplement Forms & Delivery",
    answer: "No reliable scientific evidence indicates that berberine patches work. Berberine hydrochloride is a bulky, ionized quaternary alkaloid with poor passive skin permeability. There are zero published peer-reviewed human clinical trials or pharmacokinetic studies demonstrating that transdermal patches deliver therapeutic blood concentrations. Oral capsules remain the only clinically verified delivery route.",
    linkText: "Read transdermal patch evidence audit",
    linkUrl: "/supplements/#transdermal-patches"
  }
];

export function generateFaqSchema(items: FaqItem[] = berberineFaqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `<p>${item.answer}</p>`
      }
    }))
  };
}

