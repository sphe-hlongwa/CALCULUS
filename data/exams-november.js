/**
 * data/exams-november.js — November practice exams
 *
 * Nine original 90-mark / 2-hour practice papers, laid out like the
 * MATH1036 November 2024 examination:
 *   Section A  six multiple-choice questions          (14 marks: 2, 3, 2, 3, 2, 2)
 *   Section B  B1-B8 guided written questions         (76 marks: 11, 9, 10, 10, 9, 9, 8, 10)
 *
 * EXAM SCOPE (every question below sits inside it, nothing outside it):
 *   §6.6   Applied optimization (Semester 1)
 *   §9     Advanced integration techniques (Semester 2)
 *            9.1 inverse-trig / exponential / logarithmic integrals (completing the square, f'/f)
 *            9.2 integration by parts revisited (hyperbolic integrals, proving and applying reduction formulas)
 *            9.4 trigonometric integrals (sin kx, cos kx, powers, products, different arguments)
 *            EXCLUDED: 9.3 trigonometric substitutions, 9.4.5 powers of tan/cot, 9.5 partial fractions
 *   §10    Improper integrals (the whole chapter)
 *   §11    Infinite sequences and series (11.1-11.6)
 *            EXCLUDED: 11.7 binomial series
 *   §12    Differential equations (12.0 verifying solutions, 12.1 separable, 12.3 first-order linear)
 *            EXCLUDED: 12.2 homogeneous, 12.4 exact
 *
 * Every paper has the same blueprint, so the nine papers are balanced but share no question:
 *   A1 §6.6 optimization setup   A2 §9 integral         A3 §10 improper integral
 *   A4 §11.1-11.3 series         A5 §11.4-11.6          A6 §12 differential equation
 *   B1 §6.6 optimization (7-step workflow, one of: triangle / open box / wire / cylinder-in-cone paradigms)
 *   B2 §9.1 + §9.4 integrals     B3 §9.2 hyperbolic IBP + a reduction formula (prove it, then use it)
 *   B4 §10 improper integrals (a) 3-mark comparison/convergence argument, (b) 7-mark harder evaluation
 *        (parameter, constant chosen for convergence, reduction formula, two bad endpoints)    B5 §11.1-11.3 sequence + series tests
 *   B6 §11.4-11.6 power series   B7 §12.0/12.1 separable ODE    B8 §12.3 first-order linear ODE
 *
 * No question is copied from a source paper, and no question repeats across these nine
 * papers or the Tutorial Quiz Test 4 papers in data/exams-tutorial.js.
 *
 * DISTINCTNESS PASS: within every slot (B2(a), B2(b), B3(a), B3(b)-(c), B4, B5, B6, B7, B8)
 * the nine papers now test nine different question types, not the same type with new numbers
 * (for example B3(a) is x cosh x, x cosh^2 x, x e^x cosh x, x^2 sinh x, x sinh^2 x cosh x,
 * x sech^2 x, sinh x ln(cosh x), sin x cosh x and x sech x tanh x, one per paper).
 * Paper 1 is the baseline; only its B6(b) was changed.
 *
 * DISTINCTNESS PASS: within every slot (B2(a), B2(b), B3(a), B3(b)-(c), B4, B5, B6, B7, B8)
 * the nine papers now test nine different question types, not the same type with new numbers
 * (for example B3(a) is x cosh x, x cosh^2 x, x e^x cosh x, x^2 sinh x, x sinh^2 x cosh x,
 * x sech^2 x, sinh x ln(cosh x), sin x cosh x and x sech x tanh x, one per paper).
 * Paper 1 is the baseline; only its B6(b) was changed.
 *
 * DISTINCTNESS PASS: within every slot (B2(a), B2(b), B3(a), B3(b)-(c), B4, B5, B6, B7, B8)
 * the nine papers now test nine different question types, not the same type with new numbers
 * (for example B3(a) is x cosh x, x cosh^2 x, x e^x cosh x, x^2 sinh x, x sinh^2 x cosh x,
 * x sech^2 x, sinh x ln(cosh x), sin x cosh x and x sech x tanh x, one per paper).
 * Paper 1 is the baseline; only its B6(b) was changed.
 *
 * DISTINCTNESS PASS: within every slot (B2(a), B2(b), B3(a), B3(b)-(c), B4, B5, B6, B7, B8)
 * the nine papers now test nine different question types, not the same type with new numbers
 * (for example B3(a) is x cosh x, x cosh^2 x, x e^x cosh x, x^2 sinh x, x sinh^2 x cosh x,
 * x sech^2 x, sinh x ln(cosh x), sin x cosh x and x sech x tanh x, one per paper).
 * Paper 1 is the baseline and is unchanged.
 *
 * Papers 7-9 add further §6.6 paradigms (a fence along a river, a cable across a river,
 * an open-domain poster problem), new reduction formulas (x^n e^x, x^2 (ln x)^n,
 * the (1-x^2)^n beta-type formula) and the extra bridging notes listed in the solutions
 * (Limit Comparison Test, p-integral at zero, open-domain optimization).
 *
 * Each question has a "label" (A1-A6, B1-B8) that the viewer shows instead of
 * the plain number.
 *
 * Text fields use String.raw so LaTeX backslashes can be written normally.
 * Display maths ($$...$$) must stay on ONE line because the exam renderer
 * turns each line into its own paragraph.
 */
