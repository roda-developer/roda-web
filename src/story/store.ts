import { map } from 'nanostores';
import type { Respuestas } from './opciones';
import { VACIAS } from './sinopsis';

type Almacen = Pick<Storage, 'getItem' | 'setItem'>;

const CLAVE = 'roda:respuestas';

function leer(storage: Almacen | null): Respuestas {
  try {
    const crudo = storage?.getItem(CLAVE);
    if (!crudo) return { ...VACIAS };
    const datos = JSON.parse(crudo) as Partial<Respuestas>;
    return { ...VACIAS, ...datos };
  } catch {
    return { ...VACIAS };
  }
}

export function crearStore(storage: Almacen | null) {
  const $respuestas = map<Respuestas>(leer(storage));

  function responder<K extends keyof Respuestas>(clave: K, valor: Respuestas[K]) {
    $respuestas.setKey(clave, valor);
    try {
      storage?.setItem(CLAVE, JSON.stringify($respuestas.get()));
    } catch {
      /* modo privado o storage bloqueado: seguimos en memoria */
    }
  }

  return { $respuestas, responder };
}

function storageDelNavegador(): Almacen | null {
  try {
    return typeof sessionStorage === 'undefined' ? null : sessionStorage;
  } catch {
    return null;
  }
}

export const { $respuestas, responder } = crearStore(storageDelNavegador());
