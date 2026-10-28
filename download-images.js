import fs from 'fs';
import path from 'path';

const images = [
  { url: 'https://topcertifiedsupplements.com/berberine/images/dear_berberinebottle.png', name: 'dear-apothecary.png' },
  { url: 'https://topcertifiedsupplements.com/berberine/images/Throneberberine.png', name: 'thorne.png' },
  { url: 'https://topcertifiedsupplements.com/berberine/images/naturesmade_berberine.webp', name: 'nature-made.webp' },
  { url: 'https://topcertifiedsupplements.com/berberine/images/pureencap_berberine.jpg', name: 'pure-encapsulations.jpg' },
  { url: 'https://topcertifiedsupplements.com/berberine/images/naturesbounty_berberine.jpg', name: 'natures-bounty.jpg' }
];

const targetDir = path.resolve('public/images/products');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function run() {
  for (const img of images) {
    try {
      console.log(`Fetching ${img.url}...`);
      const res = await fetch(img.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        }
      });
      if (!res.ok) {
        console.error(`Failed ${img.url}: ${res.status} ${res.statusText}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      const outPath = path.join(targetDir, img.name);
      fs.writeFileSync(outPath, buffer);
      console.log(`Saved ${img.name} (${buffer.length} bytes)`);
    } catch (err) {
      console.error(`Error downloading ${img.url}:`, err.message);
    }
  }
}

run();
