import { ajustarNombre, dominioDe } from './afiche';
import { cierre } from '../content/guion';

/** El afiche se dibuja siempre a este tamaño (2:3): lo que se ve y lo que se descarga es la misma imagen. */
export const ANCHO = 1080;
export const ALTO = 1620;

const MARGEN = 66;
const PAPEL = '#f3f2ee';
const TINTA = '#121212';
const NEGRO = '#0a0a0a';
const GRIS = '#6b6862';

/** Los colores de la web, los mismos de MÁS ES MÁS */
export const COLORES = {
  rosa: '#ff6fd8',
  amarillo: '#ffd400',
  azul: '#2b4bff',
  rojo: '#ff2e4d',
  verde: '#00c46a',
} as const;
export type Color = keyof typeof COLORES;

/** Tres afiches: Estreno (papel y un sol), Cartel (color pleno, a los gritos) y Autor (negro, cine independiente) */
export const ESTILOS = ['estreno', 'cartel', 'autor'] as const;
export type Estilo = (typeof ESTILOS)[number];

/** Sobre el azul se lee el papel; sobre los demás, la tinta */
const sobre = (color: Color) => (color === 'azul' ? PAPEL : TINTA);
/** En el Cartel, una segunda forma de otro color que acompañe */
const COMPANERO: Record<Color, Color> = { rosa: 'azul', amarillo: 'rojo', azul: 'amarillo', rojo: 'amarillo', verde: 'rosa' };

interface Paleta {
  fondo: string;
  texto: string;
  suave: string;
  linea: string;
  acento: string;
  sobreAcento: string;
  anillo: string;
}

const TITULO = "'Inter Tight Variable', 'Helvetica Neue', Arial, sans-serif";
const GRITO = "'Bricolage Grotesque Variable', 'Arial Black', sans-serif";
const MONO = "'IBM Plex Mono', ui-monospace, monospace";

