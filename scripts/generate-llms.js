import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const { verifiedSupplementProducts } = await import('../src/data/supplementProducts.ts');
const { berberineFaqs } = await import('../src/data/faqs.ts');
const { researchStudies } = await import('../src/data/researchStudies.ts');

export function generateLlmsTxt() {
  const productsSummary = verifiedSupplementProducts
    .map((p) => {
      const priceText =
        p.priceStatus === 'Verified'
          ? `$${p.priceUSD.toFixed(2)} (${p.priceStatus})`
          : `~$${p.priceUSD.toFixed(2)} (${p.priceStatus} benchmark)`;
      return `${p.editorialRank}. [${p.productName}](https://berberinebenefit.com/supplements/#review-${p.id})
   - Rank: ${p.editorialRank} (Rubric Score: ${p.rubricScore}/100)
   - Formulation: ${p.formulationLabel} (${p.declaredFormulationAmount})
   - Serving Size: ${p.servingSize}
   - Price: ${priceText}
   - Testing Scope: ${p.qualityTesting.badgeText}`;
    })
    .join('\n\n');

  const faqsSummary = berberineFaqs
    .map((faq, index) => {
      return `${index + 1}. **${faq.question}**: ${faq.answer}`;
    })
    .join('\n');

  return `# Berberine Research Portal (berberinebenefit.com)

> Comprehensive, evidence-based scientific research synthesis and supplement evaluation directory for berberine (isoquinoline alkaloid C20H18NO4+). Translating peer-reviewed clinical trials, meta-analyses, pharmacokinetic data, lipidology, glycemic regulation, and clinical safety profiles without commercial bias.

## Complete Agent Knowledge Bundle

- [Complete Knowledge Base (llms-full.txt)](https://berberinebenefit.com/llms-full.txt): Full concatenated text bundle containing complete chapter analyses, clinical trial summaries, dosage guidelines, supplement rankings, and medical safety profiles.

## Core Knowledge & Clinical Resources

- [Home / Portal Overview](https://berberinebenefit.com/): Comprehensive evidence synthesis, top 20 research queries, and verified supplement comparison tool.
- [What is Berberine?](https://berberinebenefit.com/what-is-berberine/): Plant alkaloid origins (Barberry, Goldenseal, Coptis chinensis), chemical nomenclature, bioavailability reality (<5%), and cellular AMPK mechanisms.
- [Clinical Benefits & Meta-Analyses](https://berberinebenefit.com/benefits/): Systematic reviews on fasting blood glucose (-0.35 mmol/L), HbA1c (-0.45%), LDL cholesterol (-0.41 mmol/L), triglycerides (-0.22 mmol/L), and liver transaminases.
- [Research Study Directory](https://berberinebenefit.com/research/): Detailed clinical trials archive including Lei et al. 2026 JAMA Network Open, Vahed et al. 2026, Nie et al. 2024, Yin et al. 2008, and Lei et al. 2023 with DOIs and PubMed IDs.
- [Supplement Guide & Product Reviews](https://berberinebenefit.com/supplements/): Berberine HCl vs. Berberine Phytosome (e.g. Thorne, Pure Encapsulations) vs. transdermal patches. Standardized 500 mg dosing and third-party laboratory verification.
- [Safety, Side Effects & Drug Interactions](https://berberinebenefit.com/safety-and-side-effects/): Cytochrome P450 inhibition (CYP3A4, CYP2D6), gastrointestinal tolerability, organ safety, and contraindications in pregnancy.
- [Weight Loss & "Nature's Ozempic" Analysis](https://berberinebenefit.com/weight-loss/): Scientific examination comparing berberine's modest clinical effect (~1.9 lbs) against prescription GLP-1 receptor agonists.
- [Frequently Asked Questions](https://berberinebenefit.com/faq/): Evidence-based answers to 20 common patient and consumer questions.
- [Editorial Methodology & Evidence Standards](https://berberinebenefit.com/editorial-methodology/): Transparent evidence hierarchy, review dates policy, and commercial independence disclosures.
- [About Us & Editorial Structure](https://berberinebenefit.com/about/): Independent scientific editorial initiative and review structure.

## Key Clinical Facts & Statistics

- **Bioavailability Reality**: Intact oral bioavailability is estimated below 5% due to active P-glycoprotein efflux in the intestine and rapid first-pass hepatic metabolism. Biological actions are heavily mediated locally within the gastrointestinal tract, gut microbiota remodeling, and active metabolites.
- **Glycemic Impact**: Lei et al. 2023 meta-analysis (17 RCTs, 1,485 subjects) demonstrated mean reductions of 0.35 mmol/L in fasting plasma glucose and 0.45 percentage points in HbA1c over 2 to 3 months.
- **Lipidology**: Across pooled clinical cohorts, berberine administration demonstrates average reductions of ~0.48 mmol/L in total cholesterol, ~0.41 mmol/L in LDL-C, and ~0.22 mmol/L in serum triglycerides, with neutral HDL-C effects.
- **Adiposity & Weight Reality**: Lei et al. 2026 multicenter RCT (337 diabetes-free adults with obesity and MASLD over 6 months) found no statistically significant difference in visceral fat area (VAT) or liver fat content compared to placebo. Vahed et al. 2026 meta-analysis reported modest average weight reduction of 0.88 kg (~1.9 lbs).
- **Safety Flags**: Strong CYP3A4 and CYP2D6 inhibitor; strictly contraindicated during pregnancy, lactation, and infancy; renal clearance caveats apply in individuals with reduced eGFR (<60 mL/min/1.73m²).

## Top 5 Berberine Supplements (2026 Audit Summary)

${productsSummary}

## 20 High-Priority Clinical Q&As (Clinical Evidence FAQ Hub)

${faqsSummary}
`;
}

