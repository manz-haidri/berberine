export type ProductFormulation = "hcl" | "phytosome" | "combination";

export type TestingScope =
  | "product-certification"
  | "facility-certification"
  | "manufacturer-reported-external"
  | "manufacturer-reported-in-house"
  | "unverified";

export type VerificationStatus =
  | "Verified"
  | "Manufacturer-reported"
  | "Not publicly verified"
  | "Estimated"
  | "Not applicable";

export interface RubricBreakdown {
  labelClarity: number; // max 25
  testingScope: number; // max 25
  sourceTraceability: number; // max 25
  priceTransparency: number; // max 25
  totalScore: number; // max 100
}

export interface RubricRationale {
  labelClarity: string;
  testingScope: string;
  sourceTraceability: string;
  priceTransparency: string;
}

export interface SupplementProduct {
  id: string;
  editorialRank: number;
  rankBadge: string;
  brandName: string;
  shortName: string;
  productName: string;
  formulationType: ProductFormulation;
  formulationLabel: string;

  // Standardized Comparison Fields
  servingSize: string;
  declaredFormulationAmount: string;
  declaredBerberineContent: string;
  manufacturerDailyDirections: string;
  capsulesPerBottle: number;
  servingsPerContainer: number;
  totalCapsulesOrUnits: number;
  priceUSD: number;
  currency: string;
  pricePerServing: number;
  dailyCostRange: string;
  priceCheckDate: string;
  priceType: string;
  priceStatus: "Verified" | "Estimated";

  inStock: boolean;
  additionalActiveIngredients: string[];
  hasAdditionalActives: boolean;
  labelListedAllergens: string[];

  // Objective Rubric & Ranking Data
  rubricBreakdown: RubricBreakdown;
  rubricScore: number;
  rubricRationale: RubricRationale;

  // Testing & Facility Information
  qualityTesting: {
    testingScope: TestingScope;
    badgeText: string;
    status: VerificationStatus;
    details: string;
    certifyingBody?: string;
    sourceLink?: string;
  };
  finishedProductCertification: {
    status: VerificationStatus;
    badgeText: string;
    details: string;
  };
  manufactureLocation: string;

  // Seller & Verification Links
  sellerName: string;
  retailerUrl: string;
  retailerDomain: string;
  retailerCtaText: string;
  isDirectPurchase: boolean;

  // Editorial Content (Independent & objective, no promotional hype)
  keyLimitation: string;
  editorialAssessment: string;
  whyRanked: string;
  strengths: string[];
  limitations: string[];
  bottomLine: string;
  manufacturerDiscrepancy?: string;
  notes: string;
  imageUrl: string;
  imageAlt: string;
  sourceLinks: { label: string; url: string }[];
}

