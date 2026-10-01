# Roda — rediseño minimalista y página de proyectos

Reemplaza la dirección visual de `2026-09-30-roda-web-design.md` (cine oscuro). La historia, las preguntas, el tráiler final y los efectos de scroll se mantienen.

## Qué cambia

**Piel.** Blanco hueso y tinta negra, editorial (referencia: Rue Studio). Rótulos chicos en monoespaciada mayúscula con numeración entre paréntesis — `(01)` —, títulos y texto en Inter Tight (una grotesca apretada; sin serif, a pedido de Giuli). Se van el haz de luz, el ámbar tungsteno y las cartas de acto a pantalla completa. El timecode queda, en mono.

**El color solo aparece cuando la historia lo pide:**
1. Loader: fondo negro, la frase se escribe a máquina con cursor. Al irse, revela la página blanca.
2. Blanco y negro hasta el giro ("Menos es más… a veces").
3. "MÁS ES MÁS": la puerta de color y una explosión de webs reales de Roda (Emme, Unik, Eber, Craft, MUDA) sobre fondos que cambian de color, con las tres frases de ejemplo.
4. Corte seco a blanco. Deslizador "¿susurra o grita?": por defecto todo sigue minimalista; si el visitante desliza a "grita", lo que sigue se enciende (fondos de color, tipografía del grito, las capturas en color).

**Más corta (de 11 tramos a 7, ~90 segundos):**

| # | Tramo |
|---|---|
| 1 | Loader |
| 2 | Apertura |
| 3 | (01) La primera impresión — líneas + "No lee. Mira.", la web genérica que se apaga, cierre, pregunta 1 |
| 4 | (02) Lo que hace una buena web — tres principios (al instante, liviana con peso real, un solo lugar + pregunta 2) |
| 5 | Giro → MÁS ES MÁS → corte → deslizador (pregunta 3) |
| 6 | (03) Cómo trabajamos — tira horizontal de cinco pasos (también en mobile) + adelanto de proyectos con "Ver todos" |
| 7 | Tráiler final + créditos en una línea + pie |

Salen de la home: sección para creativos (pasa a `/proyectos`), cartelera y pregunta de rubro (pasa a `/proyectos` como filtro; sigue alimentando el brief), créditos largos.

Atajo para el apurado: "Ir a mi tráiler" en el nav, siempre visible.

## Proyectos

- `/proyectos`: índice editorial. Filtro por rubro (guarda la respuesta 4 en la sesión), tira de capturas en blanco y negro que pasan a color al pasar o enfocar, y la línea para creativos.
- `/proyectos/<slug>`: caso de estudio — ficha (rubro, año, qué hicimos), desafío, qué hicimos, destacados, resultado (solo si es real), capturas desktop y mobile, botón "Ver en vivo" sin mostrar la URL, y "Siguiente proyecto".
- Proyectos: MUDA, Emme Digital, Eber, Craft Studio, Fidalgo Select, Unik. Salen CosteAR, Heacky y Luciana Thibaut.
- Capturas: `scripts/capturar-proyectos.mjs` → `src/assets/proyectos/<slug>/`, servidas como WebP por `astro:assets`.
- Textos de los casos: borrador escrito a partir de cada repo; lo que hay que confirmar queda marcado `PENDIENTE` en `src/content/proyectos.ts`. Ningún resultado inventado.

## Pruebas

Los e2e existentes se actualizan a la nueva estructura (créditos en el pie, rubro y creativos en `/proyectos`, link del nav). Nuevos: el loader escribe la frase y se va antes de 2,5 s; la home no tiene la cartelera y enlaza a `/proyectos`; cada caso de estudio carga con sus capturas y su botón "Ver en vivo"; en tono "grita" las capturas del adelanto van en color.
