import { TRADUCCIONES } from './proyectos.traducciones';
import type { RubroId } from '../story/opciones';
import { validarProyectoAdmin } from './proyecto-admin';

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
  /** Los créditos al pie del afiche del proyecto ({entre llaves} va en letra chica) */
  creditosAfiche?: string;
  /** Lo que dijeron los clientes. Solo se edita con su permiso (2026-10-05: las clientas aprobaron nombrar a los dos) */
  testimonios?: Testimonio[];
}

export interface Testimonio {
  texto: string;
  /** La frase más fuerte, textual (tiene que estar dentro de texto): es la que se cita en la home */
  destacado: string;
  nombre: string;
  rol: string;
  /** true si se muestra traducido (el original es en español) */
  traducido?: boolean;
}

/**
 * Proyectos cargados desde el admin (admin.rodadevelop.com → Web): un JSON por proyecto en
 * src/content/proyectos-admin y sus capturas en src/assets/proyectos/<slug>. El admin los sube a GitHub
 * y Cloudflare publica solo. Llevan sus traducciones adentro y un afiche genérico (AficheGenerico).
 */
export interface ProyectoAdmin extends Proyecto {
  traducciones?: Partial<Record<'en' | 'pt', Partial<Omit<Proyecto, 'slug' | 'rubro' | 'anio' | 'url'>>>>;
  /** Color de acento del afiche */
  color?: string;
}
const desdeAdmin = import.meta.glob<{ default: unknown }>('./proyectos-admin/*.json', { eager: true });
// Cada JSON se valida: si viene roto, el build se frena diciendo qué archivo y qué campo
export const PROYECTOS_ADMIN: ProyectoAdmin[] = Object.entries(desdeAdmin).map(([archivo, m]) => validarProyectoAdmin(m.default, archivo));

