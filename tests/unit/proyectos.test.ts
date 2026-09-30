import { describe, it, expect } from 'vitest';
import { PROYECTOS, ordenarPorRubro } from '../../src/content/proyectos';

describe('ordenarPorRubro', () => {
  it('sin rubro deja el orden original', () => {
    expect(ordenarPorRubro(PROYECTOS, null)).toEqual(PROYECTOS);
  });
  it('pone primero los del rubro elegido y conserva el resto', () => {
    const r = ordenarPorRubro(PROYECTOS, 'salud');
    expect(r[0].titulo).toBe('Heacky');
    expect(r).toHaveLength(PROYECTOS.length);
  });
  it('no muta la lista original', () => {
    const antes = PROYECTOS.map((p) => p.titulo);
    ordenarPorRubro(PROYECTOS, 'arte');
    expect(PROYECTOS.map((p) => p.titulo)).toEqual(antes);
  });
});
