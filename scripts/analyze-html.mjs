// Mines the saved Framer HTML for design tokens, breakpoints, and font files.
import { readFileSync } from "node:fs";

const html = readFileSync("docs/research/raw/index.html", "utf8");

const tokens = [...new Set(html.match(/--token-[a-f0-9-]+:\s*[^;"}]+/g) || [])];
console.log("TOKENS:");
tokens.slice(0, 40).forEach((t) => console.log("  " + t.slice(0, 130)));

const bodyRules = html.match(/body\s*\{[^}]*\}/g) || [];
console.log("\nBODY RULES:");
bodyRules.slice(0, 3).forEach((b) => console.log("  " + b.slice(0, 300)));

const media = [...new Set(html.match(/@media[^{]+/g) || [])];
console.log("\nMEDIA QUERIES:");
media.slice(0, 20).forEach((m) => console.log("  " + m.trim().slice(0, 110)));

const fontUrls = [...new Set(html.match(/https:\/\/[^"')]+\.(?:woff2|woff|otf|ttf)/g) || [])];
console.log("\nFONT FILES: " + fontUrls.length);
fontUrls.slice(0, 20).forEach((f) => console.log("  " + f.slice(0, 140)));

const hoverRules = [...new Set(html.match(/\.framer-[\w-]+:hover[^{]*\{[^}]*\}/g) || [])];
console.log("\nHOVER RULES: " + hoverRules.length);
hoverRules.slice(0, 20).forEach((h) => console.log("  " + h.slice(0, 200)));

const keyframes = [...new Set((html.match(/@keyframes\s+[\w-]+/g) || []))];
console.log("\nKEYFRAMES:", keyframes.join(", ").slice(0, 300));
