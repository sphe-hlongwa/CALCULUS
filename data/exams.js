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
**(a)** $x$-intercepts: solve $x^2-4x+1=0 \\Rightarrow x = \\dfrac{4\\pm\\sqrt{12}}{2} = 2\\pm\\sqrt3$. ✓
$y$-intercept: $f(0) = \\dfrac{1}{1} = 1$. ✓

**(b)** As $x\\to\\pm\\infty$, $f(x)\\to 1$, so $y=1$ is a horizontal asymptote. ✓
The denominator vanishes at $x=1$ while the numerator does not ($1-4+1=-2\\neq0$), so $x=1$ is a vertical asymptote. ✓

**(c)** By the quotient rule, with $u=x^2-4x+1$, $u'=2x-4$, $v=(x-1)^2$, $v'=2(x-1)$:
$$f'(x)=\\frac{(2x-4)(x-1)^2-(x^2-4x+1)\\cdot2(x-1)}{(x-1)^4} = \\frac{(2x-4)(x-1)-2(x^2-4x+1)}{(x-1)^3}.$$ ✓
Expanding the numerator: $(2x-4)(x-1)-2(x^2-4x+1) = (2x^2-6x+4)-(2x^2-8x+2)=2x+2$, so
$$f'(x) = \\frac{2(x+1)}{(x-1)^3}.$$ ✓

$f'(x)=0$ when $x=-1$; $f'$ is undefined at $x=1$ (not in the domain).
Sign chart on $(-\\infty,-1),(-1,1),(1,\\infty)$: $f'>0,\\;f'<0,\\;f'>0$. ✓
So $f$ is increasing on $(-\\infty,-1)$ and $(1,\\infty)$, decreasing on $(-1,1)$, with a **local maximum** at $x=-1$, $f(-1)=\\tfrac32$. ✓

**(d)** Differentiating $f'(x)=2(x+1)(x-1)^{-3}$ with the product rule:
$$f''(x)=2(x-1)^{-3}+2(x+1)\\cdot(-3)(x-1)^{-4} = 2(x-1)^{-4}\\big[(x-1)-3(x+1)\\big] = \\frac{-4(x+2)}{(x-1)^4}.$$ ✓
$f''(x)=0$ when $x=-2$. Since $(x-1)^4>0$ always, the sign of $f''$ is the sign of $-(x+2)$: positive for $x<-2$, negative for $x>-2$. ✓
So $f$ is concave up on $(-\\infty,-2)$ and concave down on $(-2,1)$ and $(1,\\infty)$, with an **inflection point** at $\\left(-2,\\tfrac{13}{9}\\right)$. ✓

**(e)** See the graph below — it shows the asymptotes $x=1$ and $y=1$, the $x$-intercepts at $2\\pm\\sqrt3$, the local maximum at $(-1,\\tfrac32)$, and the inflection point at $\\left(-2,\\tfrac{13}{9}\\right)$. ✓✓
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
Volume constraint: $x^2h = 4000 \\Rightarrow h = \\dfrac{4000}{x^2}$. ✓

Surface area (open top, so 1 base + 4 sides):
$$S(x) = x^2 + 4xh = x^2 + \\frac{16000}{x}.$$ ✓

$$S'(x) = 2x - \\frac{16000}{x^2} = 0 \\;\\Rightarrow\\; x^3 = 8000 \\;\\Rightarrow\\; x = 20.$$ ✓✓

Since $S''(x) = 2 + \\dfrac{32000}{x^3} > 0$ for $x>0$, $x=20$ gives a minimum. ✓

Then $h = \\dfrac{4000}{400} = 10$ cm, and
$$S(20) = 400 + \\frac{16000}{20} = 400+800 = 1200\\text{ cm}^2.$$ ✓

**Base $20\\text{ cm}\\times20\\text{ cm}$, height $10$ cm, minimum surface area $1200\\text{ cm}^2$.**
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
The curves meet where $x^2 = 2x \\Rightarrow x(x-2)=0 \\Rightarrow x=0,2$. ✓
On $(0,2)$, $2x \\ge x^2$ (e.g. at $x=1$, $2>1$), so the outer radius is $R(x)=2x$ and the inner radius is $r(x)=x^2$. ✓✓

$$V = \\pi\\int_0^2 \\Big[(2x)^2-(x^2)^2\\Big]\\,dx = \\pi\\int_0^2\\big(4x^2-x^4\\big)\\,dx$$ ✓

$$= \\pi\\left[\\frac{4x^3}{3}-\\frac{x^5}{5}\\right]_0^2 = \\pi\\left(\\frac{32}{3}-\\frac{32}{5}\\right)$$ ✓✓

$$= \\pi\\cdot32\\left(\\frac{1}{3}-\\frac{1}{5}\\right) = \\pi\\cdot32\\cdot\\frac{2}{15} = \\frac{64\\pi}{15}.$$ ✓

**Volume $= \\dfrac{64\\pi}{15}$ cubic units.**
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
Partition $[a,b]$ into $n$ subintervals of equal width $\\Delta x=\\dfrac{b-a}{n}$, with endpoints $a=x_0<x_1<\\dots<x_n=b$. ✓

Write $F(b)-F(a)$ as a telescoping sum: $F(b)-F(a)=\\displaystyle\\sum_{i=1}^n\\big[F(x_i)-F(x_{i-1})\\big]$. ✓✓

Since $F$ is continuous on $[x_{i-1},x_i]$ and differentiable on $(x_{i-1},x_i)$, the Mean Value Theorem gives some $c_i\\in(x_{i-1},x_i)$ with $F'(c_i)=\\dfrac{F(x_i)-F(x_{i-1})}{\\Delta x}$, so $F(x_i)-F(x_{i-1})=f(c_i)\\Delta x$. ✓✓

Substituting back gives $F(b)-F(a)=\\displaystyle\\sum_{i=1}^n f(c_i)\\Delta x$, a Riemann sum for $f$ on $[a,b]$. ✓✓

Letting $n\\to\\infty$, the right-hand side converges to $\\displaystyle\\int_a^b f(x)\\,dx$ by definition, so $\\displaystyle\\int_a^b f(x)\\,dx=F(b)-F(a)$. $\\blacksquare$ ✓
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
**(a)** This has the form $\\int \\dfrac{dx}{\\sqrt{a^2-x^2}} = \\arcsin\\!\\left(\\dfrac{x}{a}\\right)+C$ with $a=3$:
$$\\int\\frac{dx}{\\sqrt{9-x^2}} = \\arcsin\\!\\left(\\frac{x}{3}\\right)+C.$$ ✓✓

**(b)** Complete the square: $x^2+4x+13 = (x+2)^2+9$. ✓
$$\\int\\frac{dx}{(x+2)^2+9} = \\frac{1}{3}\\arctan\\!\\left(\\frac{x+2}{3}\\right)+C.$$ ✓

**(c)** $\\displaystyle \\int e^{-3x}\\,dx = -\\frac13 e^{-3x}+C.$ ✓

