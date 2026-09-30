import { test, expect } from '@playwright/test';

async function recorrer(page: import('@playwright/test').Page) {
  const alto = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y <= alto; y += 600) {
    await page.evaluate((v) => window.scrollTo(0, v), y);
    await page.waitForTimeout(40);
  }
}

test('con reduced-motion todo el contenido queda visible', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await recorrer(page);
  const ocultos = await page.$$eval('[data-revelar]', (els) =>
    els.filter((e) => Number(getComputedStyle(e).opacity) < 0.99).length,
  );
  expect(await page.locator('[data-revelar]').count()).toBeGreaterThan(5);
  expect(ocultos).toBe(0);
});

test('si el JavaScript no carga, el contenido aparece igual', async ({ page }) => {
  await page.route(/\.js$/, (r) => r.abort());
  await page.goto('/');
  await page.waitForTimeout(4500);
  const ocultos = await page.$$eval('[data-revelar]', (els) =>
    els.filter((e) => Number(getComputedStyle(e).opacity) < 0.99).length,
  );
  expect(ocultos).toBe(0);
});
