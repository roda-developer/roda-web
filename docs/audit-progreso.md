# Auditoría: progreso

Rama: `audit/cambios` (sale de master 5758cd1). No mergear ni deployar desde acá.

| # | Punto | Estado | Notas para retomar |
|---|-------|--------|--------------------|
| 1 | Logo R○DA en mayúsculas | hecho | Marca.astro, dibujarAfiche.ts (presenta) y og.mjs en DA; og.png regenerada con chromium (sin commitear el cambio de canal). |
| 2 | Primera pantalla clara | hecho | Apertura.astro reescrita: h1 + queHacemos (text-xl, tinta) + .cta Hablemos + link Ver precios. Se fue la bajada (queda comentada en guion). Entra a 2,65 s (título a 2,2 s). |
| 3 | Home más corta | hecho | Home: 390×844 → 11.773 px = 13,95 pantallas (antes 19,63); 1440×900 → 12.832 px = 14,26 (antes 18,93). El hueco de y≈13.240 en compu era el tramo fijo de ActoTres (260svh con 1,5 de pausa al final); quedó en 145svh con 0,4 de pausa. |
| 4 | View Transitions | hecho | Verificado con pagereveal + getAnimations: /proyectos→caso anima group(afiche-<slug>) 550 ms; home→/precios anima plan-* en compu; con reducedMotion 'reduce' no hay transición. Los demás afiches sin pareja se funden en 250 ms. |
| 5 | Sacar recursos genéricos | hecho | Rotulo.astro borrado. Las claves rotulo del guion quedaron sin uso (no las borré para no tocar la forma). Revisado en capturas de /, /precios, caso y /contacto. |
| 6 | Legibilidad y contraste AA | hecho | Chequeo propio de contraste/tamaño (scripts/_contraste.mjs, no commiteado) limpio en es/en/pt, salvo las letras de colores de MÁS/MORE/MAIS sobre rosa (no las toqué: es el círculo de MÁS ES MÁS). Las maquetas ilustrativas (web genérica de ActoUno y la web que se arma en ActoTres, aria-hidden) mantienen su letra chica a escala. |
| 7 | Animaciones | hecho | Revisado: hamburguesa abierta/cerrada, aviso de error de /contacto. No toqué Loader (sigue animando width en su máquina de escribir), cintas, círculo ni secuencia de /nosotros (salvo el ↺ → SVG). |
| 8 | Contenido (precios, nosotros) | hecho | Nosotros: bajada nueva + Lo que ya hicimos (lista dinámica, 8 hoy) + Criticas + Cómo aprendimos. Precios: aMedida.aliada y .mantenimiento legible. Precios sin cambios (Otro idioma US$ 80). |
| — | Verificación final | hecho | Ver sección TERMINADO. |

## Decidido por mí

- Punto 1: con DA en mayúsculas el anillo de 0.5em parecía una o minúscula; lo subí a 0.7em (altura de mayúscula) en el logo, el afiche y og.png.
- og.png: el título también pierde la cursiva en "historia" (va con el punto 5).
- Punto 2: texto de la primera pantalla: "Diseñamos y programamos webs a medida para marcas, desde US$ 300." (en/pt equivalentes). Saqué la bajada "Falta contarla donde te buscan." para que entren título, línea y botón en 390×844.
- Punto 3: también acorté la puerta de MÁS ES MÁS (180→150svh) recalculando `llena`: el círculo hace lo mismo, con menos scroll. No cambié la animación en sí.
- Punto 5: también saqué la cursiva de "Mira.", "Y se va." y "…a veces." (títulos enteros en cursiva como recurso), los números de ActoDos y de las notas de ActoUno, los (n / total) del tráiler y del caso, y los paréntesis de los subtítulos del caso y del filtro de /proyectos. Dejé el "(Hablemos)" del menú porque es navegación. "Volver" quedó subrayado para que se lea como link sin la flecha.
- Punto 6: las maquetas dentro de ActoUno y ActoTres son dibujos (aria-hidden) y escalan con el mockup: no las llevé a 13px. Las letras M-O-RE / M-A-IS de colores sobre rosa no llegan a 3:1, pero son parte del círculo de MÁS ES MÁS, que no había que tocar.
- Punto 7: en el FAQ, el :active va en el summary. Las carpetas de /precios no son clickeables (solo el botón "Quiero esta", que es .cta), así que no les puse :active. La grisura de la web genérica pasó de filter a una capa con mix-blend-mode: saturation que anima opacidad. Probé un @custom-variant para hover de Tailwind, pero rompe group-hover; lo dejé en CSS común.
- Punto 4: el caso no tiene afiche, así que el afiche de /proyectos viaja a la portada (captura) del caso. El "Siguiente proyecto" del caso no lleva nombre (está fuera de pantalla y volaría). Cartelera→/precios solo desde 1024px.

## Mediciones

- Home antes (master 5758cd1, build de preview, scrolleando hasta el final): 390×844 → 16.565 px = 19,63 pantallas; 1440×900 → 17.034 px = 18,93 pantallas.
- Home al final (build de preview): 390×844 → 11.648 px = 13,80 pantallas (en 13,98, pt 13,85); 1440×900 → 12.674 px = 14,08 pantallas.

## Fuera de alcance, ya roto en master

- `npm test`: 13 tests unitarios fallan igual en master (afiche, copy, sinopsis): esperan textos viejos ("grita/susurra") y el test de jerga marca "SEO". No los toqué.
- `npm run check` (tsc) da 10 errores, todos en tests/unit (afiche.test.ts y sinopsis.test.ts llaman a funciones con otra firma). Igual en master. El código de src/ compila limpio.

## TERMINADO

Los 8 puntos están hechos y verificados (22/10/2026).

- `npm ci`: ok.
- `npm run check`: 10 errores, todos en tests/unit (firmas viejas en afiche.test.ts y sinopsis.test.ts). Son los mismos que en master. En src/ no hay errores.
- `npm test`: 30 pasan y 13 fallan: los mismos 13 que en master (textos viejos y "SEO" en el test de jerga).
- `npm run build`: ok, 43 páginas.
- Recorrido con Playwright (chromium) de /, /precios, /proyectos, /proyectos/muda, /nosotros, /contacto, /en/, /pt/, /en/pricing y /pt/projetos/eber, a 390×844 y 1440×900, scrolleando hasta el final: sin scroll horizontal y sin errores de la página. El único error de consola es dolarapi.com (/precios), que bloquea la red del sandbox.
- View Transitions: /proyectos→caso anima afiche-<slug> (550 ms) y home→/precios anima plan-* en compu. Con reducedMotion 'reduce' no hay transición.
- e2e (tests/e2e, con chromium en vez de channel chrome): minimal.spec.ts no carga (import.meta.glob fuera de Vite, igual en master). Del resto, 20 pasan y 24 fallan: exactamente los mismos 24 que en master (5758cd1), corridos de la misma manera.
