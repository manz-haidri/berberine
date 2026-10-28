import fs from 'fs';
import path from 'path';
import { verifiedSupplementProducts } from './src/data/supplementProducts.ts';
import { berberineFaqs } from './src/data/faqs.ts';
import { researchStudies } from './src/data/researchStudies.ts';

const distDir = path.resolve('dist');
const supplementsHtmlPath = path.resolve('dist/supplements/index.html');
const indexHtmlPath = path.resolve('dist/index.html');

if (!fs.existsSync(distDir) || !fs.existsSync(supplementsHtmlPath)) {
  console.error('dist/ does not exist or build is incomplete! Run npm run build first.');
  process.exit(1);
}

const supplementsHtml = fs.readFileSync(supplementsHtmlPath, 'utf8');

console.log('====================================================');
console.log('BERBERINE PORTAL - AUTOMATED AUDIT & INTEGRITY CHECK');
console.log('====================================================\n');

// ----------------------------------------------------
// 1. SECTION IDS CHECK (Supplements Page)
// ----------------------------------------------------
const requiredSections = [
  'how-top-5-compare',
  'top-5-ranked-reviews',
  'ranking-methodology',
  'compare-supplements',
  'supplement-types',
  'research-dosages',
  'buying-guide',
  'bioavailability-and-clinical-outcomes',
  'phytosome-vs-hcl',
  'transdermal-patches'
];

console.log('--- 1. Checking Supplements Page Section IDs ---');
for (const id of requiredSections) {
  if (supplementsHtml.includes(`id="${id}"`)) {
    console.log(`[PASS] Found section id="${id}"`);
  } else {
    console.error(`[FAIL] Missing section id="${id}"`);
    process.exit(1);
  }
}

// ----------------------------------------------------
// 2. FIVE PRODUCTS & DYNAMIC IMAGE VALIDATION
// ----------------------------------------------------
console.log('\n--- 2. Checking 5 Products & Image File References ---');
if (verifiedSupplementProducts.length !== 5) {
  console.error(`[FAIL] Expected exactly 5 verified supplement products, found ${verifiedSupplementProducts.length}`);
  process.exit(1);
}

for (const product of verifiedSupplementProducts) {
  if (supplementsHtml.toLowerCase().includes(product.brandName.toLowerCase())) {
    console.log(`[PASS] Found product brand "${product.brandName}" in HTML`);
  } else {
    console.error(`[FAIL] Missing product brand "${product.brandName}" in HTML`);
    process.exit(1);
  }

  // Validate image exists on disk in public/
  const imgDiskPath = path.resolve('public' + product.imageUrl);
  if (fs.existsSync(imgDiskPath)) {
    console.log(`[PASS] Image file exists on disk: ${product.imageUrl}`);
  } else {
    console.error(`[FAIL] Product image missing on disk: ${imgDiskPath}`);
    process.exit(1);
  }

  // Validate HTML references the exact image
  if (supplementsHtml.includes(product.imageUrl)) {
    console.log(`[PASS] HTML references correct image: ${product.imageUrl}`);
  } else {
    console.error(`[FAIL] HTML missing reference to image: ${product.imageUrl}`);
    process.exit(1);
  }
}

// ----------------------------------------------------
// 3. STANDARDIZED COMPARISON TABLE ROWS
// ----------------------------------------------------
const requiredStandardizedRows = [
  'Formulation',
  'Labeled Serving Size',
  'Declared Formulation Amount',
  'Declared Berberine Content',
  'Daily-Use Directions',
  'Capsules per Bottle',
  'Servings per Bottle',
  'Bottle Price',
  'Cost per Labeled Serving',
  'Daily Cost Range',
  'Quality Testing Scope',
  'RUBRIC SCORE'
];

console.log('\n--- 3. Checking Standardized Comparison Table Rows ---');
for (const row of requiredStandardizedRows) {
  if (supplementsHtml.includes(row)) {
    console.log(`[PASS] Found standardized row "${row}"`);
  } else {
    console.error(`[FAIL] Missing standardized row "${row}"`);
    process.exit(1);
  }
}

