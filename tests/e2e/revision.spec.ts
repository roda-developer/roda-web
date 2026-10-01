import { test, expect, type Page } from '@playwright/test';

async function hidratada(page: Page) {
  await page.waitForFunction(() => document.querySelectorAll('astro-island[ssr]').length === 0);
}

test('si cambia una respuesta después del tráiler, la pantalla no queda en negro', async ({ page }) => {
  await page.addInitScript(() => {
    sessionStorage.setItem('roda:saltar-loader', '1');
    sessionStorage.setItem('roda:respuestas', JSON.stringify({ rubro: 'moda', estilo: 0.9, situacion: 'sin-web', objetivo: 'compre' }));
  });
  await page.goto('/');
  await hidratada(page);
  await page.waitForSelector('.pantalla');
  await page.evaluate(() => document.querySelector('.pantalla')!.scrollIntoView({ block: 'center' }));
  await page.waitForTimeout(9000); // el tráiler termina
  // Desmarca el objetivo (pregunta 2): la sinopsis pierde una carta
  await page.getByRole('group', { name: '¿A dónde querés llevar a tu cliente?' }).getByRole('button', { name: 'Que compre' }).click();
  await page.evaluate(() => document.querySelector('.pantalla')!.scrollIntoView({ block: 'center' }));
  await expect(page.locator('.pantalla .carta-activa')).toHaveCount(1);
});

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
  for (const nombre of [/Contanos tu historia/, 'Proyectos']) {
    const caja = await page.locator('header').getByRole('link', { name: nombre, exact: typeof nombre === 'string' }).boundingBox();
    expect(caja!.height).toBeGreaterThanOrEqual(44);
  }
});

test('la aclaración "Ejemplo ilustrativo" se lee (tamaño y opacidad suficientes) y existe para lectores', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.addInitScript(() => sessionStorage.setItem('roda:respuestas', JSON.stringify({ estilo: 0.1 })));
  await page.goto('/');
  await hidratada(page);
  const aclaracion = page.locator('.preestreno').getByText('Ejemplo ilustrativo');
  const { tam, op } = await aclaracion.evaluate((el) => ({
    tam: parseFloat(getComputedStyle(el).fontSize),
    op: parseFloat(getComputedStyle(el).opacity),
  }));
  expect(tam).toBeGreaterThanOrEqual(10);
  expect(op).toBeGreaterThanOrEqual(0.75);
  await expect(page.locator('#final .sr-only')).toContainText('ejemplo');
});
