import type { ImageMetadata } from 'astro';

/**
 * El estudio de caso de cada proyecto: láminas con la web entera (sin recortes), en compu y en celu, y la hoja de su marca.
 * Las fotos están en src/assets/proyectos/<slug>/estudio-*; los videos, en public/videos/<slug>-movimiento.mp4.
 * Los colores y las tipografías están medidos en la web publicada de cada cliente.
 * Un proyecto sin entrada acá (los cargados desde el admin) sigue con el detalle simple.
 */
const archivos = import.meta.glob<{ default: ImageMetadata }>('../assets/proyectos/*/estudio-*.{jpg,png}', { eager: true });
const foto = (slug: string, nombre: string) => {
  const f = archivos[`../assets/proyectos/${slug}/estudio-${nombre}.jpg`]?.default ?? archivos[`../assets/proyectos/${slug}/estudio-${nombre}.png`]?.default;
  if (!f) throw new Error(`Falta estudio-${nombre} en proyectos/${slug}`);
  return f;
};

// Los videos se bajan enteros antes de reproducirse: ver motion/video.ts
export type Pieza =
  | { tipo: 'foto'; src: ImageMetadata }
  | { tipo: 'video'; src: string; poster: string };

export interface Detalle {
  /** La primera pantalla, sola en su lámina */
  pantalla: ImageMetadata;
  /** Tres pantallas de celu; en el celu se ven las dos primeras */
  celulares: [ImageMetadata, ImageMetadata, ImageMetadata];
  /** Dos láminas juntas: otra pantalla y el movimiento real de la web */
  par: [Pieza, Pieza];
  marca: {
    colores: string[];
    fuentes: [{ nombre: string; muestra: ImageMetadata }, { nombre: string; muestra: ImageMetadata }];
  };
}

const armar = (slug: string, colores: string[], fuente1: string, fuente2: string, conVideo = true): Detalle => ({
  pantalla: foto(slug, 'p1'),
  celulares: [foto(slug, 'c1'), foto(slug, 'c2'), foto(slug, 'c3')],
  par: [
    { tipo: 'foto', src: foto(slug, 'p2') },
    conVideo
      ? { tipo: 'video', src: `/videos/${slug}-movimiento.mp4`, poster: `/videos/${slug}-movimiento.jpg` }
      : { tipo: 'foto', src: foto(slug, 'pieza') },
  ],
  marca: { colores, fuentes: [{ nombre: fuente1, muestra: foto(slug, 'aa1') }, { nombre: fuente2, muestra: foto(slug, 'aa2') }] },
});

const DETALLES: Record<string, Detalle> = {
  eber: armar('eber', ['#0A0A0C', '#F2333F', '#FFB400', '#1F7AEC', '#FFFFFF'], 'Inter', 'Space Mono'),
  craft: armar('craft', ['#FEFAF9', '#A52F18', '#000000'], 'Instrument Serif', 'Instrument Sans'),
  emme: armar('emme', ['#FF0000', '#050505', '#F5F5F5'], 'Inter', 'Italianno'),
  tmd: armar('tmd', ['#8C2A42', '#E07A5F', '#3D6E5E', '#2E2620', '#FBF8F3'], 'Playfair Display', 'Inter'),
  muda: armar('muda', ['#8B2535', '#14100E', '#C4825A', '#F0EAD8', '#FFFFFF'], 'Cormorant Garamond', 'DM Mono'),
  newave: armar('newave', ['#0A0A0B', '#CAA959', '#E5E7EB', '#FFFFFF'], 'Outfit Extra Bold', 'Outfit Regular'),
  unik: armar('unik', ['#3A2372', '#FAD600', '#A0A0A0', '#F3F3F3'], 'Be Vietnam Pro', 'Playfair Display'),
  fidalgo: armar('fidalgo', ['#111317', '#E8E6DD', '#F4F3EF', '#FFFFFF'], 'Outfit', 'Plus Jakarta Sans', false),
};

export const detalleDe = (slug: string): Detalle | undefined => DETALLES[slug];
