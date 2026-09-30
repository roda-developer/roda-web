import type { RubroId } from '../story/opciones';

export interface Proyecto {
  titulo: string;
  rubro: RubroId;
  /** Una línea, como la de un póster */
  logline: string;
  genero: string;
  anio: number;
  url?: string;
  /** Resultado medible y real. Si no hay dato real, no se muestra nada. */
  resultado?: string;
  /** Paleta del póster tipográfico */
  fondo: string;
  tinta: string;
}

// PENDIENTE (Giuli/Facu): confirmar loglines, años, links y resultados reales.
export const PROYECTOS: Proyecto[] = [
  {
    titulo: 'CosteAR',
    rubro: 'servicios',
    logline: 'Saber cuánto cuesta de verdad lo que vendés.',
    genero: 'Producto digital',
    anio: 2026,
    url: 'https://coste-ar.com',
    fondo: '#12261f',
    tinta: '#c9f2dc',
  },
  {
    titulo: 'Heacky',
    rubro: 'salud',
    logline: 'Entrenadores y alumnos, en la misma página.',
    genero: 'App · Plataforma',
    anio: 2026,
    fondo: '#1a1440',
    tinta: '#d8d2ff',
  },
  {
    titulo: 'Luciana Thibaut',
    rubro: 'arte',
    logline: 'Un portfolio que deja hablar al trabajo.',
    genero: 'Portfolio',
    anio: 2026,
    fondo: '#efe6da',
    tinta: '#2a1d14',
  },
  {
    titulo: 'Eber',
    rubro: 'arte',
    logline: 'Diseño gráfico en movimiento.',
    genero: 'Portfolio',
    anio: 2026,
    fondo: '#0f0f0f',
    tinta: '#f2f2f2',
  },
];

export function ordenarPorRubro(proyectos: Proyecto[], rubro: RubroId | null): Proyecto[] {
  if (!rubro) return proyectos;
  return [...proyectos].sort((a, b) => Number(b.rubro === rubro) - Number(a.rubro === rubro));
}