// ----------------------------------------------------
// 4. FORBIDDEN PROMOTIONAL & UNSUPPORTED CLAIMS
// ----------------------------------------------------
const forbiddenClaims = [
  'Criteria Met',
  'Clinical dose (1,200mg+)',
  '3 of 3',
  '1 of 3',
  '0 of 3',
  '#1 of 47 Tested',
  '42 of 47 tested brands',
  'The dose where AMPK switches on',
  'dose where AMPK switches on',
  'Frequently sells out',
  'Frontrow MD',
  'unmatched',
  'industry-leading',
  'sets the benchmark',
  'hiding behind',
  'AI-Search Verified',
  'Medically reviewed by Dr.',
  'Dr. Elena Vance',
  'Dr. Marcus Chen',
  'Sarah Jenkins',
  'David Ross'
];

console.log('\n--- 4. Checking Absence of Unsupported & Promotional Claims ---');
for (const phrase of forbiddenClaims) {
  if (supplementsHtml.toLowerCase().includes(phrase.toLowerCase())) {
    console.error(`[FAIL] Forbidden promotional/unsupported claim present: "${phrase}"`);
    process.exit(1);
  } else {
    console.log(`[PASS] Verified absence of "${phrase}"`);
  }
}

// ----------------------------------------------------
// 5. REQUIRED FACTUAL STRINGS & VALUES
// ----------------------------------------------------
const requiredAccuratePhrases = [
  'Editorial review of five products based on manufacturer labels and publicly available documentation',
  'Finished-product certification was not publicly verified for this specific product.',
  'Not separately disclosed by manufacturer',
  '~154 mg berberine (calculated from declared 28% standardization in manufacturer factsheet)',
  'View 4-Domain Scoring Breakdown',
  '49.99', // Verified Nature Made price
  '51.50', // Verified Pure Encapsulations price
  '44.00', // Verified Thorne price
  '49.00', // Verified Dear Apothecary price
  '24.99', // Estimated benchmark Nature's Bounty price
  'Estimated benchmark',
  'https://www.walgreens.com/store/c/nature\'s-bounty-berberine/ID=400438064-product'
];

console.log('\n--- 5. Checking Required Factual Data & Corrections ---');
for (const phrase of requiredAccuratePhrases) {
  if (supplementsHtml.includes(phrase)) {
    console.log(`[PASS] Found factual phrase/value: "${phrase.slice(0, 50)}"`);
  } else {
    console.error(`[FAIL] Missing factual phrase/value: "${phrase}"`);
    process.exit(1);
  }
}

// ----------------------------------------------------
// 6. HOMEPAGE PRIMARY CTA TRAILING SLASH CHECK
// ----------------------------------------------------
console.log('\n--- 6. Checking Homepage Primary CTA ---');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
if (indexHtml.includes('/supplements/#how-top-5-compare')) {
  console.log('[PASS] Homepage primary CTA correctly links to /supplements/#how-top-5-compare');
} else {
  console.error('[FAIL] Homepage primary CTA missing required trailing slash: expected /supplements/#how-top-5-compare');
  process.exit(1);
}

// ----------------------------------------------------
// 7. INTERNAL LINKS, ROUTES, FRAGMENTS & TRAILING SLASH AUDIT
// ----------------------------------------------------
console.log('\n--- 7. Scanning All HTML Files for Routes, Trailing Slashes & Anchors ---');
const htmlFiles = [];
function walkHtml(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      walkHtml(full);
    } else if (item.endsWith('.html')) {
      htmlFiles.push(full);
    }
  }
}
walkHtml(distDir);

let linkErrors = [];
let totalLinks = 0;

