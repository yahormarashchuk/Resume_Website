import { readFileSync } from "node:fs";
const html = readFileSync("docs/research/raw/index.html", "utf8");

const satoshi = [...new Set(html.match(/https:\/\/[^"')]*[Ss]atoshi[^"')]*\.(?:woff2|woff|otf|ttf)/g) || [])];
console.log("SATOSHI FILES:");
satoshi.forEach((f) => console.log("  " + f));

// @font-face blocks mentioning Satoshi
const faces = [...html.matchAll(/@font-face\s*\{[^}]*\}/g)].map((m) => m[0]).filter((f) => /satoshi/i.test(f));
console.log("\nSATOSHI @font-face count:", faces.length);
faces.slice(0, 6).forEach((f) => console.log("  " + f.replace(/\s+/g, " ").slice(0, 220)));

// appear animations JSON
const appearIdx = html.indexOf("framerAppearAnimation");
console.log("\nappear marker idx:", appearIdx);
const appearScripts = [...html.matchAll(/<script[^>]*data-framer-appear[^>]*>([\s\S]*?)<\/script>/g)];
console.log("appear scripts:", appearScripts.length);
const anim = html.match(/__framer__appear[\s\S]{0,80}/);
console.log("appear var:", anim && anim[0]);

// animator spring configs
const springs = [...new Set(html.match(/"type":"spring"[^}]{0,120}/g) || [])].slice(0, 8);
console.log("\nSPRINGS:");
springs.forEach((s) => console.log("  " + s.slice(0, 150)));

// transforms with translateY / opacity 0 starting states for appear
const appearData = html.match(/data-framer-appear-id="[^"]+"/g) || [];
console.log("\nappear-id attrs:", appearData.length);

// look for animation JSON keyed by appear ids
for (const id of ["1w584as", "12pw29r", "1vx03a9", "n0ccwk"]) {
  const idx = html.indexOf(id);
  if (idx > 0) {
    const ctx = html.slice(Math.max(0, idx - 60), idx + 400).replace(/\s+/g, " ");
    console.log(`\nCTX ${id}: ${ctx.slice(0, 420)}`);
  }
}
