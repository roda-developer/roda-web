// Uso: node scripts/og.mjs → public/og.png (1200×630), la imagen que se ve al compartir el link
import { chromium } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Las fuentes van embebidas: una página sin origen no puede leer archivos locales
const fuente = (f) => 'data:font/woff2;base64,' + readFileSync(resolve('node_modules', f)).toString('base64');
const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face { font-family: Inter Tight; src: url(${fuente('@fontsource-variable/inter-tight/files/inter-tight-latin-wght-normal.woff2')}); font-weight: 100 900; }
  @font-face { font-family: Inter Tight; font-style: italic; src: url(${fuente('@fontsource-variable/inter-tight/files/inter-tight-latin-wght-italic.woff2')}); font-weight: 100 900; }
  @font-face { font-family: Plex; src: url(${fuente('@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2')}); }
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; background: #f3f2ee; color: #121212; font-family: Inter Tight; padding: 64px 72px; display: grid; grid-template-rows: auto 1fr auto; }
  .marca { font-size: 44px; display: inline-flex; align-items: baseline; letter-spacing: -0.01em; line-height: 1; }
  .o { display: inline-block; width: .5em; height: .5em; margin: 0 .03em; border: .075em solid currentColor; border-radius: 99px; }
  h1 { align-self: center; font-weight: 500; font-size: 112px; line-height: .95; letter-spacing: -0.045em; }
  em { font-style: italic; }
  .pie { display: flex; justify-content: space-between; font-family: Plex; font-size: 20px; letter-spacing: .08em; text-transform: uppercase; color: #6b6862; border-top: 1px solid rgb(18 18 18 / .15); padding-top: 20px; }
</style></head><body>
  <span class="marca">R<span class="o"></span>da</span>
  <h1>Tu marca ya tiene<br>una <em>historia.</em></h1>
  <div class="pie"><span>Webs que cuentan una historia</span><span>Giuliana y Facundo</span></div>
</body></html>`;

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'public/og.png' });
await browser.close();
console.log('public/og.png listo');
