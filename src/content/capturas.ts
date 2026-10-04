import type { ImageMetadata } from 'astro';

/** Las capturas de cada proyecto, sacadas con scripts/capturar-proyectos.mjs */
const archivos = import.meta.glob<{ default: ImageMetadata }>('../assets/proyectos/*/*.jpg', { eager: true });

export interface Capturas {
  portada: ImageMetadata;
  afiche: ImageMetadata;
  /** Pantallas de más abajo, en orden */
  pantallas: ImageMetadata[];
  mobile: ImageMetadata | null;
}

export function capturas(slug: string): Capturas {
  const de = (nombre: string) => archivos[`../assets/proyectos/${slug}/${nombre}.jpg`]?.default ?? null;
  const portada = de('portada');
  if (!portada) throw new Error(`Falta la portada de ${slug}: corré node scripts/capturar-proyectos.mjs ${slug}`);
  const afiche = de('afiche') ?? portada;
  const pantallas = [1, 2, 3].map((n) => de(`pantalla-${n}`)).filter((i): i is ImageMetadata => i !== null);
  return { portada, afiche, pantallas, mobile: de('mobile') };
}
