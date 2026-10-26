/**
 * El cursor de Roda: un píxel de tinta (el cuadradito del video) que sigue al mouse con un poco de inercia.
 * Sobre links y botones se convierte en la O del logo (un anillo); al apretar se achica un poco.
 * En los campos de texto vuelve el cursor de siempre, para escribir.
 * Solo con mouse: en celulares y pantallas táctiles no existe. Sin movimiento, sigue al mouse sin demora.
 * Se mueve con transform (nada de top/left) y se dibuja en modo diferencia, así se ve sobre fotos claras y oscuras.
 */
const INTERACTIVO = 'a[href], button, [role="button"], [role="radio"], [role="checkbox"], [role="switch"], summary, label, [data-cursor="anillo"], .tarjeta, .panel';
const TEXTO = 'input:not([type="radio"]):not([type="checkbox"]), textarea, select, [contenteditable="true"]';

let listo = false;
export const iniciarCursor = () => {
  if (listo || !matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  listo = true;
  const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const cursor = document.createElement('div');
  cursor.className = 'cursor-roda';
  cursor.setAttribute('aria-hidden', 'true');
  cursor.innerHTML = '<span class="cursor-pixel"></span><span class="cursor-anillo"></span>';
  document.body.appendChild(cursor);
  document.documentElement.classList.add('con-cursor');

  let x = -100, y = -100, cx = -100, cy = -100, cuadro = 0, visto = false;
  const pintar = () => {
    // Inercia: cada cuadro recorre una parte del camino que falta (sin movimiento, llega de una)
    cx += (x - cx) * (quieto ? 1 : 0.28);
    cy += (y - cy) * (quieto ? 1 : 0.28);
    cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    cuadro = Math.abs(x - cx) + Math.abs(y - cy) > 0.1 ? requestAnimationFrame(pintar) : 0;
  };

  addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    x = e.clientX; y = e.clientY;
    if (!visto) { visto = true; cx = x; cy = y; cursor.classList.add('visible'); }
    const el = e.target as Element | null;
    const sobreTexto = !!el?.closest?.(TEXTO);
    cursor.classList.toggle('escribiendo', sobreTexto);
    cursor.classList.toggle('sobre', !sobreTexto && !!el?.closest?.(INTERACTIVO));
    if (!cuadro) cuadro = requestAnimationFrame(pintar);
  }, { passive: true });
  addEventListener('pointerdown', () => cursor.classList.add('apretado'), { passive: true });
  addEventListener('pointerup', () => cursor.classList.remove('apretado'), { passive: true });
  // Si el mouse sale de la ventana, el cursor se va con él
  document.addEventListener('pointerleave', () => cursor.classList.remove('visible'));
  document.addEventListener('pointerenter', () => { if (visto) cursor.classList.add('visible'); });
};
