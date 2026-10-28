export interface BotanicalPlant {
  commonName: string;
  scientificName: string;
  partsUsed: string;
  historicalUse: string;
  description: string;
}

export const botanicalPlants: BotanicalPlant[] = [
  {
    commonName: "Barberry",
    scientificName: "Berberis vulgaris",
    partsUsed: "Roots and bark",
    historicalUse: "European & Middle Eastern herbalism for digestive discomfort and bile flow",
    description: "Thorny shrub widespread across Europe and Asia. Roots and bark contain significant berberine concentrations. While its fruit is edible, eating berries does not equate to standardized supplement doses."
  },
  {
    commonName: "Goldenseal",
    scientificName: "Hydrastis canadensis",
    partsUsed: "Roots and rhizomes",
    historicalUse: "Native American medicine for mucous membrane conditions and infections",
    description: "Perennial herb native to southeastern Canada and the eastern US. Contains berberine and hydrastine. Heavily commercialized in traditional herbal formulations."
  },
  {
    commonName: "Oregon Grape",
    scientificName: "Mahonia aquifolium",
    partsUsed: "Roots and stems",
    historicalUse: "Traditional skin and gut remedies in Pacific Northwest indigenous medicine",
    description: "Evergreen shrub native to western North America, renowned for deep golden-yellow inner wood and root bark saturated with isoquinoline alkaloids."
  },
  {
    commonName: "Tree Turmeric (Indian Barberry)",
    scientificName: "Berberis aristata",
    partsUsed: "Roots and stem bark",
    historicalUse: "Ayurvedic medicine (known as Daruharidra) for metabolic and inflammatory conditions",
    description: "Native to the Himalayas in India and Nepal. A primary botanical raw source for commercial standardized berberine hydrochloride extraction."
  },
  {
    commonName: "Chinese Goldthread",
    scientificName: "Coptis chinensis",
    partsUsed: "Rhizomes",
    historicalUse: "Traditional Chinese Medicine (Huang Lian / 黄连) for clearing heat, dampness, and diarrhea",
    description: "One of the most revered herbs in traditional Chinese medical practice, containing potent alkaloids that have served as the historical catalyst for modern pharmacology."
  }
];

export interface ChemicalProperty {
  property: string;
  description: string;
}

export const chemicalProperties: ChemicalProperty[] = [
  { property: "Chemical Classification", description: "Isoquinoline alkaloid (protoberberine quaternary ammonium salt)" },
  { property: "Molecular Formula (Cation)", description: "C20H18NO4+ (quaternary ammonium alkaloid)" },
  { property: "Molecular Formula (HCl Salt)", description: "C20H18ClNO4 (anhydrous berberine hydrochloride)" },
  { property: "Approximate Molecular Weight", description: "336.36 g/mol (cation) / 371.81 g/mol (hydrochloride salt)" },
  { property: "Natural Appearance & Color", description: "Intense, vivid yellow crystalline powder with a intensely bitter taste" },
  { property: "Common Supplement Form", description: "Berberine hydrochloride (Berberine HCl)" },
  { property: "Major Formulation Limitation", description: "Low systemic oral bioavailability (frequently estimated under 5% intact compound in pharmacokinetic models) due to intestinal P-glycoprotein efflux and rapid first-pass metabolism" }
];

export interface ChineseNomenclature {
  term: string;
  pinyin: string;
  englishMeaning: string;
  context: string;
}

export const chineseNomenclature: ChineseNomenclature[] = [
  {
    term: "小檗碱",
    pinyin: "xiǎo bò jiǎn",
    englishMeaning: "Berberine (chemical nomenclature)",
    context: "The formal chemical and scientific name used in modern Chinese pharmacopeias and peer-reviewed biochemical literature."
  },
  {
    term: "黄连素",
    pinyin: "huáng lián sù",
    englishMeaning: "Huang Lian Su (traditional active principle)",
    context: "The everyday clinical and traditional term in China, named after Coptis chinensis (Huang Lian), extensively used for intestinal inflammation."
  }
];
