import { z } from 'astro/zod';
import { RUBROS } from '../story/opciones';
import type { ProyectoAdmin } from './proyectos';

/**
 * La forma que tiene que tener cada JSON que sube el admin a src/content/proyectos-admin.
 * Si un archivo viene roto, el build se frena y dice qué archivo y qué campo, en vez de publicar una página con "undefined".
 */
const texto = z.string().trim().min(1);

const testimonio = z.object({
  texto,
  destacado: texto,
  nombre: texto,
  rol: texto,
  traducido: z.boolean().optional(),
});

const traducibles = z
  .object({
    titulo: texto,
    logline: texto,
    genero: texto,
    rol: texto,
    cliente: texto,
    desafio: texto,
    solucion: z.array(texto),
    destacados: z.array(texto),
    resultado: texto,
    creditosAfiche: texto,
    testimonios: z.array(testimonio),
  })
  .partial();

const esquema = traducibles.required({ titulo: true, logline: true, genero: true, rol: true, cliente: true, desafio: true, solucion: true, destacados: true }).extend({
  // Va en la dirección (/proyectos/<slug>) y es el nombre de la carpeta de capturas
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'solo minúsculas, números y guiones'),
  rubro: z.enum(RUBROS.map((r) => r.id) as [RubroId, ...RubroId[]]),
  anio: z.number().int().min(2000).max(2100),
  url: z.string().url(),
  color: z.string().regex(/^#[0-9a-fA-F]{6}$/, 'un color como #ff2e4d').optional(),
  traducciones: z.object({ en: traducibles.optional(), pt: traducibles.optional() }).optional(),
});

type RubroId = (typeof RUBROS)[number]['id'];

export function validarProyectoAdmin(datos: unknown, archivo: string): ProyectoAdmin {
  const resultado = esquema.safeParse(datos);
  if (!resultado.success) {
    const problemas = resultado.error.issues.map((i) => `  · ${i.path.join('.') || '(raíz)'}: ${i.message}`).join('\n');
    throw new Error(`El proyecto ${archivo} que subió el admin tiene errores:\n${problemas}`);
  }
  return resultado.data as ProyectoAdmin;
}
