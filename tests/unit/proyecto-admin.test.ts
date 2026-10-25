import { describe, it, expect } from 'vitest';
import { validarProyectoAdmin } from '../../src/content/proyecto-admin';

const valido = {
  slug: 'lupe',
  titulo: 'Lupe',
  rubro: 'gastronomia',
  logline: 'Pastas frescas en Palermo.',
  genero: 'Landing',
  anio: 2026,
  rol: 'Diseño y desarrollo',
  url: 'https://lupe.com',
  cliente: 'Fábrica de pastas.',
  desafio: 'Que se entienda el menú.',
  solucion: ['Una página con el menú.'],
  destacados: ['Menú a la vista'],
};

describe('validarProyectoAdmin', () => {
  it('deja pasar un proyecto completo', () => {
    expect(validarProyectoAdmin(valido, 'lupe.json').slug).toBe('lupe');
  });

  it('acepta traducciones parciales y color', () => {
    const p = validarProyectoAdmin({ ...valido, color: '#ff2e4d', traducciones: { en: { logline: 'Fresh pasta.' } } }, 'lupe.json');
    expect(p.traducciones?.en?.logline).toBe('Fresh pasta.');
  });

  it('frena el build con el archivo y el campo que falla', () => {
    const { titulo, ...sinTitulo } = valido;
    expect(() => validarProyectoAdmin(sinTitulo, 'lupe.json')).toThrow(/lupe\.json.*titulo/s);
  });

  it('no acepta un rubro que no existe', () => {
    expect(() => validarProyectoAdmin({ ...valido, rubro: 'astronautas' }, 'lupe.json')).toThrow(/rubro/);
  });

  it('no acepta un slug con espacios o mayúsculas (va en la dirección)', () => {
    expect(() => validarProyectoAdmin({ ...valido, slug: 'Mi Proyecto' }, 'x.json')).toThrow(/slug/);
  });
});
