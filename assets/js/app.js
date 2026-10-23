/**
 * app.js - Main orchestrator: renders rich chapter content, wires everything together
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
      <div class="card-badge">${Icons.book} Theorem - Hyperbolic Identities</div>
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
      <div class="card-badge">${Icons.book} Theorem - Logarithmic Forms</div>
      <div class="math-block">$$\\sinh^{-1} x = \\ln\\left(x + \\sqrt{x^2+1}\\right), \\quad x \\in \\mathbb{R}$$</div>
      <div class="math-block">$$\\cosh^{-1} x = \\ln\\left(x + \\sqrt{x^2-1}\\right), \\quad x \\geq 1$$</div>
      <div class="math-block">$$\\tanh^{-1} x = \\frac{1}{2}\\ln\\frac{1+x}{1-x}, \\quad |x| < 1$$</div>
    </div>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Derivatives - Inverse Hyperbolic</div>
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
          <div class="step-body">$$= \\ln\\!\\left(2+\\sqrt{13}\\right) - \\ln(0+3) = \\ln\\!\\left(\\frac{2+\\sqrt{13}}{3}\\right) \\approx 0.625\\quad\\checkmark$$</div>
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
      <p>The definite integral is built from the idea of adding up infinitely many infinitely thin rectangles. We start with finite approximations - <strong>Riemann sums</strong> - and take a limit.</p>
    </div>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Definition - Finite Riemann Sum</div>
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
      <div class="card-badge">${Icons.book} Definition - Definite Integral</div>
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
    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} What the sum is actually saying</div>
      <ol>
        <li>Cut $[a,b]$ into $n$ thin strips, each of width $\\Delta x = \\dfrac{b-a}{n}$.</li>
        <li>Treat each strip as a <strong>rectangle</strong>: height $f(x_i^*)$ (the function value at some point $x_i^*$ in that strip) times width $\\Delta x$.</li>
        <li>Add the $n$ rectangle areas. This is the Riemann sum, an <em>approximation</em> of the area.</li>
        <li>Let $n \\to \\infty$: the strips get thinner, the rectangles fit the curve exactly, and the approximation becomes the true value.</li>
      </ol>
      <p>It does not matter whether $x_i^*$ is the left end, right end or middle of the strip: the limit is the same. The symbol $\\int$ is a stretched "S" for <em>sum</em>, and $f(x)\\,dx$ is "height times a tiny width".</p>
      <p>The result is a <strong>signed</strong> area: parts above the $x$-axis count positive, parts below count negative.</p>
    </div>

    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} The properties in plain words</div>
      <ul>
        <li><strong>Swapping the limits flips the sign:</strong> going from $b$ to $a$ is walking the strip backwards.</li>
        <li><strong>Same limits give $0$:</strong> a region of zero width has zero area.</li>
        <li><strong>Sums split:</strong> the area under $f+g$ is the area under $f$ plus the area under $g$.</li>
        <li><strong>Splitting the interval:</strong> area from $a$ to $b$ = area from $a$ to $c$ plus area from $c$ to $b$. This is how you handle functions that change formula or sign partway.</li>
      </ul>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 8.2.1.1</span>
        <h4>Use the definition (right endpoints) to compute $\\displaystyle\\int_0^2 x\\,dx$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Find $\\Delta x$ and the sample points</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\Delta x = \\frac{2-0}{n} = \\frac{2}{n}, \\qquad x_i = 0 + i\\,\\Delta x = \\frac{2i}{n}$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Build the sum $\\sum f(x_i)\\,\\Delta x$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\sum_{i=1}^n \\frac{2i}{n}\\cdot\\frac{2}{n} = \\frac{4}{n^2}\\sum_{i=1}^n i$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Use $\\displaystyle\\sum_{i=1}^n i = \\frac{n(n+1)}{2}$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\frac{4}{n^2}\\cdot\\frac{n(n+1)}{2} = \\frac{2(n+1)}{n} = 2 + \\frac{2}{n}$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">4</div><div class="step-label">Take the limit $n \\to \\infty$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int_0^2 x\\,dx = \\lim_{n\\to\\infty}\\left(2 + \\frac{2}{n}\\right) = 2$$
          <p>Check with geometry: the region is a triangle with base $2$ and height $2$, so its area is $\\tfrac12\\cdot 2\\cdot 2 = 2$. &#10003;</p></div>
        </div>
      </div>
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
      <div class="card-badge">${Icons.book} Theorem - Fundamental Theorem of Calculus (Part 2)</div>
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
      <div class="card-badge">${Icons.book} Theorem - Integration with respect to x</div>
      <div class="card-title">Vertical Strip Method</div>
      <p>For regions bounded by $y = f(x)$ (top curve) and $y = g(x)$ (bottom curve) between $x = a$ and $x = b$ where $f(x) \\geq g(x)$:</p>
      <div class="math-block">$$A = \\int_a^b \\Big[\\text{Top} - \\text{Bottom}\\Big]\\,dx = \\int_a^b \\big[f(x) - g(x)\\big]\\,dx$$</div>
    </div>
    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Why Top - Bottom?</div>
      <p>Slice the region into thin vertical strips of width $dx$. Each strip is almost a rectangle: its <strong>height</strong> is the gap between the curves, $f(x)-g(x)$, and its <strong>width</strong> is $dx$. Area of a strip = height &times; width, and the integral adds up all the strips from $x=a$ to $x=b$.</p>
      <p>Subtracting means it works even when the curves dip below the $x$-axis, because only the <em>gap</em> matters. If your answer comes out negative, you subtracted the wrong way round.</p>
    </div>

    <div class="content-card card-memory fade-up">
      <div class="card-badge">${Icons.brain} The 3-Step Method</div>
      <ol>
        <li><strong>Find the limits:</strong> set $f(x) = g(x)$ and solve for $x$ (unless the problem gives $a$ and $b$).</li>
        <li><strong>Find which is on top:</strong> test one $x$ between the limits in both functions. The bigger value is the top curve.</li>
        <li><strong>Integrate</strong> Top $-$ Bottom from $a$ to $b$.</li>
      </ol>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 8.2.3.1</span>
        <h4>Find the area enclosed by $y = \\sqrt{x}$ and $y = x^2$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Find the limits (set the curves equal)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\sqrt{x} = x^2 \\;\\Rightarrow\\; x = x^4 \\;\\Rightarrow\\; x(1 - x^3) = 0 \\;\\Rightarrow\\; x = 0 \\text{ or } x = 1$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Find which curve is on top</div><div class="step-chevron">▶</div></div>
          <div class="step-body"><p>Test $x = \\tfrac14$: $\\sqrt{x} = \\tfrac12$ and $x^2 = \\tfrac1{16}$. So $\\sqrt{x}$ is on top for $0 < x < 1$.</p></div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Integrate Top $-$ Bottom</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$A = \\int_0^1 \\left(\\sqrt{x} - x^2\\right)dx = \\left[\\frac{2}{3}x^{3/2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{2}{3} - \\frac{1}{3} = \\frac{1}{3}$$</div>
        </div>
      </div>
    </div>

    <h3 id="ch8-sec2-4" class="section-heading fade-up"><span class="section-num">8.2.4</span> Area between two Curves: y-axis</h3>
    
    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Theorem - Integration with respect to y</div>
      <div class="card-title">Horizontal Strip Method</div>
      <p>For regions bounded by $x = f(y)$ (right curve) and $x = g(y)$ (left curve) between $y = c$ and $y = d$ where $f(y) \\geq g(y)$:</p>
      <div class="math-block">$$A = \\int_c^d \\Big[\\text{Right} - \\text{Left}\\Big]\\,dy = \\int_c^d \\big[f(y) - g(y)\\big]\\,dy$$</div>
    </div>
    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} When to slice horizontally</div>
      <p>Use horizontal strips (width $dy$, length = Right $-$ Left) when:</p>
      <ul>
        <li>the curves are given as $x$ in terms of $y$ (like $x = y^2$), or</li>
        <li>slicing vertically would force you to <strong>split into two integrals</strong> because the top or bottom curve changes partway, while horizontally the right and left curves stay the same.</li>
      </ul>
      <p>The method is identical, with $x$ and $y$ swapped: find the limits in $y$, decide who is on the right, integrate Right $-$ Left.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 8.2.4.1</span>
        <h4>Find the area enclosed by $y^2 = x$ and $y = x - 2$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Write both curves as $x$ in terms of $y$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$x = y^2 \\qquad\\text{and}\\qquad x = y + 2$$
          <p>(Vertical strips would need two integrals here, because the bottom curve changes at $x = 1$. Horizontal strips need only one.)</p></div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Find the limits (set equal and solve for $y$)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$y^2 = y + 2 \\;\\Rightarrow\\; y^2 - y - 2 = 0 \\;\\Rightarrow\\; (y-2)(y+1) = 0 \\;\\Rightarrow\\; y = -1 \\text{ or } y = 2$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Find which curve is on the right</div><div class="step-chevron">▶</div></div>
          <div class="step-body"><p>Test $y = 0$: $x = y+2$ gives $2$ and $x = y^2$ gives $0$. So the line $x = y+2$ is on the right.</p></div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">4</div><div class="step-label">Integrate Right $-$ Left</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$A = \\int_{-1}^{2}\\big[(y+2) - y^2\\big]\\,dy = \\left[\\frac{y^2}{2} + 2y - \\frac{y^3}{3}\\right]_{-1}^{2} = \\frac{10}{3} - \\left(-\\frac{7}{6}\\right) = \\frac{9}{2}$$</div>
        </div>
      </div>
    </div>

    <h3 id="ch8-sec2-5" class="section-heading fade-up"><span class="section-num">8.2.5</span> Area with Crossing over Functions</h3>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Key Idea - When Curves Cross</div>
      <div class="card-title">Split at Every Crossing Point</div>
      <p>When $f(x)$ and $g(x)$ intersect at points $x_1, x_2, \\ldots, x_k$ inside $[a,b]$, you <strong>cannot</strong> use a single integral - the "top" and "bottom" curves swap at each crossing. The total area is:</p>
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
            <div class="math-block">$$A_2 = \\int_1^2 \\big[x^2 - (2-x^2)\\big]\\,dx = \\int_1^2 (2x^2 - 2)\\,dx = \\left[\\tfrac{2x^3}{3} - 2x\\right]_1^2 = \\left(\\tfrac{16}{3}-4\\right) - \\left(\\tfrac{2}{3}-2\\right) = \\tfrac{8}{3}$$</div>
          </div>
        </div>

        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">4</div><div class="step-label">Add the two areas</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$A = A_1 + A_2 = \\tfrac{4}{3} + \\tfrac{8}{3} = \\boxed{4}$$</div>
            <p>Note: if you had integrated without splitting, you'd get $\\int_0^2(2-x^2-x^2)dx = \\left[2x - \\tfrac{2x^3}{3}\\right]_0^2 = 4 - \\tfrac{16}{3} = -\\tfrac{4}{3}$ - a <strong>negative</strong> wrong answer!</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content-card card-mistake fade-up">
      <div class="card-badge">${Icons.alertTriangle} Common Mistake - Not Splitting</div>
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
          <p style="font-size:.85rem">$A_1 + A_2 = \\tfrac{4}{3} + \\tfrac{8}{3} = 4$</p>
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
      <div class="card-badge">${Icons.book} Formula - Disk Method</div>
      <div class="card-title">Rotation about Coordinate Axes</div>
      <p>When a solid region is revolved around an axis of revolution without any central hole:</p>
      <div class="math-block">$$V = \\pi \\int_a^b [f(x)]^2 \\, dx \\quad \\text{(rotation about the } x\\text{-axis)}$$</div>
      <div class="math-block">$$V = \\pi \\int_c^d [g(y)]^2 \\, dy \\quad \\text{(rotation about the } y\\text{-axis)}$$</div>
    </div>
    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Why $\\pi\\int [f(x)]^2\\,dx$?</div>
      <p>Cut the solid into thin slices perpendicular to the axis. Each slice is a flat <strong>disk</strong>, a very short cylinder with radius $f(x)$ and thickness $dx$. The volume of a cylinder is $\\pi r^2 h$, so one slice has volume</p>
      <div class="math-block">$$\\pi\\,[f(x)]^2\\,dx$$</div>
      <p>and the integral adds up every slice. The radius is always the <em>distance from the curve to the axis of rotation</em>.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 8.3.1.1</span>
        <h4>The region under $y = \\sqrt{x}$ on $[0,4]$ is rotated about the $x$-axis. Find the volume.</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Identify the radius</div><div class="step-chevron">▶</div></div>
          <div class="step-body"><p>The axis of rotation is the $x$-axis, so the radius is the height of the curve: $r = f(x) = \\sqrt{x}$.</p></div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Square it and integrate</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$V = \\pi\\int_0^4 \\left(\\sqrt{x}\\right)^2 dx = \\pi\\int_0^4 x\\,dx = \\pi\\left[\\frac{x^2}{2}\\right]_0^4 = 8\\pi$$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 8.3.1.2</span>
        <h4>The region bounded by $y = x^2$, the $y$-axis and $y = 1$ is rotated about the $y$-axis. Find the volume.</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">The axis is vertical, so slice and integrate in $y$</div><div class="step-chevron">▶</div></div>
          <div class="step-body"><p>Solve the curve for $x$: $x = \\sqrt{y}$. The radius of each disk is the distance from the $y$-axis to the curve, $r = \\sqrt{y}$, and $y$ runs from $0$ to $1$.</p></div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Square it and integrate</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$V = \\pi\\int_0^1 \\left(\\sqrt{y}\\right)^2 dy = \\pi\\int_0^1 y\\,dy = \\pi\\left[\\frac{y^2}{2}\\right]_0^1 = \\frac{\\pi}{2}$$</div>
        </div>
      </div>
    </div>

    <div class="content-card card-mistake fade-up">
      <div class="card-badge">${Icons.alertTriangle} Common Mistake</div>
      <div class="math-block">$$\\text{WRONG: } \\pi\\left(\\int f\\,dx\\right)^2 \\qquad \\text{CORRECT: } \\pi\\int [f(x)]^2\\,dx$$</div>
      <p>Square $f(x)$ <em>inside</em> the integral first, then integrate. Squaring the answer afterwards is a different number.</p>
    </div>

    <h3 id="ch8-sec3-2" class="section-heading fade-up"><span class="section-num">8.3.2</span> The Washer Method</h3>
    
    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Formula - Washer Method</div>
      <div class="card-title">Solid with Hollow Core</div>
      <p>When revolving the region between two curves $f(x) \\geq g(x) \\geq 0$ around the $x$-axis:</p>
      <div class="math-block">$$V = \\pi \\int_a^b \\Big(\\big[R(x)\\big]^2 - \\big[r(x)\\big]^2\\Big)\\,dx$$</div>
      <p>where $R(x)$ is the <strong>outer radius</strong> and $r(x)$ is the <strong>inner radius</strong>.</p>
    </div>

    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Why subtract the squares?</div>
      <p>When the region does not touch the axis, each slice has a hole in the middle: a <strong>washer</strong>. Its area is the big disk minus the hole:</p>
      <div class="math-block">$$\\pi R^2 - \\pi r^2 = \\pi\\big(R^2 - r^2\\big)$$</div>
      <p>$R$ is the distance from the axis to the <em>far</em> curve and $r$ the distance to the <em>near</em> curve. Multiply by the thickness $dx$ and add up.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 8.3.2.1</span>
        <h4>The region between $y = \\sqrt{x}$ and $y = x^2$ is rotated about the $x$-axis. Find the volume.</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Find the limits and decide outer and inner</div><div class="step-chevron">▶</div></div>
          <div class="step-body"><p>From the area example, the curves meet at $x = 0$ and $x = 1$. Between them $\\sqrt{x} \\ge x^2$ (test $x=\\tfrac14$: $\\tfrac12 > \\tfrac1{16}$), so the outer radius is $R = \\sqrt{x}$ and the inner radius is $r = x^2$.</p></div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Square each radius separately</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$R^2 = \\left(\\sqrt{x}\\right)^2 = x \\qquad r^2 = \\left(x^2\\right)^2 = x^4$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Integrate</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$V = \\pi\\int_0^1 \\left(x - x^4\\right)dx = \\pi\\left[\\frac{x^2}{2} - \\frac{x^5}{5}\\right]_0^1 = \\pi\\left(\\frac12 - \\frac15\\right) = \\frac{3\\pi}{10}$$</div>
        </div>
      </div>
    </div>

    <div class="content-card card-mistake fade-up">
      <div class="card-badge">${Icons.alertTriangle} Common Mistake</div>
      <div class="math-block">$$\\text{WRONG: } \\pi\\int (R - r)^2\\,dx \\qquad \\text{CORRECT: } \\pi\\int \\big(R^2 - r^2\\big)\\,dx$$</div>
      <p>Square each radius first, then subtract. $(R-r)^2$ is not the same as $R^2 - r^2$.</p>
    </div>

    <div class="viz-card fade-up">
      <h3>${Icons.box} 3D: Volume of Revolution - Disk Method</h3>
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
      <h3>${Icons.box} 3D: Volume of Revolution - Washer Method</h3>
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
      <div class="card-badge">${Icons.book} Definition - Volumes by Slicing</div>
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
            <option value="square">Square - A(x) = 4(4−x²), V = 128/3</option>
            <option value="semicircle">Semicircle - A(x) = π(4−x²)/2, V = 16π/3</option>
            <option value="triangle">Equilateral Triangle - A(x) = √3(4−x²), V = 32√3/3</option>
          </select>
        </div>
      </div>
    </div>

    <div class="content-card card-exam fade-up">
      <div class="card-badge">${Icons.target} Exam Tip</div>
      <div class="card-title">Disk vs Washer - deciding which</div>
      <p>Draw the region. If rotating about the $x$-axis and the region touches the axis, use <strong>Disks</strong>. If there's a gap (hole) between the region and the axis, use <strong>Washers</strong>. The formula is always: $\\pi(R^2 - r^2)$ where $R$ = outer radius, $r$ = inner.</p>
    </div>

    <div class="content-card card-mistake fade-up">
      <div class="card-badge">${Icons.alertTriangle} Common Mistake - Washer Method</div>
      <div class="math-block">$$\\text{WRONG: } \\pi\\int (f-g)^2\\,dx \\qquad \\text{CORRECT: } \\pi\\int (f^2 - g^2)\\,dx$$</div>
      <p>Always square first, then subtract - never subtract first, then square.</p>
    </div>

    <h2 id="ch8-sec5" class="section-heading fade-up"><span class="section-num">8.5</span> The Definite Integral as a Function</h2>
    <div class="prose fade-up">
      <p>Fix the lower limit and let the <em>upper</em> limit vary: the definite integral $\\displaystyle g(x) = \\int_a^x f(t)\\,dt$ then defines a brand-new function of $x$. The Fundamental Theorem of Calculus <strong>Part 1</strong> reveals the remarkable fact that this accumulation function is an antiderivative of $f$ - the theoretical twin of the evaluation rule (FTC Part 2) you met in §8.2.2.</p>
    </div>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Theorem - Fundamental Theorem of Calculus (Part 1)</div>
      <div class="card-title">The Accumulation Function is an Antiderivative</div>
      <p>If $f$ is continuous on $[a,b]$, then the function $g$ defined by</p>
      <div class="math-block">$$g(x) = \\int_a^x f(t)\\,dt, \\qquad a \\leq x \\leq b$$</div>
      <p>is continuous on $[a,b]$, differentiable on $(a,b)$, and its derivative is $f$ itself:</p>
      <div class="math-block">$$g'(x) = \\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$$</div>
    </div>

    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Key Insight - Differentiation undoes Integration</div>
      <p>FTC Part 1 says the two central operations of calculus are inverses: differentiating the integral of $f$ hands back $f$. The dummy variable $t$ inside the integral is <strong>not</strong> the variable you differentiate by - only the limit $x$ carries the $x$-dependence.</p>
    </div>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Extension - Variable Limits (Chain Rule / Leibniz)</div>
      <p>When the limits are themselves differentiable functions $u(x)$ and $v(x)$, combine FTC Part 1 with the chain rule:</p>
      <div class="math-block">$$\\frac{d}{dx}\\int_{u(x)}^{v(x)} f(t)\\,dt = f\\big(v(x)\\big)\\,v'(x) - f\\big(u(x)\\big)\\,u'(x)$$</div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 8.5.1</span>
        <h4>Differentiate $\\displaystyle g(x) = \\int_\\pi^x \\sin(t^2)\\,dt$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Apply FTC Part 1 directly</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>The lower limit $\\pi$ is constant and the upper limit is simply $x$, so $g'(x)$ is just the integrand evaluated at $t = x$:</p>
            <div class="math-block">$$g'(x) = \\sin(x^2)$$</div>
            <p>No antiderivative of $\\sin(t^2)$ is needed - that is the power of FTC Part 1.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 8.5.2</span>
        <h4>Find $\\displaystyle \\frac{d}{dx}\\int_0^{x^3} \\frac{dt}{1+t}$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Identify the variable upper limit</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>Here $f(t) = \\dfrac{1}{1+t}$, the lower limit is constant, and the upper limit is $v(x) = x^3$ with $v'(x) = 3x^2$.</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Apply FTC Part 1 with the chain rule</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\frac{d}{dx}\\int_0^{x^3}\\frac{dt}{1+t} = \\frac{1}{1+x^3}\\cdot 3x^2 = \\frac{3x^2}{1+x^3} \\quad\\checkmark$$</div>
          </div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 8.5.3</span>
        <h4>Find $\\displaystyle \\frac{d}{dx}\\int_x^{2x} \\frac{dt}{1+t^2}$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Both limits vary - use the Leibniz form</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>With $f(t) = \\dfrac{1}{1+t^2}$, lower limit $u(x) = x$ (so $u' = 1$) and upper limit $v(x) = 2x$ (so $v' = 2$):</p>
            <div class="math-block">$$\\frac{d}{dx}\\int_x^{2x}\\frac{dt}{1+t^2} = f(2x)\\cdot 2 - f(x)\\cdot 1$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Substitute and simplify</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$= \\frac{2}{1+(2x)^2} - \\frac{1}{1+x^2} = \\frac{2}{1+4x^2} - \\frac{1}{1+x^2} \\quad\\checkmark$$</div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-card card-mistake fade-up">
      <div class="card-badge">${Icons.alertTriangle} Common Mistake - Forgetting the Chain Rule</div>
      <p>When the upper limit is a function like $x^3$ or $2x$ (not just $x$), you <strong>must</strong> multiply by its derivative. Writing $\\frac{d}{dx}\\int_0^{x^3}\\frac{dt}{1+t} = \\frac{1}{1+x^3}$ - without the $\\times\\,3x^2$ - is the single most common error on this topic.</p>
    </div>

    <div class="content-card card-exam fade-up">
      <div class="card-badge">${Icons.target} Exam Tip - FTC Part 1 vs Part 2</div>
      <p><strong>Part 1</strong> differentiates an integral with a variable limit: the answer is the integrand at the limit (times the limit's derivative). <strong>Part 2</strong> evaluates a definite integral with constant limits: $\\int_a^b f = F(b)-F(a)$. If a question asks for $\\frac{d}{dx}$ of an integral, it is always Part 1.</p>
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

    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Why we do this</div>
      <p>The inverse-trig formulas need the form $a^2 + u^2$ or $a^2 - u^2$ with <strong>no middle term</strong>. A quadratic like $x^2 + 4x + 13$ has an $x$ term, so it does not match. Completing the square rewrites it as <em>(something)$^2$ + constant</em>, which removes the middle term, and then $u = x + 2$ is a simple shift ($du = dx$).</p>
    </div>

    <div class="content-card card-memory fade-up">
      <div class="card-badge">${Icons.brain} The Recipe</div>
      <ol>
        <li>Take <strong>half</strong> of the coefficient of $x$ and put it in a bracket: $x^2 + bx \\to \\left(x + \\tfrac b2\\right)^2$.</li>
        <li><strong>Subtract the square</strong> of that half to compensate: $x^2 + bx + c = \\left(x+\\tfrac b2\\right)^2 + \\left(c - \\tfrac{b^2}{4}\\right)$.</li>
        <li>If the $x^2$ term is negative (as in $5 - 4x - x^2$), factor out the minus sign first.</li>
      </ol>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 9.1.1.1</span>
        <h4>Evaluate $\\displaystyle\\int \\frac{dx}{x^2 + 4x + 13}$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Complete the square (half of $4$ is $2$)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$x^2 + 4x + 13 = (x+2)^2 - 4 + 13 = (x+2)^2 + 3^2$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Substitute $u = x + 2$, $du = dx$, $a = 3$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int \\frac{du}{u^2 + 3^2}$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Use $\\displaystyle\\int\\frac{du}{a^2+u^2} = \\frac1a\\tan^{-1}\\frac ua$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int \\frac{dx}{x^2+4x+13} = \\frac{1}{3}\\tan^{-1}\\!\\left(\\frac{x+2}{3}\\right) + C$$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 9.1.1.2</span>
        <h4>Evaluate $\\displaystyle\\int \\frac{dx}{\\sqrt{5 - 4x - x^2}}$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Factor out the minus, then complete the square</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$5 - 4x - x^2 = 5 - (x^2 + 4x) = 5 - \\big[(x+2)^2 - 4\\big] = 9 - (x+2)^2$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Substitute $u = x + 2$, $du = dx$, $a = 3$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int \\frac{du}{\\sqrt{3^2 - u^2}}$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Use $\\displaystyle\\int\\frac{du}{\\sqrt{a^2-u^2}} = \\sin^{-1}\\frac ua$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int \\frac{dx}{\\sqrt{5-4x-x^2}} = \\sin^{-1}\\!\\left(\\frac{x+2}{3}\\right) + C$$</div>
        </div>
      </div>
    </div>

    <h3 id="ch9-sec1-2" class="section-heading fade-up"><span class="section-num">9.1.2</span> Exponential and Logarithmic Integrals</h3>
    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Essential Integration Rules</div>
      <div class="math-block">$$\\int a^x \\, dx = \\frac{a^x}{\\ln a} + C \\qquad \\int \\frac{1}{x} \\, dx = \\ln|x| + C$$</div>
      <div class="math-block">$$\\int \\tan x \\, dx = \\ln|\\sec x| + C = -\\ln|\\cos x| + C$$</div>
      <div class="math-block">$$\\int \\sec x \\, dx = \\ln|\\sec x + \\tan x| + C$$</div>
    </div>

    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Where these rules come from</div>
      <ul>
        <li><strong>$a^x$:</strong> the derivative of $a^x$ is $a^x\\ln a$, so integrating must divide by $\\ln a$ (the same idea as the $1/k$ in 9.4.1).</li>
        <li><strong>$\\ln|x|$:</strong> $\\dfrac{d}{dx}\\ln|x| = \\dfrac1x$ for both positive and negative $x$, which is why the absolute value is needed.</li>
        <li><strong>$\\tan x$:</strong> write $\\tan x = \\dfrac{\\sin x}{\\cos x}$ and let $u = \\cos x$, $du = -\\sin x\\,dx$. This gives $-\\ln|\\cos x|$.</li>
        <li><strong>$\\sec x$:</strong> multiply top and bottom by $\\sec x + \\tan x$. The top becomes $\\sec^2 x + \\sec x\\tan x$, which is exactly the derivative of the bottom, so the answer is $\\ln|\\sec x + \\tan x|$.</li>
      </ul>
    </div>

    <div class="content-card card-memory fade-up">
      <div class="card-badge">${Icons.brain} Pattern: top is the derivative of the bottom</div>
      <div class="math-block">$$\\int \\frac{f'(x)}{f(x)}\\,dx = \\ln|f(x)| + C$$</div>
      <p>If the numerator is (a multiple of) the derivative of the denominator, the answer is a log. It is just $u$-substitution with $u = f(x)$.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 9.1.2.1</span>
        <h4>Evaluate $\\displaystyle\\int \\frac{x^2}{x^3+1}\\,dx$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Spot the pattern: the derivative of $x^3+1$ is $3x^2$</div><div class="step-chevron">▶</div></div>
          <div class="step-body"><p>The numerator $x^2$ is a constant multiple ($\\tfrac13$) of $3x^2$, so substitute $u = x^3 + 1$.</p></div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Substitute $u = x^3+1$, $du = 3x^2\\,dx$, so $x^2\\,dx = \\tfrac13\\,du$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\frac{1}{3}\\int \\frac{du}{u}$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Integrate and substitute back</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int \\frac{x^2}{x^3+1}\\,dx = \\frac{1}{3}\\ln|x^3+1| + C$$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 9.1.2.2</span>
        <h4>Evaluate $\\displaystyle\\int_0^3 2^x\\,dx$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Use $\\displaystyle\\int a^x\\,dx = \\frac{a^x}{\\ln a}$ with $a = 2$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int 2^x\\,dx = \\frac{2^x}{\\ln 2}$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Evaluate at the limits</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\left[\\frac{2^x}{\\ln 2}\\right]_0^3 = \\frac{8 - 1}{\\ln 2} = \\frac{7}{\\ln 2}$$</div>
        </div>
      </div>
    </div>

    <div class="content-card card-mistake fade-up">
      <div class="card-badge">${Icons.alertTriangle} Common Mistake</div>
      <div class="math-block">$$\\text{WRONG: } \\int 2^x\\,dx = \\frac{2^{x+1}}{x+1} \\qquad \\text{CORRECT: } \\frac{2^x}{\\ln 2}$$</div>
      <p>The power rule is for $x^n$ (variable base, constant exponent). In $2^x$ the <em>exponent</em> is the variable, so it is an exponential and needs $\\ln a$.</p>
    </div>

    <h2 id="ch9-sec2" class="section-heading fade-up"><span class="section-num">9.2</span> Integration by Parts (IBP)</h2>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Theorem</div>
      <div class="math-block">$$\\int u\\,dv = uv - \\int v\\,du$$</div>
    </div>

    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Where the formula comes from</div>
      <p>It is the <strong>product rule run backwards</strong>. Start with $\\dfrac{d}{dx}(uv) = u\\,v' + v\\,u'$, integrate both sides, and rearrange:</p>
      <div class="math-block">$$uv = \\int u\\,dv + \\int v\\,du \\;\\Longrightarrow\\; \\int u\\,dv = uv - \\int v\\,du$$</div>
      <p>So IBP swaps a hard integral $\\int u\\,dv$ for a (hopefully easier) one, $\\int v\\,du$. That tells you how to choose:</p>
      <ul>
        <li><strong>$u$</strong> should get <em>simpler</em> when you differentiate it (like $x$, $\\ln x$, $\\tan^{-1}x$).</li>
        <li><strong>$dv$</strong> must be something you can <em>integrate</em> (like $e^x\\,dx$, $\\cos x\\,dx$).</li>
      </ul>
      <p>LIATE below is just a quick ranking of which functions make good $u$.</p>
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

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 9.2.2</span>
        <h4>Evaluate $\\displaystyle\\int \\ln x\\,dx$ (the "hidden" $dv = dx$ trick)</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">There is only one function, so put $dv = dx$</div><div class="step-chevron">▶</div></div>
          <div class="step-body"><p>$\\ln x$ is a Logarithm (first in LIATE), so it is $u$. Everything left over is $dv = 1\\,dx$.</p>
          $$u = \\ln x,\\; dv = dx \\implies du = \\frac{1}{x}\\,dx,\\; v = x$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Apply the formula</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int \\ln x\\,dx = x\\ln x - \\int x\\cdot\\frac{1}{x}\\,dx = x\\ln x - \\int 1\\,dx$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Integrate the remainder</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int \\ln x\\,dx = x\\ln x - x + C$$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 9.2.3</span>
        <h4>Evaluate $\\displaystyle\\int x^2 e^x\\,dx$ (apply IBP twice)</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">First round: $u = x^2$ (Algebraic), $dv = e^x\\,dx$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$du = 2x\\,dx,\\; v = e^x \\implies \\int x^2e^x\\,dx = x^2e^x - 2\\int xe^x\\,dx$$
          <p>The power of $x$ dropped from $2$ to $1$, so we are making progress.</p></div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Second round: the leftover $\\int xe^x\\,dx$ is Example 9.2.1</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int xe^x\\,dx = xe^x - e^x$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Substitute back (watch the factor of $2$)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int x^2e^x\\,dx = x^2e^x - 2\\big(xe^x - e^x\\big) + C = e^x\\big(x^2 - 2x + 2\\big) + C$$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 9.2.4</span>
        <h4>Evaluate $\\displaystyle\\int e^x\\cos x\\,dx$ (the integral comes back)</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">First round: $u = \\cos x$, $dv = e^x\\,dx$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$I = \\int e^x\\cos x\\,dx = e^x\\cos x + \\int e^x\\sin x\\,dx$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Second round on the new integral: $u = \\sin x$, $dv = e^x\\,dx$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int e^x\\sin x\\,dx = e^x\\sin x - \\int e^x\\cos x\\,dx = e^x\\sin x - I$$
          <p>The original integral $I$ has reappeared. This is not a failure: it is what we want.</p></div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Treat it as an equation and solve for $I$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$I = e^x\\cos x + e^x\\sin x - I \\;\\Rightarrow\\; 2I = e^x(\\cos x + \\sin x)$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">4</div><div class="step-label">Divide by $2$ and add the constant</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int e^x\\cos x\\,dx = \\frac{e^x}{2}\\big(\\sin x + \\cos x\\big) + C$$</div>
        </div>
      </div>
    </div>

    <div class="content-card card-mistake fade-up">
      <div class="card-badge">${Icons.alertTriangle} Common Mistakes</div>
      <ul>
        <li><strong>Choosing $u$ and $dv$ backwards.</strong> For $\\int xe^x\\,dx$, taking $u = e^x$, $dv = x\\,dx$ gives $\\frac{x^2}{2}e^x - \\int\\frac{x^2}{2}e^x\\,dx$, which is <em>harder</em>. If the new integral looks worse, swap.</li>
        <li><strong>Sign slip.</strong> The formula has a <em>minus</em>: $uv - \\int v\\,du$. With a second round inside, keep the minus on the whole bracket.</li>
        <li><strong>Giving up when the original integral returns</strong> (as with $e^x\\cos x$). Solve for it algebraically.</li>
      </ul>
    </div>

    <h2 id="ch9-sec3" class="section-heading fade-up"><span class="section-num">9.3</span> Trigonometric Substitutions</h2>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Three Substitutions</div>
      <div class="math-block">$$\\sqrt{a^2 - x^2} \\implies x = a\\sin\\theta, \\quad\\sqrt{a^2-x^2} = a\\cos\\theta$$</div>
      <div class="math-block">$$\\sqrt{a^2 + x^2} \\implies x = a\\tan\\theta, \\quad\\sqrt{a^2+x^2} = a\\sec\\theta$$</div>
      <div class="math-block">$$\\sqrt{x^2 - a^2} \\implies x = a\\sec\\theta, \\quad\\sqrt{x^2-a^2} = a\\tan\\theta$$</div>
    </div>

    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Why it works</div>
      <p>Each square root hides a right triangle. A triangle with hypotenuse $a$ and one leg $x$ has its other leg equal to $\\sqrt{a^2-x^2}$. Writing $x = a\\sin\\theta$ turns that root into $a\\cos\\theta$, so the square root <strong>disappears</strong> and you are left with an ordinary trig integral. The other two cases use the other Pythagorean identities:</p>
      <div class="math-block">$$1-\\sin^2\\theta=\\cos^2\\theta \\qquad 1+\\tan^2\\theta=\\sec^2\\theta \\qquad \\sec^2\\theta-1=\\tan^2\\theta$$</div>
      <p>In every case $a^2 \\pm x^2$ becomes a perfect square, so the root collapses to one trig term. Which one to use depends only on what is inside the root:</p>
      <ul>
        <li>$a^2 - x^2$ (minus $x^2$) &rarr; use <strong>sine</strong></li>
        <li>$a^2 + x^2$ (plus $x^2$) &rarr; use <strong>tangent</strong></li>
        <li>$x^2 - a^2$ ($x^2$ first) &rarr; use <strong>secant</strong></li>
      </ul>
    </div>

    <div class="content-card card-memory fade-up">
      <div class="card-badge">${Icons.brain} The 4-Step Method</div>
      <ol>
        <li><strong>Substitute</strong> for $x$ <em>and</em> for $dx$ (differentiate your substitution).</li>
        <li><strong>Simplify</strong> the root with the identity, then cancel what you can.</li>
        <li><strong>Integrate</strong> with respect to $\\theta$.</li>
        <li><strong>Draw the triangle</strong> from your substitution to turn $\\theta$ back into $x$.</li>
      </ol>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 9.3.1</span>
        <h4>Evaluate $\\displaystyle\\int \\frac{\\sqrt{9-x^2}}{x^2}\\,dx$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Pick the substitution ($a = 3$, minus $x^2$ so use sine)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$x = 3\\sin\\theta, \\qquad dx = 3\\cos\\theta\\,d\\theta, \\qquad \\sqrt{9-x^2} = \\sqrt{9\\cos^2\\theta} = 3\\cos\\theta$$
          <p>We take $-\\tfrac{\\pi}{2}\\le\\theta\\le\\tfrac{\\pi}{2}$, where $\\cos\\theta \\ge 0$, so no absolute value is needed.</p></div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Substitute everything and simplify</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int \\frac{3\\cos\\theta}{9\\sin^2\\theta}\\cdot 3\\cos\\theta\\,d\\theta = \\int \\frac{\\cos^2\\theta}{\\sin^2\\theta}\\,d\\theta = \\int \\cot^2\\theta\\,d\\theta$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Integrate using $\\cot^2\\theta = \\csc^2\\theta - 1$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int(\\csc^2\\theta - 1)\\,d\\theta = -\\cot\\theta - \\theta + C$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">4</div><div class="step-label">Draw the triangle to return to $x$</div><div class="step-chevron">▶</div></div>
          <div class="step-body"><p>Since $\\sin\\theta = \\dfrac{x}{3}$: opposite $= x$, hypotenuse $= 3$, adjacent $= \\sqrt{9-x^2}$ (Pythagoras). So $\\cot\\theta = \\dfrac{\\sqrt{9-x^2}}{x}$ and $\\theta = \\sin^{-1}\\!\\dfrac{x}{3}$.</p>
          $$\\int \\frac{\\sqrt{9-x^2}}{x^2}\\,dx = -\\frac{\\sqrt{9-x^2}}{x} - \\sin^{-1}\\!\\left(\\frac{x}{3}\\right) + C$$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 9.3.2</span>
        <h4>Evaluate $\\displaystyle\\int \\frac{dx}{x^2\\sqrt{x^2+4}}$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Pick the substitution ($a = 2$, plus $x^2$ so use tangent)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$x = 2\\tan\\theta, \\qquad dx = 2\\sec^2\\theta\\,d\\theta, \\qquad \\sqrt{x^2+4} = 2\\sec\\theta$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Substitute and simplify</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int \\frac{2\\sec^2\\theta}{4\\tan^2\\theta\\cdot 2\\sec\\theta}\\,d\\theta = \\frac{1}{4}\\int \\frac{\\sec\\theta}{\\tan^2\\theta}\\,d\\theta = \\frac{1}{4}\\int \\frac{\\cos\\theta}{\\sin^2\\theta}\\,d\\theta$$
          <p>(Rewrite in sines and cosines: $\\dfrac{\\sec\\theta}{\\tan^2\\theta} = \\dfrac{1/\\cos\\theta}{\\sin^2\\theta/\\cos^2\\theta} = \\dfrac{\\cos\\theta}{\\sin^2\\theta}$.)</p></div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Integrate with $u = \\sin\\theta$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\frac{1}{4}\\int \\frac{du}{u^2} = -\\frac{1}{4u} + C = -\\frac{1}{4\\sin\\theta} + C$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">4</div><div class="step-label">Draw the triangle to return to $x$</div><div class="step-chevron">▶</div></div>
          <div class="step-body"><p>Since $\\tan\\theta = \\dfrac{x}{2}$: opposite $= x$, adjacent $= 2$, hypotenuse $= \\sqrt{x^2+4}$. So $\\sin\\theta = \\dfrac{x}{\\sqrt{x^2+4}}$.</p>
          $$\\int \\frac{dx}{x^2\\sqrt{x^2+4}} = -\\frac{\\sqrt{x^2+4}}{4x} + C$$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 9.3.3</span>
        <h4>Evaluate $\\displaystyle\\int \\frac{\\sqrt{x^2-9}}{x}\\,dx \\quad (x > 3)$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Pick the substitution ($a = 3$, $x^2$ first so use secant)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$x = 3\\sec\\theta, \\qquad dx = 3\\sec\\theta\\tan\\theta\\,d\\theta, \\qquad \\sqrt{x^2-9} = 3\\tan\\theta$$
          <p>For $x>3$ we take $0<\\theta<\\tfrac{\\pi}{2}$, where $\\tan\\theta>0$.</p></div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Substitute and simplify</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int \\frac{3\\tan\\theta}{3\\sec\\theta}\\cdot 3\\sec\\theta\\tan\\theta\\,d\\theta = 3\\int \\tan^2\\theta\\,d\\theta = 3\\int(\\sec^2\\theta - 1)\\,d\\theta$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Integrate</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$3\\tan\\theta - 3\\theta + C$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">4</div><div class="step-label">Draw the triangle to return to $x$</div><div class="step-chevron">▶</div></div>
          <div class="step-body"><p>Since $\\sec\\theta = \\dfrac{x}{3}$: hypotenuse $= x$, adjacent $= 3$, opposite $= \\sqrt{x^2-9}$. So $\\tan\\theta = \\dfrac{\\sqrt{x^2-9}}{3}$ and $\\theta = \\sec^{-1}\\!\\dfrac{x}{3}$.</p>
          $$\\int \\frac{\\sqrt{x^2-9}}{x}\\,dx = \\sqrt{x^2-9} - 3\\sec^{-1}\\!\\left(\\frac{x}{3}\\right) + C$$</div>
        </div>
      </div>
    </div>

    <div class="content-card card-mistake fade-up">
      <div class="card-badge">${Icons.alertTriangle} Common Mistakes</div>
      <div class="card-title">Three traps</div>
      <ul>
        <li><strong>Forgetting $dx$ also changes.</strong> If $x = 3\\sin\\theta$ then $dx = 3\\cos\\theta\\,d\\theta$, not $d\\theta$.</li>
        <li><strong>Leaving the answer in $\\theta$.</strong> The question is in $x$, so finish with the triangle.</li>
        <li><strong>Writing $\\sqrt{9-x^2} = 3 - x$.</strong> A root never splits over subtraction; substitute first, then simplify.</li>
      </ul>
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
      <div class="dt-result" id="dt-product">→ <strong>Integration by Parts</strong> - use LIATE (§9.2)</div>
      <div class="dt-result" id="dt-trig">→ <strong>Trig Identities / Reduction Formulas</strong> (§9.4)</div>
      <div class="dt-result" id="dt-sub">→ <strong>$u$-Substitution</strong> - set $u = $ inner function</div>
    </div>

    
    <h2 id="ch9-sec4" class="section-heading fade-up"><span class="section-num">9.4</span> Trigonometric Integrals</h2>

    <h3 id="ch9-sec4-1" class="section-heading fade-up"><span class="section-num">9.4.1</span> Integrals Involving sin(kx) and cos(kx) with k ≠ 0</h3>
    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Rule - Linear Arguments</div>
      <div class="math-block">$$\\int \\sin(kx)\\,dx = -\\frac{1}{k}\\cos(kx) + C \\qquad \\int \\cos(kx)\\,dx = \\frac{1}{k}\\sin(kx) + C \\quad (k \\neq 0)$$</div>
    </div>

    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Why divide by $k$?</div>
      <p>By the chain rule, $\\dfrac{d}{dx}\\sin(kx) = k\\cos(kx)$: differentiating <em>adds</em> a factor of $k$. Integrating has to undo that, so we <strong>divide by $k$</strong>. (This is just a quick $u$-substitution with $u = kx$.)</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 9.4.1.1</span>
        <h4>Evaluate $\\displaystyle\\int_0^{\\pi/2}\\sin(2x)\\,dx$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Find the antiderivative ($k = 2$)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int \\sin(2x)\\,dx = -\\frac{1}{2}\\cos(2x) + C$$
          <p>Check: differentiating $-\\tfrac12\\cos 2x$ gives $-\\tfrac12\\cdot(-2\\sin 2x) = \\sin 2x$. &#10003;</p></div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Evaluate at the limits</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\left[-\\frac{1}{2}\\cos(2x)\\right]_0^{\\pi/2} = -\\frac{1}{2}\\cos\\pi + \\frac{1}{2}\\cos 0 = \\frac{1}{2} + \\frac{1}{2} = 1$$</div>
        </div>
      </div>
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

    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Why odd and even powers are treated differently</div>
      <p><strong>Odd power:</strong> $\\sin^3 x = \\sin^2 x\\cdot\\sin x$. Peeling off one $\\sin x$ leaves exactly what $du$ needs when $u = \\cos x$ (since $du = -\\sin x\\,dx$), and the even power left over converts to $\\cos x$ with $\\sin^2 x = 1-\\cos^2 x$.</p>
      <p><strong>Even power:</strong> there is no spare factor to use as $du$, so a substitution cannot start. Instead the half-angle identity <em>lowers the power</em> and brings in $\\cos 2x$, which we know how to integrate.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 9.4.2.1</span>
        <h4>Evaluate $\\displaystyle\\int \\sin^3 x\\,dx$ (odd power)</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Peel off one $\\sin x$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int \\sin^2 x\\cdot\\sin x\\,dx$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Convert the even part with $\\sin^2 x = 1-\\cos^2 x$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int (1-\\cos^2 x)\\sin x\\,dx$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Substitute $u = \\cos x$, $du = -\\sin x\\,dx$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$-\\int (1-u^2)\\,du = -u + \\frac{u^3}{3} + C$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">4</div><div class="step-label">Back to $x$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int \\sin^3 x\\,dx = -\\cos x + \\frac{\\cos^3 x}{3} + C$$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 9.4.2.2</span>
        <h4>Evaluate $\\displaystyle\\int \\cos^2 x\\,dx$ (even power)</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">No spare factor, so use the half-angle identity</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\cos^2 x = \\frac{1+\\cos 2x}{2}$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Integrate (the $\\cos 2x$ term uses the $1/k$ rule from 9.4.1)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\frac{1}{2}\\int (1+\\cos 2x)\\,dx = \\frac{1}{2}\\left(x + \\frac{\\sin 2x}{2}\\right) + C = \\frac{x}{2} + \\frac{\\sin 2x}{4} + C$$</div>
        </div>
      </div>
    </div>

    <div class="content-card card-mistake fade-up">
      <div class="card-badge">${Icons.alertTriangle} Common Mistake</div>
      <div class="math-block">$$\\text{WRONG: } \\int\\cos^2 x\\,dx = \\frac{\\cos^3 x}{3} \\qquad \\text{CORRECT: use } \\cos^2 x = \\tfrac{1+\\cos 2x}{2}$$</div>
      <p>The power rule only works when the derivative of the base is also present. There is no $\\sin x\\,dx$ here, so you cannot treat $\\cos x$ like a plain variable.</p>
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

    <div class="content-card card-exam fade-up">
      <div class="card-badge">${Icons.target} Exam Tip</div>
      <div class="card-title">Look for an odd power first</div>
      <p>Check the powers in this order: is the power of $\\cos x$ odd? Is the power of $\\sin x$ odd? If either is, use the quick $u$-substitution. Only use half-angle identities when <strong>both are even</strong>, because that route is the longest.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 9.4.3.1</span>
        <h4>Evaluate $\\displaystyle\\int \\sin^2 x\\cos^3 x\\,dx$ ($\\cos$ has an odd power)</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Save one $\\cos x\\,dx$ and convert the rest with $\\cos^2 x = 1-\\sin^2 x$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int \\sin^2 x\\,(1-\\sin^2 x)\\cos x\\,dx$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Substitute $u = \\sin x$, $du = \\cos x\\,dx$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int u^2(1-u^2)\\,du = \\int (u^2 - u^4)\\,du = \\frac{u^3}{3} - \\frac{u^5}{5} + C$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Back to $x$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\frac{\\sin^3 x}{3} - \\frac{\\sin^5 x}{5} + C$$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 9.4.3.2</span>
        <h4>Evaluate $\\displaystyle\\int \\sin^2 x\\cos^2 x\\,dx$ (both even)</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Combine first using $\\sin x\\cos x = \\tfrac12\\sin 2x$ (saves work)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\sin^2 x\\cos^2 x = \\left(\\tfrac12\\sin 2x\\right)^2 = \\frac{1}{4}\\sin^2 2x$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Half-angle identity on $\\sin^2 2x$ (the angle doubles to $4x$)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\frac{1}{4}\\cdot\\frac{1-\\cos 4x}{2} = \\frac{1-\\cos 4x}{8}$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Integrate</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int \\frac{1-\\cos 4x}{8}\\,dx = \\frac{x}{8} - \\frac{\\sin 4x}{32} + C$$</div>
        </div>
      </div>
    </div>

    <h3 id="ch9-sec4-4" class="section-heading fade-up"><span class="section-num">9.4.4</span> Products of sin and cos with Different Arguments</h3>
    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Product-to-Sum Identities</div>
      <div class="math-block">$$\\sin A \\cos B = \\frac{1}{2}\\Big[\\sin(A-B) + \\sin(A+B)\\Big]$$</div>
      <div class="math-block">$$\\sin A \\sin B = \\frac{1}{2}\\Big[\\cos(A-B) - \\cos(A+B)\\Big]$$</div>
      <div class="math-block">$$\\cos A \\cos B = \\frac{1}{2}\\Big[\\cos(A-B) + \\cos(A+B)\\Big]$$</div>
    </div>

    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Why we need these identities</div>
      <p>When the angles differ (say $3x$ and $5x$), no $u$-substitution works, because neither factor is the derivative of the other. The product-to-sum identities rewrite the product as a <strong>sum</strong> of single sines or cosines, and each of those integrates with the $1/k$ rule from 9.4.1.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 9.4.4.1</span>
        <h4>Evaluate $\\displaystyle\\int \\sin 3x\\cos 5x\\,dx$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Match the pattern $\\sin A\\cos B$ with $A = 3x$, $B = 5x$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\sin A\\cos B = \\tfrac12\\big[\\sin(A-B)+\\sin(A+B)\\big]$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Apply it (note $A-B = -2x$, and sine is odd)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\sin 3x\\cos 5x = \\tfrac12\\big[\\sin(-2x) + \\sin 8x\\big] = \\tfrac12\\big[-\\sin 2x + \\sin 8x\\big]$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Integrate each term with the $1/k$ rule</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\frac{1}{2}\\left[\\frac{\\cos 2x}{2} - \\frac{\\cos 8x}{8}\\right] + C = \\frac{\\cos 2x}{4} - \\frac{\\cos 8x}{16} + C$$</div>
        </div>
      </div>
    </div>

    <div class="content-card card-mistake fade-up">
      <div class="card-badge">${Icons.alertTriangle} Common Mistake</div>
      <p>$A - B$ is often negative. Use $\\sin(-\\theta) = -\\sin\\theta$ and $\\cos(-\\theta) = \\cos\\theta$ to tidy it up before integrating, otherwise the sign of the sine terms goes wrong.</p>
    </div>

    <h3 id="ch9-sec4-5" class="section-heading fade-up"><span class="section-num">9.4.5</span> Powers of tan(x) and cot(x)</h3>
    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Powers of Tan and Cot</div>
      <p>Use identity $\\tan^2 x = \\sec^2 x - 1$ or $\\cot^2 x = \\csc^2 x - 1$ iteratively:</p>
      <div class="math-block">$$\\int \\tan^n x \\, dx = \\int \\tan^{n-2} x (\\sec^2 x - 1) \\, dx = \\frac{\\tan^{n-1} x}{n-1} - \\int \\tan^{n-2} x \\, dx$$</div>
    </div>

    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Why it works</div>
      <p>This is the same trick as 9.4.2. Since $\\dfrac{d}{dx}\\tan x = \\sec^2 x$, a spare $\\sec^2 x\\,dx$ is exactly $du$ for $u = \\tan x$. The identity $\\tan^2 x = \\sec^2 x - 1$ is how we <strong>create</strong> that spare $\\sec^2 x$. Peel off $\\tan^2 x$, replace it, then split into two integrals.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 9.4.5.1</span>
        <h4>Evaluate $\\displaystyle\\int \\tan^2 x\\,dx$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Replace $\\tan^2 x$ with $\\sec^2 x - 1$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int (\\sec^2 x - 1)\\,dx$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Integrate each term</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int \\tan^2 x\\,dx = \\tan x - x + C$$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 9.4.5.2</span>
        <h4>Evaluate $\\displaystyle\\int \\tan^3 x\\,dx$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Peel off $\\tan^2 x$ and replace it</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int \\tan x\\,\\tan^2 x\\,dx = \\int \\tan x(\\sec^2 x - 1)\\,dx = \\int \\tan x\\sec^2 x\\,dx - \\int \\tan x\\,dx$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">First integral: $u = \\tan x$, $du = \\sec^2 x\\,dx$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int u\\,du = \\frac{\\tan^2 x}{2}$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Second integral: recall $\\displaystyle\\int \\tan x\\,dx = -\\ln|\\cos x|$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$-\\int \\tan x\\,dx = +\\ln|\\cos x|$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">4</div><div class="step-label">Combine</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int \\tan^3 x\\,dx = \\frac{\\tan^2 x}{2} + \\ln|\\cos x| + C \\quad\\Big(= \\frac{\\tan^2 x}{2} - \\ln|\\sec x| + C\\Big)$$</div>
        </div>
      </div>
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
      <p>An integral is <strong>improper</strong> if its interval of integration is infinite (<strong>Type I</strong>) or if the integrand has an infinite discontinuity somewhere on the interval (<strong>Type II</strong>). If both happen, it is <strong>doubly improper</strong> (&sect;10.3). In every case the idea is the same: replace the troublesome point by a variable, integrate normally, then take a limit. The integral <strong>converges</strong> if the limit exists and is finite; otherwise it <strong>diverges</strong>.</p>
    </div>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Definition - Type I, Case 1 (Upper Limit Infinite)</div>
      <div class="math-block">$$\\int_a^\\infty f(x)\\,dx = \\lim_{t\\to\\infty}\\int_a^t f(x)\\,dx$$</div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 10.1.1</span>
        <h4>Evaluate $\\displaystyle\\int_1^\\infty \\frac{1}{x^2}\\,dx$ <span style="font-weight:500;color:var(--text-3)">&mdash; Case 1</span></h4>
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

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Definition - Type I, Case 2 (Lower Limit Infinite)</div>
      <div class="math-block">$$\\int_{-\\infty}^b f(x)\\,dx = \\lim_{t\\to-\\infty}\\int_t^b f(x)\\,dx$$</div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 10.1.2</span>
        <h4>Evaluate $\\displaystyle\\int_{-\\infty}^{0} e^{2x}\\,dx$ <span style="font-weight:500;color:var(--text-3)">&mdash; Case 2</span></h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Replace $-\\infty$ with $t$ and integrate</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\lim_{t\\to-\\infty}\\int_t^0 e^{2x}\\,dx = \\lim_{t\\to-\\infty}\\left[\\frac{e^{2x}}{2}\\right]_t^0$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Evaluate and take the limit</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$= \\lim_{t\\to-\\infty}\\left(\\frac{1}{2}-\\frac{e^{2t}}{2}\\right) = \\frac12 - 0 = \\frac12$$</div>
            <p>As $t\\to-\\infty$, $e^{2t}\\to 0$. The integral <strong>converges</strong> to $\\frac12$. $\\checkmark$</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Definition - Type I, Case 3 (Both Limits Infinite)</div>
      <div class="math-block">$$\\int_{-\\infty}^{\\infty} f(x)\\,dx = \\int_{-\\infty}^{c} f(x)\\,dx + \\int_{c}^{\\infty} f(x)\\,dx$$</div>
      <p>Split at an arbitrary constant $c$ (any convenient value gives the same answer). The whole integral converges only if <strong>both</strong> pieces converge independently; if either diverges, the whole thing diverges.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 10.1.3</span>
        <h4>Evaluate $\\displaystyle\\int_{-\\infty}^{\\infty}\\frac{1}{1+x^2}\\,dx$ <span style="font-weight:500;color:var(--text-3)">&mdash; Case 3</span></h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Both limits are infinite: split at any convenient point (here $0$)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\int_{-\\infty}^{\\infty}\\frac{dx}{1+x^2} = \\int_{-\\infty}^{0}\\frac{dx}{1+x^2} + \\int_{0}^{\\infty}\\frac{dx}{1+x^2}$$</div>
            <p>The whole integral converges only if <em>both</em> pieces converge.</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Right piece: replace $\\infty$ with $t$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\lim_{t\\to\\infty}\\Big[\\arctan x\\Big]_0^t = \\frac{\\pi}{2} - 0 = \\frac{\\pi}{2}$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Left piece: replace $-\\infty$ with $s$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\lim_{s\\to-\\infty}\\Big[\\arctan x\\Big]_s^0 = 0 - \\left(-\\frac{\\pi}{2}\\right) = \\frac{\\pi}{2}$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">4</div><div class="step-label">Add the pieces</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\int_{-\\infty}^{\\infty}\\frac{dx}{1+x^2} = \\frac{\\pi}{2} + \\frac{\\pi}{2} = \\pi \\quad\\checkmark$$</div>
          </div>
        </div>
      </div>
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
        <span class="ex-badge">Worked Example 10.1.4</span>
        <h4>Does $\\displaystyle\\int_1^\\infty \\frac{1}{x}\\,dx$ converge? <span style="font-weight:500;color:var(--text-3)">&mdash; Case 1, divergent</span></h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Replace $\\infty$ with $t$ and integrate</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\lim_{t\\to\\infty}\\int_1^t \\frac{1}{x}\\,dx = \\lim_{t\\to\\infty}\\Big[\\ln|x|\\Big]_1^t$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Evaluate and take the limit</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$= \\lim_{t\\to\\infty}(\\ln t - \\ln 1) = \\lim_{t\\to\\infty}\\ln t = \\infty$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Conclusion</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>The limit is infinite, so the integral <strong>diverges</strong>. Here $p = 1$, the borderline case of the $p$-integral test. Compare with Worked Example 10.1.1: both $\\frac{1}{x}$ and $\\frac{1}{x^2}$ shrink to $0$, but $\\frac{1}{x}$ shrinks too slowly for the total area to stay finite.</p>
          </div>
        </div>
      </div>
    </div>

    <h2 id="ch10-sec2" class="section-heading fade-up"><span class="section-num">10.2</span> Type II: Infinite Discontinuities</h2>

    <div class="prose fade-up">
      <p>Here the integrand blows up at a point of $[a,b]$. We stay away from the bad point with a one-sided limit. Which case you are in depends on <em>where</em> the discontinuity sits.</p>
    </div>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Definition - Type II, Case 1 (Discontinuity at the Upper Endpoint $b$)</div>
      <div class="math-block">$$\\int_a^b f(x)\\,dx = \\lim_{t\\to b^-}\\int_a^t f(x)\\,dx$$</div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 10.2.1</span>
        <h4>Evaluate $\\displaystyle\\int_0^4 \\frac{dx}{\\sqrt{4-x}}$ <span style="font-weight:500;color:var(--text-3)">&mdash; Case 1</span></h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">The integrand blows up at $x=4$ (upper endpoint): approach it from the left</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\lim_{t\\to 4^-}\\int_0^t (4-x)^{-1/2}\\,dx = \\lim_{t\\to 4^-}\\Big[-2\\sqrt{4-x}\\Big]_0^t$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Evaluate and take the limit</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$= \\lim_{t\\to 4^-}\\left(-2\\sqrt{4-t}+2\\sqrt4\\right) = 0+4 = 4$$</div>
            <p>The integral <strong>converges</strong> to $4$. $\\checkmark$</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Definition - Type II, Case 2 (Discontinuity at the Lower Endpoint $a$)</div>
      <div class="math-block">$$\\int_a^b f(x)\\,dx = \\lim_{t\\to a^+}\\int_t^b f(x)\\,dx$$</div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 10.2.2</span>
        <h4>Does $\\displaystyle\\int_0^1 \\frac{1}{x}\\,dx$ converge? <span style="font-weight:500;color:var(--text-3)">&mdash; Case 2</span></h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Spot the problem: $\\frac{1}{x}$ blows up at the endpoint $x=0$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>Stay away from the bad point by starting at $t$ and letting $t\\to 0^+$:</p>
            <div class="math-block">$$\\lim_{t\\to 0^+}\\int_t^1 \\frac{dx}{x} = \\lim_{t\\to 0^+}\\Big[\\ln x\\Big]_t^1$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Evaluate and take the limit</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$= \\lim_{t\\to 0^+}(\\ln 1 - \\ln t) = \\lim_{t\\to 0^+}(-\\ln t) = \\infty$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Conclusion</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>The integral <strong>diverges</strong>. For a Type II integral with the problem at $0$, $\\int_0^1 x^{-p}\\,dx$ converges when $p<1$ and diverges when $p\\geq 1$ (the reverse of Type I). Example 10.2 below has $p=\\tfrac12$ and converges.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Definition - Type II, Case 3 (Discontinuity at an Interior Point $c\\in(a,b)$)</div>
      <div class="math-block">$$\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx = \\lim_{t\\to c^-}\\int_a^t f(x)\\,dx + \\lim_{t\\to c^+}\\int_t^b f(x)\\,dx$$</div>
      <p>You <strong>must</strong> split at $c$. If either piece diverges, the entire integral diverges.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 10.2.3</span>
        <h4>Evaluate $\\displaystyle\\int_0^2 \\frac{dx}{(x-1)^2}$ if it converges <span style="font-weight:500;color:var(--text-3)">&mdash; Case 3</span></h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">The discontinuity $x=1$ lies <em>inside</em> $[0,2]$: split there</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>Applying the Fundamental Theorem straight through, $\\left[-\\frac{1}{x-1}\\right]_0^2 = -2$, is wrong: a positive function cannot have a negative area. Split at $x=1$:</p>
            <div class="math-block">$$\\int_0^2 \\frac{dx}{(x-1)^2} = \\int_0^1 \\frac{dx}{(x-1)^2} + \\int_1^2 \\frac{dx}{(x-1)^2}$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Left piece: approach $1$ from the left ($t\\to 1^-$)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\lim_{t\\to 1^-}\\left[-\\frac{1}{x-1}\\right]_0^t = \\lim_{t\\to 1^-}\\left(-\\frac{1}{t-1} - 1\\right) = \\infty$$</div>
            <p>As $t\\to 1^-$, $t-1$ is a tiny <em>negative</em> number, so $-\\frac{1}{t-1}\\to +\\infty$.</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Conclusion</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>One divergent piece is enough: the whole integral <strong>diverges</strong>.</p>
          </div>
        </div>
      </div>
    </div>

    <h2 id="ch10-sec3" class="section-heading fade-up"><span class="section-num">10.3</span> Doubly Improper Integrals</h2>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Definition - Doubly Improper (Type I and Type II Together)</div>
      <p>An integral is doubly improper when it has an infinite limit of integration <em>and</em> an infinite discontinuity on the domain, e.g. $\\int_0^\\infty f(x)\\,dx$ where $f$ blows up at $x=0$.</p>
      <p>Split the interval so that <strong>each piece has only one problem</strong>, then treat each piece with the matching Type I or Type II case:</p>
      <div class="math-block">$$\\int_0^\\infty f(x)\\,dx = \\underbrace{\\int_0^{c} f(x)\\,dx}_{\\text{Type II at } 0} + \\underbrace{\\int_c^\\infty f(x)\\,dx}_{\\text{Type I}}, \\qquad c>0$$</div>
      <p>The whole integral converges only if <strong>every</strong> piece converges.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 10.3.1</span>
        <h4>Evaluate $\\displaystyle\\int_0^\\infty \\frac{dx}{\\sqrt{x}\\,(1+x)}$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Identify both problems</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>The upper limit is $\\infty$ (Type I) and the integrand blows up at $x=0$ (Type II). Split at $c=1$:</p>
            <div class="math-block">$$\\int_0^\\infty \\frac{dx}{\\sqrt x(1+x)} = \\int_0^1 \\frac{dx}{\\sqrt x(1+x)} + \\int_1^\\infty \\frac{dx}{\\sqrt x(1+x)}$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Find an antiderivative with $u=\\sqrt x$, $dx=2u\\,du$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\int\\frac{dx}{\\sqrt x(1+x)} = \\int\\frac{2u\\,du}{u(1+u^2)} = 2\\arctan u = 2\\arctan\\sqrt x$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">First piece (Type II at $0$): $t\\to 0^+$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\lim_{t\\to0^+}\\Big[2\\arctan\\sqrt x\\Big]_t^1 = 2\\cdot\\frac{\\pi}{4}-0 = \\frac{\\pi}{2}$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">4</div><div class="step-label">Second piece (Type I): $s\\to\\infty$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\lim_{s\\to\\infty}\\Big[2\\arctan\\sqrt x\\Big]_1^s = 2\\cdot\\frac{\\pi}{2}-2\\cdot\\frac{\\pi}{4} = \\frac{\\pi}{2}$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">5</div><div class="step-label">Add the pieces</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\int_0^\\infty \\frac{dx}{\\sqrt x(1+x)} = \\frac{\\pi}{2}+\\frac{\\pi}{2} = \\pi \\quad\\checkmark$$</div>
            <p>Both pieces converged, so the doubly improper integral <strong>converges</strong>. Had either diverged, so would the whole.</p>
          </div>
        </div>
      </div>
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
      <div class="card-badge">${Icons.book} Definition - Sequence</div>
      <p>A <strong>sequence</strong> is an ordered list of numbers $\\{a_1, a_2, a_3, \\ldots\\} = \\{a_n\\}_{n=1}^\\infty$. It <strong>converges</strong> to $L$ if $\\lim_{n\\to\\infty} a_n = L$ (finite). Otherwise it diverges.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.1.1</span>
        <h4>Do $a_n = \\dfrac{3n^2+1}{n^2+n}$ and $b_n = (-1)^n$ converge?</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">(a) Divide top and bottom by the highest power, $n^2$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$a_n = \\frac{3 + \\frac{1}{n^2}}{1 + \\frac{1}{n}} \\;\\longrightarrow\\; \\frac{3+0}{1+0} = 3$$</div>
            <p>The limit is finite, so $\\{a_n\\}$ <strong>converges</strong> to $3$.</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">(b) List the first few terms</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$b_n:\\; -1,\\; 1,\\; -1,\\; 1,\\; \\ldots$$</div>
            <p>The terms keep jumping between $-1$ and $1$ and never settle, so $\\lim b_n$ does not exist: $\\{b_n\\}$ <strong>diverges</strong>.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Squeeze Theorem for Sequences</div>
      <p>If $a_n \\leq b_n \\leq c_n$ for all $n$ and $\\lim a_n = \\lim c_n = L$, then $\\lim b_n = L$.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.1.2</span>
        <h4>Find $\\displaystyle\\lim_{n\\to\\infty}\\frac{\\sin n}{n}$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Trap $\\sin n$ between known bounds</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>Since $-1\\leq \\sin n\\leq 1$, dividing by $n>0$ gives</p>
            <div class="math-block">$$-\\frac{1}{n}\\leq \\frac{\\sin n}{n}\\leq \\frac{1}{n}$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Check that both outer sequences have the same limit</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\lim_{n\\to\\infty}\\left(-\\frac{1}{n}\\right) = 0 \\qquad\\text{and}\\qquad \\lim_{n\\to\\infty}\\frac{1}{n} = 0$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Apply the Squeeze Theorem</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\lim_{n\\to\\infty}\\frac{\\sin n}{n} = 0 \\quad\\checkmark$$</div>
            <p>Plugging in fails because $\\sin n$ has no limit on its own; the squeeze works because the denominator $n$ crushes the bounded numerator.</p>
          </div>
        </div>
      </div>
    </div>

    <h2 id="ch11-sec2" class="section-heading fade-up"><span class="section-num">11.2</span> Series</h2>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Definition - Infinite Series</div>
      <div class="card-title">Infinite Series & Partial Sums</div>
      <div class="math-block">$$\\sum_{n=1}^\\infty a_n = \\lim_{N\\to\\infty} S_N \\quad \\text{where } S_N = \\sum_{n=1}^N a_n$$</div>
      <p>The series converges if and only if the sequence of partial sums $\\{S_N\\}$ converges.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.2.1</span>
        <h4>Find the sum of $\\displaystyle\\sum_{n=1}^\\infty \\frac{1}{n(n+1)}$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Split the general term with partial fractions</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Write out the partial sum $S_N$: almost everything cancels</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$S_N = \\left(1-\\tfrac12\\right)+\\left(\\tfrac12-\\tfrac13\\right)+\\cdots+\\left(\\tfrac1N-\\tfrac1{N+1}\\right) = 1 - \\frac{1}{N+1}$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Take the limit of the partial sums</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\sum_{n=1}^\\infty \\frac{1}{n(n+1)} = \\lim_{N\\to\\infty}S_N = \\lim_{N\\to\\infty}\\left(1-\\frac{1}{N+1}\\right) = 1 \\quad\\checkmark$$</div>
            <p>This is exactly the definition above: the series equals the limit of its partial sums.</p>
          </div>
        </div>
      </div>
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

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.2.2</span>
        <h4>Find $\\displaystyle\\sum_{n=1}^\\infty \\frac{2^{n+1}}{5^n}$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Rewrite the term in the form $a r^n$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\frac{2^{n+1}}{5^n} = 2\\cdot\\frac{2^n}{5^n} = 2\\left(\\frac{2}{5}\\right)^n$$</div>
            <p>So the common ratio is $r = \\frac{2}{5}$, and $|r|<1$, so the series converges.</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Find the first term (the sum starts at $n=1$, not $n=0$)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$a = \\frac{2^{1+1}}{5^1} = \\frac{4}{5}$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Apply $\\dfrac{\\text{first term}}{1-r}$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\sum_{n=1}^\\infty \\frac{2^{n+1}}{5^n} = \\frac{4/5}{1-2/5} = \\frac{4/5}{3/5} = \\frac{4}{3} \\quad\\checkmark$$</div>
          </div>
        </div>
      </div>
    </div>

    <h2 id="ch11-sec3" class="section-heading fade-up"><span class="section-num">11.3</span> Convergence Tests</h2>
    <h3 id="ch11-sec3-1" class="section-heading fade-up"><span class="section-num">11.3.1</span> The Integral Test</h3>
    
    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Theorem - The Integral Test</div>
      <p>Suppose $f$ is a continuous, positive, decreasing function on $[1, \\infty)$ and let $a_n = f(n)$:</p>
      <div class="math-block">$$\\sum_{n=1}^\\infty a_n \\text{ converges if and only if } \\int_1^\\infty f(x)\\,dx \\text{ converges}$$</div>
      <div class="card-badge">${Icons.target} Remainder Estimate</div>
      <div class="math-block">$$\\int_{n+1}^\\infty f(x)\\,dx \\leq R_n \\leq \\int_n^\\infty f(x)\\,dx \\quad \\text{where } R_n = S - S_n$$</div>
    </div>
    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Why it works</div>
      <p>The sum $\\sum f(n)$ is the total area of rectangles of width $1$ and height $f(n)$. Because $f$ is decreasing:</p>
      <ul>
        <li>Rectangles drawn <em>to the right</em> stay below the curve, so the sum is at most $a_1 + \\int_1^\\infty f$. If the integral is finite, so is the sum.</li>
        <li>Rectangles drawn <em>to the left</em> stick out above the curve, so the sum is at least $\\int_1^\\infty f$. If the integral is infinite, so is the sum.</li>
      </ul>
      <p>This is why $f$ must be <strong>continuous, positive and decreasing</strong>: the comparison with area breaks without them.</p>
    </div>

    <div class="content-card card-memory fade-up">
      <div class="card-badge">${Icons.brain} Your two benchmark series</div>
      <ul>
        <li><strong>$p$-series</strong> $\\displaystyle\\sum_{n=1}^\\infty \\frac{1}{n^p}$: converges if $p > 1$, diverges if $p \\le 1$. (This is the Integral Test applied to $\\int_1^\\infty x^{-p}\\,dx$, which is finite exactly when $p > 1$.)</li>
        <li><strong>Geometric series</strong> $\\displaystyle\\sum_{n=0}^\\infty ar^n$: converges if $|r| < 1$, with sum $\\dfrac{a}{1-r}$; diverges if $|r| \\ge 1$.</li>
      </ul>
      <p>The Comparison Tests below measure everything else against these two.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.3.1.1</span>
        <h4>Use the Integral Test on $\\displaystyle\\sum_{n=1}^\\infty \\frac{1}{n^2+1}$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Choose $f$ with $f(n)=a_n$ and check its conditions</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>$f(x) = \\dfrac{1}{x^2+1}$ is continuous and positive on $[1,\\infty)$, and decreasing because the denominator keeps growing.</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Test the improper integral (Chapter 10 at work)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\int_1^\\infty \\frac{dx}{x^2+1} = \\lim_{t\\to\\infty}\\Big[\\arctan x\\Big]_1^t = \\frac{\\pi}{2} - \\frac{\\pi}{4} = \\frac{\\pi}{4}$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Conclude</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>The integral converges, so the series <strong>converges</strong>. $\\checkmark$</p>
            <p>Careful: $\\frac{\\pi}{4}$ is <em>not</em> the sum of the series. The Integral Test only tells you whether it converges.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.3.1.2</span>
        <h4>Does $\\displaystyle\\sum_{n=2}^\\infty \\frac{1}{n\\ln n}$ converge?</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Check the conditions for $f(x) = \\dfrac{1}{x\\ln x}$ on $[2,\\infty)$</div><div class="step-chevron">▶</div></div>
          <div class="step-body"><p>It is continuous and positive for $x \\ge 2$, and decreasing because $x\\ln x$ increases. (The series starts at $n = 2$ because $\\ln 1 = 0$ would make the first term undefined.)</p></div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Substitute $u = \\ln x$ in the improper integral</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\int_2^\\infty \\frac{dx}{x\\ln x} = \\lim_{t\\to\\infty}\\Big[\\ln|\\ln x|\\Big]_2^t = \\lim_{t\\to\\infty}\\big(\\ln\\ln t - \\ln\\ln 2\\big) = \\infty$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Conclude</div><div class="step-chevron">▶</div></div>
          <div class="step-body"><p>The integral diverges, so the series <strong>diverges</strong>. It diverges extremely slowly, but it does diverge. &#10003;</p></div>
        </div>
      </div>
    </div>

    <div class="content-card card-mistake fade-up">
      <div class="card-badge">${Icons.alertTriangle} Common Mistakes</div>
      <ul>
        <li><strong>Not checking "decreasing".</strong> A function like $\\dfrac{2+\\sin n}{n}$ is not decreasing, so the test cannot be used.</li>
        <li><strong>Treating the integral as the sum.</strong> The integral's value only tells you convergence, not $\\sum a_n$.</li>
        <li><strong>Integrating from the wrong start.</strong> Match the lower limit to where the series starts.</li>
      </ul>
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
    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Why it works</div>
      <p><strong>Direct:</strong> if your terms are smaller than the terms of a series that adds to a finite number, your total can't be bigger than that finite number. If your terms are bigger than those of a series that blows up, yours blows up too.</p>
      <p><strong>Limit:</strong> if $\\dfrac{a_n}{b_n} \\to L$ with $0 < L < \\infty$, then for large $n$, $a_n \\approx L\\,b_n$. The tails are constant multiples of each other, so they behave the same way.</p>
    </div>

    <div class="content-card card-memory fade-up">
      <div class="card-badge">${Icons.brain} Choosing $b_n$ and the test</div>
      <ul>
        <li><strong>Choosing $b_n$:</strong> keep only the dominant term on top and bottom. $\\dfrac{2n+1}{n^2+3} \\to \\dfrac{2n}{n^2} \\to \\dfrac1n$ (constants don't matter). Use a $p$-series or geometric series.</li>
        <li><strong>Direct Comparison</strong> when the inequality is obvious <em>and points the right way</em>.</li>
        <li><strong>Limit Comparison</strong> when the inequality goes the wrong way or is messy (typical for subtraction in the denominator).</li>
      </ul>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.3.2.1</span>
        <h4>Does $\\displaystyle\\sum_{n=1}^\\infty \\frac{1}{2^n+1}$ converge? (Direct Comparison)</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Compare with a simpler series</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>A bigger denominator means a smaller fraction, so $$\\frac{1}{2^n+1} < \\frac{1}{2^n}$$</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Is the bigger series known?</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>$\\sum \\frac{1}{2^n}$ is geometric with $r=\\frac12$, $|r|<1$, so it converges.</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Conclude</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>Our positive series is smaller than a convergent one, so it <strong>converges</strong> by the Direct Comparison Test. $\\checkmark$</p>
            <p>Direction matters: being <em>smaller</em> than a convergent series proves convergence; being smaller than a divergent one proves nothing.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.3.2.2</span>
        <h4>Does $\\displaystyle\\sum_{n=1}^\\infty \\frac{2n+1}{n^2+3}$ converge? (Limit Comparison)</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Pick $b_n$ from the dominant terms</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>The top behaves like $2n$ and the bottom like $n^2$, so $a_n$ behaves like $\\frac{1}{n}$:</p>
            <div class="math-block">$$a_n = \\frac{2n+1}{n^2+3}, \\qquad b_n = \\frac{1}{n}$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Compute $\\lim a_n/b_n$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\lim_{n\\to\\infty}\\frac{(2n+1)\\,n}{n^2+3} = \\lim_{n\\to\\infty}\\frac{2n^2+n}{n^2+3} = 2$$</div>
            <p>Since $0<2<\\infty$, both series do the same thing.</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Decide using $\\sum b_n$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>$\\sum\\frac{1}{n}$ is the harmonic series ($p$-series with $p=1$), which diverges. So $\\sum\\frac{2n+1}{n^2+3}$ <strong>diverges</strong>. $\\checkmark$</p>
          </div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.3.2.3</span>
        <h4>Does $\\displaystyle\\sum_{n=1}^\\infty \\frac{1}{2^n - 1}$ converge?</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Try Direct Comparison with $\\dfrac{1}{2^n}$: the inequality goes the wrong way</div><div class="step-chevron">▶</div></div>
          <div class="step-body"><p>Subtracting $1$ makes the denominator smaller, so $\\dfrac{1}{2^n - 1} > \\dfrac{1}{2^n}$. Being <em>bigger</em> than a convergent series proves nothing, so Direct Comparison fails.</p></div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Switch to Limit Comparison with $b_n = \\dfrac{1}{2^n}$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\lim_{n\\to\\infty}\\frac{1/(2^n-1)}{1/2^n} = \\lim_{n\\to\\infty}\\frac{2^n}{2^n-1} = 1$$
          <p>Since $0 < 1 < \\infty$, both series behave the same way.</p></div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Decide using $\\sum b_n$</div><div class="step-chevron">▶</div></div>
          <div class="step-body"><p>$\\sum \\dfrac{1}{2^n}$ is geometric with $r = \\tfrac12$, so it converges. Therefore $\\sum \\dfrac{1}{2^n - 1}$ <strong>converges</strong>. &#10003;</p></div>
        </div>
      </div>
    </div>

    <div class="content-card card-mistake fade-up">
      <div class="card-badge">${Icons.alertTriangle} Common Mistakes</div>
      <ul>
        <li><strong>Wrong direction.</strong> Smaller than a <em>divergent</em> series, or bigger than a <em>convergent</em> series, proves nothing.</li>
        <li><strong>Limit Comparison with $L = 0$ or $L = \\infty$.</strong> The test needs $0 < L < \\infty$. Otherwise pick a different $b_n$.</li>
        <li><strong>Negative terms.</strong> Both tests need positive terms. If $a_n$ changes sign, look at $|a_n|$ or use another test.</li>
      </ul>
    </div>

    <h3 id="ch11-sec3-3" class="section-heading fade-up"><span class="section-num">11.3.3</span> Alternating Series</h3>
    
    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Theorem - Alternating Series Test (Leibniz)</div>
      <p>The alternating series $\\sum_{n=1}^\\infty (-1)^{n-1} b_n$ ($b_n > 0$) converges if:</p>
      <ol>
        <li>$b_{n+1} \\leq b_n$ for all $n$ (decreasing)</li>
        <li>$\\displaystyle\\lim_{n \\to \\infty} b_n = 0$</li>
      </ol>
      <p><strong>Estimation Theorem:</strong> $|R_n| = |S - S_n| \\leq b_{n+1}$.</p>
    </div>
    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Why it works</div>
      <p>Look at the partial sums: add $b_1$, subtract $b_2$, add $b_3$, and so on. Each step goes back the other way by a smaller amount, and the steps shrink to $0$. The partial sums bounce left and right, squeezing in on one value.</p>
      <p>The true sum is always trapped between two consecutive partial sums, so stopping after $n$ terms gives an error of at most the <em>first omitted term</em>, $b_{n+1}$.</p>
    </div>

    <div class="content-card card-exam fade-up">
      <div class="card-badge">${Icons.target} Exam Tip</div>
      <div class="card-title">The three checks</div>
      <p>Always write out all three checks:</p>
      <ol>
        <li>$b_n > 0$ (the signs really alternate).</li>
        <li>$b_n$ is decreasing, i.e. $b_{n+1} \\le b_n$.</li>
        <li>$\\lim b_n = 0$.</li>
      </ol>
      <p>If $\\lim b_n \\ne 0$ the series <strong>diverges</strong> (Divergence Test). If $b_n \\to 0$ but $b_n$ is not decreasing, this test is simply <strong>inconclusive</strong>.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.3.3.1</span>
        <h4>Does $\\displaystyle\\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{\\sqrt{n}}$ converge?</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Identify $b_n$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>The series has the form $\\sum(-1)^{n-1}b_n$ with $b_n = \\dfrac{1}{\\sqrt n} > 0$.</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Condition 1: is $b_n$ decreasing?</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\sqrt{n+1} > \\sqrt{n} \\;\\Longrightarrow\\; b_{n+1} = \\frac{1}{\\sqrt{n+1}} < \\frac{1}{\\sqrt n} = b_n \\quad\\checkmark$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Condition 2: does $b_n\\to 0$?</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\lim_{n\\to\\infty}\\frac{1}{\\sqrt n} = 0 \\quad\\checkmark$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">4</div><div class="step-label">Conclude</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>Both conditions hold, so the series <strong>converges</strong> by the Alternating Series Test.</p>
            <p>Note that $\\sum\\frac{1}{\\sqrt n}$ on its own diverges ($p=\\frac12$). The series converges only because the alternating signs cancel. The next subsection gives this a name.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.3.3.2</span>
        <h4>How many terms of $\\displaystyle\\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n^2}$ guarantee an error less than $0.001$?</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Use the estimate $|R_n| \\le b_{n+1}$ with $b_n = \\dfrac{1}{n^2}$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$|R_n| \\le \\frac{1}{(n+1)^2}$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Require the bound to be less than $0.001$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\frac{1}{(n+1)^2} < 0.001 \\;\\Longrightarrow\\; (n+1)^2 > 1000 \\;\\Longrightarrow\\; n + 1 > 31.6$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Round up</div><div class="step-chevron">▶</div></div>
          <div class="step-body"><p>$n + 1 \\ge 32$, so $n \\ge 31$. Check: $b_{32} = \\dfrac{1}{1024} \\approx 0.00098 < 0.001$. &#10003;</p>
          <p>Using the first <strong>31 terms</strong> guarantees the error is below $0.001$.</p></div>
        </div>
      </div>
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
    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Definition - Absolute vs Conditional Convergence</div>
      <ul>
        <li><strong>Absolutely convergent:</strong> $\\sum |a_n|$ converges. In that case $\\sum a_n$ converges too.</li>
        <li><strong>Conditionally convergent:</strong> $\\sum a_n$ converges but $\\sum |a_n|$ diverges. The series only works because of the cancellation between positive and negative terms.</li>
      </ul>
    </div>

    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Why Ratio and Root work</div>
      <p>If $\\left|\\dfrac{a_{n+1}}{a_n}\\right| \\to L < 1$, then eventually each term is about $L$ times the previous one. The tail looks like a geometric series with ratio $L$, which converges. If $L > 1$ the terms grow, so the series diverges.</p>
      <p>When $L = 1$ the tail could look like $\\sum\\frac1n$ (diverges) or $\\sum\\frac{1}{n^2}$ (converges), and both give $L = 1$. That is why the test says nothing.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.3.4.1</span>
        <h4>Test $\\displaystyle\\sum_{n=0}^\\infty \\frac{(-1)^n\\,2^n}{n!}$ for absolute convergence (Ratio Test)</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Form $\\left|\\dfrac{a_{n+1}}{a_n}\\right|$ (the absolute value removes the $(-1)^n$)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{2^{n+1}}{(n+1)!}\\cdot\\frac{n!}{2^n} = \\frac{2}{n+1}$$</div>
            <p>Because $(n+1)! = (n+1)\\cdot n!$, the factorials collapse. That is why factorials call for the Ratio Test.</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Take the limit</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$L = \\lim_{n\\to\\infty}\\frac{2}{n+1} = 0 < 1$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Conclude</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>By the Ratio Test the series <strong>converges absolutely</strong>, so it also converges. $\\checkmark$ (It sums to $e^{-2}$.)</p>
          </div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.3.4.2</span>
        <h4>Test $\\displaystyle\\sum_{n=1}^\\infty \\left(\\frac{2n+1}{3n+4}\\right)^n$ (Root Test)</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">The whole term is raised to the $n$: take $\\sqrt[n]{|a_n|}$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\sqrt[n]{|a_n|} = \\sqrt[n]{\\left(\\frac{2n+1}{3n+4}\\right)^n} = \\frac{2n+1}{3n+4}$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Take the limit</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$L = \\lim_{n\\to\\infty}\\frac{2n+1}{3n+4} = \\frac{2}{3} < 1$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Conclude</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>By the Root Test the series <strong>converges absolutely</strong>. $\\checkmark$</p>
          </div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.3.4.3</span>
        <h4>Classify $\\displaystyle\\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n}$ as absolutely or conditionally convergent</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Does the series itself converge? (Alternating Series Test)</div><div class="step-chevron">▶</div></div>
          <div class="step-body"><p>$b_n = \\tfrac1n$ is positive, decreasing and tends to $0$, so the series <strong>converges</strong>.</p></div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Does the series of absolute values converge?</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\sum_{n=1}^\\infty \\left|\\frac{(-1)^{n-1}}{n}\\right| = \\sum_{n=1}^\\infty \\frac{1}{n}$$
          <p>This is the harmonic series ($p = 1$), which <strong>diverges</strong>.</p></div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Conclude</div><div class="step-chevron">▶</div></div>
          <div class="step-body"><p>It converges, but not absolutely, so it is <strong>conditionally convergent</strong>. &#10003;</p></div>
        </div>
      </div>
    </div>

    <div class="content-card card-mistake fade-up">
      <div class="card-badge">${Icons.alertTriangle} Common Mistakes</div>
      <ul>
        <li><strong>Reading $L = 1$ as "diverges".</strong> It means inconclusive. Switch to another test (for example $\\sum\\frac{1}{n^2}$ gives $L = 1$ but converges).</li>
        <li><strong>Using the Ratio Test on polynomial terms.</strong> For terms like $\\frac{1}{n^2+1}$, $L$ is always $1$. The Ratio Test is for factorials and exponentials.</li>
        <li><strong>Forgetting the absolute value</strong> in $\\left|\\frac{a_{n+1}}{a_n}\\right|$, which breaks alternating series.</li>
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

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.3.5.1</span>
        <h4>Does $\\displaystyle\\sum_{n=1}^\\infty \\frac{n^2+1}{2n^2+3}$ converge? (Divergence Test)</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Strategy step 1: look at $\\lim a_n$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\lim_{n\\to\\infty}\\frac{n^2+1}{2n^2+3} = \\frac{1}{2} \\neq 0$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Conclude</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>The terms do not approach $0$, so the series <strong>diverges</strong>. $\\checkmark$</p>
            <p>The converse is false: $\\sum\\frac{1}{n}$ has $a_n\\to 0$ yet still diverges, so a limit of $0$ tells you nothing.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content-card card-exam fade-up">
      <div class="card-badge">${Icons.target} Exam Tip - Test Selection</div>
      <div style="display:grid;gap:8px;margin-top:8px;font-size:.85rem">
        <div style="background:var(--surface-2);border-left:3px solid var(--blue);border-radius:8px;padding:10px"><strong>Geometric or $p$-series:</strong> Recognise the form and apply directly.</div>
        <div style="background:var(--surface-2);border-left:3px solid var(--accent);border-radius:8px;padding:10px"><strong>Factorial or $n$-th power:</strong> Use <strong>Ratio Test</strong>.</div>
        <div style="background:var(--surface-2);border-left:3px solid var(--green);border-radius:8px;padding:10px"><strong>Alternating signs:</strong> Use <strong>Alternating Series Test</strong>.</div>
        <div style="background:var(--surface-2);border-left:3px solid var(--yellow);border-radius:8px;padding:10px"><strong>Looks like a known convergent series:</strong> Use <strong>Comparison or Limit Comparison</strong>.</div>
        <div style="background:var(--surface-2);border-left:3px solid var(--teal);border-radius:8px;padding:10px"><strong>Can integrate $f(x)$:</strong> Use <strong>Integral Test</strong>.</div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.3.5.2</span>
        <h4>Choose a test, then apply it: (a) $\\displaystyle\\sum_{n=1}^\\infty\\frac{(-1)^n}{n+1}$ &nbsp; (b) $\\displaystyle\\sum_{n=1}^\\infty\\frac{n+1}{n^3+2n}$ &nbsp; (c) $\\displaystyle\\sum_{n=1}^\\infty\\frac{3^n}{n!}$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">First check $a_n\\to 0$ for all three</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>(a) $\\frac{1}{n+1}\\to 0$, (b) $\\frac{n+1}{n^3+2n}\\to 0$, (c) $\\frac{3^n}{n!}\\to 0$. The Divergence Test is silent, so let the <em>form</em> of $a_n$ pick the test.</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">(a) Alternating signs: Alternating Series Test</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>$b_n = \\dfrac{1}{n+1}$ is decreasing and tends to $0$, so (a) <strong>converges</strong>.</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">(b) Ratio of polynomials in $n$: Limit Comparison with a $p$-series</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>Degree $1$ over degree $3$ means it behaves like $\\frac{1}{n^2}$:</p>
            <div class="math-block">$$\\lim_{n\\to\\infty}\\frac{(n+1)/(n^3+2n)}{1/n^2} = \\lim_{n\\to\\infty}\\frac{n^3+n^2}{n^3+2n} = 1$$</div>
            <p>$\\sum\\frac{1}{n^2}$ converges ($p=2$), so (b) <strong>converges</strong>.</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">4</div><div class="step-label">(c) Factorial: Ratio Test</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\frac{3^{n+1}/(n+1)!}{3^n/n!} = \\frac{3}{n+1} \\;\\longrightarrow\\; 0 < 1$$</div>
            <p>So (c) <strong>converges absolutely</strong>. $\\checkmark$</p>
          </div>
        </div>
      </div>
    </div>

    <h2 id="ch11-sec4" class="section-heading fade-up"><span class="section-num">11.4</span> Power Series</h2>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Definition - Power Series</div>
      <p>A series of the form:</p>
      <div class="math-block">$$\\sum_{n=0}^\\infty c_n(x-a)^n$$</div>
      <p>This is an infinite polynomial centered at $x=a$. It converges at $x=a$ always. To find the <strong>Radius of Convergence $R$</strong>, use the <strong>Ratio Test</strong> on the absolute value of the terms.</p>
    </div>

    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} What "radius of convergence" means</div>
      <p>Every power series $\\sum c_n(x-a)^n$ behaves in exactly one of three ways:</p>
      <ul>
        <li><strong>$R = 0$:</strong> converges only at $x = a$.</li>
        <li><strong>$R = \\infty$:</strong> converges for every $x$.</li>
        <li><strong>$0 < R < \\infty$:</strong> converges for $|x-a| < R$, diverges for $|x-a| > R$. At the two endpoints $x = a \\pm R$ it could go either way.</li>
      </ul>
      <p>So the convergence region is an interval <strong>centered at $a$</strong> with half-width $R$. $R$ is a single number; the <em>interval of convergence</em> is the set of $x$-values, and it must be stated with the correct brackets.</p>
    </div>

    <div class="content-card card-memory fade-up">
      <div class="card-badge">${Icons.brain} The 4-Step Method</div>
      <ol>
        <li><strong>Ratio Test</strong> on the absolute value of the terms. You get $\\lim\\left|\\frac{a_{n+1}}{a_n}\\right| = L\\,|x-a|$.</li>
        <li><strong>Solve $L\\,|x-a| < 1$.</strong> This gives $|x-a| < R$ with $R = 1/L$.</li>
        <li><strong>Write the open interval</strong> $(a-R,\\,a+R)$.</li>
        <li><strong>Test each endpoint separately</strong> by substituting it into the series and using a different test. The Ratio Test always gives $1$ at an endpoint, so it cannot decide.</li>
      </ol>
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

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.4.2</span>
        <h4>Find the radius and interval of convergence of $\\displaystyle\\sum_{n=0}^\\infty \\frac{x^n}{n!}$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Ratio Test</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\left|\\frac{x^{n+1}}{(n+1)!}\\cdot\\frac{n!}{x^n}\\right| = \\frac{|x|}{n+1} \\;\\longrightarrow\\; 0$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Compare with $1$</div><div class="step-chevron">▶</div></div>
          <div class="step-body"><p>The limit is $0 < 1$ for <strong>every</strong> $x$, so there is no restriction on $x$.</p>
          $$R = \\infty, \\qquad \\text{interval of convergence } (-\\infty,\\infty)$$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.4.3</span>
        <h4>Find the radius and interval of convergence of $\\displaystyle\\sum_{n=0}^\\infty n!\\,x^n$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Ratio Test</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\left|\\frac{(n+1)!\\,x^{n+1}}{n!\\,x^n}\\right| = (n+1)|x|$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Take the limit</div><div class="step-chevron">▶</div></div>
          <div class="step-body"><p>For any $x \\ne 0$ this goes to $\\infty$, which is bigger than $1$, so the series diverges. At $x = 0$ every term after the first is $0$.</p>
          $$R = 0, \\qquad \\text{converges only at } x = 0$$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.4.4</span>
        <h4>Find the interval of convergence of $\\displaystyle\\sum_{n=1}^\\infty \\frac{(x+1)^n}{n^2\\,3^n}$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Ratio Test</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\left|\\frac{(x+1)^{n+1}}{(n+1)^2 3^{n+1}}\\cdot\\frac{n^2 3^n}{(x+1)^n}\\right| = \\frac{|x+1|}{3}\\cdot\\frac{n^2}{(n+1)^2} \\;\\longrightarrow\\; \\frac{|x+1|}{3}$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Solve $\\dfrac{|x+1|}{3} < 1$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$|x+1| < 3 \\implies R = 3, \\qquad -4 < x < 2$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Check the endpoints</div><div class="step-chevron">▶</div></div>
          <div class="step-body"><ul style="margin-left: 20px; font-size: 0.9rem; color: var(--text-2);">
            <li>$x = 2$: $\\displaystyle\\sum \\frac{3^n}{n^2 3^n} = \\sum\\frac{1}{n^2}$, a $p$-series with $p = 2 > 1$, so it <strong>converges</strong>.</li>
            <li>$x = -4$: $\\displaystyle\\sum \\frac{(-3)^n}{n^2 3^n} = \\sum\\frac{(-1)^n}{n^2}$, which converges absolutely (same $p$-series), so it <strong>converges</strong>.</li>
          </ul>
          <strong>Interval of Convergence: $[-4,\\,2]$</strong></div>
        </div>
      </div>
    </div>

    <div class="content-card card-mistake fade-up">
      <div class="card-badge">${Icons.alertTriangle} Common Mistakes</div>
      <ul>
        <li><strong>Skipping the endpoints.</strong> The interval is not finished until you have tested both ends.</li>
        <li><strong>Using the Ratio Test at an endpoint.</strong> It returns $1$ there (inconclusive). Use the Integral, Comparison or Alternating Series Test instead.</li>
        <li><strong>Forgetting the absolute value</strong> in the Ratio Test, which loses the "$|x-a|$" and the correct two-sided interval.</li>
      </ul>
    </div>

    <h2 id="ch11-sec5" class="section-heading fade-up"><span class="section-num">11.5</span> Representations of Functions as Power Series</h2>
    <div class="prose fade-up">
      <p>Many familiar functions can be rewritten as power series by starting from one master series - the geometric series - and then <strong>substituting</strong>, <strong>differentiating</strong>, or <strong>integrating</strong> term by term. This turns awkward functions into infinite polynomials you can differentiate, integrate, and approximate with ease.</p>
    </div>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} The Master Series - Geometric</div>
      <p>Every representation in this section is built from the geometric series:</p>
      <div class="math-block">$$\\frac{1}{1-x} = \\sum_{n=0}^\\infty x^n = 1 + x + x^2 + x^3 + \\cdots, \\qquad |x| < 1$$</div>
      <p>Wherever you can force a function into the shape $\\dfrac{1}{1-(\\text{something})}$, you can read off its power series at once.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.5.1</span>
        <h4>Express $\\dfrac{1}{1+x^2}$ as a power series about $0$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Match the geometric shape</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>Write the denominator as $1-(\\,\\cdot\\,)$: $\\dfrac{1}{1+x^2} = \\dfrac{1}{1-(-x^2)}$. So the "something" is $-x^2$.</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Substitute into the master series</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\frac{1}{1+x^2} = \\sum_{n=0}^\\infty (-x^2)^n = \\sum_{n=0}^\\infty (-1)^n x^{2n} = 1 - x^2 + x^4 - x^6 + \\cdots$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">State the interval of convergence</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>Convergence requires $|-x^2| < 1$, i.e. $|x| < 1$. Radius $R = 1$, interval $(-1,\\,1)$. $\\checkmark$</p>
          </div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.5.2</span>
        <h4>Find a power series for $\\dfrac{1}{x+2}$ about $0$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Factor out the constant to expose $1-(\\cdot)$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\frac{1}{x+2} = \\frac{1}{2\\left(1+\\frac{x}{2}\\right)} = \\frac{1}{2}\\cdot\\frac{1}{1-\\left(-\\frac{x}{2}\\right)}$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Expand and simplify</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$= \\frac{1}{2}\\sum_{n=0}^\\infty \\left(-\\frac{x}{2}\\right)^n = \\sum_{n=0}^\\infty \\frac{(-1)^n}{2^{n+1}}\\,x^n$$</div>
            <p>Converges when $\\left|-\\tfrac{x}{2}\\right| < 1$, i.e. $|x| < 2$. Radius $R = 2$. $\\checkmark$</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Theorem 11.20 - Term-by-Term Differentiation & Integration</div>
      <p>If $f(x) = \\displaystyle\\sum_{n=0}^\\infty c_n(x-a)^n$ has radius of convergence $R > 0$, then on $(a-R,\\,a+R)$ the function $f$ is differentiable and</p>
      <div class="math-block">$$f'(x) = \\sum_{n=1}^\\infty n\\,c_n (x-a)^{n-1}, \\qquad \\int f(x)\\,dx = C + \\sum_{n=0}^\\infty \\frac{c_n}{n+1}(x-a)^{n+1}$$</div>
      <p>Both new series have the <strong>same radius</strong> $R$ (though behaviour at the endpoints may change).</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.5.3</span>
        <h4>Find a power series for $\\dfrac{1}{(1-x)^2}$ by differentiating</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Spot the derivative</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\frac{d}{dx}\\left[\\frac{1}{1-x}\\right] = \\frac{1}{(1-x)^2}$$</div>
            <p>So differentiate the master geometric series term by term.</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Differentiate each term</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\frac{d}{dx}\\sum_{n=0}^\\infty x^n = \\sum_{n=1}^\\infty n\\,x^{n-1} = 1 + 2x + 3x^2 + 4x^3 + \\cdots$$</div>
            <p>The constant term $1$ differentiates to $0$, so the sum now starts at $n=1$.</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Re-index and state the radius</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\frac{1}{(1-x)^2} = \\sum_{n=0}^\\infty (n+1)\\,x^n, \\qquad R = 1$$</div>
            <p>Differentiation does not change the radius. Replacing $x$ by $-x$ gives $\\frac{1}{(1+x)^2} = \\sum(-1)^n(n+1)x^n$, matching Worked Example 11.7.1. $\\checkmark$</p>
          </div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.5.7</span>
        <h4>Find a power series for $\\arctan x$ by integrating</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Recognise the derivative</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>Since $\\dfrac{d}{dx}\\arctan x = \\dfrac{1}{1+x^2}$, integrate the series from Example 11.5.1 term by term:</p>
            <div class="math-block">$$\\arctan x = \\int \\frac{dx}{1+x^2} = \\int \\sum_{n=0}^\\infty (-1)^n x^{2n}\\,dx$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Integrate each term ($C = 0$ since $\\arctan 0 = 0$)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\arctan x = \\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n+1}}{2n+1} = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\frac{x^7}{7} + \\cdots$$</div>
            <p>Radius $R = 1$ (unchanged by integration). $\\checkmark$</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content-card card-exam fade-up">
      <div class="card-badge">${Icons.target} Exam Tip - Three Moves</div>
      <p>Almost every "find a power series" problem is one of three moves off the geometric series: <strong>(1) substitute</strong> an expression for $x$ (e.g. $-x^2$, $\\tfrac{x}{2}$); <strong>(2) differentiate</strong> a known series to build $\\tfrac{1}{(1-x)^2}$-type results; <strong>(3) integrate</strong> a known series to build $\\ln$ and $\\arctan$-type results. Always factor out constants first so the denominator reads $1-(\\cdot)$.</p>
    </div>

    <h2 id="ch11-sec6" class="section-heading fade-up"><span class="section-num">11.6</span> Taylor & Maclaurin Series</h2>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Taylor Series</div>
      <div class="math-block">$$f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(a)}{n!}(x-a)^n$$</div>
      <p>When $a = 0$ this is the <strong>Maclaurin series</strong>.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.6.1</span>
        <h4>Find the Taylor series of $f(x)=\\dfrac{1}{x}$ centered at $a=1$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Build a derivative table and evaluate each at $a=1$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$f=x^{-1},\\; f(1)=1 \\qquad f'=-x^{-2},\\; f'(1)=-1 \\qquad f''=2x^{-3},\\; f''(1)=2 \\qquad f'''=-6x^{-4},\\; f'''(1)=-6$$</div>
            <p>The pattern is $f^{(n)}(1) = (-1)^n\\,n!$.</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Divide by $n!$ to get each coefficient</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\frac{f^{(n)}(1)}{n!} = \\frac{(-1)^n\\,n!}{n!} = (-1)^n$$</div>
            <p>The factorials cancel, leaving coefficients $1,-1,1,-1,\\ldots$</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Assemble the series in powers of $(x-1)$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\frac{1}{x} = \\sum_{n=0}^\\infty (-1)^n (x-1)^n = 1 - (x-1) + (x-1)^2 - (x-1)^3 + \\cdots$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">4</div><div class="step-label">Sanity check</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>Since $\\frac{1}{x} = \\frac{1}{1+(x-1)}$, this is a geometric series with ratio $-(x-1)$, so it converges for $|x-1|<1$, i.e. $0 < x < 2$. $\\checkmark$</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Important Maclaurin Series</div>
      <div class="math-block">$$e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!} \\qquad \\sin x = \\sum_{n=0}^\\infty (-1)^n\\frac{x^{2n+1}}{(2n+1)!} \\qquad \\cos x = \\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n}}{(2n)!}$$</div>
      <div class="math-block">$$\\frac{1}{1-x} = \\sum_{n=0}^\\infty x^n,\\; |x|<1 \\qquad \\ln(1+x) = \\sum_{n=1}^\\infty (-1)^{n+1}\\frac{x^n}{n},\\; |x|<1$$</div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.6.2</span>
        <h4>Use the Maclaurin series of $\\cos x$ to find $\\displaystyle\\lim_{x\\to 0}\\frac{1-\\cos x}{x^2}$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Write the series from the list above</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Compute $1-\\cos x$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$1-\\cos x = \\frac{x^2}{2} - \\frac{x^4}{24} + \\cdots$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Divide by $x^2$ and let $x\\to 0$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\frac{1-\\cos x}{x^2} = \\frac{1}{2} - \\frac{x^2}{24} + \\cdots \\;\\longrightarrow\\; \\frac{1}{2} \\quad\\checkmark$$</div>
            <p>This agrees with L&rsquo;H&ocirc;pital&rsquo;s Rule but shows <em>why</em>: every higher power of $x$ vanishes, leaving only the leading coefficient.</p>
          </div>
        </div>
      </div>
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

    <h2 id="ch11-sec7" class="section-heading fade-up"><span class="section-num">11.7</span> Binomial Series</h2>
    <div class="prose fade-up">
      <p>The Binomial Series generalises the familiar binomial theorem $(1+x)^n$ from whole-number powers to <em>any</em> real exponent $k$. It is the Maclaurin series of $(1+x)^k$ and is the go-to tool for expanding roots and reciprocals such as $\\sqrt{1+x}$ or $\\dfrac{1}{(1+x)^2}$.</p>
    </div>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Definition - Generalised Binomial Coefficient</div>
      <p>For any real number $k$ and integer $n \\geq 1$:</p>
      <div class="math-block">$$\\binom{k}{n} = \\frac{k(k-1)(k-2)\\cdots(k-n+1)}{n!}, \\qquad \\binom{k}{0} = 1$$</div>
      <p>Unlike the ordinary binomial coefficient, $k$ need not be a positive integer - it may be negative or fractional.</p>
    </div>

    <div class="content-card card-theorem fade-up">
      <div class="card-badge">${Icons.book} Theorem 11.22 - The Binomial Series</div>
      <p>For any $k \\in \\mathbb{R}$ and $|x| < 1$:</p>
      <div class="math-block">$$(1+x)^k = \\sum_{n=0}^\\infty \\binom{k}{n} x^n = 1 + kx + \\frac{k(k-1)}{2!}x^2 + \\frac{k(k-1)(k-2)}{3!}x^3 + \\cdots$$</div>
    </div>

    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} When it Terminates</div>
      <p>If $k$ is a <strong>non-negative integer</strong>, the factor $(k-n+1)$ eventually hits $0$, every later term vanishes, and the infinite series collapses to the ordinary finite binomial theorem $(1+x)^k$ - valid for <em>all</em> $x$. For any other $k$ the series is genuinely infinite and needs $|x|<1$.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.7.1</span>
        <h4>Find the Maclaurin series and radius of convergence of $\\dfrac{1}{(1+x)^2}$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Rewrite with a real exponent</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>$\\dfrac{1}{(1+x)^2} = (1+x)^{-2}$, so $k = -2$.</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Compute the coefficients $\\binom{-2}{n}$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\binom{-2}{n} = \\frac{(-2)(-3)(-4)\\cdots\\big(-(n+1)\\big)}{n!} = (-1)^n\\frac{(n+1)!}{n!} = (-1)^n (n+1)$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Assemble the series</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$(1+x)^{-2} = \\sum_{n=0}^\\infty (-1)^n (n+1)\\,x^n = 1 - 2x + 3x^2 - 4x^3 + \\cdots, \\qquad |x| < 1$$</div>
            <p>This matches differentiating the series for $-\\dfrac{1}{1+x}$ - a neat cross-check with §11.5. Radius $R = 1$. $\\checkmark$</p>
          </div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 11.7.2</span>
        <h4>Expand $\\dfrac{1}{\\sqrt{4-x}}$ as a power series about $0$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Factor out the constant to reach $(1+u)^k$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\frac{1}{\\sqrt{4-x}} = \\big(4-x\\big)^{-1/2} = \\Big[4\\big(1-\\tfrac{x}{4}\\big)\\Big]^{-1/2} = \\frac{1}{2}\\left(1-\\frac{x}{4}\\right)^{-1/2}$$</div>
            <p>Now it is $(1+u)^k$ with $u = -\\dfrac{x}{4}$ and $k = -\\dfrac{1}{2}$.</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Apply the binomial series (first three terms)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$(1+u)^{-1/2} = 1 - \\tfrac{1}{2}u + \\tfrac{3}{8}u^2 - \\cdots$$</div>
            <p>Substitute $u = -\\dfrac{x}{4}$, then multiply by $\\dfrac{1}{2}$:</p>
            <div class="math-block">$$\\frac{1}{\\sqrt{4-x}} = \\frac{1}{2} + \\frac{x}{16} + \\frac{3x^2}{256} + \\cdots$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Radius of convergence</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>Need $\\left|-\\dfrac{x}{4}\\right| < 1$, i.e. $|x| < 4$. Radius $R = 4$. $\\checkmark$</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content-card card-exam fade-up">
      <div class="card-badge">${Icons.target} Exam Tip - Get to $(1+u)^k$ First</div>
      <p>The series only applies in the form $(1+u)^k$ with a leading $1$. For $\\sqrt{a+x}$ or $\\dfrac{1}{(a+x)^m}$, always <strong>factor out $a$</strong> first, expand $(1+u)^k$, then multiply the constant back. Watch signs: $4-x$ gives $u = -\\tfrac{x}{4}$, not $+\\tfrac{x}{4}$.</p>
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
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Sum enough terms (alternating series - stop when term $< 0.00005$)</div><div class="step-chevron">▶</div></div>
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
          Checking endpoints: at $x=-1$ the series is $\\sum \\tfrac{-1}{n}$ (negative harmonic - diverges); at $x=1$ it is the alternating harmonic series (converges). Interval: $(-1,\\,1]$. $\\checkmark$</div>
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
        <div style="background:rgba(59,130,246,.07);border-radius:8px;padding:12px"><strong>Separable:</strong> $\\frac{dy}{dx} = f(x)g(y)$ - separate and integrate each side.</div>
        <div style="background:rgba(139,92,246,.07);border-radius:8px;padding:12px"><strong>Homogeneous:</strong> $\\frac{dy}{dx} = F(y/x)$ - substitute $v = y/x$.</div>
        <div style="background:rgba(16,185,129,.07);border-radius:8px;padding:12px"><strong>Linear:</strong> $y' + P(x)y = Q(x)$ - integrating factor $\\mu = e^{\\int P\\,dx}$.</div>
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

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example: Choosing a Method</span>
        <h4>Which method applies? (a) $\\frac{dy}{dx}=x^2y$ &nbsp; (b) $y'+3y=e^{-x}$ &nbsp; (c) $(2xy+3)\\,dx+(x^2+4y)\\,dy=0$ &nbsp; (d) $\\frac{dy}{dx}=\\frac{x^2+y^2}{xy}$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">(a) Can the $x$&rsquo;s and $y$&rsquo;s be pulled apart?</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\frac{dy}{dx}=x^2\\,y \\;\\Longrightarrow\\; \\frac{dy}{y}=x^2\\,dx$$</div>
            <p>Yes: <strong>Separable</strong> (&sect;12.1).</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">(b) Is it of the form $y'+P(x)y=Q(x)$?</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>Already in that form with $P=3$ and $Q=e^{-x}$: <strong>Linear</strong> (&sect;12.3), integrating factor $\\mu=e^{3x}$. It is not separable, because $y'=e^{-x}-3y$ cannot be factored as $g(x)h(y)$.</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">(c) Compare $M_y$ with $N_x$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$M=2xy+3 \\Rightarrow M_y=2x \\qquad N=x^2+4y \\Rightarrow N_x=2x$$</div>
            <p>Equal: <strong>Exact</strong> (&sect;12.4).</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">4</div><div class="step-label">(d) Divide through to see whether only $y/x$ appears</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\frac{x^2+y^2}{xy}=\\frac{1+(y/x)^2}{y/x}$$</div>
            <p>A function of $y/x$ alone: <strong>Homogeneous</strong> (&sect;12.2), substitute $v=y/x$.</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">5</div><div class="step-label">If more than one type fits</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <p>Pick the quickest: separable first, then linear, then exact, then homogeneous (the order in the Exam Tip below).</p>
          </div>
        </div>
      </div>
    </div>

    <h2 id="ch12-sec1" class="section-heading fade-up"><span class="section-num">12.1</span> Separable ODEs</h2>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Definition - Separable ODE</div>
      <p>A first-order ODE is <strong>separable</strong> if the right-hand side can be factored into an $x$-only part times a $y$-only part:</p>
      <div class="math-block">$$\\frac{dy}{dx} = g(x)\\,h(y)$$</div>
      <p>Separable: $\\dfrac{dy}{dx} = xy$, $\\ \\dfrac{dy}{dx} = \\dfrac{x}{y}$, $\\ \\dfrac{dy}{dx} = e^{x-y}$ (since $e^{x-y} = e^x e^{-y}$).<br>Not separable: $\\dfrac{dy}{dx} = x + y$ (it cannot be factored into an $x$ part times a $y$ part).</p>
    </div>

    <div class="content-card card-memory fade-up">
      <div class="card-badge">${Icons.brain} The Method</div>
      <ol>
        <li><strong>Separate:</strong> divide by $h(y)$ and multiply by $dx$, so all the $y$'s are with $dy$ and all the $x$'s with $dx$: $\\dfrac{dy}{h(y)} = g(x)\\,dx$.</li>
        <li><strong>Integrate both sides</strong>, each with respect to its own variable. Add <em>one</em> constant $C$.</li>
        <li><strong>Solve for $y$</strong> if you can.</li>
        <li><strong>Use the initial condition</strong> (if given) to find $C$.</li>
      </ol>
      <p>Why it works: the left side $\\int \\frac{dy}{h(y)}$ is really $\\int \\frac{1}{h(y)}\\frac{dy}{dx}\\,dx$, so this is just $u$-substitution run backwards. Once separated, each side is an ordinary integral.</p>
    </div>

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

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 12.1.2</span>
        <h4>Solve $\\dfrac{dy}{dx} = \\dfrac{x}{y}$ with $y(0) = 2$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Separate the variables</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$y\\,dy = x\\,dx$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Integrate both sides (one constant)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\frac{y^2}{2} = \\frac{x^2}{2} + C \\;\\Rightarrow\\; y^2 = x^2 + K \\quad (K = 2C)$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Use $y(0) = 2$ to find $K$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$2^2 = 0 + K \\;\\Rightarrow\\; K = 4$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">4</div><div class="step-label">Solve for $y$, choosing the sign that matches the initial condition</div><div class="step-chevron">▶</div></div>
          <div class="step-body"><p>Since $y(0) = 2 > 0$ we take the positive root:</p>
          $$y = \\sqrt{x^2 + 4}$$</div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 12.1.3</span>
        <h4>Solve $\\dfrac{dy}{dx} = e^{x-y}$ with $y(0) = 1$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Factor the right side to see that it is separable</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\frac{dy}{dx} = e^x\\cdot e^{-y}$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Separate (divide by $e^{-y}$, which is the same as multiplying by $e^y$)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$e^y\\,dy = e^x\\,dx$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Integrate both sides</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$e^y = e^x + C$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">4</div><div class="step-label">Use $y(0) = 1$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$e^1 = e^0 + C \\;\\Rightarrow\\; C = e - 1$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">5</div><div class="step-label">Solve for $y$ with a logarithm</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$y = \\ln\\!\\left(e^x + e - 1\\right)$$</div>
        </div>
      </div>
    </div>

    <div class="content-card card-mistake fade-up">
      <div class="card-badge">${Icons.alertTriangle} Common Mistakes</div>
      <ul>
        <li><strong>Two constants.</strong> Put <em>one</em> $C$ on one side after integrating. $C_1$ on the left and $C_2$ on the right just merge into a single constant.</li>
        <li><strong>Losing solutions.</strong> Dividing by $h(y)$ assumes $h(y) \\ne 0$. If $h(y_0) = 0$ then the constant function $y = y_0$ is also a solution. For $\\frac{dy}{dx} = xy$ that is $y = 0$ (already included when $C = 0$).</li>
        <li><strong>Forgetting the initial condition</strong> before solving for $y$, which makes the sign or constant ambiguous.</li>
      </ul>
    </div>

    <h2 id="ch12-sec2" class="section-heading fade-up"><span class="section-num">12.2</span> Homogeneous ODEs</h2>

    <div class="content-card card-definition fade-up">
      <div class="card-badge">${Icons.book} Method - Substitution $v = y/x$</div>
      <p>If $\\frac{dy}{dx} = F\\left(\\frac{y}{x}\\right)$, then let $v = \\frac{y}{x}$, which means $y = vx$. Then $\\frac{dy}{dx} = v + x\\frac{dv}{dx}$.</p>
      <p>Substitute this in to get a <strong>separable</strong> ODE in terms of $v$ and $x$.</p>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 12.2.1</span>
        <h4>Solve $\\dfrac{dy}{dx}=\\dfrac{x+y}{x}$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Check that it depends only on $y/x$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\frac{dy}{dx}=\\frac{x+y}{x}=1+\\frac{y}{x}$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Substitute $y=vx$, so $\\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$v+x\\frac{dv}{dx}=1+v \\;\\Longrightarrow\\; x\\frac{dv}{dx}=1$$</div>
            <p>The $v$ on each side cancels, leaving a separable equation.</p>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Separate and integrate</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$dv=\\frac{dx}{x} \\;\\Longrightarrow\\; v=\\ln|x|+C$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">4</div><div class="step-label">Substitute back $v=y/x$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$y=x\\big(\\ln|x|+C\\big) \\quad\\checkmark$$</div>
            <p>Check: $y'=\\ln|x|+C+1$ and $\\frac{x+y}{x}=1+\\ln|x|+C$.</p>
          </div>
        </div>
      </div>
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

    <div class="content-card card-tip fade-up">
      <div class="card-badge">${Icons.bulb} Where the integrating factor comes from</div>
      <p>We want to multiply $y' + P(x)y = Q(x)$ by some $\\mu(x)$ so that the left side becomes a single product-rule derivative. The product rule says</p>
      <div class="math-block">$$\\frac{d}{dx}\\big[\\mu y\\big] = \\mu y' + \\mu' y$$</div>
      <p>and the left side after multiplying is $\\mu y' + \\mu P\\,y$. These match exactly when</p>
      <div class="math-block">$$\\mu' = P\\,\\mu$$</div>
      <p>This is a separable ODE for $\\mu$ itself, and solving it gives $\\mu = e^{\\int P\\,dx}$. So the integrating factor is <em>defined</em> to make the left side a perfect derivative, which you can then integrate directly. (No $+C$ is needed when you find $\\mu$: any one antiderivative of $P$ works.)</p>
    </div>

    <div class="content-card card-memory fade-up">
      <div class="card-badge">${Icons.brain} The 5-Step Method</div>
      <ol>
        <li><strong>Standard form:</strong> divide so the coefficient of $y'$ is $1$: $y' + P(x)y = Q(x)$. <em>Do this first.</em></li>
        <li><strong>Integrating factor:</strong> $\\mu = e^{\\int P\\,dx}$.</li>
        <li><strong>Multiply</strong> both sides by $\\mu$. The left side is now $\\dfrac{d}{dx}[\\mu y]$.</li>
        <li><strong>Integrate</strong> both sides (add $C$ here).</li>
        <li><strong>Divide by $\\mu$</strong> to solve for $y$ (the $C$ gets divided too).</li>
      </ol>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 12.3.1</span>
        <h4>Solve $y'+\\dfrac{2}{x}\\,y=x$ for $x>0$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Read off $P$ and $Q$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$P(x)=\\frac{2}{x}, \\qquad Q(x)=x$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Compute the integrating factor</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$\\mu=e^{\\int \\frac{2}{x}\\,dx}=e^{2\\ln x}=e^{\\ln x^2}=x^2$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Multiply through: the left side becomes a perfect derivative</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$x^2y'+2xy=x^3 \\;\\Longrightarrow\\; \\frac{d}{dx}\\big[x^2y\\big]=x^3$$</div>
          </div>
        </div>
        <div class="step-item open revealed">
          <div class="step-header"><div class="step-num">4</div><div class="step-label">Integrate and solve for $y$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">
            <div class="math-block">$$x^2y=\\frac{x^4}{4}+C \\;\\Longrightarrow\\; \\boxed{y=\\frac{x^2}{4}+\\frac{C}{x^2}}$$</div>
            <p>Check: $y'=\\frac{x}{2}-\\frac{2C}{x^3}$ and $\\frac{2}{x}y=\\frac{x}{2}+\\frac{2C}{x^3}$, which add to $x$. $\\checkmark$</p>
          </div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 12.3.2</span>
        <h4>Solve $xy' - 2y = x^3$ with $y(1) = 2$, for $x > 0$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">Standard form: divide by $x$ so the coefficient of $y'$ is $1$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$y' - \\frac{2}{x}\\,y = x^2 \\qquad\\Longrightarrow\\qquad P(x) = -\\frac{2}{x},\\quad Q(x) = x^2$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Integrating factor</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\mu = e^{\\int -\\frac{2}{x}dx} = e^{-2\\ln x} = e^{\\ln x^{-2}} = x^{-2}$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Multiply through: the left side is $\\dfrac{d}{dx}[\\mu y]$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\frac{d}{dx}\\left[\\frac{y}{x^2}\\right] = x^{-2}\\cdot x^2 = 1$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">4</div><div class="step-label">Integrate and solve for $y$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\frac{y}{x^2} = x + C \\;\\Longrightarrow\\; y = x^3 + Cx^2$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">5</div><div class="step-label">Use $y(1) = 2$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$2 = 1 + C \\;\\Rightarrow\\; C = 1 \\qquad\\Longrightarrow\\qquad y = x^3 + x^2$$
          <p>Check: $y' = 3x^2 + 2x$, so $xy' - 2y = 3x^3 + 2x^2 - 2x^3 - 2x^2 = x^3$. &#10003;</p></div>
        </div>
      </div>
    </div>

    <div class="worked-example fade-up">
      <div class="worked-example-header">
        <span class="ex-badge">Worked Example 12.3.3</span>
        <h4>Solve $y' + 2y = e^{-x}$</h4>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-header"><div class="step-num">1</div><div class="step-label">It is already in standard form: $P = 2$, $Q = e^{-x}$</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$\\mu = e^{\\int 2\\,dx} = e^{2x}$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">2</div><div class="step-label">Multiply through and recognize the perfect derivative</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$e^{2x}y' + 2e^{2x}y = e^{x} \\;\\Longrightarrow\\; \\frac{d}{dx}\\big[e^{2x}y\\big] = e^{x}$$</div>
        </div>
        <div class="step-item">
          <div class="step-header"><div class="step-num">3</div><div class="step-label">Integrate and divide by $e^{2x}$ (including the $C$)</div><div class="step-chevron">▶</div></div>
          <div class="step-body">$$e^{2x}y = e^x + C \\;\\Longrightarrow\\; y = e^{-x} + Ce^{-2x}$$</div>
        </div>
      </div>
    </div>

    <div class="content-card card-mistake fade-up">
      <div class="card-badge">${Icons.alertTriangle} Common Mistakes</div>
      <ul>
        <li><strong>Skipping standard form.</strong> For $xy' - 2y = x^3$, the $P$ is $-\\frac{2}{x}$, not $-2$. The coefficient of $y'$ must be $1$ before you read off $P$.</li>
        <li><strong>Not dividing $C$ by $\\mu$.</strong> In $\\mu y = \\int\\mu Q\\,dx + C$, divide <em>everything</em> by $\\mu$, including $C$. This is why you get $Cx^2$ above, not just $C$.</li>
        <li><strong>Simplifying $e^{\\ln x^2}$ wrongly.</strong> $e^{2\\ln x} = e^{\\ln x^2} = x^2$. Use $e^{\\ln A} = A$.</li>
      </ul>
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
      <div class="card-badge">${Icons.book} Theorem - Exactness</div>
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

    // Learning outcomes - from chaptersData
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
    // Bottom bar button(s) - identified by data attribute
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
  window.CircularCarousel?.destroy?.(area.querySelector('#welcome-carousel'));
  const prog = AppStorage.getProgress();
  const done = Object.keys(prog).length;
  const total = chaptersData.length;

  area.innerHTML = `
    <div id="welcome-screen">
      <div class="welcome-hero">
        <img class="welcome-hands" src="assets/img/hands.png" alt="" aria-hidden="true" draggable="false">
        <div class="welcome-icon" aria-hidden="true">
          <svg class="infinity-glow" viewBox="0 0 120 70" overflow="visible" xmlns="http://www.w3.org/2000/svg" focusable="false">
            <defs>
              <filter id="inf-blur-lg" x="-40%" y="-80%" width="180%" height="260%"><feGaussianBlur stdDeviation="6"/></filter>
              <filter id="inf-blur-md" x="-40%" y="-80%" width="180%" height="260%"><feGaussianBlur stdDeviation="2.6"/></filter>
              <filter id="inf-blur-sm" x="-20%" y="-40%" width="140%" height="180%"><feGaussianBlur stdDeviation=".7"/></filter>
              <linearGradient id="inf-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#ffffff" stop-opacity=".78"/>
                <stop offset=".5" stop-color="#ffffff" stop-opacity=".95"/>
                <stop offset="1" stop-color="#ffffff" stop-opacity="1"/>
              </linearGradient>
            </defs>
            <g fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path class="inf-halo" d="M60 35 C 73 9, 111 9, 111 35 C 111 61, 73 61, 60 35 C 47 9, 9 9, 9 35 C 9 61, 47 61, 60 35 Z" stroke="#fff" stroke-width="12" filter="url(#inf-blur-lg)" opacity=".55"/>
              <path d="M60 35 C 73 9, 111 9, 111 35 C 111 61, 73 61, 60 35 C 47 9, 9 9, 9 35 C 9 61, 47 61, 60 35 Z" stroke="#fff" stroke-width="8" filter="url(#inf-blur-md)" opacity=".7"/>
              <path d="M60 35 C 73 9, 111 9, 111 35 C 111 61, 73 61, 60 35 C 47 9, 9 9, 9 35 C 9 61, 47 61, 60 35 Z" stroke="url(#inf-grad)" stroke-width="5.5" filter="url(#inf-blur-sm)"/>
            </g>
          </svg>
        </div>
        <h1 class="welcome-title">CALCULUS I</h1>
      </div>

      <div class="welcome-carousel-wrap">
        <div class="welcome-carousel" id="welcome-carousel" role="region" aria-roledescription="carousel"
          aria-label="Study tools" tabindex="0">
          <div class="welcome-carousel__stage">
            <div class="welcome-carousel__ring">
              <button type="button" class="welcome-carousel__card welcome-card" data-carousel-index="0"
                data-carousel-label="Flashcards" data-action="open-flashcards">
                <div class="wc-icon">${Icons.layers}</div>
                <div class="wc-title">Flashcards</div>
                <div class="wc-desc">${typeof flashcardsData !== 'undefined' ? flashcardsData.length : 0} cards across all chapters</div>
              </button>
              <button type="button" class="welcome-carousel__card welcome-card" data-carousel-index="1"
                data-carousel-label="Formulas" data-action="open-formulas">
                <div class="wc-icon">∑</div>
                <div class="wc-title">Formulas</div>
                <div class="wc-desc">${typeof formulasData !== 'undefined' ? formulasData.length : 0} key formulas</div>
              </button>
              <button type="button" class="welcome-carousel__card welcome-card" data-carousel-index="2"
                data-carousel-label="Dashboard" data-action="open-dashboard">
                <div class="wc-icon">${Icons.barChart}</div>
                <div class="wc-title">Dashboard</div>
                <div class="wc-desc">${done}/${total} chapters completed</div>
              </button>
              <button type="button" class="welcome-carousel__card welcome-card" data-carousel-index="3"
                data-carousel-label="Practice Exams" data-action="open-exams">
                <div class="wc-icon">${Icons.target}</div>
                <div class="wc-title">Practice Exams</div>
                <div class="wc-desc">Timed papers and exam practice</div>
              </button>
            </div>
          </div>
          <div class="welcome-carousel__caption" aria-live="polite"></div>
        </div>
        <div class="welcome-carousel__controls" aria-label="Study tools carousel controls">
          <button type="button" class="welcome-carousel__arrow" data-carousel-action="previous" aria-label="Previous card">‹</button>
          <div class="welcome-carousel__dots">
            <button type="button" class="welcome-carousel__dot" aria-label="Show Flashcards"></button>
            <button type="button" class="welcome-carousel__dot" aria-label="Show Formulas"></button>
            <button type="button" class="welcome-carousel__dot" aria-label="Show Dashboard"></button>
            <button type="button" class="welcome-carousel__dot" aria-label="Show Practice Exams"></button>
          </div>
          <button type="button" class="welcome-carousel__arrow" data-carousel-action="next" aria-label="Next card">›</button>
        </div>
      </div>

      <div class="topics-folder-wrap">
        <p style="font-size:.9rem;font-weight:600;color:var(--text-2);margin:0 0 4px">Explore topics</p>
        <div class="folder-float" id="topics-folder" role="region" aria-label="Course topics" tabindex="0"
          data-trigger="click">
          <div class="folder-float__items" aria-label="Topic choices">
            ${chaptersData.map(ch => `
              <button type="button" class="folder-float__item" data-value="${ch.id}" tabindex="-1" aria-hidden="true">
                ${ch.number}. ${ch.shortTitle}
              </button>`).join('')}
          </div>
          <div class="folder-float__folder">
            <span class="folder-float__back" aria-hidden="true"></span>
            <span class="folder-float__paper" aria-hidden="true"></span>
            <span class="folder-float__front" aria-hidden="true">
              <span class="folder-float__label">Course topics</span>
              <span class="folder-float__sub">${chaptersData.length} chapters</span>
            </span>
            <button type="button" class="folder-float__trigger" aria-expanded="false" aria-label="Open course topics"></button>
          </div>
        </div>
        <p class="topics-folder-hint">Touch or click the folder, then choose a topic</p>
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
  area.querySelector('[data-action="open-exams"]')?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (typeof Exams !== 'undefined') Exams.open();
  });
  window.CircularCarousel?.init(document.getElementById('welcome-carousel'));
  const topicsFolder = document.getElementById('topics-folder');
  topicsFolder?.addEventListener('folderfloatselect', event => {
    const chapterId = event.detail?.value;
    if (chapterId) Navigation.loadChapter(chapterId);
  });
  window.FolderFloat?.init(topicsFolder);
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

  // Sidebar toggle - collapses the column on desktop, opens an overlay drawer on mobile
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
      <div class="stat-card"><div class="stat-val">${qTotal ? Math.round(qRight/qTotal*100)+'%' : '-'}</div><div class="stat-label">Quiz Avg</div></div>
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
      <div class="fm-name">${f.chapter ? 'Ch'+f.chapter+' · ' : ''}${f.category} - ${f.name}</div>
      <div class="fm-latex">$$${f.latex}$$</div>
      <div style="font-size:.75rem;color:var(--text-3);margin-top:4px">${f.use}</div>
    </div>`).join('');
  renderMath(list);
}