# Roda — web del estudio

Una web que funciona como una película: el visitante scrollea, responde (si quiere) cuatro preguntas y al final ve **el tráiler de su propia web**, con un botón a WhatsApp que ya lleva su brief.

Spec: `docs/superpowers/specs/2026-09-30-roda-minimal-design.md` (dirección visual actual; reemplaza a `2026-09-30-roda-web-design.md`) · Plan: `docs/superpowers/plans/2026-09-30-roda-web.md`

## Cómo correrla

```bash
npm install
npm run dev        # http://localhost:5200
npm run build && npm run preview   # http://localhost:5201 (lo que usan los tests)
npm test           # unitarios (vitest)
npm run e2e        # recorridos completos (Playwright, con el Chrome instalado)
```

Capturas para revisar diseño: `node scripts/capturas.mjs` (con el preview levantado) → `shots/`.
`SOLO=m` o `SOLO=d` para una sola vista, `ESTILO=1` para ver la página en tono "grita", `--reducido` para simular movimiento reducido. `node scripts/hoja.mjs m` arma una hoja de contactos.

## Dónde está cada cosa

| Qué | Dónde |
|---|---|
| Todos los textos | `src/content/guion.ts` |
| Proyectos y sus casos de estudio | `src/content/proyectos.ts` → `/proyectos` y `/proyectos/<slug>` |
| Capturas de los proyectos | `src/assets/proyectos/<slug>/` — se rehacen con `node scripts/capturar-proyectos.mjs [slug]` |
| WhatsApp y mail | `src/content/contacto.ts` |
| Las secciones, en orden | `src/pages/index.astro` → `src/sections/*` |
| Preguntas, sinopsis y links | `src/story/*` |
| Movimiento (Lenis + GSAP), timecode, tono | `src/motion/*` |
| Colores, tipografías y el sistema de tono | `src/styles/global.css` |

**La web que se reescribe:** el deslizador escribe `data-tono="susurra|grita"` y `--intensidad` en `<html>`. El fondo siempre es papel; con "grita", cualquier elemento con `adapta-titulo`, `foto-tono`, `var(--acento)`, `solo-grita` o `solo-susurra` se enciende solo.

## Contenido pendiente (Giuli y Facu)

- [ ] **WhatsApp y mail reales** en `src/content/contacto.ts`. Hoy son de ejemplo (`5491100000000`, `hola@roda.studio`).
- [ ] **Casos de estudio:** los textos son un borrador escrito a partir de cada repo. Revisar cliente, desafío, lo que hicimos y rubros, y sumar resultados reales (`resultado`) en `src/content/proyectos.ts`. No hay ningún número inventado.
- [ ] **Unik y Eber** tienen dominio de Vercel; cuando tengan el propio, cambiar `url` (la dirección nunca se muestra escrita, solo el botón "Ver en vivo").
- [ ] **Dominio:** revisar si `roda.studio`, `roda.com.ar` o similares están libres.
- [ ] **Referencias visuales:** si quieren ajustar las tipografías (Inter Tight / IBM Plex Mono / Bricolage Grotesque para el grito), se cambian en `@theme`, en `global.css`.
- [ ] **Imagen para compartir** (og:image) para cuando se pase el link por WhatsApp o Instagram.
