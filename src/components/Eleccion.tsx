import { useEffect, useId, useState } from 'react';
import { useStore } from '@nanostores/react';
import { $respuestas, responder } from '../story/store';
import type { Respuestas } from '../story/opciones';

type Clave = 'situacion' | 'objetivo' | 'rubro';

interface Props {
  clave: Clave;
  pregunta: string;
  numero: number;
  opciones: readonly { id: string; label: string }[];
  /** grilla de dos columnas en mobile (para listas largas) */
  compacta?: boolean;
}

export default function Eleccion({ clave, pregunta, numero, opciones, compacta = false }: Props) {
  const respuestas = useStore($respuestas);
  // El HTML estático sale sin selección; la de la sesión se aplica al montar (sin desajuste de hidratación).
  const [montado, setMontado] = useState(false);
  useEffect(() => setMontado(true), []);
  const elegida = montado ? respuestas[clave] : null;
  const idTitulo = useId();

  const elegir = (id: string) =>
    responder(clave, (elegida === id ? null : id) as Respuestas[Clave]);

  return (
    <div role="group" aria-labelledby={idTitulo} className="eleccion w-full max-w-3xl">
      <p className="mb-5 text-[0.68rem] tracking-[0.32em] text-tungsteno uppercase">
        Pregunta {numero} de 4 <span className="text-niebla">· opcional</span>
      </p>
      <h3 id={idTitulo} className="titulo-adaptable mb-10 font-titulo text-[clamp(2.6rem,11vw,5.5rem)] leading-[0.95] tracking-[-0.02em]">
        {pregunta}
      </h3>
      <ul className={compacta ? 'grid grid-cols-2 gap-x-4 md:grid-cols-3' : ''}>
        {opciones.map((o, i) => {
          const activa = elegida === o.id;
          return (
            <li key={o.id} className="border-t border-pantalla/15">
              <button
                type="button"
                aria-pressed={activa}
                onClick={() => elegir(o.id)}
                className="group flex min-h-16 w-full items-center gap-4 py-4 text-left transition-colors duration-500"
              >
                <span className="w-6 text-[0.7rem] text-niebla tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <span
                  className={`flex-1 text-lg leading-tight transition-all duration-500 ease-[var(--ease-cine)] md:text-2xl ${
                    activa ? 'translate-x-1 text-tungsteno' : 'text-pantalla/85 group-hover:translate-x-2 group-hover:text-pantalla'
                  }`}
                >
                  {o.label}
                </span>
                <span
                  aria-hidden="true"
                  className={`grid size-5 flex-none place-items-center rounded-full border transition-all duration-500 ${
                    activa ? 'border-tungsteno shadow-[0_0_14px_var(--color-tungsteno)]' : 'border-pantalla/30'
                  }`}
                >
                  <span className={`size-2 rounded-full bg-tungsteno transition-transform duration-500 ${activa ? 'scale-100' : 'scale-0'}`} />
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <p
        aria-live="polite"
        className={`mt-6 text-sm text-niebla italic transition-opacity duration-700 ${elegida ? 'opacity-100' : 'opacity-0'}`}
      >
        {elegida ? 'Anotado. Seguí bajando.' : ''}
      </p>
    </div>
  );
}
