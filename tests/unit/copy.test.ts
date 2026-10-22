import { describe, it, expect } from 'vitest';
import * as guion from '../../src/content/guion';

const textos = (v: unknown): string[] =>
  typeof v === 'string' ? [v] : Array.isArray(v) ? v.flatMap(textos) : v && typeof v === 'object' ? Object.values(v).flatMap(textos) : [];

describe('copy sin jerga técnica', () => {
  it('ningún texto visible usa jerga', () => {
    // "SEO" queda permitido: /precios ofrece "Indexación y SEO técnico" a propósito y aclara que eso no posiciona solo
    const prohibidas = /\b(scroll|responsive|performance|astro|react|gsap|frontend|backend|framework)\b/i;
    const culpables = textos(guion).filter((t) => prohibidas.test(t));
    expect(culpables).toEqual([]);
  });
  it('los créditos viven en el guion', () => {
    expect(guion.creditos.ficha.length).toBeGreaterThan(0);
  });
});
