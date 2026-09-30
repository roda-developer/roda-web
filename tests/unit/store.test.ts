import { describe, it, expect } from 'vitest';
import { crearStore } from '../../src/story/store';

function memoria() {
  const datos = new Map<string, string>();
  return {
    getItem: (k: string) => datos.get(k) ?? null,
    setItem: (k: string, v: string) => void datos.set(k, v),
  };
}

describe('store de respuestas', () => {
  it('arranca vacío', () => {
    const s = crearStore(memoria());
    expect(s.$respuestas.get()).toEqual({ situacion: null, objetivo: null, estilo: null, rubro: null });
  });

  it('responder guarda y persiste entre instancias (recarga)', () => {
    const storage = memoria();
    crearStore(storage).responder('rubro', 'moda');
    expect(crearStore(storage).$respuestas.get().rubro).toBe('moda');
  });

  it('storage que tira excepción no rompe', () => {
    const roto = {
      getItem: () => { throw new Error('bloqueado'); },
      setItem: () => { throw new Error('bloqueado'); },
    };
    const s = crearStore(roto);
    s.responder('estilo', 0.7);
    expect(s.$respuestas.get().estilo).toBe(0.7);
  });

  it('sin storage funciona en memoria', () => {
    const s = crearStore(null);
    s.responder('objetivo', 'reserve');
    expect(s.$respuestas.get().objetivo).toBe('reserve');
  });

  it('ignora datos guardados corruptos', () => {
    const storage = memoria();
    storage.setItem('roda:respuestas', '{no es json');
    expect(crearStore(storage).$respuestas.get().rubro).toBeNull();
  });
});
