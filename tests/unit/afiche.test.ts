import { describe, it, expect } from 'vitest';
import { ajustarNombre, dominioDe, limpiarMarca } from '../../src/story/afiche';
import { linkWhatsApp, VACIAS } from '../../src/story/sinopsis';

describe('dominioDe', () => {
  it('arma un .com sin tildes, espacios ni símbolos', () => {
    expect(dominioDe('Panadería La Esquina')).toBe('panaderialaesquina.com');
    expect(dominioDe('Lupe & Co.')).toBe('lupeco.com');
    expect(dominioDe('Ñandú')).toBe('nandu.com');
  });

  it('sin nombre no hay dominio', () => {
    expect(dominioDe('')).toBe('');
    expect(dominioDe('  !!  ')).toBe('');
  });
});

describe('limpiarMarca', () => {
  it('saca espacios de más y corta los nombres muy largos', () => {
    expect(limpiarMarca('  Lupe   Pastelería ')).toBe('Lupe Pastelería');
    expect(limpiarMarca('a'.repeat(60))).toHaveLength(40);
  });
});

describe('ajustarNombre', () => {
  // Cada letra mide 0.6 del tamaño: alcanza para probar el reparto sin un navegador
  const medir = (texto: string, tam: number) => texto.length * tam * 0.6;

  it('un nombre corto va en un renglón y llena el ancho', () => {
    const { tam, lineas } = ajustarNombre('Lupe', medir, 600, 600);
    expect(lineas).toEqual(['Lupe']);
    expect(medir('Lupe', tam)).toBeLessThanOrEqual(600);
    expect(medir('Lupe', tam + 1)).toBeGreaterThan(600);
  });

  it('un nombre largo se parte por palabras para quedar más grande', () => {
    const { tam, lineas } = ajustarNombre('Panadería La Esquina', medir, 600, 600);
    expect(lineas.length).toBeGreaterThan(1);
    expect(lineas.join(' ')).toBe('Panadería La Esquina');
    expect(tam).toBeGreaterThan(600 / ('Panadería La Esquina'.length * 0.6));
  });

  it('nunca pasa del alto disponible', () => {
    const { tam, lineas } = ajustarNombre('Uno Dos Tres Cuatro Cinco Seis', medir, 600, 300, 0.9);
    expect(lineas.length * tam * 0.9).toBeLessThanOrEqual(300);
  });

  it('respeta un tamaño máximo', () => {
    expect(ajustarNombre('A', medir, 600, 600, 0.9, 200).tam).toBe(200);
  });
});

describe('WhatsApp con el nombre de la marca', () => {
  it('se presenta con la marca y suma la sinopsis si la hay', () => {
    const texto = decodeURIComponent(linkWhatsApp({ ...VACIAS, rubro: 'moda' }, '549', 'Lupe').split('text=')[1]);
    expect(texto).toBe('Hola Roda, soy de Lupe. Una marca de moda. Queremos empezar a contar nuestra historia.');
  });

  it('con marca y sin respuestas no deja huecos', () => {
    const texto = decodeURIComponent(linkWhatsApp(VACIAS, '549', 'Lupe').split('text=')[1]);
    expect(texto).toBe('Hola Roda, soy de Lupe. Queremos empezar a contar nuestra historia.');
  });
});

import { textosAfiche } from '../../src/story/afiche';

describe('textosAfiche: lo que respondiste aparece en el afiche', () => {
  it('sin respuestas, el afiche de siempre', () => {
    expect(textosAfiche(VACIAS)).toEqual({ antes: 'Una historia que todavía no contamos', estreno: 'Próximamente', genero: null });
  });

  it('el objetivo cambia la frase de arriba del nombre', () => {
    expect(textosAfiche({ ...VACIAS, objetivo: 'escriba' }).antes).toBe('Una historia para que te escriban');
    expect(textosAfiche({ ...VACIAS, objetivo: 'vea' }).antes).toBe('Una historia para que vean tu trabajo');
  });

  it('si ya tiene web, es un reestreno', () => {
    expect(textosAfiche({ ...VACIAS, situacion: 'no-representa' }).estreno).toBe('Reestreno');
    expect(textosAfiche({ ...VACIAS, situacion: 'quiero-mas' }).estreno).toBe('Reestreno');
    expect(textosAfiche({ ...VACIAS, situacion: 'sin-web' }).estreno).toBe('Próximamente');
  });

  it('el rubro aparece como género, salvo "otro"', () => {
    expect(textosAfiche({ ...VACIAS, rubro: 'gastronomia' }).genero).toBe('Gastronomía');
    expect(textosAfiche({ ...VACIAS, rubro: 'otro' }).genero).toBeNull();
  });
});
