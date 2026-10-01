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
  // Se va solo, antes de los 2,5 s
  await expect.poll(() => loader.evaluate((el) => getComputedStyle(el).visibility), { timeout: 3000 }).toBe('hidden');
  expect(await page.evaluate(() => getComputedStyle(document.body).backgroundColor)).toBe('rgb(243, 242, 238)');
});

test('la home cuenta la historia y manda a los proyectos, sin la cartelera', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#cartel')).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'Ver todos los proyectos' })).toHaveAttribute('href', '/proyectos');
  await expect(page.locator('#adelanto a[href^="/proyectos/"]')).toHaveCount(PROYECTOS.length);
});

test('si la marca grita, las capturas del adelanto van en color', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await hidratada(page);
  const foto = page.locator('#adelanto .foto-tono').first();
  expect(await foto.evaluate((el) => getComputedStyle(el).filter)).toContain('grayscale');
  const deslizador = page.getByRole('slider', { name: '¿Tu marca susurra o grita?' });
  await deslizador.scrollIntoViewIfNeeded();
  await deslizador.focus();
  await page.keyboard.press('End');
  await expect.poll(() => foto.evaluate((el) => getComputedStyle(el).filter)).toBe('none');
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
