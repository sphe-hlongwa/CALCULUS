/**
 * app.js — Main orchestrator: renders rich chapter content, wires everything together
 */

// ─── Toast helper ──────────────────────────────────────────────────────────
function toast(msg, dur = 2500) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), dur);
}

// ─── Rich chapter content (the actual study material) ─────────────────────
const CHAPTER_CONTENT = {

  7: () => `
    <h2 id="ch7-sec1" class="section-heading fade-up"><span class="section-num">7.1</span> Definitions and Graphs</h2>

    <div class="prose fade-up">
      <p>The hyperbolic functions are analogues of the trigonometric functions, defined using the natural exponential. They appear naturally in physics (catenary curves, special relativity) and engineering, and their integrals arise frequently in Calculus II.</p>
    </div>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Definition</div>
      <div class="card-title">Hyperbolic Functions</div>
      <p>The hyperbolic functions are defined using the natural exponential function:</p>
      <div class="math-block">$$\\sinh x = \\frac{e^x - e^{-x}}{2} \\qquad \\cosh x = \\frac{e^x + e^{-x}}{2} \\qquad \\tanh x = \\frac{\\sinh x}{\\cosh x}$$</div>
      <p>They arise naturally in catenary curves (hanging chains), special relativity, and solutions to many differential equations.</p>
    </div>

    <div class="viz-card fade-up">
      <h3>${Icons.trendingUp} Interactive: Hyperbolic Functions</h3>
      <p>Observe how sinh, cosh, and tanh behave across the real line. Note that cosh x ≥ 1 always, and tanh is bounded between −1 and 1.</p>
      <div class="viz-plot" id="hyp-plot" style="height:300px"></div>
    </div>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Theorem — Hyperbolic Identities</div>
      <p>These identities mirror trigonometric identities, but with sign changes due to the minus in $\\cosh^2 x - \\sinh^2 x = 1$:</p>
      <div class="math-block">$$\\cosh^2 x - \\sinh^2 x = 1$$</div>
      <div class="math-block">$$1 - \\tanh^2 x = \\text{sech}^2 x \\qquad \\coth^2 x - 1 = \\text{csch}^2 x$$</div>
      <div class="math-block">$$\\sinh(x \\pm y) = \\sinh x \\cosh y \\pm \\cosh x \\sinh y$$</div>
      <div class="math-block">$$\\cosh(x \\pm y) = \\cosh x \\cosh y \\pm \\sinh x \\sinh y$$</div>
    </div>

    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Memory Trick</div>
      <div class="card-title">Trig vs Hyperbolic</div>
      <p>Remember: hyperbolic identities look like trig identities but the <strong>sign of the $\\sinh^2$ term flips</strong>. Compare:</p>
      <div class="math-block">$$\\underbrace{\\cos^2 x + \\sin^2 x = 1}_{\\text{trig}} \\qquad vs \\qquad \\underbrace{\\cosh^2 x - \\sinh^2 x = 1}_{\\text{hyperbolic}}$$</div>
    </div>

    <h2 id="ch7-sec2" class="section-heading fade-up"><span class="section-num">7.2</span> Derivatives of Hyperbolic Functions</h2>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Derivation</span>
        <h4>Proof: $\\dfrac{d}{dx}\\sinh x = \\cosh x$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Write out the definition</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\frac{d}{dx}\\sinh x = \\frac{d}{dx}\\left(\\frac{e^x - e^{-x}}{2}\\right)$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Differentiate term by term</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$= \\frac{1}{2}\\left(\\frac{d}{dx}e^x - \\frac{d}{dx}e^{-x}\\right) = \\frac{1}{2}(e^x - (-1)e^{-x}) = \\frac{e^x + e^{-x}}{2}$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Recognise the result</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$= \\cosh x \\quad \\checkmark$$</div>
        </div>
      </div>
    </div>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Derivatives Table</div>
      <div class="math-block">$$\\frac{d}{dx}\\sinh x = \\cosh x \\qquad \\frac{d}{dx}\\cosh x = \\sinh x$$</div>
      <div class="math-block">$$\\frac{d}{dx}\\tanh x = \\text{sech}^2 x \\qquad \\frac{d}{dx}\\text{sech}\\, x = -\\text{sech}\\, x\\tanh x$$</div>
    </div>

    <div class="content-card card-mistake fade-up">
      <div class="card-badge">${Icons.alertTriangle} Common Mistake</div>
      <div class="card-title">Sign trap!</div>
      <p>Note that $\\dfrac{d}{dx}\\cosh x = +\\sinh x$ (positive!), unlike the trig case $\\dfrac{d}{dx}\\cos x = -\\sin x$ (negative).</p>
    </div>

    <h2 id="ch7-sec3" class="section-heading fade-up"><span class="section-num">7.3</span> Inverse Hyperbolic Functions</h2>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Theorem — Logarithmic Forms</div>
      <div class="math-block">$$\\sinh^{-1} x = \\ln\\left(x + \\sqrt{x^2+1}\\right), \\quad x \\in \\mathbb{R}$$</div>
      <div class="math-block">$$\\cosh^{-1} x = \\ln\\left(x + \\sqrt{x^2-1}\\right), \\quad x \\geq 1$$</div>
      <div class="math-block">$$\\tanh^{-1} x = \\frac{1}{2}\\ln\\frac{1+x}{1-x}, \\quad |x| < 1$$</div>
    </div>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Derivatives — Inverse Hyperbolic</div>
      <div class="math-block">$$\\frac{d}{dx}\\sinh^{-1} x = \\frac{1}{\\sqrt{x^2+1}} \\qquad \\frac{d}{dx}\\cosh^{-1} x = \\frac{1}{\\sqrt{x^2-1}}$$</div>
      <div class="math-block">$$\\frac{d}{dx}\\tanh^{-1} x = \\frac{1}{1-x^2} \\qquad \\text{(and useful: }\\int\\frac{dx}{\\sqrt{x^2+a^2}} = \\sinh^{-1}\\frac{x}{a}+C\\text{)}$$</div>
    </div>

    <div class="content-card card-exam fade-up">
      <div class="card-badge">${Icons.target} Exam Tip</div>
      <div class="card-title">Integration using inverse hyperbolic</div>
      <p>When you see $\\displaystyle\\int\\frac{dx}{\\sqrt{x^2 \\pm a^2}}$ you can use either trig substitution <em>or</em> the inverse hyperbolic formula directly. The inverse hyperbolic form is often faster.</p>
      <div class="math-block">$$\\int\\frac{dx}{\\sqrt{x^2+a^2}} = \\sinh^{-1}\\frac{x}{a}+C = \\ln\\left(x+\\sqrt{x^2+a^2}\\right)+C$$</div>
    </div>

    <h2 class="section-heading fade-up"><span class="section-num">★</span> Solved Examples</h2>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 7.1</span>
        <h4>Evaluate $\\displaystyle\\int \\sinh^2 x\\,dx$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Use the hyperbolic identity $\\cosh 2x = 1 + 2\\sinh^2 x$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\sinh^2 x = \\frac{\\cosh 2x - 1}{2}$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Substitute and integrate term by term</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int \\sinh^2 x\\,dx = \\int \\frac{\\cosh 2x - 1}{2}\\,dx = \\frac{\\sinh 2x}{4} - \\frac{x}{2} + C$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Optionally expand using $\\sinh 2x = 2\\sinh x\\cosh x$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$= \\frac{\\sinh x\\cosh x}{2} - \\frac{x}{2} + C \\quad \\checkmark$$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 7.2</span>
        <h4>Evaluate $\\displaystyle\\int_0^2 \\frac{1}{\\sqrt{x^2+9}}\\,dx$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Recognise the inverse hyperbolic form ($a = 3$)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int \\frac{dx}{\\sqrt{x^2+a^2}} = \\sinh^{-1}\\!\\left(\\frac{x}{a}\\right)+C = \\ln\\left|x+\\sqrt{x^2+a^2}\\right|+C$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Apply the formula with $a = 3$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\left[\\ln\\left(x+\\sqrt{x^2+9}\\right)\\right]_0^2$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Evaluate at $x=2$ and $x=0$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$= \\ln\\!\\left(2+\\sqrt{13}\\right) - \\ln(0+3) = \\ln\\!\\left(\\frac{2+\\sqrt{13}}{3}\\right) \\approx 0.616\\quad\\checkmark$$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 7.3</span>
        <h4>Differentiate $f(x) = \\tanh^{-1}(\\sin x)$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Recall $\\dfrac{d}{du}\\tanh^{-1}u = \\dfrac{1}{1-u^2}$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">Here $u = \\sin x$, so $\\dfrac{du}{dx} = \\cos x$.</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Apply the chain rule</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$f'(x) = \\frac{1}{1-\\sin^2 x}\\cdot\\cos x = \\frac{\\cos x}{\\cos^2 x} = \\sec x \\quad\\checkmark$$</div>
        </div>
      </div>
    </div>
  `,

  8: () => `
    <h2 id="ch8-sec1" class="section-heading fade-up"><span class="section-num">8.1</span> Riemann Sums and Area Approximation</h2>
    <div class="prose fade-up">
      <p>The definite integral is built from the idea of adding up infinitely many infinitely thin rectangles. We start with finite approximations — <strong>Riemann sums</strong> — and take a limit.</p>
    </div>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Definition — Finite Riemann Sum</div>
      <div class="card-title">Finite Approximation</div>
      <p>A <strong>Riemann Sum</strong> of $f$ over $[a,b]$ with $n$ subintervals of width $\\Delta x = \\dfrac{b-a}{n}$ and sample points $x_i^* \\in [x_{i-1}, x_i]$ is the finite approximation:</p>
      <div class="math-block">$$S_n = \\sum_{i=1}^n f(x_i^*)\\,\\Delta x$$</div>
    </div>

    <div class="viz-card fade-up">
      <h3>${Icons.ruler} Interactive: Riemann Sum</h3>
      <p id="riemann-plot-desc">Approximate the area under $f(x) = x^2$ on $[0, 2]$. Increase $n$ to see the approximation converge to the exact area $\frac{8}{3} \approx 2.667$.</p>
      <div class="viz-plot" id="riemann-plot" style="height:300px"></div>
      <div class="viz-controls">
        <div class="viz-control-group">
          <label>Function:</label>
          <select id="riemann-plot-func">
            <option value="x2">f(x) = x² on [0, 2]</option>
            <option value="sin">f(x) = sin(x) on [0, π]</option>
            <option value="dec">f(x) = 16 − x² on [0, 3]</option>
          </select>
        </div>
        <div class="viz-control-group">
          <label>Method:</label>
          <select id="riemann-plot-type">
            <option value="left">Left endpoint</option>
            <option value="right">Right endpoint</option>
            <option value="mid">Midpoint</option>
            <option value="lower">Lower sum</option>
            <option value="upper">Upper sum</option>
          </select>
        </div>
        <div class="viz-control-group">
          <label>Rectangles n =</label>
          <input type="range" id="riemann-plot-n" min="2" max="50" value="4">
          <span id="riemann-plot-val">4</span>
        </div>
      </div>
    </div>

    <div class="content-card card-memory fade-up">
      <div class="card-badge">${Icons.brain} Memory Trick</div>
      <div class="card-title">Riemann → Integral</div>
      <p><strong>Rectangles → Approximation</strong> (finite $n$)<br>
      <strong>Infinite rectangles → Exact area</strong> ($n \\to \\infty$)<br>
      The $\\displaystyle\\int$ symbol is an elongated $S$ for <em>Sum</em>. The $dx$ is the infinitesimal width $\\Delta x$.</p>
    </div>

    <h2 id="ch8-sec2" class="section-heading fade-up"><span class="section-num">8.2</span> The Definite Integral</h2>
    <h3 id="ch8-sec2-1" class="section-heading fade-up"><span class="section-num">8.2.1</span> The Definite Integral</h3>
    
    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Definition — Definite Integral</div>
      <div class="card-title">Limit of Riemann Sums</div>
      <p>The <strong>Definite Integral</strong> of a continuous function $f$ over $[a,b]$ is defined as the infinite limit of Riemann sums as $n \\to \\infty$:</p>
      <div class="math-block">$$\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i^*)\\,\\Delta x$$</div>
    </div>
    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Basic Properties of Definite Integrals</div>
      <div class="math-block">$$\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx \\qquad \\int_a^a f(x)\\,dx = 0$$</div>
      <div class="math-block">$$\\int_a^b [f(x) \\pm g(x)]\\,dx = \\int_a^b f(x)\\,dx \\pm \\int_a^b g(x)\\,dx$$</div>
      <div class="math-block">$$\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx \\quad \\text{for any } c \\in [a,b]$$</div>
    </div>
    <h3 id="ch8-sec2-2" class="section-heading fade-up"><span class="section-num">8.2.2</span> Interpreting the Definite Integral as a Known Area</h3>
    
    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Geometric Evaluation</div>
      <div class="card-title">Known Geometric Shapes</div>
      <p>If $f(x)$ forms standard geometric regions with the $x$-axis, evaluate $\\int_a^b f(x)\\,dx$ directly using geometry formulas without integration:</p>
      <ul>
        <li><strong>Semicircle:</strong> $y = \\sqrt{r^2 - x^2} \\implies \\text{Area} = \\frac{1}{2}\\pi r^2$</li>
        <li><strong>Triangle:</strong> $y = mx + c \\implies \\text{Area} = \\frac{1}{2}bh$</li>
        <li><strong>Trapezoid:</strong> $\\text{Area} = \\frac{h(a+b)}{2}$</li>
      </ul>
      <p><em>Net Signed Area:</em> Region above the $x$-axis counts as positive area; region below counts as negative area.</p>
    </div>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Theorem — Fundamental Theorem of Calculus (Part 2)</div>
      <p>If $F$ is any antiderivative of $f$ on $[a,b]$, then:</p>
      <div class="math-block">$$\\int_a^b f(x)\\,dx = F(b) - F(a) = \\Big[F(x)\\Big]_a^b$$</div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 8.2.1</span>
        <h4>Evaluate $\\displaystyle\\int_0^3 (x^2 - 2x)\\,dx$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Find the antiderivative</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$F(x) = \\frac{x^3}{3} - x^2$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Evaluate at bounds</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$F(3) = \\frac{27}{3} - 9 = 9 - 9 = 0 \\qquad F(0) = 0$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Subtract: F(b) − F(a)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int_0^3(x^2-2x)\\,dx = F(3) - F(0) = 0 - 0 = 0$$</div>
        </div>
      </div>
    </div>

    <h2 id="ch8-sec2-3" class="section-heading fade-up"><span class="section-num">8.2.3</span> Area Between Two Curves</h2>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Theorem — Integration with respect to x</div>
      <div class="card-title">Vertical Strip Method</div>
      <p>For regions bounded by $y = f(x)$ (top curve) and $y = g(x)$ (bottom curve) between $x = a$ and $x = b$ where $f(x) \\geq g(x)$:</p>
      <div class="math-block">$$A = \\int_a^b \\Big[\\text{Top} - \\text{Bottom}\\Big]\\,dx = \\int_a^b \\big[f(x) - g(x)\\big]\\,dx$$</div>
    </div>
    <h3 id="ch8-sec2-4" class="section-heading fade-up"><span class="section-num">8.2.4</span> Area between two Curves: y-axis</h3>
    
    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Theorem — Integration with respect to y</div>
      <div class="card-title">Horizontal Strip Method</div>
      <p>For regions bounded by $x = f(y)$ (right curve) and $x = g(y)$ (left curve) between $y = c$ and $y = d$ where $f(y) \\geq g(y)$:</p>
      <div class="math-block">$$A = \\int_c^d \\Big[\\text{Right} - \\text{Left}\\Big]\\,dy = \\int_c^d \\big[f(y) - g(y)\\big]\\,dy$$</div>
    </div>
    <h3 id="ch8-sec2-5" class="section-heading fade-up"><span class="section-num">8.2.5</span> Area with Crossing over Functions</h3>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Key Idea — When Curves Cross</div>
      <div class="card-title">Split at Every Crossing Point</div>
      <p>When $f(x)$ and $g(x)$ intersect at points $x_1, x_2, \\ldots, x_k$ inside $[a,b]$, you <strong>cannot</strong> use a single integral — the "top" and "bottom" curves swap at each crossing. The total area is:</p>
      <div class="math-block">$$A = \\int_a^b |f(x)-g(x)|\\,dx = \\sum_{i} \\int_{x_{i-1}}^{x_i} \\big|\\text{Top} - \\text{Bottom}\\big|\\,dx$$</div>
      <p style="margin-top:10px">For each sub-interval, determine which curve is on <strong>top</strong> (substitute a test point), then integrate $\\text{Top} - \\text{Bottom}$ (always positive).</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 8.2.7</span>
        <h4>Find the area bounded by $y = x^2$ and $y = 2 - x^2$ on $[0, 2]$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Find all intersection points in $[0,2]$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>Set $f(x) = g(x)$:</p>
            <div class="math-block">$$x^2 = 2 - x^2 \\implies 2x^2 = 2 \\implies x^2 = 1 \\implies x = 1 \\quad (\\text{since } x \\in [0,2])$$</div>
            <p>The curves cross <strong>once</strong> at $x = 1$, creating two sub-intervals: $[0,1]$ and $[1,2]$.</p>
          </div>
        </div>

        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Identify TOP and BOTTOM on each sub-interval</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p><strong>On $[0,1]$:</strong> test $x = 0.5$: &nbsp; $f(0.5) = 0.25$, &nbsp; $g(0.5) = 1.75$ &nbsp;→ &nbsp;<strong>$y=2-x^2$ is on top</strong></p>
            <p><strong>On $[1,2]$:</strong> test $x = 1.5$: &nbsp; $f(1.5) = 2.25$, &nbsp; $g(1.5) = -0.25$ &nbsp;→ &nbsp;<strong>$y=x^2$ is on top</strong></p>
          </div>
        </div>

        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Integrate Top − Bottom on each piece</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$A_1 = \\int_0^1 \\big[(2-x^2) - x^2\\big]\\,dx = \\int_0^1 (2 - 2x^2)\\,dx = \\left[2x - \\tfrac{2x^3}{3}\\right]_0^1 = 2 - \\tfrac{2}{3} = \\tfrac{4}{3}$$</div>
            <div class="math-block">$$A_2 = \\int_1^2 \\big[x^2 - (2-x^2)\\big]\\,dx = \\int_1^2 (2x^2 - 2)\\,dx = \\left[\\tfrac{2x^3}{3} - 2x\\right]_1^2 = \\left(\\tfrac{16}{3}-4\\right) - \\left(\\tfrac{2}{3}-2\\right) = \\tfrac{4}{3}$$</div>
          </div>
        </div>

        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">4</div><div class="step-label">Add the two areas</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$A = A_1 + A_2 = \\tfrac{4}{3} + \\tfrac{4}{3} = \\boxed{\\tfrac{8}{3}}$$</div>
            <p>Note: if you had integrated without splitting, you'd get $\\int_0^2(2-x^2-x^2)dx = \\left[2x - \\tfrac{2x^3}{3}\\right]_0^2 = 4 - \\tfrac{16}{3} = -\\tfrac{4}{3}$ — a <strong>negative</strong> wrong answer!</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content-card card-mistake fade-up">
      <div class="card-badge">${Icons.alertTriangle} Common Mistake — Not Splitting</div>
      <div class="card-title">Why you MUST split the integral</div>
      <p>If $f$ and $g$ cross at $x = c$ and you <em>don't</em> split, the signed areas on either side <strong>cancel out</strong>, giving a smaller (or even negative) result. The correct approach always uses $|f - g|$:</p>
      <div class="math-block">$$A = \\int_a^b |f(x) - g(x)|\\,dx \\neq \\left|\\int_a^b [f(x) - g(x)]\\,dx\\right|$$</div>
      <div style="display:flex;gap:12px;margin-top:14px;flex-wrap:wrap">
        <div style="flex:1;min-width:180px;background:rgba(239,68,68,.08);border:1.5px solid rgba(239,68,68,.3);border-radius:10px;padding:12px">
          <p style="font-weight:700;color:var(--red);margin-bottom:6px;display:flex;align-items:center;gap:4px">${Icons.x} Wrong</p>
          <p style="font-size:.85rem">$\\displaystyle\\int_0^2 (2-x^2-x^2)\\,dx = -\\tfrac{4}{3}$</p>
        </div>
        <div style="flex:1;min-width:180px;background:rgba(16,185,129,.08);border:1.5px solid rgba(16,185,129,.3);border-radius:10px;padding:12px">
          <p style="font-weight:700;color:var(--teal);margin-bottom:6px;display:flex;align-items:center;gap:4px">${Icons.check} Correct</p>
          <p style="font-size:.85rem">$A_1 + A_2 = \\tfrac{4}{3} + \\tfrac{4}{3} = \\tfrac{8}{3}$</p>
        </div>
      </div>
    </div>

    <div class="viz-card fade-up">
      <h3>${Icons.ruler} Interactive: Area Between Curves</h3>
      <p id="area-plot-desc">Pick a curve pair below. The shaded region is always Top − Bottom, integrated over the interval where the two curves bound a region.</p>
      <div class="viz-plot" id="area-plot" style="height:300px"></div>
      <div class="viz-controls">
        <div class="viz-control-group">
          <label>Curve pair:</label>
          <select id="area-plot-pair">
            <option value="lineParabola">f(x) = x, g(x) = x² on [0,1]</option>
            <option value="twoParabolas">f(x) = 2−x², g(x) = x² on [−1,1]</option>
            <option value="sinCos">f(x) = cos x, g(x) = sin x on [−π/4,π/4]</option>
            <option value="cubicLine">f(x) = x+2, g(x) = x³ on [−1,2]</option>
            <option value="expVsLine">f(x) = eˣ, g(x) = x+1 on [−1,2]</option>
            <option value="sinSq">f(x) = sin x vs scaled parabola on [0,π]</option>
          </select>
        </div>
      </div>
    </div>

    <h2 id="ch8-sec3" class="section-heading fade-up"><span class="section-num">8.3</span> Solids of Revolution</h2>
    <h3 id="ch8-sec3-1" class="section-heading fade-up"><span class="section-num">8.3.1</span> The Disk Method</h3>
    
    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Formula — Disk Method</div>
      <div class="card-title">Rotation about Coordinate Axes</div>
      <p>When a solid region is revolved around an axis of revolution without any central hole:</p>
      <div class="math-block">$$V = \\pi \\int_a^b [f(x)]^2 \\, dx \\quad \\text{(rotation about the } x\\text{-axis)}$$</div>
      <div class="math-block">$$V = \\pi \\int_c^d [g(y)]^2 \\, dy \\quad \\text{(rotation about the } y\\text{-axis)}$$</div>
    </div>
    <h3 id="ch8-sec3-2" class="section-heading fade-up"><span class="section-num">8.3.2</span> The Washer Method</h3>
    
    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Formula — Washer Method</div>
      <div class="card-title">Solid with Hollow Core</div>
      <p>When revolving the region between two curves $f(x) \\geq g(x) \\geq 0$ around the $x$-axis:</p>
      <div class="math-block">$$V = \\pi \\int_a^b \\Big(\\big[R(x)\\big]^2 - \\big[r(x)\\big]^2\\Big)\\,dx$$</div>
      <p>where $R(x)$ is the <strong>outer radius</strong> and $r(x)$ is the <strong>inner radius</strong>.</p>
    </div>

    <div class="viz-card fade-up">
      <h3>${Icons.box} 3D: Volume of Revolution — Disk Method</h3>
      <p>Pick a function below. The solid is formed by rotating the curve about the x-axis.</p>
      <div class="viz-plot" id="disk-plot" style="height:340px"></div>
      <div class="viz-controls">
        <div class="viz-control-group">
          <label>Function:</label>
          <select id="disk-plot-func">
            <option value="sqrtx">y = √x on [0, 4]</option>
            <option value="cone">y = x on [0, 2] (cone)</option>
            <option value="bell">y = sin(x) on [0, π]</option>
            <option value="paraboloid">y = x² on [0, 1]</option>
          </select>
        </div>
      </div>
    </div>

    <div class="viz-card fade-up">
      <h3>${Icons.box} 3D: Volume of Revolution — Washer Method</h3>
      <p>Pick a curve pair below. The solid is the region between the two curves, rotated about the x-axis.</p>
      <div class="viz-plot" id="washer-plot" style="height:340px"></div>
      <div class="viz-controls">
        <div class="viz-control-group">
          <label>Curve pair:</label>
          <select id="washer-plot-pair">
            <option value="xVsX2">R(x) = x, r(x) = x² on [0,1]</option>
            <option value="sqrtVsX2">R(x) = √x, r(x) = x² on [0,1]</option>
            <option value="flatVsX2">R(x) = 1, r(x) = x² on [−1,1]</option>
          </select>
        </div>
      </div>
    </div>

    <h2 id="ch8-sec4" class="section-heading fade-up"><span class="section-num">8.4</span> Volumes by Slicing</h2>
    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Definition — Volumes by Slicing</div>
      <div class="card-title">General Slicing Formula</div>
      <p>For a solid with known cross-sectional area $A(x)$ perpendicular to the $x$-axis from $x = a$ to $x = b$:</p>
      <div class="math-block">$$V = \\int_a^b A(x)\\,dx$$</div>
    </div>

    <div class="viz-card fade-up">
      <h3>${Icons.box} 3D: Volumes by Slicing (Interactive Cross-Sections)</h3>
      <p>Solid base: circle $x^2+y^2 \\leq 4$. Pick a cross-section shape perpendicular to the $x$-axis and see how the volume formula changes.</p>
      <div class="viz-plot" id="slicing-plot" style="height:340px"></div>
      <div class="viz-controls">
        <div class="viz-control-group">
          <label>Cross-section:</label>
          <select id="slicing-plot-type">
            <option value="square">Square — A(x) = 4(4−x²), V = 128/3</option>
            <option value="semicircle">Semicircle — A(x) = π(4−x²)/2, V = 16π/3</option>
            <option value="triangle">Equilateral Triangle — A(x) = √3(4−x²), V = 32√3/3</option>
          </select>
        </div>
      </div>
    </div>

    <div class="content-card card-exam fade-up">
      <div class="card-badge">${Icons.target} Exam Tip</div>
      <div class="card-title">Disk vs Washer — deciding which</div>
      <p>Draw the region. If rotating about the $x$-axis and the region touches the axis, use <strong>Disks</strong>. If there's a gap (hole) between the region and the axis, use <strong>Washers</strong>. The formula is always: $\\pi(R^2 - r^2)$ where $R$ = outer radius, $r$ = inner.</p>
    </div>

    <div class="content-card card-mistake fade-up">
      <div class="card-badge">${Icons.alertTriangle} Common Mistake — Washer Method</div>
      <div class="math-block">$$\\text{WRONG: } \\pi\\int (f-g)^2\\,dx \\qquad \\text{CORRECT: } \\pi\\int (f^2 - g^2)\\,dx$$</div>
      <p>Always square first, then subtract — never subtract first, then square.</p>
    </div>

    <h2 class="section-heading fade-up"><span class="section-num">★</span> Solved Examples</h2>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Example 8.1</span>
        <h4>Find the area enclosed by $y = x^2$ and $y = x + 2$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Find intersection points: set $x^2 = x+2$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$x^2 - x - 2 = 0 \\implies (x-2)(x+1) = 0 \\implies x = -1,\\; x = 2$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Check which curve is on top on $[-1,2]$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">At $x=0$: $y = x+2 = 2 > 0 = x^2$. So the line $y = x+2$ is the upper curve.</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Set up and evaluate the integral</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$A = \\int_{-1}^{2}\\bigl[(x+2)-x^2\\bigr]\\,dx = \\left[\\frac{x^2}{2}+2x-\\frac{x^3}{3}\\right]_{-1}^{2}$$
          $$= \\left(2+4-\\frac{8}{3}\\right)-\\left(\\frac{1}{2}-2+\\frac{1}{3}\\right) = \\frac{10}{3}+\\frac{7}{6} = \\frac{9}{2} \\quad\\checkmark$$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Example 8.2</span>
        <h4>Find the volume when $y = \\sqrt{x}$ on $[0,4]$ is rotated about the $x$-axis (Disk method)</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Write the Disk formula; the radius at position $x$ is $f(x) = \\sqrt{x}$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$V = \\pi\\int_0^4 [f(x)]^2\\,dx = \\pi\\int_0^4 x\\,dx$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Integrate</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$= \\pi\\left[\\frac{x^2}{2}\\right]_0^4 = \\pi\\cdot\\frac{16}{2} = 8\\pi \\quad\\checkmark$$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Example 8.3</span>
        <h4>Use a Riemann sum (right endpoints, $n=4$) to approximate $\\displaystyle\\int_0^2 x^2\\,dx$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Compute $\\Delta x$ and the right endpoints</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\Delta x = \\frac{2-0}{4} = 0.5, \\qquad x_i = 0.5,\; 1,\; 1.5,\; 2$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Evaluate $f(x_i) = x_i^2$ and sum</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$R_4 = 0.5\\bigl[f(0.5)+f(1)+f(1.5)+f(2)\\bigr] = 0.5\\bigl[0.25+1+2.25+4\\bigr] = 0.5\\times 7.5 = 3.75$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Compare with the exact value</div><div class="step-chevron">▶</div></div>
          <div class="step-body">Exact: $\\int_0^2 x^2\,dx = \\bigl[x^3/3\\bigr]_0^2 = 8/3 \\approx 2.667$. The right-endpoint sum $3.75$ overestimates because $x^2$ is increasing. $\\checkmark$</div>
        </div>
      </div>
    </div>
  `,

  9: () => `
    <h2 id="ch9-sec1" class="section-heading fade-up"><span class="section-num">9.1</span> Inverse Trig, Exponential and Logarithmic Integrals</h2>

    <h3 id="ch9-sec1-1" class="section-heading fade-up"><span class="section-num">9.1.1</span> Completing the Square</h3>
    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Algebraic Technique</div>
      <div class="card-title">Completing the Square for Integrals</div>
      <p>Transform quadratic expressions $ax^2 + bx + c$ into standard forms $(u^2 \\pm a^2)$ or $(a^2 - u^2)$ to use inverse trig formulas:</p>
      <div class="math-block">$$\\int \\frac{dx}{x^2 + bx + c} = \\int \\frac{dx}{\\left(x + \\dfrac{b}{2}\\right)^2 + \\left(c - \\dfrac{b^2}{4}\\right)}$$</div>
      <p>Common target formulas after completing the square:</p>
      <div class="math-block">$$\\int \\frac{du}{a^2 + u^2} = \\frac{1}{a} \\tan^{-1}\\!\\left(\\frac{u}{a}\\right) + C \\qquad \\int \\frac{du}{\\sqrt{a^2 - u^2}} = \\sin^{-1}\\!\\left(\\frac{u}{a}\\right) + C$$</div>
    </div>

    <h3 id="ch9-sec1-2" class="section-heading fade-up"><span class="section-num">9.1.2</span> Exponential and Logarithmic Integrals</h3>
    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Essential Integration Rules</div>
      <div class="math-block">$$\\int a^x \\, dx = \\frac{a^x}{\\ln a} + C \\qquad \\int \\frac{1}{x} \\, dx = \\ln|x| + C$$</div>
      <div class="math-block">$$\\int \\tan x \\, dx = \\ln|\\sec x| + C = -\\ln|\\cos x| + C$$</div>
      <div class="math-block">$$\\int \\sec x \\, dx = \\ln|\\sec x + \\tan x| + C$$</div>
    </div>

    <h2 id="ch9-sec2" class="section-heading fade-up"><span class="section-num">9.2</span> Integration by Parts (IBP)</h2>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Theorem</div>
      <div class="math-block">$$\\int u\\,dv = uv - \\int v\\,du$$</div>
    </div>

    <div class="content-card card-memory fade-up">
      <div class="card-badge">${Icons.brain} LIATE Rule</div>
      <div class="card-title">How to choose $u$</div>
      <p>Choose $u$ as the first type that appears in this order:</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">
        ${[['L','Logarithms','#3b82f6'],['I','Inverse trig','#8b5cf6'],['A','Algebraic','#10b981'],['T','Trigonometric','#f59e0b'],['E','Exponential','#ef4444']].map(([l,n,c]) =>
          `<div style="background:${c}18;border:1.5px solid ${c};border-radius:9px;padding:8px 14px;text-align:center;flex:1;min-width:80px">
            <div style="font-size:1.4rem;font-weight:800;color:${c}">${l}</div>
            <div style="font-size:.72rem;font-weight:600;color:var(--text-2)">${n}</div>
          </div>`).join('')}
      </div>
      <p style="margin-top:12px;font-size:.85rem">$dv$ is then everything else (usually the exponential or trig part).</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 9.2.1</span>
        <h4>Evaluate $\\displaystyle\\int x e^x\\,dx$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Choose $u$ and $dv$ (LIATE: Algebraic before Exponential)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$u = x \\quad dv = e^x\\,dx \\implies du = dx,\\quad v = e^x$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Apply the IBP formula</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int xe^x\\,dx = xe^x - \\int e^x\\,dx$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Integrate the remainder</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$= xe^x - e^x + C = e^x(x-1) + C$$</div>
        </div>
      </div>
    </div>

    <h2 id="ch9-sec3" class="section-heading fade-up"><span class="section-num">9.3</span> Trigonometric Substitutions</h2>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Three Substitutions</div>
      <div class="math-block">$$\\sqrt{a^2 - x^2} \\implies x = a\\sin\\theta, \\quad\\sqrt{a^2-x^2} = a\\cos\\theta$$</div>
      <div class="math-block">$$\\sqrt{a^2 + x^2} \\implies x = a\\tan\\theta, \\quad\\sqrt{a^2+x^2} = a\\sec\\theta$$</div>
      <div class="math-block">$$\\sqrt{x^2 - a^2} \\implies x = a\\sec\\theta, \\quad\\sqrt{x^2-a^2} = a\\tan\\theta$$</div>
    </div>

    <div class="decision-tree fade-up">
      <h3>${Icons.layers} Decision Tree: Which Technique?</h3>
      <p style="font-size:.82rem;color:var(--text-2);margin-bottom:16px">Click to navigate to the right integration technique.</p>
      <div id="dt-root">
        <div class="dt-node" data-next="dt-rational">Is it a rational function (polynomial/polynomial)?</div>
        <div class="dt-node" data-next="dt-sqrt">Does it contain $\\sqrt{a^2 \\pm x^2}$ or $\\sqrt{x^2 - a^2}$?</div>
        <div class="dt-node" data-next="dt-product">Is it a product of two different types (e.g. $xe^x$, $x\\sin x$)?</div>
        <div class="dt-node" data-next="dt-trig">Is it powers of sin/cos or products of trig functions?</div>
        <div class="dt-node" data-next="dt-sub">Can you spot an inner function and its derivative?</div>
      </div>
      <div class="dt-result" id="dt-rational">→ <strong>Partial Fraction Decomposition</strong> (§9.5)</div>
      <div class="dt-result" id="dt-sqrt">→ <strong>Trigonometric Substitution</strong> (§9.3)</div>
      <div class="dt-result" id="dt-product">→ <strong>Integration by Parts</strong> — use LIATE (§9.2)</div>
      <div class="dt-result" id="dt-trig">→ <strong>Trig Identities / Reduction Formulas</strong> (§9.4)</div>
      <div class="dt-result" id="dt-sub">→ <strong>$u$-Substitution</strong> — set $u = $ inner function</div>
    </div>

    
    <h2 id="ch9-sec4" class="section-heading fade-up"><span class="section-num">9.4</span> Trigonometric Integrals</h2>

    <h3 id="ch9-sec4-1" class="section-heading fade-up"><span class="section-num">9.4.1</span> Integrals Involving sin(kx) and cos(kx) with k ≠ 0</h3>
    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Rule — Linear Arguments</div>
      <div class="math-block">$$\\int \\sin(kx)\\,dx = -\\frac{1}{k}\\cos(kx) + C \\qquad \\int \\cos(kx)\\,dx = \\frac{1}{k}\\sin(kx) + C \\quad (k \\neq 0)$$</div>
    </div>

    <h3 id="ch9-sec4-2" class="section-heading fade-up"><span class="section-num">9.4.2</span> Powers of sin(x) and Powers of cos(x)</h3>
    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Integrating Powers of Sine and Cosine</div>
      <ul>
        <li><strong>Odd power $\\sin^n x$ or $\\cos^n x$:</strong> Save one factor (e.g. $\\sin x\\,dx$) for $du$, convert remaining even power using $\\sin^2 x = 1 - \\cos^2 x$ or $\\cos^2 x = 1 - \\sin^2 x$.</li>
        <li><strong>Even power $\\sin^n x$ or $\\cos^n x$:</strong> Use half-angle identity reduction:
          <div class="math-block">$$\\sin^2 x = \\frac{1 - \\cos(2x)}{2} \\qquad \\cos^2 x = \\frac{1 + \\cos(2x)}{2}$$</div>
        </li>
      </ul>
    </div>

    <h3 id="ch9-sec4-3" class="section-heading fade-up"><span class="section-num">9.4.3</span> Products of Powers of sin(x) and Powers of cos(x)</h3>
    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Guidelines for $\\int \\sin^m x \\cos^n x \\, dx$</div>
      <ol>
        <li>If power of $\\cos x$ is <strong>odd</strong>: save $\\cos x\\,dx$, convert rest via $\\cos^{2} x = 1-\\sin^2 x$, sub $u = \\sin x$.</li>
        <li>If power of $\\sin x$ is <strong>odd</strong>: save $\\sin x\\,dx$, convert rest via $\\sin^{2} x = 1-\\cos^2 x$, sub $u = \\cos x$.</li>
        <li>If <strong>both</strong> even: reduce using half-angle identities $\\sin^2 x = \\frac{1-\\cos 2x}{2}$, $\\cos^2 x = \\frac{1+\\cos 2x}{2}$.</li>
      </ol>
    </div>

    <h3 id="ch9-sec4-4" class="section-heading fade-up"><span class="section-num">9.4.4</span> Products of sin and cos with Different Arguments</h3>
    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Product-to-Sum Identities</div>
      <div class="math-block">$$\\sin A \\cos B = \\frac{1}{2}\\Big[\\sin(A-B) + \\sin(A+B)\\Big]$$</div>
      <div class="math-block">$$\\sin A \\sin B = \\frac{1}{2}\\Big[\\cos(A-B) - \\cos(A+B)\\Big]$$</div>
      <div class="math-block">$$\\cos A \\cos B = \\frac{1}{2}\\Big[\\cos(A-B) + \\cos(A+B)\\Big]$$</div>
    </div>

    <h3 id="ch9-sec4-5" class="section-heading fade-up"><span class="section-num">9.4.5</span> Powers of tan(x) and cot(x)</h3>
    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Powers of Tan and Cot</div>
      <p>Use identity $\\tan^2 x = \\sec^2 x - 1$ or $\\cot^2 x = \\csc^2 x - 1$ iteratively:</p>
      <div class="math-block">$$\\int \\tan^n x \\, dx = \\int \\tan^{n-2} x (\\sec^2 x - 1) \\, dx = \\frac{\\tan^{n-1} x}{n-1} - \\int \\tan^{n-2} x \\, dx$$</div>
    </div>

    <h2 id="ch9-sec5" class="section-heading fade-up"><span class="section-num">9.5</span> Partial Fraction Decomposition</h2>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Method</div>
      <div class="card-title">Steps for Partial Fractions</div>
      <div style="display:grid;gap:10px;margin-top:12px">
        ${[
          ['1','Check degree','If $\\deg(P) \\geq \\deg(Q)$, perform polynomial long division first.'],
          ['2','Factor denominator','Completely factor $Q(x)$ into linear and irreducible quadratic factors.'],
          ['3','Set up decomposition','Write the sum of partial fractions: $\\frac{A}{x-r} + \\frac{Bx+C}{x^2+bx+c} + \\cdots$'],
          ['4','Multiply through','Clear denominators and solve for constants $A, B, C, \\ldots$ by equating coefficients or substituting roots.'],
          ['5','Integrate each piece','Each piece integrates to $A\\ln|x-r|$ or arctan or $\\ln|\\cdot|$ form.'],
        ].map(([n,t,d]) => `
          <div style="display:flex;gap:12px;align-items:flex-start;background:var(--surface-2);padding:12px;border-radius:8px">
            <div style="width:26px;height:26px;background:var(--blue);border-radius:50%;color:#fff;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:700;flex-shrink:0">${n}</div>
            <div><strong style="font-size:.88rem">${t}</strong><br><span style="font-size:.83rem;color:var(--text-2)">${d}</span></div>
          </div>`).join('')}
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 9.5.1</span>
        <h4>Evaluate $\\displaystyle\\int \\frac{x}{(x-1)(x+2)}\\,dx$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Set up partial fractions</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\frac{x}{(x-1)(x+2)} = \\frac{A}{x-1} + \\frac{B}{x+2}$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Solve for A and B</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            $$x = A(x+2) + B(x-1)$$
            Let $x = 1 \\implies 1 = 3A \\implies A = 1/3$<br>
            Let $x = -2 \\implies -2 = -3B \\implies B = 2/3$
          </div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Integrate</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int \\left(\\frac{1/3}{x-1} + \\frac{2/3}{x+2}\\right)dx = \\frac{1}{3}\\ln|x-1| + \\frac{2}{3}\\ln|x+2| + C$$</div>
        </div>
      </div>
    </div>

    <h2 class="section-heading fade-up"><span class="section-num">★</span> Solved Examples</h2>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Example 9.1</span>
        <h4>Evaluate $\\displaystyle\\int x^2\\cos x\\,dx$ using IBP twice</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">First IBP: $u = x^2$, $dv = \\cos x\\,dx$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$du = 2x\\,dx,\\quad v = \\sin x$$
          $$\\int x^2\\cos x\\,dx = x^2\\sin x - \\int 2x\\sin x\\,dx$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Second IBP on $\\int 2x\\sin x\\,dx$: $u = 2x$, $dv = \\sin x\\,dx$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$du = 2\\,dx,\\quad v = -\\cos x$$
          $$\\int 2x\\sin x\\,dx = -2x\\cos x + \\int 2\\cos x\\,dx = -2x\\cos x + 2\\sin x$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Combine</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int x^2\\cos x\\,dx = x^2\\sin x - (-2x\\cos x + 2\\sin x) + C$$
          $$= x^2\\sin x + 2x\\cos x - 2\\sin x + C \\quad\\checkmark$$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Example 9.2</span>
        <h4>Evaluate $\\displaystyle\\int \\frac{x^2}{\\sqrt{4-x^2}}\\,dx$ using trig substitution</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Sub $x = 2\\sin\\theta$, $dx = 2\\cos\\theta\,d\\theta$, $\\sqrt{4-x^2} = 2\\cos\\theta$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int \\frac{4\\sin^2\\theta}{2\\cos\\theta}\\cdot 2\\cos\\theta\\,d\\theta = 4\\int\\sin^2\\theta\\,d\\theta$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Reduce using $\\sin^2\\theta = \\tfrac{1-\\cos 2\\theta}{2}$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$= 4\\int\\frac{1-\\cos 2\\theta}{2}\\,d\\theta = 2\\theta - \\sin 2\\theta + C = 2\\theta - 2\\sin\\theta\\cos\\theta + C$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Back-substitute: $\\theta = \\sin^{-1}(x/2)$, $\\sin\\theta = x/2$, $\\cos\\theta = \\sqrt{4-x^2}/2$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$= 2\\sin^{-1}\\!\\left(\\frac{x}{2}\\right) - 2\\cdot\\frac{x}{2}\\cdot\\frac{\\sqrt{4-x^2}}{2} + C = 2\\sin^{-1}\\!\\left(\\frac{x}{2}\\right) - \\frac{x\\sqrt{4-x^2}}{2} + C \\quad\\checkmark$$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Example 9.3</span>
        <h4>Evaluate $\\displaystyle\\int \\sin^3 x\\cos^2 x\\,dx$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Odd power of $\\sin x$: peel off one factor $\\sin x$ and convert the rest</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\sin^3 x = \\sin^2 x\\cdot\\sin x = (1-\\cos^2 x)\\sin x$$
          $$\\int(1-\\cos^2 x)\\cos^2 x\\sin x\\,dx$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Substitute $u = \\cos x$, $du = -\\sin x\\,dx$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$= -\\int(1-u^2)u^2\\,du = -\\int(u^2-u^4)\\,du$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Integrate and back-substitute</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$= -\\frac{u^3}{3} + \\frac{u^5}{5} + C = -\\frac{\\cos^3 x}{3} + \\frac{\\cos^5 x}{5} + C \\quad\\checkmark$$</div>
        </div>
      </div>
    </div>
  `,

  10: () => `
    <h2 id="ch10-sec1" class="section-heading fade-up"><span class="section-num">10.1</span> Type I: Infinite Interval of Integration</h2>

    <div class="prose fade-up">
      <p>An improper integral arises when either the interval of integration is unbounded, or the integrand is unbounded within the interval. In both cases we replace the problematic limit with a variable and take the limit.</p>
    </div>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Definition — Type I (Infinite Interval)</div>
      <div class="math-block">$$\\int_a^\\infty f(x)\\,dx = \\lim_{t\\to\\infty}\\int_a^t f(x)\\,dx$$</div>
      <div class="math-block">$$\\int_{-\\infty}^b f(x)\\,dx = \\lim_{t\\to-\\infty}\\int_t^b f(x)\\,dx$$</div>
      <p>The integral <strong>converges</strong> if the limit exists and is finite; otherwise it <strong>diverges</strong>.</p>
    </div>

    <div class="viz-card fade-up">
      <h3>${Icons.barChart} Interactive: Convergence of $\\int_1^\\infty x^{-p}\\,dx$</h3>
      <p>Slide the value of $p$. The integral converges (green) for $p > 1$ and diverges (red) for $p \\leq 1$.</p>
      <div class="viz-plot" id="improper-plot" style="height:280px"></div>
      <div class="viz-controls">
        <div class="viz-control-group">
          <label>p =</label>
          <input type="range" id="improper-plot-p" min="0.3" max="3" step="0.1" value="2">
          <span id="improper-plot-pval">2.0</span>
        </div>
      </div>
    </div>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} $p$-integral Test</div>
      <div class="math-block">$$\\int_1^\\infty \\frac{1}{x^p}\\,dx \\begin{cases} = \\dfrac{1}{p-1} & \\text{if } p > 1 \\quad (\\text{converges}) \\\\ = \\infty & \\text{if } p \\leq 1 \\quad (\\text{diverges}) \\end{cases}$$</div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 10.1.1</span>
        <h4>Evaluate $\\displaystyle\\int_1^\\infty \\frac{1}{x^2}\\,dx$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Replace $\\infty$ with $t$ and integrate</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\lim_{t\\to\\infty}\\int_1^t x^{-2}\\,dx = \\lim_{t\\to\\infty}\\left[-\\frac{1}{x}\\right]_1^t$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Evaluate at bounds</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$= \\lim_{t\\to\\infty}\\left(-\\frac{1}{t} + 1\\right) = 0 + 1 = 1$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Conclusion</div><div class="step-chevron">▶</div></div>
          <div class="step-body">The integral <strong>converges</strong> to $1$. ✓</div>
        </div>
      </div>
    </div>

    <h2 id="ch10-sec2" class="section-heading fade-up"><span class="section-num">10.2</span> Type II: Infinite Discontinuities</h2>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Definition — Type II (Discontinuous Integrand)</div>
      <p>If $f$ has a vertical asymptote at $x = c$ where $a \\leq c \\leq b$:</p>
      <div class="math-block">$$\\int_a^b f(x)\\,dx = \\lim_{t\\to c^-}\\int_a^t f(x)\\,dx + \\lim_{t\\to c^+}\\int_t^b f(x)\\,dx$$</div>
    </div>

    <h2 class="section-heading fade-up"><span class="section-num">★</span> Solved Examples</h2>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Example 10.1</span>
        <h4>Evaluate $\\displaystyle\\int_0^\\infty e^{-3x}\\,dx$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Replace $\\infty$ with $t$ and integrate</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\lim_{t\\to\\infty}\\int_0^t e^{-3x}\\,dx = \\lim_{t\\to\\infty}\\left[-\\frac{e^{-3x}}{3}\\right]_0^t$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Evaluate and take the limit</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$= \\lim_{t\\to\\infty}\\left(-\\frac{e^{-3t}}{3}+\\frac{1}{3}\\right) = 0 + \\frac{1}{3} = \\frac{1}{3} \\quad\\checkmark$$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Example 10.2</span>
        <h4>Determine whether $\\displaystyle\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx$ converges (Type II)</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">There is a discontinuity at $x=0$; replace with $t\\to 0^+$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\lim_{t\\to 0^+}\\int_t^1 x^{-1/2}\\,dx = \\lim_{t\\to 0^+}\\left[2\\sqrt{x}\\right]_t^1$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Evaluate</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$= \\lim_{t\\to 0^+}(2 - 2\\sqrt{t}) = 2 - 0 = 2$$
          The integral <strong>converges</strong> to $2$. Note: $p = 1/2 < 1$, consistent with convergence for Type II at $x=0$. $\\checkmark$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Example 10.3</span>
        <h4>Show that $\\displaystyle\\int_0^\\infty \\frac{x}{(1+x^2)^2}\\,dx$ converges and find its value</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">$u$-substitute: let $u = 1+x^2$, $du = 2x\\,dx$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\lim_{t\\to\\infty}\\int_0^t \\frac{x}{(1+x^2)^2}\\,dx = \\lim_{t\\to\\infty}\\frac{1}{2}\\int_1^{1+t^2}u^{-2}\\,du$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Integrate and take the limit</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$= \\lim_{t\\to\\infty}\\frac{1}{2}\\left[-\\frac{1}{u}\\right]_1^{1+t^2} = \\frac{1}{2}\\lim_{t\\to\\infty}\\left(1 - \\frac{1}{1+t^2}\\right) = \\frac{1}{2} \\quad\\checkmark$$</div>
        </div>
      </div>
    </div>
  `,

  11: () => `
    <h2 id="ch11-sec1" class="section-heading fade-up"><span class="section-num">11.1</span> Sequences</h2>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Definition — Sequence</div>
      <p>A <strong>sequence</strong> is an ordered list of numbers $\\{a_1, a_2, a_3, \\ldots\\} = \\{a_n\\}_{n=1}^\\infty$. It <strong>converges</strong> to $L$ if $\\lim_{n\\to\\infty} a_n = L$ (finite). Otherwise it diverges.</p>
    </div>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Squeeze Theorem for Sequences</div>
      <p>If $a_n \\leq b_n \\leq c_n$ for all $n$ and $\\lim a_n = \\lim c_n = L$, then $\\lim b_n = L$.</p>
    </div>

    <h2 id="ch11-sec2" class="section-heading fade-up"><span class="section-num">11.2</span> Series</h2>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Definition — Infinite Series</div>
      <div class="card-title">Infinite Series & Partial Sums</div>
      <div class="math-block">$$\\sum_{n=1}^\\infty a_n = \\lim_{N\\to\\infty} S_N \\quad \\text{where } S_N = \\sum_{n=1}^N a_n$$</div>
      <p>The series converges if and only if the sequence of partial sums $\\{S_N\\}$ converges.</p>
    </div>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Geometric Series</div>
      <div class="math-block">$$\\sum_{n=0}^\\infty ar^n = \\frac{a}{1-r} \\quad \\text{if } |r| < 1 \\qquad \\text{(diverges if } |r| \\geq 1\\text{)}$$</div>
    </div>

    <div class="viz-card fade-up">
      <h3>${Icons.trendingUp} Interactive: Geometric Series Convergence</h3>
      <p>Adjust the common ratio $r$ and watch partial sums $S_N$ converge or diverge.</p>
      <div class="viz-plot" id="series-plot" style="height:280px"></div>
      <div class="viz-controls">
        <div class="viz-control-group">
          <label>r =</label>
          <input type="range" id="series-plot-r" min="-0.99" max="0.99" step="0.01" value="0.5">
          <span id="series-plot-rval">0.50</span>
        </div>
      </div>
    </div>

    <h2 id="ch11-sec3" class="section-heading fade-up"><span class="section-num">11.3</span> Convergence Tests</h2>
    <h3 id="ch11-sec3-1" class="section-heading fade-up"><span class="section-num">11.3.1</span> The Integral Test</h3>
    
    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Theorem — The Integral Test</div>
      <p>Suppose $f$ is a continuous, positive, decreasing function on $[1, \\infty)$ and let $a_n = f(n)$:</p>
      <div class="math-block">$$\\sum_{n=1}^\\infty a_n \\text{ converges if and only if } \\int_1^\\infty f(x)\\,dx \\text{ converges}$$</div>
      <div class="card-badge">${Icons.target} Remainder Estimate</div>
      <div class="math-block">$$\\int_{n+1}^\\infty f(x)\\,dx \\leq R_n \\leq \\int_n^\\infty f(x)\\,dx \\quad \\text{where } R_n = S - S_n$$</div>
    </div>
    <h3 id="ch11-sec3-2" class="section-heading fade-up"><span class="section-num">11.3.2</span> The Comparison Test</h3>
    
    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Comparison Tests</div>
      <p><strong>1. Direct Comparison Test:</strong> If $0 \\leq a_n \\leq b_n$ for all $n$:</p>
      <ul>
        <li>If $\\sum b_n$ converges $\\implies \\sum a_n$ converges.</li>
        <li>If $\\sum a_n$ diverges $\\implies \\sum b_n$ diverges.</li>
      </ul>
      <p><strong>2. Limit Comparison Test:</strong> If $a_n > 0, b_n > 0$ and $\\displaystyle\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = L$ where $0 < L < \\infty$:</p>
      <p>Both series $\\sum a_n$ and $\\sum b_n$ either both converge or both diverge.</p>
    </div>
    <h3 id="ch11-sec3-3" class="section-heading fade-up"><span class="section-num">11.3.3</span> Alternating Series</h3>
    
    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Theorem — Alternating Series Test (Leibniz)</div>
      <p>The alternating series $\\sum_{n=1}^\\infty (-1)^{n-1} b_n$ ($b_n > 0$) converges if:</p>
      <ol>
        <li>$b_{n+1} \\leq b_n$ for all $n$ (decreasing)</li>
        <li>$\\displaystyle\\lim_{n \\to \\infty} b_n = 0$</li>
      </ol>
      <p><strong>Estimation Theorem:</strong> $|R_n| = |S - S_n| \\leq b_{n+1}$.</p>
    </div>
    <h3 id="ch11-sec3-4" class="section-heading fade-up"><span class="section-num">11.3.4</span> Absolute Convergence and the Ratio and Root Tests</h3>
    
    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Ratio and Root Tests</div>
      <p>Let $L = \\displaystyle\\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|$ (Ratio Test) or $L = \\displaystyle\\lim_{n \\to \\infty} \\sqrt[n]{|a_n|}$ (Root Test):</p>
      <ul>
        <li><strong>$L < 1$:</strong> Series is <em>absolutely convergent</em>.</li>
        <li><strong>$L > 1$:</strong> Series is <em>divergent</em>.</li>
        <li><strong>$L = 1$:</strong> Test is <em>inconclusive</em> (use another test).</li>
      </ul>
    </div>
    <h3 id="ch11-sec3-5" class="section-heading fade-up"><span class="section-num">11.3.5</span> Strategy for Testing Series</h3>
    
    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Strategy for Testing Series</div>
      <ol>
        <li><strong>Test for Divergence:</strong> If $\\lim a_n \\neq 0$, diverges immediately!</li>
        <li><strong>Special Forms:</strong> Is it a $p$-series $\\sum \\frac{1}{n^p}$ ($p>1$ conv) or Geometric $\\sum a r^n$ ($|r|<1$ conv)?</li>
        <li><strong>Polynomial Ratio:</strong> Use Limit Comparison with a $p$-series.</li>
        <li><strong>Factorials / Exponentials ($n!$, $a^n$):</strong> Use Ratio Test.</li>
        <li><strong>Powers of $n$ ($[f(n)]^n$):</strong> Use Root Test.</li>
        <li><strong>Alternating $(-1)^n$:</strong> Use Alternating Series Test.</li>
        <li><strong>Decreasing function $f(n)=a_n$:</strong> Use Integral Test.</li>
      </ol>
    </div>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Divergence Test</div>
      <p>If $\\lim_{n\\to\\infty} a_n \\neq 0$, then $\\sum a_n$ diverges. <em>Note: if the limit IS 0, the test is inconclusive (e.g., harmonic series).</em></p>
    </div>

    <div class="content-card card-exam fade-up">
      <div class="card-badge">${Icons.target} Exam Tip — Test Selection</div>
      <div style="display:grid;gap:8px;margin-top:8px;font-size:.85rem">
        <div style="background:var(--surface-2);border-left:3px solid var(--blue);border-radius:8px;padding:10px"><strong>Geometric or $p$-series:</strong> Recognise the form and apply directly.</div>
        <div style="background:var(--surface-2);border-left:3px solid var(--accent);border-radius:8px;padding:10px"><strong>Factorial or $n$-th power:</strong> Use <strong>Ratio Test</strong>.</div>
        <div style="background:var(--surface-2);border-left:3px solid var(--green);border-radius:8px;padding:10px"><strong>Alternating signs:</strong> Use <strong>Alternating Series Test</strong>.</div>
        <div style="background:var(--surface-2);border-left:3px solid var(--yellow);border-radius:8px;padding:10px"><strong>Looks like a known convergent series:</strong> Use <strong>Comparison or Limit Comparison</strong>.</div>
        <div style="background:var(--surface-2);border-left:3px solid var(--teal);border-radius:8px;padding:10px"><strong>Can integrate $f(x)$:</strong> Use <strong>Integral Test</strong>.</div>
      </div>
    </div>

    <h2 id="ch11-sec4" class="section-heading fade-up"><span class="section-num">11.4</span> Power Series</h2>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Definition — Power Series</div>
      <p>A series of the form:</p>
      <div class="math-block">$$\\sum_{n=0}^\\infty c_n(x-a)^n$$</div>
      <p>This is an infinite polynomial centered at $x=a$. It converges at $x=a$ always. To find the <strong>Radius of Convergence $R$</strong>, use the <strong>Ratio Test</strong> on the absolute value of the terms.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.4.1</span>
        <h4>Find the radius and interval of convergence of $\\sum_{n=1}^\\infty \\frac{(x-3)^n}{n}$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Apply the Ratio Test</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            $$\\lim_{n \\to \\infty} \\left| \\frac{(x-3)^{n+1}}{n+1} \\cdot \\frac{n}{(x-3)^n} \\right| = \\lim_{n \\to \\infty} \\frac{n}{n+1} |x-3| = |x-3|$$
            For convergence, we need $|x-3| < 1$. Thus, the radius of convergence is $R = 1$.
          </div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Find the interval endpoints</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            $|x-3| < 1 \\implies -1 < x-3 < 1 \\implies 2 < x < 4$.
          </div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Check the endpoints</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <ul style="margin-left: 20px; font-size: 0.9rem; color: var(--text-2);">
              <li>At $x=4$: $\\sum \\frac{1^n}{n} = \\sum \\frac{1}{n}$ (Harmonic series, diverges)</li>
              <li>At $x=2$: $\\sum \\frac{(-1)^n}{n}$ (Alternating harmonic series, converges)</li>
            </ul>
            <strong>Interval of Convergence: $[2, 4)$</strong>
          </div>
        </div>
      </div>
    </div>

    <h2 id="ch11-sec6" class="section-heading fade-up"><span class="section-num">11.6</span> Taylor & Maclaurin Series</h2>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Taylor Series</div>
      <div class="math-block">$$f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(a)}{n!}(x-a)^n$$</div>
      <p>When $a = 0$ this is the <strong>Maclaurin series</strong>.</p>
    </div>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Important Maclaurin Series</div>
      <div class="math-block">$$e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!} \\qquad \\sin x = \\sum_{n=0}^\\infty (-1)^n\\frac{x^{2n+1}}{(2n+1)!} \\qquad \\cos x = \\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n}}{(2n)!}$$</div>
      <div class="math-block">$$\\frac{1}{1-x} = \\sum_{n=0}^\\infty x^n,\\; |x|<1 \\qquad \\ln(1+x) = \\sum_{n=1}^\\infty (-1)^{n+1}\\frac{x^n}{n},\\; |x|<1$$</div>
    </div>

    <div class="viz-card fade-up">
      <h3>${Icons.refresh} Interactive: Taylor Approximation of sin x</h3>
      <p>Watch how adding more terms of the Taylor polynomial (dashed) converges to the true $\\sin x$ (solid red). Each term improves accuracy further from the origin.</p>
      <div class="viz-plot" id="taylor-plot" style="height:300px"></div>
      <div class="viz-controls">
        <div class="viz-control-group">
          <label>Degree (odd):</label>
          <input type="range" id="taylor-plot-deg" min="1" max="10" value="1">
          <span id="taylor-plot-degval">1</span>
        </div>
      </div>
    </div>

    <h2 class="section-heading fade-up"><span class="section-num">★</span> Solved Examples</h2>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Example 11.1</span>
        <h4>Test $\\displaystyle\\sum_{n=1}^\\infty \\frac{n^2}{2^n}$ for convergence using the Ratio Test</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Form the ratio $|a_{n+1}/a_n|$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{(n+1)^2}{2^{n+1}}\\cdot\\frac{2^n}{n^2} = \\frac{(n+1)^2}{2n^2}$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Take the limit as $n\\to\\infty$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$L = \\lim_{n\\to\\infty}\\frac{(n+1)^2}{2n^2} = \\lim_{n\\to\\infty}\\frac{n^2+2n+1}{2n^2} = \\frac{1}{2} < 1$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Conclusion</div><div class="step-chevron">▶</div></div>
          <div class="step-body">Since $L = 1/2 < 1$, the series <strong>converges absolutely</strong> by the Ratio Test. $\\checkmark$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Example 11.2</span>
        <h4>Find the Maclaurin series for $f(x) = e^{-x^2}$ and use it to evaluate $\\displaystyle\\int_0^1 e^{-x^2}\\,dx$ to 4 decimal places</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Start from the known series $e^u = \\sum_{n=0}^\\infty u^n/n!$; substitute $u = -x^2$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$e^{-x^2} = \\sum_{n=0}^\\infty \\frac{(-x^2)^n}{n!} = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{n!} = 1 - x^2 + \\frac{x^4}{2!} - \\frac{x^6}{3!} + \\cdots$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Integrate term by term on $[0,1]$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int_0^1 e^{-x^2}\\,dx = \\left[x - \\frac{x^3}{3} + \\frac{x^5}{10} - \\frac{x^7}{42} + \\frac{x^9}{216} - \\cdots\\right]_0^1$$
          $$= 1 - \\frac{1}{3} + \\frac{1}{10} - \\frac{1}{42} + \\frac{1}{216} - \\cdots$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Sum enough terms (alternating series — stop when term $< 0.00005$)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\approx 1 - 0.3333 + 0.1000 - 0.0238 + 0.0046 - 0.0007 \\approx 0.7468 \\quad\\checkmark$$
          (True value $\\approx 0.7468$)</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Example 11.3</span>
        <h4>Find the Taylor series of $\\ln(1+x)$ centered at $a=0$ and its radius of convergence</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Compute successive derivatives at $x=0$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$f(x) = \\ln(1+x),\; f(0)=0 \\qquad f'(x)=\\frac{1}{1+x},\; f'(0)=1$$
          $$f''(x) = -\\frac{1}{(1+x)^2},\; f''(0)=-1 \\qquad f^{(n)}(0) = (-1)^{n-1}(n-1)!$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Write the Taylor series</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\ln(1+x) = \\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n}x^n = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + \\cdots$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Find $R$ via Ratio Test</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$L = \\lim_{n\\to\\infty}\\left|\\frac{x^{n+1}}{n+1}\\cdot\\frac{n}{x^n}\\right| = |x| < 1 \\implies R = 1$$
          Checking endpoints: series converges at $x=-1$ (conditionally) and $x=1$ (alternating harmonic). Interval: $(-1,\\,1]$. $\\checkmark$</div>
        </div>
      </div>
    </div>
  `,

  12: () => `
    <div class="prose fade-up">
      <p>A <strong>differential equation</strong> (ODE) is an equation relating a function $y$ and its derivatives. We classify first-order ODEs by their structure and solve each type with a specific method.</p>
    </div>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Types of First-Order ODEs</div>
      <div style="display:grid;gap:8px;margin-top:10px">
        <div style="background:rgba(59,130,246,.07);border-radius:8px;padding:12px"><strong>Separable:</strong> $\\frac{dy}{dx} = f(x)g(y)$ — separate and integrate each side.</div>
        <div style="background:rgba(139,92,246,.07);border-radius:8px;padding:12px"><strong>Homogeneous:</strong> $\\frac{dy}{dx} = F(y/x)$ — substitute $v = y/x$.</div>
        <div style="background:rgba(16,185,129,.07);border-radius:8px;padding:12px"><strong>Linear:</strong> $y' + P(x)y = Q(x)$ — integrating factor $\\mu = e^{\\int P\\,dx}$.</div>
        <div style="background:rgba(245,158,11,.07);border-radius:8px;padding:12px"><strong>Exact:</strong> $M\\,dx + N\\,dy = 0$ where $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.</div>
      </div>
    </div>

    <div class="decision-tree fade-up">
      <h3>${Icons.layers} Decision Tree: Which ODE Method?</h3>
      <p style="font-size:.82rem;color:var(--text-2);margin-bottom:16px">Click a condition to identify the correct solution technique.</p>
      <div id="dt-ode-root">
        <div class="dt-node" data-next="dt-ode-sep">Can you write it as $\\frac{dy}{dx} = g(x)h(y)$?</div>
        <div class="dt-node" data-next="dt-ode-lin">Is it of the form $y' + P(x)y = Q(x)$?</div>
        <div class="dt-node" data-next="dt-ode-hom">Can every term be rewritten as a function of $(y/x)$?</div>
        <div class="dt-node" data-next="dt-ode-exact">Is it $M\\,dx + N\\,dy = 0$ with $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$?</div>
      </div>
      <div class="dt-result" id="dt-ode-sep">→ <strong>Separable ODE</strong> (§12.1): Separate variables $\\frac{dy}{h(y)} = g(x)dx$ and integrate.</div>
      <div class="dt-result" id="dt-ode-lin">→ <strong>Linear First-Order ODE</strong> (§12.3): Use Integrating Factor $\\mu(x) = e^{\\int P(x)dx}$.</div>
      <div class="dt-result" id="dt-ode-hom">→ <strong>Homogeneous ODE</strong> (§12.2): Substitute $v = y/x \\implies y = vx, \\frac{dy}{dx} = v + x\\frac{dv}{dx}$.</div>
      <div class="dt-result" id="dt-ode-exact">→ <strong>Exact ODE</strong> (§12.4): Find potential function $F(x,y)$ where $F_x = M, F_y = N$, solution is $F(x,y)=C$.</div>
    </div>

    <h2 id="ch12-sec1" class="section-heading fade-up"><span class="section-num">12.1</span> Separable ODEs</h2>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 12.1.1</span>
        <h4>Solve $\\dfrac{dy}{dx} = xy$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Separate the variables</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\frac{dy}{y} = x\\,dx$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Integrate both sides</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int\\frac{dy}{y} = \\int x\\,dx \\implies \\ln|y| = \\frac{x^2}{2} + C_1$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Solve for $y$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$y = e^{x^2/2 + C_1} = Ce^{x^2/2} \\quad (C = \\pm e^{C_1})$$</div>
        </div>
      </div>
    </div>

    <h2 id="ch12-sec2" class="section-heading fade-up"><span class="section-num">12.2</span> Homogeneous ODEs</h2>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Method — Substitution $v = y/x$</div>
      <p>If $\\frac{dy}{dx} = F\\left(\\frac{y}{x}\\right)$, then let $v = \\frac{y}{x}$, which means $y = vx$. Then $\\frac{dy}{dx} = v + x\\frac{dv}{dx}$.</p>
      <p>Substitute this in to get a <strong>separable</strong> ODE in terms of $v$ and $x$.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 12.2.4</span>
        <h4>Solve $(x^2+y^2)dx - x^2dy = 0$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Rewrite as $dy/dx$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            $$\\frac{dy}{dx} = \\frac{x^2+y^2}{x^2} = 1 + \\left(\\frac{y}{x}\\right)^2$$
            This is homogeneous since it depends only on $y/x$.
          </div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Substitute $y = vx$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            Since $\\frac{dy}{dx} = v + x\\frac{dv}{dx}$, we have:
            $$v + x\\frac{dv}{dx} = 1 + v^2 \\implies x\\frac{dv}{dx} = 1 + v^2 - v$$
          </div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Separate and Integrate</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            $$\\int \\frac{dv}{1 - v + v^2} = \\int \\frac{dx}{x}$$
            Complete the square on the left: $(v - 1/2)^2 + 3/4$.
            $$\\frac{2}{\\sqrt{3}}\\arctan\\left(\\frac{2v-1}{\\sqrt{3}}\\right) = \\ln|x| + C$$
            Substitute back $v = y/x$ to get the implicit solution.
          </div>
        </div>
      </div>
    </div>

    <h2 id="ch12-sec3" class="section-heading fade-up"><span class="section-num">12.3</span> Linear First-Order ODEs</h2>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Integrating Factor Method</div>
      <p>For $y' + P(x)y = Q(x)$:</p>
      <div class="math-block">$$\\mu(x) = e^{\\int P(x)\\,dx}$$</div>
      <div class="math-block">$$\\text{Solution: } \\quad y = \\frac{1}{\\mu(x)}\\int \\mu(x)Q(x)\\,dx$$</div>
      <p><em>Why it works</em>: Multiplying through by $\\mu$ makes the left side a perfect derivative: $\\frac{d}{dx}[\\mu y] = \\mu Q$.</p>
    </div>

    <div class="viz-card fade-up">
      <h3>${Icons.target} Interactive: Direction Fields</h3>
      <p id="dirfield-plot-desc">Pick an ODE from Chapter 12 below. Each arrow shows the slope of a solution curve at that point; the red curve is one particular solution.</p>
      <div class="viz-plot" id="dirfield-plot" style="height:300px"></div>
      <div class="viz-controls">
        <div class="viz-control-group">
          <label>ODE:</label>
          <select id="dirfield-plot-ode">
            <option value="linear1">dy/dx = x − y</option>
            <option value="separable">dy/dx = xy (separable)</option>
            <option value="ivp">dy/dx = x／y, y(0) = 3 (IVP)</option>
            <option value="linear2">y′ + 2y = 4x (integrating factor)</option>
          </select>
        </div>
      </div>
    </div>

    <div class="content-card card-exam fade-up">
      <div class="card-badge">${Icons.target} Exam Tip</div>
      <div class="card-title">What to check first</div>
      <p>When given any ODE:</p>
      <ol style="font-size:.88rem;padding-left:20px;color:var(--text-2)">
        <li style="margin-bottom:6px">Can I <strong>separate variables</strong>? → fastest method</li>
        <li style="margin-bottom:6px">Is it in the form $y' + P(x)y = Q(x)$? → <strong>integrating factor</strong></li>
        <li style="margin-bottom:6px">Is $M_y = N_x$? → <strong>exact equation</strong></li>
        <li>Does $dy/dx = F(y/x)$? → <strong>homogeneous</strong>, set $v = y/x$</li>
      </ol>
    </div>

    <h2 id="ch12-sec4" class="section-heading fade-up"><span class="section-num">12.4</span> Exact Differential Equations</h2>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Theorem — Exactness</div>
      <p>$M(x,y)\\,dx + N(x,y)\\,dy = 0$ is exact if $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.</p>
      <p>To solve, integrate $M$ with respect to $x$ (adding $g(y)$), and set its $y$-derivative to $N$ to find $g(y)$. The solution is $F(x,y) = C$.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 12.4.1</span>
        <h4>Solve $(2xy)dx + (x^2 - 1)dy = 0$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Check for Exactness</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            $M = 2xy \\implies M_y = 2x$<br>
            $N = x^2 - 1 \\implies N_x = 2x$<br>
            Since $M_y = N_x$, the equation is exact.
          </div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Integrate $M$ with respect to $x$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            $$F(x,y) = \\int 2xy \\,dx = x^2y + g(y)$$
          </div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Differentiate w.r.t $y$ and set to $N$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            $$F_y = x^2 + g'(y)$$
            Set $F_y = N$: $x^2 + g'(y) = x^2 - 1 \\implies g'(y) = -1 \\implies g(y) = -y$.
          </div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">4</div><div class="step-label">Write final solution</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            $$F(x,y) = x^2y - y = C$$
          </div>
        </div>
      </div>
    </div>

    <h2 class="section-heading fade-up"><span class="section-num">★</span> Solved Examples</h2>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Example 12.1</span>
        <h4>Solve the IVP: $\\dfrac{dy}{dx} = \\dfrac{x}{y},\; y(0) = 3$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Separate variables</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$y\\,dy = x\\,dx$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Integrate both sides</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\frac{y^2}{2} = \\frac{x^2}{2} + C_1 \\implies y^2 = x^2 + C$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Apply $y(0) = 3$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$9 = 0 + C \\implies C = 9$$
          $$\\boxed{y = \\sqrt{x^2+9}} \\quad\\checkmark$$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Example 12.2</span>
        <h4>Solve $y' + 2y = 4x$ using an integrating factor</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Identify $P(x) = 2$ and compute $\\mu = e^{\\int 2\\,dx} = e^{2x}$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">Multiply both sides by $e^{2x}$:
          $$e^{2x}y' + 2e^{2x}y = 4xe^{2x} \\implies \\frac{d}{dx}\\left[e^{2x}y\\right] = 4xe^{2x}$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Integrate both sides (IBP for $\\int 4xe^{2x}\\,dx$)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int 4xe^{2x}\\,dx = 2xe^{2x} - e^{2x} + C$$
          $$e^{2x}y = 2xe^{2x} - e^{2x} + C$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Divide by $e^{2x}$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\boxed{y = 2x - 1 + Ce^{-2x}} \\quad\\checkmark$$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Example 12.3</span>
        <h4>Solve $(3x^2y + 2xy^2)\\,dx + (x^3 + 2x^2y)\\,dy = 0$ (Exact ODE)</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Check exactness: $M = 3x^2y+2xy^2$, $N = x^3+2x^2y$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$M_y = 3x^2 + 4xy \\qquad N_x = 3x^2 + 4xy \\implies M_y = N_x \\;\\checkmark\\text{ (exact)}$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Integrate $M$ w.r.t. $x$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$F(x,y) = \\int (3x^2y + 2xy^2)\\,dx = x^3y + x^2y^2 + g(y)$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Set $F_y = N$ to find $g(y)$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$F_y = x^3 + 2x^2y + g'(y) = x^3 + 2x^2y \\implies g'(y) = 0 \\implies g(y) = \\text{const}$$
          $$\\boxed{x^3y + x^2y^2 = C} \\quad\\checkmark$$</div>
        </div>
      </div>
    </div>
  `,
};

