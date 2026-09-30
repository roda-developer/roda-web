import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 60_000,
  use: { baseURL: 'http://localhost:5201', channel: 'chrome' },
  webServer: {
    command: 'npm run build && npm run preview',
    url: 'http://localhost:5201',
    reuseExistingServer: true,
    timeout: 180_000,
  },
  projects: [
    { name: 'mobile', use: { ...devices['Desktop Chrome'], channel: 'chrome', viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: false } },
    { name: 'desktop', use: { ...devices['Desktop Chrome'], channel: 'chrome', viewport: { width: 1440, height: 900 } } },
  ],
});
