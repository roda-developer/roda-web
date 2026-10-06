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
// pantallas: en vez de bajar a ciegas, cada captura puede ser una sección (por su texto) o otra página (ruta).
// movil / bajarMovil: qué página y a qué altura (px) se captura en el celu.
const AJUSTES = {
  // MUDA traba el scroll en la sección "Estética": más abajo sale siempre la misma pantalla.
  muda: { saltos: [1.2] },
  fidalgo: { espera: 9000 },
  // The Magical Duo arranca con un preloader ("Preparando la magia...")
  tmd: { espera: 8000 },
  // Newave: las categorías del home y una página de producto; en el celu, los productos del catálogo
  newave: {
    espera: 6000,
    pantallas: [{ seccion: 'DESCUBRÍ TU POTENCIAL' }, { ruta: '/producto/6a090b34eef809310bbe388c' }],
    movil: '/productos',
    bajarMovil: 610,
  },
};

const solo = process.argv[2];
const browser = await chromium.launch({ channel: 'chrome' });

for (const [slug, url] of Object.entries(WEBS)) {
  if (solo && solo !== slug) continue;
  const dir = `src/assets/proyectos/${slug}`;
  mkdirSync(dir, { recursive: true });
  const { espera = 4500, saltos = [1.2, 2.6], pantallas = null, movil = '', bajarMovil = 0 } = AJUSTES[slug] ?? {};
  try {
    const d = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await d.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 });
    await d.waitForTimeout(espera);
    await d.screenshot({ path: `${dir}/portada.jpg`, type: 'jpeg', quality: 88 });
    if (pantallas) {
      for (const [n, p] of pantallas.entries()) {
        if (p.ruta) {
          await d.goto(url + p.ruta, { waitUntil: 'domcontentloaded', timeout: 60_000 });
          await d.waitForTimeout(espera);
        } else {
          // La sección queda arriba, debajo del menú fijo
          await d.getByText(p.seccion, { exact: false }).first().evaluate((el) => window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 140));
          await d.waitForTimeout(2500);
        }
        await d.screenshot({ path: `${dir}/pantalla-${n + 1}.jpg`, type: 'jpeg', quality: 88 });
      }
    } else {
      for (const [n, factor] of saltos.entries()) {
        const i = n + 1;
        await d.mouse.wheel(0, 900 * factor);
        await d.waitForTimeout(2500);
        await d.screenshot({ path: `${dir}/pantalla-${i}.jpg`, type: 'jpeg', quality: 88 });
      }
    }
    await d.close();

    const m = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await m.goto(url + movil, { waitUntil: 'domcontentloaded', timeout: 60_000 });
    await m.waitForTimeout(espera);
    if (bajarMovil) { await m.evaluate((y) => window.scrollTo(0, y), bajarMovil); await m.waitForTimeout(2000); }
    await m.screenshot({ path: `${dir}/mobile.jpg`, type: 'jpeg', quality: 85 });
    await m.close();
    console.log('ok', slug);
  } catch (e) {
    console.log('falló', slug, e.message);
  }
}
await browser.close();
