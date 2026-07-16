// Pulls inline SVGs, mask data-URIs, and decorative vector backgrounds out of the saved SSR HTML.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const html = readFileSync("docs/research/raw/index.html", "utf8");
mkdirSync("docs/research/raw/svg", { recursive: true });

// 1. All inline <svg>...</svg>
const svgs = [...html.matchAll(/<svg[\s\S]*?<\/svg>/g)].map((m) => m[0]);
const seen = new Map();
svgs.forEach((s) => {
  if (!seen.has(s)) seen.set(s, seen.size);
});
console.log("inline svgs:", svgs.length, "unique:", seen.size);
[...seen.keys()].forEach((s, i) => writeFileSync(`docs/research/raw/svg/inline-${i}.svg`, s));
[...seen.keys()].forEach((s, i) => {
  const vb = (s.match(/viewBox="([^"]+)"/) || [])[1];
  console.log(`  inline-${i}: viewBox=${vb} len=${s.length} ${s.slice(4, 90).replace(/\s+/g, " ")}`);
});

// 2. mask data-URIs (decode URL-encoded svg)
const masks = [...new Set([...html.matchAll(/mask:\s*url\("(data:image\/svg\+xml,[^"]+)"\)/g), ...html.matchAll(/mask-image:\s*url\("?(data:image\/svg\+xml,[^")]+)"?\)/g)].map((m) => m[1]))];
console.log("\nmask URIs:", masks.length);
masks.forEach((u, i) => {
  const svg = decodeURIComponent(u.replace("data:image/svg+xml,", "")).replace(/\\"/g, '"');
  writeFileSync(`docs/research/raw/svg/mask-${i}.svg`, svg);
  const vb = (svg.match(/viewBox="([^"]+)"/) || [])[1];
  console.log(`  mask-${i}: viewBox=${vb} len=${svg.length}`);
});

// 3. background-image data-URIs (decorative doodles)
const bgs = [...new Set([...html.matchAll(/background-image:\s*url\("?(data:image\/svg\+xml,[^")]+)"?\)/g)].map((m) => m[1]))];
console.log("\nbg data-URIs:", bgs.length);
bgs.forEach((u, i) => {
  const svg = decodeURIComponent(u.replace("data:image/svg+xml,", ""));
  writeFileSync(`docs/research/raw/svg/doodle-${i}.svg`, svg);
  const vb = (svg.match(/viewBox="([^"]+)"/) || [])[1];
  console.log(`  doodle-${i}: viewBox=${vb} len=${svg.length}`);
});

// 4. Left-card mystery badge: context around "Aaabad"
const nameIdx = html.indexOf("Aaabad");
const ctx = html.slice(nameIdx, nameIdx + 3000);
const badgeImg = ctx.match(/<img[^>]+>/);
const badgeSvg = ctx.match(/<svg[\s\S]{0,200}/);
console.log("\nafter-name img:", badgeImg ? badgeImg[0].slice(0, 200) : "none");
console.log("after-name svg head:", badgeSvg ? badgeSvg[0].replace(/\s+/g, " ").slice(0, 200) : "none");

// 5. nav icon content: find the nav markup
const navIdx = html.indexOf("<nav");
const navHtml = html.slice(navIdx, html.indexOf("</nav>") + 6);
const navSvgs = [...navHtml.matchAll(/<svg[\s\S]*?<\/svg>/g)];
console.log("\nnav svgs:", navSvgs.length);
navSvgs.forEach((m, i) => {
  const vb = (m[0].match(/viewBox="([^"]+)"/) || [])[1];
  console.log(`  nav-${i}: viewBox=${vb} ${m[0].slice(0, 120).replace(/\s+/g, " ")}`);
  writeFileSync(`docs/research/raw/svg/nav-${i}.svg`, m[0]);
});
console.log("\nnav mask divs:", [...navHtml.matchAll(/mask/g)].length);
