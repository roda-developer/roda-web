// Uso: node scripts/hoja.mjs m|d [desde] [hasta] → shots/hoja-<m|d>.png con las capturas en grilla
import { chromium } from '@playwright/test';
import { readdirSync, readFileSync } from 'node:fs';

const tipo = process.argv[2] || 'm';
const desde = Number(process.argv[3] || 0);
const hasta = Number(process.argv[4] || 99);
const archivos = readdirSync('shots')
  .filter((f) => f.startsWith(`${tipo}-`))
  .sort()
  .filter((f) => {
    const n = Number(f.slice(2, 4));
    return n >= desde && n <= hasta;
  });
const ancho = tipo === 'm' ? 260 : 480;
const imgs = archivos
  .map((f) => `<figure><img src="data:image/png;base64,${readFileSync(`shots/${f}`).toString('base64')}"><figcaption>${f}</figcaption></figure>`)
  .join('');
const html = `<body style="margin:0;background:#333;display:flex;flex-wrap:wrap;gap:8px;padding:8px;font:12px sans-serif;color:#fff">
<style>figure{margin:0;width:${ancho}px}img{width:100%;display:block}</style>${imgs}</body>`;

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: tipo === 'm' ? 1100 : 1470, height: 400 } });
await page.setContent(html);
await page.screenshot({ path: `shots/hoja-${tipo}.png`, fullPage: true });
await browser.close();
console.log('hoja', archivos.length);
