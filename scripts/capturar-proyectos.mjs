// Uso: node scripts/capturar-proyectos.mjs [slug]
// Saca capturas de las webs publicadas de cada proyecto a src/assets/proyectos/<slug>/.
// Desktop: portada + dos pantallas más abajo. Mobile: portada.
import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';

const WEBS = {
  muda: 'https://mudaagcy.com',
  emme: 'https://www.emmedigital.com.ar',
  eber: 'https://eber-portfolio.vercel.app',
  craft: 'https://craftstudio.com.ar',
  fidalgo: 'https://fidalgoselect.com',
  unik: 'https://unik-kappa.vercel.app',
  tmd: 'https://themagicalduo.com',
  newave: 'https://newave-suplementos.vercel.app',
};

// Ajustes por web: cuánto esperar a que cargue y cuánto bajar entre capturas (en pantallas).
const AJUSTES = {
  // MUDA traba el scroll en la sección "Estética": más abajo sale siempre la misma pantalla.
  muda: { saltos: [1.2] },
  fidalgo: { espera: 9000 },
  // The Magical Duo arranca con un preloader ("Preparando la magia...")
  tmd: { espera: 8000 },
  newave: { espera: 6000 },
};

const solo = process.argv[2];
const browser = await chromium.launch({ channel: 'chrome' });

for (const [slug, url] of Object.entries(WEBS)) {
  if (solo && solo !== slug) continue;
  const dir = `src/assets/proyectos/${slug}`;
  mkdirSync(dir, { recursive: true });
  const { espera = 4500, saltos = [1.2, 2.6] } = AJUSTES[slug] ?? {};
  try {
    const d = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await d.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 });
    await d.waitForTimeout(espera);
    await d.screenshot({ path: `${dir}/portada.jpg`, type: 'jpeg', quality: 88 });
    for (const [n, factor] of saltos.entries()) {
      const i = n + 1;
      await d.mouse.wheel(0, 900 * factor);
      await d.waitForTimeout(2500);
      await d.screenshot({ path: `${dir}/pantalla-${i}.jpg`, type: 'jpeg', quality: 88 });
    }
    await d.close();

    const m = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await m.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 });
    await m.waitForTimeout(espera);
    await m.screenshot({ path: `${dir}/mobile.jpg`, type: 'jpeg', quality: 85 });
    await m.close();
    console.log('ok', slug);
  } catch (e) {
    console.log('falló', slug, e.message);
  }
}
await browser.close();