export const rawSupplementProducts: Omit<SupplementProduct, "editorialRank" | "rankBadge" | "rubricScore" | "pricePerServing">[] = [
  {
    id: "thorne-berberine",
    brandName: "Thorne",
    shortName: "THORNE",
    productName: "Thorne Berberine",
    formulationType: "combination",
    formulationLabel: "Dual-Action (HCl + Phytosome)",
    servingSize: "2 capsules",
    declaredFormulationAmount: "1,000 mg combination (450 mg Berberine HCl + 550 mg Phytosome)",
    declaredBerberineContent: "450 mg berberine HCl (+ 550 mg phytosome complex, berberine yield not separately disclosed by manufacturer)",
    manufacturerDailyDirections: "1–2 capsules two times daily with food or as recommended by healthcare practitioner (2–4 capsules / 1,000–2,000 mg daily)",
    capsulesPerBottle: 60,
    servingsPerContainer: 30,
    totalCapsulesOrUnits: 60,
    priceUSD: 44.00,
    currency: "USD",
    dailyCostRange: "$1.47 – $2.93 / day (2–4 capsules)",
    priceCheckDate: "2026-10-25",
    priceType: "One-time purchase",
    priceStatus: "Verified",
    inStock: true,
    additionalActiveIngredients: ["Berberine Phytosome (550 mg per serving)"],
    hasAdditionalActives: true,
    labelListedAllergens: ["Gluten-free", "Dairy-free", "Soy-free"],
    rubricBreakdown: {
      labelClarity: 18,
      testingScope: 18,
      sourceTraceability: 21,
      priceTransparency: 25,
      totalScore: 82
    },
    rubricRationale: {
      labelClarity: "Declares 450 mg Berberine HCl per serving with botanical root sourcing. However, the active alkaloid standardization percentage of the 550 mg phytosome component is not disclosed on the label or manufacturer website.",
      testingScope: "Manufactured in Thorne's NSF-registered cGMP facility in Summerville, SC, with comprehensive analytical testing for identity, potency, and contaminants. Finished-product certification was not publicly verified for this specific product (SKU SF800) in the NSF Certified Dietary Supplements registry.",
      sourceTraceability: "Official manufacturer e-commerce store with direct purchasing and detailed supplement facts panel. Historical serving count ambiguity (30 vs 60 count) is resolved in current production.",
      priceTransparency: "Direct e-commerce price verified at $44.00 USD on 2026-10-25 for 60 capsules (30 servings) with unambiguous one-time purchase terms. Math yields $1.47 per labeled serving, with a transparent daily cost range of $1.47–$2.93 for 2–4 capsules daily."
    },
    qualityTesting: {
      testingScope: "facility-certification",
      badgeText: "NSF-Registered cGMP Facility & Analytical Batch Testing",
      status: "Verified",
      details: "Manufactured in Thorne's NSF-registered cGMP facility in Summerville, SC. Comprehensive in-house testing for identity, potency, and contaminants. Facility cGMP registration does not constitute finished-product certification; finished-product certification was not publicly verified for this specific product (SKU SF800) in the NSF Certified Dietary Supplements registry.",
      certifyingBody: "NSF International (Facility cGMP)",
      sourceLink: "https://www.thorne.com/products/dp/berberine-500"
    },
    finishedProductCertification: {
      status: "Not publicly verified",
      badgeText: "Not Publicly Verified",
      details: "Finished-product certification was not publicly verified for this specific product."
    },
    manufactureLocation: "Manufactured in USA (Summerville, SC)",
    sellerName: "Thorne Official Store / Authorized Retailers",
    retailerUrl: "https://www.thorne.com/products/dp/berberine-500",
    retailerDomain: "thorne.com",
    retailerCtaText: "View at Thorne ↗",
    isDirectPurchase: true,
    keyLimitation: "The 550 mg phytosome fraction does not disclose its active alkaloid standardization percentage on the label; daily cost is $1.47 to $2.93 based on directions.",
    editorialAssessment: "Ranks first overall under our objective documentation rubric (82/100, winning the tie-breaker on documented facility cGMP registration). Thorne manufactures in an independently audited NSF-registered cGMP facility with documented analytical testing protocols. The formula pairs 450 mg Berberine HCl with 550 mg phytosome complex, though the active berberine alkaloid yield of the phytosome fraction is not stated.",
    whyRanked: "Earns the top editorial rank through documented NSF facility cGMP registration and comprehensive analytical batch testing, which breaks the 82-point tie with Pure Encapsulations under our published tie-breaking hierarchy (Domain 2 score of 18 vs 13). While pricing transparency is high ($44.00 one-time, $1.47/serving), the formula does not disclose the active berberine percentage of its phytosome carrier.",
    strengths: [
      "Manufactured in an independently audited, NSF-registered cGMP facility in South Carolina.",
      "Comprehensive in-house analytical batch testing for identity, potency, and contaminants.",
      "Extract sourced from authentic Berberis aristata root.",
      "Unambiguous one-time direct purchase pricing ($44.00 for 60 capsules) with clear directions.",
      "Free from gluten, dairy, and soy with transparent allergen disclosures."
    ],
    limitations: [
      "The 550 mg phytosome portion does not state its active berberine standardization percentage on the label.",
      "Finished-product certification was not publicly verified for this specific product.",
      "Higher cost per labeled serving ($1.47 per 2 capsules; up to $2.93 daily at 4 capsules/day)."
    ],
    bottomLine: "Thorne achieves Rank 01 with a rubric score of 82/100, winning the tie-breaker through documented NSF facility cGMP registration. The formula delivers 450 mg HCl alongside 550 mg phytosome at $1.47 per serving ($44.00 bottle), though active alkaloid yield for the phytosome fraction remains undisclosed.",
    notes: "Top editorial rank under objective documentation rubric (82/100). Wins tie-breaker on Domain 2 (Testing & Certification Scope: 18 vs 13).",
    imageUrl: "/images/products/thorne.png",
    imageAlt: "Thorne Berberine Dual-Action bottle",
    sourceLinks: [
      { label: "Thorne Official Product Page", url: "https://www.thorne.com/products/dp/berberine-500" }
    ]
  },
  {
    id: "pure-encapsulations-berberine-ultrasorb",
    brandName: "Pure Encapsulations",
    shortName: "PURE ENCAP.",
    productName: "Pure Encapsulations Berberine UltraSorb",
    formulationType: "phytosome",
    formulationLabel: "Berberine Phytosome (Berbevis®)",
    servingSize: "1 capsule",
    declaredFormulationAmount: "550 mg phytosome complex per serving",
    declaredBerberineContent: "~154 mg berberine (calculated from declared 28% standardization in manufacturer factsheet)",
    manufacturerDailyDirections: "1 capsule, 1–2 times daily with or between meals (1–2 capsules / 550–1,100 mg complex daily)",
    capsulesPerBottle: 60,
    servingsPerContainer: 60,
    totalCapsulesOrUnits: 60,
    priceUSD: 51.50,
    currency: "USD",
    dailyCostRange: "$0.86 – $1.72 / day (1–2 capsules)",
    priceCheckDate: "2026-10-25",
    priceType: "One-time purchase",
    priceStatus: "Verified",
    inStock: true,
    additionalActiveIngredients: ["Pea protein isolate", "Sunflower lecithin", "Grape seed extract"],
    hasAdditionalActives: true,
    labelListedAllergens: ["Hypoallergenic", "Gluten-free", "Non-GMO", "Vegetarian"],
    rubricBreakdown: {
      labelClarity: 21,
      testingScope: 13,
      sourceTraceability: 23,
      priceTransparency: 25,
      totalScore: 82
    },
    rubricRationale: {
      labelClarity: "Published technical factsheet explicitly documents 28% active berberine alkaloid standardization (~154 mg berberine per 550 mg capsule) from Berberis aristata root and itemizes carrier ingredients (pea protein, sunflower lecithin, grape seed extract). Points docked because active percentage is in a technical factsheet rather than printed on the front retail label.",
      testingScope: "Manufactured in a cGMP facility with manufacturer-reported raw material identity and finished-lot analytical testing for potency, heavy metals, and microbes. Finished-product certification was not publicly verified for this specific product.",
      sourceTraceability: "Direct manufacturer store listing supported by a downloadable technical Product Information Sheet (PDF), active e-commerce checkout, and consistent capsule/serving specifications (60 capsules / 60 servings).",
      priceTransparency: "Direct e-commerce price verified at $51.50 USD on 2026-10-25 for 60 capsules (60 labeled servings) with clear one-time purchase terms. Math yields $0.86 per labeled serving, with a transparent daily cost range of $0.86–$1.72 for 1–2 capsules daily."
    },
    qualityTesting: {
      testingScope: "manufacturer-reported-in-house",
      badgeText: "Manufacturer-Reported Batch Testing & cGMP Facility",
      status: "Manufacturer-reported",
      details: "Manufactured in a cGMP facility with manufacturer-reported raw material identity and finished batch testing for potency, heavy metals, residual solvents, and microbes. Finished-product certification was not publicly verified for this specific product in public registries.",
      sourceLink: "https://www.pureencapsulationspro.com/quality"
    },
    finishedProductCertification: {
      status: "Not publicly verified",
      badgeText: "Not Publicly Verified",
      details: "Finished-product certification was not publicly verified for this specific product."
    },
    manufactureLocation: "Packaged in USA from imported ingredients",
    sellerName: "Pure Encapsulations Direct / Authorized Retailers",
    retailerUrl: "https://pureforyou.com/products/berberine-ultrasorb",
    retailerDomain: "pureforyou.com",
    retailerCtaText: "View at Pure Encapsulations ↗",
    isDirectPurchase: true,
    keyLimitation: "Active berberine content is approximately 154 mg per capsule (~308 mg at maximum daily use); outcome trials specifically evaluating this formulation against berberine HCl remain limited.",
    editorialAssessment: "Ranks second overall under our objective documentation rubric (82/100, placing second under published tie-breaker rules). Pure Encapsulations provides technical transparency via a published professional factsheet disclosing exact 28% berberine standardization (~154 mg/cap) within its Berbevis phytosome complex, at a verified cost of $0.86 per labeled serving.",
    whyRanked: "Achieves an 82-point composite score alongside Thorne, placing second under our published tie-breaker rule due to Thorne's higher score in Domain 2 (documented NSF facility registration: 18 vs 13). Pure Encapsulations leads all phytosome products in ingredient disclosure by publishing its 28% active alkaloid standardization in its official factsheet.",
    strengths: [
      "Technical factsheet explicitly documents 28% active berberine alkaloid (~154 mg per capsule).",
      "Discloses carrier components: pea protein isolate, sunflower lecithin, and grape seed extract.",
      "Standardized Berbevis® phospholipid complex engineered for intestinal dispersion.",
      "Manufacturer-reported testing for potency, heavy metals, residual solvents, and microbes in a cGMP facility.",
      "Clear single-bottle pricing ($51.50) yielding $0.86 per labeled serving with 60 servings per container."
    ],
    limitations: [
      "Finished-product certification was not publicly verified for this specific product.",
      "Active berberine yield (154–308 mg/day) delivers lower total alkaloid mass than standard 1,000–1,500 mg HCl trial protocols."
    ],
    bottomLine: "Pure Encapsulations scores 82/100 to take Rank 02 (tied on total points with Thorne, separated by Domain 2 tie-breaking). Its technical factsheet documents 28% active berberine yield (~154 mg/capsule) alongside detailed carrier disclosures, with verified one-time pricing of $51.50 for 60 servings ($0.86/serving).",
    notes: "Ranks second under objective documentation rubric (82/100). Tied on points with Thorne; placed 2nd under published Domain 2 tie-breaker.",
    imageUrl: "/images/products/pure-encapsulations.png",
    imageAlt: "Pure Encapsulations Berberine UltraSorb bottle",
    sourceLinks: [
      { label: "Pure Encapsulations Official Store", url: "https://pureforyou.com/products/berberine-ultrasorb" },
      { label: "Official Product Information Sheet (PDF)", url: "https://www.pureencapsulationspro.com/media/pdf_upload/PIS_Berberine_UltraSorb.pdf" }
    ]
  },
  {
    id: "dear-apothecary-berberine",
    brandName: "Dear Apothecary",
    shortName: "DEAR APOTHECARY",
    productName: "Dear Apothecary Berberine HCl",
    formulationType: "hcl",
    formulationLabel: "Dual-Source Berberine HCl (Bark + Root)",
    servingSize: "2 capsules",
    declaredFormulationAmount: "1,200 mg Berberine HCl per serving",
    declaredBerberineContent: "1,200 mg Berberine HCl from Berberis aristata bark and root",
    manufacturerDailyDirections: "2 capsules daily with meals (2 capsules / 1,200 mg daily)",
    capsulesPerBottle: 60,
    servingsPerContainer: 30,
    totalCapsulesOrUnits: 60,
    priceUSD: 49.00,
    currency: "USD",
    dailyCostRange: "$1.63 / day (2 capsules)",
    priceCheckDate: "2026-10-25",
    priceType: "One-time purchase",
    priceStatus: "Verified",
    inStock: true,
    additionalActiveIngredients: [],
    hasAdditionalActives: false,
    labelListedAllergens: ["Non-GMO", "Gluten-free", "Vegetarian", "Dairy-free", "Soy-free"],
    rubricBreakdown: {
      labelClarity: 22,
      testingScope: 14,
      sourceTraceability: 19,
      priceTransparency: 25,
      totalScore: 80
    },
    rubricRationale: {
      labelClarity: "Clean single-ingredient declaration of 1,200 mg Berberine HCl per 2-capsule serving (600 mg/capsule) sourced from Berberis aristata bark and root, with no proprietary blends or undisclosed carriers. Points docked slightly for absence of a public certificate of analysis showing exact chemical assay percentage.",
      testingScope: "Manufacturer reports external laboratory testing by ISO 17025 accredited analytical laboratories for alkaloid potency, microbial limits, and heavy metals in a USA cGMP facility. Finished-product certification was not publicly verified for this specific product in independent public registries.",
      sourceTraceability: "Official e-commerce listing with direct checkout and consistent package specifications (60 capsules / 30 servings). Distributed through a single direct-to-consumer sales channel without physical retail pharmacy distribution.",
      priceTransparency: "Direct e-commerce price verified at $49.00 USD on 2026-10-25 for 60 capsules (30 labeled servings) with clear one-time purchase terms. Math yields $1.63 per labeled serving, with a single daily cost of $1.63 for the labeled 2-capsule serving."
    },
    qualityTesting: {
      testingScope: "manufacturer-reported-external",
      badgeText: "Manufacturer-Reported External ISO 17025 Lab Testing & cGMP Facility",
      status: "Manufacturer-reported",
      details: "Manufacturer reports finished-lot analytical testing by an independent ISO 17025 accredited laboratory for alkaloid potency, microbial limits, and heavy metals. Manufactured in a USA cGMP-compliant facility. Finished-product certification was not publicly verified for this specific product.",
      certifyingBody: "External ISO 17025 Accredited Laboratory Testing",
      sourceLink: "https://dearapothecary.com/products/berberine-hci"
    },
    finishedProductCertification: {
      status: "Not publicly verified",
      badgeText: "Not Publicly Verified",
      details: "Finished-product certification was not publicly verified for this specific product."
    },
    manufactureLocation: "Manufactured in USA (cGMP facility)",
    sellerName: "Dear Apothecary Official Store",
    retailerUrl: "https://dearapothecary.com/products/berberine-hci",
    retailerDomain: "dearapothecary.com",
    retailerCtaText: "View at Dear Apothecary ↗",
    isDirectPurchase: true,
    keyLimitation: "Cost per labeled serving ($1.63) is higher than retail mass brands; sold exclusively through direct online e-commerce; lacks a public third-party registry certification.",
    editorialAssessment: "Ranks third overall under our rubric (80/100). Dear Apothecary achieves high label clarity with a clean, single-ingredient 1,200 mg Berberine HCl formula sourced from both the bark and root of Berberis aristata. The manufacturer reports external ISO 17025 accredited laboratory testing for potency and contaminants, though finished-product certification is not verified in an independent public registry.",
    whyRanked: "Earns third rank with an 80/100 score based on strong label clarity (22/25) and manufacturer-reported external ISO 17025 laboratory testing (14/25). It places behind Thorne and Pure Encapsulations due to lower source traceability (single DTC channel) and lack of an independent facility registry certification.",
    strengths: [
      "Transparent single-ingredient formulation: 1,200 mg Berberine HCl per 2-capsule daily serving.",
      "Dose aligns with the 1,000–1,500 mg daily intake range evaluated in primary clinical trials.",
      "Discloses botanical sourcing from both root and bark of Berberis aristata.",
      "Manufacturer reports outside testing by ISO 17025 accredited analytical laboratories for potency and purity.",
      "Manufactured in a USA cGMP facility; free from gluten, soy, dairy, and artificial additives."
    ],
    limitations: [
      "Cost per labeled serving ($1.63 per serving / $49.00 per bottle) is higher than retail mass brands.",
      "Finished-product certification was not publicly verified for this specific product.",
      "Available exclusively through the manufacturer's direct online store with no physical pharmacy distribution."
    ],
    bottomLine: "Dear Apothecary delivers a straightforward, single-ingredient Berberine HCl formulation providing 1,200 mg daily from Berberis aristata bark and root. With manufacturer-reported external ISO 17025 laboratory testing and transparent one-time pricing ($49.00 / $1.63 per serving), it scores 80/100 at Rank 03.",
    notes: "Ranks third under objective documentation rubric (80/100). Single-ingredient HCl formula from root and bark.",
    imageUrl: "/images/products/dear-apothecary.png",
    imageAlt: "Dear Apothecary Berberine HCl 1,200mg bottle",
    sourceLinks: [
      { label: "Dear Apothecary Official Product Page", url: "https://dearapothecary.com/products/berberine-hci" }
    ]
  },
  {
    id: "nature-made-berberine",
    brandName: "Nature Made",
    shortName: "NATURE MADE",
    productName: "Nature Made Berberine Phytosome",
    formulationType: "phytosome",
    formulationLabel: "Berberine Phytosome (550 mg)",
    servingSize: "1 capsule",
    declaredFormulationAmount: "550 mg Berberine Phytosome complex per serving",
    declaredBerberineContent: "Not separately disclosed by manufacturer",
    manufacturerDailyDirections: "Adults take 1 capsule 2 times daily with water (2 capsules / 1,100 mg complex daily)",
    capsulesPerBottle: 60,
    servingsPerContainer: 60,
    totalCapsulesOrUnits: 60,
    priceUSD: 49.99,
    currency: "USD",
    dailyCostRange: "$1.67 / day (2 capsules)",
    priceCheckDate: "2026-10-25",
    priceType: "One-time purchase",
    priceStatus: "Verified",
    inStock: true,
    additionalActiveIngredients: ["Phospholipids"],
    hasAdditionalActives: true,
    labelListedAllergens: ["Gluten-free", "Vegetarian", "No artificial colors", "No synthetic dyes"],
    rubricBreakdown: {
      labelClarity: 16,
      testingScope: 12,
      sourceTraceability: 20,
      priceTransparency: 25,
      totalScore: 73
    },
    rubricRationale: {
      labelClarity: "Identifies Berbevis phospholipid complex from Berberis aristata root at 550 mg per capsule. However, the active berberine alkaloid standardization percentage is not separately disclosed anywhere on retail packaging or the product page.",
      testingScope: "Manufactured in a corporate cGMP facility under manufacturer-reported in-house quality assurance and testing protocols. Finished-product certification was not publicly verified for this specific product; does not carry the third-party USP Verified Mark present on Nature Made's primary vitamin lines.",
      sourceTraceability: "Direct manufacturer store and nationwide retail drugstore availability with consistent serving and capsule specifications (60 capsules / 60 servings).",
      priceTransparency: "Direct e-commerce price verified at $49.99 USD on 2026-10-25 for 60 capsules (60 labeled servings) with clear one-time purchase terms. Math yields $0.83 per labeled serving; suggested daily use of 2 capsules daily yields a clear daily cost of $1.67."
    },
    qualityTesting: {
      testingScope: "manufacturer-reported-in-house",
      badgeText: "Manufacturer-Reported In-House Testing & cGMP Facility",
      status: "Manufacturer-reported",
      details: "Manufactured in a cGMP-compliant facility with manufacturer-reported in-house quality assurance and analytical testing. Finished-product certification was not publicly verified for this specific product.",
      certifyingBody: "Nature Made Quality Assurance",
      sourceLink: "https://www.naturemade.com/products/berberine-phytosome-550-mg-capsules"
    },
    finishedProductCertification: {
      status: "Not publicly verified",
      badgeText: "Not Publicly Verified",
      details: "Finished-product certification was not publicly verified for this specific product."
    },
    manufactureLocation: "Manufactured in USA with global ingredients",
    sellerName: "Nature Made Direct / Retail Pharmacies",
    retailerUrl: "https://www.naturemade.com/products/berberine-phytosome-550-mg-capsules",
    retailerDomain: "naturemade.com",
    retailerCtaText: "View at Nature Made ↗",
    isDirectPurchase: true,
    keyLimitation: "Retail label does not disclose standardized active berberine percentage; manufacturer directions specify 2 capsules daily, bringing actual daily cost to $1.67.",
    editorialAssessment: "Ranks fourth overall under our rubric (73/100). Nature Made provides a widely distributed phytosome formulation utilizing Berbevis extract at $0.83 per labeled serving ($49.99 per 60-capsule bottle). However, the label does not disclose the active alkaloid fraction within its 550 mg complex, and testing documentation is limited to manufacturer-reported in-house QA.",
    whyRanked: "Earns fourth rank with 73/100 points due to strong retail availability and verified pricing. Scores behind higher-ranked brands because its retail packaging omits active berberine standardization percentage (16/25 in Label Clarity) and testing is limited to internal in-house QA without independent registry certification (12/25).",
    strengths: [
      "Widely accessible at nationwide retail pharmacies, grocery stores, and direct online.",
      "Utilizes Berbevis® phytosome delivery technology designed for lipid-phase dispersion.",
      "Clear one-time purchase pricing at $49.99 for 60 capsules ($0.83 per labeled serving).",
      "Manufactured in a USA cGMP facility under established corporate quality management systems.",
      "Vegetarian, gluten-free, with no artificial flavors or synthetic dyes."
    ],
    limitations: [
      "Does not disclose the active berberine alkaloid percentage on the consumer label.",
      "Manufacturer directions require 1 capsule twice daily (1,100 mg complex), resulting in a daily cost of $1.67.",
      "Finished-product certification was not publicly verified for this specific product."
    ],
    bottomLine: "Nature Made provides a widely available phytosome supplement at $49.99 for 60 capsules ($0.83 per serving). While pricing is verified and retail accessibility is high, suggested twice-daily use brings daily expenditure to $1.67 and the label omits active berberine standardization, resulting in a 73/100 score at Rank 04.",
    notes: "Ranks fourth under objective documentation rubric (73/100). Sourced from root in Berbevis phytosome.",
    imageUrl: "/images/products/nature-made.webp",
    imageAlt: "Nature Made Berberine Phytosome bottle",
    sourceLinks: [
      { label: "Nature Made Official Product Page", url: "https://www.naturemade.com/products/berberine-phytosome-550-mg-capsules" }
    ]
  },
  {
    id: "natures-bounty-berberine",
    brandName: "Nature's Bounty",
    shortName: "NATURE’S BOUNTY",
    productName: "Nature's Bounty Berberine",
    formulationType: "hcl",
    formulationLabel: "Berberine HCl (1,000 mg)",
    servingSize: "2 capsules",
    declaredFormulationAmount: "1,000 mg Berberine HCl per serving",
    declaredBerberineContent: "1,000 mg Berberine HCl",
    manufacturerDailyDirections: "For adults, take two (2) capsules daily, preferably with a meal (2 capsules / 1,000 mg daily)",
    capsulesPerBottle: 60,
    servingsPerContainer: 30,
    totalCapsulesOrUnits: 60,
    priceUSD: 24.99,
    currency: "USD",
    dailyCostRange: "~$0.83 / day (Estimated)",
    priceCheckDate: "2026-10-25",
    priceType: "Estimated retail benchmark",
    priceStatus: "Estimated",
    inStock: true,
    additionalActiveIngredients: [],
    hasAdditionalActives: false,
    labelListedAllergens: ["Non-GMO", "Gluten-free", "Lactose-free", "Vegetarian", "Sodium-free"],
    rubricBreakdown: {
      labelClarity: 18,
      testingScope: 8,
      sourceTraceability: 15,
      priceTransparency: 21,
      totalScore: 62
    },
    rubricRationale: {
      labelClarity: "Standard single-ingredient declaration of 1,000 mg Berberine HCl per 2-capsule serving (500 mg/capsule) from Berberis aristata bark and root. Clear alkaloid salt amount with zero proprietary blends, but lacks detailed extraction or standardization disclosures.",
      testingScope: "Standard commercial retail supplement brand with manufacturer facility cGMP compliance assertion. Finished-product certification was not publicly verified for this specific product; no independent analytical certificates of analysis or third-party verification marks are publicly available.",
      sourceTraceability: "Manufacturer maintains an informational product page without direct e-commerce checkout, routing users to retail partner search. Country of manufacture is not stated on retail bottle packaging.",
      priceTransparency: "Manufacturer does not sell directly online. Price checked at reputable retail pharmacy partner Walgreens at $39.99 USD one-time purchase on 2026-10-25 for 60 capsules (where frequent BOGO/promotions apply), with an estimated multi-retailer benchmark of ~$24.99 USD (~$0.83/serving, marked estimated). Labeled serving count (30 servings) and daily directions (2 capsules daily) are mathematically clear."
    },
    qualityTesting: {
      testingScope: "unverified",
      badgeText: "Not Publicly Verified (Manufacturer Facility cGMP Assertion)",
      status: "Not publicly verified",
      details: "Standard commercial retail supplement brand with manufacturer facility cGMP compliance assertion. Finished-product certification was not publicly verified for this specific product; no independent analytical certificates or third-party seals are publicly available.",
      certifyingBody: "Unspecified",
      sourceLink: "https://naturesbounty.com/products/berberine-1000mg"
    },
    finishedProductCertification: {
      status: "Not publicly verified",
      badgeText: "Not Publicly Verified",
      details: "Finished-product certification was not publicly verified for this specific product."
    },
    manufactureLocation: "Not specified on bottle label",
    sellerName: "Retail Pharmacies & Supermarkets",
    retailerUrl: "https://www.walgreens.com/store/c/nature's-bounty-berberine/ID=400438064-product",
    retailerDomain: "walgreens.com",
    retailerCtaText: "View at Walgreens ↗",
    isDirectPurchase: false,
    keyLimitation: "No direct e-commerce checkout on manufacturer website; retail prices vary across partner networks ($19.98 to $39.99); lacks published third-party testing documentation; country of manufacture not declared on bottle.",
    editorialAssessment: "Ranks fifth overall under our rubric (62/100). Nature's Bounty provides a conventional 1,000 mg Berberine HCl formula widely stocked across physical pharmacies and supermarkets with an estimated benchmark of ~$24.99 (~$0.83/day estimated). However, the manufacturer does not sell direct, retail pricing varies by merchant, and public analytical testing documentation is absent.",
    whyRanked: "Places fifth with 62/100 points because it receives the lowest testing scope score (8/25, general cGMP assertion only) and lower traceability (15/25, no direct checkout, undisclosed country of manufacture). While label clarity is clean (18/25), absence of public testing documentation positions it at Rank 05.",
    strengths: [
      "Standard isolated Berberine HCl formula aligned with clinical trial dosage ranges (1,000 mg daily).",
      "Extensive physical availability in retail pharmacies and grocery chains nationwide.",
      "Vegetarian, gluten-free, lactose-free, and non-GMO.",
      "Clear daily directions: 2 capsules once daily with a meal."
    ],
    limitations: [
      "Finished-product certification was not publicly verified for this specific product.",
      "Manufacturer product page does not sell directly; retail pricing varies across partner networks.",
      "Country of manufacture is not stated on the product packaging."
    ],
    bottomLine: "Nature's Bounty provides an accessible retail option delivering 1,000 mg of conventional Berberine HCl at an estimated benchmark price of ~$24.99 per bottle (~$0.83/day estimated). While widely available in stores, variable retail pricing and absence of public analytical testing place it at Rank 05 (62/100).",
    notes: "Ranks fifth under objective documentation rubric (62/100). Retail drugstore benchmark; 1,000 mg per 2 capsules.",
    imageUrl: "/images/products/natures-bounty.png",
    imageAlt: "Nature's Bounty Berberine 1000 mg bottle",
    sourceLinks: [
      { label: "Nature's Bounty Official Product Page", url: "https://naturesbounty.com/products/berberine-1000mg" },
      { label: "Walgreens Product Listing", url: "https://www.walgreens.com/store/c/nature's-bounty-berberine/ID=400438064-product" }
    ]
  }
];

