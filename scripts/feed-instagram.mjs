// Uso: node scripts/feed-instagram.mjs → marca/instagram/feed-plan.png
// Maqueta del feed de las primeras 4 semanas: cómo se ve la grilla del perfil, con el orden de publicación.
import { chromium } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const f = (p) => 'data:font/woff2;base64,' + readFileSync(resolve('node_modules', p)).toString('base64');
const img = (p) => 'data:image/jpeg;base64,' + readFileSync(resolve(p)).toString('base64');
const C = { papel: '#f3f2ee', tinta: '#121212', negro: '#0a0a0a', gris: '#6b6862', rosa: '#ff6fd8', amarillo: '#ffd400', azul: '#2b4bff', rojo: '#ff2e4d', verde: '#00c46a' };
const logo = (color = C.tinta, anillo = color) => `<span class="logo" style="color:${color}">R<i style="border-color:${anillo}"></i>da</span>`;
const reel = '<span class="tipo">▶ Reel</span>';
const carrusel = '<span class="tipo">❐ Carrusel</span>';

// [orden de publicación, contenido de la miniatura]
const posts = {
  1: `<div class="t" style="background:${C.rosa}">${carrusel}<p class="mono">Los créditos</p><div class="cred"><p><i>Dirección</i><b>Giuliana Di Rocco<br>Facundo Thibaut</b></p><p><i>Locaciones</i><b>Donde nos lleve el próximo viaje</b></p></div><p class="chico">Ninguna web fue hecha con plantillas durante esta producción.</p></div>`,
  2: `<div class="t" style="background:${C.papel}">${carrusel}<p class="pres">${logo()}<span>presenta</span></p><span class="sol" style="background:${C.rosa}"></span><p class="frase">Cinco webs, cinco géneros.</p><p class="titulo">En<br>cartelera</p></div>`,
  3: `<div class="t centro" style="background:${C.negro}">${reel}<p class="pres claro">${logo(C.papel, C.rosa)}<span>presenta</span></p><p class="play">▶</p><p class="mono claro abajo">El tráiler</p></div>`,
  4: `<div class="t" style="background:${C.papel}">${carrusel}<p class="mono">Lo que suele encontrar</p><p class="numero">3</p><p class="frase">segundos para decidir si te escribe.</p></div>`,
  5: `<div class="t foto" style="background-image:url(${img('src/assets/proyectos/muda/portada.jpg')})">${carrusel}<p class="etiqueta">Caso · MUDA</p></div>`,
  6: `<div class="t centro" style="background:${C.papel}"><p class="nolee">No lee.</p><p class="mira">Mira.</p></div>`,
  7: `<div class="t" style="background:${C.papel}"><p class="pres">${logo()}<span>presenta</span></p><span class="sol" style="background:${C.verde}"></span><p class="frase">Turnos sin llamadas a las once de la noche.</p><p class="titulo"><small>La</small>Agenda</p><p class="sello" style="background:${C.verde}">En cartel · US$ 100</p></div>`,
  8: `<div class="t centro" style="background:${C.papel}">${reel}<div class="nav-web"><span></span><span></span><span></span></div><div class="web"><div class="bloque" style="background:${C.azul}"><span style="background:${C.rosa}"></span></div><p>Lo que hacés, dicho en una línea.</p><em style="background:${C.rojo}">Escribinos →</em></div><p class="mono abajo">De la idea a tu web</p></div>`,
  9: `<div class="t centro" style="background:${C.rosa}">${reel}<p class="grito">Y a veces</p><p class="mas"><span style="color:${C.rojo}">M</span><span style="color:${C.azul}">Á</span><span style="color:${C.amarillo}">S</span></p><p class="grito">es más.</p></div>`,
  10: `<div class="t foto" style="background-image:url(${img('src/assets/proyectos/emme/portada.jpg')})">${carrusel}<p class="etiqueta">Caso · Emme Digital</p></div>`,
  11: `<div class="t foto" style="background-image:url(${img('src/assets/nosotros/viaje.jpg')})"><p class="etiqueta">Rodaje en exteriores</p></div>`,
  12: `<div class="t" style="background:${C.papel}">${carrusel}<p class="mono">¿Y tu afiche?</p><div class="minis"><span style="background:${C.papel};box-shadow:inset 0 0 0 1px #ddd"><i style="background:${C.rosa}"></i></span><span style="background:${C.azul}"><i style="background:${C.amarillo}"></i></span><span style="background:${C.negro}"><i class="linea" style="background:${C.verde}"></i></span></div><p class="frase">Escribí tu marca y hacé tu afiche de estreno. Link en la bio.</p></div>`,
};

