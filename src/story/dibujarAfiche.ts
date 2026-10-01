import { ajustarNombre, dominioDe } from './afiche';
import { cierre } from '../content/guion';

/** El afiche se dibuja siempre a este tamaño (2:3): lo que se ve y lo que se descarga es la misma imagen. */
export const ANCHO = 1080;
export const ALTO = 1620;

const MARGEN = 66;
const PAPEL = '#f3f2ee';
const TINTA = '#121212';
const GRIS = '#6b6862';
const ROSA = '#ff6fd8';

const TITULO = "'Inter Tight Variable', 'Helvetica Neue', Arial, sans-serif";
const MONO = "'IBM Plex Mono', ui-monospace, monospace";

/** Las tipografías tienen que estar cargadas antes de dibujar, si no el canvas usa las del sistema. */
export function cargarTipografias(): Promise<unknown> {
  return Promise.all([
    document.fonts.load(`500 100px ${TITULO}`),
    document.fonts.load(`italic 400 100px ${TITULO}`),
    document.fonts.load(`600 100px ${TITULO}`),
    document.fonts.load(`400 30px ${MONO}`),
    document.fonts.load(`500 30px ${MONO}`),
  ]);
}

/** Texto con espaciado entre letras, dibujado letra por letra (ctx.letterSpacing no está en todos los navegadores). */
function anchoEspaciado(ctx: CanvasRenderingContext2D, texto: string, espacio: number) {
  return ctx.measureText(texto).width + espacio * Math.max(0, [...texto].length - 1);
}
function espaciado(ctx: CanvasRenderingContext2D, texto: string, x: number, y: number, espacio: number) {
  for (const letra of texto) {
    ctx.fillText(letra, x, y);
    x += ctx.measureText(letra).width + espacio;
  }
  return x;
}

/** "Roda presenta": el logo (la o es un anillo) y "presenta" en mono espaciada, centrados. */
function presenta(ctx: CanvasRenderingContext2D, y: number) {
  const tam = 90;
  ctx.font = `500 ${tam}px ${TITULO}`;
  const anchoR = ctx.measureText('R').width;
  const anchoDa = ctx.measureText('da').width;
  const anillo = tam * 0.5;
  const separo = tam * 0.03;
  const logo = anchoR + separo + anillo + separo + anchoDa;

  ctx.font = `400 33px ${MONO}`;
  const palabra = cierre.afiche.presenta.toUpperCase();
  const espacio = 33 * 0.3;
  const total = logo + 30 + anchoEspaciado(ctx, palabra, espacio);

  let x = (ANCHO - total) / 2;
  ctx.fillStyle = TINTA;
  ctx.font = `500 ${tam}px ${TITULO}`;
  ctx.fillText('R', x, y);
  x += anchoR + separo;
  ctx.lineWidth = tam * 0.075;
  ctx.strokeStyle = TINTA;
  ctx.beginPath();
  ctx.arc(x + anillo / 2, y - anillo / 2, anillo / 2 - ctx.lineWidth / 2, 0, Math.PI * 2);
  ctx.stroke();
  x += anillo + separo;
  ctx.fillText('da', x, y);
  x += anchoDa + 30;
  ctx.font = `400 33px ${MONO}`;
  espaciado(ctx, palabra, x, y, espacio);
}

/** Los créditos en letra chica, centrados, con los nombres en negrita. */
function creditos(ctx: CanvasRenderingContext2D, yBase: number): number {
  const tam = 22;
  const espacio = tam * 0.14;
  const palabras: { t: string; negrita: boolean }[] = [];
  cierre.afiche.creditos.forEach(([rol, quien], i) => {
    if (i) palabras.push({ t: '·', negrita: false });
    rol.toUpperCase().split(' ').forEach((t) => palabras.push({ t, negrita: false }));
    quien.toUpperCase().split(' ').forEach((t) => palabras.push({ t, negrita: true }));
  });
  const fuente = (negrita: boolean) => `${negrita ? 600 : 400} ${tam}px ${TITULO}`;
  const medir = (p: { t: string; negrita: boolean }) => {
    ctx.font = fuente(p.negrita);
    return anchoEspaciado(ctx, p.t, espacio);
  };
  const blanco = tam * 0.5;

  // Se reparten en renglones que entren en el ancho
  const renglones: (typeof palabras)[] = [[]];
  let ancho = 0;
  for (const p of palabras) {
    const w = medir(p);
    const renglon = renglones.at(-1)!;
    if (renglon.length && ancho + blanco + w > ANCHO - MARGEN * 2) {
      renglones.push([p]);
      ancho = w;
    } else {
      ancho += (renglon.length ? blanco : 0) + w;
      renglon.push(p);
    }
  }

  const alto = tam * 1.5;
  let y = yBase - (renglones.length - 1) * alto;
  const arriba = y - tam;
  ctx.fillStyle = TINTA;
  for (const renglon of renglones) {
    const total = renglon.reduce((s, p, i) => s + medir(p) + (i ? blanco : 0), 0);
    let x = (ANCHO - total) / 2;
    for (const p of renglon) {
      ctx.font = fuente(p.negrita);
      x = espaciado(ctx, p.t, x, y, espacio) - espacio + blanco;
    }
    y += alto;
  }
  return arriba;
}

