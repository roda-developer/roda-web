export const FPS = 24;
/** Un cuadro de cine, en segundos. Las duraciones se piensan en múltiplos de esto. */
export const F = 1 / FPS;

const dos = (n: number) => String(n).padStart(2, '0');

/** progreso 0–1 del scroll → "HH:MM:SS:FF" sobre una duración nominal */
export function formatearTimecode(progreso: number, duracion = 180): string {
  const p = Number.isFinite(progreso) ? Math.min(1, Math.max(0, progreso)) : 0;
  const cuadros = Math.round(p * duracion * FPS);
  const ff = cuadros % FPS;
  const totalSeg = Math.floor(cuadros / FPS);
  const ss = totalSeg % 60;
  const mm = Math.floor(totalSeg / 60) % 60;
  const hh = Math.floor(totalSeg / 3600);
  return `${dos(hh)}:${dos(mm)}:${dos(ss)}:${dos(ff)}`;
}
