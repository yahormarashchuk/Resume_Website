import { readFileSync, writeFileSync } from "node:fs";
const html = readFileSync("docs/research/raw/index.html", "utf8");

// masks: -webkit-mask:url("data:image/svg+xml,<svg ... </svg>")
const masks = [...html.matchAll(/-webkit-mask:url\(\\?"(data:image\/svg\+xml,[\s\S]*?)\\?"\)/g)].map((m) => m[1]);
const uniq = [...new Set(masks)];
console.log("masks:", masks.length, "unique:", uniq.length);
uniq.forEach((u, i) => {
  let svg = u.replace("data:image/svg+xml,", "");
  svg = decodeURIComponent(svg).replace(/\\"/g, '"');
  writeFileSync(`docs/research/raw/svg/mask-${i}.svg`, svg);
  // context: find first occurrence position, look back for framer names
  const pos = html.indexOf(u.slice(0, 80));
  const before = html.slice(Math.max(0, pos - 1500), pos);
  const names = [...before.matchAll(/data-framer-name="([^"]+)"/g)].map((x) => x[1]).slice(-4);
  console.log(`mask-${i} (${svg.length}B) ctx: ${names.join(">")}  head: ${svg.slice(0, 120).replace(/\s+/g, " ")}`);
});

// identify the 24x24 inline icons (0-3) and small ones by their path signature
for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8]) {
  const svg = readFileSync(`docs/research/raw/svg/inline-${i}.svg`, "utf8");
  const cleaned = svg.replace(/\\"/g, '"').replace(/%22/g, '"').replace(/%20/g, " ");
  writeFileSync(`docs/research/raw/svg/inline-${i}.svg`, cleaned);
  console.log(`\ninline-${i}: ${cleaned.slice(0, 250).replace(/\s+/g, " ")}`);
}
