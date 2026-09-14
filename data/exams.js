/**
 * data/exams.js — Practice exam papers
 *
 * Modelled on the style of the MATH1036 class tests (cover page, marks
 * table, numbered questions with mark allocations, memo-style solutions).
 * Scope follows the study-guide sections named for the assessment:
 *   Sem 1 §6.5 Curve sketching, §6.6 Optimization
 *   Sem 2 §8  Integration theory & applications
 *   Sem 2 §9.1 Inverse trig / exponential / logarithmic integrals
 *   Sem 2 §9.2 Integration by parts (revisited)
 *   Sem 2 §9.5 Partial fraction decomposition
 * (§9.3 & §9.4 excluded, per the scope notice.)
 *
 * No derivatives are handed to the student in the curve-sketching
 * questions — f'(x) and f''(x) must be computed as part of the answer,
 * and the memos show that derivation in full. Optimization and the
 * "integration applications" question deliberately rotate through
 * different problem types across the papers (not just one
 * box/related-rate template repeated), and the partial-fractions
 * question rotates through every standard case: distinct linear
 * factors (2 and 3 factors), a repeated linear factor, an irreducible
 * quadratic factor, and an improper fraction requiring long division.
 */

const EXAMS = [
{
    id: 'paper1',
    label: 'Practice Paper 1',
    date: 'Practice Test A',
    totalMarks: 52,
    duration: 60,
    questions: [
      {
        number: 1,
        title: 'Curve sketching',
        section: '§6.5',
        marks: 12,
        prompt: `
Let $\\displaystyle f(x) = \\frac{x^2 - 4x + 1}{(x-1)^2}$.

**(a)** Find the $x$-intercepts and the $y$-intercept of $f$. (2)

**(b)** Find the horizontal and vertical asymptotes of $f$. (2)

**(c)** Find $f'(x)$, and hence determine the intervals on which $f$ is increasing and decreasing, and locate any local extrema. (3)

**(d)** Find $f''(x)$, and hence determine the intervals of concavity and any points of inflection. (3)

**(e)** Using the information from (a)–(d), sketch the graph of $f$. (2)
        `,
        solution: `
**(a)** $f(x)=0$ requires the numerator to vanish, so solve $x^2-4x+1=0$ by the quadratic formula: $x=\\dfrac{4\\pm\\sqrt{16-4}}{2}=\\dfrac{4\\pm2\\sqrt3}{2}=2\\pm\\sqrt3$. Neither root is $1$, so both are genuine **$x$-intercepts**: $2-\\sqrt3\\approx0.27$, $2+\\sqrt3\\approx3.73$. ✓

$y$-intercept: $f(0)=\\dfrac{0-0+1}{(0-1)^2}=\\dfrac11=1$, the point $(0,1)$. ✓

**(b)** Numerator and denominator have equal degree, so divide by $x^2$:
$$\\lim_{x\\to\\pm\\infty}f(x)=\\lim_{x\\to\\pm\\infty}\\frac{1-4/x+1/x^2}{1-2/x+1/x^2}=\\frac11=1.$$
Hence $y=1$ is a **horizontal asymptote**, approached from below as $x\\to\\infty$ and from above as $x\\to-\\infty$. ✓

The denominator vanishes only at $x=1$, where the numerator is $1-4+1=-2\\neq0$, so $x=1$ is a **vertical asymptote**; as $(x-1)^2>0$ there, $f(x)\\to-\\infty$ as $x\\to1^{\\pm}$. ✓

**(c)** By the quotient rule, with $u=x^2-4x+1$, $u'=2x-4$, $v=(x-1)^2$, $v'=2(x-1)$:
$$f'(x)=\\frac{(2x-4)(x-1)^2-(x^2-4x+1)\\cdot2(x-1)}{(x-1)^4}=\\frac{(2x-4)(x-1)-2(x^2-4x+1)}{(x-1)^3},$$
cancelling one factor $(x-1)$. Expanding, $(2x^2-6x+4)-(2x^2-8x+2)=2x+2$, so $f'(x)=\\dfrac{2(x+1)}{(x-1)^3}$. ✓

$f'(x)=0$ only at $x=-1$; $f'$ is undefined at $x=1$, which is outside the domain. Sign chart on $(-\\infty,-1),(-1,1),(1,\\infty)$ with test values $x=-2,0,2$: $f'(-2)=\\tfrac{2}{27}>0$, $f'(0)=-2<0$, $f'(2)=6>0$. ✓

So $f$ **increases on $(-\\infty,-1)$ and $(1,\\infty)$** and **decreases on $(-1,1)$**. The sign changes $+$ to $-$ at $x=-1$, so the First Derivative Test gives a **local maximum** $\\left(-1,\\tfrac32\\right)$, as $f(-1)=\\dfrac{1+4+1}{4}=\\dfrac32$; no local minimum. ✓

**(d)** Write $f'(x)=2(x+1)(x-1)^{-3}$ and use the product rule, with $u=2(x+1)$, $u'=2$, $v=(x-1)^{-3}$, $v'=-3(x-1)^{-4}$:
$$f''(x)=2(x-1)^{-3}-6(x+1)(x-1)^{-4}=2(x-1)^{-4}\\big[(x-1)-3(x+1)\\big]=\\frac{-4(x+2)}{(x-1)^4},$$
since $(x-1)-3(x+1)=-2x-4$. ✓

$f''(x)=0$ only at $x=-2$, and as $(x-1)^4>0$ for $x\\neq1$, $f''$ takes the sign of $-(x+2)$. Sign chart on $(-\\infty,-2),(-2,1),(1,\\infty)$ with test values $x=-3,0,2$: $f''(-3)=\\tfrac1{64}>0$, $f''(0)=-8<0$, $f''(2)=-16<0$. ✓

So $f$ is **concave up on $(-\\infty,-2)$** and **concave down on $(-2,1)$ and $(1,\\infty)$**. Concavity changes only at $x=-2$, which lies in the domain, giving the **inflection point** $\\left(-2,\\tfrac{13}9\\right)$, since $f(-2)=\\dfrac{4+8+1}{9}=\\dfrac{13}9$; none at $x=1$, where $f$ is undefined. This confirms (c), as $f''(-1)=-\\tfrac14<0$. ✓

**(e)** See the graph below — it shows the asymptotes $x=1$ and $y=1$, the $x$-intercepts $2\\pm\\sqrt3$ and the $y$-intercept $(0,1)$. ✓

The left branch enters just above $y=1$, bends through $\\left(-2,\\tfrac{13}9\\right)$, peaks at $\\left(-1,\\tfrac32\\right)$, then falls through $2-\\sqrt3$ to $-\\infty$; the right branch climbs from $-\\infty$, crosses at $2+\\sqrt3$ and flattens onto $y=1$. ✓
        `,
        graph: {
          fn: x => (x * x - 4 * x + 1) / ((x - 1) * (x - 1)),
          domain: [-5, 6],
          breaks: [1],
          vAsymptotes: [1],
          hAsymptote: 1,
          yRange: [-6, 8],
          intercepts: [{ x: 2 - Math.sqrt(3), y: 0 }, { x: 2 + Math.sqrt(3), y: 0 }, { x: 0, y: 1 }],
          extrema: [{ x: -1, y: 1.5, type: 'max' }],
          inflection: [{ x: -2, y: 13 / 9 }],
          title: 'f(x) = (x²-4x+1)/(x-1)²'
        }
      },
      {
        number: 2,
        title: 'Optimization — minimizing material',
        section: '§6.6',
        marks: 6,
        prompt: `
An open-top box with a square base must have a volume of $4000\\text{ cm}^3$. Let $x$ be the side length of the base and $h$ the height.

Find the dimensions that minimize the amount of material used (i.e. minimize the surface area), and find that minimum surface area.
        `,
        solution: `
**Constraint.** The base is a square of side $x$ and the height is $h$, so the volume condition $x^2h=4000$ gives
$$h=\\frac{4000}{x^2},\\qquad x>0.$$ ✓

**Objective.** The box is open-topped, so the material consists of one square base plus four rectangular sides of dimensions $x\\times h$:
$$S=x^2+4xh=x^2+4x\\cdot\\frac{4000}{x^2}=x^2+\\frac{16000}{x}.$$ ✓

Differentiating $S(x)=x^2+16000x^{-1}$ term by term with the power rule:
$$S'(x)=2x-\\frac{16000}{x^2}.$$ ✓

Setting $S'(x)=0$ and multiplying through by $x^2$ (valid since $x>0$): $2x^3-16000=0\\;\\Rightarrow\\;x^3=8000\\;\\Rightarrow\\;x=\\sqrt[3]{8000}=20$, the only critical number on $(0,\\infty)$. ✓

Differentiating again, $S''(x)=2+\\dfrac{32000}{x^3}$, so $S''(20)=2+\\dfrac{32000}{8000}=2+4=6>0$. By the second-derivative test $x=20$ is a **local minimum**, and being the only critical number on $(0,\\infty)$ it is the absolute minimum. ✓

Back-substituting: $h=\\dfrac{4000}{20^2}=\\dfrac{4000}{400}=10$, and
$$S(20)=20^2+\\frac{16000}{20}=400+800=1200.$$ ✓

**Base $20\\text{ cm}\\times20\\text{ cm}$, height $10\\text{ cm}$, minimum surface area $1200\\text{ cm}^2$.**
        `
      },
      {
        number: 3,
        title: 'Volume of revolution (washer method)',
        section: '§8',
        marks: 8,
        prompt: `
Let $R$ be the region enclosed by $y = 2x$ and $y = x^2$ for $x \\ge 0$.

Find the volume of the solid obtained when $R$ is revolved about the $x$-axis.
        `,
        solution: `
**Limits of integration.** The curves meet where $2x=x^2$, i.e. $x^2-2x=0\\;\\Rightarrow\\;x(x-2)=0\\;\\Rightarrow\\;x=0$ or $x=2$. Both satisfy $x\\ge0$, so $R$ sits over $0\\le x\\le2$. ✓

On $(0,2)$ the line lies above the parabola — at the test value $x=1$, $2(1)=2>1=1^2$ — so a vertical strip revolved about the $x$-axis sweeps out a **washer**, not a disc. ✓

Its outer radius is the distance from the axis to the line, $R(x)=2x$, its inner radius is the distance to the parabola, $r(x)=x^2$, and its thickness is $dx$, giving cross-sectional area $\\pi\\left[R(x)^2-r(x)^2\\right]$. ✓

$$V=\\pi\\int_0^2\\Big[(2x)^2-\\left(x^2\\right)^2\\Big]dx=\\pi\\int_0^2\\left(4x^2-x^4\\right)dx.$$ ✓✓

Antidifferentiating term by term with the power rule and evaluating:
$$V=\\pi\\left[\\frac{4x^3}{3}-\\frac{x^5}{5}\\right]_0^2=\\pi\\left[\\left(\\frac{4\\cdot8}{3}-\\frac{32}{5}\\right)-\\left(0-0\\right)\\right]=\\pi\\left(\\frac{32}{3}-\\frac{32}{5}\\right).$$ ✓✓

Taking out the common factor $32$ and using $\\dfrac13-\\dfrac15=\\dfrac{5-3}{15}=\\dfrac{2}{15}$:
$$V=32\\pi\\cdot\\frac{2}{15}=\\frac{64\\pi}{15}.$$ ✓

**Volume $=\\dfrac{64\\pi}{15}\\approx13.40$ cubic units.**
        `
      },
      {
        number: 4,
        title: 'Proof: Fundamental Theorem of Calculus (Part 2)',
        section: '§8',
        marks: 8,
        prompt: `
State and prove the Fundamental Theorem of Calculus, Part 2.

**Theorem.** If $f$ is continuous on $[a,b]$ and $F$ is any antiderivative of $f$ on $[a,b]$, then
$$\\int_a^b f(x)\\,dx = F(b)-F(a).$$

You may use the Mean Value Theorem without proof. (8)
        `,
        solution: `
Partition $[a,b]$ into $n$ subintervals of equal width $\\Delta x=\\dfrac{b-a}{n}$ by the points $a=x_0< x_1<\\dots< x_n=b$, where $x_i=a+i\\,\\Delta x$. ✓

Insert and cancel the interior values $F(x_1),\\dots,F(x_{n-1})$, so that $F(b)-F(a)$ becomes a telescoping sum:
$$F(b)-F(a)=F(x_n)-F(x_0)=\\sum_{i=1}^{n}\\big[F(x_i)-F(x_{i-1})\\big].$$ ✓✓

Fix $i$. Since $F$ is an antiderivative of $f$ on $[a,b]$ it is differentiable there, hence continuous on $[x_{i-1},x_i]$ and differentiable on $(x_{i-1},x_i)$ — exactly the hypotheses of the **Mean Value Theorem**. So there exists $c_i\\in(x_{i-1},x_i)$ with
$$F'(c_i)=\\frac{F(x_i)-F(x_{i-1})}{x_i-x_{i-1}}=\\frac{F(x_i)-F(x_{i-1})}{\\Delta x}.$$
Since $F'=f$, this rearranges to $F(x_i)-F(x_{i-1})=f(c_i)\\,\\Delta x$. ✓✓

Substituting this into the telescoping sum,
$$F(b)-F(a)=\\sum_{i=1}^{n}f(c_i)\\,\\Delta x,$$
which is precisely a Riemann sum for $f$ on $[a,b]$ with sample point $c_i$ in the $i$th subinterval. Note that the left-hand side is a fixed number, independent of $n$. ✓✓

Because $f$ is continuous on $[a,b]$ it is integrable there, so its Riemann sums converge to $\\displaystyle\\int_a^b f(x)\\,dx$ as $n\\to\\infty$ for **any** choice of sample points — in particular the $c_i$ above. Letting $n\\to\\infty$,
$$F(b)-F(a)=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(c_i)\\,\\Delta x=\\int_a^b f(x)\\,dx.\\qquad\\blacksquare$$ ✓
        `
      },
      {
        number: 5,
        title: 'Inverse trigonometric, exponential and logarithmic integrals',
        section: '§9.1',
        marks: 6,
        prompt: `
Evaluate each of the following integrals.

**(a)** $\\displaystyle \\int \\frac{dx}{\\sqrt{9-x^2}}$ (2)

**(b)** $\\displaystyle \\int \\frac{dx}{x^2+4x+13}$ (2)

**(c)** $\\displaystyle \\int e^{-3x}\\,dx$ (1)

**(d)** $\\displaystyle \\int \\frac{2x}{x^2+1}\\,dx$ (1)
        `,
        solution: `
**(a)** This is the standard inverse-sine form $\\displaystyle\\int\\frac{dx}{\\sqrt{a^2-x^2}}=\\arcsin\\!\\left(\\frac{x}{a}\\right)+C$, here with $a^2=9$, so $a=3$. ✓
$$\\int\\frac{dx}{\\sqrt{9-x^2}}=\\arcsin\\!\\left(\\frac{x}{3}\\right)+C.$$ ✓

**(b)** The quadratic is irreducible, so complete the square: $x^2+4x+13=(x^2+4x+4)+9=(x+2)^2+9$. ✓

Now use $\\displaystyle\\int\\frac{du}{u^2+a^2}=\\frac1a\\arctan\\!\\left(\\frac{u}{a}\\right)+C$ with the substitution $u=x+2$, $du=dx$, and $a=3$:
$$\\int\\frac{dx}{(x+2)^2+9}=\\frac13\\arctan\\!\\left(\\frac{x+2}{3}\\right)+C.$$ ✓

**(c)** Let $u=-3x$, so $du=-3\\,dx$ and $dx=-\\tfrac13\\,du$:
$$\\int e^{-3x}\\,dx=-\\frac13\\int e^{u}\\,du=-\\frac13e^{u}+C=-\\frac13e^{-3x}+C.$$ ✓

**(d)** The numerator is exactly the derivative of the denominator, so this is the log form $\\displaystyle\\int\\frac{f'(x)}{f(x)}\\,dx=\\ln|f(x)|+C$ with $f(x)=x^2+1$, which is positive, so the modulus may be dropped:
$$\\int\\frac{2x}{x^2+1}\\,dx=\\ln\\left(x^2+1\\right)+C.$$ ✓
        `
      },
      {
        number: 6,
        title: 'Integration by parts',
        section: '§9.2',
        marks: 6,
        prompt: `
Evaluate $\\displaystyle \\int x^2 e^x\\,dx$.
        `,
        solution: `
The integrand is a polynomial times an exponential, so integrate by parts with $u$ the polynomial; each application lowers its degree by one, so two are needed.

**First application.** Let $u=x^2$, $dv=e^x\\,dx$, so $du=2x\\,dx$ and $v=\\int e^x\\,dx=e^x$. Then $uv-\\int v\\,du$ gives
$$\\int x^2e^x\\,dx=x^2e^x-\\int 2xe^x\\,dx.$$ ✓✓

**Second application**, on $\\displaystyle\\int 2xe^x\\,dx$: let $u=2x$, $dv=e^x\\,dx$, so $du=2\\,dx$ and $v=e^x$. Then
$$\\int 2xe^x\\,dx=2xe^x-\\int 2e^x\\,dx=2xe^x-2e^x.$$ ✓✓

Substituting back, minding the sign on the bracket, and factoring out $e^x$:
$$\\int x^2e^x\\,dx=x^2e^x-\\left(2xe^x-2e^x\\right)+C=e^x\\left(x^2-2x+2\\right)+C.$$ ✓✓

Check: $\\dfrac{d}{dx}\\left[e^x\\left(x^2-2x+2\\right)\\right]=e^x\\left(x^2-2x+2\\right)+e^x(2x-2)=x^2e^x$.
        `
      },
      {
        number: 7,
        title: 'Partial fraction decomposition (distinct linear factors)',
        section: '§9.5',
        marks: 6,
        prompt: `
Evaluate $\\displaystyle \\int \\frac{3x+5}{(x+1)(x+2)}\\,dx$.
        `,
        solution: `
The denominator is already factorised into two **distinct linear factors**, and the numerator has lower degree than the denominator, so no division is needed. The decomposition carries one constant over each factor:
$$\\frac{3x+5}{(x+1)(x+2)}=\\frac{A}{x+1}+\\frac{B}{x+2}.$$ ✓

Multiplying both sides by $(x+1)(x+2)$ clears the denominators and leaves an identity valid for every $x$:
$$3x+5=A(x+2)+B(x+1).$$ ✓

Setting $x=-1$ kills the $B$ term: $\\;-3+5=2=A(1)\\;\\Rightarrow\\;A=2$. ✓

Setting $x=-2$ kills the $A$ term: $\\;-6+5=-1=B(-1)\\;\\Rightarrow\\;B=1$. ✓

Checking against the coefficients of $x$: $A+B=2+1=3$, matching the $3x$ on the left, as required.

Integrating term by term, each piece having the standard form $\\displaystyle\\int\\frac{dx}{x-k}=\\ln|x-k|+C$:
$$\\int\\frac{3x+5}{(x+1)(x+2)}\\,dx=\\int\\left(\\frac{2}{x+1}+\\frac{1}{x+2}\\right)dx=2\\ln|x+1|+\\ln|x+2|+C.$$ ✓✓
        `
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // PRACTICE PAPER 2
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'paper2',
    label: 'Practice Paper 2',
    date: 'Practice Test B',
    totalMarks: 52,
    duration: 60,
    questions: [
      {
        number: 1,
        title: 'Curve sketching (slant asymptote)',
        section: '§6.5',
        marks: 12,
        prompt: `
Let $\\displaystyle f(x) = \\frac{x^2+3}{x-2}$.

**(a)** Find the $x$- and $y$-intercepts of $f$ (if any). (2)

**(b)** Perform polynomial long division on $f(x)$, and hence find the vertical and slant (oblique) asymptotes of $f$. (2)

**(c)** Find $f'(x)$, and hence determine the intervals of increase/decrease and locate any local extrema. (3)

**(d)** Find $f''(x)$, and hence discuss the concavity of $f$. (3)

**(e)** Using the information from (a)–(d), sketch the graph of $f$. (2)
        `,
        solution: `
**(a)** The domain is every $x\\neq2$. An $x$-intercept needs the numerator to vanish, but $x^2+3\\ge3>0$ for every real $x$, so $x^2+3=0$ has no real solution: $f$ has **no $x$-intercepts**. ✓

$y$-intercept: $f(0)=\\dfrac{0^2+3}{0-2}=\\dfrac{3}{-2}=-\\dfrac32$, giving the point $\\left(0,-\\dfrac32\\right)$. ✓

**(b)** Dividing $x^2+3$ by $x-2$ gives quotient $x+2$ and remainder $7$, since $(x-2)(x+2)+7=(x^2-4)+7=x^2+3$. Hence
$$f(x)=x+2+\\frac{7}{x-2}.$$ ✓

At $x=2$ the denominator vanishes while the remainder is $7\\neq0$, so $x=2$ is a **vertical asymptote**: $f\\to-\\infty$ as $x\\to2^-$ and $f\\to+\\infty$ as $x\\to2^+$. Since $\\dfrac{7}{x-2}\\to0$ as $x\\to\\pm\\infty$, the curve settles onto the **slant asymptote** $y=x+2$. ✓

**(c)** By the quotient rule, with $u=x^2+3$, $u'=2x$, $v=x-2$, $v'=1$:
$$f'(x)=\\frac{2x(x-2)-(x^2+3)(1)}{(x-2)^2}=\\frac{2x^2-4x-x^2-3}{(x-2)^2}=\\frac{x^2-4x-3}{(x-2)^2}.$$ ✓✓

$f'(x)=0$ requires the numerator to vanish: $x^2-4x-3=0\\;\\Rightarrow\\;x=\\dfrac{4\\pm\\sqrt{16+12}}{2}=\\dfrac{4\\pm2\\sqrt7}{2}=2\\pm\\sqrt7\\approx-0.65$ and $4.65$.

The denominator $(x-2)^2>0$ on the domain, so $f'$ carries the sign of the upward parabola $x^2-4x-3$. Sign chart on $(-\\infty,2-\\sqrt7),\\,(2-\\sqrt7,2),\\,(2,2+\\sqrt7),\\,(2+\\sqrt7,\\infty)$ with test values $x=-1,0,3,6$: $f'=\\tfrac29>0,\\;-\\tfrac34<0,\\;-6<0,\\;\\tfrac{9}{16}>0$. So $f$ is **increasing on $(-\\infty,2-\\sqrt7)$ and $(2+\\sqrt7,\\infty)$** and **decreasing on $(2-\\sqrt7,2)$ and $(2,2+\\sqrt7)$**, with a **local maximum** at $x=2-\\sqrt7$, $f=4-2\\sqrt7\\approx-1.29$, and a **local minimum** at $x=2+\\sqrt7$, $f=4+2\\sqrt7\\approx9.29$. ✓

**(d)** Differentiating $f'(x)=\\dfrac{x^2-4x-3}{(x-2)^2}$ by the quotient rule, with $u=x^2-4x-3$, $u'=2x-4$, $v=(x-2)^2$, $v'=2(x-2)$, then cancelling one factor of $(x-2)$:
$$f''(x)=\\frac{(2x-4)(x-2)^2-2(x-2)(x^2-4x-3)}{(x-2)^4}=\\frac{(2x-4)(x-2)-2(x^2-4x-3)}{(x-2)^3}.$$ ✓

Expanding the numerator: $(2x^2-8x+8)-(2x^2-8x-6)=14$, so
$$f''(x)=\\frac{14}{(x-2)^3}.$$ ✓

Since $14>0$, $f''$ is never zero and takes the sign of $(x-2)^3$: negative for $x<2$ (e.g. $f''(0)=-\\tfrac74$), positive for $x>2$ (e.g. $f''(3)=14$). So $f$ is **concave down on $(-\\infty,2)$** and **concave up on $(2,\\infty)$**, with **no point of inflection**, since the only sign change is at $x=2$, excluded from the domain. This confirms (c) by the second-derivative test: $f''(2-\\sqrt7)=-\\tfrac{2\\sqrt7}{7}<0$ (maximum) and $f''(2+\\sqrt7)=\\tfrac{2\\sqrt7}{7}>0$ (minimum). ✓

**(e)** See the graph below — it shows the vertical asymptote $x=2$, the slant asymptote $y=x+2$, the $y$-intercept $\\left(0,-\\tfrac32\\right)$, and no $x$-intercepts. ✓

The left branch rises to the local maximum $\\left(2-\\sqrt7,\\,4-2\\sqrt7\\right)$ before plunging to $-\\infty$ at the asymptote; the right branch falls from $+\\infty$ to the local minimum $\\left(2+\\sqrt7,\\,4+2\\sqrt7\\right)$, then climbs along $y=x+2$. ✓
        `,
        graph: {
          fn: x => (x * x + 3) / (x - 2),
          domain: [-6, 10],
          breaks: [2],
          vAsymptotes: [2],
          slant: { m: 1, c: 2 },
          yRange: [-8, 16],
          intercepts: [{ x: 0, y: -1.5 }],
          extrema: [
            { x: 2 - Math.sqrt(7), y: 4 - 2 * Math.sqrt(7), type: 'max' },
            { x: 2 + Math.sqrt(7), y: 4 + 2 * Math.sqrt(7), type: 'min' }
          ],
          title: 'f(x) = (x²+3)/(x-2)'
        }
      },
      {
        number: 2,
        title: 'Optimization — maximizing enclosed area',
        section: '§6.6',
        marks: 6,
        prompt: `
A farmer wants to fence a rectangular field bordering a straight river; no fence is needed along the river. If $800$ m of fencing is available for the other three sides, find the dimensions that maximize the enclosed area, and state the maximum area.
        `,
        solution: `
Let $x$ be the length in metres of each of the two sides perpendicular to the river, and $y$ the length of the single side parallel to it. No fence runs along the river, so only three sides consume the $800$ m:
$$2x+y=800\\;\\Rightarrow\\;y=800-2x,$$
and both lengths must be positive, which restricts $x$ to $0< x<400$. ✓

Using the constraint to write the objective in one variable, the area to be maximised is
$$A(x)=xy=x(800-2x)=800x-2x^2,\\qquad 0< x<400.$$ ✓

Differentiating and setting the derivative to zero to find the critical point:
$$A'(x)=800-4x=0\\;\\Rightarrow\\;4x=800\\;\\Rightarrow\\;x=200.$$ ✓

$A''(x)=-4<0$ for every $x$, so by the second-derivative test $x=200$ is a **local maximum**; since $A$ is a downward parabola vanishing at both endpoints $A(0)=A(400)=0$, this is the absolute maximum on the interval. ✓

Back-substituting into the constraint, $y=800-2(200)=800-400=400$ m, and
$$A(200)=200\\times400=80\\,000\\text{ m}^2.$$ ✓✓

**Dimensions $200\\text{ m}$ (each side perpendicular to the river) $\\times\\;400\\text{ m}$ (the side parallel to the river); maximum area $80\\,000\\text{ m}^2$.**
        `
      },
      {
        number: 3,
        title: 'Work done stretching a spring',
        section: '§8',
        marks: 8,
        prompt: `
A spring has natural length $0.2$ m. A force of $25$ N is required to hold it stretched to a length of $0.3$ m.

Using Hooke's Law, $F(x) = kx$ (where $x$ is the displacement from natural length), find the work done in stretching the spring from its natural length to a length of $0.35$ m.
        `,
        solution: `
Measure the displacement $x$ from the natural length. Stretching the spring from $0.2$ m to $0.3$ m is a displacement of $x=0.3-0.2=0.1$ m, and holding it there requires $25$ N, so Hooke's Law $F(x)=kx$ gives
$$25=k(0.1)\\;\\Rightarrow\\;k=\\frac{25}{0.1}=250\\text{ N/m},\\qquad\\text{so } F(x)=250x.$$ ✓✓

A length of $0.35$ m corresponds to a displacement of $x=0.35-0.2=0.15$ m, so the spring is stretched from $x=0$ (natural length) to $x=0.15$. ✓

The force is not constant, so the work is the integral of force over displacement, $W=\\displaystyle\\int_a^b F(x)\\,dx$:
$$W=\\int_0^{0.15}250x\\,dx.$$ ✓✓

Antidifferentiating $250x$ by the power rule gives $250\\cdot\\dfrac{x^2}{2}=125x^2$:
$$W=\\left[125x^2\\right]_0^{0.15}.$$ ✓

Substituting the limits and subtracting:
$$W=125(0.15)^2-125(0)^2=125(0.0225)=2.8125.$$ ✓✓

**Work done $=2.8125\\text{ J}$.**
        `
      },
      {
        number: 4,
        title: 'Proof: Sum Rule for Definite Integrals',
        section: '§8',
        marks: 8,
        prompt: `
Using the definition of the definite integral as a limit of Riemann sums, prove the **Sum Rule**:
$$\\int_a^b\\big[f(x)+g(x)\\big]\\,dx=\\int_a^b f(x)\\,dx+\\int_a^b g(x)\\,dx,$$
given that $f$ and $g$ are integrable on $[a,b]$. (8)
        `,
        solution: `
Partition $[a,b]$ into $n$ subintervals of equal width $\\Delta x=\\dfrac{b-a}{n}$ and choose a sample point $x_i^*$ in the $i$-th subinterval $[x_{i-1},x_i]$. By the definition of the definite integral, any function $h$ integrable on $[a,b]$ satisfies
$$\\int_a^b h(x)\\,dx=\\lim_{n\\to\\infty}\\sum_{i=1}^n h(x_i^*)\\,\\Delta x.$$ ✓✓

Applying this definition with $h=f+g$, so that $h(x_i^*)=f(x_i^*)+g(x_i^*)$:
$$\\int_a^b\\big[f(x)+g(x)\\big]\\,dx=\\lim_{n\\to\\infty}\\sum_{i=1}^n\\big[f(x_i^*)+g(x_i^*)\\big]\\Delta x.$$ ✓

Inside the sum, distribute $\\Delta x$ over the bracket, then split the sum. This regrouping is legitimate because the sum is **finite**: addition is associative and commutative, so the $f$-terms and the $g$-terms may be collected separately.
$$\\sum_{i=1}^n\\big[f(x_i^*)+g(x_i^*)\\big]\\Delta x=\\sum_{i=1}^n f(x_i^*)\\Delta x+\\sum_{i=1}^n g(x_i^*)\\Delta x.$$ ✓✓

Both $f$ and $g$ are integrable on $[a,b]$, so each of the two limits $\\displaystyle\\lim_{n\\to\\infty}\\sum_{i=1}^n f(x_i^*)\\Delta x$ and $\\displaystyle\\lim_{n\\to\\infty}\\sum_{i=1}^n g(x_i^*)\\Delta x$ exists, with values $\\int_a^b f(x)\\,dx$ and $\\int_a^b g(x)\\,dx$ respectively. ✓

Existence of both limits is precisely the hypothesis of the **Sum Law for limits**, which therefore lets the limit of the sum be written as the sum of the limits:
$$=\\lim_{n\\to\\infty}\\sum_{i=1}^n f(x_i^*)\\Delta x+\\lim_{n\\to\\infty}\\sum_{i=1}^n g(x_i^*)\\Delta x=\\int_a^b f(x)\\,dx+\\int_a^b g(x)\\,dx.\\quad\\blacksquare$$ ✓✓
        `
      },
      {
        number: 5,
        title: 'Inverse trigonometric, exponential and logarithmic integrals',
        section: '§9.1',
        marks: 6,
        prompt: `
Evaluate each of the following integrals.

**(a)** $\\displaystyle \\int \\frac{dx}{\\sqrt{1-16x^2}}$ (2)

**(b)** $\\displaystyle \\int \\frac{dx}{x^2-6x+13}$ (2)

**(c)** $\\displaystyle \\int 5^x\\,dx$ (1)

**(d)** $\\displaystyle \\int \\frac{\\sec^2x}{\\tan x}\\,dx$ (1)
        `,
        solution: `
**(a)** Write $16x^2=(4x)^2$ and substitute $u=4x$, so $du=4\\,dx$ and $dx=\\tfrac14\\,du$: ✓
$$\\int\\frac{dx}{\\sqrt{1-(4x)^2}}=\\frac14\\int\\frac{du}{\\sqrt{1-u^2}}=\\frac14\\arcsin u+C=\\frac14\\arcsin(4x)+C.$$ ✓

**(b)** Complete the square: $x^2-6x+13=(x^2-6x+9)+4=(x-3)^2+2^2$. ✓

With $\\displaystyle\\int\\frac{dx}{x^2+a^2}=\\frac1a\\arctan\\frac{x}{a}+C$, here shifted by $3$ and with $a=2$:
$$\\int\\frac{dx}{(x-3)^2+4}=\\frac12\\arctan\\!\\left(\\frac{x-3}{2}\\right)+C.$$ ✓

**(c)** By the standard rule $\\displaystyle\\int a^x\\,dx=\\frac{a^x}{\\ln a}+C$ with $a=5$:
$$\\int5^x\\,dx=\\frac{5^x}{\\ln5}+C.$$ ✓

**(d)** Since $\\dfrac{d}{dx}\\tan x=\\sec^2x$, the integrand has the form $\\dfrac{f'(x)}{f(x)}$ with $f(x)=\\tan x$, which integrates to $\\ln|f(x)|$:
$$\\int\\frac{\\sec^2x}{\\tan x}\\,dx=\\ln|\\tan x|+C.$$ ✓
        `
      },
      {
        number: 6,
        title: 'Integration by parts',
        section: '§9.2',
        marks: 6,
        prompt: `
Evaluate $\\displaystyle \\int x^2 \\ln x\\,dx$.
        `,
        solution: `
The integrand is a logarithm times a power, so use integration by parts, $\\displaystyle\\int u\\,dv=uv-\\int v\\,du$, taking as $u$ the factor that simplifies on differentiation: let $u=\\ln x$, $dv=x^2\\,dx$, so that $du=\\dfrac1x\\,dx$ and $v=\\dfrac{x^3}{3}$. ✓✓

Substituting these four pieces, and noting that the new integrand simplifies since $\\dfrac{x^3}{3}\\cdot\\dfrac1x=\\dfrac{x^2}{3}$:
$$\\int x^2\\ln x\\,dx=\\frac{x^3}{3}\\ln x-\\int\\frac{x^3}{3}\\cdot\\frac1x\\,dx=\\frac{x^3}{3}\\ln x-\\frac13\\int x^2\\,dx.$$ ✓✓

The remaining integral is elementary, $\\displaystyle\\int x^2\\,dx=\\frac{x^3}{3}$, so
$$\\int x^2\\ln x\\,dx=\\frac{x^3}{3}\\ln x-\\frac13\\cdot\\frac{x^3}{3}+C=\\frac{x^3}{3}\\ln x-\\frac{x^3}{9}+C.$$ ✓✓
        `
      },
      {
        number: 7,
        title: 'Partial fraction decomposition (distinct linear factors, plus a bonus)',
        section: '§9.5',
        marks: 6,
        prompt: `
**(a)** Evaluate $\\displaystyle \\int \\frac{x+7}{x^2-x-2}\\,dx$. (6)

**(b)** [Bonus question]. Evaluate $\\displaystyle \\int \\frac{x^2}{x^2-1}\\,dx$. (3)
        `,
        solution: `
**(a)** Factor the denominator: $x^2-x-2=(x-2)(x+1)$, two **distinct linear factors**, and the fraction is proper (degree $1$ over degree $2$), so partial fractions apply directly. ✓

Each distinct linear factor contributes one term with a constant numerator, so assume
$$\\frac{x+7}{(x-2)(x+1)}=\\frac{A}{x-2}+\\frac{B}{x+1}.$$ ✓

Multiplying both sides by $(x-2)(x+1)$ clears the denominators and gives an identity valid for every $x$:
$$x+7=A(x+1)+B(x-2).$$ ✓

Setting $x=2$ kills the $B$ term: $\\;2+7=A(3)\\;\\Rightarrow\\;9=3A\\;\\Rightarrow\\;A=3$. ✓

Setting $x=-1$ kills the $A$ term: $\\;-1+7=B(-3)\\;\\Rightarrow\\;6=-3B\\;\\Rightarrow\\;B=-2$. ✓

Integrating term by term with $\\displaystyle\\int\\frac{dx}{x-k}=\\ln|x-k|$:
$$\\int\\frac{x+7}{x^2-x-2}\\,dx=\\int\\left(\\frac{3}{x-2}-\\frac{2}{x+1}\\right)dx=3\\ln|x-2|-2\\ln|x+1|+C.$$ ✓

**(b)** [Bonus question]. Numerator and denominator both have degree $2$, so the fraction is **improper** and partial fractions cannot be applied until the degree is reduced. Divide by adding and subtracting $1$ in the numerator:
$$\\frac{x^2}{x^2-1}=\\frac{(x^2-1)+1}{x^2-1}=1+\\frac{1}{x^2-1}.$$ ✓

Now decompose the proper remainder over $x^2-1=(x-1)(x+1)$. Writing $\\dfrac{1}{(x-1)(x+1)}=\\dfrac{A}{x-1}+\\dfrac{B}{x+1}$ and clearing denominators gives $1=A(x+1)+B(x-1)$. Setting $x=1$: $1=2A\\Rightarrow A=\\tfrac12$; setting $x=-1$: $1=-2B\\Rightarrow B=-\\tfrac12$. ✓

Integrating the constant term and the two logarithmic terms:
$$\\int\\frac{x^2}{x^2-1}\\,dx=\\int\\left(1+\\frac{1/2}{x-1}-\\frac{1/2}{x+1}\\right)dx=x+\\frac12\\ln|x-1|-\\frac12\\ln|x+1|+C.$$ ✓
        `
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // PRACTICE PAPER 3
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'paper3',
    label: 'Practice Paper 3',
    date: 'Practice Test C',
    totalMarks: 52,
    duration: 60,
    questions: [
      {
        number: 1,
        title: 'Curve sketching (two vertical asymptotes)',
        section: '§6.5',
        marks: 12,
        prompt: `
Let $\\displaystyle f(x) = \\frac{x^2-9}{x^2-4}$.

**(a)** Find the $x$-intercepts and $y$-intercept of $f$. (2)

**(b)** Find all vertical asymptotes and the horizontal asymptote of $f$. (2)

**(c)** Find $f'(x)$, and hence determine the intervals of increase/decrease and any local extrema. (3)

**(d)** Find $f''(x)$, and hence discuss the concavity of $f$. (3)

**(e)** Using the information from (a)–(d), sketch the graph of $f$. (2)
        `,
        solution: `
**(a)** A quotient is zero where its numerator vanishes: $x^2-9=0\\;\\Rightarrow\\;x=\\pm3$. At both roots the denominator is $9-4=5\\neq0$, so the **$x$-intercepts** are $(-3,0)$ and $(3,0)$. ✓

$y$-intercept: $f(0)=\\dfrac{-9}{-4}=\\dfrac94$, i.e. the point $\\left(0,\\tfrac94\\right)$. ✓

**(b)** The denominator factorises as $x^2-4=(x-2)(x+2)$, vanishing at $x=\\pm2$, where the numerator is $4-9=-5\\neq0$, so neither is a removable hole and $x=\\pm2$ are **vertical asymptotes**. Here $f\\to+\\infty$ as $x\\to-2^+$ and $x\\to2^-$, and $f\\to-\\infty$ as $x\\to-2^-$ and $x\\to2^+$. ✓

Numerator and denominator have equal degree, so divide both by $x^2$:
$$\\lim_{x\\to\\pm\\infty}\\frac{x^2-9}{x^2-4}=\\lim_{x\\to\\pm\\infty}\\frac{1-9/x^2}{1-4/x^2}=\\frac{1-0}{1-0}=1,$$
so $y=1$ is the **horizontal asymptote**, approached from below ($f(10)=\\tfrac{91}{96}<1$). ✓

**(c)** Note $f(-x)=\\dfrac{(-x)^2-9}{(-x)^2-4}=f(x)$, so $f$ is **even**, symmetric about the $y$-axis. By the quotient rule, with $u=x^2-9$, $u'=2x$, $v=x^2-4$, $v'=2x$:
$$f'(x)=\\frac{2x(x^2-4)-(x^2-9)(2x)}{(x^2-4)^2}=\\frac{2x\\big[(x^2-4)-(x^2-9)\\big]}{(x^2-4)^2}=\\frac{2x\\cdot5}{(x^2-4)^2}=\\frac{10x}{(x^2-4)^2}.$$ ✓✓

$f'(x)=0\\;\\Rightarrow\\;x=0$; $f'$ is undefined only at $x=\\pm2$, outside the domain. The denominator is a square, hence positive, so $f'$ carries the sign of $x$. Sign chart on $(-\\infty,-2),(-2,0),(0,2),(2,\\infty)$ with test values $x=-3,-1,1,3$: $f'=-\\tfrac65,\\;-\\tfrac{10}{9},\\;\\tfrac{10}{9},\\;\\tfrac65$. So $f$ is **decreasing on $(-\\infty,-2)$ and $(-2,0)$** and **increasing on $(0,2)$ and $(2,\\infty)$**, with a **local minimum** at $x=0$, $f(0)=\\tfrac94$. ✓

**(d)** Write $f'(x)=10x(x^2-4)^{-2}$ and use the product rule, with $u=10x$, $u'=10$, $v=(x^2-4)^{-2}$, $v'=-2(x^2-4)^{-3}(2x)$ (chain rule):
$$f''(x)=10(x^2-4)^{-2}-40x^2(x^2-4)^{-3}=10(x^2-4)^{-3}\\big[(x^2-4)-4x^2\\big]=\\frac{-10(3x^2+4)}{(x^2-4)^3},$$
since $(x^2-4)-4x^2=-3x^2-4$. ✓✓

Since $3x^2+4>0$, the numerator is always negative, so $f''$ never vanishes and takes the sign opposite to $x^2-4$. Sign chart on $(-\\infty,-2),(-2,2),(2,\\infty)$ with test values $x=-3,0,3$: $f''=-\\tfrac{62}{25},\\;\\tfrac58,\\;-\\tfrac{62}{25}$. So $f$ is **concave up on $(-2,2)$** and **concave down on $(-\\infty,-2)$ and on $(2,\\infty)$**, with **no points of inflection**, since $f''$ changes sign only at $x=\\pm2$, where $f$ is undefined. This confirms (c): $f''(0)=\\tfrac58>0$, a minimum by the second-derivative test. ✓

**(e)** See the graph below — it shows the even symmetry, the vertical asymptotes $x=\\pm2$, the horizontal asymptote $y=1$ approached from below, and the intercepts $(\\pm3,0)$ and $\\left(0,\\tfrac94\\right)$. ✓

The middle branch falls from $+\\infty$ to the minimum $\\left(0,\\tfrac94\\right)$ and back to $+\\infty$; the right branch climbs from $-\\infty$ at $x=2^+$ through $(3,0)$ onto $y=1$, and the left branch mirrors it. ✓
        `,
        graph: {
          fn: x => (x * x - 9) / (x * x - 4),
          domain: [-6, 6],
          breaks: [-2, 2],
          vAsymptotes: [-2, 2],
          hAsymptote: 1,
          yRange: [-6, 8],
          intercepts: [{ x: -3, y: 0 }, { x: 3, y: 0 }, { x: 0, y: 2.25 }],
          extrema: [{ x: 0, y: 2.25, type: 'min' }],
          title: 'f(x) = (x²-9)/(x²-4)'
        }
      },
      {
        number: 2,
        title: 'Optimization — minimizing a can',
        section: '§6.6',
        marks: 6,
        prompt: `
A closed cylindrical can (top and bottom included) must hold a volume of $1000\\text{ cm}^3$. Find the radius $r$ and height $h$ that minimize the total surface area.
        `,
        solution: `
Let $r$ be the radius and $h$ the height of the can, both in cm, with $r>0$.

**Constraint.** The cylinder's volume is fixed at $\\pi r^2h=1000$, so
$$h=\\frac{1000}{\\pi r^2}.$$ ✓

**Objective.** A closed can has two circular ends of area $\\pi r^2$ each together with a curved side of area $2\\pi rh$, so $S=2\\pi r^2+2\\pi rh$. Using the constraint to eliminate $h$ leaves a function of the single variable $r$:
$$S(r)=2\\pi r^2+2\\pi r\\cdot\\frac{1000}{\\pi r^2}=2\\pi r^2+\\frac{2000}{r},\\qquad r>0.$$ ✓

**Critical point.** Differentiating term by term, with $\\dfrac{d}{dr}\\left(2000r^{-1}\\right)=-2000r^{-2}$:
$$S'(r)=4\\pi r-\\frac{2000}{r^2}=0\\;\\Rightarrow\\;4\\pi r^3=2000\\;\\Rightarrow\\;r^3=\\frac{500}{\\pi}\\;\\Rightarrow\\;r=\\sqrt[3]{\\frac{500}{\\pi}}\\approx5.42\\text{ cm}.$$ ✓✓

**Justification.** Differentiating again, $S''(r)=4\\pi+\\dfrac{4000}{r^3}$, and at the critical point $r^3=\\dfrac{500}{\\pi}$ gives
$$S''=4\\pi+\\frac{4000}{500/\\pi}=4\\pi+8\\pi=12\\pi>0,$$
so by the second-derivative test this critical point is a **minimum**; as it is the only critical number on $r>0$, the minimum is absolute. ✓

**Back-substitute.** Using $\\pi r^3=500$,
$$h=\\frac{1000}{\\pi r^2}=\\frac{2\\left(\\pi r^3\\right)}{\\pi r^2}=2r\\approx10.84\\text{ cm}.$$ ✓

**The minimizing can has $r=\\sqrt[3]{500/\\pi}\\approx5.42\\text{ cm}$ and $h=2r\\approx10.84\\text{ cm}$** (the height equals the diameter), giving a minimum surface area of about $554\\text{ cm}^2$.
        `
      },
      {
        number: 3,
        title: 'Area between curves (integrating with respect to y)',
        section: '§8',
        marks: 8,
        prompt: `
Find the area of the region enclosed by the curves $x=y^2$ and $x=y+2$.
        `,
        solution: `
Both curves give $x$ in terms of $y$, so integrate with respect to $y$ — the region is then a single strip needing no splitting.

**Intersections.** Setting the two expressions for $x$ equal gives $y^2=y+2$, i.e. $y^2-y-2=0$, which factorises as $(y-2)(y+1)=0$, so the curves meet at $y=-1$ and $y=2$ — the points $(1,-1)$ and $(4,2)$. ✓✓

**Which curve lies to the right?** Test $y=0$: the line gives $x=2$, the parabola $x=0$, and $2>0$, so $x=y+2$ lies to the right of $x=y^2$ throughout $-1< y<2$. ✓

A horizontal strip at height $y$ therefore has width $(y+2)-y^2$ and thickness $dy$:
$$A=\\int_{-1}^{2}\\big[(y+2)-y^2\\big]\\,dy.$$ ✓

Antidifferentiating term by term with the power rule:
$$A=\\left[\\frac{y^2}{2}+2y-\\frac{y^3}{3}\\right]_{-1}^{2}.$$ ✓

At $y=2$: $\\dfrac{4}{2}+4-\\dfrac{8}{3}=2+4-\\dfrac83=\\dfrac{18-8}{3}=\\dfrac{10}{3}$. ✓

At $y=-1$: $\\dfrac12-2+\\dfrac13=\\dfrac{3}{6}-\\dfrac{12}{6}+\\dfrac{2}{6}=-\\dfrac76$. ✓

Subtracting the lower value from the upper:
$$A=\\frac{10}{3}-\\left(-\\frac76\\right)=\\frac{20}{6}+\\frac{7}{6}=\\frac{27}{6}=\\frac92.$$ ✓

**Area $=\\dfrac92$ square units.**
        `
      },
      {
        number: 4,
        title: 'Proof: Integrals of Even and Odd Functions',
        section: '§8',
        marks: 8,
        prompt: `
Suppose $f$ is continuous on $[-a,a]$. Prove that:

**(a)** if $f$ is even ($f(-x)=f(x)$), then $\\displaystyle\\int_{-a}^a f(x)\\,dx=2\\int_0^a f(x)\\,dx$; (4)

**(b)** if $f$ is odd ($f(-x)=-f(x)$), then $\\displaystyle\\int_{-a}^a f(x)\\,dx=0$. (4)
        `,
        solution: `
Since $f$ is continuous on $[-a,a]$ it is integrable there and on every subinterval, so the additivity property of the definite integral lets us split at $0$:
$$\\int_{-a}^{a}f(x)\\,dx=\\int_{-a}^{0}f(x)\\,dx+\\int_{0}^{a}f(x)\\,dx.$$ ✓

Transform the first integral by the substitution $u=-x$, so that $du=-\\,dx$, i.e. $dx=-\\,du$, and the limits change with it: $x=-a\\;\\Rightarrow\\;u=a$, and $x=0\\;\\Rightarrow\\;u=0$. Then
$$\\int_{-a}^{0}f(x)\\,dx=\\int_{a}^{0}f(-u)\\,(-du)=-\\int_{a}^{0}f(-u)\\,du=\\int_{0}^{a}f(-u)\\,du,$$
the last step reversing the limits, which changes the sign. The name of the variable of integration is immaterial, so this equals $\\displaystyle\\int_{0}^{a}f(-x)\\,dx$. ✓✓

Substituting this back gives the identity on which both parts rest:
$$\\int_{-a}^{a}f(x)\\,dx=\\int_{0}^{a}f(-x)\\,dx+\\int_{0}^{a}f(x)\\,dx.$$ ✓

**(a)** If $f$ is even then $f(-x)=f(x)$ for every $x\\in[-a,a]$, so the two integrands are identical and the right-hand side is the sum of two equal integrals:
$$\\int_{-a}^{a}f(x)\\,dx=\\int_{0}^{a}f(x)\\,dx+\\int_{0}^{a}f(x)\\,dx=2\\int_{0}^{a}f(x)\\,dx,$$
which is the required result. $\\blacksquare$ ✓✓

**(b)** If $f$ is odd then $f(-x)=-f(x)$ for every $x\\in[-a,a]$, so the first integrand is the negative of the second. Continuity guarantees that $\\displaystyle\\int_{0}^{a}f(x)\\,dx$ is a finite number, so the two terms cancel by the Sum Law:
$$\\int_{-a}^{a}f(x)\\,dx=\\int_{0}^{a}\\big(-f(x)\\big)\\,dx+\\int_{0}^{a}f(x)\\,dx=-\\int_{0}^{a}f(x)\\,dx+\\int_{0}^{a}f(x)\\,dx=0,$$
so the whole integral vanishes. $\\blacksquare$ ✓✓
        `
      },
      {
        number: 5,
        title: 'Inverse trigonometric, exponential and logarithmic integrals',
        section: '§9.1',
        marks: 6,
        prompt: `
Evaluate each of the following integrals.

**(a)** $\\displaystyle \\int \\frac{dx}{\\sqrt{25-4x^2}}$ (2)

**(b)** $\\displaystyle \\int \\frac{dx}{4x^2+4x+2}$ (2)

**(c)** $\\displaystyle \\int 3e^{x/3}\\,dx$ (1)

**(d)** $\\displaystyle \\int \\cot x\\,dx$ (1)
        `,
        solution: `
**(a)** Rewrite the radicand as a difference of squares, $25-4x^2=25-(2x)^2$, and substitute $u=2x$, so $du=2\\,dx$ and $dx=\\tfrac12\\,du$. With the standard form $\\displaystyle\\int\\frac{du}{\\sqrt{a^2-u^2}}=\\arcsin\\frac{u}{a}+C$ and $a=5$:
$$\\int\\frac{dx}{\\sqrt{25-(2x)^2}}=\\frac12\\int\\frac{du}{\\sqrt{25-u^2}}=\\frac12\\arcsin\\!\\left(\\frac u5\\right)+C=\\frac12\\arcsin\\!\\left(\\frac{2x}{5}\\right)+C.$$ ✓✓

**(b)** The discriminant is $16-32<0$, so complete the square: $4x^2+4x+2=\\left(4x^2+4x+1\\right)+1=(2x+1)^2+1$. ✓

Let $u=2x+1$, $du=2\\,dx$, and use $\\displaystyle\\int\\frac{du}{u^2+1}=\\arctan u+C$:
$$\\int\\frac{dx}{(2x+1)^2+1}=\\frac12\\int\\frac{du}{u^2+1}=\\frac12\\arctan u+C=\\frac12\\arctan(2x+1)+C.$$ ✓

**(c)** Using $\\displaystyle\\int e^{kx}dx=\\frac1k e^{kx}+C$ with $k=\\tfrac13$ (so $\\tfrac1k=3$):
$$\\int 3e^{x/3}\\,dx=3\\cdot3e^{x/3}+C=9e^{x/3}+C.$$ ✓

**(d)** Write $\\cot x=\\dfrac{\\cos x}{\\sin x}$, which has the form $\\dfrac{f'(x)}{f(x)}$ with $f(x)=\\sin x$ and $f'(x)=\\cos x$. Since $\\displaystyle\\int\\frac{f'(x)}{f(x)}\\,dx=\\ln|f(x)|+C$ (equivalently, substitute $u=\\sin x$, $du=\\cos x\\,dx$):
$$\\int\\cot x\\,dx=\\ln|\\sin x|+C.$$ ✓
        `
      },
      {
        number: 6,
        title: 'Integration by parts',
        section: '§9.2',
        marks: 6,
        prompt: `
Evaluate $\\displaystyle \\int x\\sin(3x)\\,dx$.
        `,
        solution: `
The integrand is a polynomial times a trigonometric function, so use integration by parts, $\\displaystyle\\int u\\,dv=uv-\\int v\\,du$, taking the polynomial as $u$ because differentiating it removes the $x$ factor entirely.

Let $u=x$ and $dv=\\sin(3x)\\,dx$, so that $du=dx$ and $v=\\displaystyle\\int\\sin(3x)\\,dx=-\\frac{\\cos(3x)}{3}$. ✓✓

Substituting these four pieces into the by-parts formula:
$$\\int x\\sin(3x)\\,dx=uv-\\int v\\,du=-\\frac{x\\cos(3x)}{3}-\\int\\left(-\\frac{\\cos(3x)}{3}\\right)dx=-\\frac{x\\cos(3x)}{3}+\\frac13\\int\\cos(3x)\\,dx.$$ ✓✓

The remaining integral is elementary, $\\displaystyle\\int\\cos(3x)\\,dx=\\frac{\\sin(3x)}{3}$, so
$$\\int x\\sin(3x)\\,dx=-\\frac{x\\cos(3x)}{3}+\\frac13\\cdot\\frac{\\sin(3x)}{3}+C=-\\frac{x\\cos(3x)}{3}+\\frac{\\sin(3x)}{9}+C.$$ ✓✓

Check by differentiating the answer with the product and chain rules: $-\\tfrac13\\big[\\cos(3x)-3x\\sin(3x)\\big]+\\tfrac13\\cos(3x)=x\\sin(3x)$, which recovers the original integrand exactly.
        `
      },
      {
        number: 7,
        title: 'Partial fraction decomposition (repeated linear factor)',
        section: '§9.5',
        marks: 6,
        prompt: `
Evaluate $\\displaystyle \\int \\frac{x^2+1}{x(x-1)^2}\\,dx$.
        `,
        solution: `
The denominator is already factorised as $x(x-1)^2$: a distinct linear factor $x$ and a **repeated** linear factor $(x-1)^2$, which needs one term for each power up to the second. The degree of the numerator is less than that of the denominator, so no division is needed and the correct form is
$$\\frac{x^2+1}{x(x-1)^2}=\\frac{A}{x}+\\frac{B}{x-1}+\\frac{C}{(x-1)^2}.$$ ✓

Multiplying both sides by $x(x-1)^2$ clears the denominators and leaves an identity valid for every $x$:
$$x^2+1=A(x-1)^2+Bx(x-1)+Cx.$$ ✓

Setting $x=0$ kills the $B$ and $C$ terms: $\\;0+1=A(-1)^2\\;\\Rightarrow\\;A=1$. ✓

Setting $x=1$ kills the $A$ and $B$ terms: $\\;1+1=C(1)\\;\\Rightarrow\\;C=2$. ✓

Comparing the coefficients of $x^2$, the right-hand side expands to $(A+B)x^2+\\cdots$, so $\\;1=A+B\\;\\Rightarrow\\;B=1-1=0$, and the middle term is absent. ✓

Integrating term by term, using $\\displaystyle\\int\\frac{dx}{x}=\\ln|x|$ and the repeated factor giving $\\displaystyle\\int(x-1)^{-2}dx=-\\frac{1}{x-1}$:
$$\\int\\frac{x^2+1}{x(x-1)^2}\\,dx=\\int\\left(\\frac1x+\\frac{2}{(x-1)^2}\\right)dx=\\ln|x|-\\frac{2}{x-1}+C.$$ ✓
        `
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // PRACTICE PAPER 4
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'paper4',
    label: 'Practice Paper 4',
    date: 'Practice Test D',
    totalMarks: 52,
    duration: 60,
    questions: [
      {
        number: 1,
        title: 'Curve sketching (polynomial)',
        section: '§6.5',
        marks: 12,
        prompt: `
Let $f(x) = x^4-4x^3$.

**(a)** Find the $x$- and $y$-intercepts of $f$. (2)

**(b)** Describe the end behaviour of $f$ as $x\\to\\pm\\infty$. (1)

**(c)** Find $f'(x)$, and hence determine the intervals of increase/decrease and any local extrema. Comment on what happens at $x=0$. (4)

**(d)** Find $f''(x)$, and hence determine the intervals of concavity and any points of inflection. (3)

**(e)** Using the information from (a)–(d), sketch the graph of $f$. (2)
        `,
        solution: `
**(a)** Factorise: $f(x)=x^4-4x^3=x^3(x-4)$. Setting $f(x)=0$ gives $x=0$ (a **triple** root) or $x=4$, so the $x$-intercepts are $(0,0)$ and $(4,0)$. ✓
$y$-intercept: $f(0)=0^4-4(0)^3=0$, so the curve passes through the origin. ✓

**(b)** $f$ is a degree-$4$ polynomial with positive leading coefficient. Writing $f(x)=x^4\\left(1-\\dfrac4x\\right)$, the bracket tends to $1$ while $x^4\\to+\\infty$; since the power is **even**, the sign is positive on both sides. Hence $f(x)\\to+\\infty$ as $x\\to+\\infty$ **and** as $x\\to-\\infty$. ✓

**(c)** Differentiating term by term with the power rule and then factorising:
$$f'(x)=4x^3-12x^2=4x^2(x-3).$$ ✓✓

$f'(x)=0 \\;\\Rightarrow\\; 4x^2(x-3)=0 \\;\\Rightarrow\\; x=0$ (a double root) or $x=3$.

Since $4x^2\\ge0$ for every $x$, the sign of $f'$ is the sign of $(x-3)$. Sign chart on $(-\\infty,0),\\,(0,3),\\,(3,\\infty)$: $f'<0$ (e.g. $f'(-1)=-16$), $f'<0$ (e.g. $f'(1)=-8$), $f'>0$ (e.g. $f'(4)=64$). ✓

So $f$ is decreasing on $(-\\infty,3)$ and increasing on $(3,\\infty)$, with a **local minimum** at $x=3$, $f(3)=81-108=-27$. At $x=0$ the tangent is horizontal, but $f'$ **does not change sign** there (it is negative on both sides), so $x=0$ is a stationary point that is **not** a local extremum. ✓

**(d)** Differentiating again:
$$f''(x)=12x^2-24x=12x(x-2).$$ ✓✓

$f''(x)=0 \\Rightarrow x=0$ or $x=2$. Sign chart on $(-\\infty,0),\\,(0,2),\\,(2,\\infty)$: $f''>0$ ($f''(-1)=36$), $f''<0$ ($f''(1)=-12$), $f''>0$ ($f''(3)=36$).

So $f$ is concave up on $(-\\infty,0)$ and $(2,\\infty)$ and concave down on $(0,2)$. The concavity changes at both points, so there are **inflection points** at $(0,0)$ and at $(2,-16)$, using $f(2)=16-32=-16$. (Note $x=0$ is simultaneously a stationary point and an inflection point — the graph flattens out and crosses its own tangent there.) ✓

**(e)** See the graph below — it shows the $x$-intercepts at $0$ and $4$, the flat stationary point at the origin, the local minimum at $(3,-27)$, the inflection points at $(0,0)$ and $(2,-16)$, and both ends rising to $+\\infty$. ✓✓
        `,
        graph: {
          fn: x => Math.pow(x, 4) - 4 * Math.pow(x, 3),
          domain: [-1.5, 5],
          yRange: [-30, 30],
          intercepts: [{ x: 0, y: 0 }, { x: 4, y: 0 }],
          extrema: [{ x: 3, y: -27, type: 'min' }],
          inflection: [{ x: 0, y: 0 }, { x: 2, y: -16 }],
          title: 'f(x) = x⁴-4x³'
        }
      },
      {
        number: 2,
        title: 'Optimization — minimizing distance',
        section: '§6.6',
        marks: 6,
        prompt: `
Find the point on the curve $y=\\sqrt{x}$ that is closest to the point $(4,0)$, and find the minimum distance.
        `,
        solution: `
A general point on the curve is $(x,\\sqrt x)$ with $x\\ge0$. Its distance to $(4,0)$ is $d=\\sqrt{(x-4)^2+\\left(\\sqrt x-0\\right)^2}$. Since $t\\mapsto\\sqrt t$ is increasing, minimizing $d$ is equivalent to minimizing the **squared** distance, which avoids differentiating a square root:
$$D(x)=(x-4)^2+\\left(\\sqrt x\\right)^2=\\left(x^2-8x+16\\right)+x=x^2-7x+16.$$ ✓✓

$$D'(x)=2x-7=0 \\;\\Rightarrow\\; x=\\frac72.$$ ✓

Since $D''(x)=2>0$ for all $x$, $D$ is concave up and the single critical point $x=\\tfrac72$ gives the **minimum**. ✓

The corresponding $y$-coordinate is $\\sqrt{\\dfrac72}=\\dfrac{\\sqrt7}{\\sqrt2}=\\dfrac{\\sqrt{14}}{2}$. ✓

$$D\\!\\left(\\frac72\\right)=\\frac{49}{4}-\\frac{49}{2}+16=\\frac{49-98+64}{4}=\\frac{15}{4} \\;\\Rightarrow\\; d=\\sqrt{\\frac{15}{4}}=\\frac{\\sqrt{15}}{2}.$$ ✓

**Closest point $\\left(\\tfrac72,\\tfrac{\\sqrt{14}}{2}\\right)$; minimum distance $\\dfrac{\\sqrt{15}}{2}\\approx1.94$ units.**
        `
      },
      {
        number: 3,
        title: 'Related rates (conical tank)',
        section: '§8',
        marks: 8,
        prompt: `
Water is poured into a conical tank (vertex pointing down) at a rate of $8\\text{ m}^3/\\text{min}$. The tank has height $10$ m and top radius $4$ m.

Find the rate at which the water level is rising when the water is $5$ m deep.
        `,
        solution: `
Let $h$ be the depth of the water at time $t$ and $r$ the radius of its circular surface. We are given $\\dfrac{dV}{dt}=8\\text{ m}^3/\\text{min}$ and want $\\dfrac{dh}{dt}$ when $h=5$.

The water forms a cone similar to the tank, so by similar triangles $\\dfrac{r}{h}=\\dfrac{4}{10}=\\dfrac25$, giving $r=\\dfrac{2h}{5}$. ✓✓

Substituting into the cone-volume formula to express $V$ in terms of $h$ alone:
$$V=\\frac13\\pi r^2h=\\frac13\\pi\\left(\\frac{2h}{5}\\right)^{\\!2}h=\\frac13\\pi\\cdot\\frac{4h^2}{25}\\cdot h=\\frac{4\\pi}{75}h^3.$$ ✓✓

Differentiating implicitly with respect to $t$ (chain rule, since $h$ is a function of $t$):
$$\\frac{dV}{dt}=\\frac{4\\pi}{75}\\cdot3h^2\\frac{dh}{dt}=\\frac{4\\pi}{25}h^2\\frac{dh}{dt}.$$ ✓✓

Substituting $h=5$ and $\\dfrac{dV}{dt}=8$:
$$8=\\frac{4\\pi}{25}(5)^2\\frac{dh}{dt}=4\\pi\\frac{dh}{dt} \\;\\Rightarrow\\; \\frac{dh}{dt}=\\frac{8}{4\\pi}=\\frac{2}{\\pi}.$$ ✓✓

**The water level is rising at $\\dfrac{2}{\\pi}\\approx0.64\\text{ m}/\\text{min}$ when the water is $5$ m deep.**
        `
      },
      {
        number: 4,
        title: 'Proof: Fundamental Theorem of Calculus (Part 1)',
        section: '§8',
        marks: 8,
        prompt: `
Let $f$ be continuous on $[a,b]$, and define $\\displaystyle g(x)=\\int_a^x f(t)\\,dt$ for $a\\le x\\le b$. Prove that $g$ is differentiable on $[a,b]$ and $g'(x)=f(x)$.

You may use the Mean Value Theorem for Integrals without proof. (8)
        `,
        solution: `
Fix $x\\in[a,b]$ and let $h\\ne0$ be small enough that $x+h\\in[a,b]$. By the definition of $g$ and the additivity of the definite integral,
$$g(x+h)-g(x)=\\int_a^{x+h}f(t)\\,dt-\\int_a^{x}f(t)\\,dt=\\int_x^{x+h}f(t)\\,dt,$$
so the limit definition of the derivative gives
$$g'(x)=\\lim_{h\\to0}\\frac{g(x+h)-g(x)}{h}=\\lim_{h\\to0}\\frac1h\\int_x^{x+h}f(t)\\,dt.$$ ✓✓✓

$f$ is continuous on the closed interval with endpoints $x$ and $x+h$, so the Mean Value Theorem for Integrals applies: there exists a number $c=c(h)$ between $x$ and $x+h$ with
$$\\int_x^{x+h}f(t)\\,dt=f(c)\\cdot h.$$ ✓✓

Substituting this into the difference quotient and cancelling $h\\ne0$:
$$g'(x)=\\lim_{h\\to0}\\frac{f(c)\\cdot h}{h}=\\lim_{h\\to0}f(c).$$ ✓

Since $c$ lies between $x$ and $x+h$ we have $|c-x|\\le|h|$, so $c\\to x$ as $h\\to0$ by the Squeeze Theorem; and $f$ is continuous at $x$, so $\\displaystyle\\lim_{h\\to0}f(c)=f\\!\\left(\\lim_{h\\to0}c\\right)=f(x)$. The limit therefore exists at every $x\\in[a,b]$ (one-sided at the endpoints), so $g$ is differentiable with $g'(x)=f(x)$. $\\blacksquare$ ✓✓
        `
      },
      {
        number: 5,
        title: 'Inverse trigonometric, exponential and logarithmic integrals',
        section: '§9.1',
        marks: 6,
        prompt: `
Evaluate each of the following integrals.

**(a)** $\\displaystyle \\int \\frac{dx}{\\sqrt{1-25x^2}}$ (2)

**(b)** $\\displaystyle \\int \\frac{dx}{2x^2+8x+10}$ (2)

**(c)** $\\displaystyle \\int e^{4-2x}\\,dx$ (1)

**(d)** $\\displaystyle \\int \\frac{dx}{x\\ln x}$ (1)
        `,
        solution: `
**(a)** Let $u=5x$, so $du=5\\,dx$, i.e. $dx=\\tfrac15\\,du$, and $1-25x^2=1-u^2$:
$$\\int\\frac{dx}{\\sqrt{1-25x^2}}=\\frac15\\int\\frac{du}{\\sqrt{1-u^2}}=\\frac15\\arcsin u+C.$$ ✓
Substituting back $u=5x$:
$$\\int\\frac{dx}{\\sqrt{1-25x^2}}=\\frac15\\arcsin(5x)+C.$$ ✓

**(b)** Take out the common factor $2$, then complete the square: $x^2+4x+5=(x+2)^2-4+5=(x+2)^2+1$, so $2x^2+8x+10=2\\big[(x+2)^2+1\\big]$. ✓
This is the form $\\displaystyle\\int\\frac{du}{u^2+a^2}=\\frac1a\\arctan\\!\\left(\\frac ua\\right)+C$ with $u=x+2$, $du=dx$ and $a=1$:
$$\\int\\frac{dx}{2\\big[(x+2)^2+1\\big]}=\\frac12\\arctan(x+2)+C.$$ ✓

**(c)** Let $u=4-2x$, so $du=-2\\,dx$ and $dx=-\\tfrac12\\,du$:
$$\\int e^{4-2x}\\,dx=-\\frac12\\int e^u\\,du=-\\frac12e^u+C=-\\frac12e^{4-2x}+C.$$ ✓

**(d)** Let $u=\\ln x$, so $du=\\dfrac{dx}{x}$ — exactly the remaining part of the integrand:
$$\\int\\frac{dx}{x\\ln x}=\\int\\frac{du}{u}=\\ln|u|+C=\\ln\\left|\\ln x\\right|+C.$$ ✓
        `
      },
      {
        number: 6,
        title: 'Integration by parts',
        section: '§9.2',
        marks: 6,
        prompt: `
Evaluate $\\displaystyle \\int \\arctan x\\,dx$.
        `,
        solution: `
The integrand is a single inverse-trig function, so take $u=\\arctan x$ (which simplifies on differentiating) and $dv=dx$. Then $du=\\dfrac{1}{1+x^2}\\,dx$ and $v=x$. ✓✓

By the formula $\\displaystyle\\int u\\,dv=uv-\\int v\\,du$:
$$\\int\\arctan x\\,dx=x\\arctan x-\\int\\frac{x}{1+x^2}\\,dx.$$ ✓✓

For the remaining integral let $w=1+x^2$, so $dw=2x\\,dx$ and $x\\,dx=\\tfrac12\\,dw$:
$$\\int\\frac{x}{1+x^2}\\,dx=\\frac12\\int\\frac{dw}{w}=\\frac12\\ln|w|=\\frac12\\ln\\left(1+x^2\\right)$$
(no absolute value needed, since $1+x^2>0$). ✓

$$\\int\\arctan x\\,dx=x\\arctan x-\\frac12\\ln\\left(1+x^2\\right)+C.$$ ✓
        `
      },
      {
        number: 7,
        title: 'Partial fraction decomposition (three distinct linear factors)',
        section: '§9.5',
        marks: 6,
        prompt: `
Evaluate $\\displaystyle \\int \\frac{x^2+2x-1}{x(x-1)(x+1)}\\,dx$.
        `,
        solution: `
The denominator is already factorised into three **distinct linear factors**, so each contributes one constant numerator:
$$\\frac{x^2+2x-1}{x(x-1)(x+1)}=\\frac{A}{x}+\\frac{B}{x-1}+\\frac{C}{x+1}.$$ ✓
Multiplying both sides by $x(x-1)(x+1)$ clears the denominators:
$$x^2+2x-1=A(x-1)(x+1)+Bx(x+1)+Cx(x-1).$$ ✓

This is an identity, so it holds for every $x$; substituting the root of each factor isolates one constant at a time.
Setting $x=0$: $\\;-1=A(-1)(1)=-A \\;\\Rightarrow\\; A=1$.
Setting $x=1$: $\\;1+2-1=2=B(1)(2)=2B \\;\\Rightarrow\\; B=1$.
Setting $x=-1$: $\\;1-2-1=-2=C(-1)(-2)=2C \\;\\Rightarrow\\; C=-1$. ✓✓

Integrating term by term, each piece being of the form $\\displaystyle\\int\\frac{dx}{x-k}=\\ln|x-k|+C$:
$$\\int\\frac{x^2+2x-1}{x(x-1)(x+1)}\\,dx=\\int\\left(\\frac1x+\\frac{1}{x-1}-\\frac{1}{x+1}\\right)dx=\\ln|x|+\\ln|x-1|-\\ln|x+1|+C.$$ ✓✓
        `
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // PRACTICE PAPER 5
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'paper5',
    label: 'Practice Paper 5',
    date: 'Practice Test E',
    totalMarks: 52,
    duration: 60,
    questions: [
      {
        number: 1,
        title: 'Curve sketching (removable discontinuity)',
        section: '§6.5',
        marks: 12,
        prompt: `
Let $\\displaystyle f(x) = \\frac{(x-3)(x+1)}{(x-3)(x-1)}$.

**(a)** State the domain of $f$, simplify $f(x)$, and identify any point(s) of removable discontinuity (holes). Find the $x$- and $y$-intercepts. (3)

**(b)** Find the vertical and horizontal asymptotes of $f$. (2)

**(c)** Find $f'(x)$ (using the simplified form), and hence determine the intervals of increase/decrease and any local extrema. (3)

**(d)** Find $f''(x)$, and hence discuss the concavity of $f$. (2)

**(e)** Using the information from (a)–(d), sketch the graph of $f$, marking the hole clearly. (2)
        `,
        solution: `
**(a)** The domain is fixed by the **original** denominator $(x-3)(x-1)$, which vanishes at $x=1$ and $x=3$; hence the domain is $\\{x\\in\\mathbb{R}:x\\ne1,\\;x\\ne3\\}$. ✓
For $x\\ne3$ the common factor $(x-3)$ cancels, giving the simplified form
$$f(x)=\\frac{x+1}{x-1},\\qquad x\\ne1,\\,3.$$
Because the cancelled factor sat in both numerator and denominator, $\\displaystyle\\lim_{x\\to3}f(x)=\\frac{3+1}{3-1}=2$ exists while $f(3)$ is undefined, so there is a **removable discontinuity (hole) at $(3,2)$**. ✓
$x$-intercept: $x+1=0\\Rightarrow x=-1$, i.e. $(-1,0)$. $y$-intercept: $f(0)=\\dfrac{0+1}{0-1}=-1$. ✓

**(b)** At $x=1$ the factor $(x-1)$ does **not** cancel and the numerator there is $1+1=2\\ne0$, so $x=1$ is a **vertical asymptote**. ✓
Dividing numerator and denominator by $x$: $f(x)=\\dfrac{1+1/x}{1-1/x}\\to\\dfrac{1}{1}=1$ as $x\\to\\pm\\infty$ (equal degrees, leading-coefficient ratio $1$), so $y=1$ is the **horizontal asymptote**. ✓

**(c)** Work with the simplified form $g(x)=\\dfrac{x+1}{x-1}$. By the quotient rule, with $u=x+1$, $u'=1$, $v=x-1$, $v'=1$:
$$g'(x)=\\frac{(1)(x-1)-(x+1)(1)}{(x-1)^2}=\\frac{x-1-x-1}{(x-1)^2}=\\frac{-2}{(x-1)^2}.$$ ✓✓
The numerator is the constant $-2<0$ and $(x-1)^2>0$ wherever $g'$ is defined, so $g'(x)<0$ throughout the domain and $g'$ is **never zero** — there are no critical points.
So $f$ is **decreasing on $(-\\infty,1)$, on $(1,3)$ and on $(3,\\infty)$**, with **no local extrema** (the hole at $x=3$ deletes a point but does not create a turning point). ✓

**(d)** Write $g'(x)=-2(x-1)^{-2}$ and differentiate with the power/chain rule:
$$g''(x)=-2\\cdot(-2)(x-1)^{-3}=4(x-1)^{-3}=\\frac{4}{(x-1)^3}.$$ ✓
The numerator $4>0$, so the sign of $g''$ is the sign of $(x-1)^3$: negative for $x<1$ and positive for $x>1$. Hence $f$ is **concave down on $(-\\infty,1)$** and **concave up on $(1,\\infty)$**, with **no point of inflection** — the sign change happens at $x=1$, which is not in the domain. ✓

**(e)** See the graph below — it shows the vertical asymptote $x=1$, the horizontal asymptote $y=1$, the intercepts $(-1,0)$ and $(0,-1)$, and an open circle marking the hole at $(3,2)$. ✓✓
        `,
        graph: {
          fn: x => (x + 1) / (x - 1),
          domain: [-6, 8],
          breaks: [1],
          vAsymptotes: [1],
          hAsymptote: 1,
          yRange: [-6, 8],
          intercepts: [{ x: -1, y: 0 }, { x: 0, y: -1 }],
          holes: [{ x: 3, y: 2 }],
          title: 'f(x) = (x+1)/(x-1), hole at x=3'
        }
      },
      {
        number: 2,
        title: 'Optimization — inscribed rectangle',
        section: '§6.6',
        marks: 6,
        prompt: `
A rectangle has its base on the $x$-axis and its two upper corners on the curve $y=4-x^2$. Find the dimensions of the rectangle of maximum area, and find that maximum area.
        `,
        solution: `
By symmetry about the $y$-axis, take the upper-right corner to be $(x,4-x^2)$ with $0\\le x\\le2$ (at $x=2$ the curve meets the axis and the height is zero). The rectangle then has width $2x$ and height $4-x^2$. ✓

Objective function:
$$A(x)=(\\text{width})\\times(\\text{height})=2x\\left(4-x^2\\right)=8x-2x^3,\\qquad 0\\le x\\le2.$$ ✓

$$A'(x)=8-6x^2=0 \\;\\Rightarrow\\; x^2=\\frac{8}{6}=\\frac43 \\;\\Rightarrow\\; x=\\frac{2}{\\sqrt3}=\\frac{2\\sqrt3}{3}$$
(taking the positive root, since $x\\ge0$). ✓✓

Since $A''(x)=-12x<0$ for $x>0$, $A$ is concave down there, so this critical point is a **maximum**. (The endpoints confirm it: $A(0)=A(2)=0$.) ✓

Height: $4-x^2=4-\\dfrac43=\\dfrac83$; width: $2x=\\dfrac{4\\sqrt3}{3}$. Hence
$$A_{\\max}=\\frac{4\\sqrt3}{3}\\cdot\\frac83=\\frac{32\\sqrt3}{9}\\approx6.16.$$ ✓

**Rectangle of width $\\dfrac{4\\sqrt3}{3}$ and height $\\dfrac83$; maximum area $\\dfrac{32\\sqrt3}{9}$ square units.**
        `
      },
      {
        number: 3,
        title: 'Volume of revolution (shell method)',
        section: '§8',
        marks: 8,
        prompt: `
Let $R$ be the region bounded by $y=x^2$, $y=0$, and $x=2$.

Using the method of cylindrical shells, find the volume of the solid obtained when $R$ is revolved about the $y$-axis.
        `,
        solution: `
The region is bounded above by $y=x^2$, below by $y=0$ and on the right by $x=2$; the curve meets the $x$-axis at $x=0$, so $x$ runs from $0$ to $2$. ✓

Revolving about the $y$-axis, a thin vertical strip at position $x$ sweeps out a cylindrical shell of
radius $=x$ (the distance from the strip to the axis of rotation), height $=f(x)=x^2$ and thickness $=dx$. ✓✓

The shell formula $V=\\displaystyle\\int_a^b2\\pi(\\text{radius})(\\text{height})\\,dx$ therefore gives
$$V=2\\pi\\int_0^2 x\\cdot x^2\\,dx=2\\pi\\int_0^2 x^3\\,dx.$$ ✓✓

Antidifferentiating with the power rule:
$$V=2\\pi\\left[\\frac{x^4}{4}\\right]_0^2=2\\pi\\left(\\frac{2^4}{4}-\\frac{0^4}{4}\\right)$$ ✓✓

$$=2\\pi\\left(\\frac{16}{4}\\right)=2\\pi(4)=8\\pi.$$ ✓

**Volume $=8\\pi$ cubic units.**
        `
      },
      {
        number: 4,
        title: 'Proof: Leibniz Rule for Differentiating an Integral',
        section: '§8',
        marks: 8,
        prompt: `
Let $f$ be continuous on $[a,b]$, and let $u,v$ be differentiable functions with values in $[a,b]$. Using the Fundamental Theorem of Calculus and the Chain Rule, prove that
$$\\frac{d}{dx}\\left[\\int_{u(x)}^{v(x)} f(t)\\,dt\\right]=f\\big(v(x)\\big)v'(x)-f\\big(u(x)\\big)u'(x).$$ (8)
        `,
        solution: `
Fix any constant $k\\in[a,b]$. Since $u(x),v(x)\\in[a,b]$ and $f$ is continuous (hence integrable) there, the additivity property of the definite integral lets us split at $k$:
$$\\int_{u(x)}^{v(x)}f(t)\\,dt=\\int_{u(x)}^{k}f(t)\\,dt+\\int_{k}^{v(x)}f(t)\\,dt=\\int_{k}^{v(x)}f(t)\\,dt-\\int_{k}^{u(x)}f(t)\\,dt,$$
using $\\displaystyle\\int_p^q=-\\int_q^p$ in the last step. ✓✓

Define $g(y)=\\displaystyle\\int_k^y f(t)\\,dt$ for $y\\in[a,b]$. Because $f$ is continuous, the Fundamental Theorem of Calculus (Part 1) says $g$ is differentiable on $[a,b]$ with $g'(y)=f(y)$. ✓✓

The expression above is exactly $g\\big(v(x)\\big)-g\\big(u(x)\\big)$. Each term is a composition of the differentiable function $g$ with a differentiable function, so the Chain Rule applies to each:
$$\\frac{d}{dx}\\Big[g\\big(v(x)\\big)-g\\big(u(x)\\big)\\Big]=g'\\big(v(x)\\big)v'(x)-g'\\big(u(x)\\big)u'(x).$$ ✓✓

Finally substitute $g'=f$:
$$\\frac{d}{dx}\\left[\\int_{u(x)}^{v(x)}f(t)\\,dt\\right]=f\\big(v(x)\\big)v'(x)-f\\big(u(x)\\big)u'(x).$$
The result does not involve $k$, as it must not. $\\blacksquare$ ✓✓
        `
      },
      {
        number: 5,
        title: 'Inverse trigonometric, exponential and logarithmic integrals',
        section: '§9.1',
        marks: 6,
        prompt: `
Evaluate each of the following integrals.

**(a)** $\\displaystyle \\int \\frac{dx}{\\sqrt{4-9x^2}}$ (2)

**(b)** $\\displaystyle \\int \\frac{dx}{x^2+2x+2}$ (2)

**(c)** $\\displaystyle \\int 2^{3x}\\,dx$ (1)

**(d)** $\\displaystyle \\int \\frac{e^x}{e^x+1}\\,dx$ (1)
        `,
        solution: `
**(a)** Let $u=3x$, so $du=3\\,dx$ and $dx=\\tfrac13\\,du$; then $4-9x^2=2^2-u^2$, i.e. $a=2$:
$$\\int\\frac{dx}{\\sqrt{4-9x^2}}=\\frac13\\int\\frac{du}{\\sqrt{2^2-u^2}}=\\frac13\\arcsin\\!\\left(\\frac u2\\right)+C.$$ ✓
Substituting back $u=3x$:
$$\\int\\frac{dx}{\\sqrt{4-9x^2}}=\\frac13\\arcsin\\!\\left(\\frac{3x}{2}\\right)+C.$$ ✓

**(b)** Complete the square: $x^2+2x+2=(x+1)^2-1+2=(x+1)^2+1$. ✓
With $u=x+1$, $du=dx$ and $a=1$, this is the standard $\\displaystyle\\int\\frac{du}{u^2+1}=\\arctan u+C$:
$$\\int\\frac{dx}{(x+1)^2+1}=\\arctan(x+1)+C.$$ ✓

**(c)** Let $u=3x$, $du=3\\,dx$, and use $\\displaystyle\\int a^u\\,du=\\frac{a^u}{\\ln a}+C$:
$$\\int 2^{3x}\\,dx=\\frac13\\int2^u\\,du=\\frac13\\cdot\\frac{2^u}{\\ln2}+C=\\frac{2^{3x}}{3\\ln2}+C.$$ ✓

**(d)** The numerator is the derivative of the denominator, so let $u=e^x+1$, $du=e^x\\,dx$:
$$\\int\\frac{e^x}{e^x+1}\\,dx=\\int\\frac{du}{u}=\\ln|u|+C=\\ln\\left(e^x+1\\right)+C$$
(no absolute value needed, since $e^x+1>0$). ✓
        `
      },
      {
        number: 6,
        title: 'Integration by parts',
        section: '§9.2',
        prompt: `
Evaluate $\\displaystyle \\int e^x\\cos x\\,dx$.
        `,
        marks: 6,
        solution: `
Let $I=\\displaystyle\\int e^x\\cos x\\,dx$. Neither factor simplifies when differentiated, so this is the "loop" case: apply parts twice and then solve algebraically for $I$.

First application: $u=e^x$, $dv=\\cos x\\,dx$, so $du=e^x\\,dx$ and $v=\\sin x$. Then
$$I=e^x\\sin x-\\int e^x\\sin x\\,dx.$$ ✓✓

Second application, on $\\displaystyle\\int e^x\\sin x\\,dx$: $u=e^x$, $dv=\\sin x\\,dx$, so $du=e^x\\,dx$ and $v=-\\cos x$. Then
$$\\int e^x\\sin x\\,dx=-e^x\\cos x-\\int\\left(-\\cos x\\right)e^x\\,dx=-e^x\\cos x+\\int e^x\\cos x\\,dx=-e^x\\cos x+I.$$ ✓✓

Substituting back, the original integral reappears:
$$I=e^x\\sin x-\\left(-e^x\\cos x+I\\right)=e^x\\sin x+e^x\\cos x-I \\;\\Rightarrow\\; 2I=e^x\\left(\\sin x+\\cos x\\right),$$
so dividing by $2$ and restoring the constant of integration,
$$I=\\frac{e^x}{2}\\left(\\sin x+\\cos x\\right)+C.$$ ✓✓
        `
      },
      {
        number: 7,
        title: 'Partial fraction decomposition (repeated linear factor)',
        section: '§9.5',
        marks: 6,
        prompt: `
Evaluate $\\displaystyle \\int \\frac{x^2+1}{(x+1)^2(x-1)}\\,dx$.
        `,
        solution: `
The denominator contains the **repeated** linear factor $(x+1)^2$, which needs one term for each power, plus a term for $(x-1)$:
$$\\frac{x^2+1}{(x+1)^2(x-1)}=\\frac{A}{x+1}+\\frac{B}{(x+1)^2}+\\frac{C}{x-1}.$$ ✓
Multiplying through by $(x+1)^2(x-1)$:
$$x^2+1=A(x+1)(x-1)+B(x-1)+C(x+1)^2.$$ ✓

Setting $x=-1$ kills the $A$ and $C$ terms: $(-1)^2+1=2=B(-1-1)=-2B \\;\\Rightarrow\\; B=-1$.
Setting $x=1$ kills the $A$ and $B$ terms: $1+1=2=C(1+1)^2=4C \\;\\Rightarrow\\; C=\\tfrac12$.
Comparing coefficients of $x^2$ on both sides: $1=A+C \\;\\Rightarrow\\; A=1-\\tfrac12=\\tfrac12$. ✓✓

Integrating term by term, the repeated factor giving $\\displaystyle\\int(x+1)^{-2}dx=-\\frac{1}{x+1}$:
$$\\int\\frac{x^2+1}{(x+1)^2(x-1)}\\,dx=\\int\\left(\\frac{1/2}{x+1}-\\frac{1}{(x+1)^2}+\\frac{1/2}{x-1}\\right)dx=\\frac12\\ln|x+1|+\\frac{1}{x+1}+\\frac12\\ln|x-1|+C.$$ ✓✓
        `
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // PRACTICE PAPER 6
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'paper6',
    label: 'Practice Paper 6',
    date: 'Practice Test F',
    totalMarks: 52,
    duration: 60,
    questions: [
      {
        number: 1,
        title: 'Curve sketching (restricted domain)',
        section: '§6.5',
        marks: 12,
        prompt: `
Let $f(x) = x\\sqrt{9-x^2}$.

**(a)** State the domain of $f$, and find the $x$- and $y$-intercepts. (2)

**(b)** What symmetry does $f$ have? Explain why $f$ has no asymptotes. (2)

**(c)** Find $f'(x)$, and hence determine the intervals of increase/decrease and any local extrema. (3)

**(d)** Find $f''(x)$, and hence determine the concavity of $f$ and any points of inflection. (3)

**(e)** Using the information from (a)–(d), sketch the graph of $f$ over its domain. (2)
        `,
        solution: `
**(a)** The square root requires $9-x^2\\ge0 \\;\\Rightarrow\\; x^2\\le9$, so the **domain is $[-3,3]$**. ✓
$f(x)=0$ when $x=0$ or $\\sqrt{9-x^2}=0$, i.e. $x=0$ or $x=\\pm3$: the $x$-intercepts are $(-3,0)$, $(0,0)$ and $(3,0)$, and since $f(0)=0$ the $y$-intercept is also the origin. ✓

**(b)** $f(-x)=(-x)\\sqrt{9-(-x)^2}=-x\\sqrt{9-x^2}=-f(x)$, so $f$ is **odd** and its graph is symmetric about the origin. ✓
There is no horizontal or oblique asymptote because the domain $[-3,3]$ is bounded — $x$ never tends to $\\pm\\infty$. There is no vertical asymptote because $f$ is continuous on all of $[-3,3]$ and stays bounded: $|f(x)|\\le3\\sqrt9=9$. The graph simply stops at the endpoints $(\\pm3,0)$, where $f'\\to-\\infty$, i.e. with a vertical tangent. ✓

**(c)** Write $f(x)=x\\left(9-x^2\\right)^{1/2}$ and apply the product rule, using the chain rule on the second factor:
$$f'(x)=1\\cdot\\left(9-x^2\\right)^{1/2}+x\\cdot\\tfrac12\\left(9-x^2\\right)^{-1/2}(-2x)=\\sqrt{9-x^2}-\\frac{x^2}{\\sqrt{9-x^2}}.$$
Putting this over a common denominator:
$$f'(x)=\\frac{\\left(9-x^2\\right)-x^2}{\\sqrt{9-x^2}}=\\frac{9-2x^2}{\\sqrt{9-x^2}}.$$ ✓✓
$f'(x)=0 \\;\\Rightarrow\\; 9-2x^2=0 \\;\\Rightarrow\\; x^2=\\tfrac92 \\;\\Rightarrow\\; x=\\pm\\dfrac{3}{\\sqrt2}=\\pm\\dfrac{3\\sqrt2}{2}\\approx\\pm2.12$, both inside $(-3,3)$.
The denominator $\\sqrt{9-x^2}>0$ on $(-3,3)$, so the sign of $f'$ is the sign of $9-2x^2$. Sign chart on $\\left(-3,-\\tfrac{3\\sqrt2}{2}\\right),\\left(-\\tfrac{3\\sqrt2}{2},\\tfrac{3\\sqrt2}{2}\\right),\\left(\\tfrac{3\\sqrt2}{2},3\\right)$: $f'<0$, $f'>0$, $f'<0$ (e.g. $f'(\\pm2.5)\\approx-2.11$ and $f'(0)=3$).
So $f$ decreases on the two outer sub-intervals and increases on the middle one, giving a **local minimum** at $x=-\\tfrac{3\\sqrt2}{2}$ with $f=-\\tfrac92$, and a **local maximum** at $x=\\tfrac{3\\sqrt2}{2}$ with $f=\\tfrac92$. ✓

**(d)** Differentiate $f'(x)=\\left(9-2x^2\\right)\\left(9-x^2\\right)^{-1/2}$ by the product rule:
$$f''(x)=-4x\\left(9-x^2\\right)^{-1/2}+\\left(9-2x^2\\right)\\left(-\\tfrac12\\right)\\left(9-x^2\\right)^{-3/2}(-2x)=\\left(9-x^2\\right)^{-3/2}\\Big[-4x\\left(9-x^2\\right)+x\\left(9-2x^2\\right)\\Big].$$
Expanding the bracket: $\\left(-36x+4x^3\\right)+\\left(9x-2x^3\\right)=2x^3-27x=x\\left(2x^2-27\\right)$, so
$$f''(x)=\\frac{x\\left(2x^2-27\\right)}{\\left(9-x^2\\right)^{3/2}}.$$ ✓✓
On $(-3,3)$ we have $x^2<9$, hence $2x^2-27<18-27=-9<0$, while $\\left(9-x^2\\right)^{3/2}>0$. The sign of $f''$ is therefore **opposite** to the sign of $x$: $f''>0$ on $(-3,0)$ and $f''<0$ on $(0,3)$.
So $f$ is **concave up on $(-3,0)$** and **concave down on $(0,3)$**, and since $f''$ changes sign at $x=0$, which is in the domain, there is an **inflection point at $(0,0)$**. ✓

**(e)** See the graph below — it shows the odd symmetry over the closed domain $[-3,3]$, the three $x$-intercepts, the local minimum $\\left(-\\tfrac{3\\sqrt2}{2},-\\tfrac92\\right)$ and local maximum $\\left(\\tfrac{3\\sqrt2}{2},\\tfrac92\\right)$, the inflection point at the origin, and the vertical tangents at $x=\\pm3$. ✓✓
        `,
        graph: {
          fn: x => x * Math.sqrt(Math.max(0, 9 - x * x)),
          domain: [-3, 3],
          yRange: [-5, 5],
          intercepts: [{ x: -3, y: 0 }, { x: 0, y: 0 }, { x: 3, y: 0 }],
          extrema: [
            { x: 3 * Math.SQRT2 / 2, y: 4.5, type: 'max' },
            { x: -3 * Math.SQRT2 / 2, y: -4.5, type: 'min' }
          ],
          inflection: [{ x: 0, y: 0 }],
          title: 'f(x) = x√(9-x²)'
        }
      },
      {
        number: 2,
        title: 'Optimization — maximizing profit',
        section: '§6.6',
        marks: 6,
        prompt: `
A company's monthly profit from selling $x$ units of a product is
$$P(x) = -0.01x^2+40x-5000 \\text{ (rand)}.$$
Find the production level that maximizes profit, and find the maximum profit.
        `,
        solution: `
$P$ is a polynomial, so it is differentiable for every $x\\ge0$ and a maximum can only occur where $P'(x)=0$.

$$P'(x)=\\frac{d}{dx}\\left(-0.01x^2+40x-5000\\right)=-0.02x+40.$$ ✓

Setting $P'(x)=0$:
$$-0.02x+40=0 \\;\\Rightarrow\\; 0.02x=40 \\;\\Rightarrow\\; x=\\frac{40}{0.02}=2000.$$ ✓

Since $P''(x)=-0.02<0$ for every $x$, the graph of $P$ is a downward parabola, so this single critical point is an **absolute maximum**. ✓

Evaluating the profit there:
$$P(2000)=-0.01(2000)^2+40(2000)-5000$$ ✓
$$=-0.01\\left(4\\,000\\,000\\right)+80\\,000-5000=-40\\,000+80\\,000-5000=35\\,000.$$ ✓✓

**Producing $2000$ units per month maximizes profit, giving a maximum monthly profit of R$35\\,000$.**
        `
      },
      {
        number: 3,
        title: 'Average value of a function',
        section: '§8',
        marks: 8,
        prompt: `
Find the average value of $f(x)=x^2+1$ on the interval $[0,3]$. Then find a value $c\\in[0,3]$ such that $f(c)$ equals this average value (as guaranteed by the Mean Value Theorem for Integrals).
        `,
        solution: `
By definition, the average value of a continuous function on $[a,b]$ is $f_{\\text{avg}}=\\dfrac{1}{b-a}\\displaystyle\\int_a^b f(x)\\,dx$. Here $a=0$, $b=3$, so $b-a=3$: ✓

$$f_{\\text{avg}}=\\frac13\\int_0^3\\left(x^2+1\\right)dx.$$ ✓

Antidifferentiating term by term with the power rule:
$$f_{\\text{avg}}=\\frac13\\left[\\frac{x^3}{3}+x\\right]_0^3.$$ ✓✓

Substituting the limits:
$$=\\frac13\\left[\\left(\\frac{27}{3}+3\\right)-\\left(0+0\\right)\\right]=\\frac13\\big[9+3\\big]=\\frac13(12)=4.$$ ✓✓

$f(x)=x^2+1$ is continuous on $[0,3]$, so the Mean Value Theorem for Integrals guarantees such a $c$ exists. Setting $f(c)=f_{\\text{avg}}$:
$$c^2+1=4 \\;\\Rightarrow\\; c^2=3 \\;\\Rightarrow\\; c=\\pm\\sqrt3.$$ ✓

Only $c=\\sqrt3\\approx1.73$ lies in $[0,3]$, so $c=-\\sqrt3$ is rejected. ✓

**Average value $=4$, attained at $c=\\sqrt3$.**
        `
      },
      {
        number: 4,
        title: 'Proof: Reduction Formula for ∫ secⁿx dx',
        section: '§9.2',
        marks: 8,
        prompt: `
Prove the reduction formula, valid for $n\\ge2$:
$$\\int\\sec^n x\\,dx=\\frac{1}{n-1}\\sec^{n-2}x\\tan x+\\frac{n-2}{n-1}\\int\\sec^{n-2}x\\,dx.$$ (8)
        `,
        solution: `
Split off two factors of $\\sec x$, so that the part to be integrated is a standard derivative:
$$\\int\\sec^n x\\,dx=\\int\\sec^{n-2}x\\cdot\\sec^2x\\,dx.$$ ✓

Integrate by parts with $u=\\sec^{n-2}x$ and $dv=\\sec^2x\\,dx$. Using the chain rule together with $\\dfrac{d}{dx}\\sec x=\\sec x\\tan x$, and $\\displaystyle\\int\\sec^2x\\,dx=\\tan x$:
$$du=(n-2)\\sec^{n-3}x\\cdot\\sec x\\tan x\\,dx=(n-2)\\sec^{n-2}x\\tan x\\,dx,\\qquad v=\\tan x.$$ ✓✓

The formula $\\displaystyle\\int u\\,dv=uv-\\int v\\,du$ then gives
$$\\int\\sec^n x\\,dx=\\sec^{n-2}x\\tan x-(n-2)\\int\\sec^{n-2}x\\tan^2x\\,dx.$$ ✓

Now use the Pythagorean identity $\\tan^2x=\\sec^2x-1$ to return to powers of $\\sec x$ alone:
$$\\int\\sec^{n-2}x\\tan^2x\\,dx=\\int\\sec^{n-2}x\\left(\\sec^2x-1\\right)dx=\\int\\sec^n x\\,dx-\\int\\sec^{n-2}x\\,dx,$$
so that
$$\\int\\sec^n x\\,dx=\\sec^{n-2}x\\tan x-(n-2)\\int\\sec^n x\\,dx+(n-2)\\int\\sec^{n-2}x\\,dx.$$ ✓✓

The original integral has reappeared, so collect those terms on the left:
$$\\big[1+(n-2)\\big]\\int\\sec^n x\\,dx=(n-1)\\int\\sec^n x\\,dx=\\sec^{n-2}x\\tan x+(n-2)\\int\\sec^{n-2}x\\,dx.$$ ✓

Since $n\\ge2$ we have $n-1\\ge1\\ne0$, so dividing by $n-1$ is legitimate and gives
$$\\int\\sec^n x\\,dx=\\frac{1}{n-1}\\sec^{n-2}x\\tan x+\\frac{n-2}{n-1}\\int\\sec^{n-2}x\\,dx.\\quad\\blacksquare$$ ✓
        `
      },
      {
        number: 5,
        title: 'Inverse trigonometric, exponential and logarithmic integrals',
        section: '§9.1',
        marks: 6,
        prompt: `
Evaluate each of the following integrals.

**(a)** $\\displaystyle \\int \\frac{dx}{x\\sqrt{x^2-9}}$ (2)

**(b)** $\\displaystyle \\int \\frac{dx}{9x^2+6x+2}$ (2)

**(c)** $\\displaystyle \\int 4e^{x/2}\\,dx$ (1)

**(d)** $\\displaystyle \\int \\tan(2x)\\,dx$ (1)
        `,
        solution: `
**(a)** This matches the standard form $\\displaystyle\\int\\frac{dx}{x\\sqrt{x^2-a^2}}=\\frac1a\\sec^{-1}\\!\\left(\\frac{|x|}{a}\\right)+C$, here with $a^2=9$, i.e. $a=3$. ✓
$$\\int\\frac{dx}{x\\sqrt{x^2-9}}=\\frac13\\sec^{-1}\\!\\left(\\frac{|x|}{3}\\right)+C,\\qquad |x|>3.$$ ✓

**(b)** The leading coefficient is a perfect square, so complete the square directly: $9x^2+6x+2=(3x)^2+2(3x)(1)+1^2+1=(3x+1)^2+1$. ✓
Let $u=3x+1$, so $du=3\\,dx$:
$$\\int\\frac{dx}{(3x+1)^2+1}=\\frac13\\int\\frac{du}{u^2+1}=\\frac13\\arctan u+C=\\frac13\\arctan(3x+1)+C.$$ ✓

**(c)** Using $\\displaystyle\\int e^{kx}\\,dx=\\frac1k e^{kx}+C$ with $k=\\tfrac12$:
$$\\int4e^{x/2}\\,dx=4\\cdot\\frac{1}{1/2}\\,e^{x/2}+C=4\\cdot2e^{x/2}+C=8e^{x/2}+C.$$ ✓

**(d)** Let $u=2x$, $du=2\\,dx$, and use $\\displaystyle\\int\\tan u\\,du=-\\ln|\\cos u|+C$:
$$\\int\\tan(2x)\\,dx=\\frac12\\int\\tan u\\,du=-\\frac12\\ln|\\cos u|+C=-\\frac12\\ln\\left|\\cos(2x)\\right|+C.$$ ✓
        `
      },
      {
        number: 6,
        title: 'Integration by parts',
        section: '§9.2',
        marks: 6,
        prompt: `
Evaluate $\\displaystyle \\int x^2\\sin x\\,dx$.
        `,
        solution: `
The integrand is (polynomial)$\\times$(trig function), so choose $u$ to be the polynomial — each application of parts lowers its degree by one.

First application: $u=x^2$, $dv=\\sin x\\,dx$, so $du=2x\\,dx$ and $v=-\\cos x$. Then
$$\\int x^2\\sin x\\,dx=-x^2\\cos x-\\int\\left(-\\cos x\\right)2x\\,dx=-x^2\\cos x+\\int2x\\cos x\\,dx.$$ ✓✓

Second application, on $\\displaystyle\\int2x\\cos x\\,dx$: $u=2x$, $dv=\\cos x\\,dx$, so $du=2\\,dx$ and $v=\\sin x$. Then
$$\\int2x\\cos x\\,dx=2x\\sin x-\\int2\\sin x\\,dx=2x\\sin x-2\\left(-\\cos x\\right)=2x\\sin x+2\\cos x.$$ ✓✓

Substituting this back into the first line:
$$\\int x^2\\sin x\\,dx=-x^2\\cos x+2x\\sin x+2\\cos x+C.$$ ✓✓
        `
      },
      {
        number: 7,
        title: 'Partial fraction decomposition (irreducible quadratic factor)',
        section: '§9.5',
        marks: 6,
        prompt: `
Evaluate $\\displaystyle \\int \\frac{2x+3}{(x-1)(x^2+4)}\\,dx$.
        `,
        solution: `
The quadratic $x^2+4$ has discriminant $0^2-4(1)(4)=-16<0$, so it is **irreducible** over $\\mathbb{R}$ and its term needs a linear numerator:
$$\\frac{2x+3}{(x-1)\\left(x^2+4\\right)}=\\frac{A}{x-1}+\\frac{Bx+C}{x^2+4}.$$ ✓
Multiplying through by $(x-1)\\left(x^2+4\\right)$:
$$2x+3=A\\left(x^2+4\\right)+(Bx+C)(x-1).$$ ✓

Setting $x=1$ kills the second term: $2+3=5=A(1+4)=5A \\;\\Rightarrow\\; A=1$.
Expanding the right-hand side gives $(A+B)x^2+(C-B)x+(4A-C)$.
Comparing coefficients of $x^2$: $0=A+B \\;\\Rightarrow\\; B=-1$.
Comparing constant terms: $3=4A-C=4-C \\;\\Rightarrow\\; C=1$. This agrees with the coefficient of $x$, since $C-B=1-(-1)=2$. ✓✓

Split the second fraction so that each piece is a standard form:
$$\\frac{2x+3}{(x-1)\\left(x^2+4\\right)}=\\frac{1}{x-1}+\\frac{-x+1}{x^2+4}=\\frac{1}{x-1}-\\frac{x}{x^2+4}+\\frac{1}{x^2+4}.$$ ✓

Integrate term by term: the first is a logarithm; the second is $\\displaystyle\\int\\frac{f'}{f}$ up to a factor $\\tfrac12$, with $f=x^2+4$; the third is the arctan form with $a=2$:
$$\\int\\frac{2x+3}{(x-1)\\left(x^2+4\\right)}\\,dx=\\ln|x-1|-\\frac12\\ln\\left(x^2+4\\right)+\\frac12\\arctan\\!\\left(\\frac x2\\right)+C.$$ ✓
        `
      }
    ]
  },

  // =====================================================================
  // PRACTICE PAPER 7
  // =====================================================================
  {
    id: 'paper7',
    label: 'Practice Paper 7',
    date: 'Practice Test G',
    totalMarks: 52,
    duration: 60,
    questions: [
      {
        number: 1,
        title: 'Curve sketching (odd rational function with slant asymptote)',
        section: '§6.5', marks: 12,
        prompt: `
Let $\\displaystyle f(x)=\\frac{x^3-3x}{x^2-1}$.

**(a)** Find the domain, all intercepts, and any symmetry of $f$. (2)

**(b)** Find the vertical and slant asymptotes. (2)

**(c)** Find $f'(x)$, and hence determine the intervals of increase/decrease and any local extrema. (3)

**(d)** Find $f''(x)$, and hence determine the concavity and points of inflection. (3)

**(e)** Using the information from (a)–(d), sketch the graph of $f$. (2)
        `,
        solution: `
**(a)** The denominator factorises as $x^2-1=(x-1)(x+1)$, which vanishes at $x=\\pm1$, so the domain is $\\mathbb R\\setminus\\{-1,1\\}$.
Factorising the numerator, $x^3-3x=x(x^2-3)=x(x-\\sqrt3)(x+\\sqrt3)$, so $f(x)=0$ at $x=-\\sqrt3,\\,0,\\,\\sqrt3$ — these are the $x$-intercepts; the $y$-intercept is $f(0)=\\dfrac{0}{-1}=0$, i.e. the origin. ✓
Testing for symmetry: $f(-x)=\\dfrac{(-x)^3-3(-x)}{(-x)^2-1}=\\dfrac{-(x^3-3x)}{x^2-1}=-f(x)$, so $f$ is **odd** and its graph is symmetric about the origin. ✓

**(b)** At $x=1$ the numerator is $1-3=-2\\neq0$ and at $x=-1$ it is $-1+3=2\\neq0$, so neither factor cancels and both $x=-1$ and $x=1$ are **vertical asymptotes**. ✓
Dividing $x^3-3x$ by $x^2-1$: $x^3-3x=x(x^2-1)-2x$, so
$$f(x)=x-\\frac{2x}{x^2-1}.$$
Since $\\dfrac{2x}{x^2-1}\\to0$ as $x\\to\\pm\\infty$, the **slant asymptote** is $y=x$. ✓

**(c)** Differentiate the divided form. By the quotient rule on $\\dfrac{-2x}{x^2-1}$, with $u=-2x$, $u'=-2$, $v=x^2-1$, $v'=2x$:
$$\\frac{d}{dx}\\!\\left(\\frac{-2x}{x^2-1}\\right)=\\frac{-2(x^2-1)+2x(2x)}{(x^2-1)^2}=\\frac{2x^2+2}{(x^2-1)^2},$$
so $f'(x)=1+\\dfrac{2(x^2+1)}{(x^2-1)^2}$. Putting this over one denominator:
$$f'(x)=\\frac{(x^2-1)^2+2(x^2+1)}{(x^2-1)^2}=\\frac{x^4-2x^2+1+2x^2+2}{(x^2-1)^2}=\\frac{x^4+3}{(x^2-1)^2}.$$ ✓✓
The numerator $x^4+3\\ge3>0$ and the denominator $(x^2-1)^2>0$ on the domain, so $f'(x)>0$ throughout (e.g. $f'(0)=3$, $f'(2)=\\tfrac{19}{9}$). Hence $f$ is **increasing on $(-\\infty,-1)$, $(-1,1)$ and $(1,\\infty)$**, and since $f'$ is never zero there are **no local extrema**. ✓

**(d)** By the quotient rule on $f'(x)=\\dfrac{x^4+3}{(x^2-1)^2}$, with $u=x^4+3$, $u'=4x^3$, $v=(x^2-1)^2$, $v'=2(x^2-1)(2x)=4x(x^2-1)$:
$$f''(x)=\\frac{4x^3(x^2-1)^2-(x^4+3)\\cdot4x(x^2-1)}{(x^2-1)^4}=\\frac{4x^3(x^2-1)-4x(x^4+3)}{(x^2-1)^3}.$$ ✓
Expanding the numerator: $4x^5-4x^3-4x^5-12x=-4x^3-12x=-4x(x^2+3)$, so
$$f''(x)=\\frac{-4x(x^2+3)}{(x^2-1)^3}.$$ ✓
Since $x^2+3>0$ always, $f''(x)=0$ only at $x=0$. Sign chart on $(-\\infty,-1),\\,(-1,0),\\,(0,1),\\,(1,\\infty)$ with test values $x=-2,-\\tfrac12,\\tfrac12,2$:
$$f''(-2)=\\tfrac{56}{27}>0,\\quad f''\\!\\left(-\\tfrac12\\right)=-\\tfrac{416}{27}<0,\\quad f''\\!\\left(\\tfrac12\\right)=\\tfrac{416}{27}>0,\\quad f''(2)=-\\tfrac{56}{27}<0.$$
So $f$ is **concave up on $(-\\infty,-1)$ and $(0,1)$** and **concave down on $(-1,0)$ and $(1,\\infty)$**. Only the change at $x=0$ occurs at a point of the graph (those at $x=\\pm1$ are across asymptotes), so the only **inflection point** is $(0,0)$. ✓

**(e)** See the graph below — it shows the odd symmetry about the origin, the vertical asymptotes $x=\\pm1$, the slant asymptote $y=x$, the $x$-intercepts at $-\\sqrt3,0,\\sqrt3$, the absence of turning points, and the inflection point at the origin. ✓✓
        `,
        graph: {
          fn: x => (x * x * x - 3 * x) / (x * x - 1),
          domain: [-6, 6],
          breaks: [-1, 1],
          vAsymptotes: [-1, 1],
          slant: { m: 1, c: 0 },
          yRange: [-10, 10],
          intercepts: [{ x: -Math.sqrt(3), y: 0 }, { x: 0, y: 0 }, { x: Math.sqrt(3), y: 0 }],
          inflection: [{ x: 0, y: 0 }],
          title: 'f(x) = (x³-3x)/(x²-1)'
        }
      },
      {
        number: 2, title: 'Optimization — closed cylinder with fixed surface area', section: '§6.6', marks: 6,
        prompt: `A closed cylindrical container has total surface area $300\\pi\\text{ cm}^2$. Find the radius and height that maximise its volume, and give the maximum volume.`,
        solution: `
Surface-area constraint (two circular ends plus the curved side):
$$2\\pi r^2+2\\pi rh=300\\pi \\;\\Rightarrow\\; r^2+rh=150 \\;\\Rightarrow\\; h=\\frac{150-r^2}{r}.$$ ✓

Substituting into the volume to get a function of $r$ alone:
$$V(r)=\\pi r^2h=\\pi r^2\\cdot\\frac{150-r^2}{r}=150\\pi r-\\pi r^3,\\qquad 0< r<\\sqrt{150}.$$ ✓

$$V'(r)=150\\pi-3\\pi r^2=0 \\;\\Rightarrow\\; r^2=50 \\;\\Rightarrow\\; r=5\\sqrt2\\ \\text{cm}\\ \\ (r>0).$$ ✓✓

Since $V''(r)=-6\\pi r$ and $V''(5\\sqrt2)=-30\\sqrt2\\,\\pi<0$, the critical point is a **maximum**. ✓

Back-substituting, $h=\\dfrac{150-50}{5\\sqrt2}=\\dfrac{100}{5\\sqrt2}=\\dfrac{20}{\\sqrt2}=10\\sqrt2$ cm (so $h=2r$), and
$$V_{\\max}=150\\pi\\left(5\\sqrt2\\right)-\\pi\\left(5\\sqrt2\\right)^3=750\\sqrt2\\,\\pi-250\\sqrt2\\,\\pi=500\\sqrt2\\,\\pi\\ \\text{cm}^3.$$ ✓

**Radius $5\\sqrt2\\approx7.07$ cm, height $10\\sqrt2\\approx14.14$ cm, maximum volume $500\\sqrt2\\,\\pi\\approx2221\\text{ cm}^3$.**
        `
      },
      {
        number: 3, title: 'Volume of revolution (disk method)', section: '§8', marks: 8,
        prompt: `Let $R$ be the region between $y=3x-x^2$ and the $x$-axis. Find the volume generated when $R$ is revolved about the $x$-axis.`,
        solution: `
The region is bounded above by the parabola and below by the $x$-axis, so the limits are the $x$-intercepts:
$$3x-x^2=0 \\;\\Rightarrow\\; x(3-x)=0 \\;\\Rightarrow\\; x=0,\\ x=3.$$ ✓

On $(0,3)$ we have $3x-x^2>0$ (e.g. at $x=1$, $3-1=2>0$), so revolving about the $x$-axis sweeps out solid **disks** whose radius is the height of the region, $R(x)=3x-x^2$. ✓✓

$$V=\\pi\\int_0^3\\big(3x-x^2\\big)^2dx.$$ ✓

Expanding the integrand: $(3x-x^2)^2=9x^2-6x^3+x^4$.

$$V=\\pi\\int_0^3\\big(9x^2-6x^3+x^4\\big)dx=\\pi\\left[3x^3-\\frac{3x^4}{2}+\\frac{x^5}{5}\\right]_0^3.$$ ✓✓

Substituting the limits (the lower limit contributes $0$):
$$V=\\pi\\left(3(27)-\\frac{3(81)}{2}+\\frac{243}{5}\\right)=\\pi\\left(81-\\frac{243}{2}+\\frac{243}{5}\\right).$$ ✓

Over the common denominator $10$: $\\dfrac{810-1215+486}{10}=\\dfrac{81}{10}$, so
$$V=\\frac{81\\pi}{10}.$$ ✓

**Volume $=\\dfrac{81\\pi}{10}$ cubic units.**
        `
      },
      {
        number: 4,
        title: 'Proof: Reduction Formula for ∫ cosⁿx dx',
        section: '§9.2',
        marks: 8,
        prompt: `
Prove the reduction formula, valid for integers $n\\ge2$:
$$\\int\\cos^n x\\,dx=\\frac{\\cos^{n-1}x\\sin x}{n}+\\frac{n-1}{n}\\int\\cos^{n-2}x\\,dx.$$ (8)
        `,
        solution: `
Split off a single factor of $\\cos x$ so that the remaining factor can be differentiated:
$$\\int\\cos^n x\\,dx=\\int\\cos^{n-1}x\\cdot\\cos x\\,dx.$$ ✓

Integrate by parts with $u=\\cos^{n-1}x$ and $dv=\\cos x\\,dx$. By the chain rule $du=-(n-1)\\cos^{n-2}x\\sin x\\,dx$, and $v=\\sin x$. ✓✓

Applying $\\displaystyle\\int u\\,dv=uv-\\int v\\,du$:
$$\\int\\cos^n x\\,dx=\\cos^{n-1}x\\sin x-\\int\\sin x\\cdot\\Big(-(n-1)\\cos^{n-2}x\\sin x\\Big)dx=\\cos^{n-1}x\\sin x+(n-1)\\int\\cos^{n-2}x\\sin^2x\\,dx.$$ ✓✓

Now use the Pythagorean identity $\\sin^2x=1-\\cos^2x$, so that $\\cos^{n-2}x\\sin^2x=\\cos^{n-2}x-\\cos^{n}x$:
$$\\int\\cos^n x\\,dx=\\cos^{n-1}x\\sin x+(n-1)\\int\\cos^{n-2}x\\,dx-(n-1)\\int\\cos^n x\\,dx.$$ ✓✓

The original integral has reappeared on the right, so add $(n-1)\\displaystyle\\int\\cos^n x\\,dx$ to both sides:
$$n\\int\\cos^n x\\,dx=\\cos^{n-1}x\\sin x+(n-1)\\int\\cos^{n-2}x\\,dx.$$

Finally divide by $n$, which is legitimate since $n\\ge2>0$:
$$\\int\\cos^n x\\,dx=\\frac{\\cos^{n-1}x\\sin x}{n}+\\frac{n-1}{n}\\int\\cos^{n-2}x\\,dx.\\qquad\\blacksquare$$ ✓
        `,
     },
     {
       number: 5, title: 'Inverse trigonometric, exponential and logarithmic integrals', section: '§9.1', marks: 6,
        prompt: `
Evaluate each integral.

**(a)** $\\displaystyle\\int\\frac{dx}{9x^2+12x+13}$ (2)

**(b)** $\\displaystyle\\int\\frac{dx}{\\sqrt{49-9x^2}}$ (2)

**(c)** $\\displaystyle\\int 7^{2x-1}dx$ (1)

**(d)** $\\displaystyle\\int\\frac{2x+1}{x^2+x+5}dx$ (1)
        `,
        solution: `
**(a)** Complete the square: since $(3x+2)^2=9x^2+12x+4$, we have $9x^2+12x+13=(3x+2)^2+9$. ✓
Let $u=3x+2$, $du=3\\,dx$, so $dx=\\tfrac13\\,du$, and use $\\displaystyle\\int\\frac{du}{u^2+a^2}=\\frac1a\\arctan\\frac ua+C$ with $a=3$:
$$\\int\\frac{dx}{(3x+2)^2+9}=\\frac13\\int\\frac{du}{u^2+9}=\\frac13\\cdot\\frac13\\arctan\\!\\left(\\frac u3\\right)+C=\\frac19\\arctan\\!\\left(\\frac{3x+2}{3}\\right)+C.$$ ✓

**(b)** Write $49-9x^2=49-(3x)^2$ and let $u=3x$, $du=3\\,dx$: ✓
$$\\int\\frac{dx}{\\sqrt{49-(3x)^2}}=\\frac13\\int\\frac{du}{\\sqrt{7^2-u^2}}=\\frac13\\arcsin\\!\\left(\\frac u7\\right)+C=\\frac13\\arcsin\\!\\left(\\frac{3x}{7}\\right)+C.$$ ✓

**(c)** Let $u=2x-1$, $du=2\\,dx$, and use $\\displaystyle\\int a^u\\,du=\\frac{a^u}{\\ln a}+C$ with $a=7$:
$$\\int7^{2x-1}dx=\\frac12\\int7^u\\,du=\\frac{7^{2x-1}}{2\\ln7}+C.$$ ✓

**(d)** The numerator is exactly the derivative of the denominator, $\\dfrac{d}{dx}(x^2+x+5)=2x+1$, so this has the form $\\displaystyle\\int\\frac{f'(x)}{f(x)}dx=\\ln|f(x)|+C$. The discriminant $1-20=-19<0$, so $x^2+x+5>0$ and the absolute value may be dropped:
$$\\int\\frac{2x+1}{x^2+x+5}\\,dx=\\ln\\left(x^2+x+5\\right)+C.$$ ✓
        `
      },
      {
        number: 6, title: 'Integration by parts with an inverse trigonometric factor', section: '§9.2', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int x\\arctan x\\,dx$.`,
        solution: `
Choose the inverse-trigonometric factor as $u$, since it simplifies on differentiating. Let $u=\\arctan x$, $dv=x\\,dx$, so $du=\\dfrac{1}{1+x^2}\\,dx$ and $v=\\dfrac{x^2}{2}$. ✓✓

Applying $\\displaystyle\\int u\\,dv=uv-\\int v\\,du$:
$$\\int x\\arctan x\\,dx=\\frac{x^2}{2}\\arctan x-\\int\\frac{x^2}{2}\\cdot\\frac{1}{1+x^2}\\,dx=\\frac{x^2}{2}\\arctan x-\\frac12\\int\\frac{x^2}{1+x^2}\\,dx.$$ ✓✓

The remaining integrand is an improper fraction, so divide first:
$$\\frac{x^2}{1+x^2}=\\frac{(1+x^2)-1}{1+x^2}=1-\\frac{1}{1+x^2}\\;\\Rightarrow\\;\\int\\frac{x^2}{1+x^2}\\,dx=x-\\arctan x.$$ ✓

Substituting back:
$$\\int x\\arctan x\\,dx=\\frac{x^2}{2}\\arctan x-\\frac12\\big(x-\\arctan x\\big)+C=\\frac{x^2}{2}\\arctan x-\\frac{x}{2}+\\frac12\\arctan x+C.$$ ✓
        `
      },
      {
        number: 7, title: 'Partial fractions (linear factor and irreducible quadratic)', section: '§9.5', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int\\frac{2x^2+3x+1}{(x+2)(x^2+1)}dx$.`,
        solution: `
The denominator is already fully factorised: $x+2$ is linear and $x^2+1$ is an irreducible quadratic (discriminant $0-4=-4<0$), so the irreducible quadratic needs a linear numerator:
$$\\frac{2x^2+3x+1}{(x+2)(x^2+1)}=\\frac{A}{x+2}+\\frac{Bx+C}{x^2+1}.$$ ✓

Multiplying through by $(x+2)(x^2+1)$ clears the denominators:
$$2x^2+3x+1=A\\left(x^2+1\\right)+(Bx+C)(x+2).$$ ✓

Setting $x=-2$ kills the second term: $2(4)+3(-2)+1=3$ and $A\\left((-2)^2+1\\right)=5A$, so $5A=3\\;\\Rightarrow\\;A=\\dfrac35$. ✓

Expanding the right-hand side gives $(A+B)x^2+(2B+C)x+(A+2C)$. Comparing $x^2$ coefficients: $A+B=2\\;\\Rightarrow\\;B=2-\\tfrac35=\\tfrac75$. Comparing constants: $A+2C=1\\;\\Rightarrow\\;2C=1-\\tfrac35=\\tfrac25\\;\\Rightarrow\\;C=\\tfrac15$. (The $x$ coefficient confirms this: $2B+C=\\tfrac{14}5+\\tfrac15=3$, as required.) ✓

Splitting the quadratic term so that the $\\ln$ and $\\arctan$ pieces are separate, using $\\tfrac75x=\\tfrac{7}{10}(2x)$:
$$\\int\\frac{2x^2+3x+1}{(x+2)(x^2+1)}dx=\\frac35\\int\\frac{dx}{x+2}+\\frac{7}{10}\\int\\frac{2x}{x^2+1}dx+\\frac15\\int\\frac{dx}{x^2+1}.$$ ✓

Integrating term by term (the middle integral has the form $\\int f'/f$):
$$=\\frac35\\ln|x+2|+\\frac{7}{10}\\ln\\left(x^2+1\\right)+\\frac15\\arctan x+C.$$ ✓
        `
      }
    ]
  },

  // =====================================================================
  // PRACTICE PAPER 8
  // =====================================================================
  {
    id: 'paper8', label: 'Practice Paper 8', date: 'Practice Test H', totalMarks: 52, duration: 60,
    questions: [
      {
        number: 1, title: 'Curve sketching (exponential decay)', section: '§6.5', marks: 12,
        prompt: `Let $f(x)=xe^{-x}$. Find the intercepts, end behaviour, asymptotes, intervals of increase/decrease, local extrema, concavity and point of inflection, and hence sketch the graph of $f$.`,
        solution: `
**Intercepts.** Since $e^{-x}>0$ for every real $x$, $f(x)=xe^{-x}=0$ forces $x=0$; and $f(0)=0\\cdot e^{0}=0$. So the origin $(0,0)$ is the only intercept — it serves as both the $x$-intercept and the $y$-intercept. ✓

**End behaviour.** As $x\\to\\infty$ the quotient $\\dfrac{x}{e^{x}}$ has the indeterminate form $\\dfrac{\\infty}{\\infty}$, so by L'Hôpital's rule
$$\\lim_{x\\to\\infty}xe^{-x}=\\lim_{x\\to\\infty}\\frac{x}{e^{x}}=\\lim_{x\\to\\infty}\\frac{1}{e^{x}}=0,$$
and the approach is from above ($f(x)>0$ for $x>0$), i.e. $f(x)\\to0^{+}$. ✓

As $x\\to-\\infty$ there is no indeterminacy: $x\\to-\\infty$ while $e^{-x}\\to\\infty$, so the product $f(x)\\to-\\infty$. Consequently $y=0$ is a **horizontal asymptote on the right only**, and there is **no vertical asymptote**, because $f$ is a product of two functions continuous on all of $\\mathbb{R}$ and so is never undefined. ✓

**First derivative.** By the product rule, with $u=x$, $u'=1$, $v=e^{-x}$, $v'=-e^{-x}$ (chain rule):
$$f'(x)=1\\cdot e^{-x}+x\\left(-e^{-x}\\right)=e^{-x}-xe^{-x}=e^{-x}(1-x).$$ ✓✓

$f'(x)=0\\;\\Rightarrow\\;1-x=0\\;\\Rightarrow\\;x=1$, since $e^{-x}$ never vanishes. As $e^{-x}>0$ always, the sign of $f'$ is the sign of $1-x$. Sign chart on $(-\\infty,1),(1,\\infty)$: $f'>0$ (e.g. $f'(0)=1$), $f'<0$ (e.g. $f'(2)=-e^{-2}\\approx-0.14$). ✓

So $f$ is **increasing on $(-\\infty,1)$** and **decreasing on $(1,\\infty)$**, with a **local maximum** at $x=1$, $f(1)=e^{-1}\\approx0.368$. ✓

**Second derivative.** Differentiating $f'(x)=e^{-x}(1-x)$ by the product rule, with $u=e^{-x}$, $u'=-e^{-x}$, $v=1-x$, $v'=-1$:
$$f''(x)=-e^{-x}(1-x)+e^{-x}(-1)=e^{-x}\\big[-(1-x)-1\\big]=e^{-x}(x-2).$$ ✓✓
This confirms the extremum: $f''(1)=-e^{-1}<0$, so by the second-derivative test $x=1$ is indeed a local maximum.

$f''(x)=0\\;\\Rightarrow\\;x=2$, and since $e^{-x}>0$ the sign of $f''$ is the sign of $x-2$: negative for $x<2$ (e.g. $f''(0)=-2$), positive for $x>2$ (e.g. $f''(3)=e^{-3}>0$). Hence $f$ is **concave down on $(-\\infty,2)$** and **concave up on $(2,\\infty)$**; the concavity changes at $x=2$, which lies in the domain, so there is a **point of inflection at $\\left(2,2e^{-2}\\right)\\approx(2,0.271)$**. ✓

See the graph below — it shows the single intercept at the origin, the plunge to $-\\infty$ on the left, the local maximum $\\left(1,e^{-1}\\right)$, the inflection point $\\left(2,2e^{-2}\\right)$ where the curve stops bending downwards, and the tail flattening onto the horizontal asymptote $y=0$ from above as $x\\to\\infty$. ✓✓
        `,
        graph: {
          fn: x => x * Math.exp(-x),
          domain: [-1.5, 6],
          hAsymptote: 0,
          yRange: [-4, 2],
          intercepts: [{ x: 0, y: 0 }],
          extrema: [{ x: 1, y: Math.exp(-1), type: 'max' }],
          inflection: [{ x: 2, y: 2 * Math.exp(-2) }],
          title: 'f(x) = xe⁻ˣ'
        }
      },
      {
        number: 2, title: 'Optimization — rectangular box with a fixed volume', section: '§6.6', marks: 6,
        prompt: `A closed rectangular box has volume $500\\text{ cm}^3$. Its length is twice its width. Find the dimensions that minimise its surface area.`,
        solution: `
Let the width be $x$ cm, so the length is $2x$ cm, and let the height be $h$ cm.

Volume constraint: $x(2x)h=2x^2h=500\\;\\Rightarrow\\;h=\\dfrac{250}{x^2}$. ✓

The box is **closed**, so all six faces count — two of $2x\\times x$, two of $2x\\times h$ and two of $x\\times h$:
$$S=2\\left(2x^2\\right)+2(2xh)+2(xh)=4x^2+6xh=4x^2+6x\\cdot\\frac{250}{x^2}=4x^2+\\frac{1500}{x},\\qquad x>0.$$ ✓

$$S'(x)=8x-\\frac{1500}{x^2}=0\\;\\Rightarrow\\;8x^3=1500\\;\\Rightarrow\\;x^3=\\frac{375}{2}\\;\\Rightarrow\\;x=\\sqrt[3]{\\frac{375}{2}}=\\frac{5\\sqrt[3]{12}}{2}\\approx5.72.$$ ✓✓

Since $S''(x)=8+\\dfrac{3000}{x^3}>0$ for every $x>0$, this critical point gives a **minimum**. ✓

Writing $a=\\sqrt[3]{375/2}$, so that $a^3=\\tfrac{375}{2}$, the height follows from the constraint:
$$h=\\frac{250}{a^2}=\\frac{250a}{a^3}=\\frac{250a}{375/2}=\\frac{500a}{375}=\\frac{4a}{3}.$$ ✓

**Width $a=\\sqrt[3]{375/2}\\approx5.72\\text{ cm}$, length $2a\\approx11.45\\text{ cm}$, height $\\tfrac43a\\approx7.63\\text{ cm}$, giving the minimum surface area $75\\sqrt[3]{144}\\approx393.1\\text{ cm}^2$.**
        `
      },
      {
        number: 3, title: 'Area between crossing curves', section: '§8', marks: 8,
        prompt: `Find the total area enclosed between $y=x$ and $y=x^3$ for $-1\\le x\\le1$.`,
        solution: `
The curves meet where $x=x^3\\;\\Rightarrow\\;x^3-x=0\\;\\Rightarrow\\;x\\left(x^2-1\\right)=x(x-1)(x+1)=0\\;\\Rightarrow\\;x=-1,\\,0,\\,1$. All three lie in $[-1,1]$, and the crossing at $x=0$ is interior, so the region must be split there. ✓

On $(-1,0)$ take $x=-\\tfrac12$: $x^3-x=-\\tfrac18+\\tfrac12=\\tfrac38>0$, so $y=x^3$ is the upper curve there. ✓
On $(0,1)$ take $x=\\tfrac12$: $x-x^3=\\tfrac12-\\tfrac18=\\tfrac38>0$, so $y=x$ is the upper curve there. ✓

Since area needs (upper $-$ lower) on each piece,
$$A=\\int_{-1}^{0}\\left(x^3-x\\right)dx+\\int_{0}^{1}\\left(x-x^3\\right)dx.$$ ✓

$$\\int_{-1}^{0}\\left(x^3-x\\right)dx=\\left[\\frac{x^4}{4}-\\frac{x^2}{2}\\right]_{-1}^{0}=(0-0)-\\left(\\frac14-\\frac12\\right)=\\frac14.$$ ✓✓

$$\\int_{0}^{1}\\left(x-x^3\\right)dx=\\left[\\frac{x^2}{2}-\\frac{x^4}{4}\\right]_{0}^{1}=\\left(\\frac12-\\frac14\\right)-(0-0)=\\frac14.$$ ✓

The two pieces are equal, as expected: $x-x^3$ is odd, so the region is symmetric about the origin. Adding them,
$$A=\\frac14+\\frac14=\\frac12.$$ ✓

**Total enclosed area $=\\dfrac12$ square units.**
        `
      },
      {
        number: 4,
        title: 'Proof: Formula for ∫ eᵃˣcos(bx) dx',
        section: '§9.2',
        marks: 8,
        prompt: `
Using integration by parts, prove that
$$\\int e^{ax}\\cos(bx)\\,dx=\\frac{e^{ax}}{a^2+b^2}\\big(a\\cos(bx)+b\\sin(bx)\\big)+C,$$
where $a$ and $b$ are non-zero constants. (8)
        `,
        solution: `
Let $I=\\displaystyle\\int e^{ax}\\cos(bx)\\,dx$, and assume $b\\neq0$ (if $b=0$ the claim collapses to the elementary $\\int e^{ax}\\,dx=\\dfrac{e^{ax}}{a}+C$, which the stated right-hand side also returns).

**First application of integration by parts.** Let $u=e^{ax}$, $dv=\\cos(bx)\\,dx$, so $du=ae^{ax}\\,dx$ and $v=\\dfrac1b\\sin(bx)$. Then $I=uv-\\displaystyle\\int v\\,du$ gives
$$I=\\frac{1}{b}e^{ax}\\sin(bx)-\\frac{a}{b}\\int e^{ax}\\sin(bx)\\,dx.$$ ✓✓

**Second application,** applied to $J=\\displaystyle\\int e^{ax}\\sin(bx)\\,dx$. Let $u=e^{ax}$, $dv=\\sin(bx)\\,dx$, so $du=ae^{ax}\\,dx$ and $v=-\\dfrac1b\\cos(bx)$. Then
$$J=-\\frac{1}{b}e^{ax}\\cos(bx)+\\frac{a}{b}\\int e^{ax}\\cos(bx)\\,dx=-\\frac{1}{b}e^{ax}\\cos(bx)+\\frac{a}{b}I.$$ ✓✓

The original integral has reappeared — this is the circular (loop) case, so substitute $J$ back into the first line and solve for $I$ algebraically:
$$I=\\frac{1}{b}e^{ax}\\sin(bx)-\\frac{a}{b}\\left(-\\frac{1}{b}e^{ax}\\cos(bx)+\\frac{a}{b}I\\right)=\\frac{1}{b}e^{ax}\\sin(bx)+\\frac{a}{b^2}e^{ax}\\cos(bx)-\\frac{a^2}{b^2}I.$$ ✓✓

Collecting the $I$ terms on the left and taking $\\dfrac{e^{ax}}{b^2}$ out on the right:
$$I+\\frac{a^2}{b^2}I=\\left(\\frac{b^2+a^2}{b^2}\\right)I=\\frac{e^{ax}}{b^2}\\big(a\\cos(bx)+b\\sin(bx)\\big).$$ ✓

Multiplying both sides by $\\dfrac{b^2}{a^2+b^2}$ — legitimate since $a^2+b^2>0$ — and reinstating the constant of integration:
$$I=\\frac{e^{ax}}{a^2+b^2}\\big(a\\cos(bx)+b\\sin(bx)\\big)+C.\\qquad\\blacksquare$$ ✓
        `
      },
      {
        number: 5, title: 'Inverse trigonometric, exponential and logarithmic integrals', section: '§9.1', marks: 6,
        prompt: `
Evaluate each integral.

**(a)** $\\displaystyle\\int\\frac{dx}{\\sqrt{36-x^2}}$ (2)

**(b)** $\\displaystyle\\int\\frac{dx}{9x^2+18x+13}$ (2)

**(c)** $\\displaystyle\\int e^{3-4x}dx$ (1)

**(d)** $\\displaystyle\\int\\frac{\\cos x}{2+\\sin x}dx$ (1)
        `,
        solution: `
**(a)** This is the standard form $\\displaystyle\\int\\frac{dx}{\\sqrt{a^2-x^2}}=\\arcsin\\left(\\frac{x}{a}\\right)+C$, here with $a^2=36$, i.e. $a=6$: ✓
$$\\int\\frac{dx}{\\sqrt{36-x^2}}=\\arcsin\\left(\\frac{x}{6}\\right)+C.$$ ✓

**(b)** Complete the square, first taking out the leading $9$:
$$9x^2+18x+13=9\\left(x^2+2x\\right)+13=9\\left[(x+1)^2-1\\right]+13=9(x+1)^2+4.$$ ✓
Let $u=3(x+1)$, so $du=3\\,dx$, i.e. $dx=\\tfrac13\\,du$, and $9(x+1)^2+4=u^2+2^2$:
$$\\int\\frac{dx}{9(x+1)^2+4}=\\frac13\\int\\frac{du}{u^2+2^2}=\\frac13\\cdot\\frac12\\arctan\\left(\\frac{u}{2}\\right)+C=\\frac16\\arctan\\left(\\frac{3(x+1)}{2}\\right)+C.$$ ✓

**(c)** Let $u=3-4x$, so $du=-4\\,dx$ and $dx=-\\tfrac14\\,du$:
$$\\int e^{3-4x}\\,dx=-\\frac14\\int e^{u}\\,du=-\\frac14e^{u}+C=-\\frac14e^{3-4x}+C.$$ ✓

**(d)** With $f(x)=2+\\sin x$ we have $f'(x)=\\cos x$, so the integrand is exactly $\\dfrac{f'(x)}{f(x)}$ (equivalently, substitute $u=2+\\sin x$, $du=\\cos x\\,dx$):
$$\\int\\frac{\\cos x}{2+\\sin x}\\,dx=\\ln\\left|2+\\sin x\\right|+C=\\ln(2+\\sin x)+C,$$
the absolute value being unnecessary because $2+\\sin x\\ge1>0$ for all $x$. ✓
        `
      },
      {
        number: 6, title: 'Integration by parts with a logarithm', section: '§9.2', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int\\ln(x^2+1)dx$.`,
        solution: `
There is no obvious second factor, so take the whole integrand as $u$ and $dv=dx$. Let $u=\\ln\\left(x^2+1\\right)$, $dv=dx$, so by the chain rule $du=\\dfrac{2x}{x^2+1}\\,dx$, and $v=x$. ✓✓

Then $\\displaystyle\\int u\\,dv=uv-\\int v\\,du$ gives
$$\\int\\ln\\left(x^2+1\\right)dx=x\\ln\\left(x^2+1\\right)-\\int x\\cdot\\frac{2x}{x^2+1}\\,dx=x\\ln\\left(x^2+1\\right)-\\int\\frac{2x^2}{x^2+1}\\,dx.$$ ✓

The new integrand is improper (equal degrees), so divide before integrating:
$$\\frac{2x^2}{x^2+1}=\\frac{2\\left(x^2+1\\right)-2}{x^2+1}=2-\\frac{2}{x^2+1}.$$ ✓

$$\\int\\frac{2x^2}{x^2+1}\\,dx=\\int\\left(2-\\frac{2}{x^2+1}\\right)dx=2x-2\\arctan x.$$ ✓

Substituting this back:
$$\\int\\ln\\left(x^2+1\\right)dx=x\\ln\\left(x^2+1\\right)-2x+2\\arctan x+C.$$ ✓
        `
      },
      {
        number: 7, title: 'Partial fractions (improper fraction)', section: '§9.5', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int\\frac{x^3+2x^2+5}{x^2+1}dx$.`,
        solution: `
The fraction is **improper** — the numerator has degree $3$, the denominator degree $2$ — so partial fractions cannot be applied directly; divide first. ✓

Long division of $x^3+2x^2+0x+5$ by $x^2+1$: the first quotient term is $x$, and $x\\left(x^2+1\\right)=x^3+x$ leaves $2x^2-x+5$; the next quotient term is $2$, and $2\\left(x^2+1\\right)=2x^2+2$ leaves the remainder $-x+3$. Hence
$$\\frac{x^3+2x^2+5}{x^2+1}=x+2+\\frac{3-x}{x^2+1}.$$ ✓✓

The remainder term is proper, and $x^2+1$ is an irreducible quadratic that does not factor over $\\mathbb{R}$, so no further decomposition into linear pieces is possible — instead split it into the two standard forms, arranging the first numerator to be the derivative of $x^2+1$:
$$\\frac{3-x}{x^2+1}=-\\frac12\\cdot\\frac{2x}{x^2+1}+\\frac{3}{x^2+1}.$$ ✓

Integrating term by term, using $\\displaystyle\\int\\frac{2x}{x^2+1}\\,dx=\\ln\\left(x^2+1\\right)$ (numerator is the derivative of the denominator, which is always positive so no absolute value is needed) and $\\displaystyle\\int\\frac{dx}{x^2+1}=\\arctan x$:
$$\\int\\frac{x^3+2x^2+5}{x^2+1}\\,dx=\\frac{x^2}{2}+2x-\\frac12\\ln\\left(x^2+1\\right)+3\\arctan x+C.$$ ✓✓
        `
      }
    ]
  },

  // =====================================================================
  // PRACTICE PAPER 9
  // =====================================================================
  {
    id: 'paper9', label: 'Practice Paper 9', date: 'Practice Test I', totalMarks: 52, duration: 60,
    questions: [
      {
        number: 1, title: 'Curve sketching (logarithmic quotient)', section: '§6.5', marks: 12,
        prompt: `Let $\\displaystyle f(x)=\\frac{\\ln x}{x}$, with $x>0$. Find the intercepts, asymptotes, intervals of increase/decrease, local extrema, concavity and point of inflection, and hence sketch the graph of $f$.`,
        solution: `
The domain is $(0,\\infty)$, since $\\ln x$ is only defined for $x>0$. Setting $f(x)=0$ gives $\\ln x=0\\;\\Rightarrow\\;x=1$, so the only $x$-intercept is $(1,0)$; there is **no $y$-intercept**, because $x=0$ is not in the domain. ✓

As $x\\to0^+$ the numerator $\\ln x\\to-\\infty$ while the denominator $x\\to0^+$, so $f(x)\\to-\\infty$. Hence $x=0$ is a **vertical asymptote**. ✓

As $x\\to\\infty$ this is of the form $\\frac{\\infty}{\\infty}$; by l'Hôpital's rule $\\displaystyle\\lim_{x\\to\\infty}\\frac{\\ln x}{x}=\\lim_{x\\to\\infty}\\frac{1/x}{1}=0$, so $y=0$ is a **horizontal asymptote**. ✓

By the quotient rule, with $u=\\ln x$, $u'=\\dfrac1x$, $v=x$, $v'=1$:
$$f'(x)=\\frac{\\frac{1}{x}\\cdot x-\\ln x\\cdot 1}{x^2}=\\frac{1-\\ln x}{x^2}.$$ ✓✓

$f'(x)=0\\;\\Rightarrow\\;\\ln x=1\\;\\Rightarrow\\;x=e$. Since $x^2>0$ on the domain, the sign of $f'$ is the sign of $1-\\ln x$.
Sign chart on $(0,e),(e,\\infty)$: $f'(1)=\\dfrac{1-0}{1}=1>0$ and $f'(e^2)=\\dfrac{1-2}{e^4}=-e^{-4}<0$, so $f'>0,\\;f'<0$.
Therefore $f$ is **increasing on $(0,e)$** and **decreasing on $(e,\\infty)$**, with a **local maximum** at $x=e$, where $f(e)=\\dfrac{\\ln e}{e}=\\dfrac1e\\approx0.368$. ✓✓

Differentiating again by the quotient rule, with $u=1-\\ln x$, $u'=-\\dfrac1x$, $v=x^2$, $v'=2x$:
$$f''(x)=\\frac{-\\frac{1}{x}\\cdot x^2-(1-\\ln x)\\cdot 2x}{x^4}=\\frac{-1-2(1-\\ln x)}{x^3}=\\frac{2\\ln x-3}{x^3}.$$ ✓✓

$f''(x)=0\\;\\Rightarrow\\;\\ln x=\\dfrac32\\;\\Rightarrow\\;x=e^{3/2}\\approx4.48$. As $x^3>0$ on the domain, $f''$ takes the sign of $2\\ln x-3$: $f''(1)=-3<0$ and $f''(e^2)=\\dfrac{4-3}{e^6}=e^{-6}>0$. So $f$ is **concave down on $\\left(0,e^{3/2}\\right)$** and **concave up on $\\left(e^{3/2},\\infty\\right)$**, and because $f''$ changes sign there, $\\left(e^{3/2},\\dfrac{3}{2e^{3/2}}\\right)\\approx(4.48,0.33)$ is a **point of inflection**. ✓

See the graph below — it shows the vertical asymptote $x=0$, the horizontal asymptote $y=0$, the $x$-intercept at $(1,0)$, the local maximum $\\left(e,\\tfrac1e\\right)$, and the inflection point $\\left(e^{3/2},\\tfrac{3}{2e^{3/2}}\\right)$, with the curve rising steeply out of $-\\infty$, turning at $x=e$ and then decaying slowly back towards the $x$-axis. ✓✓
        `,
        graph: {
          fn: x => Math.log(x) / x,
          domain: [-0.5, 12],
          breaks: [0],
          vAsymptotes: [0],
          hAsymptote: 0,
          yRange: [-4, 1],
          intercepts: [{ x: 1, y: 0 }],
          extrema: [{ x: Math.E, y: 1 / Math.E, type: 'max' }],
          inflection: [{ x: Math.pow(Math.E, 1.5), y: 3 / (2 * Math.pow(Math.E, 1.5)) }],
          title: 'f(x) = ln(x)/x'
        }
      },
      {
        number: 2, title: 'Optimization — rectangle inscribed in an ellipse', section: '§6.6', marks: 6,
        prompt: `A rectangle is centred at the origin with sides parallel to the axes and vertices on $\\displaystyle\\frac{x^2}{25}+\\frac{y^2}{9}=1$. Find the dimensions of maximum area.`,
        solution: `
Let $(x,y)$ be the vertex in the first quadrant, with $x,y>0$. By symmetry about both axes the rectangle has width $2x$ and height $2y$, so the objective function is $A=(2x)(2y)=4xy$. ✓

The constraint is the ellipse: $\\dfrac{y^2}{9}=1-\\dfrac{x^2}{25}\\;\\Rightarrow\\;y=3\\sqrt{1-\\dfrac{x^2}{25}}$ (taking $y>0$). Substituting to one variable,
$$A(x)=4x\\cdot3\\sqrt{1-\\frac{x^2}{25}}=12x\\sqrt{1-\\frac{x^2}{25}},\\qquad 0< x<5.$$ ✓

Since $A>0$, maximising $A$ is equivalent to maximising the square-root-free function
$$S(x)=A(x)^2=144x^2\\left(1-\\frac{x^2}{25}\\right)=144x^2-\\frac{144}{25}x^4.$$ ✓

$$S'(x)=288x-\\frac{576}{25}x^3=\\frac{288x}{25}\\left(25-2x^2\\right)=0\\;\\Rightarrow\\;x^2=\\frac{25}{2}\\;\\Rightarrow\\;x=\\frac{5}{\\sqrt2}=\\frac{5\\sqrt2}{2}.$$ ✓

For $0< x<\\tfrac{5}{\\sqrt2}$ we have $25-2x^2>0$, so $S'>0$ (e.g. $S'(1)\\approx265$); for $\\tfrac{5}{\\sqrt2}< x<5$ we have $25-2x^2<0$, so $S'<0$ (e.g. $S'(4)\\approx-323$). The sign change $+\\to-$ confirms a **maximum**. ✓

Then $y=3\\sqrt{1-\\dfrac{25/2}{25}}=3\\sqrt{\\dfrac12}=\\dfrac{3}{\\sqrt2}$, so the width is $2x=5\\sqrt2$, the height is $2y=3\\sqrt2$, and
$$A=5\\sqrt2\\cdot3\\sqrt2=15\\cdot2=30.$$ ✓

**Dimensions $5\\sqrt2\\times3\\sqrt2$ (about $7.07\\times4.24$ units), maximum area $30$ square units.**
        `
      },
      {
        number: 3, title: 'Volume by slicing', section: '§8', marks: 8,
        prompt: `A pyramid has height $h$ and a square base of side length $b$. At height $x$ above the base, a cross-section parallel to the base is a square. Find its volume by integrating the cross-sectional areas.`,
        solution: `
Measure $x$ upwards from the base, so the base sits at $x=0$ and the apex at $x=h$. The cross-section at height $x$ is a square; let its side be $s(x)$. ✓

Take the vertical cross-section through the apex and the midpoints of two opposite base edges. The large triangle (height $h$, half-width $\\tfrac{b}{2}$) and the similar triangle above height $x$ (height $h-x$, half-width $\\tfrac{s(x)}{2}$) give
$$\\frac{s(x)/2}{b/2}=\\frac{h-x}{h}\\;\\Rightarrow\\;s(x)=b\\left(1-\\frac{x}{h}\\right),$$
which correctly gives $s(0)=b$ at the base and $s(h)=0$ at the apex. ✓

The cross-sectional area is therefore
$$A(x)=s(x)^2=b^2\\left(1-\\frac{x}{h}\\right)^2.$$ ✓

Slicing perpendicular to the axis and integrating the areas from base to apex:
$$V=\\int_0^h A(x)\\,dx=\\int_0^h b^2\\left(1-\\frac{x}{h}\\right)^2dx.$$ ✓

Let $u=1-\\dfrac{x}{h}$, so $du=-\\dfrac{1}{h}\\,dx$, i.e. $dx=-h\\,du$; when $x=0$, $u=1$, and when $x=h$, $u=0$. ✓

$$V=b^2\\int_1^0 u^2\\left(-h\\,du\\right)=b^2h\\int_0^1u^2\\,du.$$ ✓

$$=b^2h\\left[\\frac{u^3}{3}\\right]_0^1=b^2h\\left(\\frac13-0\\right)=\\frac{b^2h}{3}.$$ ✓✓

**Volume $=\\dfrac{b^2h}{3}$ cubic units** — that is, one third of the base area $b^2$ times the height $h$.
        `
      },
      {
        number: 4,
        title: 'Proof: Convergence of the p-Integral',
        section: '§10',
        marks: 8,
        prompt: `
Prove that
$$\\int_1^\\infty\\frac{1}{x^p}\\,dx=\\frac{1}{p-1}\\quad\\text{if } p>1,$$
and that the integral diverges if $p\\le1$. (8)
        `,
        solution: `
By the **definition of an improper integral on an unbounded interval**, $\\dfrac{1}{x^p}$ is continuous on $[1,t]$ for every $t>1$, and
$$\\int_1^\\infty\\frac{1}{x^p}\\,dx=\\lim_{t\\to\\infty}\\int_1^t x^{-p}\\,dx,$$
the integral converging exactly when this limit exists as a finite number. ✓

**Case $p=1$.** An antiderivative of $\\dfrac1x$ on $[1,t]$ is $\\ln x$, so by the Fundamental Theorem of Calculus (Part 2),
$$\\int_1^t\\frac{1}{x}\\,dx=\\Big[\\ln x\\Big]_1^t=\\ln t-\\ln1=\\ln t.$$ ✓

Since $\\ln t\\to\\infty$ as $t\\to\\infty$, the limit is not finite and the integral **diverges**. ✓

**Case $p\\ne1$.** By the power rule, $\\dfrac{d}{dx}\\!\\left(\\dfrac{x^{1-p}}{1-p}\\right)=x^{-p}$ (legitimate because $1-p\\ne0$), so by the Fundamental Theorem of Calculus (Part 2),
$$\\int_1^t x^{-p}\\,dx=\\left[\\frac{x^{1-p}}{1-p}\\right]_1^t=\\frac{t^{1-p}-1}{1-p}.$$ ✓✓

If $p>1$ then $1-p<0$, so $t^{1-p}=\\dfrac{1}{t^{\\,p-1}}$ with $p-1>0$; the denominator increases without bound and $t^{1-p}\\to0$ as $t\\to\\infty$. ✓

Hence the limit exists and is finite:
$$\\int_1^\\infty\\frac{1}{x^p}\\,dx=\\lim_{t\\to\\infty}\\frac{t^{1-p}-1}{1-p}=\\frac{0-1}{1-p}=\\frac{-1}{1-p}=\\frac{1}{p-1},$$
so the integral **converges** to $\\dfrac{1}{p-1}$ when $p>1$. ✓

If $p<1$ then $1-p>0$, so $t^{1-p}\\to\\infty$ as $t\\to\\infty$ and therefore $\\dfrac{t^{1-p}-1}{1-p}\\to\\infty$: the integral **diverges**. Together with the case $p=1$, the integral diverges for every $p\\le1$ and equals $\\dfrac{1}{p-1}$ for $p>1$. $\\blacksquare$ ✓
        `
      },
      {
        number: 5, title: 'Inverse trigonometric, exponential and logarithmic integrals', section: '§9.1', marks: 6,
        prompt: `
Evaluate each integral.

**(a)** $\\displaystyle\\int\\frac{dx}{16+4x^2}$ (2)

**(b)** $\\displaystyle\\int\\frac{dx}{\\sqrt{1-9x^2}}$ (2)

**(c)** $\\displaystyle\\int2^{x+1}dx$ (1)

**(d)** $\\displaystyle\\int\\frac{3x^2-1}{x^3-x+4}dx$ (1)
        `,
        solution: `
**(a)** Factor the constant out of the denominator: $16+4x^2=4\\left(x^2+4\\right)$, so
$$\\int\\frac{dx}{16+4x^2}=\\frac14\\int\\frac{dx}{x^2+2^2}.$$ ✓
Using $\\displaystyle\\int\\frac{dx}{x^2+a^2}=\\frac1a\\arctan\\!\\left(\\frac{x}{a}\\right)+C$ with $a=2$:
$$=\\frac14\\cdot\\frac12\\arctan\\!\\left(\\frac{x}{2}\\right)+C=\\frac18\\arctan\\!\\left(\\frac{x}{2}\\right)+C.$$ ✓

**(b)** Let $u=3x$, so $du=3\\,dx$, i.e. $dx=\\frac13\\,du$, and $9x^2=u^2$: ✓
$$\\int\\frac{dx}{\\sqrt{1-9x^2}}=\\frac13\\int\\frac{du}{\\sqrt{1-u^2}}=\\frac13\\arcsin u+C=\\frac13\\arcsin(3x)+C.$$ ✓

**(c)** Split off the constant factor, $2^{x+1}=2\\cdot2^x$, and use $\\displaystyle\\int a^x\\,dx=\\frac{a^x}{\\ln a}+C$ with $a=2$:
$$\\int2^{x+1}\\,dx=2\\int2^x\\,dx=\\frac{2\\cdot2^x}{\\ln2}+C=\\frac{2^{x+1}}{\\ln2}+C.$$ ✓

**(d)** With $f(x)=x^3-x+4$ we have $f'(x)=3x^2-1$, so the integrand is exactly $\\dfrac{f'(x)}{f(x)}$:
$$\\int\\frac{3x^2-1}{x^3-x+4}\\,dx=\\ln\\left|x^3-x+4\\right|+C.$$ ✓
        `
      },
      {
        number: 6, title: 'Integration by parts with a trigonometric polynomial', section: '§9.2', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int x^2\\cos(2x)dx$.`,
        solution: `
**First application.** Let $u=x^2$, $dv=\\cos(2x)\\,dx$, so $du=2x\\,dx$ and $v=\\dfrac12\\sin(2x)$. ✓

$$\\int x^2\\cos(2x)\\,dx=\\frac{x^2}{2}\\sin(2x)-\\int\\frac{1}{2}\\sin(2x)\\cdot2x\\,dx=\\frac{x^2}{2}\\sin(2x)-\\int x\\sin(2x)\\,dx.$$ ✓

**Second application**, on the remaining integral $\\displaystyle\\int x\\sin(2x)\\,dx$: let $u=x$, $dv=\\sin(2x)\\,dx$, so $du=dx$ and $v=-\\dfrac12\\cos(2x)$. ✓

$$\\int x\\sin(2x)\\,dx=-\\frac{x}{2}\\cos(2x)+\\frac12\\int\\cos(2x)\\,dx=-\\frac{x}{2}\\cos(2x)+\\frac14\\sin(2x).$$ ✓

Substituting this back, and being careful with the minus sign in front of the bracket:
$$\\int x^2\\cos(2x)\\,dx=\\frac{x^2}{2}\\sin(2x)-\\left(-\\frac{x}{2}\\cos(2x)+\\frac14\\sin(2x)\\right)+C$$ ✓

$$=\\frac{x^2}{2}\\sin(2x)+\\frac{x}{2}\\cos(2x)-\\frac14\\sin(2x)+C.$$ ✓
        `
      },
      {
        number: 7, title: 'Partial fractions (repeated irreducible quadratic)', section: '§9.5', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int\\frac{x^3+x^2+2x+1}{(x^2+1)^2}dx$.`,
        solution: `
The denominator is already fully factored: $x^2+1$ is irreducible over $\\mathbb{R}$ (its discriminant is $0^2-4(1)(1)=-4<0$) and it occurs twice, while the numerator has degree $3$ against degree $4$ below, so the fraction is proper. A repeated irreducible quadratic needs one term per power:
$$\\frac{x^3+x^2+2x+1}{\\left(x^2+1\\right)^2}=\\frac{Ax+B}{x^2+1}+\\frac{Cx+D}{\\left(x^2+1\\right)^2}.$$ ✓

Multiplying through by $\\left(x^2+1\\right)^2$ and expanding:
$$x^3+x^2+2x+1=(Ax+B)\\left(x^2+1\\right)+Cx+D=Ax^3+Bx^2+(A+C)x+(B+D).$$ ✓

Comparing coefficients of like powers: $x^3:\\;A=1$; $x^2:\\;B=1$; $x^1:\\;A+C=2\\;\\Rightarrow\\;C=2-1=1$; $x^0:\\;B+D=1\\;\\Rightarrow\\;D=1-1=0$. ✓✓

So the integrand is $\\dfrac{x+1}{x^2+1}+\\dfrac{x}{\\left(x^2+1\\right)^2}$. For the two terms with $x$ on top, let $w=x^2+1$, $dw=2x\\,dx$:
$$\\int\\frac{x}{x^2+1}\\,dx=\\frac12\\int\\frac{dw}{w}=\\frac12\\ln\\left(x^2+1\\right),\\qquad\\int\\frac{x}{\\left(x^2+1\\right)^2}\\,dx=\\frac12\\int w^{-2}dw=-\\frac{1}{2w}=-\\frac{1}{2\\left(x^2+1\\right)}.$$ ✓

The remaining term is a standard form, $\\displaystyle\\int\\frac{dx}{x^2+1}=\\arctan x$. Adding the three pieces:
$$\\int\\frac{x^3+x^2+2x+1}{\\left(x^2+1\\right)^2}\\,dx=\\frac12\\ln\\left(x^2+1\\right)+\\arctan x-\\frac{1}{2\\left(x^2+1\\right)}+C.$$ ✓
        `
      }
    ]
  },

  // =====================================================================
  // PRACTICE PAPER 10
  // =====================================================================
  {
    id: 'paper10', label: 'Practice Paper 10', date: 'Practice Test J', totalMarks: 52, duration: 60,
    questions: [
      {
        number: 1, title: 'Curve sketching (rational function with a slant asymptote)', section: '§6.5', marks: 12,
        prompt: `
Let $\\displaystyle f(x)=\\frac{x^2-4x+5}{x-1}$.

**(a)** Find the $x$- and $y$-intercepts of $f$. (2)

**(b)** Use polynomial division to find the vertical and slant asymptotes. (2)

**(c)** Find $f'(x)$ and determine the intervals of increase/decrease and all local extrema. (3)

**(d)** Find $f''(x)$ and determine the concavity. (3)

**(e)** Sketch the graph, showing the asymptotes and stationary points. (2)
        `,
        solution: `
**(a)** Completing the square in the numerator: $x^2-4x+5=(x^2-4x+4)+1=(x-2)^2+1\\ge1>0$ for every $x$, so the numerator never vanishes and $f$ has **no $x$-intercepts**. ✓

$y$-intercept: $f(0)=\\dfrac{0-0+5}{0-1}=\\dfrac{5}{-1}=-5$, giving the point $(0,-5)$. ✓

**(b)** Dividing $x^2-4x+5$ by $x-1$ gives quotient $x-3$ and remainder $2$, since $(x-1)(x-3)+2=(x^2-4x+3)+2=x^2-4x+5$. Hence
$$f(x)=x-3+\\frac{2}{x-1}.$$ ✓

The denominator vanishes at $x=1$ while the remainder there is $2\\neq0$, so $x=1$ is a **vertical asymptote**. Since $\\dfrac{2}{x-1}\\to0$ as $x\\to\\pm\\infty$, the **slant asymptote** is $y=x-3$. ✓

**(c)** Differentiating the divided form $f(x)=x-3+2(x-1)^{-1}$ by the power and chain rules:
$$f'(x)=1-2(x-1)^{-2}=1-\\frac{2}{(x-1)^2}=\\frac{(x-1)^2-2}{(x-1)^2}.$$ ✓

$f'(x)=0\\;\\Rightarrow\\;(x-1)^2=2\\;\\Rightarrow\\;x=1\\pm\\sqrt2$; $f'$ is undefined only at $x=1$, which is not in the domain. ✓

Since $(x-1)^2>0$, $f'$ takes the sign of $(x-1)^2-2$. Sign chart on $(-\\infty,1-\\sqrt2),\\,(1-\\sqrt2,1),\\,(1,1+\\sqrt2),\\,(1+\\sqrt2,\\infty)$ with test values $x=-1,0,\\tfrac32,\\tfrac52$: $f'=\\tfrac12>0,\\;-1<0,\\;-7<0,\\;\\tfrac19>0$. So $f$ is increasing on $(-\\infty,1-\\sqrt2)$ and $(1+\\sqrt2,\\infty)$, decreasing on $(1-\\sqrt2,1)$ and $(1,1+\\sqrt2)$, with a **local maximum** at $x=1-\\sqrt2$, $f=-2-2\\sqrt2$, and a **local minimum** at $x=1+\\sqrt2$, $f=-2+2\\sqrt2$. ✓

**(d)** Differentiating $f'(x)=1-2(x-1)^{-2}$ again by the power and chain rules:
$$f''(x)=-2\\cdot(-2)(x-1)^{-3}=\\frac{4}{(x-1)^3}.$$ ✓

$f''$ is never zero, and its sign is the sign of $(x-1)^3$: negative for $x<1$, positive for $x>1$. ✓

So $f$ is **concave down on $(-\\infty,1)$** and **concave up on $(1,\\infty)$**, with no point of inflection, since the sign change occurs only at $x=1$, which is excluded from the domain. This confirms (c) by the second-derivative test: $f''(1-\\sqrt2)=\\dfrac{4}{-2\\sqrt2}=-\\sqrt2<0$ (maximum), $f''(1+\\sqrt2)=\\dfrac{4}{2\\sqrt2}=\\sqrt2>0$ (minimum). ✓

**(e)** See the graph below — it shows the vertical asymptote $x=1$, the slant asymptote $y=x-3$, the $y$-intercept $(0,-5)$ and no $x$-intercepts. ✓

It also shows the stationary points from (c): the local maximum $\\left(1-\\sqrt2,-2-2\\sqrt2\\right)$ on the left branch and the local minimum $\\left(1+\\sqrt2,-2+2\\sqrt2\\right)$ on the right branch. ✓
        `,
        graph: {
          fn: x => (x * x - 4 * x + 5) / (x - 1),
          domain: [-7, 8],
          breaks: [1],
          vAsymptotes: [1],
          slant: { m: 1, c: -3 },
          yRange: [-12, 10],
          intercepts: [{ x: 0, y: -5 }],
          extrema: [
            { x: 1 - Math.sqrt(2), y: -2 - 2 * Math.sqrt(2), type: 'max' },
            { x: 1 + Math.sqrt(2), y: -2 + 2 * Math.sqrt(2), type: 'min' }
          ],
          title: 'f(x) = (x²-4x+5)/(x-1)'
        }
      },
      {
        number: 2, title: 'Optimization — open rectangular box', section: '§6.6', marks: 6,
        prompt: `An open rectangular box has a square-width base: its length is twice its width. Its volume is $288\\text{ cm}^3$. Find the dimensions that minimise the surface area.` ,
        solution: `
Let the width be $x$ cm, the length $2x$ cm and the height $h$ cm. The volume constraint gives
$$V=(2x)(x)h=2x^2h=288\\;\\Rightarrow\\;h=\\frac{288}{2x^2}=\\frac{144}{x^2}.$$ ✓

The box is open-topped, so the material is the base plus four walls: the base measures $2x\\times x$, two walls measure $x\\times h$ and two measure $2x\\times h$. Substituting the constraint to reduce to one variable:
$$S(x)=2x^2+2(xh)+2(2xh)=2x^2+6xh=2x^2+6x\\cdot\\frac{144}{x^2}=2x^2+\\frac{864}{x},\\qquad x>0.$$ ✓

Differentiating and setting equal to zero:
$$S'(x)=4x-\\frac{864}{x^2}=0\\;\\Rightarrow\\;4x^3=864\\;\\Rightarrow\\;x^3=216\\;\\Rightarrow\\;x=6.$$ ✓✓

Second-derivative test: $S''(x)=4+\\dfrac{1728}{x^3}$, so $S''(6)=4+\\dfrac{1728}{216}=4+8=12>0$, confirming that $x=6$ gives a **minimum**. ✓

Back-substituting: $h=\\dfrac{144}{6^2}=\\dfrac{144}{36}=4$ cm, the length is $2x=12$ cm, and
$$S(6)=2(36)+\\frac{864}{6}=72+144=216\\text{ cm}^2.$$ ✓

**Length $12\\text{ cm}$, width $6\\text{ cm}$, height $4\\text{ cm}$, giving minimum surface area $216\\text{ cm}^2$.**
        `
      },
      {
        number: 3, title: 'Volume of revolution involving a logarithm', section: '§8', marks: 8,
        prompt: `Let $R$ be the region bounded by $y=\\ln x$, $y=0$, $x=1$ and $x=e$. Find the volume generated when $R$ is revolved about the $x$-axis.` ,
        solution: `
On $[1,e]$, $\\ln x\\ge0$ (as $\\ln1=0$, $\\ln e=1$), so $R$ lies above the $x$-axis and a vertical strip sweeps a **disk** of radius $R(x)=\\ln x$. ✓

By the disk method,
$$V=\\pi\\int_1^e\\big[R(x)\\big]^2dx=\\pi\\int_1^e(\\ln x)^2\\,dx.$$ ✓

Integrate by parts: let $u=(\\ln x)^2$, $dv=dx$, so $du=\\dfrac{2\\ln x}{x}\\,dx$ and $v=x$. ✓✓

Then $uv-\\displaystyle\\int v\\,du$ gives
$$\\int(\\ln x)^2dx=x(\\ln x)^2-\\int x\\cdot\\frac{2\\ln x}{x}\\,dx=x(\\ln x)^2-2\\int\\ln x\\,dx.$$ ✓

Apply parts again to $\\int\\ln x\\,dx$ with $u=\\ln x$, $dv=dx$, so $du=\\dfrac1x\\,dx$, $v=x$: $\\displaystyle\\int\\ln x\\,dx=x\\ln x-\\int1\\,dx=x\\ln x-x$. ✓

Hence the antiderivative is
$$\\int(\\ln x)^2dx=x(\\ln x)^2-2\\big(x\\ln x-x\\big)=x\\big[(\\ln x)^2-2\\ln x+2\\big].$$ ✓

Evaluating between the limits, using $\\ln e=1$, $\\ln1=0$:
$$V=\\pi\\Big[x\\big((\\ln x)^2-2\\ln x+2\\big)\\Big]_1^e=\\pi\\Big(e(1-2+2)-1(0-0+2)\\Big)=\\pi(e-2).$$ ✓

**Volume $=\\pi(e-2)\\approx2.26$ cubic units.**
        `
      },
      {
        number: 4, title: 'Proof: Integration by substitution', section: '§8', marks: 8,
        prompt: `
Let $g$ be differentiable on $[a,b]$ and let $f$ be continuous on the range of $g$. Prove the change-of-variables formula
$$\\int_a^b f\\big(g(x)\\big)g'(x)\\,dx=\\int_{g(a)}^{g(b)}f(u)\\,du.$$ (8)
        `,
        solution: `
Since $f$ is continuous, define $F(u)=\\int_{g(a)}^u f(t)\\,dt$. By the Fundamental Theorem of Calculus, $F'(u)=f(u)$. ✓✓

Apply the Chain Rule to $F(g(x))$:
$$\\frac{d}{dx}F(g(x))=F'(g(x))g'(x)=f(g(x))g'(x).$$ ✓✓

Thus $F(g(x))$ is an antiderivative of the integrand. The Fundamental Theorem of Calculus gives
$$\\int_a^b f(g(x))g'(x)\\,dx=F(g(b))-F(g(a))=\\int_{g(a)}^{g(b)}f(u)\\,du.$$ ✓✓✓
This proves the formula. $\\blacksquare$ ✓
        `
      },
      {
        number: 5, title: 'Inverse trigonometric, exponential and logarithmic integrals', section: '§9.1', marks: 6,
        prompt: `
Evaluate each integral.

**(a)** $\\displaystyle\\int\\frac{dx}{\\sqrt{16-25x^2}}$ (2)

**(b)** $\\displaystyle\\int\\frac{dx}{x^2-4x+8}$ (2)

**(c)** $\\displaystyle\\int3^{2x+1}\\,dx$ (1)

**(d)** $\\displaystyle\\int\\frac{2x-3}{x^2-3x+7}\\,dx$ (1)
        `,
        solution: `
**(a)** Write $16-25x^2=4^2-(5x)^2$ and substitute $u=5x$, $du=5\\,dx$, so $dx=\\tfrac15\\,du$: ✓
$$\\int\\frac{dx}{\\sqrt{16-25x^2}}=\\frac15\\int\\frac{du}{\\sqrt{4^2-u^2}}=\\frac15\\arcsin\\!\\left(\\frac{u}{4}\\right)+C=\\frac15\\arcsin\\!\\left(\\frac{5x}{4}\\right)+C.$$ ✓

**(b)** Complete the square: $x^2-4x+8=(x^2-4x+4)+4=(x-2)^2+4$. ✓

Using $\\displaystyle\\int\\frac{dt}{t^2+a^2}=\\frac1a\\arctan\\!\\left(\\frac{t}{a}\\right)+C$ with $t=x-2$ and $a=2$:
$$\\int\\frac{dx}{x^2-4x+8}=\\int\\frac{dx}{(x-2)^2+4}=\\frac12\\arctan\\!\\left(\\frac{x-2}{2}\\right)+C.$$ ✓

**(c)** Let $u=2x+1$, $du=2\\,dx$, and use $\\displaystyle\\int a^u\\,du=\\frac{a^u}{\\ln a}+C$ with $a=3$:
$$\\int3^{2x+1}\\,dx=\\frac12\\int3^u\\,du=\\frac{3^u}{2\\ln3}+C=\\frac{3^{2x+1}}{2\\ln3}+C.$$ ✓

**(d)** Here $\\dfrac{d}{dx}\\left(x^2-3x+7\\right)=2x-3$, which is exactly the numerator, so the integral has the form $\\displaystyle\\int\\frac{f'(x)}{f(x)}\\,dx=\\ln|f(x)|+C$:
$$\\int\\frac{2x-3}{x^2-3x+7}\\,dx=\\ln\\!\\left(x^2-3x+7\\right)+C,$$
where no modulus is needed since the discriminant $(-3)^2-4(7)=-19<0$ makes $x^2-3x+7>0$ for all $x$. ✓
        `
      },
      {
        number: 6, title: 'Integration by parts with exponential and trigonometric factors', section: '§9.2', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int e^{2x}\\sin(3x)\\,dx$.`,
        solution: `
This is the "circular" case: parts returns an integral of the same type, so set $I=\\displaystyle\\int e^{2x}\\sin(3x)\\,dx$ and $J=\\displaystyle\\int e^{2x}\\cos(3x)\\,dx$ and build two equations.

For $I$, let $u=e^{2x}$, $dv=\\sin(3x)\\,dx$, so $du=2e^{2x}\\,dx$ and $v=-\\tfrac13\\cos(3x)$. ✓

$$I=-\\frac13e^{2x}\\cos(3x)+\\frac23\\int e^{2x}\\cos(3x)\\,dx=-\\frac13e^{2x}\\cos(3x)+\\frac23J.$$ ✓

For $J$, apply parts again with $u=e^{2x}$, $dv=\\cos(3x)\\,dx$, so $du=2e^{2x}\\,dx$ and $v=\\tfrac13\\sin(3x)$. ✓

$$J=\\frac13e^{2x}\\sin(3x)-\\frac23\\int e^{2x}\\sin(3x)\\,dx=\\frac13e^{2x}\\sin(3x)-\\frac23I.$$ ✓

Substituting the second equation into the first and solving algebraically for $I$:
$$I=-\\frac13e^{2x}\\cos(3x)+\\frac29e^{2x}\\sin(3x)-\\frac49I\\;\\Rightarrow\\;\\frac{13}{9}I=\\frac{e^{2x}}{9}\\big(2\\sin(3x)-3\\cos(3x)\\big).$$ ✓

$$I=\\frac{e^{2x}}{13}\\big(2\\sin(3x)-3\\cos(3x)\\big)+C.$$ ✓
        `
      },
      {
        number: 7, title: 'Partial fractions (improper fraction with a repeated factor)', section: '§9.5', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int\\frac{2x^3+3x^2+x+4}{x^2(x+1)}\\,dx$.`,
        solution: `
The numerator has degree $3$ and the denominator $x^2(x+1)$ also has degree $3$, so the fraction is **improper** and must be divided first. Since $2x^2(x+1)=2x^3+2x^2$, the remainder is $\\left(2x^3+3x^2+x+4\\right)-\\left(2x^3+2x^2\\right)=x^2+x+4$, giving
$$\\frac{2x^3+3x^2+x+4}{x^2(x+1)}=2+\\frac{x^2+x+4}{x^2(x+1)}.$$ ✓

The denominator has the repeated linear factor $x^2$ and the distinct linear factor $x+1$, so the correct form is
$$\\frac{x^2+x+4}{x^2(x+1)}=\\frac{A}{x}+\\frac{B}{x^2}+\\frac{C}{x+1}\\;\\Rightarrow\\;x^2+x+4=Ax(x+1)+B(x+1)+Cx^2.$$ ✓

Setting $x=0$: $\\;0+0+4=B(1)\\;\\Rightarrow\\;B=4$.
Setting $x=-1$: $\\;1-1+4=C(-1)^2\\;\\Rightarrow\\;C=4$.
Comparing the coefficients of $x^2$: $\\;1=A+C\\;\\Rightarrow\\;A=1-4=-3$. ✓✓

Integrating term by term, with $\\displaystyle\\int\\frac{4}{x^2}\\,dx=4\\cdot\\frac{x^{-1}}{-1}=-\\frac4x$:
$$\\int\\left(2-\\frac{3}{x}+\\frac{4}{x^2}+\\frac{4}{x+1}\\right)dx$$ ✓

$$=2x-3\\ln|x|-\\frac4x+4\\ln|x+1|+C.$$ ✓
        `
      }
    ]
  },

  // =====================================================================
  // PRACTICE PAPER 11
  // =====================================================================
  {
    id: 'paper11', label: 'Practice Paper 11', date: 'Practice Test K', totalMarks: 52, duration: 60,
    questions: [
      {
        number: 1, title: 'Curve sketching (quintic polynomial)', section: '§6.5', marks: 12,
        prompt: `
Let $f(x)=x^5-5x^3$.

**(a)** Find all intercepts and describe the end behaviour. (2)

**(b)** Find $f'(x)$, and hence determine the intervals of increase/decrease and all local extrema. (4)

**(c)** Find $f''(x)$, and hence determine the concavity and points of inflection. (4)

**(d)** Sketch the graph, marking the stationary and inflection points. (2)
        `,
        solution: `
**(a)** Factorise: $f(x)=x^5-5x^3=x^3\\left(x^2-5\\right)$. Setting $f(x)=0$ gives $x=0$ (a **triple** root) or $x^2=5$, so the $x$-intercepts are $\\left(-\\sqrt5,0\\right)$, $(0,0)$ and $\\left(\\sqrt5,0\\right)$; the $y$-intercept is $f(0)=0$, i.e. the origin. ✓

End behaviour: the leading term is $x^5$, an **odd** power with positive coefficient, so the two ends go opposite ways — $f(x)\\to-\\infty$ as $x\\to-\\infty$ and $f(x)\\to+\\infty$ as $x\\to+\\infty$. ✓

**(b)** Differentiating term by term with the power rule, then factorising:
$$f'(x)=5x^4-15x^2=5x^2\\left(x^2-3\\right).$$ ✓

$f'(x)=0 \\;\\Rightarrow\\; 5x^2\\left(x^2-3\\right)=0 \\;\\Rightarrow\\; x=0$ (a double root) or $x=\\pm\\sqrt3$. ✓

Since $5x^2\\ge0$ for every $x$, the sign of $f'$ is the sign of $\\left(x^2-3\\right)$. Sign chart on $\\left(-\\infty,-\\sqrt3\\right),\\left(-\\sqrt3,0\\right),\\left(0,\\sqrt3\\right),\\left(\\sqrt3,\\infty\\right)$: $f'>0$ ($f'(-2)=80-60=20$), $f'<0$ ($f'(-1)=5-15=-10$), $f'<0$ ($f'(1)=-10$), $f'>0$ ($f'(2)=20$). ✓

So $f$ is increasing on $\\left(-\\infty,-\\sqrt3\\right)$ and $\\left(\\sqrt3,\\infty\\right)$, and decreasing on $\\left(-\\sqrt3,0\\right)$ and $\\left(0,\\sqrt3\\right)$. **Local maximum** at $x=-\\sqrt3$, $f\\left(-\\sqrt3\\right)=-9\\sqrt3+15\\sqrt3=6\\sqrt3$; **local minimum** at $x=\\sqrt3$, $f\\left(\\sqrt3\\right)=9\\sqrt3-15\\sqrt3=-6\\sqrt3$. At $x=0$ the tangent is horizontal but $f'$ **does not change sign** (negative on both sides), so the origin is a stationary point that is **not** an extremum. ✓

**(c)** Differentiating again:
$$f''(x)=20x^3-30x=10x\\left(2x^2-3\\right).$$ ✓

$f''(x)=0 \\;\\Rightarrow\\; x=0$ or $x^2=\\dfrac32$, i.e. $x=\\pm\\sqrt{\\dfrac32}=\\pm\\dfrac{\\sqrt6}{2}\\approx\\pm1.22$. ✓

Sign chart on $\\left(-\\infty,-\\frac{\\sqrt6}{2}\\right),\\left(-\\frac{\\sqrt6}{2},0\\right),\\left(0,\\frac{\\sqrt6}{2}\\right),\\left(\\frac{\\sqrt6}{2},\\infty\\right)$: $f''<0$ ($f''(-2)=-160+60=-100$), $f''>0$ ($f''(-1)=-20+30=10$), $f''<0$ ($f''(1)=-10$), $f''>0$ ($f''(2)=100$). ✓

So $f$ is concave down on $\\left(-\\infty,-\\frac{\\sqrt6}{2}\\right)$ and $\\left(0,\\frac{\\sqrt6}{2}\\right)$, and concave up on $\\left(-\\frac{\\sqrt6}{2},0\\right)$ and $\\left(\\frac{\\sqrt6}{2},\\infty\\right)$. The concavity changes at all three zeros, so all three are **points of inflection**; using $f\\!\\left(\\pm\\frac{\\sqrt6}{2}\\right)=\\pm\\frac{\\sqrt6}{2}\\left(\\frac94-\\frac{15}{2}\\right)=\\mp\\frac{21\\sqrt6}{8}$ they are
$$\\left(-\\frac{\\sqrt6}{2},\\frac{21\\sqrt6}{8}\\right),\\quad(0,0),\\quad\\left(\\frac{\\sqrt6}{2},-\\frac{21\\sqrt6}{8}\\right).$$ ✓

**(d)** See the graph below — since $f(-x)=-f(x)$ the curve is **odd**, with rotational symmetry about the origin. It shows the $x$-intercepts at $-\\sqrt5$, $0$ and $\\sqrt5$, the local maximum at $\\left(-\\sqrt3,6\\sqrt3\\right)\\approx(-1.73,10.39)$, the local minimum at $\\left(\\sqrt3,-6\\sqrt3\\right)\\approx(1.73,-10.39)$, the flat stationary point at the origin, and the three inflection points $\\left(\\mp\\frac{\\sqrt6}{2},\\pm\\frac{21\\sqrt6}{8}\\right)\\approx(\\mp1.22,\\pm6.43)$ and $(0,0)$, with the ends falling to $-\\infty$ on the left and rising to $+\\infty$ on the right. ✓✓
        `,
        graph: {
          fn: x => Math.pow(x, 5) - 5 * Math.pow(x, 3),
          domain: [-3.2, 3.2],
          yRange: [-30, 30],
          intercepts: [{ x: -Math.sqrt(5), y: 0 }, { x: 0, y: 0 }, { x: Math.sqrt(5), y: 0 }],
          extrema: [
            { x: -Math.sqrt(3), y: 6 * Math.sqrt(3), type: 'max' },
            { x: Math.sqrt(3), y: -6 * Math.sqrt(3), type: 'min' }
          ],
          inflection: [
            { x: -Math.sqrt(1.5), y: 21 * Math.sqrt(6) / 8 },
            { x: 0, y: 0 },
            { x: Math.sqrt(1.5), y: -21 * Math.sqrt(6) / 8 }
          ],
          title: 'f(x) = x⁵-5x³'
        }
      },
      {
        number: 2, title: 'Optimization — cylinder inscribed in a sphere', section: '§6.6', marks: 6,
        prompt: `A right circular cylinder is inscribed in a sphere of radius $R$. Find the radius and height of the cylinder that maximise its volume, in terms of $R$.`,
        solution: `
Let the cylinder have radius $r$ and height $h$. By symmetry its axis passes through the centre of the sphere, so an axial cross-section gives a right triangle with legs $r$ and $\\dfrac h2$ and hypotenuse $R$. The constraint is therefore
$$r^2+\\left(\\frac h2\\right)^2=R^2 \\;\\Rightarrow\\; h=2\\sqrt{R^2-r^2},\\qquad 0\\le r\\le R.$$ ✓

Substituting into $V=\\pi r^2h$ leaves the objective function in the single variable $r$:
$$V(r)=\\pi r^2\\cdot2\\sqrt{R^2-r^2}=2\\pi r^2\\left(R^2-r^2\\right)^{1/2}.$$ ✓

By the product rule, with the chain rule giving $\\dfrac{d}{dr}\\left(R^2-r^2\\right)^{1/2}=-r\\left(R^2-r^2\\right)^{-1/2}$:
$$V'(r)=4\\pi r\\sqrt{R^2-r^2}-\\frac{2\\pi r^3}{\\sqrt{R^2-r^2}}=\\frac{2\\pi r\\left[2\\left(R^2-r^2\\right)-r^2\\right]}{\\sqrt{R^2-r^2}}=\\frac{2\\pi r\\left(2R^2-3r^2\\right)}{\\sqrt{R^2-r^2}}.$$ ✓✓

For $0< r< R$ the factors $2\\pi r$ and $\\sqrt{R^2-r^2}$ are positive, so $V'(r)=0 \\;\\Rightarrow\\; 2R^2-3r^2=0 \\;\\Rightarrow\\; r^2=\\dfrac23R^2$, giving $r=R\\sqrt{\\dfrac23}=\\dfrac{\\sqrt6}{3}R$ and
$$h=2\\sqrt{R^2-\\tfrac23R^2}=2\\sqrt{\\tfrac13R^2}=\\frac{2R}{\\sqrt3}=\\frac{2\\sqrt3}{3}R.$$ ✓

Justification: the sign of $V'$ is the sign of $2R^2-3r^2$, which is positive for $r<\\frac{\\sqrt6}{3}R$ (e.g. $V'>0$ at $r=\\tfrac12R$) and negative for $r>\\frac{\\sqrt6}{3}R$ (e.g. $V'<0$ at $r=\\tfrac9{10}R$); since also $V(0)=V(R)=0$, this interior critical point gives the **absolute maximum**. ✓

Then $V=\\pi\\left(\\tfrac23R^2\\right)\\left(\\tfrac{2\\sqrt3}{3}R\\right)=\\dfrac{4\\sqrt3}{9}\\pi R^3$.

**Radius $r=\\dfrac{\\sqrt6}{3}R\\approx0.816R$, height $h=\\dfrac{2\\sqrt3}{3}R\\approx1.155R$, giving maximum volume $\\dfrac{4\\sqrt3}{9}\\pi R^3$.**
        `
      },
      {
        number: 3, title: 'Volume by cylindrical shells', section: '§8', marks: 8,
        prompt: `Let $R$ be the region bounded by $y=\\ln x$, $y=0$, $x=1$ and $x=e$. Find the volume generated when $R$ is revolved about the $y$-axis.`,
        solution: `
The region is bounded by vertical strips over $1\\le x\\le e$ and is revolved about the $y$-axis, so the **method of cylindrical shells** applies directly (no need to invert $y=\\ln x$). A shell at position $x$ has radius $x$, height $\\ln x-0=\\ln x$ and thickness $dx$, so its volume is $2\\pi x\\ln x\\,dx$. ✓✓

$$V=2\\pi\\int_1^e x\\ln x\\,dx.$$ ✓

Integrate by parts, choosing the logarithm as $u$ since it simplifies on differentiation: let $u=\\ln x$, $dv=x\\,dx$, so that $du=\\dfrac1x\\,dx$ and $v=\\dfrac{x^2}{2}$. ✓✓

$$\\int x\\ln x\\,dx=\\frac{x^2}{2}\\ln x-\\int\\frac{x^2}{2}\\cdot\\frac1x\\,dx=\\frac{x^2}{2}\\ln x-\\frac12\\int x\\,dx=\\frac{x^2}{2}\\ln x-\\frac{x^2}{4}.$$ ✓

Evaluating between the limits, using $\\ln e=1$ and $\\ln1=0$:
$$V=2\\pi\\left[\\frac{x^2}{2}\\ln x-\\frac{x^2}{4}\\right]_1^e=2\\pi\\left[\\left(\\frac{e^2}{2}-\\frac{e^2}{4}\\right)-\\left(0-\\frac14\\right)\\right]$$ ✓

$$=2\\pi\\left(\\frac{e^2}{4}+\\frac14\\right)=\\frac{\\pi\\left(e^2+1\\right)}{2}.$$ ✓

**Volume $=\\dfrac{\\pi\\left(e^2+1\\right)}{2}\\approx13.18$ cubic units.**
        `
      },
      {
        number: 4, title: 'Proof: Mean Value Theorem for Integrals', section: '§8', marks: 8,
        prompt: `
Let $f$ be continuous on $[a,b]$, with $a< b$. Prove that there exists $c\\in[a,b]$ such that
$$\\int_a^b f(x)\\,dx=f(c)(b-a).$$ (8)
        `,
        solution: `
Because $f$ is continuous on the closed interval $[a,b]$, it attains a minimum $m$ and maximum $M$. Thus $m\\le f(x)\\le M$ for all $x\\in[a,b]$. Integrating preserves the inequalities:
$$m(b-a)\\le\\int_a^b f(x)\\,dx\\le M(b-a).$$ ✓✓✓

Divide by $b-a>0$ and set $A=\\dfrac1{b-a}\\int_a^b f(x)dx$. Then $m\\le A\\le M$. ✓✓

By the Intermediate Value Theorem, $f$ takes every value between $m$ and $M$, so there is a $c\\in[a,b]$ with $f(c)=A$. Therefore
$$\\int_a^b f(x)\\,dx=(b-a)f(c).$$
This proves the result. $\\blacksquare$ ✓✓✓
        `
      },
      {
        number: 5, title: 'Inverse trigonometric, exponential and logarithmic integrals', section: '§9.1', marks: 6,
        prompt: `
Evaluate each integral.

**(a)** $\\displaystyle\\int\\frac{dx}{\\sqrt{9-16x^2}}$ (2)

**(b)** $\\displaystyle\\int\\frac{dx}{4x^2-4x+5}$ (2)

**(c)** $\\displaystyle\\int e^{5-2x}\\,dx$ (1)

**(d)** $\\displaystyle\\int\\frac{\\cos x}{1+\\sin x}\\,dx$ (1)
        `,
        solution: `
**(a)** Write the radicand as a difference of squares, $9-16x^2=3^2-(4x)^2$, so the integral matches $\\displaystyle\\int\\frac{du}{\\sqrt{a^2-u^2}}=\\arcsin\\!\\left(\\frac ua\\right)+C$ with $a=3$. Let $u=4x$, $du=4\\,dx$, i.e. $dx=\\tfrac14\\,du$:
$$\\int\\frac{dx}{\\sqrt{9-16x^2}}=\\frac14\\int\\frac{du}{\\sqrt{9-u^2}}=\\frac14\\arcsin\\!\\left(\\frac u3\\right)+C=\\frac14\\arcsin\\!\\left(\\frac{4x}{3}\\right)+C.$$ ✓✓

**(b)** Complete the square: $4x^2-4x+5=\\left(4x^2-4x+1\\right)+4=(2x-1)^2+4$. ✓
Let $u=2x-1$, $du=2\\,dx$, and apply $\\displaystyle\\int\\frac{du}{u^2+a^2}=\\frac1a\\arctan\\!\\left(\\frac ua\\right)+C$ with $a=2$:
$$\\int\\frac{dx}{4x^2-4x+5}=\\frac12\\int\\frac{du}{u^2+4}=\\frac12\\cdot\\frac12\\arctan\\!\\left(\\frac u2\\right)+C=\\frac14\\arctan\\!\\left(\\frac{2x-1}{2}\\right)+C.$$ ✓

**(c)** Let $u=5-2x$, so $du=-2\\,dx$ and $dx=-\\tfrac12\\,du$:
$$\\int e^{5-2x}\\,dx=-\\frac12\\int e^u\\,du=-\\frac12e^u+C=-\\frac12e^{5-2x}+C.$$ ✓

**(d)** With $f(x)=1+\\sin x$ we have $f'(x)=\\cos x$, so the integrand is exactly $\\dfrac{f'(x)}{f(x)}$ and $\\displaystyle\\int\\frac{f'(x)}{f(x)}\\,dx=\\ln|f(x)|+C$:
$$\\int\\frac{\\cos x}{1+\\sin x}\\,dx=\\ln|1+\\sin x|+C.$$ ✓
        `
      },
      {
        number: 6, title: 'Integration by parts with a logarithmic factor', section: '§9.2', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int\\frac{\\ln x}{x^2}\\,dx$, for $x>0$.`,
        solution: `
The integrand is the product of $\\ln x$ (simple to differentiate, awkward to integrate) and $x^{-2}$ (simple to integrate), so integrate by parts with the logarithm as $u$.

Let $u=\\ln x$ and $dv=x^{-2}\\,dx$, so that
$$du=\\frac1x\\,dx,\\qquad v=\\int x^{-2}\\,dx=\\frac{x^{-1}}{-1}=-\\frac1x.$$ ✓✓

Applying $\\displaystyle\\int u\\,dv=uv-\\int v\\,du$:
$$\\int\\frac{\\ln x}{x^2}\\,dx=\\left(\\ln x\\right)\\left(-\\frac1x\\right)-\\int\\left(-\\frac1x\\right)\\cdot\\frac1x\\,dx=-\\frac{\\ln x}{x}+\\int\\frac{dx}{x^2}.$$ ✓✓

The remaining integral is elementary, $\\displaystyle\\int x^{-2}\\,dx=-\\frac1x$, so
$$\\int\\frac{\\ln x}{x^2}\\,dx=-\\frac{\\ln x}{x}-\\frac1x+C=-\\frac{\\ln x+1}{x}+C.$$ ✓✓
        `
      },
      {
        number: 7, title: 'Partial fractions (three distinct linear factors)', section: '§9.5', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int\\frac{2x^2-x+5}{(x-1)(x+2)(x-3)}\\,dx$.`,
        solution: `
The integrand is proper (degree $2$ over degree $3$) and the denominator is already factorised into three **distinct linear factors**, so each contributes a single constant numerator:
$$\\frac{2x^2-x+5}{(x-1)(x+2)(x-3)}=\\frac{A}{x-1}+\\frac{B}{x+2}+\\frac{C}{x-3}.$$
Multiplying both sides by $(x-1)(x+2)(x-3)$ clears the denominators:
$$2x^2-x+5=A(x+2)(x-3)+B(x-1)(x-3)+C(x-1)(x+2).$$ ✓

This is an identity in $x$, so substituting the root of each factor kills two terms and isolates one constant at a time.

Setting $x=1$: $\\;2-1+5=6=A(3)(-2)=-6A \\;\\Rightarrow\\; A=-1$. ✓

Setting $x=-2$: $\\;8+2+5=15=B(-3)(-5)=15B \\;\\Rightarrow\\; B=1$. ✓

Setting $x=3$: $\\;18-3+5=20=C(2)(5)=10C \\;\\Rightarrow\\; C=2$. ✓

Integrating term by term, each piece having the standard form $\\displaystyle\\int\\frac{dx}{x-k}=\\ln|x-k|+C$:
$$\\int\\frac{2x^2-x+5}{(x-1)(x+2)(x-3)}\\,dx=\\int\\left(\\frac{-1}{x-1}+\\frac{1}{x+2}+\\frac{2}{x-3}\\right)dx$$ ✓

$$=-\\ln|x-1|+\\ln|x+2|+2\\ln|x-3|+C.$$ ✓
        `
      }
    ]
  },

  // =====================================================================
  // PRACTICE PAPER 12
  // =====================================================================
  {
    id: 'paper12', label: 'Practice Paper 12', date: 'Practice Test L', totalMarks: 52, duration: 60,
    questions: [
      {
        number: 1, title: 'Curve sketching (even sextic polynomial)', section: '§6.5', marks: 12,
        prompt: `
Let $f(x)=x^6-3x^4$.

**(a)** Find the intercepts and describe the end behaviour. (2)

**(b)** Find $f'(x)$ and determine the intervals of increase/decrease and all local extrema. (4)

**(c)** Find $f''(x)$ and determine the concavity and points of inflection. (4)

**(d)** Sketch the graph, using its symmetry. (2)
        `,
        solution: `
**(a)** Factor out the highest common power of $x$: $f(x)=x^4\\left(x^2-3\\right)$, so $f(x)=0$ when $x^4=0$ or $x^2=3$. The $x$-intercepts are therefore $x=0$ (a root of multiplicity four) and $x=\\pm\\sqrt3$; the $y$-intercept is $f(0)=0$, i.e. the origin $(0,0)$. ✓
The leading term $x^6$ has even degree and positive coefficient, so it dominates for large $|x|$ and $f(x)\\to+\\infty$ as $x\\to+\\infty$ **and** as $x\\to-\\infty$. Also $f(-x)=(-x)^6-3(-x)^4=x^6-3x^4=f(x)$, so $f$ is an **even** function, symmetric about the $y$-axis. ✓

**(b)** Differentiating term by term with the power rule and factorising:
$$f'(x)=6x^5-12x^3=6x^3\\left(x^2-2\\right)=6x^3\\left(x-\\sqrt2\\right)\\left(x+\\sqrt2\\right).$$ ✓
$f'(x)=0 \\;\\Rightarrow\\; x^3=0$ or $x^2=2$, so the critical points are $x=0$ and $x=\\pm\\sqrt2$. ✓
Sign chart on $\\left(-\\infty,-\\sqrt2\\right),\\left(-\\sqrt2,0\\right),\\left(0,\\sqrt2\\right),\\left(\\sqrt2,\\infty\\right)$ with test values $x=-2,-1,1,2$:
$$f'(-2)=-96<0,\\qquad f'(-1)=6>0,\\qquad f'(1)=-6<0,\\qquad f'(2)=96>0.$$ ✓
So $f$ is **decreasing** on $\\left(-\\infty,-\\sqrt2\\right)$ and $\\left(0,\\sqrt2\\right)$, and **increasing** on $\\left(-\\sqrt2,0\\right)$ and $\\left(\\sqrt2,\\infty\\right)$. By the First Derivative Test, $f'$ changes $-\\to+$ at $x=\\pm\\sqrt2$, giving **local minima** at $\\left(\\pm\\sqrt2,-4\\right)$ since $f\\!\\left(\\pm\\sqrt2\\right)=\\left(\\sqrt2\\right)^6-3\\left(\\sqrt2\\right)^4=8-12=-4$; and $f'$ changes $+\\to-$ at $x=0$, giving a **local maximum** at $(0,0)$. (The second-derivative test confirms the minima, as $f''\\!\\left(\\pm\\sqrt2\\right)=30(4)-36(2)=48>0$, but is inconclusive at $x=0$ where $f''(0)=0$.) ✓

**(c)** Differentiating $f'(x)=6x^5-12x^3$ once more:
$$f''(x)=30x^4-36x^2=6x^2\\left(5x^2-6\\right).$$ ✓
$f''(x)=0 \\;\\Rightarrow\\; x^2=0$ or $x^2=\\dfrac65$, i.e. $x=0$ or $x=\\pm\\sqrt{\\dfrac65}=\\pm\\dfrac{\\sqrt{30}}{5}\\approx\\pm1.095$. ✓
Since $6x^2\\ge0$ always, the sign of $f''$ is the sign of $5x^2-6$. Test values $x=-2,\\pm\\tfrac12,2$ give
$$f''(-2)=336>0,\\qquad f''\\!\\left(\\pm\\tfrac12\\right)=-\\tfrac{57}{8}<0,\\qquad f''(2)=336>0.$$ ✓
So $f$ is **concave up** on $\\left(-\\infty,-\\sqrt{6/5}\\right)$ and $\\left(\\sqrt{6/5},\\infty\\right)$, and **concave down** on $\\left(-\\sqrt{6/5},\\sqrt{6/5}\\right)$. The concavity changes at $x=\\pm\\sqrt{6/5}$ but **not** at $x=0$, where $f''$ vanishes yet stays negative on both sides. Hence the only **points of inflection** are
$$\\left(\\pm\\sqrt{\\frac65},\\,-\\frac{324}{125}\\right),\\qquad\\text{since } f\\!\\left(\\pm\\sqrt{\\tfrac65}\\right)=\\frac{216}{125}-3\\cdot\\frac{36}{25}=\\frac{216-540}{125}=-\\frac{324}{125}.$$ ✓

**(d)** See the graph below — being even, $f$ is symmetric about the $y$-axis, so only $x\\ge0$ need be plotted and then reflected. It passes through the intercepts $\\left(\\pm\\sqrt3,0\\right)$ and $(0,0)$, with the local maximum at $(0,0)$ and the two local minima at $\\left(\\pm\\sqrt2,-4\\right)$. ✓
The quadruple root makes the curve flat at the origin; it turns from concave down to concave up at the inflection points $\\left(\\pm\\sqrt{6/5},-\\tfrac{324}{125}\\right)$ before rising to $+\\infty$ on both sides. ✓
        `,
        graph: {
          fn: x => Math.pow(x, 6) - 3 * Math.pow(x, 4),
          domain: [-2.5, 2.5],
          yRange: [-6, 25],
          intercepts: [{ x: -Math.sqrt(3), y: 0 }, { x: 0, y: 0 }, { x: Math.sqrt(3), y: 0 }],
          extrema: [
            { x: -Math.sqrt(2), y: -4, type: 'min' },
            { x: 0, y: 0, type: 'max' },
            { x: Math.sqrt(2), y: -4, type: 'min' }
          ],
          inflection: [
            { x: -Math.sqrt(1.2), y: -324 / 125 },
            { x: Math.sqrt(1.2), y: -324 / 125 }
          ],
          title: 'f(x) = x⁶-3x⁴'
        }
      },
      {
        number: 2, title: 'Optimization — weighted cylindrical container', section: '§6.6', marks: 6,
        prompt: `A closed cylindrical container must have volume $500\\pi\\text{ cm}^3$. The cost per square centimetre of the base and top is twice the cost per square centimetre of the curved side. Find the radius and height that minimise the total cost.`,
        solution: `
Let $r$ be the radius and $h$ the height, both in cm. The volume constraint $\\pi r^2h=500\\pi$ gives
$$r^2h=500 \\;\\Rightarrow\\; h=\\frac{500}{r^2}.$$ ✓

Take the cost of the curved side as $1$ unit per $\\text{cm}^2$, so the top and base cost $2$ units per $\\text{cm}^2$. The top and base together have area $2\\pi r^2$ and the curved side has area $2\\pi rh$, so the total relative cost, written as a function of $r$ alone by substituting the constraint, is
$$C(r)=2\\left(2\\pi r^2\\right)+2\\pi rh=4\\pi r^2+2\\pi r\\cdot\\frac{500}{r^2}=4\\pi r^2+\\frac{1000\\pi}{r},\\qquad r>0.$$ ✓

Differentiating with the power rule, writing the second term as $1000\\pi r^{-1}$:
$$C'(r)=8\\pi r-\\frac{1000\\pi}{r^2}=0 \\;\\Rightarrow\\; 8\\pi r^3=1000\\pi \\;\\Rightarrow\\; r^3=125 \\;\\Rightarrow\\; r=5.$$ ✓✓

Second-derivative test: $C''(r)=8\\pi+\\dfrac{2000\\pi}{r^3}$, so
$$C''(5)=8\\pi+\\frac{2000\\pi}{125}=8\\pi+16\\pi=24\\pi>0,$$
and $r=5$ gives a **minimum** (it is the only critical point on $r>0$). ✓

Back-substituting, $h=\\dfrac{500}{5^2}=\\dfrac{500}{25}=20$, and the minimum relative cost is $C(5)=4\\pi(25)+\\dfrac{1000\\pi}{5}=100\\pi+200\\pi=300\\pi$ units. ✓

**Radius $5\\text{ cm}$ and height $20\\text{ cm}$ (so $h=4r$), giving minimum cost $300\\pi$ units.**
        `
      },
      {
        number: 3, title: 'Hydrostatic force on a triangular plate', section: '§8', marks: 8,
        prompt: `A vertical triangular plate is submerged in water with its top vertex at the surface and its horizontal base $3$ m below the surface. The triangle has width $3$ m at its base. Using water density $1000\\text{ kg/m}^3$ and $g=9.8\\text{ m/s}^2$, find the hydrostatic force on one face of the plate.`,
        solution: `
Measure $y$ **downwards** from the water surface, so the top vertex of the triangle sits at $y=0$ and the horizontal base at $y=3$. ✓

By similar triangles the width of the plate grows linearly from $0$ at the vertex to $3$ at the base, so the width $w(y)$ at depth $y$ satisfies
$$\\frac{w(y)}{y}=\\frac{3}{3}=1 \\;\\Rightarrow\\; w(y)=y,\\qquad 0\\le y\\le3.$$ ✓✓

Take a thin horizontal strip at depth $y$ of thickness $dy$. It is essentially at constant depth, so the pressure on it is $P=\\rho gy$, its area is $dA=w(y)\\,dy=y\\,dy$, and the force on it is
$$dF=P\\,dA=\\rho g\\,y\\cdot w(y)\\,dy=1000(9.8)\\,y\\cdot y\\,dy=9800\\,y^2\\,dy.$$ ✓✓

Integrating over the full depth of the plate, from $y=0$ to $y=3$:
$$F=9800\\int_0^3 y^2\\,dy=9800\\left[\\frac{y^3}{3}\\right]_0^3=9800\\left(\\frac{27}{3}-0\\right)=9800(9).$$ ✓✓

**Hydrostatic force $=88\\,200\\text{ N}$ (about $88.2$ kN).** ✓
        `
      },
      {
        number: 4, title: 'Proof: Linearity of the definite integral', section: '§8', marks: 8,
        prompt: `
Using Riemann sums, prove that for constants $\\alpha,\\beta$ and integrable functions $f,g$,
$$\\int_a^b\\big[\\alpha f(x)+\\beta g(x)\\big]dx=\\alpha\\int_a^b f(x)dx+\\beta\\int_a^b g(x)dx.$$ (8)
        `,
        solution: `
For a partition with sample points $x_i^*$ and width $\\Delta x$,
$$\\int_a^b[\\alpha f+\\beta g]dx=\\lim_{n\\to\\infty}\\sum_{i=1}^n[\\alpha f(x_i^*)+\\beta g(x_i^*)]\\Delta x.$$ ✓✓

Distribute $\\Delta x$ and split the finite sum:
$$=\\lim_{n\\to\\infty}\\left(\\alpha\\sum_{i=1}^nf(x_i^*)\\Delta x+\\beta\\sum_{i=1}^ng(x_i^*)\\Delta x\\right).$$ ✓✓✓

Since both functions are integrable, the limits exist. Pulling out constants and using the sum law for limits gives
$$=\\alpha\\lim_{n\\to\\infty}\\sum_{i=1}^nf(x_i^*)\\Delta x+\\beta\\lim_{n\\to\\infty}\\sum_{i=1}^ng(x_i^*)\\Delta x
=\\alpha\\int_a^b f(x)dx+\\beta\\int_a^b g(x)dx.$$ ✓✓✓
        `
      },
      {
        number: 5, title: 'Inverse trigonometric, exponential and logarithmic integrals', section: '§9.1', marks: 6,
        prompt: `
Evaluate each integral.

**(a)** $\\displaystyle\\int\\frac{dx}{x\\sqrt{x^2-16}}$ (2)

**(b)** $\\displaystyle\\int\\frac{dx}{x^2+6x+13}$ (2)

**(c)** $\\displaystyle\\int 4^{-x}\\,dx$ (1)

**(d)** $\\displaystyle\\int\\frac{5x^4}{x^5+2}\\,dx$ (1)
        `,
        solution: `
**(a)** This matches the standard inverse-secant form $\\displaystyle\\int\\frac{dx}{x\\sqrt{x^2-a^2}}=\\frac1a\\sec^{-1}\\!\\left(\\frac{|x|}{a}\\right)+C$, here with $a^2=16$, i.e. $a=4$: ✓
$$\\int\\frac{dx}{x\\sqrt{x^2-16}}=\\frac14\\sec^{-1}\\!\\left(\\frac{|x|}{4}\\right)+C.$$ ✓

**(b)** Complete the square in the denominator: $x^2+6x+13=\\left(x^2+6x+9\\right)+4=(x+3)^2+4$. ✓
Now use $\\displaystyle\\int\\frac{du}{u^2+a^2}=\\frac1a\\arctan\\!\\left(\\frac{u}{a}\\right)+C$ with $u=x+3$, $du=dx$ and $a=2$:
$$\\int\\frac{dx}{x^2+6x+13}=\\int\\frac{dx}{(x+3)^2+4}=\\frac12\\arctan\\!\\left(\\frac{x+3}{2}\\right)+C.$$ ✓

**(c)** Let $u=-x$, so $du=-dx$, and apply $\\displaystyle\\int a^u\\,du=\\frac{a^u}{\\ln a}+C$ with $a=4$:
$$\\int 4^{-x}\\,dx=-\\int 4^u\\,du=-\\frac{4^u}{\\ln4}+C=-\\frac{4^{-x}}{\\ln4}+C.$$ ✓

**(d)** With $f(x)=x^5+2$ we have $f'(x)=5x^4$, so the integrand is exactly $\\dfrac{f'(x)}{f(x)}$ and $\\displaystyle\\int\\frac{f'(x)}{f(x)}\\,dx=\\ln|f(x)|+C$:
$$\\int\\frac{5x^4}{x^5+2}\\,dx=\\ln\\left|x^5+2\\right|+C.$$ ✓
        `
      },
      {
        number: 6, title: 'Integration by parts', section: '§9.2', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int x\\arctan(3x)\\,dx$.`,
        solution: `
Integrate by parts, choosing $u$ to be the factor that simplifies on differentiating. Let $u=\\arctan(3x)$ and $dv=x\\,dx$; then by the chain rule with $\\dfrac{d}{dx}\\arctan w=\\dfrac{1}{1+w^2}\\cdot\\dfrac{dw}{dx}$,
$$du=\\frac{3}{1+(3x)^2}\\,dx=\\frac{3}{1+9x^2}\\,dx,\\qquad v=\\int x\\,dx=\\frac{x^2}{2}.$$ ✓✓

The formula $\\displaystyle\\int u\\,dv=uv-\\int v\\,du$ then gives
$$\\int x\\arctan(3x)\\,dx=\\frac{x^2}{2}\\arctan(3x)-\\int\\frac{x^2}{2}\\cdot\\frac{3}{1+9x^2}\\,dx=\\frac{x^2}{2}\\arctan(3x)-\\frac32\\int\\frac{x^2}{1+9x^2}\\,dx.$$ ✓✓

The remaining integrand is an improper rational function (equal degrees), so split it by adding and subtracting $1$ in the numerator:
$$\\frac{x^2}{1+9x^2}=\\frac19\\cdot\\frac{9x^2}{1+9x^2}=\\frac19\\cdot\\frac{\\left(1+9x^2\\right)-1}{1+9x^2}=\\frac19\\left(1-\\frac{1}{1+9x^2}\\right).$$

Hence, using $\\displaystyle\\int\\frac{dx}{1+9x^2}=\\frac13\\arctan(3x)$ and $\\tfrac32\\cdot\\tfrac19=\\tfrac16$,
$$\\frac32\\int\\frac{x^2}{1+9x^2}\\,dx=\\frac16\\int\\left(1-\\frac{1}{1+9x^2}\\right)dx=\\frac16\\left(x-\\frac13\\arctan(3x)\\right)=\\frac{x}{6}-\\frac{1}{18}\\arctan(3x).$$ ✓

Substituting this back into the by-parts line:
$$\\int x\\arctan(3x)\\,dx=\\frac{x^2}{2}\\arctan(3x)-\\frac{x}{6}+\\frac{1}{18}\\arctan(3x)+C.$$ ✓
        `
      },
      {
        number: 7, title: 'Partial fractions (repeated linear factor)', section: '§9.5', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int\\frac{x^2+3x+1}{x(x-2)^2}\\,dx$.`,
        solution: `
The denominator is already factorised as $x(x-2)^2$: a distinct linear factor $x$ and a **repeated** linear factor $(x-2)^2$, which needs one term for each power up to the second. The correct form is therefore
$$\\frac{x^2+3x+1}{x(x-2)^2}=\\frac{A}{x}+\\frac{B}{x-2}+\\frac{C}{(x-2)^2}.$$ ✓

Multiplying both sides by $x(x-2)^2$ clears the denominators and gives an identity valid for every $x$:
$$x^2+3x+1=A(x-2)^2+Bx(x-2)+Cx.$$ ✓

Setting $x=0$ kills the $B$ and $C$ terms: $\\;1=A(-2)^2=4A \\;\\Rightarrow\\; A=\\dfrac14$. ✓
Setting $x=2$ kills the $A$ and $B$ terms: $\\;4+6+1=11=2C \\;\\Rightarrow\\; C=\\dfrac{11}{2}$. ✓
Comparing the coefficients of $x^2$ on both sides: $\\;1=A+B \\;\\Rightarrow\\; B=1-\\dfrac14=\\dfrac34$. ✓

Integrating term by term, with $\\displaystyle\\int\\frac{dx}{x-k}=\\ln|x-k|$ and the repeated factor giving $\\displaystyle\\int(x-2)^{-2}dx=-\\frac{1}{x-2}$:
$$\\int\\frac{x^2+3x+1}{x(x-2)^2}\\,dx=\\int\\left(\\frac{1/4}{x}+\\frac{3/4}{x-2}+\\frac{11/2}{(x-2)^2}\\right)dx=\\frac14\\ln|x|+\\frac34\\ln|x-2|-\\frac{11}{2(x-2)}+C.$$ ✓
        `
      }
    ]
  }
];

// The final three proof questions use the remaining distinct proofs from the
// study-guide proof list. This assignment keeps every paper's Question 4 unique.
EXAMS.find(p => p.id === 'paper10').questions[3] = {
  number: 4, title: 'Proof: Non-negativity of the definite integral', section: '§8', marks: 8,
  prompt: `Suppose $f(x)\\ge0$ for all $x\\in[a,b]$. Prove that
$$\\int_a^b f(x)\\,dx\\ge0.$$ (8)`,
  solution: `
Let $a=x_0< x_1<\\dots< x_n=b$ partition $[a,b]$ into $n$ subintervals of width $\\Delta x_i=x_i-x_{i-1}$, with sample points $x_i^*\\in[x_{i-1},x_i]$. By the **definition of the definite integral** as a limit of Riemann sums,
$$\\int_a^b f(x)\\,dx=\\lim_{n\\to\\infty}\\sum_{i=1}^n f(x_i^*)\\,\\Delta x_i.$$ ✓✓

Each $x_i^*\\in[x_{i-1},x_i]\\subseteq[a,b]$, so the hypothesis $f(x)\\ge0$ on $[a,b]$ applies to every sample point:
$$f(x_i^*)\\ge0\\qquad\\text{for }i=1,\\dots,n.$$ ✓✓

The partition points increase and $b>a$, so every width satisfies $\\Delta x_i=x_i-x_{i-1}>0$. ✓

A product of non-negative numbers is non-negative, and a finite sum of non-negative terms is non-negative, so
$$R_n=\\sum_{i=1}^n f(x_i^*)\\,\\Delta x_i\\ge0\\qquad\\text{for every }n.$$ ✓✓

Weak inequalities are **preserved in the limit**: if $R_n\\ge0$ for all $n$ and $R_n\\to L$, then $L\\ge0$ — otherwise $L<0$ and taking $\\varepsilon=-L$ would force $R_n<0$ for large $n$. Since $f$ is integrable this limit exists and equals the integral, so
$$\\int_a^b f(x)\\,dx=\\lim_{n\\to\\infty}R_n\\ge0.\\qquad\\blacksquare$$ ✓
        `
};

EXAMS.find(p => p.id === 'paper11').questions[3] = {
  number: 4, title: 'Proof: Domination rule for definite integrals', section: '§8', marks: 8,
  prompt: `Suppose $f(x)\\ge g(x)$ for all $x\\in[a,b]$. Prove that
$$\\int_a^b f(x)\\,dx\\ge \\int_a^b g(x)\\,dx.$$ (8)`,
  solution: `
Since $f$ and $g$ are integrable on $[a,b]$, define the auxiliary function
$$h(x)=f(x)-g(x),\\qquad x\\in[a,b],$$
which is itself integrable on $[a,b]$, being a difference of integrable functions. ✓✓

The hypothesis $f(x)\\ge g(x)$ holds for every $x\\in[a,b]$; subtracting $g(x)$ from both sides gives $h(x)=f(x)-g(x)\\ge0$ on all of $[a,b]$. ✓

By the **non-negativity property** established earlier — for any sample points $x_i^*\\in[x_{i-1},x_i]$ we have $h(x_i^*)\\ge0$, while $\\Delta x=\\dfrac{b-a}{n}>0$, so every Riemann sum satisfies $\\displaystyle\\sum_{i=1}^n h(x_i^*)\\Delta x\\ge0$, and a limit of non-negative quantities is non-negative — we conclude
$$\\int_a^b h(x)\\,dx\\ge0.$$ ✓✓

By the **difference rule** for definite integrals (the linearity property $\\int_a^b[f-g]=\\int_a^bf-\\int_a^bg$, valid because both integrals exist),
$$\\int_a^b h(x)\\,dx=\\int_a^b\\big[f(x)-g(x)\\big]\\,dx=\\int_a^b f(x)\\,dx-\\int_a^b g(x)\\,dx.$$ ✓✓

Combining the last two displays and adding $\\displaystyle\\int_a^b g(x)\\,dx$ to both sides:
$$\\int_a^b f(x)\\,dx-\\int_a^b g(x)\\,dx\\ge0 \\;\\Rightarrow\\; \\int_a^b f(x)\\,dx\\ge\\int_a^b g(x)\\,dx.\\quad\\blacksquare$$ ✓
        `
};

EXAMS.find(p => p.id === 'paper12').questions[3] = {
  number: 4, title: 'Proof: Absolute-value inequality for definite integrals', section: '§8', marks: 8,
  prompt: `Prove that
$$\\left|\\int_a^b f(x)\\,dx\\right|\\le \\int_a^b |f(x)|\\,dx.$$ (8)`,
  solution: `
Since $f$ is integrable on $[a,b]$, so is $|f|$, and both integrals below exist. For every $x\\in[a,b]$ the definition of absolute value gives the two-sided bound
$$-|f(x)|\\le f(x)\\le |f(x)|.$$ ✓✓

Apply the **domination (comparison) rule** for definite integrals — if $g(x)\\le h(x)$ for all $x\\in[a,b]$ and $a\\le b$, then $\\displaystyle\\int_a^b g(x)\\,dx\\le\\int_a^b h(x)\\,dx$ — to the right-hand inequality $f(x)\\le|f(x)|$:
$$\\int_a^b f(x)\\,dx\\le \\int_a^b |f(x)|\\,dx.$$ ✓✓

Now apply the same domination rule to the left-hand inequality $-|f(x)|\\le f(x)$, and use the **Constant Multiple Rule** with factor $-1$ to bring the minus sign outside the integral:
$$-\\int_a^b |f(x)|\\,dx=\\int_a^b \\big(-|f(x)|\\big)\\,dx\\le \\int_a^b f(x)\\,dx.$$ ✓✓

Write $I=\\displaystyle\\int_a^b f(x)\\,dx$ and $M=\\displaystyle\\int_a^b |f(x)|\\,dx$, noting $M\\ge0$ because $|f|\\ge0$ on $[a,b]$. The two inequalities just obtained say exactly $-M\\le I$ and $I\\le M$, which combine into the single chain
$$-M\\le I\\le M.$$ ✓

By the standard characterisation of absolute value — for $M\\ge0$, the statement $-M\\le I\\le M$ is equivalent to $|I|\\le M$ — we conclude
$$\\left|\\int_a^b f(x)\\,dx\\right|\\le \\int_a^b |f(x)|\\,dx.\\qquad\\blacksquare$$ ✓
        `
};
