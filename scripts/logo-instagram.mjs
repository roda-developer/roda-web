// Uso: node scripts/logo-instagram.mjs → marca/instagram/*.png (1080×1080) y una hoja con todas en círculo
import { chromium } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const fuente = 'data:font/woff2;base64,' + readFileSync(resolve('node_modules/@fontsource-variable/inter-tight/files/inter-tight-latin-wght-normal.woff2')).toString('base64');
const C = { papel: '#f3f2ee', tinta: '#121212', negro: '#0a0a0a', rosa: '#ff6fd8', amarillo: '#ffd400', azul: '#2b4bff', rojo: '#ff2e4d', verde: '#00c46a' };

// [nombre, fondo, letras, anillo]
const versiones = [
  ['01-papel', C.papel, C.tinta, C.tinta],
  ['02-negro', C.negro, C.papel, C.papel],
  ['03-papel-o-rosa', C.papel, C.tinta, C.rosa],
  ['04-negro-o-rosa', C.negro, C.papel, C.rosa],
  ['05-rosa', C.rosa, C.tinta, C.tinta],
  ['06-amarillo', C.amarillo, C.tinta, C.tinta],
  ['07-azul', C.azul, C.papel, C.papel],
  ['08-rojo', C.rojo, C.papel, C.papel],
  ['09-verde', C.verde, C.tinta, C.tinta],
  ['10-azul-o-amarillo', C.azul, C.papel, C.amarillo],
];

const logo = (letras, anillo) => `<span class="marca" style="color:${letras}">R<i style="border-color:${anillo}"></i>da</span>`;
const estilos = `
  @font-face { font-family: 'Inter Tight'; src: url(${fuente}); font-weight: 100 900; }
  * { margin: 0; box-sizing: border-box; }
  /* El mismo logo del menú (medido en la web: peso 500 y anillo de 2 px a 28 px = 0,0714 em) */
  .marca { font-family: 'Inter Tight'; font-weight: 500; display: inline-flex; align-items: baseline; letter-spacing: -0.01em; line-height: 1; }
  .marca i { display: inline-block; width: 0.5em; height: 0.5em; margin: 0 0.03em; border: 0.0714em solid; border-radius: 999px; }
`;

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1080, height: 1080 } });
for (const [nombre, fondo, letras, anillo] of versiones) {
  // El logo ocupa ~62% del ancho: entra holgado en el recorte circular de Instagram
  await page.setContent(`<style>${estilos} body { width: 1080px; height: 1080px; display: grid; place-items: center; background: ${fondo}; } .marca { font-size: 300px; transform: translateY(-4%); }</style>${logo(letras, anillo)}`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `marca/instagram/roda-${nombre}.png` });
}

// La hoja: cómo se ven todas en el círculo del perfil
const celdas = versiones.map(([n, f, l, a]) => `<figure><div class="circulo" style="background:${f}">${logo(l, a)}</div><figcaption>${n}</figcaption></figure>`).join('');
await page.setViewportSize({ width: 1500, height: 700 });
await page.setContent(`<style>${estilos}
  body { background: #e9e7e1; padding: 40px; display: grid; grid-template-columns: repeat(5, 1fr); gap: 36px 24px; font-family: monospace; }
  figure { display: grid; justify-items: center; gap: 12px; }
  .circulo { width: 220px; height: 220px; border-radius: 50%; display: grid; place-items: center; box-shadow: 0 0 0 1px rgb(0 0 0 / .08); }
  .marca { font-size: 61px; transform: translateY(-4%); }
  figcaption { font-size: 13px; color: #555; }
</style>${celdas}`);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'marca/instagram/hoja.png', fullPage: true });
await browser.close();
console.log('listo:', versiones.length, 'versiones en marca/instagram/');
