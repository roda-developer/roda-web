// Uso: node scripts/favicon.mjs → public/favicon-32.png, apple-touch-icon.png (180) y favicon-512.png
// El ícono es "Ro": la R del logo y la o como anillo rosa, sobre negro. A 16 px sigue leyéndose.
import { chromium } from '@playwright/test';
import { readFileSync } from 'node:fs';

const fuente = 'data:font/woff2;base64,' + readFileSync('node_modules/@fontsource-variable/inter-tight/files/inter-tight-latin-wght-normal.woff2').toString('base64');
const icono = (t, redondeo) => `
  <div style="width:${t}px;height:${t}px;border-radius:${redondeo ? t * 0.22 : 0}px;background:#0a0a0a;display:grid;place-items:center;color:#f3f2ee;font-family:'Inter Tight';font-weight:500;line-height:1">
    <span style="display:inline-flex;align-items:baseline;font-size:${t * 0.62}px;letter-spacing:-0.01em;transform:translateY(-3%)">R<i style="display:inline-block;width:.5em;height:.5em;margin-left:.04em;border:${Math.max(1.2, t * 0.62 * 0.0714)}px solid #ff6fd8;border-radius:50%"></i></span>
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
