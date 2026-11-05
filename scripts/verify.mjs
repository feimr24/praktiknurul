import fs from 'node:fs';
import assert from 'node:assert/strict';
const html=fs.readFileSync('out/index.html','utf8');
const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
const hrefs=[...html.matchAll(/\bhref="([^"]+)"/g)].map(m=>m[1]);
for(const href of hrefs.filter(h=>h.startsWith('#')))assert(ids.has(href.slice(1)),`Missing anchor ${href}`);
const assets=new Set([...html.matchAll(/(?:src|href)="(\/assets\/[^"?]+)"/g)].map(m=>m[1]));
for(const asset of assets)assert(fs.statSync('public'+asset).size>0,`Empty/missing asset ${asset}`);
for(const view of ['desktop','mobile']){
 const source=fs.readFileSync(`app/${view}.jsx`,'utf8');
 for(const [,asset] of source.matchAll(/"(\/assets\/[^"?]+)"/g))assert(fs.statSync('public'+asset).size>0,asset);
 assert(!source.includes('figma.com/api/mcp/asset'),'Temporary Figma URL in source');
 assert(source.includes('Buat Janji'),'Sunday appointment label');
 assert(!/Pemeriksaan lab|Surat kesehatan/i.test(source),'Removed service returned');
 assert(source.includes('Konsultasi umum'),'Missing main service');
}
assert(hrefs.some(h=>h.startsWith('https://wa.me/6285199787307')),'WhatsApp link');
assert(hrefs.some(h=>h.startsWith('https://www.google.com/maps/search/')),'Maps link');
assert(hrefs.includes('mailto:pmdr.nurulilmir@gmail.com'),'Email link');
console.log(`PASS: ${ids.size} IDs, ${assets.size} rendered local assets, all internal anchors and business links; exact image/mask paths and service labels checked.`);