// Dynamically compute composite rubric score, sort according to published tie-breaking hierarchy, and derive rankings
export const verifiedSupplementProducts: SupplementProduct[] = rawSupplementProducts
  .map((p) => {
    const total =
      p.rubricBreakdown.labelClarity +
      p.rubricBreakdown.testingScope +
      p.rubricBreakdown.sourceTraceability +
      p.rubricBreakdown.priceTransparency;

    return {
      ...p,
      rubricBreakdown: {
        ...p.rubricBreakdown,
        totalScore: total
      },
      rubricScore: total,
      pricePerServing: parseFloat((p.priceUSD / p.servingsPerContainer).toFixed(2))
    };
  })
  .sort((a, b) => {
    // Primary sort: Total composite rubric score descending
    if (b.rubricScore !== a.rubricScore) {
      return b.rubricScore - a.rubricScore;
    }
    // Tie-Breaker 1: Domain 2 (Documented Testing & Certification Scope) descending
    if (b.rubricBreakdown.testingScope !== a.rubricBreakdown.testingScope) {
      return b.rubricBreakdown.testingScope - a.rubricBreakdown.testingScope;
    }
    // Tie-Breaker 2: Domain 1 (Label Clarity & Ingredient Disclosure) descending
    return b.rubricBreakdown.labelClarity - a.rubricBreakdown.labelClarity;
  })
  .map((p, index) => ({
    ...p,
    editorialRank: index + 1,
    rankBadge: `RANK 0${index + 1}`
  }));