const NOVEMBER_EXAMS = [
{
    id: 'nov-paper1',
    label: 'November Paper 1',
    date: 'November Exam A',
    kind: 'CALCULUS EXAMINATION',
    totalMarks: 90,
    duration: 120,
    topics: 'Fencing against a river with an unknown length, and a triangle with a fixed hypotenuse (§6.6), completing the square and f′/f (§9.1), reduction formula for (ln x)ⁿ (§9.2), odd powers of sin and cos (§9.4), a p-test over [0,\infty) and a Type I improper integral with a substitution (§10), Ratio Test and Divergence Test, interval of convergence and the Taylor series of ln x about 2, a separable ODE with a by-parts integral and a linear ODE with integrating factor x².',
    instructions: [
      'Section A (Questions A1–A6): multiple choice. Choose ONE answer for each question. [14 marks]',
      'Section B (Questions B1–B8): give FULL solutions and show ALL workings. [76 marks]',
      'No calculators are allowed.',
      'You have 2 hours in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: 'A1', title: 'Maximizing a product with a constraint', section: 'Section A · §6.6', marks: 2,
        prompt: String.raw`
Two positive numbers $x$ and $y$ satisfy $x+y=12$. The largest possible value of $x^{2}y$ is

- **A.** $216$.
- **B.** $128$.
- **C.** $256$.
- **D.** $243$.
- **E.** $81$.
        `,
        solution: String.raw`
**Answer: C.** ✓✓

Substitute $y=12-x$: $f(x)=x^{2}(12-x)=12x^{2}-x^{3}$ for $0<x<12$. Then $f'(x)=24x-3x^{2}=3x(8-x)$, so $x=8$ and $y=4$. Since $f(x)\to0$ at both ends, this is the maximum:
$$f(8)=64\cdot4=256.$$

- **A**, **B**, **D** and **E** are the values of $x^{2}y$ at $(6,6)$, $(4,8)$, $(9,3)$ and $(3,9)$ respectively: valid pairs, but not the best one.
        `
      },
      {
        number: 2, label: 'A2', title: 'A logarithmic integral', section: 'Section A · §9.1', marks: 3,
        prompt: String.raw`
$$\int\frac{x+1}{x^{2}+2x+7}\,dx=$$

- **A.** $\ln\left(x^{2}+2x+7\right)+C$.
- **B.** $\dfrac12\ln\left(x^{2}+2x+7\right)+C$.
- **C.** $\dfrac1{\sqrt6}\arctan\!\left(\dfrac{x+1}{\sqrt6}\right)+C$.
- **D.** $\dfrac12\ln\left(x^{2}+2x+7\right)+\dfrac1{\sqrt6}\arctan\!\left(\dfrac{x+1}{\sqrt6}\right)+C$.
- **E.** $2\ln\left(x^{2}+2x+7\right)+C$.
        `,
        solution: String.raw`
**Answer: B.** ✓✓✓

The derivative of the denominator is $\dfrac{d}{dx}\left(x^2+2x+7\right)=2x+2=2(x+1)$, so the numerator $x+1$ is exactly **half** of $f'(x)$.  Therefore
$$\int\frac{x+1}{x^2+2x+7}\,dx=\frac12\int\frac{f'(x)}{f(x)}\,dx=\frac12\ln\left|x^2+2x+7\right|+C=\frac12\ln\left(x^2+2x+7\right)+C,$$ 
and the quadratic is always positive, so no absolute value is needed.

- **A** forgets the factor $\frac12$. **E** has the factor inverted. **C** and **D** bring in an arctangent that only arises when the numerator is a constant; here there is no constant left over.
        `
      },
      {
        number: 3, label: 'A3', title: 'Which improper integral converges?', section: 'Section A · §10', marks: 2,
        prompt: String.raw`
Which one of the following improper integrals converges?

- **A.** $\displaystyle\int_1^{\infty}x^{-2/3}\,dx$.
- **B.** $\displaystyle\int_0^{1}x^{-2/3}\,dx$.
- **C.** $\displaystyle\int_0^{1}x^{-4/3}\,dx$.
- **D.** $\displaystyle\int_1^{\infty}\frac{dx}{x}$.
- **E.** $\displaystyle\int_{-1}^{1}\frac{dx}{x}$.
        `,
        solution: String.raw`
**Answer: B.** ✓✓

Use the $p$-integral benchmarks. Near **infinity**, $\int_1^\infty x^{-p}dx$ converges iff $p>1$. Near **zero**, $\int_0^1x^{-p}dx$ converges iff $p<1$. 

- **B:** $p=\frac23<1$, and directly $\displaystyle\int_0^1x^{-2/3}dx=\lim_{t\to0^+}\Big[3x^{1/3}\Big]_t^1=3$. **Converges.** 
- **A:** $p=\frac23\le1$ at infinity, so it diverges. **C:** $p=\frac43>1$ at zero, so it diverges. **D:** $p=1$ diverges ($\ln b\to\infty$).
- **E:** the discontinuity at $x=0$ is interior, so we split at $0$; $\int_0^1\frac{dx}{x}$ diverges, so the whole integral diverges. (It is **not** $0$ by "symmetry".)
        `
      },
      {
        number: 4, label: 'A4', title: 'Which series diverges?', section: 'Section A · §11.2–11.3', marks: 3,
        prompt: String.raw`
Which one of the following series **diverges**?

- **A.** $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n(n+2)}$.
- **B.** $\displaystyle\sum_{n=1}^{\infty}\frac{n}{2^{n}}$.
- **C.** $\displaystyle\sum_{n=1}^{\infty}\frac{2^{n}}{n!}$.
- **D.** $\displaystyle\sum_{n=1}^{\infty}\left(1+\frac1n\right)^{n}$.
- **E.** $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n^{3/2}}$.
        `,
        solution: String.raw`
**Answer: D.** ✓✓✓

For **D**, $\displaystyle\lim_{n\to\infty}\left(1+\frac1n\right)^{n}=e\neq0$, so by the **Test for Divergence** the series diverges. 

The others all converge:
- **A:** $0<\frac{1}{n(n+2)}\le\frac1{n^2}$, and $\sum\frac1{n^2}$ converges (Direct Comparison, $p=2$).
- **B:** Ratio Test: $\frac{n+1}{2n}\to\frac12<1$. **C:** Ratio Test: $\frac{2}{n+1}\to0<1$.
- **E:** $p$-series with $p=\frac32>1$. 
        `
      },
      {
        number: 5, label: 'A5', title: 'A Maclaurin coefficient', section: 'Section A · §11.6', marks: 2,
        prompt: String.raw`
The coefficient of $x^{6}$ in the Maclaurin series of $f(x)=x^{2}\cos(3x)$ is

- **A.** $\dfrac{27}{8}$.
- **B.** $\dfrac{81}{8}$.
- **C.** $\dfrac98$.
- **D.** $-\dfrac{27}{8}$.
- **E.** $\dfrac{27}{4}$.
        `,
        solution: String.raw`
**Answer: A.** ✓✓

Use the memorised series $\cos u=1-\dfrac{u^2}{2!}+\dfrac{u^4}{4!}-\cdots$ with $u=3x$: 
$$\cos3x=1-\frac{9x^2}{2}+\frac{81x^4}{24}-\cdots,\qquad x^2\cos3x=x^2-\frac{9x^4}{2}+\frac{81}{24}\,x^6-\cdots$$
The coefficient of $x^6$ is $\dfrac{81}{24}=\dfrac{27}{8}$. 

- **B** forgets the factorial is $4!=24$ (uses $8$). **D** has the wrong sign (the $x^4$ term of $\cos$ is positive). **C** and **E** come from arithmetic slips.
        `
      },
      {
        number: 6, label: 'A6', title: 'Verifying a solution of a differential equation', section: 'Section A · §12.0', marks: 2,
        prompt: String.raw`
Which one of the following functions is a solution of the differential equation $y''-y'-6y=0$?

- **A.** $y=e^{2x}$.
- **B.** $y=e^{-3x}$.
- **C.** $y=3e^{3x}-e^{-2x}$.
- **D.** $y=e^{3x}+e^{2x}$.
- **E.** $y=xe^{3x}$.
        `,
        solution: String.raw`
**Answer: C.** ✓✓

Differentiate and substitute. For $y=3e^{3x}-e^{-2x}$: $y'=9e^{3x}+2e^{-2x}$ and $y''=27e^{3x}-4e^{-2x}$, so 
$$y''-y'-6y=(27-9-18)e^{3x}+(-4-2+6)e^{-2x}=0.$$ 

- **A:** $4-2-6=-4\ne0$. **B:** $9+3-6=6\ne0$. **D:** the $e^{2x}$ part gives $-4e^{2x}\ne0$.
- **E:** $y''-y'-6y=(6+9x)e^{3x}-(1+3x)e^{3x}-6xe^{3x}=5e^{3x}\neq0$.
        `
      },
      {
        number: 7, label: 'B1', title: 'Optimization — fencing against a river; a triangle with a fixed hypotenuse', section: 'Section B · §6.6', marks: 11,
        prompt: String.raw`
**(a)** State the Extreme Value Theorem. (2)

**(b)** A farmer has $L$ metres of fencing and uses all of it to enclose a rectangular field, one side of which lies along a straight river and needs no fence. The largest area that the farmer can enclose is $800\ \text{m}^{2}$. Find $L$, and the dimensions of the largest field. (5)

**(c)** The hypotenuse of a right-angled triangle is $10$ cm. Find the largest possible area of the triangle, and the lengths of its legs when the area is largest. (4)
        `,
        solution: String.raw`
**(a)** If $f$ is **continuous on a closed interval** $[a,b]$, ✓ then $f$ attains an **absolute maximum value** $f(c)$ at some $c\in[a,b]$ and an **absolute minimum value** $f(d)$ at some $d\in[a,b]$. ✓

**(b)** Let each side perpendicular to the river have length $x$; the side along the river has length $L-2x$. Then
$$A(x)=x(L-2x)=Lx-2x^{2}.$$ ✓
$A'(x)=L-4x=0\Rightarrow x=\dfrac L4$. ✓ Since $A(0)=A\!\left(\frac L2\right)=0$, this gives the maximum, ✓
$$A_{\max}=\frac L4\cdot\frac L2=\frac{L^{2}}{8}.$$
Setting $\dfrac{L^{2}}{8}=800$ gives $L^{2}=6400$, so $L=\boxed{80}$ m. ✓ Then $x=20$ and $L-2x=40$: the field is $\boxed{20\text{ m}\times40\text{ m}}$ (the side along the river is the $40$ m side). ✓

**(c)** Let one leg be $x$ cm; the other is $\sqrt{100-x^{2}}$. Then
$$A(x)=\tfrac12x\sqrt{100-x^{2}},\qquad 0<x<10.$$ ✓
$$A'(x)=\tfrac12\left(\sqrt{100-x^{2}}-\frac{x^{2}}{\sqrt{100-x^{2}}}\right)=\frac{100-2x^{2}}{2\sqrt{100-x^{2}}}.$$ ✓
$A'(x)=0\Rightarrow x=5\sqrt2$. ✓ Since $A=0$ at $x=0$ and $x=10$, this is the maximum: both legs equal $5\sqrt2$ cm and $A_{\max}=\tfrac12\cdot5\sqrt2\cdot5\sqrt2=\boxed{25\ \text{cm}^{2}}$. ✓
        `
      },
      {
        number: 8, label: 'B2', title: 'Completing the square; a trigonometric integral', section: 'Section B · §9.1, §9.4', marks: 9,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_{-1}^{0}\frac{x+3}{\sqrt{3-2x-x^{2}}}\,dx.$ (5)

**(b)** Evaluate $\displaystyle\int_0^{\pi/2}\sin^{3}x\,\cos^{2}x\,dx.$ (4)
        `,
        solution: String.raw`
**(a)** Complete the square: $3-2x-x^2=4-(x+1)^2$. ✓ The derivative of $w=3-2x-x^2$ is $-2x-2=-2(x+1)$, so split the numerator as $x+3=(x+1)+2$: ✓
$$\int\frac{x+3}{\sqrt{3-2x-x^2}}dx=-\frac12\int\frac{-2x-2}{\sqrt{3-2x-x^2}}dx+2\int\frac{dx}{\sqrt{4-(x+1)^2}}.$$
The first integral is $\int w^{-1/2}dw=2\sqrt w$, so it contributes $-\sqrt{3-2x-x^2}$. ✓ The second is the arcsine form $\int\frac{du}{\sqrt{a^2-u^2}}=\arcsin\frac ua$ with $a=2$, $u=x+1$. ✓
$$\int_{-1}^{0}\frac{x+3}{\sqrt{3-2x-x^2}}dx=\Big[-\sqrt{3-2x-x^2}+2\arcsin\frac{x+1}{2}\Big]_{-1}^{0}=\left(-\sqrt3+2\cdot\frac\pi6\right)-\left(-2+0\right)=2-\sqrt3+\frac\pi3.$$ ✓

**(b)** The power of $\sin x$ is odd, so save one factor $\sin x$ for $du$ and write $\sin^2x=1-\cos^2x$: ✓
$$\int_0^{\pi/2}\sin^3x\cos^2x\,dx=\int_0^{\pi/2}\left(1-\cos^2x\right)\cos^2x\,\sin x\,dx.$$
Let $u=\cos x$, $du=-\sin x\,dx$; $x=0\Rightarrow u=1$ and $x=\frac\pi2\Rightarrow u=0$. ✓
$$=\int_0^1\left(1-u^2\right)u^2\,du=\int_0^1\left(u^2-u^4\right)du=\Big[\frac{u^3}3-\frac{u^5}5\Big]_0^1=\frac13-\frac15=\frac{2}{15}.$$ ✓✓
        `
      },
      {
        number: 9, label: 'B3', title: 'Integration by parts; a reduction formula', section: 'Section B · §9.2', marks: 10,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_0^{1}x\cosh x\,dx$. Give your answer in terms of $e$. (3)

**(b)** For an integer $n\ge1$ let $I_n=\displaystyle\int(\ln x)^{n}\,dx$. Prove the reduction formula
$$I_n=x(\ln x)^{n}-n\,I_{n-1}.$$ (4)

**(c)** Hence evaluate $\displaystyle\int_1^{e}(\ln x)^{3}\,dx.$ (3)
        `,
        solution: String.raw`
**(a)** Integrate by parts with $u=x$, $dv=\cosh x\,dx$, so $du=dx$ and $v=\sinh x$: ✓
$$\int x\cosh x\,dx=x\sinh x-\int\sinh x\,dx=x\sinh x-\cosh x.$$ ✓
$$\int_0^1x\cosh x\,dx=\big(\sinh1-\cosh1\big)-\big(0-1\big)=1-e^{-1},$$ ✓
since $\cosh1-\sinh1=e^{-1}$.

**(b)** Take $u=(\ln x)^n$ and $dv=dx$. Then $du=n(\ln x)^{n-1}\cdot\dfrac1x\,dx$ and $v=x$. ✓✓
$$I_n=x(\ln x)^n-\int x\cdot n(\ln x)^{n-1}\frac1x\,dx=x(\ln x)^n-n\int(\ln x)^{n-1}dx.$$ ✓
That is, $I_n=x(\ln x)^n-n\,I_{n-1}$. ∎ ✓

**(c)** Write $J_k=\displaystyle\int_1^e(\ln x)^k\,dx$. Applying (b) with the limits $1$ and $e$ (the boundary term is $\big[x(\ln x)^k\big]_1^e=e$ for every $k\ge1$): ✓
$$J_0=e-1,\qquad J_1=e-J_0=1,\qquad J_2=e-2J_1=e-2,$$
$$J_3=e-3J_2=e-3(e-2)=6-2e.$$ ✓✓
So $\displaystyle\int_1^e(\ln x)^3dx=6-2e\approx0.563$.
        `
      },
      {
        number: 10, label: 'B4', title: 'Improper integrals — a p-test and a substitution', section: 'Section B · §10', marks: 10,
        prompt: String.raw`
**(a)** Show that the integral $\displaystyle\int_0^{\infty}\frac{dx}{x^{p}}$ diverges for every real number $p$. (3)

**(b)** Determine whether the improper integral
$$\int_0^{\infty}x^{3}e^{-x^{2}}\,dx$$
converges or diverges. If it converges, find its value. Justify every limit that you use. (7)
        `,
        solution: String.raw`
**(a)** The integral is improper at both $0$ and $\infty$, so we split it as $\displaystyle\int_0^{1}x^{-p}\,dx+\int_1^{\infty}x^{-p}\,dx$, and it converges only if **both** pieces converge. ✓
We check each piece. $\displaystyle\int_1^{\infty}x^{-p}dx$ converges **only if $p>1$** (for $p\ne1$ it is $\lim\frac{t^{1-p}-1}{1-p}$, which is finite only when $1-p<0$; for $p=1$ it is $\lim\ln t=\infty$). $\displaystyle\int_0^{1}x^{-p}dx$ converges **only if $p<1$** (for $p\ne1$ it is $\lim_{s\to0^{+}}\frac{1-s^{1-p}}{1-p}$, finite only when $1-p>0$; for $p=1$ it is $\lim(-\ln s)=\infty$). ✓
No real $p$ satisfies both $p>1$ and $p<1$, so for every $p$ at least one piece diverges and the whole integral diverges. ✓

**(b)** The upper limit is infinite, so $\displaystyle\int_0^{\infty}x^{3}e^{-x^{2}}dx=\lim_{t\to\infty}\int_0^{t}x^{3}e^{-x^{2}}dx$. ✓
Let $u=x^{2}$, $du=2x\,dx$, so $x^{3}dx=\tfrac12u\,du$: $\displaystyle\int_0^{t}x^{3}e^{-x^{2}}dx=\frac12\int_0^{t^{2}}ue^{-u}du$. ✓
By parts ($u$, $dv=e^{-u}du$): $\displaystyle\int ue^{-u}du=-ue^{-u}+\int e^{-u}du=-(u+1)e^{-u}$. ✓
$$\int_0^{t}x^{3}e^{-x^{2}}dx=\frac12\Big[-(u+1)e^{-u}\Big]_0^{t^{2}}=\frac12\left(1-\frac{t^{2}+1}{e^{t^{2}}}\right).$$ ✓
With $w=t^{2}\to\infty$, $\displaystyle\lim_{w\to\infty}\frac{w+1}{e^{w}}=\lim_{w\to\infty}\frac{1}{e^{w}}=0$ by l’Hôpital’s rule. ✓
Therefore the integral **converges** ✓ and
$$\int_0^{\infty}x^{3}e^{-x^{2}}dx=\frac12.$$ ✓
        `
      },
      {
        number: 11, label: 'B5', title: 'Sequences and series', section: 'Section B · §11.1–11.3', marks: 9,
        prompt: String.raw`
**(a)** Determine, giving reasons, whether the sequence $\{a_n\}=\left\{n\sin\dfrac{\pi}{n}\right\}$ is convergent or divergent. If it is convergent, state to what value it converges. (3)

**(b)** Using (a) or otherwise, decide (with reasons) if the following series converges or diverges.
$$\sum_{n=1}^{\infty}n\sin\frac{\pi}{n}$$ (2)

**(c)** Decide (with reasons) if the following series converges or diverges.
$$\sum_{n=1}^{\infty}\frac{(n!)^{2}}{(2n)!}$$ (4)
        `,
        solution: String.raw`
**(a)** Write $a_n=\dfrac{\sin(\pi/n)}{1/n}$, which has the form $\frac00$ as $n\to\infty$. ✓ Consider $f(x)=\dfrac{\sin(\pi/x)}{1/x}$ and use l'Hôpital's rule:
$$\lim_{x\to\infty}\frac{\sin(\pi/x)}{1/x}=\lim_{x\to\infty}\frac{\cos(\pi/x)\cdot\left(-\pi/x^2\right)}{-1/x^2}=\lim_{x\to\infty}\pi\cos\frac\pi x=\pi.$$ ✓
So the sequence is **convergent with limit $\pi$**. ✓

**(b)** Since $a_n\to\pi\neq0$, the **Test for Divergence** shows that $\sum n\sin\frac\pi n$ **diverges**. ✓✓

**(c)** Use the **Ratio Test** with $c_n=\dfrac{(n!)^2}{(2n)!}>0$: ✓
$$\frac{c_{n+1}}{c_n}=\frac{\big((n+1)!\big)^2}{(2n+2)!}\cdot\frac{(2n)!}{(n!)^2}=\frac{(n+1)^2}{(2n+2)(2n+1)}=\frac{n+1}{2(2n+1)}.$$ ✓✓
This tends to $\dfrac14<1$, so the series **converges**. ✓
        `
      },
      {
        number: 12, label: 'B6', title: 'Power series and a Taylor series', section: 'Section B · §11.4, §11.6', marks: 9,
        prompt: String.raw`
**(a)** Find the radius of convergence and the interval of convergence of the power series
$$\sum_{n=1}^{\infty}\frac{n\,(x-3)^{n}}{2^{n}}.$$ (5)

**(b)** Use the formula $c_n=\dfrac{f^{(n)}(a)}{n!}$ to find the Taylor series of $f(x)=\ln x$ about $a=2$. Write down the first four terms and the general term. Given that the series converges to $\ln x$ for $|x-2|<2$, use it at $x=3$ to show that
$$\ln\frac32=\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n\,2^{n}}.$$ (4)
        `,
        solution: String.raw`
**(a)** **Ratio Test.** With $a_n=\dfrac{n(x-3)^n}{2^n}$,
$$\left|\frac{a_{n+1}}{a_n}\right|=\frac{n+1}{n}\cdot\frac{|x-3|}{2}\ \longrightarrow\ \frac{|x-3|}{2}.$$ ✓
The series converges when $\dfrac{|x-3|}{2}<1$, i.e. $|x-3|<2$. So the **radius of convergence is $R=2$** and the series converges on $(1,5)$. ✓✓

**Endpoints.** At $x=5$ the series is $\displaystyle\sum n$, and at $x=1$ it is $\displaystyle\sum(-1)^nn$. In both cases $|a_n|=n\not\to0$, so by the Test for Divergence both **diverge**. ✓

**Interval of convergence: $(1,5)$.** ✓

**(b)** Differentiate repeatedly: $f'(x)=x^{-1}$, $f''(x)=-x^{-2}$, $f'''(x)=2x^{-3}$, $f^{(4)}(x)=-6x^{-4}$, and in general ✓✓
$$f^{(n)}(x)=\frac{(-1)^{n-1}(n-1)!}{x^{n}}\qquad(n\ge1).$$
At $a=2$: $c_0=\ln2$ and $c_n=\dfrac{f^{(n)}(2)}{n!}=\dfrac{(-1)^{n-1}(n-1)!}{2^{n}\,n!}=\dfrac{(-1)^{n-1}}{n\,2^{n}}$. ✓ So
$$\ln x=\ln2+\frac{x-2}{2}-\frac{(x-2)^2}{8}+\frac{(x-2)^3}{24}-\cdots=\ln2+\sum_{n=1}^{\infty}\frac{(-1)^{n-1}(x-2)^n}{n\,2^n}.$$
The point $x=3$ satisfies $|3-2|=1<2$, so we may substitute: $\ln3=\ln2+\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n\,2^n}$, hence ✓
$$\ln\frac32=\ln3-\ln2=\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n\,2^n}=\frac12-\frac18+\frac1{24}-\cdots.$$
        `
      },
      {
        number: 13, label: 'B7', title: 'Differential equations — separable', section: 'Section B · §12.1', marks: 8,
        prompt: String.raw`
Given the differential equation
$$\frac{dy}{dx}=x\,e^{\,x-y}.$$

**(a)** State the order of the equation, and show that it is separable by writing it in the form $M(x)\,dx+N(y)\,dy=0$. (2)

**(b)** Find the general solution of the equation, giving $y$ in terms of $x$. (3)

**(c)** Find the particular solution given that $y=0$ when $x=0$, and explain why it is defined for every real $x$. (3)
        `,
        solution: String.raw`
**(a)** The equation is **first order**. ✓ Since $e^{x-y}=e^{x}e^{-y}$, multiplying by $e^{y}$ gives
$$x\,e^{x}\,dx-e^{y}\,dy=0,$$ ✓
which has the form $M(x)\,dx+N(y)\,dy=0$, so it is **separable**.

**(b)** Integrate both sides of $e^{y}\,dy=xe^{x}\,dx$. The right side needs integration by parts ($u=x$, $dv=e^xdx$): $\displaystyle\int xe^x\,dx=(x-1)e^x$. ✓ So
$$e^{y}=(x-1)e^{x}+C\qquad\Longrightarrow\qquad y=\ln\!\left((x-1)e^{x}+C\right).$$ ✓✓

**(c)** With $y(0)=0$: $e^0=1=(0-1)\cdot1+C$, so $C=2$. ✓ The **particular solution** is
$$y=\ln\!\left((x-1)e^{x}+2\right).$$ ✓
It is defined for all $x$ because $g(x)=(x-1)e^x+2$ has $g'(x)=xe^x$, so its minimum is $g(0)=1>0$. ✓
        `
      },
      {
        number: 14, label: 'B8', title: 'Differential equations — linear', section: 'Section B · §12.3', marks: 10,
        prompt: String.raw`
Given the differential equation
$$x\,\frac{dy}{dx}+2y=\sin x,\qquad x>0.$$

**(a)** Show that this is a linear differential equation by writing it in standard form. (2)

**(b)** Find the integrating factor $e^{\int P(x)\,dx}$. (3)

**(c)** Hence find the general solution of the differential equation, and then the particular solution satisfying $y=\dfrac1\pi$ when $x=\pi$. (5)
        `,
        solution: String.raw`
**(a)** Divide through by $x$ (positive on the domain):
$$\frac{dy}{dx}+\frac{2}{x}\,y=\frac{\sin x}{x}.$$ ✓✓
This has the form $\frac{dy}{dx}+P(x)y=Q(x)$ with $P(x)=\dfrac2x$ and $Q(x)=\dfrac{\sin x}{x}$, so it is **linear**.

**(b)** $\displaystyle\int\frac2x\,dx=2\ln x$, so ✓✓
$$\mu(x)=e^{2\ln x}=x^{2}.$$ ✓

**(c)** Multiply the standard form by $\mu=x^2$: ✓
$$\frac{d}{dx}\left(x^{2}y\right)=x\sin x.$$
By parts ($u=x$, $dv=\sin x\,dx$): $\displaystyle\int x\sin x\,dx=-x\cos x+\sin x$. ✓ So $x^2y=\sin x-x\cos x+C$ and the **general solution** is ✓✓
$$y=\frac{\sin x-x\cos x+C}{x^{2}}.$$
With $y(\pi)=\dfrac1\pi$: $\dfrac{0+\pi+C}{\pi^2}=\dfrac1\pi$, so $C=0$. ✓ The **particular solution** is $y=\dfrac{\sin x-x\cos x}{x^{2}}$.
        `
      }
    ]
  },
{
    id: 'nov-paper2',
    label: 'November Paper 2',
    date: 'November Exam B',
    kind: 'CALCULUS EXAMINATION',
    totalMarks: 90,
    duration: 120,
    topics: 'An open box from a square sheet with an unknown side, and a constrained product, with the Closed Interval Method (§6.6), completing the square to an arctangent and powers of sine (§9.1, §9.4), x cosh²x and the secⁿ reduction formula (§9.2), a Comparison Theorem divergence and a Type II improper integral solved by parts (§10), Integral Test, power-series representations by differentiation and integration, a separable ODE solved with arctan and tan(a+b), and a linear ODE with integrating factor e^(−1/x).',
    instructions: [
      'Section A (Questions A1–A6): multiple choice. Choose ONE answer for each question. [14 marks]',
      'Section B (Questions B1–B8): give FULL solutions and show ALL workings. [76 marks]',
      'No calculators are allowed.',
      'You have 2 hours in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: 'A1', title: 'A cylinder from a rotated rectangle', section: 'Section A · §6.6', marks: 2,
        prompt: String.raw`
A rectangle with perimeter $36$ cm is rotated about one of its sides to form a cylinder. The largest possible volume of the cylinder is

- **A.** $432\pi\ \text{cm}^{3}$.
- **B.** $729\pi\ \text{cm}^{3}$.
- **C.** $640\pi\ \text{cm}^{3}$.
- **D.** $0$.
- **E.** $864\pi\ \text{cm}^{3}$.
        `,
        solution: String.raw`
**Answer: E.** ✓✓

Let the side perpendicular to the axis (the radius) be $x$ cm; the side along the axis (the height) is $18-x$ cm. Then
$$V(x)=\pi x^{2}(18-x),\qquad V'(x)=\pi\left(36x-3x^{2}\right)=3\pi x(12-x),$$
so $x=12$ (radius $12$, height $6$), and $V=0$ at the ends of the range. Hence $V_{\max}=\pi\cdot144\cdot6=864\pi$.

- **A**, **B** and **C** are $V(6)$, $V(9)$ (the square) and $V(8)$. **D** is the volume at the extremes of the range.
        `
      },
      {
        number: 2, label: 'A2', title: 'An arctangent by substitution', section: 'Section A · §9.1', marks: 3,
        prompt: String.raw`
$$\int\frac{\sin x}{1+\cos^{2}x}\,dx=$$

- **A.** $\arctan(\sin x)+C$.
- **B.** $\arctan(\cos x)+C$.
- **C.** $-\arctan(\cos x)+C$.
- **D.** $\ln\left(1+\cos^{2}x\right)+C$.
- **E.** $-\dfrac{1}{1+\cos^{2}x}+C$.
        `,
        solution: String.raw`
**Answer: C.** ✓✓✓

Let $u=\cos x$, so $du=-\sin x\,dx$. Then
$$\int\frac{\sin x}{1+\cos^{2}x}\,dx=-\int\frac{du}{1+u^{2}}=-\arctan u+C=-\arctan(\cos x)+C.$$

- **B** loses the minus sign from $du=-\sin x\,dx$. **A** differentiates to $\dfrac{\cos x}{1+\sin^2x}$. **D** would need the numerator $-2\cos x\sin x$. **E** is not an antiderivative of this function.
        `
      },
      {
        number: 3, label: 'A3', title: 'The p-integral at zero', section: 'Section A · §10.2', marks: 2,
        prompt: String.raw`
The improper integral $\displaystyle\int_0^{1}\frac{dx}{x^{p}}$ converges

- **A.** for $p<1$ only.
- **B.** for $p\le1$ only.
- **C.** for $p>1$ only.
- **D.** for $p\ge1$ only.
- **E.** for every real $p$.
        `,
        solution: String.raw`
**Answer: A.** ✓✓

For $p\neq1$ and $0<t<1$: $\displaystyle\int_t^1x^{-p}dx=\frac{1-t^{1-p}}{1-p}$. 
- If $p<1$ then $1-p>0$, so $t^{1-p}\to0$ as $t\to0^+$ and the limit is $\frac1{1-p}$: **converges**.
- If $p>1$ then $t^{1-p}\to\infty$: diverges.
- If $p=1$: $\int_t^1\frac dx x=-\ln t\to\infty$: diverges.

So it converges exactly when $p<1$. (Theorem 10.1 in the Semester 2 guide states only the benchmark at infinity, $\int_1^\infty x^{-p}dx$, so the benchmark at zero is derived here.) (This is the *opposite* inequality to the benchmark at infinity, where $\int_1^\infty x^{-p}dx$ needs $p>1$.) 
        `
      },
      {
        number: 4, label: 'A4', title: 'Choosing a comparison test', section: 'Section A · §11.3', marks: 3,
        prompt: String.raw`
Consider the series $\displaystyle\sum_{n=1}^{\infty}\frac{2n+3}{n^{3}+n+1}$. Which one of the following conclusions is correct?

- **A.** It diverges, by the Limit Comparison Test with $\displaystyle\sum\frac1n$.
- **B.** It converges, by the Limit Comparison Test with $\displaystyle\sum\frac1{n^{2}}$.
- **C.** It converges, by the Limit Comparison Test with $\displaystyle\sum\frac1{n^{3}}$.
- **D.** It diverges, by the Test for Divergence.
- **E.** It converges, by the Ratio Test.
        `,
        solution: String.raw`
**Answer: B.** ✓✓✓

**Limit Comparison Test** (the limit form of the Comparison Test in §11.3.2; recalled here because the guide states only the direct form): if $a_n,b_n>0$ and $\displaystyle\lim_{n\to\infty}\frac{a_n}{b_n}=c$ with $0<c<\infty$, then $\sum a_n$ and $\sum b_n$ either both converge or both diverge.

The terms are positive. For rational expressions compare with the ratio of the highest powers: $\dfrac{2n}{n^3}\sim\dfrac{2}{n^2}$, so take $b_n=\dfrac1{n^2}$. 
$$\lim_{n\to\infty}\frac{a_n}{b_n}=\lim_{n\to\infty}\frac{(2n+3)\,n^2}{n^3+n+1}=2,$$ 
which is finite and positive, and $\sum\frac1{n^2}$ converges ($p=2>1$). By the Limit Comparison Test the given series **converges**. 

- **A:** against $\sum\frac1n$ the limit is $0$, which proves nothing. **C:** against $\sum\frac1{n^3}$ the limit is $\infty$, which proves nothing.
- **D:** the terms tend to $0$, so the Test for Divergence is inconclusive. **E:** the ratio of consecutive terms tends to $1$, so the Ratio Test is inconclusive.
        `
      },
      {
        number: 5, label: 'A5', title: 'Interval of convergence', section: 'Section A · §11.4', marks: 2,
        prompt: String.raw`
The interval of convergence of the power series $\displaystyle\sum_{n=0}^{\infty}\frac{(2x-3)^{n}}{n+1}$ is

- **A.** $(1,2)$.
- **B.** $[1,2)$.
- **C.** $(1,2]$.
- **D.** $[1,2]$.
- **E.** $\left(-\tfrac12,\tfrac12\right)$.
        `,
        solution: String.raw`
**Answer: B.** ✓✓

Ratio Test: $\left|\dfrac{a_{n+1}}{a_n}\right|=|2x-3|\cdot\dfrac{n+1}{n+2}\to|2x-3|$, so the series converges when $|2x-3|<1$, i.e. $1<x<2$ (radius $R=\frac12$, centre $\frac32$). 

- $x=2$: $2x-3=1$ and the series is $\sum\frac1{n+1}$, the harmonic series: **diverges**.
- $x=1$: $2x-3=-1$ and the series is $\sum\frac{(-1)^n}{n+1}$, which **converges** by the Alternating Series Test. 

Interval $[1,2)$.
        `
      },
      {
        number: 6, label: 'A6', title: 'An integrating factor', section: 'Section A · §12.3', marks: 2,
        prompt: String.raw`
An integrating factor for the differential equation $\dfrac{dy}{dx}-\dfrac{y}{x}=x^{2}$, $x>0$, is

- **A.** $\dfrac1x$.
- **B.** $x$.
- **C.** $e^{-x}$.
- **D.** $-\ln x$.
- **E.** $x^{2}$.
        `,
        solution: String.raw`
**Answer: A.** ✓✓

The equation is already in standard form with $P(x)=-\dfrac1x$. Then $\displaystyle\int P(x)\,dx=-\ln x$ (as $x>0$), so 
$$\mu(x)=e^{-\ln x}=\frac1x.$$

- **B** uses $P=+\frac1x$. **D** is the integral $\int P\,dx$ itself, not $e^{\int P\,dx}$. **C** and **E** are unrelated to $P$.
        `
      },
      {
        number: 7, label: 'B1', title: 'Optimization — an open box from a square sheet; two numbers with a fixed sum', section: 'Section B · §6.6', marks: 11,
        prompt: String.raw`
**(a)** Describe the steps of the Closed Interval Method for finding the absolute maximum and absolute minimum values of a continuous function $f$ on a closed interval $[a,b]$. (2)

**(b)** A square sheet of cardboard of side $s$ cm has a square of side $x$ cm cut from each corner, and the sides are folded up to form an open box. The largest volume that such a box can have is $128\ \text{cm}^{3}$. Find $s$, and the value of $x$ that gives the largest volume. (5)

**(c)** Two positive numbers $x$ and $y$ satisfy $x+y=30$. Find the values of $x$ and $y$ that make $x^{2}y$ as large as possible, and the maximum value of $x^{2}y$. (4)
        `,
        solution: String.raw`
**(a)** (1) Find all critical numbers of $f$ in the open interval $(a,b)$ (where $f'(x)=0$ or $f'(x)$ does not exist). ✓ (2) Evaluate $f$ at each of these critical numbers and at the endpoints $a$ and $b$; the largest value is the absolute maximum and the smallest is the absolute minimum. ✓

**(b)** The box has base $s-2x$ by $s-2x$ and height $x$:
$$V(x)=x(s-2x)^{2},\qquad 0<x<\tfrac s2.$$ ✓
$$V'(x)=(s-2x)^{2}-4x(s-2x)=(s-2x)(s-6x).$$ ✓
$V'(x)=0$ gives $x=\dfrac s6$ or $x=\dfrac s2$; at $x=\frac s2$ (and $x=0$) the volume is $0$, so the maximum occurs at $x=\dfrac s6$, ✓
$$V_{\max}=\frac s6\left(\frac{2s}{3}\right)^{2}=\frac{2s^{3}}{27}.$$
Setting $\dfrac{2s^{3}}{27}=128$ gives $s^{3}=1728$, so $s=\boxed{12}$ cm. ✓ Then the best cut is $x=\dfrac{12}{6}=\boxed{2}$ cm. ✓

**(c)** With $y=30-x$, let $f(x)=x^{2}(30-x)=30x^{2}-x^{3}$, $0<x<30$. ✓
$f'(x)=60x-3x^{2}=3x(20-x)$. ✓
$f'(x)=0\Rightarrow x=20$ (the root $x=0$ is an endpoint, where $f=0$). ✓
Hence $x=\boxed{20}$, $y=\boxed{10}$ and the maximum value is $f(20)=400\cdot10=\boxed{4000}$. ✓
        `
      },
      {
        number: 8, label: 'B2', title: 'Completing the square; powers of sine', section: 'Section B · §9.1, §9.4', marks: 9,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_{-1}^{0}\frac{2x+3}{x^{2}+2x+2}\,dx.$ (5)

**(b)** Evaluate $\displaystyle\int_0^{\pi}\sin^{4}x\,dx.$ (4)
        `,
        solution: String.raw`
**(a)** Complete the square: $x^2+2x+2=(x+1)^2+1$, which is irreducible. ✓ The derivative of the denominator is $2x+2$, so write $2x+3=(2x+2)+1$: ✓
$$\int\frac{2x+3}{x^2+2x+2}dx=\int\frac{2x+2}{x^2+2x+2}dx+\int\frac{dx}{(x+1)^2+1}.$$
The first integral is of the form $\int\frac{f'}{f}=\ln\left(x^2+2x+2\right)$ ✓ and the second is $\arctan(x+1)$. ✓
$$\int_{-1}^0\frac{2x+3}{x^2+2x+2}dx=\Big[\ln\left(x^2+2x+2\right)+\arctan(x+1)\Big]_{-1}^{0}=\left(\ln2+\frac\pi4\right)-\left(\ln1+0\right)=\ln2+\frac\pi4.$$ ✓

**(b)** The power of $\sin x$ is even, so use the half-angle identity $\sin^2x=\dfrac{1-\cos2x}{2}$ twice: ✓
$$\sin^4x=\frac{\left(1-\cos2x\right)^2}{4}=\frac{1-2\cos2x+\cos^22x}{4}=\frac38-\frac12\cos2x+\frac18\cos4x.$$ ✓✓
$$\int_0^\pi\sin^4x\,dx=\Big[\frac{3x}{8}-\frac{\sin2x}{4}+\frac{\sin4x}{32}\Big]_0^\pi=\frac{3\pi}{8}.$$ ✓
        `
      },
      {
        number: 9, label: 'B3', title: 'Integration by parts; a reduction formula', section: 'Section B · §9.2', marks: 10,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_0^{\ln2}x\cosh^{2}x\,dx$. (3)

**(b)** For an integer $n\ge2$ prove the reduction formula
$$\int\sec^{n}x\,dx=\frac{\sec^{n-2}x\,\tan x}{n-1}+\frac{n-2}{n-1}\int\sec^{n-2}x\,dx.$$ (4)

**(c)** Hence evaluate $\displaystyle\int_0^{\pi/3}\sec^{3}x\,dx$. You may use $\displaystyle\int\sec x\,dx=\ln|\sec x+\tan x|+C$. (3)
        `,
        solution: String.raw`
**(a)** First write $\cosh^2x=\tfrac12(1+\cosh2x)$: ✓
$$\int_0^{\ln2}x\cosh^2x\,dx=\tfrac12\int_0^{\ln2}x\,dx+\tfrac12\int_0^{\ln2}x\cosh2x\,dx.$$
The first integral is $\tfrac12\cdot\tfrac{\ln^22}{2}=\tfrac{\ln^22}{4}$. For the second, integrate by parts with $u=x$, $dv=\cosh2x\,dx$, $v=\tfrac12\sinh2x$: ✓
$$\int x\cosh2x\,dx=\tfrac12x\sinh2x-\tfrac14\cosh2x.$$
At $x=\ln2$: $\sinh(2\ln2)=\tfrac{4-1/4}{2}=\tfrac{15}8$ and $\cosh(2\ln2)=\tfrac{4+1/4}{2}=\tfrac{17}8$, so
$$\Big[\cdots\Big]_0^{\ln2}=\tfrac{15}{16}\ln2-\tfrac{17}{32}-\left(0-\tfrac14\right)=\tfrac{15}{16}\ln2-\tfrac{9}{32}.$$
Hence the integral equals $\dfrac{\ln^22}{4}+\dfrac{15\ln2}{32}-\dfrac9{64}\approx0.304$. ✓

**(b)** Write $\sec^nx=\sec^{n-2}x\cdot\sec^2x$ and integrate by parts with $u=\sec^{n-2}x$, $dv=\sec^2x\,dx$. Then $du=(n-2)\sec^{n-2}x\tan x\,dx$ and $v=\tan x$. ✓✓
$$\int\sec^nx\,dx=\sec^{n-2}x\tan x-(n-2)\int\sec^{n-2}x\tan^2x\,dx.$$
Use $\tan^2x=\sec^2x-1$: ✓
$$\int\sec^nx\,dx=\sec^{n-2}x\tan x-(n-2)\int\sec^nx\,dx+(n-2)\int\sec^{n-2}x\,dx.$$
Collect the $\int\sec^nx\,dx$ terms: $(n-1)\int\sec^nx\,dx=\sec^{n-2}x\tan x+(n-2)\int\sec^{n-2}x\,dx$. Dividing by $n-1$ gives the formula. ∎ ✓

**(c)** With $n=3$: ✓
$$\int\sec^3x\,dx=\frac{\sec x\tan x}{2}+\frac12\int\sec x\,dx=\frac{\sec x\tan x}{2}+\frac12\ln|\sec x+\tan x|.$$ ✓
At $x=\frac\pi3$: $\sec=2$, $\tan=\sqrt3$; at $x=0$: $\sec=1$, $\tan=0$. ✓
$$\int_0^{\pi/3}\sec^3x\,dx=\left(\sqrt3+\frac12\ln\left(2+\sqrt3\right)\right)-\left(0+\frac12\ln1\right)=\sqrt3+\frac12\ln\left(2+\sqrt3\right).$$
        `
      },
      {
        number: 10, label: 'B4', title: 'Improper integrals — a comparison and a logarithm at a singular endpoint', section: 'Section B · §10', marks: 10,
        prompt: String.raw`
**(a)** Use the Comparison Theorem to determine whether $\displaystyle\int_1^{\infty}\frac{2+\cos x}{\sqrt x}\,dx$ converges or diverges. (3)

**(b)** Determine whether the improper integral
$$\int_0^{1}\frac{\ln x}{\sqrt x}\,dx$$
converges or diverges. If it converges, find its value. Justify every limit that you use. (7)
        `,
        solution: String.raw`
**(a)** Since $\cos x\ge-1$, we have $2+\cos x\ge1$, so $\dfrac{2+\cos x}{\sqrt x}\ge\dfrac{1}{\sqrt x}>0$ for $x\ge1$. ✓
$\displaystyle\int_1^{\infty}x^{-1/2}dx=\lim_{t\to\infty}\left(2\sqrt t-2\right)=\infty$ diverges (a $p$-integral with $p=\frac12\le1$). ✓
By the Comparison Theorem, the larger integral $\displaystyle\int_1^{\infty}\frac{2+\cos x}{\sqrt x}dx$ **diverges**. ✓

**(b)** The integrand is undefined at $x=0$ (and $\ln x\to-\infty$), so the integral is improper at $0$ (Type II): $\displaystyle\int_0^{1}\frac{\ln x}{\sqrt x}dx=\lim_{t\to0^{+}}\int_t^{1}\frac{\ln x}{\sqrt x}dx$. ✓
By parts with $u=\ln x$, $dv=x^{-1/2}dx$ ($du=\frac1x dx$, $v=2\sqrt x$): ✓
$$\int\frac{\ln x}{\sqrt x}dx=2\sqrt x\ln x-\int\frac{2}{\sqrt x}dx=2\sqrt x\ln x-4\sqrt x.$$ ✓
$$\int_t^{1}\frac{\ln x}{\sqrt x}dx=\Big[2\sqrt x\ln x-4\sqrt x\Big]_t^{1}=-4-\left(2\sqrt t\ln t-4\sqrt t\right).$$ ✓
$\displaystyle\lim_{t\to0^{+}}\sqrt t\ln t=\lim_{t\to0^{+}}\frac{\ln t}{t^{-1/2}}=\lim_{t\to0^{+}}\frac{1/t}{-\tfrac12t^{-3/2}}=\lim_{t\to0^{+}}\left(-2\sqrt t\right)=0$ by l’Hôpital’s rule ✓, and $\sqrt t\to0$. ✓
Therefore the integral **converges** and
$$\int_0^{1}\frac{\ln x}{\sqrt x}dx=-4.$$ ✓
        `
      },
      {
        number: 11, label: 'B5', title: 'Sequences and series', section: 'Section B · §11.1–11.3', marks: 9,
        prompt: String.raw`
**(a)** Use the Squeeze Theorem to determine whether the sequence $\{a_n\}=\left\{\dfrac{3n+\sin n}{n+2}\right\}$ is convergent or divergent. If it is convergent, state to what value it converges. (3)

**(b)** Using (a) or otherwise, decide (with reasons) if the following series converges or diverges.
$$\sum_{n=1}^{\infty}(-1)^{n}\,\frac{3n+\sin n}{n+2}$$ (2)

**(c)** Use the Integral Test to decide whether the following series converges or diverges. Verify that the conditions of the test hold.
$$\sum_{n=1}^{\infty}\frac{\arctan n}{1+n^{2}}$$ (4)
        `,
        solution: String.raw`
**(a)** Since $-1\le\sin n\le1$, ✓
$$\frac{3n-1}{n+2}\le a_n\le\frac{3n+1}{n+2}.$$
Both bounds tend to $3$ as $n\to\infty$ (divide top and bottom by $n$). ✓ By the **Squeeze Theorem** $a_n\to3$: the sequence is **convergent with limit $3$**. ✓

**(b)** The general term is $(-1)^na_n$ with $|a_n|\to3\ne0$, so the terms do not tend to $0$ (they approach $+3$ and $-3$ alternately). By the **Test for Divergence** the series **diverges**. ✓✓

**(c)** Let $f(x)=\dfrac{\arctan x}{1+x^2}$ for $x\ge1$. It is continuous and positive. ✓ It is decreasing, because
$$f'(x)=\frac{1-2x\arctan x}{\left(1+x^2\right)^2}<0\quad(x\ge1),$$ ✓
since for $x\ge1$ we have $\arctan x\ge\frac\pi4$, so $2x\arctan x\ge\frac\pi2>1$. With $u=\arctan x$, $du=\dfrac{dx}{1+x^2}$:
$$\int_1^\infty\frac{\arctan x}{1+x^2}dx=\lim_{b\to\infty}\Big[\tfrac12\arctan^2x\Big]_1^b=\frac12\left(\frac{\pi^2}{4}-\frac{\pi^2}{16}\right)=\frac{3\pi^2}{32}.$$ ✓
The integral converges, so by the Integral Test the series **converges**. ✓
        `
      },
      {
        number: 12, label: 'B6', title: 'Power series representations', section: 'Section B · §11.5', marks: 9,
        prompt: String.raw`
**(a)** Use the geometric series to find a power series for $f(x)=\dfrac{1}{3-x}$ about $x=0$, and state its radius of convergence. (3)

**(b)** Differentiate your series term by term to obtain a power series for $\dfrac{1}{(3-x)^{2}}$. Hence, by choosing a suitable value of $x$, find the exact value of $\displaystyle\sum_{n=1}^{\infty}\frac{n}{3^{n}}$. (3)

**(c)** Integrate your series from (a) term by term to obtain a power series for $\ln(3-x)$. (3)
        `,
        solution: String.raw`
**(a)** Write $\dfrac{1}{3-x}=\dfrac13\cdot\dfrac{1}{1-\frac x3}$ and use $\dfrac1{1-r}=\sum r^n$ with $r=\dfrac x3$: ✓✓
$$\frac{1}{3-x}=\sum_{n=0}^{\infty}\frac{x^n}{3^{n+1}},\qquad\left|\frac x3\right|<1.$$
The **radius of convergence is $R=3$**. ✓

**(b)** Differentiate both sides ($\frac{d}{dx}\frac1{3-x}=\frac1{(3-x)^2}$): ✓
$$\frac{1}{(3-x)^2}=\sum_{n=1}^{\infty}\frac{n\,x^{n-1}}{3^{n+1}},\qquad|x|<3.$$ ✓
Put $x=1$ (inside the interval of convergence): $\dfrac1{4}=\displaystyle\sum_{n=1}^\infty\frac{n}{3^{n+1}}=\frac13\sum_{n=1}^\infty\frac n{3^n}$, so
$$\sum_{n=1}^{\infty}\frac{n}{3^{n}}=\frac34.$$ ✓

**(c)** Integrate (a) from $0$ to $x$. The left side gives $\displaystyle\int_0^x\frac{dt}{3-t}=-\ln(3-x)+\ln3$; the right side gives $\displaystyle\sum_{n=0}^\infty\frac{x^{n+1}}{(n+1)3^{n+1}}$. ✓✓
$$\ln(3-x)=\ln3-\sum_{n=0}^{\infty}\frac{x^{n+1}}{(n+1)\,3^{n+1}}=\ln3-\frac x3-\frac{x^2}{18}-\frac{x^3}{81}-\cdots,\qquad|x|<3.$$ ✓
(Term-by-term integration keeps the radius of convergence $R=3$.)
        `
      },
      {
        number: 13, label: 'B7', title: 'Differential equations — separable', section: 'Section B · §12.1', marks: 8,
        prompt: String.raw`
Given the differential equation
$$\left(1+x^{2}\right)\frac{dy}{dx}=1+y^{2}.$$

**(a)** State the order of the equation, and show that it is separable by writing it in the form $M(x)\,dx+N(y)\,dy=0$. (2)

**(b)** Find the general solution of the equation. (3)

**(c)** Find the particular solution given that $y=1$ when $x=0$, giving $y$ as a rational function of $x$, and state the largest interval containing $x=0$ on which it is defined. (3)
        `,
        solution: String.raw`
**(a)** The equation is **first order**. ✓ Dividing by $(1+x^2)(1+y^2)$:
$$\frac{dx}{1+x^{2}}-\frac{dy}{1+y^{2}}=0,$$ ✓
which has the form $M(x)\,dx+N(y)\,dy=0$, so it is **separable**.

**(b)** Integrate: $\arctan x-\arctan y=C_1$, so the **general solution** is ✓✓
$$\arctan y=\arctan x+C.$$

**(c)** With $y(0)=1$: $\arctan1=\dfrac\pi4=0+C$. ✓ Then $y=\tan\!\left(\arctan x+\dfrac\pi4\right)$, and by the addition formula $\tan(a+b)=\dfrac{\tan a+\tan b}{1-\tan a\tan b}$:
$$y=\frac{x+1}{1-x}.$$ ✓
The formula $\arctan y=\arctan x+\frac\pi4$ requires $\arctan x+\frac\pi4<\frac\pi2$, i.e. $x<1$ (and the lower bound holds for all $x$). The largest interval containing $0$ is $(-\infty,1)$. ✓
        `
      },
      {
        number: 14, label: 'B8', title: 'Differential equations — linear', section: 'Section B · §12.3', marks: 10,
        prompt: String.raw`
Given the differential equation
$$x^{2}\,\frac{dy}{dx}+y=e^{1/x},\qquad x>0.$$

**(a)** Show that this is a linear differential equation by writing it in standard form. (2)

**(b)** Find the integrating factor $e^{\int P(x)\,dx}$. (3)

**(c)** Hence find the general solution of the differential equation, and then the particular solution satisfying $y=0$ when $x=1$. (5)
        `,
        solution: String.raw`
**(a)** Divide through by $x^2$:
$$\frac{dy}{dx}+\frac{1}{x^{2}}\,y=\frac{e^{1/x}}{x^{2}}.$$ ✓✓
This has the form $\frac{dy}{dx}+P(x)y=Q(x)$ with $P(x)=x^{-2}$ and $Q(x)=\dfrac{e^{1/x}}{x^2}$, so it is **linear**.

**(b)** $\displaystyle\int x^{-2}\,dx=-\frac1x$, so ✓✓
$$\mu(x)=e^{-1/x}.$$ ✓

**(c)** Multiply by $\mu=e^{-1/x}$; the right-hand side simplifies because $e^{-1/x}e^{1/x}=1$: ✓
$$\frac{d}{dx}\left(ye^{-1/x}\right)=\frac{1}{x^{2}}.$$
Integrate: $ye^{-1/x}=-\dfrac1x+C$, so the **general solution** is ✓✓
$$y=\left(C-\frac1x\right)e^{1/x}.$$
With $y(1)=0$: $(C-1)e=0$, so $C=1$. ✓ The **particular solution** is $y=\left(1-\dfrac1x\right)e^{1/x}$.
        `
      }
    ]
  },
{
    id: 'nov-paper3',
    label: 'November Paper 3',
    date: 'November Exam C',
    kind: 'CALCULUS EXAMINATION',
    totalMarks: 90,
    duration: 120,
    topics: 'A cylinder of largest volume with an unknown surface area, the cheapest tin, and why the Extreme Value Theorem needs a closed interval (§6.6), products of sines and cosines with different arguments (§9.4), x eˣ cosh x and the cosⁿ reduction formula (§9.2), a symmetric-limit trap and an improper integral that converges only for one value of a constant (§10), a recursive sequence with a geometric series, the Root Test, Maclaurin and Taylor series, verifying a repeated-root solution, a separable ODE with ∫dy/(y ln y), and a linear ODE with integrating factor (1+x²)^(3/2).',
    instructions: [
      'Section A (Questions A1–A6): multiple choice. Choose ONE answer for each question. [14 marks]',
      'Section B (Questions B1–B8): give FULL solutions and show ALL workings. [76 marks]',
      'No calculators are allowed.',
      'You have 2 hours in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: 'A1', title: 'The largest closed box of a given surface area', section: 'Section A · §6.6', marks: 2,
        prompt: String.raw`
A closed box with a square base has a total surface area of $600\ \text{cm}^{2}$. The largest possible volume of the box is

- **A.** $944\ \text{cm}^{3}$.
- **B.** $1000\ \text{cm}^{3}$.
- **C.** $936\ \text{cm}^{3}$.
- **D.** $600\ \text{cm}^{3}$.
- **E.** $2000\ \text{cm}^{3}$.
        `,
        solution: String.raw`
**Answer: B.** ✓✓

Let the base have side $x$ and the height be $h$. From $2x^{2}+4xh=600$ we get $h=\dfrac{300-x^{2}}{2x}$, so
$$V(x)=x^{2}h=\frac{x\left(300-x^{2}\right)}{2},\qquad V'(x)=\frac{300-3x^{2}}{2}=0\Rightarrow x=10.$$
Then $h=\dfrac{200}{20}=10$ (a cube) and $V=1000$; $V=0$ at the ends of the range, so this is the maximum.

- **A** and **C** are $V(8)$ and $V(12)$. **D** confuses the surface area with the volume. **E** forgets the factor $\frac12$.
        `
      },
      {
        number: 2, label: 'A2', title: 'A trigonometric integral', section: 'Section A · §9.4', marks: 3,
        prompt: String.raw`
$$\int_0^{\pi/2}\sin^{2}x\,\cos^{2}x\,dx=$$

- **A.** $\dfrac{\pi}{16}$.
- **B.** $\dfrac{\pi}{8}$.
- **C.** $\dfrac{\pi}{4}$.
- **D.** $\dfrac{\pi}{32}$.
- **E.** $\dfrac{1}{16}$.
        `,
        solution: String.raw`
**Answer: A.** ✓✓✓

Both powers are even, so use the double-angle identities. Since $\sin x\cos x=\frac12\sin2x$ (this is $\sin2x=2\sin x\cos x$ rearranged; §9.4 lists the half-angle forms $\sin^2x=\frac{1-\cos2x}{2}$ and $\cos^2x=\frac{1+\cos2x}{2}$): 
$$\sin^2x\cos^2x=\frac14\sin^22x=\frac14\cdot\frac{1-\cos4x}{2}=\frac{1-\cos4x}{8}.$$ 
$$\int_0^{\pi/2}\frac{1-\cos4x}{8}\,dx=\frac18\Big[x-\frac{\sin4x}{4}\Big]_0^{\pi/2}=\frac18\cdot\frac\pi2=\frac{\pi}{16}.$$ 

- **B**, **C**, **D** and **E** come from slips in the double-angle identities (for example forgetting the factor $\frac14$ from $\sin x\cos x=\frac12\sin2x$) or in the final arithmetic.
        `
      },
      {
        number: 3, label: 'A3', title: 'An interior discontinuity', section: 'Section A · §10.2', marks: 2,
        prompt: String.raw`
Which one of the following statements is TRUE?

- **A.** $\displaystyle\int_{-1}^{1}\frac{dx}{x}=0$.
- **B.** $\displaystyle\int_{-1}^{1}\frac{dx}{x^{1/3}}=0$.
- **C.** $\displaystyle\int_{-1}^{1}\frac{dx}{x^{2}}=2$.
- **D.** $\displaystyle\int_{0}^{\infty}\frac{dx}{\sqrt x}=2$.
- **E.** $\displaystyle\int_{-\infty}^{\infty}x\,dx=0$.
        `,
        solution: String.raw`
**Answer: B.** ✓✓

In **B** the discontinuity $x=0$ is interior, so split: $\int_{-1}^1=\int_{-1}^0+\int_0^1$. Each piece converges, because $p=\frac13<1$: 
$$\int_0^1x^{-1/3}dx=\Big[\tfrac32x^{2/3}\Big]_0^1=\tfrac32,\qquad\int_{-1}^0x^{-1/3}dx=\Big[\tfrac32x^{2/3}\Big]_{-1}^{0}=-\tfrac32.$$
The two pieces cancel, so the integral is $0$. 

- **A:** $\int_0^1\frac{dx}x$ diverges, so the integral diverges (it is *not* $0$ "by symmetry"). **C:** $\int_0^1x^{-2}dx$ diverges ($p=2\ge1$). **D:** diverges, since $\int_1^\infty x^{-1/2}dx$ diverges. **E:** $\int_0^\infty x\,dx$ diverges, so the doubly infinite integral diverges.
        `
      },
      {
        number: 4, label: 'A4', title: 'Absolute and conditional convergence', section: 'Section A · §11.3', marks: 3,
        prompt: String.raw`
The series $\displaystyle\sum_{n=1}^{\infty}(-1)^{n}\sin\frac1n$ is

- **A.** divergent, because the terms alternate in sign.
- **B.** absolutely convergent.
- **C.** conditionally convergent.
- **D.** divergent, by the Test for Divergence.
- **E.** absolutely convergent, by the Ratio Test.
        `,
        solution: String.raw`
**Answer: C.** ✓✓✓

*Convergence.* Let $b_n=\sin\frac1n>0$. Then $b_n\to\sin0=0$ and $b_n$ is decreasing (since $\sin$ is increasing on $[0,1]$ and $\frac1n$ decreases). By the **Alternating Series Test** the series converges. 

*Reminder.* **Limit Comparison Test** (the limit form of the Comparison Test in §11.3.2; recalled here because the guide states only the direct form): if $a_n,b_n>0$ and $\displaystyle\lim_{n\to\infty}\frac{a_n}{b_n}=c$ with $0<c<\infty$, then $\sum a_n$ and $\sum b_n$ either both converge or both diverge.

*Absolute convergence.* $\displaystyle\lim_{n\to\infty}\frac{\sin(1/n)}{1/n}=1$, so by the **Limit Comparison Test** $\sum\sin\frac1n$ behaves like the harmonic series $\sum\frac1n$ and **diverges**.  So the series converges but not absolutely: **conditionally convergent**. 

- **A:** alternating sign does not cause divergence. **D:** $b_n\to0$, so the test is inconclusive. **B** and **E** are false because $\sum|a_n|$ diverges (and the Ratio Test gives $1$).
        `
      },
      {
        number: 5, label: 'A5', title: 'Recognising a power series', section: 'Section A · §11.5', marks: 2,
        prompt: String.raw`
The power series $x-\dfrac{x^{3}}{3}+\dfrac{x^{5}}{5}-\dfrac{x^{7}}{7}+\cdots=\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^{n}x^{2n+1}}{2n+1}$ is the representation of

- **A.** $\sin x$.
- **B.** $\arctan x$.
- **C.** $\dfrac{x}{1+x^{2}}$.
- **D.** $\ln(1+x)$.
- **E.** $\tan x$.
        `,
        solution: String.raw`
**Answer: B.** ✓✓

Start from the geometric series $\dfrac{1}{1+t^2}=\displaystyle\sum_{n=0}^{\infty}(-1)^nt^{2n}$ for $|t|<1$, and integrate term by term from $0$ to $x$: 
$$\arctan x=\int_0^x\frac{dt}{1+t^2}=\sum_{n=0}^{\infty}\frac{(-1)^nx^{2n+1}}{2n+1}=x-\frac{x^3}3+\frac{x^5}5-\cdots$$ 

- **A** has factorials in the denominators. **C** has no denominators $2n+1$ ($\frac{x}{1+x^2}=x-x^3+x^5-\cdots$). **D** has all powers of $x$, not only odd ones. **E** has all positive coefficients.
        `
      },
      {
        number: 6, label: 'A6', title: 'Which equation is separable?', section: 'Section A · §12.1', marks: 2,
        prompt: String.raw`
Which one of the following differential equations is separable?

- **A.** $\dfrac{dy}{dx}=x+y$.
- **B.** $\dfrac{dy}{dx}=xy+x$.
- **C.** $\dfrac{dy}{dx}=xy+y^{2}$.
- **D.** $\dfrac{dy}{dx}+y=x$.
- **E.** $\dfrac{dy}{dx}=\sin(x+y)$.
        `,
        solution: String.raw`
**Answer: B.** ✓✓

An equation is separable if it can be written as $\dfrac{dy}{dx}=g(x)\,h(y)$.  For **B**,
$$\frac{dy}{dx}=xy+x=x\,(y+1),$$
which is a function of $x$ times a function of $y$. 

- **A**, **D** (equivalent to $y'=x-y$): the sum $x+y$ cannot be factorised into a product of a function of $x$ and a function of $y$ (these are *linear* equations instead).
- **C:** $xy+y^2=y(x+y)$, which still mixes $x$ and $y$ inside a factor. **E:** $\sin(x+y)$ does not factorise.
        `
      },
      {
        number: 7, label: 'B1', title: 'Optimization — a cylinder with an unknown surface area; the cheapest tin', section: 'Section B · §6.6', marks: 11,
        prompt: String.raw`
**(a)** The function $f(x)=\dfrac1x$ is continuous on $(0,1]$ but has no absolute maximum value there. Explain why this does not contradict the Extreme Value Theorem. (2)

**(b)** A closed cylinder has total surface area $S$. The largest volume that such a cylinder can have is $250\pi$. Find $S$, and the radius and height of the cylinder of largest volume. (5)

**(c)** A closed cylindrical tin must hold $54\pi\ \text{cm}^{3}$. Find the radius and height that use the least metal, and the least surface area. (4)
        `,
        solution: String.raw`
**(a)** As $x\to0^{+}$, $\dfrac1x\to\infty$, so $f$ is unbounded and has no largest value. ✓ The Extreme Value Theorem needs a **closed** interval, and $(0,1]$ is not closed (it leaves out $0$), so the hypothesis fails and the theorem makes no promise. ✓

**(b)** From $S=2\pi r^{2}+2\pi rh$ we get $h=\dfrac{S-2\pi r^{2}}{2\pi r}$, so
$$V(r)=\pi r^{2}h=\frac{Sr}{2}-\pi r^{3}.$$ ✓
$V'(r)=\dfrac S2-3\pi r^{2}=0\Rightarrow r=\sqrt{\dfrac{S}{6\pi}}$. ✓ Since $V(0)=0$ and $V\to-\infty$ for large $r$, this gives the maximum:
$$V_{\max}=r\left(\frac S2-\pi r^{2}\right)=r\left(\frac S2-\frac S6\right)=\frac{Sr}{3},\qquad V_{\max}^{2}=\frac{S^{2}}{9}\cdot\frac{S}{6\pi}=\frac{S^{3}}{54\pi}.$$ ✓
Setting $V_{\max}=250\pi$: $S^{3}=54\pi\cdot62\,500\,\pi^{2}=3\,375\,000\,\pi^{3}$, so $S=\boxed{150\pi}$. ✓
Then $r=\sqrt{\dfrac{150\pi}{6\pi}}=\boxed{5}$ and $h=\dfrac{150\pi-50\pi}{10\pi}=\boxed{10}$ (so $h=2r$). ✓

**(c)** $h=\dfrac{54\pi}{\pi r^{2}}=\dfrac{54}{r^{2}}$, so $S(r)=2\pi r^{2}+2\pi rh=2\pi r^{2}+\dfrac{108\pi}{r}$, $r>0$. ✓
$S'(r)=4\pi r-\dfrac{108\pi}{r^{2}}=0\Rightarrow r^{3}=27\Rightarrow r=3$. ✓
$S''(r)=4\pi+\dfrac{216\pi}{r^{3}}>0$, so this is the minimum. ✓
With $r=3$: $h=6$ cm and $S_{\min}=18\pi+36\pi=\boxed{54\pi\ \text{cm}^{2}}$. ✓
        `
      },
      {
        number: 8, label: 'B2', title: 'Arctangent and log integrals; a product of trig functions', section: 'Section B · §9.1, §9.4', marks: 9,
        prompt: String.raw`
**(a)** Evaluate

**(i)** $\displaystyle\int_2^{5}\frac{dx}{x^{2}-4x+13}$ (3)

**(ii)** $\displaystyle\int_0^{\pi/3}\tan x\,dx$ (2)

**(b)** Evaluate $\displaystyle\int_0^{\pi/2}\sin3x\,\cos5x\,dx.$ (4)
        `,
        solution: String.raw`
**(a)(i)** Complete the square: $x^2-4x+13=(x-2)^2+9$. ✓ Then
$$\int_2^5\frac{dx}{(x-2)^2+3^2}=\Big[\frac13\arctan\frac{x-2}{3}\Big]_2^5=\frac13\left(\arctan1-\arctan0\right)=\frac13\cdot\frac\pi4=\frac{\pi}{12}.$$ ✓✓

**(a)(ii)** Write $\tan x=\dfrac{\sin x}{\cos x}=-\dfrac{(\cos x)'}{\cos x}$, a logarithmic integral $-\int\frac{f'}{f}$: ✓
$$\int_0^{\pi/3}\tan x\,dx=\Big[-\ln|\cos x|\Big]_0^{\pi/3}=-\ln\frac12+\ln1=\ln2.$$ ✓

**(b)** The arguments differ, so use the product-to-sum identity $\sin A\cos B=\tfrac12\left[\sin(A+B)+\sin(A-B)\right]$: ✓
$$\sin3x\cos5x=\frac12\left[\sin8x+\sin(-2x)\right]=\frac12\left(\sin8x-\sin2x\right).$$ ✓
$$\int_0^{\pi/2}\frac12\left(\sin8x-\sin2x\right)dx=\frac12\Big[-\frac{\cos8x}{8}+\frac{\cos2x}{2}\Big]_0^{\pi/2}.$$ ✓
At $x=\frac\pi2$: $-\frac18\cos4\pi+\frac12\cos\pi=-\frac18-\frac12=-\frac58$. At $x=0$: $-\frac18+\frac12=\frac38$. So
$$\int_0^{\pi/2}\sin3x\cos5x\,dx=\frac12\left(-\frac58-\frac38\right)=-\frac12.$$ ✓
        `
      },
      {
        number: 9, label: 'B3', title: 'Integration by parts; a reduction formula', section: 'Section B · §9.2', marks: 10,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_0^{1}x\,e^{x}\cosh x\,dx$. Give your answer in terms of $e$. (3)

**(b)** For an integer $n\ge2$ prove the reduction formula
$$\int\cos^{n}x\,dx=\frac{\cos^{n-1}x\,\sin x}{n}+\frac{n-1}{n}\int\cos^{n-2}x\,dx.$$ (4)

**(c)** Hence evaluate $\displaystyle\int_0^{\pi/2}\cos^{6}x\,dx.$ (3)
        `,
        solution: String.raw`
**(a)** Since $e^{x}\cosh x=\tfrac12\left(e^{2x}+1\right)$, ✓
$$\int_0^1xe^x\cosh x\,dx=\tfrac12\int_0^1xe^{2x}\,dx+\tfrac12\int_0^1x\,dx.$$
By parts with $u=x$, $dv=e^{2x}dx$: $\int xe^{2x}dx=\tfrac12xe^{2x}-\tfrac14e^{2x}$, so ✓
$$\int_0^1xe^{2x}dx=\left(\tfrac12e^2-\tfrac14e^2\right)-\left(0-\tfrac14\right)=\tfrac{e^2+1}{4}.$$
Therefore the integral is $\tfrac12\cdot\tfrac{e^2+1}4+\tfrac12\cdot\tfrac12=\dfrac{e^2+3}{8}$. ✓

**(b)** Write $\cos^nx=\cos^{n-1}x\cdot\cos x$ and integrate by parts with $u=\cos^{n-1}x$, $dv=\cos x\,dx$. Then $du=-(n-1)\cos^{n-2}x\sin x\,dx$ and $v=\sin x$. ✓✓
$$\int\cos^nx\,dx=\cos^{n-1}x\sin x+(n-1)\int\cos^{n-2}x\sin^2x\,dx.$$
Use $\sin^2x=1-\cos^2x$: ✓
$$\int\cos^nx\,dx=\cos^{n-1}x\sin x+(n-1)\int\cos^{n-2}x\,dx-(n-1)\int\cos^nx\,dx.$$
Collect: $n\int\cos^nx\,dx=\cos^{n-1}x\sin x+(n-1)\int\cos^{n-2}x\,dx$, and divide by $n$. ∎ ✓

**(c)** Over $\left[0,\frac\pi2\right]$ the boundary term $\left[\cos^{n-1}x\sin x\right]_0^{\pi/2}$ is $0$ (it contains $\cos\frac\pi2=0$ at the top and $\sin0=0$ at the bottom). So with $C_n=\int_0^{\pi/2}\cos^nx\,dx$ the formula gives $C_n=\dfrac{n-1}{n}\,C_{n-2}$. ✓
$$C_6=\frac56C_4=\frac56\cdot\frac34\,C_2=\frac56\cdot\frac34\cdot\frac12\,C_0,\qquad C_0=\int_0^{\pi/2}dx=\frac\pi2.$$ ✓
$$C_6=\frac{5}{16}\cdot\frac\pi2=\frac{5\pi}{32}.$$ ✓
        `
      },
      {
        number: 10, label: 'B4', title: 'Improper integrals — a symmetric trap and a constant chosen for convergence', section: 'Section B · §10', marks: 10,
        prompt: String.raw`
**(a)** A student argues that $\displaystyle\int_{-\infty}^{\infty}\frac{x}{1+x^{2}}\,dx=0$ because the integrand is an odd function. Show that this is wrong: the integral diverges. (3)

**(b)** Find all values of the constant $k$ for which the improper integral
$$\int_1^{\infty}\left(\frac{2x}{x^{2}+1}-\frac{k}{x+1}\right)dx$$
converges. For that value of $k$, find the value of the integral. (7)
        `,
        solution: String.raw`
**(a)** The integral is improper at both ends, so by definition it is $\displaystyle\int_{-\infty}^{0}\frac{x}{1+x^{2}}dx+\int_0^{\infty}\frac{x}{1+x^{2}}dx$, and **each** piece must converge. ✓
$$\int_0^{t}\frac{x}{1+x^{2}}dx=\tfrac12\ln\left(1+t^{2}\right)\to\infty\quad(t\to\infty),$$
so the second piece diverges, and hence the whole integral diverges. ✓ The calculation $\displaystyle\lim_{t\to\infty}\int_{-t}^{t}\frac{x}{1+x^{2}}dx=0$ uses a *symmetric* limit, which is not the definition, so it does not give the value of the integral. ✓

**(b)** An antiderivative is $\ln\left(x^{2}+1\right)-k\ln(x+1)$ (since $\frac{2x}{x^{2}+1}$ is $\frac{f'}{f}$ for $f=x^{2}+1$). ✓
$$\int_1^{t}\left(\frac{2x}{x^{2}+1}-\frac{k}{x+1}\right)dx=\ln\frac{t^{2}+1}{(t+1)^{k}}-\ln2+k\ln2.$$ ✓
The limit depends on the behaviour of $\dfrac{t^{2}+1}{(t+1)^{k}}\sim t^{\,2-k}$:
- if $k<2$ it tends to $\infty$, so the integral diverges to $+\infty$; ✓
- if $k>2$ it tends to $0$, so $\ln$ of it tends to $-\infty$ and the integral diverges to $-\infty$. ✓

For $k=2$, $\dfrac{t^{2}+1}{(t+1)^{2}}\to1$, so $\ln(\cdot)\to0$ and the integral **converges only for $k=2$**. ✓ Its value is
$$0-\ln2+2\ln2=\ln2.$$ ✓✓
        `
      },
      {
        number: 11, label: 'B5', title: 'Sequences and series', section: 'Section B · §11.1–11.3', marks: 9,
        prompt: String.raw`
**(a)** The sequence $\{a_n\}$ is defined by $a_1=1$ and $a_{n+1}=\dfrac{a_n}{2}+3$ for $n\ge1$. Show, by induction or otherwise, that $a_n<6$ for all $n$ and that $\{a_n\}$ is increasing. Hence explain why the sequence converges, and find its limit. (4)

**(b)** Show that $6-a_{n+1}=\tfrac12\left(6-a_n\right)$ for all $n$, and hence find the exact value of $\displaystyle\sum_{n=1}^{\infty}\left(6-a_n\right)$. (2)

**(c)** Use the Root Test to decide whether the following series converges or diverges.
$$\sum_{n=1}^{\infty}\frac{n^{2}}{\left(n^{2}+1\right)^{n}}$$ (3)
        `,
        solution: String.raw`
**(a)** *Bounded above by $6$:* $a_1=1<6$. If $a_n<6$, then $a_{n+1}=\dfrac{a_n}2+3<3+3=6$. By induction $a_n<6$ for all $n$. ✓

*Increasing:* $a_{n+1}-a_n=3-\dfrac{a_n}{2}>3-3=0$ because $a_n<6$. So $a_{n+1}>a_n$. ✓

A sequence that is **increasing and bounded above converges** (Monotonic Sequence Theorem). ✓ Let $L=\lim a_n$; then $a_{n+1}\to L$ too, so $L=\dfrac L2+3$, which gives $L=6$. ✓

**(b)** From the recurrence, $6-a_{n+1}=6-\dfrac{a_n}{2}-3=3-\dfrac{a_n}2=\dfrac12\left(6-a_n\right)$. ✓ So $\{6-a_n\}$ is geometric with first term $6-a_1=5$ and common ratio $\tfrac12$, and
$$\sum_{n=1}^{\infty}\left(6-a_n\right)=\frac{5}{1-\frac12}=10.$$ ✓

**(c)** Apply the **Root Test** to $c_n=\dfrac{n^2}{(n^2+1)^n}>0$: ✓
$$\sqrt[n]{c_n}=\frac{n^{2/n}}{n^2+1}.$$ ✓
Since $n^{1/n}\to1$ (because $\frac{\ln n}{n}\to0$), $n^{2/n}\to1$, and the denominator $n^2+1\to\infty$, so $\sqrt[n]{c_n}\to0<1$. By the Root Test the series **converges** (absolutely). ✓
        `
      },
      {
        number: 12, label: 'B6', title: 'Maclaurin and Taylor series', section: 'Section B · §11.6', marks: 9,
        prompt: String.raw`
**(a)** Using the known Maclaurin series for $\cos u$, find the Maclaurin series of $f(x)=x\cos\left(x^{2}\right)$ (write the first three non-zero terms and the general term), and state its radius of convergence. (4)

**(b)** Use the formula $c_n=\dfrac{f^{(n)}(a)}{n!}$ to find the Taylor polynomial $T_3(x)$ of degree $3$ for $g(x)=\sqrt x$ about $a=4$. (5)
        `,
        solution: String.raw`
**(a)** The Maclaurin series $\cos u=\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^nu^{2n}}{(2n)!}$ converges for **all** real $u$. Put $u=x^2$ and multiply by $x$: ✓✓
$$x\cos\left(x^2\right)=\sum_{n=0}^{\infty}\frac{(-1)^nx^{4n+1}}{(2n)!}=x-\frac{x^5}{2}+\frac{x^9}{24}-\cdots$$ ✓
Because the series for $\cos u$ converges for every $u$, the new series converges for every $x$: the **radius of convergence is $R=\infty$**. ✓

**(b)** Differentiate $g(x)=x^{1/2}$: ✓
$$g'(x)=\tfrac12x^{-1/2},\qquad g''(x)=-\tfrac14x^{-3/2},\qquad g'''(x)=\tfrac38x^{-5/2}.$$ ✓✓
At $a=4$ (so $\sqrt4=2$, $4^{3/2}=8$, $4^{5/2}=32$):
$$g(4)=2,\quad g'(4)=\tfrac14,\quad g''(4)=-\tfrac1{32},\quad g'''(4)=\tfrac{3}{256}.$$ ✓
The coefficients are $c_n=\dfrac{g^{(n)}(4)}{n!}$: $c_0=2$, $c_1=\frac14$, $c_2=-\frac1{64}$, $c_3=\frac{3}{256\cdot6}=\frac1{512}$. So ✓
$$T_3(x)=2+\frac{x-4}{4}-\frac{(x-4)^2}{64}+\frac{(x-4)^3}{512}.$$
        `
      },
      {
        number: 13, label: 'B7', title: 'Differential equations — verifying and separating', section: 'Section B · §12.1', marks: 8,
        prompt: String.raw`
**(a)** State the order of the differential equation $y''-4y'+4y=0$, and show that $y=(A+Bx)\,e^{2x}$ is a solution for all constants $A$ and $B$. (2)

**(b)** Given the differential equation
$$\frac{dy}{dx}=2x\,y\ln y,\qquad y>1,$$
write it in the form $M(x)\,dx+N(y)\,dy=0$ and find its general solution. (3)

**(c)** Find the particular solution of the equation in (b) given that $y=e$ when $x=0$. (3)
        `,
        solution: String.raw`
**(a)** The equation is **second order**. ✓ For $y=(A+Bx)e^{2x}$:
$$y'=\left(2A+B+2Bx\right)e^{2x},\qquad y''=\left(4A+4B+4Bx\right)e^{2x}.$$
$$y''-4y'+4y=e^{2x}\Big[(4A+4B+4Bx)-(8A+4B+8Bx)+(4A+4Bx)\Big]=0.$$ ✓

**(b)** For $y>1$ we have $y\ln y>0$, so we may divide:
$$2x\,dx-\frac{dy}{y\ln y}=0.$$ ✓
Integrate, using $w=\ln y$ for the second term ($\int\frac{dy}{y\ln y}=\ln(\ln y)$): $x^{2}-\ln(\ln y)=C_1$. So $\ln y=Ae^{x^{2}}$ with $A=e^{-C_1}>0$, and the **general solution** is ✓✓
$$y=\exp\!\left(Ae^{x^{2}}\right).$$

**(c)** With $y(0)=e$: $\ln e=1=Ae^{0}$, so $A=1$. ✓ The **particular solution** is ✓✓
$$y=\exp\!\left(e^{x^{2}}\right).$$
        `
      },
      {
        number: 14, label: 'B8', title: 'Differential equations — linear', section: 'Section B · §12.3', marks: 10,
        prompt: String.raw`
Given the differential equation
$$\left(1+x^{2}\right)\frac{dy}{dx}+3x\,y=x.$$

**(a)** Show that this is a linear differential equation by writing it in standard form. (2)

**(b)** Find the integrating factor $e^{\int P(x)\,dx}$. (3)

**(c)** Hence find the general solution of the differential equation, and then the particular solution satisfying $y=1$ when $x=0$. Describe the behaviour of this solution as $x\to\infty$. (5)
        `,
        solution: String.raw`
**(a)** Divide through by $1+x^2$:
$$\frac{dy}{dx}+\frac{3x}{1+x^{2}}\,y=\frac{x}{1+x^{2}}.$$ ✓✓
This has the form $\frac{dy}{dx}+P(x)y=Q(x)$ with $P(x)=\dfrac{3x}{1+x^2}$ and $Q(x)=\dfrac{x}{1+x^2}$, so it is **linear**.

**(b)** $\displaystyle\int\frac{3x}{1+x^{2}}\,dx=\frac32\ln\left(1+x^{2}\right)$, so ✓✓
$$\mu(x)=\left(1+x^{2}\right)^{3/2}.$$ ✓

**(c)** Multiply by $\mu$: ✓
$$\frac{d}{dx}\Big(\left(1+x^2\right)^{3/2}y\Big)=\left(1+x^2\right)^{3/2}\cdot\frac{x}{1+x^2}=x\left(1+x^{2}\right)^{1/2}.$$
Integrate (substitute $w=1+x^2$): $\left(1+x^2\right)^{3/2}y=\tfrac13\left(1+x^2\right)^{3/2}+C$, so the **general solution** is ✓✓
$$y=\frac13+C\left(1+x^{2}\right)^{-3/2}.$$
With $y(0)=1$: $1=\tfrac13+C$, so $C=\tfrac23$. ✓ The **particular solution** is $y=\dfrac13+\dfrac23\left(1+x^{2}\right)^{-3/2}$. As $x\to\infty$ the second term tends to $0$, so $y\to\dfrac13$. ✓
        `
      }
    ]
  },
{
    id: 'nov-paper4',
    label: 'November Paper 4',
    date: 'November Exam D',
    kind: 'CALCULUS EXAMINATION',
    totalMarks: 90,
    duration: 120,
    topics: 'A window with an unknown perimeter, and a rectangle under a parabola, with the definition of a critical number (§6.6), exponential and logarithmic substitutions and a double-angle trigonometric integral (§9.1, §9.4), x² sinh x and the reduction formula for (arcsin x)ⁿ (§9.2), a Type II comparison and a parameter integral by two integrations by parts (§10), a telescoping series and the Comparison Test, interval of convergence and the product series of eˣ sin x with a limit, a separable ODE with sin⁴x, and a linear ODE with right-hand side eˣ sin x.',
    instructions: [
      'Section A (Questions A1–A6): multiple choice. Choose ONE answer for each question. [14 marks]',
      'Section B (Questions B1–B8): give FULL solutions and show ALL workings. [76 marks]',
      'No calculators are allowed.',
      'You have 2 hours in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: 'A1', title: 'Fencing an enclosure with a divider', section: 'Section A · §6.6', marks: 2,
        prompt: String.raw`
A farmer has $240$ m of fencing to build a rectangular enclosure divided into two equal pens by one fence parallel to a pair of its sides. The largest total area that can be enclosed is

- **A.** $7200\ \text{m}^{2}$.
- **B.** $2250\ \text{m}^{2}$.
- **C.** $1800\ \text{m}^{2}$.
- **D.** $2400\ \text{m}^{2}$.
- **E.** $3600\ \text{m}^{2}$.
        `,
        solution: String.raw`
**Answer: D.** ✓✓

Let each of the three parallel fences have length $x$ and the other two sides length $y$. Then $3x+2y=240$, so $y=\dfrac{240-3x}{2}$ and
$$A(x)=xy=\frac{x(240-3x)}{2},\qquad A'(x)=120-3x=0\Rightarrow x=40,\ y=60.$$
$A=0$ at the ends of the range, so $A_{\max}=40\cdot60=2400$.

- **A** forgets the divider ($\frac{240^{2}}{8}$). **B** and **C** are $A(30)$ and $A(60)$. **E** is $60^{2}$.
        `
      },
      {
        number: 2, label: 'A2', title: 'A power of cosine', section: 'Section A · §9.4', marks: 3,
        prompt: String.raw`
$$\int_0^{\pi/2}\cos^{4}x\,dx=$$

- **A.** $\dfrac{\pi}{8}$.
- **B.** $\dfrac{3\pi}{8}$.
- **C.** $\dfrac{\pi}{4}$.
- **D.** $\dfrac{3\pi}{16}$.
- **E.** $\dfrac{3\pi}{32}$.
        `,
        solution: String.raw`
**Answer: D.** ✓✓✓

The power is even, so use $\cos^2x=\tfrac12(1+\cos2x)$ twice:
$$\cos^4x=\tfrac14\left(1+2\cos2x+\cos^22x\right)=\tfrac14\left(\tfrac32+2\cos2x+\tfrac12\cos4x\right)=\tfrac38+\tfrac12\cos2x+\tfrac18\cos4x.$$
Both cosine terms integrate to $0$ over $[0,\pi/2]$ (each is a whole number of half-periods), so the integral is $\tfrac38\cdot\tfrac\pi2=\dfrac{3\pi}{16}$.

- **B** multiplies $\tfrac38$ by the length $\pi$ instead of $\tfrac\pi2$. **C** is $\int_0^{\pi/2}\cos^2x\,dx$ and **A** is half of that. **E** is half the correct value.
        `
      },
      {
        number: 3, label: 'A3', title: 'An exponential improper integral', section: 'Section A · §10', marks: 2,
        prompt: String.raw`
$$\int_{0}^{\infty}e^{-3x}\,dx=$$

- **A.** $3$.
- **B.** $\dfrac13$.
- **C.** $-\dfrac13$.
- **D.** $0$.
- **E.** The integral diverges.
        `,
        solution: String.raw`
**Answer: B.** ✓✓

$\displaystyle\int_0^{\infty}e^{-3x}dx=\lim_{t\to\infty}\left[-\frac{e^{-3x}}{3}\right]_0^t=\lim_{t\to\infty}\frac{1-e^{-3t}}{3}=\frac13.$

- **A** multiplies by $3$ instead of dividing. **C** has the wrong sign: the integrand is positive. **D** is impossible for a positive integrand. **E** is wrong: $e^{-3x}$ decays quickly enough for the integral to converge.
        `
      },
      {
        number: 4, label: 'A4', title: 'Sum of a geometric series', section: 'Section A · §11.2', marks: 3,
        prompt: String.raw`
The sum of the series $$\sum_{n=2}^{\infty}(-1)^{n}\,\frac{3}{4^{n}}$$ is

- **A.** $\dfrac{3}{16}$.
- **B.** $\dfrac{3}{20}$.
- **C.** $\dfrac{12}{5}$.
- **D.** $\dfrac{3}{5}$.
- **E.** $\dfrac15$.
        `,
        solution: String.raw`
**Answer: B.** ✓✓✓

This is geometric. The first term ($n=2$) is $a=\dfrac{3}{16}$ and the common ratio is $r=-\dfrac14$, with $|r|<1$. So ✓✓
$$S=\frac{a}{1-r}=\frac{3/16}{1+\frac14}=\frac{3/16}{5/4}=\frac{3}{20}.$$ ✓

- **A** is just the first term. **C** is the sum starting at $n=0$. **D** is the sum starting at $n=1$ with the sign dropped. **E** does not match any correct setup.
        `
      },
      {
        number: 5, label: 'A5', title: 'Radius of convergence', section: 'Section A · §11.4', marks: 2,
        prompt: String.raw`
The radius of convergence of the power series $\displaystyle\sum_{n=0}^{\infty}\frac{(2n)!}{(n!)^{2}}\,x^{n}$ is

- **A.** $4$.
- **B.** $\dfrac12$.
- **C.** $2$.
- **D.** $\dfrac14$.
- **E.** $\infty$.
        `,
        solution: String.raw`
**Answer: D.** ✓✓

Use the Ratio Test with $c_n=\dfrac{(2n)!}{(n!)^2}$:
$$\frac{c_{n+1}}{c_n}=\frac{(2n+2)(2n+1)}{(n+1)^{2}}=\frac{2(2n+1)}{n+1}\ \longrightarrow\ 4.$$ ✓
The series converges when $4|x|<1$, so $R=\dfrac14$. ✓

- **A** is the reciprocal (it is the limit of the ratio, not the radius). **B**, **C** and **E** do not follow from the ratio.
        `
      },
      {
        number: 6, label: 'A6', title: 'An initial value problem', section: 'Section A · §12.1', marks: 2,
        prompt: String.raw`
The solution of $\dfrac{dy}{dx}=\dfrac{2y}{x}$, $x>0$, with $y(1)=3$ is

- **A.** $y=3e^{2x-2}$.
- **B.** $y=x^{2}+2$.
- **C.** $y=3x$.
- **D.** $y=2x+1$.
- **E.** $y=3x^{2}$.
        `,
        solution: String.raw`
**Answer: E.** ✓✓

Separate: $\dfrac{dy}{y}=\dfrac{2\,dx}{x}$, so $\ln|y|=2\ln x+C$ and $y=Ax^{2}$. ✓ With $y(1)=3$ we get $A=3$, so $y=3x^{2}$. ✓

- **A** solves $y'=2y$, not $y'=2y/x$. **B** gives $y'=2x\neq\dfrac{2(x^2+2)}{x}$. **C** gives $y'=3\neq\dfrac{2\cdot3x}{x}=6$. **D** gives $y'=2\neq\dfrac{2(2x+1)}{x}$.
        `
      },
      {
        number: 7, label: 'B1', title: 'Optimization — a window with an unknown perimeter; a rectangle under a parabola', section: 'Section B · §6.6', marks: 11,
        prompt: String.raw`
**(a)** Define a *critical number* of a function $f$. (2)

**(b)** A window consists of a rectangle topped by a semicircle whose diameter is the width of the rectangle. The total perimeter of the window is $P$ metres. The largest area that such a window can have is $\dfrac{8}{4+\pi}\ \text{m}^{2}$. Find $P$. (5)

**(c)** A rectangle has its base on the $x$-axis, symmetric about the $y$-axis, and its two upper vertices on the parabola $y=12-x^{2}$. Find the dimensions of the rectangle of largest area, and that area. (4)
        `,
        solution: String.raw`
**(a)** A critical number of $f$ is a number $c$ **in the domain of $f$** ✓ such that **$f'(c)=0$ or $f'(c)$ does not exist**. ✓

**(b)** Let the semicircle have radius $r$ and the rectangle have height $h$. The perimeter is $P=2r+2h+\pi r$, so $h=\dfrac{P-2r-\pi r}{2}$ and
$$A=2rh+\frac{\pi r^{2}}{2}=Pr-\left(2+\frac\pi2\right)r^{2}.$$ ✓
$$A'(r)=P-(4+\pi)r=0\Rightarrow r=\frac{P}{4+\pi}.$$ ✓
$A''(r)=-(4+\pi)<0$, so this is the maximum, ✓
$$A_{\max}=\frac{P^{2}}{4+\pi}-\frac{(4+\pi)}{2}\cdot\frac{P^{2}}{(4+\pi)^{2}}=\frac{P^{2}}{2(4+\pi)}.$$ ✓
Setting $\dfrac{P^{2}}{2(4+\pi)}=\dfrac{8}{4+\pi}$ gives $P^{2}=16$, so $P=\boxed{4}$ m. ✓

**(c)** Let the upper vertices be $(\pm x,\,12-x^{2})$. Then
$$A(x)=2x\left(12-x^{2}\right)=24x-2x^{3},\qquad 0<x<2\sqrt3.$$ ✓
$A'(x)=24-6x^{2}=0\Rightarrow x=2$. ✓ Since $A=0$ at both ends, this is the maximum. ✓
The rectangle has width $2x=\boxed{4}$, height $12-4=\boxed{8}$ and area $\boxed{32}$. ✓
        `
      },
      {
        number: 8, label: 'B2', title: 'Inverse-trigonometric and logarithmic integrals; a power of cosine', section: 'Section B · §9.1, §9.4', marks: 9,
        prompt: String.raw`
**(a)** Evaluate

**(i)** $\displaystyle\int_{0}^{\frac12\ln3}\frac{e^{x}}{\sqrt{4-e^{2x}}}\,dx$ (3)

**(ii)** $\displaystyle\int_{1}^{e^{2}}\frac{dx}{x\,(1+\ln x)}$ (2)

**(b)** Evaluate $\displaystyle\int_0^{\pi/2}\sin2x\,\cos^{3}x\,dx.$ (4)
        `,
        solution: String.raw`
**(a)(i)** Let $u=e^{x}$, so $du=e^{x}dx$ and $e^{2x}=u^{2}$. When $x=0$, $u=1$; when $x=\frac12\ln3$, $u=e^{\ln\sqrt3}=\sqrt3$. ✓
$$\int_{1}^{\sqrt3}\frac{du}{\sqrt{4-u^{2}}}=\Big[\arcsin\frac u2\Big]_{1}^{\sqrt3}$$ ✓
$$=\arcsin\frac{\sqrt3}{2}-\arcsin\frac12=\frac\pi3-\frac\pi6=\frac\pi6.$$ ✓

**(ii)** Let $u=1+\ln x$, so $du=\dfrac{dx}{x}$. When $x=1$, $u=1$; when $x=e^{2}$, $u=3$. ✓
$$\int_{1}^{3}\frac{du}{u}=\ln3-\ln1=\ln3.$$ ✓

**(b)** Use the double-angle formula $\sin2x=2\sin x\cos x$: ✓
$$\int_0^{\pi/2}\sin2x\cos^3x\,dx=2\int_0^{\pi/2}\sin x\cos^{4}x\,dx.$$ ✓
Let $u=\cos x$, $du=-\sin x\,dx$; the limits $x=0,\pi/2$ become $u=1,0$: ✓
$$2\int_{1}^{0}-u^{4}\,du=2\int_0^1u^{4}\,du=\frac25.$$ ✓
        `
      },
      {
        number: 9, label: 'B3', title: 'Integration by parts; a hyperbolic reduction formula', section: 'Section B · §9.2', marks: 10,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_0^{1}x^{2}\sinh x\,dx$. Give your answer in terms of $e$. (3)

**(b)** For an integer $n\ge2$ let $I_n=\displaystyle\int(\arcsin x)^{n}\,dx$ for $-1<x<1$. By integrating by parts twice, prove the reduction formula
$$I_n=x(\arcsin x)^{n}+n\sqrt{1-x^{2}}\,(\arcsin x)^{n-1}-n(n-1)\,I_{n-2}.$$ (4)

**(c)** Hence evaluate $\displaystyle\int_0^{1}(\arcsin x)^{2}\,dx.$ (3)
        `,
        solution: String.raw`
**(a)** Integrate by parts with $u=x^{2}$, $dv=\sinh x\,dx$, so $du=2x\,dx$ and $v=\cosh x$: ✓
$$\int x^{2}\sinh x\,dx=x^{2}\cosh x-2\int x\cosh x\,dx.$$
A second integration by parts ($u=x$, $dv=\cosh x\,dx$) gives $\displaystyle\int x\cosh x\,dx=x\sinh x-\cosh x$, so ✓
$$\int x^{2}\sinh x\,dx=x^{2}\cosh x-2x\sinh x+2\cosh x.$$
$$\int_0^1x^{2}\sinh x\,dx=\big(3\cosh1-2\sinh1\big)-2=\frac{e}{2}+\frac{5}{2e}-2,$$ ✓
using $\cosh1=\frac{e+e^{-1}}2$ and $\sinh1=\frac{e-e^{-1}}2$.

**(b)** Write $A=\arcsin x$, so $\dfrac{dA}{dx}=\dfrac1{\sqrt{1-x^2}}$. First integration by parts with $u=A^n$, $dv=dx$: ✓
$$I_n=xA^{n}-n\int\frac{x\,A^{n-1}}{\sqrt{1-x^{2}}}\,dx.$$
For the remaining integral take $u=A^{n-1}$ and $dv=\dfrac{x}{\sqrt{1-x^2}}\,dx$, so $v=-\sqrt{1-x^2}$ and $du=\dfrac{(n-1)A^{n-2}}{\sqrt{1-x^2}}\,dx$: ✓✓
$$\int\frac{xA^{n-1}}{\sqrt{1-x^2}}\,dx=-\sqrt{1-x^2}\,A^{n-1}+(n-1)\int A^{n-2}\,dx=-\sqrt{1-x^2}\,A^{n-1}+(n-1)I_{n-2}.$$
Substituting back, $I_n=xA^n+n\sqrt{1-x^2}\,A^{n-1}-n(n-1)I_{n-2}$. ∎ ✓

**(c)** Take $n=2$, with $I_0=\displaystyle\int dx=x$: ✓
$$\int_0^{1}A^{2}dx=\Big[xA^{2}+2\sqrt{1-x^{2}}\,A\Big]_0^{1}-2\int_0^1dx.$$
At $x=1$: $A=\tfrac\pi2$, so the bracket is $\tfrac{\pi^2}{4}+0$; at $x=0$ it is $0$. ✓ Therefore
$$\int_0^1(\arcsin x)^2dx=\frac{\pi^2}{4}-2\approx0.467.$$ ✓
        `
      },
      {
        number: 10, label: 'B4', title: 'Improper integrals — a comparison and a parameter integral', section: 'Section B · §10', marks: 10,
        prompt: String.raw`
**(a)** Use the Comparison Theorem to determine whether $\displaystyle\int_0^{1}\frac{dx}{\sqrt x+x^{3}}$ converges or diverges. (3)

**(b)** Let $a>0$ and $b$ be real constants. Show that
$$\int_0^{\infty}e^{-ax}\sin bx\,dx=\frac{b}{a^{2}+b^{2}}.$$
Justify every limit that you use. (7)
        `,
        solution: String.raw`
**(a)** For $0<x\le1$, $\sqrt x+x^{3}\ge\sqrt x>0$, so $0<\dfrac{1}{\sqrt x+x^{3}}\le\dfrac{1}{\sqrt x}$. ✓
$\displaystyle\int_0^{1}x^{-1/2}dx=\lim_{s\to0^{+}}\left(2-2\sqrt s\right)=2$ converges (a $p$-integral with $p=\frac12<1$). ✓
By the Comparison Theorem, $\displaystyle\int_0^{1}\frac{dx}{\sqrt x+x^{3}}$ **converges**. ✓

**(b)** $\displaystyle\int_0^{\infty}e^{-ax}\sin bx\,dx=\lim_{t\to\infty}I(t)$ where $I(t)=\int_0^{t}e^{-ax}\sin bx\,dx$. ✓
First integration by parts ($u=\sin bx$, $dv=e^{-ax}dx$):
$$I(t)=\Big[-\tfrac1ae^{-ax}\sin bx\Big]_0^{t}+\frac ba\int_0^{t}e^{-ax}\cos bx\,dx.$$ ✓
Second integration by parts ($u=\cos bx$, $dv=e^{-ax}dx$):
$$\int_0^{t}e^{-ax}\cos bx\,dx=\Big[-\tfrac1ae^{-ax}\cos bx\Big]_0^{t}-\frac ba\,I(t).$$ ✓
Substituting,
$$I(t)=-\frac{e^{-at}\sin bt}{a}-\frac{b}{a^{2}}e^{-at}\cos bt+\frac{b}{a^{2}}-\frac{b^{2}}{a^{2}}I(t),$$
so
$$\left(1+\frac{b^{2}}{a^{2}}\right)I(t)=\frac{b}{a^{2}}-\frac{e^{-at}\sin bt}{a}-\frac{b\,e^{-at}\cos bt}{a^{2}}.$$ ✓
Because $a>0$, $e^{-at}\to0$ as $t\to\infty$, while $|\sin bt|\le1$ and $|\cos bt|\le1$; by the Squeeze Theorem $e^{-at}\sin bt\to0$ and $e^{-at}\cos bt\to0$. ✓✓
So the limit exists (the integral **converges**) and
$$\int_0^{\infty}e^{-ax}\sin bx\,dx=\frac{b/a^{2}}{1+b^{2}/a^{2}}=\frac{b}{a^{2}+b^{2}}.$$ ✓
        `
      },
      {
        number: 11, label: 'B5', title: 'Sequences and series', section: 'Section B · §11.1–11.3', marks: 9,
        prompt: String.raw`
**(a)** Determine whether the sequence $\{a_n\}=\left\{\left(1-\dfrac{2}{n}\right)^{n}\right\}$ is convergent or divergent. If it is convergent, state to what value it converges. (3)

**(b)** Use the identity $\dfrac{1}{(n+1)(n+2)}=\dfrac1{n+1}-\dfrac1{n+2}$ to find the exact sum of the series
$$\sum_{n=1}^{\infty}\frac{1}{(n+1)(n+2)}.$$ (2)

**(c)** Use the Comparison Test to decide whether the following series converges or diverges.
$$\sum_{n=1}^{\infty}\frac{2+\sin n}{n^{2}+3}$$ (4)
        `,
        solution: String.raw`
**(a)** Take logarithms: $\ln a_n=n\ln\!\left(1-\dfrac2n\right)=\dfrac{\ln(1-2/n)}{1/n}$, which has the form $\frac00$. ✓ With $f(x)=\dfrac{\ln(1-2/x)}{1/x}$ and l'Hôpital's rule:
$$\lim_{x\to\infty}\frac{\ln(1-2/x)}{1/x}=\lim_{x\to\infty}\frac{\dfrac{2/x^{2}}{1-2/x}}{-1/x^{2}}=\lim_{x\to\infty}\frac{-2}{1-2/x}=-2.$$ ✓
By continuity of $e^{x}$, $a_n\to e^{-2}$. The sequence is **convergent with limit $e^{-2}$**. ✓

**(b)** The partial sums telescope:
$$s_N=\sum_{n=1}^{N}\left(\frac1{n+1}-\frac1{n+2}\right)=\frac12-\frac1{N+2}.$$ ✓
Since $s_N\to\tfrac12$, the series converges and its sum is $\dfrac12$. ✓

**(c)** Since $-1\le\sin n\le1$, we have $1\le2+\sin n\le3$, so for every $n\ge1$ ✓
$$0<\frac{2+\sin n}{n^{2}+3}\le\frac{3}{n^{2}+3}<\frac{3}{n^{2}}.$$ ✓✓
The series $\sum\dfrac{3}{n^2}=3\sum\dfrac1{n^2}$ converges (a $p$-series with $p=2>1$), so by the Comparison Test the given series **converges**. ✓
        `
      },
      {
        number: 12, label: 'B6', title: 'Power series and a Maclaurin series', section: 'Section B · §11.4, §11.6', marks: 9,
        prompt: String.raw`
**(a)** Find the radius of convergence and the interval of convergence of the power series
$$\sum_{n=1}^{\infty}\frac{(x+3)^{n}}{\sqrt n\;2^{n}}.$$ (5)

**(b)** By multiplying the Maclaurin series of $e^{x}$ and $\sin x$, find the first four non-zero terms of the Maclaurin series of $f(x)=e^{x}\sin x$. Hence evaluate
$$\lim_{x\to0}\frac{e^{x}\sin x-x-x^{2}}{x^{3}}.$$ (4)
        `,
        solution: String.raw`
**(a)** **Ratio Test.** With $a_n=\dfrac{(x+3)^n}{\sqrt n\,2^n}$,
$$\left|\frac{a_{n+1}}{a_n}\right|=\sqrt{\frac{n}{n+1}}\cdot\frac{|x+3|}{2}\ \longrightarrow\ \frac{|x+3|}{2}.$$ ✓
The series converges when $|x+3|<2$, so the **radius of convergence is $R=2$** and the series converges on $(-5,-1)$. ✓✓

**Endpoints.** At $x=-1$ the series is $\displaystyle\sum\frac{1}{\sqrt n}$, a $p$-series with $p=\frac12\le1$, so it **diverges**. At $x=-5$ it is $\displaystyle\sum\frac{(-1)^n}{\sqrt n}$; the terms $\frac1{\sqrt n}$ are decreasing and tend to $0$, so it **converges** by the Alternating Series Test. ✓

**Interval of convergence: $[-5,-1)$.** ✓

**(b)** Use $e^x=1+x+\dfrac{x^2}{2}+\dfrac{x^3}{6}+\dfrac{x^4}{24}+\cdots$ and $\sin x=x-\dfrac{x^3}{6}+\dfrac{x^5}{120}-\cdots$ and collect powers of $x$: ✓
- $x^1$: $1\cdot x=x$.
- $x^2$: $x\cdot x=x^2$.
- $x^3$: $\dfrac{x^2}{2}\cdot x+1\cdot\left(-\dfrac{x^3}{6}\right)=\left(\dfrac12-\dfrac16\right)x^3=\dfrac{x^3}{3}$.
- $x^4$: $\dfrac{x^3}{6}\cdot x+x\cdot\left(-\dfrac{x^3}{6}\right)=0$.
- $x^5$: $\dfrac{1}{120}-\dfrac{1}{2}\cdot\dfrac16+\dfrac1{24}=\dfrac{1-10+5}{120}=-\dfrac1{30}$. ✓✓

So $e^x\sin x=x+x^2+\dfrac{x^3}{3}-\dfrac{x^5}{30}+\cdots$ (the $x^4$ term vanishes). Then
$$\frac{e^x\sin x-x-x^2}{x^3}=\frac13-\frac{x^2}{30}+\cdots\ \longrightarrow\ \frac13\quad(x\to0).$$ ✓
        `
      },
      {
        number: 13, label: 'B7', title: 'Differential equations — separable', section: 'Section B · §12.1', marks: 8,
        prompt: String.raw`
Given the differential equation
$$\frac{dy}{dx}=y\,\sin^{4}x.$$

**(a)** State the order of the equation, and show that it is separable by writing it in the form $M(x)\,dx+N(y)\,dy=0$. (2)

**(b)** Find the general solution of the equation. You may use the identity $\sin^{4}x=\dfrac38-\dfrac12\cos2x+\dfrac18\cos4x$. (3)

**(c)** Find the particular solution given that $y=2$ when $x=0$. (3)
        `,
        solution: String.raw`
**(a)** The equation is **first order**. ✓ For $y\ne0$:
$$\sin^{4}x\,dx-\frac{dy}{y}=0,$$ ✓
which has the form $M(x)\,dx+N(y)\,dy=0$, so it is **separable**.

**(b)** Integrate $\dfrac{dy}{y}=\sin^4x\,dx$ using the identity: ✓
$$\ln|y|=\int\left(\frac38-\frac12\cos2x+\frac18\cos4x\right)dx=\frac{3x}{8}-\frac{\sin2x}{4}+\frac{\sin4x}{32}+C_1.$$
Exponentiating, the **general solution** is ✓✓
$$y=A\exp\!\left(\frac{3x}{8}-\frac{\sin2x}{4}+\frac{\sin4x}{32}\right),\qquad A\ne0\text{ constant}$$
(and $A=0$ gives the solution $y=0$).

**(c)** With $y(0)=2$: the exponent is $0$ at $x=0$, so $A=2$. ✓ The **particular solution** is ✓✓
$$y=2\exp\!\left(\frac{3x}{8}-\frac{\sin2x}{4}+\frac{\sin4x}{32}\right).$$
        `
      },
      {
        number: 14, label: 'B8', title: 'Differential equations — linear', section: 'Section B · §12.3', marks: 10,
        prompt: String.raw`
Given the differential equation
$$\frac{dy}{dx}=2y+e^{x}\sin x.$$

**(a)** Show that this is a linear differential equation by writing it in standard form. (2)

**(b)** Find the integrating factor $e^{\int P(x)\,dx}$. (3)

**(c)** Hence find the general solution of the differential equation, and then the particular solution satisfying $y=0$ when $x=0$. (5)
        `,
        solution: String.raw`
**(a)** Move the $y$-term to the left:
$$\frac{dy}{dx}-2y=e^{x}\sin x.$$ ✓✓
This has the form $\frac{dy}{dx}+P(x)y=Q(x)$ with $P(x)=-2$ and $Q(x)=e^x\sin x$, so it is **linear**.

**(b)** $\displaystyle\int(-2)\,dx=-2x$, so $\mu(x)=e^{-2x}$. ✓✓✓

**(c)** Multiply by $e^{-2x}$: ✓
$$\frac{d}{dx}\left(ye^{-2x}\right)=e^{-x}\sin x.$$
Let $K=\displaystyle\int e^{-x}\sin x\,dx$. By parts twice: $K=-e^{-x}\sin x+\displaystyle\int e^{-x}\cos x\,dx=-e^{-x}\sin x-e^{-x}\cos x-K$, so ✓
$$K=-\frac{e^{-x}(\sin x+\cos x)}{2}.$$
Hence $ye^{-2x}=-\dfrac{e^{-x}(\sin x+\cos x)}{2}+C$ and the **general solution** is ✓
$$y=-\frac{e^{x}(\sin x+\cos x)}{2}+Ce^{2x}.$$
With $y(0)=0$: $0=-\tfrac12+C$, so $C=\tfrac12$. ✓ The **particular solution** is $y=\dfrac{e^{2x}-e^{x}(\sin x+\cos x)}{2}$.
        `
      }
    ]
  },
{
    id: 'nov-paper5',
    label: 'November Paper 5',
    date: 'November Exam E',
    kind: 'CALCULUS EXAMINATION',
    totalMarks: 90,
    duration: 120,
    topics: 'A cone of fixed slant height with an unknown value, a rectangle in a triangle, and a proof of Fermat’s Theorem (§6.6), inverse-sine and logarithmic integrals and cos²x sin 3x (§9.1, §9.4), x sinh²x cosh x and the reduction formula for xⁿ sin x (§9.2), a Type I divergence by comparison and an integral with two bad endpoints (§10), alternating series, power series from 1/(1+x³) with an error bound and the Taylor series of e²ˣ about 1, implicit verification of a solution, a separable ODE with an implicit solution, and a linear ODE needing integration by parts.',
    instructions: [
      'Section A (Questions A1–A6): multiple choice. Choose ONE answer for each question. [14 marks]',
      'Section B (Questions B1–B8): give FULL solutions and show ALL workings. [76 marks]',
      'No calculators are allowed.',
      'You have 2 hours in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: 'A1', title: 'Least fencing against a wall', section: 'Section A · §6.6', marks: 2,
        prompt: String.raw`
A rectangular pen of area $200\ \text{m}^{2}$ is built against a long straight wall, which forms one of its sides. The other three sides are fenced. The least length of fencing needed is

- **A.** $10$ m.
- **B.** $50$ m.
- **C.** $40$ m.
- **D.** $40\sqrt2$ m.
- **E.** $20$ m.
        `,
        solution: String.raw`
**Answer: C.** ✓✓

Let the two sides perpendicular to the wall have length $x$; the side parallel to the wall has length $\dfrac{200}{x}$. The fencing needed is
$$F(x)=2x+\frac{200}{x},\qquad F'(x)=2-\frac{200}{x^{2}}=0\Rightarrow x=10.$$
$F\to\infty$ as $x\to0^{+}$ and as $x\to\infty$ (and $F''(x)=\frac{400}{x^{3}}>0$), so this is the minimum: $F(10)=20+20=40$.

- **A** and **E** are side lengths ($x$ and $\frac{200}{x}$). **B** is $F(5)$. **D** is the minimum perimeter if all four sides were fenced ($4\sqrt{200}$).
        `
      },
      {
        number: 2, label: 'A2', title: 'An inverse-tangent form', section: 'Section A · §9.1', marks: 3,
        prompt: String.raw`
$$\int\frac{dx}{x\left(1+(\ln x)^{2}\right)}=$$

- **A.** $\ln\!\left(1+(\ln x)^{2}\right)+C$.
- **B.** $\arctan(\ln x)+C$.
- **C.** $\dfrac12\ln\!\left(1+(\ln x)^{2}\right)+C$.
- **D.** $(\arctan x)(\ln x)+C$.
- **E.** $\arctan(x\ln x)+C$.
        `,
        solution: String.raw`
**Answer: B.** ✓✓✓

Let $u=\ln x$, so $du=\dfrac{dx}{x}$: ✓✓
$$\int\frac{dx}{x\left(1+(\ln x)^{2}\right)}=\int\frac{du}{1+u^{2}}=\arctan u+C=\arctan(\ln x)+C.$$ ✓

- **A** and **C** use the logarithmic form $\int\frac{f'}{f}$, which needs a numerator equal to the derivative of $1+u^2$. **D** and **E** do not differentiate back to the integrand.
        `
      },
      {
        number: 3, label: 'A3', title: 'An improper integral at zero', section: 'Section A · §10', marks: 2,
        prompt: String.raw`
$$\int_{0}^{9}\frac{dx}{\sqrt x}=$$

- **A.** $3$.
- **B.** $18$.
- **C.** $\dfrac92$.
- **D.** $6$.
- **E.** The integral diverges.
        `,
        solution: String.raw`
**Answer: D.** ✓✓

The integrand is unbounded at $x=0$, so the integral is improper (Type II):
$$\int_{0}^{9}\frac{dx}{\sqrt x}=\lim_{t\to0^{+}}\Big[2\sqrt x\Big]_t^{9}=\lim_{t\to0^{+}}\left(6-2\sqrt t\right)=6.$$ ✓✓

- **E** is wrong: $p=\frac12<1$, so the $p$-integral converges at $0$. **A**, **B**, **C** come from mis-evaluating the antiderivative $2\sqrt x$.
        `
      },
      {
        number: 4, label: 'A4', title: 'Alternating, but divergent', section: 'Section A · §11.3', marks: 3,
        prompt: String.raw`
Which one of the following statements about the series $\displaystyle\sum_{n=1}^{\infty}(-1)^{n}\frac{2n}{3n+1}$ is correct?

- **A.** It diverges, because $a_n$ does not tend to $0$ (Test for Divergence).
- **B.** It converges absolutely, by the Ratio Test.
- **C.** It converges conditionally, by the Alternating Series Test.
- **D.** It converges absolutely, by comparison with $\displaystyle\sum\frac{1}{2^{n}}$.
- **E.** It diverges, by the Integral Test.
        `,
        solution: String.raw`
**Answer: A.** ✓✓✓

The terms satisfy $\left|a_n\right|=\dfrac{2n}{3n+1}\to\dfrac23\neq0$, so $\displaystyle\lim_{n\to\infty}a_n$ does not exist (it oscillates between values near $\pm\frac23$). ✓✓ By the **Test for Divergence** the series diverges. ✓

- The Alternating Series Test (**C**) needs $|a_n|\to0$, which fails. The Ratio Test (**B**) gives the limit $1$, which is inconclusive. The comparison in **D** is invalid. The Integral Test (**E**) needs positive terms and is not what shows divergence here.
        `
      },
      {
        number: 5, label: 'A5', title: 'Recognising a Maclaurin series', section: 'Section A · §11.6', marks: 2,
        prompt: String.raw`
The sum of the series $\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^{n}\pi^{2n}}{(2n)!}$ is

- **A.** $1$.
- **B.** $0$.
- **C.** $\pi$.
- **D.** $e^{-\pi}$.
- **E.** $-1$.
        `,
        solution: String.raw`
**Answer: E.** ✓✓

This is the Maclaurin series $\cos x=\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^{n}x^{2n}}{(2n)!}$ evaluated at $x=\pi$. ✓ The sum is $\cos\pi=-1$. ✓

- **A** is $\cos0$ or $\cos2\pi$; **B** is $\sin\pi$; **C** and **D** are not values of the cosine series.
        `
      },
      {
        number: 6, label: 'A6', title: 'Which equation is linear?', section: 'Section A · §12.3', marks: 2,
        prompt: String.raw`
Which one of the following differential equations is **linear** (first order)?

- **A.** $\dfrac{dy}{dx}=xy^{2}$.
- **B.** $y\,\dfrac{dy}{dx}=x$.
- **C.** $\dfrac{dy}{dx}+\dfrac{y}{x}=x^{2}$.
- **D.** $\dfrac{dy}{dx}=y^{2}+x$.
- **E.** $\dfrac{dy}{dx}=\sin y+x$.
        `,
        solution: String.raw`
**Answer: C.** ✓✓

A first-order equation is linear if it can be written $\dfrac{dy}{dx}+P(x)y=Q(x)$, with $y$ and $\frac{dy}{dx}$ appearing only to the first power and not multiplied together. ✓ The equation $\dfrac{dy}{dx}+\dfrac1xy=x^{2}$ has this form with $P=\frac1x$, $Q=x^{2}$. ✓

- **A** and **D** contain $y^{2}$; **B** contains the product $y\frac{dy}{dx}$; **E** contains $\sin y$. None is linear in $y$.
        `
      },
      {
        number: 7, label: 'B1', title: 'Optimization — a cone of fixed slant height; a rectangle in a triangle', section: 'Section B · §6.6', marks: 11,
        prompt: String.raw`
**(a)** Prove Fermat’s Theorem in one case: if $f$ has a local maximum at $c$ and $f'(c)$ exists, then $f'(c)=0$. (2)

**(b)** A right circular cone has slant height $L$ cm. The largest volume that such a cone can have is $16\sqrt3\,\pi\ \text{cm}^{3}$. Find $L$, and the height and base radius of the cone of largest volume. (5)

**(c)** An isosceles triangle has base $12$ cm and height $8$ cm. A rectangle is inscribed in the triangle with one side on the base. Find the largest possible area of the rectangle. (4)
        `,
        solution: String.raw`
**(a)** Since $f(c)$ is a local maximum, $f(c+h)\le f(c)$ for small $h$, so $\dfrac{f(c+h)-f(c)}{h}\le0$ for $h>0$ and $\ge0$ for $h<0$. ✓ Because $f'(c)$ exists, the right-hand limit ($\le0$) and the left-hand limit ($\ge0$) are both equal to $f'(c)$, forcing $f'(c)=0$. ✓

**(b)** With height $h$ and base radius $r$ we have $r^{2}=L^{2}-h^{2}$, so
$$V(h)=\frac\pi3\,r^{2}h=\frac\pi3\left(L^{2}h-h^{3}\right).$$ ✓
$V'(h)=\dfrac\pi3\left(L^{2}-3h^{2}\right)=0\Rightarrow h=\dfrac{L}{\sqrt3}$. ✓ Since $V=0$ at $h=0$ and $h=L$, this is the maximum, ✓
$$V_{\max}=\frac\pi3\cdot\frac{L}{\sqrt3}\cdot\frac{2L^{2}}{3}=\frac{2\pi L^{3}}{9\sqrt3}.$$
Setting $\dfrac{2\pi L^{3}}{9\sqrt3}=16\sqrt3\,\pi$ gives $L^{3}=\dfrac{16\cdot3\cdot9}{2}=216$, so $L=\boxed{6}$ cm. ✓
Then $h=\dfrac{6}{\sqrt3}=\boxed{2\sqrt3}$ cm and $r=\sqrt{36-12}=\boxed{2\sqrt6}$ cm. ✓

**(c)** Let the rectangle have width $w$ and height $y$. Similar triangles (the small triangle above the rectangle has base $w$ and height $8-y$) give $\dfrac{w}{12}=\dfrac{8-y}{8}$, so $y=8-\dfrac{2w}{3}$. ✓
$$A(w)=wy=8w-\frac{2w^{2}}{3},\qquad 0<w<12.$$ ✓
$A'(w)=8-\dfrac{4w}{3}=0\Rightarrow w=6$. ✓ Since $A=0$ at $w=0$ and $w=12$, this is the maximum: $y=4$ and $A_{\max}=6\cdot4=\boxed{24\ \text{cm}^{2}}$. ✓
        `
      },
      {
        number: 8, label: 'B2', title: 'Inverse-sine and logarithmic integrals; a product of sines', section: 'Section B · §9.1, §9.4', marks: 9,
        prompt: String.raw`
**(a)** Evaluate

**(i)** $\displaystyle\int_{1}^{3}\frac{dx}{\sqrt{4x-x^{2}}}$ (3)

**(ii)** $\displaystyle\int_{0}^{2}\frac{x}{x^{2}+4}\,dx$ (2)

**(b)** Evaluate $\displaystyle\int_0^{\pi/2}\cos^{2}x\,\sin3x\,dx.$ (4)
        `,
        solution: String.raw`
**(a)(i)** Complete the square: $4x-x^{2}=4-(x-2)^{2}$. Let $u=x-2$, so $du=dx$; $x=1\Rightarrow u=-1$ and $x=3\Rightarrow u=1$. ✓
$$\int_{-1}^{1}\frac{du}{\sqrt{4-u^{2}}}=\Big[\arcsin\frac u2\Big]_{-1}^{1}$$ ✓
$$=\arcsin\frac12-\arcsin\!\left(-\frac12\right)=\frac\pi6+\frac\pi6=\frac\pi3.$$ ✓

**(ii)** The numerator is half of the derivative of $x^{2}+4$, so ✓
$$\int_0^2\frac{x}{x^{2}+4}\,dx=\Big[\frac12\ln\left(x^{2}+4\right)\Big]_0^2=\frac12\left(\ln8-\ln4\right)=\frac12\ln2.$$ ✓

**(b)** Use $\cos^2x=\tfrac12(1+\cos2x)$: ✓
$$\int_0^{\pi/2}\cos^2x\sin3x\,dx=\tfrac12\int_0^{\pi/2}\sin3x\,dx+\tfrac12\int_0^{\pi/2}\cos2x\sin3x\,dx.$$
First integral: $\tfrac12\Big[-\dfrac{\cos3x}{3}\Big]_0^{\pi/2}=\tfrac12\cdot\tfrac13=\tfrac16$. ✓
Second integral: $\sin3x\cos2x=\tfrac12(\sin5x+\sin x)$, so ✓
$$\tfrac14\Big[-\frac{\cos5x}{5}-\cos x\Big]_0^{\pi/2}=\tfrac14\left(0-\left(-\tfrac15-1\right)\right)=\tfrac{3}{10}.$$
Total: $\dfrac16+\dfrac3{10}=\dfrac{7}{15}$. ✓
        `
      },
      {
        number: 9, label: 'B3', title: 'Integration by parts; a reduction formula', section: 'Section B · §9.2', marks: 10,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_0^{1}x\sinh^{2}x\,\cosh x\,dx$. Give your answer in terms of $\sinh1$ and $\cosh1$. (3)

**(b)** For an integer $n\ge2$ let $I_n=\displaystyle\int x^{n}\sin x\,dx$. Prove the reduction formula
$$I_n=-x^{n}\cos x+n\,x^{n-1}\sin x-n(n-1)\,I_{n-2}.$$ (4)

**(c)** Hence evaluate $\displaystyle\int_0^{\pi/2}x^{3}\sin x\,dx.$ (3)
        `,
        solution: String.raw`
**(a)** Integrate by parts with $u=x$ and $dv=\sinh^2x\cosh x\,dx$, so $v=\tfrac13\sinh^3x$: ✓
$$\int x\sinh^2x\cosh x\,dx=\tfrac13x\sinh^3x-\tfrac13\int\sinh^3x\,dx.$$
Now $\sinh^3x=\sinh x\left(\cosh^2x-1\right)$, so $\displaystyle\int\sinh^3x\,dx=\tfrac13\cosh^3x-\cosh x$. ✓ Hence
$$\int x\sinh^2x\cosh x\,dx=\tfrac13x\sinh^3x-\tfrac19\cosh^3x+\tfrac13\cosh x.$$
Evaluating from $0$ to $1$ (the value at $0$ is $-\tfrac19+\tfrac13=\tfrac29$):
$$\tfrac13\sinh^31-\tfrac19\cosh^31+\tfrac13\cosh1-\tfrac29\approx0.425.$$ ✓

**(b)** Take $u=x^{n}$, $dv=\sin x\,dx$, so $du=nx^{n-1}dx$ and $v=-\cos x$: ✓
$$I_n=-x^{n}\cos x+n\int x^{n-1}\cos x\,dx.$$
Integrate by parts again with $u=x^{n-1}$, $dv=\cos x\,dx$ (so $v=\sin x$): ✓✓
$$\int x^{n-1}\cos x\,dx=x^{n-1}\sin x-(n-1)\int x^{n-2}\sin x\,dx=x^{n-1}\sin x-(n-1)I_{n-2}.$$
Substituting gives $I_n=-x^{n}\cos x+nx^{n-1}\sin x-n(n-1)I_{n-2}$. ∎ ✓

**(c)** Apply (b) with $n=3$ between $0$ and $\frac\pi2$:
$$\int_0^{\pi/2}x^{3}\sin x\,dx=\Big[-x^{3}\cos x+3x^{2}\sin x\Big]_0^{\pi/2}-6\int_0^{\pi/2}x\sin x\,dx.$$ ✓
The bracket equals $0+\dfrac{3\pi^{2}}{4}$, and $\displaystyle\int_0^{\pi/2}x\sin x\,dx=\Big[-x\cos x+\sin x\Big]_0^{\pi/2}=1$. ✓ Therefore
$$\int_0^{\pi/2}x^{3}\sin x\,dx=\frac{3\pi^{2}}{4}-6.$$ ✓
        `
      },
      {
        number: 10, label: 'B4', title: 'Improper integrals — a comparison and an integral with two bad endpoints', section: 'Section B · §10', marks: 10,
        prompt: String.raw`
**(a)** Use the Comparison Theorem to determine whether $\displaystyle\int_2^{\infty}\frac{dx}{\sqrt x-1}$ converges or diverges. (3)

**(b)** Determine whether the improper integral
$$\int_1^{\infty}\frac{dx}{x\sqrt{x^{2}-1}}$$
converges or diverges. If it converges, find its value. HINT: $\dfrac{d}{dx}\left(\operatorname{arcsec}x\right)=\dfrac{1}{x\sqrt{x^{2}-1}}$ for $x>1$, with $\operatorname{arcsec}1=0$, $\operatorname{arcsec}2=\dfrac\pi3$ and $\displaystyle\lim_{x\to\infty}\operatorname{arcsec}x=\dfrac\pi2$. (7)
        `,
        solution: String.raw`
**(a)** For $x\ge2$, $0<\sqrt x-1<\sqrt x$, so $\dfrac{1}{\sqrt x-1}>\dfrac{1}{\sqrt x}>0$. ✓
$\displaystyle\int_2^{\infty}x^{-1/2}dx=\lim_{t\to\infty}\left(2\sqrt t-2\sqrt2\right)=\infty$ diverges. ✓
By the Comparison Theorem, $\displaystyle\int_2^{\infty}\frac{dx}{\sqrt x-1}$ **diverges**. ✓

**(b)** The interval is infinite **and** the integrand is undefined at $x=1$ (where $\sqrt{x^{2}-1}=0$), so the integral is improper at both ends. We split at $x=2$: ✓
$$\int_1^{\infty}=\int_1^{2}\frac{dx}{x\sqrt{x^{2}-1}}+\int_2^{\infty}\frac{dx}{x\sqrt{x^{2}-1}},$$
and both pieces must converge. ✓
$$\int_1^{2}=\lim_{s\to1^{+}}\Big[\operatorname{arcsec}x\Big]_s^{2}=\frac\pi3-\operatorname{arcsec}1=\frac\pi3-0=\frac\pi3.$$ ✓✓
$$\int_2^{\infty}=\lim_{t\to\infty}\Big[\operatorname{arcsec}x\Big]_2^{t}=\frac\pi2-\frac\pi3=\frac\pi6.$$ ✓
Both limits exist, so the integral **converges** ✓ and
$$\int_1^{\infty}\frac{dx}{x\sqrt{x^{2}-1}}=\frac\pi3+\frac\pi6=\frac\pi2.$$ ✓
        `
      },
      {
        number: 11, label: 'B5', title: 'Sequences and series', section: 'Section B · §11.1–11.3', marks: 9,
        prompt: String.raw`
**(a)** Determine whether the sequence $\{a_n\}=\left\{\ln(3n+1)-\ln n\right\}$ is convergent or divergent. If it is convergent, state to what value it converges. (3)

**(b)** Using (a) or otherwise, decide (with reasons) if the following series converges or diverges.
$$\sum_{n=1}^{\infty}\left[\ln(3n+1)-\ln n\right]$$ (2)

**(c)** Decide whether the following series is absolutely convergent, conditionally convergent or divergent. Give reasons.
$$\sum_{n=1}^{\infty}\frac{(-1)^{n}}{n+\sqrt n}$$ (4)
        `,
        solution: String.raw`
**(a)** By the log laws, $a_n=\ln\dfrac{3n+1}{n}=\ln\!\left(3+\dfrac1n\right)$. ✓ As $n\to\infty$, $3+\frac1n\to3$, and $\ln$ is continuous at $3$, so ✓
$$a_n\longrightarrow\ln3.$$
The sequence is **convergent with limit $\ln3$**. ✓

**(b)** Since $a_n\to\ln3\neq0$, the **Test for Divergence** shows the series **diverges**. ✓✓

**(c)** *Alternating Series Test.* Let $b_n=\dfrac{1}{n+\sqrt n}>0$. The denominator is increasing, so $b_n$ is decreasing, and $b_n\to0$. ✓ Hence $\sum\dfrac{(-1)^n}{n+\sqrt n}$ **converges**. ✓

*Reminder.* **Limit Comparison Test** (the limit form of the Comparison Test in §11.3.2; recalled here because the guide states only the direct form): if $a_n,b_n>0$ and $\displaystyle\lim_{n\to\infty}\frac{a_n}{b_n}=c$ with $0<c<\infty$, then $\sum a_n$ and $\sum b_n$ either both converge or both diverge.

*Absolute convergence.* Compare $\displaystyle\sum\frac{1}{n+\sqrt n}$ with $\displaystyle\sum\frac1n$ by the Limit Comparison Test: ✓
$$\lim_{n\to\infty}\frac{1/(n+\sqrt n)}{1/n}=\lim_{n\to\infty}\frac{1}{1+n^{-1/2}}=1>0.$$
Since $\sum\frac1n$ diverges, so does $\sum\frac{1}{n+\sqrt n}$. The series is therefore **conditionally convergent**. ✓
        `
      },
      {
        number: 12, label: 'B6', title: 'Power series representations; a Maclaurin series', section: 'Section B · §11.5, §11.6', marks: 9,
        prompt: String.raw`
**(a)** Use the geometric series to find a power series for $f(x)=\dfrac{1}{1+x^{3}}$ about $x=0$, and state its radius of convergence. (3)

**(b)** Integrate your series term by term to write $\displaystyle\int_0^{1/2}\frac{dx}{1+x^{3}}$ as an infinite series. Use its first three terms to approximate the integral, and show, by comparing the remaining terms with a geometric series, that the error is less than $10^{-3}$. (3)

**(c)** Use the Maclaurin series of $e^{u}$ to find the Taylor series of $f(x)=e^{2x}$ about $a=1$ (write the first four terms and the general term), and state its radius of convergence. (3)
        `,
        solution: String.raw`
**(a)** Replace $x$ by $-x^{3}$ in $\dfrac1{1-x}=\sum x^n$:
$$\frac{1}{1+x^{3}}=\sum_{n=0}^{\infty}(-1)^{n}x^{3n}=1-x^3+x^6-x^9+\cdots,$$ ✓✓
valid when $|x^{3}|<1$, i.e. $|x|<1$, so the radius of convergence is $R=1$. ✓

**(b)** Since $\tfrac12$ lies inside the interval of convergence, we may integrate term by term:
$$\int_0^{1/2}\frac{dx}{1+x^3}=\sum_{n=0}^{\infty}\frac{(-1)^n}{3n+1}\left(\tfrac12\right)^{3n+1}=\frac12-\frac1{64}+\frac1{896}-\frac1{10240}+\cdots.$$ ✓
The first three terms give $\dfrac12-\dfrac1{64}+\dfrac1{896}=\dfrac{435}{896}\approx0.4855$. The omitted terms satisfy (using $3n+1\ge10$ for $n\ge3$)
$$\left|\sum_{n=3}^{\infty}\frac{(-1)^n}{3n+1}\left(\tfrac12\right)^{3n+1}\right|\le\frac1{10}\sum_{n=3}^{\infty}\left(\tfrac12\right)^{3n+1}=\frac1{10}\cdot\frac{(1/2)^{10}}{1-1/8}=\frac{1}{8960}<10^{-3}.$$ ✓✓

**(c)** Re-centre at $a=1$: write $2x=2+2(x-1)$, so $e^{2x}=e^{2}\,e^{2(x-1)}$. ✓ Substituting $u=2(x-1)$ in $e^u=\sum u^n/n!$:
$$e^{2x}=e^{2}\sum_{n=0}^{\infty}\frac{2^{n}(x-1)^{n}}{n!}=e^{2}\left[1+2(x-1)+2(x-1)^2+\tfrac43(x-1)^3+\cdots\right].$$ ✓
The series for $e^u$ converges for every $u$, so the radius of convergence is $R=\infty$. ✓
        `
      },
      {
        number: 13, label: 'B7', title: 'Differential equations — verifying and separating', section: 'Section B · §12.0, §12.1', marks: 8,
        prompt: String.raw`
**(a)** State the order of the differential equation $(2y-x)\dfrac{dy}{dx}=y-2x$, and show that any differentiable function $y(x)$ defined implicitly by $x^{2}-xy+y^{2}=C$ is a solution. (2)

**(b)** Given the differential equation
$$\frac{dy}{dx}=\frac{2x+1}{2y+1},\qquad y>-\tfrac12,$$
write it in the form $M(x)\,dx+N(y)\,dy=0$ and find its general solution, leaving it in implicit form. (3)

**(c)** Find the particular solution of the equation in (b) given that $y=1$ when $x=0$, and write $y$ explicitly in terms of $x$. (3)
        `,
        solution: String.raw`
**(a)** The equation is **first order**. ✓ Differentiate $x^2-xy+y^2=C$ implicitly with respect to $x$:
$$2x-y-x\frac{dy}{dx}+2y\frac{dy}{dx}=0\ \Longrightarrow\ (2y-x)\frac{dy}{dx}=y-2x,$$ ✓
which is the given equation, so every such $y(x)$ is a solution.

**(b)** Multiply by $(2y+1)$: ✓
$$(2x+1)\,dx-(2y+1)\,dy=0.$$
Integrate: $x^2+x-y^2-y=C_1$, so the **general solution** (implicit form) is ✓✓
$$y^{2}+y=x^{2}+x+C.$$

**(c)** With $y(0)=1$: $1+1=0+0+C$, so $C=2$. ✓ Solve the quadratic $y^2+y-\left(x^2+x+2\right)=0$ for $y$:
$$y=\frac{-1\pm\sqrt{1+4\left(x^2+x+2\right)}}{2}=\frac{-1\pm\sqrt{4x^2+4x+9}}{2}.$$
Since $y(0)=1>-\tfrac12$ we must take the $+$ sign (at $x=0$: $\frac{-1+3}{2}=1$). ✓ So
$$y=\frac{-1+\sqrt{4x^{2}+4x+9}}{2}.$$ ✓ (Here $4x^2+4x+9=(2x+1)^2+8>0$ for all $x$.)
        `
      },
      {
        number: 14, label: 'B8', title: 'Differential equations — linear', section: 'Section B · §12.3', marks: 10,
        prompt: String.raw`
Given the differential equation
$$x\,\frac{dy}{dx}-4y=x^{6}e^{x},\qquad x>0.$$

**(a)** Show that this is a linear differential equation by writing it in standard form. (2)

**(b)** Find the integrating factor $e^{\int P(x)\,dx}$. (3)

**(c)** Hence find the general solution of the differential equation, and then the particular solution satisfying $y=2$ when $x=1$. (5)
        `,
        solution: String.raw`
**(a)** Divide through by $x$:
$$\frac{dy}{dx}-\frac{4}{x}\,y=x^{5}e^{x}.$$ ✓✓
This has the form $\frac{dy}{dx}+P(x)y=Q(x)$ with $P(x)=-\dfrac4x$ and $Q(x)=x^{5}e^{x}$, so it is **linear**.

**(b)** $\displaystyle\int-\frac4x\,dx=-4\ln x$ (for $x>0$), so ✓✓
$$\mu(x)=e^{-4\ln x}=x^{-4}.$$ ✓

**(c)** Multiply the standard form by $\mu=x^{-4}$; the left side is an exact derivative: ✓
$$\frac{d}{dx}\left(x^{-4}y\right)=x^{-4}\cdot x^{5}e^{x}=xe^{x}.$$ ✓
Integrate by parts ($u=x$, $dv=e^{x}dx$): $\displaystyle\int xe^{x}dx=xe^{x}-e^{x}=(x-1)e^{x}$. So $x^{-4}y=(x-1)e^{x}+C$ and the **general solution** is ✓
$$y=x^{4}\left[(x-1)e^{x}+C\right].$$
With $y(1)=2$: $2=1\cdot\left[0+C\right]$, so $C=2$. ✓ The **particular solution** is ✓
$$y=x^{4}\left[(x-1)e^{x}+2\right].$$
        `
      }
    ]
  },
{
    id: 'nov-paper6',
    label: 'November Paper 6',
    date: 'November Exam F',
    kind: 'CALCULUS EXAMINATION',
    totalMarks: 90,
    duration: 120,
    topics: 'The closest point on a parabola to an unknown point and a cone in a sphere (Fermat’s Theorem) (§6.6), an exponential substitution over a completed square and mixed even powers (§9.1, §9.4), x sech²x and the reduction formula for 1/(1+x²)ⁿ (§9.2), a Comparison Theorem convergence and a reduction formula for ∫xⁿe^{−x}dx (§10), squeeze theorem and Ratio Test, the Maclaurin series of x eˣ from the coefficient formula, a separable ODE with an arcsine solution and a linear ODE with integrating factor ln x.',
    instructions: [
      'Section A (Questions A1–A6): multiple choice. Choose ONE answer for each question. [14 marks]',
      'Section B (Questions B1–B8): give FULL solutions and show ALL workings. [76 marks]',
      'No calculators are allowed.',
      'You have 2 hours in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: 'A1', title: 'Maximum profit from a demand function', section: 'Section A · §6.6', marks: 2,
        prompt: String.raw`
The quantity demanded of an item is $q=60-2p$ units when the price is $p$ rand, and each unit costs $\text{R}6$ to make. The maximum possible profit is

- **A.** $\text{R}18$.
- **B.** $\text{R}24$.
- **C.** $\text{R}450$.
- **D.** $\text{R}216$.
- **E.** $\text{R}288$.
        `,
        solution: String.raw`
**Answer: E.** ✓✓

Profit $=$ (price $-$ cost) $\times$ quantity:
$$P(p)=(p-6)(60-2p)=-2p^{2}+72p-360,\qquad P'(p)=72-4p=0\Rightarrow p=18.$$
$P''(p)=-4<0$, so this is the maximum: $P(18)=12\cdot24=288$.

- **A** is the best *price*, **B** the quantity sold. **C** is the maximum *revenue* ($p=15$), forgetting the cost. **D** is $P(12)$.
        `
      },
      {
        number: 2, label: 'A2', title: 'Integration by parts', section: 'Section A · §9.2', marks: 3,
        prompt: String.raw`
$$\int_{1}^{e}x\ln x\,dx=$$

- **A.** $\dfrac{e^{2}+1}{4}$.
- **B.** $\dfrac{e^{2}-1}{4}$.
- **C.** $\dfrac{e^{2}}{2}$.
- **D.** $\dfrac{e^{2}+1}{2}$.
- **E.** $\dfrac{e^{2}-1}{2}$.
        `,
        solution: String.raw`
**Answer: A.** ✓✓✓

Take $u=\ln x$ and $dv=x\,dx$, so $du=\frac{dx}{x}$ and $v=\frac{x^{2}}{2}$: ✓
$$\int_1^{e}x\ln x\,dx=\Big[\frac{x^{2}\ln x}{2}\Big]_1^{e}-\int_1^{e}\frac{x}{2}\,dx=\frac{e^{2}}{2}-\frac{e^{2}-1}{4}=\frac{e^{2}+1}{4}.$$ ✓✓

- **B** has the sign of the lower limit wrong. **C**, **D**, **E** come from dropping or mis-scaling a term.
        `
      },
      {
        number: 3, label: 'A3', title: 'An integrable singularity at an endpoint', section: 'Section A · §10', marks: 2,
        prompt: String.raw`
$$\int_{0}^{1}\frac{dx}{\sqrt{1-x}}=$$

- **A.** $1$.
- **B.** $2$.
- **C.** $\dfrac12$.
- **D.** $\dfrac\pi2$.
- **E.** The integral diverges.
        `,
        solution: String.raw`
**Answer: B.** ✓✓

The integrand is unbounded at $x=1$, so
$$\int_0^{1}\frac{dx}{\sqrt{1-x}}=\lim_{t\to1^-}\Big[-2\sqrt{1-x}\Big]_0^{t}=\lim_{t\to1^-}\left(2-2\sqrt{1-t}\right)=2.$$ ✓✓

- **E** is the usual mistake of assuming that a vertical asymptote forces divergence; here the exponent is $\tfrac12<1$. **A** and **C** come from mis-integrating $(1-x)^{-1/2}$. **D** is not related to this integral.
        `
      },
      {
        number: 4, label: 'A4', title: 'Where is the Ratio Test inconclusive?', section: 'Section A · §11.3', marks: 3,
        prompt: String.raw`
For exactly one of the following series, the Ratio Test is **inconclusive**. Which one?

- **A.** $\displaystyle\sum_{n=1}^{\infty}\frac{5^{n}}{n!}$
- **B.** $\displaystyle\sum_{n=1}^{\infty}\frac{n^{2}}{4^{n}}$
- **C.** $\displaystyle\sum_{n=1}^{\infty}\frac{n!}{n^{n}}$
- **D.** $\displaystyle\sum_{n=1}^{\infty}\left(-\frac12\right)^{n}$
- **E.** $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n^{2}}$
        `,
        solution: String.raw`
**Answer: E.** ✓✓✓

The Ratio Test is inconclusive exactly when $\displaystyle\lim\left|\frac{a_{n+1}}{a_n}\right|=1$. ✓ For $\sum\frac{1}{n^2}$ the ratio is $\dfrac{n^{2}}{(n+1)^{2}}\to1$, so it is inconclusive (even though the series converges, by the $p$-test). ✓

The other ratios tend to $0$, $\frac14$, $\frac1e$ and $\frac12$ respectively, all different from $1$. ✓
        `
      },
      {
        number: 5, label: 'A5', title: 'A Maclaurin coefficient of a product', section: 'Section A · §11.6', marks: 2,
        prompt: String.raw`
The coefficient of $x^{4}$ in the Maclaurin series of $f(x)=e^{x}\cos x$ is

- **A.** $\dfrac1{24}$.
- **B.** $-\dfrac14$.
- **C.** $-\dfrac16$.
- **D.** $\dfrac16$.
- **E.** $-\dfrac5{24}$.
        `,
        solution: String.raw`
**Answer: C.** ✓✓

Multiply $e^x=1+x+\dfrac{x^2}{2}+\dfrac{x^3}{6}+\dfrac{x^4}{24}+\cdots$ by $\cos x=1-\dfrac{x^2}{2}+\dfrac{x^4}{24}-\cdots$. The $x^4$ terms come from $1\cdot\dfrac{x^4}{24}$, $\dfrac{x^2}{2}\cdot\left(-\dfrac{x^2}{2}\right)$ and $\dfrac{x^4}{24}\cdot1$: ✓
$$\frac1{24}-\frac14+\frac1{24}=-\frac{4}{24}=-\frac16.$$ ✓

- **A** is the coefficient in $e^x$ (or $\cos x$) alone. **B** keeps only the cross term. **E** forgets one of the two $\frac1{24}$ terms. **D** has the wrong sign.
        `
      },
      {
        number: 6, label: 'A6', title: 'Verifying a solution of a differential equation', section: 'Section A · §12.0', marks: 2,
        prompt: String.raw`
Which one of the following functions is a solution of the differential equation $y''+2y'+y=0$?

- **A.** $y=e^{x}$.
- **B.** $y=e^{-2x}$.
- **C.** $y=xe^{-x}$.
- **D.** $y=xe^{x}$.
- **E.** $y=\cos x$.
        `,
        solution: String.raw`
**Answer: C.** ✓✓

For $y=xe^{-x}$: $y'=(1-x)e^{-x}$ and $y''=(x-2)e^{-x}$. ✓ Then
$$y''+2y'+y=\left[(x-2)+2(1-x)+x\right]e^{-x}=0.$$ ✓

- For $e^{x}$: $1+2+1=4\neq0$. For $e^{-2x}$: $4-4+1=1\neq0$. For $xe^{x}$ and $\cos x$ the left side is not identically zero.
        `
      },
      {
        number: 7, label: 'B1', title: 'Optimization — the closest point on a parabola; a cone in a sphere', section: 'Section B · §6.6', marks: 11,
        prompt: String.raw`
**(a)** State Fermat’s Theorem. (2)

**(b)** The points on the parabola $y=x^{2}$ that are closest to the point $(0,c)$, where $c>\tfrac12$, are $(1,1)$ and $(-1,1)$. Find the value of $c$, and the least distance from $(0,c)$ to the parabola. (5)

**(c)** A right circular cone is inscribed in a sphere of radius $3$ cm. Find the largest possible volume of the cone. (4)
        `,
        solution: String.raw`
**(a)** If $f$ has a **local maximum or local minimum** at $c$ ✓ and $f'(c)$ exists, then $f'(c)=0$. ✓

**(b)** The square of the distance from $(0,c)$ to $\left(x,x^{2}\right)$ is
$$D(x)=x^{2}+\left(x^{2}-c\right)^{2}.$$ ✓
$$D'(x)=2x+4x\left(x^{2}-c\right)=2x\left(2x^{2}-2c+1\right).$$ ✓
So $D'(x)=0$ at $x=0$ or $x^{2}=c-\tfrac12$. The closest points have $x=\pm1\neq0$, so they must satisfy $1=c-\tfrac12$, giving $c=\boxed{\tfrac32}$. ✓
Check against $x=0$: $D(0)=c^{2}=\tfrac94$, while $D(\pm1)=1+\left(1-\tfrac32\right)^{2}=\tfrac54<\tfrac94$ (and $D\to\infty$ as $|x|\to\infty$), so $x=\pm1$ really gives the minimum. ✓
The least distance is $\sqrt{\tfrac54}=\boxed{\dfrac{\sqrt5}{2}}$. ✓

**(c)** Let the cone have height $h$ and base radius $r$. The base lies at distance $h-3$ from the centre, so $r^{2}=9-(h-3)^{2}=6h-h^{2}$. ✓
$$V(h)=\frac\pi3r^{2}h=\frac\pi3\left(6h^{2}-h^{3}\right),\qquad 0<h<6.$$ ✓
$V'(h)=\dfrac\pi3\left(12h-3h^{2}\right)=\pi h(4-h)=0\Rightarrow h=4$. ✓ Since $V=0$ at $h=0$ and $h=6$, this is the maximum:
$$V_{\max}=\frac\pi3(96-64)=\boxed{\frac{32\pi}{3}\ \text{cm}^{3}}.$$ ✓
        `
      },
      {
        number: 8, label: 'B2', title: 'Completing the square; a product of powers of sine and cosine', section: 'Section B · §9.1, §9.4', marks: 9,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_0^{\ln3}\frac{e^{x}}{e^{2x}+4e^{x}+13}\,dx.$ (5)

**(b)** Evaluate $\displaystyle\int_0^{\pi/2}\sin^{2}x\,\cos^{4}x\,dx.$ (4)
        `,
        solution: String.raw`
**(a)** Substitute $u=e^{x}$, $du=e^{x}dx$. The limits $x=0,\ln3$ become $u=1,3$: ✓✓
$$\int_0^{\ln3}\frac{e^{x}\,dx}{e^{2x}+4e^{x}+13}=\int_1^{3}\frac{du}{u^{2}+4u+13}.$$
Complete the square: $u^2+4u+13=(u+2)^2+3^2$, so ✓
$$\int_1^{3}\frac{du}{(u+2)^{2}+3^{2}}=\frac13\Big[\arctan\frac{u+2}{3}\Big]_1^{3}=\frac13\left(\arctan\frac53-\arctan1\right).$$ ✓✓
Since $\arctan\frac53-\arctan1=\arctan\dfrac{5/3-1}{1+5/3}=\arctan\dfrac14$, the value is $\dfrac13\arctan\dfrac14\approx0.082$.

**(b)** Both powers are even, so use double-angle identities: $\sin^{2}x\cos^{2}x=\frac14\sin^{2}2x$ and $\cos^{2}x=\frac{1+\cos2x}{2}$. ✓
$$\sin^{2}x\cos^{4}x=\frac14\sin^{2}2x\cdot\frac{1+\cos2x}{2}=\frac18\sin^{2}2x+\frac18\sin^{2}2x\cos2x.$$ ✓
Now $\displaystyle\int_0^{\pi/2}\sin^{2}2x\,dx=\int_0^{\pi/2}\frac{1-\cos4x}{2}\,dx=\frac\pi4$, and $\displaystyle\int_0^{\pi/2}\sin^{2}2x\cos2x\,dx=\Big[\frac{\sin^{3}2x}{6}\Big]_0^{\pi/2}=0$. ✓ Therefore
$$\int_0^{\pi/2}\sin^{2}x\cos^{4}x\,dx=\frac18\cdot\frac\pi4+0=\frac{\pi}{32}.$$ ✓
        `
      },
      {
        number: 9, label: 'B3', title: 'Integration by parts; a reduction formula', section: 'Section B · §9.2', marks: 10,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_0^{\ln2}x\,\operatorname{sech}^{2}x\,dx$. (3)

**(b)** For an integer $n\ge1$ let $I_n=\displaystyle\int\frac{dx}{\left(1+x^{2}\right)^{n}}$. Prove the reduction formula
$$I_{n+1}=\frac{x}{2n\left(1+x^{2}\right)^{n}}+\frac{2n-1}{2n}\,I_n.$$ (4)

**(c)** Hence evaluate $\displaystyle\int_0^{1}\frac{dx}{\left(1+x^{2}\right)^{3}}.$ (3)
        `,
        solution: String.raw`
**(a)** Take $u=x$ and $dv=\operatorname{sech}^{2}x\,dx$, so $du=dx$ and $v=\tanh x$: ✓
$$\int x\operatorname{sech}^{2}x\,dx=x\tanh x-\int\tanh x\,dx=x\tanh x-\ln\cosh x.$$ ✓
Since $\cosh(\ln2)=\frac54$ and $\sinh(\ln2)=\frac34$, we get $\tanh(\ln2)=\frac35$, so
$$\int_0^{\ln2}x\operatorname{sech}^{2}x\,dx=\frac35\ln2-\ln\frac54=\frac{13}{5}\ln2-\ln5.$$ ✓

**(b)** Take $u=\left(1+x^{2}\right)^{-n}$ and $dv=dx$, so $du=-2nx\left(1+x^{2}\right)^{-n-1}dx$ and $v=x$: ✓✓
$$I_n=\frac{x}{\left(1+x^{2}\right)^{n}}+2n\int\frac{x^{2}}{\left(1+x^{2}\right)^{n+1}}\,dx.$$
Write $x^{2}=\left(1+x^{2}\right)-1$, so the last integral equals $I_n-I_{n+1}$: ✓
$$I_n=\frac{x}{\left(1+x^{2}\right)^{n}}+2n\left(I_n-I_{n+1}\right).$$
Solving for $I_{n+1}$: $2nI_{n+1}=\dfrac{x}{\left(1+x^{2}\right)^{n}}+(2n-1)I_n$, which is the formula. ∎ ✓

**(c)** Let $J_n=\displaystyle\int_0^{1}\frac{dx}{(1+x^{2})^{n}}$, with $J_1=\Big[\arctan x\Big]_0^1=\dfrac\pi4$. ✓ By (b) with $n=1$:
$$J_2=\frac{1}{2\cdot2}+\frac12J_1=\frac14+\frac\pi8.$$
By (b) with $n=2$ (the boundary term is $\frac{1}{4\cdot2^{2}}=\frac1{16}$ at $x=1$ and $0$ at $x=0$): ✓
$$J_3=\frac{1}{16}+\frac34J_2=\frac1{16}+\frac3{16}+\frac{3\pi}{32}=\frac14+\frac{3\pi}{32}.$$ ✓
        `
      },
      {
        number: 10, label: 'B4', title: 'Improper integrals — a comparison and a reduction formula', section: 'Section B · §10', marks: 10,
        prompt: String.raw`
**(a)** Use the Comparison Theorem to determine whether $\displaystyle\int_1^{\infty}\frac{3+\sin x}{x^{2}}\,dx$ converges or diverges. (3)

**(b)** For each integer $n\ge0$ let $I_n=\displaystyle\int_0^{\infty}x^{n}e^{-x}\,dx$ (assume it converges). Use integration by parts to show that $I_n=n\,I_{n-1}$ for $n\ge1$, justifying every limit, and hence find $I_4$. (7)
        `,
        solution: String.raw`
**(a)** Since $\sin x\le1$, $0<\dfrac{3+\sin x}{x^{2}}\le\dfrac{4}{x^{2}}$ for $x\ge1$. ✓
$\displaystyle\int_1^{\infty}\frac{4}{x^{2}}dx=\lim_{t\to\infty}\left(4-\frac4t\right)=4$ converges. ✓
By the Comparison Theorem, $\displaystyle\int_1^{\infty}\frac{3+\sin x}{x^{2}}dx$ **converges**. ✓

**(b)** For $n\ge1$ and $t>0$, integrate by parts with $u=x^{n}$, $dv=e^{-x}dx$: ✓
$$\int_0^{t}x^{n}e^{-x}dx=\Big[-x^{n}e^{-x}\Big]_0^{t}+n\int_0^{t}x^{n-1}e^{-x}dx=-t^{n}e^{-t}+n\int_0^{t}x^{n-1}e^{-x}dx.$$
(At $x=0$ the boundary term is $0$ because $n\ge1$.) ✓
Now $\displaystyle\lim_{t\to\infty}t^{n}e^{-t}=\lim_{t\to\infty}\frac{t^{n}}{e^{t}}=0$ by applying l’Hôpital’s rule $n$ times. ✓
Letting $t\to\infty$ gives $I_n=n\,I_{n-1}$. ✓
Next, $I_0=\displaystyle\lim_{t\to\infty}\int_0^{t}e^{-x}dx=\lim_{t\to\infty}\left(1-e^{-t}\right)=1$. ✓
Hence
$$I_4=4I_3=4\cdot3\,I_2=4\cdot3\cdot2\,I_1=4\cdot3\cdot2\cdot1\,I_0=\boxed{24}.$$ ✓✓
        `
      },
      {
        number: 11, label: 'B5', title: 'Sequences and series', section: 'Section B · §11.1–11.3', marks: 9,
        prompt: String.raw`
**(a)** Use the Squeeze Theorem to determine whether the sequence $\{a_n\}=\left\{\dfrac{n!}{n^{n}}\right\}$ is convergent or divergent. If it is convergent, state to what value it converges. (3)

**(b)** Does (a) alone tell you whether $\displaystyle\sum_{n=1}^{\infty}\frac{n!}{n^{n}}$ converges? Explain, and then use the Ratio Test to decide whether this series converges or diverges. You may use $\displaystyle\lim_{n\to\infty}\left(1+\frac1n\right)^{n}=e$. (3)

**(c)** Use the Limit Comparison Test to decide whether the following series converges or diverges.
$$\sum_{n=1}^{\infty}\frac{2^{n}+5}{3^{n}+n}$$ (3)
        `,
        solution: String.raw`
**(a)** Write $\dfrac{n!}{n^{n}}=\dfrac1n\cdot\dfrac2n\cdot\dfrac3n\cdots\dfrac nn$. Every factor after the first is at most $1$, so ✓
$$0<\frac{n!}{n^{n}}\le\frac1n.$$ ✓
Since $\frac1n\to0$, the **Squeeze Theorem** gives $a_n\to0$. The sequence is **convergent with limit $0$**. ✓

**(b)** No. $a_n\to0$ only passes the Test for Divergence; it does not guarantee convergence of the series (the harmonic series is a counterexample). ✓ Use the **Ratio Test**:
$$\frac{a_{n+1}}{a_n}=\frac{(n+1)!}{(n+1)^{n+1}}\cdot\frac{n^{n}}{n!}=\frac{n^{n}}{(n+1)^{n}}=\left(1+\frac1n\right)^{-n}\ \longrightarrow\ \frac1e.$$ ✓
Since $\frac1e<1$, the series **converges**. ✓

**(c)** **Limit Comparison Test** (the limit form of the Comparison Test in §11.3.2; recalled here because the guide states only the direct form): if $a_n,b_n>0$ and $\displaystyle\lim_{n\to\infty}\frac{a_n}{b_n}=c$ with $0<c<\infty$, then $\sum a_n$ and $\sum b_n$ either both converge or both diverge.

All terms are positive. Compare with the convergent geometric series $\displaystyle\sum\left(\frac23\right)^{n}$: ✓
$$\lim_{n\to\infty}\frac{\dfrac{2^{n}+5}{3^{n}+n}}{\left(\dfrac23\right)^{n}}=\lim_{n\to\infty}\frac{1+5/2^{n}}{1+n/3^{n}}=1,$$
a finite positive number (using $n/3^{n}\to0$). ✓ By the Limit Comparison Test the series **converges**. ✓
        `
      },
      {
        number: 12, label: 'B6', title: 'Power series and a Taylor series', section: 'Section B · §11.4, §11.6', marks: 9,
        prompt: String.raw`
**(a)** Find the radius of convergence and the interval of convergence of the power series
$$\sum_{n=1}^{\infty}\frac{x^{2n}}{n\,9^{n}}.$$ (5)

**(b)** Use the formula $c_n=\dfrac{f^{(n)}(0)}{n!}$ to find the Maclaurin series of $f(x)=x\,e^{x}$. Write down the first four non-zero terms and the general term. (4)
        `,
        solution: String.raw`
**(a)** **Ratio Test.** With $a_n=\dfrac{x^{2n}}{n\,9^n}$,
$$\left|\frac{a_{n+1}}{a_n}\right|=\frac{n}{n+1}\cdot\frac{x^{2}}{9}\ \longrightarrow\ \frac{x^{2}}{9}.$$ ✓
The series converges when $\dfrac{x^{2}}{9}<1$, i.e. $|x|<3$. So the **radius of convergence is $R=3$** and the series converges on $(-3,3)$. ✓✓

**Endpoints.** At $x=\pm3$, $x^{2n}=9^{n}$, so the series becomes $\displaystyle\sum\frac1n$, the harmonic series, which **diverges** at both endpoints. ✓

**Interval of convergence: $(-3,3)$.** ✓

**(b)** Differentiate: $f'(x)=(x+1)e^x$, $f''(x)=(x+2)e^x$, $f'''(x)=(x+3)e^x$, and in general $f^{(n)}(x)=(x+n)e^x$ (each differentiation raises the constant by $1$). ✓✓ Therefore $f^{(n)}(0)=n$ and
$$c_n=\frac{n}{n!}=\frac{1}{(n-1)!}\quad(n\ge1),\qquad c_0=0.$$ ✓
The Maclaurin series is
$$xe^x=x+x^2+\frac{x^3}{2!}+\frac{x^4}{3!}+\cdots=\sum_{n=1}^{\infty}\frac{x^n}{(n-1)!}.$$ ✓
        `
      },
      {
        number: 13, label: 'B7', title: 'Differential equations — separable', section: 'Section B · §12.1', marks: 8,
        prompt: String.raw`
Given the differential equation
$$\frac{dy}{dx}=x\sqrt{1-y^{2}},\qquad -1<y<1.$$

**(a)** State the order of the equation, and show that it is separable by writing it in the form $M(x)\,dx+N(y)\,dy=0$. (2)

**(b)** Find the general solution of the equation. Also write down two constant solutions that are **not** contained in your general solution. (3)

**(c)** Find the particular solution given that $y=\dfrac12$ when $x=0$, and state the values of $x$ for which this solution satisfies the original equation. (3)
        `,
        solution: String.raw`
**(a)** The equation is **first order**. ✓ For $|y|<1$, divide by $\sqrt{1-y^2}$:
$$x\,dx-\frac{dy}{\sqrt{1-y^{2}}}=0,$$ ✓
which has the form $M(x)\,dx+N(y)\,dy=0$, so it is **separable**.

**(b)** Integrate: $\dfrac{x^2}{2}-\arcsin y=C_1$, so $\arcsin y=\dfrac{x^2}{2}+C$ and the **general solution** is ✓✓
$$y=\sin\!\left(\frac{x^{2}}{2}+C\right).$$
Dividing by $\sqrt{1-y^2}$ lost the constant solutions $y=1$ and $y=-1$, which satisfy the equation but are not obtained for any $C$. ✓

**(c)** With $y(0)=\tfrac12$: $\arcsin\tfrac12=\dfrac\pi6=C$. ✓ So $y=\sin\!\left(\dfrac{x^2}{2}+\dfrac\pi6\right)$. Because $\arcsin y\in\left[-\frac\pi2,\frac\pi2\right]$ we need $\dfrac{x^2}{2}+\dfrac\pi6\le\dfrac\pi2$, i.e. $x^2\le\dfrac{2\pi}{3}$; for larger $|x|$ the function $\sin(\cdot)$ has the wrong sign of derivative ($y'=x\cos(\cdot)$ but $x\sqrt{1-y^2}=x|\cos(\cdot)|$). So it solves the equation for $|x|<\sqrt{2\pi/3}$. ✓✓
        `
      },
      {
        number: 14, label: 'B8', title: 'Differential equations — linear', section: 'Section B · §12.3', marks: 10,
        prompt: String.raw`
Given the differential equation
$$x\ln x\,\frac{dy}{dx}+y=2\ln x,\qquad x>1.$$

**(a)** Show that this is a linear differential equation by writing it in standard form. (2)

**(b)** Find the integrating factor $e^{\int P(x)\,dx}$. (3)

**(c)** Hence find the general solution of the differential equation, and then the particular solution satisfying $y=3$ when $x=e$. (5)
        `,
        solution: String.raw`
**(a)** Divide through by $x\ln x$ (positive for $x>1$):
$$\frac{dy}{dx}+\frac{1}{x\ln x}\,y=\frac{2}{x}.$$ ✓✓
This has the form $\frac{dy}{dx}+P(x)y=Q(x)$ with $P(x)=\dfrac1{x\ln x}$ and $Q(x)=\dfrac2x$, so it is **linear**.

**(b)** Substitute $w=\ln x$: $\displaystyle\int\frac{dx}{x\ln x}=\int\frac{dw}{w}=\ln(\ln x)$ (for $x>1$), so ✓✓
$$\mu(x)=e^{\ln(\ln x)}=\ln x.$$ ✓

**(c)** Multiply the standard form by $\mu=\ln x$; the left side is an exact derivative: ✓
$$\frac{d}{dx}\big(y\ln x\big)=\frac{2\ln x}{x}.$$
Integrate (with $w=\ln x$): $y\ln x=\ln^2x+C$, so the **general solution** is ✓✓
$$y=\ln x+\frac{C}{\ln x}.$$
With $y(e)=3$: $3=1+C$, so $C=2$. ✓ The **particular solution** is $y=\ln x+\dfrac{2}{\ln x}$. ✓
        `
      }
    ]
  },
{
    id: 'nov-paper7',
    label: 'November Paper 7',
    date: 'November Exam G',
    kind: 'CALCULUS EXAMINATION',
    totalMarks: 90,
    duration: 120,
    topics: 'A box with an unknown volume given its cheapest cost, and a profit maximisation (§6.6), a logarithmic substitution over a completed square and a product of three sines (§9.1, §9.4), sinh x ln(cosh x) and the reduction formula for xⁿe^{−x²} (§9.2), an interior singularity that cancels and a logarithmic Type II integral (§10), an alternating series with ln n / n, a hyperbolic Maclaurin series and a limit by series, a separable ODE needing ∫ln x with a blow-up interval, and a linear ODE with integrating factor sin x.',
    instructions: [
      'Section A (Questions A1–A6): multiple choice. Choose ONE answer for each question. [14 marks]',
      'Section B (Questions B1–B8): give FULL solutions and show ALL workings. [76 marks]',
      'No calculators are allowed.',
      'You have 2 hours in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: 'A1', title: 'A cylinder inscribed in a sphere', section: 'Section A · §6.6', marks: 2,
        prompt: String.raw`
A right circular cylinder is inscribed in a sphere of radius $3$ cm. The largest possible volume of the cylinder is

- **A.** $16\pi\ \text{cm}^{3}$.
- **B.** $20\pi\ \text{cm}^{3}$.
- **C.** $\dfrac{81\pi}{4}\ \text{cm}^{3}$.
- **D.** $12\sqrt3\,\pi\ \text{cm}^{3}$.
- **E.** $36\pi\ \text{cm}^{3}$.
        `,
        solution: String.raw`
**Answer: D.** ✓✓

Let the cylinder have height $h$ and radius $r$. The right-angled triangle through the centre gives $r^{2}+\dfrac{h^{2}}{4}=9$, so
$$V(h)=\pi r^{2}h=\pi\left(9h-\frac{h^{3}}{4}\right),\qquad V'(h)=\pi\left(9-\frac{3h^{2}}{4}\right)=0\Rightarrow h=2\sqrt3.$$
Then $r^{2}=9-3=6$ and $V=\pi\cdot6\cdot2\sqrt3=12\sqrt3\,\pi\approx20.8\pi$; $V=0$ at the ends of the range, so this is the maximum.

- **A**, **B** and **C** are $V(2)$, $V(4)$ and $V(3)$ (nice values of $h$, but not the critical number). **E** is the surface area of the sphere ($4\pi\cdot3^{2}$), not a volume.
        `
      },
      {
        number: 2, label: 'A2', title: 'An arctangent substitution', section: 'Section A · §9.1', marks: 3,
        prompt: String.raw`
$$\int\frac{e^{x}}{1+e^{2x}}\,dx=$$

- **A.** $\arctan\left(e^{2x}\right)+C$.
- **B.** $\ln\left(1+e^{2x}\right)+C$.
- **C.** $\dfrac12\ln\left(1+e^{2x}\right)+C$.
- **D.** $e^{x}\arctan\left(e^{x}\right)+C$.
- **E.** $\arctan\left(e^{x}\right)+C$.
        `,
        solution: String.raw`
**Answer: E.** ✓✓✓

Substitute $u=e^{x}$, so $du=e^{x}\,dx$ and $e^{2x}=u^{2}$:
$$\int\frac{e^{x}}{1+e^{2x}}\,dx=\int\frac{du}{1+u^{2}}=\arctan u+C=\arctan\left(e^{x}\right)+C.$$

- **B** and **C** treat the numerator as the derivative of the denominator, but $\dfrac{d}{dx}\left(1+e^{2x}\right)=2e^{2x}$, not $e^{x}$. **D** is a product-rule slip. **A** forgets that $e^{2x}=\left(e^{x}\right)^{2}$ must be matched with $u^{2}$.
        `
      },
      {
        number: 3, label: 'A3', title: 'A Type I improper integral', section: 'Section A · §10', marks: 2,
        prompt: String.raw`
$$\int_{1}^{\infty}\frac{\ln x}{x^{2}}\,dx=$$

- **A.** $0$.
- **B.** $1$.
- **C.** $2$.
- **D.** $e$.
- **E.** The integral diverges.
        `,
        solution: String.raw`
**Answer: B.** ✓✓

Integrate by parts with $u=\ln x$, $dv=x^{-2}dx$: $\displaystyle\int\frac{\ln x}{x^{2}}dx=-\frac{\ln x}{x}-\frac1x$. Then
$$\int_{1}^{t}\frac{\ln x}{x^{2}}dx=\left(-\frac{\ln t}{t}-\frac1t\right)-(0-1)=1-\frac{\ln t+1}{t}.$$
As $t\to\infty$, $\dfrac{\ln t}{t}\to0$ (l'Hôpital) and $\dfrac1t\to0$, so the integral converges to $1$.
        `
      },
      {
        number: 4, label: 'A4', title: 'Which series converges?', section: 'Section A · §11.2–11.3', marks: 3,
        prompt: String.raw`
Which one of the following series **converges**?

- **A.** $\displaystyle\sum_{n=2}^{\infty}\frac{1}{n\ln n}$.
- **B.** $\displaystyle\sum_{n=1}^{\infty}\frac{n}{n+1}$.
- **C.** $\displaystyle\sum_{n=2}^{\infty}\frac{1}{n(\ln n)^{2}}$.
- **D.** $\displaystyle\sum_{n=1}^{\infty}\frac{1}{\sqrt n}$.
- **E.** $\displaystyle\sum_{n=1}^{\infty}\cos\frac1n$.
        `,
        solution: String.raw`
**Answer: C.** ✓✓✓

Use the **Integral Test** with $f(x)=\dfrac{1}{x(\ln x)^{2}}$, which is positive, continuous and decreasing on $[2,\infty)$:
$$\int_{2}^{\infty}\frac{dx}{x(\ln x)^{2}}=\lim_{t\to\infty}\left[-\frac{1}{\ln x}\right]_{2}^{t}=\frac{1}{\ln2}<\infty,$$
so the series in **C** converges.

- **A:** $\displaystyle\int_{2}^{\infty}\frac{dx}{x\ln x}=\lim_{t\to\infty}\left[\ln\ln x\right]_2^t=\infty$, so it diverges. **B** and **E:** the terms tend to $1\neq0$, so they diverge by the Test for Divergence. **D** is a $p$-series with $p=\frac12\le1$, so it diverges.
        `
      },
      {
        number: 5, label: 'A5', title: 'A derivative from a Maclaurin series', section: 'Section A · §11.6', marks: 2,
        prompt: String.raw`
Let $f(x)=\sin\left(x^{2}\right)$. Then $f^{(6)}(0)$ is

- **A.** $-\dfrac16$.
- **B.** $-20$.
- **C.** $120$.
- **D.** $-120$.
- **E.** $-720$.
        `,
        solution: String.raw`
**Answer: D.** ✓✓

Substitute $u=x^2$ in $\sin u=u-\dfrac{u^3}{3!}+\cdots$: $\sin\left(x^2\right)=x^{2}-\dfrac{x^{6}}{6}+\cdots$. So the coefficient of $x^6$ is $c_6=-\dfrac16$. ✓ Since $c_6=\dfrac{f^{(6)}(0)}{6!}$,
$$f^{(6)}(0)=6!\cdot\left(-\frac16\right)=-120.$$ ✓

- **A** is the coefficient $c_6$, not the derivative. **E** forgets the factor $\frac16$. **C** has the wrong sign. **B** divides by $3!$ twice.
        `
      },
      {
        number: 6, label: 'A6', title: 'The general solution of a separable equation', section: 'Section A · §12.1', marks: 2,
        prompt: String.raw`
The general solution of the differential equation $\dfrac{dy}{dx}=e^{x}y$ is

- **A.** $y=e^{e^{x}}+C$.
- **B.** $y=Ce^{e^{x}}$.
- **C.** $y=Ce^{x}$.
- **D.** $y=e^{x}+C$.
- **E.** $y=Ce^{xe^{x}}$.
        `,
        solution: String.raw`
**Answer: B.** ✓✓

Separate: $\dfrac{dy}{y}=e^{x}\,dx$. Integrate: $\ln|y|=e^{x}+C_1$, so $y=Ce^{e^{x}}$ with $C=\pm e^{C_1}$ (and $C=0$ gives the constant solution $y=0$).

- **A** keeps $C$ as an added constant after exponentiating (it must multiply). **C** solves $y'=y$, and **D** solves $y'=e^x$. **E** is not a solution: it gives $y'=(e^x+xe^x)y\neq e^xy$.
        `
      },
      {
        number: 7, label: 'B1', title: 'Optimization — a box with an unknown volume; maximum profit', section: 'Section B · §6.6', marks: 11,
        prompt: String.raw`
**(a)** Give an example of a function $f$ with $f'(0)=0$ that has neither a local maximum nor a local minimum at $x=0$, and explain why. (2)

**(b)** An open-top box has a square base of side $x$ metres and a volume of $V\ \text{m}^{3}$. The base costs $\text{R}5$ per $\text{m}^{2}$ and the four sides cost $\text{R}2$ per $\text{m}^{2}$. The cheapest possible such box costs $\text{R}240$. Find $V$, and the dimensions of the cheapest box. (5)

**(c)** A company sells $q$ units per day at a price of $p=100-2q$ rand per unit. The daily cost of producing $q$ units is $C(q)=20q+500$ rand. Find the number of units that maximises the daily profit, and the maximum daily profit. (4)
        `,
        solution: String.raw`
**(a)** For example $f(x)=x^{3}$: $f'(x)=3x^{2}$ so $f'(0)=0$, ✓ but $f$ is increasing on the whole real line ($f'\ge0$), so $f(x)<f(0)$ for $x<0$ and $f(x)>f(0)$ for $x>0$: there is no local maximum or minimum at $0$. ✓

**(b)** The height is $h=\dfrac{V}{x^{2}}$, so the cost is
$$C(x)=5x^{2}+2\cdot4xh=5x^{2}+\frac{8V}{x},\qquad x>0.$$ ✓
$C'(x)=10x-\dfrac{8V}{x^{2}}=0\Rightarrow x^{3}=\dfrac{4V}{5}$. ✓ Since $C\to\infty$ as $x\to0^{+}$ and as $x\to\infty$ (and $C''(x)>0$), this gives the minimum. At this point $\dfrac{8V}{x}=\dfrac{8}{x}\cdot\dfrac{5x^{3}}{4}=10x^{2}$, so
$$C_{\min}=5x^{2}+10x^{2}=15x^{2}.$$ ✓
Setting $15x^{2}=240$ gives $x=4$ m, and then $V=\dfrac{5x^{3}}{4}=\boxed{80\ \text{m}^{3}}$. ✓
The cheapest box has base $4\text{ m}\times4\text{ m}$ and height $h=\dfrac{80}{16}=\boxed{5\text{ m}}$. ✓

**(c)** Revenue is $q\,p=q(100-2q)$, so the profit is
$$P(q)=q(100-2q)-(20q+500)=-2q^{2}+80q-500.$$ ✓
$P'(q)=80-4q=0\Rightarrow q=\boxed{20}$ units per day. ✓
$P''(q)=-4<0$, so this is the maximum. ✓ $P(20)=-800+1600-500=\boxed{300}$ rand per day. ✓
        `
      },
      {
        number: 8, label: 'B2', title: 'Completing the square; a power of sine and cosine', section: 'Section B · §9.1, §9.4', marks: 9,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_1^{e}\frac{\ln x+2}{x\left(\ln^{2}x+2\ln x+5\right)}\,dx.$ (5)

**(b)** Evaluate $\displaystyle\int_0^{\pi/2}\sin x\,\sin2x\,\sin3x\,dx.$ (4)
        `,
        solution: String.raw`
**(a)** Let $u=\ln x$, $du=dx/x$; the limits become $u=0,1$: ✓
$$\int_0^{1}\frac{u+2}{u^{2}+2u+5}\,du.$$
The derivative of the denominator is $2u+2$, so write $u+2=\tfrac12(2u+2)+1$: ✓✓
$$\int_0^{1}\frac{u+2}{u^2+2u+5}\,du=\tfrac12\Big[\ln\left(u^2+2u+5\right)\Big]_0^1+\int_0^{1}\frac{du}{(u+1)^2+2^2}.$$
The second integral is $\tfrac12\big[\arctan\tfrac{u+1}{2}\big]_0^1=\tfrac12\left(\arctan1-\arctan\tfrac12\right)=\tfrac12\arctan\tfrac13$. ✓
Hence the value is $\tfrac12\ln\tfrac85+\tfrac12\arctan\tfrac13\approx0.396$. ✓

**(b)** Combine two of the factors first: $\sin x\sin3x=\tfrac12(\cos2x-\cos4x)$. Then ✓
$$\sin x\sin2x\sin3x=\tfrac12\left(\sin2x\cos2x-\sin2x\cos4x\right).$$
Now $\sin2x\cos2x=\tfrac12\sin4x$ and $\sin2x\cos4x=\tfrac12(\sin6x-\sin2x)$, so ✓
$$\sin x\sin2x\sin3x=\tfrac14\left(\sin2x+\sin4x-\sin6x\right).$$ ✓
Integrate over $[0,\pi/2]$: $\int\sin2x=1$, $\int\sin4x=0$, $\int\sin6x=\tfrac13$, so the value is $\tfrac14\left(1+0-\tfrac13\right)=\dfrac16$. ✓
        `
      },
      {
        number: 9, label: 'B3', title: 'Integration by parts; a reduction formula', section: 'Section B · §9.2', marks: 10,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_0^{\ln2}\sinh x\,\ln(\cosh x)\,dx$. (3)

**(b)** For an integer $n\ge2$ let $I_n=\displaystyle\int x^{n}e^{-x^{2}}\,dx$. Prove the reduction formula
$$I_n=-\frac{x^{\,n-1}e^{-x^{2}}}{2}+\frac{n-1}{2}\,I_{n-2}.$$ (4)

**(c)** Hence evaluate $\displaystyle\int_0^{1}x^{5}e^{-x^{2}}\,dx.$ (3)
        `,
        solution: String.raw`
**(a)** Take $u=\ln(\cosh x)$ and $dv=\sinh x\,dx$, so $du=\tanh x\,dx$ and $v=\cosh x$: ✓
$$\int\sinh x\ln(\cosh x)\,dx=\cosh x\ln(\cosh x)-\int\cosh x\tanh x\,dx=\cosh x\ln(\cosh x)-\cosh x.$$ ✓
Since $\cosh(\ln2)=\tfrac12\left(2+\tfrac12\right)=\tfrac54$ and $\cosh0=1$ (so $\ln\cosh0=0$): ✓
$$\Big[\cdots\Big]_0^{\ln2}=\left(\tfrac54\ln\tfrac54-\tfrac54\right)-(0-1)=\tfrac54\ln\tfrac54-\tfrac14\approx0.029.$$

**(b)** Write $x^ne^{-x^2}=x^{n-1}\cdot xe^{-x^2}$ and take $u=x^{n-1}$, $dv=xe^{-x^2}dx$. Then $du=(n-1)x^{n-2}dx$ and $v=-\tfrac12e^{-x^2}$. ✓✓
$$I_n=-\frac{x^{n-1}e^{-x^2}}{2}+\frac{n-1}{2}\int x^{n-2}e^{-x^2}\,dx=-\frac{x^{n-1}e^{-x^2}}{2}+\frac{n-1}{2}I_{n-2}.$$ ✓ ∎ ✓

**(c)** Let $J_k=\displaystyle\int_0^1x^ke^{-x^2}dx$. By (b), the boundary term is $\Big[-\tfrac12x^{k-1}e^{-x^2}\Big]_0^1=-\dfrac1{2e}$, so ✓
$$J_k=-\frac1{2e}+\frac{k-1}{2}J_{k-2}.$$
Start from $J_1=\Big[-\tfrac12e^{-x^2}\Big]_0^1=\tfrac12-\dfrac1{2e}$. Then
$$J_3=-\frac1{2e}+J_1=\frac12-\frac1e,\qquad J_5=-\frac1{2e}+2J_3=1-\frac{5}{2e}.$$ ✓✓
So $\displaystyle\int_0^1x^5e^{-x^2}dx=1-\dfrac{5}{2e}\approx0.080$.
        `
      },
      {
        number: 10, label: 'B4', title: 'Improper integrals — an interior singularity and a logarithmic Type II', section: 'Section B · §10', marks: 10,
        prompt: String.raw`
**(a)** Determine whether the improper integral $\displaystyle\int_{-1}^{1}\frac{dx}{\sqrt[3]{x}}$ converges or diverges, and find its value if it converges. (3)

**(b)** Determine whether the improper integral
$$\int_0^{1/2}\frac{dx}{x\,(\ln x)^{2}}$$
converges or diverges. If it converges, find its value. Justify every limit that you use. (7)
        `,
        solution: String.raw`
**(a)** The integrand is undefined at $x=0$, inside the interval, so we split: $\displaystyle\int_{-1}^{0}x^{-1/3}dx+\int_0^{1}x^{-1/3}dx$, and **both** must converge. ✓
$$\int_0^{1}x^{-1/3}dx=\lim_{s\to0^{+}}\Big[\tfrac32x^{2/3}\Big]_s^{1}=\tfrac32,\qquad\int_{-1}^{0}x^{-1/3}dx=\lim_{s\to0^{-}}\Big[\tfrac32x^{2/3}\Big]_{-1}^{s}=0-\tfrac32=-\tfrac32.$$ ✓
Both pieces converge, so the integral **converges** and equals $\tfrac32-\tfrac32=0$. ✓

**(b)** The integrand is undefined at $x=0$ (and $\ln x\to-\infty$ there), so the integral is improper (Type II) at $0$: ✓
$$\int_0^{1/2}\frac{dx}{x(\ln x)^{2}}=\lim_{s\to0^{+}}\int_s^{1/2}\frac{dx}{x(\ln x)^{2}}.$$ ✓
Let $u=\ln x$, $du=\frac1x\,dx$: ✓
$$\int\frac{dx}{x(\ln x)^{2}}=\int\frac{du}{u^{2}}=-\frac1u=-\frac{1}{\ln x}.$$ ✓
$$\int_s^{1/2}\frac{dx}{x(\ln x)^{2}}=\left[-\frac1{\ln x}\right]_s^{1/2}=-\frac{1}{\ln\frac12}+\frac{1}{\ln s}=\frac{1}{\ln2}+\frac{1}{\ln s}.$$ ✓
As $s\to0^{+}$, $\ln s\to-\infty$, so $\dfrac1{\ln s}\to0$. ✓
Therefore the integral **converges** and
$$\int_0^{1/2}\frac{dx}{x(\ln x)^{2}}=\frac{1}{\ln2}.$$ ✓
        `
      },
      {
        number: 11, label: 'B5', title: 'Sequences and series', section: 'Section B · §11.1–11.3', marks: 9,
        prompt: String.raw`
**(a)** Determine, giving reasons, whether the sequence $\{a_n\}=\left\{n^{2}e^{-n}\right\}$ is convergent or divergent. If it is convergent, state to what value it converges. (3)

**(b)** Explain why the Test for Divergence cannot be used to show that $\displaystyle\sum_{n=1}^{\infty}n^{2}e^{-n}$ converges, and use a suitable test to decide whether this series converges or diverges. (2)

**(c)** Show that the series
$$\sum_{n=2}^{\infty}(-1)^{n}\,\frac{\ln n}{n}$$
converges. Is the convergence absolute or conditional? Justify your answer. (4)
        `,
        solution: String.raw`
**(a)** Write $a_n=\dfrac{n^{2}}{e^{n}}$, of the form $\frac{\infty}{\infty}$. Let $f(x)=\dfrac{x^{2}}{e^{x}}$ and use l'Hôpital's rule twice: ✓
$$\lim_{x\to\infty}\frac{x^{2}}{e^{x}}=\lim_{x\to\infty}\frac{2x}{e^{x}}=\lim_{x\to\infty}\frac{2}{e^{x}}=0.$$ ✓
So the sequence is **convergent with limit $0$**. ✓

**(b)** The Test for Divergence can only prove divergence: since $a_n\to0$ it is **inconclusive**. ✓ Use the **Ratio Test** with $c_n=n^{2}e^{-n}>0$:
$$\frac{c_{n+1}}{c_n}=\frac{(n+1)^{2}e^{-(n+1)}}{n^{2}e^{-n}}=\left(\frac{n+1}{n}\right)^{2}\cdot\frac1e\ \longrightarrow\ \frac1e<1,$$
so the series **converges**. ✓

**(c)** Let $b_n=\dfrac{\ln n}{n}$. First, by L'Hôpital, $\displaystyle\lim_{x\to\infty}\frac{\ln x}{x}=\lim_{x\to\infty}\frac1x=0$, so $b_n\to0$. ✓ Next, for $f(x)=\dfrac{\ln x}{x}$ we have $f'(x)=\dfrac{1-\ln x}{x^2}<0$ for $x>e$, so $\{b_n\}$ is decreasing for $n\ge3$. ✓ By the Alternating Series Test the series converges. ✓
For absolute convergence consider $\sum\dfrac{\ln n}{n}$. For $n\ge3$, $\ln n\ge1$, so $\dfrac{\ln n}{n}\ge\dfrac1n$, and $\sum\dfrac1n$ diverges; by comparison $\sum\dfrac{\ln n}{n}$ diverges. So the series is **conditionally convergent** (convergent, but not absolutely). ✓
        `
      },
      {
        number: 12, label: 'B6', title: 'Power series and a hyperbolic Maclaurin series', section: 'Section B · §11.4, §11.6', marks: 9,
        prompt: String.raw`
**(a)** Find the radius of convergence and the interval of convergence of the power series
$$\sum_{n=1}^{\infty}\frac{(3x-2)^{n}}{n^{2}}.$$ (5)

**(b)** **(i)** Use the formula $c_n=\dfrac{f^{(n)}(0)}{n!}$ to show that the Maclaurin series of $f(x)=\cosh x$ is $\displaystyle\sum_{n=0}^{\infty}\frac{x^{2n}}{(2n)!}$. (2)

**(ii)** Hence evaluate $\displaystyle\lim_{x\to0}\frac{\cosh x-1-\frac{x^{2}}{2}}{x^{4}}$. (2)
        `,
        solution: String.raw`
**(a)** Use the **Ratio Test** with $a_n=\dfrac{(3x-2)^{n}}{n^{2}}$: ✓
$$\left|\frac{a_{n+1}}{a_n}\right|=\frac{|3x-2|^{n+1}}{(n+1)^{2}}\cdot\frac{n^{2}}{|3x-2|^{n}}=|3x-2|\left(\frac{n}{n+1}\right)^{2}\to|3x-2|.$$ ✓
The series converges when $|3x-2|<1$, i.e. $\left|x-\frac23\right|<\frac13$. The **radius of convergence is $R=\frac13$** (centre $\frac23$), and the series converges for $\frac13<x<1$. ✓

*Endpoints.* At $x=1$: $\displaystyle\sum\frac{1}{n^{2}}$ converges ($p$-series, $p=2>1$). At $x=\frac13$: $\displaystyle\sum\frac{(-1)^{n}}{n^{2}}$ converges (absolutely, by the same $p$-series). ✓

The **interval of convergence** is $\left[\dfrac13,\,1\right]$. ✓

**(b)(i)** Here $f'(x)=\sinh x$, $f''(x)=\cosh x$, and the derivatives alternate between $\cosh x$ and $\sinh x$. At $0$: $\cosh0=1$ and $\sinh0=0$. So $f^{(n)}(0)=1$ for even $n$ and $0$ for odd $n$. ✓ Hence $c_n=\dfrac{1}{n!}$ for even $n$, $c_n=0$ for odd $n$, giving
$$\cosh x=\sum_{n=0}^{\infty}\frac{x^{2n}}{(2n)!}=1+\frac{x^{2}}{2!}+\frac{x^{4}}{4!}+\cdots$$ ✓

**(b)(ii)** From (i), $\cosh x-1-\dfrac{x^2}{2}=\dfrac{x^4}{4!}+\dfrac{x^6}{6!}+\cdots$, so ✓
$$\frac{\cosh x-1-\frac{x^2}{2}}{x^4}=\frac1{24}+\frac{x^2}{720}+\cdots\ \longrightarrow\ \frac1{24}\quad(x\to0).$$ ✓
        `
      },
      {
        number: 13, label: 'B7', title: 'Differential equations — separable', section: 'Section B · §12.1', marks: 8,
        prompt: String.raw`
Given the differential equation
$$\frac{dy}{dx}=y^{2}\ln x,\qquad x>0.$$

**(a)** State the order of the equation, and show that it is separable by writing it in the form $M(x)\,dx+N(y)\,dy=0$. (2)

**(b)** Find the general solution of the equation. (3)

**(c)** Find the particular solution given that $y=1$ when $x=1$, and state the largest interval containing $x=1$ on which this solution is defined. (3)
        `,
        solution: String.raw`
**(a)** The equation is **first order**. ✓ For $y\ne0$:
$$\ln x\,dx-\frac{dy}{y^{2}}=0,$$ ✓
which has the form $M(x)\,dx+N(y)\,dy=0$, so it is **separable**.

**(b)** Integrate $\dfrac{dy}{y^2}=\ln x\,dx$. The right side needs integration by parts: $\displaystyle\int\ln x\,dx=x\ln x-x$. ✓ So $-\dfrac1y=x\ln x-x+C$ and the **general solution** is ✓✓
$$y=\frac{1}{C+x-x\ln x}$$
(together with the constant solution $y=0$, lost when we divided by $y^2$).

**(c)** With $y(1)=1$: $1=\dfrac{1}{C+1-0}$, so $C=0$. ✓ The **particular solution** is ✓
$$y=\frac{1}{x\,(1-\ln x)}.$$
It is defined when $x>0$ and $1-\ln x\ne0$, i.e. $x\ne e$; the interval containing $x=1$ is $(0,e)$. ✓ (The solution blows up as $x\to e^-$.)
        `
      },
      {
        number: 14, label: 'B8', title: 'Differential equations — linear', section: 'Section B · §12.3', marks: 10,
        prompt: String.raw`
Given the differential equation
$$\frac{dy}{dx}=5e^{\cos x}-y\cot x,\qquad 0<x<\pi.$$

**(a)** Show that this is a linear differential equation by writing it in standard form. (2)

**(b)** Find the integrating factor $e^{\int P(x)\,dx}$. (2)

**(c)** Hence find the general solution of the differential equation. (4)

**(d)** Find the particular solution satisfying $y=-4$ when $x=\dfrac\pi2$. (2)
        `,
        solution: String.raw`
**(a)** Move the $y$-term to the left:
$$\frac{dy}{dx}+(\cot x)\,y=5e^{\cos x}.$$ ✓✓
This has the form $\frac{dy}{dx}+P(x)y=Q(x)$ with $P(x)=\cot x$ and $Q(x)=5e^{\cos x}$, so it is **linear**.

**(b)** $\displaystyle\int\cot x\,dx=\ln|\sin x|$, so, since $\sin x>0$ on $(0,\pi)$, ✓
$$\mu(x)=e^{\ln\sin x}=\sin x.$$ ✓

**(c)** Multiply by $\sin x$: ✓
$$\frac{d}{dx}\big(y\sin x\big)=5\sin x\,e^{\cos x}.$$
Integrate with $u=\cos x$, $du=-\sin x\,dx$: $\displaystyle\int5\sin x\,e^{\cos x}dx=-5e^{\cos x}+C$. ✓ So the **general solution** is ✓✓
$$y=\frac{C-5e^{\cos x}}{\sin x}.$$

**(d)** With $y\left(\tfrac\pi2\right)=-4$ (where $\sin=1$, $\cos=0$): $-4=C-5$, so $C=1$. ✓ The **particular solution** is ✓
$$y=\frac{1-5e^{\cos x}}{\sin x}.$$
        `
      }
    ]
  },
{
    id: 'nov-paper8',
    label: 'November Paper 8',
    date: 'November Exam H',
    kind: 'CALCULUS EXAMINATION',
    totalMarks: 90,
    duration: 120,
    topics: 'A rectangle in an ellipse with an unknown semi-axis, the cheapest speed of a ship, and why points where f′ does not exist must be tested (§6.6), a hyperbolic integral, a tangent substitution and sin⁴x cos⁴x (§9.1, §9.4), the cyclic integral of sin x cosh x and the reduction formula for eˣ sinⁿx (§9.2), a two-piece Comparison Theorem argument and a doubly infinite integral with a normalising constant (§10), the Root Test, a comparison for n^{1/n} − 1 and a geometric sum, the radius of convergence of Σ nⁿxⁿ/n!, tan x by comparing coefficients, verifying a family of solutions, a separable ODE with a completed-square integral, and a linear ODE with integrating factor sec x + tan x.',
    instructions: [
      'Section A (Questions A1–A6): multiple choice. Choose ONE answer for each question. [14 marks]',
      'Section B (Questions B1–B8): give FULL solutions and show ALL workings. [76 marks]',
      'No calculators are allowed.',
      'You have 2 hours in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: 'A1', title: 'The cheapest open box', section: 'Section A · §6.6', marks: 2,
        prompt: String.raw`
An open-top box with a square base must hold $32\ \text{m}^{3}$. The smallest possible surface area of the box is

- **A.** $48\ \text{m}^{2}$.
- **B.** $68\ \text{m}^{2}$.
- **C.** $80\ \text{m}^{2}$.
- **D.** $32\ \text{m}^{2}$.
- **E.** $96\ \text{m}^{2}$.
        `,
        solution: String.raw`
**Answer: A.** ✓✓

Let the base have side $x$ and the height be $h=\dfrac{32}{x^{2}}$. The surface area (base plus four sides) is
$$S(x)=x^{2}+4xh=x^{2}+\frac{128}{x},\qquad S'(x)=2x-\frac{128}{x^{2}}=0\Rightarrow x=4.$$
$S\to\infty$ as $x\to0^{+}$ and as $x\to\infty$ (and $S''(x)=2+\frac{256}{x^{3}}>0$), so this is the minimum: $S(4)=16+32=48$.

- **B** and **C** are $S(2)$ and $S(8)$. **D** is the volume, not the area. **E** is double the answer.
        `
      },
      {
        number: 2, label: 'A2', title: 'A hyperbolic integral', section: 'Section A · §9.2', marks: 3,
        prompt: String.raw`
$$\int_0^{\ln2}\sinh x\,\cosh x\,dx=$$

- **A.** $\dfrac{9}{16}$.
- **B.** $\dfrac{15}{16}$.
- **C.** $\dfrac34$.
- **D.** $\dfrac{9}{32}$.
- **E.** $\dfrac{5}{16}$.
        `,
        solution: String.raw`
**Answer: D.** ✓✓✓

Substitute $u=\sinh x$, $du=\cosh x\,dx$:
$$\int_0^{\ln2}\sinh x\cosh x\,dx=\left[\frac{\sinh^{2}x}{2}\right]_0^{\ln2}.$$
Since $e^{\ln2}=2$, $\sinh(\ln2)=\dfrac{2-\frac12}{2}=\dfrac34$, so the value is $\dfrac{1}{2}\cdot\dfrac{9}{16}=\dfrac{9}{32}$.

(Check: $\sinh x\cosh x=\frac12\sinh2x$, and $\left[\frac{\cosh2x}{4}\right]_0^{\ln2}=\frac{17/8-1}{4}=\frac{9}{32}$.) **B** is the value of the integrand at $\ln2$ (forgetting to integrate); **A** forgets the factor $\frac12$.
        `
      },
      {
        number: 3, label: 'A3', title: 'A Type I improper integral', section: 'Section A · §10', marks: 2,
        prompt: String.raw`
$$\int_0^{\infty}x\,e^{-x^{2}}\,dx=$$

- **A.** $1$.
- **B.** $\dfrac12$.
- **C.** $0$.
- **D.** $2$.
- **E.** The integral diverges.
        `,
        solution: String.raw`
**Answer: B.** ✓✓

Substitute $u=x^{2}$, $du=2x\,dx$: $\displaystyle\int xe^{-x^{2}}dx=-\tfrac12e^{-x^{2}}$. Then
$$\int_0^{t}xe^{-x^{2}}dx=\frac12\left(1-e^{-t^{2}}\right)\ \longrightarrow\ \frac12\quad(t\to\infty).$$
The integral converges to $\frac12$.
        `
      },
      {
        number: 4, label: 'A4', title: 'The Root Test', section: 'Section A · §11.2–11.3', marks: 3,
        prompt: String.raw`
Which one of the following statements about the series $\displaystyle\sum_{n=1}^{\infty}\left(\frac{n}{2n+1}\right)^{n}$ is correct?

- **A.** The Root Test is inconclusive.
- **B.** It diverges, by the Root Test, because $\displaystyle\lim_{n\to\infty}\sqrt[n]{a_n}=\frac12$.
- **C.** It diverges, by the Test for Divergence, because $\dfrac{n}{2n+1}\to\dfrac12\neq0$.
- **D.** It converges, because $a_n\to0$.
- **E.** It converges, by the Root Test, because $\displaystyle\lim_{n\to\infty}\sqrt[n]{a_n}=\frac12<1$.
        `,
        solution: String.raw`
**Answer: E.** ✓✓✓

With $a_n=\left(\dfrac{n}{2n+1}\right)^{n}>0$,
$$\sqrt[n]{a_n}=\frac{n}{2n+1}\ \longrightarrow\ \frac12<1,$$
so the series **converges** by the Root Test.

- **B** reverses the rule (the series diverges only if the limit is $>1$). **C** applies the Test for Divergence to the base instead of the terms: in fact $a_n=\left(\frac{n}{2n+1}\right)^{n}\to0$. **D** is the classic mistake that $a_n\to0$ proves convergence. **A** is wrong because the limit is not $1$.
        `
      },
      {
        number: 5, label: 'A5', title: 'A Taylor coefficient', section: 'Section A · §11.6', marks: 2,
        prompt: String.raw`
The coefficient of $\left(x-\dfrac\pi4\right)^{2}$ in the Taylor series of $f(x)=\sin x$ about $a=\dfrac\pi4$ is

- **A.** $-\dfrac{\sqrt2}{2}$.
- **B.** $\dfrac{\sqrt2}{4}$.
- **C.** $-\dfrac{\sqrt2}{4}$.
- **D.** $-\dfrac{\sqrt2}{8}$.
- **E.** $-\dfrac14$.
        `,
        solution: String.raw`
**Answer: C.** ✓✓

$c_2=\dfrac{f''(a)}{2!}$ with $f''(x)=-\sin x$, so $f''\left(\tfrac\pi4\right)=-\dfrac{\sqrt2}{2}$ and ✓
$$c_2=\frac{-\sqrt2/2}{2}=-\frac{\sqrt2}{4}.$$ ✓

- **A** forgets to divide by $2!$. **B** has the wrong sign. **D** divides by $4$ instead of $2$. **E** is not related to $\sin\frac\pi4$.
        `
      },
      {
        number: 6, label: 'A6', title: 'Verifying a solution of a differential equation', section: 'Section A · §12.0', marks: 2,
        prompt: String.raw`
The function $y=\dfrac{1}{1-x}$ (for $x<1$) is a solution of which one of the following differential equations?

- **A.** $\dfrac{dy}{dx}=y$.
- **B.** $\dfrac{dy}{dx}=y^{2}$.
- **C.** $\dfrac{dy}{dx}=-y^{2}$.
- **D.** $\dfrac{dy}{dx}=1-y$.
- **E.** $\dfrac{dy}{dx}=\dfrac{y}{x}$.
        `,
        solution: String.raw`
**Answer: B.** ✓✓

Differentiate: $\dfrac{dy}{dx}=\dfrac{d}{dx}(1-x)^{-1}=(1-x)^{-2}=\dfrac{1}{(1-x)^{2}}=y^{2}$. So $y$ satisfies $\dfrac{dy}{dx}=y^{2}$.



- **A** fails at $x=\frac12$ (here $y=2$ but $y'=4$). **C** fails because $-y^{2}<0$ while $y'>0$. **D** fails at $x=0$ (here $y=1$ and $y'=1$, but $1-y=0$). **E** fails because $\frac{y}{x}$ is undefined at $x=0$ while $y'(0)=1$.
        `
      },
      {
        number: 7, label: 'B1', title: 'Optimization — a rectangle in an ellipse with an unknown semi-axis; the cheapest speed of a ship', section: 'Section B · §6.6', marks: 11,
        prompt: String.raw`
**(a)** Explain why, in the Closed Interval Method, we must test the numbers where $f'(x)$ does not exist as well as the numbers where $f'(x)=0$. Give an example. (2)

**(b)** A rectangle with sides parallel to the coordinate axes is inscribed in the ellipse $\dfrac{x^{2}}{a^{2}}+\dfrac{y^{2}}{16}=1$, where $a>0$. The largest possible area of such a rectangle is $24$. Find $a$. (5)

**(c)** The fuel cost of a ship is $0.001v^{3}+128$ rand per hour when it travels at $v$ km/h. Find the speed that minimises the cost per kilometre, and that minimum cost per kilometre. (4)
        `,
        solution: String.raw`
**(a)** A continuous function can reach its maximum or minimum at a corner or cusp, where there is no derivative, so such points are also critical numbers and must be tested. ✓ For example $f(x)=|x|$ has its absolute minimum at $x=0$, where $f'(0)$ does not exist. ✓

**(b)** Let the vertex in the first quadrant be $(x,y)$ with $y=4\sqrt{1-\dfrac{x^{2}}{a^{2}}}$. The rectangle has area
$$A=4xy=16x\sqrt{1-\frac{x^{2}}{a^{2}}},\qquad 0<x<a.$$ ✓
It is easier to maximise $A^{2}=256x^{2}\left(1-\dfrac{x^{2}}{a^{2}}\right)=256\left(x^{2}-\dfrac{x^{4}}{a^{2}}\right)$:
$$\frac{d}{dx}A^{2}=256\left(2x-\frac{4x^{3}}{a^{2}}\right)=0\Rightarrow x^{2}=\frac{a^{2}}{2}.$$ ✓✓
Then $x=\dfrac{a}{\sqrt2}$ and $y=\dfrac{4}{\sqrt2}$, and $A=0$ at $x=0$ and $x=a$, so $A_{\max}=4\cdot\dfrac{a}{\sqrt2}\cdot\dfrac4{\sqrt2}=8a$. ✓
Setting $8a=24$ gives $a=\boxed{3}$. ✓

**(c)** The cost per kilometre is (cost per hour) $\div$ (km per hour):
$$C(v)=\frac{0.001v^{3}+128}{v}=0.001v^{2}+\frac{128}{v},\qquad v>0.$$ ✓
$C'(v)=0.002v-\dfrac{128}{v^{2}}=0\Rightarrow v^{3}=64\,000\Rightarrow v=\boxed{40}$ km/h. ✓
$C''(v)=0.002+\dfrac{256}{v^{3}}>0$, so this is the minimum. ✓
$C(40)=1.6+3.2=\boxed{\text{R}4.80}$ per kilometre. ✓
        `
      },
      {
        number: 8, label: 'B2', title: 'Completing the square; a product of cosines', section: 'Section B · §9.1, §9.4', marks: 9,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_0^{\pi/4}\frac{\sec^{2}x}{\tan^{2}x+6\tan x+10}\,dx.$ (5)

**(b)** Evaluate $\displaystyle\int_0^{\pi/2}\sin^{4}x\,\cos^{4}x\,dx.$ (4)
        `,
        solution: String.raw`
**(a)** Let $u=\tan x$, $du=\sec^2x\,dx$; the limits become $u=0,1$: ✓✓
$$\int_0^{1}\frac{du}{u^{2}+6u+10}=\int_0^{1}\frac{du}{(u+3)^{2}+1}.$$ ✓
$$=\Big[\arctan(u+3)\Big]_0^{1}=\arctan4-\arctan3.$$ ✓✓
Using $\arctan a-\arctan b=\arctan\dfrac{a-b}{1+ab}$, this equals $\arctan\dfrac{1}{13}\approx0.077$.

**(b)** Notice that $\sin x\cos x=\tfrac12\sin2x$, so ✓
$$\sin^4x\cos^4x=\left(\tfrac12\sin2x\right)^4=\tfrac1{16}\sin^42x.$$ ✓
Now $\sin^4u=\tfrac38-\tfrac12\cos2u+\tfrac18\cos4u$, so with $u=2x$: ✓
$$\int_0^{\pi/2}\sin^42x\,dx=\int_0^{\pi/2}\left(\tfrac38-\tfrac12\cos4x+\tfrac18\cos8x\right)dx=\tfrac38\cdot\tfrac\pi2=\tfrac{3\pi}{16},$$
since the cosine terms integrate to $0$. Hence the value is $\dfrac1{16}\cdot\dfrac{3\pi}{16}=\dfrac{3\pi}{256}$. ✓
        `
      },
      {
        number: 9, label: 'B3', title: 'Integration by parts; a reduction formula', section: 'Section B · §9.2', marks: 10,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_0^{\pi}\sin x\,\cosh x\,dx$. (4)

**(b)** For an integer $n\ge0$ let $I_n=\displaystyle\int e^{x}\sin^{n}x\,dx$.

**(i)** For $n\ge2$ prove, by integrating by parts twice, that
$$\left(n^{2}+1\right)I_n=e^{x}\sin^{n-1}x\,\left(\sin x-n\cos x\right)+n(n-1)\,I_{n-2}.$$ (4)

**(ii)** Hence evaluate $\displaystyle\int_0^{\pi}e^{x}\sin^{2}x\,dx$. (2)
        `,
        solution: String.raw`
**(a)** Let $I=\displaystyle\int\sin x\cosh x\,dx$. By parts with $u=\sin x$, $dv=\cosh x\,dx$: ✓
$$I=\sin x\sinh x-\int\cos x\sinh x\,dx.$$
By parts again with $u=\cos x$, $dv=\sinh x\,dx$: $\displaystyle\int\cos x\sinh x\,dx=\cos x\cosh x+\int\sin x\cosh x\,dx=\cos x\cosh x+I$. ✓ So
$$I=\sin x\sinh x-\cos x\cosh x-I\quad\Longrightarrow\quad I=\tfrac12\left(\sin x\sinh x-\cos x\cosh x\right).$$ ✓
Hence $\displaystyle\int_0^\pi\sin x\cosh x\,dx=\tfrac12\Big[(0+\cosh\pi)-(0-1)\Big]=\dfrac{1+\cosh\pi}{2}\approx6.30.$ ✓

**(b)(i)** First by parts with $u=\sin^nx$, $dv=e^xdx$: ✓
$$I_n=e^x\sin^nx-n\int e^x\sin^{n-1}x\cos x\,dx.$$
Call the last integral $K$ and integrate it by parts with $u=\sin^{n-1}x\cos x$, $dv=e^xdx$. Since $\dfrac{d}{dx}\left(\sin^{n-1}x\cos x\right)=(n-1)\sin^{n-2}x\cos^2x-\sin^nx=(n-1)\sin^{n-2}x-n\sin^nx$, ✓✓
$$K=e^x\sin^{n-1}x\cos x-(n-1)I_{n-2}+n\,I_n.$$
Substitute into $I_n=e^x\sin^nx-nK$:
$$I_n=e^x\sin^nx-ne^x\sin^{n-1}x\cos x+n(n-1)I_{n-2}-n^2I_n,$$
and collecting the $I_n$ terms gives $\left(n^2+1\right)I_n=e^x\sin^{n-1}x\left(\sin x-n\cos x\right)+n(n-1)I_{n-2}$. ∎ ✓

**(b)(ii)** Take $n=2$ and the limits $0$ and $\pi$. The boundary term $e^x\sin x(\sin x-2\cos x)$ is $0$ at both ends (because $\sin0=\sin\pi=0$), so ✓
$$5\int_0^\pi e^x\sin^2x\,dx=2\int_0^\pi e^x\,dx=2\left(e^{\pi}-1\right),$$
and the integral is $\dfrac25\left(e^\pi-1\right)\approx8.86$. ✓
        `
      },
      {
        number: 10, label: 'B4', title: 'Improper integrals — a comparison and a normalising constant', section: 'Section B · §10', marks: 10,
        prompt: String.raw`
**(a)** Use the Comparison Theorem to show that $\displaystyle\int_0^{\infty}\frac{dx}{\sqrt x\,(1+x)}$ converges. (3)

**(b)** Find the constant $k$ such that
$$\int_{-\infty}^{\infty}\frac{k}{x^{2}+2x+5}\,dx=1.$$
Justify every limit that you use. (7)
        `,
        solution: String.raw`
**(a)** The integral is improper at $0$ and at $\infty$, so we split at $1$ and bound each piece: ✓
- for $0<x\le1$: $\dfrac{1}{\sqrt x(1+x)}\le\dfrac{1}{\sqrt x}$ and $\displaystyle\int_0^{1}x^{-1/2}dx=2$ converges;
- for $x\ge1$: $\dfrac{1}{\sqrt x(1+x)}\le\dfrac{1}{x^{3/2}}$ and $\displaystyle\int_1^{\infty}x^{-3/2}dx=2$ converges. ✓

By the Comparison Theorem both pieces converge, so the integral **converges**. ✓

**(b)** Completing the square, $x^{2}+2x+5=(x+1)^{2}+4$, so an antiderivative of $\dfrac{1}{x^{2}+2x+5}$ is $\dfrac12\arctan\dfrac{x+1}{2}$. ✓
The integral is improper at both ends, so we split at $x=-1$: ✓
$$\int_{-1}^{\infty}\frac{dx}{(x+1)^{2}+4}=\lim_{t\to\infty}\frac12\arctan\frac{t+1}{2}-\frac12\arctan0=\frac12\cdot\frac\pi2=\frac\pi4,$$ ✓
$$\int_{-\infty}^{-1}\frac{dx}{(x+1)^{2}+4}=\lim_{s\to-\infty}\left(\frac12\arctan0-\frac12\arctan\frac{s+1}{2}\right)=0-\frac12\left(-\frac\pi2\right)=\frac\pi4.$$ ✓
Both converge, so $\displaystyle\int_{-\infty}^{\infty}\frac{dx}{x^{2}+2x+5}=\frac\pi4+\frac\pi4=\frac\pi2$. ✓
We need $k\cdot\dfrac\pi2=1$, so $k=\boxed{\dfrac{2}{\pi}}$. ✓✓
        `
      },
      {
        number: 11, label: 'B5', title: 'Sequences and series', section: 'Section B · §11.1–11.3', marks: 9,
        prompt: String.raw`
**(a)** Determine, giving reasons, whether the sequence $\{a_n\}=\left\{n^{1/n}\right\}$ is convergent or divergent. If it is convergent, state to what value it converges. (3)

**(b)** Use the inequality $e^{t}\ge1+t$ (valid for all $t$) to show that the series
$$\sum_{n=3}^{\infty}\left(n^{1/n}-1\right)$$
diverges. (2)

**(c)** Find the exact sum of the series
$$\sum_{n=1}^{\infty}\frac{2^{n}+3^{n}}{6^{n}}.$$ (4)
        `,
        solution: String.raw`
**(a)** Write $a_n=n^{1/n}=e^{(\ln n)/n}$. ✓ By l'Hôpital's rule
$$\lim_{x\to\infty}\frac{\ln x}{x}=\lim_{x\to\infty}\frac{1/x}{1}=0.$$ ✓
Since the exponential function is continuous, $a_n\to e^{0}=1$. So the sequence is **convergent with limit $1$**. ✓

**(b)** Write $n^{1/n}=e^{(\ln n)/n}$. With $t=\dfrac{\ln n}{n}$ the inequality gives $n^{1/n}\ge1+\dfrac{\ln n}{n}$, so ✓
$$n^{1/n}-1\ge\frac{\ln n}{n}\ge\frac1n\qquad(n\ge3,\ \text{since }\ln n\ge\ln3>1).$$
Because $\sum\dfrac1n$ diverges, the Comparison Test shows that $\sum\left(n^{1/n}-1\right)$ diverges. (Note that its terms do tend to $0$, by (a), so the Test for Divergence is inconclusive.) ✓

**(c)** Split the general term: $\dfrac{2^n+3^n}{6^n}=\left(\dfrac13\right)^{n}+\left(\dfrac12\right)^{n}$. ✓ Both are convergent geometric series (ratios $\tfrac13$ and $\tfrac12$, both of absolute value less than $1$), so ✓
$$\sum_{n=1}^{\infty}\left(\tfrac13\right)^n=\frac{1/3}{1-1/3}=\frac12,\qquad\sum_{n=1}^{\infty}\left(\tfrac12\right)^n=\frac{1/2}{1-1/2}=1.$$ ✓
The sum is $\dfrac12+1=\dfrac32$. ✓
        `
      },
      {
        number: 12, label: 'B6', title: 'Power series and a Taylor series', section: 'Section B · §11.4, §11.6', marks: 9,
        prompt: String.raw`
**(a)** Find the radius of convergence of the power series
$$\sum_{n=1}^{\infty}\frac{n^{n}\,x^{n}}{n!}.$$
You are not asked to test the endpoints. You may use $\displaystyle\lim_{n\to\infty}\left(1+\frac1n\right)^{n}=e$. (5)

**(b)** The function $\tan x=\dfrac{\sin x}{\cos x}$ is odd, so its Maclaurin series has the form $\tan x=a_1x+a_3x^{3}+a_5x^{5}+\cdots$. By writing $\sin x=\tan x\cdot\cos x$, substituting the Maclaurin series of $\sin x$ and $\cos x$, and comparing coefficients, find $a_1$, $a_3$ and $a_5$. (4)
        `,
        solution: String.raw`
**(a)** Apply the Ratio Test to $a_n=\dfrac{n^nx^n}{n!}$: ✓✓
$$\left|\frac{a_{n+1}}{a_n}\right|=\frac{(n+1)^{n+1}|x|^{n+1}}{(n+1)!}\cdot\frac{n!}{n^n|x|^n}=|x|\,\frac{(n+1)^{n}}{n^n}=|x|\left(1+\frac1n\right)^{n}\ \longrightarrow\ e\,|x|.$$ ✓✓
The series converges when $e|x|<1$ and diverges when $e|x|>1$, so the radius of convergence is $R=\dfrac1e$. ✓

**(b)** Multiply out $\left(a_1x+a_3x^3+a_5x^5+\cdots\right)\left(1-\dfrac{x^2}{2}+\dfrac{x^4}{24}-\cdots\right)$ and equate with $\sin x=x-\dfrac{x^3}{6}+\dfrac{x^5}{120}-\cdots$: ✓
- $x^1$: $a_1=1$. ✓
- $x^3$: $a_3-\dfrac{a_1}{2}=-\dfrac16$, so $a_3=\dfrac12-\dfrac16=\dfrac13$. ✓
- $x^5$: $a_5-\dfrac{a_3}{2}+\dfrac{a_1}{24}=\dfrac1{120}$, so $a_5=\dfrac1{120}+\dfrac16-\dfrac1{24}=\dfrac{1+20-5}{120}=\dfrac{2}{15}$. ✓

Hence $\tan x=x+\dfrac{x^3}{3}+\dfrac{2x^5}{15}+\cdots$. ✓
        `
      },
      {
        number: 13, label: 'B7', title: 'Differential equations — verifying and separating', section: 'Section B · §12.1', marks: 8,
        prompt: String.raw`
**(a)** State the order of the differential equation $\dfrac{dy}{dx}=2xy^{2}$, and show that $y=\dfrac{1}{C-x^{2}}$ is a solution for every constant $C$. Write down a solution that is **not** of this form. (2)

**(b)** Given the differential equation
$$\frac{dy}{dx}=\frac{y}{x^{2}+4x+13},\qquad y>0,$$
write it in the form $M(x)\,dx+N(y)\,dy=0$ and find its general solution. (3)

**(c)** Find the particular solution of the equation in (b) given that $y=2$ when $x=-2$, and find $\displaystyle\lim_{x\to\infty}y$. (3)
        `,
        solution: String.raw`
**(a)** The equation is **first order**. ✓ For $y=(C-x^2)^{-1}$,
$$\frac{dy}{dx}=-(C-x^2)^{-2}(-2x)=\frac{2x}{(C-x^2)^2}=2x\,y^2,$$
so it is a solution. The constant function $y=0$ also satisfies $y'=2xy^2$ but is not of the form $\frac{1}{C-x^2}$ for any $C$ (it is lost when we divide by $y^2$ while separating). ✓

**(b)** Separate: ✓
$$\frac{dx}{x^{2}+4x+13}-\frac{dy}{y}=0.$$
Complete the square, $x^2+4x+13=(x+2)^2+3^2$, so $\displaystyle\int\frac{dx}{(x+2)^2+9}=\frac13\arctan\frac{x+2}{3}$. Hence $\ln y=\dfrac13\arctan\dfrac{x+2}{3}+C_1$ and the **general solution** is ✓✓
$$y=A\exp\!\left(\frac13\arctan\frac{x+2}{3}\right),\qquad A>0.$$

**(c)** At $x=-2$: $\arctan0=0$, so $y(-2)=A=2$. ✓ The **particular solution** is
$$y=2\exp\!\left(\frac13\arctan\frac{x+2}{3}\right).$$ ✓
As $x\to\infty$, $\arctan\frac{x+2}{3}\to\frac\pi2$, so $y\to2e^{\pi/6}$. ✓
        `
      },
      {
        number: 14, label: 'B8', title: 'Differential equations — linear', section: 'Section B · §12.3', marks: 10,
        prompt: String.raw`
Given the differential equation
$$\frac{dy}{dx}=\cos x-y\sec x,\qquad -\frac\pi2<x<\frac\pi2.$$

**(a)** Show that this is a linear differential equation by writing it in standard form. (2)

**(b)** Using $\displaystyle\int\sec x\,dx=\ln|\sec x+\tan x|+C$, find the integrating factor $e^{\int P(x)\,dx}$. (2)

**(c)** Hence find the general solution of the differential equation. (4)

**(d)** Find the particular solution satisfying $y=0$ when $x=0$. (2)
        `,
        solution: String.raw`
**(a)** Move the $y$-term to the left:
$$\frac{dy}{dx}+(\sec x)\,y=\cos x.$$ ✓✓
This has the form $\frac{dy}{dx}+P(x)y=Q(x)$ with $P(x)=\sec x$ and $Q(x)=\cos x$, so it is **linear**.

**(b)** $\displaystyle\int\sec x\,dx=\ln|\sec x+\tan x|$, and $\sec x+\tan x=\dfrac{1+\sin x}{\cos x}>0$ on the interval, so ✓
$$\mu(x)=\sec x+\tan x.$$ ✓

**(c)** Multiply by $\mu$. The right-hand side becomes $(\sec x+\tan x)\cos x=1+\sin x$: ✓
$$\frac{d}{dx}\Big(y\,(\sec x+\tan x)\Big)=1+\sin x.$$
Integrate: $y(\sec x+\tan x)=x-\cos x+C$, so the **general solution** is ✓✓
$$y=\frac{x-\cos x+C}{\sec x+\tan x}=\frac{\cos x\,\left(x-\cos x+C\right)}{1+\sin x}.$$ ✓

**(d)** With $y(0)=0$: $\sec0+\tan0=1$, so $0=0-1+C$ and $C=1$. ✓ The **particular solution** is
$$y=\frac{\cos x\,\left(x+1-\cos x\right)}{1+\sin x}.$$ ✓
        `
      }
    ]
  },
{
    id: 'nov-paper9',
    label: 'November Paper 9',
    date: 'November Exam I',
    kind: 'CALCULUS EXAMINATION',
    totalMarks: 90,
    duration: 120,
    topics: 'A poster with unknown printed area (open interval) and an open cylindrical tank (§6.6), arcsine and arctangent integrals and a power of 1+cos x (§9.1, §9.4), x sech x tanh x and the reduction formula for ∫(1−x²)ⁿdx (§9.2), a Comparison Theorem Type II argument and a logarithm integral with a parameter p (§10), L’Hôpital for ln n/√n and comparison tests, a power series with its derivative and the Maclaurin series of x² cos x, a separable ODE with arctan(sin x), and a linear ODE with integrating factor e^√x.',
    instructions: [
      'Section A (Questions A1–A6): multiple choice. Choose ONE answer for each question. [14 marks]',
      'Section B (Questions B1–B8): give FULL solutions and show ALL workings. [76 marks]',
      'No calculators are allowed.',
      'You have 2 hours in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: 'A1', title: 'Minimizing a weighted sum with a fixed product', section: 'Section A · §6.6', marks: 2,
        prompt: String.raw`
Two positive numbers $x$ and $y$ satisfy $xy=36$. The smallest possible value of $4x+y$ is

- **A.** $26$.
- **B.** $24$.
- **C.** $30$.
- **D.** $40$.
- **E.** $12$.
        `,
        solution: String.raw`
**Answer: B.** ✓✓

Substitute $y=\dfrac{36}{x}$: $f(x)=4x+\dfrac{36}{x}$, $x>0$. Then
$$f'(x)=4-\frac{36}{x^{2}}=0\Rightarrow x=3,\ y=12.$$
$f\to\infty$ as $x\to0^{+}$ and as $x\to\infty$ (and $f''(x)=\frac{72}{x^{3}}>0$), so the critical number gives the absolute minimum: $f(3)=12+12=24$.

- **A**, **C** and **D** are $f(2)$, $f(6)$ and $f(1)=f(9)$. **E** is only the term $4x$ at $x=3$.
        `
      },
      {
        number: 2, label: 'A2', title: 'A product of trigonometric functions', section: 'Section A · §9.4', marks: 3,
        prompt: String.raw`
$$\int_0^{\pi}\sin2x\,\cos x\,dx=$$

- **A.** $0$.
- **B.** $\dfrac23$.
- **C.** $\dfrac43$.
- **D.** $2$.
- **E.** $\dfrac83$.
        `,
        solution: String.raw`
**Answer: C.** ✓✓✓

Use $\sin2x=2\sin x\cos x$, so $\sin2x\cos x=2\sin x\cos^{2}x$. With $u=\cos x$, $du=-\sin x\,dx$:
$$\int_0^{\pi}2\sin x\cos^{2}x\,dx=\left[-\frac{2\cos^{3}x}{3}\right]_0^{\pi}=-\frac23(-1)+\frac23(1)=\frac43.$$

(Alternatively, $\sin2x\cos x=\frac12(\sin3x+\sin x)$ and $\frac12\left[-\frac{\cos3x}{3}-\cos x\right]_0^{\pi}=\frac12\left(\frac23+2\right)=\frac43$.)

- **B** loses the factor $2$ in $\sin2x=2\sin x\cos x$. **A**, **D** and **E** come from slips in evaluating $\cos^{3}x$ at the limits $0$ and $\pi$.
        `
      },
      {
        number: 3, label: 'A3', title: 'A Type II improper integral', section: 'Section A · §10', marks: 2,
        prompt: String.raw`
$$\int_0^{1}\ln x\,dx=$$

- **A.** $-\dfrac12$.
- **B.** $0$.
- **C.** $1$.
- **D.** $-1$.
- **E.** The integral diverges.
        `,
        solution: String.raw`
**Answer: D.** ✓✓

The integrand is undefined at $x=0$, so the integral is $\displaystyle\lim_{t\to0^{+}}\int_t^{1}\ln x\,dx$. By parts, $\displaystyle\int\ln x\,dx=x\ln x-x$, so
$$\int_t^{1}\ln x\,dx=(0-1)-(t\ln t-t)=-1-t\ln t+t.$$
As $t\to0^{+}$: $t\to0$ and $t\ln t=\dfrac{\ln t}{1/t}\to\dfrac{1/t}{-1/t^{2}}=-t\to0$ (l'Hôpital). So the integral converges to $-1$ (negative, since $\ln x<0$ on $(0,1)$).
        `
      },
      {
        number: 4, label: 'A4', title: 'Absolute convergence', section: 'Section A · §11.2–11.3', marks: 3,
        prompt: String.raw`
Which one of the following statements about the series $\displaystyle\sum_{n=1}^{\infty}\frac{\sin n}{n^{2}}$ is correct?

- **A.** It is absolutely convergent, by comparison with $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n^{2}}$.
- **B.** It diverges, by the Test for Divergence, because $\sin n$ has no limit.
- **C.** It is conditionally convergent, by the Alternating Series Test.
- **D.** It converges, by the Alternating Series Test, because the terms change sign.
- **E.** It diverges, by comparison with $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n}$.
        `,
        solution: String.raw`
**Answer: A.** ✓✓✓

Since $|\sin n|\le1$, we have $0\le\dfrac{|\sin n|}{n^{2}}\le\dfrac1{n^{2}}$. The series $\sum\frac1{n^{2}}$ converges ($p$-series, $p=2>1$), so by the **Comparison Test** $\sum\left|\dfrac{\sin n}{n^{2}}\right|$ converges: the series is **absolutely convergent**.

- **B:** the terms $\frac{\sin n}{n^{2}}$ do tend to $0$ (squeezed by $\pm\frac1{n^{2}}$); the Test for Divergence is simply inconclusive. **C** and **D:** the signs of $\sin n$ do not alternate in a regular pattern, so the Alternating Series Test does not apply (and absolute convergence rules out *conditional*). **E:** the bound $\frac{|\sin n|}{n^{2}}\le\frac1n$ is true but gives no information, because $\sum\frac1n$ diverges.
        `
      },
      {
        number: 5, label: 'A5', title: 'Recognising a Maclaurin series', section: 'Section A · §11.6', marks: 2,
        prompt: String.raw`
The sum of the series $\displaystyle\sum_{n=1}^{\infty}\frac{3^{n}}{n!}$ is

- **A.** $e^{3}$.
- **B.** $e^{3}-1$.
- **C.** $3e$.
- **D.** $e^{3}+1$.
- **E.** $3e-1$.
        `,
        solution: String.raw`
**Answer: B.** ✓✓

The Maclaurin series of $e^{x}$ is $\displaystyle\sum_{n=0}^{\infty}\frac{x^{n}}{n!}$. At $x=3$: $e^{3}=\displaystyle\sum_{n=0}^{\infty}\frac{3^{n}}{n!}=1+\sum_{n=1}^{\infty}\frac{3^{n}}{n!}$. Our series starts at $n=1$, so its sum is $e^{3}-1$. (**A** forgets that the $n=0$ term, equal to $1$, is missing.)
        `
      },
      {
        number: 6, label: 'A6', title: 'Order and linearity', section: 'Section A · §12.0', marks: 2,
        prompt: String.raw`
The differential equation $y''+\left(y'\right)^{3}=x$ is

- **A.** first order and linear.
- **B.** second order and linear.
- **C.** second order and nonlinear.
- **D.** first order and nonlinear.
- **E.** third order and nonlinear.
        `,
        solution: String.raw`
**Answer: C.** ✓✓

The highest derivative is $y''$, so the equation is **second order**. The term $\left(y'\right)^{3}$ is a power of a derivative, so the equation is not linear in $y$ and its derivatives: it is **nonlinear**. (The exponent $3$ does not affect the order.)
        `
      },
      {
        number: 7, label: 'B1', title: 'Optimization — a poster with unknown printed area; an open tank', section: 'Section B · §6.6', marks: 11,
        prompt: String.raw`
**(a)** Explain why the Extreme Value Theorem and the Closed Interval Method cannot be used directly to find the maximum value of a function on $[0,\infty)$. (2)

**(b)** A rectangular poster has a printed area of $k\ \text{cm}^{2}$, with margins of $3$ cm at the top and at the bottom and $2$ cm on each side. The smallest possible area of paper for such a poster is $216\ \text{cm}^{2}$. Find $k$, and the dimensions of the poster of least area. (5)

**(c)** An open cylindrical tank (with no lid) must hold $27\pi\ \text{m}^{3}$. Find the radius and height that use the least material, and the least area of material. (4)
        `,
        solution: String.raw`
**(a)** The Extreme Value Theorem only applies to a **closed and bounded** interval $[a,b]$, and $[0,\infty)$ is unbounded. ✓ There is no right-hand endpoint at which to evaluate the function, so instead we must examine the **limit** as $x\to\infty$ (the function may approach a value without ever attaining it, or may not have a maximum at all). ✓

**(b)** Let the printed region have width $x$ and height $\dfrac kx$. The paper measures $(x+4)$ by $\left(\dfrac kx+6\right)$, so
$$A(x)=(x+4)\left(\frac kx+6\right)=k+24+6x+\frac{4k}{x},\qquad x>0.$$ ✓
$$A'(x)=6-\frac{4k}{x^{2}}=0\Rightarrow x^{2}=\frac{2k}{3}.$$ ✓
$A\to\infty$ as $x\to0^{+}$ and as $x\to\infty$ (and $A''>0$), so this is the minimum. At this point $6x=\dfrac{4k}{x}$ (because $6x^{2}=4k$), so
$$A_{\min}=k+24+12x=\frac{3x^{2}}{2}+12x+24\qquad\left(k=\tfrac{3x^{2}}{2}\right).$$ ✓
Setting $A_{\min}=216$: $\dfrac{3x^{2}}{2}+12x-192=0\Rightarrow x^{2}+8x-128=0\Rightarrow(x+16)(x-8)=0$, so $x=8$ (as $x>0$). ✓
Then $k=\dfrac{3\cdot64}{2}=\boxed{96}$. The printed region is $8\text{ cm}\times12\text{ cm}$, so the poster is $\boxed{12\text{ cm}\times18\text{ cm}}$ (area $216$). ✓

**(c)** $h=\dfrac{27\pi}{\pi r^{2}}=\dfrac{27}{r^{2}}$, and the material is the base plus the curved side:
$$S(r)=\pi r^{2}+2\pi rh=\pi r^{2}+\frac{54\pi}{r},\qquad r>0.$$ ✓
$S'(r)=2\pi r-\dfrac{54\pi}{r^{2}}=0\Rightarrow r^{3}=27\Rightarrow r=3$. ✓
$S''(r)=2\pi+\dfrac{108\pi}{r^{3}}>0$, and $S\to\infty$ at both ends of $(0,\infty)$, so this is the absolute minimum. ✓
With $r=3$: $h=3$ m and $S_{\min}=9\pi+18\pi=\boxed{27\pi\ \text{m}^{2}}$. ✓
        `
      },
      {
        number: 8, label: 'B2', title: 'Inverse-trigonometric integrals; an even power of sine', section: 'Section B · §9.1, §9.4', marks: 9,
        prompt: String.raw`
**(a)** Evaluate

**(i)** $\displaystyle\int_{1}^{\sqrt e}\frac{dx}{x\sqrt{1-(\ln x)^{2}}}$ (3)

**(ii)** $\displaystyle\int_{0}^{1}\frac{x}{1+x^{4}}\,dx$ (2)

**(b)** Evaluate $\displaystyle\int_0^{\pi}\left(1+\cos x\right)^{3}dx.$ (4)
        `,
        solution: String.raw`
**(a)(i)** Substitute $u=\ln x$, so $du=\dfrac{dx}{x}$. The limits become $\ln1=0$ and $\ln\sqrt e=\frac12$: ✓
$$\int_0^{1/2}\frac{du}{\sqrt{1-u^{2}}}=\Big[\arcsin u\Big]_0^{1/2}=\arcsin\frac12-0=\boxed{\frac\pi6}.$$ ✓✓

**(a)(ii)** Substitute $u=x^{2}$, so $du=2x\,dx$ and the limits stay $0$ and $1$: ✓
$$\frac12\int_0^{1}\frac{du}{1+u^{2}}=\frac12\Big[\arctan u\Big]_0^{1}=\boxed{\frac\pi8}.$$ ✓

**(b)** Expand the cube: $(1+\cos x)^3=1+3\cos x+3\cos^2x+\cos^3x$. ✓
Integrate over $[0,\pi]$ term by term:
- $\int_0^\pi1\,dx=\pi$ and $\int_0^\pi3\cos x\,dx=3[\sin x]_0^\pi=0$. ✓
- $\int_0^\pi3\cos^2x\,dx=\tfrac32\int_0^\pi(1+\cos2x)\,dx=\tfrac{3\pi}{2}$. ✓
- $\int_0^\pi\cos^3x\,dx=\int_0^\pi(1-\sin^2x)\cos x\,dx=\Big[\sin x-\tfrac{\sin^3x}{3}\Big]_0^\pi=0$.

Total: $\pi+\tfrac{3\pi}2=\dfrac{5\pi}{2}$. ✓
        `
      },
      {
        number: 9, label: 'B3', title: 'Integration by parts; a reduction formula', section: 'Section B · §9.2', marks: 10,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_0^{\ln2}x\,\operatorname{sech}x\tanh x\,dx$. You may use $\displaystyle\int\operatorname{sech}x\,dx=\arctan(\sinh x)+C$. (3)

**(b)** For an integer $n\ge0$ let $I_n=\displaystyle\int_0^{1}\left(1-x^{2}\right)^{n}dx$.

**(i)** For $n\ge1$, use integration by parts to prove that
$$I_n=\frac{2n}{2n+1}\,I_{n-1}.$$ (5)

**(ii)** Hence evaluate $I_3$. (2)
        `,
        solution: String.raw`
**(a)** Note that $\dfrac{d}{dx}\operatorname{sech}x=-\operatorname{sech}x\tanh x$. Integrate by parts with $u=x$, $dv=\operatorname{sech}x\tanh x\,dx$, $v=-\operatorname{sech}x$: ✓
$$\int x\operatorname{sech}x\tanh x\,dx=-x\operatorname{sech}x+\int\operatorname{sech}x\,dx=-x\operatorname{sech}x+\arctan(\sinh x).$$ ✓
At $x=\ln2$: $\cosh(\ln2)=\tfrac54$, so $\operatorname{sech}(\ln2)=\tfrac45$, and $\sinh(\ln2)=\tfrac34$. At $x=0$ the expression is $0$. So
$$\int_0^{\ln2}x\operatorname{sech}x\tanh x\,dx=\arctan\tfrac34-\tfrac45\ln2\approx0.089.$$ ✓

**(b)(i)** Take $u=\left(1-x^{2}\right)^{n}$ and $dv=dx$, so $du=-2nx\left(1-x^{2}\right)^{n-1}dx$ and $v=x$: ✓✓
$$I_n=\Big[x\left(1-x^{2}\right)^{n}\Big]_0^{1}+2n\int_0^{1}x^{2}\left(1-x^{2}\right)^{n-1}dx.$$
The boundary term is $0-0=0$ (it vanishes at $x=1$ because $1-x^{2}=0$ and $n\ge1$). Write $x^{2}=1-\left(1-x^{2}\right)$: ✓
$$I_n=2n\int_0^{1}\left[1-\left(1-x^{2}\right)\right]\left(1-x^{2}\right)^{n-1}dx=2n\left(I_{n-1}-I_n\right).$$ ✓
Collect the $I_n$ terms: $(2n+1)I_n=2n\,I_{n-1}$, which gives $I_n=\dfrac{2n}{2n+1}I_{n-1}$. ✓

**(b)(ii)** $I_0=\displaystyle\int_0^{1}1\,dx=1$. Applying the formula three times: ✓
$$I_1=\frac23\,I_0=\frac23,\qquad I_2=\frac45\,I_1=\frac{8}{15},\qquad I_3=\frac67\,I_2=\frac67\cdot\frac{8}{15}=\frac{48}{105}=\boxed{\frac{16}{35}}.$$ ✓✓
(Check: $\displaystyle\int_0^{1}\left(1-3x^{2}+3x^{4}-x^{6}\right)dx=1-1+\frac35-\frac17=\frac{16}{35}$.)
        `
      },
      {
        number: 10, label: 'B4', title: 'Improper integrals — a comparison and a logarithm with a parameter', section: 'Section B · §10', marks: 10,
        prompt: String.raw`
**(a)** Use the Comparison Theorem to show that $\displaystyle\int_0^{1}\frac{\sin x}{x^{3/2}}\,dx$ converges. (3)

**(b)** For which real numbers $p$ does $\displaystyle\int_1^{\infty}\frac{\ln x}{x^{p}}\,dx$ converge? For those values of $p$, find the value of the integral in terms of $p$. Justify every limit that you use. (7)
        `,
        solution: String.raw`
**(a)** For $0<x\le1$ we have $0<\sin x\le x$, so $0<\dfrac{\sin x}{x^{3/2}}\le\dfrac{x}{x^{3/2}}=\dfrac{1}{\sqrt x}$. ✓
$\displaystyle\int_0^{1}x^{-1/2}dx=2$ converges. ✓
By the Comparison Theorem, $\displaystyle\int_0^{1}\frac{\sin x}{x^{3/2}}dx$ **converges**. This is a genuine Type II improper integral at $0$: $\frac{\sin x}{x^{3/2}}\sim\frac1{\sqrt x}\to\infty$ as $x\to0^+$. ✓

**(b)** *Case $p\le1$.* For $x\ge e$, $\ln x\ge1$ and $x^{p}\le x$, so $\dfrac{\ln x}{x^{p}}\ge\dfrac{1}{x^{p}}\ge\dfrac1x$. Since $\displaystyle\int_e^{\infty}\dfrac{dx}{x}$ diverges, the integral **diverges** by comparison. ✓

*Case $p>1$.* Integrate by parts with $u=\ln x$, $dv=x^{-p}dx$ ($v=\dfrac{x^{1-p}}{1-p}$): ✓
$$\int x^{-p}\ln x\,dx=\frac{x^{1-p}\ln x}{1-p}-\frac{1}{1-p}\int x^{-p}dx=\frac{x^{1-p}\ln x}{1-p}-\frac{x^{1-p}}{(1-p)^{2}}.$$ ✓
Evaluating from $1$ to $t$ (note $\ln1=0$):
$$\int_1^{t}x^{-p}\ln x\,dx=\frac{t^{1-p}\ln t}{1-p}-\frac{t^{1-p}}{(1-p)^{2}}+\frac{1}{(1-p)^{2}}.$$ ✓
Since $1-p<0$, $t^{1-p}\to0$, and $t^{1-p}\ln t=\dfrac{\ln t}{t^{p-1}}\to0$ by l’Hôpital’s rule ($\frac{1/t}{(p-1)t^{p-2}}=\frac{1}{(p-1)t^{p-1}}\to0$). ✓
So for $p>1$ the integral **converges** and
$$\int_1^{\infty}\frac{\ln x}{x^{p}}dx=\frac{1}{(p-1)^{2}}.$$ ✓
Hence the integral converges **exactly when $p>1$**. ✓
        `
      },
      {
        number: 11, label: 'B5', title: 'Sequences and series', section: 'Section B · §11.1–11.3', marks: 9,
        prompt: String.raw`
**(a)** Determine, giving reasons, whether the sequence $\{a_n\}=\left\{\dfrac{\ln n}{\sqrt n}\right\}$ is convergent or divergent. If it is convergent, state to what value it converges. (3)

**(b)** Decide, with reasons, whether the series $\displaystyle\sum_{n=3}^{\infty}\frac{\ln n}{n}$ converges or diverges. (2)

**(c)** Use the Comparison Test to decide whether the following series converges or diverges.
$$\sum_{n=1}^{\infty}\frac{n+1}{n^{3/2}+5}$$ (4)
        `,
        solution: String.raw`
**(a)** Let $f(x)=\dfrac{\ln x}{\sqrt x}$, so $a_n=f(n)$. Both numerator and denominator tend to $\infty$, so by L'Hôpital's rule
$$\lim_{x\to\infty}\frac{\ln x}{\sqrt x}=\lim_{x\to\infty}\frac{1/x}{\frac1{2\sqrt x}}=\lim_{x\to\infty}\frac{2}{\sqrt x}=0.$$ ✓✓
Hence $\{a_n\}$ **converges to $0$**. ✓

**(b)** Here $a_n=\dfrac{\ln n}n$. The terms tend to $0$, so the Test for Divergence is inconclusive. ✓ But for $n\ge3$ we have $\ln n\ge\ln3>1$, so $\dfrac{\ln n}{n}>\dfrac1n$, and $\sum\dfrac1n$ diverges. By the Comparison Test the series **diverges**. ✓

**(c)** For $n\ge1$: $n+1\ge n$ and $n^{3/2}+5\le n^{3/2}+5n^{3/2}=6n^{3/2}$. Therefore ✓✓
$$\frac{n+1}{n^{3/2}+5}\ \ge\ \frac{n}{6n^{3/2}}=\frac{1}{6\sqrt n}.$$
The series $\sum\dfrac1{6\sqrt n}=\tfrac16\sum\dfrac{1}{n^{1/2}}$ diverges (a $p$-series with $p=\tfrac12\le1$). By the Comparison Test the given series **diverges**. ✓✓
        `
      },
      {
        number: 12, label: 'B6', title: 'Power series and the Maclaurin series of x² cos x', section: 'Section B · §11.4, §11.6', marks: 9,
        prompt: String.raw`
**(a)** **(i)** Find the radius of convergence and the interval of convergence of the power series
$$\sum_{n=1}^{\infty}\frac{n!\,x^{n}}{(2n)!}.$$ (3)

**(ii)** Without further calculation, state the radius of convergence of the series obtained by differentiating the series in (i) term by term, and give the reason. (2)

**(b)** Use the Maclaurin series of $\cos x$ to find the Maclaurin series of $f(x)=x^{2}\cos x$ (write the first three non-zero terms and the general term). Hence find $f^{(10)}(0)$. (4)
        `,
        solution: String.raw`
**(a)(i)** Use the **Ratio Test** with $a_n=\dfrac{n!\,x^{n}}{(2n)!}$: ✓
$$\left|\frac{a_{n+1}}{a_n}\right|=\frac{(n+1)!\,|x|^{n+1}}{(2n+2)!}\cdot\frac{(2n)!}{n!\,|x|^{n}}=\frac{(n+1)|x|}{(2n+2)(2n+1)}=\frac{|x|}{2(2n+1)}\ \longrightarrow\ 0$$ ✓
for **every** $x$, and $0<1$. So the series converges for all $x$: the **radius of convergence is $R=\infty$** and the **interval of convergence is $(-\infty,\infty)$**. ✓

**(a)(ii)** By the theorem on term-by-term differentiation, the differentiated series has the **same radius of convergence**, $R=\infty$. ✓✓ (Differentiation can change convergence at the endpoints of the interval, but there are none here.)

**(b)** Since $\cos x=\displaystyle\sum_{k=0}^{\infty}\frac{(-1)^kx^{2k}}{(2k)!}$, multiplying by $x^2$ gives ✓✓
$$x^2\cos x=\sum_{k=0}^{\infty}\frac{(-1)^kx^{2k+2}}{(2k)!}=x^2-\frac{x^4}{2!}+\frac{x^6}{4!}-\cdots.$$
The coefficient of $x^{10}$ comes from $2k+2=10$, i.e. $k=4$, and equals $\dfrac{(-1)^4}{8!}=\dfrac1{8!}$. ✓ Since $c_{10}=\dfrac{f^{(10)}(0)}{10!}$,
$$f^{(10)}(0)=\frac{10!}{8!}=90.$$ ✓
        `
      },
      {
        number: 13, label: 'B7', title: 'Differential equations — separable', section: 'Section B · §12.1', marks: 8,
        prompt: String.raw`
Given the differential equation
$$\frac{dy}{dx}=\frac{y\cos x}{1+\sin^{2}x}.$$

**(a)** State the order of the equation, and show that it is separable by writing it in the form $M(x)\,dx+N(y)\,dy=0$. (2)

**(b)** Find the general solution of the equation. (3)

**(c)** Find the particular solution given that $y=e$ when $x=0$, and find the maximum value of $y$. (3)
        `,
        solution: String.raw`
**(a)** The equation is **first order**. ✓ For $y\ne0$:
$$\frac{\cos x}{1+\sin^{2}x}\,dx-\frac{dy}{y}=0,$$ ✓
which has the form $M(x)\,dx+N(y)\,dy=0$, so it is **separable**.

**(b)** Let $u=\sin x$, $du=\cos x\,dx$: $\displaystyle\int\frac{\cos x}{1+\sin^2x}dx=\int\frac{du}{1+u^2}=\arctan(\sin x)$. ✓ So $\ln|y|=\arctan(\sin x)+C_1$ and the **general solution** is ✓✓
$$y=A\,e^{\arctan(\sin x)}.$$

**(c)** With $y(0)=e$: $e=Ae^{\arctan0}=A$. ✓ The **particular solution** is
$$y=e\cdot e^{\arctan(\sin x)}=e^{\,1+\arctan(\sin x)}.$$
The exponent is largest when $\sin x=1$, giving $\max y=e^{1+\pi/4}$. ✓
        `
      },
      {
        number: 14, label: 'B8', title: 'Differential equations — linear', section: 'Section B · §12.3', marks: 10,
        prompt: String.raw`
Given the differential equation
$$2\sqrt x\,\frac{dy}{dx}+y=2\sqrt x\,e^{-\sqrt x},\qquad x>0.$$

**(a)** Show that this is a linear differential equation by writing it in standard form. (2)

**(b)** Find the integrating factor $e^{\int P(x)\,dx}$. (2)

**(c)** Hence find the general solution of the differential equation. (4)

**(d)** Find the particular solution satisfying $y=\dfrac3e$ when $x=1$. (2)
        `,
        solution: String.raw`
**(a)** Divide through by $2\sqrt x$ (positive on the domain):
$$\frac{dy}{dx}+\frac{1}{2\sqrt x}\,y=e^{-\sqrt x}.$$ ✓✓
This has the form $\frac{dy}{dx}+P(x)y=Q(x)$ with $P(x)=\dfrac{1}{2\sqrt x}$ and $Q(x)=e^{-\sqrt x}$, so it is **linear**.

**(b)** $\displaystyle\int\frac{dx}{2\sqrt x}=\sqrt x$, so ✓
$$\mu(x)=e^{\sqrt x}.$$ ✓

**(c)** Multiply by $e^{\sqrt x}$; the right-hand side collapses: ✓
$$\frac{d}{dx}\left(ye^{\sqrt x}\right)=e^{\sqrt x}\,e^{-\sqrt x}=1.$$
Integrate: $ye^{\sqrt x}=x+C$, so the **general solution** is ✓✓
$$y=(x+C)\,e^{-\sqrt x}.$$

**(d)** With $y(1)=\dfrac3e$: $\dfrac3e=(1+C)e^{-1}$, so $C=2$. ✓ The **particular solution** is ✓
$$y=(x+2)\,e^{-\sqrt x}.$$
        `
      }
    ]
  }
];