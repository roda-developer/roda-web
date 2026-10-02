import { test, expect, type Page } from '@playwright/test';

async function hidratada(page: Page) {
  await page.waitForFunction(() => document.querySelectorAll('astro-island[ssr]').length === 0);
}

test('el loader bloquea el scroll mientras está, un toque lo saltea, y se va solo a los 3 s', async ({ page }) => {
  // Se registra si el bloqueo llegó a existir: con la suite en paralelo, la carga puede tardar más que el loader mismo
  await page.addInitScript(() => {
    new MutationObserver(() => {
      if (document.documentElement?.classList.contains('bloquear-scroll')) (window as any).__bloqueado = true;
    }).observe(document, { subtree: true, attributes: true, attributeFilter: ['class'] });
  });
  await page.goto('/', { waitUntil: 'commit' });
  await page.waitForFunction(() => (window as any).__bloqueado === true, null, { timeout: 8000 });
  await page.waitForFunction(() => !document.documentElement.classList.contains('bloquear-scroll'), null, { timeout: 8000 });
  // El loader termina de irse con su animación (puede llegar un instante después del desbloqueo)
  await expect.poll(() => page.evaluate(() => {
    const l = document.querySelector('.loader');
    return l ? getComputedStyle(l).visibility !== 'hidden' && getComputedStyle(l).display !== 'none' : false;
  }), { timeout: 5000 }).toBe(false);
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
  await page.waitForFunction(() => !document.documentElement.classList.contains('bloquear-scroll'));
  const menuBoton = page.getByRole('button', { name: 'Abrir menú' });
  const esMovil = await menuBoton.isVisible();
  if (esMovil) await menuBoton.click();
  for (const nombre of [/Hablemos/, /Proyectos/]) {
    const contenedor = esMovil ? page.locator('#menu-movil') : page.locator('header');
    const caja = await contenedor.getByRole('link', { name: nombre }).first().boundingBox();
    expect(caja!.height).toBeGreaterThanOrEqual(44);
  }
});