**(d)** Recognising the form $\\int \\dfrac{f'(x)}{f(x)}dx = \\ln|f(x)|+C$ with $f(x)=x^2+1$:
$$\\int\\frac{2x}{x^2+1}\\,dx = \\ln(x^2+1)+C.$$ ✓
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
First application: let $u=x^2$, $dv=e^x\\,dx$, so $du=2x\\,dx$, $v=e^x$.
$$\\int x^2e^x\\,dx = x^2e^x - \\int 2xe^x\\,dx.$$ ✓✓

Second application on $\\int 2xe^x\\,dx$: let $u=2x$, $dv=e^x\\,dx$, so $du=2\\,dx$, $v=e^x$.
$$\\int 2xe^x\\,dx = 2xe^x - \\int 2e^x\\,dx = 2xe^x-2e^x.$$ ✓✓

Substituting back:
$$\\int x^2e^x\\,dx = x^2e^x-\\big(2xe^x-2e^x\\big)+C = e^x\\left(x^2-2x+2\\right)+C.$$ ✓✓
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
Write $\\dfrac{3x+5}{(x+1)(x+2)} = \\dfrac{A}{x+1}+\\dfrac{B}{x+2}$, so $3x+5 = A(x+2)+B(x+1)$. ✓✓

Setting $x=-1$: $2 = A \\Rightarrow A=2$.
Setting $x=-2$: $-1 = -B \\Rightarrow B=1$. ✓✓

$$\\int\\frac{3x+5}{(x+1)(x+2)}\\,dx = \\int\\left(\\frac{2}{x+1}+\\frac{1}{x+2}\\right)dx = 2\\ln|x+1|+\\ln|x+2|+C.$$ ✓✓
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
**(a)** $x^2+3=0$ has no real solutions, so there are **no $x$-intercepts**. ✓
$y$-intercept: $f(0) = \\dfrac{3}{-2} = -\\dfrac32$. ✓

**(b)** Dividing $x^2+3$ by $x-2$: $x^2+3 = (x-2)(x+2)+7$, so
$$f(x) = x+2+\\frac{7}{x-2}.$$ ✓✓
The denominator vanishes at $x=2$ (remainder $7\\ne0$ there), so $x=2$ is a vertical asymptote. Since $\\dfrac{7}{x-2}\\to0$ as $x\\to\\pm\\infty$, the slant asymptote is $y=x+2$. ✓

**(c)** By the quotient rule, with $u=x^2+3$, $u'=2x$, $v=x-2$, $v'=1$:
$$f'(x) = \\frac{2x(x-2)-(x^2+3)}{(x-2)^2} = \\frac{x^2-4x-3}{(x-2)^2}.$$ ✓✓
$f'(x)=0 \\Rightarrow x^2-4x-3=0 \\Rightarrow x = \\dfrac{4\\pm\\sqrt{28}}{2} = 2\\pm\\sqrt7$. ✓
The denominator is always positive; the numerator (an upward parabola with roots $2\\pm\\sqrt7$) is negative between the roots and positive outside them.
So $f$ is decreasing on $(2-\\sqrt7,2)\\cup(2,2+\\sqrt7)$ and increasing on $(-\\infty,2-\\sqrt7)\\cup(2+\\sqrt7,\\infty)$. ✓
**Local maximum** at $x=2-\\sqrt7$, $f=4-2\\sqrt7$; **local minimum** at $x=2+\\sqrt7$, $f=4+2\\sqrt7$.

**(d)** Differentiating $f'(x)=(x^2-4x-3)(x-2)^{-2}$ with the quotient rule:
$$f''(x) = \\frac{(2x-4)(x-2)-2(x^2-4x-3)}{(x-2)^3} = \\frac{14}{(x-2)^3}.$$ ✓✓
This is negative for $x<2$ and positive for $x>2$ (never zero), so $f$ is **concave down on $(-\\infty,2)$** and **concave up on $(2,\\infty)$**, with no inflection point (only the asymptote at $x=2$). ✓

**(e)** See the graph below — it shows the vertical asymptote $x=2$, the slant asymptote $y=x+2$, the $y$-intercept, and the local maximum and minimum found in (c). ✓✓
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
Let $x$ be the length of each of the two sides perpendicular to the river, and $y$ the side parallel to the river. Fencing used: $2x+y=800 \\Rightarrow y = 800-2x$. ✓

$$A(x) = xy = x(800-2x) = 800x-2x^2.$$ ✓

$$A'(x) = 800-4x = 0 \\;\\Rightarrow\\; x=200.$$ ✓

Since $A''(x)=-4<0$, this is a maximum. ✓

Then $y = 800-400 = 400$ m, and
$$A(200) = 200\\times400 = 80\\,000\\text{ m}^2.$$ ✓✓

**Dimensions $200\\text{ m}\\times400\\text{ m}$; maximum area $80\\,000\\text{ m}^2$.**
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
The spring is stretched $0.3-0.2 = 0.1$ m by a force of $25$ N, so by Hooke's Law:
$$25 = k(0.1) \\;\\Rightarrow\\; k = 250\\text{ N/m}.$$ ✓✓

Stretching from natural length to $0.35$ m corresponds to a displacement of $x=0$ to $x = 0.35-0.2 = 0.15$ m. ✓

$$W = \\int_0^{0.15} kx\\,dx = \\int_0^{0.15}250x\\,dx = \\left[125x^2\\right]_0^{0.15}$$ ✓✓

$$= 125(0.15)^2 = 125(0.0225) = 2.8125\\text{ J}.$$ ✓✓

**Work done $\\approx 2.8125$ J.**
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
By definition, with sample points $x_i^*$ and $\\Delta x=\\dfrac{b-a}{n}$:
$$\\int_a^b\\big[f(x)+g(x)\\big]\\,dx=\\lim_{n\\to\\infty}\\sum_{i=1}^n\\big[f(x_i^*)+g(x_i^*)\\big]\\Delta x.$$ ✓✓✓

Distributing $\\Delta x$ and splitting the sum into two sums (valid since both limits exist, as $f,g$ are integrable):
$$=\\lim_{n\\to\\infty}\\left(\\sum_{i=1}^n f(x_i^*)\\Delta x+\\sum_{i=1}^n g(x_i^*)\\Delta x\\right).$$ ✓✓

By the Sum Law for limits, this splits into two separate limits:
$$=\\lim_{n\\to\\infty}\\sum_{i=1}^n f(x_i^*)\\Delta x+\\lim_{n\\to\\infty}\\sum_{i=1}^n g(x_i^*)\\Delta x=\\int_a^b f(x)\\,dx+\\int_a^b g(x)\\,dx.\\quad\\blacksquare$$ ✓✓✓
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
**(a)** Let $u=4x$, $du=4\\,dx$:
$$\\int\\frac{dx}{\\sqrt{1-(4x)^2}} = \\frac14\\int\\frac{du}{\\sqrt{1-u^2}} = \\frac14\\arcsin(4x)+C.$$ ✓✓

**(b)** Complete the square: $x^2-6x+13 = (x-3)^2+4$. ✓
$$\\int\\frac{dx}{(x-3)^2+4} = \\frac12\\arctan\\!\\left(\\frac{x-3}{2}\\right)+C.$$ ✓

**(c)** Using $\\displaystyle\\int a^x\\,dx = \\frac{a^x}{\\ln a}+C$:
$$\\int 5^x\\,dx = \\frac{5^x}{\\ln5}+C.$$ ✓

**(d)** With $f(x)=\\tan x$, $f'(x)=\\sec^2x$, so this is $\\int \\dfrac{f'(x)}{f(x)}dx$:
$$\\int\\frac{\\sec^2x}{\\tan x}\\,dx = \\ln|\\tan x|+C.$$ ✓
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
Let $u=\\ln x$, $dv = x^2\\,dx$, so $du = \\dfrac1x\\,dx$, $v=\\dfrac{x^3}{3}$. ✓✓

$$\\int x^2\\ln x\\,dx = \\frac{x^3}{3}\\ln x - \\int\\frac{x^3}{3}\\cdot\\frac1x\\,dx = \\frac{x^3}{3}\\ln x - \\frac13\\int x^2\\,dx.$$ ✓✓

$$= \\frac{x^3}{3}\\ln x - \\frac13\\cdot\\frac{x^3}{3}+C = \\frac{x^3}{3}\\ln x - \\frac{x^3}{9}+C.$$ ✓✓
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
**(a)** Factor the denominator: $x^2-x-2 = (x-2)(x+1)$. ✓

Write $\\dfrac{x+7}{(x-2)(x+1)} = \\dfrac{A}{x-2}+\\dfrac{B}{x+1}$, so $x+7 = A(x+1)+B(x-2)$. ✓

Setting $x=2$: $9=3A \\Rightarrow A=3$.
Setting $x=-1$: $6=-3B \\Rightarrow B=-2$. ✓✓

$$\\int\\frac{x+7}{x^2-x-2}\\,dx = \\int\\left(\\frac{3}{x-2}-\\frac{2}{x+1}\\right)dx = 3\\ln|x-2|-2\\ln|x+1|+C.$$ ✓✓

**(b)** [Bonus]. Here the numerator and denominator both have degree $2$, so the fraction is **improper** and partial fractions cannot be applied directly — divide first: ✓
$$\\frac{x^2}{x^2-1} = \\frac{(x^2-1)+1}{x^2-1} = 1 + \\frac{1}{x^2-1}.$$ ✓

Now decompose the proper remainder: $\\dfrac{1}{x^2-1}=\\dfrac{1}{(x-1)(x+1)} = \\dfrac{A}{x-1}+\\dfrac{B}{x+1}$, so $1=A(x+1)+B(x-1)$. ✓
Setting $x=1$: $1=2A\\Rightarrow A=\\tfrac12$. Setting $x=-1$: $1=-2B\\Rightarrow B=-\\tfrac12$. ✓✓

$$\\int\\frac{x^2}{x^2-1}\\,dx = \\int\\left(1+\\frac{1/2}{x-1}-\\frac{1/2}{x+1}\\right)dx = x+\\frac12\\ln|x-1|-\\frac12\\ln|x+1|+C.$$ ✓✓
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
**(a)** $x^2-9=0 \\Rightarrow x=\\pm3$. ✓
$y$-intercept: $f(0) = \\dfrac{-9}{-4} = \\dfrac94$. ✓

**(b)** The denominator $x^2-4=0$ at $x=\\pm2$, where the numerator is $-5\\ne0$, so $x=2$ and $x=-2$ are vertical asymptotes. ✓
As $x\\to\\pm\\infty$, $f(x)\\to1$, so $y=1$ is the horizontal asymptote. ✓

**(c)** Observe that $f(-x)=f(x)$, so $f$ is an even function — its graph will be symmetric about the $y$-axis. By the quotient rule, with $u=x^2-9$, $u'=2x$, $v=x^2-4$, $v'=2x$:
$$f'(x) = \\frac{2x(x^2-4)-(x^2-9)(2x)}{(x^2-4)^2} = \\frac{2x\\big[(x^2-4)-(x^2-9)\\big]}{(x^2-4)^2} = \\frac{10x}{(x^2-4)^2}.$$ ✓✓
$f'(x)=0$ only at $x=0$ (the denominator is always positive where defined).
$f'<0$ for $x<0$ and $f'>0$ for $x>0$ (on the domain), so $f$ is decreasing on $(-\\infty,-2)\\cup(-2,0)$ and increasing on $(0,2)\\cup(2,\\infty)$, with a **local minimum** at $x=0$, $f(0)=\\tfrac94$. ✓

**(d)** Differentiating $f'(x)=10x(x^2-4)^{-2}$ with the product rule:
$$f''(x)=10(x^2-4)^{-2}+10x\\cdot(-2)(x^2-4)^{-3}(2x) = 10(x^2-4)^{-3}\\big[(x^2-4)-4x^2\\big] = \\frac{-10(3x^2+4)}{(x^2-4)^3}.$$ ✓✓
Since $3x^2+4>0$ always, the sign of $f''$ is opposite to the sign of $(x^2-4)$: $f''>0$ when $|x|<2$ and $f''<0$ when $|x|>2$.
So $f$ is **concave up on $(-2,2)$** and **concave down on $(-\\infty,-2)$ and $(2,\\infty)$**; there are no inflection points (sign changes only occur at the asymptotes). ✓

**(e)** See the graph below — it shows the even symmetry, the two vertical asymptotes $x=\\pm2$, the horizontal asymptote $y=1$, and the local minimum at $(0,\\tfrac94)$. ✓✓
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
Volume: $\\pi r^2h = 1000 \\Rightarrow h = \\dfrac{1000}{\\pi r^2}$. ✓

Surface area: $S(r) = 2\\pi r^2 + 2\\pi rh = 2\\pi r^2 + \\dfrac{2000}{r}$. ✓

$$S'(r) = 4\\pi r - \\frac{2000}{r^2} = 0 \\;\\Rightarrow\\; r^3 = \\frac{500}{\\pi} \\;\\Rightarrow\\; r = \\sqrt[3]{\\frac{500}{\\pi}}\\approx5.42\\text{ cm}.$$ ✓✓

Since $S''(r) = 4\\pi + \\dfrac{4000}{r^3} > 0$, this is a minimum. ✓

Then $h = \\dfrac{1000}{\\pi r^2} = 2r \\approx 10.84$ cm (using $\\pi r^3 = 500 \\Rightarrow h=\\frac{1000}{\\pi r^2}=\\frac{2\\pi r^3}{\\pi r^2}=2r$). ✓✓