// ─── Content renderer ─────────────────────────────────────────────────────
const ContentRenderer = {
  render(chapter) {
    const area = document.getElementById('content-area');
    if (!area) return;

    const num = chapter.number;
    const quizForChapter = typeof quizzesData !== 'undefined'
      ? quizzesData.find(q => q.chapter === num) : null;

    // Learning outcomes — from chaptersData
    const outcomesRaw = {
      7:  ['Know definitions of sinh, cosh, tanh, sech, coth, cosech and their graphs',
           'Know hyperbolic identities and their derivations',
           'Know derivatives (and proofs) of hyperbolic functions',
           'Know inverse hyperbolic functions and their sketches',
           'Express inverse hyperbolic functions in terms of natural logarithms',
           'Know derivatives of inverse hyperbolic functions and use in integration',
           'Solve examinable tutorial problems'],
      8:  ['Understand Riemann Sums and their application to areas',
           'Use Σ-notation and summation formulæ with Riemann Sums',
           'Know the definition of the definite integral',
           'Compute areas between curves (x-axis and y-axis)',
           'Apply the Disk and Washer methods for volumes of revolution',
           'Use the Definite Integral as a function (FTC Part 1)'],
      9:  ['Use inverse trig, exponential and logarithmic integrals',
           'Apply integration by parts (IBP) including reduction formulas',
           'Perform trigonometric substitutions',
           'Evaluate trigonometric integrals (powers of sin/cos, tan/cot)',
           'Decompose rational functions via partial fractions and integrate'],
      10: ['Define and evaluate Type I improper integrals (infinite intervals)',
           'Define and evaluate Type II improper integrals (discontinuous integrands)',
           'Apply convergence tests to improper integrals'],
      11: ['Determine convergence of sequences',
           'Compute partial sums and determine convergence of series',
           'Apply the Integral, Comparison, Alternating Series, Ratio and Root Tests',
           'Find radius and interval of convergence for power series',
           'Represent functions as power series',
           'Derive Taylor and Maclaurin series and estimate remainders',
           'Apply the Binomial Series'],
      12: ['Identify and solve separable ODEs',
           'Identify and solve homogeneous ODEs',
           'Identify and solve linear first-order ODEs using integrating factor',
           'Identify and solve exact ODEs'],
    };
    const outcomes = outcomesRaw[num] || [];
    const savedOutcomes = AppStorage._get(`outcomes_ch${num}`, {});
    const outcomesHTML = outcomes.length ? `
      <div class="learning-outcomes fade-up">
        <h3>${Icons.target} Learning Outcomes</h3>
        ${outcomes.map((o, i) => `
          <div class="outcome-item">
            <div class="outcome-check ${savedOutcomes[i] ? 'done' : ''}" data-ch="${num}" data-idx="${i}">
              ${savedOutcomes[i] ? '✓' : ''}
            </div>
            <span>${o}</span>
          </div>`).join('')}
      </div>` : '';

    // Rich content from our content map
    const richContent = CHAPTER_CONTENT[num] ? CHAPTER_CONTENT[num]() : `
      <div class="content-card card-definition fade-up">
        <div class="card-badge">${Icons.book} Content</div>
        <p>Interactive content for Chapter ${num} is being prepared.</p>
      </div>`;

    // Formula section
    const formulaSection = buildFormulaSection(num);

    // Quiz button
    const quizBtn = quizForChapter
      ? `<button type="button" class="btn-hero btn-hero-secondary" data-action="open-quiz" data-quiz-id="${quizForChapter.id}"><span class="btn-icon-inner">${Icons.puzzle}</span> Take Quiz</button>` : '';

    area.innerHTML = `
      <div class="content-page fade-in">
        <div class="chapter-hero">
          <div class="chapter-number">Chapter ${num}</div>
          <h1>${chapter.shortTitle}</h1>
          <div class="chapter-hero-actions">
            <button type="button" class="btn-hero btn-hero-primary" data-action="open-flashcards"><span class="btn-icon-inner">${Icons.layers}</span> Flashcards</button>
            ${quizBtn}
            <button type="button" class="btn-hero btn-hero-primary" data-action="mark-complete" id="mark-done-btn">
              ${AppStorage.isComplete(chapter.id) ? `<span class="btn-icon-inner">${Icons.refresh}</span> Mark Incomplete` : `<span class="btn-icon-inner">${Icons.starOff}</span> Mark Complete`}
            </button>
          </div>
        </div>

        ${outcomesHTML}
        ${richContent}
        ${formulaSection}

        <div class="content-card" style="border-left-color:var(--teal)" id="notes-card">
          <div class="card-badge" style="background:rgba(20,184,166,.1);color:var(--teal)">${Icons.notes} My Notes</div>
          <textarea id="chapter-notes" rows="4" placeholder="Write your notes for this chapter here…"
            style="width:100%;margin-top:10px;border:1.5px solid var(--border);border-radius:8px;padding:10px;font-family:inherit;font-size:.88rem;background:var(--surface-2);color:var(--text);resize:vertical"></textarea>
          <div id="notes-status" style="font-size:.75rem;color:var(--text-3);margin-top:4px;text-align:right;min-height:18px;"></div>
        </div>

        <div class="chapter-actions">
          <button type="button" class="btn-primary" data-action="open-flashcards"><span class="btn-icon-inner">${Icons.layers}</span> Study Flashcards</button>
          ${quizBtn ? `<button type="button" class="btn-primary" style="background:var(--teal)" data-action="open-quiz" data-quiz-id="${quizForChapter.id}"><span class="btn-icon-inner">${Icons.puzzle}</span> Quiz Yourself</button>` : ''}
          <button type="button" class="btn-secondary" data-action="mark-complete" data-mark-done-ch="${num}">
            ${AppStorage.isComplete(chapter.id) ? `<span class="btn-icon-inner">${Icons.refresh}</span> Mark Incomplete` : `<span class="btn-icon-inner">${Icons.starOff}</span> Mark Complete`}
          </button>
        </div>

        ${(() => {
          const allChs = typeof chaptersData !== 'undefined' ? chaptersData : [];
          const idx = allChs.findIndex(c => c.id === chapter.id);
          const prev = allChs[idx - 1];
          const next = allChs[idx + 1];
          if (!prev && !next) return '';
          return `<div class="chapter-nav-bar">
            ${prev ? `<button type="button" class="chapter-nav-btn chapter-nav-prev" data-action="load-chapter" data-chapter-id="${prev.id}">
              <span class="chapter-nav-arrow">←</span>
              <span class="chapter-nav-label"><span class="chapter-nav-hint">Previous</span><span class="chapter-nav-title">Ch ${prev.number}: ${prev.shortTitle}</span></span>
            </button>` : '<span></span>'}
            ${next ? `<button type="button" class="chapter-nav-btn chapter-nav-next" data-action="load-chapter" data-chapter-id="${next.id}">
              <span class="chapter-nav-label"><span class="chapter-nav-hint">Next</span><span class="chapter-nav-title">Ch ${next.number}: ${next.shortTitle}</span></span>
              <span class="chapter-nav-arrow">→</span>
            </button>` : '<span></span>'}
          </div>`;
        })()}
      </div>`;

    this._bindChapterActions(area, chapter);

    // Render math after DOM update
    setTimeout(() => {
      renderMath(area);
      initSteps(area);
      initOutcomeChecks(area, num);
      initDecisionTree(area);
      initGraphsForChapter(num);
    }, 50);
  },

  _bindChapterActions(container, chapter) {
    const chapterNum = chapter.number;
    container.querySelectorAll('[data-action="open-flashcards"]').forEach(btn => {
      btn.addEventListener('click', () => Flashcards.open(chapterNum));
    });
    container.querySelectorAll('[data-action="open-quiz"]').forEach(btn => {
      btn.addEventListener('click', () => Quizzes.open(btn.dataset.quizId));
    });
    container.querySelectorAll('[data-action="mark-complete"]').forEach(btn => {
      btn.addEventListener('click', () => this.markDone(chapterNum));
    });
    container.querySelectorAll('[data-action="load-chapter"]').forEach(btn => {
      btn.addEventListener('click', () => Navigation.loadChapter(btn.dataset.chapterId));
    });
    const notes = container.querySelector('#chapter-notes');
    if (notes) {
      notes.value = AppStorage.getNote(chapter.id);
      notes.addEventListener('input', () => this.saveNote(chapter.id));
    }
  },

  markDone(chapterNum) {
    const ch = chaptersData.find(c => c.number === chapterNum);
    if (!ch) return;
    const isComplete = AppStorage.isComplete(ch.id);
    if (isComplete) AppStorage.markIncomplete(ch.id);
    else AppStorage.markComplete(ch.id);
    Navigation.refresh();
    Progress.update();
    toast(isComplete ? 'Chapter marked as incomplete.' : 'Chapter marked as complete!');
    ContentRenderer._syncMarkDoneButtons(chapterNum, !isComplete);
  },

  // ─── shared helper: update ALL mark-done buttons for a chapter ──────────
  _syncMarkDoneButtons(chapterNum, isComplete) {
    const buttonHTML = isComplete
      ? `<span class="btn-icon-inner">${Icons.refresh}</span> Mark Incomplete`
      : `<span class="btn-icon-inner">${Icons.starOff}</span> Mark Complete`;
    // Hero button
    const heroBtn = document.getElementById('mark-done-btn');
    if (heroBtn) { heroBtn.innerHTML = buttonHTML; }
    // Bottom bar button(s) — identified by data attribute
    document.querySelectorAll(`[data-mark-done-ch="${chapterNum}"]`).forEach(btn => {
      btn.innerHTML = buttonHTML;
    });
  },

  saveNote(chapterId) {
    const text = document.getElementById('chapter-notes')?.value || '';
    AppStorage.saveNote(chapterId, text);
    const status = document.getElementById('notes-status');
    if (status) {
      status.textContent = 'Saved just now';
      clearTimeout(this._noteTimer);
      this._noteTimer = setTimeout(() => { status.textContent = ''; }, 2000);
    }
  },
};