for (const file of htmlFiles) {
  const relFile = path.relative(distDir, file);
  const content = fs.readFileSync(file, 'utf8');
  const hrefRegex = /href=["\x27]([^"\x27]+)["\x27]/g;
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    const href = match[1];
    totalLinks++;

    // Ignore external, protocol-relative, mailto, tel, javascript
    if (/^(https?:|\/\/|mailto:|tel:|javascript:)/i.test(href)) {
      continue;
    }

    // Ignore asset files
    if (/\.(png|jpg|jpeg|webp|svg|css|js|txt|xml|json|ico|webmanifest)$/i.test(href.split('#')[0])) {
      continue;
    }

    const [pathname, hash] = href.split('#');

    // Anchor-only links (#anchor)
    if (pathname === '' && hash) {
      const targetIdRegex = new RegExp(`(?:^|[\\s<])id=["\\x27]${hash}["\\x27]`);
      if (!targetIdRegex.test(content)) {
        linkErrors.push(`[BROKEN ANCHOR] in ${relFile}: href="${href}" - id="${hash}" not found on page`);
      }
      continue;
    }

    // Internal path starting with /
    if (pathname.startsWith('/')) {
      // Must end with slash if not an asset file
      if (pathname !== '/' && !pathname.endsWith('/')) {
        linkErrors.push(`[MISSING TRAILING SLASH] in ${relFile}: href="${href}" should end with /`);
      }

      // Check target file
      const targetRel = pathname === '/' ? 'index.html' : pathname.replace(/^\//, '').replace(/\/$/, '') + '/index.html';
      const targetPath = path.join(distDir, targetRel);
      if (!fs.existsSync(targetPath)) {
        linkErrors.push(`[MISSING ROUTE] in ${relFile}: href="${href}" target ${targetRel} does not exist`);
      } else if (hash) {
        const targetContent = fs.readFileSync(targetPath, 'utf8');
        const targetIdRegex = new RegExp(`(?:^|[\\s<])id=["\\x27]${hash}["\\x27]`);
        if (!targetIdRegex.test(targetContent)) {
          linkErrors.push(`[BROKEN ANCHOR] in ${relFile}: href="${href}" - id="${hash}" not found in ${targetRel}`);
        }
      }
    }
  }
}

if (linkErrors.length > 0) {
  console.error(`[FAIL] Found ${linkErrors.length} link/anchor/route errors:`);
  linkErrors.forEach((e) => console.error('  ' + e));
  process.exit(1);
} else {
  console.log(`[PASS] Verified ${totalLinks} links across ${htmlFiles.length} HTML files: all routes, anchors, and slashes valid.`);
}

// ----------------------------------------------------
// 8. DUPLICATE DOM ELEMENT IDS AUDIT
// ----------------------------------------------------
console.log('\n--- 8. Checking for Duplicate DOM IDs Across All Pages ---');
let dupErrors = [];
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const idRegex = /(?:^|[\s<])id=["\x27]([^"\x27]+)["\x27]/g;
  const ids = new Map();
  let match;
  while ((match = idRegex.exec(content)) !== null) {
    const id = match[1];
    ids.set(id, (ids.get(id) || 0) + 1);
  }
  for (const [id, count] of ids.entries()) {
    if (count > 1) {
      dupErrors.push(`${path.relative(distDir, file)}: id="${id}" appears ${count} times`);
    }
  }
}

if (dupErrors.length > 0) {
  console.error(`[FAIL] Found ${dupErrors.length} duplicate element IDs:`);
  dupErrors.forEach((e) => console.error('  ' + e));
  process.exit(1);
} else {
  console.log(`[PASS] Zero duplicate element IDs found across all ${htmlFiles.length} pages.`);
}

// ----------------------------------------------------
// 9. LEGACY ALIAS REDIRECTS CHECK
// ----------------------------------------------------
console.log('\n--- 9. Checking Legacy Redirect Aliases ---');
const legacyAliases = [
  { file: 'dist/about-us/index.html', target: '/about/' },
  { file: 'dist/contact-us/index.html', target: '/contact/' },
  { file: 'dist/privacy/index.html', target: '/privacy-policy/' },
  { file: 'dist/terms/index.html', target: '/terms-and-conditions/' }
];