// PENDIENTE (Giuli/Facu): revisar todos los textos, confirmar rubros y años, y sumar resultados reales.
// Están escritos a partir de cada repo; nada de lo que dice es inventado, pero puede faltar contexto.
const PROYECTOS_CODIGO: Proyecto[] = [
  {
    slug: 'newave',
    creditosAfiche: 'Roda {presenta} Newave {una tienda de} suplementos deportivos {con} catálogo por categorías {y} carrito de compras {diseño y desarrollo} Facundo Thibaut',
    titulo: 'Newave',
    rubro: 'salud',
    logline: 'Energía. Fuerza. Resultados.',
    genero: 'Tienda online',
    anio: 2026,
    rol: 'Diseño y desarrollo',
    url: 'https://newave-suplementos.vercel.app',
    cliente: 'Tienda de suplementos deportivos.',
    desafio: 'Necesitaba vender online productos de muchas marcas, con una tienda ordenada y fácil de comprar.',
    solucion: ['Una tienda con catálogo por categorías, una página para cada producto, buscador y carrito.'],
    destacados: ['Seis categorías para encontrar rápido cada producto', 'Los más vendidos en la portada', 'Buscador, cuenta de usuario y carrito'],
    testimonios: [
      {
        texto: 'Los chicos entendieron super bien lo que buscábamos, e hicieron todo muy rápido. Cada cosa que le pedíamos que la cambien, lo hacían sin problema. Hasta que no le dijimos que estaba perfecto no terminaron de trabajar!',
        destacado: 'Hasta que no le dijimos que estaba perfecto no terminaron de trabajar!',
        nombre: 'Agustín Marchetta',
        rol: 'Newave',
      },
    ],
  },
  {
    slug: 'tmd',
    creditosAfiche: 'Roda {presenta} The Magical Duo {una agencia de viajes a} Disney · Universal · cruceros · Caribe {diseño y desarrollo} Giuliana Di Rocco · Facundo Thibaut',
    titulo: 'The Magical Duo',
    rubro: 'servicios',
    logline: 'Tu viaje soñado, a un mensaje de distancia.',
    genero: 'Web de agencia de viajes',
    anio: 2026,
    rol: 'Diseño y desarrollo',
    url: 'https://themagicalduo.com',
    cliente: 'Agentes de viajes de Buenos Aires, especialistas en Disney, Universal, cruceros y el Caribe.',
    desafio: 'Necesitaban una web que diera ganas de viajar y terminara en una consulta.',
    solucion: ['Una portada con sus seis destinos en fotos grandes, una página por servicio y un formulario que les llega al mail.'],
    destacados: ['Seis destinos a pantalla completa', 'WhatsApp a un toque desde cualquier página', 'Cursor y partículas con los colores de la marca'],
  },
  {
    slug: 'muda',
    creditosAfiche: 'Roda {presenta} MUDA {productora creativa integral} foto y video · dirección creativa · eventos · agencia de talentos · estudio en Palermo {con} panel propio {diseño y desarrollo} Giuliana Di Rocco · Facundo Thibaut',
    titulo: 'MUDA',
    rubro: 'servicios',
    logline: 'Estética con propósito.',
    genero: 'Web + panel propio',
    anio: 2026,
    rol: 'Diseño y desarrollo',
    url: 'https://mudaagcy.com',
    cliente: 'Productora creativa de Palermo: foto, video, eventos, talentos y alquiler de estudio.',
    desafio: 'Hacen muchas cosas y necesitaban mostrarlas en un solo lugar, y subir trabajos nuevos sin depender de nadie.',
    solucion: ['Una web donde la imagen manda y un panel propio: cargan sus trabajos y la web se actualiza sola.'],
    destacados: ['Panel de carga hecho a su medida', 'Cada servicio con su propio espacio', 'Pensada primero para el celular'],
  },
  {
    slug: 'emme',
    creditosAfiche: 'Roda {presenta una web de} Emme Digital {con} un logotipo dibujado trazo por trazo {y} un manifiesto que se lee al bajar {dirección de arte, diseño y desarrollo} Giuliana Di Rocco · Facundo Thibaut',
    testimonios: [
      {
        texto: 'Una experiencia increíble de principio a fin. Supieron entender exactamente lo que buscaba y crear una web que me representa 100%. Siempre estuvieron atentos, predispuestos y resolviendo todo rapidísimo. El resultado superó totalmente mis expectativas. Los recomiendo muchísimo.',
        destacado: 'El resultado superó totalmente mis expectativas.',
        nombre: 'Macarena López',
        rol: 'Emme Digital',
      },
    ],
    titulo: 'Emme Digital',
    rubro: 'servicios',
    logline: 'Para quienes no piden permiso.',
    genero: 'Web de agencia',
    anio: 2026,
    rol: 'Dirección de arte, diseño y desarrollo',
    url: 'https://www.emmedigital.com.ar',
    cliente: 'Agencia creativa boutique.',
    desafio: 'Venden impacto, y su web tenía que transmitirlo desde el primer segundo.',
    solucion: ['Una web en negro, blanco y rojo, con el logo dibujado a mano y un manifiesto que se lee a medida que bajás.'],
    destacados: ['Logo dibujado a mano, nítido en cualquier pantalla', 'Textura de grano para que no se sienta plana', 'Animaciones suaves en todo el recorrido'],
  },
  {
    slug: 'eber',
    titulo: 'Eber',
    rubro: 'arte',
    logline: 'Diez años de identidades, en un solo lugar.',
    genero: 'Portfolio',
    anio: 2026,
    rol: 'Diseño y desarrollo',
    url: 'https://eber.ar',
    cliente: 'Diseñador gráfico, ilustrador y tipógrafo.',
    desafio: 'Tiene trabajos muy coloridos y muy distintos, y necesitaba ordenarlos sin apagarlos.',
    solucion: ['Un portfolio de fondo neutro donde el color lo ponen los trabajos, con una página para cada proyecto, lista para mandar por link.'],
    destacados: ['Cada proyecto con su propia página', 'Tres modos de color a elección', 'Una sección aparte para su obra personal'],
  },
  {
    slug: 'craft',
    creditosAfiche: 'Roda {presenta} Craft Studio {un estudio de} identidad visual · branding · comunicación estratégica {con} panel propio {diseño y desarrollo} Giuliana Di Rocco · Facundo Thibaut',
    titulo: 'Craft Studio',
    rubro: 'arte',
    logline: 'Tu marca tiene mucho para decir.',
    genero: 'Web de estudio + panel',
    anio: 2026,
    rol: 'Diseño y desarrollo',
    url: 'https://craftstudio.com.ar',
    cliente: 'Estudio de identidad visual y comunicación de Buenos Aires, para marcas en crecimiento.',
    desafio: 'Un estudio de marca se juega la credibilidad en su propia web. Tenía que verse cálida y explicar bien cómo trabajan.',
    solucion: ['Una web con fotos protagonistas y collages del proceso, y un panel para sumar proyectos sin tocar código.'],
    destacados: ['Collages y fotos que cuentan el proceso', 'Sus dos formas de trabajar, en una sola pantalla', 'Panel propio para cargar proyectos'],
  },
  {
    slug: 'fidalgo',
    creditosAfiche: 'Roda {presenta una web de} Fidalgo Select {catálogo de} autos · propiedades · inversiones {con} panel de gestión propio {y} consultas por WhatsApp {diseño y desarrollo} Giuliana Di Rocco · Facundo Thibaut',
    titulo: 'Fidalgo Select',
    rubro: 'otro',
    logline: 'Autos y propiedades, con trato directo.',
    genero: 'Catálogo + panel de gestión',
    anio: 2026,
    rol: 'Diseño y desarrollo',
    url: 'https://fidalgoselect.com',
    cliente: 'Autos y propiedades de alta gama en Tucumán, Salta y Buenos Aires, con trato directo con su dueño.',
    desafio: 'Su catálogo cambia todas las semanas: necesitaba manejarlo solo y que cada consulta terminara en una charla.',
    solucion: ['Un panel donde suma autos y propiedades sin pedirnos nada. Cada consulta abre WhatsApp con el auto, el precio y el link ya escritos.'],
    destacados: ['Publica sin depender de nadie', 'Consultas por WhatsApp con el mensaje armado', 'Propiedades en un mapa y formulario para vender'],
  },
  {
    slug: 'unik',
    creditosAfiche: 'Roda {presenta} Unik {una agencia de} branding · contenido · campañas {con} cursor y menú propios {y} galerías a pantalla completa {diseño y desarrollo} Giuliana Di Rocco · Facundo Thibaut',
    testimonios: [
      {
        texto: 'Pasar de un PDF en Canva a una web profesional cambió totalmente cómo nos ven los clientes. Los chicos lograron una identidad digital con animaciones que realmente rompe lo convencional.',
        destacado: 'Cambió totalmente cómo nos ven los clientes.',
        nombre: 'Camila Grondona',
        rol: 'Unik — Business Strategy',
      },
      {
        texto: 'Buscábamos que el acceso a nuestro trabajo y el contacto por WhatsApp fuera directo y profesional. Facu y Giuli nos dieron una solución impecable que simplificó la llegada de nuevos clientes.',
        destacado: 'Una solución impecable.',
        nombre: 'Iara Robles',
        rol: 'Unik — Directora Creativa',
      },
    ],
    titulo: 'Unik',
    rubro: 'servicios',
    logline: 'Tu marca es única. Que el mundo la vea.',
    genero: 'Web de agencia',
    anio: 2026,
    rol: 'Diseño y desarrollo',
    url: 'https://unik-kappa.vercel.app',
    cliente: 'Agencia de publicidad creativa: branding, contenido y campañas.',
    desafio: 'Se definen como una agencia explosiva y necesitaban una web con esa energía, que llevara a cada visitante a escribirles.',
    solucion: ['Una web violeta y amarilla, con formas en movimiento, galerías de proyectos con zoom y WhatsApp a un toque.'],
    destacados: ['Cursor y menú propios', 'Galerías con zoom a pantalla completa', 'Diseñada aparte para celu y para compu'],
  },
];

