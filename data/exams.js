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
 */

const EXAMS = [
  // ═══════════════════════════════════════════════════════════════
  // PRACTICE PAPER 1
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'paper1',
    label: 'Practice Paper 1',
    date: 'Practice Test A',
    totalMarks: 40,
    duration: 40,
    scopeTags: ['§6.5 Curve sketching', '§6.6 Optimization', '§8 Integration applications', '§9.1 Inverse trig / exp / log integrals', '§9.2 Integration by parts', '§9.5 Partial fractions'],
    questions: [
      {
        number: 1,
        title: 'Curve sketching',
        section: '§6.5',
        marks: 8,
        prompt: `
Let $\\displaystyle f(x) = \\frac{x^2 - 4x + 1}{(x-1)^2}$.

**(a)** Find the $x$-intercepts and the $y$-intercept of $f$. (2)

**(b)** Find the horizontal and vertical asymptotes of $f$. (2)

**(c)** Given that $\\displaystyle f'(x) = \\frac{2(x+1)}{(x-1)^3}$, find the intervals on which $f$ is increasing and decreasing, and locate any local extrema. (2)

**(d)** Given that $\\displaystyle f''(x) = \\frac{-4(x+2)}{(x-1)^4}$, find the intervals of concavity and any points of inflection. (2)
        `,
        solution: `
**(a)** $x$-intercepts: solve $x^2-4x+1=0 \\Rightarrow x = \\dfrac{4\\pm\\sqrt{12}}{2} = 2\\pm\\sqrt3$. ✓
$y$-intercept: $f(0) = \\dfrac{1}{1} = 1$. ✓

**(b)** As $x\\to\\pm\\infty$, $f(x)\\to 1$, so $y=1$ is a horizontal asymptote. ✓
The denominator vanishes at $x=1$ while the numerator does not ($1-4+1=-2\\neq0$), so $x=1$ is a vertical asymptote. ✓

**(c)** $f'(x)=0$ when $x=-1$; $f'$ is undefined at $x=1$ (not in the domain).
Sign chart on $(-\\infty,-1),(-1,1),(1,\\infty)$: $f'>0,\\;f'<0,\\;f'>0$. ✓
So $f$ is increasing on $(-\\infty,-1)$ and $(1,\\infty)$, decreasing on $(-1,1)$, with a **local maximum** at $x=-1$, $f(-1)=\\tfrac32$. ✓

**(d)** $f''(x)=0$ when $x=-2$. Since $(x-1)^4>0$ always, the sign of $f''$ is the sign of $-(x+2)$: positive for $x<-2$, negative for $x>-2$. ✓
So $f$ is concave up on $(-\\infty,-2)$ and concave down on $(-2,1)$ and $(1,\\infty)$, with an **inflection point** at $\\left(-2,\\tfrac{13}{9}\\right)$. ✓
        `
      },
      {
        number: 2,
        title: 'Optimization',
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
Evaluate $\\displaystyle \\int x^2 e^x\\,dx$ using integration by parts (you will need to apply it twice).
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
        title: 'Partial fraction decomposition',
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
    totalMarks: 40,
    duration: 40,
    scopeTags: ['§6.5 Curve sketching', '§6.6 Optimization', '§8 Integration applications', '§9.1 Inverse trig / exp / log integrals', '§9.2 Integration by parts', '§9.5 Partial fractions'],
    questions: [
      {
        number: 1,
        title: 'Curve sketching (slant asymptote)',
        section: '§6.5',
        marks: 8,
        prompt: `
Let $\\displaystyle f(x) = \\frac{x^2+3}{x-2}$. Note that $f(x) = x+2+\\dfrac{7}{x-2}$.

**(a)** Find the $x$- and $y$-intercepts of $f$ (if any). (2)

**(b)** Find the vertical and slant (oblique) asymptotes of $f$. (2)

**(c)** Given that $\\displaystyle f'(x) = 1-\\frac{7}{(x-2)^2}$, find the intervals of increase/decrease and locate any local extrema. (2)

**(d)** Given that $\\displaystyle f''(x) = \\frac{14}{(x-2)^3}$, discuss the concavity of $f$. (2)
        `,
        solution: `
**(a)** $x^2+3=0$ has no real solutions, so there are **no $x$-intercepts**. ✓
$y$-intercept: $f(0) = \\dfrac{3}{-2} = -\\dfrac32$. ✓

**(b)** The denominator vanishes at $x=2$ (numerator $=7\\ne0$ there), so $x=2$ is a vertical asymptote. ✓
Since $\\dfrac{7}{x-2}\\to0$ as $x\\to\\pm\\infty$, the slant asymptote is $y=x+2$. ✓

**(c)** $f'(x)=0 \\Rightarrow (x-2)^2=7 \\Rightarrow x = 2\\pm\\sqrt7$. ✓
Since $(x-2)^2-7<0$ between $2-\\sqrt7$ and $2+\\sqrt7$, $f'<0$ there (decreasing), and $f'>0$ outside that interval (increasing). ✓
**Local maximum** at $x=2-\\sqrt7$, $f=4-2\\sqrt7$; **local minimum** at $x=2+\\sqrt7$, $f=4+2\\sqrt7$. ✓

**(d)** $f''(x)$ is negative for $x<2$ and positive for $x>2$ (never zero), so $f$ is **concave down on $(-\\infty,2)$** and **concave up on $(2,\\infty)$**, with no inflection point (only the asymptote at $x=2$). ✓✓
        `
      },
      {
        number: 2,
        title: 'Optimization',
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
        title: 'Partial fraction decomposition',
        section: '§9.5',
        marks: 6,
        prompt: `
**(a)** Evaluate $\\displaystyle \\int \\frac{x+7}{x^2-x-2}\\,dx$. (6)

**(b)** [Bonus question]. Evaluate $\\displaystyle \\int \\frac{x^2}{x^2-1}\\,dx$. Note that here the numerator's degree is **not** less than the denominator's, so you will need to divide first. (3)
        `,
        solution: `
**(a)** Factor the denominator: $x^2-x-2 = (x-2)(x+1)$. ✓

Write $\\dfrac{x+7}{(x-2)(x+1)} = \\dfrac{A}{x-2}+\\dfrac{B}{x+1}$, so $x+7 = A(x+1)+B(x-2)$. ✓

Setting $x=2$: $9=3A \\Rightarrow A=3$.
Setting $x=-1$: $6=-3B \\Rightarrow B=-2$. ✓✓

$$\\int\\frac{x+7}{x^2-x-2}\\,dx = \\int\\left(\\frac{3}{x-2}-\\frac{2}{x+1}\\right)dx = 3\\ln|x-2|-2\\ln|x+1|+C.$$ ✓✓

**(b)** [Bonus]. Since the numerator and denominator both have degree $2$, this fraction is **improper** — partial fractions cannot be applied directly. Divide first: ✓
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
    totalMarks: 40,
    duration: 40,
    scopeTags: ['§6.5 Curve sketching', '§6.6 Optimization', '§8 Integration applications', '§9.1 Inverse trig / exp / log integrals', '§9.2 Integration by parts', '§9.5 Partial fractions'],
    questions: [
      {
        number: 1,
        title: 'Curve sketching (two vertical asymptotes)',
        section: '§6.5',
        marks: 8,
        prompt: `
Let $\\displaystyle f(x) = \\frac{x^2-9}{x^2-4}$ (note $f$ is an even function).

**(a)** Find the $x$-intercepts and $y$-intercept of $f$. (2)

**(b)** Find all vertical asymptotes and the horizontal asymptote of $f$. (2)

**(c)** Given that $\\displaystyle f'(x) = \\frac{10x}{(x^2-4)^2}$, find the intervals of increase/decrease and any local extrema. (2)

**(d)** Given that $\\displaystyle f''(x) = \\frac{-10(3x^2+4)}{(x^2-4)^3}$, discuss the concavity of $f$. (2)
        `,
        solution: `
**(a)** $x^2-9=0 \\Rightarrow x=\\pm3$. ✓
$y$-intercept: $f(0) = \\dfrac{-9}{-4} = \\dfrac94$. ✓

**(b)** The denominator $x^2-4=0$ at $x=\\pm2$, where the numerator is $-5\\ne0$, so $x=2$ and $x=-2$ are vertical asymptotes. ✓
As $x\\to\\pm\\infty$, $f(x)\\to1$, so $y=1$ is the horizontal asymptote. ✓

**(c)** $f'(x)=0$ only at $x=0$ (the denominator is always positive where defined). ✓
$f'<0$ for $x<0$ and $f'>0$ for $x>0$ (on the domain), so $f$ is decreasing on $(-\\infty,-2)\\cup(-2,0)$ and increasing on $(0,2)\\cup(2,\\infty)$, with a **local minimum** at $x=0$, $f(0)=\\tfrac94$. ✓

**(d)** Since $3x^2+4>0$ always, the sign of $f''$ is opposite to the sign of $(x^2-4)$: $f''>0$ when $|x|<2$ and $f''<0$ when $|x|>2$. ✓
So $f$ is **concave up on $(-2,2)$** and **concave down on $(-\\infty,-2)$ and $(2,\\infty)$**; there are no inflection points (sign changes only occur at the asymptotes). ✓
        `
      },
      {
        number: 2,
        title: 'Optimization',
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
        title: 'Partial fraction decomposition (repeated factor)',
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
  }
];