// ─── Step-by-step interactions ────────────────────────────────────────────
function initSteps(container) {
  container.querySelectorAll('.step-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.step-item');
      const isOpen = item.classList.contains('open');
      item.classList.toggle('open', !isOpen);
      item.classList.add('revealed');
    });
  });
}

// ─── Outcome checkbox interactions ───────────────────────────────────────
function initOutcomeChecks(container, chapterNum) {
  container.querySelectorAll('.outcome-check').forEach(chk => {
    chk.addEventListener('click', () => {
      const idx = parseInt(chk.dataset.idx);
      const saved = AppStorage._get(`outcomes_ch${chapterNum}`, {});
      saved[idx] = !saved[idx];
      AppStorage._set(`outcomes_ch${chapterNum}`, saved);
      chk.classList.toggle('done', !!saved[idx]);
      chk.textContent = saved[idx] ? '✓' : '';
    });
  });
}

// ─── Decision tree ────────────────────────────────────────────────────────
function initDecisionTree(container) {
  container.querySelectorAll('.decision-tree').forEach(tree => {
    tree.querySelectorAll('.dt-node').forEach(node => {
      node.addEventListener('click', () => {
        tree.querySelectorAll('.dt-node').forEach(n => n.classList.remove('selected'));
        node.classList.add('selected');
        tree.querySelectorAll('.dt-result').forEach(r => r.classList.remove('visible'));
        const next = node.dataset.next;
        if (next) {
          const result = tree.querySelector('#' + next) || document.getElementById(next);
          if (result) result.classList.add('visible');
        }
      });
    });
  });
}

