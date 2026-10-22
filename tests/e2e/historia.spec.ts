import { test, expect } from '@playwright/test';

test.use({ reducedMotion: 'reduce' });

test('el acto II muestra el peso real de la página', async ({ page }) => {
  await page.goto('/');
  const peso = page.locator('[data-peso]');
  await peso.scrollIntoViewIfNeeded();
  await expect(peso).toHaveText(/\d+ KB/);
});

test('para creativos queda una sola línea en proyectos, que lleva al formulario, y no está en la home', async ({ page }) => {
  await page.goto('/proyectos');
  await expect(page.getByText('¿Diseñás o manejás marcas?')).toBeAttached();
  await expect(page.getByRole('link', { name: /Trabajemos juntos/ })).toHaveAttribute('href', /^\/contacto\?tipo=nose/);
  await page.goto('/');
  await expect(page.getByText('¿Diseñás o manejás marcas?')).toHaveCount(0);
});

test('en proyectos, elegir rubro trae primero lo cercano y lo anuncia', async ({ page }) => {
  await page.goto('/proyectos');
  const grupo = page.getByRole('group', { name: /¿Qué hacés\?/ });
  await grupo.getByRole('button', { name: 'Arte y diseño' }).click();
  await expect(grupo.getByRole('button', { name: 'Arte y diseño' })).toHaveAttribute('aria-pressed', 'true');
  // El primero a la vista (por orden visual) es de arte y diseño
  const primero = await page.$$eval('li[data-rubro][data-orden]', (els) =>
    els
      .map((e, i) => ({ orden: Number(getComputedStyle(e).order), i, rubro: (e as HTMLElement).dataset.rubro }))
      .sort((a, b) => a.orden - b.orden || a.i - b.i)[0].rubro,
  );
  expect(primero).toBe('arte');
  await expect(page.getByRole('status').filter({ hasText: 'Mostrando primero' })).toContainText('arte y diseño');
});
