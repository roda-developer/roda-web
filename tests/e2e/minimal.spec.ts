import { test, expect, type Page } from '@playwright/test';
import { PROYECTOS } from '../../src/content/proyectos';

async function hidratada(page: Page) {
  await page.waitForFunction(() => document.querySelectorAll('astro-island[ssr]').length === 0);
}

test('el loader escribe la frase sobre negro y deja la página en papel', async ({ page }) => {
  await page.goto('/');
  const loader = page.locator('.loader');
  expect(await loader.evaluate((el) => getComputedStyle(el).backgroundColor)).toBe('rgb(10, 10, 10)');
  // Máquina de escribir: avanza de a una letra, tantos pasos como letras tiene la frase
  const frase = page.locator('.loader-frase');
  const { nombre, pasos, letras } = await frase.evaluate((el) => ({
    nombre: getComputedStyle(el).animationName,
    pasos: getComputedStyle(el).animationTimingFunction,
    letras: el.textContent!.length,
  }));
  expect(nombre).toBe('escribe');
  expect(pasos).toContain(`steps(${letras}`);
  // Se va solo, a los 4 s más o menos
  await expect.poll(() => loader.evaluate((el) => getComputedStyle(el).visibility), { timeout: 5500 }).toBe('hidden');
  expect(await page.evaluate(() => getComputedStyle(document.body).backgroundColor)).toBe('rgb(243, 242, 238)');
});

test('la home cuenta la historia y manda a los proyectos, sin la cartelera', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#cartel')).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'Ver todos los proyectos' })).toHaveAttribute('href', '/proyectos');
  await expect(page.locator('#adelanto a[href^="/proyectos/"]')).toHaveCount(PROYECTOS.length);
});

test('en cartel tiene fondo rosa y las capturas van en color, sin filtro', async ({ page }) => {
  await page.goto('/');
  expect(await page.locator('#adelanto').evaluate((el) => getComputedStyle(el).backgroundColor)).toBe('rgb(255, 111, 216)');
  const filtros = await page.locator('[data-tira] img').evaluateAll((imgs) => imgs.map((i) => getComputedStyle(i).filter));
  expect(filtros.every((f) => f === 'none')).toBe(true);
});

for (const p of PROYECTOS) {
  test(`el caso de ${p.titulo} carga con sus capturas y su botón a la web`, async ({ page }) => {
    await page.goto(`/proyectos/${p.slug}`);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(p.titulo);
    await expect(page).toHaveTitle(new RegExp(p.titulo));
    await expect(page.getByRole('link', { name: /Ver en vivo/ })).toHaveAttribute('href', p.url);
    // La dirección nunca se muestra escrita
    await expect(page.locator('main')).not.toContainText(new URL(p.url).hostname);
    const portada = page.getByRole('img', { name: `Portada de la web de ${p.titulo}` });
    await expect(portada).toBeVisible();
    expect(await portada.evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
    await expect(page.getByRole('link', { name: /Siguiente proyecto/ })).toBeAttached();
  });
}

test('el loader sale al recargar, pero no al volver desde otra página de Roda', async ({ page }) => {
  const visible = () => page.locator('.loader').evaluate((el) => getComputedStyle(el).display !== 'none');
  await page.goto('/');
  expect(await visible()).toBe(true);
  await page.reload();
  expect(await visible()).toBe(true);
  await page.goto('/proyectos');
  await page.getByRole('link', { name: 'Roda, volver al inicio' }).click();
  await page.waitForURL((u) => u.pathname === '/');
  expect(await visible()).toBe(false);
});

test('el menú se lee en tinta y pasa a papel sobre la pantalla del tráiler', async ({ page }) => {
  await page.addInitScript(() => {
    sessionStorage.setItem('roda:saltar-loader', '1');
    sessionStorage.setItem('roda:respuestas', JSON.stringify({ rubro: 'moda' }));
  });
  await page.goto('/');
  await hidratada(page);
  const color = () => page.locator('header.nav').evaluate((el) => getComputedStyle(el).color);
  expect(await color()).toBe('rgb(18, 18, 18)');
  await page.locator('.pantalla').evaluate((el) => scrollTo(0, el.getBoundingClientRect().top + scrollY - 20));
  await expect.poll(color).toBe('rgb(243, 242, 238)');
});
