import { describe, it, expect } from 'vitest';
import { formatearTimecode } from '../../src/motion/timecode';

describe('formatearTimecode', () => {
  it('al principio marca cero', () => {
    expect(formatearTimecode(0)).toBe('00:00:00:00');
  });
  it('al final marca la duración nominal de 3 minutos', () => {
    expect(formatearTimecode(1)).toBe('00:03:00:00');
  });
  it('cuenta cuadros a 24 fps', () => {
    expect(formatearTimecode(0.5)).toBe('00:01:30:00');
    expect(formatearTimecode(1 / 180 / 2, 180)).toBe('00:00:00:12');
  });
  it('recorta valores fuera de rango', () => {
    expect(formatearTimecode(-1)).toBe('00:00:00:00');
    expect(formatearTimecode(2)).toBe('00:03:00:00');
    expect(formatearTimecode(Number.NaN)).toBe('00:00:00:00');
  });
});

