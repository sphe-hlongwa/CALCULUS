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
 *   B4 §10 improper integrals    B5 §11.1-11.3 sequence + series tests
 *   B6 §11.4-11.6 power series   B7 §12.0/12.1 separable ODE    B8 §12.3 first-order linear ODE
 *
 * No question is copied from a source paper, and no question repeats across these nine
 * papers or the Tutorial Quiz Test 4 papers in data/exams-tutorial.js.
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
    topics: 'Cylinder in a cone and a triangular plot (§6.6), completing the square and f′/f (§9.1), reduction formula for (ln x)ⁿ (§9.2), odd powers of sin and cos (§9.4), Type I improper integral, Ratio Test and Divergence Test, interval of convergence and Taylor series, separable and linear ODEs.',
    instructions: [
      'Section A (Questions A1–A6): multiple choice. Choose ONE answer for each question. [14 marks]',
      'Section B (Questions B1–B8): give FULL solutions and show ALL workings. [76 marks]',
      'No calculators are allowed.',
      'You have 2 hours in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: 'A1', title: 'Setting up an optimization problem', section: 'Section A · §6.6', marks: 2,
        prompt: String.raw`
A right circular cone has base radius $6$ and height $12$. A right circular cylinder of radius $r$ and height $h$ is inscribed in the cone, with its base on the base of the cone. Using similar triangles to eliminate $h$, the volume of the cylinder is a function of $r$ alone. Which choice gives that function together with its correct domain?

- **A.** $V(r)=\pi r^{2}(12-2r)$, $\;0\le r\le6$.
- **B.** $V(r)=\pi r^{2}(12-r)$, $\;0\le r\le12$.
- **C.** $V(r)=\pi r^{2}(12-2r)$, $\;0\le r\le12$.
- **D.** $V(r)=\pi r^{2}\left(6-\dfrac r2\right)$, $\;0\le r\le6$.
- **E.** $V(r)=2\pi r(12-2r)$, $\;0\le r\le6$.
        `,
        solution: String.raw`
**Answer: A.** ✓✓

Take a cross-section through the axis. The small triangle above the cylinder is similar to the whole triangle, so $\dfrac{12-h}{r}=\dfrac{12}{6}=2$, giving $h=12-2r$.  Then $V=\pi r^2h=\pi r^2(12-2r)$. The radius cannot be negative and cannot exceed the cone's radius $6$ (at $r=6$ the height is $0$), so the domain is $[0,6]$. 

- **B** uses $h=12-r$ (wrong ratio). **C** has the right function but the domain $[0,12]$ would allow a negative height. **D** has the wrong height. **E** is the formula for a different quantity (lateral area), not volume.
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
        number: 7, label: 'B1', title: 'Optimization — a rectangle inside a triangular field', section: 'Section B · §6.6', marks: 11,
        prompt: String.raw`
A farmer wants to fence off a rectangular plot inside a right-angled triangular field. The two perpendicular sides of the field have lengths $30$ m and $20$ m. One corner of the rectangle is at the right-angled corner of the field, two sides of the rectangle lie along the perpendicular sides of the field, and the opposite corner of the rectangle lies on the hypotenuse. Let $x$ be the length of the side of the rectangle that lies along the $30$ m side, and $y$ the length of the side along the $20$ m side. The farmer wants the plot of **largest area**.

**(a)** Draw a labelled diagram. Use similar triangles to write $y$ in terms of $x$, and hence write the area $A$ of the rectangle as a function of $x$ alone. (4)

**(b)** State the domain of $A$. (1)

**(c)** Find the critical number(s) of $A$. (3)

**(d)** Use the Closed Interval Method to show that the critical number gives the absolute maximum area. State the dimensions of the best plot and its area. (3)
        `,
        solution: String.raw`
**(a)** *Diagram:* a right triangle with legs $30$ (horizontal) and $20$ (vertical); the rectangle has width $x$ and height $y$ in the corner at the right angle, with its far corner on the hypotenuse. ✓

The small triangle above the rectangle is similar to the whole triangle (same angles). Its horizontal side is $x$ and its vertical side is $20-y$, so ✓
$$\frac{20-y}{x}=\frac{20}{30}\ \Longrightarrow\ y=20-\frac{2x}{3}.$$ ✓
The area (objective function) is $A=xy$, which in one variable is ✓
$$A(x)=x\left(20-\frac{2x}{3}\right)=20x-\frac{2}{3}x^{2}.$$

**(b)** The width satisfies $0\le x\le30$ (at $x=30$ the height is $0$). The domain is the **closed interval** $[0,30]$. ✓

**(c)** $A'(x)=20-\dfrac{4x}{3}$ exists for all $x$, so the critical numbers come from $A'(x)=0$: ✓✓
$$20-\frac{4x}{3}=0\ \Longrightarrow\ x=15.$$ ✓

**(d)** $A$ is continuous on the closed interval $[0,30]$, so by the **Extreme Value Theorem** it has an absolute maximum on it, found by comparing the critical number and the endpoints: ✓
$$A(0)=0,\qquad A(15)=20(15)-\tfrac23(225)=300-150=150,\qquad A(30)=0.$$ ✓
The largest value is $A(15)=150$. The best plot has $x=15$ m and $y=20-10=10$ m, with area $\boxed{150\ \text{m}^2}$. ✓
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
        number: 10, label: 'B4', title: 'Improper integrals', section: 'Section B · §10', marks: 10,
        prompt: String.raw`
**(a)** Explain why the integral $\displaystyle\int_0^{\pi/2}\sec x\,dx$ is called improper. (2)

**(b)** Determine whether the improper integral
$$\int_0^{\infty}x^{2}e^{-x}\,dx$$
converges or diverges. If it converges, find its value. Justify every limit that you use. (8)
        `,
        solution: String.raw`
**(a)** The integrand $\sec x=\dfrac{1}{\cos x}$ is continuous on $\left[0,\frac\pi2\right)$ but is **undefined at the upper limit** $x=\frac\pi2$, where $\sec x\to+\infty$. ✓ The Fundamental Theorem cannot be applied on the closed interval, so the integral is improper (Type II) and means $\displaystyle\lim_{t\to\frac\pi2^-}\int_0^t\sec x\,dx$. ✓

**(b)** The upper limit is infinite (Type I), so $\displaystyle\int_0^\infty x^2e^{-x}dx=\lim_{t\to\infty}\int_0^tx^2e^{-x}dx$. ✓

First integration by parts ($u=x^2$, $dv=e^{-x}dx$): $\displaystyle\int x^2e^{-x}dx=-x^2e^{-x}+2\int xe^{-x}dx$. ✓
Second ($u=x$, $dv=e^{-x}dx$): $\displaystyle\int xe^{-x}dx=-xe^{-x}-e^{-x}$. ✓ Hence ✓
$$\int x^2e^{-x}dx=-e^{-x}\left(x^2+2x+2\right).$$
$$\int_0^tx^2e^{-x}dx=-e^{-t}\left(t^2+2t+2\right)+2.$$ ✓
Now $\displaystyle\lim_{t\to\infty}\frac{t^2}{e^t}=\lim_{t\to\infty}\frac{2t}{e^t}=\lim_{t\to\infty}\frac{2}{e^t}=0$ by l'Hôpital's rule (twice), and likewise $\dfrac{t}{e^t}\to0$ and $e^{-t}\to0$. ✓ Therefore the limit exists, so the integral **converges** and ✓
$$\int_0^\infty x^2e^{-x}dx=2.$$ ✓
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

**(b)** Use the formula $c_n=\dfrac{f^{(n)}(a)}{n!}$ to find the Taylor series of $f(x)=\dfrac1x$ about $a=2$. Write down the first four terms and the general term. (4)
        `,
        solution: String.raw`
**(a)** **Ratio Test.** With $a_n=\dfrac{n(x-3)^n}{2^n}$,
$$\left|\frac{a_{n+1}}{a_n}\right|=\frac{n+1}{n}\cdot\frac{|x-3|}{2}\ \longrightarrow\ \frac{|x-3|}{2}.$$ ✓
The series converges when $\dfrac{|x-3|}{2}<1$, i.e. $|x-3|<2$. So the **radius of convergence is $R=2$** and the series converges on $(1,5)$. ✓✓

**Endpoints.** At $x=5$ the series is $\displaystyle\sum n$, and at $x=1$ it is $\displaystyle\sum(-1)^nn$. In both cases $|a_n|=n\not\to0$, so by the Test for Divergence both **diverge**. ✓

**Interval of convergence: $(1,5)$.** ✓

**(b)** The Taylor series about $a$ comes from the general formula $c_n=\dfrac{f^{(n)}(a)}{n!}$ (Theorem 11.21); the Maclaurin table in §11.6 covers only $a=0$. Differentiate: $f(x)=x^{-1}$, $f'(x)=-x^{-2}$, $f''(x)=2x^{-3}$, $f'''(x)=-6x^{-4}$, and in general $f^{(n)}(x)=\dfrac{(-1)^nn!}{x^{n+1}}$. ✓✓

Therefore $c_n=\dfrac{f^{(n)}(2)}{n!}=\dfrac{(-1)^n}{2^{n+1}}$. ✓ The Taylor series is
$$\frac1x=\sum_{n=0}^{\infty}\frac{(-1)^n}{2^{n+1}}(x-2)^n=\frac12-\frac{x-2}{4}+\frac{(x-2)^2}{8}-\frac{(x-2)^3}{16}+\cdots$$ ✓
        `
      },
      {
        number: 13, label: 'B7', title: 'Differential equations — separable', section: 'Section B · §12.1', marks: 8,
        prompt: String.raw`
Given the differential equation
$$\left(1+x^{2}\right)\frac{dy}{dx}=x\,e^{-y}.$$

**(a)** State the order of the equation, and show that it is separable by writing it in the form $M(x)\,dx+N(y)\,dy=0$. (2)

**(b)** Find the general solution of the equation. (3)

**(c)** Find the particular solution given that $y=0$ when $x=0$. (3)
        `,
        solution: String.raw`
**(a)** The highest derivative is $\frac{dy}{dx}$, so the equation is of **order $1$**. Multiplying by $e^{y}\,dx$ and dividing by $1+x^2$: ✓
$$-\frac{x}{1+x^2}\,dx+e^{y}\,dy=0.$$
This has the form $M(x)\,dx+N(y)\,dy=0$ with $M=-\dfrac{x}{1+x^2}$ and $N=e^y$, so it is **separable**. ✓

**(b)** Integrate both sides of $e^y\,dy=\dfrac{x}{1+x^2}\,dx$: ✓
$$e^{y}=\frac12\ln\left(1+x^2\right)+C.$$ ✓
Solving for $y$ (where the right side is positive): ✓
$$y=\ln\!\left(\tfrac12\ln\left(1+x^2\right)+C\right).$$

**(c)** With $y(0)=0$: $e^0=\frac12\ln1+C$, so $C=1$. ✓✓
$$y=\ln\!\left(1+\tfrac12\ln\left(1+x^2\right)\right),$$ ✓
which is defined for all $x$ because $1+\frac12\ln(1+x^2)\ge1>0$.
        `
      },
      {
        number: 14, label: 'B8', title: 'Differential equations — linear', section: 'Section B · §12.3', marks: 10,
        prompt: String.raw`
Given the differential equation
$$\cos x\,\frac{dy}{dx}+y\sin x=\cos^{3}x,\qquad -\frac{\pi}{2}<x<\frac{\pi}{2}.$$

**(a)** Show that this is a linear differential equation by writing it in standard form. (2)

**(b)** Find the integrating factor $e^{\int P(x)\,dx}$. (3)

**(c)** Hence find the general solution of the differential equation, and then the particular solution satisfying $y=2$ when $x=0$. (5)
        `,
        solution: String.raw`
**(a)** Divide through by $\cos x$ (which is positive on the interval):
$$\frac{dy}{dx}+(\tan x)\,y=\cos^{2}x.$$ ✓✓
This has the form $\frac{dy}{dx}+P(x)y=Q(x)$ with $P(x)=\tan x$ and $Q(x)=\cos^2x$, so it is **linear**.

**(b)** $\displaystyle\int\tan x\,dx=-\ln|\cos x|=\ln|\sec x|$, so ✓✓
$$\mu(x)=e^{\ln\sec x}=\sec x\qquad(\sec x>0\text{ on the interval}).$$ ✓

**(c)** Multiply the standard form by $\mu=\sec x$; the left side becomes an exact derivative: ✓
$$\frac{d}{dx}\big(y\sec x\big)=\sec x\cos^2x=\cos x.$$ ✓
Integrate: $y\sec x=\sin x+C$, so the **general solution** is ✓
$$y=\cos x\,(\sin x+C)=\sin x\cos x+C\cos x.$$
With $y(0)=2$: $2=0+C\cdot1$, so $C=2$. ✓ The **particular solution** is ✓
$$y=\sin x\cos x+2\cos x.$$
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
    topics: 'Open-top box and container (§6.6), completing the square to an arctangent (§9.1), even powers of sin and the sec ⁿ reduction formula (§9.2, §9.4), improper integral with two endpoint discontinuities, Integral Test, power-series representations by differentiation and integration, separable and linear ODEs.',
    instructions: [
      'Section A (Questions A1–A6): multiple choice. Choose ONE answer for each question. [14 marks]',
      'Section B (Questions B1–B8): give FULL solutions and show ALL workings. [76 marks]',
      'No calculators are allowed.',
      'You have 2 hours in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: 'A1', title: 'An open box from a flat sheet', section: 'Section A · §6.6', marks: 2,
        prompt: String.raw`
An open-top box is made from a rectangular sheet of cardboard measuring $8$ cm by $15$ cm by cutting a square of side $x$ cm from each corner and folding up the sides. Which choice gives the volume of the box as a function of $x$, together with its correct domain?

- **A.** $V(x)=x(8-2x)(15-2x)$, $\;0\le x\le4$.
- **B.** $V(x)=x(8-2x)(15-2x)$, $\;0\le x\le7.5$.
- **C.** $V(x)=x(8-x)(15-x)$, $\;0\le x\le8$.
- **D.** $V(x)=x(8-2x)(15-2x)$, $\;0\le x\le8$.
- **E.** $V(x)=x^{2}(8-2x)(15-2x)$, $\;0\le x\le4$.
        `,
        solution: String.raw`
**Answer: A.** ✓✓

Cutting a square of side $x$ from each corner removes $2x$ from each dimension of the sheet, so the base of the box is $(8-2x)$ by $(15-2x)$ and the height is $x$: $V(x)=x(8-2x)(15-2x)$.  The base width must be non-negative, $8-2x\ge0$, so $x\le4$ (the shorter side is the restriction); hence the domain is $[0,4]$. 

- **B** and **D** use the wrong upper bound ($7.5$ would make $8-2x$ negative). **C** removes only $x$ from each dimension. **E** has an extra factor $x$.
        `
      },
      {
        number: 2, label: 'A2', title: 'Completing the square', section: 'Section A · §9.1', marks: 3,
        prompt: String.raw`
$$\int\frac{dx}{x^{2}-6x+13}=$$

- **A.** $\dfrac12\arctan\!\left(\dfrac{x-3}{2}\right)+C$.
- **B.** $\arctan\!\left(\dfrac{x-3}{2}\right)+C$.
- **C.** $\dfrac12\arctan(x-3)+C$.
- **D.** $\ln\left|x^{2}-6x+13\right|+C$.
- **E.** $\dfrac13\arctan\!\left(\dfrac{x-3}{3}\right)+C$.
        `,
        solution: String.raw`
**Answer: A.** ✓✓✓

The quadratic is irreducible (discriminant $36-52<0$), so complete the square: $x^2-6x+13=(x-3)^2+4$.  Then with $u=x-3$ and $a=2$,
$$\int\frac{dx}{(x-3)^2+2^2}=\frac1a\arctan\frac ua+C=\frac12\arctan\!\left(\frac{x-3}{2}\right)+C.$$ 

- **B** forgets the factor $\frac1a$. **C** forgets to divide by $a$ inside. **E** uses $a=3$ (it would need $+9$). **D** would need the numerator to be the derivative $2x-6$.
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
        number: 7, label: 'B1', title: 'Optimization — an open container of fixed volume', section: 'Section B · §6.6', marks: 11,
        prompt: String.raw`
An open-top storage container has a square base and four vertical rectangular sides (no top). Its volume must be $32\ \text{m}^3$. The material for the base and sides is to be **minimised**, i.e. the total surface area $S$ (base plus four sides) must be as small as possible. Let the base have side $x$ metres and the container height $h$ metres.

**(a)** Draw a labelled diagram. Use the volume constraint to eliminate $h$, and show that $S(x)=x^{2}+\dfrac{128}{x}$. (4)

**(b)** State the domain of $S$. (1)

**(c)** Find the critical number(s) of $S$. (3)

**(d)** Evaluate $\displaystyle\lim_{x\to0^{+}}S(x)$ and $\displaystyle\lim_{x\to\infty}S(x)$, and hence justify that the critical number gives the absolute minimum. State the dimensions of the best container and the minimum surface area. (3)
        `,
        solution: String.raw`
**(a)** *Diagram:* a box with a square base of side $x$ and height $h$, with no top. ✓

Constraint: $x^2h=32$, so $h=\dfrac{32}{x^2}$. ✓ The surface area is the base $x^2$ plus four sides of area $xh$ each: ✓
$$S=x^2+4xh=x^2+4x\cdot\frac{32}{x^2}=x^2+\frac{128}{x}.$$ ✓

**(b)** The side must be positive and has no upper bound, so the domain is the **open** interval $(0,\infty)$. ✓

**(c)** $S'(x)=2x-\dfrac{128}{x^2}$ exists for all $x>0$, so set $S'(x)=0$: ✓✓
$$2x=\frac{128}{x^2}\ \Longrightarrow\ x^3=64\ \Longrightarrow\ x=4.$$ ✓

**(d)** The domain is not a closed interval, so we examine the end behaviour:
$$\lim_{x\to0^+}\left(x^2+\frac{128}{x}\right)=\infty,\qquad\lim_{x\to\infty}\left(x^2+\frac{128}{x}\right)=\infty.$$ ✓
$S$ is continuous on $(0,\infty)$, has the single critical number $x=4$, and $S\to\infty$ at both ends of the domain. So the critical point cannot be a maximum and must be the **absolute minimum**. ✓ (This end-behaviour argument replaces the Closed Interval Method when the domain is open: Study Guide 1 §6.3 states the Extreme Value Theorem only for closed intervals. Also $S'<0$ for $0<x<4$ and $S'>0$ for $x>4$.)

The best container has $x=4$ m and $h=\dfrac{32}{16}=2$ m, and the minimum surface area is $S(4)=16+32=\boxed{48\ \text{m}^2}$. ✓
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
**(a)** Evaluate $\displaystyle\int_0^{\ln2}x\sinh x\,dx$. (3)

**(b)** For an integer $n\ge2$ prove the reduction formula
$$\int\sec^{n}x\,dx=\frac{\sec^{n-2}x\,\tan x}{n-1}+\frac{n-2}{n-1}\int\sec^{n-2}x\,dx.$$ (4)

**(c)** Hence evaluate $\displaystyle\int_0^{\pi/3}\sec^{3}x\,dx$. You may use $\displaystyle\int\sec x\,dx=\ln|\sec x+\tan x|+C$. (3)
        `,
        solution: String.raw`
**(a)** By parts with $u=x$, $dv=\sinh x\,dx$, $v=\cosh x$: ✓
$$\int x\sinh x\,dx=x\cosh x-\int\cosh x\,dx=x\cosh x-\sinh x.$$ ✓
Since $\cosh(\ln2)=\dfrac{2+\frac12}{2}=\dfrac54$ and $\sinh(\ln2)=\dfrac{2-\frac12}{2}=\dfrac34$:
$$\int_0^{\ln2}x\sinh x\,dx=\left(\frac54\ln2-\frac34\right)-(0-0)=\frac54\ln2-\frac34.$$ ✓

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
        number: 10, label: 'B4', title: 'Improper integrals', section: 'Section B · §10', marks: 10,
        prompt: String.raw`
**(a)** Explain why the integral $\displaystyle\int_{-2}^{3}\frac{dx}{x^{2}-1}$ is called improper, and say how it must be treated. (2)

**(b)** Determine whether the improper integral
$$\int_0^{4}\frac{dx}{\sqrt{x\,(4-x)}}$$
converges or diverges. If it converges, find its value. HINT: complete the square in $x(4-x)$. (8)
        `,
        solution: String.raw`
**(a)** The integrand $\dfrac{1}{x^2-1}=\dfrac{1}{(x-1)(x+1)}$ is **undefined and unbounded at $x=1$ and at $x=-1$**, and both points lie **inside** $[-2,3]$. ✓ So the Fundamental Theorem cannot be used directly: the interval must be split at each discontinuity into pieces such as $\int_{-2}^{-1}$, $\int_{-1}^{1}$ (split again at an interior point, e.g. $0$) and $\int_1^3$, each written as a one-sided limit, and the integral converges only if **every** piece converges. ✓

**(b)** The integrand is unbounded at **both** endpoints $x=0$ and $x=4$, so split at the midpoint $x=2$: ✓
$$\int_0^4=\int_0^2+\int_2^4,$$
and each piece is a limit ($t\to0^+$ for the first, $s\to4^-$ for the second). Now $x(4-x)=4x-x^2=4-(x-2)^2$, so ✓
$$\int\frac{dx}{\sqrt{4-(x-2)^2}}=\arcsin\frac{x-2}{2}.$$ ✓
First piece: $\displaystyle\int_0^2=\lim_{t\to0^+}\Big[\arcsin\frac{x-2}{2}\Big]_t^2=\arcsin0-\arcsin(-1)=\frac\pi2.$ ✓✓
Second piece: $\displaystyle\int_2^4=\lim_{s\to4^-}\Big[\arcsin\frac{x-2}{2}\Big]_2^s=\arcsin1-\arcsin0=\frac\pi2.$ ✓✓
Both pieces converge, so the integral **converges** and ✓
$$\int_0^4\frac{dx}{\sqrt{x(4-x)}}=\pi.$$
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
$$y^{2}\,\frac{dy}{dx}=\frac{x}{\sqrt{1+x^{2}}}.$$

**(a)** State the order of the equation, and show that it is separable by writing it in the form $M(x)\,dx+N(y)\,dy=0$. (2)

**(b)** Find the general solution of the equation. (3)

**(c)** Find the particular solution given that $y=1$ when $x=0$. (3)
        `,
        solution: String.raw`
**(a)** The highest derivative is $\frac{dy}{dx}$, so the equation has **order $1$**. Multiplying by $dx$: ✓
$$-\frac{x}{\sqrt{1+x^2}}\,dx+y^2\,dy=0,$$
which has the form $M(x)\,dx+N(y)\,dy=0$, so it is **separable**. ✓

**(b)** Integrate $y^2\,dy=\dfrac{x}{\sqrt{1+x^2}}\,dx$. With $w=1+x^2$, $dw=2x\,dx$, the right side is $\frac12\int w^{-1/2}dw=\sqrt{1+x^2}$: ✓
$$\frac{y^3}{3}=\sqrt{1+x^2}+C\ \Longrightarrow\ y^3=3\sqrt{1+x^2}+K\quad(K=3C).$$ ✓✓

**(c)** With $y(0)=1$: $1=3\cdot1+K$, so $K=-2$. ✓✓
$$y^3=3\sqrt{1+x^2}-2\ \Longrightarrow\ y=\left(3\sqrt{1+x^2}-2\right)^{1/3}.$$ ✓
        `
      },
      {
        number: 14, label: 'B8', title: 'Differential equations — linear', section: 'Section B · §12.3', marks: 10,
        prompt: String.raw`
Given the differential equation
$$x\frac{dy}{dx}+2y=e^{x},\qquad x>0.$$

**(a)** Show that this is a linear differential equation by writing it in standard form. (2)

**(b)** Find the integrating factor $e^{\int P(x)\,dx}$. (3)

**(c)** Hence find the general solution of the differential equation, and then the particular solution satisfying $y=3$ when $x=1$. (5)
        `,
        solution: String.raw`
**(a)** Divide through by $x$ (allowed since $x>0$):
$$\frac{dy}{dx}+\frac{2}{x}\,y=\frac{e^{x}}{x}.$$ ✓✓
This has the form $\frac{dy}{dx}+P(x)y=Q(x)$ with $P(x)=\dfrac2x$ and $Q(x)=\dfrac{e^x}{x}$, so it is **linear**.

**(b)** $\displaystyle\int\frac2x\,dx=2\ln x$ (as $x>0$), so ✓✓
$$\mu(x)=e^{2\ln x}=x^{2}.$$ ✓

**(c)** Multiply the standard form by $\mu=x^2$; the left side becomes an exact derivative: ✓
$$\frac{d}{dx}\left(x^2y\right)=x^2\cdot\frac{e^x}{x}=xe^x.$$ ✓
By parts ($u=x$, $dv=e^xdx$): $\displaystyle\int xe^xdx=xe^x-e^x+C=(x-1)e^x+C$. Hence the **general solution** is ✓
$$x^2y=(x-1)e^x+C\ \Longrightarrow\ y=\frac{(x-1)e^x+C}{x^2}.$$
With $y(1)=3$: $3=\dfrac{0+C}{1}$, so $C=3$. ✓ The **particular solution** is ✓
$$y=\frac{(x-1)e^{x}+3}{x^{2}}.$$
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
    topics: 'A wire cut into a square and a circle (§6.6), products of sines and cosines with different arguments (§9.4), the cosⁿ reduction formula (§9.2), improper integral with a substitution, monotone sequences and the Root Test, Maclaurin and Taylor series, verifying solutions, separable and linear ODEs.',
    instructions: [
      'Section A (Questions A1–A6): multiple choice. Choose ONE answer for each question. [14 marks]',
      'Section B (Questions B1–B8): give FULL solutions and show ALL workings. [76 marks]',
      'No calculators are allowed.',
      'You have 2 hours in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: 'A1', title: 'A constrained maximum on a closed interval', section: 'Section A · §6.6', marks: 2,
        prompt: String.raw`
Two non-negative numbers $x$ and $y$ satisfy $x+y=10$. The largest possible value of $xy^{2}$ is

- **A.** $125$.
- **B.** $\dfrac{2000}{27}$.
- **C.** $\dfrac{4000}{27}$.
- **D.** $\dfrac{1000}{27}$.
- **E.** $0$.
        `,
        solution: String.raw`
**Answer: C.** ✓✓

Eliminate $x=10-y$: the objective is $f(y)=(10-y)y^2=10y^2-y^3$ with domain $0\le y\le10$ (so that $x\ge0$).  Then $f'(y)=20y-3y^2=y(20-3y)=0$ gives $y=0$ or $y=\frac{20}{3}$. Closed Interval Method:
$$f(0)=0,\qquad f\!\left(\tfrac{20}3\right)=\tfrac{10}{3}\cdot\tfrac{400}{9}=\tfrac{4000}{27},\qquad f(10)=0.$$ 
So the maximum is $\dfrac{4000}{27}\approx148.1$ (at $x=\frac{10}3$, $y=\frac{20}3$).

- **A** is the value at $x=y=5$ (not the maximum). **B** swaps the roles of $x$ and $y$ ($x=\frac{20}3$, $y=\frac{10}3$). **D** is an arithmetic slip. **E** is the value at the endpoints, which is the minimum.
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
        number: 7, label: 'B1', title: 'Optimization — a wire cut into a square and a circle', section: 'Section B · §6.6', marks: 11,
        prompt: String.raw`
A piece of wire of length $24$ cm is cut into two pieces. One piece, of length $x$ cm, is bent into a **square**; the other piece is bent into a **circle**. Let $A$ be the total area enclosed by the square and the circle.

**(a)** Draw a labelled diagram. Express the side of the square and the radius of the circle in terms of $x$, and hence show that
$$A(x)=\frac{x^{2}}{16}+\frac{(24-x)^{2}}{4\pi}.$$ (4)

**(b)** State the domain of $A$. (1)

**(c)** Find the critical number(s) of $A$. (3)

**(d)** Use the Closed Interval Method to find the absolute maximum and absolute minimum values of $A$, and say how the wire must be cut in each case. (3)
        `,
        solution: String.raw`
**(a)** *Diagram:* a wire of total length $24$ split into a piece $x$ (formed into a square) and a piece $24-x$ (formed into a circle). ✓

The square has perimeter $x$, so its side is $\dfrac x4$ and its area is $\dfrac{x^2}{16}$. ✓ The circle has circumference $24-x=2\pi r$, so $r=\dfrac{24-x}{2\pi}$ and its area is ✓
$$\pi r^2=\pi\cdot\frac{(24-x)^2}{4\pi^2}=\frac{(24-x)^2}{4\pi}.$$
Adding the two areas gives $A(x)=\dfrac{x^2}{16}+\dfrac{(24-x)^2}{4\pi}$. ✓

**(b)** The piece for the square can be anything from none to all of the wire: the domain is the closed interval $[0,24]$. ✓

**(c)** $A'(x)=\dfrac x8-\dfrac{24-x}{2\pi}$ exists everywhere, so set $A'(x)=0$: ✓✓
$$\frac x8=\frac{24-x}{2\pi}\ \Longrightarrow\ \pi x=4(24-x)\ \Longrightarrow\ x=\frac{96}{\pi+4}.$$ ✓
(This lies in $[0,24]$ since $\frac{96}{\pi+4}\approx13.4$.)

**(d)** $A$ is continuous on $[0,24]$, so by the Extreme Value Theorem the absolute extrema are among the values at the critical number and endpoints: ✓
$$A(0)=\frac{576}{4\pi}=\frac{144}{\pi}\approx45.8,\qquad A(24)=\frac{576}{16}=36,\qquad A\!\left(\frac{96}{\pi+4}\right)=\frac{576+144\pi}{(\pi+4)^2}=\frac{144}{\pi+4}\approx20.2.$$ ✓
- **Absolute maximum:** $\dfrac{144}{\pi}$ cm², when $x=0$ — **all the wire is used for the circle**.
- **Absolute minimum:** $\dfrac{144}{\pi+4}$ cm², when $x=\dfrac{96}{\pi+4}$ cm for the square (and $\dfrac{24\pi}{\pi+4}$ cm for the circle). ✓
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
**(a)** Evaluate $\displaystyle\int_0^{1}x\sinh(2x)\,dx$. Give your answer in terms of $e$. (3)

**(b)** For an integer $n\ge2$ prove the reduction formula
$$\int\cos^{n}x\,dx=\frac{\cos^{n-1}x\,\sin x}{n}+\frac{n-1}{n}\int\cos^{n-2}x\,dx.$$ (4)

**(c)** Hence evaluate $\displaystyle\int_0^{\pi/2}\cos^{6}x\,dx.$ (3)
        `,
        solution: String.raw`
**(a)** By parts with $u=x$, $dv=\sinh(2x)\,dx$, so $du=dx$, $v=\dfrac{\cosh2x}{2}$: ✓
$$\int x\sinh2x\,dx=\frac{x\cosh2x}{2}-\frac12\int\cosh2x\,dx=\frac{x\cosh2x}{2}-\frac{\sinh2x}{4}.$$ ✓
$$\int_0^1x\sinh2x\,dx=\frac{\cosh2}{2}-\frac{\sinh2}{4}=\frac{e^2+e^{-2}}{4}-\frac{e^2-e^{-2}}{8}=\frac{e^{2}+3e^{-2}}{8}.$$ ✓

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
        number: 10, label: 'B4', title: 'Improper integrals', section: 'Section B · §10', marks: 10,
        prompt: String.raw`
**(a)** Explain why the integral $\displaystyle\int_0^{\infty}\frac{dx}{x}$ is called improper, and say how it must be treated. (2)

**(b)** Determine whether the improper integral
$$\int_0^{\infty}e^{-\sqrt{x}}\,dx$$
converges or diverges. If it converges, find its value. HINT: substitute $u=\sqrt x$, then integrate by parts. (8)
        `,
        solution: String.raw`
**(a)** It is improper for **two** reasons: the upper limit is infinite (Type I), and the integrand $\dfrac1x\to\infty$ as $x\to0^+$, so it is unbounded at the lower limit (Type II). ✓ The integral must be **split** at an interior point (say $x=1$) into $\int_0^1+\int_1^\infty$, each written as a limit, and it converges only if both pieces converge. (Here neither does.) ✓

**(b)** There is no vertical asymptote ($e^{-\sqrt x}\to1$ as $x\to0^+$), so the only issue is the infinite upper limit:
$$\int_0^\infty e^{-\sqrt x}dx=\lim_{t\to\infty}\int_0^te^{-\sqrt x}dx.$$ ✓
Substitute $u=\sqrt x$, so $x=u^2$, $dx=2u\,du$, with limits $u=0$ to $u=\sqrt t$: ✓✓
$$\int_0^te^{-\sqrt x}dx=2\int_0^{\sqrt t}u\,e^{-u}\,du.$$
By parts ($u$, $e^{-u}du$): $\displaystyle\int ue^{-u}du=-ue^{-u}-e^{-u}$. ✓✓ So
$$\int_0^te^{-\sqrt x}dx=2\Big[-(u+1)e^{-u}\Big]_0^{\sqrt t}=2-2\left(\sqrt t+1\right)e^{-\sqrt t}.$$ ✓
Let $s=\sqrt t\to\infty$. Then $\dfrac{s+1}{e^{s}}\to0$ by l'Hôpital's rule ($\frac{1}{e^s}\to0$). ✓ So the limit exists: the integral **converges** and ✓
$$\int_0^\infty e^{-\sqrt x}dx=2.$$
        `
      },
      {
        number: 11, label: 'B5', title: 'Sequences and series', section: 'Section B · §11.1–11.3', marks: 9,
        prompt: String.raw`
**(a)** The sequence $\{a_n\}$ is defined by $a_1=1$ and $a_{n+1}=\dfrac{a_n}{2}+3$ for $n\ge1$. Show, by induction or otherwise, that $a_n<6$ for all $n$ and that $\{a_n\}$ is increasing. Hence explain why the sequence converges, and find its limit. (4)

**(b)** Using (a) or otherwise, decide (with reasons) if the following series converges or diverges.
$$\sum_{n=1}^{\infty}a_n$$ (2)

**(c)** Use the Root Test to decide whether the following series converges or diverges.
$$\sum_{n=1}^{\infty}\frac{n^{2}}{\left(n^{2}+1\right)^{n}}$$ (3)
        `,
        solution: String.raw`
**(a)** *Bounded above by $6$:* $a_1=1<6$. If $a_n<6$, then $a_{n+1}=\dfrac{a_n}2+3<3+3=6$. By induction $a_n<6$ for all $n$. ✓

*Increasing:* $a_{n+1}-a_n=3-\dfrac{a_n}{2}>3-3=0$ because $a_n<6$. So $a_{n+1}>a_n$. ✓

A sequence that is **increasing and bounded above converges** (Monotonic Sequence Theorem). ✓ Let $L=\lim a_n$; then $a_{n+1}\to L$ too, so $L=\dfrac L2+3$, which gives $L=6$. ✓

**(b)** Since $a_n\to6\neq0$, the **Test for Divergence** shows that $\sum a_n$ **diverges**. ✓✓

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
        number: 13, label: 'B7', title: 'Differential equations — verifying and separating', section: 'Section B · §12.0, §12.1', marks: 8,
        prompt: String.raw`
**(a)** State the order of the differential equation $y''+4y=0$, and show that $y=A\cos2x+B\sin2x$ is a solution for all constants $A$ and $B$. (2)

**(b)** Given the differential equation
$$\frac{dy}{dx}=e^{x-y},$$
write it in the form $M(x)\,dx+N(y)\,dy=0$ and find its general solution. (3)

**(c)** Find the particular solution of the equation in (b) given that $y=1$ when $x=0$. (3)
        `,
        solution: String.raw`
**(a)** The highest derivative is $y''$, so the equation is of **order $2$**. For $y=A\cos2x+B\sin2x$: ✓
$$y'=-2A\sin2x+2B\cos2x,\qquad y''=-4A\cos2x-4B\sin2x=-4y,$$
so $y''+4y=0$ for all $A,B$. ✓

**(b)** Since $e^{x-y}=e^x\cdot e^{-y}$, the equation is separable: $e^{y}\,dy=e^{x}\,dx$, i.e. $e^x\,dx-e^y\,dy=0$. ✓ Integrate both sides: ✓
$$e^{y}=e^{x}+C\ \Longrightarrow\ y=\ln\left(e^{x}+C\right).$$ ✓

**(c)** With $y(0)=1$: $e^1=e^0+C$, so $C=e-1$. ✓✓
$$y=\ln\left(e^{x}+e-1\right).$$ ✓
        `
      },
      {
        number: 14, label: 'B8', title: 'Differential equations — linear', section: 'Section B · §12.3', marks: 10,
        prompt: String.raw`
Given the differential equation
$$\left(1+x^{2}\right)\frac{dy}{dx}+4xy=4x.$$

**(a)** Show that this is a linear differential equation by writing it in standard form. (2)

**(b)** Find the integrating factor $e^{\int P(x)\,dx}$. (3)

**(c)** Hence find the general solution of the differential equation, and then the particular solution satisfying $y=3$ when $x=0$. (5)
        `,
        solution: String.raw`
**(a)** Divide through by $1+x^2$ (never zero):
$$\frac{dy}{dx}+\frac{4x}{1+x^2}\,y=\frac{4x}{1+x^2}.$$ ✓✓
This has the form $\frac{dy}{dx}+P(x)y=Q(x)$ with $P(x)=Q(x)=\dfrac{4x}{1+x^2}$, so it is **linear**.

**(b)** With $w=1+x^2$, $dw=2x\,dx$: $\displaystyle\int\frac{4x}{1+x^2}dx=2\int\frac{dw}{w}=2\ln\left(1+x^2\right)$. ✓✓ Hence
$$\mu(x)=e^{2\ln(1+x^2)}=\left(1+x^2\right)^2.$$ ✓

**(c)** Multiply the standard form by $\mu=(1+x^2)^2$; the left side becomes an exact derivative: ✓
$$\frac{d}{dx}\left[\left(1+x^2\right)^2y\right]=\left(1+x^2\right)^2\cdot\frac{4x}{1+x^2}=4x\left(1+x^2\right)=4x+4x^3.$$ ✓
Integrate: $\left(1+x^2\right)^2y=2x^2+x^4+C=\left(1+x^2\right)^2-1+C$, so the **general solution** is ✓
$$y=\frac{x^4+2x^2+C}{\left(1+x^2\right)^2}=1+\frac{C-1}{\left(1+x^2\right)^2}.$$
With $y(0)=3$: $3=C$. ✓ The **particular solution** is ✓
$$y=\frac{x^4+2x^2+3}{\left(1+x^2\right)^2}=1+\frac{2}{\left(1+x^2\right)^2}.$$
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
    topics: 'Parabola rectangle and a closed cylindrical tin (§6.6), exponential and logarithmic substitutions and odd powers of cosine (§9.1, §9.4), a hyperbolic reduction formula (§9.2), improper integral with an interior discontinuity and a cyclic integral, Integral Test, interval of convergence and a Maclaurin series from eˣ, separable and linear ODEs.',
    instructions: [
      'Section A (Questions A1–A6): multiple choice. Choose ONE answer for each question. [14 marks]',
      'Section B (Questions B1–B8): give FULL solutions and show ALL workings. [76 marks]',
      'No calculators are allowed.',
      'You have 2 hours in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: 'A1', title: 'A rectangle under a parabola', section: 'Section A · §6.6', marks: 2,
        prompt: String.raw`
A rectangle has its base on the $x$-axis and its two upper vertices on the parabola $y=12-x^{2}$, symmetric about the $y$-axis. Let the upper right vertex be $(x,\,12-x^{2})$ with $x\ge0$. Which choice gives the area of the rectangle as a function of $x$, together with its correct domain?

- **A.** $A(x)=2x\left(12-x^{2}\right)$, $\;0\le x\le2\sqrt3$.
- **B.** $A(x)=x\left(12-x^{2}\right)$, $\;0\le x\le2\sqrt3$.
- **C.** $A(x)=2x\left(12-x^{2}\right)$, $\;0\le x\le12$.
- **D.** $A(x)=2x\left(12-x^{2}\right)$, $\;-2\sqrt3\le x\le2\sqrt3$.
- **E.** $A(x)=2x^{2}(12-x)$, $\;0\le x\le12$.
        `,
        solution: String.raw`
**Answer: A.** ✓✓

The vertices are $(\pm x,0)$ and $(\pm x,\,12-x^2)$, so the rectangle has width $2x$ and height $12-x^{2}$. Hence $A(x)=2x\left(12-x^{2}\right)$.  The height cannot be negative, so $12-x^2\ge0$, i.e. $x\le2\sqrt3$; and $x\ge0$ because it is a half-width. The domain is $\left[0,\,2\sqrt3\right]$.

- **B** forgets that the width is $2x$. **C** allows a negative height. **D** allows a negative half-width. **E** is the wrong expression.
        `
      },
      {
        number: 2, label: 'A2', title: 'A power of sine', section: 'Section A · §9.4', marks: 3,
        prompt: String.raw`
$$\int\sin^{3}x\,dx=$$

- **A.** $\dfrac{\sin^{4}x}{4}+C$.
- **B.** $\cos x-\dfrac{\cos^{3}x}{3}+C$.
- **C.** $-\cos x+\dfrac{\cos^{3}x}{3}+C$.
- **D.** $-\cos x-\dfrac{\cos^{3}x}{3}+C$.
- **E.** $-\dfrac{\cos^{3}x}{3}+C$.
        `,
        solution: String.raw`
**Answer: C.** ✓✓✓

The power of $\sin x$ is odd, so save one factor $\sin x$ and write $\sin^2x=1-\cos^2x$:
$$\int\sin^{3}x\,dx=\int\left(1-\cos^{2}x\right)\sin x\,dx.$$
Let $u=\cos x$, $du=-\sin x\,dx$: $\displaystyle-\int\left(1-u^{2}\right)du=-u+\frac{u^{3}}{3}+C=-\cos x+\frac{\cos^{3}x}{3}+C.$

- **A** treats $\sin^3x$ as if it were $\sin x$ times a derivative of $\sin x$. **B** has the wrong sign. **D** has a sign error on the cubic term. **E** drops the $-\cos x$ term.
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
The solution of $\dfrac{dy}{dx}=2xy$ with $y(0)=3$ is

- **A.** $y=3e^{2x}$.
- **B.** $y=e^{x^{2}}+2$.
- **C.** $y=3e^{x}$.
- **D.** $y=3x^{2}$.
- **E.** $y=3e^{x^{2}}$.
        `,
        solution: String.raw`
**Answer: E.** ✓✓

Separate: $\dfrac{dy}{y}=2x\,dx$, so $\ln|y|=x^{2}+C$ and $y=Ae^{x^{2}}$. ✓ With $y(0)=3$ we get $A=3$, so $y=3e^{x^{2}}$. ✓

- **A** and **C** have the wrong exponent. **B** is not a solution: its derivative is $2xe^{x^2}$, which is not $2x(e^{x^2}+2)$. **D** gives $y'=6x\neq2x\cdot3x^2$.
        `
      },
      {
        number: 7, label: 'B1', title: 'Optimization — a closed cylindrical tin', section: 'Section B · §6.6', marks: 11,
        prompt: String.raw`
A manufacturer makes closed cylindrical tins, each of volume $54\pi\ \text{cm}^{3}$. A tin has radius $r$ cm and height $h$ cm; the top, bottom and side are all made from the same material. The manufacturer wants the tin with the **smallest total surface area** $S$.

**(a)** Draw a labelled diagram. Use the volume constraint to eliminate $h$, and show that $$S(r)=2\pi r^{2}+\frac{108\pi}{r}.$$ (4)

**(b)** State the domain of $S$. (1)

**(c)** Find the critical number(s) of $S$. (3)

**(d)** Use the Second Derivative Test to show that the critical number gives the absolute minimum. State the dimensions of the best tin and the minimum surface area. (3)
        `,
        solution: String.raw`
**(a)** *Diagram:* a cylinder with radius $r$ and height $h$; the surface consists of a top disc, a bottom disc and a curved side. ✓

The volume constraint is $\pi r^{2}h=54\pi$, so $h=\dfrac{54}{r^{2}}$. ✓ The objective function is the total surface area: two discs plus the side, ✓
$$S=2\pi r^{2}+2\pi rh=2\pi r^{2}+2\pi r\cdot\frac{54}{r^{2}}=2\pi r^{2}+\frac{108\pi}{r}.$$ ✓

**(b)** The radius must be positive and there is no upper restriction, so the domain is the **open interval** $(0,\infty)$. ✓

**(c)** $S'(r)=4\pi r-\dfrac{108\pi}{r^{2}}=\dfrac{4\pi\left(r^{3}-27\right)}{r^{2}}$. It is defined for all $r>0$, so critical numbers come from $S'(r)=0$: ✓✓
$$r^{3}=27\ \Longrightarrow\ r=3.$$ ✓

**(d)** $S''(r)=4\pi+\dfrac{216\pi}{r^{3}}>0$ for every $r>0$, so $S$ is concave up on its whole domain. ✓ Hence the critical number $r=3$ gives the **absolute minimum**. ✓ (Theorem 6.11 in Study Guide 1 gives a *local* minimum; because $S$ is concave up on its whole domain, the graph lies above its tangent line at $r=3$, so the local minimum is the absolute minimum.) The height is $h=\dfrac{54}{9}=6$ (so $h=2r$), and ✓
$$S(3)=2\pi(9)+\frac{108\pi}{3}=18\pi+36\pi=\boxed{54\pi\ \text{cm}^{2}}.$$
        `
      },
      {
        number: 8, label: 'B2', title: 'Inverse-trigonometric and logarithmic integrals; a power of cosine', section: 'Section B · §9.1, §9.4', marks: 9,
        prompt: String.raw`
**(a)** Evaluate

**(i)** $\displaystyle\int_{0}^{\frac12\ln3}\frac{e^{x}}{\sqrt{4-e^{2x}}}\,dx$ (3)

**(ii)** $\displaystyle\int_{1}^{e^{2}}\frac{dx}{x\,(1+\ln x)}$ (2)

**(b)** Evaluate $\displaystyle\int_0^{\pi/2}\cos^{5}x\,dx.$ (4)
        `,
        solution: String.raw`
**(a)(i)** Let $u=e^{x}$, so $du=e^{x}dx$ and $e^{2x}=u^{2}$. When $x=0$, $u=1$; when $x=\frac12\ln3$, $u=e^{\ln\sqrt3}=\sqrt3$. ✓
$$\int_{1}^{\sqrt3}\frac{du}{\sqrt{4-u^{2}}}=\Big[\arcsin\frac u2\Big]_{1}^{\sqrt3}$$ ✓
$$=\arcsin\frac{\sqrt3}{2}-\arcsin\frac12=\frac\pi3-\frac\pi6=\frac\pi6.$$ ✓

**(ii)** Let $u=1+\ln x$, so $du=\dfrac{dx}{x}$. When $x=1$, $u=1$; when $x=e^{2}$, $u=3$. ✓
$$\int_{1}^{3}\frac{du}{u}=\ln3-\ln1=\ln3.$$ ✓

**(b)** The power of $\cos x$ is odd, so save one factor $\cos x$ and write $\cos^{2}x=1-\sin^{2}x$: ✓
$$\int_0^{\pi/2}\cos^{5}x\,dx=\int_0^{\pi/2}\left(1-\sin^{2}x\right)^{2}\cos x\,dx.$$
Let $u=\sin x$, $du=\cos x\,dx$; $x=0\Rightarrow u=0$ and $x=\frac\pi2\Rightarrow u=1$. ✓
$$=\int_{0}^{1}\left(1-2u^{2}+u^{4}\right)du=\Big[u-\frac{2u^{3}}{3}+\frac{u^{5}}{5}\Big]_0^1=1-\frac23+\frac15=\frac{8}{15}.$$ ✓✓
        `
      },
      {
        number: 9, label: 'B3', title: 'Integration by parts; a hyperbolic reduction formula', section: 'Section B · §9.2', marks: 10,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_0^{1}x^{2}\sinh x\,dx$. Give your answer in terms of $e$. (3)

**(b)** For an integer $n\ge2$ let $I_n=\displaystyle\int\cosh^{n}x\,dx$. Prove the reduction formula
$$I_n=\frac{\cosh^{n-1}x\,\sinh x}{n}+\frac{n-1}{n}\,I_{n-2}.$$ (4)

**(c)** Hence evaluate $\displaystyle\int_0^{\ln 2}\cosh^{4}x\,dx.$ (3)
        `,
        solution: String.raw`
**(a)** Integrate by parts with $u=x^{2}$, $dv=\sinh x\,dx$, so $du=2x\,dx$ and $v=\cosh x$: ✓
$$\int x^{2}\sinh x\,dx=x^{2}\cosh x-2\int x\cosh x\,dx.$$
A second integration by parts ($u=x$, $dv=\cosh x\,dx$) gives $\displaystyle\int x\cosh x\,dx=x\sinh x-\cosh x$, so ✓
$$\int x^{2}\sinh x\,dx=x^{2}\cosh x-2x\sinh x+2\cosh x.$$
$$\int_0^1x^{2}\sinh x\,dx=\big(3\cosh1-2\sinh1\big)-2=\frac{e}{2}+\frac{5}{2e}-2,$$ ✓
using $\cosh1=\frac{e+e^{-1}}2$ and $\sinh1=\frac{e-e^{-1}}2$.

**(b)** Write $\cosh^{n}x=\cosh^{n-1}x\cdot\cosh x$ and take $u=\cosh^{n-1}x$, $dv=\cosh x\,dx$, so $du=(n-1)\cosh^{n-2}x\sinh x\,dx$ and $v=\sinh x$: ✓✓
$$I_n=\cosh^{n-1}x\sinh x-(n-1)\int\cosh^{n-2}x\,\sinh^{2}x\,dx.$$
Use $\sinh^{2}x=\cosh^{2}x-1$: ✓
$$I_n=\cosh^{n-1}x\sinh x-(n-1)\left(I_n-I_{n-2}\right).$$
Collect the $I_n$ terms: $nI_n=\cosh^{n-1}x\sinh x+(n-1)I_{n-2}$. Dividing by $n$ gives the formula. ∎ ✓

**(c)** Let $K_m=\displaystyle\int_0^{\ln2}\cosh^{m}x\,dx$. Since $e^{\ln2}=2$, $\cosh(\ln2)=\dfrac{2+\frac12}{2}=\dfrac54$ and $\sinh(\ln2)=\dfrac{2-\frac12}{2}=\dfrac34$, while $\sinh0=0$. By (b): ✓
$$K_2=\frac{\frac54\cdot\frac34}{2}+\frac12K_0=\frac{15}{32}+\frac{\ln2}{2}\qquad(K_0=\ln2),$$
$$K_4=\frac{\left(\frac54\right)^{3}\frac34}{4}+\frac34K_2=\frac{375}{1024}+\frac{45}{128}+\frac{3\ln2}{8}.$$ ✓
$$\int_0^{\ln2}\cosh^{4}x\,dx=\frac{735}{1024}+\frac{3}{8}\ln2.$$ ✓
        `
      },
      {
        number: 10, label: 'B4', title: 'Improper integrals', section: 'Section B · §10', marks: 10,
        prompt: String.raw`
**(a)** Explain why the integral $\displaystyle\int_{-2}^{\infty}\frac{dx}{(x+1)^{2}}$ is called improper, and say how it must be treated. (2)

**(b)** Determine whether the improper integral
$$\int_0^{\infty}e^{-x}\sin 2x\,dx$$
converges or diverges. If it converges, find its value. Justify every limit that you use. (8)
        `,
        solution: String.raw`
**(a)** There are **two** problems. The upper limit is infinite (Type I), and the integrand $\dfrac{1}{(x+1)^{2}}$ is undefined, and unbounded, at $x=-1$, which lies **inside** the interval $(-2,\infty)$ (Type II). ✓ The integral must therefore be split at $x=-1$ (and at a convenient point such as $0$ to isolate the infinite limit):
$$\int_{-2}^{-1}+\int_{-1}^{0}+\int_{0}^{\infty},$$
each part being defined as a limit; the original integral converges only if **every** part converges. ✓

**(b)** The upper limit is infinite, so the integral is $\displaystyle\lim_{t\to\infty}\int_0^{t}e^{-x}\sin2x\,dx$. ✓

Let $I=\displaystyle\int e^{-x}\sin2x\,dx$. Integrate by parts with $u=\sin2x$, $dv=e^{-x}dx$: ✓
$$I=-e^{-x}\sin2x+2\int e^{-x}\cos2x\,dx.$$
Integrate by parts again ($u=\cos2x$, $dv=e^{-x}dx$): $\displaystyle\int e^{-x}\cos2x\,dx=-e^{-x}\cos2x-2I$. ✓ Hence
$$I=-e^{-x}\sin2x-2e^{-x}\cos2x-4I\ \Longrightarrow\ I=-\frac{e^{-x}\left(\sin2x+2\cos2x\right)}{5}.$$ ✓✓
$$\int_0^{t}e^{-x}\sin2x\,dx=-\frac{e^{-t}\left(\sin2t+2\cos2t\right)}{5}+\frac25.$$ ✓
Since $\left|\sin2t+2\cos2t\right|\le3$, we have $\left|e^{-t}\left(\sin2t+2\cos2t\right)\right|\le3e^{-t}\to0$, so this term tends to $0$ by the **Squeeze Theorem**. ✓ The limit exists, so the integral **converges** and ✓
$$\int_0^{\infty}e^{-x}\sin2x\,dx=\frac25.$$
        `
      },
      {
        number: 11, label: 'B5', title: 'Sequences and series', section: 'Section B · §11.1–11.3', marks: 9,
        prompt: String.raw`
**(a)** Determine whether the sequence $\{a_n\}=\left\{\left(1-\dfrac{2}{n}\right)^{n}\right\}$ is convergent or divergent. If it is convergent, state to what value it converges. (3)

**(b)** Using (a) or otherwise, decide (with reasons) if the following series converges or diverges.
$$\sum_{n=3}^{\infty}\left(1-\frac{2}{n}\right)^{n}$$ (2)

**(c)** Use the Integral Test to decide whether the following series converges or diverges. Verify that the conditions of the test hold.
$$\sum_{n=2}^{\infty}\frac{1}{n(\ln n)^{2}}$$ (4)
        `,
        solution: String.raw`
**(a)** Take logarithms: $\ln a_n=n\ln\!\left(1-\dfrac2n\right)=\dfrac{\ln(1-2/n)}{1/n}$, which has the form $\frac00$. ✓ With $f(x)=\dfrac{\ln(1-2/x)}{1/x}$ and l'Hôpital's rule:
$$\lim_{x\to\infty}\frac{\ln(1-2/x)}{1/x}=\lim_{x\to\infty}\frac{\dfrac{2/x^{2}}{1-2/x}}{-1/x^{2}}=\lim_{x\to\infty}\frac{-2}{1-2/x}=-2.$$ ✓
By continuity of $e^{x}$, $a_n\to e^{-2}$. The sequence is **convergent with limit $e^{-2}$**. ✓

**(b)** Since $a_n\to e^{-2}\neq0$, the **Test for Divergence** shows the series **diverges**. ✓✓

**(c)** Let $f(x)=\dfrac{1}{x(\ln x)^{2}}$ on $[2,\infty)$. It is **positive** and **continuous**, and **decreasing** because the denominator $x(\ln x)^2$ is increasing for $x\ge2$. ✓ So the Integral Test applies. With $u=\ln x$:
$$\int_2^{\infty}\frac{dx}{x(\ln x)^{2}}=\lim_{t\to\infty}\left[-\frac{1}{\ln x}\right]_2^t=\lim_{t\to\infty}\left(\frac1{\ln2}-\frac{1}{\ln t}\right)=\frac{1}{\ln2}.$$ ✓✓
The integral converges, so the series **converges** by the Integral Test. ✓
        `
      },
      {
        number: 12, label: 'B6', title: 'Power series and a Maclaurin series', section: 'Section B · §11.4, §11.6', marks: 9,
        prompt: String.raw`
**(a)** Find the radius of convergence and the interval of convergence of the power series
$$\sum_{n=1}^{\infty}\frac{(x+3)^{n}}{\sqrt n\;2^{n}}.$$ (5)

**(b)** Use the Maclaurin series of $e^{x}$ to find the Maclaurin series of $f(x)=\dfrac{e^{x}-1}{x}$ (write the first three terms and the general term). Hence evaluate $\displaystyle\sum_{n=0}^{\infty}\frac{1}{(n+1)!}$. (4)
        `,
        solution: String.raw`
**(a)** **Ratio Test.** With $a_n=\dfrac{(x+3)^n}{\sqrt n\,2^n}$,
$$\left|\frac{a_{n+1}}{a_n}\right|=\sqrt{\frac{n}{n+1}}\cdot\frac{|x+3|}{2}\ \longrightarrow\ \frac{|x+3|}{2}.$$ ✓
The series converges when $|x+3|<2$, so the **radius of convergence is $R=2$** and the series converges on $(-5,-1)$. ✓✓

**Endpoints.** At $x=-1$ the series is $\displaystyle\sum\frac{1}{\sqrt n}$, a $p$-series with $p=\frac12\le1$, so it **diverges**. At $x=-5$ it is $\displaystyle\sum\frac{(-1)^n}{\sqrt n}$; the terms $\frac1{\sqrt n}$ are decreasing and tend to $0$, so it **converges** by the Alternating Series Test. ✓

**Interval of convergence: $[-5,-1)$.** ✓

**(b)** $e^{x}=\displaystyle\sum_{n=0}^{\infty}\frac{x^{n}}{n!}$, so $e^{x}-1=\displaystyle\sum_{n=1}^{\infty}\frac{x^{n}}{n!}$. Dividing by $x$: ✓
$$f(x)=\sum_{n=1}^{\infty}\frac{x^{n-1}}{n!}=\sum_{n=0}^{\infty}\frac{x^{n}}{(n+1)!}=1+\frac{x}{2}+\frac{x^{2}}{6}+\cdots$$ ✓
This holds for all $x$ (and $f(0)=1$ is the constant term). At $x=1$, $f(1)=e-1$, so ✓
$$\sum_{n=0}^{\infty}\frac{1}{(n+1)!}=e-1.$$ ✓
        `
      },
      {
        number: 13, label: 'B7', title: 'Differential equations — separable', section: 'Section B · §12.1', marks: 8,
        prompt: String.raw`
Given the differential equation
$$\frac{dy}{dx}=2x\left(1+y^{2}\right).$$

**(a)** State the order of the equation, and show that it is separable by writing it in the form $M(x)\,dx+N(y)\,dy=0$. (2)

**(b)** Find the general solution of the equation. (3)

**(c)** Find the particular solution given that $y=1$ when $x=0$, and state the largest interval containing $x=0$ on which this solution is defined. (3)
        `,
        solution: String.raw`
**(a)** The highest derivative is $\frac{dy}{dx}$, so the equation has **order $1$**. Dividing by $1+y^{2}$ and multiplying by $dx$: ✓
$$-2x\,dx+\frac{1}{1+y^{2}}\,dy=0,$$
which has the form $M(x)\,dx+N(y)\,dy=0$ with $M=-2x$ and $N=\dfrac{1}{1+y^2}$, so it is **separable**. ✓

**(b)** Integrate $\dfrac{dy}{1+y^{2}}=2x\,dx$: ✓
$$\arctan y=x^{2}+C.$$ ✓
Hence the general solution is $y=\tan\!\left(x^{2}+C\right)$. ✓

**(c)** With $y(0)=1$: $\arctan1=C$, so $C=\dfrac\pi4$. ✓✓ The particular solution is
$$y=\tan\!\left(x^{2}+\frac\pi4\right).$$
The tangent is defined while $x^{2}+\frac\pi4<\frac\pi2$, i.e. $x^{2}<\frac\pi4$, so the largest interval containing $0$ is $\left(-\dfrac{\sqrt\pi}{2},\,\dfrac{\sqrt\pi}{2}\right)$. ✓
        `
      },
      {
        number: 14, label: 'B8', title: 'Differential equations — linear', section: 'Section B · §12.3', marks: 10,
        prompt: String.raw`
Given the differential equation
$$\sin x\,\frac{dy}{dx}+y\cos x=\sin 2x,\qquad 0<x<\pi.$$

**(a)** Show that this is a linear differential equation by writing it in standard form. (2)

**(b)** Find the integrating factor $e^{\int P(x)\,dx}$. (3)

**(c)** Hence find the general solution of the differential equation, and then the particular solution satisfying $y=3$ when $x=\dfrac\pi2$. (5)
        `,
        solution: String.raw`
**(a)** Divide through by $\sin x$ (positive on the interval) and use $\sin2x=2\sin x\cos x$:
$$\frac{dy}{dx}+(\cot x)\,y=2\cos x.$$ ✓✓
This has the form $\frac{dy}{dx}+P(x)y=Q(x)$ with $P(x)=\cot x$ and $Q(x)=2\cos x$, so it is **linear**.

**(b)** $\displaystyle\int\cot x\,dx=\ln|\sin x|$, so ✓✓
$$\mu(x)=e^{\ln\sin x}=\sin x\qquad(\sin x>0\text{ on the interval}).$$ ✓

**(c)** Multiply the standard form by $\mu=\sin x$; the left side is an exact derivative: ✓
$$\frac{d}{dx}\big(y\sin x\big)=2\sin x\cos x=\sin2x.$$ ✓
Integrate: $y\sin x=\sin^{2}x+C$, so the **general solution** is ✓
$$y=\sin x+\frac{C}{\sin x}.$$
With $y\!\left(\frac\pi2\right)=3$: $3=1+C$, so $C=2$. ✓ The **particular solution** is ✓
$$y=\sin x+\frac{2}{\sin x}.$$
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
    topics: 'Norman window and a rectangle in a semicircle (§6.6), inverse-sine and logarithmic integrals and products of sines (§9.1, §9.4), reduction formula for xⁿ sin x (§9.2), improper integral with a substitution, alternating series, power series from 1/(1+2x) and sin²x, verifying solutions, separable and linear ODEs.',
    instructions: [
      'Section A (Questions A1–A6): multiple choice. Choose ONE answer for each question. [14 marks]',
      'Section B (Questions B1–B8): give FULL solutions and show ALL workings. [76 marks]',
      'No calculators are allowed.',
      'You have 2 hours in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: 'A1', title: 'A window of fixed perimeter', section: 'Section A · §6.6', marks: 2,
        prompt: String.raw`
A window is made from a rectangle topped by a semicircle whose diameter is the top side of the rectangle. The rectangle has width $2r$ and height $h$. The total length of the boundary of the window (the bottom edge, the two vertical sides and the semicircular arc) is $12$ m. Which choice gives the area of the window as a function of $r$, together with its correct domain?

- **A.** $A(r)=12r-(2+\pi)r^{2}$, $\;0\le r\le\dfrac{12}{2+\pi}$.
- **B.** $A(r)=12r-\left(2+\dfrac\pi2\right)r^{2}$, $\;0\le r\le6$.
- **C.** $A(r)=12r-\left(2+\dfrac\pi2\right)r^{2}$, $\;0\le r\le\dfrac{12}{2+\pi}$.
- **D.** $A(r)=6r-\left(1+\dfrac\pi4\right)r^{2}$, $\;0\le r\le\dfrac{12}{2+\pi}$.
- **E.** $A(r)=12r-\left(2+\dfrac\pi2\right)r^{2}$, $\;0\le r\le\dfrac{12}{\pi}$.
        `,
        solution: String.raw`
**Answer: C.** ✓✓

The boundary is $2r+2h+\pi r=12$, so $h=\dfrac{12-2r-\pi r}{2}$. The area is the rectangle plus the semicircle:
$$A=2rh+\frac{\pi r^{2}}{2}=r\left(12-2r-\pi r\right)+\frac{\pi r^{2}}{2}=12r-\left(2+\frac\pi2\right)r^{2}.$$ ✓
The height must satisfy $h\ge0$, i.e. $12-(2+\pi)r\ge0$, so $r\le\dfrac{12}{2+\pi}$. ✓

- **A** uses the wrong coefficient (the semicircle's contribution is mishandled). **B** and **E** have the wrong upper bound on $r$. **D** halves every term.
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
        number: 7, label: 'B1', title: 'Optimization — a rectangle inscribed in a semicircle', section: 'Section B · §6.6', marks: 11,
        prompt: String.raw`
A rectangle is inscribed in a semicircle of radius $10$ cm: one side of the rectangle lies along the diameter, and the two upper vertices lie on the arc. Let $(x,y)$, with $x\ge0$, be the upper right vertex, so the rectangle has width $2x$ and height $y$. We want the rectangle of **largest area**.

**(a)** Draw a labelled diagram. Express $y$ in terms of $x$, and hence show that the area is $$A(x)=2x\sqrt{100-x^{2}}.$$ (4)

**(b)** State the domain of $A$. (1)

**(c)** Find the critical number(s) of $A$ in the interior of the domain. (3)

**(d)** Use the Closed Interval Method to find the dimensions of the rectangle of largest area, and that area. (3)
        `,
        solution: String.raw`
**(a)** *Diagram:* a semicircle of radius $10$ centred at the origin, with a rectangle whose base lies on the diameter from $(-x,0)$ to $(x,0)$ and whose upper vertices are $(\pm x,y)$ on the arc. ✓

The vertex $(x,y)$ lies on the circle $x^{2}+y^{2}=100$ with $y\ge0$, so $y=\sqrt{100-x^{2}}$. ✓✓ The area is width times height:
$$A=2x\,y=2x\sqrt{100-x^{2}}.$$ ✓

**(b)** The half-width satisfies $0\le x\le10$, so the domain is the **closed interval** $[0,10]$. ✓

**(c)** Using the product and chain rules, for $0<x<10$: ✓
$$A'(x)=2\sqrt{100-x^{2}}-\frac{2x^{2}}{\sqrt{100-x^{2}}}=\frac{2\left(100-2x^{2}\right)}{\sqrt{100-x^{2}}}.$$ ✓
$A'(x)=0$ when $100-2x^{2}=0$, i.e. $x=\sqrt{50}=5\sqrt2$. ($A'$ is undefined only at the endpoint $x=10$.) ✓

**(d)** $A$ is continuous on $[0,10]$, so compare the critical number and the endpoints: ✓
$$A(0)=0,\qquad A\!\left(5\sqrt2\right)=2\left(5\sqrt2\right)\left(5\sqrt2\right)=100,\qquad A(10)=0.$$ ✓
The absolute maximum is $\boxed{100\ \text{cm}^{2}}$. The rectangle has width $2x=10\sqrt2$ cm and height $y=\sqrt{50}=5\sqrt2$ cm. ✓
        `
      },
      {
        number: 8, label: 'B2', title: 'Inverse-sine and logarithmic integrals; a product of sines', section: 'Section B · §9.1, §9.4', marks: 9,
        prompt: String.raw`
**(a)** Evaluate

**(i)** $\displaystyle\int_{1}^{3}\frac{dx}{\sqrt{4x-x^{2}}}$ (3)

**(ii)** $\displaystyle\int_{0}^{2}\frac{x}{x^{2}+4}\,dx$ (2)

**(b)** Evaluate $\displaystyle\int_0^{\pi/2}\sin2x\,\sin5x\,dx.$ (4)
        `,
        solution: String.raw`
**(a)(i)** Complete the square: $4x-x^{2}=4-(x-2)^{2}$. Let $u=x-2$, so $du=dx$; $x=1\Rightarrow u=-1$ and $x=3\Rightarrow u=1$. ✓
$$\int_{-1}^{1}\frac{du}{\sqrt{4-u^{2}}}=\Big[\arcsin\frac u2\Big]_{-1}^{1}$$ ✓
$$=\arcsin\frac12-\arcsin\!\left(-\frac12\right)=\frac\pi6+\frac\pi6=\frac\pi3.$$ ✓

**(ii)** The numerator is half of the derivative of $x^{2}+4$, so ✓
$$\int_0^2\frac{x}{x^{2}+4}\,dx=\Big[\frac12\ln\left(x^{2}+4\right)\Big]_0^2=\frac12\left(\ln8-\ln4\right)=\frac12\ln2.$$ ✓

**(b)** Use the product-to-sum identity $\sin A\sin B=\frac12\left[\cos(A-B)-\cos(A+B)\right]$: ✓
$$\sin2x\sin5x=\frac12\left[\cos3x-\cos7x\right].$$ ✓
$$\int_0^{\pi/2}\sin2x\sin5x\,dx=\frac12\Big[\frac{\sin3x}{3}-\frac{\sin7x}{7}\Big]_0^{\pi/2}=\frac12\left[\left(-\frac13\right)-\left(-\frac17\right)\right]$$ ✓
since $\sin\frac{3\pi}2=-1$ and $\sin\frac{7\pi}2=-1$. Therefore
$$=\frac12\left(-\frac{4}{21}\right)=-\frac{2}{21}.$$ ✓
        `
      },
      {
        number: 9, label: 'B3', title: 'Integration by parts; a reduction formula', section: 'Section B · §9.2', marks: 10,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_0^{\ln2}x\cosh2x\,dx$. (3)

**(b)** For an integer $n\ge2$ let $I_n=\displaystyle\int x^{n}\sin x\,dx$. Prove the reduction formula
$$I_n=-x^{n}\cos x+n\,x^{n-1}\sin x-n(n-1)\,I_{n-2}.$$ (4)

**(c)** Hence evaluate $\displaystyle\int_0^{\pi/2}x^{3}\sin x\,dx.$ (3)
        `,
        solution: String.raw`
**(a)** Integrate by parts with $u=x$, $dv=\cosh2x\,dx$, so $du=dx$ and $v=\dfrac{\sinh2x}{2}$: ✓
$$\int x\cosh2x\,dx=\frac{x\sinh2x}{2}-\frac12\int\sinh2x\,dx=\frac{x\sinh2x}{2}-\frac{\cosh2x}{4}.$$ ✓
Since $e^{2\ln2}=4$: $\sinh(2\ln2)=\dfrac{4-\frac14}{2}=\dfrac{15}8$ and $\cosh(2\ln2)=\dfrac{4+\frac14}{2}=\dfrac{17}8$. Hence
$$\int_0^{\ln2}x\cosh2x\,dx=\left(\frac{15\ln2}{16}-\frac{17}{32}\right)-\left(0-\frac14\right)=\frac{15\ln2}{16}-\frac{9}{32}.$$ ✓

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
        number: 10, label: 'B4', title: 'Improper integrals', section: 'Section B · §10', marks: 10,
        prompt: String.raw`
**(a)** Explain why the integral $\displaystyle\int_{1}^{2}\frac{dx}{\ln x}$ is called improper, and say how it must be treated. (2)

**(b)** Determine whether the improper integral
$$\int_0^{1}\frac{\arcsin x}{\sqrt{1-x^{2}}}\,dx$$
converges or diverges. If it converges, find its value. Justify every limit that you use. (8)
        `,
        solution: String.raw`
**(a)** At the **lower endpoint** $x=1$ we have $\ln1=0$, so the integrand $\dfrac{1}{\ln x}$ is undefined and unbounded there (it tends to $+\infty$ as $x\to1^{+}$). ✓ The integral is improper (Type II) and means $\displaystyle\lim_{t\to1^{+}}\int_t^{2}\frac{dx}{\ln x}$. ✓

**(b)** As $x\to1^{-}$, $\sqrt{1-x^{2}}\to0$ while $\arcsin x\to\frac\pi2$, so the integrand is unbounded at the **upper endpoint**: the integral is improper (Type II) and equals $\displaystyle\lim_{t\to1^{-}}\int_0^{t}\frac{\arcsin x}{\sqrt{1-x^{2}}}\,dx$. ✓✓

Let $u=\arcsin x$, so $du=\dfrac{dx}{\sqrt{1-x^{2}}}$; $x=0\Rightarrow u=0$ and $x=t\Rightarrow u=\arcsin t$. ✓✓
$$\int_0^{t}\frac{\arcsin x}{\sqrt{1-x^{2}}}\,dx=\int_0^{\arcsin t}u\,du=\frac{(\arcsin t)^{2}}{2}.$$ ✓
Since $\arcsin$ is continuous, $\arcsin t\to\arcsin1=\dfrac\pi2$ as $t\to1^{-}$. ✓ The limit exists, so the integral **converges** and ✓
$$\int_0^{1}\frac{\arcsin x}{\sqrt{1-x^{2}}}\,dx=\frac12\left(\frac\pi2\right)^{2}=\frac{\pi^{2}}{8}.$$ ✓
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
**(a)** Use the geometric series to find a power series for $f(x)=\dfrac{1}{1+2x}$ about $x=0$, and state its radius of convergence. (3)

**(b)** Integrate your series from (a) term by term to obtain a power series for $\ln(1+2x)$. Hence, by choosing a suitable value of $x$, find the exact value of $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n\,3^{n}}$. (3)

**(c)** Using the Maclaurin series of $\cos u$, find the Maclaurin series of $g(x)=\sin^{2}x$ (write the first three non-zero terms and the general term). (3)
        `,
        solution: String.raw`
**(a)** Write $\dfrac1{1+2x}=\dfrac{1}{1-(-2x)}$ and use $\dfrac1{1-r}=\displaystyle\sum_{n=0}^{\infty}r^{n}$ with $r=-2x$: ✓
$$\frac{1}{1+2x}=\sum_{n=0}^{\infty}(-2x)^{n}=\sum_{n=0}^{\infty}(-2)^{n}x^{n},$$ ✓
valid when $|2x|<1$, so the **radius of convergence is $R=\dfrac12$**. ✓

**(b)** Integrate term by term from $0$ to $x$: $\displaystyle\int_0^x\frac{dt}{1+2t}=\frac12\ln(1+2x)=\sum_{n=0}^{\infty}\frac{(-2)^{n}x^{n+1}}{n+1}$. ✓ Multiplying by $2$ and putting $k=n+1$:
$$\ln(1+2x)=\sum_{k=1}^{\infty}\frac{(-1)^{k+1}(2x)^{k}}{k},\qquad |x|<\tfrac12.$$ ✓
Choose $x=\frac16$ (inside the radius), so $2x=\frac13$ and $\ln\!\left(1+\frac13\right)=\ln\frac43$: ✓
$$\sum_{k=1}^{\infty}\frac{(-1)^{k+1}}{k\,3^{k}}=\ln\frac43.$$

**(c)** $\sin^{2}x=\dfrac{1-\cos2x}{2}$ and $\cos u=\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^{n}u^{2n}}{(2n)!}$ with $u=2x$, so $1-\cos2x=-\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n}2^{2n}x^{2n}}{(2n)!}$. ✓ Dividing by $2$:
$$\sin^{2}x=\sum_{n=1}^{\infty}\frac{(-1)^{n+1}\,2^{2n-1}x^{2n}}{(2n)!}=x^{2}-\frac{x^{4}}{3}+\frac{2x^{6}}{45}-\cdots$$ ✓✓
        `
      },
      {
        number: 13, label: 'B7', title: 'Differential equations — verifying and separating', section: 'Section B · §12.0, §12.1', marks: 8,
        prompt: String.raw`
