import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// El .env no llega solo a la config: lo leemos acá (en Vercel, SITE_URL viene de las variables del proyecto)
const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');

export default defineConfig({
  // Dominio final (ver .env.example): con él, la imagen para compartir lleva la dirección completa
  site: process.env.SITE_URL || env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) || 'https://rodadevelop.com',
  output: 'static',
  // Idiomas: español (el original, sin prefijo), inglés (/en) y portugués (/pt). Las direcciones traducidas están en src/i18n.
  i18n: { defaultLocale: 'es', locales: ['es', 'en', 'pt'], routing: { prefixDefaultLocale: false } },
  // El sitemap deja afuera la 404
  integrations: [react(), sitemap({ filter: (pagina) => !pagina.includes('/404') })],
  vite: { plugins: [tailwindcss()] },
});