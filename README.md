# Roda — web del estudio

La web de Roda, el estudio de diseño y desarrollo web de Giuli y Facu. La obra va primero: la home abre con R○DA y, al scrollear, se entra por la O a la sección Estudio; después vienen los trabajos, un caso de cerca, cómo trabajamos y los precios.

Estado del rediseño y decisiones: `docs/rediseno-progreso.md`.

## Cómo correrla

```bash
npm install
npm run dev        # http://localhost:5200
npm run build && npm run preview   # http://localhost:5201
npm run check      # astro check (tipos de .astro y .ts)
npm test           # unitarios (vitest)
npm run e2e        # recorridos con Playwright
```

En GitHub, cada push a `master` y cada pull request corren `check`, `test` y `build` (`.github/workflows/ci.yml`).
Cloudflare publica `master` solo (Worker `roda-web`, `wrangler.jsonc` + `public/_headers`).

## Dónde está cada cosa

| Qué | Dónde |
|---|---|
| Todos los textos, en tres idiomas | `src/content/guion.ts` (español), `guion.en.ts`, `guion.pt.ts` (misma forma: si falta una clave, `npm run check` avisa) |
| Configuración: mail, WhatsApp, Instagram, agenda, Web3Forms, Search Console | `src/content/contacto.ts` (el dominio está en `astro.config.mjs`, `SITE_URL`) |
| Las páginas | `src/pages/*` (solo eligen el idioma) → `src/vistas/*` |
| Las secciones de la home | `src/vistas/Inicio.astro` → `src/sections/*` |
| Proyectos y sus casos | `src/content/proyectos.ts` → `/proyectos` y `/proyectos/<slug>` |
| Afiches de cada proyecto | `src/components/afiches/` (`mapa.ts` dice cuál va con cada proyecto) |
| Capturas de los proyectos | `src/assets/proyectos/<slug>/` (se rehacen con `node scripts/capturar-proyectos.mjs [slug]`) |
| Movimiento (Lenis + GSAP) | `src/motion/index.ts` |
| Colores y tipografías | `src/styles/global.css` (`@theme`) |

## Sumar un proyecto

- **Desde el admin** (admin.rodadevelop.com → Web): sube un JSON a `src/content/proyectos-admin/` y las capturas a `src/assets/proyectos/<slug>/`. Cada JSON se valida al compilar (`src/content/proyecto-admin.ts`): si falta un campo, el build se frena y dice cuál. Lleva el afiche genérico.
- **A mano:** sumarlo a `PROYECTOS_CODIGO` en `src/content/proyectos.ts` (y sus traducciones en `proyectos.traducciones.ts`), las capturas en `src/assets/proyectos/<slug>/` y, si tiene afiche propio, el componente en `src/components/afiches/` y su entrada en `mapa.ts`.

## Para comparar

- `/prueba-linterna`: la home con la Linterna como primera pantalla (fuera del sitemap y de Google).