// ─── Launch graphs for a chapter ─────────────────────────────────────────
function initGraphsForChapter(num) {
  if (typeof Plotly === 'undefined') return;
  if (num === 7)  Graphs.hyperbolicPlot('hyp-plot');
  if (num === 8)  {
    Graphs.riemannSum('riemann-plot');
    Graphs.areaBetweenCurves('area-plot');
    Graphs.diskMethod('disk-plot');
    Graphs.washerMethod('washer-plot');
    Graphs.slicingMethod('slicing-plot');
  }
  if (num === 10) Graphs.improperIntegral('improper-plot');
  if (num === 11) { Graphs.seriesConvergence('series-plot'); Graphs.taylorSeries('taylor-plot'); }
  if (num === 12) Graphs.directionField('dirfield-plot');
}

// ─── Welcome screen ───────────────────────────────────────────────────────
function renderWelcome() {
  const area = document.getElementById('content-area');
  if (!area || typeof chaptersData === 'undefined') return;
  const prog = AppStorage.getProgress();
  const done = Object.keys(prog).length;
  const total = chaptersData.length;

  area.innerHTML = `
    <div id="welcome-screen">
      <div class="welcome-icon">${Icons.book}</div>
      <div class="welcome-title">CALCULUS I</div>
      <p class="welcome-sub">Your interactive study companion for the second semester. Track your progress, practice with flashcards, and master each concept step by step.</p>

      <div class="welcome-cards">
        <button type="button" class="welcome-card" data-action="open-flashcards">
          <div class="wc-icon">${Icons.layers}</div>
          <div class="wc-title">Flashcards</div>
          <div class="wc-desc">${typeof flashcardsData !== 'undefined' ? flashcardsData.length : 0} cards across all chapters</div>
        </button>
        <button type="button" class="welcome-card" data-action="open-dashboard">
          <div class="wc-icon">${Icons.barChart}</div>
          <div class="wc-title">Dashboard</div>
          <div class="wc-desc">${done}/${total} chapters completed</div>
        </button>
        <button type="button" class="welcome-card" data-action="open-formulas">
          <div class="wc-icon">∑</div>
          <div class="wc-title">Formulas</div>
          <div class="wc-desc">${typeof formulasData !== 'undefined' ? formulasData.length : 0} key formulas</div>
        </button>
      </div>

      <p style="font-size:.9rem;font-weight:600;color:var(--text-2);margin-bottom:12px">Jump to a chapter →</p>
      <div class="chapters-quick-start">
        ${chaptersData.map(ch => `
          <button type="button" class="quick-chapter" data-chapter-id="${ch.id}">
            <div class="quick-ch-num">${ch.number}</div>
            <div>
              <div class="quick-ch-name">${ch.shortTitle}</div>
              <div class="quick-ch-sections">${ch.sections.length} sections</div>
            </div>
            ${AppStorage.isComplete(ch.id) ? `<span class="quick-ch-status"><span class="btn-icon-inner">${Icons.check}</span> Done</span>` : ''}
          </button>`).join('')}
      </div>
    </div>`;

  area.querySelector('[data-action="open-flashcards"]')?.addEventListener('click', (e) => { e.stopPropagation(); Flashcards.open('all'); });
  area.querySelector('[data-action="open-dashboard"]')?.addEventListener('click', (e) => {
    e.stopPropagation();
    Progress.update();
    document.getElementById('dashboard-overlay')?.classList.remove('hidden');
    renderDashboard();
  });
  area.querySelector('[data-action="open-formulas"]')?.addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('formula-panel')?.classList.add('open');
    renderFormulaPanel();
  });
  area.querySelectorAll('.quick-chapter').forEach(btn => {
    btn.addEventListener('click', () => Navigation.loadChapter(btn.dataset.chapterId));
  });
}