/** "Próximamente · solo en lupe.com", con "Próximamente" resaltado en rosa. */
function estreno(ctx: CanvasRenderingContext2D, y: number, dominio: string) {
  const tam = 27;
  const espacio = tam * 0.16;
  const partes = [
    { t: cierre.afiche.proximamente.toUpperCase(), peso: 400, resalta: true },
    { t: `  ·  ${cierre.afiche.soloEn.toUpperCase()}  `, peso: 400, resalta: false },
    { t: (dominio || 'tumarca.com').toUpperCase(), peso: 500, resalta: false },
  ];
  const medidas = partes.map((p) => {
    ctx.font = `${p.peso} ${tam}px ${MONO}`;
    return anchoEspaciado(ctx, p.t, espacio);
  });
  let x = (ANCHO - medidas.reduce((a, b) => a + b, 0)) / 2;
  partes.forEach((p, i) => {
    ctx.font = `${p.peso} ${tam}px ${MONO}`;
    if (p.resalta) {
      ctx.fillStyle = ROSA;
      ctx.fillRect(x - 10, y - tam * 0.95, medidas[i] + 20, tam * 1.3);
    }
    ctx.fillStyle = TINTA;
    x = espaciado(ctx, p.t, x, y, espacio);
  });
}

/** Dibuja el afiche completo. Sin marca, el título queda como "Tu marca" en gris, esperando. */
export function dibujarAfiche(ctx: CanvasRenderingContext2D, marca: string) {
  ctx.save();
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = PAPEL;
  ctx.fillRect(0, 0, ANCHO, ALTO);

  // El sol rosa, cortado por el borde
  ctx.fillStyle = ROSA;
  ctx.beginPath();
  ctx.arc(900, 810, 450, 0, Math.PI * 2);
  ctx.fill();

  presenta(ctx, MARGEN + 90);

  // Abajo: línea, créditos y estreno
  const yEstreno = ALTO - MARGEN - 10;
  estreno(ctx, yEstreno, dominioDe(marca));
  const arribaCreditos = creditos(ctx, yEstreno - 70);
  const yLinea = arribaCreditos - 30;
  ctx.fillStyle = 'rgba(18,18,18,0.2)';
  ctx.fillRect(MARGEN, yLinea, ANCHO - MARGEN * 2, 2);

  // El centro: la bajada en itálica y el nombre lo más grande que entre
  const nombre = marca || cierre.afiche.vacio;
  const interlineado = 0.88;
  ctx.font = `500 100px ${TITULO}`;
  const CIERRE = -0.055; // las letras grandes se cierran un poco, como en el resto de la web
  const medir = (texto: string, tam: number) =>
    (ctx.measureText(texto).width / 100) * tam + CIERRE * tam * Math.max(0, [...texto].length - 1);
  const zonaArriba = MARGEN + 200;
  const zonaAbajo = yLinea - 60;
  const tamBajada = 45;
  const altoDisponible = zonaAbajo - zonaArriba - tamBajada * 1.6;
  const { tam, lineas } = ajustarNombre(nombre, medir, ANCHO - MARGEN * 2, altoDisponible, interlineado, 640);

  const altoBloque = tamBajada * 1.6 + lineas.length * tam * interlineado;
  let y = zonaArriba + (zonaAbajo - zonaArriba - altoBloque) / 2 + tamBajada;
  ctx.font = `italic 400 ${tamBajada}px ${TITULO}`;
  ctx.fillStyle = GRIS;
  ctx.fillText(cierre.afiche.antes, MARGEN, y);
  y += tamBajada * 0.6;

  ctx.font = `500 ${tam}px ${TITULO}`;
  ctx.fillStyle = marca ? TINTA : 'rgba(18,18,18,0.22)';
  for (const linea of lineas) {
    y += tam * interlineado;
    espaciado(ctx, linea, MARGEN, y - tam * 0.12, CIERRE * tam);
  }
  ctx.restore();
}
