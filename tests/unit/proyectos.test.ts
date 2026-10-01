import { describe, it, expect } from 'vitest';
import { PROYECTOS, ordenarPorRubro, proyectoSiguiente } from '../../src/content/proyectos';

describe('ordenarPorRubro', () => {
  it('sin rubro deja el orden original', () => {
    expect(ordenarPorRubro(PROYECTOS, null)).toEqual(PROYECTOS);
  });
  it('pone primero los del rubro elegido y conserva el resto', () => {
    const r = ordenarPorRubro(PROYECTOS, 'arte');
    expect(r.slice(0, 2).map((p) => p.titulo)).toEqual(['Eber', 'Craft Studio']);
    expect(r).toHaveLength(PROYECTOS.length);
  });
  it('no muta la lista original', () => {
    const antes = PROYECTOS.map((p) => p.titulo);
    ordenarPorRubro(PROYECTOS, 'arte');
    expect(PROYECTOS.map((p) => p.titulo)).toEqual(antes);
  });
});

describe('proyectos', () => {
  it('cada slug es único y sirve para una URL', () => {
    const slugs = PROYECTOS.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    slugs.forEach((s) => expect(s).toMatch(/^[a-z0-9-]+$/));
  });
  it('cada caso tiene su historia completa y una web en vivo', () => {
    for (const p of PROYECTOS) {
      expect(p.cliente && p.desafio && p.logline).toBeTruthy();
      expect(p.solucion.length).toBeGreaterThan(0);
      expect(p.destacados.length).toBeGreaterThan(0);
      expect(p.url).toMatch(/^https:\/\//);
    }
  });
  it('el siguiente del último vuelve al primero', () => {
    expect(proyectoSiguiente(PROYECTOS[0].slug)).toBe(PROYECTOS[1]);
    expect(proyectoSiguiente(PROYECTOS.at(-1)!.slug)).toBe(PROYECTOS[0]);
  });
});
