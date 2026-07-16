// Saves the server-rendered HTML and linked CSS of the target site for offline reference.
import { mkdir, writeFile } from "node:fs/promises";

const SITE = "https://sawad.framer.website/";
await mkdir("docs/research/raw", { recursive: true });

const html = await (await fetch(SITE)).text();
await writeFile("docs/research/raw/index.html", html);
console.log(`html: ${(html.length / 1024).toFixed(0)} KB`);

const cssLinks = [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g)].map((m) => m[1]);
let i = 0;
for (const href of cssLinks) {
  const url = new URL(href, SITE).href;
  const css = await (await fetch(url)).text();
  await writeFile(`docs/research/raw/style-${i}.css`, `/* ${url} */\n` + css);
  console.log(`css[${i}]: ${(css.length / 1024).toFixed(0)} KB  ${url}`);
  i++;
}
console.log("done");
