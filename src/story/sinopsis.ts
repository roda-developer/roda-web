import { OBJETIVOS, RUBROS, SITUACIONES, frase, gritaDesde, type Respuestas } from './opciones';

export const VACIAS: Respuestas = { situacion: null, objetivo: null, estilo: null, rubro: null };

export function armarSinopsis(r: Respuestas): string | null {
  const respondio = r.situacion || r.objetivo || r.rubro || r.estilo !== null;
  if (!respondio) return null;

  const rubro = frase(RUBROS, r.rubro);
  const sujeto = rubro ? `Una marca de ${rubro}` : 'Una marca';

  const clausulas: string[] = [];
  if (r.estilo !== null) clausulas.push(`que ${r.estilo >= gritaDesde ? 'grita' : 'susurra'}`);
  const situacion = frase(SITUACIONES, r.situacion);
  if (situacion) clausulas.push(`que hoy ${situacion}`);
  const objetivo = frase(OBJETIVOS, r.objetivo);
  if (objetivo) {
    const nexo = clausulas.length ? 'y necesita' : 'que necesita';
    clausulas.push(`${nexo} que sus clientes ${objetivo}`);
  }

  if (!clausulas.length) return rubro ? `${sujeto}.` : 'Una marca con una historia propia.';
  return `${sujeto} ${clausulas.join(', ')}.`;
}

function mensaje(r: Respuestas): string {
  const sinopsis = armarSinopsis(r);
  return sinopsis
    ? `Hola Roda, esta es mi historia: ${sinopsis} ¿La filmamos?`
    : 'Hola Roda, quiero contarles mi historia.';
}

export function linkWhatsApp(r: Respuestas, numero: string): string {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje(r))}`;
}

export function linkMail(r: Respuestas, mail: string): string {
  const asunto = encodeURIComponent('Mi historia');
  return `mailto:${mail}?subject=${asunto}&body=${encodeURIComponent(mensaje(r))}`;
}
