import { describe, it, expect } from 'vitest';
import { armarSinopsis, linkMail, VACIAS } from '../../src/story/sinopsis';

describe('armarSinopsis', () => {
  it('sin respuestas no hay sinopsis', () => {
    expect(armarSinopsis(VACIAS)).toBeNull();
  });

  it('con todas las respuestas arma la sinopsis completa', () => {
    expect(
      armarSinopsis({ rubro: 'gastronomia', estilo: 0.9, situacion: 'no-representa', objetivo: 'reserve' }),
    ).toBe('Una marca de gastronomía que hoy tiene web pero no la representa, y necesita que sus clientes reserven.');
  });

  it('el estilo ya no cambia la sinopsis (se sacó "susurra o grita")', () => {
    expect(armarSinopsis({ ...VACIAS, estilo: 0.2 })).toBe('Una marca con una historia propia.');
    expect(armarSinopsis({ ...VACIAS, estilo: 1 })).toBe('Una marca con una historia propia.');
  });

  it('con solo el objetivo no arranca con "y"', () => {
    expect(armarSinopsis({ ...VACIAS, objetivo: 'escriba' })).toBe('Una marca que necesita que sus clientes le escriban.');
  });

  it('respuestas parciales omiten las cláusulas faltantes', () => {
    expect(armarSinopsis({ ...VACIAS, rubro: 'moda', objetivo: 'compre' })).toBe(
      'Una marca de moda que necesita que sus clientes compren.',
    );
    expect(armarSinopsis({ ...VACIAS, situacion: 'sin-web', objetivo: 'vea' })).toBe(
      'Una marca que hoy no tiene web, y necesita que sus clientes vean su trabajo.',
    );
  });

  it('solo rubro "otro" igual cuenta como respuesta', () => {
    expect(armarSinopsis({ ...VACIAS, rubro: 'otro' })).toBe('Una marca con una historia propia.');
  });
});

describe('link de mail', () => {
  it('lleva asunto y cuerpo con la sinopsis', () => {
    const href = linkMail({ ...VACIAS, rubro: 'moda' }, 'hola@rodadevelop.com');
    expect(href.startsWith('mailto:hola@rodadevelop.com?subject=')).toBe(true);
    expect(decodeURIComponent(href)).toContain('Una marca de moda.');
  });

  it('sin respuestas usa un mensaje genérico sin huecos', () => {
    const cuerpo = decodeURIComponent(linkMail(VACIAS, 'hola@rodadevelop.com').split('body=')[1]);
    expect(cuerpo).toBe('Hola Roda, quiero contarles mi historia.');
    expect(cuerpo).not.toMatch(/undefined|null/);
  });
});
