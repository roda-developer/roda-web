// Uso: node scripts/capturas.mjs [url] [--reducido]
// Capturas por pantalla en mobile (390) y desktop (1440) a shots/.
// Variables: SOLO=m|d, DESDE / HASTA (índice de pantalla).
import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';

const arg = process.argv[2];
const url = arg && !arg.startsWith('--') ? arg : 'http://localhost:5201';
const reducido = process.argv.includes('--reducido');
const desde = Number(process.env.DESDE || 0);
const hasta = Number(process.env.HASTA || Infinity);
mkdirSync('shots', { recursive: true });

const browser = await chromium.launch({ channel: 'chrome' });
const vistas = [['m', { width: 390, height: 844 }], ['d', { width: 1440, height: 900 }]];
for (const [nombre, viewport] of vistas) {
  if (process.env.SOLO && process.env.SOLO !== nombre) continue;
  const page = await browser.newPage({ viewport, reducedMotion: reducido ? 'reduce' : 'no-preference' });
  await page.goto(url);
  await page.waitForTimeout(3600);
  const alto = await page.evaluate(() => document.documentElement.scrollHeight);
  const total = Math.ceil(alto / viewport.height);
  for (let i = 0; i < total; i++) {
    if (i < desde || i > hasta) continue;
    await page.evaluate((v) => window.scrollTo(0, v), i * viewport.height);
    await page.waitForTimeout(1400);
    await page.screenshot({ path: `shots/${nombre}-${String(i).padStart(2, '0')}.png` });
  }
  console.log(nombre, 'pantallas:', total, 'alto:', alto);
  await page.close();
}
await browser.close();
