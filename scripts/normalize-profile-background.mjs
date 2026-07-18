import sharp from "sharp";

const [inputPath, outputPath] = process.argv.slice(2);

if (!inputPath || !outputPath) {
  throw new Error("Usage: node scripts/normalize-profile-background.mjs <input> <output>");
}

const target = { red: 79, green: 70, blue: 229 };
const { data, info } = await sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const pixelCount = info.width * info.height;
const background = new Uint8Array(pixelCount);
const queued = new Uint8Array(pixelCount);
const queue = new Int32Array(pixelCount);
let queueStart = 0;
let queueEnd = 0;

function isIndigoPixel(pixelIndex) {
  const offset = pixelIndex * 4;
  const red = data[offset];
  const green = data[offset + 1];
  const blue = data[offset + 2];
  const strongestNonBlue = Math.max(red, green);

  return blue >= 105 && blue - strongestNonBlue >= 24;
}

function enqueue(pixelIndex) {
  if (queued[pixelIndex] || !isIndigoPixel(pixelIndex)) return;

  queued[pixelIndex] = 1;
  queue[queueEnd++] = pixelIndex;
}

for (let x = 0; x < info.width; x += 1) {
  enqueue(x);
  enqueue((info.height - 1) * info.width + x);
}

for (let y = 0; y < info.height; y += 1) {
  enqueue(y * info.width);
  enqueue(y * info.width + info.width - 1);
}

while (queueStart < queueEnd) {
  const pixelIndex = queue[queueStart++];
  background[pixelIndex] = 1;

  const x = pixelIndex % info.width;
  const y = Math.floor(pixelIndex / info.width);

  if (x > 0) enqueue(pixelIndex - 1);
  if (x + 1 < info.width) enqueue(pixelIndex + 1);
  if (y > 0) enqueue(pixelIndex - info.width);
  if (y + 1 < info.height) enqueue(pixelIndex + info.width);
}

let replacedPixels = 0;

for (let pixelIndex = 0; pixelIndex < pixelCount; pixelIndex += 1) {
  if (!background[pixelIndex]) continue;

  const offset = pixelIndex * 4;
  data[offset] = target.red;
  data[offset + 1] = target.green;
  data[offset + 2] = target.blue;
  data[offset + 3] = 255;
  replacedPixels += 1;
}

const targetAspect = 240 / 284;
const cropWidth = Math.floor(info.width * 0.84);
const cropHeight = Math.floor(cropWidth / targetAspect);
const cropLeft = Math.floor((info.width - cropWidth) / 2);
const cropTop = Math.min(
  info.height - cropHeight,
  Math.floor(info.height * 0.27),
);

await sharp(data, {
  raw: {
    width: info.width,
    height: info.height,
    channels: 4,
  },
})
  .extract({
    left: cropLeft,
    top: cropTop,
    width: cropWidth,
    height: cropHeight,
  })
  .resize(960, 1136)
  .webp({ lossless: true, effort: 6 })
  .toFile(outputPath);

console.log(
  JSON.stringify({
    input: inputPath,
    output: outputPath,
    replacedPixels,
    coverage: Number((replacedPixels / pixelCount).toFixed(4)),
  }),
);
