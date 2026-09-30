import { useEffect, useId, useState, type CSSProperties } from 'react';
import { $respuestas, responder } from '../story/store';
import { aplicarIntensidad, tonoDe } from '../motion/intensidad';

interface Props {
  pregunta: string;
  ayuda: string;
  extremos: readonly [string, string] | readonly string[];
  remate: string;
}

export default function Deslizador({ pregunta, ayuda, extremos, remate }: Props) {
  const [valor, setValor] = useState(0.3);
  const [tocado, setTocado] = useState(false);
  const idTitulo = useId();

  // Al montar: recuperar la respuesta de la sesión y aplicarla a toda la página.
  useEffect(() => {
    const guardado = $respuestas.get().estilo;
    if (guardado !== null) {
      setValor(guardado);
      setTocado(true);
      aplicarIntensidad(guardado);
    }
  }, []);

  const mover = (v: number) => {
    setValor(v);
    setTocado(true);
    responder('estilo', v);
    aplicarIntensidad(v);
  };

  const grita = tonoDe(valor) === 'grita';
  const estilo = { '--v': valor } as CSSProperties;

  return (
    <div className="deslizador w-full max-w-5xl" style={estilo}>
      <p className="mb-5 text-[0.68rem] tracking-[0.32em] text-tungsteno uppercase">
        Pregunta 3 de 4 <span className="text-niebla">· opcional</span>
      </p>
      <h3 id={idTitulo} className="mb-4 font-titulo text-[clamp(2.6rem,11vw,6rem)] leading-[0.95] tracking-[-0.02em]">
        {pregunta}
      </h3>
      <p className="mb-10 max-w-[34ch] text-lg text-pantalla/70">{ayuda}</p>

      <div className="vista" aria-hidden="true">
        <span className="mancha mancha-a" />
        <span className="mancha mancha-b" />
        <span className="mancha mancha-c" />
        <div className="relative z-10 flex h-full flex-col justify-between p-5 md:p-8">
          <div className="flex items-center justify-between text-[0.65rem] tracking-[0.3em] uppercase opacity-70">
            <span>Tu marca</span>
            <span>{grita ? '¡Entrá!' : 'Pasá'}</span>
          </div>
          <p className="vista-marca">{grita ? 'TU MARCA' : 'tu marca'}</p>
          <p className="vista-bajada">{grita ? 'Imposible no mirarla.' : 'Imposible no escucharla.'}</p>
        </div>
      </div>

      <label className="mt-10 block">
        <span className="sr-only">{pregunta}</span>
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={Math.round(valor * 100)}
          aria-labelledby={idTitulo}
          aria-valuetext={grita ? extremos[1] : extremos[0]}
          onChange={(e) => mover(Number(e.currentTarget.value) / 100)}
          className="rango w-full"
        />
      </label>
      <div className="mt-3 flex justify-between text-[0.7rem] tracking-[0.3em] uppercase">
        <span className={grita ? 'text-niebla' : 'text-pantalla'}>{extremos[0]}</span>
        <span className={grita ? 'text-pantalla' : 'text-niebla'}>{extremos[1]}</span>
      </div>

      <p
        aria-live="polite"
        className={`mt-16 font-titulo text-[clamp(2rem,8vw,4.5rem)] leading-none transition-opacity duration-1000 ${tocado ? 'opacity-100' : 'opacity-0'}`}
      >
        {remate}
      </p>
    </div>
  );
}
