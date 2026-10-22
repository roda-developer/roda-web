# Auditoría: progreso

Rama: `audit/cambios` (sale de master 5758cd1). No mergear ni deployar desde acá.

| # | Punto | Estado | Notas para retomar |
|---|-------|--------|--------------------|
| 1 | Logo R○DA en mayúsculas | hecho | Marca.astro, dibujarAfiche.ts (presenta) y og.mjs en DA; og.png regenerada con chromium (sin commitear el cambio de canal). |
| 2 | Primera pantalla clara | hecho | Apertura.astro reescrita: h1 + queHacemos (text-xl, tinta) + .cta Hablemos + link Ver precios. Se fue la bajada (queda comentada en guion). Entra a 2,65 s (título a 2,2 s). |
| 3 | Home más corta | hecho | Home: 390×844 → 11.773 px = 13,95 pantallas (antes 19,63); 1440×900 → 12.832 px = 14,26 (antes 18,93). El hueco de y≈13.240 en compu era el tramo fijo de ActoTres (260svh con 1,5 de pausa al final); quedó en 145svh con 0,4 de pausa. |
| 4 | View Transitions | sin empezar | |
| 5 | Sacar recursos genéricos | hecho | Rotulo.astro borrado. Las claves rotulo del guion quedaron sin uso (no las borré para no tocar la forma). Revisado en capturas de /, /precios, caso y /contacto. |
| 6 | Legibilidad y contraste AA | hecho | Chequeo propio de contraste/tamaño (scripts/_contraste.mjs, no commiteado) limpio en es/en/pt, salvo las letras de colores de MÁS/MORE/MAIS sobre rosa (no las toqué: es el círculo de MÁS ES MÁS). Las maquetas ilustrativas (web genérica de ActoUno y la web que se arma en ActoTres, aria-hidden) mantienen su letra chica a escala. |
| 7 | Animaciones | hecho | Revisado: hamburguesa abierta/cerrada, aviso de error de /contacto. No toqué Loader (sigue animando width en su máquina de escribir), cintas, círculo ni secuencia de /nosotros (salvo el ↺ → SVG). |
| 8 | Contenido (precios, nosotros) | sin empezar | |
| — | Verificación final | sin empezar | |

## Decidido por mí

- Punto 1: con DA en mayúsculas el anillo de 0.5em parecía una o minúscula; lo subí a 0.7em (altura de mayúscula) en el logo, el afiche y og.png.
- og.png: el título también pierde la cursiva en "historia" (va con el punto 5).
- Punto 2: texto de la primera pantalla: "Diseñamos y programamos webs a medida para marcas, desde US$ 300." (en/pt equivalentes). Saqué la bajada "Falta contarla donde te buscan." para que entren título, línea y botón en 390×844.
- Punto 3: también acorté la puerta de MÁS ES MÁS (180→150svh) recalculando `llena`: el círculo hace lo mismo, con menos scroll. No cambié la animación en sí.
- Punto 5: también saqué la cursiva de "Mira.", "Y se va." y "…a veces." (títulos enteros en cursiva como recurso), los números de ActoDos y de las notas de ActoUno, los (n / total) del tráiler y del caso, y los paréntesis de los subtítulos del caso y del filtro de /proyectos. Dejé el "(Hablemos)" del menú porque es navegación. "Volver" quedó subrayado para que se lea como link sin la flecha.
- Punto 6: las maquetas dentro de ActoUno y ActoTres son dibujos (aria-hidden) y escalan con el mockup: no las llevé a 13px. Las letras M-O-RE / M-A-IS de colores sobre rosa no llegan a 3:1, pero son parte del círculo de MÁS ES MÁS, que no había que tocar.
- Punto 7: en el FAQ, el :active va en el summary. Las carpetas de /precios no son clickeables (solo el botón "Quiero esta", que es .cta), así que no les puse :active. La grisura de la web genérica pasó de filter a una capa con mix-blend-mode: saturation que anima opacidad. Probé un @custom-variant para hover de Tailwind, pero rompe group-hover; lo dejé en CSS común.

## Mediciones

- Home antes (master 5758cd1, build de preview, scrolleando hasta el final): 390×844 → 16.565 px = 19,63 pantallas; 1440×900 → 17.034 px = 18,93 pantallas.
- Home después de los puntos 3 y 5: 390×844 → 11.773 px = 13,95 pantallas; 1440×900 → 12.832 px = 14,26 pantallas.

## Fuera de alcance, ya roto en master

- `npm test`: 13 tests unitarios fallan igual en master (afiche, copy, sinopsis): esperan textos viejos ("grita/susurra") y el test de jerga marca "SEO". No los toqué.
- `npm run check` (tsc) da 10 errores, todos en tests/unit (afiche.test.ts y sinopsis.test.ts llaman a funciones con otra firma). Igual en master. El código de src/ compila limpio.