**The minimizing can has $r=\\sqrt[3]{500/\\pi}\\approx5.42$ cm and $h=2r\\approx10.84$ cm** (height equals the diameter).
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
Find intersections: $y^2 = y+2 \\Rightarrow y^2-y-2=0 \\Rightarrow (y-2)(y+1)=0 \\Rightarrow y=-1,2$. ✓

For $-1\\le y\\le2$, the line is to the right of the parabola (e.g. at $y=0$: $x=2 > x=0$), so integrating with respect to $y$: ✓✓
$$A = \\int_{-1}^{2}\\Big[(y+2)-y^2\\Big]\\,dy = \\left[\\frac{y^2}{2}+2y-\\frac{y^3}{3}\\right]_{-1}^{2}$$ ✓

At $y=2$: $2+4-\\tfrac83 = \\tfrac{10}{3}$. At $y=-1$: $\\tfrac12-2+\\tfrac13 = -\\tfrac76$. ✓✓

$$A = \\frac{10}{3}-\\left(-\\frac76\\right) = \\frac{20}{6}+\\frac{7}{6} = \\frac{27}{6} = \\frac92.$$ ✓

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
Split the integral at $0$: $\\displaystyle\\int_{-a}^a f(x)\\,dx=\\int_{-a}^0 f(x)\\,dx+\\int_0^a f(x)\\,dx$. ✓

In the first integral substitute $u=-x$ ($du=-dx$); when $x=-a$, $u=a$, and when $x=0$, $u=0$:
$$\\int_{-a}^0 f(x)\\,dx=-\\int_a^0 f(-u)\\,du=\\int_0^a f(-x)\\,dx.$$ ✓✓

Hence $\\displaystyle\\int_{-a}^a f(x)\\,dx=\\int_0^a f(-x)\\,dx+\\int_0^a f(x)\\,dx$. ✓

**(a)** If $f$ is even, $f(-x)=f(x)$, so this becomes $2\\displaystyle\\int_0^a f(x)\\,dx$. $\\blacksquare$ ✓✓

**(b)** If $f$ is odd, $f(-x)=-f(x)$, so this becomes $-\\displaystyle\\int_0^a f(x)\\,dx+\\int_0^a f(x)\\,dx=0$. $\\blacksquare$ ✓✓
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
**(a)** Let $u=2x$, $du=2\\,dx$:
$$\\int\\frac{dx}{\\sqrt{25-(2x)^2}} = \\frac12\\int\\frac{du}{\\sqrt{25-u^2}} = \\frac12\\arcsin\\!\\left(\\frac{2x}{5}\\right)+C.$$ ✓✓

**(b)** Complete the square: $4x^2+4x+2 = (2x+1)^2+1$. ✓
Let $u=2x+1$, $du=2\\,dx$:
$$\\int\\frac{dx}{(2x+1)^2+1} = \\frac12\\arctan(2x+1)+C.$$ ✓

**(c)** $\\displaystyle\\int 3e^{x/3}\\,dx = 3\\cdot3\\,e^{x/3}+C = 9e^{x/3}+C.$ ✓

**(d)** $\\cot x = \\dfrac{\\cos x}{\\sin x}$, and with $f(x)=\\sin x$, $f'(x)=\\cos x$:
$$\\int\\cot x\\,dx = \\ln|\\sin x|+C.$$ ✓
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
Let $u=x$, $dv=\\sin(3x)\\,dx$, so $du=dx$, $v=-\\dfrac{\\cos(3x)}{3}$. ✓✓

$$\\int x\\sin(3x)\\,dx = -\\frac{x\\cos(3x)}{3} + \\int\\frac{\\cos(3x)}{3}\\,dx$$ ✓✓

$$= -\\frac{x\\cos(3x)}{3} + \\frac13\\cdot\\frac{\\sin(3x)}{3}+C = -\\frac{x\\cos(3x)}{3} + \\frac{\\sin(3x)}{9}+C.$$ ✓✓
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
Write $\\dfrac{x^2+1}{x(x-1)^2} = \\dfrac{A}{x}+\\dfrac{B}{x-1}+\\dfrac{C}{(x-1)^2}$, so
$$x^2+1 = A(x-1)^2+Bx(x-1)+Cx.$$ ✓✓

Setting $x=0$: $1=A \\Rightarrow A=1$.
Setting $x=1$: $2=C \\Rightarrow C=2$.
Comparing coefficients of $x^2$: $1=A+B \\Rightarrow B=0$. ✓✓

$$\\int\\frac{x^2+1}{x(x-1)^2}\\,dx = \\int\\left(\\frac1x+\\frac{2}{(x-1)^2}\\right)dx = \\ln|x| - \\frac{2}{x-1}+C.$$ ✓✓
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
**(a)** $f(x)=x^3(x-4)=0 \\Rightarrow x=0$ (a repeated root) or $x=4$. $y$-intercept: $f(0)=0$. ✓✓

**(b)** Since $f$ is a degree-$4$ polynomial with positive leading coefficient, $f(x)\\to+\\infty$ as $x\\to\\pm\\infty$. ✓

**(c)** $f'(x)=4x^3-12x^2=4x^2(x-3)$. ✓✓
Since $x^2\\ge0$ always, the sign of $f'$ is the sign of $(x-3)$: negative for $x<3$, positive for $x>3$. Note that although $f'(0)=0$, $f'$ **does not change sign** at $x=0$ (it stays negative on both sides), so $x=0$ is **not** a local extremum — just a stationary (horizontal-tangent) point. ✓
So $f$ is decreasing on $(-\\infty,3)$ and increasing on $(3,\\infty)$, with a **local minimum** at $x=3$, $f(3)=81-108=-27$. ✓

**(d)** $f''(x)=12x^2-24x=12x(x-2)$. ✓✓
Sign chart on $(-\\infty,0),(0,2),(2,\\infty)$: $f''>0,\\;f''<0,\\;f''>0$.
So $f$ is concave up on $(-\\infty,0)$ and $(2,\\infty)$, concave down on $(0,2)$, with **inflection points** at $(0,0)$ and $(2,-16)$. (Interestingly, $x=0$ is simultaneously a stationary point and an inflection point.) ✓

**(e)** See the graph below — it shows the $x$-intercepts at $0$ and $4$, the local minimum at $(3,-27)$, and the inflection points at $(0,0)$ and $(2,-16)$. ✓✓
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
For a point $(x,\\sqrt x)$ on the curve, the squared distance to $(4,0)$ is
$$D(x) = (x-4)^2+x = x^2-7x+16.$$ ✓✓
(Minimizing $D$ is equivalent to minimizing the distance, and avoids an unnecessary square root.)

$$D'(x) = 2x-7=0 \\;\\Rightarrow\\; x=\\frac72.$$ ✓
Since $D''(x)=2>0$, this is a minimum. ✓

The point is $\\left(\\dfrac72,\\sqrt{\\dfrac72}\\right) = \\left(\\dfrac72,\\dfrac{\\sqrt{14}}{2}\\right)$. ✓

$$D\\!\\left(\\frac72\\right) = \\left(\\frac72\\right)^2-7\\left(\\frac72\\right)+16 = \\frac{49}{4}-\\frac{49}{2}+16=\\frac{15}{4}, \\quad \\text{so distance}=\\sqrt{\\frac{15}{4}}=\\frac{\\sqrt{15}}{2}.$$ ✓

**Closest point $\\left(\\tfrac72,\\tfrac{\\sqrt{14}}{2}\\right)$; minimum distance $\\dfrac{\\sqrt{15}}{2}$.**
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
By similar triangles, the radius $r$ of the water's surface and its depth $h$ satisfy $\\dfrac{r}{h}=\\dfrac{4}{10}=\\dfrac25$, so $r=\\dfrac{2h}{5}$. ✓✓

The volume of water at depth $h$ is
$$V = \\frac13\\pi r^2h = \\frac13\\pi\\left(\\frac{2h}{5}\\right)^2h = \\frac{4\\pi}{75}h^3.$$ ✓

Differentiating with respect to $t$:
$$\\frac{dV}{dt} = \\frac{4\\pi}{25}h^2\\frac{dh}{dt}.$$ ✓✓

At $h=5$, with $\\dfrac{dV}{dt}=8$:
$$8 = \\frac{4\\pi}{25}(25)\\frac{dh}{dt} = 4\\pi\\frac{dh}{dt} \\;\\Rightarrow\\; \\frac{dh}{dt}=\\frac{2}{\\pi}\\text{ m/min}.$$ ✓✓
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
By the limit definition of the derivative:
$$g'(x)=\\lim_{h\\to0}\\frac{g(x+h)-g(x)}{h}=\\lim_{h\\to0}\\frac{1}{h}\\int_x^{x+h}f(t)\\,dt.$$ ✓✓✓

By the Mean Value Theorem for Integrals, there is some $c$ between $x$ and $x+h$ with $\\displaystyle\\int_x^{x+h}f(t)\\,dt=f(c)\\cdot h$. ✓✓

Substituting gives $\\displaystyle g'(x)=\\lim_{h\\to0}\\frac{f(c)\\cdot h}{h}=\\lim_{h\\to0}f(c)$. ✓

As $h\\to0$, $c$ is squeezed between $x$ and $x+h$, so $c\\to x$; since $f$ is continuous, $\\displaystyle\\lim_{h\\to0}f(c)=f(x)$, hence $g'(x)=f(x)$. $\\blacksquare$ ✓✓
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
**(a)** Let $u=5x$, $du=5\\,dx$:
$$\\int\\frac{dx}{\\sqrt{1-(5x)^2}} = \\frac15\\int\\frac{du}{\\sqrt{1-u^2}} = \\frac15\\arcsin(5x)+C.$$ ✓✓

**(b)** Factor out $2$, then complete the square: $2x^2+8x+10 = 2(x^2+4x+5) = 2\\big[(x+2)^2+1\\big]$. ✓
$$\\int\\frac{dx}{2\\big[(x+2)^2+1\\big]} = \\frac12\\arctan(x+2)+C.$$ ✓

