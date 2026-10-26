# Rediseño: progreso

Rama: `rediseno` (sale de `audit/cambios`). NO mergear a master ni deployar: Giuli lo revisa antes.
Dirección aprobada en el tablero: https://claude.ai/artifact/LGg1JhjU4psDRChHqNBbDd (bocetos de todo lo de abajo).

## Decisiones de Giuli (2026-10-25)

- Roda como estudio artístico: la obra manda, menos metáfora de cine (nada de actos, cartelera, estreno, timecode, créditos de película en textos nuevos).
- Precio fuera del hero + nivel "Obra" ("A consulta"; qué incluye está a confirmar, ya está el texto en `inicio.niveles.obra`).
- Hero: la O que se agranda (principal) y la Linterna como segunda opción. Las imágenes del hero las cambia ella después.
- Después de la O, la sección Estudio con la foto como banner a lo ancho (media pantalla), nunca pantalla completa.
- Final: carrusel curvo de trabajos (idea Tilted Grid Hero) con el texto ABAJO, grande y sin caja ("no es prolijo ni artístico" con caja).
- La multitud (Canvas Crowd): más clara (los motivos se leen todos a la vez), solo si suma.
- Branding y redes: todavía no se ofrecen; la multitud deja lugar para sumarlos.
- Reglas de siempre (CLAUDE.md de Giuli): sin emojis, sin controles nativos a la vista, sin etiquetas en mayúscula espaciada arriba de títulos, sin numeración 01/02, sin títulos en dos tonos, sin degradados de relleno, animar solo transform/opacity/clip-path, UI < 300 ms, páginas 400-700 ms, respetar prefers-reduced-motion mostrando todo, verificar en 390 y 1440, consola limpia, sin scroll horizontal. Voz: simple y directa, como habla Giuli; nada de frases de folleto ni lunfardo forzado.

## Decidido por mí (para que lo revise)

- Tipografía de títulos: Big Shoulders Display (opción A del tablero), siempre en mayúscula y gruesa (`.font-titulo` en global.css). Inter Tight para el texto.
- Frase de la primera pantalla: "Diseñamos y programamos webs a medida."
- La clase `.mono` ya no es mono: es la letra de texto chica, sin mayúsculas. `--font-mono` apunta a Inter Tight. IBM Plex Mono desinstalada.
- Los créditos rosa de /nosotros se quedan (le encantan, memoria del 2026-10-01).
- Los afiches de proyectos mantienen "Estreno 2026 · En todas las pantallas" hasta que responda.
- `public/nosotros/fondo.mp4` es un video personal (selfie de vacaciones) y hoy se puede abrir en la web pública: avisarle, no tocarlo.

## Etapas

| # | Etapa | Estado |
|---|-------|--------|
| 0 | Ingeniería: barra final en ruta(), caché immutable de /_astro, HSTS, upgrade-insecure-requests, 404 noindex, foco del menú del celu (inert), saltar al contenido, preload de Inter Tight, timeouts en formulario y cotización, config en contacto.ts, validación zod de los JSON del admin (con test) | hecho |
| 0b | CI (.github/workflows/ci.yml), `check` = astro check + tsc, .gitignore | hecho |
| 0c | Peso de /proyectos en celu (1,45 MB: revisar widths/sizes de los afiches, imagen agrandada 432→515 px), README nuevo | pendiente |
| 1 | Base visual: tipografía de títulos, `.mono` y `.cta` sin mono ni mayúsculas, sin títulos en dos tonos en contacto/precios/404 | hecho |
| 2 | Home nueva | hecho (2026-10-25): Portal, Trabajos, Gente, DeCerca, Giro+Technicolor recortado, Niveles, Final; /prueba-linterna para comparar; secciones viejas y claves borradas. Verificada a 390 y 1440: sin errores ni scroll horizontal; home 11,8 pantallas en celu y 12,7 en compu (antes ~14). La animación de la O se pinta según el progreso del scroll (sin tweens), así no se desfasa al recalcular |
| 3 | /precios | hecho: Obra primero (bloque en tinta), título "Cuánto sale tu web", adicionales como renglones con puntos, Todas incluyen en papel (sin rosa), críticas con la primera destacada, sin mayúsculas en etiquetas. Verificada a 390 y 1440 sin errores |
| 4 | /proyectos y caso | hecho: el caso abre con su afiche (vertical al costado del título en compu, apaisado a lo ancho) con el mismo nombre de View Transition que /proyectos y Trabajos; la portada pasa a la galería; Siguiente proyecto entra con barrido y viaja al afiche del próximo caso; filtros de /proyectos con FLIP (450 ms); mapa de afiches compartido en components/afiches/mapa.ts. check = astro check (tsc solo no entiende .astro importados desde .ts). Quedan 11 errores viejos de astro check en Nosotros (intro desactivada) y Cierre: se arreglan en la etapa 5 |
| 5 | Nosotros, contacto, 404 y pie | hecho: /nosotros sin la intro de cine desactivada (y sin sus errores de tipos), NOSOTROS en la letra de títulos, cierre "¿Hacemos la tuya?"; contacto "Contanos qué buscás" y mensaje que crece solo (sin manija nativa); 404 "Esta página no existe o se mudó"; descripciones para Google sin "historia"; Todas incluyen con Entrega; pie corto en páginas internas. astro check: 0 errores. Los créditos rosa de /nosotros siguen |
| 6 | Inglés y portugués de todo lo nuevo (los guiones en/pt tienen `typeof ES.x`: tsc avisa si falta algo) | parcial (inicio ya está en los 3) |
| 7 | Verificación: build, npm test, npm run check, inspector de taste-skill, Playwright a 390 y 1440 (scrolleando todo), movimiento reducido, consola, scroll horizontal | pendiente |