**(a)** State the order of the differential equation $y''-2y'+2y=0$, and show that $y=e^{x}\left(A\cos x+B\sin x\right)$ is a solution for all constants $A$ and $B$. (2)

**(b)** Given the differential equation
$$\frac{dy}{dx}=x\,(y-1),\qquad y>1,$$
write it in the form $M(x)\,dx+N(y)\,dy=0$ and find its general solution. (3)

**(c)** Find the particular solution of the equation in (b) given that $y=3$ when $x=0$. (3)
        `,
        solution: String.raw`
**(a)** The highest derivative is $y''$, so the order is $2$. ✓ Differentiate $y=e^{x}(A\cos x+B\sin x)$:
$$y'=e^{x}\left[(A+B)\cos x+(B-A)\sin x\right],\qquad y''=e^{x}\left[2B\cos x-2A\sin x\right].$$
Then $y''-2y'+2y=e^{x}\Big[\left(2B-2A-2B+2A\right)\cos x+\left(-2A-2B+2A+2B\right)\sin x\Big]=0$ for all $A,B$. ✓

**(b)** Rearranging: $-x\,dx+\dfrac{1}{y-1}\,dy=0$, of the form $M(x)\,dx+N(y)\,dy=0$. ✓ Integrate $\dfrac{dy}{y-1}=x\,dx$ (with $y>1$): ✓
$$\ln(y-1)=\frac{x^{2}}{2}+C\ \Longrightarrow\ y=1+Ae^{x^{2}/2},\qquad A=e^{C}>0.$$ ✓