// ─── Main init ────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Streak
  AppStorage.updateStreak();

  // Build navigation
  Navigation.build();

  // Render welcome
  renderWelcome();

  // Update progress bar
  Progress.update();

  // Search
  Search.init();

  // Panels
  Flashcards.init();
  Quizzes.init();

  // Dashboard
  document.getElementById('dashboard-btn')?.addEventListener('click', () => {
    Progress.update();
    document.getElementById('dashboard-overlay')?.classList.remove('hidden');
    renderDashboard();
  });
  document.getElementById('dashboard-close')?.addEventListener('click', () => {
    document.getElementById('dashboard-overlay')?.classList.add('hidden');
  });
  document.getElementById('dashboard-panel-close')?.addEventListener('click', () => {
    document.getElementById('dashboard-overlay')?.classList.add('hidden');
  });
  document.getElementById('dashboard-study-flashcards')?.addEventListener('click', () => {
    document.getElementById('dashboard-overlay')?.classList.add('hidden');
    Flashcards.open('all');
  });
  document.getElementById('dashboard-overlay')?.addEventListener('click', e => {
    if (e.target === document.getElementById('dashboard-overlay'))
      document.getElementById('dashboard-overlay').classList.add('hidden');
  });

  // Formula panel
  document.getElementById('formula-btn')?.addEventListener('click', () => {
    document.getElementById('formula-panel')?.classList.toggle('open');
    renderFormulaPanel();
  });
  document.getElementById('formula-close')?.addEventListener('click', () => {
    document.getElementById('formula-panel')?.classList.remove('open');
  });
  document.getElementById('fc-btn')?.addEventListener('click', () => Flashcards.open('all'));

  // Sidebar toggle — collapses the column on desktop, opens an overlay drawer on mobile
  const MOBILE_QUERY = window.matchMedia('(max-width: 900px)');
  document.getElementById('sidebar-toggle-btn')?.addEventListener('click', () => {
    if (MOBILE_QUERY.matches) {
      document.querySelector('.sidebar-wrapper')?.classList.toggle('mobile-open');
    } else {
      document.querySelector('.app-shell')?.classList.toggle('sidebar-closed');
    }
  });

  // Tapping outside the drawer (on the dimmed backdrop) closes it on mobile
  document.getElementById('sidebar-backdrop')?.addEventListener('click', () => {
    document.querySelector('.sidebar-wrapper')?.classList.remove('mobile-open');
  });

  // Allow keyboard users to dismiss any open overlay or drawer.
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    Flashcards.close();
    Quizzes.close();
    document.getElementById('formula-panel')?.classList.remove('open');
    document.getElementById('dashboard-overlay')?.classList.add('hidden');
    document.querySelector('.sidebar-wrapper')?.classList.remove('mobile-open');
  });

  // Home logo click
  document.getElementById('logo-home-btn')?.addEventListener('click', () => {
    document.querySelectorAll('.toc-chapter-btn').forEach(b => b.classList.remove('active'));
    renderWelcome();
  });
});