/** Las tipografías tienen que estar cargadas antes de dibujar, si no el canvas usa las del sistema. */
export function cargarTipografias(): Promise<unknown> {
  return Promise.all([
    document.fonts.load(`500 100px ${TITULO}`),
    document.fonts.load(`italic 400 100px ${TITULO}`),
    document.fonts.load(`600 100px ${TITULO}`),
    document.fonts.load(`800 100px ${GRITO}`),
    document.fonts.load(`700 100px ${GRITO}`),
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
function presenta(ctx: CanvasRenderingContext2D, y: number, p: Paleta) {
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
  ctx.fillStyle = p.texto;
  ctx.font = `500 ${tam}px ${TITULO}`;
  ctx.fillText('R', x, y);
  x += anchoR + separo;
  ctx.lineWidth = tam * 0.0714;
  ctx.strokeStyle = p.anillo;
  ctx.beginPath();
  ctx.arc(x + anillo / 2, y - anillo / 2, anillo / 2 - ctx.lineWidth / 2, 0, Math.PI * 2);
  ctx.stroke();
  x += anillo + separo;
  ctx.fillText('da', x, y);
  x += anchoDa + 30;
  ctx.font = `400 33px ${MONO}`;
  espaciado(ctx, palabra, x, y, espacio);
}

/** Los créditos en letra chica, centrados, con los nombres en negrita. Devuelve dónde empiezan. */
function creditos(ctx: CanvasRenderingContext2D, yBase: number, p: Paleta): number {
  const tam = 22;
  const espacio = tam * 0.14;
  const palabras: { t: string; negrita: boolean }[] = [];
  cierre.afiche.creditos.forEach(([rol, quien], i) => {
    if (i) palabras.push({ t: '·', negrita: false });
    rol.toUpperCase().split(' ').forEach((t) => palabras.push({ t, negrita: false }));
    quien.toUpperCase().split(' ').forEach((t) => palabras.push({ t, negrita: true }));
  });
  const fuente = (negrita: boolean) => `${negrita ? 600 : 400} ${tam}px ${TITULO}`;
  const medir = (w: { t: string; negrita: boolean }) => {
    ctx.font = fuente(w.negrita);
    return anchoEspaciado(ctx, w.t, espacio);
  };
  const blanco = tam * 0.5;

  // Se reparten en renglones que entren en el ancho
  const renglones: (typeof palabras)[] = [[]];
  let ancho = 0;
  for (const w of palabras) {
    const largo = medir(w);
    const renglon = renglones.at(-1)!;
    if (renglon.length && ancho + blanco + largo > ANCHO - MARGEN * 2) {
      renglones.push([w]);
      ancho = largo;
    } else {
      ancho += (renglon.length ? blanco : 0) + largo;
      renglon.push(w);
    }
  }

  const alto = tam * 1.5;
  let y = yBase - (renglones.length - 1) * alto;
  const arriba = y - tam;
  ctx.fillStyle = p.texto;
  for (const renglon of renglones) {
    const total = renglon.reduce((s, w, i) => s + medir(w) + (i ? blanco : 0), 0);
    let x = (ANCHO - total) / 2;
    for (const w of renglon) {
      ctx.font = fuente(w.negrita);
      x = espaciado(ctx, w.t, x, y, espacio) - espacio + blanco;
    }
    y += alto;
  }
  return arriba;
}

/** "Próximamente · solo en lupe.com", con "Próximamente" resaltado en el color elegido. */
function estreno(ctx: CanvasRenderingContext2D, y: number, dominio: string, p: Paleta) {
  const tam = 27;
  const espacio = tam * 0.16;
  const partes = [
    { t: cierre.afiche.proximamente.toUpperCase(), peso: 400, resalta: true },
    { t: `  ·  ${cierre.afiche.soloEn.toUpperCase()}  `, peso: 400, resalta: false },
    { t: (dominio || 'tumarca.com').toUpperCase(), peso: 500, resalta: false },
  ];
  const medidas = partes.map((w) => {
    ctx.font = `${w.peso} ${tam}px ${MONO}`;
    return anchoEspaciado(ctx, w.t, espacio);
  });
  let x = (ANCHO - medidas.reduce((a, b) => a + b, 0)) / 2;
  partes.forEach((w, i) => {
    ctx.font = `${w.peso} ${tam}px ${MONO}`;
    if (w.resalta) {
      ctx.fillStyle = p.acento;
      ctx.fillRect(x - 10, y - tam * 0.95, medidas[i] + 20, tam * 1.3);
    }
    ctx.fillStyle = w.resalta ? p.sobreAcento : p.texto;
    x = espaciado(ctx, w.t, x, y, espacio);
  });
}

/** El pie común a los tres: estreno, créditos y una línea arriba. Devuelve la altura de la línea. */
function pie(ctx: CanvasRenderingContext2D, marca: string, p: Paleta) {
  const yEstreno = ALTO - MARGEN - 10;
  estreno(ctx, yEstreno, dominioDe(marca), p);
  const yLinea = creditos(ctx, yEstreno - 70, p) - 30;
  ctx.fillStyle = p.linea;
  ctx.fillRect(MARGEN, yLinea, ANCHO - MARGEN * 2, 2);
  return yLinea;
}

function circulo(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color: string) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

/** Estreno: papel, un sol del color elegido y el nombre como título. */
function afEstreno(ctx: CanvasRenderingContext2D, nombre: string, vacio: boolean, p: Paleta, marca: string) {
  circulo(ctx, 900, 810, 450, p.acento);
  presenta(ctx, MARGEN + 90, p);
  const yLinea = pie(ctx, marca, p);

  const interlineado = 0.88;
  const CIERRE = -0.055; // las letras grandes se cierran un poco, como en el resto de la web
  ctx.font = `500 100px ${TITULO}`;
  const medir = (t: string, tam: number) => (ctx.measureText(t).width / 100) * tam + CIERRE * tam * Math.max(0, [...t].length - 1);
  const zonaArriba = MARGEN + 200;
  const zonaAbajo = yLinea - 60;
  const tamBajada = 45;
  const { tam, lineas } = ajustarNombre(nombre, medir, ANCHO - MARGEN * 2, zonaAbajo - zonaArriba - tamBajada * 1.6, interlineado, 640);

  let y = zonaArriba + (zonaAbajo - zonaArriba - (tamBajada * 1.6 + lineas.length * tam * interlineado)) / 2 + tamBajada;
  ctx.font = `italic 400 ${tamBajada}px ${TITULO}`;
  ctx.fillStyle = p.suave;
  ctx.fillText(cierre.afiche.antes, MARGEN, y);
  y += tamBajada * 0.6;
  ctx.font = `500 ${tam}px ${TITULO}`;
  ctx.fillStyle = vacio ? p.suave : p.texto;
  for (const linea of lineas) {
    y += tam * interlineado;
    espaciado(ctx, linea, MARGEN, y - tam * 0.12, CIERRE * tam);
  }
}

/** Cartel: color pleno, una forma que acompaña y el nombre a los gritos, como en MÁS ES MÁS. */
function afCartel(ctx: CanvasRenderingContext2D, nombre: string, vacio: boolean, p: Paleta, marca: string, color: Color) {
  circulo(ctx, 960, 440, 230, COLORES[COMPANERO[color]]);
  presenta(ctx, MARGEN + 90, p);
  const yLinea = pie(ctx, marca, p);

  const interlineado = 0.84;
  const CIERRE = -0.03;
  const texto = nombre.toUpperCase();
  ctx.font = `800 100px ${GRITO}`;
  const medir = (t: string, tam: number) => (ctx.measureText(t).width / 100) * tam + CIERRE * tam * Math.max(0, [...t].length - 1);
  const tamBajada = 46;
  const zonaArriba = MARGEN + 260;
  const zonaAbajo = yLinea - 70 - tamBajada * 1.8;
  const { tam, lineas } = ajustarNombre(texto, medir, ANCHO - MARGEN * 2, zonaAbajo - zonaArriba, interlineado, 520);

  // El nombre se apoya abajo, sobre la bajada
  let y = zonaAbajo - lineas.length * tam * interlineado;
  ctx.font = `800 ${tam}px ${GRITO}`;
  ctx.fillStyle = vacio ? p.suave : p.texto;
  for (const linea of lineas) {
    y += tam * interlineado;
    espaciado(ctx, linea, MARGEN, y - tam * 0.06, CIERRE * tam);
  }
  ctx.font = `700 ${tamBajada}px ${GRITO}`;
  ctx.fillStyle = p.texto;
  ctx.fillText(`${cierre.afiche.antes}.`, MARGEN, y + tamBajada * 1.5);
}

/** Autor: negro, el nombre en mayúsculas espaciadas como la intro de Nosotros y una línea fina de color. */
function afAutor(ctx: CanvasRenderingContext2D, nombre: string, vacio: boolean, p: Paleta, marca: string) {
  presenta(ctx, MARGEN + 90, p);
  const yLinea = pie(ctx, marca, p);

  const ESPACIO = 0.22;
  const interlineado = 1.3;
  const texto = nombre.toUpperCase();
  ctx.font = `500 100px ${TITULO}`;
  const medir = (t: string, tam: number) => (ctx.measureText(t).width / 100) * tam + ESPACIO * tam * Math.max(0, [...t].length - 1);
  const { tam, lineas } = ajustarNombre(texto, medir, ANCHO - MARGEN * 2 - 40, 520, interlineado, 130);

  const centro = (MARGEN + 200 + yLinea) / 2;
  const tamBajada = 24;
  const altoBloque = tamBajada * 3 + lineas.length * tam * interlineado + 60;
  let y = centro - altoBloque / 2 + tamBajada;

  // Arriba, la bajada chica y espaciada
  ctx.font = `500 ${tamBajada}px ${TITULO}`;
  ctx.fillStyle = p.suave;
  const bajada = cierre.afiche.antes.toUpperCase();
  espaciado(ctx, bajada, (ANCHO - anchoEspaciado(ctx, bajada, tamBajada * 0.4)) / 2, y, tamBajada * 0.4);
  y += tamBajada * 2;

  ctx.font = `500 ${tam}px ${TITULO}`;
  ctx.fillStyle = vacio ? p.suave : p.texto;
  for (const linea of lineas) {
    y += tam * interlineado * 0.85;
    const ancho = anchoEspaciado(ctx, linea, ESPACIO * tam);
    espaciado(ctx, linea, (ANCHO - ancho) / 2, y, ESPACIO * tam);
  }
  // La línea fina de color, como un subrayado de título
  ctx.fillStyle = p.acento;
  ctx.fillRect((ANCHO - 140) / 2, y + 60, 140, 6);
}

export interface Opciones {
  marca: string;
  estilo?: Estilo;
  color?: Color;
}

/** Dibuja el afiche completo. Sin marca, el título queda como "Tu marca", esperando. */
export function dibujarAfiche(ctx: CanvasRenderingContext2D, { marca, estilo = 'estreno', color = 'rosa' }: Opciones) {
  const acento = COLORES[color];
  const paletas: Record<Estilo, Paleta> = {
    estreno: { fondo: PAPEL, texto: TINTA, suave: GRIS, linea: 'rgba(18,18,18,0.2)', acento, sobreAcento: sobre(color), anillo: TINTA },
    cartel: { fondo: acento, texto: sobre(color), suave: sobre(color) === PAPEL ? 'rgba(243,242,238,0.45)' : 'rgba(18,18,18,0.35)', linea: sobre(color) === PAPEL ? 'rgba(243,242,238,0.35)' : 'rgba(18,18,18,0.25)', acento: sobre(color), sobreAcento: acento, anillo: sobre(color) },
    autor: { fondo: NEGRO, texto: PAPEL, suave: 'rgba(243,242,238,0.55)', linea: 'rgba(243,242,238,0.2)', acento, sobreAcento: sobre(color), anillo: acento },
  };
  const p = paletas[estilo];
  const vacio = !marca;
  const nombre = marca || cierre.afiche.vacio;

  ctx.save();
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = p.fondo;
  ctx.fillRect(0, 0, ANCHO, ALTO);
  if (estilo === 'cartel') afCartel(ctx, nombre, vacio, p, marca, color);
  else if (estilo === 'autor') afAutor(ctx, nombre, vacio, p, marca);
  else afEstreno(ctx, nombre, vacio, p, marca);
  ctx.restore();
}
