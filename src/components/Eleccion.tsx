import { useEffect, useId, useState } from 'react';
import { useStore } from '@nanostores/react';
import { $respuestas, responder } from '../story/store';
import type { Respuestas } from '../story/opciones';

type Clave = 'situacion' | 'objetivo' | 'rubro';

interface Props {
  clave: Clave;
  pregunta: string;
  numero: number;
  /** cuántas preguntas tiene la historia */
  total?: number;
  opciones: readonly { id: string; label: string }[];
  /** grilla de dos columnas en mobile (para listas largas) */
  compacta?: boolean;
}

export default function Eleccion({ clave, pregunta, numero, total = 2, opciones, compacta = false }: Props) {
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
      <p className="mono mb-5 text-gris">
        (Pregunta {numero} de {total} · opcional)
      </p>
      <h3 id={idTitulo} className="mb-10 font-titulo text-[clamp(2.6rem,11vw,5.5rem)] leading-[0.95] tracking-[-0.045em]">
        {pregunta}
      </h3>
      <ul className={compacta ? 'grid grid-cols-2 gap-x-4 md:grid-cols-3' : ''}>
        {opciones.map((o, i) => {
          const activa = elegida === o.id;
          return (
            <li key={o.id} className="border-t border-tinta/15">
              <button
                type="button"
                aria-pressed={activa}
                onClick={() => elegir(o.id)}
                className="group flex min-h-16 w-full items-center gap-4 py-4 text-left"
              >
                <span className="mono w-8 text-gris tabular-nums">({String(i + 1).padStart(2, '0')})</span>
                <span
                  className={`flex-1 text-lg leading-tight transition-all duration-500 ease-[var(--ease-cine)] md:text-2xl ${
                    activa ? 'translate-x-1 italic font-titulo text-[1.35em] md:text-[1.4em]' : 'text-tinta/80 group-hover:translate-x-2 group-hover:text-tinta'
                  }`}
                >
                  {o.label}
                </span>
                <span
                  aria-hidden="true"
                  className={`marca-eleccion relative grid size-6 flex-none place-items-center rounded-full border transition-colors duration-500 ${
                    activa ? 'activa border-tinta' : 'border-tinta/30 group-hover:border-tinta/60'
                  }`}
                >
                  <span className="punto size-4 rounded-full" />
                  <span className="onda absolute inset-0 rounded-full" />
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <p
        aria-live="polite"
        className={`mono mt-6 text-gris transition-opacity duration-700 ${elegida ? 'opacity-100' : 'opacity-0'}`}
      >
        {elegida ? 'Anotado: va a aparecer en tu afiche, al final.' : ''}
      </p>
    </div>
  );
}
