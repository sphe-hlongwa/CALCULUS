/* Chapter cards for the home page.
   Each chapter gets a square, album-cover style SVG whose artwork and palette
   come from the chapter's subject matter. Pure SVG strings, no dependencies. */
(function () {
  'use strict';

  const f = n => +n.toFixed(1);
  const path = (pts) => pts.map((p, i) => `${i ? 'L' : 'M'}${f(p[0])} ${f(p[1])}`).join(' ');
  const sample = (a, b, steps, fn) => {
    const out = [];
    for (let i = 0; i <= steps; i++) {
      const t = a + (b - a) * (i / steps);
      out.push(fn(t));
    }
    return out;
  };
  const SERIF = "Georgia, 'Times New Roman', serif";

  // Shared frame: gradient background, faint grid, vignette.
  function frame(id, c1, c2, gridColor, glow) {
    let grid = '';
    for (let i = 20; i < 200; i += 20) {
      grid += `<path d="M${i} 0V200M0 ${i}H200" />`;
    }
    return `
      <defs>
        <linearGradient id="${id}-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>
        </linearGradient>
        <radialGradient id="${id}-glow" cx="${glow[0]}" cy="${glow[1]}" r=".75">
          <stop offset="0" stop-color="${glow[2]}" stop-opacity=".45"/>
          <stop offset="1" stop-color="${glow[2]}" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="${id}-vig" cx=".5" cy=".5" r=".75">
          <stop offset=".6" stop-color="#000" stop-opacity="0"/>
          <stop offset="1" stop-color="#000" stop-opacity=".45"/>
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill="url(#${id}-bg)"/>
      <rect width="200" height="200" fill="url(#${id}-glow)"/>
      <g stroke="${gridColor}" stroke-width=".5" opacity=".35" fill="none">${grid}</g>`;
  }
  const vignette = id => `<rect width="200" height="200" fill="url(#${id}-vig)"/>`;
  const caption = (txt, color, x = 14, y = 186, size = 15) =>
    `<text x="${x}" y="${y}" font-family="${SERIF}" font-style="italic" font-size="${size}" fill="${color}" opacity=".92">${txt}</text>`;

  // ── Chapter 7: Hyperbolic Functions ─────────────────────────────────────
  function art7() {
    const id = 'cc7';
    const cosh = sample(-2.8, 2.8, 70, t => [100 + t * 28, 138 - 7 * Math.cosh(t)]);
    const sinh = sample(-2.4, 2.4, 70, t => [100 + t * 32, 100 - 5.2 * Math.sinh(t)]);
    const tanh = sample(-3, 3, 70, t => [100 + t * 30, 100 - 30 * Math.tanh(t)]);
    // Hyperbola branch x²−y²=1 as a quiet backdrop
    const hyp = sample(-1.6, 1.6, 60, t => [100 + 26 * Math.cosh(t) + 0, 100 - 26 * Math.sinh(t)]);
    return frame(id, '#0f766e', '#0b1d3a', '#5eead4', [.2, .15, '#2dd4bf']) + `
      <path d="${path(hyp)}" fill="none" stroke="#99f6e4" stroke-width="1" opacity=".25"/>
      <g stroke="#ccfbf1" stroke-width=".8" opacity=".55">
        <path d="M10 100H190M100 10V190"/>
      </g>
      <g stroke="#ccfbf1" stroke-width=".8" stroke-dasharray="3 3" opacity=".5">
        <path d="M10 70H190M10 130H190"/>
      </g>
      <path d="${path(tanh)}" fill="none" stroke="#f1f5f9" stroke-width="1.6" stroke-linecap="round" opacity=".9"/>
      <path d="${path(sinh)}" fill="none" stroke="#fbbf24" stroke-width="2.4" stroke-linecap="round"/>
      <path d="${path(cosh)}" fill="none" stroke="#5eead4" stroke-width="3" stroke-linecap="round"/>
      <circle cx="100" cy="${f(138 - 7)}" r="3.2" fill="#0b1d3a" stroke="#5eead4" stroke-width="1.5"/>
      ${caption('cosh · sinh · tanh', '#ccfbf1')}
      ${vignette(id)}`;
  }

  // ── Chapter 8: Integration Theory and Applications ─────────────────────
  function art8() {
    const id = 'cc8';
    const fx = x => 128 - 46 * Math.sin((x - 20) / 180 * Math.PI * 1.25) - 8 * ((x - 20) / 160);
    const n = 10, x0 = 26, x1 = 178, w = (x1 - x0) / n;
    let bars = '';
    for (let i = 0; i < n; i++) {
      const xs = x0 + i * w;
      const y = fx(xs + w / 2);
      bars += `<rect x="${f(xs)}" y="${f(y)}" width="${f(w)}" height="${f(150 - y)}" />`;
    }
    const curve = sample(x0 - 6, x1 + 6, 80, x => [x, fx(x)]);
    // Disks of a solid of revolution, drawn faintly above the curve
    let disks = '';
    for (let i = 0; i < 5; i++) {
      const cx = 52 + i * 26;
      const r = (150 - fx(cx)) * .22;
      disks += `<ellipse cx="${cx}" cy="${f(46)}" rx="${f(r * .32)}" ry="${f(r)}" />`;
    }
    return frame(id, '#7c4a12', '#1f1409', '#fcd34d', [.8, .1, '#f59e0b']) + `
      <g fill="#f59e0b" fill-opacity=".38" stroke="#fbbf24" stroke-opacity=".8" stroke-width=".8">${bars}</g>
      <g fill="none" stroke="#fde68a" stroke-opacity=".35" stroke-width=".8">${disks}</g>
      <path d="${path(curve)}" fill="none" stroke="#fef3c7" stroke-width="2.6" stroke-linecap="round"/>
      <g stroke="#fef3c7" stroke-width="1" opacity=".7"><path d="M16 150H188M26 158V40"/></g>
      <g fill="#fef3c7" opacity=".85"><path d="M188 150l-5-3v6zM26 38l-3 5h6z"/></g>
      <text x="26" y="166" font-family="${SERIF}" font-style="italic" font-size="10" fill="#fde68a" opacity=".85">a</text>
      <text x="176" y="166" font-family="${SERIF}" font-style="italic" font-size="10" fill="#fde68a" opacity=".85">b</text>
      ${caption('∫ f(x) dx', '#fef3c7', 14, 190)}
      ${vignette(id)}`;
  }

  // ── Chapter 9: Advanced Integration Techniques ─────────────────────────
  function art9() {
    const id = 'cc9';
    const wave = sample(10, 190, 90, x => [x, 168 + 9 * Math.sin((x - 10) / 180 * Math.PI * 4)]);
    return frame(id, '#1e3a8a', '#0a1230', '#93a8ff', [.85, .2, '#3b5bdb']) + `
      <text x="-6" y="168" font-family="${SERIF}" font-size="190" fill="#c7d2fe" opacity=".13">∫</text>
      <path d="M62 138L150 138L150 56Z" fill="#6d83e8" fill-opacity=".22" stroke="#c7d2fe" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M150 126h-12v12" fill="none" stroke="#c7d2fe" stroke-width="1.4"/>
      <path d="M82 138A20 20 0 0 0 78.8 126.4" fill="none" stroke="#fde68a" stroke-width="2"/>
      <text x="88" y="133" font-family="${SERIF}" font-style="italic" font-size="14" fill="#fef3c7">θ</text>
      <text x="96" y="152" font-family="${SERIF}" font-style="italic" font-size="11" fill="#c7d2fe" opacity=".9">a cos θ</text>
      <text x="153" y="100" font-family="${SERIF}" font-style="italic" font-size="11" fill="#c7d2fe" opacity=".9">x</text>
      <text x="94" y="90" font-family="${SERIF}" font-style="italic" font-size="12" fill="#c7d2fe" opacity=".9" transform="rotate(-43 94 90)">a</text>
      <path d="${path(wave)}" fill="none" stroke="#fde68a" stroke-width="1.8" stroke-linecap="round" opacity=".75"/>
      ${caption('u · dv · θ', '#fef3c7', 14, 30, 14)}
      ${vignette(id)}`;
  }

  // ── Chapter 10: Improper Integrals ─────────────────────────────────────
  function art10() {
    const id = 'cc10';
    const X = x => 40 + (x - 1) * 24;
    const Y = x => 146 - 98 / (x * x);
    const curve = sample(1, 7.4, 90, x => [X(x), Y(x)]);
    const area = `${path(curve)} L${f(X(7.4))} 146 L${f(X(1))} 146 Z`.replace(/^M/, 'M');
    return frame(id, '#9f1239', '#1a0509', '#fda4af', [.15, .85, '#f43f5e']) + `
      <defs>
        <linearGradient id="${id}-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#fb7185" stop-opacity=".6"/>
          <stop offset="1" stop-color="#fb7185" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="${id}-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#fff1f2"/><stop offset="1" stop-color="#fff1f2" stop-opacity=".25"/>
        </linearGradient>
      </defs>
      <path d="${area}" fill="url(#${id}-fade)"/>
      <path d="M${X(1)} 146V40" stroke="#fecdd3" stroke-width="1.2" stroke-dasharray="3 3" opacity=".7"/>
      <path d="M14 146H182" stroke="url(#${id}-line)" stroke-width="1.4"/>
      <path d="M176 142l8 4-8 4" fill="none" stroke="#fecdd3" stroke-width="1.4" opacity=".6"/>
      <path d="${path(curve)}" fill="none" stroke="url(#${id}-line)" stroke-width="3" stroke-linecap="round"/>
      <circle cx="${X(1)}" cy="${f(Y(1))}" r="3.4" fill="#1a0509" stroke="#fff1f2" stroke-width="1.6"/>
      <text x="132" y="62" font-family="${SERIF}" font-size="52" fill="#ffe4e6" opacity=".9">∞</text>
      <path d="M144 76V120" stroke="#fecdd3" stroke-width="1" stroke-dasharray="2 4" opacity=".0"/>
      ${caption('1 / x²  →  0', '#ffe4e6')}
      ${vignette(id)}`;
  }

  // ── Chapter 11: Infinite Sequences and Series ──────────────────────────
  function art11() {
    const id = 'cc11';
    const L = 82;
    const pts = [];
    for (let n = 1; n <= 14; n++) {
      const x = 16 + (n - 1) * 12.8;
      const y = L - 66 * Math.pow(-0.72, n - 1);
      pts.push([x, y]);
    }
    const dots = pts.map(([x, y], i) =>
      `<circle cx="${f(x)}" cy="${f(y)}" r="${(4.2 - i * .12).toFixed(1)}" />`).join('');
    const stems = pts.map(([x, y]) => `M${f(x)} ${f(y)}V${L}`).join('');
    return frame(id, '#047857', '#03140f', '#6ee7b7', [.85, .1, '#34d399']) + `
      <path d="M10 ${L}H190" stroke="#a7f3d0" stroke-width="1.2" stroke-dasharray="4 3" opacity=".8"/>
      <path d="${stems}" stroke="#6ee7b7" stroke-width=".8" opacity=".4"/>
      <path d="${path(pts)}" fill="none" stroke="#a7f3d0" stroke-width="1" opacity=".5"/>
      <g fill="#ecfdf5">${dots}</g>
      <text x="177" y="${L - 6}" font-family="${SERIF}" font-style="italic" font-size="12" fill="#a7f3d0">L</text>
      <path d="${path(pts.map(([x], i) => [x, L - 66 * Math.pow(.72, i)]))}" fill="none" stroke="#6ee7b7" stroke-width="1" stroke-dasharray="2 3" opacity=".45"/>
      <path d="${path(pts.map(([x], i) => [x, L + 66 * Math.pow(.72, i)]))}" fill="none" stroke="#6ee7b7" stroke-width="1" stroke-dasharray="2 3" opacity=".45"/>
      <text x="118" y="186" font-family="${SERIF}" font-size="84" fill="#d1fae5" opacity=".14">Σ</text>
      ${caption('aₙ → L', '#d1fae5', 14, 190)}
      ${vignette(id)}`;
  }

  // ── Chapter 12: Differential Equations ─────────────────────────────────
  function art12() {
    const id = 'cc12';
    const P = (u, v) => [100 + u * 40, 100 - v * 40];
    let seg = '';
    for (let i = -4; i <= 4; i++) {
      for (let j = -4; j <= 4; j++) {
        const u = i * .5, v = j * .5;
        const s = u - v;                      // y' = x − y
        const a = Math.atan(s);
        const dx = Math.cos(a) * 8, dy = Math.sin(a) * 8;
        const [cx, cy] = P(u, v);
        seg += `M${f(cx - dx)} ${f(cy + dy)}L${f(cx + dx)} ${f(cy - dy)}`;
      }
    }
    const C = 4 * Math.exp(-2);
    const sol = sample(-2.2, 2.2, 80, u => P(u, u - 1 + C * Math.exp(-u)));
    const [sx, sy] = P(-2, 1);
    return frame(id, '#075985', '#06182b', '#7dd3fc', [.15, .1, '#38bdf8']) + `
      <path d="${seg}" stroke="#bae6fd" stroke-width="1.4" stroke-linecap="round" opacity=".5"/>
      <path d="${path(sol)}" fill="none" stroke="#fde047" stroke-width="3" stroke-linecap="round"/>
      <circle cx="${f(sx)}" cy="${f(sy)}" r="3.6" fill="#06182b" stroke="#fde047" stroke-width="1.6"/>
      <text x="14" y="36" font-family="${SERIF}" font-style="italic" font-size="17" fill="#e0f2fe">dy/dx = x − y</text>
      ${vignette(id)}`;
  }

  const ART = {
    'chapter-7': { draw: art7, accent: '#5eead4' },
    'chapter-8': { draw: art8, accent: '#fbbf24' },
    'chapter-9': { draw: art9, accent: '#93a8ff' },
    'chapter-10': { draw: art10, accent: '#fb7185' },
    'chapter-11': { draw: art11, accent: '#6ee7b7' },
    'chapter-12': { draw: art12, accent: '#7dd3fc' }
  };

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function render(chapters) {
    return chapters.map(ch => {
      const art = ART[ch.id];
      const topLevel = ch.sections.filter(s => /^ch\d+-sec\d+$/.test(s.id)).length;
      const svg = art
        ? `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">${art.draw()}</svg>`
        : '';
      return `
        <button type="button" class="chapter-card" data-chapter-id="${esc(ch.id)}"
          style="--cc-accent:${art ? art.accent : 'var(--accent)'}">
          <span class="chapter-card__art">${svg}</span>
          <span class="chapter-card__title">${esc(ch.shortTitle)}</span>
          <span class="chapter-card__meta">Chapter ${ch.number} · ${topLevel} section${topLevel === 1 ? '' : 's'}</span>
        </button>`;
    }).join('');
  }

  function init(root, onSelect) {
    if (!root) return;
    root.addEventListener('click', event => {
      const card = event.target.closest('.chapter-card');
      if (card && root.contains(card)) onSelect(card.dataset.chapterId);
    });
  }

  window.ChapterCards = { render, init };
}());
