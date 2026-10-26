// Las fotos del cierre de la home: cada trabajo pasado a píxeles, con el mismo lenguaje del video de Estudio
// (cuadraditos sobre papel: cuanto más oscuro, más grande; los colores fuertes pasan a la paleta de Roda).
// Uso: node scripts/pixelar-afiches.mjs  →  escribe src/assets/pixeles/<slug>.png
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const COLS = 60, FILAS = 80, CELDA = 15;
const PAPEL = '#f3f2ee', TINTA = '#121212';
const PALETA = [['#ff2e4d', [255, 46, 77]], ['#2b4bff', [43, 75, 255]], ['#ffd400', [255, 212, 0]], ['#ff6fd8', [255, 111, 216]], ['#00c46a', [0, 196, 106]]];
const raiz = path.resolve('src/assets/proyectos');
const salida = path.resolve('src/assets/pixeles');
fs.mkdirSync(salida, { recursive: true });

const hash = (a, b) => { let h = (a * 374761393 + b * 668265263) | 0; h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };
const masCercano = (r, g, b) => PALETA.reduce((mejor, [hex, [pr, pg, pb]]) => {
  const d = (r - pr) ** 2 + (g - pg) ** 2 + (b - pb) ** 2;
  return d < mejor.d ? { hex, d } : mejor;
}, { hex: TINTA, d: Infinity }).hex;

for (const slug of fs.readdirSync(raiz)) {
  const carpeta = path.join(raiz, slug);
  const fuente = ['afiche.jpg', 'portada.jpg'].map((f) => path.join(carpeta, f)).find((f) => fs.existsSync(f));
  if (!fuente) continue;
  const { data } = await sharp(fuente).resize(COLS, FILAS, { fit: 'cover', position: 'centre' }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  // Cada foto tiene su propio rango de luces: se estira entre sus tonos 6 % y 94 %, así una foto oscura pareja no queda toda igual
  const luces = [];
  for (let i = 0; i < data.length; i += 3) luces.push((0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]) / 255);
  const orden = [...luces].sort((a, b) => a - b), bajo = orden[Math.floor(orden.length * 0.06)], alto = orden[Math.floor(orden.length * 0.94)];
  const estirar = (l) => Math.min(1, Math.max(0, (l - bajo) / Math.max(0.05, alto - bajo)));
  const cuadros = [];
  for (let y = 0; y < FILAS; y++) for (let x = 0; x < COLS; x++) {
    const o = (y * COLS + x) * 3, r = data[o], g = data[o + 1], b = data[o + 2];
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const luz = estirar((0.2126 * r + 0.7152 * g + 0.0722 * b) / 255), sat = max ? (max - min) / max : 0;
    const colorido = sat > 0.42 && max > 90;
    const peso = colorido ? 0.55 + 0.4 * sat : 1 - luz;
    if (peso < 0.2) continue;
    // Ni los más oscuros llenan la celda: siempre queda aire entre cuadraditos
    const lado = CELDA * Math.min(0.78, 0.1 + 0.72 * peso ** 1.3);
    const z = hash(x + slug.length * 31, y);
    const color = colorido ? masCercano(r, g, b) : TINTA;
    const px = x * CELDA + (CELDA - lado) / 2, py = y * CELDA + (CELDA - lado) / 2;
    // Algunos claros quedan huecos (solo el borde), como en el video
    cuadros.push(!colorido && peso < 0.42 && z > 0.55
      ? `<rect x="${px + 1}" y="${py + 1}" width="${lado - 2}" height="${lado - 2}" fill="none" stroke="${color}" stroke-width="2.4"/>`
      : `<rect x="${px}" y="${py}" width="${lado}" height="${lado}" fill="${color}"/>`);
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${COLS * CELDA}" height="${FILAS * CELDA}"><rect width="100%" height="100%" fill="${PAPEL}"/>${cuadros.join('')}</svg>`;
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: true }).toFile(path.join(salida, `${slug}.png`));
  console.log(slug, path.basename(fuente));
}
