import sharp from "sharp";
import { readFile } from "node:fs/promises";

const svg = await readFile("public/favicon.svg");
await sharp(svg).resize(32, 32).png().toFile("public/favicon-32x32.png");
await sharp(svg).resize(180, 180).png().toFile("public/apple-touch-icon.png");
console.log("Favicons generated");