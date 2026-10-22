# Auditoría: progreso

Rama: `audit/cambios` (sale de master 5758cd1). No mergear ni deployar desde acá.

| # | Punto | Estado | Notas para retomar |
|---|-------|--------|--------------------|
| 1 | Logo R○DA en mayúsculas | hecho | Marca.astro, dibujarAfiche.ts (presenta) y og.mjs en DA; og.png regenerada con chromium (sin commitear el cambio de canal). |
| 2 | Primera pantalla clara | sin empezar | |
| 3 | Home más corta | sin empezar | |
| 4 | View Transitions | sin empezar | |
| 5 | Sacar recursos genéricos | sin empezar | |
| 6 | Legibilidad y contraste AA | sin empezar | |
| 7 | Animaciones | sin empezar | |
| 8 | Contenido (precios, nosotros) | sin empezar | |
| — | Verificación final | sin empezar | |

## Decidido por mí

- Punto 1: con DA en mayúsculas el anillo de 0.5em parecía una o minúscula; lo subí a 0.7em (altura de mayúscula) en el logo, el afiche y og.png.
- og.png: el título también pierde la cursiva en "historia" (va con el punto 5).

## Mediciones

- Home antes (master 5758cd1, build de preview, scrolleando hasta el final): 390×844 → 16.565 px = 19,63 pantallas; 1440×900 → 17.034 px = 18,93 pantallas.

## Fuera de alcance, ya roto en master

- `npm test`: 13 tests unitarios fallan igual en master (afiche, copy, sinopsis): esperan textos viejos ("grita/susurra") y el test de jerga marca "SEO". No los toqué.
