import { readFileSync, writeFileSync } from "node:fs";
const html = readFileSync("docs/research/raw/index.html", "utf8");

// mask syntax variants
for (const pat of ["-webkit-mask", "mask:url", "mask-image", "mask:"]) {
  const idx = html.indexOf(pat);
  console.log(pat, "->", idx, idx > 0 ? JSON.stringify(html.slice(idx, idx + 160)) : "");
}

// map each unique inline svg to the data-framer-name context preceding it
const svgs = [...html.matchAll(/<svg[\s\S]*?<\/svg>/g)];
const uniq = new Map();
svgs.forEach((m) => {
  const before = html.slice(Math.max(0, m.index - 1200), m.index);
  const names = [...before.matchAll(/data-framer-name="([^"]+)"/g)].map((x) => x[1]);
  const key = m[0];
  if (!uniq.has(key)) uniq.set(key, { idx: uniq.size, contexts: [] });
  uniq.get(key).contexts.push(names.slice(-3).join(">"));
});
[...uniq.entries()].forEach(([svg, info]) => {
  console.log(`inline-${info.idx} (${svg.length}B): ${info.contexts.join(" | ").slice(0, 180)}`);
});
