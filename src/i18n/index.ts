/**
 * Idiomas de la web: español (el original, sin prefijo), inglés (/en) y portugués (/pt).
 * Cada idioma tiene sus propios textos (content/guion*.ts) y sus propias direcciones (RUTAS).
 */
import * as es from '../content/guion';
import * as en from '../content/guion.en';
import * as pt from '../content/guion.pt';

export const IDIOMAS = ['es', 'en', 'pt'] as const;
export type Idioma = (typeof IDIOMAS)[number];

/** Astro.currentLocale (o cualquier texto) → un idioma válido; lo desconocido es español */
export const idiomaDe = (valor?: string | null): Idioma => (valor === 'en' || valor === 'pt' ? valor : 'es');

const GUIONES = { es, en, pt };
/** Todos los textos de un idioma, con la misma forma que el guion en español */
export const textos = (valor?: string | null) => GUIONES[idiomaDe(valor)];

/** Para <html lang>, og:locale y hreflang */
export const HTML_LANG: Record<Idioma, string> = { es: 'es-AR', en: 'en', pt: 'pt-BR' };
export const OG_LOCALE: Record<Idioma, string> = { es: 'es_AR', en: 'en_US', pt: 'pt_BR' };
/** Lo que se lee en el selector */
export const NOMBRE_IDIOMA: Record<Idioma, { corto: string; largo: string }> = {
  es: { corto: 'ES', largo: 'Español' },
  en: { corto: 'EN', largo: 'English' },
  pt: { corto: 'PT', largo: 'Português' },
};

/** Las direcciones, traducidas (mejor para Google y para quien las lee) */
export const RUTAS = {
  inicio: { es: '', en: '', pt: '' },
  precios: { es: 'precios', en: 'pricing', pt: 'precos' },
  contacto: { es: 'contacto', en: 'contact', pt: 'contato' },
  nosotros: { es: 'nosotros', en: 'about', pt: 'sobre' },
  proyectos: { es: 'proyectos', en: 'work', pt: 'projetos' },
  privacidad: { es: 'privacidad', en: 'privacy', pt: 'privacidade' },
} as const;
export type Pagina = keyof typeof RUTAS;

/** ruta('en', 'precios') → '/en/pricing'; ruta('es', 'proyectos', 'muda') → '/proyectos/muda' */
export function ruta(idioma: Idioma, pagina: Pagina, resto = ''): string {
  const partes = [idioma === 'es' ? '' : idioma, RUTAS[pagina][idioma], resto].filter(Boolean);
  return '/' + partes.join('/');
}

/** La misma página en otro idioma: '/en/pricing' + 'pt' → '/pt/precos'. Si no la reconoce, va al inicio de ese idioma. */
export function equivalente(pathname: string, destino: Idioma): string {
  const segmentos = pathname.replace(/\/+$/, '').split('/').filter(Boolean);
  const origen: Idioma = segmentos[0] === 'en' || segmentos[0] === 'pt' ? segmentos[0] : 'es';
  if (origen !== 'es') segmentos.shift();
  const [primero = '', ...resto] = segmentos;
  const pagina = (Object.keys(RUTAS) as Pagina[]).find((p) => RUTAS[p][origen] === primero) ?? 'inicio';
  return ruta(destino, pagina, pagina === 'inicio' ? '' : resto.join('/'));
}

/** Completa una plantilla: rellenar('Hoy: $ {pesos}', { pesos: '462.000' }) → 'Hoy: $ 462.000' */
export const rellenar = (plantilla: string, valores: Record<string, string | number>) =>
  plantilla.replace(/\{(\w+)\}/g, (_, clave) => String(valores[clave] ?? ''));
