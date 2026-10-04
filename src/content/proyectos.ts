import type { RubroId } from '../story/opciones';

export interface Proyecto {
  /** Va en la URL: /proyectos/<slug>. Coincide con la carpeta de capturas en src/assets/proyectos. */
  slug: string;
  titulo: string;
  rubro: RubroId;
  /** Una línea, la que se lee en el índice */
  logline: string;
  /** Qué es, en dos palabras: "Portfolio", "Web + panel" */
  genero: string;
  anio: number;
  /** Qué hicimos nosotros */
  rol: string;
  /** La web en vivo. Se muestra solo como botón, nunca la dirección escrita. */
  url: string;
  /** Quién es el cliente y qué hace */
  cliente: string;
  /** Qué necesitaba */
  desafio: string;
  /** Qué hicimos, en uno o dos párrafos */
  solucion: string[];
  /** Detalles que se notan al usarla */
  destacados: string[];
  /** Resultado medible y real. Si no hay dato real, no se muestra nada. */
  resultado?: string;
}

// PENDIENTE (Giuli/Facu): revisar todos los textos, confirmar rubros y años, y sumar resultados reales.
// Están escritos a partir de cada repo; nada de lo que dice es inventado, pero puede faltar contexto.
export const PROYECTOS: Proyecto[] = [
  {
    slug: 'muda',
    titulo: 'MUDA',
    rubro: 'servicios',
    logline: 'Estética con propósito.',
    genero: 'Web + panel propio',
    anio: 2026,
    rol: 'Diseño y desarrollo',
    url: 'https://mudaagcy.com',
    cliente: 'Productora creativa integral en Palermo, de Justina Porta y Lucila Beltramino: producción de foto y video, dirección creativa, eventos, agencia de talentos y alquiler de estudio.',
    desafio: 'Hacen muchas cosas distintas y todas tenían que entrar en una sola web sin que pareciera un catálogo. Y necesitaban mostrar trabajos nuevos todo el tiempo, sin depender de nadie para subirlos.',
    solucion: [
      'Una web sobria y editorial, en bordó y blanco, donde la imagen manda y el texto acompaña.',
      'Del otro lado, un panel propio y privado: el equipo de MUDA carga sus trabajos y fotos, y la web se actualiza sola.',
    ],
    destacados: ['Un panel de carga hecho a su medida, separado de la web pública', 'Cada servicio con su espacio, sin mezclar públicos', 'Pensada para verse primero en el celular'],
  },
  {
    slug: 'emme',
    titulo: 'Emme Digital',
    rubro: 'servicios',
    logline: 'Para quienes no piden permiso.',
    genero: 'Web de agencia',
    anio: 2026,
    rol: 'Dirección de arte, diseño y desarrollo',
    url: 'https://www.emmedigital.com.ar',
    cliente: 'Agencia creativa boutique. Su frase lo dice todo: “Creamos el nuevo estándar para quienes no piden permiso”.',
    desafio: 'Una agencia que vende impacto no puede tener una web tímida. Tenía que sentirse como abrir una revista de moda, no como entrar a un sitio corporativo.',
    solucion: [
      'Una web editorial y brutalista, en negro, blanco y un rojo que no pide disculpas. Las letras de EMME no son una tipografía: están dibujadas trazo por trazo.',
      'El manifiesto se lee a medida que bajás, y los trabajos se abren como páginas de revista.',
    ],
    destacados: ['Logotipo dibujado a mano, nítido en cualquier pantalla', 'Textura de grano y tiza para que no se sienta plana', 'Animaciones suaves a lo largo de todo el recorrido'],
  },
  {
    slug: 'eber',
    titulo: 'Eber',
    rubro: 'arte',
    logline: 'Diez años de identidades, en un solo lugar.',
    genero: 'Portfolio',
    anio: 2026,
    rol: 'Diseño y desarrollo',
    url: 'https://eber-portfolio.vercel.app',
    cliente: 'Diseñador gráfico, ilustrador y tipógrafo. Dirección de arte para la industria textil, el entretenimiento y los contenidos infantiles.',
    desafio: 'Un trabajo muy colorido y muy distinto entre sí. El portfolio tenía que ordenarlo sin apagarlo, y dejar que cada proyecto se cuente solo.',
    solucion: [
      'Un fondo neutro que deja que el color lo pongan los proyectos. Cada caso tiene su propia página, lista para mandar por link.',
      'Tres modos para mirarlo (oscuro, claro y cremita), que se recuerdan la próxima vez que volvés.',
    ],
    destacados: ['Cada caso de estudio con su propio link', 'Tres modos de color a elección del visitante', 'Imágenes que cargan al tamaño justo para cada pantalla'],
  },
  {
    slug: 'craft',
    titulo: 'Craft Studio',
    rubro: 'arte',
    logline: 'Tu marca tiene mucho para decir.',
    genero: 'Web de estudio + panel',
    anio: 2026,
    rol: 'Diseño y desarrollo',
    url: 'https://craftstudio.com.ar',
    cliente: 'Estudio de identidad visual, branding y comunicación estratégica en Buenos Aires, para marcas en crecimiento.',
    desafio: 'Un estudio de marca se juega la credibilidad en su propia web. Tenía que sentirse cálida y artesanal, y a la vez dejar claro cómo trabajan.',
    solucion: [
      'Una web con fotografía protagonista, tipografía con carácter y collages que muestran el proceso, no solo el resultado.',
      'Un panel propio para que el estudio sume proyectos y marcas sin tocar código.',
    ],
    destacados: ['Collages y fotos que cuentan el proceso', 'Sus dos formas de trabajar, explicadas en una sola pantalla', 'Panel propio para cargar proyectos'],
  },
  {
    slug: 'fidalgo',
    titulo: 'Fidalgo Select',
    rubro: 'otro',
    logline: 'Autos y propiedades, con trato directo.',
    genero: 'Catálogo + panel de gestión',
    anio: 2026,
    rol: 'Diseño y desarrollo',
    url: 'https://fidalgoselect.com',
    cliente: 'Selección de autos y propiedades de alta gama en Tucumán, Salta y Buenos Aires, con trato directo con su dueño.',
    desafio: 'Un catálogo que cambia todas las semanas, con muchas fotos pesadas, y un cliente que necesitaba manejarlo solo. Cada consulta tenía que terminar en una conversación.',
    solucion: [
      'Un catálogo que el cliente maneja desde su propio panel: suma autos, propiedades y hasta categorías nuevas sin pedirnos nada.',
      'Cada consulta abre WhatsApp con el auto, el precio y el link ya escritos. Las propiedades se ven en un mapa, y quien quiere vender completa un formulario.',
      'Encontramos fotos que pesaban hasta 8 MB por un error del sistema anterior y las rehicimos: ahora cada foto se pide al tamaño justo.',
    ],
    destacados: ['Panel propio: el cliente publica sin depender de nadie', 'Consultas por WhatsApp con el mensaje ya armado', 'Propiedades en mapa y formulario para vender'],
  },
  {
    slug: 'unik',
    titulo: 'Unik',
    rubro: 'servicios',
    logline: 'Tu marca es única. Que el mundo la vea.',
    genero: 'Web de agencia',
    anio: 2026,
    rol: 'Diseño y desarrollo',
    url: 'https://unik-kappa.vercel.app',
    cliente: 'Agencia de publicidad creativa: branding, contenido y campañas, con una dupla al frente.',
    desafio: 'Una agencia que se define como “explosiva” no podía tener una web prolija y gris. Tenía que tener su energía y, aun así, llevar a cada visitante a escribirles.',
    solucion: [
      'Violeta, amarillo y formas que se mueven: una web con la personalidad de la agencia, de punta a punta.',
      'Los proyectos se abren en galerías con zoom, y WhatsApp está a un toque desde la portada, los servicios y el pie.',
    ],
    destacados: ['Cursor y menú propios, que responden al movimiento', 'Galerías de proyecto con zoom a pantalla completa', 'Distinta en celular y en computadora, pensada para cada una'],
  },
];

export function ordenarPorRubro(proyectos: Proyecto[], rubro: RubroId | null): Proyecto[] {
  if (!rubro) return proyectos;
  return [...proyectos].sort((a, b) => Number(b.rubro === rubro) - Number(a.rubro === rubro));
}

export function proyectoSiguiente(slug: string): Proyecto {
  const i = PROYECTOS.findIndex((p) => p.slug === slug);
  return PROYECTOS[(i + 1) % PROYECTOS.length];
}
