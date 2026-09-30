import { describe, it, expect } from 'vitest';
import { pesoDeLaPagina } from '../../src/story/peso';

const perf = (nav: number, recursos: number[]) => ({
  getEntriesByType: (tipo: string) =>
    tipo === 'navigation' ? [{ transferSize: nav }] : recursos.map((transferSize) => ({ transferSize })),
});

describe('pesoDeLaPagina', () => {
  it('suma documento y recursos y redondea a KB', () => {
    expect(pesoDeLaPagina(perf(20_480, [102_400, 51_200]))).toBe(170);
  });
  it('sin datos (caché o navegador sin soporte) devuelve null', () => {
    expect(pesoDeLaPagina(perf(0, [0, 0]))).toBeNull();
  });
  it('nunca muestra menos de 1 KB', () => {
    expect(pesoDeLaPagina(perf(300, []))).toBe(1);
  });
});