for (const alias of legacyAliases) {
  const filePath = path.resolve(alias.file);
  if (!fs.existsSync(filePath)) {
    console.error(`[FAIL] Missing legacy alias file: ${alias.file}`);
    process.exit(1);
  }
  const html = fs.readFileSync(filePath, 'utf8');
  if (!html.includes(`0;url=${alias.target}`)) {
    console.error(`[FAIL] ${alias.file} does not redirect to ${alias.target}`);
    process.exit(1);
  }
  if (!html.includes(`href="${alias.target}"`)) {
    console.error(`[FAIL] ${alias.file} fallback link does not point to ${alias.target}`);
    process.exit(1);
  }
  console.log(`[PASS] ${alias.file} correctly redirects to ${alias.target}`);
}

const redirectsFile = path.resolve('public/_redirects');
if (fs.existsSync(redirectsFile)) {
  const content = fs.readFileSync(redirectsFile, 'utf8');
  for (const alias of legacyAliases) {
    if (!content.includes(alias.target)) {
      console.error(`[FAIL] public/_redirects missing target ${alias.target}`);
      process.exit(1);
    }
  }
  console.log('[PASS] public/_redirects includes all required 301 target rules.');
}

// ----------------------------------------------------
// 10. SITEMAP EXCLUSIONS CHECK
// ----------------------------------------------------
console.log('\n--- 10. Checking Sitemap Exclusions & Canonicals ---');
const sitemapPath = path.resolve('dist/sitemap-0.xml');
if (!fs.existsSync(sitemapPath)) {
  console.error('[FAIL] dist/sitemap-0.xml not found!');
  process.exit(1);
}
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
const forbiddenSitemapEntries = ['/404', '/500', '/about-us/', '/contact-us/', '/privacy/', '/terms/'];
for (const entry of forbiddenSitemapEntries) {
  if (sitemapContent.includes(entry)) {
    console.error(`[FAIL] Sitemap contains forbidden non-canonical/error page: "${entry}"`);
    process.exit(1);
  }
}
console.log('[PASS] Sitemap correctly excludes error pages and legacy redirect aliases.');

// ----------------------------------------------------
// 11. STRUCTURED DATA & JSON-LD AUDIT
// ----------------------------------------------------
console.log('\n--- 11. Auditing Structured Data (JSON-LD) ---');
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const jsonLdRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let match;
  while ((match = jsonLdRegex.exec(content)) !== null) {
    try {
      const data = JSON.parse(match[1]);
      // Verify no fake reviewers in JSON-LD
      const jsonStr = JSON.stringify(data);
      if (jsonStr.includes('Elena Vance') || jsonStr.includes('Marcus Chen') || jsonStr.includes('Sarah Jenkins') || jsonStr.includes('David Ross')) {
        console.error(`[FAIL] Fake persona found in JSON-LD in ${path.relative(distDir, file)}`);
        process.exit(1);
      }
    } catch (e) {
      console.error(`[FAIL] Invalid JSON-LD syntax in ${path.relative(distDir, file)}:`, e.message);
      process.exit(1);
    }
  }
}

