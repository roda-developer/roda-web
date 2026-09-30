import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { F } from './timecode';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger, F };

export const movimientoPermitido = () =>
  typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis: Lenis | null = null;
let iniciado = false;

/** Arranca Lenis + ScrollTrigger una sola vez y marca la página como animable. */
export function iniciarMotion() {
  if (iniciado) return lenis;
  iniciado = true;
  (window as Window & { __rodaMotion?: boolean }).__rodaMotion = true;

  if (movimientoPermitido()) {
    lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis?.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    revelarTodo();
  }
  seguirLuz();
  return lenis;
}

export const scrollA = (destino: string | HTMLElement) => {
  if (lenis) lenis.scrollTo(destino, { duration: 1.6 });
  else (typeof destino === 'string' ? document.querySelector(destino) : destino)?.scrollIntoView();
};

export const pausarScroll = (pausa: boolean) => (pausa ? lenis?.stop() : lenis?.start());

/** Todo [data-revelar] aparece al entrar en cuadro: sube, se enfoca y se ilumina. */
function revelarTodo() {
  gsap.utils.toArray<HTMLElement>('[data-revelar]').forEach((el) => {
    const retraso = Number(el.dataset.revelar || 0) * F;
    gsap.fromTo(
      el,
      { opacity: 0, y: 28, filter: 'blur(10px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 30 * F,
        delay: retraso,
        ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      },
    );
  });
}

/** La luz sigue al cursor en desktop y al scroll en pantallas táctiles. */
function seguirLuz() {
  const raiz = document.documentElement;
  const fino = window.matchMedia('(pointer: fine)').matches;
  if (fino) {
    window.addEventListener(
      'pointermove',
      (e) => {
        raiz.style.setProperty('--luz-x', `${(e.clientX / innerWidth) * 100}%`);
        raiz.style.setProperty('--luz-y', `${(e.clientY / innerHeight) * 100}%`);
      },
      { passive: true },
    );
  } else {
    window.addEventListener(
      'scroll',
      () => {
        const y = 30 + 40 * Math.sin((scrollY / innerHeight) * 0.9);
        raiz.style.setProperty('--luz-y', `${y}%`);
      },
      { passive: true },
    );
  }
}
