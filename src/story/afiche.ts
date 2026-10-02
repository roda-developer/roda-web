/** La lógica del afiche final: qué nombre se muestra, cómo entra y qué dominio le inventamos. */
import { cierre } from '../content/guion';
import { RUBROS, type Respuestas } from './opciones';

export interface TextosAfiche {
  /** La frase arriba del nombre */
  antes: string;
  /** "Próximamente", o "Reestreno" si ya tiene web */
  estreno: string;
  /** El rubro, para los créditos */
  genero: string | null;
}

/** Lo que respondiste en la web aparece en tu afiche. */
export function textosAfiche(r: Respuestas): TextosAfiche {
  const a = cierre.afiche;
  return {
    antes: r.objetivo ? `Una historia para que ${a.paraQue[r.objetivo]}` : a.antes,
    estreno: r.situacion === 'no-representa' || r.situacion === 'quiero-mas' ? a.reestreno : a.proximamente,
    genero: r.rubro && r.rubro !== 'otro' ? (RUBROS.find((x) => x.id === r.rubro)?.label ?? null) : null,
  };
}

const LARGO_MAXIMO = 40;

export function limpiarMarca(texto: string): string {
  return texto.replace(/\s+/g, ' ').trim().slice(0, LARGO_MAXIMO);
}

/** "Panadería La Esquina" → "panaderialaesquina.com". Sin letras ni números, no hay dominio. */
export function dominioDe(marca: string): string {
  const base = marca
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]/g, '');
  return base ? `${base}.com` : '';
}

export interface Ajuste {
  tam: number;
  lineas: string[];
}

/**
 * El tamaño más grande en el que el nombre entra en `ancho` × `alto`, partiéndolo por palabras si hace falta.
 * `medir(texto, tam)` devuelve el ancho del texto a ese tamaño (en la web, el measureText del canvas).
 */
export function ajustarNombre(
  nombre: string,
  medir: (texto: string, tam: number) => number,
  ancho: number,
  alto: number,
  interlineado = 0.9,
  maximo = Infinity,
): Ajuste {
  const palabras = nombre.split(' ').filter(Boolean);
  const repartir = (tam: number): string[] | null => {
    const lineas: string[] = [];
    for (const palabra of palabras) {
      if (medir(palabra, tam) > ancho) return null;
      const ultima = lineas.at(-1);
      if (ultima !== undefined && medir(`${ultima} ${palabra}`, tam) <= ancho) lineas[lineas.length - 1] = `${ultima} ${palabra}`;
      else lineas.push(palabra);
    }
    return lineas.length * tam * interlineado <= alto ? lineas : null;
  };

  // Búsqueda binaria del tamaño entero más grande que entra
  let bajo = 1;
  let techo = Math.min(maximo, alto / interlineado);
  let mejor: Ajuste = { tam: 1, lineas: repartir(1) ?? palabras };
  while (bajo <= techo) {
    const medio = Math.floor((bajo + techo) / 2);
    const lineas = repartir(medio);
    if (lineas) {
      mejor = { tam: medio, lineas };
      bajo = medio + 1;
    } else {
      techo = medio - 1;
    }
  }
  return mejor;
}
