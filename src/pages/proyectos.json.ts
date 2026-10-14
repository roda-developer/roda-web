import type { APIRoute } from 'astro';
import { getImage } from 'astro:assets';
import { capturas } from '../content/capturas';
import { PROYECTOS, PROYECTOS_ADMIN } from '../content/proyectos';

/**
 * Los proyectos que muestra la web, para el admin (admin.rodadevelop.com → Web): así ve los que ya están.
 * Los "admin" se pueden editar desde ahí; los "codigo" tienen afiche hecho a mano y se tocan en el repo.
 */
export const GET: APIRoute = async () => {
  const lista = await Promise.all(
    PROYECTOS.map(async (p) => {
      const portada = await getImage({ src: capturas(p.slug).portada, width: 480, format: 'webp' });
      return {
        slug: p.slug,
        titulo: p.titulo,
        logline: p.logline,
        genero: p.genero,
        anio: p.anio,
        url: p.url,
        portada: portada.src,
        origen: PROYECTOS_ADMIN.some((a) => a.slug === p.slug) ? 'admin' : 'codigo',
      };
    }),
  );
  return new Response(JSON.stringify(lista), { headers: { 'Content-Type': 'application/json' } });
};
