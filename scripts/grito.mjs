// Uso: node scripts/grito.mjs [sufijo] — captura la pantalla de MÁS ES MÁS en tres tamaños
import { chromium } from '@playwright/test';
const suf = process.argv[2] || '';
const browser = await chromium.launch({ channel: 'chrome' });
for (const [w, h] of [[390, 844], [1440, 900], [1920, 1080], [1366, 768]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  await page.goto('http://localhost:5200/');
  await page.waitForTimeout(3600);
  const y = await page.evaluate(() => {
    const p = document.querySelector('[data-puerta]');
    return p.getBoundingClientRect().top + scrollY + p.offsetHeight - innerHeight;
  });
  await page.evaluate((v) => window.scrollTo(0, v), y);
  await page.waitForTimeout(1800);
  await page.screenshot({ path: `shots/grito-${w}${suf}.png` });
  await page.close();
}
await browser.close();
