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
      const fotos = capturas(p.slug);
      const portada = await getImage({ src: fotos.portada, width: 480, format: 'webp' });
      // El resto de las capturas, para verlas al editar desde el admin
      const extra: Record<string, string> = {};
      if (fotos.mobile) extra.mobile = (await getImage({ src: fotos.mobile, width: 320, format: 'webp' })).src;
      for (const [i, img] of fotos.pantallas.entries()) extra[`pantalla-${i + 1}`] = (await getImage({ src: img, width: 480, format: 'webp' })).src;
      return {
        slug: p.slug,
        titulo: p.titulo,
        logline: p.logline,
        genero: p.genero,
        anio: p.anio,
        url: p.url,
        portada: portada.src,
        origen: PROYECTOS_ADMIN.some((a) => a.slug === p.slug) ? 'admin' : 'codigo',
        capturas: extra,
      };
    }),
  );
  return new Response(JSON.stringify(lista), { headers: { 'Content-Type': 'application/json' } });
};
