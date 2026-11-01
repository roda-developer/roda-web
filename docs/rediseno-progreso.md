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
| 0c | Peso de /proyectos y README | hecho: sizes de los afiches verticales a 36vw (la foto con recorte quedaba más ancha que lo pedido) y apaisados con máximo 1200 px; sin imágenes agrandadas en 390 (DPR 3) ni 1440. /proyectos: ~1,5 MB en celu DPR 3 y ~1,4 MB en compu (fotos de afiches y 10 tipografías propias de cada cliente). README nuevo |
| 1 | Base visual: tipografía de títulos, `.mono` y `.cta` sin mono ni mayúsculas, sin títulos en dos tonos en contacto/precios/404 | hecho |
| 2 | Home nueva | hecho (2026-10-25): Portal, Trabajos, Gente, DeCerca, Giro+Technicolor recortado, Niveles, Final; /prueba-linterna para comparar; secciones viejas y claves borradas. Verificada a 390 y 1440: sin errores ni scroll horizontal; home 11,8 pantallas en celu y 12,7 en compu (antes ~14). La animación de la O se pinta según el progreso del scroll (sin tweens), así no se desfasa al recalcular |
| 3 | /precios | hecho: Obra primero (bloque en tinta), título "Cuánto sale tu web", adicionales como renglones con puntos, Todas incluyen en papel (sin rosa), críticas con la primera destacada, sin mayúsculas en etiquetas. Verificada a 390 y 1440 sin errores |
| 4 | /proyectos y caso | hecho: el caso abre con su afiche (vertical al costado del título en compu, apaisado a lo ancho) con el mismo nombre de View Transition que /proyectos y Trabajos; la portada pasa a la galería; Siguiente proyecto entra con barrido y viaja al afiche del próximo caso; filtros de /proyectos con FLIP (450 ms); mapa de afiches compartido en components/afiches/mapa.ts. check = astro check (tsc solo no entiende .astro importados desde .ts). Quedan 11 errores viejos de astro check en Nosotros (intro desactivada) y Cierre: se arreglan en la etapa 5 |
| 5 | Nosotros, contacto, 404 y pie | hecho: /nosotros sin la intro de cine desactivada (y sin sus errores de tipos), NOSOTROS en la letra de títulos, cierre "¿Hacemos la tuya?"; contacto "Contanos qué buscás" y mensaje que crece solo (sin manija nativa); 404 "Esta página no existe o se mudó"; descripciones para Google sin "historia"; Todas incluyen con Entrega; pie corto en páginas internas. astro check: 0 errores. Los créditos rosa de /nosotros siguen |
| 6 | Inglés y portugués | hecho: todo lo nuevo está en los tres guiones; home, precios recorridos en /en y /pt a 390 y 1440 sin desbordes ni errores |
| 7 | Verificación | hecho (ver abajo) |

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

## Verificación final (2026-10-25)

- `npm run check` (astro check): 0 errores, 0 avisos. `npm test`: 42/42. `npm run build`: 44 páginas.
- Recorrido con Chrome a 390×844 y 1440×900 de /, /precios, /proyectos, un caso vertical (MUDA) y uno apaisado (Emme), /nosotros, /contacto, la 404, /en/, /pt/ y /en/pricing: sin errores de consola (salvo el 404 esperado de la página de error) y sin scroll horizontal.
- Home: 11,8 pantallas en celu y 12,7 en compu (antes 14 y 14,1). Con movimiento reducido: 9,8 y 9,2, todo visible.
- Detector de impeccable: 0 hallazgos en sections, vistas, Pie y Criticas.
- Inspector de taste-skill en la home: arreglado lo de cintas que se tapaban, "Hablemos" arriba de Multisección en tablet, texto pegado al borde en la tira de Emme. Quedan, a criterio: etiquetas y tipografías extra dentro de los afiches (copian las de cada cliente), pantallas casi vacías durante la apertura de la O y la pausa de "Menos es más" (son escenas), el menú del celu cerrado contado como "texto oculto" (falso positivo), sin video en la página (no hay uno propio que sirva).
- e2e de Playwright: no se actualizaron (ya fallaban 24 antes del rediseño y varios miran secciones que ya no existen). Pendiente: rehacer 6-8 recorridos de humo.

## Para Giuli

- La home nueva, /precios con Obra, los casos con su afiche y las páginas internas sin vocabulario de cine están en la rama `rediseno` (GitHub). No se publicó nada.
- Para ver: `npm run build && npm run preview` y abrir http://localhost:5201/ (y /prueba-linterna/ para comparar la primera pantalla).
- Decidí yo: tipografía de títulos Big Shoulders Display (opción A), la frase "Diseñamos y programamos webs a medida.", Emme como trabajo de cerca, el texto de Obra, y dejar los créditos rosa de /nosotros.
- Te falta decidir: qué incluye Obra y si lleva precio; las imágenes del hero (hoy la foto de ustedes en la O y MUDA en la Linterna); si los afiches siguen diciendo "Estreno 2026 · En todas las pantallas"; qué hacemos con el afiche con tu marca (quedó sin usar, idea: pasarlo a /contacto); si querés bocetos o una dirección descartada en "de cerca".
- Ojo: public/nosotros/fondo.mp4 es un video personal y hoy se puede abrir desde la web publicada (rodadevelop.com/nosotros/fondo.mp4) aunque nada lo enlace. Ya no lo usa ninguna página: conviene sacarlo de public/.

