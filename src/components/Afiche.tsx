import { useEffect, useId, useRef, useState } from 'react';
import { useStore } from '@nanostores/react';
import { $respuestas } from '../story/store';
import { dominioDe, limpiarMarca, textosAfiche, type TextosCierre } from '../story/afiche';
import { ALTO, ANCHO, COLORES, ESTILOS, cargarTipografias, dibujarAfiche, type Color, type Estilo } from '../story/dibujarAfiche';
import { MAIL } from '../content/contacto';

const CLAVE = 'roda:marca';
const CLAVE_DISENO = 'roda:afiche';

function leerDiseno(): { estilo: Estilo; color: Color } {
  try {
    const d = JSON.parse(sessionStorage.getItem(CLAVE_DISENO) ?? '{}');
    return { estilo: ESTILOS.includes(d.estilo) ? d.estilo : 'estreno', color: d.color in COLORES ? d.color : 'rosa' };
  } catch {
    return { estilo: 'estreno', color: 'rosa' };
  }
}

function leerMarca(): string {
  try {
    return sessionStorage.getItem(CLAVE) ?? '';
  } catch {
    return '';
  }
}

interface Props {
  /** Los textos del cierre, ya en el idioma de la página */
  cierre: TextosCierre;
  /** Los rubros en el idioma de la página (para el género del afiche) */
  rubros: Record<string, string>;
  /** La dirección del formulario de contacto en ese idioma */
  contacto: string;
}

