import { useEffect, useRef, useState } from 'react';
import { useStore } from '@nanostores/react';
import { $respuestas } from '../story/store';
import { armarSinopsis, fragmentosSinopsis, linkMail, linkWhatsApp } from '../story/sinopsis';
import { preestreno, type Preestreno } from '../story/preestreno';
import { MAIL, WHATSAPP } from '../content/contacto';
import { cierre } from '../content/guion';

const CARTA_MS = 1500;

function VistaPrevia({ p }: { p: Preestreno }) {
  return (
    <div className={`preestreno preestreno-${p.tono}`} aria-label={`Ejemplo de tu web: ${p.marca}`}>
      <div className="flex items-center justify-between text-[0.6rem] tracking-[0.25em] uppercase opacity-70">
        <span className="preestreno-logo">{p.marca}</span>
        <span>Menú</span>
      </div>
      <div className="space-y-4">
        {p.etiqueta && <p className="text-[0.6rem] tracking-[0.3em] uppercase opacity-70">{p.etiqueta}</p>}
        <p className="preestreno-titular">{p.titular}</p>
        <span className="preestreno-boton">{p.boton}</span>
      </div>
      <p className="text-[0.55rem] tracking-[0.25em] uppercase opacity-50">Ejemplo ilustrativo</p>
    </div>
  );
}

export default function Final() {
  const respuestas = useStore($respuestas);
  const [montado, setMontado] = useState(false);
  const [carta, setCarta] = useState(-1);
  const [termino, setTermino] = useState(false);
  const pantalla = useRef<HTMLDivElement>(null);

  useEffect(() => setMontado(true), []);

  const cartas = montado ? fragmentosSinopsis(respuestas) : [];
  const sinopsis = montado ? armarSinopsis(respuestas) : null;
  const total = cartas.length + 1; // + la vista previa de su web

  // El tráiler corre solo cuando la pantalla entra en cuadro.
  useEffect(() => {
    if (!sinopsis || !pantalla.current) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCarta(total - 1);
      setTermino(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && carta === -1) setCarta(0);
      },
      { threshold: 0.6 },
    );
    obs.observe(pantalla.current);
    return () => obs.disconnect();
  }, [sinopsis, total, carta]);

  useEffect(() => {
    if (carta < 0 || termino) return;
    if (carta >= total - 1) {
      const t = setTimeout(() => setTermino(true), CARTA_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setCarta((c) => c + 1), CARTA_MS);
    return () => clearTimeout(t);
  }, [carta, total, termino]);

  const volverAVer = () => {
    setTermino(false);
    setCarta(0);
  };

  if (!sinopsis) {
    return (
      <div className="mx-auto w-full max-w-4xl text-center">
        <h2 className="adapta-titulo font-titulo text-[clamp(3.2rem,15vw,10rem)] leading-[0.9] tracking-[-0.03em]">
          {cierre.sinHistoria.titulo}
        </h2>
        <div className="mt-12 flex flex-col items-center gap-6">
          <a className="cta" href={linkWhatsApp(respuestas, WHATSAPP)} target="_blank" rel="noopener">
            {cierre.sinHistoria.cta}
          </a>
          <p className="text-niebla">
            {cierre.alternativa}{' '}
            <a className="text-pantalla underline underline-offset-4" href={linkMail(respuestas, MAIL)}>{MAIL}</a>
          </p>
        </div>
      </div>
    );
  }

  const p = preestreno(respuestas);
  return (
    <div className="mx-auto w-full max-w-5xl">
      <h2 className="mb-10 flex items-center gap-3 text-[0.7rem] tracking-[0.32em] text-[var(--acento)] uppercase">
        <span className="h-px w-8 bg-current" aria-hidden="true" />
        {cierre.conHistoria.rotulo}
      </h2>

      <div ref={pantalla} className="pantalla" aria-hidden="true">
        {cartas.map((texto, i) => (
          <p key={texto} className={`carta ${carta === i ? 'carta-activa' : ''}`}>{texto}</p>
        ))}
        <div className={`carta carta-vista ${carta === total - 1 ? 'carta-activa' : ''}`}>
          <VistaPrevia p={p} />
        </div>
        {carta === -1 && <p className="carta carta-activa text-niebla">▶</p>}
      </div>

      <div className={`mt-12 transition-opacity duration-1000 ${termino ? 'opacity-100' : 'opacity-0'}`}>
        <p className="adapta-titulo max-w-[26ch] font-titulo text-[clamp(1.9rem,7vw,3.6rem)] leading-[1.02] tracking-[-0.015em]">
          {sinopsis}
        </p>
        <p className="mt-10 font-titulo text-[clamp(2.6rem,11vw,6rem)] leading-none text-[var(--acento)] italic">
          {cierre.conHistoria.pregunta}
        </p>
        <div className="mt-10 flex flex-col items-start gap-6 md:flex-row md:items-center">
          <a className="cta" href={linkWhatsApp(respuestas, WHATSAPP)} target="_blank" rel="noopener">
            {cierre.conHistoria.cta}
          </a>
          <p className="text-niebla">
            {cierre.alternativa}{' '}
            <a className="text-pantalla underline underline-offset-4" href={linkMail(respuestas, MAIL)}>{MAIL}</a>
          </p>
        </div>
        <button type="button" onClick={volverAVer} className="mt-8 min-h-11 text-[0.7rem] tracking-[0.3em] text-niebla uppercase hover:text-pantalla">
          ↺ Volver a ver el tráiler
        </button>
      </div>
      {/* La sinopsis también existe fuera del tráiler para lectores de pantalla */}
      <p className="sr-only">Vista previa de tu web: {p.marca}. {p.titular} Botón: {p.boton}.</p>
    </div>
  );
}
