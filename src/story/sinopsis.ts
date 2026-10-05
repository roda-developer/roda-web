import { OBJETIVOS, RUBROS, SITUACIONES, frase, type Respuestas } from './opciones';

export const VACIAS: Respuestas = { situacion: null, objetivo: null, estilo: null, rubro: null };

/** La sinopsis partida en cartas de título: juntas con espacios, son la sinopsis. */
export function fragmentosSinopsis(r: Respuestas): string[] {
  const respondio = r.situacion || r.objetivo || r.rubro || r.estilo !== null;
  if (!respondio) return [];

  const rubro = frase(RUBROS, r.rubro);
  const sujeto = rubro ? `Una marca de ${rubro}` : 'Una marca';

  const clausulas: string[] = [];
  const situacion = frase(SITUACIONES, r.situacion);
  if (situacion) clausulas.push(`que hoy ${situacion}`);
  const objetivo = frase(OBJETIVOS, r.objetivo);
  if (objetivo) {
    const nexo = clausulas.length ? 'y necesita' : 'que necesita';
    clausulas.push(`${nexo} que sus clientes ${objetivo}`);
  }

  if (!clausulas.length) return [rubro ? `${sujeto}.` : 'Una marca con una historia propia.'];
  return [sujeto, ...clausulas.map((c, i) => (i === clausulas.length - 1 ? `${c}.` : `${c},`))];
}

export function armarSinopsis(r: Respuestas): string | null {
  const cartas = fragmentosSinopsis(r);
  return cartas.length ? cartas.join(' ') : null;
}

function mensaje(r: Respuestas, marca = ''): string {
  const sinopsis = armarSinopsis(r);
  // Con el nombre del afiche, el mensaje se presenta con la marca
  if (marca) return [`Hola Roda, soy de ${marca}.`, sinopsis, 'Queremos empezar a contar nuestra historia.'].filter(Boolean).join(' ');
  return sinopsis
    ? `Hola Roda, esta es mi historia: ${sinopsis} ¿La filmamos?`
    : 'Hola Roda, quiero contarles mi historia.';
}

export function linkMail(r: Respuestas, mail: string, marca = ''): string {
  const asunto = encodeURIComponent(marca ? `La historia de ${marca}` : 'Mi historia');
  return `mailto:${mail}?subject=${asunto}&body=${encodeURIComponent(mensaje(r, marca))}`;
}
