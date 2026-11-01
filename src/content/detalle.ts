import type { ImageMetadata } from 'astro';

/**
 * El estudio de caso de cada proyecto: capturas, celulares, detalles de cerca y video.
 * Las fotos están en src/assets/proyectos/<slug>/estudio-*.jpg y los videos en public/videos/<slug>-movimiento.mp4.
 * destacado = cuál frase de proyectos.ts acompaña a la pieza. Solo donde la imagen muestra eso de verdad; si no, va sin texto.
 * Un proyecto sin entrada acá (los cargados desde el admin) sigue con el detalle simple.
 */
const fotos = import.meta.glob<{ default: ImageMetadata }>('../assets/proyectos/*/estudio-*.jpg', { eager: true });
const foto = (slug: string, nombre: string) => {
  const f = fotos[`../assets/proyectos/${slug}/estudio-${nombre}.jpg`]?.default;
  if (!f) throw new Error(`Falta estudio-${nombre}.jpg en proyectos/${slug}`);
  return f;
};

export type Pieza =
  | { tipo: 'foto'; src: ImageMetadata; destacado?: number }
  | { tipo: 'video'; src: string; poster: string; destacado?: number };

export interface Detalle {
  /** Las dos pantallas de compu a lo ancho (16:10) */
  pantallas: [ImageMetadata, ImageMetadata];
  /** Tres pantallas de celu; en el celu se ven las dos primeras */
  celulares: [ImageMetadata, ImageMetadata, ImageMetadata];
  /** De cerca: una franja a lo ancho y un par (16:10) */
  ancha: ImageMetadata;
  par: [Pieza, Pieza];
}

const video = (slug: string, destacado?: number): Pieza => ({ tipo: 'video', src: `/videos/${slug}-movimiento.mp4`, poster: `/videos/${slug}-movimiento.jpg`, destacado });
const pieza = (slug: string, destacado?: number, nombre = 'pieza'): Pieza => ({ tipo: 'foto', src: foto(slug, nombre), destacado });
const armar = (slug: string, par: [Pieza, Pieza]): Detalle => ({
  pantallas: [foto(slug, 'p1'), foto(slug, 'p2')],
  celulares: [foto(slug, 'c1'), foto(slug, 'c2'), foto(slug, 'c3')],
  ancha: foto(slug, 'ancha'),
  par,
});

const DETALLES: Record<string, Detalle> = {
  eber: armar('eber', [pieza('eber', 2), video('eber', 0)]),
  craft: armar('craft', [pieza('craft', 1), video('craft', 0)]),
  emme: armar('emme', [pieza('emme', 1), video('emme', 2)]),
  tmd: armar('tmd', [pieza('tmd', 1), video('tmd', 0)]),
  muda: armar('muda', [pieza('muda', 1), video('muda')]),
  newave: armar('newave', [pieza('newave', 0), video('newave', 1)]),
  unik: armar('unik', [pieza('unik', 1), video('unik')]),
  fidalgo: armar('fidalgo', [pieza('fidalgo', 1), pieza('fidalgo', undefined, 'pieza2')]),
};

export const detalleDe = (slug: string): Detalle | undefined => DETALLES[slug];