export function generateLlmsFullTxt() {
  const productsFull = verifiedSupplementProducts
    .map((p) => {
      const priceText =
        p.priceStatus === 'Verified'
          ? `$${p.priceUSD.toFixed(2)} USD (${p.priceStatus}) for ${p.totalCapsulesOrUnits} capsules ($${p.pricePerServing.toFixed(2)}/serving; daily cost range: ${p.dailyCostRange})`
          : `~$${p.priceUSD.toFixed(2)} USD (${p.priceStatus} multi-retailer benchmark; verified Walgreens regular price is $39.99 on 2026-10-25; estimated cost per serving: ~$${p.pricePerServing.toFixed(2)}; daily cost: ${p.dailyCostRange})`;

      const sources = p.sourceLinks.map((s) => `     * ${s.label}: ${s.url}`).join('\n');

      return `${p.editorialRank}. **${p.productName}** (Editorial Rubric Score: ${p.rubricScore}/100, Rank 0${p.editorialRank})
   - Formulation: ${p.formulationLabel} (${p.declaredFormulationAmount})
   - Labeled Serving Size: ${p.servingSize}
   - Declared Berberine Content: ${p.declaredBerberineContent}
   - Manufacturer Directions: ${p.manufacturerDailyDirections}
   - Pricing & Supply: ${priceText}
   - Quality Testing Scope: ${p.qualityTesting.badgeText} (${p.qualityTesting.status}). ${p.qualityTesting.details}
   - Finished-Product Certification: ${p.finishedProductCertification.badgeText} (${p.finishedProductCertification.status}). ${p.finishedProductCertification.details}
   - Key Limitation: ${p.keyLimitation}
   - Editorial Assessment: ${p.editorialAssessment}
   - Sourced Verification Links:
${sources}`;
    })
    .join('\n\n');

  const faqsFull = berberineFaqs
    .map((faq, index) => {
      return `${index + 1}. **${faq.question}**: ${faq.answer}`;
    })
    .join('\n');

  return `# Berberine Complete Clinical Evidence & Research Guide
Domain: https://berberinebenefit.com
Last Evaluated: October 2026
Publisher: Berberine Research Portal
Editorial Structure: Pharmacokinetics, Clinical Trials, Formulation Auditing, and Systematic Review Desks

---

## 1. What Is Berberine? Botanical Origins & Pharmacology

Berberine is a bioactive quaternary isoquinoline alkaloid (chemical formula: C20H18NO4+, molecular weight 336.36 g/mol) found naturally in several medicinal plant species across the Berberidaceae, Ranunculaceae, and Rutaceae families.

### Primary Botanical Sources
- European Barberry (*Berberis vulgaris*): Bark and root bark (8–12% alkaloid concentration).
- Oregon Grape (*Berberis aquifolium* / *Mahonia aquifolium*): Roots and rhizomes.
- Goldenseal (*Hydrastis canadensis*): Rhizomes and roots (contains berberine alongside hydrastine).
- Chinese Goldthread (*Coptis chinensis* / *Huang Lian* / 黄连): Rhizomes; widely used in traditional Chinese herbal formulations for centuries.
- Amur Cork Tree (*Phellodendron amurense* / *Huang Bai* / 黄柏): Bark.
- Indian Barberry (*Berberis aristata* / *Daruharidra*): Roots; traditional Ayurvedic preparation.

### Pharmacokinetics & Bioavailability Reality
Intact oral berberine exhibits low systemic bioavailability, estimated below 5% in human pharmacokinetic models. This is due to two primary biological mechanisms:
1. Active Intestinal Efflux: Intestinal P-glycoprotein (P-gp / MDR1) actively exports berberine back into the gut lumen.
2. Rapid First-Pass Hepatic Metabolism: Absorbed berberine undergoes rapid oxidative demethylation and glucuronidation via cytochrome P450 isoenzymes.

Because systemic plasma concentrations remain low (often in the nanomolar range after a 500 mg dose), berberine's clinical metabolic effects are heavily mediated locally within the gastrointestinal tract through gut microbiota remodeling, bile acid metabolism modulation, and stimulation of intestinal endocrine L-cells to release GLP-1.

### Primary Cellular Mechanisms
- AMPK Activation: Berberine transiently inhibits Complex I of the mitochondrial respiratory chain, elevating the intracellular AMP:ATP ratio and triggering AMP-activated protein kinase (AMPK).
- Hepatic Gluconeogenesis Suppression: AMPK activation downregulates key gluconeogenic enzymes (PEPCK and glucose-6-phosphatase) in the liver.
- Cellular Glucose Uptake: Stimulates GLUT4 glucose transporter translocation to the plasma membrane in skeletal muscle independently of insulin.
- PCSK9 Downregulation: Suppresses transcription of proprotein convertase subtilisin/kexin type 9 (PCSK9), increasing LDL receptor availability on hepatocytes and clearing circulating LDL cholesterol.

---

## 2. Clinical Trial Evidence & Meta-Analyses

### Glycemic Homeostasis (Blood Sugar & HbA1c)
- Lei et al. (2023) Meta-Analysis (17 RCTs, 1,485 subjects):
  - Fasting Plasma Glucose (FPG): Mean reduction of −0.35 mmol/L (95% CI: −0.52 to −0.18).
  - Glycated Hemoglobin (HbA1c): Mean reduction of −0.45 percentage points (95% CI: −0.63 to −0.27).
  - 2-Hour Postprandial Glucose (2h-PG): Mean reduction of −0.68 mmol/L.
- Yin et al. (2008) Two-Cohort Pilot Study (84 patients total):
  - Study A (36 newly diagnosed patients randomized: 18 berberine, 18 metformin; 31 completed/analyzed: 15 berberine, 16 metformin): 500 mg Berberine HCl three times daily showed within-group HbA1c drop from 9.5% to 7.5% over 13 weeks. Small pilot sample (31 analyzed completers) was underpowered for non-inferiority testing and does not establish clinical equivalence to metformin.
  - Study B (48 patients): Berberine evaluated as an add-on therapy without a randomized metformin comparator arm.

### Lipidology & Cardiovascular Biomarkers
- Lei et al. (2023) and Ju et al. (2018):
  - Total Cholesterol (TC): Mean reduction of −0.48 mmol/L (−18.6 mg/dL).
  - LDL Cholesterol (LDL-C): Mean reduction of −0.41 mmol/L (−15.8 mg/dL).
  - Serum Triglycerides (TG): Mean reduction of −0.22 mmol/L (−19.5 mg/dL).
  - HDL Cholesterol (HDL-C): Neutral / no statistically significant change.

### Adiposity & Weight Loss Reality ("Nature's Ozempic" Analysis)
- Lei et al. (2026) Multicenter RCT (JAMA Network Open, DOI: 10.1001/jamanetworkopen.2025.54152):
  - 337 diabetes-free adults with obesity and MASLD evaluated over 6 months with 1,000 mg/day oral berberine vs placebo across 11 hospitals.
  - Primary outcome: No statistically significant difference in visceral fat area (VAT) or intrahepatic liver fat content compared with placebo.
  - Secondary outcome: Statistically significant reductions in LDL-C, Apolipoprotein B, and hs-CRP.
- Vahed et al. (2026) Meta-Analysis (Int J Obes):
  - 23 randomized controlled trials evaluating body composition.
  - Statistically significant but small average weight reduction of 0.88 kg (~1.9 lbs) (95% CI: −1.36 to −0.39 kg).
  - Modest waist circumference decrease of 1.32 cm.
  - Conclusion: Berberine is not a physiological substitute for prescription GLP-1 receptor agonists (such as semaglutide). It produces modest weight support primarily as a byproduct of improved insulin sensitivity and dietary adherence.

### Liver Health & MASLD / NAFLD
- Nie et al. (2024) Meta-Analysis (10 RCTs, 811 NAFLD participants):
  - Significant reductions in alanine aminotransferase (ALT) and aspartate aminotransferase (AST).
  - Standardized Mean Difference (SMD) in BMI of −0.58.
  - Note: Histological reversal of liver fibrosis remains unverified in large human biopsy trials.

---

## 3. Supplement Formulation & Delivery Forms

### Berberine HCl vs. Berberine Phytosome
- Berberine Hydrochloride (HCl):
  - Standard form used in over 90% of clinical research.
  - Salt typically containing ~85–90% active berberine alkaloid.
  - Poor aqueous solubility, high intestinal P-gp efflux.
  - Clinical research dosage: 500 mg, 2–3 times daily with meals (1,000–1,500 mg total/day).
- Berberine Phytosome (e.g., Thorne Berberine, Pure Encapsulations, Nature Made):
  - Berberine extract complexed with phospholipids (sunflower or soy lecithin) and pea protein.
  - Formulated to enhance pharmacokinetic absorption.
  - Active alkaloid yield: Often standardized to ~28% active berberine (e.g., a 550 mg phytosome delivers ~154 mg of active alkaloid).
  - Clinical reality: While pharmacokinetics show higher plasma AUC, clinical endpoint equivalence with standard HCl has not been demonstrated to require lower total therapeutic impact.

### Transdermal Patches Warning
- Commercial berberine "weight loss" patches lack peer-reviewed human clinical trials or pharmacokinetic data.
- Quaternary alkaloid salts possess high molecular weights and ionic charges that prevent passive penetration across the lipophilic stratum corneum barrier of human skin.
- Oral delivery remains the only clinically substantiated route.

---

## 4. Top 5 Ranked Berberine Supplements (2026 Audit)

Evaluated under a 4-domain objective rubric (Label Clarity, Quality Testing Scope, Source Traceability, Price Transparency; max 100 points):

${productsFull}

---

## 5. Clinical Safety, Tolerability & Drug Interactions

### Adverse Effects & Tolerability
- In clinical trials lasting 12 to 24 weeks, oral berberine HCl (typically 1,000–1,500 mg/day) demonstrated acceptable tolerability in screened adult cohorts.
- Adverse gastrointestinal events are common and dose-dependent:
  - Ju et al. (2018) meta-analysis of 2,147 patients documented total adverse event incidence of 8.8–12.5%, predominantly gastrointestinal: diarrhea (5.4%), constipation (3.8%), abdominal distention / flatulence (3.2%), and nausea (2.7%).
  - At full 1,500 mg/day doses, Yin et al. (2008) observed a 34.5% incidence of transient gastrointestinal symptoms.
- In research trials, dividing doses across main meals with food mitigated gastrointestinal discomfort compared to empty-stomach administration.

### Cytochrome P450 Drug Interactions (Critical Medical Warning)
Berberine is a potent, documented inhibitor of hepatic and intestinal CYP enzymes:
- CYP3A4 & CYP2D6: Co-administration can significantly elevate serum concentrations of prescription medications metabolized via these pathways, including:
  - Immunosuppressants (cyclosporine, tacrolimus)
  - Statins (simvastatin, lovastatin, atorvastatin)
  - Blood pressure medications (calcium channel blockers, beta-blockers)
  - Antidepressants and sedatives
- Hypoglycemia Risk: Concurrent administration with insulin, sulfonylureas, or metformin increases the risk of hypoglycemia.
- P-glycoprotein Inhibition: Berberine inhibits P-gp, increasing systemic absorption of cardiac glycosides like digoxin.

### Renal Clearance & Contraindications
- Kidneys & Renal Clearance: In short-term clinical trials of adults with normal baseline renal function, berberine at research doses has not shown evidence of nephrotoxicity. While preliminary rodent models have explored biochemical renoprotective pathways against diabetic renal injury, these have not been established in human outcome trials. Berberine phase-II metabolites rely on renal elimination; individuals with preexisting chronic kidney disease (CKD) or reduced eGFR (<60 mL/min/1.73m²) face altered clearance kinetics and must consult a nephrologist before use.
- Pregnancy: Strictly contraindicated. Berberine crosses the placenta, stimulates uterine contractions, and displaces bilirubin from albumin, increasing the risk of fetal kernicterus.
- Lactation / Nursing: Strictly contraindicated due to excretion into breast milk.
- Neonates & Infants: Absolutely contraindicated.

---

## 6. High-Priority Clinical Q&As

${faqsFull}
`;
}

// Generate files if script is executed directly
const llmsPath = path.resolve(rootDir, 'public/llms.txt');
const llmsFullPath = path.resolve(rootDir, 'public/llms-full.txt');

fs.writeFileSync(llmsPath, generateLlmsTxt(), 'utf8');
fs.writeFileSync(llmsFullPath, generateLlmsFullTxt(), 'utf8');

console.log('Successfully generated public/llms.txt and public/llms-full.txt from website data.');
