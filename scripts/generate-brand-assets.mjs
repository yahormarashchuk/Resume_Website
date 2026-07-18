/*
 * Generates tool logos and project thumbnails for the personalized site.
 * Tool logos: colored brand SVGs from cdn.simpleicons.org rasterized to PNG.
 * Project thumbs: locally-authored SVG cards rasterized to PNG (no fake screenshots).
 * Run: node scripts/generate-brand-assets.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const OUT = "public/images";
mkdirSync(OUT, { recursive: true });

const LOGOS = [
  { slug: "dotnet", color: "512BD4", file: "tool-dotnet.png" },
  { slug: "blazor", color: "512BD4", file: "tool-blazor.png" },
  { slug: "postgresql", color: "4169E1", file: "tool-postgresql.png" },
  { slug: "redis", color: "FF4438", file: "tool-redis.png" },
  { slug: "docker", color: "2496ED", file: "tool-docker.png" },
  { slug: "rabbitmq", color: "FF6600", file: "tool-rabbitmq.png" },
  { slug: "typescript", color: "3178C6", file: "tool-typescript.png" },
  { slug: "elasticsearch", color: "005571", file: "tool-elasticsearch.png" },
  { slug: "kubernetes", color: "326CE5", file: "tool-kubernetes.png" },
  { slug: "git", color: "F05032", file: "tool-git.png" },
  // C# and Azure are not on Simple Icons (Microsoft brands) — pull from devicon
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
    file: "tool-csharp.png",
  },
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
    file: "tool-azure.png",
  },
];

for (const { slug, color, url, file } of LOGOS) {
  const res = await fetch(url ?? `https://cdn.simpleicons.org/${slug}/${color}`);
  if (!res.ok) {
    console.error(`FAILED ${slug}: HTTP ${res.status}`);
    continue;
  }
  const svg = Buffer.from(await res.arrayBuffer());
  // Pad the glyph inside a transparent 120px canvas
  const png = await sharp(svg, { density: 300 })
    .resize(96, 96, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: 12, bottom: 12, left: 12, right: 12, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  writeFileSync(`${OUT}/${file}`, png);
  console.log(`OK ${file} (${png.length} bytes)`);
}

const THUMBS = [
  {
    file: "project-fitness-saas.png",
    bg: "#EB5428",
    fg: "#FFFCF6",
    label: "SaaS",
    title: "FITNESS",
  },
  {
    file: "project-sepa-pos.png",
    bg: "#C5DE58",
    fg: "#151312",
    label: "SEPA",
    title: "BILLING",
  },
  {
    file: "project-b2b-commerce.png",
    bg: "#FFFCF6",
    fg: "#151312",
    label: "B2B",
    title: "COMMERCE",
  },
];

for (const { file, bg, fg, label, title } of THUMBS) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="520" height="540" viewBox="0 0 520 540">
  <rect width="520" height="540" fill="${bg}"/>
  <circle cx="430" cy="90" r="140" fill="${fg}" opacity="0.08"/>
  <circle cx="60" cy="480" r="180" fill="${fg}" opacity="0.08"/>
  <text x="48" y="270" font-family="Arial, Helvetica, sans-serif" font-size="96" font-weight="bold" fill="${fg}">${label}</text>
  <text x="48" y="350" font-family="Arial, Helvetica, sans-serif" font-size="48" font-weight="bold" fill="${fg}" opacity="0.55">${title}</text>
</svg>`;
  const png = await sharp(Buffer.from(svg), { density: 150 }).resize(520, 540).png().toBuffer();
  writeFileSync(`${OUT}/${file}`, png);
  console.log(`OK ${file} (${png.length} bytes)`);
}
