import { describe, it, expect } from 'vitest';
import { armarSinopsis, linkWhatsApp, linkMail, VACIAS } from '../../src/story/sinopsis';

describe('armarSinopsis', () => {
  it('sin respuestas no hay sinopsis', () => {
    expect(armarSinopsis(VACIAS)).toBeNull();
  });

  it('con las cuatro respuestas arma la sinopsis completa', () => {
    expect(
      armarSinopsis({ rubro: 'gastronomia', estilo: 0.9, situacion: 'no-representa', objetivo: 'reserve' }),
    ).toBe('Una marca de gastronomía que grita, que hoy tiene web pero no la representa, y necesita que sus clientes reserven.');
  });

  it('estilo bajo susurra y el límite 0.5 ya grita', () => {
    expect(armarSinopsis({ ...VACIAS, estilo: 0.2 })).toBe('Una marca que susurra.');
    expect(armarSinopsis({ ...VACIAS, estilo: 0.5 })).toBe('Una marca que grita.');
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

  it('rubro "otro" no se nombra', () => {
    expect(armarSinopsis({ ...VACIAS, rubro: 'otro', estilo: 0 })).toBe('Una marca que susurra.');
  });

  it('solo rubro "otro" igual cuenta como respuesta', () => {
    expect(armarSinopsis({ ...VACIAS, rubro: 'otro' })).toBe('Una marca con una historia propia.');
  });
});

describe('links de contacto', () => {
  it('WhatsApp lleva la sinopsis codificada', () => {
    const href = linkWhatsApp({ ...VACIAS, rubro: 'moda' }, '5491100000000');
    expect(href.startsWith('https://wa.me/5491100000000?text=')).toBe(true);
    expect(decodeURIComponent(href.split('text=')[1])).toContain('Una marca de moda.');
  });

  it('WhatsApp sin respuestas usa un mensaje genérico sin huecos', () => {
    const texto = decodeURIComponent(linkWhatsApp(VACIAS, '5491100000000').split('text=')[1]);
    expect(texto).toBe('Hola Roda, quiero contarles mi historia.');
    expect(texto).not.toMatch(/undefined|null/);
  });

  it('mail lleva asunto y cuerpo con la sinopsis', () => {
    const href = linkMail({ ...VACIAS, estilo: 1 }, 'hola@roda.studio');
    expect(href.startsWith('mailto:hola@roda.studio?subject=')).toBe(true);
    expect(decodeURIComponent(href)).toContain('Una marca que grita.');
  });
});
