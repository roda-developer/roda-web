// Uso: node scripts/og.mjs → public/og.png (1200×630), la imagen que se ve al compartir el link
import { chromium } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Las fuentes van embebidas: una página sin origen no puede leer archivos locales
const fuente = (f) => 'data:font/woff2;base64,' + readFileSync(resolve('node_modules', f)).toString('base64');
const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face { font-family: Inter Tight; src: url(${fuente('@fontsource-variable/inter-tight/files/inter-tight-latin-wght-normal.woff2')}); font-weight: 100 900; }
  @font-face { font-family: Big Shoulders; src: url(${fuente('@fontsource-variable/big-shoulders-display/files/big-shoulders-display-latin-wght-normal.woff2')}); font-weight: 100 900; }
  * { margin: 0; box-sizing: border-box; }
  body { position: relative; width: 1200px; height: 630px; overflow: hidden; background: #f3f2ee; color: #121212; font-family: Inter Tight; }
  .frase { position: absolute; left: 48px; top: 44px; font-size: 46px; font-weight: 500; line-height: 1.08; letter-spacing: -0.02em; }
  /* R○DA de borde a borde y apoyada abajo, como la primera pantalla de la web */
  .palabra { position: absolute; left: 40px; right: 40px; bottom: 0; display: flex; justify-content: space-between; align-items: baseline; font-family: Big Shoulders; font-weight: 800; font-size: 500px; line-height: 0.74; }
  .o { display: inline-block; width: 0.74em; height: 0.74em; border: 0.13em solid currentColor; border-radius: 50%; }
</style></head><body>
  <p class="frase">Diseñamos y programamos<br>webs a medida.</p>
  <div class="palabra"><span>R</span><span class="o"></span><span>D</span><span>A</span></div>
</body></html>`;

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'public/og.png' });
await browser.close();
console.log('public/og.png listo');
