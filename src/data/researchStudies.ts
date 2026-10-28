export type StudyDesignType = 
  | "systematic-review-meta-analysis"
  | "randomized-controlled-trial"
  | "pharmacokinetic-absorption"
  | "supplement-potency-testing"
  | "preclinical-animal-cell";

export interface ResearchStudy {
  id: string;
  title: string;
  authors: string[];
  firstAuthor: string;
  year: number;
  journal: string;
  publicationDate: string;
  reviewedDate: string;
  doi: string;
  url: string;
  pubmedId?: string;
  participants: number | string;
  studyType: string;
  studyDesignType: StudyDesignType;
  condition: string;
  population: string;
  exactFormulationAndDose: string;
  comparator: string;
  duration: string;
  keyFindings: string[];
  metricsTable?: {
    parameter: string;
    reduction: string;
    note?: string;
  }[];
  limitations: string[];
  fundingAndConflicts: string;
  plainLanguageInterpretation: string;
  quoteOrSummary: string;
}

export const researchStudies: ResearchStudy[] = [
  {
    id: "lei-2026",
    title: "Berberine and Adiposity in Diabetes-Free Individuals With Obesity and MASLD: A Randomized Clinical Trial",
    authors: ["Lubi Lei", "Bin Wang", "Lingshan Zhao", "Jingkuo Li", "Xiaofang Yan", "Jiandong Jiang", "Lulu Wang", "Gang Ren", "et al."],
    firstAuthor: "Lei et al.",
    year: 2026,
    journal: "JAMA Network Open",
    publicationDate: "January 2026",
    reviewedDate: "October 2026",
    doi: "10.1001/jamanetworkopen.2025.54152",
    url: "https://pubmed.ncbi.nlm.nih.gov/41543854/",
    pubmedId: "41543854",
    participants: 337,
    studyType: "Multicenter Double-Blind Randomized Controlled Trial (11 Hospitals)",
    studyDesignType: "randomized-controlled-trial",
    condition: "Obesity and Metabolic Dysfunction-Associated Steatotic Liver Disease (MASLD)",
    population: "Diabetes-free adult participants diagnosed with obesity and MASLD",
    exactFormulationAndDose: "Berberine hydrochloride, 1.0 g daily (500 mg twice daily with meals)",
    comparator: "Matching oral placebo twice daily",
    duration: "24 weeks (6 months)",
    keyFindings: [
      "No statistically significant difference in visceral adipose tissue (VAT) area change between berberine and placebo groups.",
      "No statistically significant reduction in hepatic fat content compared to placebo.",
      "Secondary metabolic outcomes: Berberine was associated with significantly larger reductions in circulating LDL cholesterol, Apolipoprotein B (ApoB), and high-sensitivity C-reactive protein (hs-CRP) vs placebo.",
      "Safety profile was favorable; adverse event frequencies were comparable between berberine and placebo groups over 6 months."
    ],
    metricsTable: [
      { parameter: "Visceral Adipose Tissue (VAT)", reduction: "No significant difference vs placebo", note: "Primary trial outcome did not demonstrate superiority" },
      { parameter: "Liver Fat Content", reduction: "No significant reduction vs placebo", note: "Primary imaging endpoint showed neutral effect" },
      { parameter: "LDL Cholesterol", reduction: "Statistically significant reduction vs placebo", note: "Secondary cardiometabolic lipid marker" },
      { parameter: "Apolipoprotein B & hs-CRP", reduction: "Statistically significant reduction vs placebo", note: "Favorable biomarker shift without visceral fat loss" }
    ],
    limitations: [
      "Conducted in Chinese clinical centers in diabetes-free individuals with MASLD; generalizability across diverse global populations warrants study.",
      "Adiposity primary endpoints were negative; secondary biomarker improvements must not be conflated with obesity resolution.",
      "Lifestyle factors were monitored but not aggressively controlled."
    ],
    fundingAndConflicts: "Supported by national competitive academic research grants; authors declared no commercial supplement conflicts of interest.",
    plainLanguageInterpretation: "In a 6-month trial across 11 hospitals, berberine did not produce a statistically significant reduction in belly fat or liver fat compared with placebo in adults with obesity and fatty liver. However, it did improve blood cholesterol and inflammatory markers safely.",
    quoteOrSummary: "Multicenter double-blind RCT of 337 participants. This trial did not find a statistically significant reduction in visceral fat or liver fat compared with placebo in the studied population over six months, while secondary lipid and inflammatory biomarkers showed modest improvements."
  },
  {
    id: "vahed-2026",
    title: "The Effect of Berberine on Obesity Indices: A Systematic Review and Meta-analysis",
    authors: [
      "Iman Elahi Vahed",
      "Erfan Shahir-Roudi",
      "Sina Nojumi",
      "Samieh Golmohammadi",
      "Mehdi Moradi Shahrebabak",
      "Niloofar Sharafi Tafreshi Moghadam",
      "Amir Sajad Bagheryan",
      "Maryam Moftakhar",
      "Fateme Shamsipour",
      "Mahla Jafari",
      "Hossein Soltaninejad",
      "Mohammad Rahmanian"
    ],
    firstAuthor: "Vahed et al.",
    year: 2026,
    journal: "International Journal of Obesity",
    publicationDate: "January 2026 (Online Nov 2025)",
    reviewedDate: "October 2026",
    doi: "10.1038/s41366-025-01943-x",
    url: "https://doi.org/10.1038/s41366-025-01943-x",
    participants: 1874,
    studyType: "Systematic Review & Meta-analysis (23 Randomized Controlled Trials)",
    studyDesignType: "systematic-review-meta-analysis",
    condition: "Adult Body Weight, BMI, Waist Circumference, and Waist-to-Hip Ratio",
    population: "Adult participants with diverse metabolic conditions (overweight, obesity, T2DM, NAFLD)",
    exactFormulationAndDose: "Berberine extract / HCl ranging from 600 mg to 1,500 mg daily",
    comparator: "Placebo or standard care control groups across 23 RCTs",
    duration: "4 to 24 weeks",
    keyFindings: [
      "Body Weight: Statistically significant mean reduction of −0.88 kg (95% CI: −1.36 to −0.39 kg, p = 0.0003) across pooled trials.",
      "Body Mass Index (BMI): Statistically significant mean reduction of −0.48 kg/m² (95% CI: −0.89 to −0.07 kg/m², p = 0.0216).",
      "Waist Circumference: Statistically significant mean reduction of −1.32 cm (95% CI: −2.24 to −0.41 cm, p = 0.0046).",
      "Waist-to-Hip Ratio (WHR): No statistically significant difference between berberine and controls (MD: −0.01; 95% CI: −0.03 to 0.01)."
    ],
    metricsTable: [
      { parameter: "Body Weight", reduction: "−0.88 kg mean reduction", note: "Statistically significant (95% CI: −1.36 to −0.39 kg); clinical magnitude modest (~1.9 lbs)" },
      { parameter: "Body Mass Index (BMI)", reduction: "−0.48 kg/m² mean reduction", note: "Statistically significant (95% CI: −0.89 to −0.07 kg/m²)" },
      { parameter: "Waist Circumference", reduction: "−1.32 cm mean reduction", note: "Statistically significant (95% CI: −2.24 to −0.41 cm)" },
      { parameter: "Waist-to-Hip Ratio", reduction: "−0.01 change (non-significant)", note: "No statistically significant difference vs control" }
    ],
    limitations: [
      "High heterogeneity between included trials regarding primary health condition, baseline BMI, and lifestyle co-interventions.",
      "The clinical magnitude of weight reduction (less than 1 kilogram) is modest and not comparable to anti-obesity pharmacotherapy.",
      "Variable reporting quality regarding supplement purity and analytical chemical standardization."
    ],
    fundingAndConflicts: "Academic institutional funding; authors reported no industry sponsorship.",
    plainLanguageInterpretation: "A comprehensive analysis of 23 trials found that berberine produces a modest average weight reduction of about 1.9 pounds (0.88 kg) and a 1.3 cm reduction in waist size. Clinical trials do not support berberine as a standalone medical therapy for substantial weight reduction.",
    quoteOrSummary: "Meta-analysis of 23 RCTs confirming statistically significant but clinically modest weight reduction (mean −0.88 kg), demonstrating that clinical trials do not support berberine as a standalone medical therapy for substantial weight reduction."
  },
  {
    id: "lei-2023",
    title: "Efficacy and Safety Profile of Berberine Treatment in Improving Risk Factors for Cardiovascular Disease: A Systematic Review and Meta-analysis of Randomized, Double-blind Trials",
    authors: ["Lubi Lei", "Jingkuo Li", "Bin Wang"],
    firstAuthor: "Lei et al.",
    year: 2023,
    journal: "Cardiology Discovery",
    publicationDate: "December 2023",
    reviewedDate: "October 2026",
    doi: "10.1097/CD9.0000000000000087",
    url: "https://doi.org/10.1097/CD9.0000000000000087",
    participants: 1485,
    studyType: "Systematic Review & Meta-analysis (17 Double-Blind Randomized Trials)",
    studyDesignType: "systematic-review-meta-analysis",
    condition: "Cardiovascular and Metabolic Biomarkers (Glucose & Lipid Profile)",
    population: "Adults with metabolic disorders, hyperlipidemia, prediabetes, or type 2 diabetes",
    exactFormulationAndDose: "Berberine hydrochloride, typically 900–1,500 mg daily in split doses",
    comparator: "Placebo or conventional active comparator",
    duration: "8 to 24 weeks",
    keyFindings: [
      "Fasting blood glucose reduced by an average difference of −0.35 mmol/L vs control treatments (95% CI: −0.52 to −0.18).",
      "Two-hour postprandial glucose reduced by −1.50 mmol/L vs control (95% CI: −2.10 to −0.90).",
      "HbA1c lowered by an average of 0.45 percentage points over 8–16 week durations (95% CI: −0.64 to −0.26).",
      "Total cholesterol reduced by −0.48 mmol/L and LDL cholesterol reduced by −0.41 mmol/L.",
      "Triglycerides reduced by −0.22 mmol/L with neutral/no statistically significant change in HDL cholesterol (MD: 0.03 mmol/L; 95% CI: −0.01 to 0.08).",
      "Overall adverse-event rates were similar between berberine and control groups."
    ],
    metricsTable: [
      { parameter: "Fasting blood glucose", reduction: "−0.35 mmol/L mean difference", note: "Statistically significant vs control (95% CI: −0.52 to −0.18)" },
      { parameter: "Two-hour post-meal blood glucose", reduction: "−1.50 mmol/L mean difference", note: "Statistically significant vs control" },
      { parameter: "HbA1c (Glycated Hemoglobin)", reduction: "−0.45 percentage points difference", note: "Statistically significant; reflects ~2-3 month glycemic balance" },
      { parameter: "Total cholesterol", reduction: "−0.48 mmol/L mean difference", note: "Statistically significant vs control" },
      { parameter: "LDL cholesterol", reduction: "−0.41 mmol/L mean difference", note: "Statistically significant atherogenic particle reduction" },
      { parameter: "Serum Triglycerides", reduction: "−0.22 mmol/L mean difference", note: "Statistically significant lipid improvement" },
      { parameter: "HDL cholesterol", reduction: "Neutral (no statistically significant change)", note: "Not statistically significant (MD: 0.03 mmol/L, 95% CI: −0.01 to 0.08; neutral effect across pooled trials)" }
    ],
    limitations: [
      "Individual trials exhibited considerable heterogeneity in baseline participant metabolic severity.",
      "Several trials investigated berberine as an adjunct to existing pharmacological regimens rather than as an isolated therapy.",
      "Surrogate laboratory improvements do not establish reductions in long-term hard cardiovascular endpoints (such as myocardial infarction or stroke)."
    ],
    fundingAndConflicts: "Supported by academic research foundations; no pharmaceutical or supplement commercial funding declared.",
    plainLanguageInterpretation: "Pooling 17 double-blind trials showed berberine reliably lowers blood sugar, HbA1c, LDL cholesterol, and triglycerides by modest, statistically significant margins. However, it does not raise 'good' HDL cholesterol, nor does it establish prevention of hard cardiovascular outcomes.",
    quoteOrSummary: "Systematic review of 17 double-blind RCTs (1,485 participants) demonstrating consistent, statistically significant reductions in glucose, HbA1c, LDL-C, and triglycerides, with neutral HDL effects."
  },
  {
    id: "nie-2024",
    title: "The Clinical Efficacy and Safety of Berberine in the Treatment of Non-Alcoholic Fatty Liver Disease: A Meta-analysis and Systematic Review",
    authors: ["Qilong Nie", "Mingyang Li", "Caiyang Huang", "Yongwei Yuan", "Qiuyan Liang", "Xiaojun Ma", "Tengyu Qiu", "Jianhong Li"],
    firstAuthor: "Nie et al.",
    year: 2024,
    journal: "Journal of Translational Medicine",
    publicationDate: "March 2024",
    reviewedDate: "October 2026",
    doi: "10.1186/s12967-024-05011-2",
    url: "https://doi.org/10.1186/s12967-024-05011-2",
    participants: 811,
    studyType: "Systematic Review & Meta-analysis (10 Randomized Controlled Trials)",
    studyDesignType: "systematic-review-meta-analysis",
    condition: "Non-Alcoholic Fatty Liver Disease (NAFLD / MASLD)",
    population: "Adult patients clinically diagnosed with NAFLD / MASLD",
    exactFormulationAndDose: "Berberine HCl (typically 500 mg 2–3 times daily)",
    comparator: "Placebo, lifestyle intervention, or active control",
    duration: "12 to 24 weeks",
    keyFindings: [
      "Statistically significant reductions in hepatic injury enzymes: Alanine aminotransferase (ALT), Aspartate aminotransferase (AST), and Gamma-glutamyl transferase (GGT).",
      "Significant improvements in homeostatic model assessment of insulin resistance (HOMA-IR) and circulating lipids.",
      "Standardized Mean Difference (SMD) in BMI of −0.58 across NAFLD study cohorts.",
      "Adverse effects were predominantly mild gastrointestinal complaints."
    ],
    metricsTable: [
      { parameter: "Alanine Aminotransferase (ALT)", reduction: "Statistically significant reduction", note: "Primary surrogate biomarker of liver transaminase injury" },
      { parameter: "Aspartate Aminotransferase (AST)", reduction: "Statistically significant reduction", note: "Hepatic transaminase enzyme marker" },
      { parameter: "Gamma-Glutamyl Transferase (GGT)", reduction: "Statistically significant reduction", note: "Enzyme marker of biliary/hepatic stress" },
      { parameter: "Body Mass Index (BMI)", reduction: "SMD −0.58 standardized difference", note: "Relative statistical effect across NAFLD cohorts, not general population weight loss" },
      { parameter: "Insulin Resistance (HOMA-IR)", reduction: "Statistically significant reduction", note: "Surrogate score for fasting insulin sensitivity" }
    ],
    limitations: [
      "Conducted in cohorts with diagnosed fatty liver disease; findings cannot be generalized as a primary obesity therapy for healthy individuals.",
      "Biomarker reductions (ALT/AST) do not prove histological reversal of liver fibrosis without paired liver biopsies.",
      "SMD −0.58 reflects pooled relative variance, not a uniform absolute change across individuals."
    ],
    fundingAndConflicts: "Supported by provincial science funds; no commercial ties declared.",
    plainLanguageInterpretation: "In patients with fatty liver disease, berberine lowered circulating liver enzymes and improved insulin resistance markers over 3 to 6 months. It also showed modest relative BMI adjustments, though it did not prove reversal of underlying liver scarring.",
    quoteOrSummary: "Systematic review of 10 RCTs (811 NAFLD participants) showing significant reductions in liver enzymes (ALT, AST, GGT) and insulin resistance, alongside modest BMI adjustments (SMD −0.58)."
  },
  {
    id: "yin-2008",
    title: "Efficacy of Berberine in Patients With Type 2 Diabetes Mellitus",
    authors: ["Jun Yin", "Huili Xing", "Jianping Ye"],
    firstAuthor: "Yin et al.",
    year: 2008,
    journal: "Metabolism",
    publicationDate: "May 2008",
    reviewedDate: "October 2026",
    doi: "10.1016/j.metabol.2008.01.013",
    url: "https://doi.org/10.1016/j.metabol.2008.01.013",
    pubmedId: "18442638",
    participants: "84 total (Study A: 36; Study B: 48)",
    studyType: "Two Distinct Pilot Studies (Study A: Randomized Active-Controlled; Study B: Add-On Cohort)",
    studyDesignType: "randomized-controlled-trial",
    condition: "Type 2 Diabetes Mellitus (Glycemic & Lipid Control)",
    population: "Study A: 36 newly diagnosed type 2 diabetes patients; Study B: 48 patients with inadequately controlled type 2 diabetes",
    exactFormulationAndDose: "Berberine HCl, 500 mg three times daily with meals (1,500 mg/day)",
    comparator: "Study A: Metformin (0.5 g tid, active comparator, n=18 vs berberine n=18); Study B: Berberine added to existing therapies (no metformin comparator group)",
    duration: "13 weeks (3 months)",
    keyFindings: [
      "Study A (n=36 randomized, n=31 completed and analyzed): Newly diagnosed patients were randomized to berberine (n=18) or metformin (n=18). Three patients in the berberine group and two in the metformin group withdrew due to treatment failure, leaving 15 in the berberine arm and 16 in the metformin arm analyzed at 13 weeks. Within-group HbA1c in the berberine arm dropped from 9.5% ± 0.5% to 7.5% ± 0.4% (~2.0 percentage point reduction), and in the metformin arm from 9.2% ± 0.4% to 7.7% ± 0.3%. Fasting blood glucose dropped from 10.6 to 6.9 mmol/L in the berberine group.",
      "Study B (n=48 inadequately controlled): Berberine administered as an add-on to existing therapies (insulin or oral hypoglycemic agents) without a randomized metformin comparison arm; within-group reductions in HbA1c and fasting blood glucose were observed.",
      "Triglycerides and total cholesterol were significantly reduced in the berberine-treated cohorts, whereas metformin had less impact on lipid parameters in Study A.",
      "Transient gastrointestinal adverse events (diarrhea, constipation, abdominal pain) occurred in 34.5% of participants across the study."
    ],
    metricsTable: [
      { parameter: "Study A: HbA1c (Within-Group Change)", reduction: "2.0 percentage points reduction", note: "Dropped from 9.5% to 7.5% baseline in berberine arm (n=15 analyzed of 18 randomized; metformin arm dropped 1.5 percentage points from 9.2% to 7.7%, n=16 analyzed of 18 randomized; 31 completed overall)" },
      { parameter: "Study A: Fasting Blood Glucose", reduction: "From 10.6 to 6.9 mmol/L", note: "Statistically significant within-group reduction in newly diagnosed cohort" },
      { parameter: "Study B: Add-On HbA1c Change", reduction: "From 8.1% to 7.3%", note: "In 48 patients with inadequately controlled diabetes receiving add-on berberine (no metformin comparator)" },
      { parameter: "Gastrointestinal Events", reduction: "34.5% incidence (transient)", note: "Self-limiting diarrhea, constipation, and abdominal discomfort" }
    ],
    limitations: [
      "Two separate study cohorts with different designs: only Study A (36 newly diagnosed patients randomized: 18 to berberine, 18 to metformin; 31 completed and analyzed: 15 berberine, 16 metformin) compared berberine directly to metformin; Study B (48 patients) was an add-on evaluation without a metformin comparator arm. The combined 84 participants must not be described as a single randomized comparison against metformin.",
      "Small pilot sample sizes (15 analyzed in the berberine arm and 16 analyzed in the metformin arm in Study A) are underpowered for non-inferiority testing and cannot establish clinical equivalence or therapeutic interchangeability with prescription metformin.",
      "Open-label design lacking double-blind placebo control; within-group baseline changes must not be conflated with placebo-controlled between-group effect sizes.",
      "Short 13-week duration evaluates surrogate glycemic markers rather than long-term clinical microvascular or macrovascular disease outcomes."
    ],
    fundingAndConflicts: "Supported by the National Natural Science Foundation of China; authors declared no competing commercial interests.",
    plainLanguageInterpretation: "This publication consists of two separate small pilot investigations, not a single 84-patient randomized trial against metformin. In Study A, 36 newly diagnosed individuals were randomized (18 to berberine, 18 to metformin), of whom 31 completed the 13-week protocol (15 analyzed in berberine, 16 in metformin; 5 discontinued due to treatment failure). In Study B, 48 individuals with inadequately controlled diabetes received berberine as an add-on therapy without a metformin comparison arm. While Study A observed comparable within-group glycemic reductions between berberine and metformin among completers, this small preliminary pilot does not demonstrate clinical equivalence or establish that berberine is interchangeable with prescription metformin.",
    quoteOrSummary: "Influential 13-week pilot paper comprising two distinct sub-studies: Study A randomized 36 newly diagnosed patients to berberine (n=18) or metformin (n=18), with 31 completing (15 berberine, 16 metformin analyzed); Study B evaluated berberine as an add-on in 48 patients with inadequately controlled diabetes. Does not establish clinical equivalence or interchangeability with metformin."
  },
  {
    id: "petrangolini-2021",
    title: "Development of an Innovative Berberine Food-Grade Formulation With an Ameliorated Absorption: In Vitro Evidence Confirmed by Healthy Human Volunteers Pharmacokinetic Study",
    authors: [
      "Giovanna Petrangolini",
      "Fabrizio Corti",
      "Massimo Ronchi",
      "Lolita Arnoldi",
      "Pietro Allegrini",
      "Antonella Riva"
    ],
    firstAuthor: "Petrangolini et al.",
    year: 2021,
    journal: "Evidence-Based Complementary and Alternative Medicine",
    publicationDate: "November 2021",
    reviewedDate: "October 2026",
    doi: "10.1155/2021/7563889",
    url: "https://doi.org/10.1155/2021/7563889",
    pubmedId: "PMC8665891",
    participants: 12,
    studyType: "Human Pharmacokinetic & In Vitro Absorption Study (12 Healthy Volunteers)",
    studyDesignType: "pharmacokinetic-absorption",
    condition: "Oral Pharmacokinetics and Intestinal Bioaccessibility",
    population: "Healthy human adult volunteers (crossover pharmacokinetic evaluation)",
    exactFormulationAndDose: "Berberine Phytosome (Berbevis®; 550 mg containing ~188 mg berberine) vs standard unformulated berberine extract (500 mg)",
    comparator: "Standard unformulated berberine extract (reference)",
    duration: "Single-dose 24-hour pharmacokinetic plasma sampling",
    keyFindings: [
      "The phytosome formulation increased molar bioaccessibility in in vitro digestion models.",
      "In 12 healthy human volunteers, maximum plasma concentration (Cmax) and area under the plasma concentration-time curve (AUC) were significantly higher for the phospholipid complex compared to unformulated berberine.",
      "Good overall gastrointestinal tolerability during the acute pharmacokinetic monitoring window."
    ],
    metricsTable: [
      { parameter: "Plasma Bioavailability (AUC)", reduction: "Significantly higher systemic exposure", note: "Pharmacokinetic plasma concentration measurement in 12 healthy human volunteers" },
      { parameter: "Formulation Molar Efficiency", reduction: "Lower absolute alkaloid dose required for equal blood level", note: "550 mg phytosome (~188 mg berberine) yielded equal or higher AUC vs 500 mg standard extract" },
      { parameter: "Clinical Disease Outcomes", reduction: "Not evaluated in this pharmacokinetic study", note: "Crucial distinction: Increased absorption does not prove superior clinical disease outcomes" }
    ],
    limitations: [
      "Small sample size (n=12 healthy human volunteers); tested single-dose pharmacokinetics only.",
      "Does not measure clinical disease endpoints (blood glucose, lipids, cardiovascular events, or weight loss).",
      "Higher systemic blood levels could theoretically alter drug interaction dynamics with CYP-metabolized pharmaceuticals."
    ],
    fundingAndConflicts: "Study sponsored and conducted by Indena S.p.A. (the commercial manufacturer and patent holder of Berbevis® Berberine Phytosome).",
    plainLanguageInterpretation: "This study showed that wrapping berberine in sunflower phospholipids and pea protein helps the body absorb more into the blood in 12 healthy volunteers. However, higher blood levels have not yet been proven in head-to-head clinical trials to treat disease better than regular berberine.",
    quoteOrSummary: "Industry-sponsored human pharmacokinetic study in 12 healthy volunteers showing enhanced oral absorption of Berberine Phytosome (Berbevis®). Proves enhanced bioavailability, but clinical outcome superiority remains unproven."
  },
  {
    id: "funk-2018",
    title: "Variability in Potency Among Commercial Preparations of Berberine",
    authors: [
      "Ryan S. Funk",
      "Rakesh K. Singh",
      "Robert D. Winefield",
      "Sylvie E. Kandel",
      "Janelle F. Ruisinger",
      "Patrick M. Moriarty",
      "James M. Backes"
    ],
    firstAuthor: "Funk et al.",
    year: 2018,
    journal: "Journal of Dietary Supplements",
    publicationDate: "July 2018 (Epub Aug 2017)",
    reviewedDate: "October 2026",
    doi: "10.1080/19390211.2017.1347227",
    url: "https://pubmed.ncbi.nlm.nih.gov/28792254/",
    pubmedId: "28792254",
    participants: "15 commercial products",
    studyType: "Commercial Dietary Supplement Quality & Potency Analysis",
    studyDesignType: "supplement-potency-testing",
    condition: "Finished Product Potency & Label Accuracy",
    population: "Commercial berberine dietary supplements purchased from retail and online stores in the United States",
    exactFormulationAndDose: "15 unique commercial retail products analyzed using high-performance liquid chromatography (HPLC)",
    comparator: "Manufacturer stated label claims and United States Pharmacopeia (USP) 90–110% potency threshold",
    duration: "Analytical laboratory batch screening",
    keyFindings: [
      "Average berberine content across the 15 tested commercial brands was 75% ± 25% of the stated label claim.",
      "Nine of the 15 products (60%) failed to meet standard pharmaceutical potency requirements (90% to 110% of stated label claim).",
      "Actual product content ranged from 33% to 100% of the labeled quantity.",
      "Only 6 of the 15 products met their stated alkaloid potency within acceptable analytical margins."
    ],
    metricsTable: [
      { parameter: "Average Potency vs Label", reduction: "75% ± 25% of declared amount", note: "Mean chemical content across 15 commercial brands" },
      { parameter: "Failure Rate (USP 90-110% standard)", reduction: "60% of products failed (9 of 15)", note: "Failed acceptable finished product quality thresholds" },
      { parameter: "Lowest Tested Potency", reduction: "33% of declared label claim", note: "Severe underdosing detected in commercial marketplace" }
    ],
    limitations: [
      "Tested 15 specific product lots from 2017; batch-to-batch variation may occur over time.",
      "Did not evaluate heavy metals, pesticides, or microbial adulterants.",
      "Crucial distinction: Supplement quality testing verifies chemical authenticity and purity, but does not evaluate clinical efficacy."
    ],
    fundingAndConflicts: "Independent academic laboratory investigation; no commercial supplement industry funding.",
    plainLanguageInterpretation: "Researchers bought 15 commercial berberine supplements and tested them in an analytical lab. Six out of 10 products contained significantly less berberine than promised on the label—averaging only 75% of the claim. This highlights the vital importance of verified third-party laboratory testing.",
    quoteOrSummary: "Analytical HPLC testing study revealing widespread potency shortfalls in commercial berberine supplements: 60% of tested brands failed to meet label claims, averaging only 75% of stated potency."
  },
  {
    id: "lee-2006",
    title: "Berberine, a Natural Plant Product, Activates AMP-Activated Protein Kinase With Beneficial Metabolic Effects in Diabetic and Insulin-Resistant States",
    authors: [
      "Yun S. Lee",
      "Woo S. Kim",
      "Kang H. Kim",
      "Myung J. Yoon",
      "Hye J. Cho",
      "Yun Shen",
      "Ji-Ming Ye",
      "Chul H. Lee",
      "Won K. Oh",
      "Chul T. Kim",
      "Cordula Hohnen-Behrens",
      "Alison Gosby",
      "Edward W. Kraegen",
      "David E. James",
      "Jae B. Kim"
    ],
    firstAuthor: "Lee et al.",
    year: 2006,
    journal: "Diabetes",
    publicationDate: "August 2006",
    reviewedDate: "October 2026",
    doi: "10.2337/db06-0006",
    url: "https://doi.org/10.2337/db06-0006",
    pubmedId: "16873688",
    participants: "Rodent models & cell cultures",
    studyType: "Preclinical In Vitro and Animal Experiment",
    studyDesignType: "preclinical-animal-cell",
    condition: "Cellular Energy Sensing (AMPK Activation) and Insulin Resistance",
    population: "db/db diabetic mice, high-fat diet-fed Wistar rats, 3T3-L1 adipocytes, and L6 muscle myotubes",
    exactFormulationAndDose: "Berberine alkaloid administered in cell culture medium and animal feeding protocols",
    comparator: "Vehicle controls and untreated diabetic animals",
    duration: "Multi-week preclinical animal dosing and acute cell assays",
    keyFindings: [
      "Identified that berberine stimulates phosphorylation and enzymatic activation of AMP-activated protein kinase (AMPK) in muscle cells and liver tissue.",
      "Demonstrated that AMPK activation promoted GLUT4 glucose transporter translocation, stimulating glucose uptake independently of insulin signaling.",
      "In obese diabetic mice, berberine reduced body weight and improved glucose tolerance.",
      "Downregulated expression of genes involved in lipogenesis in hepatic and adipose tissue."
    ],
    metricsTable: [
      { parameter: "AMPK Phosphorylation", reduction: "Significant activation", note: "Demonstrated cellular master energy switch activation in vitro" },
      { parameter: "Glucose Uptake (Muscle Cells)", reduction: "Significantly enhanced", note: "Insulin-independent GLUT4 translocation mechanism" },
      { parameter: "Lipogenic Gene Expression", reduction: "Downregulated SREBP-1c and FAS", note: "Inhibited fat creation pathways in rodent liver cells" }
    ],
    limitations: [
      "Preclinical study conducted entirely in rodents and isolated cell cultures.",
      "Fundamental scientific rule: Human clinical benefits cannot be inferred directly from animal experiments or in vitro cell assays.",
      "Animal metabolic rates, bioavailability pathways, and effective tissue concentrations differ substantially from human physiology."
    ],
    fundingAndConflicts: "Funded by Korean Ministry of Science and Technology; authors declared no commercial supplement conflicts.",
    plainLanguageInterpretation: "A foundational laboratory study that discovered how berberine works at the cell level: it activates an enzyme called AMPK, which helps muscle cells take up glucose and reduces fat creation in liver cells. However, laboratory rodent results do not prove identical effects in humans.",
    quoteOrSummary: "Foundational preclinical discovery demonstrating that berberine activates AMP-activated protein kinase (AMPK) in muscle and liver cells, establishing its cellular mechanism of action."
  },
  {
    id: "ju-2018",
    title: "Efficacy and Safety of Berberine for Dyslipidaemias: A Systematic Review and Meta-analysis of Randomized Clinical Trials",
    authors: ["Jianqing Ju", "Jingen Li", "Qian Lin", "Hao Xu"],
    firstAuthor: "Ju et al.",
    year: 2018,
    journal: "Phytomedicine",
    publicationDate: "November 2018",
    reviewedDate: "October 2026",
    doi: "10.1016/j.phymed.2018.09.212",
    url: "https://doi.org/10.1016/j.phymed.2018.09.212",
    pubmedId: "30340835",
    participants: 2147,
    studyType: "Systematic Review & Meta-analysis (16 Randomized Clinical Trials)",
    studyDesignType: "systematic-review-meta-analysis",
    condition: "Dyslipidemia & Safety/Tolerability Surveillance",
    population: "Adult patients with diagnosed dyslipidemia",
    exactFormulationAndDose: "Berberine HCl (typically 600–1,500 mg daily)",
    comparator: "Placebo or conventional lipid-lowering controls",
    duration: "4 to 24 weeks",
    keyFindings: [
      "Evaluated 16 randomized trials with 2,147 dyslipidemic participants.",
      "No statistically significant difference in overall reported adverse-event incidence between berberine and control groups.",
      "Reported adverse events were mild and localized primarily to the gastrointestinal tract: constipation, flatulence, nausea, headache, and transient transaminase elevations.",
      "Zero serious adverse events reported across all 16 included trials."
    ],
    metricsTable: [
      { parameter: "Overall Adverse Events Incidence", reduction: "No significant difference vs control", note: "Relative Risk comparable to control/placebo groups" },
      { parameter: "Serious Adverse Events", reduction: "0 reported across 2,147 participants", note: "No hospitalizations or life-threatening toxicities documented" },
      { parameter: "Gastrointestinal Complaints", reduction: "Constipation, flatulence, mild nausea", note: "Dose-dependent and generally self-limiting" }
    ],
    limitations: [
      "Variable methodological rigor in some older included primary trials.",
      "No clinical trial in the review extended beyond 24 weeks; continuous long-term (>6 months) safety data remain limited."
    ],
    fundingAndConflicts: "Supported by the National Natural Science Foundation of China; authors reported no commercial conflicts.",
    plainLanguageInterpretation: "Looking across 16 clinical trials with over 2,100 patients, berberine was generally well-tolerated over short-to-medium durations. Side effects were mild and mainly digestive (like constipation, bloating, or nausea), with no serious adverse complications reported during 1 to 6 months of use.",
    quoteOrSummary: "Safety-focused meta-analysis of 16 RCTs (2,147 participants) confirming short-to-medium term clinical tolerability with mild gastrointestinal complaints and zero serious adverse events."
  },
  {
    id: "zhao-2021",
    title: "Efficacy and Safety of Berberine for Dyslipidemia: Study Protocol for a Randomized Double-Blind Placebo-Controlled Trial",
    authors: ["Ying Zhao", "Ying-Ying Yang", "Bai-Le Yang", "Ya-Wei Du", "Hui-Min Yang", "Sheng-Xian Wu"],
    firstAuthor: "Zhao et al.",
    year: 2021,
    journal: "Trials",
    publicationDate: "January 2021",
    reviewedDate: "October 2026",
    doi: "10.1186/s13063-021-05028-8",
    url: "https://doi.org/10.1186/s13063-021-05028-8",
    pubmedId: "33482869",
    participants: "118 planned participants",
    studyType: "Randomized Controlled Clinical Trial Protocol",
    studyDesignType: "randomized-controlled-trial",
    condition: "Primary Dyslipidemia & Microbiome Interaction",
    population: "Adult patients diagnosed with primary dyslipidemia (LDL-C between 3.4 and 4.9 mmol/L)",
    exactFormulationAndDose: "Berberine HCl (0.5 g twice daily before meals; 1.0 g/day total)",
    comparator: "Matching oral placebo twice daily",
    duration: "12 weeks active intervention",
    keyFindings: [
      "Rigorous double-blind study protocol designed to test berberine for primary dyslipidemia in 118 patients.",
      "Primary outcome: percentage reduction in low-density lipoprotein cholesterol (LDL-C) at 12 weeks.",
      "Secondary outcomes: Total cholesterol, triglycerides, HDL-C, high-sensitivity C-reactive protein (hs-CRP), blood pressure, body weight, and fecal microbiome profiling.",
      "Addresses allocation concealment and blinding limitations present in earlier unblinded lipid studies."
    ],
    metricsTable: [
      { parameter: "Primary Endpoint Target", reduction: "Percentage reduction in LDL-C", note: "Primary objective evaluated at 12 weeks" },
      { parameter: "Target Sample Size", reduction: "118 participants (1:1 allocation)", note: "Statistically powered trial protocol" },
      { parameter: "Trial Registration", reduction: "ChiCTR1900021361", note: "Prospectively registered clinical trial protocol" }
    ],
    limitations: [
      "Publication is a prospective trial protocol, not a completed outcome report; findings are subject to trial execution and formal publication.",
      "12-week timeframe evaluates surrogate lipid biomarkers rather than long-term cardiovascular events."
    ],
    fundingAndConflicts: "Supported by the National Natural Science Foundation of China; authors reported no commercial supplement industry ties.",
    plainLanguageInterpretation: "A published trial protocol for a double-blind, placebo-controlled trial evaluating the effects of 1.0 g/day berberine on LDL cholesterol, gut bacteria, and safety in 118 patients with high cholesterol.",
    quoteOrSummary: "Prospectively registered double-blind RCT protocol (118 participants) in Trials evaluating 12-week percent LDL-C reduction, gut microbiome composition, and safety in primary dyslipidemia."
  }
];
