// Downloads all remote assets from sawad.framer.website into public/
// Usage: node scripts/download-assets.mjs
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SITE = "https://sawad.framer.website/";

const IMAGES = [
  // hero/profile
  { url: "https://framerusercontent.com/images/w2hyXovpoCcfHZkjR4Hmr53RA5o.jpg?width=3456&height=5184", out: "public/images/profile.jpg" },
  // project thumbnails
  { url: "https://framerusercontent.com/images/4mYEXU91rLBNKIW9k6hZh16l7Q.jpeg?width=2400&height=1800", out: "public/images/project-najmai.jpg" },
  { url: "https://framerusercontent.com/images/5Ra4AFZmEJOkMGLAEjkRXt2oqF4.png?width=2400&height=1800", out: "public/images/project-damas.png" },
  { url: "https://framerusercontent.com/images/PhIxX38mhdPQ9JAYHuioKv54qpc.png?width=520&height=540", out: "public/images/project-majd.png" },
  // tool logos
  { url: "https://framerusercontent.com/images/ay9QMj9AVG8gxBjilndTmDdmeQ.png", out: "public/images/tool-framer.png" },
  { url: "https://framerusercontent.com/images/SvTAZZonMqViqF7fP6GK7CWmL84.png", out: "public/images/tool-figma.png" },
  { url: "https://framerusercontent.com/images/U1s9zT0tOtXbjdWvMrIgPFH0TyM.png", out: "public/images/tool-lemonsqueezy.png" },
  { url: "https://framerusercontent.com/images/MViiiLyIvL8tvy7d1XtOsM32o.png", out: "public/images/tool-chatgpt.png" },
  { url: "https://framerusercontent.com/images/iP5FTKjb84EsPLiEwbrAY7NEy44.png", out: "public/images/tool-notion.png" },
  { url: "https://framerusercontent.com/images/MnQFYNLxlgT4EvY2ctcJfHAXZA.png", out: "public/images/tool-nextjs.png" },
  // seo
  { url: "https://framerusercontent.com/images/eVTjd4i7OQQ9C0ht13t6fN1Euo.png", out: "public/seo/favicon.png" },
  { url: "https://framerusercontent.com/images/Drwr8lzIb44BzOEn0nNlsSJ4AWk.png", out: "public/seo/og-image.png" },
];

async function download({ url, out }) {
  const res = await fetch(url, { headers: { referer: SITE } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(path.dirname(out), { recursive: true });
  await writeFile(out, buf);
  console.log(`ok  ${out}  (${(buf.length / 1024).toFixed(0)} KB)`);
}

const failures = [];
for (let i = 0; i < IMAGES.length; i += 4) {
  const batch = IMAGES.slice(i, i + 4);
  const results = await Promise.allSettled(batch.map(download));
  results.forEach((r, j) => {
    if (r.status === "rejected") {
      failures.push(batch[j].url);
      console.error(`FAIL ${batch[j].url}: ${r.reason.message}`);
    }
  });
}
if (failures.length) {
  console.error(`\n${failures.length} downloads failed`);
  process.exit(1);
}
console.log("\nAll assets downloaded.");
