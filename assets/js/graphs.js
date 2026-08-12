/**
 * graphs.js — Interactive Plotly visualizations for all key Calculus concepts
 */
const Graphs = (() => {

  const DARK  = window.matchMedia('(prefers-color-scheme: dark)');
  function getTheme() {
    const isDark = document.body.classList.contains('dark');
    return {
      bg: isDark ? '#1e293b' : '#ffffff',
      paper: isDark ? '#1e293b' : '#ffffff',
      grid: isDark ? '#334155' : '#e2e8f0',
      text: isDark ? '#94a3b8' : '#475569',
      line: isDark ? '#94a3b8' : '#334155',
    };
  }

  const isMobile = () => window.innerWidth <= 640;

  /** Convert a LaTeX expression to a human-readable plain-text string for
   *  use inside Plotly trace names (which don't support KaTeX rendering). */
  function latexToPlain(tex) {
    return tex
      .replace(/\\tfrac\{([^}]+)\}\{([^}]+)\}/g, '$1/$2')
      .replace(/\\dfrac\{([^}]+)\}\{([^}]+)\}/g, '$1/$2')
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g,  '$1/$2')
      .replace(/\\approx/g, '≈')
      .replace(/\\pi/g,    'π')
      .replace(/\\infty/g, '∞')
      .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
      .replace(/\\/g, '')    // strip any remaining backslashes
      .replace(/[{}]/g, ''); // strip braces
  }

  const layout = (extra = {}) => {
    const t = getTheme();
    const mobile = isMobile();
    return {
      paper_bgcolor: t.paper, plot_bgcolor: t.bg,
      font: { family: 'Inter, sans-serif', color: t.text, size: mobile ? 10 : 12 },
      margin: mobile ? { t: 20, b: 10, l: 38, r: 10 } : { t: 20, b: 40, l: 50, r: 20 },
      xaxis: { gridcolor: t.grid, zerolinecolor: t.line, tickfont: { size: mobile ? 9 : 11 } },
      yaxis: { gridcolor: t.grid, zerolinecolor: t.line, tickfont: { size: mobile ? 9 : 11 } },
      showlegend: true,
      legend: mobile
        ? { orientation: 'h', x: 0.5, xanchor: 'center', y: -0.28, yanchor: 'top',
            font: { size: 9 }, bgcolor: 'rgba(0,0,0,0)' }
        : { font: { size: 11 }, bgcolor: 'rgba(0,0,0,0)' },
      ...extra,
    };
  };

  const config = { responsive: true, displayModeBar: false };

  // Keep every rendered chart correctly sized through sidebar-drawer
  // animations, orientation changes, and window resizes (Plotly's own
  // responsive:true doesn't always catch size changes driven by CSS
  // transitions rather than a raw window resize event).
  const _liveCharts = new Set();
  function _trackAndResize(el) {
    if (!el) return;
    _liveCharts.add(el);
  }
  let _resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(_resizeTimer);
    _resizeTimer = setTimeout(() => {
      _liveCharts.forEach(el => {
        if (document.body.contains(el) && typeof Plotly !== 'undefined') {
          try { Plotly.Plots.resize(el); } catch (e) { /* element not a plot yet */ }
        } else {
          _liveCharts.delete(el);
        }
      });
    }, 120);
  });

  // ── 1. Riemann Sum ─────────────────────────────────────────────────────
  function riemannSum(containerId) {
    const el      = document.getElementById(containerId);
    if (!el) return;
    _trackAndResize(el);

    const nInput  = document.getElementById(containerId + '-n');
    const typeEl  = document.getElementById(containerId + '-type');
    const funcEl  = document.getElementById(containerId + '-func');
    const valEl   = document.getElementById(containerId + '-val');
    const descEl  = document.getElementById(containerId + '-desc');

    // ── Function library (three functions from the study guide) ──────────
    const FUNCS = {
      x2: {
        f: x => x * x,
        a: 0, b: 2,
        label: 'f(x) = x²',
        latex: '$f(x) = x^2$',
        interval: '[0, 2]',
        exactArea: 8 / 3,
        exactLatex: '\\tfrac{8}{3} \\approx 2.667',
        // min is at left of each subinterval, max at right (increasing)
        desc: (method, exactArea) =>
          `<strong>Strictly increasing</strong> on $[0,2]$. ` +
          `For any subinterval: left endpoint gives the <em>minimum</em> height and right endpoint gives the <em>maximum</em> height, so ` +
          `<strong>Left&nbsp;=&nbsp;Lower sum</strong> and <strong>Right&nbsp;=&nbsp;Upper sum</strong>. ` +
          `Exact area $= \\int_0^2 x^2\\,dx = \\tfrac{8}{3} \\approx 2.667$.`,
      },
      sin: {
        f: x => Math.sin(x),
        a: 0, b: Math.PI,
        label: 'f(x) = sin(x)',
        latex: '$f(x) = \\sin(x)$',
        interval: '[0, π]',
        exactArea: 2,
        exactLatex: '2',
        // non-monotonic: maximum at π/2, so Lower ≠ Left and Upper ≠ Right in general
        desc: (method, exactArea) =>
          `<strong>Non-monotonic</strong> on $[0,\\pi]$ — increases then decreases, peaking at $x = \\tfrac{\\pi}{2}$. ` +
          `Lower and Upper sums <em>differ</em> from Left and Right sums because the extrema are interior to subintervals. ` +
          `Exact area $= \\int_0^{\\pi} \\sin(x)\\,dx = 2$.`,
      },
      dec: {
        f: x => 16 - x * x,
        a: 0, b: 3,
        label: 'f(x) = 16 − x²',
        latex: '$f(x) = 16 - x^2$',
        interval: '[0, 3]',
        exactArea: 16 * 3 - 27 / 3,  // 48 - 9 = 39
        exactLatex: '39',
        // strictly decreasing on [0,3]: right endpoint is minimum, left is maximum
        desc: (method, exactArea) =>
          `<strong>Strictly decreasing</strong> on $[0,3]$. ` +
          `For any subinterval: right endpoint gives the <em>minimum</em> height and left endpoint gives the <em>maximum</em> height, so ` +
          `<strong>Left&nbsp;=&nbsp;Upper sum</strong> and <strong>Right&nbsp;=&nbsp;Lower sum</strong>. ` +
          `Exact area $= \\int_0^3 (16-x^2)\\,dx = 39$.`,
      },
    };

    // ── Numerical min/max over a subinterval (for upper/lower sums) ──────
    function subIntervalExtrema(f, x0, x1, steps = 200) {
      let minV = Infinity, maxV = -Infinity;
      for (let k = 0; k <= steps; k++) {
        const v = f(x0 + (x1 - x0) * k / steps);
        if (v < minV) minV = v;
        if (v > maxV) maxV = v;
      }
      return { minV, maxV };
    }

    // ── Colour scheme for rectangle fill ─────────────────────────────────
    const RECT_COLORS = {
      lower: 'rgba(16,185,129,',   // green
      upper: 'rgba(239,68,68,',    // red
      left:  'rgba(59,130,246,',   // blue
      right: 'rgba(139,92,246,',   // purple
      mid:   'rgba(245,158,11,',   // amber
    };
    const RECT_BORDER = {
      lower: '#10b981', upper: '#ef4444',
      left: '#3b82f6', right: '#8b5cf6', mid: '#f59e0b',
    };

    function methodLabel(type) {
      return { left: 'Left endpoint', right: 'Right endpoint', mid: 'Midpoint',
               lower: 'Lower sum', upper: 'Upper sum' }[type] || type;
    }

    function draw() {
      const n      = parseInt(nInput?.value || 4);
      const type   = typeEl?.value  || 'left';
      const funcKey = funcEl?.value || 'x2';
      if (valEl) valEl.textContent = n;

      const cfg  = FUNCS[funcKey];
      const { f, a, b } = cfg;
      const dx   = (b - a) / n;

      // Build smooth curve points
      const xs = [], ys = [];
      const steps = Math.max(300, n * 20);
      for (let k = 0; k <= steps; k++) {
        const x = a + (b - a) * k / steps;
        xs.push(x); ys.push(f(x));
      }

      const rects = [];
      let area = 0;

      for (let i = 0; i < n; i++) {
        const x0 = a + i * dx;
        const x1 = x0 + dx;
        let h;
        if (type === 'left')        { h = f(x0); }
        else if (type === 'right')  { h = f(x1); }
        else if (type === 'mid')    { h = f((x0 + x1) / 2); }
        else if (type === 'lower')  { h = subIntervalExtrema(f, x0, x1).minV; }
        else /* upper */            { h = subIntervalExtrema(f, x0, x1).maxV; }
        // Clamp negative heights to 0 (only relevant for non-negative functions shown)
        h = Math.max(0, h);
        area += h * dx;
        rects.push({ x0, x1, h });
      }

      const baseColor = RECT_COLORS[type] || 'rgba(59,130,246,';
      const borderColor = RECT_BORDER[type] || '#3b82f6';

      const barTraces = rects.map((r, i) => ({
        x: [r.x0, r.x0, r.x1, r.x1, r.x0],
        y: [0,    r.h,  r.h,  0,    0   ],
        fill: 'toself', mode: 'lines',
        fillcolor: `${baseColor}${0.22 + 0.04 * (i % 4)})`,
        line: { color: borderColor, width: 1.5 },
        showlegend: false, hoverinfo: 'none',
      }));

      // Sample points markers (for left/right/mid only)
      const markerTrace = [];
      if (['left','right','mid'].includes(type)) {
        const mxs = [], mys = [];
        rects.forEach(r => {
          const mx = type === 'left' ? r.x0 : type === 'right' ? r.x1 : (r.x0 + r.x1) / 2;
          mxs.push(mx); mys.push(r.h);
        });
        markerTrace.push({
          x: mxs, y: mys, mode: 'markers',
          marker: { color: borderColor, size: 7, symbol: 'circle' },
          showlegend: false, hoverinfo: 'none',
        });
      }

      const mobile = isMobile();
      Plotly.react(el, [
        ...barTraces,
        ...markerTrace,
        { x: xs, y: ys, mode: 'lines', name: cfg.label,
          line: { color: '#ef4444', width: 2.5 } },
        { x: [null], y: [null], mode: 'markers',
          marker: { color: borderColor, size: 10, symbol: 'square' },
          name: mobile ? `Approx ≈ ${area.toFixed(3)}` : `${methodLabel(type)}: Area ≈ ${area.toFixed(4)} (n=${n})` },
        { x: [null], y: [null], mode: 'markers',
          marker: { color: '#ef4444', size: 10, symbol: 'line-ew' },
          name: mobile ? `Exact ≈ ${cfg.exactArea.toFixed(3)}` : `Exact area = ${latexToPlain(cfg.exactLatex)}` },
      ], {
        ...layout(),
        title: { text: `${cfg.label} — ${methodLabel(type)} (n = ${n})`,
                 font: { size: 13, color: getTheme().text } },
        height: 320,
      }, config);

      // Update the description paragraph with dynamic explanation
      if (descEl) {
        descEl.innerHTML = cfg.desc(type, cfg.exactArea);
        if (window.renderMathInElement) {
          renderMathInElement(descEl, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false },
            ],
            throwOnError: false,
          });
        }
      }
    }

    draw();
    nInput?.addEventListener('input', draw);
    typeEl?.addEventListener('change', draw);
    funcEl?.addEventListener('change', draw);
  }

  // ── 2. Area Between Curves ────────────────────────────────────────────
  function areaBetweenCurves(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    _trackAndResize(el);
    const pairEl = document.getElementById(containerId + '-pair');
    const descEl = document.getElementById(containerId + '-desc');

    // ── Curve-pair library ────────────────────────────────────────────
    const PAIRS = {
      lineParabola: {
        top: x => x, topLabel: 'f(x) = x',
        bottom: x => x * x, bottomLabel: 'g(x) = x²',
        a: 0, b: 1, pad: 0.2,
        exactArea: 1 / 6, exactLatex: '\\tfrac{1}{6}',
        desc: 'On $[0,1]$, $f(x)=x$ stays above $g(x)=x^2$, so the shaded region is ' +
              '$\\int_0^1 (x - x^2)\\,dx = \\tfrac{1}{6}$.',
      },
      twoParabolas: {
        top: x => 2 - x * x, topLabel: 'f(x) = 2 − x²',
        bottom: x => x * x, bottomLabel: 'g(x) = x²',
        a: -1, b: 1, pad: 0.3,
        exactArea: 8 / 3, exactLatex: '\\tfrac{8}{3}',
        desc: 'The parabolas cross at $x=\\pm 1$; between the crossings, $f(x)=2-x^2$ is on top: ' +
              '$\\int_{-1}^{1}\\big[(2-x^2)-x^2\\big]\\,dx = \\tfrac{8}{3}$.',
      },
      sinCos: {
        top: x => Math.cos(x), topLabel: 'f(x) = cos x',
        bottom: x => Math.sin(x), bottomLabel: 'g(x) = sin x',
        a: -Math.PI / 4, b: Math.PI / 4, pad: 0.3,
        exactArea: Math.SQRT2, exactLatex: '\\sqrt{2}',
        desc: 'On $[-\\pi/4,\\pi/4]$, $\\cos x \\geq \\sin x$: ' +
              '$\\int_{-\\pi/4}^{\\pi/4}(\\cos x - \\sin x)\\,dx = \\sqrt{2}$.',
      },
      cubicLine: {
        top: x => x + 2, topLabel: 'f(x) = x + 2',
        bottom: x => x * x * x, bottomLabel: 'g(x) = x³',
        a: -1, b: 2, pad: 0.4,
        exactArea: 9 / 4, exactLatex: '\\tfrac{9}{4}',
        desc: 'On $[-1,2]$, the line stays above the cubic: ' +
              '$\\int_{-1}^{2}\\big[(x+2)-x^3\\big]\\,dx = \\tfrac{9}{4}$.',
      },
      expVsLine: {
        top: x => Math.exp(x), topLabel: 'f(x) = eˣ',
        bottom: x => x + 1, bottomLabel: 'g(x) = x + 1',
        a: -1, b: 2, pad: 0.3,
        exactArea: Math.exp(2) - Math.exp(-1) - 1.5, exactLatex: 'e^2 - e^{-1} - \\tfrac{3}{2}',
        desc: 'On $[-1,2]$, $e^x \\geq x+1$ (tangent at $x=0$): ' +
              '$\\int_{-1}^{2}(e^x - (x+1))\\,dx = e^2 - e^{-1} - \\tfrac{3}{2}$.',
      },
      sinSq: {
        top: x => Math.sin(x), topLabel: 'f(x) = sin x',
        bottom: x => (x / Math.PI) * (x / Math.PI - 1), bottomLabel: 'g(x) = (x/π)(x/π−1)',
        a: 0, b: Math.PI, pad: 0.3,
        exactArea: 2 + Math.PI * Math.PI / 6, exactLatex: '2 + \\tfrac{\\pi^2}{6}',
        desc: 'On $[0,\\pi]$, $\\sin x$ dominates a downward parabola scaled to the interval: ' +
              '$\\int_0^{\\pi}\\!\\left[\\sin x - \\tfrac{x}{\\pi}\\!\\left(\\tfrac{x}{\\pi}-1\\right)\\right]dx \\approx ' +
              (2 + Math.PI * Math.PI / 6).toFixed(4) + '$.',
      },
    };

    function draw() {
      const key = pairEl?.value || 'lineParabola';
      const cfg = PAIRS[key];
      const { top, bottom, a, b, pad } = cfg;

      const xs = [];
      for (let x = a - pad; x <= b + pad; x += (b - a + 2 * pad) / 240) xs.push(x);
      const ysTop = xs.map(top), ysBottom = xs.map(bottom);
      const xFill = xs.filter(x => x >= a && x <= b);
      const yTopF = xFill.map(top), yBotF = xFill.map(bottom);

      Plotly.react(el, [
        { x: [...xFill, ...xFill.slice().reverse()], y: [...yTopF, ...yBotF.slice().reverse()],
          fill: 'toself', fillcolor: 'rgba(16,185,129,0.2)', mode: 'none', name: 'Area between curves', hoverinfo: 'none' },
        { x: xs, y: ysTop, mode: 'lines', name: cfg.topLabel, line: { color: '#3b82f6', width: 2.5 } },
        { x: xs, y: ysBottom, mode: 'lines', name: cfg.bottomLabel, line: { color: '#8b5cf6', width: 2.5 } },
      ], { ...layout(), height: 300,
        title: { text: `Area = ${latexToPlain(cfg.exactLatex)} ≈ ${cfg.exactArea.toFixed(4)}`,
                 font: { size: 12, color: getTheme().text } } }, config);

      if (descEl) {
        descEl.innerHTML = cfg.desc;
        if (window.renderMathInElement) {
          renderMathInElement(descEl, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false },
            ],
            throwOnError: false,
          });
        }
      }
    }

    draw();
    pairEl?.addEventListener('change', draw);
  }

  // ── 3. Volume of Revolution (Disk) ────────────────────────────────────
  function diskMethod(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    _trackAndResize(el);
    if (typeof Plotly === 'undefined') return;
    const funcEl = document.getElementById(containerId + '-func');

    // ── Function library, exact volumes computed analytically ──────────
    const DISK_FUNCS = {
      sqrtx: { f: x => Math.sqrt(x), a: 0, b: 4,
        label: 'y = √x, 0 ≤ x ≤ 4', volume: 8 * Math.PI, volumeLatex: '8\\pi' },
      cone: { f: x => x, a: 0, b: 2,
        label: 'y = x, 0 ≤ x ≤ 2 (cone)', volume: (8 / 3) * Math.PI, volumeLatex: '\\tfrac{8}{3}\\pi' },
      bell: { f: x => Math.sin(x), a: 0, b: Math.PI,
        label: 'y = sin(x), 0 ≤ x ≤ π', volume: (Math.PI * Math.PI) / 2, volumeLatex: '\\tfrac{\\pi^2}{2}' },
      paraboloid: { f: x => x * x, a: 0, b: 1,
        label: 'y = x², 0 ≤ x ≤ 1', volume: Math.PI / 5, volumeLatex: '\\tfrac{\\pi}{5}' },
    };

    function draw() {
      const key = funcEl?.value || 'sqrtx';
      const cfg = DISK_FUNCS[key];
      const { f, a, b } = cfg;

      const xs3 = [], ys3 = [], zs3 = [];
      const N = 30;
      for (let i = 0; i <= N; i++) {
        const x = a + (i / N) * (b - a);
        const r = Math.max(0, f(x));
        const ys_row = [], zs_row = [];
        for (let j = 0; j <= N; j++) {
          const theta = (j / N) * 2 * Math.PI;
          ys_row.push(r * Math.cos(theta));
          zs_row.push(r * Math.sin(theta));
        }
        xs3.push(Array(N + 1).fill(x));
        ys3.push(ys_row);
        zs3.push(zs_row);
      }

      Plotly.react(el, [{
        type: 'surface', x: xs3, y: ys3, z: zs3,
        colorscale: [[0, '#3b82f6'], [0.5, '#8b5cf6'], [1, '#ec4899']],
        opacity: 0.85, showscale: false, name: cfg.label,
      }], {
        ...layout(),
        height: 340,
        scene: {
          xaxis: { title: 'x', gridcolor: getTheme().grid },
          yaxis: { title: 'y', gridcolor: getTheme().grid },
          zaxis: { title: 'z', gridcolor: getTheme().grid },
          camera: { eye: { x: 1.6, y: 1.4, z: 0.9 } },
          bgcolor: getTheme().bg,
        },
        title: { text: `Disk Method: ${cfg.label}, rotated about x-axis — V = ${cfg.volume.toFixed(4)}`,
                 font: { size: 12, color: getTheme().text } },
        margin: { t: 40, b: 10, l: 10, r: 10 },
      }, config);
    }

    draw();
    funcEl?.addEventListener('change', draw);
  }

  // ── 3b. Volume of Revolution (Washer Method) ───────────────────────────
  function washerMethod(containerId) {
    const el = document.getElementById(containerId);
    if (!el || typeof Plotly === 'undefined') return;
    _trackAndResize(el);
    const pairEl = document.getElementById(containerId + '-pair');

    // ── Outer/inner radius pairs, exact volumes computed analytically ──
    const WASHER_PAIRS = {
      xVsX2: { R: x => x, r: x => x * x, a: 0, b: 1,
        outerLabel: 'R(x) = x', innerLabel: 'r(x) = x²',
        volume: (2 / 15) * Math.PI, volumeLatex: '\\tfrac{2}{15}\\pi' },
      sqrtVsX2: { R: x => Math.sqrt(x), r: x => x * x, a: 0, b: 1,
        outerLabel: 'R(x) = √x', innerLabel: 'r(x) = x²',
        volume: (3 / 10) * Math.PI, volumeLatex: '\\tfrac{3}{10}\\pi' },
      flatVsX2: { R: () => 1, r: x => x * x, a: -1, b: 1,
        outerLabel: 'R(x) = 1', innerLabel: 'r(x) = x²',
        volume: (8 / 5) * Math.PI, volumeLatex: '\\tfrac{8}{5}\\pi' },
    };

    function draw() {
      const key = pairEl?.value || 'xVsX2';
      const cfg = WASHER_PAIRS[key];
      const { R, r, a, b } = cfg;

      const xsOuter = [], ysOuter = [], zsOuter = [];
      const xsInner = [], ysInner = [], zsInner = [];
      const N = 25;

      for (let i = 0; i <= N; i++) {
        const x = a + (i / N) * (b - a);
        const Ro = Math.max(0, R(x));
        const ri = Math.max(0, r(x));
        const yRowO = [], zRowO = [], yRowI = [], zRowI = [];

        for (let j = 0; j <= N; j++) {
          const theta = (j / N) * 2 * Math.PI;
          yRowO.push(Ro * Math.cos(theta));
          zRowO.push(Ro * Math.sin(theta));
          yRowI.push(ri * Math.cos(theta));
          zRowI.push(ri * Math.sin(theta));
        }
        xsOuter.push(Array(N + 1).fill(x));
        ysOuter.push(yRowO);
        zsOuter.push(zRowO);

        xsInner.push(Array(N + 1).fill(x));
        ysInner.push(yRowI);
        zsInner.push(zRowI);
      }

      Plotly.react(el, [
        {
          type: 'surface', x: xsOuter, y: ysOuter, z: zsOuter,
          colorscale: [[0, '#3b82f6'], [1, '#60a5fa']],
          opacity: 0.75, showscale: false, name: `Outer: ${cfg.outerLabel}`
        },
        {
          type: 'surface', x: xsInner, y: ysInner, z: zsInner,
          colorscale: [[0, '#ef4444'], [1, '#f87171']],
          opacity: 0.9, showscale: false, name: `Inner: ${cfg.innerLabel}`
        }
      ], {
        ...layout(),
        height: 340,
        scene: {
          xaxis: { title: 'x', gridcolor: getTheme().grid },
          yaxis: { title: 'y', gridcolor: getTheme().grid },
          zaxis: { title: 'z', gridcolor: getTheme().grid },
          camera: { eye: { x: 1.6, y: 1.4, z: 0.9 } },
          bgcolor: getTheme().bg,
        },
        title: { text: `Washer Method: ${cfg.outerLabel}, ${cfg.innerLabel} on [${a},${b}] — V = ${cfg.volume.toFixed(4)}`,
                 font: { size: 12, color: getTheme().text } },
        margin: { t: 40, b: 10, l: 10, r: 10 },
      }, config);
    }

    draw();
    pairEl?.addEventListener('change', draw);
  }

  // ── 3c. Volumes by Slicing (Interactive Cross-Sections) ─────────────────
  function slicingMethod(containerId) {
    const el = document.getElementById(containerId);
    if (!el || typeof Plotly === 'undefined') return;
    _trackAndResize(el);
    const typeEl = document.getElementById(containerId + '-type');

    // Solid base: circle x² + y² ≤ 4 (radius 2), cross-sections perpendicular to x-axis.
    const SLICE_TYPES = {
      square: {
        label: 'Square',
        // side = 2*yMax → A(x) = (2yMax)² = 4(4-x²)
        volume: 128 / 3,
        volLatex: '\\tfrac{128}{3}',
        trace: (x, yMax) => ({
          x: [x, x, x, x, x],
          y: [-yMax, yMax, yMax, -yMax, -yMax],
          z: [0,    0,    2*yMax, 2*yMax, 0],
          line: { color: '#10b981', width: 3 },
        }),
      },
      semicircle: {
        label: 'Semicircle',
        // diameter = 2*yMax → A(x) = π*(yMax)²/2
        volume: (2 / 3) * Math.PI * 8,
        volLatex: '\\tfrac{16\\pi}{3}',
        trace: (x, yMax) => {
          const pts = 16;
          const yPts = [], zPts = [];
          for (let k = 0; k <= pts; k++) {
            const angle = (k / pts) * Math.PI;
            yPts.push(yMax * Math.cos(angle));
            zPts.push(yMax * Math.sin(angle));
          }
          yPts.push(yPts[0]); zPts.push(0);
          return { x: Array(yPts.length).fill(x), y: yPts, z: zPts, line: { color: '#8b5cf6', width: 3 } };
        },
      },
      triangle: {
        label: 'Equilateral Triangle',
        // base = 2*yMax → A(x) = √3 * yMax²
        volume: (8 * Math.sqrt(3)) / 3 * 4,
        volLatex: '\\tfrac{32\\sqrt{3}}{3}',
        trace: (x, yMax) => ({
          x: [x,    x,   x,    x],
          y: [-yMax, yMax, 0, -yMax],
          z: [0,     0,    yMax * Math.sqrt(3), 0],
          line: { color: '#f59e0b', width: 3 },
        }),
      },
    };

    function draw() {
      const key = typeEl?.value || 'square';
      const cfg = SLICE_TYPES[key];
      const N = 22;
      const traces = [];

      for (let i = 0; i <= N; i++) {
        const x = -2 + (4 * i) / N;
        const yMax = Math.sqrt(Math.max(0, 4 - x * x));
        if (yMax < 1e-9) continue;
        const t = cfg.trace(x, yMax);
        traces.push({
          type: 'scatter3d', mode: 'lines',
          x: t.x, y: t.y, z: t.z,
          line: t.line,
          showlegend: i === 0,
          name: `${cfg.label} A(x)`,
        });
      }

      // Draw the base circle outline
      const circPts = 60;
      const circY = [], circX = [];
      for (let k = 0; k <= circPts; k++) {
        const theta = (k / circPts) * 2 * Math.PI;
        circX.push(2 * Math.cos(theta));
        circY.push(2 * Math.sin(theta));
      }
      traces.push({
        type: 'scatter3d', mode: 'lines',
        x: circX, y: circY, z: Array(circPts + 1).fill(0),
        line: { color: '#64748b', width: 2, dash: 'dot' },
        name: 'Base circle',
      });

      Plotly.react(el, traces, {
        ...layout(),
        height: 340,
        scene: {
          xaxis: { title: 'x', gridcolor: getTheme().grid },
          yaxis: { title: 'y (base)', gridcolor: getTheme().grid },
          zaxis: { title: 'z (height)', gridcolor: getTheme().grid },
          camera: { eye: { x: 1.5, y: 1.5, z: 1.2 } },
          bgcolor: getTheme().bg,
        },
        title: { text: `Slicing — ${cfg.label} Cross-Sections · V = ${latexToPlain(cfg.volLatex)} ≈ ${cfg.volume.toFixed(3)}`,
                 font: { size: 12, color: getTheme().text } },
        margin: { t: 40, b: 10, l: 10, r: 10 },
      }, config);
    }

    draw();
    typeEl?.addEventListener('change', draw);
  }

  // ── 4. Hyperbolic Functions ───────────────────────────────────────────
  function hyperbolicPlot(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    _trackAndResize(el);
    const xs = [];
    for (let x = -3; x <= 3; x += 0.06) xs.push(parseFloat(x.toFixed(2)));

    const sinh = xs.map(x => (Math.exp(x) - Math.exp(-x)) / 2);
    const cosh = xs.map(x => (Math.exp(x) + Math.exp(-x)) / 2);
    const tanh = xs.map(x => (Math.exp(x) - Math.exp(-x)) / (Math.exp(x) + Math.exp(-x)));

    Plotly.newPlot(el, [
      { x: xs, y: sinh, mode: 'lines', name: 'sinh x', line: { color: '#3b82f6', width: 2.5 } },
      { x: xs, y: cosh, mode: 'lines', name: 'cosh x', line: { color: '#ef4444', width: 2.5 } },
      { x: xs, y: tanh, mode: 'lines', name: 'tanh x', line: { color: '#10b981', width: 2.5, dash: 'dash' } },
    ], { ...layout({ yaxis: { range: [-4, 4], gridcolor: getTheme().grid, zerolinecolor: getTheme().line } }), height: 300,
      title: { text: 'Hyperbolic Functions', font: { size: 13, color: getTheme().text } } }, config);
  }

  // ── 5. Convergence of Series ──────────────────────────────────────────
  function seriesConvergence(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    _trackAndResize(el);
    const rIn = document.getElementById(containerId + '-r');
    const rLbl= document.getElementById(containerId + '-rval');

    function draw() {
      const r = parseFloat(rIn?.value || 0.5);
      if (rLbl) rLbl.textContent = r.toFixed(2);
      const ns = Array.from({ length: 20 }, (_, i) => i);
      const partials = ns.map(n => {
        let s = 0; for (let i = 0; i <= n; i++) s += Math.pow(r, i); return s;
      });
      const limit = Math.abs(r) < 1 ? `Converges to S = ${(1/(1-r)).toFixed(3)}` : 'Diverges (|r| ≥ 1)';
      const limitLine = Math.abs(r) < 1 ? [{
        x: [0, 19], y: [1/(1-r), 1/(1-r)],
        mode: 'lines', name: `Limit = ${(1/(1-r)).toFixed(2)}`,
        line: { color: '#ef4444', dash: 'dot', width: 2 },
      }] : [];

      Plotly.react(el, [
        { x: ns, y: partials, mode: 'lines+markers', name: 'Partial sums Sₙ', line: { color: '#3b82f6', width: 2.5 }, marker: { size: 7 } },
        ...limitLine,
      ], { ...layout(), height: 280, title: { text: `Geometric Series Σ rⁿ, r = ${r.toFixed(2)} — ${limit}`, font: { size: 12, color: getTheme().text } } }, config);
    }

    draw();
    rIn?.addEventListener('input', draw);
  }

  // ── 6. Taylor/Maclaurin Approximation ────────────────────────────────
  function taylorSeries(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    _trackAndResize(el);
    const degIn  = document.getElementById(containerId + '-deg');
    const degLbl = document.getElementById(containerId + '-degval');

    function fact(n) { return n <= 1 ? 1 : n * fact(n - 1); }
    function sinApprox(x, deg) {
      let s = 0;
      for (let k = 0; k <= deg; k++) {
        const n = 2 * k + 1;
        s += Math.pow(-1, k) * Math.pow(x, n) / fact(n);
      }
      return s;
    }

    const xs = [];
    for (let x = -2 * Math.PI; x <= 2 * Math.PI; x += 0.05) xs.push(parseFloat(x.toFixed(3)));

    function draw() {
      const deg = parseInt(degIn?.value || 1);
      if (degLbl) degLbl.textContent = 2 * deg + 1;
      const approx = xs.map(x => sinApprox(x, deg));
      const clamped = approx.map(y => Math.max(-4, Math.min(4, y)));

      Plotly.react(el, [
        { x: xs, y: xs.map(Math.sin), mode: 'lines', name: 'sin x', line: { color: '#ef4444', width: 2.5 } },
        { x: xs, y: clamped, mode: 'lines', name: `T${2*deg+1}(x)`, line: { color: '#3b82f6', width: 2.5, dash: 'dash' } },
      ], {
        ...layout({ yaxis: { range: [-4, 4], gridcolor: getTheme().grid, zerolinecolor: getTheme().line } }),
        height: 300,
        title: { text: `Maclaurin Series for sin x — degree ${2 * deg + 1}`, font: { size: 12, color: getTheme().text } },
      }, config);
    }
    draw();
    degIn?.addEventListener('input', draw);
  }

  // ── 7. Direction Field (Differential Equations) ───────────────────────
  function directionField(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    _trackAndResize(el);
    const odeEl  = document.getElementById(containerId + '-ode');
    const descEl = document.getElementById(containerId + '-desc');

    // ── ODE library, pulled from the four worked examples in this chapter ─
    const ODES = {
      linear1: {
        slope: (x, y) => x - y,
        xlim: [-2, 2], ylim: [-2, 2],
        solution: x => x - 1 + 2 * Math.exp(-x),
        label: 'dy/dx = x − y', solLabel: 'y = x − 1 + 2e⁻ˣ',
        desc: 'A linear ODE. All solution curves approach the line $y = x-1$ as $x \\to \\infty$.',
      },
      separable: {
        slope: (x, y) => x * y,
        xlim: [-2, 2], ylim: [-4, 4],
        solution: x => 0.5 * Math.exp(x * x / 2),
        label: 'dy/dx = xy', solLabel: 'y = 0.5·e^(x²/2)',
        desc: 'Separable (Worked Example 12.1.1): separating gives $\\frac{dy}{y} = x\\,dx$, so $y = Ce^{x^2/2}$.',
      },
      ivp: {
        slope: (x, y) => x / (Math.abs(y) < 0.15 ? Math.sign(y || 1) * 0.15 : y),
        xlim: [-3, 3], ylim: [0.2, 5.5],
        solution: x => Math.sqrt(x * x + 9),
        label: 'dy/dx = x／y  (y(0) = 3)', solLabel: 'y = √(x²+9)',
        desc: 'Separable IVP (Example 12.1): $y\\,dy = x\\,dx \\Rightarrow y^2 = x^2 + C$; the initial condition $y(0)=3$ fixes $C=9$.',
      },
      linear2: {
        slope: (x, y) => 4 * x - 2 * y,
        xlim: [0, 3], ylim: [-2, 8],
        solution: x => 2 * x - 1 + Math.exp(-2 * x),
        label: 'dy/dx = 4x − 2y  (from y′ + 2y = 4x)', solLabel: 'y = 2x − 1 + e⁻²ˣ',
        desc: 'Linear ODE (Example 12.2), solved with integrating factor $\\mu = e^{2x}$: general solution $y = 2x-1+Ce^{-2x}$.',
      },
    };

    function draw() {
      const key = odeEl?.value || 'linear1';
      const cfg = ODES[key];
      const { slope, xlim, ylim } = cfg;

      const nx = 16, ny = 16;
      const dx = (xlim[1] - xlim[0]) / nx, dy = (ylim[1] - ylim[0]) / ny;
      const scale = 0.35;

      const segments = { x: [], y: [], mode: 'lines', line: { color: '#3b82f6', width: 1.2 }, hoverinfo: 'none', showlegend: false };

      for (let i = 0; i <= nx; i++) {
        for (let j = 0; j <= ny; j++) {
          const x0 = xlim[0] + i * dx;
          const y0 = ylim[0] + j * dy;
          let dydx = slope(x0, y0);
          dydx = Math.max(-8, Math.min(8, dydx)); // clamp so isolated steep points don't dominate the plot
          const len = Math.sqrt(1 + dydx * dydx);
          const ddx = scale * dx / len;
          const ddy = scale * dydx * dy / len;
          segments.x.push(x0 - ddx, x0 + ddx, null);
          segments.y.push(y0 - ddy, y0 + ddy, null);
        }
      }

      const sxs = [], sys = [];
      for (let x = xlim[0]; x <= xlim[1]; x += (xlim[1] - xlim[0]) / 80) {
        sxs.push(x); sys.push(cfg.solution(x));
      }

      Plotly.react(el, [
        segments,
        { x: sxs, y: sys, mode: 'lines', name: `Solution ${cfg.solLabel}`, line: { color: '#ef4444', width: 2.5 } },
      ], { ...layout({ xaxis: { range: xlim, gridcolor: getTheme().grid, zerolinecolor: getTheme().line },
                       yaxis: { range: ylim, gridcolor: getTheme().grid, zerolinecolor: getTheme().line } }),
        height: 300, title: { text: `Direction Field: ${cfg.label}`, font: { size: 12, color: getTheme().text } } }, config);

      if (descEl) {
        descEl.innerHTML = cfg.desc;
        if (window.renderMathInElement) {
          renderMathInElement(descEl, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false },
            ],
            throwOnError: false,
          });
        }
      }
    }

    draw();
    odeEl?.addEventListener('change', draw);
  }

  // ── 8. Improper Integral Convergence ─────────────────────────────────
  function improperIntegral(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    _trackAndResize(el);
    const pIn  = document.getElementById(containerId + '-p');
    const pLbl = document.getElementById(containerId + '-pval');

    function draw() {
      const p = parseFloat(pIn?.value || 2);
      if (pLbl) pLbl.textContent = p.toFixed(1);
      const xs = [];
      for (let x = 1; x <= 8; x += 0.05) xs.push(parseFloat(x.toFixed(2)));
      const ys = xs.map(x => Math.pow(x, -p));
      const converges = p > 1;
      const area = converges ? `1/(${p.toFixed(1)}-1) = ${(1/(p-1)).toFixed(3)}` : '∞ (diverges)';

      Plotly.react(el, [
        { x: xs, y: ys, fill: 'tozeroy', fillcolor: converges ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.15)', mode: 'lines', line: { color: converges ? '#10b981' : '#ef4444', width: 2.5 }, name: `1/x^${p.toFixed(1)}` },
      ], { ...layout(), height: 280, title: { text: `∫₁^∞ x⁻ᵖ dx, p=${p.toFixed(1)} — Area = ${area}`, font: { size: 12, color: getTheme().text } } }, config);
    }
    draw();
    pIn?.addEventListener('input', draw);
  }

  return { riemannSum, areaBetweenCurves, diskMethod, washerMethod, slicingMethod, hyperbolicPlot, seriesConvergence, taylorSeries, directionField, improperIntegral };
})();