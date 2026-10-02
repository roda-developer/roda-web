// Uso: node scripts/favicon.mjs → public/favicon-32.png, apple-touch-icon.png (180) y favicon-512.png
// El ícono es la R del logo, en negro sobre el papel de la web.
import { chromium } from '@playwright/test';
import { readFileSync } from 'node:fs';

const fuente = 'data:font/woff2;base64,' + readFileSync('node_modules/@fontsource-variable/inter-tight/files/inter-tight-latin-wght-normal.woff2').toString('base64');
const icono = (t, redondeo) => `
  <div style="width:${t}px;height:${t}px;border-radius:${redondeo ? t * 0.22 : 0}px;background:#f3f2ee;display:grid;place-items:center;color:#121212;font-family:'Inter Tight';font-weight:500;line-height:1">
    <span style="font-size:${t * 0.72}px;transform:translateY(2%)">R</span>
  </div>`;

// [archivo, tamaño, esquinas redondeadas] — el de Apple va cuadrado: iOS le pone sus propias esquinas
const salidas = [['public/favicon-32.png', 32, true], ['public/apple-touch-icon.png', 180, false], ['public/favicon-512.png', 512, true]];
const b = await chromium.launch({ channel: 'chrome' });
for (const [archivo, t, redondeo] of salidas) {
  const p = await b.newPage({ viewport: { width: t, height: t } });
  await p.setContent(`<style>@font-face{font-family:'Inter Tight';src:url(${fuente});font-weight:100 900}*{margin:0}body{background:transparent}</style>${icono(t, redondeo)}`);
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: archivo, omitBackground: true });
  await p.close();
}
await b.close();
console.log('íconos listos');
