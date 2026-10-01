import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Dominio final (ver .env.example): con él, la imagen para compartir lleva la dirección completa
  site: process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) || undefined,
  output: 'static',
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
