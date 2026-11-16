import { useEffect, type RefObject } from 'react';
import { person } from '../content';

/** Kleine globale Signale ohne eigenen Context. */
export const PALETTE_EVENT = 'palette:open';
export const TOAST_EVENT = 'toast';

export const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);
export const shortcut = `${isMac ? '⌘' : 'Ctrl'} K`;

export const openPalette = () => window.dispatchEvent(new Event(PALETTE_EVENT));
export const toast = (message: string) =>
  window.dispatchEvent(new CustomEvent<string>(TOAST_EVENT, { detail: message }));

export async function copyEmail(lang: 'de' | 'en') {
  try {
    await navigator.clipboard.writeText(person.email);
    toast(lang === 'de' ? 'E-Mail kopiert ✓' : 'Email copied ✓');
  } catch {
    window.location.href = `mailto:${person.email}`;
  }
}

/** Blendet `.reveal`-Elemente ein, sobald sie sichtbar werden. */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal:not(.is-in)');
    const io = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/** Schreibt den Scroll-Fortschritt (0–1) als `--p` in das Element. */
export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  measure: (rect: DOMRect, vh: number) => number,
) {
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const p = measure(el.getBoundingClientRect(), window.innerHeight);
      el.style.setProperty('--p', String(Math.min(1, Math.max(0, p))));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ref, measure]);
}
