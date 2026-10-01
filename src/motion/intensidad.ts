import { gritaDesde } from '../story/opciones';

export type Tono = 'neutro' | 'susurra' | 'grita';

export function normalizarIntensidad(valor: number | null): number {
  if (valor === null || !Number.isFinite(valor)) return 0;
  return Math.min(1, Math.max(0, valor));
}

export function tonoDe(valor: number | null): Tono {
  if (valor === null) return 'neutro';
  return valor >= gritaDesde ? 'grita' : 'susurra';
}