// La grilla muestra lo más nuevo arriba a la izquierda
const filas = [[12, 11, 10], [9, 8, 7], [6, 5, 4], [3, 2, 1]];
const semanas = ['Semana 4', 'Semana 3', 'Semana 2', 'Lanzamiento (el mismo día)'];

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: Inter Tight; src: url(${f('@fontsource-variable/inter-tight/files/inter-tight-latin-wght-normal.woff2')}); font-weight: 100 900; }
@font-face { font-family: Inter Tight; font-style: italic; src: url(${f('@fontsource-variable/inter-tight/files/inter-tight-latin-wght-italic.woff2')}); font-weight: 100 900; }
@font-face { font-family: Brico; src: url(${f('@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2')}); font-weight: 200 800; }
@font-face { font-family: Plex; src: url(${f('@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2')}); }
* { margin: 0; box-sizing: border-box; }
body { background: #fff; font-family: Inter Tight; color: ${C.tinta}; padding: 28px; width: 820px; }
.perfil { display: flex; gap: 22px; align-items: center; padding-bottom: 22px; border-bottom: 1px solid #ddd; }
.avatar { width: 96px; height: 96px; border-radius: 50%; background: #fff; box-shadow: 0 0 0 1px #ddd; display: grid; place-items: center; }
.avatar .logo { font-size: 27px; }
.perfil h1 { font-size: 17px; font-weight: 600; } .perfil .bio { font-size: 13.5px; line-height: 1.4; margin-top: 6px; white-space: pre-line; }
.fila { display: grid; grid-template-columns: 150px repeat(3, 1fr); gap: 4px; margin-top: 4px; align-items: stretch; }
.sem { font-family: Plex; font-size: 10px; letter-spacing: .08em; text-transform: uppercase; color: ${C.gris}; padding: 10px 10px 0 0; }
.celda { position: relative; }
.num { position: absolute; z-index: 3; left: 6px; bottom: 6px; background: ${C.tinta}; color: #fff; font-family: Plex; font-size: 10px; padding: 2px 6px; border-radius: 99px; }
.t { position: relative; aspect-ratio: 3 / 4; overflow: hidden; padding: 12px; display: flex; flex-direction: column; background-size: cover; background-position: center; }
.t > * { position: relative; z-index: 1; }
.centro { justify-content: center; align-items: center; text-align: center; }
.tipo { position: absolute; right: 7px; top: 6px; font-family: Plex; font-size: 8.5px; background: rgb(255 255 255 / .85); color: ${C.tinta}; padding: 1px 5px; border-radius: 99px; z-index: 2; }
.mono { font-family: Plex; font-size: 8px; letter-spacing: .14em; text-transform: uppercase; }
.claro { color: ${C.papel}; } .abajo { position: absolute; bottom: 12px; left: 0; right: 0; text-align: center; }
.logo { display: inline-flex; align-items: baseline; font-weight: 500; letter-spacing: -.01em; line-height: 1; }
.logo i { display: inline-block; width: .5em; height: .5em; margin: 0 .03em; border: .0714em solid currentColor; border-radius: 99px; }
.pres { display: flex; gap: 6px; align-items: baseline; justify-content: center; font-size: 17px; }
.pres > span:last-child { font-family: Plex; font-size: 6.5px; letter-spacing: .3em; text-transform: uppercase; }
.pres.claro { font-size: 24px; } .pres.claro > span:last-child { color: ${C.papel}; font-size: 8px; }
.play { color: ${C.papel}; font-size: 30px; margin-top: 16px; opacity: .8; }
.sol { position: absolute; z-index: 0; width: 150px; height: 150px; border-radius: 50%; right: -42px; top: 42px; }
.frase { font-style: italic; font-size: 10.5px; color: ${C.gris}; margin-top: auto; }
.titulo { font-weight: 500; font-size: 40px; line-height: .86; letter-spacing: -.055em; margin-top: 4px; }
.titulo small { display: block; font-size: 11px; font-style: italic; font-weight: 400; letter-spacing: 0; }
.sello { align-self: flex-start; margin-top: 8px; font-family: Plex; font-size: 7.5px; letter-spacing: .14em; text-transform: uppercase; padding: 1px 5px; }
.cred { margin-top: auto; display: grid; gap: 10px; }
.cred p { display: grid; grid-template-columns: 1fr 1.4fr; gap: 6px; font-size: 9px; }
.cred i { text-align: right; } .cred b { font-weight: 600; }
.chico { margin-top: auto; font-size: 8px; font-style: italic; text-align: center; }
.numero { font-weight: 500; font-size: 150px; line-height: .8; letter-spacing: -.06em; margin-top: auto; }
.foto .etiqueta { margin-top: auto; align-self: flex-start; background: ${C.papel}; font-family: Plex; font-size: 8px; letter-spacing: .14em; text-transform: uppercase; padding: 3px 6px; }
.foto::after { content: ''; position: absolute; inset: 0; background: linear-gradient(transparent 55%, rgb(0 0 0 / .35)); }
.nolee { font-size: 16px; color: ${C.gris}; letter-spacing: -.03em; align-self: flex-end; }
.mira { font-size: 62px; font-weight: 500; font-style: italic; letter-spacing: -.06em; line-height: .9; }
.nav-web { display: none; }
.web { width: 82%; background: #fff; box-shadow: 0 12px 24px -14px rgb(0 0 0 / .45); padding: 8px; text-align: left; display: grid; gap: 6px; }
.web .bloque { height: 70px; position: relative; overflow: hidden; } .web .bloque span { position: absolute; width: 44px; height: 44px; border-radius: 50%; right: 14px; top: 12px; }
.web p { font-size: 10px; font-weight: 600; letter-spacing: -.02em; } .web em { justify-self: start; font-style: normal; font-size: 7px; color: #fff; padding: 3px 8px; border-radius: 99px; }
.grito { font-family: Brico; font-weight: 800; text-transform: uppercase; font-size: 22px; line-height: .85; }
.mas { font-family: Brico; font-weight: 800; font-size: 66px; line-height: .85; letter-spacing: -.05em; }
.minis { display: flex; gap: 6px; justify-content: center; margin-top: auto; }
.minis span { position: relative; overflow: hidden; width: 52px; aspect-ratio: 2 / 3; }
.minis i { position: absolute; width: 38px; height: 38px; border-radius: 50%; right: -10px; top: 18px; }
.minis i.linea { width: 22px; height: 3px; border-radius: 0; right: 15px; top: 40px; }
</style></head><body>
<div class="perfil"><div class="avatar">${logo()}</div><div><h1>roda.development</h1><p class="bio">Roda · Estudio web
Roda presenta: tu historia 🎬
Webs a mano, sin plantillas · desde US$ 300
Dirigida por Giuli & Facu
↓ Tu afiche de estreno te espera</p></div></div>
${filas.map((fila, i) => `<div class="fila"><p class="sem">${semanas[i]}</p>${fila.map((n) => `<div class="celda">${posts[n]}<span class="num">#${n}</span></div>`).join('')}</div>`).join('')}
</body></html>`;

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 880, height: 1200 }, deviceScaleFactor: 1.5 });
await page.setContent(html);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'marca/instagram/feed-plan.png', fullPage: true });
await browser.close();
console.log('marca/instagram/feed-plan.png');
