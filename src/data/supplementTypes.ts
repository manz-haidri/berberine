export interface SupplementType {
  name: string;
  form: string;
  description: string;
  considerations: string;
  evidenceStatus: string;
}

export const supplementTypes: SupplementType[] = [
  {
    name: "Berberine HCl",
    form: "Hydrochloride Salt",
    description: "Conventional hydrochloride salt form pairing the berberine cation with chloride (approx. 371.81 g/mol).",
    considerations: "The predominant formulation evaluated across published human clinical trials, including meta-analyses by Lei (2023) and Nie (2024).",
    evidenceStatus: "Primary Clinical Benchmark"
  },
  {
    name: "Berberine Phytosome",
    form: "Phospholipid Complex",
    description: "Berberine extract bound to sunflower or soy lecithin phospholipids to modify aqueous solubility and membrane permeation.",
    considerations: "Aims to enhance intestinal absorption; however, formulation-specific outcome trials are required to establish whether it offers superior clinical endpoints compared with standard HCl.",
    evidenceStatus: "Modified Bioavailability (Requires Outcome Trials)"
  },
  {
    name: "Berberine Capsules",
    form: "Powder-filled Shell",
    description: "Dry encapsulated powder, usually standardized to 85%–97% berberine HCl.",
    considerations: "Ingredient purity, presence of excipients, and actual alkaloid content can vary without rigorous third-party verification.",
    evidenceStatus: "Standard Commercial Delivery"
  },
  {
    name: "Berberine Tablets",
    form: "Compressed Solid",
    description: "Solid compressed dosage units often incorporating binding and disintegration agents.",
    considerations: "Disintegration time and dissolution kinetics can influence GI tolerability and absorption in the small intestine.",
    evidenceStatus: "Commercial Format"
  },
  {
    name: "Liquid Berberine Drops",
    form: "Botanical Solution / Glycerite",
    description: "Liquid tincture or water/glycerin extract containing crude botanical extracts or dissolved salts.",
    considerations: "Milligrams of active berberine per milliliter vary widely between brands; difficult to accurately match the 1,000–1,500 mg daily research dosage without consuming large fluid volumes.",
    evidenceStatus: "Variable Concentration"
  },
  {
    name: "Combination Supplements",
    form: "Multi-Ingredient Blend",
    description: "Berberine combined with silymarin (milk thistle), chromium, alpha-lipoic acid, or cinnamon.",
    considerations: "While silymarin may inhibit P-gp efflux, poly-herbal mixtures obscure which compound is producing benefits or potential adverse drug interactions.",
    evidenceStatus: "Complex Pharmacological Profile"
  }
];

export interface FormComparisonRow {
  feature: string;
  hcl: string;
  phytosome: string;
}

export const hclVsPhytosomeComparison: FormComparisonRow[] = [
  { feature: "Chemical Formulation", hcl: "Conventional crystalline salt (C20H18ClNO4)", phytosome: "Berberine extract bound to phospholipid complex" },
  { feature: "Primary Objective", hcl: "Deliver standardized alkaloid orally", phytosome: "Enhance solubility and intestinal epithelial permeation" },
  { feature: "Clinical Research History", hcl: "Extensive (decades of human clinical RCTs and meta-analyses)", phytosome: "Primarily limited to manufacturer-sponsored clinical studies" },
  { feature: "Oral Bioavailability", hcl: "Low systemic bioavailability in pharmacokinetic models (due to P-gp efflux & metabolism)", phytosome: "Higher reported plasma AUC in specific kinetic studies" },
  { feature: "Demonstrated Superior Clinical Endpoints", hcl: "Benchmark of meta-analytic evidence", phytosome: "Not proven superior across hard clinical disease outcomes" },
  { feature: "Drug Interaction Profile (CYP/P-gp)", hcl: "Documented inhibition of CYP3A4, CYP2D6, and P-glycoprotein", phytosome: "Potential to alter drug-interaction dynamics due to higher systemic exposure; direct clinical comparative data limited" },
  { feature: "Cost per Serving", hcl: "Affordable and widely accessible", phytosome: "Higher price point per serving" }
];

export interface QualityChecklistStep {
  title: string;
  requirement: string;
  rational: string;
}

export const buyerEvaluationCriteria: QualityChecklistStep[] = [
  {
    title: "1. Ingredient & Salt Form Transparency",
    requirement: "Clear declaration of Berberine HCl (or specified phytosome) and exact milligrams per capsule.",
    rational: "Avoid vague 'proprietary herbal blends' where crude barberry bark is blended without standardized alkaloid quantification."
  },
  {
    title: "2. Independent Third-Party Laboratory Testing",
    requirement: "Certifications from USP, NSF International, Informed Choice, or accessible Certificates of Analysis (CoA).",
    rational: "Verifies stated alkaloid potency and screens against heavy metal, microbial, or chemical contamination."
  },
  {
    title: "3. Current Good Manufacturing Practice (cGMP)",
    requirement: "Manufactured in FDA-registered, cGMP-compliant facilities.",
    rational: "Verifies adherence to standard quality management protocols during raw material handling, blending, and encapsulation."
  },
  {
    title: "4. Scrutiny of 'Bioavailability' Advertising Claims",
    requirement: "Objective appraisal of bioavailability marketing claims.",
    rational: "Higher absorption alone does not establish better clinical outcomes. Comparative outcome and safety evidence should be evaluated separately, including consideration of CYP enzyme drug-interaction dynamics."
  },
  {
    title: "5. Clinical Dosage Alignment",
    requirement: "Formulated to allow research-aligned dosing (e.g., 500 mg capsules taken 2 to 3 times daily with meals).",
    rational: "Most clinical trials utilize split dosing around meals (typically 500 mg 2–3 times daily) to align with elimination kinetics and improve gastrointestinal tolerance, though direct comparative trials against single daily dosing remain limited."
  }
];
