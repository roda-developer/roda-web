import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => sessionStorage.setItem('roda:saltar-loader', '1'));
});

test('la cartelera muestra los tres planes y cada uno lleva a su carpeta en precios', async ({ page }) => {
  await page.goto('/');
  const cartelera = page.locator('#cartelera');
  await expect(cartelera.getByRole('heading', { level: 2 })).toContainText('En cartelera.');
  for (const [nombre, id] of [['La Landing', 'landing'], ['La Multisección', 'multiseccion'], ['La Tienda', 'tienda']]) {
    await expect(cartelera.getByRole('link', { name: new RegExp(nombre) })).toHaveAttribute('href', `/precios#${id}`);
  }
});

test('Nosotros es una página aparte, con la foto, los créditos y contacto', async ({ page }) => {
  await page.goto('/');
  const menuBoton = page.getByRole('button', { name: /menú/i });
  if (await menuBoton.isVisible()) await menuBoton.click();
  await page.getByRole('navigation', { name: 'Principal' }).getByRole('link', { name: 'Nosotros' }).click();
  await page.waitForURL('**/nosotros');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Nosotros');
  await expect(page.getByRole('img', { name: /Giuliana y Facundo/ }).first()).toBeVisible();
  await expect(page.getByText(/Ninguna web fue hecha con plantillas/)).toBeAttached();
  await expect(page.getByRole('link', { name: /Hablemos/ }).last()).toHaveAttribute('href', /\/contacto/);
  await expect(page.locator('main')).not.toContainText(/undefined|null/);
});
