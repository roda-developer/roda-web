import { test, expect, type Page } from '@playwright/test';

test.use({ reducedMotion: 'reduce' });

async function hidratada(page: Page) {
  await page.waitForFunction(() => document.querySelectorAll('astro-island[ssr]').length === 0);
}

async function conRespuestas(page: Page, respuestas: object) {
  await page.addInitScript((r) => sessionStorage.setItem('roda:respuestas', JSON.stringify(r)), respuestas);
}

test('sin respuestas, el final invita a contar la historia sin huecos', async ({ page }) => {
  await page.goto('/');
  await hidratada(page);
  const final = page.locator('#final');
  await final.scrollIntoViewIfNeeded();
  await expect(final.getByRole('heading', { name: '¿Cuál es tu historia?' })).toBeVisible();
  const href = await final.getByRole('link', { name: 'Contanos' }).getAttribute('href');
  expect(href).toContain('https://wa.me/');
  expect(decodeURIComponent(href!)).toContain('quiero contarles mi historia');
  await expect(final).not.toContainText(/undefined|null/);
});

test('con las cuatro respuestas, el final cuenta su historia y la manda por WhatsApp', async ({ page }) => {
  await conRespuestas(page, { rubro: 'gastronomia', estilo: 0.9, situacion: 'no-representa', objetivo: 'reserve' });
  await page.goto('/');
  await hidratada(page);
  const final = page.locator('#final');
  await final.scrollIntoViewIfNeeded();
  const sinopsis = 'Una marca de gastronomía que grita, que hoy tiene web pero no la representa, y necesita que sus clientes reserven.';
  await expect(final.getByText(sinopsis)).toBeVisible();
  await expect(final.getByText('Reservá tu lugar', { exact: true })).toBeVisible();
  const href = await final.getByRole('link', { name: 'Sí, hablemos' }).getAttribute('href');
  expect(decodeURIComponent(href!)).toContain(sinopsis);
  const mail = await final.getByRole('link', { name: /hola@/ }).getAttribute('href');
  expect(mail).toMatch(/^mailto:/);
});

test('con respuestas parciales, la sinopsis sigue siendo una frase completa', async ({ page }) => {
  await conRespuestas(page, { rubro: 'moda', objetivo: 'compre' });
  await page.goto('/');
  await hidratada(page);
  await page.locator('#final').scrollIntoViewIfNeeded();
  await expect(page.locator('#final').getByText('Una marca de moda que necesita que sus clientes compren.')).toBeVisible();
});

test('los créditos nombran a Giuliana y Facundo y hay escena post-créditos', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('contentinfo').getByText('Giuliana y Facundo.')).toBeAttached();
  await expect(page.getByText(/nos gustan los buenos finales/)).toBeAttached();
});
