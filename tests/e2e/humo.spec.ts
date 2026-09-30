import { test, expect } from '@playwright/test';

test('la página carga con la marca Roda', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Roda/);
  await expect(page.locator('main')).toBeVisible();
});
