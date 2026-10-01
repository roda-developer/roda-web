import { describe, it, expect } from 'vitest';
import * as guion from '../../src/content/guion';

const textos = (v: unknown): string[] =>
  typeof v === 'string' ? [v] : Array.isArray(v) ? v.flatMap(textos) : v && typeof v === 'object' ? Object.values(v).flatMap(textos) : [];

describe('copy sin jerga técnica', () => {
  it('ningún texto visible usa jerga', () => {
    const prohibidas = /\b(scroll|seo|responsive|performance|astro|react|gsap|frontend|backend|framework)\b/i;
    const culpables = textos(guion).filter((t) => prohibidas.test(t));
    expect(culpables).toEqual([]);
  });
  it('los créditos viven en el guion', () => {
    expect(guion.creditos.ficha.length).toBeGreaterThan(0);
  });
});
