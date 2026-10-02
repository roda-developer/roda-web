// Uso: node scripts/feed-instagram.mjs → marca/instagram/feed-sistema-a.png y feed-sistema-b.png
// Dos sistemas para el feed: A (todo es un afiche, con la misma estructura) y B (una fila, un color; filas partidas en 3).
import { chromium } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const f = (p) => 'data:font/woff2;base64,' + readFileSync(resolve('node_modules', p)).toString('base64');
const img = (p) => 'data:image/jpeg;base64,' + readFileSync(resolve(p)).toString('base64');
const C = { papel: '#f3f2ee', tinta: '#121212', negro: '#0a0a0a', gris: '#6b6862', rosa: '#ff6fd8', amarillo: '#ffd400', azul: '#2b4bff', rojo: '#ff2e4d', verde: '#00c46a' };
const logo = (color = C.tinta, anillo = color) => `<span class="logo" style="color:${color}">R<i style="border-color:${anillo}"></i>da</span>`;
const fotos = { muda: img('src/assets/proyectos/muda/portada.jpg'), emme: img('src/assets/proyectos/emme/portada.jpg'), viaje: img('src/assets/nosotros/viaje.jpg'), juntos: img('src/assets/nosotros/juntos.jpg') };

// ── A · Todo es un afiche: misma estructura, cambia el centro y el acento ──
const afiche = (n, acento, centro, rotulo, sello) => `
  <div class="celda"><div class="af">
    <p class="pres">${logo()}<span>presenta</span></p>
    <div class="centro-af">${centro}</div>
    <p class="rotulo">${rotulo}</p>
    <p class="pie"><span style="background:${acento};color:${acento === C.azul ? C.papel : C.tinta}">${sello}</span><span>roda.development</span></p>
  </div><span class="num">#${n}</span></div>`;
const sol = (color) => `<span class="sol-a" style="background:${color}"></span>`;
const marco = (src) => `<span class="marco" style="background-image:url(${src})"></span>`;
const A = {
  1: afiche(1, C.rosa, `${sol(C.rosa)}${marco(fotos.juntos)}`, 'Los créditos', 'Nosotros'),
  2: afiche(2, C.verde, `${sol(C.verde)}<p class="gran">En<br>cartelera</p>`, 'Cinco webs, cinco géneros', 'Cartelera'),
  3: afiche(3, C.rosa, `<p class="gran centro-t">Tu marca<br>ya tiene<br>una <em>historia.</em></p>`, 'El tráiler · ▶ Reel', 'Estreno'),
  4: afiche(4, C.amarillo, `${sol(C.amarillo)}<p class="num-g">3</p>`, 'Segundos para decidir', 'Lección'),
  5: afiche(5, C.rojo, `${sol(C.rojo)}${marco(fotos.muda)}`, 'Caso · MUDA', 'Proyecto'),
  6: afiche(6, C.azul, `<p class="nolee">No lee.</p><p class="mira">Mira.</p>`, 'La primera impresión', 'Lección'),
  7: afiche(7, C.verde, `${sol(C.verde)}<p class="gran"><small>La</small>Agenda</p>`, 'Turnos sin llamadas · US$ 100', 'Cartelera'),
  8: afiche(8, C.azul, `${sol(C.azul)}<span class="web-a"><b></b><i></i></span>`, 'De la idea a tu web · ▶ Reel', 'Proceso'),
  9: afiche(9, C.rosa, `<p class="mas-a"><span style="color:${C.rojo}">M</span><span style="color:${C.azul}">Á</span><span style="color:${C.rosa}">S</span></p>`, 'Y a veces más es más · ▶ Reel', 'Estreno'),
  10: afiche(10, C.rojo, `${sol(C.rojo)}${marco(fotos.emme)}`, 'Caso · Emme Digital', 'Proyecto'),
  11: afiche(11, C.amarillo, `${sol(C.amarillo)}${marco(fotos.viaje)}`, 'Rodaje en exteriores', 'Nosotros'),
  12: afiche(12, C.rosa, `<span class="minis"><b></b><b style="background:${C.azul}"></b><b style="background:${C.negro}"></b></span>`, '¿Y tu afiche? Link en la bio', 'Tu turno'),
};