function renderDashboard() {
  const prog   = AppStorage.getProgress();
  const scores = AppStorage.getQuizScores();
  const fcMast = AppStorage.getFCMastered();
  const streak = AppStorage.getStreak();
  const done   = Object.keys(prog).length;
  const total  = typeof chaptersData !== 'undefined' ? chaptersData.length : 0;
  const qTotal = Object.values(scores).reduce((a, s) => a + s.total, 0);
  const qRight = Object.values(scores).reduce((a, s) => a + s.score, 0);
  const fcT    = typeof flashcardsData !== 'undefined' ? flashcardsData.length : 0;

  const statsEl = document.getElementById('db-stats');
  const listEl  = document.getElementById('db-chapter-list');
  if (statsEl) {
    statsEl.innerHTML = `
      <div class="stat-card"><div class="stat-val">${streak}</div><div class="stat-label">Day Streak ${Icons.flame}</div></div>
      <div class="stat-card"><div class="stat-val">${done}/${total}</div><div class="stat-label">Chapters Done</div></div>
      <div class="stat-card"><div class="stat-val">${qTotal ? Math.round(qRight/qTotal*100)+'%' : '—'}</div><div class="stat-label">Quiz Avg</div></div>
      <div class="stat-card"><div class="stat-val">${fcMast.length}/${fcT}</div><div class="stat-label">Flashcards Mastered</div></div>
      <div class="stat-card"><div class="stat-val">${qRight}/${qTotal}</div><div class="stat-label">Quiz Score</div></div>
      <div class="stat-card"><div class="stat-val">${total - done}</div><div class="stat-label">Remaining</div></div>`;
  }
  if (listEl && typeof chaptersData !== 'undefined') {
    listEl.innerHTML = chaptersData.map(ch => {
      const isDone = AppStorage.isComplete(ch.id);
      return `<div class="cp-row">
        <span class="cp-name">Ch ${ch.number}: ${ch.shortTitle}</span>
        <span class="cp-badge ${isDone ? 'cp-done' : 'cp-pend'}">${isDone ? `<span class="btn-icon-inner">${Icons.check}</span> Complete` : 'In Progress'}</span>
      </div>`;
    }).join('');
  }
}

function renderFormulaPanel() {
  const list = document.getElementById('formula-list');
  if (!list || typeof formulasData === 'undefined') return;
  list.innerHTML = formulasData.map(f => `
    <div class="formula-mini" data-formula-id="${f.id}">
      <div class="fm-name">${f.chapter ? 'Ch'+f.chapter+' · ' : ''}${f.category} — ${f.name}</div>
      <div class="fm-latex">$$${f.latex}$$</div>
      <div style="font-size:.75rem;color:var(--text-3);margin-top:4px">${f.use}</div>
    </div>`).join('');
  renderMath(list);
}
