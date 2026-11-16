import { useEffect, useRef } from 'react';

const FONT = 'Bricolage Grotesque Variable';

interface Props {
  lines: string[];
}

/**
 * Zeichnet den Namen aus Partikeln. Beim Laden fliegen sie an ihren Platz,
 * danach weichen sie dem Zeiger aus und federn zurück.
 */
function ParticleName({ lines }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let fg = '#f3f1ec';
    let accent = '#4d7cff';

    // Partikel als flache Arrays: Heimat, Position, Geschwindigkeit
    let hx = new Float32Array(0), hy = hx, px = hx, py = hx, vx = hx, vy = hx;
    let heat = new Float32Array(0);
    let count = 0, width = 0, height = 0, dot = 2;
    let raf = 0, running = false, visible = true, alive = true, built = false;
    const pointer = { x: -1e4, y: -1e4, active: false };

    const build = () => {
      // Farben bei jedem Aufbau frisch aus dem Theme lesen
      const styles = getComputedStyle(document.documentElement);
      fg = styles.getPropertyValue('--fg').trim() || fg;
      accent = styles.getPropertyValue('--accent').trim() || accent;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement!.clientWidth;

      // Schriftgröße so wählen, dass die längste Zeile die Breite füllt
      const probe = document.createElement('canvas').getContext('2d')!;
      probe.font = `800 100px "${FONT}"`;
      (probe as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = '-5px';
      const widest = Math.max(...lines.map(l => probe.measureText(l).width));
      const size = Math.floor((width / widest) * 100 * 0.98);
      const lineH = size * 0.86;
      const top = size * 0.14; // Platz für Umlaut-Punkte
      height = Math.ceil(top + lineH * lines.length + size * 0.06);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Text unsichtbar rendern und Pixel abtasten
      const off = document.createElement('canvas');
      off.width = width;
      off.height = height;
      const o = off.getContext('2d', { willReadFrequently: true })!;
      o.fillStyle = '#fff';
      o.textBaseline = 'alphabetic';
      o.font = `800 ${size}px "${FONT}"`;
      (o as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = `${-size * 0.05}px`;
      lines.forEach((l, i) => o.fillText(l, 0, top + lineH * (i + 1) - size * 0.08));

      const data = o.getImageData(0, 0, width, height).data;
      const step = width < 600 ? 3 : width < 1000 ? 4 : 5;
      dot = step * 0.62;

      const xs: number[] = [];
      const ys: number[] = [];
      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          if (data[(y * width + x) * 4 + 3] > 128) {
            xs.push(x);
            ys.push(y);
          }
        }
      }

      count = xs.length;
      hx = Float32Array.from(xs);
      hy = Float32Array.from(ys);
      px = new Float32Array(count);
      py = new Float32Array(count);
      vx = new Float32Array(count);
      vy = new Float32Array(count);
      heat = new Float32Array(count);

      // Nur beim ersten Aufbau einfliegen – bei Größenänderung direkt an Ort und Stelle
      const scatter = !reduce && !built;
      built = true;
      for (let i = 0; i < count; i++) {
        if (!scatter) {
          px[i] = hx[i];
          py[i] = hy[i];
        } else {
          // Start: zufällig verstreut, leicht unterhalb
          const a = Math.random() * Math.PI * 2;
          const r = Math.max(width, height) * (0.4 + Math.random() * 0.8);
          px[i] = width / 2 + Math.cos(a) * r;
          py[i] = height / 2 + Math.sin(a) * r * 0.6;
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = fg;
      ctx.beginPath();
      for (let i = 0; i < count; i++) {
        if (heat[i] < 0.15) ctx.rect(px[i], py[i], dot, dot);
      }
      ctx.fill();

      ctx.fillStyle = accent;
      ctx.beginPath();
      for (let i = 0; i < count; i++) {
        if (heat[i] >= 0.15) ctx.rect(px[i], py[i], dot, dot);
      }
      ctx.fill();
    };

    const R = 110;
    const tick = () => {
      if (!alive) return;
      let moving = false;
      const mx = pointer.x, my = pointer.y;

      for (let i = 0; i < count; i++) {
        let ax = (hx[i] - px[i]) * 0.045;
        let ay = (hy[i] - py[i]) * 0.045;

        if (pointer.active) {
          const dx = px[i] - mx;
          const dy = py[i] - my;
          const d2 = dx * dx + dy * dy;
          if (d2 < R * R) {
            const d = Math.sqrt(d2) || 1;
            const f = (1 - d / R) * 7;
            ax += (dx / d) * f;
            ay += (dy / d) * f;
            heat[i] = 1;
          }
        }

        vx[i] = (vx[i] + ax) * 0.82;
        vy[i] = (vy[i] + ay) * 0.82;
        px[i] += vx[i];
        py[i] += vy[i];
        heat[i] *= 0.96;

        if (!moving && (Math.abs(vx[i]) > 0.02 || Math.abs(vy[i]) > 0.02 || heat[i] > 0.15)) moving = true;
      }

      draw();
      // Ruhezustand: nichts bewegt sich → Schleife anhalten, spart Akku
      if (moving) raf = requestAnimationFrame(tick);
      else running = false;
    };

    const start = () => {
      if (reduce || running || !visible || !alive) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
      pointer.active = pointer.y > -R && pointer.y < r.height + R;
      start();
    };
    const onLeave = () => {
      pointer.active = false;
    };
    const onUp = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') onLeave();
    };
    const onScroll = () => {
      pointer.active = false;
    };

    let lastW = 0;
    let resizeTimer = 0;
    const rebuild = () => {
      const w = canvas.parentElement!.clientWidth;
      if (w === lastW) return;
      lastW = w;
      build();
      draw();
      start();
    };
    const ro = new ResizeObserver(() => {
      if (!built) return rebuild();
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(rebuild, 150);
    });

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });

    document.fonts.load(`800 100px "${FONT}"`).finally(() => {
      if (!alive) return;
      ro.observe(canvas.parentElement!);
      io.observe(canvas);
    });

    if (!reduce) {
      window.addEventListener('pointermove', onMove, { passive: true });
      document.documentElement.addEventListener('pointerleave', onLeave);
      window.addEventListener('pointerup', onUp);
      window.addEventListener('pointercancel', onUp);
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
      window.removeEventListener('scroll', onScroll);
    };
  }, [lines]);

  return <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />;
}

export default ParticleName;
