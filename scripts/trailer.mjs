// Uso: node scripts/trailer.mjs [estilo] → shots/t-*.png con cuadros del tráiler final (mobile)
import { chromium } from '@playwright/test';

const estilo = Number(process.argv[2] ?? 0.9);
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.addInitScript((e) => {
  sessionStorage.setItem('roda:saltar-loader', '1');
  sessionStorage.setItem('roda:respuestas', JSON.stringify({ rubro: 'gastronomia', estilo: e, situacion: 'no-representa', objetivo: 'reserve' }));
}, estilo);
await page.goto('http://localhost:5201');
await page.waitForFunction(() => document.querySelectorAll('astro-island[ssr]').length === 0);
await page.evaluate(() => document.querySelector('.pantalla').scrollIntoView({ block: 'center' }));
for (const [i, ms] of [[0, 600], [1, 1500], [2, 1500], [3, 1500], [4, 1600], [5, 2600]]) {
  await page.waitForTimeout(ms);
  await page.screenshot({ path: `shots/t-${i}.png` });
}
await page.evaluate(() => window.scrollBy(0, 700));
await page.waitForTimeout(1200);
await page.screenshot({ path: `shots/t-6.png` });
await browser.close();