## Home nueva (etapa 2)

Orden: Portal (la O → Estudio) · Trabajos · Gente · DeCerca · Giro + Technicolor (Más es más) · Niveles · Final · Pie.
Textos: `inicio` en guion.ts / guion.en.ts / guion.pt.ts (ya escritos).

Hecho (archivos nuevos en src/sections, todavía NO conectados en src/vistas/Inicio.astro):
- `Portal.astro`: la O que se agranda con GSAP scrub; mide el anillo con offset* (no le afectan los transform); la imagen arranca recortada en círculo dentro de la O y termina como banner; después aparece Estudio. Quieto sin movimiento.
- `Linterna.astro` (segunda opción) + `Estudio.astro` (Estudio suelto, va después de la Linterna).
- `Trabajos.astro`: índice de nombres grandes + foto fija que cambia (hover, foco o el que cruza el centro). Al hacer clic, la foto lleva `view-transition-name: afiche-<slug>` para viajar al caso.
- `Gente.astro`: título, bajada, los 5 motivos a la vista, canvas con la multitud (se pausa fuera de pantalla) y el remate; la persona rosa se frena cuando el remate entra en pantalla.
- `DeCerca.astro`: Emme de punta a punta (marca, afiche, web, celu, testimonio); en compu la tira se fija y avanza de costado (GSAP pin), en celu se desliza.

Falta:
1. `Technicolor.astro`: sacar el tráiler (`[data-trailer]` y su script) y el remate "El secreto no es elegir un estilo…" (`technicolor.corte`). Que las cintas no tapen letras entre sí (separarlas un poco). A las letras M/Á/S de colores sumarles un contorno de tinta (`-webkit-text-stroke` o `paint-order: stroke`) para que se lean sobre el rosa.
2. `Niveles.astro`: h2 `inicio.niveles.titulo`, el párrafo `proceso`, y los cuatro niveles en fila: Obra primero y distinto (fondo tinta, letra papel, "A consulta", texto, botón a /contacto), después Tienda, Multisección y Landing con `planes.lista` (nombre en font-titulo, precio grande, `incluye`, link a /precios#id). Nada de tarjetas iguales con sombra: columnas separadas por espacio. Link `verDetalle` a /precios.
3. `Final.astro`: carrusel curvo de trabajos (fotos `capturas(slug).afiche` de todos, duplicadas) con perspectiva; cada imagen gira según su distancia al centro (rotateY hasta ~38°, translateZ, opacidad en los bordes), avanza solo con requestAnimationFrame y se pausa fuera de pantalla; sin movimiento queda quieto. ABAJO del carrusel, sin caja: `inicio.final.titulo` grande a la izquierda y el botón `inicio.final.cta` (a /contacto) a la derecha (en celu, uno abajo del otro).
4. `src/vistas/Inicio.astro`: armar el orden de arriba con un prop `hero?: 'o' | 'linterna'` (por defecto 'o'; con 'linterna' va Linterna + Estudio). Sacar Loader, Timecode, ActoUno, ActoDos, ActoTres, LaCritica, Cartelera, Cierre y la escena post-créditos. Crear `src/pages/prueba-linterna.astro` (noindex: `indexable={false}` en Base no aplica porque lo usa Inicio; pasar un prop o poner el meta) para que Giuli compare las dos primeras pantallas. Revisar src/pages/en y src/pages/pt (usan Inicio).
5. Borrar las secciones que quedan sin uso (ActoUno, ActoDos, ActoTres, LaCritica, Cartelera, Loader, Timecode) y sus claves del guion en los 3 idiomas si nada más las usa. `Cierre.astro` (el afiche con tu marca): dejarlo sin usar por ahora y anotarlo como pendiente de decidir (idea: pasarlo a /contacto).
6. Nav: `enSeccionOculta` mira `#technicolor`; sigue existiendo. Revisar que el menú se vea bien sobre la O y sobre el banner.
7. Tests: `tests/unit/copy.test.ts` y otros pueden mirar claves que se borren; actualizarlos. e2e: no hace falta arreglarlos todos, pero que no queden referencias a secciones borradas.

## Cómo verificar

- `npm ci && npm run check && npm test && npm run build`.
- `npx astro preview --port 5201` y recorrer con Playwright (chromium de Playwright; si no está, `npx playwright install chromium`) a 390×844 y 1440×900, scrolleando de a una pantalla con pausas para que corran los ScrollTrigger. Sacar capturas de cada sección, mirar consola y `scrollWidth > innerWidth`. Repetir con `reducedMotion: 'reduce'` y confirmar que no queda nada oculto.
- Inspector de taste-skill si está disponible; si no, decirlo.
- Anotar acá cada etapa al terminarla, con lo que quedó pendiente.
