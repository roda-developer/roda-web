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