export const PROYECTOS: Proyecto[] = [
  ...PROYECTOS_ADMIN.filter((p) => !PROYECTOS_CODIGO.some((c) => c.slug === p.slug)).map(({ traducciones: _, color: __, ...p }) => p),
  ...PROYECTOS_CODIGO,
];

/** Los proyectos en un idioma: los textos traducidos (proyectos.traducciones.ts o los del admin) sobre los datos en español */
export function proyectosEn(idioma: 'es' | 'en' | 'pt'): Proyecto[] {
  if (idioma === 'es') return PROYECTOS;
  return PROYECTOS.map((p) => {
    const t = TRADUCCIONES[idioma][p.slug] ?? PROYECTOS_ADMIN.find((a) => a.slug === p.slug)?.traducciones?.[idioma];
    if (!t) return p;
    const testimonios = p.testimonios?.map((orig, i) => (t.testimonios?.[i] ? { ...orig, ...t.testimonios[i], traducido: true } : orig));
    return { ...p, ...t, testimonios };
  });
}

export function ordenarPorRubro(proyectos: Proyecto[], rubro: RubroId | null): Proyecto[] {
  if (!rubro) return proyectos;
  return [...proyectos].sort((a, b) => Number(b.rubro === rubro) - Number(a.rubro === rubro));
}

export function proyectoSiguiente(slug: string, idioma: 'es' | 'en' | 'pt' = 'es'): Proyecto {
  const lista = proyectosEn(idioma);
  const i = lista.findIndex((p) => p.slug === slug);
  return lista[(i + 1) % lista.length];
}

/** El orden en que se muestran los trabajos (el de la cartelera de /proyectos); los cargados desde el admin van primero */
export const ORDEN_TRABAJOS = ['craft', 'eber', 'emme', 'muda', 'tmd', 'newave', 'unik', 'fidalgo'];
export const enOrden = (proyectos: Proyecto[]) =>
  [...proyectos].sort((a, b) => ORDEN_TRABAJOS.indexOf(a.slug) - ORDEN_TRABAJOS.indexOf(b.slug));

/** El orden de la galería de la home: primero las que mejor se ven en una captura */
/** Las webs de "Probá una" en la home, en este orden. Si se suma una, también va en frame-src (public/_headers) */
export const WEBS_PROBAR = ['eber', 'craft', 'emme'];

export const ORDEN_GALERIA = ['craft', 'eber', 'emme', 'muda', 'tmd', 'newave', 'unik', 'fidalgo'];

/** Un testimonio con el proyecto del que habla: su web reemplaza a la foto de la persona */
export type TestimonioDe = Testimonio & { slug: string; marca: string };

/** Los testimonios de un proyecto, con su web */
export const testimoniosDe = (p: Proyecto): TestimonioDe[] => (p.testimonios ?? []).map((t) => ({ ...t, slug: p.slug, marca: p.titulo }));

const puesto = (slug: string) => (ORDEN_GALERIA.includes(slug) ? ORDEN_GALERIA.indexOf(slug) : 99);

/** Un testimonio por marca en un idioma, en el orden de la galería (las webs que mejor se ven primero) */
export function testimoniosEn(idioma: 'es' | 'en' | 'pt'): TestimonioDe[] {
  return [...proyectosEn(idioma)]
    .sort((a, b) => puesto(a.slug) - puesto(b.slug))
    .flatMap((p) => testimoniosDe(p).slice(0, 1));
}
