/**
 * Los sonidos de la web: tonos cortos y suaves, hechos en el momento (sin archivos que descargar).
 * Cada cosa suena distinto: los botones grandes, los links, las flechas de los carruseles, las opciones para elegir,
 * y lo que se abre o se cierra (menú, idiomas, preguntas). Nada suena al pasar el mouse.
 * Arrancan prendidos; el botón del parlante del menú los apaga y la elección queda guardada en este navegador.
 * El navegador no deja sonar nada hasta que tocás algo, así que el primer toque ya despierta el audio.
 */
const CLAVE = 'roda:sonido';

let contexto: AudioContext | null = null;
let salida: GainNode | null = null;

export const sonidoPrendido = () => {
  try { return localStorage.getItem(CLAVE) !== 'apagado'; } catch { return true; }
};

export const cambiarSonido = (prendido: boolean) => {
  try { localStorage.setItem(CLAVE, prendido ? 'prendido' : 'apagado'); } catch {}
  document.documentElement.dataset.sonido = prendido ? 'prendido' : 'apagado';
};

const audio = () => {
  if (!contexto) {
    const Contexto = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Contexto) return null;
    contexto = new Contexto();
    // Todo pasa por un filtro que corta los agudos: así ningún tono pincha
    const filtro = contexto.createBiquadFilter();
    filtro.type = 'lowpass';
    filtro.frequency.value = 2400;
    salida = contexto.createGain();
    salida.gain.value = 1;
    salida.connect(filtro).connect(contexto.destination);
  }
  if (contexto.state === 'suspended') contexto.resume().catch(() => {});
  return contexto;
};

/** Un tono: arranca en `desde` Hz, llega a `hasta` y se apaga en `dura` segundos */
const tono = (desde: number, hasta: number, dura: number, volumen: number, forma: OscillatorType = 'sine', espera = 0) => {
  const a = audio();
  if (!a || !salida) return;
  const t = a.currentTime + espera;
  const osc = a.createOscillator(), gan = a.createGain();
  osc.type = forma;
  osc.frequency.setValueAtTime(desde, t);
  osc.frequency.exponentialRampToValueAtTime(hasta, t + dura * 0.7);
  gan.gain.setValueAtTime(0.0001, t);
  gan.gain.exponentialRampToValueAtTime(volumen, t + 0.006);
  gan.gain.exponentialRampToValueAtTime(0.0001, t + dura);
  osc.connect(gan).connect(salida);
  osc.start(t);
  osc.stop(t + dura + 0.02);
};

const SONIDOS = {
  /** Botón grande (Hablemos, Enviar…): un toque redondo, con una segunda nota que lo cierra */
  boton: () => { tono(620, 560, 0.09, 0.042); tono(930, 930, 0.12, 0.018, 'sine', 0.045); },
  /** Link: un tic corto y agudo, casi un clic de lápiz */
  link: () => tono(1500, 1250, 0.035, 0.022, 'triangle'),
  /** Flecha de carrusel: un deslizamiento corto hacia arriba */
  paso: () => tono(380, 640, 0.11, 0.03, 'triangle'),
  /** Opción para elegir (chips, plan, idioma): un pop */
  elegir: () => tono(980, 520, 0.07, 0.034),
  /** Prender el sonido: una campanita de tres notas */
  prende: () => { tono(660, 660, 0.12, 0.022, 'sine'); tono(880, 880, 0.12, 0.02, 'sine', 0.07); tono(1320, 1320, 0.18, 0.016, 'sine', 0.14); },
  /** Abrir: dos notas que suben */
  abre: () => { tono(520, 520, 0.11, 0.028, 'triangle'); tono(780, 780, 0.14, 0.024, 'triangle', 0.06); },
  /** Cerrar: las mismas dos notas, bajando */
  cierra: () => { tono(780, 780, 0.11, 0.024, 'triangle'); tono(520, 520, 0.14, 0.028, 'triangle', 0.06); },
};

export const sonar = (cual: keyof typeof SONIDOS) => {
  if (sonidoPrendido()) SONIDOS[cual]();
};

let listo = false;
/** Conecta los sonidos a toda la página (una sola vez) */
export const iniciarSonidos = () => {
  if (listo) return;
  listo = true;
  document.documentElement.dataset.sonido = sonidoPrendido() ? 'prendido' : 'apagado';

  // Al apretar algo: cada tipo con su sonido (lo que abre o cierra suena aparte, cuando cambia)
  const tipo = (el: Element): keyof typeof SONIDOS | null => {
    if (el.hasAttribute('aria-expanded') || el.matches('summary, [data-sonido-propio]')) return null;
    if (el.matches('[data-paso], [data-flecha], .flecha')) return 'paso';
    if (el.matches('.chip, [aria-pressed], [role="radio"], [role="checkbox"], [role="switch"], input[type="radio"], input[type="checkbox"], label:has(input)')) return 'elegir';
    if (el.matches('.cta, button[type="submit"]')) return 'boton';
    if (el.matches('button, [role="button"]')) return 'boton';
    if (el.matches('a[href]')) return 'link';
    return null;
  };
  const objetivo = 'a[href], button, [role="button"], [role="radio"], [role="checkbox"], [role="switch"], summary, input[type="radio"], input[type="checkbox"], label:has(input[type="radio"]), label:has(input[type="checkbox"])';
  document.addEventListener('pointerdown', (e) => {
    const el = (e.target as Element | null)?.closest?.(objetivo);
    const cual = el && tipo(el);
    if (cual) sonar(cual);
  }, { capture: true, passive: true });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const el = (e.target as Element | null)?.closest?.(objetivo);
    const cual = el && tipo(el);
    if (cual) sonar(cual);
  }, { capture: true });

  // Lo que se abre y se cierra: cualquier aria-expanded que cambia (menú, idiomas) y las preguntas (details)
  new MutationObserver((cambios) => {
    for (const c of cambios) {
      const el = c.target as Element;
      const ahora = el.getAttribute('aria-expanded');
      if (ahora === c.oldValue) continue;
      sonar(ahora === 'true' ? 'abre' : 'cierra');
      break;
    }
  }).observe(document.body, { subtree: true, attributes: true, attributeFilter: ['aria-expanded'], attributeOldValue: true });
  document.addEventListener('toggle', (e) => {
    if (e.target instanceof HTMLDetailsElement) sonar(e.target.open ? 'abre' : 'cierra');
  }, { capture: true });
};
