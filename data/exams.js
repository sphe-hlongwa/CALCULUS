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
 * different problem types across the six papers (not just one
 * box/related-rate template repeated), and the partial-fractions
 * question rotates through every standard case: distinct linear
 * factors (2 and 3 factors), a repeated linear factor, an irreducible
 * quadratic factor, and an improper fraction requiring long division.
 */

const EXAMS = [
  // ═══════════════════════════════════════════════════════════════
  // PRACTICE PAPER 1
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'paper1',
    label: 'Practice Paper 1',
    date: 'Practice Test A',
    totalMarks: 42,
    duration: 42,
    scopeTags: ['§6.5 Curve sketching', '§6.6 Optimization', '§8 Integration applications', '§9.1 Inverse trig / exp / log integrals', '§9.2 Integration by parts', '§9.5 Partial fractions'],
    questions: [
      {
        number: 1,
        title: 'Curve sketching',
        section: '§6.5',
        marks: 10,
        prompt: `
Let $\\displaystyle f(x) = \\frac{x^2 - 4x + 1}{(x-1)^2}$.

**(a)** Find the $x$-intercepts and the $y$-intercept of $f$. (2)

**(b)** Find the horizontal and vertical asymptotes of $f$. (2)

**(c)** Find $f'(x)$, and hence determine the intervals on which $f$ is increasing and decreasing, and locate any local extrema. (3)

**(d)** Find $f''(x)$, and hence determine the intervals of concavity and any points of inflection. (3)
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
        `
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
        number: 5,
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
        number: 6,
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
    totalMarks: 42,
    duration: 42,
    scopeTags: ['§6.5 Curve sketching', '§6.6 Optimization', '§8 Integration applications', '§9.1 Inverse trig / exp / log integrals', '§9.2 Integration by parts', '§9.5 Partial fractions'],
    questions: [
      {
        number: 1,
        title: 'Curve sketching (slant asymptote)',
        section: '§6.5',
        marks: 10,
        prompt: `
Let $\\displaystyle f(x) = \\frac{x^2+3}{x-2}$.

**(a)** Find the $x$- and $y$-intercepts of $f$ (if any). (2)

**(b)** Perform polynomial long division on $f(x)$, and hence find the vertical and slant (oblique) asymptotes of $f$. (2)

**(c)** Find $f'(x)$, and hence determine the intervals of increase/decrease and locate any local extrema. (3)

**(d)** Find $f''(x)$, and hence discuss the concavity of $f$. (3)
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
        `
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
        number: 5,
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
        number: 6,
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
    totalMarks: 42,
    duration: 42,
    scopeTags: ['§6.5 Curve sketching', '§6.6 Optimization', '§8 Integration applications', '§9.1 Inverse trig / exp / log integrals', '§9.2 Integration by parts', '§9.5 Partial fractions'],
    questions: [
      {
        number: 1,
        title: 'Curve sketching (two vertical asymptotes)',
        section: '§6.5',
        marks: 10,
        prompt: `
Let $\\displaystyle f(x) = \\frac{x^2-9}{x^2-4}$.

**(a)** Find the $x$-intercepts and $y$-intercept of $f$. (2)

**(b)** Find all vertical asymptotes and the horizontal asymptote of $f$. (2)

**(c)** Find $f'(x)$, and hence determine the intervals of increase/decrease and any local extrema. (3)

**(d)** Find $f''(x)$, and hence discuss the concavity of $f$. (3)
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
        `
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
        number: 5,
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
        number: 6,
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
    totalMarks: 42,
    duration: 42,
    scopeTags: ['§6.5 Curve sketching', '§6.6 Optimization', '§8 Integration applications', '§9.1 Inverse trig / exp / log integrals', '§9.2 Integration by parts', '§9.5 Partial fractions'],
    questions: [
      {
        number: 1,
        title: 'Curve sketching (polynomial)',
        section: '§6.5',
        marks: 10,
        prompt: `
Let $f(x) = x^4-4x^3$.

**(a)** Find the $x$- and $y$-intercepts of $f$. (2)

**(b)** Describe the end behaviour of $f$ as $x\\to\\pm\\infty$. (1)

**(c)** Find $f'(x)$, and hence determine the intervals of increase/decrease and any local extrema. Comment on what happens at $x=0$. (4)

**(d)** Find $f''(x)$, and hence determine the intervals of concavity and any points of inflection. (3)
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
        `
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
        number: 5,
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
        number: 6,
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
    totalMarks: 42,
    duration: 42,
    scopeTags: ['§6.5 Curve sketching', '§6.6 Optimization', '§8 Integration applications', '§9.1 Inverse trig / exp / log integrals', '§9.2 Integration by parts', '§9.5 Partial fractions'],
    questions: [
      {
        number: 1,
        title: 'Curve sketching (removable discontinuity)',
        section: '§6.5',
        marks: 10,
        prompt: `
Let $\\displaystyle f(x) = \\frac{(x-3)(x+1)}{(x-3)(x-1)}$.

**(a)** State the domain of $f$, simplify $f(x)$, and identify any point(s) of removable discontinuity (holes). Find the $x$- and $y$-intercepts. (3)

**(b)** Find the vertical and horizontal asymptotes of $f$. (2)

**(c)** Find $f'(x)$ (using the simplified form), and hence determine the intervals of increase/decrease and any local extrema. (3)

**(d)** Find $f''(x)$, and hence discuss the concavity of $f$. (2)
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
        `
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
        number: 5,
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
        number: 6,
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
    totalMarks: 42,
    duration: 42,
    scopeTags: ['§6.5 Curve sketching', '§6.6 Optimization', '§8 Integration applications', '§9.1 Inverse trig / exp / log integrals', '§9.2 Integration by parts', '§9.5 Partial fractions'],
    questions: [
      {
        number: 1,
        title: 'Curve sketching (restricted domain)',
        section: '§6.5',
        marks: 10,
        prompt: `
Let $f(x) = x\\sqrt{9-x^2}$.

**(a)** State the domain of $f$, and find the $x$- and $y$-intercepts. (2)

**(b)** What symmetry does $f$ have? Explain why $f$ has no asymptotes. (2)

**(c)** Find $f'(x)$, and hence determine the intervals of increase/decrease and any local extrema. (3)

**(d)** Find $f''(x)$, and hence determine the concavity of $f$ and any points of inflection. (3)
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
        `
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
        number: 5,
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
        number: 6,
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
  }
];