// ── B · Una fila, un color; algunas filas son una sola imagen partida en tres ──
const parte = (n, fondo, html, i) => `<div class="celda"><div class="pb" style="background:${fondo}"><div class="panor" style="left:${-i * 100}%">${html}</div></div><span class="num">#${n}</span></div>`;
const suelto = (n, fondo, html, color = C.tinta) => `<div class="celda"><div class="pb suelto" style="background:${fondo};color:${color}">${html}</div><span class="num">#${n}</span></div>`;
const filaRoda = (ns) => ns.map((n, i) => parte(n, C.negro, `<p class="roda-g">${logo(C.papel, C.rosa)}</p><p class="mono-b abajo-b">Roda presenta · Estudio web · desde US$ 300</p>`, i)).join('');
const filaMas = (ns) => ns.map((n, i) => parte(n, C.rosa, `<p class="mas-b"><span style="color:${C.rojo}">M</span><span style="color:${C.azul}">Á</span><span style="color:${C.amarillo}">S</span> <span class="es">es más</span></p>`, i)).join('');
const B = [
  // Lo más nuevo arriba: semana 4 (papel, casos y nosotros)
  [suelto(12, C.papel, `<p class="mono-b">¿Y tu afiche?</p><span class="minis b"><b></b><b style="background:${C.azul}"></b><b style="background:${C.negro}"></b></span>`),
   suelto(11, C.papel, `<span class="marco b" style="background-image:url(${fotos.viaje})"></span><p class="mono-b">Rodaje en exteriores</p>`),
   suelto(10, C.papel, `<span class="marco b" style="background-image:url(${fotos.emme})"></span><p class="mono-b">Caso · Emme Digital</p>`)].join(''),
  // Semana 3: la fila rosa, MÁS ES MÁS partido en tres
  filaMas([9, 8, 7]),
  // Semana 2: papel, lecciones y un caso
  [suelto(6, C.papel, `<p class="nolee">No lee.</p><p class="mira">Mira.</p>`),
   suelto(5, C.papel, `<span class="marco b" style="background-image:url(${fotos.muda})"></span><p class="mono-b">Caso · MUDA</p>`),
   suelto(4, C.papel, `<p class="num-g">3</p><p class="mono-b">segundos para decidir</p>`)].join(''),
  // Lanzamiento: la fila negra, "Roda" partido en tres
  filaRoda([3, 2, 1]),
];

