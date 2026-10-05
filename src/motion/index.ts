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
  // Si el seguro del layout ya había sacado la clase (celu muy lento), la recuperamos para que todo se anime bien
  document.documentElement.classList.add('js');

  if (movimientoPermitido()) {
    lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9, anchors: true });
    lenis.scrollTo(0, { immediate: true });
    if (document.documentElement.classList.contains('bloquear-scroll')) {
      lenis.stop();
      const desbloquearLenis = () => {
        if (!document.documentElement.classList.contains('bloquear-scroll')) {
          lenis?.start();
          ScrollTrigger.refresh();
        } else {
          requestAnimationFrame(desbloquearLenis);
        }
      };
      requestAnimationFrame(desbloquearLenis);
    }
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis?.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    revelarTodo();
    // Las fuentes y las islas cambian alturas: recalcular posiciones cuando todo asentó.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    addEventListener('load', () => ScrollTrigger.refresh());
  }
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
