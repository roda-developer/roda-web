type Medible = { getEntriesByType(tipo: string): ArrayLike<{ transferSize?: number }> };

/** Peso transferido de la página (documento + recursos) en KB, o null si el navegador no lo informa. */
export function pesoDeLaPagina(perf: Medible): number | null {
  const suma = (tipo: string) =>
    Array.from(perf.getEntriesByType(tipo)).reduce((t, e) => t + (e.transferSize ?? 0), 0);
  const bytes = suma('navigation') + suma('resource');
  if (bytes <= 0) return null;
  return Math.max(1, Math.round(bytes / 1024));
}
