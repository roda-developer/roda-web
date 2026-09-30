import { useEffect, useState, type CSSProperties } from 'react';
import { useStore } from '@nanostores/react';
import { $respuestas } from '../story/store';
import { PROYECTOS, ordenarPorRubro, type Proyecto } from '../content/proyectos';

function Poster({ p, cerca }: { p: Proyecto; cerca: boolean }) {
  const estilo = { '--fondo': p.fondo, '--tinta': p.tinta } as CSSProperties;
  return (
    <article data-poster className="poster" style={estilo}>
      <div className="flex items-start justify-between gap-3 text-[0.6rem] tracking-[0.3em] uppercase opacity-75">
        <span>Roda presenta</span>
        {cerca ? <span className="poster-cerca">Cerca de lo tuyo</span> : <span>{p.anio}</span>}
      </div>

      <div>
        <h3 className="poster-titulo adapta-titulo">{p.titulo}</h3>
        <p className="mt-4 max-w-[20ch] font-titulo text-xl leading-tight italic opacity-90 md:text-2xl">{p.logline}</p>
      </div>

      <div className="poster-creditos">
        <p>Una producción Roda · {p.genero} · {p.anio}</p>
        <p>Dirigida por Giuliana y Facundo</p>
        {p.resultado && <p className="mt-2 text-[0.8rem] tracking-normal normal-case opacity-100">{p.resultado}</p>}
        {p.url && (
          <a href={p.url} target="_blank" rel="noopener" className="mt-3 inline-flex min-h-11 items-center gap-2 text-[0.7rem] tracking-[0.25em] underline-offset-4 hover:underline">
            Ver en cartel <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default function Posters() {
  const { rubro } = useStore($respuestas);
  const [montado, setMontado] = useState(false);
  useEffect(() => setMontado(true), []);
  const elegido = montado ? rubro : null;
  const lista = ordenarPorRubro(PROYECTOS, elegido);

  return (
    <div className="posters" aria-live="polite">
      {lista.map((p) => (
        <Poster key={p.titulo} p={p} cerca={elegido !== null && p.rubro === elegido} />
      ))}
    </div>
  );
}
