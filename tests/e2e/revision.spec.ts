import { test, expect, type Page } from '@playwright/test';

async function hidratada(page: Page) {
  await page.waitForFunction(() => document.querySelectorAll('astro-island[ssr]').length === 0);
}

test('el loader no intercepta toques y se va solo a los 4 s', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(600);
  const alCentro = await page.evaluate(() => {
    const el = document.elementFromPoint(innerWidth / 2, innerHeight / 2);
    return el?.closest('.loader') ? 'loader' : 'pagina';
  });
  expect(alCentro).toBe('pagina');
  await page.waitForTimeout(3700);
  const loaderVisible = await page.evaluate(() => {
    const l = document.querySelector('.loader');
    return l ? getComputedStyle(l).visibility !== 'hidden' && getComputedStyle(l).display !== 'none' : false;
  });
  expect(loaderVisible).toBe(false);
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