**(c)** With $y(0)=3$: $3=1+A$, so $A=2$. ✓✓
$$y=1+2e^{x^{2}/2}.$$ ✓
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
    topics: 'Nearest point on a curve and a cone in a sphere (§6.6), completing the square and mixed even powers (§9.1, §9.4), reduction formula for 1/(1+x²)ⁿ (§9.2), comparison test and an arctangent improper integral, squeeze theorem and Ratio Test, Taylor series of 1/x², separable and linear ODEs.',
    instructions: [
      'Section A (Questions A1–A6): multiple choice. Choose ONE answer for each question. [14 marks]',
      'Section B (Questions B1–B8): give FULL solutions and show ALL workings. [76 marks]',
      'No calculators are allowed.',
      'You have 2 hours in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: 'A1', title: 'The point of a curve nearest a given point', section: 'Section A · §6.6', marks: 2,
        prompt: String.raw`
Let $P=\left(x,\sqrt x\right)$ be a point on the curve $y=\sqrt x$, and let $D$ be the **square** of the distance from $P$ to the point $(4,0)$. Which choice gives $D$ as a function of $x$, together with its correct domain?

- **A.** $D(x)=(x-4)^{2}+x^{2}$, $\;x\ge0$.
- **B.** $D(x)=(x-4)^{2}+x$, $\;x\ge0$.
- **C.** $D(x)=\sqrt{(x-4)^{2}+x}$, $\;x\ge0$.
- **D.** $D(x)=(x-4)^{2}+x$, $\;x\ge4$.
- **E.** $D(x)=(x-4)^{2}+\sqrt x$, $\;x\ge0$.
        `,
        solution: String.raw`
**Answer: B.** ✓✓

The horizontal distance is $x-4$ and the vertical distance is $\sqrt x-0$, so
$$D=(x-4)^{2}+\left(\sqrt x\right)^{2}=(x-4)^{2}+x.$$ ✓
$\sqrt x$ is defined only for $x\ge0$, and there is no further restriction, so the domain is $[0,\infty)$. ✓

- **A** uses $y=x$ instead of $\sqrt x$. **C** is the distance itself, not its square. **D** wrongly restricts to $x\ge4$. **E** forgets to square $\sqrt x$.
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
        number: 3, label: 'A3', title: 'An arctangent improper integral', section: 'Section A · §10', marks: 2,
        prompt: String.raw`
$$\int_{0}^{\infty}\frac{dx}{1+x^{2}}=$$

- **A.** $\pi$.
- **B.** $1$.
- **C.** $\dfrac\pi2$.
- **D.** $\dfrac\pi4$.
- **E.** The integral diverges.
        `,
        solution: String.raw`
**Answer: C.** ✓✓

$\displaystyle\int_0^{\infty}\frac{dx}{1+x^{2}}=\lim_{t\to\infty}\big[\arctan x\big]_0^{t}=\lim_{t\to\infty}\arctan t=\frac\pi2.$ ✓✓

- **A** is the value over $(-\infty,\infty)$. **D** is $\arctan1$. **B** and **E** are wrong: the integral converges, to $\frac\pi2$.
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
        number: 5, label: 'A5', title: 'A Maclaurin coefficient', section: 'Section A · §11.6', marks: 2,
        prompt: String.raw`
The coefficient of $x^{3}$ in the Maclaurin series of $f(x)=\sin2x$ is

- **A.** $\dfrac43$.
- **B.** $-\dfrac83$.
- **C.** $-\dfrac23$.
- **D.** $-\dfrac43$.
- **E.** $\dfrac83$.
        `,
        solution: String.raw`
**Answer: D.** ✓✓

Use $\sin u=u-\dfrac{u^{3}}{3!}+\cdots$ with $u=2x$: $\sin2x=2x-\dfrac{8x^{3}}{6}+\cdots$, so the coefficient of $x^{3}$ is $-\dfrac86=-\dfrac43$. ✓✓

(Equivalently, $c_3=\dfrac{f'''(0)}{3!}=\dfrac{-8\cos0}{6}=-\dfrac43$.)

- **A** has the wrong sign. **B**, **C** and **E** come from mishandling $2^{3}$ or $3!$.
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
        number: 7, label: 'B1', title: 'Optimization — a cone inscribed in a sphere', section: 'Section B · §6.6', marks: 11,
        prompt: String.raw`
A right circular cone is inscribed in a sphere of radius $3$ cm: its apex is at the top of the sphere and its base circle lies on the sphere. Let $h$ cm be the height of the cone (the distance from the apex to the plane of the base) and $r$ cm the radius of its base. We want the cone of **largest volume**.

**(a)** Draw a labelled cross-section. Use Pythagoras' theorem to show that $r^{2}=6h-h^{2}$, and hence that $$V(h)=\frac\pi3\left(6h^{2}-h^{3}\right).$$ (4)

**(b)** State the domain of $V$. (1)

**(c)** Find the critical number(s) of $V$. (3)

**(d)** Use the Closed Interval Method to find the dimensions and the volume of the largest cone. (3)
        `,
        solution: String.raw`
**(a)** *Cross-section:* a circle of radius $3$ with centre $O$; the apex $A$ at the top, a horizontal chord of half-length $r$ at distance $h$ below $A$. ✓

The centre $O$ is $3$ below the apex, so it is at distance $|h-3|$ from the plane of the base. A radius to a point of the base circle forms a right triangle: ✓
$$r^{2}+(h-3)^{2}=3^{2}\ \Longrightarrow\ r^{2}=9-(h-3)^{2}=6h-h^{2}.$$ ✓
The volume of a cone is $V=\dfrac13\pi r^{2}h$, so ✓
$$V(h)=\frac\pi3\left(6h-h^{2}\right)h=\frac\pi3\left(6h^{2}-h^{3}\right).$$

**(b)** The height ranges from $0$ to the diameter $6$, so the domain is the **closed interval** $[0,6]$. ✓

**(c)** $V'(h)=\dfrac\pi3\left(12h-3h^{2}\right)=\pi h(4-h)$, which exists for all $h$. ✓ Setting $V'(h)=0$ gives ✓✓
$$h=0\quad\text{or}\quad h=4,$$
where $h=0$ is also an endpoint of the domain.

**(d)** $V$ is continuous on $[0,6]$, so by the Extreme Value Theorem compare the critical number and endpoints: ✓
$$V(0)=0,\qquad V(4)=\frac\pi3\left(96-64\right)=\frac{32\pi}{3},\qquad V(6)=\frac\pi3\left(216-216\right)=0.$$ ✓
The absolute maximum is $\boxed{\dfrac{32\pi}{3}\ \text{cm}^{3}}$, attained when $h=4$ cm and $r^{2}=6(4)-16=8$, i.e. $r=2\sqrt2$ cm. ✓
        `
      },
      {
        number: 8, label: 'B2', title: 'Completing the square; a product of powers of sine and cosine', section: 'Section B · §9.1, §9.4', marks: 9,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_{-2}^{0}\frac{x+4}{x^{2}+4x+8}\,dx.$ (5)

**(b)** Evaluate $\displaystyle\int_0^{\pi/2}\sin^{2}x\,\cos^{4}x\,dx.$ (4)
        `,
        solution: String.raw`
**(a)** Complete the square: $x^{2}+4x+8=(x+2)^{2}+4$. The derivative of the denominator is $2x+4$, so split the numerator as $x+4=\frac12(2x+4)+2$: ✓
$$\int\frac{x+4}{x^{2}+4x+8}\,dx=\frac12\int\frac{2x+4}{x^{2}+4x+8}\,dx+2\int\frac{dx}{(x+2)^{2}+4}.$$ ✓
The first integral is $\frac12\ln\left(x^{2}+4x+8\right)$ (the quadratic is always positive). ✓ The second is the arctangent form $\int\frac{du}{u^{2}+a^{2}}=\frac1a\arctan\frac ua$ with $a=2$, $u=x+2$, giving $2\cdot\frac12\arctan\frac{x+2}{2}$. ✓
$$\Big[\frac12\ln\left(x^{2}+4x+8\right)+\arctan\frac{x+2}{2}\Big]_{-2}^{0}=\left(\frac12\ln8+\frac\pi4\right)-\left(\frac12\ln4+0\right)=\frac12\ln2+\frac\pi4.$$ ✓

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
        number: 10, label: 'B4', title: 'Improper integrals', section: 'Section B · §10', marks: 10,
        prompt: String.raw`
**(a)** Explain why the integral $\displaystyle\int_0^{\pi}\frac{dx}{\sin x}$ is called improper. (2)

**(b)** **(i)** Use the Comparison Test to determine whether $\displaystyle\int_2^{\infty}\frac{dx}{\ln x}$ converges or diverges. (3)

**(ii)** Determine whether the improper integral
$$\int_0^{\infty}\frac{dx}{x^{2}+6x+10}$$
converges or diverges. If it converges, find its value. Justify every limit that you use. (5)
        `,
        solution: String.raw`
**(a)** $\sin x=0$ at both $x=0$ and $x=\pi$, so the integrand $\dfrac{1}{\sin x}$ is undefined and unbounded at **both endpoints**. ✓ The integral is doubly improper (Type II at each end): it must be split at an interior point such as $\frac\pi2$ and each half treated as a limit. ✓

**(b)(i)** For $x\ge2$ we have $0<\ln x<x$, so $\dfrac{1}{\ln x}>\dfrac1x>0$. ✓ The integral $\displaystyle\int_2^{\infty}\frac{dx}{x}=\lim_{t\to\infty}\left(\ln t-\ln2\right)=\infty$ **diverges** ($p=1$). ✓ By the Comparison Test, $\displaystyle\int_2^{\infty}\frac{dx}{\ln x}$ **diverges**. ✓

**(ii)** The upper limit is infinite (Type I), so the integral is $\displaystyle\lim_{t\to\infty}\int_0^{t}\frac{dx}{x^{2}+6x+10}$. ✓ Complete the square: $x^{2}+6x+10=(x+3)^{2}+1$, so ✓
$$\int_0^{t}\frac{dx}{(x+3)^{2}+1}=\Big[\arctan(x+3)\Big]_0^{t}=\arctan(t+3)-\arctan3.$$ ✓
As $t\to\infty$, $\arctan(t+3)\to\dfrac\pi2$, so the limit exists and the integral **converges**: ✓
$$\int_0^{\infty}\frac{dx}{x^{2}+6x+10}=\frac\pi2-\arctan3=\arctan\frac13.$$ ✓
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

**(b)** Use the formula $c_n=\dfrac{f^{(n)}(a)}{n!}$ to find the Taylor series of $f(x)=\dfrac{1}{x^{2}}$ about $a=1$. Write down the first four terms and the general term. (4)
        `,
        solution: String.raw`
**(a)** **Ratio Test.** With $a_n=\dfrac{x^{2n}}{n\,9^n}$,
$$\left|\frac{a_{n+1}}{a_n}\right|=\frac{n}{n+1}\cdot\frac{x^{2}}{9}\ \longrightarrow\ \frac{x^{2}}{9}.$$ ✓
The series converges when $\dfrac{x^{2}}{9}<1$, i.e. $|x|<3$. So the **radius of convergence is $R=3$** and the series converges on $(-3,3)$. ✓✓

**Endpoints.** At $x=\pm3$, $x^{2n}=9^{n}$, so the series becomes $\displaystyle\sum\frac1n$, the harmonic series, which **diverges** at both endpoints. ✓

**Interval of convergence: $(-3,3)$.** ✓

**(b)** $f(x)=x^{-2}$, $f'(x)=-2x^{-3}$, $f''(x)=6x^{-4}$, $f'''(x)=-24x^{-5}$, and in general $f^{(n)}(x)=(-1)^{n}(n+1)!\,x^{-n-2}$. ✓✓

Therefore $c_n=\dfrac{f^{(n)}(1)}{n!}=(-1)^{n}(n+1)$. ✓ The Taylor series is
$$\frac{1}{x^{2}}=\sum_{n=0}^{\infty}(-1)^{n}(n+1)(x-1)^{n}=1-2(x-1)+3(x-1)^{2}-4(x-1)^{3}+\cdots$$ ✓
        `
      },
      {
        number: 13, label: 'B7', title: 'Differential equations — separable', section: 'Section B · §12.1', marks: 8,
        prompt: String.raw`
Given the differential equation
$$(1+x)\,\frac{dy}{dx}=y^{2},\qquad x>-1.$$

**(a)** State the order of the equation, and show that it is separable by writing it in the form $M(x)\,dx+N(y)\,dy=0$. (2)

**(b)** Find the general solution of the equation. (3)

**(c)** Find the particular solution given that $y=1$ when $x=0$, and state the largest interval containing $x=0$ on which this solution is defined. (3)
        `,
        solution: String.raw`
**(a)** The highest derivative is $\frac{dy}{dx}$, so the order is $1$. ✓ Dividing by $(1+x)y^{2}$ and multiplying by $dx$:
$$\frac{dx}{1+x}-\frac{dy}{y^{2}}=0,$$
which has the form $M(x)\,dx+N(y)\,dy=0$ with $M=\dfrac1{1+x}$ and $N=-\dfrac1{y^{2}}$, so it is **separable**. ✓

**(b)** Integrate $\dfrac{dy}{y^{2}}=\dfrac{dx}{1+x}$ (for $x>-1$): ✓
$$-\frac1y=\ln(1+x)+C.$$ ✓
Hence $y=-\dfrac{1}{\ln(1+x)+C}$. (The constant function $y=0$ is also a solution; it was lost when dividing by $y^{2}$.) ✓

**(c)** With $y(0)=1$: $1=-\dfrac1C$, so $C=-1$. ✓✓ The particular solution is
$$y=\frac{1}{1-\ln(1+x)}.$$
The denominator vanishes when $\ln(1+x)=1$, i.e. $x=e-1$. The solution is defined and continuous on the largest interval containing $0$ with $x>-1$ and $x<e-1$: $\ \boxed{(-1,\ e-1)}$. ✓
        `
      },
      {
        number: 14, label: 'B8', title: 'Differential equations — linear', section: 'Section B · §12.3', marks: 10,
        prompt: String.raw`
Given the differential equation
$$\frac{dy}{dx}=xe^{x^{2}}+2xy.$$

**(a)** Show that this is a linear differential equation by writing it in standard form. (2)

**(b)** Find the integrating factor $e^{\int P(x)\,dx}$. (3)

**(c)** Hence find the general solution of the differential equation, and then the particular solution satisfying $y=1$ when $x=0$. (5)
        `,
        solution: String.raw`
**(a)** Move the $y$-term to the left:
$$\frac{dy}{dx}-2x\,y=x\,e^{x^{2}}.$$ ✓✓
This has the form $\frac{dy}{dx}+P(x)y=Q(x)$ with $P(x)=-2x$ and $Q(x)=xe^{x^{2}}$, so it is **linear**.

**(b)** $\displaystyle\int-2x\,dx=-x^{2}$, so ✓✓
$$\mu(x)=e^{-x^{2}}.$$ ✓

**(c)** Multiply the standard form by $\mu=e^{-x^{2}}$; the left side is an exact derivative: ✓
$$\frac{d}{dx}\left(ye^{-x^{2}}\right)=e^{-x^{2}}\cdot xe^{x^{2}}=x.$$ ✓
Integrate: $ye^{-x^{2}}=\dfrac{x^{2}}{2}+C$, so the **general solution** is ✓
$$y=e^{x^{2}}\left(\frac{x^{2}}{2}+C\right).$$
With $y(0)=1$: $1=C$. ✓ The **particular solution** is ✓
$$y=e^{x^{2}}\left(\frac{x^{2}}{2}+1\right).$$
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
    topics: 'A closed box and a field divided by a fence along a river (§6.6), an arctangent substitution and a linear numerator over a completed square (§9.1), sin⁴x cos³x (§9.4), the reduction formula for xⁿeˣ (§9.2), an interior discontinuity and the Comparison Theorem (§10), the Integral Test and an alternating series, a hyperbolic Maclaurin series, and separable and linear ODEs.',
    instructions: [
      'Section A (Questions A1–A6): multiple choice. Choose ONE answer for each question. [14 marks]',
      'Section B (Questions B1–B8): give FULL solutions and show ALL workings. [76 marks]',
      'No calculators are allowed.',
      'You have 2 hours in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: 'A1', title: 'Setting up an optimization problem', section: 'Section A · §6.6', marks: 2,
        prompt: String.raw`
A closed rectangular box has a square base of side $x$ and height $h$. Its total surface area (top, bottom and four sides) is $150$. Eliminating $h$, the volume of the box is a function of $x$ alone. Which choice gives that function together with its correct domain?

- **A.** $V(x)=\dfrac{x^{2}\left(75-x^{2}\right)}{2}$, $\;0\le x\le5\sqrt3$.
- **B.** $V(x)=\dfrac{x\left(150-x^{2}\right)}{4}$, $\;0\le x\le\sqrt{150}$.
- **C.** $V(x)=\dfrac{x\left(75-x^{2}\right)}{2}$, $\;0\le x\le75$.
- **D.** $V(x)=\dfrac{x\left(75-x^{2}\right)}{2}$, $\;0\le x\le5\sqrt3$.
- **E.** $V(x)=2x\left(75-x^{2}\right)$, $\;0\le x\le5\sqrt3$.
        `,
        solution: String.raw`
**Answer: D.** ✓✓

The surface area is $2x^{2}$ (top and bottom) plus $4xh$ (four sides), so $2x^{2}+4xh=150$ and $h=\dfrac{75-x^{2}}{2x}$. Then $V=x^{2}h=\dfrac{x\left(75-x^{2}\right)}{2}$. The height cannot be negative, so $x^{2}\le75$, i.e. $x\le5\sqrt3$. The domain is $\left[0,5\sqrt3\right]$.

- **B** is the formula for a box with **no top** (surface area $x^{2}+4xh$). **C** has the right function but the domain $[0,75]$ would make $h$ negative. **A** and **E** have the wrong power of $x$ in the function.
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
        number: 5, label: 'A5', title: 'A Maclaurin coefficient', section: 'Section A · §11.6', marks: 2,
        prompt: String.raw`
The coefficient of $x^{4}$ in the Maclaurin series of $f(x)=e^{-x^{2}}$ is

- **A.** $\dfrac12$.
- **B.** $-\dfrac12$.
- **C.** $\dfrac1{24}$.
- **D.** $1$.
- **E.** $-1$.
        `,
        solution: String.raw`
**Answer: A.** ✓✓

Substitute $u=-x^{2}$ into $e^{u}=1+u+\dfrac{u^{2}}{2!}+\cdots$:
$$e^{-x^{2}}=1-x^{2}+\frac{x^{4}}{2}-\frac{x^{6}}{6}+\cdots$$
The coefficient of $x^{4}$ is $\dfrac12$. (**B** has the wrong sign: $(-x^{2})^{2}$ is positive. **C** uses $\frac1{4!}$ instead of $\frac1{2!}$.)
        `
      },
      {
        number: 6, label: 'A6', title: 'The general solution of a separable equation', section: 'Section A · §12.1', marks: 2,
        prompt: String.raw`
The general solution of the differential equation $\dfrac{dy}{dx}=\dfrac{3x^{2}}{y}$ is

- **A.** $y=x^{3}+C$.
- **B.** $y^{2}=x^{3}+C$.
- **C.** $y^{2}=2x^{3}+C$.
- **D.** $y^{2}=6x+C$.
- **E.** $y=\sqrt{x^{3}}+C$.
        `,
        solution: String.raw`
**Answer: C.** ✓✓

Separate the variables: $y\,dy=3x^{2}\,dx$. Integrate: $\dfrac{y^{2}}{2}=x^{3}+C_1$, so $y^{2}=2x^{3}+C$ with $C=2C_1$.

- **B** forgets the factor $2$ from integrating $y\,dy$. **D** differentiates instead of integrating. **A** and **E** are not solutions: for example $y=x^{3}+C$ gives $\frac{dy}{dx}=3x^{2}\neq\frac{3x^{2}}{y}$.
        `
      },
      {
        number: 7, label: 'B1', title: 'Optimization — a field divided by a fence along a river', section: 'Section B · §6.6', marks: 11,
        prompt: String.raw`
A farmer has $240$ m of fencing. She will build a rectangular field beside a long straight river; **no fence is needed along the river**. The field is divided into two equal pens by a fence **perpendicular to the river**. So the fencing is used for the far side (parallel to the river, length $y$ m) and for **three** fences perpendicular to the river (the two ends and the divider, each of length $x$ m). She wants the **largest possible total area**.

**(a)** Draw a labelled diagram. Use the length of fencing available to write $y$ in terms of $x$, and hence write the total area $A$ as a function of $x$ alone. (4)

**(b)** State the domain of $A$. (1)

**(c)** Find the critical number(s) of $A$. (3)

**(d)** Use the Closed Interval Method to show that the critical number gives the absolute maximum area. State the dimensions of the best field and its area. (3)
        `,
        solution: String.raw`
**(a)** *Diagram:* a rectangle with the river along the bottom side. Three vertical fences of length $x$ (left end, divider, right end) and one horizontal fence of length $y$ along the top. ✓

The fencing used is $3x+y=240$, so ✓
$$y=240-3x.$$ ✓
The area (objective function) is $A=xy$, so ✓
$$A(x)=x(240-3x)=240x-3x^{2}.$$

**(b)** Both lengths are non-negative: $x\ge0$ and $y=240-3x\ge0$, i.e. $x\le80$. The domain is the **closed interval** $[0,80]$. ✓

**(c)** $A'(x)=240-6x$ exists for all $x$, so the critical numbers come from $A'(x)=0$: ✓✓
$$240-6x=0\ \Longrightarrow\ x=40.$$ ✓

**(d)** $A$ is continuous on the closed interval $[0,80]$, so by the **Extreme Value Theorem** it has an absolute maximum there, found by the **Closed Interval Method**: ✓
$$A(0)=0,\qquad A(40)=240(40)-3(1600)=9600-4800=4800,\qquad A(80)=0.$$ ✓
The largest value is $A(40)=4800$. The best field has $x=40$ m and $y=240-120=120$ m (each pen $40$ m by $60$ m), with total area $\boxed{4800\ \text{m}^{2}}$. ✓
        `
      },
      {
        number: 8, label: 'B2', title: 'Completing the square; a power of sine and cosine', section: 'Section B · §9.1, §9.4', marks: 9,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_{-1}^{1}\frac{3x+1}{x^{2}+2x+5}\,dx.$ (5)

**(b)** Evaluate $\displaystyle\int_0^{\pi/2}\sin^{4}x\,\cos^{3}x\,dx.$ (4)
        `,
        solution: String.raw`
**(a)** Complete the square: $x^{2}+2x+5=(x+1)^{2}+4$. The derivative of the denominator is $2x+2$, so write the numerator as ✓
$$3x+1=\tfrac32(2x+2)-2.$$ ✓
Then
$$\int\frac{3x+1}{x^{2}+2x+5}dx=\frac32\int\frac{2x+2}{x^{2}+2x+5}dx-2\int\frac{dx}{(x+1)^{2}+4}=\frac32\ln\left(x^{2}+2x+5\right)-\arctan\frac{x+1}{2}+C.$$ ✓✓
Evaluate between $-1$ and $1$:
$$\left[\frac32\ln\left(x^{2}+2x+5\right)-\arctan\frac{x+1}{2}\right]_{-1}^{1}=\left(\frac32\ln8-\frac\pi4\right)-\left(\frac32\ln4-0\right)=\boxed{\frac32\ln2-\frac\pi4}.$$ ✓

**(b)** The power of cosine is odd: keep one factor $\cos x$ and write $\cos^{2}x=1-\sin^{2}x$. ✓
$$\sin^{4}x\cos^{3}x=\sin^{4}x\left(1-\sin^{2}x\right)\cos x.$$
Substitute $u=\sin x$, $du=\cos x\,dx$ (limits $0\to1$): ✓
$$\int_0^{1}\left(u^{4}-u^{6}\right)du=\left[\frac{u^{5}}{5}-\frac{u^{7}}{7}\right]_0^{1}=\frac15-\frac17=\boxed{\frac{2}{35}}.$$ ✓✓
        `
      },
      {
        number: 9, label: 'B3', title: 'Integration by parts; a reduction formula', section: 'Section B · §9.2', marks: 10,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_0^{\ln2}x\sinh3x\,dx$. Give your answer in terms of $\ln2$. (3)

**(b)** For an integer $n\ge1$ let $I_n=\displaystyle\int x^{n}e^{x}\,dx$.

**(i)** Use integration by parts to prove the reduction formula
$$I_n=x^{n}e^{x}-n\,I_{n-1}.$$ (4)

**(ii)** Hence evaluate $\displaystyle\int_0^{1}x^{3}e^{x}\,dx$. (3)
        `,
        solution: String.raw`
**(a)** Take $u=x$ and $dv=\sinh3x\,dx$, so $du=dx$ and $v=\dfrac{\cosh3x}{3}$: ✓
$$\int_0^{\ln2}x\sinh3x\,dx=\left[\frac{x\cosh3x}{3}\right]_0^{\ln2}-\frac13\int_0^{\ln2}\cosh3x\,dx=\frac{\ln2\cosh(3\ln2)}{3}-\frac{\sinh(3\ln2)}{9}.$$ ✓
Since $e^{3\ln2}=8$: $\cosh(3\ln2)=\dfrac{8+\frac18}{2}=\dfrac{65}{16}$ and $\sinh(3\ln2)=\dfrac{8-\frac18}{2}=\dfrac{63}{16}$. Hence
$$\frac{65}{48}\ln2-\frac{63}{144}=\boxed{\frac{65}{48}\ln2-\frac{7}{16}}.$$ ✓

**(b)(i)** Take $u=x^{n}$ and $dv=e^{x}dx$, so $du=nx^{n-1}dx$ and $v=e^{x}$: ✓✓
$$I_n=x^{n}e^{x}-\int e^{x}\,n\,x^{n-1}dx=x^{n}e^{x}-n\int x^{n-1}e^{x}dx.$$ ✓
The last integral is $I_{n-1}$, so $I_n=x^{n}e^{x}-n\,I_{n-1}$. ✓

**(b)(ii)** Apply the formula between $0$ and $1$ (the term $x^{n}e^{x}$ gives $e-0=e$ for every $n\ge1$). Write $J_n=\displaystyle\int_0^{1}x^{n}e^{x}dx$, so $J_n=e-nJ_{n-1}$. Start from $J_0=\displaystyle\int_0^{1}e^{x}dx=e-1$. ✓
$$J_1=e-(e-1)=1,\qquad J_2=e-2J_1=e-2,\qquad J_3=e-3J_2=e-3(e-2)=\boxed{6-2e}.$$ ✓✓
        `
      },
      {
        number: 10, label: 'B4', title: 'Improper integrals', section: 'Section B · §10', marks: 10,
        prompt: String.raw`
**(a)** Explain why the integral $\displaystyle\int_0^{4}\frac{dx}{(x-2)^{2/3}}$ is called improper, and say how it must be treated. (2)

**(b)** Determine whether the improper integral
$$\int_{-\infty}^{0}x\,e^{x}\,dx$$
converges or diverges. If it converges, find its value. Justify every limit that you use. (4)

**(c)** Use the Comparison Theorem to determine whether $\displaystyle\int_{1}^{\infty}\frac{dx}{\sqrt{x^{3}+1}}$ converges or diverges. (4)
        `,
        solution: String.raw`
**(a)** The integrand is undefined at $x=2$, which lies **inside** $[0,4]$, and $\dfrac{1}{(x-2)^{2/3}}\to\infty$ there. ✓ The Fundamental Theorem cannot be applied across the discontinuity, so the integral is improper (Type II). It must be **split at $x=2$**,
$$\int_0^{2}\frac{dx}{(x-2)^{2/3}}+\int_2^{4}\frac{dx}{(x-2)^{2/3}},$$
and each piece treated as a limit; the original integral converges only if **both** pieces converge. ✓

**(b)** The lower limit is infinite (Type I): $\displaystyle\int_{-\infty}^{0}xe^{x}dx=\lim_{t\to-\infty}\int_t^{0}xe^{x}dx$. ✓
By parts ($u=x$, $dv=e^{x}dx$): $\displaystyle\int xe^{x}dx=xe^{x}-e^{x}$. So
$$\int_t^{0}xe^{x}dx=(0-1)-\left(te^{t}-e^{t}\right)=-1-te^{t}+e^{t}.$$ ✓
As $t\to-\infty$: $e^{t}\to0$, and $te^{t}=\dfrac{t}{e^{-t}}\to\dfrac{1}{-e^{-t}}\to0$ by l'Hôpital's rule. ✓ So the integral **converges** and
$$\int_{-\infty}^{0}xe^{x}dx=-1.$$ ✓

**(c)** For $x\ge1$ we have $x^{3}+1>x^{3}$, so
$$0<\frac{1}{\sqrt{x^{3}+1}}<\frac{1}{\sqrt{x^{3}}}=x^{-3/2}.$$ ✓✓
Now $\displaystyle\int_{1}^{\infty}x^{-3/2}dx=\lim_{t\to\infty}\left[-2x^{-1/2}\right]_1^t=2$ converges ($p=\frac32>1$). ✓ By the **Comparison Theorem** (a smaller non-negative integrand than a convergent integral), $\displaystyle\int_{1}^{\infty}\frac{dx}{\sqrt{x^{3}+1}}$ **converges**. ✓
        `
      },
      {
        number: 11, label: 'B5', title: 'Sequences and series', section: 'Section B · §11.1–11.3', marks: 9,
        prompt: String.raw`
**(a)** Determine, giving reasons, whether the sequence $\{a_n\}=\left\{n^{2}e^{-n}\right\}$ is convergent or divergent. If it is convergent, state to what value it converges. (3)

**(b)** Explain why the Test for Divergence cannot be used to show that $\displaystyle\sum_{n=1}^{\infty}n^{2}e^{-n}$ converges, and use a suitable test to decide whether this series converges or diverges. (2)

**(c)** Determine whether the series
$$\sum_{n=1}^{\infty}(-1)^{n+1}\frac{n}{n^{2}+1}$$
is absolutely convergent, conditionally convergent or divergent. Justify your answer. (4)
        `,
        solution: String.raw`
**(a)** Write $a_n=\dfrac{n^{2}}{e^{n}}$, of the form $\frac{\infty}{\infty}$. Let $f(x)=\dfrac{x^{2}}{e^{x}}$ and use l'Hôpital's rule twice: ✓
$$\lim_{x\to\infty}\frac{x^{2}}{e^{x}}=\lim_{x\to\infty}\frac{2x}{e^{x}}=\lim_{x\to\infty}\frac{2}{e^{x}}=0.$$ ✓
So the sequence is **convergent with limit $0$**. ✓

**(b)** The Test for Divergence can only prove divergence: since $a_n\to0$ it is **inconclusive**. ✓ Use the **Ratio Test** with $c_n=n^{2}e^{-n}>0$:
$$\frac{c_{n+1}}{c_n}=\frac{(n+1)^{2}e^{-(n+1)}}{n^{2}e^{-n}}=\left(\frac{n+1}{n}\right)^{2}\cdot\frac1e\ \longrightarrow\ \frac1e<1,$$
so the series **converges**. ✓

**(c)** *Not absolutely convergent.* The series of absolute values is $\displaystyle\sum\frac{n}{n^{2}+1}$. Compare with the divergent harmonic series $\sum\frac1n$ using the **Limit Comparison Test** (if $a_n,b_n>0$ and $a_n/b_n\to c$ with $0<c<\infty$, the series behave alike): ✓
$$\lim_{n\to\infty}\frac{n/(n^{2}+1)}{1/n}=\lim_{n\to\infty}\frac{n^{2}}{n^{2}+1}=1.$$
So $\sum\frac{n}{n^{2}+1}$ diverges. ✓

*Convergent.* Let $b_n=\dfrac{n}{n^{2}+1}>0$. Then $b_n\to0$, and $b_n$ is decreasing because $f(x)=\dfrac{x}{x^{2}+1}$ has $f'(x)=\dfrac{1-x^{2}}{(x^{2}+1)^{2}}\le0$ for $x\ge1$. By the **Alternating Series Test** the series converges. ✓

Convergent but not absolutely convergent, so it is **conditionally convergent**.
        `
      },
      {
        number: 12, label: 'B6', title: 'Power series and a hyperbolic Maclaurin series', section: 'Section B · §11.4, §11.6', marks: 9,
        prompt: String.raw`
**(a)** Find the radius of convergence and the interval of convergence of the power series
$$\sum_{n=1}^{\infty}\frac{(3x-2)^{n}}{n^{2}}.$$ (5)

**(b)** **(i)** Use the formula $c_n=\dfrac{f^{(n)}(0)}{n!}$ to show that the Maclaurin series of $f(x)=\cosh x$ is $\displaystyle\sum_{n=0}^{\infty}\frac{x^{2n}}{(2n)!}$. (2)

**(ii)** Hence find the Maclaurin series of $g(x)=\dfrac{\cosh x-1}{x^{2}}$ (write the first three terms and the general term). (2)
        `,
        solution: String.raw`
**(a)** Use the **Ratio Test** with $a_n=\dfrac{(3x-2)^{n}}{n^{2}}$: ✓
$$\left|\frac{a_{n+1}}{a_n}\right|=\frac{|3x-2|^{n+1}}{(n+1)^{2}}\cdot\frac{n^{2}}{|3x-2|^{n}}=|3x-2|\left(\frac{n}{n+1}\right)^{2}\to|3x-2|.$$ ✓
The series converges when $|3x-2|<1$, i.e. $\left|x-\frac23\right|<\frac13$. The **radius of convergence is $R=\frac13$** (centre $\frac23$), and the series converges for $\frac13<x<1$. ✓

*Endpoints.* At $x=1$: $\displaystyle\sum\frac{1}{n^{2}}$ converges ($p$-series, $p=2>1$). At $x=\frac13$: $\displaystyle\sum\frac{(-1)^{n}}{n^{2}}$ converges (absolutely, by the same $p$-series). ✓

The **interval of convergence** is $\left[\dfrac13,\,1\right]$. ✓

**(b)(i)** Here $f'(x)=\sinh x$, $f''(x)=\cosh x$, and the derivatives alternate between $\cosh x$ and $\sinh x$. At $0$: $\cosh0=1$ and $\sinh0=0$. So $f^{(n)}(0)=1$ for even $n$ and $0$ for odd $n$. ✓ Hence $c_n=\dfrac{1}{n!}$ for even $n$, $c_n=0$ for odd $n$, giving
$$\cosh x=\sum_{n=0}^{\infty}\frac{x^{2n}}{(2n)!}=1+\frac{x^{2}}{2!}+\frac{x^{4}}{4!}+\cdots$$ ✓

**(b)(ii)** Subtract $1$ and divide by $x^{2}$: ✓
$$\frac{\cosh x-1}{x^{2}}=\frac{1}{x^{2}}\sum_{n=1}^{\infty}\frac{x^{2n}}{(2n)!}=\sum_{n=1}^{\infty}\frac{x^{2n-2}}{(2n)!}=\frac12+\frac{x^{2}}{24}+\frac{x^{4}}{720}+\cdots$$ ✓
        `
      },
      {
        number: 13, label: 'B7', title: 'Differential equations — separable', section: 'Section B · §12.1', marks: 8,
        prompt: String.raw`
Given the differential equation
$$\frac{dy}{dx}=2x\sqrt{y},\qquad y>0.$$

**(a)** State the order of the equation, and show that it is separable by writing it in the form $M(x)\,dx+N(y)\,dy=0$. (2)

**(b)** Find the general solution of the equation. (3)

**(c)** Find the particular solution given that $y=4$ when $x=0$. (3)
        `,
        solution: String.raw`
**(a)** The highest derivative is $\dfrac{dy}{dx}$, so the equation is **first order**. ✓ Dividing by $\sqrt y$ (valid since $y>0$) and rearranging:
$$2x\,dx-y^{-1/2}\,dy=0,$$
which has the form $M(x)\,dx+N(y)\,dy=0$ with $M=2x$ and $N=-y^{-1/2}$, so it is **separable**. ✓

**(b)** Integrate $y^{-1/2}dy=2x\,dx$: ✓
$$2\sqrt y=x^{2}+C,$$ ✓
so the **general solution** is
$$y=\frac{\left(x^{2}+C\right)^{2}}{4}.$$ ✓
(The constant solution $y=0$ was lost when we divided by $\sqrt y$, but it is excluded by $y>0$.)

**(c)** With $y(0)=4$: $2\sqrt4=0+C$, so $C=4$. ✓✓ The **particular solution** is ✓
$$y=\frac{\left(x^{2}+4\right)^{2}}{4}.$$
        `
      },
      {
        number: 14, label: 'B8', title: 'Differential equations — linear', section: 'Section B · §12.3', marks: 10,
        prompt: String.raw`
Given the differential equation
$$x\frac{dy}{dx}+y=x\ln x,\qquad x>0.$$

**(a)** Show that this is a linear differential equation by writing it in standard form. (2)

**(b)** Find the integrating factor $e^{\int P(x)\,dx}$. (2)

**(c)** Hence find the general solution of the differential equation. (4)

**(d)** Find the particular solution satisfying $y=\dfrac12$ when $x=1$. (2)
        `,
        solution: String.raw`
**(a)** Divide through by $x$ (positive on the domain):
$$\frac{dy}{dx}+\frac1x\,y=\ln x.$$ ✓✓
This has the form $\frac{dy}{dx}+P(x)y=Q(x)$ with $P(x)=\frac1x$ and $Q(x)=\ln x$, so it is **linear**.

**(b)** $\displaystyle\int\frac1x\,dx=\ln x$ (for $x>0$), so ✓
$$\mu(x)=e^{\ln x}=x.$$ ✓

**(c)** Multiply the standard form by $\mu=x$; the left side is an exact derivative: ✓
$$\frac{d}{dx}(xy)=x\ln x.$$
Integrate the right side by parts ($u=\ln x$, $dv=x\,dx$): $\displaystyle\int x\ln x\,dx=\frac{x^{2}}{2}\ln x-\frac{x^{2}}{4}$. ✓✓ So
$$xy=\frac{x^{2}}{2}\ln x-\frac{x^{2}}{4}+C,$$
and the **general solution** is ✓
$$y=\frac{x\ln x}{2}-\frac{x}{4}+\frac{C}{x}.$$

**(d)** With $y(1)=\frac12$: $\frac12=0-\frac14+C$, so $C=\frac34$. ✓ The **particular solution** is ✓
$$y=\frac{x\ln x}{2}-\frac{x}{4}+\frac{3}{4x}.$$
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
    topics: 'A pen against a wall and a cable across a river (§6.6), a hyperbolic integral, completing the square with a linear numerator and cos 2x cos x (§9.1, §9.4), the reduction formula for x²(ln x)ⁿ (§9.2), 1/x² across zero, a hyperbolic improper integral and the Comparison Theorem (§10), the Root and Ratio Tests, a Taylor series about π/6, and separable and linear ODEs.',
    instructions: [
      'Section A (Questions A1–A6): multiple choice. Choose ONE answer for each question. [14 marks]',
      'Section B (Questions B1–B8): give FULL solutions and show ALL workings. [76 marks]',
      'No calculators are allowed.',
      'You have 2 hours in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: 'A1', title: 'A pen against a wall', section: 'Section A · §6.6', marks: 2,
        prompt: String.raw`
A rectangular pen is built against a long straight wall using $60$ m of fencing. No fence is needed along the wall, so the fencing forms the two sides of length $x$ that are perpendicular to the wall and the side of length $y$ parallel to it. Using the length of fencing to eliminate $y$, the area of the pen is a function of $x$. Which choice gives that function together with its correct domain?

- **A.** $A(x)=x(60-2x)$, $\;0\le x\le60$.
- **B.** $A(x)=x(60-x)$, $\;0\le x\le60$.
- **C.** $A(x)=x(60-2x)$, $\;0\le x\le30$.
- **D.** $A(x)=x(30-x)$, $\;0\le x\le30$.
- **E.** $A(x)=x(60-3x)$, $\;0\le x\le20$.
        `,
        solution: String.raw`
**Answer: C.** ✓✓

The fencing is $2x+y=60$, so $y=60-2x$ and $A=xy=x(60-2x)$. Both lengths are non-negative: $x\ge0$ and $y=60-2x\ge0$ give $x\le30$. The domain is $[0,30]$.

- **B** counts only one side of length $x$. **A** has the right function but the domain $[0,60]$ would give a negative $y$. **D** halves the area incorrectly. **E** counts three sides of length $x$ (that is the shape with a divider).
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
The coefficient of $(x-1)^{3}$ in the Taylor series of $f(x)=\ln x$ about $a=1$ is

- **A.** $\dfrac13$.
- **B.** $2$.
- **C.** $-\dfrac13$.
- **D.** $\dfrac16$.
- **E.** $\dfrac12$.
        `,
        solution: String.raw`
**Answer: A.** ✓✓

Use $c_n=\dfrac{f^{(n)}(a)}{n!}$. Here $f'(x)=\dfrac1x$, $f''(x)=-\dfrac1{x^{2}}$, $f'''(x)=\dfrac{2}{x^{3}}$, so $f'''(1)=2$ and
$$c_3=\frac{2}{3!}=\frac13.$$


- **B** is $f'''(1)$ itself (forgetting to divide by $3!$). **C** has the wrong sign, since $f'''(1)=+2$. **D** is $\frac1{3!}$ (forgetting that $f'''(1)=2$). **E** is the size of the coefficient of $(x-1)^{2}$, which is $-\frac12$.
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
        number: 7, label: 'B1', title: 'Optimization — a cable across a river', section: 'Section B · §6.6', marks: 11,
        prompt: String.raw`
A straight river is $3$ km wide. A power station $A$ is on one bank. A factory $B$ is on the opposite bank, $8$ km downstream from the point $P$ that is directly opposite $A$. A cable is laid from $A$ **under the river** to a point $Q$ on the factory's bank, and then **along the bank** from $Q$ to $B$. Let $x$ km be the distance $PQ$.

Laying cable under water costs R$5000$ per km and laying it along the bank costs R$3000$ per km. The company wants the **cheapest** route. Work with the cost $C$ measured in **thousands of rand**.

**(a)** Draw a labelled diagram. Find the length of the underwater section in terms of $x$, and hence write the cost $C$ as a function of $x$ alone. (4)

**(b)** State the domain of $C$. (1)

**(c)** Find the critical number(s) of $C$. (3)

**(d)** Use the Closed Interval Method to show that the critical number gives the absolute minimum cost. State the position of $Q$ and the minimum cost. (3)
        `,
        solution: String.raw`
**(a)** *Diagram:* the river as a strip of width $3$ with $A$ on the near bank and $P$ directly opposite on the far bank; $Q$ is $x$ from $P$ towards $B$, and $B$ is $8$ from $P$ on the same bank. ✓

The underwater section $AQ$ is the hypotenuse of a right triangle with sides $3$ and $x$ (Pythagoras): ✓
$$AQ=\sqrt{9+x^{2}}.$$
The section along the bank is $QB=8-x$. ✓ The cost (objective function), in thousands of rand, is
$$C(x)=5\sqrt{9+x^{2}}+3(8-x).$$ ✓

**(b)** $Q$ must lie on the bank between $P$ and $B$, so $0\le x\le8$. The domain is the **closed interval** $[0,8]$. ✓

**(c)** $C'(x)=\dfrac{5x}{\sqrt{9+x^{2}}}-3$ exists for all $x$, so critical numbers come from $C'(x)=0$: ✓
$$5x=3\sqrt{9+x^{2}}\ \Longrightarrow\ 25x^{2}=9\left(9+x^{2}\right)\ \Longrightarrow\ 16x^{2}=81\ \Longrightarrow\ x=\frac94.$$ ✓✓
(Only the positive root is in the domain, and it satisfies the original equation since both sides are positive.)

**(d)** $C$ is continuous on $[0,8]$, so by the **Extreme Value Theorem** it has an absolute minimum there; compare the critical number and the endpoints: ✓
$$C(0)=5(3)+3(8)=39,\qquad C\!\left(\tfrac94\right)=5\sqrt{9+\tfrac{81}{16}}+3\left(8-\tfrac94\right)=5\cdot\tfrac{15}{4}+3\cdot\tfrac{23}{4}=\tfrac{75+69}{4}=36,$$
$$C(8)=5\sqrt{73}>5\cdot8=40.$$ ✓
The smallest value is $C\!\left(\frac94\right)=36$. The cable should reach the far bank at $Q$, $\dfrac94=2.25$ km from $P$, and the minimum cost is $\boxed{\text{R}36\,000}$. ✓
        `
      },
      {
        number: 8, label: 'B2', title: 'Completing the square; a product of cosines', section: 'Section B · §9.1, §9.4', marks: 9,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_{2}^{4}\frac{2x-1}{x^{2}-4x+8}\,dx.$ (5)

**(b)** Evaluate $\displaystyle\int_0^{\pi/3}\cos2x\,\cos x\,dx.$ (4)
        `,
        solution: String.raw`
**(a)** Complete the square: $x^{2}-4x+8=(x-2)^{2}+4$. The derivative of the denominator is $2x-4$, so write the numerator as ✓
$$2x-1=(2x-4)+3.$$ ✓
Then
$$\int\frac{2x-1}{x^{2}-4x+8}dx=\ln\left(x^{2}-4x+8\right)+3\int\frac{dx}{(x-2)^{2}+4}=\ln\left(x^{2}-4x+8\right)+\frac32\arctan\frac{x-2}{2}+C.$$ ✓✓
Evaluate between $2$ and $4$ (the denominator is $4$ at $x=2$ and $8$ at $x=4$):
$$\left(\ln8+\frac32\arctan1\right)-\left(\ln4+\frac32\arctan0\right)=\boxed{\ln2+\frac{3\pi}{8}}.$$ ✓

**(b)** The arguments differ, so use the product-to-sum identity $\cos A\cos B=\frac12\left[\cos(A-B)+\cos(A+B)\right]$: ✓
$$\cos2x\cos x=\frac12\left(\cos x+\cos3x\right).$$ ✓
$$\int_0^{\pi/3}\frac12\left(\cos x+\cos3x\right)dx=\frac12\left[\sin x+\frac{\sin3x}{3}\right]_0^{\pi/3}=\frac12\left(\frac{\sqrt3}{2}+\frac{\sin\pi}{3}\right)=\boxed{\frac{\sqrt3}{4}}.$$ ✓✓
        `
      },
      {
        number: 9, label: 'B3', title: 'Integration by parts; a reduction formula', section: 'Section B · §9.2', marks: 10,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_0^{\ln2}x^{2}\cosh x\,dx$. Give your answer in terms of $\ln2$. (4)

**(b)** For an integer $n\ge1$ let $I_n=\displaystyle\int x^{2}(\ln x)^{n}\,dx$.

**(i)** Use integration by parts to prove the reduction formula
$$I_n=\frac{x^{3}(\ln x)^{n}}{3}-\frac n3\,I_{n-1}.$$ (4)

**(ii)** Hence evaluate $\displaystyle\int_1^{e}x^{2}(\ln x)^{2}\,dx$. (2)
        `,
        solution: String.raw`
**(a)** Integrate by parts twice. First ($u=x^{2}$, $dv=\cosh x\,dx$): $\displaystyle\int x^{2}\cosh x\,dx=x^{2}\sinh x-2\int x\sinh x\,dx$. ✓
Second ($u=x$, $dv=\sinh x\,dx$): $\displaystyle\int x\sinh x\,dx=x\cosh x-\sinh x$. ✓ Hence
$$\int x^{2}\cosh x\,dx=x^{2}\sinh x-2x\cosh x+2\sinh x.$$ ✓
At $x=\ln2$ we have $\sinh(\ln2)=\frac34$ and $\cosh(\ln2)=\frac54$; at $x=0$ the expression is $0$:
$$\int_0^{\ln2}x^{2}\cosh x\,dx=\frac34(\ln2)^{2}-\frac52\ln2+\frac32.$$ ✓

**(b)(i)** Take $u=(\ln x)^{n}$ and $dv=x^{2}dx$, so $du=\dfrac{n(\ln x)^{n-1}}{x}dx$ and $v=\dfrac{x^{3}}{3}$: ✓✓
$$I_n=\frac{x^{3}(\ln x)^{n}}{3}-\int\frac{x^{3}}{3}\cdot\frac{n(\ln x)^{n-1}}{x}dx=\frac{x^{3}(\ln x)^{n}}{3}-\frac n3\int x^{2}(\ln x)^{n-1}dx.$$ ✓
The last integral is $I_{n-1}$, which proves the formula. ✓

**(b)(ii)** First find $\displaystyle\int_1^ex^{2}\ln x\,dx$ (the case $n=1$, with $I_0=\frac{x^{3}}{3}$): ✓
$$\int_1^{e}x^{2}\ln x\,dx=\left[\frac{x^{3}\ln x}{3}-\frac{x^{3}}{9}\right]_1^{e}=\left(\frac{e^{3}}{3}-\frac{e^{3}}{9}\right)-\left(0-\frac19\right)=\frac{2e^{3}+1}{9}.$$
Now $n=2$:
$$\int_1^{e}x^{2}(\ln x)^{2}dx=\left[\frac{x^{3}(\ln x)^{2}}{3}\right]_1^{e}-\frac23\cdot\frac{2e^{3}+1}{9}=\frac{e^{3}}{3}-\frac{4e^{3}+2}{27}=\boxed{\frac{5e^{3}-2}{27}}.$$ ✓
        `
      },
      {
        number: 10, label: 'B4', title: 'Improper integrals', section: 'Section B · §10', marks: 10,
        prompt: String.raw`
**(a)** Explain why the integral $\displaystyle\int_{-1}^{1}\frac{dx}{x^{2}}$ is called improper. Explain also why the calculation $\left[-\dfrac1x\right]_{-1}^{1}=-2$ is **not** a valid value for it. (2)

**(b)** Determine whether the improper integral
$$\int_0^{\infty}\frac{dx}{e^{x}+e^{-x}}$$
converges or diverges. If it converges, find its value. Justify every limit that you use. (4)

**(c)** Use the Comparison Theorem to determine whether $\displaystyle\int_{2}^{\infty}\frac{dx}{\sqrt x-1}$ converges or diverges. (4)
        `,
        solution: String.raw`
**(a)** The integrand $\dfrac1{x^{2}}$ is undefined at $x=0$, which lies **inside** $[-1,1]$, and it tends to $+\infty$ there. ✓ The Fundamental Theorem cannot be applied across the discontinuity, so the integral is improper (Type II). The value $-2$ is impossible: the integrand is **positive** everywhere, so its integral cannot be negative. The integral must be split at $0$, and each half $\displaystyle\int_0^{1}\frac{dx}{x^{2}}$ diverges ($p=2\ge1$). ✓ So the integral **diverges**.

**(b)** The upper limit is infinite (Type I). Multiply top and bottom by $e^{x}$: ✓
$$\frac{1}{e^{x}+e^{-x}}=\frac{e^{x}}{e^{2x}+1}.$$
With $u=e^{x}$, $du=e^{x}dx$: $\displaystyle\int\frac{e^{x}}{e^{2x}+1}dx=\arctan\left(e^{x}\right)$. ✓ So
$$\int_0^{t}\frac{dx}{e^{x}+e^{-x}}=\arctan\left(e^{t}\right)-\arctan1.$$ ✓
As $t\to\infty$, $e^{t}\to\infty$ and $\arctan\left(e^{t}\right)\to\dfrac\pi2$. Hence the integral **converges** and ✓
$$\int_0^{\infty}\frac{dx}{e^{x}+e^{-x}}=\frac\pi2-\frac\pi4=\frac\pi4.$$

**(c)** For $x\ge2$ we have $0<\sqrt x-1<\sqrt x$, so
$$\frac{1}{\sqrt x-1}>\frac{1}{\sqrt x}=x^{-1/2}>0.$$ ✓✓
Now $\displaystyle\int_2^{\infty}x^{-1/2}dx=\lim_{t\to\infty}\left[2\sqrt x\right]_2^t=\infty$ **diverges** ($p=\frac12\le1$). ✓ A larger integrand than a divergent integral also diverges, so by the **Comparison Theorem** $\displaystyle\int_{2}^{\infty}\frac{dx}{\sqrt x-1}$ **diverges**. ✓
        `
      },
      {
        number: 11, label: 'B5', title: 'Sequences and series', section: 'Section B · §11.1–11.3', marks: 9,
        prompt: String.raw`
**(a)** Determine, giving reasons, whether the sequence $\{a_n\}=\left\{n^{1/n}\right\}$ is convergent or divergent. If it is convergent, state to what value it converges. (3)

**(b)** Using (a) or otherwise, decide (with reasons) if the following series converges or diverges.
$$\sum_{n=1}^{\infty}n^{1/n}$$ (2)

**(c)** Decide (with reasons) if the following series converges or diverges.
$$\sum_{n=1}^{\infty}\frac{2^{n}\,n!}{n^{n}}$$ (4)
        `,
        solution: String.raw`
**(a)** Write $a_n=n^{1/n}=e^{(\ln n)/n}$. ✓ By l'Hôpital's rule
$$\lim_{x\to\infty}\frac{\ln x}{x}=\lim_{x\to\infty}\frac{1/x}{1}=0.$$ ✓
Since the exponential function is continuous, $a_n\to e^{0}=1$. So the sequence is **convergent with limit $1$**. ✓

**(b)** Since $a_n\to1\neq0$, the **Test for Divergence** shows that $\sum n^{1/n}$ **diverges**. ✓✓

**(c)** Use the **Ratio Test** with $c_n=\dfrac{2^{n}n!}{n^{n}}>0$: ✓
$$\frac{c_{n+1}}{c_n}=\frac{2^{n+1}(n+1)!}{(n+1)^{n+1}}\cdot\frac{n^{n}}{2^{n}n!}=\frac{2(n+1)\,n^{n}}{(n+1)^{n+1}}=2\left(\frac{n}{n+1}\right)^{n}=\frac{2}{\left(1+\frac1n\right)^{n}}.$$ ✓✓
Since $\left(1+\frac1n\right)^{n}\to e$, the ratio tends to $\dfrac2e<1$ (because $e>2$), so the series **converges**. ✓
        `
      },
      {
        number: 12, label: 'B6', title: 'Power series and a Taylor series', section: 'Section B · §11.4, §11.6', marks: 9,
        prompt: String.raw`
**(a)** Find the radius of convergence and the interval of convergence of the power series
$$\sum_{n=1}^{\infty}\frac{(-1)^{n}(x-2)^{n}}{n\,3^{n}}.$$ (5)

**(b)** Use the formula $c_n=\dfrac{f^{(n)}(a)}{n!}$ to find the first four terms of the Taylor series of $f(x)=\sin x$ about $a=\dfrac\pi6$. (4)
        `,
        solution: String.raw`
**(a)** Use the **Ratio Test** with $a_n=\dfrac{(-1)^{n}(x-2)^{n}}{n\,3^{n}}$: ✓
$$\left|\frac{a_{n+1}}{a_n}\right|=\frac{|x-2|^{n+1}}{(n+1)3^{n+1}}\cdot\frac{n\,3^{n}}{|x-2|^{n}}=\frac{|x-2|}{3}\cdot\frac{n}{n+1}\to\frac{|x-2|}{3}.$$ ✓
The series converges for $|x-2|<3$, so the **radius of convergence is $R=3$**, and it converges for $-1<x<5$. ✓

*Endpoints.* At $x=5$: $\displaystyle\sum\frac{(-1)^{n}3^{n}}{n\,3^{n}}=\sum\frac{(-1)^{n}}{n}$ converges (Alternating Series Test). At $x=-1$: $\displaystyle\sum\frac{(-1)^{n}(-3)^{n}}{n\,3^{n}}=\sum\frac1n$ diverges (harmonic series). ✓✓

The **interval of convergence** is $(-1,\,5]$. ✓

**(b)** Differentiate and evaluate at $a=\frac\pi6$: ✓
$$f=\sin x\to\tfrac12,\qquad f'=\cos x\to\tfrac{\sqrt3}{2},\qquad f''=-\sin x\to-\tfrac12,\qquad f'''=-\cos x\to-\tfrac{\sqrt3}{2}.$$ ✓
So $c_0=\frac12$, $c_1=\frac{\sqrt3}{2}$, $c_2=\dfrac{-1/2}{2!}=-\frac14$, $c_3=\dfrac{-\sqrt3/2}{3!}=-\dfrac{\sqrt3}{12}$, and ✓
$$\sin x=\frac12+\frac{\sqrt3}{2}\left(x-\frac\pi6\right)-\frac14\left(x-\frac\pi6\right)^{2}-\frac{\sqrt3}{12}\left(x-\frac\pi6\right)^{3}+\cdots$$ ✓
        `
      },
      {
        number: 13, label: 'B7', title: 'Differential equations — verifying and separating', section: 'Section B · §12.1', marks: 8,
        prompt: String.raw`
**(a)** State the order of the differential equation $y''-2y'-3y=0$, and show that $y=Ae^{3x}+Be^{-x}$ is a solution for all constants $A$ and $B$. (2)

**(b)** Given the differential equation
$$x\,\frac{dy}{dx}=y\ln x,\qquad x>0,$$
write it in the form $M(x)\,dx+N(y)\,dy=0$ and find its general solution. (3)

**(c)** Find the particular solution of the equation in (b) given that $y=2$ when $x=1$. (3)
        `,
        solution: String.raw`
**(a)** The highest derivative is $y''$, so the equation is **second order**. ✓ With $y=Ae^{3x}+Be^{-x}$: $y'=3Ae^{3x}-Be^{-x}$ and $y''=9Ae^{3x}+Be^{-x}$, so
$$y''-2y'-3y=(9-6-3)Ae^{3x}+(1+2-3)Be^{-x}=0.$$ ✓
Hence $y$ is a solution for all $A$ and $B$.

**(b)** For $y\neq0$ divide by $xy$:
$$\frac{\ln x}{x}\,dx-\frac1y\,dy=0,$$ ✓
of the required form. Integrate (using $u=\ln x$ on the left): ✓
$$\frac{(\ln x)^{2}}{2}=\ln|y|+K,\quad\text{so}\quad|y|=e^{-K}e^{(\ln x)^{2}/2}.$$
The **general solution** is
$$y=A\,e^{(\ln x)^{2}/2},$$ ✓
where $A=\pm e^{-K}$ (and $A=0$ gives the constant solution $y=0$).

**(c)** With $y(1)=2$: $\ln1=0$, so $2=Ae^{0}=A$. ✓✓ The **particular solution** is ✓
$$y=2e^{(\ln x)^{2}/2}.$$
        `
      },
      {
        number: 14, label: 'B8', title: 'Differential equations — linear', section: 'Section B · §12.3', marks: 10,
        prompt: String.raw`
Given the differential equation
$$\frac{dy}{dx}=2y+x\,e^{2x}.$$

**(a)** Show that this is a linear differential equation by writing it in standard form. (2)

**(b)** Find the integrating factor $e^{\int P(x)\,dx}$. (2)

**(c)** Hence find the general solution of the differential equation. (4)

**(d)** Find the particular solution satisfying $y=3$ when $x=0$. (2)
        `,
        solution: String.raw`
**(a)** Move the $y$-term to the left-hand side:
$$\frac{dy}{dx}-2y=x\,e^{2x}.$$ ✓✓
This has the form $\frac{dy}{dx}+P(x)y=Q(x)$ with $P(x)=-2$ and $Q(x)=xe^{2x}$, so it is **linear**.

**(b)** $\displaystyle\int-2\,dx=-2x$, so ✓
$$\mu(x)=e^{-2x}.$$ ✓

**(c)** Multiply the standard form by $\mu=e^{-2x}$; the left side is an exact derivative: ✓
$$\frac{d}{dx}\left(ye^{-2x}\right)=e^{-2x}\cdot xe^{2x}=x.$$ ✓
Integrate: $ye^{-2x}=\dfrac{x^{2}}{2}+C$, so the **general solution** is ✓✓
$$y=e^{2x}\left(\frac{x^{2}}{2}+C\right).$$

**(d)** With $y(0)=3$: $3=C$. ✓ The **particular solution** is ✓
$$y=e^{2x}\left(\frac{x^{2}}{2}+3\right).$$
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
    topics: 'A cone of fixed slant height and a printed poster with margins, an open-domain optimization (§6.6), arcsine, arctangent and sin⁶x integrals (§9.1, §9.4), a hyperbolic integral and the reduction formula for ∫(1−x²)ⁿdx (§9.2), improper integrals near zero and at infinity (§10), the Limit Comparison Test, absolute convergence and the Test for Divergence, a power series with its derivative and the series for sin x / x, and separable and linear ODEs.',
    instructions: [
      'Section A (Questions A1–A6): multiple choice. Choose ONE answer for each question. [14 marks]',
      'Section B (Questions B1–B8): give FULL solutions and show ALL workings. [76 marks]',
      'No calculators are allowed.',
      'You have 2 hours in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: 'A1', title: 'A cone of fixed slant height', section: 'Section A · §6.6', marks: 2,
        prompt: String.raw`
A right circular cone has **slant height** $5$ (the distance from its apex to any point on the rim of its base). Let $h$ be the height and $r$ the radius of the base. Using $r^{2}+h^{2}=25$ to eliminate $r$, the volume of the cone is a function of $h$ alone. Which choice gives that function together with its correct domain?

- **A.** $V(h)=\dfrac{\pi}{3}\left(25+h^{2}\right)h$, $\;h\ge0$.
- **B.** $V(h)=\pi\left(25-h^{2}\right)h$, $\;0\le h\le5$.
- **C.** $V(h)=\dfrac{\pi}{3}\left(25-h^{2}\right)h$, $\;0\le h\le25$.
- **D.** $V(h)=\dfrac{\pi}{3}(5-h)h^{2}$, $\;0\le h\le5$.
- **E.** $V(h)=\dfrac{\pi}{3}\left(25-h^{2}\right)h$, $\;0\le h\le5$.
        `,
        solution: String.raw`
**Answer: E.** ✓✓

The volume is $V=\dfrac13\pi r^{2}h$ and $r^{2}=25-h^{2}$, so $V(h)=\dfrac\pi3\left(25-h^{2}\right)h$. Since $r^{2}\ge0$ we need $h^{2}\le25$, so $0\le h\le5$ (at $h=5$ the radius is $0$).

- **B** omits the factor $\frac13$. **C** has the right function but the domain $[0,25]$ would make $r^{2}$ negative. **D** and **A** use the wrong relation between $r$ and $h$.
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
        number: 7, label: 'B1', title: 'Optimization — a poster with margins (open domain)', section: 'Section B · §6.6', marks: 11,
        prompt: String.raw`
A rectangular poster must contain $150\ \text{cm}^{2}$ of printed material. The printed region is surrounded by margins of $2$ cm at the top and at the bottom and $3$ cm at each side. Let $x$ cm be the **width** of the printed region. The printer wants the poster of **smallest total area**.

**(a)** Draw a labelled diagram. Write the height of the printed region in terms of $x$, and hence write the total area $P$ of the poster as a function of $x$ alone. (4)

**(b)** State the domain of $P$. (1)

**(c)** Find the critical number(s) of $P$. (3)

**(d)** The domain in (b) is **not** a closed interval, so the Closed Interval Method cannot be used. Use the Second Derivative Test (or the behaviour of $P$ at the ends of the domain) to justify that the critical number gives the absolute minimum. State the dimensions of the poster and its area. (3)
        `,
        solution: String.raw`
**(a)** *Diagram:* an outer rectangle (the poster) containing an inner rectangle (the printed region) of width $x$ and height $y$, with margins $3$ at each side and $2$ at top and bottom. ✓

The printed area is $xy=150$, so ✓
$$y=\frac{150}{x}.$$
The poster has width $x+6$ and height $y+4=\dfrac{150}{x}+4$, so the total area is ✓✓
$$P(x)=(x+6)\left(\frac{150}{x}+4\right)=174+4x+\frac{900}{x}.$$

**(b)** The width must be positive and can be as large as we like: the domain is the **open interval** $(0,\infty)$. ✓

**(c)** $P'(x)=4-\dfrac{900}{x^{2}}$ exists for all $x>0$, so the critical numbers come from $P'(x)=0$: ✓✓
$$4=\frac{900}{x^{2}}\ \Longrightarrow\ x^{2}=225\ \Longrightarrow\ x=15\quad(x>0).$$ ✓

**(d)** $P''(x)=\dfrac{1800}{x^{3}}>0$ for **every** $x>0$, so $P$ is concave up on its whole domain. ✓ Hence the graph lies above its tangent line at $x=15$, which is horizontal, so the local minimum at $x=15$ is the **absolute minimum**. (Equivalently, $P(x)\to\infty$ both as $x\to0^{+}$ and as $x\to\infty$, so the only critical point must be the absolute minimum.) ✓

The printed region is $15$ cm wide and $\dfrac{150}{15}=10$ cm high, so the best poster is $\boxed{21\ \text{cm wide}\times14\ \text{cm high}}$, with area $P(15)=174+60+60=\boxed{294\ \text{cm}^{2}}$. ✓
        `
      },
      {
        number: 8, label: 'B2', title: 'Inverse-trigonometric integrals; an even power of sine', section: 'Section B · §9.1, §9.4', marks: 9,
        prompt: String.raw`
**(a)** Evaluate

**(i)** $\displaystyle\int_{1}^{\sqrt e}\frac{dx}{x\sqrt{1-(\ln x)^{2}}}$ (3)

**(ii)** $\displaystyle\int_{0}^{1}\frac{x}{1+x^{4}}\,dx$ (2)

**(b)** Evaluate $\displaystyle\int_0^{\pi/2}\sin^{6}x\,dx.$ (4)
        `,
        solution: String.raw`
**(a)(i)** Substitute $u=\ln x$, so $du=\dfrac{dx}{x}$. The limits become $\ln1=0$ and $\ln\sqrt e=\frac12$: ✓
$$\int_0^{1/2}\frac{du}{\sqrt{1-u^{2}}}=\Big[\arcsin u\Big]_0^{1/2}=\arcsin\frac12-0=\boxed{\frac\pi6}.$$ ✓✓

**(a)(ii)** Substitute $u=x^{2}$, so $du=2x\,dx$ and the limits stay $0$ and $1$: ✓
$$\frac12\int_0^{1}\frac{du}{1+u^{2}}=\frac12\Big[\arctan u\Big]_0^{1}=\boxed{\frac\pi8}.$$ ✓

**(b)** The power is even, so use $\sin^{2}x=\dfrac{1-\cos2x}{2}$: ✓
$$\sin^{6}x=\left(\frac{1-\cos2x}{2}\right)^{3}=\frac18\left(1-3\cos2x+3\cos^{2}2x-\cos^{3}2x\right).$$ ✓
Integrate over $\left[0,\frac\pi2\right]$ term by term: $\displaystyle\int_0^{\pi/2}1\,dx=\frac\pi2$; $\displaystyle\int_0^{\pi/2}\cos2x\,dx=0$; $\displaystyle\int_0^{\pi/2}\cos^{2}2x\,dx=\int_0^{\pi/2}\frac{1+\cos4x}{2}dx=\frac\pi4$; and
$$\int_0^{\pi/2}\cos^{3}2x\,dx=\int_0^{\pi/2}\left(1-\sin^{2}2x\right)\cos2x\,dx=\left[\frac{\sin2x}{2}-\frac{\sin^{3}2x}{6}\right]_0^{\pi/2}=0.$$ ✓
Therefore
$$\int_0^{\pi/2}\sin^{6}x\,dx=\frac18\left(\frac\pi2+3\cdot\frac\pi4\right)=\frac18\cdot\frac{5\pi}{4}=\boxed{\frac{5\pi}{32}}.$$ ✓
        `
      },
      {
        number: 9, label: 'B3', title: 'Integration by parts; a reduction formula', section: 'Section B · §9.2', marks: 10,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_0^{\ln5}x\cosh x\,dx$. Give your answer in terms of $\ln5$. (3)

**(b)** For an integer $n\ge0$ let $I_n=\displaystyle\int_0^{1}\left(1-x^{2}\right)^{n}dx$.

**(i)** For $n\ge1$, use integration by parts to prove that
$$I_n=\frac{2n}{2n+1}\,I_{n-1}.$$ (5)

**(ii)** Hence evaluate $I_3$. (2)
        `,
        solution: String.raw`
**(a)** Take $u=x$ and $dv=\cosh x\,dx$, so $du=dx$ and $v=\sinh x$: ✓
$$\int_0^{\ln5}x\cosh x\,dx=\Big[x\sinh x\Big]_0^{\ln5}-\int_0^{\ln5}\sinh x\,dx=\ln5\,\sinh(\ln5)-\Big[\cosh x\Big]_0^{\ln5}.$$ ✓
Since $e^{\ln5}=5$: $\sinh(\ln5)=\dfrac{5-\frac15}{2}=\dfrac{12}{5}$ and $\cosh(\ln5)=\dfrac{5+\frac15}{2}=\dfrac{13}{5}$. Hence
$$\frac{12}{5}\ln5-\left(\frac{13}{5}-1\right)=\boxed{\frac{12}{5}\ln5-\frac85}.$$ ✓

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
        number: 10, label: 'B4', title: 'Improper integrals', section: 'Section B · §10', marks: 10,
        prompt: String.raw`
**(a)** Explain why the integral $\displaystyle\int_0^{3}\frac{dx}{(x-1)^{2}}$ is called improper, and say how it must be treated. (2)

**(b)** Determine whether the improper integral
$$\int_{2}^{\infty}\frac{dx}{x\,(\ln x)^{2}}$$
converges or diverges. If it converges, find its value. Justify every limit that you use. (4)

**(c)** Use the Comparison Theorem to determine whether $\displaystyle\int_{0}^{1}\frac{dx}{\sqrt x+x^{3}}$ converges or diverges. (4)
        `,
        solution: String.raw`
**(a)** The integrand is undefined at $x=1$, which lies **inside** $[0,3]$, and $\dfrac{1}{(x-1)^{2}}\to\infty$ there. ✓ The Fundamental Theorem cannot be applied across the discontinuity, so the integral is improper (Type II). It must be **split at $x=1$** into $\displaystyle\int_0^{1}+\int_1^{3}$, each treated as a limit; the integral converges only if both pieces converge. (Here neither does: a naive evaluation $\left[-\frac1{x-1}\right]_0^3=-\frac32$ is impossible for a positive integrand.) ✓

**(b)** The upper limit is infinite (Type I): $\displaystyle\lim_{t\to\infty}\int_2^{t}\frac{dx}{x(\ln x)^{2}}$. ✓ Substitute $u=\ln x$, $du=\dfrac{dx}{x}$: $\displaystyle\int\frac{dx}{x(\ln x)^{2}}=\int u^{-2}du=-\frac1u=-\frac{1}{\ln x}$. ✓ So
$$\int_2^{t}\frac{dx}{x(\ln x)^{2}}=-\frac{1}{\ln t}+\frac{1}{\ln2}.$$ ✓
As $t\to\infty$, $\ln t\to\infty$ and $\dfrac{1}{\ln t}\to0$. The integral **converges** and
$$\int_2^{\infty}\frac{dx}{x(\ln x)^{2}}=\frac{1}{\ln2}.$$ ✓

**(c)** The integrand is undefined at $x=0$ (Type II), so the integral is $\displaystyle\lim_{t\to0^{+}}\int_t^{1}\frac{dx}{\sqrt x+x^{3}}$. For $0<x\le1$ we have $\sqrt x+x^{3}>\sqrt x$, so
$$0<\frac{1}{\sqrt x+x^{3}}<\frac{1}{\sqrt x}=x^{-1/2}.$$ ✓✓
Now $\displaystyle\int_0^{1}x^{-1/2}dx=\lim_{t\to0^{+}}\Big[2\sqrt x\Big]_t^{1}=2$ converges (the $p$-integral at zero converges for $p<1$, and $p=\frac12$). ✓ By the **Comparison Theorem**, $\displaystyle\int_0^{1}\frac{dx}{\sqrt x+x^{3}}$ **converges**. ✓
        `
      },
      {
        number: 11, label: 'B5', title: 'Sequences and series', section: 'Section B · §11.1–11.3', marks: 9,
        prompt: String.raw`
**(a)** Determine, giving reasons, whether the sequence $\{a_n\}=\left\{(-1)^{n}\dfrac{n}{n+1}\right\}$ is convergent or divergent. If it is convergent, state to what value it converges. (3)

**(b)** Using (a) or otherwise, decide (with reasons) if the following series converges or diverges.
$$\sum_{n=1}^{\infty}(-1)^{n}\frac{n}{n+1}$$ (2)

**(c)** Decide (with reasons) if the following series converges or diverges.
$$\sum_{n=1}^{\infty}\frac{n+1}{n^{3/2}+5}$$ (4)
        `,
        solution: String.raw`
**(a)** The absolute values satisfy $|a_n|=\dfrac{n}{n+1}\to1$. ✓ But the sign alternates: for **even** $n$ the terms $a_n\to1$, and for **odd** $n$ the terms $a_n\to-1$. ✓ A convergent sequence has a single limit for all its subsequences, so the sequence is **divergent** (it oscillates between values near $1$ and $-1$). ✓

**(b)** Since $\lim a_n$ does not exist (in particular it is not $0$), the **Test for Divergence** shows that $\sum(-1)^{n}\dfrac{n}{n+1}$ **diverges**. ✓✓

**(c)** The terms are positive. For large $n$ they behave like $\dfrac{n}{n^{3/2}}=\dfrac{1}{\sqrt n}$, so use the **Limit Comparison Test** (if $a_n,b_n>0$ and $a_n/b_n\to c$ with $0<c<\infty$, the two series converge or diverge together) with $b_n=\dfrac{1}{\sqrt n}$: ✓
$$\lim_{n\to\infty}\frac{a_n}{b_n}=\lim_{n\to\infty}\frac{(n+1)\sqrt n}{n^{3/2}+5}=\lim_{n\to\infty}\frac{n^{3/2}+n^{1/2}}{n^{3/2}+5}=1.$$ ✓✓
Since $0<1<\infty$ and $\displaystyle\sum\frac{1}{\sqrt n}$ diverges ($p$-series, $p=\frac12\le1$), the series **diverges**. ✓
        `
      },
      {
        number: 12, label: 'B6', title: 'Power series and the series for sin x / x', section: 'Section B · §11.4, §11.6', marks: 9,
        prompt: String.raw`
**(a)** **(i)** Find the radius of convergence and the interval of convergence of the power series
$$\sum_{n=1}^{\infty}\frac{n!\,x^{n}}{(2n)!}.$$ (3)

**(ii)** Without further calculation, state the radius of convergence of the series obtained by differentiating the series in (i) term by term, and give the reason. (2)

**(b)** Use the Maclaurin series of $\sin x$ to find the Maclaurin series of $g(x)=\dfrac{\sin x}{x}$ (write the first three terms and the general term). Integrate it term by term to write $\displaystyle\int_0^{1}\frac{\sin x}{x}\,dx$ as an infinite series. (4)
        `,
        solution: String.raw`
**(a)(i)** Use the **Ratio Test** with $a_n=\dfrac{n!\,x^{n}}{(2n)!}$: ✓
$$\left|\frac{a_{n+1}}{a_n}\right|=\frac{(n+1)!\,|x|^{n+1}}{(2n+2)!}\cdot\frac{(2n)!}{n!\,|x|^{n}}=\frac{(n+1)|x|}{(2n+2)(2n+1)}=\frac{|x|}{2(2n+1)}\ \longrightarrow\ 0$$ ✓
for **every** $x$, and $0<1$. So the series converges for all $x$: the **radius of convergence is $R=\infty$** and the **interval of convergence is $(-\infty,\infty)$**. ✓

**(a)(ii)** By the theorem on term-by-term differentiation, the differentiated series has the **same radius of convergence**, $R=\infty$. ✓✓ (Differentiation can change convergence at the endpoints of the interval, but there are none here.)

**(b)** $\sin x=\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^{n}x^{2n+1}}{(2n+1)!}$, so dividing by $x$: ✓
$$\frac{\sin x}{x}=\sum_{n=0}^{\infty}\frac{(-1)^{n}x^{2n}}{(2n+1)!}=1-\frac{x^{2}}{6}+\frac{x^{4}}{120}-\cdots$$ ✓
Integrate term by term over $[0,1]$ (allowed inside the radius of convergence, which is $\infty$): ✓
$$\int_0^{1}\frac{\sin x}{x}\,dx=\sum_{n=0}^{\infty}\frac{(-1)^{n}}{(2n+1)\,(2n+1)!}=1-\frac1{18}+\frac1{600}-\cdots$$
        `
      },
      {
        number: 13, label: 'B7', title: 'Differential equations — separable', section: 'Section B · §12.1', marks: 8,
        prompt: String.raw`
Given the differential equation
$$\frac{dy}{dx}=y\tan x,\qquad -\frac\pi2<x<\frac\pi2.$$

**(a)** State the order of the equation, and show that it is separable by writing it in the form $M(x)\,dx+N(y)\,dy=0$. (2)

**(b)** Find the general solution of the equation. (3)

**(c)** Find the particular solution given that $y=4$ when $x=\dfrac\pi3$. (3)
        `,
        solution: String.raw`
**(a)** The highest derivative is $\dfrac{dy}{dx}$, so the equation is **first order**. ✓ For $y\neq0$, divide by $y$ and rearrange:
$$\tan x\,dx-\frac1y\,dy=0,$$
which has the form $M(x)\,dx+N(y)\,dy=0$ with $M=\tan x$ and $N=-\frac1y$, so it is **separable**. ✓

**(b)** Integrate $\dfrac{dy}{y}=\tan x\,dx$ (on the interval, $\cos x>0$): ✓
$$\ln|y|=-\ln(\cos x)+K=\ln(\sec x)+K,$$ ✓
so $|y|=e^{K}\sec x$ and the **general solution** is
$$y=A\sec x,$$ ✓
where $A=\pm e^{K}$ (and $A=0$ gives the constant solution $y=0$).

**(c)** With $y\!\left(\frac\pi3\right)=4$: $\sec\frac\pi3=2$, so $4=2A$ and $A=2$. ✓✓ The **particular solution** is ✓
$$y=2\sec x.$$
        `
      },
      {
        number: 14, label: 'B8', title: 'Differential equations — linear', section: 'Section B · §12.3', marks: 10,
        prompt: String.raw`
Given the differential equation
$$2x\,\frac{dy}{dx}+y=6x^{3/2},\qquad x>0.$$

**(a)** Show that this is a linear differential equation by writing it in standard form. (2)

**(b)** Find the integrating factor $e^{\int P(x)\,dx}$. (2)

**(c)** Hence find the general solution of the differential equation. (4)

**(d)** Find the particular solution satisfying $y=7$ when $x=4$. (2)
        `,
        solution: String.raw`
**(a)** Divide through by $2x$ (positive on the domain):
$$\frac{dy}{dx}+\frac{1}{2x}\,y=3x^{1/2}.$$ ✓✓
This has the form $\frac{dy}{dx}+P(x)y=Q(x)$ with $P(x)=\frac{1}{2x}$ and $Q(x)=3x^{1/2}$, so it is **linear**.

**(b)** $\displaystyle\int\frac{1}{2x}\,dx=\frac12\ln x$ (for $x>0$), so ✓
$$\mu(x)=e^{\frac12\ln x}=\sqrt x.$$ ✓

**(c)** Multiply the standard form by $\mu=\sqrt x$; the left side is an exact derivative: ✓
$$\frac{d}{dx}\left(\sqrt x\,y\right)=\sqrt x\cdot3\sqrt x=3x.$$ ✓
Integrate: $\sqrt x\,y=\dfrac{3x^{2}}{2}+C$, so the **general solution** is ✓✓
$$y=\frac32x^{3/2}+\frac{C}{\sqrt x}.$$

**(d)** With $y(4)=7$: $7=\dfrac32\cdot8+\dfrac{C}{2}=12+\dfrac C2$, so $C=-10$. ✓ The **particular solution** is ✓
$$y=\frac32x^{3/2}-\frac{10}{\sqrt x}.$$
        `
      }
    ]
  }
];
