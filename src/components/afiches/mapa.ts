/**
 * El afiche de cada proyecto. Los apaisados (quad) ocupan dos columnas en /proyectos.
 * Lo usan /proyectos (la cartelera) y el caso (abre con su afiche). Los cargados desde el admin llevan el genérico.
 */
import AficheEmme from './AficheEmme.astro';
import AficheMuda from './AficheMuda.astro';
import AficheEber from './AficheEber.astro';
import AficheCraft from './AficheCraft.astro';
import AficheUnik from './AficheUnik.astro';
import AficheFidalgo from './AficheFidalgo.astro';
import AficheTmd from './AficheTmd.astro';
import AficheNewave from './AficheNewave.astro';
import AficheGenerico from './AficheGenerico.astro';

export const AFICHES = {
  emme: { Afiche: AficheEmme, quad: true },
  muda: { Afiche: AficheMuda, quad: false },
  eber: { Afiche: AficheEber, quad: false },
  craft: { Afiche: AficheCraft, quad: true },
  tmd: { Afiche: AficheTmd, quad: false },
  newave: { Afiche: AficheNewave, quad: true },
  unik: { Afiche: AficheUnik, quad: true },
  fidalgo: { Afiche: AficheFidalgo, quad: false },
} as const;

export const aficheDe = (slug: string) => AFICHES[slug as keyof typeof AFICHES] ?? { Afiche: AficheGenerico, quad: false };

/** El nombre de la View Transition: el afiche (o la foto de Trabajos en la home) viaja al caso con este nombre */
export const nombreVt = (slug: string) => `afiche-${slug.replace(/[^a-z0-9-]/gi, '-')}`;
