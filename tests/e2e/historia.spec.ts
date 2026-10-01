import { test, expect } from '@playwright/test';

test.use({ reducedMotion: 'reduce' });

/** Espera a que React hidrate todas las islas (Astro saca el atributo ssr). */
async function hidratada(page: import('@playwright/test').Page) {
  await page.waitForFunction(() => document.querySelectorAll('astro-island[ssr]').length === 0);
}

test('la pregunta 1 queda marcada y sobrevive a una recarga', async ({ page }) => {
  await page.goto('/');
  await hidratada(page);
  const grupo = page.getByRole('group', { name: '¿Y la tuya?' });
  const opcion = grupo.getByRole('button', { name: /no me representa/ });
  await opcion.scrollIntoViewIfNeeded();
  await opcion.click();
  await expect(opcion).toHaveAttribute('aria-pressed', 'true');

  await page.reload();
  await hidratada(page);
  await expect(
    page.getByRole('group', { name: '¿Y la tuya?' }).getByRole('button', { name: /no me representa/ }),
  ).toHaveAttribute('aria-pressed', 'true');
});

test('tocar de nuevo una opción la desmarca', async ({ page }) => {
  await page.goto('/');
  await hidratada(page);
  const opcion = page.getByRole('group', { name: '¿Y la tuya?' }).getByRole('button', { name: 'No tengo web' });
  await opcion.scrollIntoViewIfNeeded();
  await opcion.click();
  await opcion.click();
  await expect(opcion).toHaveAttribute('aria-pressed', 'false');
});

test('el acto II tiene la pregunta 2 y muestra el peso real de la página', async ({ page }) => {
  await page.goto('/');
  await hidratada(page);
  const grupo = page.getByRole('group', { name: '¿A dónde querés llevar a tu cliente?' });
  await grupo.scrollIntoViewIfNeeded();
  await grupo.getByRole('button', { name: 'Que reserve' }).click();
  await expect(grupo.getByRole('button', { name: 'Que reserve' })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('[data-peso]')).toHaveText(/\d+ KB/);
});

test('el deslizador cambia el tono de toda la página y se recuerda', async ({ page }) => {
  await page.goto('/');
  await hidratada(page);
  const deslizador = page.getByRole('slider', { name: '¿Tu marca susurra o grita?' });
  await deslizador.scrollIntoViewIfNeeded();
  await deslizador.focus();
  await page.keyboard.press('End');
  await expect(page.locator('html')).toHaveAttribute('data-tono', 'grita');
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--intensidad').trim())).toBe('1');

  await page.keyboard.press('Home');
  await expect(page.locator('html')).toHaveAttribute('data-tono', 'susurra');

  await page.reload();
  await hidratada(page);
  await expect(page.locator('html')).toHaveAttribute('data-tono', 'susurra');
});

test('después de elegir "grita", el acto III se cuenta con la tipografía del grito', async ({ page }) => {
  await page.goto('/');
  await hidratada(page);
  const deslizador = page.getByRole('slider', { name: '¿Tu marca susurra o grita?' });
  await deslizador.scrollIntoViewIfNeeded();
  await deslizador.focus();
  await page.keyboard.press('End');
  const paso = page.getByRole('heading', { name: 'Guion', exact: true });
  await paso.scrollIntoViewIfNeeded();
  expect(await paso.evaluate((el) => getComputedStyle(el).fontFamily)).toContain('Bricolage');
  await expect(page.getByText('a los gritos')).toBeVisible();
});

test('la sección para creativos vive en proyectos y habla de trabajar al píxel', async ({ page }) => {
  await page.goto('/proyectos');
  await expect(page.getByRole('heading', { name: '¿Diseñás o manejás marcas?' })).toBeAttached();
  await expect(page.getByText('Al píxel.')).toBeAttached();
});

test('en proyectos, elegir rubro trae primero lo cercano y queda para el tráiler', async ({ page }) => {
  await page.goto('/proyectos');
  const grupo = page.getByRole('group', { name: /¿Qué hacés\?/ });
  await grupo.getByRole('button', { name: 'Arte y diseño' }).click();
  await expect(grupo.getByRole('button', { name: 'Arte y diseño' })).toHaveAttribute('aria-pressed', 'true');
  // El primero a la vista (por orden visual) es de arte y diseño
  const primero = await page.$$eval('[data-tira] > li', (els) =>
    els
      .map((e, i) => ({ orden: Number(getComputedStyle(e).order), i, rubro: (e as HTMLElement).dataset.rubro }))
      .sort((a, b) => a.orden - b.orden || a.i - b.i)[0].rubro,
  );
  expect(primero).toBe('arte');
  await expect(page.locator('[data-tira] li[data-rubro="arte"]').getByText('Cerca de lo tuyo').first()).toBeVisible();
  await expect(page.locator('[data-tira] li[data-rubro="moda"]').getByText('Cerca de lo tuyo')).toBeHidden();
  await expect(page.getByRole('status').filter({ hasText: 'Mostrando primero' })).toContainText('arte y diseño');
  expect(await page.evaluate(() => JSON.parse(sessionStorage.getItem('roda:respuestas')!).rubro)).toBe('arte');
});