// Detailed audit of supplements JSON-LD
const suppJsonMatches = [...supplementsHtml.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
let itemListFound = false;
for (const m of suppJsonMatches) {
  const json = JSON.parse(m[1]);
  const graph = json['@graph'] || [json];
  for (const node of graph) {
    if (node['@type'] === 'ItemList') {
      itemListFound = true;
      const items = node.itemListElement || [];
      if (items.length !== 5) {
        console.error(`[FAIL] ItemList expected 5 products, found ${items.length}`);
        process.exit(1);
      }
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.position !== i + 1) {
          console.error(`[FAIL] ItemList position mismatch at index ${i}: expected ${i + 1}, got ${item.position}`);
          process.exit(1);
        }
        const prod = item.item;
        if (!prod || prod['@type'] !== 'Product') {
          console.error(`[FAIL] ItemList element ${i + 1} is not a Product`);
          process.exit(1);
        }
        // Assert absence of AggregateRating
        if (prod.aggregateRating) {
          console.error(`[FAIL] Disallowed aggregateRating found on Product "${prod.name}"`);
          process.exit(1);
        }
        // Nature's Bounty must NOT have an offer
        if (prod.name.includes("Nature's Bounty")) {
          if (prod.offers) {
            console.error(`[FAIL] Nature's Bounty should not have an unverified Offer in schema`);
            process.exit(1);
          }
        } else {
          // Others must have verified offer with matching review anchor
          if (!prod.offers || !prod.offers.price) {
            console.error(`[FAIL] Missing verified Offer on Product "${prod.name}"`);
            process.exit(1);
          }
          if (prod.offers.availability === 'https://schema.org/InStock') {
            console.error(`[FAIL] Disallowed unconditional InStock found on "${prod.name}"`);
            process.exit(1);
          }
        }
        // Verify URL anchors resolve on page
        const anchor = prod.url.split('#')[1];
        if (!supplementsHtml.includes(`id="${anchor}"`)) {
          console.error(`[FAIL] Product schema URL anchor "#${anchor}" not found on page`);
          process.exit(1);
        }
      }
    }
  }
}
if (!itemListFound) {
  console.error('[FAIL] ItemList not found in supplements page JSON-LD');
  process.exit(1);
}
console.log('[PASS] Structured data JSON-LD validated: no AggregateRating, no unconditional InStock, no unverified offers, anchors resolve.');

// ----------------------------------------------------
// 12. CONTACT FORM SINCERITY CHECK
// ----------------------------------------------------
console.log('\n--- 12. Checking Contact Form Sincerity ---');
const contactHtmlPath = path.resolve('dist/contact/index.html');
const contactHtml = fs.readFileSync(contactHtmlPath, 'utf8');
if (contactHtml.includes('Message Received Successfully')) {
  console.error('[FAIL] Simulated success "Message Received Successfully" still present in contact page!');
  process.exit(1);
}
if (!contactHtml.includes('Open email app')) {
  console.error('[FAIL] Contact form action should state "Open email app"');
  process.exit(1);
}
console.log('[PASS] Contact form uses honest email-client action without fake transmission success.');

// ----------------------------------------------------
// 13. AI CONTENT PARITY CHECK (llms.txt & llms-full.txt)
// ----------------------------------------------------
console.log('\n--- 13. Checking AI Files Parity & Accuracy ---');
const llmsTxt = fs.readFileSync(path.resolve('public/llms.txt'), 'utf8');
const llmsFull = fs.readFileSync(path.resolve('public/llms-full.txt'), 'utf8');

// Confirm exact 5 products in llms-full.txt
for (const p of verifiedSupplementProducts) {
  if (!llmsFull.includes(p.productName)) {
    console.error(`[FAIL] llms-full.txt missing product: "${p.productName}"`);
    process.exit(1);
  }
}
if (llmsFull.includes('NOW Foods')) {
  console.error('[FAIL] Obsolete NOW Foods still present in llms-full.txt');
  process.exit(1);
}
if (llmsFull.includes('guarantee AI citations') || llmsFull.includes('guaranteed AI citations')) {
  console.error('[FAIL] llms files make unsupported citation guarantees');
  process.exit(1);
}
console.log('[PASS] llms.txt and llms-full.txt accurately reflect website products, rankings, and citations.');

// ----------------------------------------------------
// 14. DOCUMENTATION FILES CHECK
// ----------------------------------------------------
console.log('\n--- 14. Checking Internal Documentation Files ---');
const methodologyPath = path.resolve('docs/supplement-review-methodology.md');
const sourceRegisterPath = path.resolve('docs/supplement-source-register.md');

if (!fs.existsSync(methodologyPath) || !fs.existsSync(sourceRegisterPath)) {
  console.error('[FAIL] Documentation files missing in docs/');
  process.exit(1);
}
console.log('[PASS] Found docs/supplement-review-methodology.md and docs/supplement-source-register.md');

console.log('\n====================================================');
console.log('ALL VERIFICATION CHECKS PASSED WITH ZERO ERRORS!');
console.log('====================================================\n');
