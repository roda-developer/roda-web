// Los retratos de Nosotros: Giuli y Facu (recortados de la foto juntos) pasados a píxeles, como el video de Estudio
// (cuadraditos de tinta sobre papel: cuanto más oscuro, más grande; algún rosa suelto).
// Uso: node scripts/pixelar-retratos.mjs  →  escribe src/assets/nosotros/<nombre>-pix.png
import path from 'node:path';
import sharp from 'sharp';

const LADO = 100, CELDA = 9;
const PAPEL = '#f3f2ee', TINTA = '#121212', ROSA = '#ff6fd8';
const fuente = path.resolve('src/assets/nosotros/juntos.jpg');
// Un cuadrado centrado en la cara de cada uno (en píxeles de juntos.jpg)
const RETRATOS = { giuli: { left: 956, top: 1263, width: 1000, height: 1000 }, facu: { left: 483, top: 680, width: 960, height: 960 } };

const hash = (a, b) => { let h = (a * 374761393 + b * 668265263) | 0; h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };

for (const [nombre, recorte] of Object.entries(RETRATOS)) {
  // Primero el recorte y después la reducción, en dos pasos: así es exactamente el mismo cuadro que se ve al recortar
  const cara = await sharp(fuente).extract(recorte).jpeg({ quality: 95 }).toBuffer();
  const { data } = await sharp(cara).resize(LADO, LADO).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const luces = [];
  for (let i = 0; i < data.length; i += 3) luces.push((0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]) / 255);
  // Cada foto se estira entre sus tonos 3 % y 97 %, así la cara se lee aunque la foto sea pareja
  const orden = [...luces].sort((a, b) => a - b), bajo = orden[Math.floor(orden.length * 0.03)], alto = orden[Math.floor(orden.length * 0.97)];
  const cuadros = [];
  for (let y = 0; y < LADO; y++) for (let x = 0; x < LADO; x++) {
    const luz = Math.min(1, Math.max(0, (luces[y * LADO + x] - bajo) / (alto - bajo)));
    const peso = (1 - luz) ** 1.4;
    if (peso < 0.08) continue;
    const lado = CELDA * Math.min(0.92, 0.12 + 0.85 * peso);
    const p = (v) => v.toFixed(1);
    cuadros.push(`<rect x="${p(x * CELDA + (CELDA - lado) / 2)}" y="${p(y * CELDA + (CELDA - lado) / 2)}" width="${p(lado)}" height="${p(lado)}" fill="${hash(x, y) < 0.012 ? ROSA : TINTA}"/>`);
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${LADO * CELDA}" height="${LADO * CELDA}"><rect width="100%" height="100%" fill="${PAPEL}"/>${cuadros.join('')}</svg>`;
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: true }).toFile(path.resolve(`src/assets/nosotros/${nombre}-pix.png`));
  console.log(nombre);
}
