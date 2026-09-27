import sharp from "sharp";
import { stat } from "node:fs/promises";

const imagens = [
  { arquivo: "alimentos.jpg", largura: 960 },
  { arquivo: "lacosdobem.png", largura: 1200 },
  { arquivo: "leitura.jpg", largura: 800 },
  { arquivo: "logo.png", largura: 540 },
  { arquivo: "voluntarios.jpeg", largura: 1200 }
];

let totalAntes = 0;
let totalDepois = 0;

for (const { arquivo, largura } of imagens) {
  const entrada = new URL(`./imagens/${arquivo}`, import.meta.url);
  const nome = arquivo.replace(/\.[^.]+$/, ".webp");
  const saida = new URL(`./imagens/${nome}`, import.meta.url);

  const original = await stat(entrada);

  const resultado = await sharp(await import("node:fs/promises")
    .then(fs => fs.readFile(entrada)))
    .rotate()
    .resize({ width: largura, withoutEnlargement: true })
    .webp(arquivo === "logo.png" ? { lossless: true } : { quality: 80 })
    .toBuffer();

  const { writeFile } = await import("node:fs/promises");
  await writeFile(saida, resultado);

  totalAntes += original.size;
  totalDepois += resultado.length;

  console.log(
    `${nome}: ${original.size} → ${resultado.length} bytes`
  );
}

const reducao = ((1 - totalDepois / totalAntes) * 100).toFixed(1);
console.log(`Redução total das imagens: ${reducao}%`);