/** El final: escribís el nombre de tu marca y se arma tu afiche de estreno. */
export default function Afiche({ cierre, rubros, contacto }: Props) {
  const respuestas = useStore($respuestas);
  const [texto, setTexto] = useState('');
  const [listo, setListo] = useState(false);
  const [puedeCompartir, setPuedeCompartir] = useState(false);
  const [estilo, setEstilo] = useState<Estilo>('estreno');
  const [color, setColor] = useState<Color>('rosa');
  const lienzo = useRef<HTMLCanvasElement>(null);
  const idCampo = useId();
  const idAyuda = useId();
  const marca = limpiarMarca(texto);
  // Lo que respondió en la web se ve en el afiche (solo después de montar, para no desajustar el HTML)
  const textos = textosAfiche(respuestas, cierre, rubros);

  // La marca de esta sesión se recupera al montar (el HTML estático sale vacío)
  useEffect(() => {
    setTexto(leerMarca());
    const d = leerDiseno();
    setEstilo(d.estilo);
    setColor(d.color);
    cargarTipografias().finally(() => setListo(true));
    // Compartir archivos existe sobre todo en el celular; donde no está, el botón no aparece
    try {
      const prueba = new File([''], 'a.png', { type: 'image/png' });
      setPuedeCompartir(typeof navigator.canShare === 'function' && navigator.canShare({ files: [prueba] }));
    } catch {
      setPuedeCompartir(false);
    }
  }, []);

  useEffect(() => {
    const ctx = lienzo.current?.getContext('2d');
    if (!ctx || !listo) return;
    const cuadro = requestAnimationFrame(() => dibujarAfiche(ctx, { marca, estilo, color, textos }));
    return () => cancelAnimationFrame(cuadro);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [marca, estilo, color, listo, textos.antes, textos.estreno, textos.genero]);

  const elegir = (cambio: Partial<{ estilo: Estilo; color: Color }>) => {
    const nuevo = { estilo, color, ...cambio };
    setEstilo(nuevo.estilo);
    setColor(nuevo.color);
    try {
      sessionStorage.setItem(CLAVE_DISENO, JSON.stringify(nuevo));
    } catch {
      /* modo privado: seguimos en memoria */
    }
  };

  const escribir = (valor: string) => {
    setTexto(valor);
    try {
      sessionStorage.setItem(CLAVE, valor);
    } catch {
      /* modo privado: seguimos en memoria */
    }
  };

  const archivo = () =>
    new Promise<File | null>((resolver) => {
      const canvas = lienzo.current;
      if (!canvas) return resolver(null);
      const nombre = `afiche-${dominioDe(marca).replace('.com', '') || 'roda'}.png`;
      canvas.toBlob((blob) => resolver(blob ? new File([blob], nombre, { type: 'image/png' }) : null), 'image/png');
    });

  const descargar = async () => {
    const f = await archivo();
    if (!f) return;
    const url = URL.createObjectURL(f);
    const a = document.createElement('a');
    a.href = url;
    a.download = f.name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const compartir = async () => {
    const f = await archivo();
    if (!f) return;
    try {
      await navigator.share({ files: [f], title: marca ? `${marca}, una historia de Roda` : 'Roda' });
    } catch {
      /* canceló el menú de compartir */
    }
  };

  const descripcion = cierre.descripcion
    .replace('{marca}', marca || cierre.afiche.vacio)
    .replace('{antes}', textos.antes)
    .replace('{genero}', textos.genero ? `${cierre.afiche.genero}: ${textos.genero}. ` : '')
    .replace('{estreno}', textos.estreno)
    .replace('{soloEn}', cierre.afiche.soloEn)
    .replace('{dominio}', dominioDe(marca) || cierre.afiche.dominio);

  return (
    <div className="afiche-final w-full">
      <div className="afiche-campo">
        <p className="mono flex items-baseline gap-4 border-t border-tinta/15 pt-3">
          <span aria-hidden="true">({cierre.rotulo[0]})</span>
          <span>{cierre.rotulo[1]}</span>
        </p>
        <label htmlFor={idCampo} className="mt-10 block font-titulo text-[clamp(2.4rem,9vw,5rem)] leading-[0.95] tracking-[-0.045em]">
          {cierre.pregunta}
        </label>
        <input
          id={idCampo}
          type="text"
          value={texto}
          onChange={(e) => escribir(e.target.value)}
          placeholder={cierre.placeholder}
          maxLength={60}
          autoComplete="organization"
          aria-describedby={idAyuda}
          className="campo-marca mt-8 w-full border-b-2 border-tc-rosa bg-transparent pb-2 font-titulo text-[clamp(1.6rem,6vw,2.6rem)] tracking-[-0.03em] placeholder:text-tinta/30"
        />
        <p id={idAyuda} className="mono mt-3 text-gris">{cierre.ayuda}</p>

        {/* Elegí cómo es tu afiche: uno de tres estilos y uno de los colores de la web */}
        <div className="mt-10 grid gap-6">
          <div role="radiogroup" aria-label={cierre.estiloEtiqueta}>
            <p className="mono text-gris" aria-hidden="true">{cierre.estiloEtiqueta}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {ESTILOS.map((e) => (
                <button key={e} type="button" role="radio" aria-checked={estilo === e} onClick={() => elegir({ estilo: e })} className="chip-afiche">
                  {cierre.estilos[e]}
                </button>
              ))}
            </div>
          </div>
          <div role="radiogroup" aria-label={cierre.colorEtiqueta}>
            <p className="mono text-gris" aria-hidden="true">{cierre.colorEtiqueta}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {(Object.keys(COLORES) as Color[]).map((c) => (
                <button
                  key={c}
                  type="button"
                  role="radio"
                  aria-checked={color === c}
                  aria-label={cierre.colores[c]}
                  onClick={() => elegir({ color: c })}
                  className="muestra-afiche"
                  style={{ background: COLORES[c] }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <canvas
        ref={lienzo}
        width={ANCHO}
        height={ALTO}
        role="img"
        aria-label={descripcion}
        className="afiche-lienzo w-full bg-papel shadow-[0_40px_80px_-40px_rgb(0_0_0/0.45)]"
      />

      <div className="afiche-acciones">
        <div className="flex flex-wrap items-center gap-3">
          <a className="cta" href={marca.trim() ? `${contacto}?marca=${encodeURIComponent(marca.trim())}` : contacto}>
            {cierre.cta}
          </a>
          <button type="button" onClick={descargar} className="boton-afiche">
            ↓ {cierre.descargar}
          </button>
          {puedeCompartir && (
            <button type="button" onClick={compartir} className="boton-afiche">
              ↗ {cierre.compartir}
            </button>
          )}
        </div>
        <p className="mt-6 text-gris">
          {MAIL ? (
            <>
              {cierre.alternativa}{' '}
              <a className="text-tinta underline underline-offset-4" href={`mailto:${MAIL}?subject=${encodeURIComponent(marca ? cierre.mail.asunto.replace('{marca}', marca) : cierre.mail.asuntoSinMarca)}&body=${encodeURIComponent(marca ? cierre.mail.cuerpo.replace('{marca}', marca) : cierre.mail.cuerpoSinMarca)}`}>{MAIL}</a>
            </>
          ) : (
            <a className="text-tinta underline underline-offset-4" href={contacto}>{cierre.formulario}</a>
          )}
        </p>
      </div>
    </div>
  );
}
