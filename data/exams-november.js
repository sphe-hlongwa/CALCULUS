/**
 * data/exams-november.js — November practice exams
 *
 * Three original 90-mark / 2-hour practice papers laid out like the
 * MATH1036 November 2024 examination:
 *   Section A  six multiple-choice questions          (14 marks)
 *   Section B  B1-B8 guided written questions         (76 marks: 12, 9, 10, 8, 9, 8, 9, 11)
 * with the same question habits as 2024: "write ... in terms of its partial
 * fractions, hence evaluate", "explain why the integral is improper",
 * "prove ... / give the statement of ...", "by writing the equation in standard
 * form show that it is separable / linear", "find the integrating factor",
 * "hence find the general solution".
 *
 * Ideas borrowed from the other years:
 *   2023  volume by cross-sections, washer volumes, improper-integral and DE steps
 *   2020  Riemann-sum and interval-of-convergence multiple choice, the
 *         "which statement is correct" multiple-choice habit
 *   2014  exact differential equations, homogeneous-equation classification,
 *         power-series representation of a function, log differentiation,
 *         recognising a power series
 * No question is copied from a source paper, and no question repeats across
 * these three papers or the September papers in data/exams.js.
 *
 * Each question has a "label" (A1-A6, B1-B8) that the viewer shows instead of
 * the plain number. Volumes use cross-sections, disks and washers only.
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
    instructions: [
      'Section A (Questions A1–A6): multiple choice. Choose ONE answer for each question. [14 marks]',
      'Section B (Questions B1–B8): give FULL solutions and show ALL workings. [76 marks]',
      'No calculators are allowed.',
      'You have 2 hours in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: 'A1', title: 'Choosing a substitution', section: 'Section A · §9.1, 9.3', marks: 2,
        prompt: String.raw`
Which of the following substitutions is most appropriate to evaluate
$$\int\frac{dx}{x^{2}\sqrt{x^{2}-2x+5}}\ ?$$

- **A.** $x=2\tan u$.
- **B.** $x-1=2\tan u$.
- **C.** $x-1=2\sec u$.
- **D.** $x-1=2\sin u$.
- **E.** $u=x^{2}-2x+5$.
        `,
        solution: String.raw`
**Answer: B.** ✓✓

Complete the square first: $x^2-2x+5=(x-1)^2+4$, which has the form $u^2+a^2$ with $u=x-1$ and $a=2$. The identity $1+\tan^2\theta=\sec^2\theta$ removes the root, so $x-1=2\tan u$ is the natural substitution.

- **A** ignores the shift: $x=2\tan u$ gives $4\tan^2u-4\tan u+5$, which does not simplify.
- **C** is used for $u^2-a^2$, and **D** for $a^2-u^2$.
- **E** does not remove the square root because the integrand has no factor $2x-2$.
        `
      },
      {
        number: 2, label: 'A2', title: 'Form of a partial fraction decomposition', section: 'Section A · §9.5', marks: 3,
        prompt: String.raw`
The correct general form (with undetermined constants) of the partial fraction decomposition of
$$\frac{x^{4}+1}{x^{2}\left(x^{2}+1\right)}$$
is

- **A.** $\dfrac{A}{x}+\dfrac{B}{x^{2}}+\dfrac{Cx+D}{x^{2}+1}$.
- **B.** $1+\dfrac{A}{x}+\dfrac{B}{x^{2}}+\dfrac{C}{x^{2}+1}$.
- **C.** $1+\dfrac{A}{x}+\dfrac{B}{x^{2}}+\dfrac{Cx+D}{x^{2}+1}$.
- **D.** $1+\dfrac{A}{x^{2}}+\dfrac{Bx+C}{x^{2}+1}$.
- **E.** $\dfrac{Ax+B}{x^{2}}+\dfrac{Cx+D}{x^{2}+1}$.
        `,
        solution: String.raw`
**Answer: C.** ✓✓✓

The numerator and denominator both have degree $4$, so the fraction is **improper**: long division first gives a constant $1$ plus a proper fraction. ✓ The proper part needs a term $\frac{A}{x}+\frac{B}{x^2}$ for the repeated linear factor $x^2$, and a term $\frac{Cx+D}{x^2+1}$ for the irreducible quadratic. ✓

- **A** and **E** have no constant term $1$ (improper fraction).
- **B** has only $C$ over the quadratic; an irreducible quadratic needs a linear numerator.
- **D** omits the $\frac{A}{x}$ term required by the repeated factor.

(In fact $\frac{x^4+1}{x^2(x^2+1)}=1+\frac1{x^2}-\frac{2}{x^2+1}$, so here $A=0$, $B=1$, $C=0$, $D=-2$.)
        `
      },
      {
        number: 3, label: 'A3', title: 'A correct statement about series', section: 'Section A · §11.2–11.3', marks: 2,
        prompt: String.raw`
Which of the following statements is CORRECT?

- **A.** If $\displaystyle\sum_{n=1}^{\infty}a_n$ and $\displaystyle\sum_{n=1}^{\infty}b_n$ both diverge, then $\displaystyle\sum_{n=1}^{\infty}(a_n+b_n)$ diverges.
- **B.** If $\displaystyle\sum_{n=1}^{\infty}a_n^{2}$ converges, then $\displaystyle\sum_{n=1}^{\infty}a_n$ converges.
- **C.** If $\displaystyle\sum_{n=1}^{\infty}|a_n|$ converges, then $\displaystyle\sum_{n=1}^{\infty}a_n^{2}$ converges.
- **D.** If $a_n$ is decreasing and $\displaystyle\lim_{n\to\infty}a_n=0$, then $\displaystyle\sum_{n=1}^{\infty}a_n$ converges.
- **E.** None of the statements is correct.
        `,
        solution: String.raw`
**Answer: C.** ✓✓

**C is true.** If $\sum|a_n|$ converges then $|a_n|\to0$, so $|a_n|<1$ for all large $n$, and then $a_n^2=|a_n|^2\le|a_n|$. By the Comparison Test $\sum a_n^2$ converges.

The others fail by counterexample:
- **A:** $a_n=1$, $b_n=-1$ both diverge but $a_n+b_n=0$ sums to $0$.
- **B:** $a_n=\frac1n$: $\sum\frac1{n^2}$ converges but $\sum\frac1n$ diverges.
- **D:** $a_n=\frac1n$ is decreasing with limit $0$, yet the harmonic series diverges.
- **E** is false because C is correct.
        `
      },
      {
        number: 4, label: 'A4', title: 'A geometric series', section: 'Section A · §11.2', marks: 3,
        prompt: String.raw`
The series $\displaystyle\sum_{n=1}^{\infty}\frac{(-2)^{n}}{3^{\,n+1}}$

- **A.** is a convergent geometric series with sum $\dfrac{-2/9}{1+\frac23}=-\dfrac{2}{15}$.
- **B.** is a convergent geometric series with sum $\dfrac{-2/9}{1-\frac23}=-\dfrac{2}{3}$.
- **C.** is a convergent geometric series with sum $\dfrac{2/9}{1+\frac23}=\dfrac{2}{15}$.
- **D.** is a convergent geometric series with sum $\dfrac{-2/3}{1+\frac23}=-\dfrac{2}{5}$.
- **E.** diverges.
        `,
        solution: String.raw`
**Answer: A.** ✓✓✓

Write the terms: $\dfrac{(-2)^n}{3^{n+1}}=\dfrac13\left(-\dfrac23\right)^{n}$. The **first term** (at $n=1$) is $a=\dfrac{-2}{9}$ and the **common ratio** is $r=-\dfrac23$, with $|r|<1$, so the series converges. ✓
$$\text{Sum}=\frac{a}{1-r}=\frac{-2/9}{1+\frac23}=\frac{-2/9}{5/3}=-\frac{2}{15}.$$ ✓

- **B** uses $1-|r|$ instead of $1-r$.
- **C** has the wrong sign for $a$.
- **D** starts the sum at the $n=0$ term $-\frac23$ instead of the $n=1$ term $-\frac29$.
        `
      },
      {
        number: 5, label: 'A5', title: 'A lower Riemann sum', section: 'Section A · §8.1', marks: 2,
        prompt: String.raw`
The lower Riemann sum for the area under $f(x)=\dfrac{1}{x^{2}}$ between $x=1$ and $x=3$, using $n$ rectangles of equal width, is

- **A.** $\displaystyle\sum_{j=1}^{n}\frac{2n}{(n+2j)^{2}}$.
- **B.** $\displaystyle\sum_{j=1}^{n}\frac{2n}{(n+2j-2)^{2}}$.
- **C.** $\displaystyle\sum_{j=1}^{n}\frac{2n^{2}}{(n+2j)^{2}}$.
- **D.** $\displaystyle\sum_{j=1}^{n}\frac{n}{(n+2j)^{2}}$.
- **E.** $\displaystyle\sum_{j=1}^{n}\frac{2n}{(n+j)^{2}}$.
        `,
        solution: String.raw`
**Answer: A.** ✓✓

The width is $\Delta x=\dfrac{3-1}{n}=\dfrac2n$ and the $j$-th right endpoint is $x_j=1+\dfrac{2j}{n}=\dfrac{n+2j}{n}$. Since $f$ is **decreasing**, its smallest value on each subinterval occurs at the **right** endpoint, so the *lower* sum uses $f(x_j)$: ✓
$$L_n=\sum_{j=1}^{n}f(x_j)\,\Delta x=\sum_{j=1}^{n}\frac{n^{2}}{(n+2j)^{2}}\cdot\frac2n=\sum_{j=1}^{n}\frac{2n}{(n+2j)^{2}}.$$

**B** is the *upper* sum (left endpoints $x_{j-1}$). The rest come from simplification or width errors.
        `
      },
      {
        number: 6, label: 'A6', title: 'Choosing a convergence test', section: 'Section A · §11.3', marks: 2,
        prompt: String.raw`
The series $\displaystyle\sum_{n=2}^{\infty}(-1)^{n}\,\frac{\ln n}{n}$ can be shown to converge by using

- **A.** the Ratio Test, since the ratio of consecutive terms has limit less than $1$.
- **B.** the Divergence Test.
- **C.** the Alternating Series Test, after showing that $\dfrac{\ln x}{x}$ is decreasing for $x\ge e$.
- **D.** the Comparison Test with $\displaystyle\sum_{n=2}^{\infty}\frac1n$.
- **E.** the Integral Test applied directly to the series.
        `,
        solution: String.raw`
**Answer: C.** ✓✓

Let $b_n=\dfrac{\ln n}{n}>0$. Then $b_n\to0$, and for $f(x)=\dfrac{\ln x}{x}$ we have $f'(x)=\dfrac{1-\ln x}{x^2}<0$ for $x>e$, so $b_n$ is decreasing from $n=3$ onward. The Alternating Series Test applies (only the tail matters). ✓

- **A:** the ratio tends to $1$, so the Ratio Test is inconclusive.
- **B:** $a_n\to0$, so the Divergence Test proves nothing.
- **D:** $\frac{\ln n}{n}\ge\frac1n$ for $n\ge3$ and $\sum\frac1n$ diverges, so this would show *absolute* divergence, not convergence.
- **E:** the Integral Test needs positive terms, and these alternate in sign.
        `
      },
      {
        number: 7, label: 'B1', title: 'Evaluating integrals', section: 'Section B · §9.1, 9.3', marks: 12,
        prompt: String.raw`
Evaluate the following integrals.

**(a)** $\displaystyle\int_1^3\frac{2x+1}{x^{2}-2x+2}\,dx.$ (6)

**(b)** $\displaystyle\int_0^1 x^{3}\sqrt{1-x^{2}}\,dx.$ (6)
        `,
        solution: String.raw`
**(a)** Complete the square: $x^2-2x+2=(x-1)^2+1$. ✓ Write the numerator in terms of $x-1$: $2x+1=2(x-1)+3$. ✓
$$\int\frac{2x+1}{x^2-2x+2}dx=\int\frac{2(x-1)}{(x-1)^2+1}dx+3\int\frac{dx}{(x-1)^2+1}.$$ ✓
With $w=(x-1)^2+1$, $dw=2(x-1)\,dx$, the first integral is $\ln\left((x-1)^2+1\right)$; the second is a standard arctangent. ✓✓
$$\int_1^3\frac{2x+1}{x^2-2x+2}dx=\Big[\ln\left((x-1)^2+1\right)+3\arctan(x-1)\Big]_1^3=\left(\ln5+3\arctan2\right)-\left(\ln1+0\right)=\ln5+3\arctan2.$$ ✓

**(b)** Let $u=1-x^2$, so $du=-2x\,dx$ and $x^2=1-u$. Then $x^3\,dx=x^2\cdot x\,dx=(1-u)\left(-\tfrac12\,du\right)$. ✓ Limits: $x=0\Rightarrow u=1$; $x=1\Rightarrow u=0$. ✓
$$\int_0^1x^3\sqrt{1-x^2}\,dx=-\frac12\int_1^0(1-u)\sqrt u\,du=\frac12\int_0^1\left(u^{1/2}-u^{3/2}\right)du.$$ ✓✓
$$=\frac12\left[\frac23u^{3/2}-\frac25u^{5/2}\right]_0^1=\frac12\left(\frac23-\frac25\right)=\frac12\cdot\frac{4}{15}=\frac{2}{15}.$$ ✓
        `
      },
      {
        number: 8, label: 'B2', title: 'Partial fractions', section: 'Section B · §9.5', marks: 9,
        prompt: String.raw`
**(a)** Write $\dfrac{3x^{2}+8x+13}{(x+1)\left(x^{2}+2x+5\right)}$ in terms of its partial fractions. (5)

**(b)** Hence evaluate $\displaystyle\int_0^1\frac{3x^{2}+8x+13}{(x+1)\left(x^{2}+2x+5\right)}\,dx$. Use the identity $\arctan a-\arctan b=\arctan\dfrac{a-b}{1+ab}$ to simplify your answer. (4)
        `,
        solution: String.raw`
**(a)** The quadratic $x^2+2x+5$ has discriminant $4-20<0$, so it is irreducible. ✓ The fraction is proper, so
$$\frac{3x^2+8x+13}{(x+1)(x^2+2x+5)}=\frac{A}{x+1}+\frac{Bx+C}{x^2+2x+5}\ \Longrightarrow\ 3x^2+8x+13=A\left(x^2+2x+5\right)+(Bx+C)(x+1).$$ ✓
Put $x=-1$: $3-8+13=8=A(1-2+5)=4A$, so $A=2$. ✓ Compare $x^2$: $3=A+B\Rightarrow B=1$. Compare constants: $13=5A+C\Rightarrow C=3$. ✓ (Check the $x$-coefficient: $2A+B+C=4+1+3=8$ ✓.)
$$\frac{3x^2+8x+13}{(x+1)(x^2+2x+5)}=\frac{2}{x+1}+\frac{x+3}{x^2+2x+5}.$$ ✓

**(b)** The first term integrates to $2\ln|x+1|$. For the second, $x+3=\tfrac12(2x+2)+2$ and $x^2+2x+5=(x+1)^2+4$: ✓
$$\int\frac{x+3}{x^2+2x+5}dx=\frac12\ln\left(x^2+2x+5\right)+2\int\frac{dx}{(x+1)^2+4}=\frac12\ln\left(x^2+2x+5\right)+\arctan\frac{x+1}{2}.$$ ✓
$$\int_0^1(\dots)\,dx=\Big[2\ln(x+1)+\tfrac12\ln(x^2+2x+5)+\arctan\tfrac{x+1}2\Big]_0^1=2\ln2+\tfrac12\ln\tfrac85+\left(\arctan1-\arctan\tfrac12\right).$$ ✓
Since $\arctan1-\arctan\frac12=\arctan\dfrac{1-\frac12}{1+\frac12}=\arctan\dfrac13$:
$$\int_0^1(\dots)\,dx=2\ln2+\frac12\ln\frac85+\arctan\frac13\approx1.943.$$ ✓
        `
      },
      {
        number: 9, label: 'B3', title: 'Improper integrals', section: 'Section B · §10', marks: 10,
        prompt: String.raw`
**(a)** Explain why the integral $\displaystyle\int_0^{\pi/2}\tan x\,dx$ is called improper. (2)

**(b)** Determine whether the improper integral
$$\int_1^{\infty}\frac{\arctan x}{x^{2}}\,dx$$
converges or diverges. If it converges, find its value. HINT: Use integration by parts. (8)
        `,
        solution: String.raw`
**(a)** The integrand $\tan x$ is continuous on $\left[0,\frac\pi2\right)$ but is **undefined at the upper limit** $x=\frac\pi2$, where $\tan x\to+\infty$. ✓ The Fundamental Theorem cannot be applied directly on the closed interval, so the integral is improper (Type II) and is defined as $\displaystyle\lim_{t\to\frac\pi2^-}\int_0^t\tan x\,dx$. ✓

**(b)** The upper limit is infinite, so we evaluate $\displaystyle\lim_{b\to\infty}\int_1^b\frac{\arctan x}{x^2}dx$. ✓ Integrate by parts with $u=\arctan x$, $dv=x^{-2}dx$, so $du=\dfrac{dx}{1+x^2}$ and $v=-\dfrac1x$: ✓
$$\int_1^b\frac{\arctan x}{x^2}dx=\Big[-\frac{\arctan x}{x}\Big]_1^b+\int_1^b\frac{dx}{x(1+x^2)}.$$ ✓
Partial fractions: $\dfrac{1}{x(1+x^2)}=\dfrac1x-\dfrac{x}{1+x^2}$, so ✓✓
$$\int\frac{dx}{x(1+x^2)}=\ln x-\frac12\ln\left(1+x^2\right)=\ln\frac{x}{\sqrt{1+x^2}}.$$
Therefore, with $F(x)=-\dfrac{\arctan x}{x}+\ln\dfrac{x}{\sqrt{1+x^2}}$,
$$F(b)\to0+\ln1=0\ \text{ as }b\to\infty,\qquad F(1)=-\frac\pi4+\ln\frac1{\sqrt2}=-\frac\pi4-\frac12\ln2.$$ ✓✓
(using $\frac{\arctan b}{b}\to0$ and $\frac{b}{\sqrt{1+b^2}}\to1$). The limit exists, so the integral **converges** and
$$\int_1^\infty\frac{\arctan x}{x^2}dx=0-F(1)=\frac\pi4+\frac12\ln2\approx1.132.$$ ✓✓
        `
      },
      {
        number: 10, label: 'B4', title: 'Proof and statement of a test', section: 'Section B · §11.3', marks: 8,
        prompt: String.raw`
**(a)** Prove the Comparison Test: if $0\le a_n\le b_n$ for all $n$ and $\displaystyle\sum_{n=1}^{\infty}b_n$ converges, then $\displaystyle\sum_{n=1}^{\infty}a_n$ converges. (5)

**(b)** Give the statement of the Alternating Series Test. (3)
        `,
        solution: String.raw`
**(a)** Let $s_N=\displaystyle\sum_{n=1}^{N}a_n$ and $t_N=\displaystyle\sum_{n=1}^{N}b_n$, and let $B=\displaystyle\sum_{n=1}^{\infty}b_n=\lim t_N$ (finite by assumption). ✓

- Since $a_n\ge0$, $s_{N+1}=s_N+a_{N+1}\ge s_N$: the sequence $(s_N)$ is **non-decreasing**. ✓
- Since $a_n\le b_n$, $s_N\le t_N$. Also $b_n\ge0$ (because $b_n\ge a_n\ge0$), so $(t_N)$ is non-decreasing and $t_N\le B$ for all $N$. Hence $s_N\le B$: $(s_N)$ is **bounded above**. ✓✓

By the Monotone Convergence Theorem, a non-decreasing sequence that is bounded above converges. So $(s_N)$ converges, i.e. $\sum a_n$ converges. ∎ ✓

**(b) Alternating Series Test.** Suppose $b_n>0$ for all $n$ ✓, that $(b_n)$ is decreasing, i.e. $b_{n+1}\le b_n$ ✓, and that $\displaystyle\lim_{n\to\infty}b_n=0$. Then the alternating series $\displaystyle\sum_{n=1}^{\infty}(-1)^{n}b_n$ (or $\sum(-1)^{n-1}b_n$) **converges**. ✓
        `
      },
      {
        number: 11, label: 'B5', title: 'Sequences and series', section: 'Section B · §11.1–11.3', marks: 9,
        prompt: String.raw`
**(a)** Determine, giving reasons, whether the sequence $\{a_n\}=\left\{\sqrt{4n^{2}+n}-2n\right\}$ is convergent or divergent. If it is convergent, state to what value it converges. (3)

**(b)** Using (a) or otherwise, decide (with reasons) if the following series converges or diverges.
$$\sum_{n=1}^{\infty}\left(\sqrt{4n^{2}+n}-2n\right)$$ (2)

**(c)** Decide (with reasons) if the following series converges or diverges.
$$\sum_{n=1}^{\infty}\frac{n!}{n^{n}}$$ (4)
        `,
        solution: String.raw`
**(a)** The form is $\infty-\infty$, so multiply and divide by the conjugate: ✓
$$a_n=\frac{\left(\sqrt{4n^2+n}-2n\right)\left(\sqrt{4n^2+n}+2n\right)}{\sqrt{4n^2+n}+2n}=\frac{n}{\sqrt{4n^2+n}+2n}=\frac{1}{\sqrt{4+\frac1n}+2}.$$ ✓
As $n\to\infty$, $\sqrt{4+\frac1n}\to2$, so $a_n\to\dfrac14$. The sequence is **convergent with limit $\dfrac14$**. ✓

**(b)** By (a) the terms tend to $\frac14\neq0$. By the **Divergence Test**, the series **diverges**. ✓✓

**(c)** Use the **Ratio Test** with $a_n=\dfrac{n!}{n^n}>0$: ✓
$$\frac{a_{n+1}}{a_n}=\frac{(n+1)!}{(n+1)^{n+1}}\cdot\frac{n^n}{n!}=\frac{(n+1)\,n^n}{(n+1)^{n+1}}=\left(\frac{n}{n+1}\right)^{n}=\left(1+\frac1n\right)^{-n}.$$ ✓✓
This tends to $e^{-1}<1$, so the series **converges**. ✓
        `
      },
      {
        number: 12, label: 'B6', title: 'Power series — radius and interval of convergence', section: 'Section B · §11.4', marks: 8,
        prompt: String.raw`
Find the radius of convergence and the interval of convergence of the following power series.
$$\sum_{n=1}^{\infty}\frac{(x+3)^{n}}{2^{n}\sqrt{n}}.$$ (8)
        `,
        solution: String.raw`
**Ratio Test.** With $a_n=\dfrac{(x+3)^n}{2^n\sqrt n}$,
$$\left|\frac{a_{n+1}}{a_n}\right|=\frac{|x+3|}{2}\cdot\sqrt{\frac{n}{n+1}}\ \longrightarrow\ \frac{|x+3|}{2}.$$ ✓✓
The series converges when $\dfrac{|x+3|}{2}<1$, i.e. $|x+3|<2$. Hence the **radius of convergence is $R=2$**, and the series converges on $(-5,-1)$. ✓✓

**Endpoint $x=-1$:** the series becomes $\displaystyle\sum_{n=1}^{\infty}\frac{2^n}{2^n\sqrt n}=\sum_{n=1}^\infty\frac1{\sqrt n}$, a $p$-series with $p=\frac12\le1$: **diverges**. ✓✓

**Endpoint $x=-5$:** the series becomes $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^n}{\sqrt n}$. Here $\frac1{\sqrt n}>0$, is decreasing and tends to $0$, so by the Alternating Series Test it **converges**. ✓✓

**Interval of convergence: $[-5,-1)$.** ✓
        `
      },
      {
        number: 13, label: 'B7', title: 'Differential equations — separable', section: 'Section B · §12.1', marks: 9,
        prompt: String.raw`
Given the differential equation
$$x\frac{dy}{dx}+y=y^{2},\qquad x>0.$$

**(a)** By writing this equation in standard form, show that it is a separable differential equation. (2)

**(b)** Find the general solution of the equation. (4)

**(c)** Find the particular solution given $y=2$ when $x=1$. (3)
        `,
        solution: String.raw`
**(a)** Rearrange: $x\dfrac{dy}{dx}=y^2-y=y(y-1)$, so
$$\frac{dy}{dx}=\frac{1}{x}\cdot y(y-1).$$ ✓
The right-hand side is a product of a function of $x$ alone, $\frac1x$, and a function of $y$ alone, $y(y-1)$. So the equation is **separable**. ✓

**(b)** Separate the variables (for $y\ne0,1$): $\dfrac{dy}{y(y-1)}=\dfrac{dx}{x}$. ✓ Partial fractions: $\dfrac{1}{y(y-1)}=\dfrac{1}{y-1}-\dfrac1y$. ✓ Integrating,
$$\ln|y-1|-\ln|y|=\ln x+c\ \Longrightarrow\ \frac{y-1}{y}=Cx\quad(C=\pm e^{c}).$$ ✓
Solving for $y$: $1-\dfrac1y=Cx\Rightarrow y=\dfrac{1}{1-Cx}$. ✓ (The constant solution $y=1$ is the case $C=0$; $y=0$ is also a solution not covered by the formula.)

**(c)** With $y(1)=2$: $\dfrac{2-1}{2}=C\cdot1$, so $C=\dfrac12$. ✓✓
$$y=\frac{1}{1-\frac x2}=\frac{2}{2-x},\qquad 0<x<2.$$ ✓
        `
      },
      {
        number: 14, label: 'B8', title: 'Differential equations — linear', section: 'Section B · §12.3', marks: 11,
        prompt: String.raw`
Given the differential equation
$$x\frac{dy}{dx}-2y=x^{4}\cos x,\qquad x>0.$$

**(a)** Show that this is a linear differential equation by writing it in standard form. (2)

**(b)** Find the integrating factor $e^{\int P(x)\,dx}$. (3)

**(c)** Hence find the general solution of the differential equation. (6)
        `,
        solution: String.raw`
**(a)** Divide through by $x$ (allowed since $x>0$):
$$\frac{dy}{dx}-\frac{2}{x}\,y=x^{3}\cos x.$$ ✓✓
This has the form $\frac{dy}{dx}+P(x)y=Q(x)$ with $P(x)=-\dfrac2x$ and $Q(x)=x^3\cos x$, so it is **linear**.

**(b)** $\displaystyle\int P(x)\,dx=-2\ln x$ (as $x>0$), so ✓✓
$$\mu(x)=e^{-2\ln x}=x^{-2}=\frac1{x^{2}}.$$ ✓

**(c)** Multiply the standard form by $\mu=x^{-2}$; the left side becomes an exact derivative: ✓
$$\frac{d}{dx}\left(\frac{y}{x^2}\right)=x^{-2}\cdot x^3\cos x=x\cos x.$$ ✓
Integrate by parts ($u=x$, $dv=\cos x\,dx$): $\displaystyle\int x\cos x\,dx=x\sin x-\int\sin x\,dx=x\sin x+\cos x+C$. ✓✓
$$\frac{y}{x^2}=x\sin x+\cos x+C\ \Longrightarrow\ \boxed{y=x^{2}\left(x\sin x+\cos x+C\right)}$$ ✓✓
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
    instructions: [
      'Section A (Questions A1–A6): multiple choice. Choose ONE answer for each question. [14 marks]',
      'Section B (Questions B1–B8): give FULL solutions and show ALL workings. [76 marks]',
      'No calculators are allowed.',
      'You have 2 hours in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: 'A1', title: 'Logarithmic differentiation', section: 'Section A · Calculus I revision', marks: 2,
        prompt: String.raw`
For $x>1$, the derivative of $y=(\ln x)^{x}$ is

- **A.** $x(\ln x)^{x-1}$.
- **B.** $(\ln x)^{x}\ln(\ln x)$.
- **C.** $(\ln x)^{x}\left(\ln(\ln x)+\dfrac{1}{\ln x}\right)$.
- **D.** $(\ln x)^{x}\left(\ln(\ln x)+\dfrac{x}{\ln x}\right)$.
- **E.** $\dfrac{x}{\ln x}\,(\ln x)^{x}$.
        `,
        solution: String.raw`
**Answer: C.** ✓✓

Take logarithms: $\ln y=x\ln(\ln x)$. Differentiate implicitly, using the product rule and the chain rule for $\ln(\ln x)$:
$$\frac{y'}{y}=\ln(\ln x)+x\cdot\frac{1}{\ln x}\cdot\frac1x=\ln(\ln x)+\frac{1}{\ln x}.$$
So $y'=(\ln x)^x\left(\ln(\ln x)+\dfrac1{\ln x}\right)$.

- **A** wrongly applies the power rule (the exponent is variable).
- **B** forgets the derivative of the inner function $\ln x$.
- **D** and **E** omit the factor $\frac1x$ from the chain rule.
        `
      },
      {
        number: 2, label: 'A2', title: 'The improper integral of a power', section: 'Section A · §10.1', marks: 3,
        prompt: String.raw`
The improper integral $\displaystyle\int_1^{\infty}x^{p}\,dx$

- **A.** converges for $p>-1$ and equals $\dfrac{1}{p+1}$.
- **B.** converges for $p<-1$ and equals $\dfrac{1}{p+1}$.
- **C.** converges for $p<-1$ and equals $-\dfrac{1}{p+1}$.
- **D.** converges for $p\le-1$ and equals $-\dfrac{1}{p+1}$.
- **E.** diverges for every real $p$.
        `,
        solution: String.raw`
**Answer: C.** ✓✓✓

For $p\neq-1$, $\displaystyle\int_1^bx^p\,dx=\frac{b^{p+1}-1}{p+1}$. ✓
- If $p<-1$ then $p+1<0$, so $b^{p+1}\to0$ and the limit is $\dfrac{-1}{p+1}=-\dfrac1{p+1}$, which is positive and finite: **converges**. ✓
- If $p>-1$ then $b^{p+1}\to\infty$: diverges.
- If $p=-1$ the integral is $\ln b\to\infty$: diverges.

So it converges exactly when $p<-1$, with value $-\dfrac{1}{p+1}$. Choice **B** has the wrong sign (it would be negative for a positive integrand); **D** wrongly includes $p=-1$.
        `
      },
      {
        number: 3, label: 'A3', title: 'Interval of convergence', section: 'Section A · §11.4', marks: 2,
        prompt: String.raw`
The interval of convergence of the power series $\displaystyle\sum_{n=1}^{\infty}\frac{(x-1)^{n}}{n\,2^{n}}$ is

- **A.** $(-1,3)$.
- **B.** $[-1,3)$.
- **C.** $(-1,3]$.
- **D.** $[-1,3]$.
- **E.** None of these.
        `,
        solution: String.raw`
**Answer: B.** ✓✓

Ratio Test: $\left|\dfrac{a_{n+1}}{a_n}\right|=\dfrac{|x-1|}{2}\cdot\dfrac{n}{n+1}\to\dfrac{|x-1|}{2}$, so the series converges for $|x-1|<2$, i.e. on $(-1,3)$ with $R=2$. ✓

- $x=3$: the series is $\sum\frac1n$, the harmonic series: **diverges**.
- $x=-1$: the series is $\sum\frac{(-1)^n}{n}$, the alternating harmonic series: **converges** (Alternating Series Test). ✓

Interval $[-1,3)$.
        `
      },
      {
        number: 4, label: 'A4', title: 'Which statement is FALSE?', section: 'Section A · §10–11', marks: 3,
        prompt: String.raw`
Which of the following statements is **FALSE**?

- **A.** $\displaystyle\sum_{n=2}^{\infty}\frac{1}{n(\ln n)^{2}}$ converges.
- **B.** $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n}}{\sqrt n}$ converges.
- **C.** $\displaystyle\sum_{n=1}^{\infty}\frac{\cos(n\pi)}{n^{2}}$ converges absolutely.
- **D.** $\displaystyle\sum_{n=1}^{\infty}\frac{1}{\sqrt{n^{2}+n}}$ converges.
- **E.** $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n(n+2)}$ converges.
        `,
        solution: String.raw`
**Answer: D** (this is the false statement). ✓✓✓

- **D is false.** Limit comparison with $\sum\frac1n$: $\dfrac{1/\sqrt{n^2+n}}{1/n}=\dfrac{n}{\sqrt{n^2+n}}\to1\in(0,\infty)$, and $\sum\frac1n$ diverges, so D **diverges**. ✓
- A is true: Integral Test, $\displaystyle\int_2^\infty\frac{dx}{x(\ln x)^2}=\Big[-\frac1{\ln x}\Big]_2^\infty=\frac1{\ln2}<\infty$.
- B is true: Alternating Series Test ($\frac1{\sqrt n}\downarrow0$).
- C is true: $\cos(n\pi)=(-1)^n$, so $\left|\frac{\cos n\pi}{n^2}\right|=\frac1{n^2}$, a convergent $p$-series.
- E is true: $\frac1{n(n+2)}\le\frac1{n^2}$ (Comparison Test).
        `
      },
      {
        number: 5, label: 'A5', title: 'Recognising a power series', section: 'Section A · §11.5', marks: 2,
        prompt: String.raw`
The power series $1+3x^{2}+9x^{4}+27x^{6}+\cdots+3^{n}x^{2n}+\cdots$ is the representation of

- **A.** $\dfrac{1}{1-3x}$ for $|x|<\dfrac13$.
- **B.** $\dfrac{1}{1-3x^{2}}$ for $|x|<\dfrac{1}{\sqrt3}$.
- **C.** $\dfrac{1}{\left(1-x^{2}\right)^{3}}$ for $|x|<1$.
- **D.** $\dfrac{1}{1+3x^{2}}$ for $|x|<\dfrac{1}{\sqrt3}$.
- **E.** $\dfrac{1}{3-x^{2}}$ for $|x|<\sqrt3$.
        `,
        solution: String.raw`
**Answer: B.** ✓✓

The series is $\displaystyle\sum_{n=0}^{\infty}\left(3x^2\right)^n$, a geometric series with first term $1$ and ratio $r=3x^2$. It equals $\dfrac{1}{1-3x^2}$ provided $|3x^2|<1$, i.e. $x^2<\frac13$, i.e. $|x|<\dfrac1{\sqrt3}$.

- **A** has ratio $3x$, not $3x^2$. **D** has alternating signs. **C** and **E** have the wrong general term.
        `
      },
      {
        number: 6, label: 'A6', title: 'Classifying a differential equation', section: 'Section A · §12', marks: 2,
        prompt: String.raw`
The differential equation $\dfrac{dy}{dx}=\dfrac{x+y}{x-y}$ is

- **A.** separable.
- **B.** linear.
- **C.** exact.
- **D.** homogeneous.
- **E.** none of the above.
        `,
        solution: String.raw`
**Answer: D.** ✓✓

Divide numerator and denominator by $x$: $\dfrac{dy}{dx}=\dfrac{1+\frac yx}{1-\frac yx}$, a function of $\dfrac yx$ alone, so the equation is **homogeneous**. ✓

- Not separable: $\frac{x+y}{x-y}$ cannot be written as $g(x)h(y)$.
- Not linear in $y$: $y$ appears in the denominator.
- Not exact: written as $(x+y)\,dx-(x-y)\,dy=0$, $M_y=1$ but $N_x=-1$.
        `
      },
      {
        number: 7, label: 'B1', title: 'Volume by cross-sections; a trigonometric integral', section: 'Section B · §8.4, §9.4', marks: 12,
        prompt: String.raw`
The base of a solid is the region enclosed by the curves $y=x^{2}$ and $y=4$. The cross-sections of the solid perpendicular to the $x$-axis are equilateral triangles, each having one side lying in the base region.

**(a)** Find the side length of the cross-section at a fixed $x$, and hence its area. (Recall that an equilateral triangle of side $s$ has area $\frac{\sqrt3}{4}s^{2}$.) (2)

**(b)** Write down the integral that gives the volume of the solid, and evaluate it. (4)

**(c)** Evaluate $\displaystyle\int_0^{\pi/2}\sin^{2}x\,\cos^{4}x\,dx.$ (6)
        `,
        solution: String.raw`
**(a)** The curves meet where $x^2=4$, i.e. $x=\pm2$, so the base region lies over $-2\le x\le2$. At a fixed $x$ the base region is the vertical segment from $y=x^2$ up to $y=4$, so the side of the triangle is
$$s(x)=4-x^2.$$ ✓
$$A(x)=\frac{\sqrt3}{4}\left(4-x^2\right)^2.$$ ✓

**(b)**
$$V=\int_{-2}^{2}\frac{\sqrt3}{4}\left(4-x^2\right)^2dx=\frac{\sqrt3}{2}\int_0^{2}\left(16-8x^2+x^4\right)dx$$ ✓✓ (the integrand is even)
$$=\frac{\sqrt3}{2}\left[16x-\frac{8x^3}{3}+\frac{x^5}{5}\right]_0^2=\frac{\sqrt3}{2}\left(32-\frac{64}{3}+\frac{32}{5}\right)=\frac{\sqrt3}{2}\cdot\frac{256}{15}=\frac{128\sqrt3}{15}.$$ ✓✓

**(c)** Both powers are even, so use double-angle identities: ✓
$$\sin^2x\cos^4x=(\sin x\cos x)^2\cos^2x=\frac{\sin^22x}{4}\cdot\frac{1+\cos2x}{2}=\frac18\left(\sin^22x+\sin^22x\cos2x\right).$$ ✓✓
Now $\displaystyle\int_0^{\pi/2}\sin^22x\,dx=\int_0^{\pi/2}\frac{1-\cos4x}{2}dx=\Big[\frac x2-\frac{\sin4x}{8}\Big]_0^{\pi/2}=\frac\pi4$, ✓ and $\displaystyle\int_0^{\pi/2}\sin^22x\cos2x\,dx=\Big[\frac{\sin^32x}{6}\Big]_0^{\pi/2}=0$ (since $\sin\pi=0$). ✓
$$\int_0^{\pi/2}\sin^2x\cos^4x\,dx=\frac18\cdot\frac\pi4=\frac{\pi}{32}.$$ ✓
        `
      },
      {
        number: 8, label: 'B2', title: 'Partial fractions', section: 'Section B · §9.5', marks: 9,
        prompt: String.raw`
**(a)** Write $\dfrac{6x^{2}-2x+2}{(x-1)^{2}\left(x^{2}+1\right)}$ in terms of its partial fractions. (5)

**(b)** Hence evaluate $\displaystyle\int_2^{3}\frac{6x^{2}-2x+2}{(x-1)^{2}\left(x^{2}+1\right)}\,dx$. Simplify your answer using the identity $\arctan a-\arctan b=\arctan\dfrac{a-b}{1+ab}$. (4)
        `,
        solution: String.raw`
**(a)** The fraction is proper. The repeated linear factor and the irreducible quadratic give
$$\frac{6x^2-2x+2}{(x-1)^2(x^2+1)}=\frac{A}{x-1}+\frac{B}{(x-1)^2}+\frac{Cx+D}{x^2+1},$$ ✓
$$6x^2-2x+2=A(x-1)\left(x^2+1\right)+B\left(x^2+1\right)+(Cx+D)(x-1)^2.$$ ✓
Put $x=1$: $6=2B$, so $B=3$. ✓ Comparing $x^3$: $0=A+C$, so $C=-A$. Comparing constants: $2=-A+B+D\Rightarrow D=A-1$. Comparing $x^1$: $-2=A+C-2D=A-A-2D\Rightarrow D=1$, hence $A=2$ and $C=-2$. ✓✓ (Check $x^2$: $-A+B+(-2C+D)=-2+3+5=6$ ✓.)
$$\frac{6x^2-2x+2}{(x-1)^2(x^2+1)}=\frac{2}{x-1}+\frac{3}{(x-1)^2}+\frac{1-2x}{x^2+1}.$$ ✓

**(b)** Integrate each term:
$$\int(\dots)\,dx=2\ln|x-1|-\frac{3}{x-1}+\arctan x-\ln\left(x^2+1\right).$$ ✓✓
At $x=3$: $2\ln2-\frac32+\arctan3-\ln10$. At $x=2$: $0-3+\arctan2-\ln5$. Subtracting,
$$\left(2\ln2-\ln10+\ln5\right)+\left(-\tfrac32+3\right)+\left(\arctan3-\arctan2\right)=\ln2+\frac32+\arctan\frac{3-2}{1+6}.$$ ✓
using $2\ln2-\ln10+\ln5=2\ln2-\ln2=\ln2$. Therefore
$$\int_2^3(\dots)\,dx=\ln2+\frac32+\arctan\frac17\approx2.335.$$ ✓✓
        `
      },
      {
        number: 9, label: 'B3', title: 'Improper integrals', section: 'Section B · §10', marks: 10,
        prompt: String.raw`
**(a)** Explain why the integral $\displaystyle\int_0^{\infty}\frac{dx}{\sqrt{x}\,(1+x)}$ is called improper. (2)

**(b)** Determine whether the improper integral
$$\int_0^{1}\frac{\arcsin x}{\sqrt{1-x}}\,dx$$
converges or diverges. If it converges, find its value. HINT: Use integration by parts, and note that $\sqrt{1-x^{2}}=\sqrt{1-x}\,\sqrt{1+x}$. (8)
        `,
        solution: String.raw`
**(a)** It is improper for **two** reasons: the upper limit is infinite (Type I), and the integrand $\dfrac{1}{\sqrt x(1+x)}\to\infty$ as $x\to0^+$, so it is unbounded at the lower limit (Type II). ✓✓ The integral must be split at an interior point, and both pieces must converge for the whole to converge.

**(b)** The integrand is undefined at the upper limit $x=1$ (the denominator vanishes while $\arcsin1=\frac\pi2\neq0$), so we define the integral as $\displaystyle\lim_{t\to1^-}\int_0^t$. ✓ Integrate by parts with $u=\arcsin x$, $dv=(1-x)^{-1/2}dx$, so $du=\dfrac{dx}{\sqrt{1-x^2}}$ and $v=-2\sqrt{1-x}$: ✓
$$\int_0^t\frac{\arcsin x}{\sqrt{1-x}}dx=\Big[-2\sqrt{1-x}\,\arcsin x\Big]_0^t+2\int_0^t\frac{\sqrt{1-x}}{\sqrt{1-x^2}}dx.$$ ✓
Since $\sqrt{1-x^2}=\sqrt{1-x}\sqrt{1+x}$, the new integrand simplifies to $\dfrac{1}{\sqrt{1+x}}$: ✓✓
$$=-2\sqrt{1-t}\,\arcsin t+2\Big[2\sqrt{1+x}\Big]_0^t=-2\sqrt{1-t}\,\arcsin t+4\left(\sqrt{1+t}-1\right).$$ ✓
As $t\to1^-$, $\sqrt{1-t}\,\arcsin t\to0\cdot\frac\pi2=0$, so the integral **converges** and its value is
$$4\left(\sqrt2-1\right)\approx1.657.$$ ✓✓
        `
      },
      {
        number: 10, label: 'B4', title: 'Proof and statement of a test', section: 'Section B · §11.3', marks: 8,
        prompt: String.raw`
**(a)** Prove that the harmonic series $\displaystyle\sum_{n=1}^{\infty}\frac1n$ diverges. (5)

**(b)** Give the statement of the Limit Comparison Test. (3)
        `,
        solution: String.raw`
**(a)** Let $s_N=\displaystyle\sum_{n=1}^{N}\frac1n$. Look at the partial sums $s_{2^k}$, grouping the terms in blocks: ✓
$$s_{2^k}=1+\frac12+\left(\frac13+\frac14\right)+\left(\frac15+\cdots+\frac18\right)+\cdots+\left(\frac{1}{2^{k-1}+1}+\cdots+\frac{1}{2^k}\right).$$
The block with indices $2^{j-1}+1,\dots,2^j$ contains $2^{j-1}$ terms, each at least $\dfrac1{2^j}$ (the smallest term in the block), so the block sum is at least $2^{j-1}\cdot\dfrac{1}{2^j}=\dfrac12$. ✓✓ Therefore
$$s_{2^k}\ge1+\frac k2.$$ ✓
The right side tends to $\infty$, so the sequence of partial sums is unbounded. (If the series converged, its partial sums would be bounded.) Hence the harmonic series **diverges**. ∎ ✓✓

**(b) Limit Comparison Test.** Let $a_n>0$ and $b_n>0$ for all $n$, and suppose $\displaystyle\lim_{n\to\infty}\frac{a_n}{b_n}=L$ where $0<L<\infty$. ✓✓ Then $\sum a_n$ and $\sum b_n$ either both converge or both diverge. ✓
        `
      },
      {
        number: 11, label: 'B5', title: 'Sequences and series', section: 'Section B · §11.1–11.3', marks: 9,
        prompt: String.raw`
**(a)** Determine, giving reasons, whether the sequence $\{a_n\}=\left\{n\ln\left(1+\dfrac2n\right)\right\}$ is convergent or divergent. If it is convergent, state to what value it converges. (3)

**(b)** Using (a) or otherwise, decide (with reasons) if the following series converges or diverges.
$$\sum_{n=1}^{\infty}n\ln\left(1+\frac2n\right)$$ (2)

**(c)** Use the Integral Test to decide whether the following series converges or diverges. Verify that the conditions of the test hold.
$$\sum_{n=2}^{\infty}\frac{1}{n\sqrt{\ln n}}$$ (4)
        `,
        solution: String.raw`
**(a)** Write $a_n=\dfrac{\ln\left(1+\frac2n\right)}{1/n}$, of the form $\frac00$, and consider $f(x)=\dfrac{\ln(1+2/x)}{1/x}$. By l'Hôpital's rule,
$$\lim_{x\to\infty}f(x)=\lim_{x\to\infty}\frac{\frac{-2/x^2}{1+2/x}}{-1/x^2}=\lim_{x\to\infty}\frac{2}{1+\frac2x}=2.$$ ✓✓
(Alternatively $a_n=\ln\left(1+\frac2n\right)^n\to\ln e^2=2$ by continuity of $\ln$.) So the sequence **converges to $2$**. ✓

**(b)** Since $a_n\to2\ne0$, the **Divergence Test** shows that $\sum n\ln\left(1+\frac2n\right)$ **diverges**. ✓✓

**(c)** Let $f(x)=\dfrac{1}{x\sqrt{\ln x}}$ for $x\ge2$. It is continuous and positive; it is decreasing because $x$ and $\sqrt{\ln x}$ are positive and increasing, so their product increases. ✓ Put $u=\ln x$, $du=\dfrac{dx}{x}$:
$$\int_2^\infty\frac{dx}{x\sqrt{\ln x}}=\lim_{b\to\infty}\Big[2\sqrt{\ln x}\Big]_2^b=\lim_{b\to\infty}\left(2\sqrt{\ln b}-2\sqrt{\ln2}\right)=\infty.$$ ✓✓
The integral diverges, so by the Integral Test the series **diverges**. ✓
        `
      },
      {
        number: 12, label: 'B6', title: 'Power series representations', section: 'Section B · §11.5', marks: 8,
        prompt: String.raw`
**(a)** Starting from $\dfrac{d}{dx}\ln\left(1+x^{2}\right)=\dfrac{2x}{1+x^{2}}$ and the geometric series, obtain a power series for $\ln\left(1+x^{2}\right)$ and state its radius of convergence. (4)

**(b)** Hence express $\displaystyle\int_0^{1/2}\ln\left(1+x^{2}\right)dx$ as a series. Use the first two terms to approximate the integral, and give an upper bound for the error, justifying it. (4)
        `,
        solution: String.raw`
**(a)** For $|x|<1$, $\dfrac{1}{1+x^2}=\displaystyle\sum_{n=0}^\infty(-1)^nx^{2n}$, so
$$\frac{2x}{1+x^2}=\sum_{n=0}^{\infty}2(-1)^nx^{2n+1}.$$ ✓
Integrate term by term from $0$ to $x$ (allowed inside the interval of convergence; $\ln1=0$ fixes the constant):
$$\ln\left(1+x^2\right)=\sum_{n=0}^{\infty}\frac{2(-1)^nx^{2n+2}}{2n+2}=\sum_{n=0}^{\infty}\frac{(-1)^nx^{2n+2}}{n+1}=x^2-\frac{x^4}{2}+\frac{x^6}{3}-\cdots$$ ✓✓
Term-by-term integration keeps the radius: **$R=1$**. ✓

**(b)** Integrate again term by term over $\left[0,\frac12\right]$ (inside $|x|<1$):
$$\int_0^{1/2}\ln(1+x^2)\,dx=\sum_{n=0}^{\infty}\frac{(-1)^n\left(\frac12\right)^{2n+3}}{(n+1)(2n+3)}=\frac1{24}-\frac1{320}+\frac1{2688}-\cdots$$ ✓
Two terms: $\dfrac1{24}-\dfrac1{320}=\dfrac{40-3}{960}=\dfrac{37}{960}\approx0.03854$. ✓
The series alternates and its terms decrease in absolute value to $0$, so by the Alternating Series Estimation Theorem the error is at most the first omitted term:
$$|\text{error}|\le\frac1{2688}\approx3.7\times10^{-4}.$$ ✓
        `
      },
      {
        number: 13, label: 'B7', title: 'Differential equations — exact', section: 'Section B · §12.4', marks: 9,
        prompt: String.raw`
Given the differential equation
$$\left(ye^{xy}+2x\right)dx+\left(xe^{xy}+3y^{2}\right)dy=0.$$

**(a)** Show that this equation is exact. (2)

**(b)** Find the general solution of the equation. (4)

**(c)** Find the particular solution given $y=1$ when $x=0$. (3)
        `,
        solution: String.raw`
**(a)** Let $M=ye^{xy}+2x$ and $N=xe^{xy}+3y^2$. Then
$$\frac{\partial M}{\partial y}=e^{xy}+xye^{xy},\qquad\frac{\partial N}{\partial x}=e^{xy}+xye^{xy}.$$ ✓✓
They are equal, so the equation is **exact**.

**(b)** There is a function $F(x,y)$ with $F_x=M$ and $F_y=N$. Integrating $M$ with respect to $x$:
$$F(x,y)=\int\left(ye^{xy}+2x\right)dx=e^{xy}+x^2+g(y).$$ ✓✓
Differentiate with respect to $y$: $F_y=xe^{xy}+g'(y)$. This must equal $N=xe^{xy}+3y^2$, so $g'(y)=3y^2$ and $g(y)=y^3$. ✓ The general solution is
$$e^{xy}+x^2+y^3=C.$$ ✓

**(c)** At $(x,y)=(0,1)$: $e^{0}+0+1=2$, so $C=2$. ✓✓
$$e^{xy}+x^2+y^3=2.$$ ✓
        `
      },
      {
        number: 14, label: 'B8', title: 'Differential equations — linear', section: 'Section B · §12.3', marks: 11,
        prompt: String.raw`
Given the differential equation
$$e^{x}\frac{dy}{dx}+2e^{x}y=x.$$

**(a)** Show that this is a linear differential equation by writing it in standard form. (2)

**(b)** Find the integrating factor $e^{\int P(x)\,dx}$. (3)

**(c)** Hence find the general solution of the differential equation. (6)
        `,
        solution: String.raw`
**(a)** Divide through by $e^x$:
$$\frac{dy}{dx}+2y=xe^{-x}.$$ ✓✓
This is of the form $y'+P(x)y=Q(x)$ with $P(x)=2$ and $Q(x)=xe^{-x}$, so it is **linear**.

**(b)** $\displaystyle\int P(x)\,dx=\int2\,dx=2x$, so the integrating factor is ✓✓
$$\mu(x)=e^{2x}.$$ ✓

**(c)** Multiply by $\mu$: 
$$\frac{d}{dx}\left(ye^{2x}\right)=xe^{-x}\cdot e^{2x}=xe^{x}.$$ ✓
Integrate by parts ($u=x$, $dv=e^xdx$): $\displaystyle\int xe^xdx=xe^x-\int e^xdx=(x-1)e^x+C$. ✓✓
$$ye^{2x}=(x-1)e^{x}+C\ \Longrightarrow\ \boxed{y=(x-1)e^{-x}+Ce^{-2x}}$$ ✓✓
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
    instructions: [
      'Section A (Questions A1–A6): multiple choice. Choose ONE answer for each question. [14 marks]',
      'Section B (Questions B1–B8): give FULL solutions and show ALL workings. [76 marks]',
      'No calculators are allowed.',
      'You have 2 hours in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: 'A1', title: 'Choosing a substitution', section: 'Section A · §9.4', marks: 2,
        prompt: String.raw`
Which of the following is the most appropriate way to begin evaluating $\displaystyle\int\sin^{5}x\,\cos^{2}x\,dx$?

- **A.** Let $u=\sin x$.
- **B.** Let $u=\cos x$.
- **C.** Let $u=\tan x$.
- **D.** Let $u=\tan\dfrac x2$.
- **E.** Repeatedly use $\sin^{2}x=\dfrac{1-\cos2x}{2}$ and $\cos^{2}x=\dfrac{1+\cos2x}{2}$.
        `,
        solution: String.raw`
**Answer: B.** ✓✓

The power of $\sin x$ is **odd**. Save one factor of $\sin x$ (it becomes $-du$), and write the remaining $\sin^4x=(1-\cos^2x)^2$ in terms of $\cos x$:
$$\int\sin^5x\cos^2x\,dx=\int(1-\cos^2x)^2\cos^2x\,\sin x\,dx=-\int(1-u^2)^2u^2\,du,\qquad u=\cos x.$$
This is a polynomial integral.

- **A** would need to save a $\cos x$, but $\cos^2x$ is an even power, so this fails.
- **C** and **D** work in principle but produce far messier rational integrals.
- **E** is used when *both* powers are even; it does work here but is much longer.
        `
      },
      {
        number: 2, label: 'A2', title: 'Form of a partial fraction decomposition', section: 'Section A · §9.5', marks: 3,
        prompt: String.raw`
The correct general form (with undetermined constants) of the partial fraction decomposition of
$$\frac{x^{2}+1}{x^{3}(x-1)\left(x^{2}+x+1\right)}$$
is

- **A.** $\dfrac{A}{x^{3}}+\dfrac{B}{x-1}+\dfrac{Cx+D}{x^{2}+x+1}$.
- **B.** $\dfrac{A}{x}+\dfrac{B}{x^{2}}+\dfrac{C}{x^{3}}+\dfrac{D}{x-1}+\dfrac{E}{x^{2}+x+1}$.
- **C.** $\dfrac{A}{x}+\dfrac{B}{x^{2}}+\dfrac{C}{x^{3}}+\dfrac{D}{x-1}+\dfrac{Ex+F}{x^{2}+x+1}$.
- **D.** $\dfrac{A}{x}+\dfrac{B}{x-1}+\dfrac{Cx+D}{x^{2}+x+1}$.
- **E.** $\dfrac{Ax+B}{x^{3}}+\dfrac{C}{x-1}+\dfrac{Dx+E}{x^{2}+x+1}$.
        `,
        solution: String.raw`
**Answer: C.** ✓✓✓

The fraction is proper (numerator degree $2$, denominator degree $6$). ✓ The factor $x^3$ is a repeated linear factor of multiplicity $3$, so it needs **three** terms $\frac Ax+\frac B{x^2}+\frac C{x^3}$; ✓ the simple factor $x-1$ needs $\frac{D}{x-1}$; and the irreducible quadratic $x^2+x+1$ (discriminant $1-4<0$) needs a **linear** numerator $\frac{Ex+F}{x^2+x+1}$. ✓

- **A** and **D** omit powers of $x$; **B** has only a constant over the quadratic; **E** has no $\frac1x$ term (its $x^3$ part is only $\frac{Ax+B}{x^3}=\frac A{x^2}+\frac B{x^3}$).
        `
      },
      {
        number: 3, label: 'A3', title: 'Interval of convergence', section: 'Section A · §11.4', marks: 2,
        prompt: String.raw`
The interval of convergence of the power series $\displaystyle\sum_{n=1}^{\infty}\frac{(x-4)^{n}}{n^{2}\,5^{n}}$ is

- **A.** $(-1,9)$.
- **B.** $[-1,9)$.
- **C.** $(-1,9]$.
- **D.** $[-1,9]$.
- **E.** None of these.
        `,
        solution: String.raw`
**Answer: D.** ✓✓

Ratio Test: $\left|\dfrac{a_{n+1}}{a_n}\right|=\dfrac{|x-4|}{5}\cdot\dfrac{n^2}{(n+1)^2}\to\dfrac{|x-4|}{5}$, so the series converges for $|x-4|<5$, i.e. on $(-1,9)$ with $R=5$. ✓

- $x=9$: the series is $\sum\frac1{n^2}$, a convergent $p$-series ($p=2$).
- $x=-1$: the series is $\sum\frac{(-1)^n}{n^2}$, which converges absolutely.

Both endpoints converge, so the interval is $[-1,9]$. ✓
        `
      },
      {
        number: 4, label: 'A4', title: 'A true statement about improper integrals', section: 'Section A · §10', marks: 3,
        prompt: String.raw`
Which of the following statements is TRUE?

- **A.** $\displaystyle\int_1^{\infty}\frac{dx}{\sqrt x}$ converges.
- **B.** $\displaystyle\int_0^{1}\frac{dx}{\sqrt x}$ diverges.
- **C.** $\displaystyle\int_{-1}^{1}\frac{dx}{x^{2}}=-2$.
- **D.** $\displaystyle\int_e^{\infty}\frac{dx}{x(\ln x)^{2}}=1$.
- **E.** $\displaystyle\int_0^{1}\frac{dx}{x}$ converges.
        `,
        solution: String.raw`
**Answer: D.** ✓✓✓

**D:** with $u=\ln x$, $\displaystyle\int_e^b\frac{dx}{x(\ln x)^2}=\Big[-\frac1{\ln x}\Big]_e^b=1-\frac1{\ln b}\to1$. ✓ True.

- **A** is false: $p=\frac12\le1$, so $\int_1^\infty x^{-1/2}dx=\lim2\sqrt b-2=\infty$.
- **B** is false: $\int_0^1x^{-1/2}dx=\left[2\sqrt x\right]_0^1=2$ converges.
- **C** is false: the integrand is unbounded at $x=0$ (inside the interval) and $\int_0^1x^{-2}dx$ diverges; a positive integrand can never give $-2$.
- **E** is false: $\int_0^1\frac{dx}{x}=\lim_{t\to0^+}(-\ln t)=\infty$.
        `
      },
      {
        number: 5, label: 'A5', title: 'A limit of a Riemann sum', section: 'Section A · §8.1–8.2', marks: 2,
        prompt: String.raw`
$\displaystyle\lim_{n\to\infty}\ \sum_{k=1}^{n}\frac1n\sqrt{\frac kn}$ equals

- **A.** $\dfrac12$.
- **B.** $\dfrac23$.
- **C.** $1$.
- **D.** $\dfrac32$.
- **E.** $\infty$ (the limit does not exist).
        `,
        solution: String.raw`
**Answer: B.** ✓✓

With $\Delta x=\dfrac1n$ and $x_k=\dfrac kn$, the sum $\displaystyle\sum_{k=1}^n\sqrt{x_k}\,\Delta x$ is the right-endpoint Riemann sum of $f(x)=\sqrt x$ on $[0,1]$. As $n\to\infty$ it tends to
$$\int_0^1\sqrt x\,dx=\Big[\frac23x^{3/2}\Big]_0^1=\frac23.$$ ✓
        `
      },
      {
        number: 6, label: 'A6', title: 'A Maclaurin coefficient', section: 'Section A · §11.6', marks: 2,
        prompt: String.raw`
The coefficient of $x^{4}$ in the Maclaurin series of $e^{x}\cos x$ is

- **A.** $\dfrac1{12}$.
- **B.** $-\dfrac1{12}$.
- **C.** $\dfrac16$.
- **D.** $-\dfrac16$.
- **E.** $\dfrac1{24}$.
        `,
        solution: String.raw`
**Answer: D.** ✓✓

Multiply the series $e^x=1+x+\frac{x^2}{2}+\frac{x^3}{6}+\frac{x^4}{24}+\cdots$ and $\cos x=1-\frac{x^2}{2}+\frac{x^4}{24}-\cdots$ and collect the $x^4$ terms: ✓
$$1\cdot\frac{x^4}{24}+\frac{x^2}{2}\cdot\left(-\frac{x^2}{2}\right)+\frac{x^4}{24}\cdot1=\left(\frac1{24}-\frac14+\frac1{24}\right)x^4=-\frac16\,x^4.$$
(The odd-power terms of $e^x$ pair with odd powers of $\cos x$, which do not exist, so contribute nothing to $x^4$.)
        `
      },
      {
        number: 7, label: 'B1', title: 'Volume by washers; trigonometric substitution', section: 'Section B · §8.3, §9.3', marks: 12,
        prompt: String.raw`
**(a)** Let $R$ be the region enclosed by the curves $y=\sqrt{x}$ and $y=\dfrac{x}{2}$. Write down an integral for the volume of the solid obtained by revolving $R$ about the line $y=-1$, and evaluate it. (6)

**(b)** Evaluate $\displaystyle\int_5^{10}\frac{\sqrt{x^{2}-25}}{x^{2}}\,dx.$ (6)
        `,
        solution: String.raw`
**(a)** The curves meet where $\sqrt x=\dfrac x2$, i.e. $x=\dfrac{x^2}{4}$, so $x=0$ or $x=4$. On $(0,4)$ the curve $y=\sqrt x$ lies above $y=\frac x2$ (test $x=1$: $1>\frac12$). ✓

The axis $y=-1$ lies below $R$, so a vertical strip sweeps out a **washer**. The distance from the axis to a curve $y=g(x)$ is $g(x)+1$: outer radius $\sqrt x+1$, inner radius $\frac x2+1$. ✓✓
$$V=\pi\int_0^4\left[\left(\sqrt x+1\right)^2-\left(\frac x2+1\right)^2\right]dx=\pi\int_0^4\left[\left(x+2\sqrt x+1\right)-\left(\frac{x^2}{4}+x+1\right)\right]dx$$ ✓
$$=\pi\int_0^4\left(2\sqrt x-\frac{x^2}{4}\right)dx=\pi\left[\frac43x^{3/2}-\frac{x^3}{12}\right]_0^4=\pi\left(\frac{32}{3}-\frac{16}{3}\right)=\frac{16\pi}{3}.$$ ✓✓

**(b)** The radical $\sqrt{x^2-25}$ suggests $x=5\sec\theta$, $0\le\theta<\frac\pi2$. Then $dx=5\sec\theta\tan\theta\,d\theta$ and $\sqrt{x^2-25}=5\tan\theta$. ✓
$$\int\frac{\sqrt{x^2-25}}{x^2}dx=\int\frac{5\tan\theta\cdot5\sec\theta\tan\theta}{25\sec^2\theta}d\theta=\int\frac{\tan^2\theta}{\sec\theta}d\theta=\int(\sec\theta-\cos\theta)\,d\theta,$$ ✓✓
using $\tan^2\theta=\sec^2\theta-1$. This equals $\ln|\sec\theta+\tan\theta|-\sin\theta$. ✓ Limits: $x=5\Rightarrow\theta=0$; $x=10\Rightarrow\sec\theta=2$, $\theta=\frac\pi3$, with $\tan\theta=\sqrt3$, $\sin\theta=\frac{\sqrt3}{2}$. ✓
$$\int_5^{10}\frac{\sqrt{x^2-25}}{x^2}dx=\ln\left(2+\sqrt3\right)-\frac{\sqrt3}{2}\approx0.451.$$ ✓
        `
      },
      {
        number: 8, label: 'B2', title: 'Partial fractions', section: 'Section B · §9.5', marks: 9,
        prompt: String.raw`
**(a)** Factorise $x^{4}-1$ completely over the real numbers, and write $\dfrac{1}{x^{4}-1}$ in terms of its partial fractions. (5)

**(b)** Hence evaluate $\displaystyle\int_2^{3}\frac{dx}{x^{4}-1}$. Simplify your answer using the identity $\arctan a-\arctan b=\arctan\dfrac{a-b}{1+ab}$. (4)
        `,
        solution: String.raw`
**(a)** Difference of squares twice: $x^4-1=(x^2-1)(x^2+1)=(x-1)(x+1)(x^2+1)$, where $x^2+1$ is irreducible. ✓ So
$$\frac{1}{x^4-1}=\frac{A}{x-1}+\frac{B}{x+1}+\frac{Cx+D}{x^2+1},$$ ✓
$$1=A(x+1)\left(x^2+1\right)+B(x-1)\left(x^2+1\right)+(Cx+D)\left(x^2-1\right).$$
Put $x=1$: $1=4A$, so $A=\frac14$. Put $x=-1$: $1=-4B$, so $B=-\frac14$. ✓ Compare $x^3$: $0=A+B+C\Rightarrow C=0$. Compare constants: $1=A-B-D=\frac12-D\Rightarrow D=-\frac12$. ✓✓
$$\frac{1}{x^4-1}=\frac{1}{4(x-1)}-\frac{1}{4(x+1)}-\frac{1}{2\left(x^2+1\right)}.$$ ✓ (Check at $x=2$: $\frac14-\frac1{12}-\frac1{10}=\frac{15-5-6}{60}=\frac1{15}$ ✓.)

**(b)**
$$\int\frac{dx}{x^4-1}=\frac14\ln\left|\frac{x-1}{x+1}\right|-\frac12\arctan x+C.$$ ✓✓
Evaluate from $2$ to $3$: 
$$\frac14\left[\ln\frac24-\ln\frac13\right]-\frac12\left[\arctan3-\arctan2\right]=\frac14\ln\frac32-\frac12\left(\arctan3-\arctan2\right).$$ ✓
Since $\arctan3-\arctan2=\arctan\dfrac{3-2}{1+6}=\arctan\dfrac17$ (valid as $ab=6>-1$):
$$\int_2^3\frac{dx}{x^4-1}=\frac14\ln\frac32-\frac12\arctan\frac17\approx0.0304.$$ ✓✓
        `
      },
      {
        number: 9, label: 'B3', title: 'Improper integrals', section: 'Section B · §10', marks: 10,
        prompt: String.raw`
**(a)** Explain why the integral $\displaystyle\int_{-1}^{1}\frac{dx}{x^{2}}$ is called improper. (2)

**(b)** Determine whether the improper integral
$$\int_0^{1}x^{2}(\ln x)^{2}\,dx$$
converges or diverges. If it converges, find its value. HINT: Use integration by parts (twice). (8)
        `,
        solution: String.raw`
**(a)** The integrand $\dfrac1{x^2}$ is **undefined and unbounded at $x=0$**, which lies **inside** the interval $[-1,1]$. ✓ The Fundamental Theorem cannot be used over the whole interval, so the integral is improper (Type II): it must be split as $\displaystyle\int_{-1}^0+\int_0^1$, each written as a limit, and it converges only if **both** pieces converge. ✓ (Here neither does.)

**(b)** The integrand $x^2(\ln x)^2$ is undefined at the lower limit $x=0$ (where $\ln x\to-\infty$), so the integral is improper and equals $\displaystyle\lim_{t\to0^+}\int_t^1x^2(\ln x)^2dx$. ✓ 

*First integration by parts:* $u=(\ln x)^2$, $dv=x^2dx$, so $du=\dfrac{2\ln x}{x}dx$, $v=\dfrac{x^3}{3}$: ✓
$$\int x^2(\ln x)^2dx=\frac{x^3}{3}(\ln x)^2-\frac23\int x^2\ln x\,dx.$$ ✓
*Second integration by parts:* $u=\ln x$, $dv=x^2dx$: $\displaystyle\int x^2\ln x\,dx=\frac{x^3}{3}\ln x-\frac{x^3}{9}$. ✓✓ Therefore
$$\int x^2(\ln x)^2dx=\frac{x^3}{3}(\ln x)^2-\frac{2x^3}{9}\ln x+\frac{2x^3}{27}=:F(x).$$ ✓
Now $F(1)=0-0+\frac2{27}=\frac2{27}$, and as $t\to0^+$, $F(t)\to0$ because $t^3(\ln t)^k\to0$ for $k=1,2$ (a power beats a logarithm; l'Hôpital). ✓ So the integral **converges** and
$$\int_0^1x^2(\ln x)^2dx=\frac{2}{27}.$$ ✓✓
        `
      },
      {
        number: 10, label: 'B4', title: 'Proof and statement of a test', section: 'Section B · §11.3', marks: 8,
        prompt: String.raw`
**(a)** Prove that if the series $\displaystyle\sum_{n=1}^{\infty}|a_n|$ converges, then the series $\displaystyle\sum_{n=1}^{\infty}a_n$ converges. (5)

**(b)** Give the statement of the Ratio Test. (3)
        `,
        solution: String.raw`
**(a)** For every $n$ we have $-|a_n|\le a_n\le|a_n|$. Adding $|a_n|$ throughout:
$$0\le a_n+|a_n|\le2|a_n|.$$ ✓✓
Since $\sum|a_n|$ converges, $\sum2|a_n|=2\sum|a_n|$ converges. ✓ By the Comparison Test (non-negative terms), $\sum\left(a_n+|a_n|\right)$ converges. ✓ Finally
$$\sum a_n=\sum\left(a_n+|a_n|\right)-\sum|a_n|,$$
a difference of two convergent series, hence convergent. ∎ ✓

**(b) Ratio Test.** Let $\displaystyle L=\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|$ (assuming the limit exists or is $\infty$). ✓
- If $L<1$, the series $\sum a_n$ converges absolutely. ✓
- If $L>1$ (including $L=\infty$), the series diverges.
- If $L=1$, the test is inconclusive. ✓
        `
      },
      {
        number: 11, label: 'B5', title: 'Sequences and series', section: 'Section B · §11.1–11.3', marks: 9,
        prompt: String.raw`
**(a)** Determine, giving reasons, whether the sequence $\{a_n\}=\left\{\left(3^{n}+2^{n}\right)^{1/n}\right\}$ is convergent or divergent. If it is convergent, state to what value it converges. (3)

**(b)** Using (a) or otherwise, decide (with reasons) if the following series converges or diverges.
$$\sum_{n=1}^{\infty}\frac{1}{\left(3^{n}+2^{n}\right)^{1/n}}$$ (2)

**(c)** Decide (with reasons) if the following series converges or diverges.
$$\sum_{n=1}^{\infty}\frac{(2n)!}{(n!)^{2}\,5^{n}}$$ (4)
        `,
        solution: String.raw`
**(a)** Use the Squeeze Theorem. Since $3^n\le3^n+2^n\le2\cdot3^n$, taking $n$-th roots: ✓
$$3\le\left(3^n+2^n\right)^{1/n}\le3\cdot2^{1/n}.$$ ✓
As $n\to\infty$, $2^{1/n}\to1$, so the right side tends to $3$. Hence $a_n\to3$: the sequence is **convergent with limit $3$**. ✓

**(b)** The general term is $\dfrac1{a_n}\to\dfrac13\ne0$. By the **Divergence Test** the series **diverges**. ✓✓

**(c)** **Ratio Test** with $c_n=\dfrac{(2n)!}{(n!)^2\,5^n}>0$: ✓
$$\frac{c_{n+1}}{c_n}=\frac{(2n+2)(2n+1)}{(n+1)^2}\cdot\frac15=\frac{2(2n+1)}{5(n+1)}.$$ ✓✓
This tends to $\dfrac45<1$, so the series **converges**. ✓
        `
      },
      {
        number: 12, label: 'B6', title: 'Power series — radius and interval of convergence', section: 'Section B · §11.4', marks: 8,
        prompt: String.raw`
Find the radius of convergence and the interval of convergence of the following power series.
$$\sum_{n=1}^{\infty}\frac{(-1)^{n}(x+2)^{2n}}{n\cdot9^{n}}.$$ (8)
        `,
        solution: String.raw`
**Ratio Test.** 
$$\left|\frac{a_{n+1}}{a_n}\right|=\frac{|x+2|^{2n+2}}{(n+1)9^{n+1}}\cdot\frac{n\,9^n}{|x+2|^{2n}}=\frac{|x+2|^2}{9}\cdot\frac{n}{n+1}\ \longrightarrow\ \frac{|x+2|^2}{9}.$$ ✓✓
The series converges when $\dfrac{|x+2|^2}{9}<1$, i.e. $|x+2|<3$. So **$R=3$** and the series converges on $(-5,1)$. ✓✓

**Endpoints.** For $x=1$ or $x=-5$ we have $(x+2)^2=9$, so $(x+2)^{2n}=9^n$ and, at both endpoints, the series becomes ✓
$$\sum_{n=1}^{\infty}\frac{(-1)^n}{n},$$
the alternating harmonic series: $\frac1n>0$, decreasing, tending to $0$, so it **converges** by the Alternating Series Test. ✓✓

**Interval of convergence: $[-5,1]$**, radius $R=3$. ✓
        `
      },
      {
        number: 13, label: 'B7', title: 'Differential equations — homogeneous', section: 'Section B · §12.2', marks: 9,
        prompt: String.raw`
Given the differential equation
$$\frac{dy}{dx}=\frac{x^{2}+y^{2}}{xy},\qquad x>0,\ y>0.$$

**(a)** Show that this is a homogeneous differential equation. (2)

**(b)** Use the substitution $y=vx$ to find the general solution of the equation. (4)

**(c)** Find the particular solution given $y=2$ when $x=1$. (3)
        `,
        solution: String.raw`
**(a)** Divide numerator and denominator by $x^2$:
$$\frac{dy}{dx}=\frac{1+\left(\frac yx\right)^2}{\frac yx}.$$ ✓
The right-hand side is a function of $\dfrac yx$ only, so the equation is **homogeneous**. ✓

**(b)** Let $y=vx$, so $\dfrac{dy}{dx}=v+x\dfrac{dv}{dx}$. Then ✓
$$v+x\frac{dv}{dx}=\frac{1+v^2}{v}\ \Longrightarrow\ x\frac{dv}{dx}=\frac{1+v^2}{v}-v=\frac1v.$$ ✓
Separate the variables: $v\,dv=\dfrac{dx}{x}$. Integrating, $\dfrac{v^2}{2}=\ln x+C$. ✓ Back-substituting $v=\frac yx$:
$$\frac{y^2}{2x^2}=\ln x+C\quad\Longleftrightarrow\quad y^2=2x^2\left(\ln x+C\right).$$ ✓

**(c)** With $y(1)=2$: $\dfrac{4}{2}=\ln1+C$, so $C=2$. ✓✓
$$y^2=2x^2\left(\ln x+2\right)\ \Longrightarrow\ y=x\sqrt{2\ln x+4}\qquad(y>0).$$ ✓
        `
      },
      {
        number: 14, label: 'B8', title: 'Differential equations — linear', section: 'Section B · §12.3', marks: 11,
        prompt: String.raw`
Given the differential equation
$$x\ln x\,\frac{dy}{dx}+y=2\ln x,\qquad x>1.$$

**(a)** Show that this is a linear differential equation by writing it in standard form. (2)

**(b)** Find the integrating factor $e^{\int P(x)\,dx}$. (3)

**(c)** Hence find the general solution of the differential equation, and then the particular solution satisfying $y=3$ when $x=e^{2}$. (6)
        `,
        solution: String.raw`
**(a)** Divide by $x\ln x$ (positive for $x>1$):
$$\frac{dy}{dx}+\frac{1}{x\ln x}\,y=\frac{2}{x}.$$ ✓✓
This has the form $y'+P(x)y=Q(x)$ with $P(x)=\dfrac1{x\ln x}$ and $Q(x)=\dfrac2x$, so it is **linear**.

**(b)** With $u=\ln x$, $du=\dfrac{dx}{x}$: $\displaystyle\int\frac{dx}{x\ln x}=\int\frac{du}{u}=\ln(\ln x)$ (as $\ln x>0$). ✓✓ Hence
$$\mu(x)=e^{\ln(\ln x)}=\ln x.$$ ✓

**(c)** Multiply by $\mu=\ln x$:
$$\frac{d}{dx}\big(y\ln x\big)=\frac{2\ln x}{x}.$$ ✓
Integrate (with $u=\ln x$): $y\ln x=(\ln x)^2+C$, so the **general solution** is ✓✓
$$y=\ln x+\frac{C}{\ln x}.$$
With $y(e^2)=3$: $3=2+\dfrac C2$, so $C=2$. ✓✓ The **particular solution** is
$$y=\ln x+\frac{2}{\ln x}.$$
        `
      }
    ]
  }
];
