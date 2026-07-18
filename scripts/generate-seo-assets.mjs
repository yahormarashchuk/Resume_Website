/*
 * Generates favicon and OG image in the Cobalt Neon palette.
 * Run: node scripts/generate-seo-assets.mjs
 */
import { writeFileSync } from "node:fs";
import sharp from "sharp";

const NAVY = "#0a0e1a";
const INDIGO = "#4f46e5";
const CYAN = "#22d3ee";
const CREAM = "#f2f5ff";
const GHOST = "rgba(160,180,255,0.18)";

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" fill="${NAVY}"/>
  <text x="256" y="368" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="320" font-weight="bold" fill="${INDIGO}">Y</text>
  <circle cx="392" cy="140" r="28" fill="${CYAN}"/>
</svg>`;
writeFileSync("public/seo/favicon.png", await sharp(Buffer.from(favicon)).resize(512, 512).png().toBuffer());
console.log("OK favicon.png");

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${NAVY}"/>
  <circle cx="1080" cy="90" r="240" fill="${INDIGO}" opacity="0.18"/>
  <circle cx="80" cy="580" r="280" fill="${CYAN}" opacity="0.10"/>
  <text x="80" y="250" font-family="Arial, Helvetica, sans-serif" font-size="92" font-weight="bold" fill="${CREAM}">YAHOR</text>
  <text x="80" y="350" font-family="Arial, Helvetica, sans-serif" font-size="92" font-weight="bold" fill="${GHOST}">MARASHCHUK</text>
  <text x="80" y="440" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="bold" fill="${INDIGO}">FULL-STACK .NET DEVELOPER</text>
  <text x="80" y="500" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#8b93a8">C# · ASP.NET Core · Blazor · PostgreSQL · Azure</text>
</svg>`;
writeFileSync("public/seo/og-image.png", await sharp(Buffer.from(og)).resize(1200, 630).png().toBuffer());
console.log("OK og-image.png");
