import { readFileSync, writeFileSync } from "node:fs";
const html = readFileSync("docs/research/raw/index.html", "utf8");

const m = html.match(/__framer__appearAnimationsContent">([\s\S]*?)<\/script>/);
if (m) {
  const json = JSON.parse(m[1]);
  writeFileSync("docs/research/raw/appear-animations.json", JSON.stringify(json, null, 2));
  console.log("appear ids:", Object.keys(json).join(", "));
  console.log(JSON.stringify(json, null, 1).slice(0, 3000));
}

const faces = [...html.matchAll(/@font-face\s*\{[^}]*Satoshi[^}]*\}/g)].map((x) => x[0]);
console.log("\nSATOSHI FACES:");
faces.forEach((f) => console.log(f.replace(/\s+/g, " ")));

const bp = html.match(/__framer__breakpoints">([\s\S]*?)<\/script>/);
if (bp) console.log("\nBREAKPOINTS:", bp[1].slice(0, 500));
