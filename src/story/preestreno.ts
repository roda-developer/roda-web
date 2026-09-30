import type { ObjetivoId, Respuestas, RubroId, SituacionId } from './opciones';
import { tonoDe, type Tono } from '../motion/intensidad';

/** Lo que se ve en la vista previa de "su web" al final del tráiler. Es un ejemplo ilustrativo. */
export interface Preestreno {
  marca: string;
  titular: string;
  boton: string;
  etiqueta: string | null;
  tono: Tono;
}

const MARCAS: Record<RubroId, [string, string]> = {
  gastronomia: ['Brasa', 'Cocina de fuego, sin apuro.'],
  moda: ['Hilo', 'Ropa que dura más que la temporada.'],
  salud: ['Pulso', 'Tu mejor versión, a tu ritmo.'],
  servicios: ['Norte', 'Números claros, decisiones simples.'],
  arte: ['Trazo', 'Obra que se mira dos veces.'],
  otro: ['Tu marca', 'Lo que hacés, dicho en una línea.'],
};

const BOTONES: Record<ObjetivoId, string> = {
  escriba: 'Escribinos',
  compre: 'Comprá ahora',
  reserve: 'Reservá tu lugar',
  vea: 'Mirá el trabajo',
};

const ETIQUETAS: Record<SituacionId, string> = {
  'sin-web': 'Tu primera web',
  'no-representa': 'Tu web, de nuevo',
  'quiere-mas': 'Tu web, un paso más allá',
};

export function preestreno(r: Respuestas): Preestreno {
  const [marca, titular] = MARCAS[r.rubro ?? 'otro'];
  return {
    marca,
    titular,
    boton: r.objetivo ? BOTONES[r.objetivo] : 'Conocenos',
    etiqueta: r.situacion ? ETIQUETAS[r.situacion] : null,
    tono: tonoDe(r.estilo),
  };
}
