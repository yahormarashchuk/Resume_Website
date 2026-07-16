// Downloads the Satoshi font, cleans doodle/mask SVGs, and copies them into public/.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

// 1. Satoshi 700 woff2
const SATOSHI = "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2";
mkdirSync("src/app/fonts", { recursive: true });
const buf = Buffer.from(await (await fetch(SATOSHI)).arrayBuffer());
writeFileSync("src/app/fonts/Satoshi-Bold.woff2", buf);
console.log(`satoshi: ${(buf.length / 1024).toFixed(0)} KB`);

// 2. doodles: clean URL-encoding and copy to public/images/doodles
mkdirSync("public/images/doodles", { recursive: true });
const clean = (s) =>
  s
    .replace(/\\"/g, '"')
    .replace(/%22/g, '"')
    .replace(/%20/g, " ")
    .replace(/%3C/gi, "<")
    .replace(/%3E/gi, ">")
    .replace(/%23/g, "#");
const doodleMap = {
  "inline-9": "card-circle.svg", // 194x100 dashed circle, left card top
  "inline-10": "card-squiggle.svg", // 270x166 squiggle, left card bottom (variant A)
  "inline-12": "orange-line-a.svg", // 388x155 orange card line 1
  "inline-13": "orange-line-b.svg", // 388x155 orange card line 2
  "inline-14": "lime-line.svg", // 422x284 lime card lines
};
for (const [src, out] of Object.entries(doodleMap)) {
  const svg = clean(readFileSync(`docs/research/raw/svg/${src}.svg`, "utf8"));
  writeFileSync(`public/images/doodles/${out}`, svg);
  const vb = (svg.match(/viewBox="([^"]+)"/) || [])[1];
  console.log(`${out}: viewBox=${vb} ${svg.length}B`);
}

// also lime second variant: inline-14 was 463B; check inline-11 (3777B variant of squiggle)
const alt = clean(readFileSync("docs/research/raw/svg/inline-11.svg", "utf8"));
writeFileSync("public/images/doodles/card-squiggle-b.svg", alt);
console.log(`card-squiggle-b.svg: viewBox=${(alt.match(/viewBox="([^"]+)"/) || [])[1]} ${alt.length}B`);

// 3. social mask svgs to public/images/icons
mkdirSync("public/images/icons", { recursive: true });
const socialMap = { "mask-0": "dribbble.svg", "mask-1": "twitter.svg", "mask-2": "instagram.svg", "mask-3": "youtube.svg" };
for (const [src, out] of Object.entries(socialMap)) {
  const svg = clean(readFileSync(`docs/research/raw/svg/${src}.svg`, "utf8"));
  writeFileSync(`public/images/icons/${out}`, svg);
  console.log(`${out}: ${svg.length}B  ${svg.slice(0, 100).replace(/\s+/g, " ")}`);
}
