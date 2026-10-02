import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => sessionStorage.setItem('roda:saltar-loader', '1'));
});

test('la cartelera muestra cinco películas y cada una lleva a su precio', async ({ page }) => {
  await page.goto('/');
  const cartelera = page.locator('#cartelera');
  await expect(cartelera.getByRole('heading', { level: 2 })).toContainText('En cartelera.');
  const afiches = cartelera.getByRole('link');
  await expect(afiches).toHaveCount(5);
  for (const nombre of ['El Portfolio', 'La Agenda', 'La Tienda', 'La Landing', 'El Panel']) {
    await expect(cartelera.getByRole('link', { name: new RegExp(nombre) })).toHaveAttribute('href', '#planes');
  }
});

test('la cartelera va antes de los precios y los rótulos siguen en orden', async ({ page }) => {
  await page.goto('/');
  const rotulos = await page.locator('main [data-revelar] span[aria-hidden="true"], main p.mono > span[aria-hidden="true"]').allTextContents();
  const numeros = rotulos.map((t) => t.replace(/[()]/g, '')).filter((t) => /^\d\d$/.test(t));
  expect(numeros).toEqual([...numeros].sort());
  const yCartelera = await page.locator('#cartelera').evaluate((el) => el.getBoundingClientRect().top + scrollY);
  const yPlanes = await page.locator('#planes').evaluate((el) => el.getBoundingClientRect().top + scrollY);
  expect(yCartelera).toBeLessThan(yPlanes);
});

test('Nosotros es una página aparte, con la foto, los créditos y contacto', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('navigation', { name: 'Principal' }).getByRole('link', { name: 'Nosotros' }).click();
  await page.waitForURL('**/nosotros');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Roda presenta. Una Misma Mirada. Protagonizada por Giuliana Di Rocco Facundo Thibaut');
  await expect(page.getByText('Giuliana Di Rocco.')).toBeVisible();
  await expect(page.getByRole('img', { name: /techo de luces doradas/ })).toBeVisible();
  await expect(page.getByText(/Ninguna web fue hecha con plantillas/)).toBeVisible();
  await expect(page.getByRole('link', { name: /Hablemos/ }).last()).toHaveAttribute('href', /wa\.me/);
  await expect(page.locator('main')).not.toContainText(/undefined|null/);
});
