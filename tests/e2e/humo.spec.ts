import { test, expect, type Page } from '@playwright/test';

// Recorridos de humo: lo que no puede romperse. Se corren contra el build (npm run e2e), en celu y en compu.
// Las webs de clientes quedan afuera: acá se prueba Roda, no las webs de adentro de "Ninguna igual a otra".
const sinWebsDeClientes = async (page: Page) => {
  await page.route(/eber\.ar|craftstudio\.com\.ar|emmedigital\.com\.ar/, (r) => r.fulfill({ status: 200, contentType: 'text/html', body: '<!doctype html><title>web</title>' }));
};
const sinScrollHorizontal = (page: Page) => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth);

test.beforeEach(async ({ page }) => { await sinWebsDeClientes(page); });

test('cada página principal carga, con su título y sin errores', async ({ page }) => {
  const errores: string[] = [];
  page.on('pageerror', (e) => errores.push(e.message));
  for (const ruta of ['/', '/proyectos/', '/proyectos/emme/', '/precios/', '/nosotros/', '/contacto/', '/en/', '/pt/']) {
    await page.goto(ruta);
    await expect(page.locator('h1').first()).toBeAttached();
    await expect(page).toHaveTitle(/Roda/);
    expect(await sinScrollHorizontal(page), ruta).toBe(true);
  }
  expect(errores).toEqual([]);
});

test('home: Trabajos y las tres webs en orden', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#trabajos .tarjeta').first()).toBeAttached();
  await expect(page.locator('[data-marca]')).toHaveText(['Eber', 'Craft Studio', 'Emme Digital']);
});

test('proyectos: están los ocho, y el caso muestra su estudio', async ({ page }) => {
  await page.goto('/proyectos/');
  await expect(page.locator('.obra-link')).toHaveCount(8);
  await page.goto('/proyectos/emme/');
  await expect(page.locator('.estudio')).toBeVisible();
  await expect(page.locator('.afiche-caso img')).toBeVisible();
});

test('contacto: si falta un dato, el aviso queda a la vista y no se envía nada', async ({ page }) => {
  let envios = 0;
  await page.route('**/api.web3forms.com/**', (r) => { envios++; return r.fulfill({ status: 200, contentType: 'application/json', body: '{"success":true}' }); });
  await page.goto('/contacto/');
  await page.locator('[data-enviar]').click();
  await expect(page.locator('[data-falta-campo="tipo"]')).toBeInViewport({ timeout: 5000 });
  expect(envios).toBe(0);
});

test('contacto: con los datos completos, se envía y confirma', async ({ page }) => {
  let envios = 0;
  await page.route('**/api.web3forms.com/**', (r) => { envios++; return r.fulfill({ status: 200, contentType: 'application/json', body: '{"success":true}' }); });
  await page.goto('/contacto/');
  await page.locator('.opcion').first().click();
  await page.fill('#nombre', 'Prueba');
  await page.fill('#contacto', 'prueba@ejemplo.com');
  await page.locator('[data-enviar]').click();
  await expect(page.locator('[data-exito]')).toBeVisible();
  expect(envios).toBe(1);
});

test('precios: el cambio a pesos responde', async ({ page }) => {
  await page.route(/dolarapi\.com/, (r) => r.fulfill({ status: 200, contentType: 'application/json', body: '{"venta":1000,"fechaActualizacion":"2026-01-01T00:00:00Z"}' }));
  await page.goto('/precios/');
  await expect(page.getByText('300').first()).toBeVisible();
  await page.locator('[role=switch], input[type=checkbox]').first().click({ force: true });
  await expect(page.getByText('300.000').first()).toBeVisible();
});
