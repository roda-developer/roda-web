import type { APIRoute } from 'astro';

// robots.txt: todo se puede indexar, y le dice a Google dónde está el sitemap (con el dominio real)
export const GET: APIRoute = ({ site }) => {
  const sitemap = site ? `\nSitemap: ${new URL('sitemap-index.xml', site).href}` : '';
  return new Response(`User-agent: *\nAllow: /\n${sitemap}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
