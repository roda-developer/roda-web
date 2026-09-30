import { describe, it, expect } from 'vitest';
import { armarSinopsis, fragmentosSinopsis, VACIAS } from '../../src/story/sinopsis';
import { preestreno } from '../../src/story/preestreno';

const completas = { rubro: 'gastronomia', estilo: 0.9, situacion: 'no-representa', objetivo: 'reserve' } as const;

describe('fragmentosSinopsis', () => {
  it('parte la sinopsis en cartas que, juntas, son la sinopsis', () => {
    const f = fragmentosSinopsis(completas);
    expect(f).toEqual([
      'Una marca de gastronomía',
      'que grita,',
      'que hoy tiene web pero no la representa,',
      'y necesita que sus clientes reserven.',
    ]);
    expect(f.join(' ')).toBe(armarSinopsis(completas));
  });
  it('con una sola cláusula, la cierra con punto', () => {
    expect(fragmentosSinopsis({ ...VACIAS, estilo: 0 })).toEqual(['Una marca', 'que susurra.']);
  });
  it('solo con rubro es una sola carta', () => {
    expect(fragmentosSinopsis({ ...VACIAS, rubro: 'moda' })).toEqual(['Una marca de moda.']);
  });
  it('sin respuestas no hay cartas', () => {
    expect(fragmentosSinopsis(VACIAS)).toEqual([]);
  });
});

describe('preestreno (la vista previa de su web)', () => {
  it('el objetivo define el botón principal', () => {
    expect(preestreno({ ...VACIAS, objetivo: 'reserve' }).boton).toBe('Reservá tu lugar');
    expect(preestreno({ ...VACIAS, objetivo: 'compre' }).boton).toBe('Comprá ahora');
    expect(preestreno(VACIAS).boton).toBe('Conocenos');
  });
  it('el rubro define la marca de ejemplo', () => {
    expect(preestreno({ ...VACIAS, rubro: 'gastronomia' }).marca).toBe('Brasa');
    expect(preestreno({ ...VACIAS, rubro: 'otro' }).marca).toBe('Tu marca');
  });
  it('el estilo define el tono visual', () => {
    expect(preestreno({ ...VACIAS, estilo: 0.8 }).tono).toBe('grita');
    expect(preestreno({ ...VACIAS, estilo: 0.1 }).tono).toBe('susurra');
    expect(preestreno(VACIAS).tono).toBe('neutro');
  });
  it('la situación define la etiqueta', () => {
    expect(preestreno({ ...VACIAS, situacion: 'sin-web' }).etiqueta).toBe('Tu primera web');
    expect(preestreno(VACIAS).etiqueta).toBeNull();
  });
});