**(c)** Let $u=4-2x$, $du=-2\\,dx$:
$$\\int e^{4-2x}\\,dx = -\\frac12\\int e^u\\,du = -\\frac12 e^{4-2x}+C.$$ ✓

**(d)** Let $u=\\ln x$, $du=\\dfrac{dx}{x}$:
$$\\int\\frac{dx}{x\\ln x} = \\int\\frac{du}{u} = \\ln|\\ln x|+C.$$ ✓
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
Let $u=\\arctan x$, $dv=dx$, so $du=\\dfrac{1}{1+x^2}\\,dx$, $v=x$. ✓✓

$$\\int\\arctan x\\,dx = x\\arctan x - \\int\\frac{x}{1+x^2}\\,dx.$$ ✓✓

For the remaining integral, recognise $\\int\\dfrac{f'(x)}{f(x)}dx$ with $f(x)=1+x^2$:
$$\\int\\frac{x}{1+x^2}\\,dx = \\frac12\\ln(1+x^2)+C.$$ ✓

$$\\int\\arctan x\\,dx = x\\arctan x - \\frac12\\ln(1+x^2)+C.$$ ✓
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
Write $\\dfrac{x^2+2x-1}{x(x-1)(x+1)} = \\dfrac{A}{x}+\\dfrac{B}{x-1}+\\dfrac{C}{x+1}$, so
$$x^2+2x-1 = A(x-1)(x+1)+Bx(x+1)+Cx(x-1).$$ ✓✓

Setting $x=0$: $-1=A(-1)(1) \\Rightarrow A=1$.
Setting $x=1$: $2=B(1)(2) \\Rightarrow B=1$.
Setting $x=-1$: $-2=C(-1)(-2) \\Rightarrow C=-1$. ✓✓

$$\\int\\frac{x^2+2x-1}{x(x-1)(x+1)}\\,dx = \\int\\left(\\frac1x+\\frac{1}{x-1}-\\frac{1}{x+1}\\right)dx = \\ln|x|+\\ln|x-1|-\\ln|x+1|+C.$$ ✓✓
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
**(a)** The domain excludes $x=1$ and $x=3$ (where the original denominator is zero). For $x\\ne3$, the factor $(x-3)$ cancels: $f(x)=\\dfrac{x+1}{x-1}$ for $x\\ne1,3$. ✓
At $x=3$, the simplified expression gives $\\dfrac{3+1}{3-1}=2$, so there is a **hole at $(3,2)$**. ✓
$x$-intercept: $x+1=0\\Rightarrow x=-1$. $y$-intercept: $f(0)=\\dfrac{1}{-1}=-1$. ✓

**(b)** Using the simplified form $g(x)=\\dfrac{x+1}{x-1}$: vertical asymptote at $x=1$ (not cancelled); since the degrees of numerator and denominator match with leading coefficient ratio $1$, the horizontal asymptote is $y=1$. ✓✓

**(c)** By the quotient rule on $g(x)=\\dfrac{x+1}{x-1}$:
$$g'(x) = \\frac{(1)(x-1)-(x+1)(1)}{(x-1)^2} = \\frac{-2}{(x-1)^2}.$$ ✓✓
This is negative everywhere it is defined, so $f$ is **decreasing on $(-\\infty,1)$, $(1,3)$ and $(3,\\infty)$**, with **no local extrema** (the hole at $x=3$ does not create one). ✓

**(d)** Differentiating $g'(x)=-2(x-1)^{-2}$:
$$g''(x) = 4(x-1)^{-3} = \\frac{4}{(x-1)^3}.$$ ✓
Negative for $x<1$ (concave down), positive for $x>1$ (concave up); no inflection point (only the asymptote at $x=1$). ✓

**(e)** See the graph below — it shows the vertical asymptote $x=1$, the horizontal asymptote $y=1$, the intercepts, and the hole at $(3,2)$. ✓✓
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
Let the upper-right corner be $(x,4-x^2)$ for $0\\le x\\le2$; by symmetry the rectangle has width $2x$ and height $4-x^2$. ✓

$$A(x) = 2x(4-x^2) = 8x-2x^3.$$ ✓

$$A'(x) = 8-6x^2=0 \\;\\Rightarrow\\; x^2=\\frac43 \\;\\Rightarrow\\; x=\\frac{2}{\\sqrt3}=\\frac{2\\sqrt3}{3}.$$ ✓✓

Since $A''(x)=-12x<0$ for $x>0$, this is a maximum. ✓

Height: $4-\\dfrac43=\\dfrac83$. Maximum area:
$$A = 2\\left(\\frac{2\\sqrt3}{3}\\right)\\left(\\frac83\\right) = \\frac{32\\sqrt3}{9}.$$ ✓✓

**Rectangle of width $\\dfrac{4\\sqrt3}{3}$ and height $\\dfrac83$; maximum area $\\dfrac{32\\sqrt3}{9}$.**
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
Using shells parallel to the $y$-axis, a representative shell at position $x$ has radius $x$, height $f(x)=x^2$, and thickness $dx$: ✓✓

$$V = 2\\pi\\int_0^2 x\\cdot x^2\\,dx = 2\\pi\\int_0^2 x^3\\,dx$$ ✓

$$= 2\\pi\\left[\\frac{x^4}{4}\\right]_0^2 = 2\\pi(4) = 8\\pi.$$ ✓✓✓

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
Fix a constant $k\\in[a,b]$ and split the integral: $\\displaystyle\\int_{u(x)}^{v(x)}f(t)\\,dt=\\int_k^{v(x)}f(t)\\,dt-\\int_k^{u(x)}f(t)\\,dt$. ✓✓

Define $g(y)=\\displaystyle\\int_k^y f(t)\\,dt$. By the Fundamental Theorem of Calculus (Part 1), $g'(y)=f(y)$. ✓✓

The expression above is $g(v(x))-g(u(x))$, so differentiating with the Chain Rule:
$$\\frac{d}{dx}\\Big[g(v(x))-g(u(x))\\Big]=g'(v(x))v'(x)-g'(u(x))u'(x).$$ ✓✓

Since $g'=f$, this equals $f(v(x))v'(x)-f(u(x))u'(x)$, as required. $\\blacksquare$ ✓✓
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
**(a)** Let $u=3x$, $du=3\\,dx$:
$$\\int\\frac{dx}{\\sqrt{4-(3x)^2}} = \\frac13\\int\\frac{du}{\\sqrt{4-u^2}} = \\frac13\\arcsin\\!\\left(\\frac{3x}{2}\\right)+C.$$ ✓✓

**(b)** Complete the square: $x^2+2x+2=(x+1)^2+1$. ✓
$$\\int\\frac{dx}{(x+1)^2+1} = \\arctan(x+1)+C.$$ ✓

**(c)** Let $u=3x$, $du=3\\,dx$:
$$\\int 2^{3x}\\,dx = \\frac13\\int2^u\\,du = \\frac{2^{3x}}{3\\ln2}+C.$$ ✓

**(d)** Let $u=e^x+1$, $du=e^x\\,dx$:
$$\\int\\frac{e^x}{e^x+1}\\,dx = \\int\\frac{du}{u} = \\ln(e^x+1)+C.$$ ✓
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
Let $I=\\displaystyle\\int e^x\\cos x\\,dx$. First application: $u=e^x$, $dv=\\cos x\\,dx$, so $du=e^x\\,dx$, $v=\\sin x$:
$$I = e^x\\sin x - \\int e^x\\sin x\\,dx.$$ ✓✓

Apply integration by parts again to $\\int e^x\\sin x\\,dx$: $u=e^x$, $dv=\\sin x\\,dx$, so $du=e^x\\,dx$, $v=-\\cos x$:
$$\\int e^x\\sin x\\,dx = -e^x\\cos x+\\int e^x\\cos x\\,dx = -e^x\\cos x + I.$$ ✓✓

Substituting back: $I = e^x\\sin x - \\big(-e^x\\cos x+I\\big) = e^x\\sin x+e^x\\cos x - I$, so $2I = e^x(\\sin x+\\cos x)$, giving
$$I = \\frac{e^x}{2}\\big(\\sin x+\\cos x\\big)+C.$$ ✓✓
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
Write $\\dfrac{x^2+1}{(x+1)^2(x-1)} = \\dfrac{A}{x+1}+\\dfrac{B}{(x+1)^2}+\\dfrac{C}{x-1}$, so
$$x^2+1 = A(x+1)(x-1)+B(x-1)+C(x+1)^2.$$ ✓✓

Setting $x=-1$: $2=B(-2) \\Rightarrow B=-1$.
Setting $x=1$: $2=C(4) \\Rightarrow C=\\tfrac12$.
Comparing coefficients of $x^2$: $1=A+C \\Rightarrow A=\\tfrac12$. ✓✓

$$\\int\\frac{x^2+1}{(x+1)^2(x-1)}\\,dx = \\int\\left(\\frac{1/2}{x+1}-\\frac{1}{(x+1)^2}+\\frac{1/2}{x-1}\\right)dx = \\frac12\\ln|x+1|+\\frac{1}{x+1}+\\frac12\\ln|x-1|+C.$$ ✓✓
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
**(a)** We need $9-x^2\\ge0$, so the domain is $[-3,3]$. $f(x)=0$ when $x=0$ or $9-x^2=0$, i.e. $x=0,\\pm3$; these are both the $x$-intercepts and (at $x=0$) the $y$-intercept. ✓✓

**(b)** $f(-x)=-x\\sqrt{9-x^2}=-f(x)$, so $f$ is **odd** (symmetric about the origin). Since the domain is the closed, bounded interval $[-3,3]$ (not an infinite interval, and the function is continuous throughout), there are no vertical or horizontal asymptotes — the graph simply ends (with a vertical tangent) at $x=\\pm3$. ✓✓

**(c)** Write $f(x)=x(9-x^2)^{1/2}$. By the product rule:
$$f'(x) = (9-x^2)^{1/2} + x\\cdot\\frac12(9-x^2)^{-1/2}(-2x) = \\frac{(9-x^2)-x^2}{\\sqrt{9-x^2}} = \\frac{9-2x^2}{\\sqrt{9-x^2}}.$$ ✓✓
$f'(x)=0$ when $9-2x^2=0 \\Rightarrow x=\\pm\\dfrac{3}{\\sqrt2}=\\pm\\dfrac{3\\sqrt2}{2}$ (both in $(-3,3)$).
The denominator is positive on $(-3,3)$, so the sign of $f'$ matches the sign of $9-2x^2$: positive for $|x|<\\tfrac{3\\sqrt2}{2}$, negative for $|x|>\\tfrac{3\\sqrt2}{2}$.
So $f$ increases on $\\left(-\\tfrac{3\\sqrt2}{2},\\tfrac{3\\sqrt2}{2}\\right)$ and decreases on the two outer sub-intervals, with a **local maximum** at $x=\\tfrac{3\\sqrt2}{2}$ ($f=\\tfrac92$) and a **local minimum** at $x=-\\tfrac{3\\sqrt2}{2}$ ($f=-\\tfrac92$). ✓

**(d)** Differentiating $f'(x)=(9-2x^2)(9-x^2)^{-1/2}$ with the product rule and simplifying:
$$f''(x) = \\frac{x(2x^2-27)}{(9-x^2)^{3/2}}.$$ ✓✓
On $(-3,3)$, $2x^2-27<0$ always (since $x^2\\le9<13.5$) and $(9-x^2)^{3/2}>0$, so the sign of $f''$ is opposite to the sign of $x$: $f''>0$ for $x<0$ and $f''<0$ for $x>0$.
So $f$ is **concave up on $(-3,0)$** and **concave down on $(0,3)$**, with an **inflection point at $(0,0)$**. ✓

**(e)** See the graph below — it shows the odd symmetry over the closed domain $[-3,3]$, the local max/min at $x=\\pm\\tfrac{3\\sqrt2}{2}$, and the inflection point at the origin. ✓✓
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
$$P'(x) = -0.02x+40 = 0 \\;\\Rightarrow\\; x=2000.$$ ✓✓

Since $P''(x)=-0.02<0$, this is a maximum. ✓

$$P(2000) = -0.01(2000)^2+40(2000)-5000 = -40\\,000+80\\,000-5000 = 35\\,000.$$ ✓✓✓

**Producing $2000$ units maximizes profit, at a maximum monthly profit of R$35\\,000$.**
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
The average value is
$$f_{\\text{avg}} = \\frac{1}{3-0}\\int_0^3(x^2+1)\\,dx = \\frac13\\left[\\frac{x^3}{3}+x\\right]_0^3.$$ ✓✓

$$= \\frac13\\big[9+3\\big] = \\frac13(12) = 4.$$ ✓✓

Setting $f(c)=4$:
$$c^2+1=4 \\;\\Rightarrow\\; c^2=3 \\;\\Rightarrow\\; c=\\sqrt3\\quad(\\text{taking the root in }[0,3]).$$ ✓✓

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
Write $\\displaystyle\\int\\sec^n x\\,dx=\\int\\sec^{n-2}x\\cdot\\sec^2x\\,dx$ and integrate by parts with $u=\\sec^{n-2}x$, $dv=\\sec^2x\\,dx$, so $du=(n-2)\\sec^{n-2}x\\tan x\\,dx$ and $v=\\tan x$. ✓✓

This gives $\\displaystyle\\int\\sec^n x\\,dx=\\sec^{n-2}x\\tan x-(n-2)\\int\\sec^{n-2}x\\tan^2x\\,dx$. ✓✓

Using $\\tan^2x=\\sec^2x-1$:
$$\\int\\sec^n x\\,dx=\\sec^{n-2}x\\tan x-(n-2)\\int\\sec^n x\\,dx+(n-2)\\int\\sec^{n-2}x\\,dx.$$ ✓✓

Collecting the $\\int\\sec^n x\\,dx$ terms on the left gives $(n-1)\\displaystyle\\int\\sec^n x\\,dx=\\sec^{n-2}x\\tan x+(n-2)\\int\\sec^{n-2}x\\,dx$; dividing by $(n-1)$ completes the proof. $\\blacksquare$ ✓✓
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
**(a)** This has the form $\\int \\dfrac{dx}{x\\sqrt{x^2-a^2}} = \\dfrac1a\\sec^{-1}\\!\\left(\\dfrac{|x|}{a}\\right)+C$ with $a=3$:
$$\\int\\frac{dx}{x\\sqrt{x^2-9}} = \\frac13\\sec^{-1}\\!\\left(\\frac{|x|}{3}\\right)+C.$$ ✓✓

**(b)** Complete the square: $9x^2+6x+2 = (3x+1)^2+1$. ✓
Let $u=3x+1$, $du=3\\,dx$:
$$\\int\\frac{dx}{(3x+1)^2+1} = \\frac13\\arctan(3x+1)+C.$$ ✓

**(c)** $\\displaystyle\\int 4e^{x/2}\\,dx = 4\\cdot2e^{x/2}+C = 8e^{x/2}+C.$ ✓

**(d)** Let $u=2x$, $du=2\\,dx$:
$$\\int\\tan(2x)\\,dx = \\frac12\\int\\tan u\\,du = -\\frac12\\ln|\\cos(2x)|+C.$$ ✓
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
First application: $u=x^2$, $dv=\\sin x\\,dx$, so $du=2x\\,dx$, $v=-\\cos x$:
$$\\int x^2\\sin x\\,dx = -x^2\\cos x + \\int 2x\\cos x\\,dx.$$ ✓✓

Second application on $\\int 2x\\cos x\\,dx$: $u=2x$, $dv=\\cos x\\,dx$, so $du=2\\,dx$, $v=\\sin x$:
$$\\int 2x\\cos x\\,dx = 2x\\sin x - \\int 2\\sin x\\,dx = 2x\\sin x+2\\cos x.$$ ✓✓

$$\\int x^2\\sin x\\,dx = -x^2\\cos x+2x\\sin x+2\\cos x+C.$$ ✓✓
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
Since $x^2+4$ has no real roots, write $\\dfrac{2x+3}{(x-1)(x^2+4)} = \\dfrac{A}{x-1}+\\dfrac{Bx+C}{x^2+4}$, so
$$2x+3 = A(x^2+4)+(Bx+C)(x-1).$$ ✓✓

Setting $x=1$: $5=5A \\Rightarrow A=1$.
Comparing coefficients of $x^2$: $0=A+B \\Rightarrow B=-1$.
Comparing constant terms: $3=4A-C \\Rightarrow C=4(1)-3=1$. ✓✓

$$\\frac{2x+3}{(x-1)(x^2+4)} = \\frac{1}{x-1}+\\frac{-x+1}{x^2+4} = \\frac{1}{x-1}-\\frac{x}{x^2+4}+\\frac{1}{x^2+4}.$$

$$\\int\\frac{2x+3}{(x-1)(x^2+4)}\\,dx = \\ln|x-1| - \\frac12\\ln(x^2+4) + \\frac12\\arctan\\!\\left(\\frac{x}{2}\\right)+C.$$ ✓✓
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
**(a)** The domain is $\\mathbb R\\setminus\\{-1,1\\}$. The numerator is $x(x^2-3)$, so the $x$-intercepts are $x=-\\sqrt3,0,\\sqrt3$; the $y$-intercept is $(0,0)$. Since $f(-x)=-f(x)$, $f$ is odd. ✓✓

**(b)** The denominator vanishes at $x=\\pm1$ and neither factor cancels, so $x=-1$ and $x=1$ are vertical asymptotes. Division gives $f(x)=x-\\dfrac{2x}{x^2-1}$, so the slant asymptote is $y=x$. ✓✓

**(c)** $f'(x)=1+\\dfrac{2(x^2+1)}{(x^2-1)^2}=\\dfrac{x^4+2x^2+3}{(x^2-1)^2}$. This is positive wherever defined, so $f$ is increasing on $(-\\infty,-1)$, $(-1,1)$ and $(1,\\infty)$, with no local extrema. ✓✓

**(d)** $f''(x)=-\\dfrac{4x(x^2+3)}{(x^2-1)^3}$. Thus $f$ is concave down on $(-\\infty,-1)$ and $(0,1)$, and concave up on $(-1,0)$ and $(1,\\infty)$. The only inflection point is $(0,0)$. ✓✓

**(e)** See the graph below — it shows the odd symmetry, the vertical asymptotes $x=\\pm1$, the slant asymptote $y=x$, the three $x$-intercepts, and the inflection point at the origin. ✓✓
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
The constraint $2\\pi r^2+2\\pi rh=300\\pi$ gives $h=\\dfrac{150-r^2}{r}$. Hence $V(r)=150\\pi r-\\pi r^3$. ✓✓

$V'(r)=150\\pi-3\\pi r^2=0$ gives $r=5\\sqrt2$. Since $V''(r)=-6\\pi r<0$, this is a maximum. The constraint gives $h=10\\sqrt2$ cm, and $V_{\\max}=500\\sqrt2\\pi\\text{ cm}^3$. ✓✓✓
        `
      },
      {
        number: 3, title: 'Volume of revolution (disk method)', section: '§8', marks: 8,
        prompt: `Let $R$ be the region between $y=3x-x^2$ and the $x$-axis. Find the volume generated when $R$ is revolved about the $x$-axis.`,
        solution: `
The intersections are $x=0$ and $x=3$, and the disk radius is $3x-x^2$. ✓✓
$$V=\\pi\\int_0^3(3x-x^2)^2dx=\\pi\\int_0^3(9x^2-6x^3+x^4)dx=\\frac{81\\pi}{10}.$$ ✓✓✓
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
Write $\\displaystyle\\int\\cos^n x\\,dx=\\int\\cos^{n-1}x\\cdot\\cos x\\,dx$ and integrate by parts with $u=\\cos^{n-1}x$, $dv=\\cos x\\,dx$, so $du=-(n-1)\\cos^{n-2}x\\sin x\\,dx$ and $v=\\sin x$. ✓✓

This gives $\\displaystyle\\int\\cos^n x\\,dx=\\cos^{n-1}x\\sin x+(n-1)\\int\\cos^{n-2}x\\sin^2x\\,dx$. ✓✓

Using $\\sin^2x=1-\\cos^2x$:
$$\\int\\cos^n x\\,dx=\\cos^{n-1}x\\sin x+(n-1)\\int\\cos^{n-2}x\\,dx-(n-1)\\int\\cos^n x\\,dx.$$ ✓✓

Collecting the $\\int\\cos^n x\\,dx$ terms on the left gives $n\\displaystyle\\int\\cos^n x\\,dx=\\cos^{n-1}x\\sin x+(n-1)\\int\\cos^{n-2}x\\,dx$; dividing by $n$ completes the proof. $\\blacksquare$ ✓✓
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
**(a)** $9x^2+12x+13=(3x+2)^2+9$, so the answer is $\\frac13\\arctan\\left(\\frac{3x+2}{3}\\right)+C$. ✓✓

**(b)** $\\displaystyle\\frac13\\arcsin\\left(\\frac{3x}{7}\\right)+C$. ✓✓

**(c)** $\\displaystyle\\frac{7^{2x-1}}{2\\ln7}+C$. ✓

**(d)** $\\ln|x^2+x+5|+C$. ✓
        `
      },
      {
        number: 6, title: 'Integration by parts with an inverse trigonometric factor', section: '§9.2', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int x\\arctan x\\,dx$.`,
        solution: `
Take $u=\\arctan x$, $dv=x\\,dx$. Then
$$\\int x\\arctan x\\,dx=\\frac{x^2}{2}\\arctan x-\\frac12\\int\\frac{x^2}{1+x^2}dx=\\frac{x^2}{2}\\arctan x-\\frac{x}{2}+\\frac12\\arctan x+C.$$ ✓✓✓
$$\\int x\\arctan x\\,dx=\\frac{x^2}{2}\\arctan x-\\frac12\\int\\frac{x^2}{1+x^2}dx=\\frac{x^2}{2}\\arctan x-\\frac{x}{2}+\\frac12\\arctan x+C.$$ ✓✓✓
        `
      },
      {
        number: 7, title: 'Partial fractions (linear factor and irreducible quadratic)', section: '§9.5', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int\\frac{2x^2+3x+1}{(x+2)(x^2+1)}dx$.`,
        solution: `
Use $\\dfrac{2x^2+3x+1}{(x+2)(x^2+1)}=\\dfrac{A}{x+2}+\\dfrac{Bx+C}{x^2+1}$. Coefficient matching gives $A=\\frac35$, $B=\\frac75$, $C=\\frac15$. ✓✓
$$\\int\\frac{2x^2+3x+1}{(x+2)(x^2+1)}dx=\\frac35\\ln|x+2|+\\frac7{10}\\ln(x^2+1)+\\frac15\\arctan x+C.$$ ✓✓
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
$f(0)=0$, so the only intercept is $(0,0)$. As $x\\to\\infty$, $f(x)\\to0^+$; as $x\\to-\\infty$, $f(x)\\to-\\infty$. There is no vertical asymptote and $y=0$ is a right-hand horizontal asymptote. ✓✓

$f'(x)=e^{-x}(1-x)$, so $f$ increases on $(-\\infty,1)$ and decreases on $(1,\\infty)$, with local maximum $(1,e^{-1})$. ✓✓

$f''(x)=e^{-x}(x-2)$, so it is concave down on $(-\\infty,2)$ and concave up on $(2,\\infty)$, with inflection point $(2,2e^{-2})$. ✓✓

The graph below shows the intercept at the origin, the local maximum, the inflection point, and the horizontal asymptote $y=0$ as $x\\to\\infty$. ✓✓
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
Let width $=x$, length $=2x$, height $=h$. Then $h=250/x^2$ and $S=4x^2+1500/x$. ✓✓
$S'(x)=0$ gives $x^3=375/2$. Since $S''(x)>0$, this is a minimum. With $a=\\sqrt[3]{375/2}$, the dimensions are $a\\times2a\\times4a$ cm. ✓✓✓
        `
      },
      {
        number: 3, title: 'Area between crossing curves', section: '§8', marks: 8,
        prompt: `Find the total area enclosed between $y=x$ and $y=x^3$ for $-1\\le x\\le1$.`,
        solution: `
The curves cross at $x=-1,0,1$, so split at $0$:
$$A=\\int_{-1}^0(x^3-x)dx+\\int_0^1(x-x^3)dx=2\\int_0^1(x-x^3)dx=\\frac12.$$ ✓✓✓
        `
      },
      {
        number: 4,
        title: 'Proof: Formula for ∫ eᵃˣcos(bx) dx',
        section: '§9.2',
        marks: 8,
        prompt: `
Let $f$ be integrable on $[a,b]$ and let $c\in[a,b]$. Prove the additivity property
$$\\int e^{ax}\\cos(bx)\\,dx=\\frac{e^{ax}}{a^2+b^2}\\big(a\\cos(bx)+b\\sin(bx)\\big)+C.$$ (8)
        `,
        solution: `
Let $I=\\displaystyle\\int e^{ax}\\cos(bx)\\,dx$. Integrate by parts with $u=e^{ax}$, $dv=\\cos(bx)\\,dx$, so $du=ae^{ax}\\,dx$ and $v=\\frac1b\\sin(bx)$:
$$I=\\frac1b e^{ax}\\sin(bx)-\\frac{a}{b}\\int e^{ax}\\sin(bx)\\,dx.$$ ✓✓

Integrate $\\displaystyle\\int e^{ax}\\sin(bx)\\,dx$ by parts again with $u=e^{ax}$, $dv=\\sin(bx)\\,dx$, so $du=ae^{ax}\\,dx$ and $v=-\\frac1b\\cos(bx)$:
$$\\int e^{ax}\\sin(bx)\\,dx=-\\frac1b e^{ax}\\cos(bx)+\\frac{a}{b}I.$$ ✓✓

Substituting back: $I=\\dfrac1b e^{ax}\\sin(bx)+\\dfrac{a}{b^2}e^{ax}\\cos(bx)-\\dfrac{a^2}{b^2}I$. ✓✓

Collecting the $I$ terms on the left gives $\\left(\\dfrac{a^2+b^2}{b^2}\\right)I=\\dfrac{e^{ax}}{b^2}\\big(a\\cos(bx)+b\\sin(bx)\\big)$; multiplying both sides by $\\dfrac{b^2}{a^2+b^2}$ gives $I=\\dfrac{e^{ax}}{a^2+b^2}\\big(a\\cos(bx)+b\\sin(bx)\\big)+C$. $\\blacksquare$ ✓✓
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
**(a)** $\\arcsin(x/6)+C$. **(b)** $9x^2+18x+13=9(x+1)^2+4$, so the answer is $\\frac16\\arctan\\left(\\frac{3(x+1)}{2}\\right)+C$. **(c)** $-\\frac14e^{3-4x}+C$. **(d)** $\\ln|2+\\sin x|+C$. ✓✓✓
        `
      },
      {
        number: 6, title: 'Integration by parts with a logarithm', section: '§9.2', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int\\ln(x^2+1)dx$.`,
        solution: `
Integration by parts with $u=\\ln(x^2+1)$ and $dv=dx$ gives
$$\\int\\ln(x^2+1)dx=x\\ln(x^2+1)-2x+2\\arctan x+C.$$ ✓✓✓
        `
      },
      {
        number: 7, title: 'Partial fractions (improper fraction)', section: '§9.5', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int\\frac{x^3+2x^2+5}{x^2+1}dx$.`,
        solution: `
Long division gives $\\dfrac{x^3+2x^2+5}{x^2+1}=x+2+\\dfrac{-x+3}{x^2+1}$. Therefore the integral is
$$\\frac{x^2}{2}+2x-\\frac12\\ln(x^2+1)+3\\arctan x+C.$$ ✓✓✓
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
The domain is $(0,\\infty)$ and the only intercept is $(1,0)$. As $x\\to0^+$, $f\\to-\\infty$, so $x=0$ is vertical; as $x\\to\\infty$, $f\\to0$, so $y=0$ is horizontal. ✓✓

$f'(x)=(1-\\ln x)/x^2$, hence increase on $(0,e)$ and decrease on $(e,\\infty)$, with local maximum $(e,1/e)$. Also $f''(x)=(2\\ln x-3)/x^3$, so concave down on $(0,e^{3/2})$, concave up on $(e^{3/2},\\infty)$, with inflection $\\left(e^{3/2},3/(2e^{3/2})\\right)$. ✓✓✓

The graph below shows the vertical asymptote at $x=0$, the $x$-intercept at $1$, the local maximum, and the inflection point. ✓✓
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
For a first-quadrant vertex, $y=3\\sqrt{1-x^2/25}$ and $A=4xy$. Maximising $A^2$ gives $x^2=25/2$, so $x=5/\\sqrt2$ and $y=3/\\sqrt2$. Therefore width $=5\\sqrt2$, height $=3\\sqrt2$, and maximum area $=30$. ✓✓✓
        `
      },
      {
        number: 3, title: 'Volume by slicing', section: '§8', marks: 8,
        prompt: `A pyramid has height $h$ and a square base of side length $b$. At height $x$ above the base, a cross-section parallel to the base is a square. Find its volume by integrating the cross-sectional areas.`,
        solution: `
Similar triangles give cross-section side $b(1-x/h)$ and area $A(x)=b^2(1-x/h)^2$. Thus
$$V=\\int_0^h b^2(1-x/h)^2dx=\\frac{b^2h}{3}.$$ ✓✓✓
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
**Case $p=1$:** $\\displaystyle\\int_1^\\infty\\frac{1}{x}\\,dx=\\lim_{t\\to\\infty}\\big[\\ln t-\\ln1\\big]=\\lim_{t\\to\\infty}\\ln t=\\infty$, so the integral diverges. ✓✓

**Case $p\\ne1$:**
$$\\int_1^\\infty\\frac{1}{x^p}\\,dx=\\lim_{t\\to\\infty}\\int_1^t x^{-p}\\,dx=\\lim_{t\\to\\infty}\\frac{t^{1-p}-1}{1-p}.$$ ✓✓✓

If $p>1$, then $1-p<0$, so $t^{1-p}=\\dfrac{1}{t^{p-1}}\\to0$ as $t\\to\\infty$; the limit equals $\\dfrac{0-1}{1-p}=\\dfrac{1}{p-1}$, so the integral converges. ✓✓

If $p<1$, then $1-p>0$, so $t^{1-p}\\to\\infty$ as $t\\to\\infty$, and the limit diverges. Combining all cases proves the result. $\\blacksquare$ ✓
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
**(a)** $\\frac18\\arctan(x/2)+C$. **(b)** $\\frac13\\arcsin(3x)+C$. **(c)** $\\frac{2^{x+1}}{\\ln2}+C$. **(d)** $\\ln|x^3-x+4|+C$. ✓✓✓
        `
      },
      {
        number: 6, title: 'Integration by parts with a trigonometric polynomial', section: '§9.2', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int x^2\\cos(2x)dx$.`,
        solution: `
Two integrations by parts yield
$$\\int x^2\\cos(2x)dx=\\frac{x^2}{2}\\sin(2x)+\\frac{x}{2}\\cos(2x)-\\frac14\\sin(2x)+C.$$ ✓✓✓
        `
      },
      {
        number: 7, title: 'Partial fractions (repeated irreducible quadratic)', section: '§9.5', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int\\frac{x^3+x^2+2x+1}{(x^2+1)^2}dx$.`,
        solution: `
Use $\\dfrac{Ax+B}{x^2+1}+\\dfrac{Cx+D}{(x^2+1)^2}$; matching coefficients gives $A=B=C=1$, $D=0$. Therefore
$$\\int\\frac{x^3+x^2+2x+1}{(x^2+1)^2}dx=\\frac12\\ln(x^2+1)+\\arctan x-\\frac{1}{2(x^2+1)}+C.$$ ✓✓✓
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
The numerator is $(x-2)^2+1>0$, so there are no $x$-intercepts. The $y$-intercept is $f(0)=-5$. ✓✓

Long division gives
$$f(x)=x-3+\\frac{2}{x-1}.$$
Thus $x=1$ is the vertical asymptote and $y=x-3$ is the slant asymptote. ✓✓

From the divided form,
$$f'(x)=1-\\frac{2}{(x-1)^2}=\\frac{(x-1)^2-2}{(x-1)^2}.$$
Critical points satisfy $(x-1)^2=2$, so $x=1\\pm\\sqrt2$. The derivative is positive for $|x-1|>\\sqrt2$ and negative for $0<|x-1|<\\sqrt2$. Hence $f$ increases on $(-\\infty,1-\\sqrt2)$ and $(1+\\sqrt2,\\infty)$, and decreases on $(1-\\sqrt2,1)$ and $(1,1+\\sqrt2)$. There is a local maximum at $x=1-\\sqrt2$, with $f=-2-2\\sqrt2$, and a local minimum at $x=1+\\sqrt2$, with $f=-2+2\\sqrt2$. ✓✓✓

$$f''(x)=\\frac{4}{(x-1)^3}.$$
Therefore $f$ is concave down on $(-\\infty,1)$ and concave up on $(1,\\infty)$; there is no inflection point because $x=1$ is not in the domain. ✓✓

The sketch has no $x$-intercepts, passes through $(0,-5)$, and approaches $x=1$ and $y=x-3$ as described. ✓✓
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
Let the width be $x$, the length $2x$, and the height $h$. The volume condition gives $2x^2h=288$, so $h=144/x^2$. ✓

Because the top is open, the surface area is
$$S(x)=2x^2+2(2xh)+2(xh)=2x^2+\\frac{864}{x}.$$ ✓

$$S'(x)=4x-\\frac{864}{x^2}=0 \\Rightarrow x^3=216 \\Rightarrow x=6.$$ ✓✓

Since $S''(x)=4+1728/x^3>0$, this is a minimum. Then $h=144/36=4$ cm and the length is $12$ cm. The dimensions are **$12\\text{ cm}\\times6\\text{ cm}\\times4\\text{ cm}$**. ✓✓
        `
      },
      {
        number: 3, title: 'Volume of revolution involving a logarithm', section: '§8', marks: 8,
        prompt: `Let $R$ be the region bounded by $y=\\ln x$, $y=0$, $x=1$ and $x=e$. Find the volume generated when $R$ is revolved about the $x$-axis.` ,
        solution: `
On $[1,e]$, $\\ln x\\ge0$, so the disk radius is $\\ln x$. Hence
$$V=\\pi\\int_1^e(\\ln x)^2\\,dx.$$ ✓✓

Using integration by parts, $\\displaystyle\\int(\\ln x)^2dx=x\\big[(\\ln x)^2-2\\ln x+2\\big]+C$. Therefore
$$V=\\pi\\left[x\\big((\\ln x)^2-2\\ln x+2\\big)\\right]_1^e=\\pi(e-2).$$ ✓✓✓

**Volume $=\\pi(e-2)$ cubic units.**
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
**(a)** $\\displaystyle\\frac15\\arcsin\\!\\left(\\frac{5x}{4}\\right)+C$. ✓✓

**(b)** Since $x^2-4x+8=(x-2)^2+4$,
$$\\int\\frac{dx}{x^2-4x+8}=\\frac12\\arctan\\!\\left(\\frac{x-2}{2}\\right)+C.$$ ✓✓

**(c)** $\\displaystyle\\int3^{2x+1}dx=\\frac{3^{2x+1}}{2\\ln3}+C$. ✓

**(d)** The numerator is the derivative of the denominator, so the answer is $\\ln|x^2-3x+7|+C$. ✓
        `
      },
      {
        number: 6, title: 'Integration by parts with exponential and trigonometric factors', section: '§9.2', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int e^{2x}\\sin(3x)\\,dx$.`,
        solution: `
Let $I=\\int e^{2x}\\sin(3x)dx$ and $J=\\int e^{2x}\\cos(3x)dx$. Integration by parts gives
$$I=-\\frac13e^{2x}\\cos(3x)+\\frac23J,$$
and a second application gives
$$J=\\frac13e^{2x}\\sin(3x)-\\frac23I.$$ ✓✓✓

Substitution yields $I=-\\frac13e^{2x}\\cos(3x)+\\frac29e^{2x}\\sin(3x)-\\frac49I$, so
$$I=\\frac{e^{2x}}{13}\\big(2\\sin(3x)-3\\cos(3x)\\big)+C.$$ ✓✓✓
        `
      },
      {
        number: 7, title: 'Partial fractions (improper fraction with a repeated factor)', section: '§9.5', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int\\frac{2x^3+3x^2+x+4}{x^2(x+1)}\\,dx$.`,
        solution: `
Long division gives
$$\\frac{2x^3+3x^2+x+4}{x^2(x+1)}=2+\\frac{x^2+x+4}{x^2(x+1)}.$$ ✓

Write
$$\\frac{x^2+x+4}{x^2(x+1)}=\\frac{A}{x}+\\frac{B}{x^2}+\\frac{C}{x+1}.$$
Then $x^2+x+4=A x(x+1)+B(x+1)+Cx^2$, which gives $A=-3$, $B=4$, $C=4$. ✓✓

Therefore
$$\\int\\frac{2x^3+3x^2+x+4}{x^2(x+1)}dx=2x-3\\ln|x|-\\frac4x+4\\ln|x+1|+C.$$ ✓✓✓
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
Factor $f(x)=x^3(x^2-5)$, so the intercepts are $x=-\\sqrt5,0,\\sqrt5$ (and the $y$-intercept is $(0,0)$). Since the leading term is $x^5$, $f(x)\\to-\\infty$ as $x\\to-\\infty$ and $f(x)\\to\\infty$ as $x\\to\\infty$. ✓✓

$$f'(x)=5x^4-15x^2=5x^2(x^2-3).$$
Thus $f'>0$ when $|x|>\\sqrt3$ and $f'<0$ when $0<|x|<\\sqrt3$. The function increases on $(-\\infty,-\\sqrt3)$ and $(\\sqrt3,\\infty)$, and decreases on $(-\\sqrt3,0)$ and $(0,\\sqrt3)$. There is a local maximum at $(-\\sqrt3,6\\sqrt3)$ and a local minimum at $(\\sqrt3,-6\\sqrt3)$. At $x=0$, $f'=0$ but the sign does not change, so it is stationary but not an extremum. ✓✓✓

$$f''(x)=20x^3-30x=10x(2x^2-3).$$
The inflection points occur at $x=0$ and $x=\\pm\\sqrt{3/2}$. The signs give concave down on $(-\\infty,-\\sqrt{3/2})$ and $(0,\\sqrt{3/2})$, and concave up on $(-\\sqrt{3/2},0)$ and $(\\sqrt{3/2},\\infty)$. Their coordinates are
$$\\left(-\\sqrt{\\frac32},\\frac{21\\sqrt6}{8}\\right),\\quad(0,0),\\quad\\left(\\sqrt{\\frac32},-\\frac{21\\sqrt6}{8}\\right).$$ ✓✓✓

The sketch follows from the odd symmetry, the three intercepts, the two extrema, and the three inflection points. ✓✓
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
If the cylinder has radius $r$ and height $h$, then $r^2+(h/2)^2=R^2$, so $h=2\\sqrt{R^2-r^2}$. Thus
$$V(r)=2\\pi r^2\\sqrt{R^2-r^2}.$$ ✓✓

Differentiating (or maximising $V^2$) gives the non-zero critical point $r^2=\\frac23R^2$. Hence
$$r=R\\sqrt{\\frac23},\\qquad h=2\\sqrt{R^2-\\frac23R^2}=\\frac{2R}{\\sqrt3}.$$ ✓✓

The volume is zero at the endpoints and this interior critical point is therefore the maximum. ✓✓
        `
      },
      {
        number: 3, title: 'Volume by cylindrical shells', section: '§8', marks: 8,
        prompt: `Let $R$ be the region bounded by $y=\\ln x$, $y=0$, $x=1$ and $x=e$. Find the volume generated when $R$ is revolved about the $y$-axis.`,
        solution: `
Using cylindrical shells, a shell at $x$ has radius $x$ and height $\\ln x$. Therefore
$$V=2\\pi\\int_1^e x\\ln x\\,dx.$$ ✓✓

Integration by parts gives $\\displaystyle\\int x\\ln x\\,dx=\\frac{x^2}{2}\\ln x-\\frac{x^2}{4}$. Hence
$$V=2\\pi\\left[\\frac{x^2}{2}\\ln x-\\frac{x^2}{4}\\right]_1^e
=2\\pi\\left(\\frac{e^2}{4}+\\frac14\\right)=\\frac{\\pi(e^2+1)}{2}.$$ ✓✓✓
        `
      },
      {
        number: 4, title: 'Proof: Mean Value Theorem for Integrals', section: '§8', marks: 8,
        prompt: `
Let $f$ be continuous on $[a,b]$, with $a<b$. Prove that there exists $c\\in[a,b]$ such that
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
**(a)** $\\displaystyle\\frac14\\arcsin\\!\\left(\\frac{4x}{3}\\right)+C$. ✓✓

**(b)** Since $4x^2-4x+5=(2x-1)^2+4$,
$$\\int\\frac{dx}{4x^2-4x+5}=\\frac14\\arctan\\!\\left(\\frac{2x-1}{2}\\right)+C.$$ ✓✓

**(c)** $\\displaystyle\\int e^{5-2x}dx=-\\frac12e^{5-2x}+C$. ✓

**(d)** With $u=1+\\sin x$, $du=\\cos xdx$, the answer is $\\ln|1+\\sin x|+C$. ✓
        `
      },
      {
        number: 6, title: 'Integration by parts with a logarithmic factor', section: '§9.2', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int\\frac{\\ln x}{x^2}\\,dx$, for $x>0$.`,
        solution: `
Take $u=\\ln x$ and $dv=x^{-2}dx$. Then $du=\\dfrac1x dx$ and $v=-\\dfrac1x$:
$$\\int\\frac{\\ln x}{x^2}dx=-\\frac{\\ln x}{x}+\\int\\frac{1}{x^2}dx=-\\frac{\\ln x+1}{x}+C.$$ ✓✓✓
        `
      },
      {
        number: 7, title: 'Partial fractions (three distinct linear factors)', section: '§9.5', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int\\frac{2x^2-x+5}{(x-1)(x+2)(x-3)}\\,dx$.`,
        solution: `
Write
$$\\frac{2x^2-x+5}{(x-1)(x+2)(x-3)}=\\frac{A}{x-1}+\\frac{B}{x+2}+\\frac{C}{x-3}.$$
Using $x=1,-2,3$ gives $A=-1$, $B=1$, and $C=2$. ✓✓✓

Therefore
$$\\int\\frac{2x^2-x+5}{(x-1)(x+2)(x-3)}dx=-\\ln|x-1|+\\ln|x+2|+2\\ln|x-3|+C.$$ ✓✓✓
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
Factor $f(x)=x^4(x^2-3)$, so the intercepts are $x=0$ and $x=\\pm\\sqrt3$; the $y$-intercept is $(0,0)$. Since the leading term is positive and degree six, $f(x)\\to+\\infty$ as $x\\to\\pm\\infty$. The function is even. ✓✓

$$f'(x)=6x^5-12x^3=6x^3(x^2-2).$$
The sign chart gives decrease on $(-\\infty,-\\sqrt2)$, increase on $(-\\sqrt2,0)$, decrease on $(0,\\sqrt2)$, and increase on $(\\sqrt2,\\infty)$. Thus there are local minima at $(\\pm\\sqrt2,-4)$ and a local maximum at $(0,0)$. ✓✓✓

$$f''(x)=30x^4-36x^2=6x^2(5x^2-6).$$
The concavity changes at $x=\\pm\\sqrt{6/5}$ (but not at $x=0$, because the sign remains negative on both sides). Hence the graph is concave up for $|x|>\\sqrt{6/5}$ and concave down for $|x|<\\sqrt{6/5}$, with inflection points
$$\\left(\\pm\\sqrt{\\frac65},-\\frac{324}{125}\\right).$$ ✓✓✓

The sketch is symmetric about the $y$-axis and passes through the listed intercepts and extrema. ✓✓
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
Let the radius be $r$ and height $h$. The volume constraint gives $h=500/r^2$. Taking the side-area cost as one unit, the relative cost is
$$C(r)=2(2\\pi r^2)+2\\pi rh=4\\pi r^2+\\frac{1000\\pi}{r}.$$ ✓✓

$$C'(r)=8\\pi r-\\frac{1000\\pi}{r^2}=0\\Rightarrow r^3=125\\Rightarrow r=5.$$ ✓✓

Since $C''(r)=8\\pi+2000\\pi/r^3>0$, this is the minimum. The height is $h=500/25=20$ cm. **Radius $5$ cm and height $20$ cm.** ✓✓
        `
      },
      {
        number: 3, title: 'Hydrostatic force on a triangular plate', section: '§8', marks: 8,
        prompt: `A vertical triangular plate is submerged in water with its top vertex at the surface and its horizontal base $3$ m below the surface. The triangle has width $3$ m at its base. Using water density $1000\\text{ kg/m}^3$ and $g=9.8\\text{ m/s}^2$, find the hydrostatic force on one face of the plate.`,
        solution: `
Measure depth $y$ downward from the surface. At depth $y$, similar triangles give the width $w(y)=y$ (the width grows from $0$ at the vertex to $3$ at $y=3$). A horizontal strip has area $w(y)dy$, pressure $\\rho gy$, and force $dF=\\rho gy\\,w(y)dy$. ✓✓

Therefore
$$F=1000(9.8)\\int_0^3 y\\cdot y\\,dy=9800\\left[\\frac{y^3}{3}\\right]_0^3=9800(9)=88200\\text{ N}.$$ ✓✓✓

**Hydrostatic force $=88\\,200\\text{ N}$.** ✓✓
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
**(a)** Using $\\displaystyle\\int\\frac{dx}{x\\sqrt{x^2-a^2}}=\\frac1a\\sec^{-1}\\!\\left(\\frac{|x|}{a}\\right)+C$ with $a=4$,
$$\\frac14\\sec^{-1}\\!\\left(\\frac{|x|}{4}\\right)+C.$$ ✓✓

**(b)** $x^2+6x+13=(x+3)^2+4$, so the integral is $\\displaystyle\\frac12\\arctan\\!\\left(\\frac{x+3}{2}\\right)+C$. ✓✓

**(c)** $\\displaystyle\\int4^{-x}dx=-\\frac{4^{-x}}{\\ln4}+C$. ✓

**(d)** $\\displaystyle\\ln|x^5+2|+C$. ✓
        `
      },
      {
        number: 6, title: 'Integration by parts', section: '§9.2', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int x\\arctan(3x)\\,dx$.`,
        solution: `
Let $u=\\arctan(3x)$ and $dv=x\\,dx$. Then $du=\\dfrac{3}{1+9x^2}dx$ and $v=x^2/2$:
$$\\int x\\arctan(3x)dx=\\frac{x^2}{2}\\arctan(3x)-\\frac32\\int\\frac{x^2}{1+9x^2}dx.$$ ✓✓

Using $\\dfrac{x^2}{1+9x^2}=\\dfrac19\\left(1-\\dfrac1{1+9x^2}\\right)$ gives
$$\\int x\\arctan(3x)dx=\\frac{x^2}{2}\\arctan(3x)-\\frac{x}{6}+\\frac1{18}\\arctan(3x)+C.$$ ✓✓✓
        `
      },
      {
        number: 7, title: 'Partial fractions (repeated linear factor)', section: '§9.5', marks: 6,
        prompt: `Evaluate $\\displaystyle\\int\\frac{x^2+3x+1}{x(x-2)^2}\\,dx$.`,
        solution: `
The decomposition is
$$\\frac{x^2+3x+1}{x(x-2)^2}=\\frac{1/4}{x}+\\frac{3/4}{x-2}+\\frac{11/2}{(x-2)^2}.$$ ✓✓

Integrating term by term,
$$\\int\\frac{x^2+3x+1}{x(x-2)^2}dx=\\frac14\\ln|x|+\\frac34\\ln|x-2|-\\frac{11}{2(x-2)}+C.$$ ✓✓✓
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
  solution: `Since $f(x)\\ge0$ on $[a,b]$, every Riemann-sum term satisfies $f(x_i^*)\\ge0$. With $\\Delta x_i\\ge0$,
$$f(x_i^*)\\Delta x_i\\ge0$$
for every subinterval. Therefore each Riemann sum is non-negative, and taking the limit gives
$$\\int_a^b f(x)\\,dx\\ge0.$$ ✓✓✓
This proves non-negativity. $\\blacksquare$ ✓✓`
};

EXAMS.find(p => p.id === 'paper11').questions[3] = {
  number: 4, title: 'Proof: Domination rule for definite integrals', section: '§8', marks: 8,
  prompt: `Suppose $f(x)\\ge g(x)$ for all $x\\in[a,b]$. Prove that
$$\\int_a^b f(x)\\,dx\\ge \\int_a^b g(x)\\,dx.$$ (8)`,
  solution: `Define $h(x)=f(x)-g(x)$. Then $h(x)\\ge0$ on $[a,b]$. By the non-negativity property,
$$\\int_a^b h(x)\\,dx\\ge0.$$ ✓✓
Using the difference rule,
$$\\int_a^b f(x)\\,dx-\\int_a^b g(x)\\,dx\\ge0,$$
so $\\int_a^b f(x)\\,dx\\ge \\int_a^b g(x)\\,dx$. $\\blacksquare$ ✓✓✓`
};

EXAMS.find(p => p.id === 'paper12').questions[3] = {
  number: 4, title: 'Proof: Absolute-value inequality for definite integrals', section: '§8', marks: 8,
  prompt: `Prove that
$$\\left|\\int_a^b f(x)\\,dx\\right|\\le \\int_a^b |f(x)|\\,dx.$$ (8)`,
  solution: `For every $x\\in[a,b]$, we have $f(x)\\le |f(x)|$ and $-f(x)\\le |f(x)|$. Integrating both inequalities gives
$$\\int_a^b f(x)\\,dx\\le \\int_a^b |f(x)|\\,dx,$$
and
$$-\\int_a^b f(x)\\,dx\\le \\int_a^b |f(x)|\\,dx.$$ ✓✓✓
These two inequalities are equivalent to
$$\\left|\\int_a^b f(x)\\,dx\\right|\\le \\int_a^b |f(x)|\\,dx.$$ ✓✓
This proves the absolute-value inequality. $\\blacksquare$ ✓`
};