## Auditoría 2026-10-27 (aplicada, sin commitear)

- Cursor: el píxel se esconde quieto (0,9 s) y al scrollear (parecía un punto después de "?"); sobre los retratos de Nosotros se va.
- Títulos sin punto final (3 idiomas). Un solo cierre: "¿Hacemos la tuya?" en home, Nosotros y Precios.
- Hero: R○DA de borde a borde con la frase y el botón en una franja abajo; la animación de la O es la misma. El logo chico del menú aparece cuando el grande se va.
- Home: fuera "Todos los días pasa gente", la multitud y "Por qué Roda"; entra "Escribí tu marca" (sections/TuMarca.astro: los píxeles se van mientras escribís y aparece una portada con tu nombre; el botón lleva ?marca= al formulario). Pie corto.
- Final: los trabajos se ven nítidos al pasar por el centro y en píxeles en los bordes.
- Nosotros: la O descubre la foto debajo de los retratos en píxeles (sin puntitos rosas); en celu la foto ya no tapa NOSOTROS; sin testimonios ni "sin plantillas" repetido.
- Precios: lista de galería (franjas con paso de tono, nombre y precio grandes, Obra en tinta); sin carpetas, lengüetas, stickers ni testimonios. A medida sin borde punteado. Claves de carpetas borradas.
- Contacto: "Qué pasa después" sin la caja rosa. Menú: "ES" en vez de la bandera (Bandera.astro borrado).
- Testimonios: sin webs repetidas pegadas. Sin sombras en reposo en afiches. Caso vertical con menos hueco.
- Verificado: check 0 errores, 42 tests, build ok, 390 y 1440 sin errores ni scroll horizontal, movimiento reducido con todo visible, detector de impeccable 0.
- Pendiente: bajar la cantidad de tamaños de letra (hoy ~20 por página); confirmar la frase del cierre; qué incluye Obra.

## Arreglos de la auditoría 2026-11-01

- Imagen al compartir (`public/og.png`, `scripts/og.mjs`): el hero nuevo en lugar de "Tu marca ya tiene una historia". Los que ya la tienen guardada (WhatsApp, Facebook) pueden tardar en ver la nueva.
- Formulario: cada dato que falta avisa al lado del campo y la página lleva hasta ahí; el aviso se va al completarlo. Faltan datos: `faltan` en los tres guiones.
- Hero: cuando la ficha y el botón no entran en una línea (depende del ancho y del idioma), el botón pasa abajo de la frase. Lo mide el script.
- Testimonios: sin imágenes repetidas a la vista (son 9 lugares y 8 webs: los costados usan otra pantalla de la web). Sin la cita repetida en "Escribí tu marca".
- "Escribí tu marca" reemplazada por "Probá una" (sections/Probar.astro): webs reales en iframe, en orden Eber, Craft, Emme. Los cuatro datos pasaron a Cómo trabajamos. Los textos de la sección son provisorios: faltan opciones para Giuli.

## Mockups (2026-11-01)

- Los 8 en `src/assets/mockups/<slug>.jpg`: escena con pantalla en blanco + captura real de la web publicada. Son la portada en /proyectos, Trabajos y el caso. Los afiches quedan solo como respaldo para los proyectos sin mockup (los cargados desde el admin).
- Píxeles: `node scripts/pixelar-afiches.mjs --mockups` → `src/assets/pixeles-mockups/`. En Trabajos aparecen solo mientras la fila se mueve.
- Las escenas son generadas (Canva). Se usan sin recortar: las cajas tienen su proporción, 1136 x 1408.
- Pendiente: alguna imagen en /precios.

## Estudio de caso (2026-11-01)

- src/sections/DetalleCaso.astro + src/content/detalle.ts: láminas con la web entera, sin recortes; hoja de marca con colores y tipografías medidos en cada web.
- Las capturas se sacan con espera a que cargue lo visible. Fidalgo: las fotos con /render/image/ de Supabase dan 403 (FeatureNotEnabled); en las capturas se pidieron por su dirección original y solo se usan tramos con fotos completas. No se tocó su web.
- Limpieza: fuera Cierre, Linterna, Estudio, prueba-linterna, store, dibujarAfiche y nanostores. e2e: humo.spec.ts reescrito con recorridos reales.
- Video del hero: versión de celu (780 px, 2,2 MB).
- Pendiente: menos tamaños de letra, guía de marca, imagen en /precios.

