/**
 * data/exams-november.js — November practice exams
 *
 * Three original 90-mark / 2-hour practice papers, laid out like the
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
 * Every paper has the same blueprint, so the three papers are balanced but share no question:
 *   A1 §6.6 optimization setup   A2 §9 integral         A3 §10 improper integral
 *   A4 §11.1-11.3 series         A5 §11.4-11.6          A6 §12 differential equation
 *   B1 §6.6 optimization (7-step workflow, one of: triangle / open box / wire / cylinder-in-cone paradigms)
 *   B2 §9.1 + §9.4 integrals     B3 §9.2 hyperbolic IBP + a reduction formula (prove it, then use it)
 *   B4 §10 improper integrals    B5 §11.1-11.3 sequence + series tests
 *   B6 §11.4-11.6 power series   B7 §12.0/12.1 separable ODE    B8 §12.3 first-order linear ODE
 *
 * No question is copied from a source paper, and no question repeats across these three
 * papers or the Tutorial Quiz Test 4 papers in data/exams-tutorial.js.
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

**(b)** Differentiate: $f(x)=x^{-1}$, $f'(x)=-x^{-2}$, $f''(x)=2x^{-3}$, $f'''(x)=-6x^{-4}$, and in general $f^{(n)}(x)=\dfrac{(-1)^nn!}{x^{n+1}}$. ✓✓

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

So it converges exactly when $p<1$. (This is the *opposite* inequality to the benchmark at infinity, where $\int_1^\infty x^{-p}dx$ needs $p>1$.) 
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
$S$ is continuous on $(0,\infty)$, has the single critical number $x=4$, and $S\to\infty$ at both ends of the domain. So the critical point cannot be a maximum and must be the **absolute minimum**. ✓ (Also $S'<0$ for $0<x<4$ and $S'>0$ for $x>4$.)

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

Both powers are even, so use the double-angle identities. Since $\sin x\cos x=\frac12\sin2x$: 
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
  }
];
