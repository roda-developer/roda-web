import { test, expect, type Page } from '@playwright/test';

test.use({ reducedMotion: 'reduce' });

async function hidratada(page: Page) {
  await page.waitForFunction(() => document.querySelectorAll('astro-island[ssr]').length === 0);
}

async function alFinal(page: Page) {
  await page.addInitScript(() => sessionStorage.setItem('roda:saltar-loader', '1'));
  await page.goto('/');
  const final = page.locator('#final');
  await final.scrollIntoViewIfNeeded();
  await hidratada(page);
  return final;
}

test('sin nombre, el afiche espera con "Tu marca" y el contacto no deja huecos', async ({ page }) => {
  const final = await alFinal(page);
  await expect(final.getByLabel('¿Cómo se llama tu marca?')).toBeVisible();
  await expect(final.getByRole('img', { name: /Roda presenta Tu marca/ })).toBeVisible();
  const href = await final.getByRole('link', { name: 'Hablemos' }).getAttribute('href');
  expect(href).toContain('https://wa.me/');
  expect(decodeURIComponent(href!)).toContain('quiero contarles mi historia');
  await expect(final).not.toContainText(/undefined|null/);
});

test('al escribir la marca se arma el afiche y viaja en el mensaje', async ({ page }) => {
  await page.addInitScript(() => sessionStorage.setItem('roda:respuestas', JSON.stringify({ rubro: 'moda' })));
  const final = await alFinal(page);
  await final.getByLabel('¿Cómo se llama tu marca?').fill('Panadería La Esquina');
  await expect(final.getByRole('img', { name: /Roda presenta Panadería La Esquina\..*panaderialaesquina\.com/ })).toBeVisible();
  const href = await final.getByRole('link', { name: 'Hablemos' }).getAttribute('href');
  expect(decodeURIComponent(href!)).toBe(
    'https://wa.me/' + href!.split('wa.me/')[1].split('?')[0] + '?text=Hola Roda, soy de Panadería La Esquina. Una marca de moda. Queremos empezar a contar nuestra historia.',
  );
  // La marca se recuerda al recargar
  await page.reload();
  await hidratada(page);
  await expect(page.getByLabel('¿Cómo se llama tu marca?')).toHaveValue('Panadería La Esquina');
});

test('el afiche se descarga como imagen con el nombre de la marca', async ({ page }) => {
  const final = await alFinal(page);
  await final.getByLabel('¿Cómo se llama tu marca?').fill('Lupe');
  const [descarga] = await Promise.all([page.waitForEvent('download'), final.getByRole('button', { name: /Descargar afiche/ }).click()]);
  expect(descarga.suggestedFilename()).toBe('afiche-lupe.png');
});

test('el campo no muestra el recuadro de foco: se marca con un subrayado', async ({ page }) => {
  const final = await alFinal(page);
  const campo = final.getByLabel('¿Cómo se llama tu marca?');
  await campo.focus();
  await page.keyboard.type('L');
  expect(await campo.evaluate((el) => getComputedStyle(el).outlineStyle)).toBe('none');
  expect(await campo.evaluate((el) => getComputedStyle(el).boxShadow)).not.toBe('none');
});

test('los créditos nombran a Giuliana y Facundo y hay escena post-créditos', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('contentinfo').getByText('Giuliana y Facundo.')).toBeAttached();
  await expect(page.getByText(/nos gustan los buenos finales/)).toBeAttached();
});

test('se elige el estilo y el color del afiche, y se recuerdan al recargar', async ({ page }) => {
  const final = await alFinal(page);
  await final.getByRole('radio', { name: 'Cartel' }).click();
  await final.getByRole('radio', { name: 'Azul' }).click();
  await expect(final.getByRole('radio', { name: 'Cartel' })).toHaveAttribute('aria-checked', 'true');
  await expect(final.getByRole('radio', { name: 'Azul' })).toHaveAttribute('aria-checked', 'true');
  await page.reload();
  await hidratada(page);
  await expect(page.getByRole('radio', { name: 'Cartel' })).toHaveAttribute('aria-checked', 'true');
  await expect(page.getByRole('radio', { name: 'Azul' })).toHaveAttribute('aria-checked', 'true');
});