const estilos = `
@font-face { font-family: Inter Tight; src: url(${f('@fontsource-variable/inter-tight/files/inter-tight-latin-wght-normal.woff2')}); font-weight: 100 900; }
@font-face { font-family: Inter Tight; font-style: italic; src: url(${f('@fontsource-variable/inter-tight/files/inter-tight-latin-wght-italic.woff2')}); font-weight: 100 900; }
@font-face { font-family: Brico; src: url(${f('@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2')}); font-weight: 200 800; }
@font-face { font-family: Plex; src: url(${f('@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2')}); }
* { margin: 0; box-sizing: border-box; }
body { background: #fff; font-family: Inter Tight; color: ${C.tinta}; padding: 24px; width: 700px; }
h2 { font-family: Plex; font-size: 12px; letter-spacing: .1em; text-transform: uppercase; margin-bottom: 14px; }
.grilla { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px; }
.celda { position: relative; }
.num { position: absolute; z-index: 5; right: 5px; top: 5px; background: rgb(255 255 255 / .9); color: ${C.tinta}; font-family: Plex; font-size: 9px; padding: 1px 5px; border-radius: 99px; }
.logo { display: inline-flex; align-items: baseline; font-weight: 500; letter-spacing: -.01em; line-height: 1; }
.logo i { display: inline-block; width: .5em; height: .5em; margin: 0 .03em; border: .0714em solid currentColor; border-radius: 99px; }
/* A */
.af { position: relative; aspect-ratio: 3 / 4; overflow: hidden; background: ${C.papel}; padding: 11px; display: flex; flex-direction: column; }
.pres { display: flex; gap: 5px; align-items: baseline; justify-content: center; font-size: 14px; position: relative; z-index: 2; }
.pres > span:last-child { font-family: Plex; font-size: 5.5px; letter-spacing: .3em; text-transform: uppercase; }
.centro-af { position: relative; flex: 1; display: grid; place-items: center; }
.sol-a { position: absolute; width: 120px; height: 120px; border-radius: 50%; right: -38px; top: 4px; }
.marco { position: relative; width: 72%; aspect-ratio: 4 / 3; background-size: cover; background-position: center; border: 4px solid #fbfaf7; box-shadow: 0 10px 18px -10px rgb(0 0 0 / .5); }
.gran { position: relative; justify-self: start; align-self: end; font-weight: 500; font-size: 34px; line-height: .86; letter-spacing: -.055em; }
.gran small { display: block; font-size: 10px; font-style: italic; font-weight: 400; letter-spacing: 0; }
.centro-t { justify-self: center; align-self: center; font-size: 25px; text-align: left; }
.num-g { position: relative; font-weight: 500; font-size: 120px; line-height: .8; letter-spacing: -.06em; }
.nolee { font-size: 13px; color: ${C.gris}; justify-self: end; } .mira { font-size: 50px; font-weight: 500; font-style: italic; letter-spacing: -.06em; line-height: .9; }
.web-a { position: relative; width: 70%; aspect-ratio: 4 / 3; background: #fff; box-shadow: 0 10px 18px -10px rgb(0 0 0 / .5); padding: 6px; display: grid; gap: 4px; grid-template-rows: 1fr auto; }
.web-a b { background: ${C.azul}; } .web-a i { width: 40%; height: 7px; background: ${C.rojo}; border-radius: 99px; }
.mas-a { font-family: Brico; font-weight: 800; font-size: 58px; letter-spacing: -.05em; }
.minis { display: flex; gap: 5px; } .minis b { width: 40px; aspect-ratio: 2 / 3; background: ${C.papel}; box-shadow: 0 0 0 1px #ccc; }
.rotulo { font-size: 9px; font-style: italic; color: ${C.gris}; margin-top: 6px; border-top: 1px solid rgb(18 18 18 / .2); padding-top: 6px; text-align: center; }
.pie { display: flex; justify-content: space-between; margin-top: 5px; font-family: Plex; font-size: 6.5px; letter-spacing: .14em; text-transform: uppercase; }
.pie span:first-child { padding: 1px 4px; }
/* B */
.pb { position: relative; aspect-ratio: 3 / 4; overflow: hidden; }
.panor { position: absolute; top: 0; width: 300%; height: 100%; display: grid; place-items: center; }
.roda-g { font-size: 250px; }
.mono-b { font-family: Plex; font-size: 8px; letter-spacing: .14em; text-transform: uppercase; }
.abajo-b { position: absolute; bottom: 14px; color: ${C.papel}; }
.mas-b { font-family: Brico; font-weight: 800; font-size: 150px; letter-spacing: -.05em; line-height: .8; white-space: nowrap; }
.mas-b .es { color: ${C.tinta}; font-size: 70px; }
.suelto { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; padding: 14px; text-align: center; }
.marco.b { width: 84%; }
.minis.b b { width: 46px; }
`;

const pagina = (titulo, grilla) => `<!doctype html><html><head><meta charset="utf-8"><style>${estilos}</style></head><body><h2>${titulo}</h2><div class="grilla">${grilla}</div></body></html>`;
const ordenA = [[12, 11, 10], [9, 8, 7], [6, 5, 4], [3, 2, 1]].flat().map((n) => A[n]).join('');

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 750, height: 1100 }, deviceScaleFactor: 1.6 });
for (const [archivo, titulo, grilla] of [
  ['feed-sistema-a', 'A · Todo es un afiche (misma estructura, cambia el centro y el color)', ordenA],
  ['feed-sistema-b', 'B · Una fila, un color (lanzamiento y MÁS ES MÁS partidos en tres)', B.join('')],
]) {
  await page.setContent(pagina(titulo, grilla));
  await page.evaluate(() => document.fonts.ready);
  // Con la hora en el nombre: si la versión anterior está abierta en un visor, Windows no deja pisarla
  await page.screenshot({ path: `marca/instagram/${archivo}-${Date.now().toString(36)}.png`, fullPage: true });
}
await browser.close();
console.log('listo');
