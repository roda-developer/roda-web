/**
 * Cloudflare entrega los archivos estáticos siempre enteros (no responde pedidos por partes).
 * Así, un video no puede saltar a un cuadro que todavía no bajó, y Safari puede tardar o no arrancar.
 * Por eso se baja completo a memoria y recién ahí se usa: desde entonces los saltos son instantáneos.
 * Si la descarga falla, se usa la dirección directa. Devuelve cuando el video ya puede mostrar cuadros.
 */
export const videoEnMemoria = async (video: HTMLVideoElement, url: string): Promise<void> => {
  let src = url;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(String(res.status));
    src = URL.createObjectURL(await res.blob());
  } catch {
    // Sin memoria: la dirección directa, con el comportamiento de siempre
  }
  await new Promise<void>((listo) => {
    video.addEventListener('loadeddata', () => listo(), { once: true });
    video.addEventListener('error', () => listo(), { once: true });
    video.src = src;
    video.load();
  });
};
