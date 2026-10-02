import { test, expect, type Page } from '@playwright/test';

async function hidratada(page: Page) {
  await page.waitForFunction(() => document.querySelectorAll('astro-island[ssr]').length === 0);
}

test('el loader bloquea el scroll mientras está, un toque lo saltea, y se va solo a los 3 s', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(400);
  expect(await page.evaluate(() => document.documentElement.classList.contains('bloquear-scroll'))).toBe(true);
  await page.waitForTimeout(3200);
  const loaderVisible = await page.evaluate(() => {
    const l = document.querySelector('.loader');
    return l ? getComputedStyle(l).visibility !== 'hidden' && getComputedStyle(l).display !== 'none' : false;
  });
  expect(loaderVisible).toBe(false);
  expect(await page.evaluate(() => document.documentElement.classList.contains('bloquear-scroll'))).toBe(false);
});

test('tocar durante el loader lo saltea y libera el scroll', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(400);
  await page.mouse.click(200, 200);
  await page.waitForTimeout(700);
  expect(await page.evaluate(() => document.documentElement.classList.contains('loader-salteado'))).toBe(true);
  expect(await page.evaluate(() => document.documentElement.classList.contains('bloquear-scroll'))).toBe(false);
});

test('la tira de proyectos no es una región viva; se anuncia una sola línea', async ({ page }) => {
  await page.goto('/proyectos');
  await expect(page.locator('[data-tira]')).not.toHaveAttribute('aria-live', /.*/);
  await page.getByRole('button', { name: 'Moda' }).click();
  await expect(page.getByRole('status').filter({ hasText: 'Mostrando primero' })).toContainText('moda');
});

test('los links del nav miden al menos 44 px de alto', async ({ page }) => {
  await page.goto('/');
  for (const nombre of [/Hablemos/, 'Proyectos']) {
    const caja = await page.locator('header').getByRole('link', { name: nombre, exact: typeof nombre === 'string' }).boundingBox();
    expect(caja!.height).toBeGreaterThanOrEqual(44);
  }
});
