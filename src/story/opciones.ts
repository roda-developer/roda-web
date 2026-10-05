export interface Opcion<Id extends string> {
  id: Id;
  /** Lo que ve el visitante en el botón */
  label: string;
  /** Cómo se lee dentro de la sinopsis; null = no se nombra */
  frase: string | null;
}

export const SITUACIONES = [
  { id: 'sin-web', label: 'No tengo web', frase: 'no tiene web' },
  { id: 'no-representa', label: 'Tengo, pero no me representa', frase: 'tiene web pero no la representa' },
  { id: 'quiero-mas', label: 'Tengo, pero quiero más', frase: 'tiene web pero quiere más' },
] as const satisfies readonly Opcion<string>[];

export const OBJETIVOS = [
  { id: 'escriba', label: 'Que me escriba', frase: 'le escriban' },
  { id: 'compre', label: 'Que compre', frase: 'compren' },
  { id: 'reserve', label: 'Que reserve', frase: 'reserven' },
  { id: 'vea', label: 'Que vea mi trabajo', frase: 'vean su trabajo' },
] as const satisfies readonly Opcion<string>[];

export const RUBROS = [
  { id: 'gastronomia', label: 'Gastronomía', frase: 'gastronomía' },
  { id: 'moda', label: 'Moda', frase: 'moda' },
  { id: 'salud', label: 'Salud y bienestar', frase: 'salud y bienestar' },
  { id: 'servicios', label: 'Servicios profesionales', frase: 'servicios profesionales' },
  { id: 'arte', label: 'Arte y diseño', frase: 'arte y diseño' },
  { id: 'otro', label: 'Otro', frase: null },
] as const satisfies readonly Opcion<string>[];

export type SituacionId = (typeof SITUACIONES)[number]['id'];
export type ObjetivoId = (typeof OBJETIVOS)[number]['id'];
export type RubroId = (typeof RUBROS)[number]['id'];

export interface Respuestas {
  situacion: SituacionId | null;
  objetivo: ObjetivoId | null;
  /** 0 = susurra, 1 = grita */
  estilo: number | null;
  rubro: RubroId | null;
}

export const frase = <Id extends string>(lista: readonly Opcion<Id>[], id: Id | null) =>
  id === null ? null : (lista.find((o) => o.id === id)?.frase ?? null);

