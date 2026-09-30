/**
 * data/exams-tutorial.js — Tutorial Quiz Test 4
 *
 * Three distinct 40-mark / 50-minute test papers. Every paper mixes both chapters:
 *   Section A  Improper integrals (Chapter 10)        questions A1, A2, ...
 *   Section B  Sequences and series (Chapter 11)      questions B1, B2, ...
 *
 * Same format as data/exams.js: text fields use String.raw so LaTeX
 * backslashes are written normally, and display maths ($$...$$) stays on ONE line.
 */
const TUTORIAL_QUIZ_TESTS = [
{
    id: "tqt4-test1",
    label: "Test 1",
    topics: "Improper integrals (Type I, II) and sequences, series, power series.",
    date: "Tutorial Quiz Test 4 · Test 1",
    kind: 'IMPROPER INTEGRALS & SEQUENCES AND SERIES',
    totalMarks: 40,
    duration: 50,
    instructions: [
      'Section A (Chapter 10): improper integrals. [16 marks]',
      'Section B (Chapter 11): sequences and series. [24 marks]',
      'Answer ALL questions and show ALL workings. Write improper integrals as limits, and name each series test you use.',
      'No calculators are allowed.',
      'You have 50 minutes in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: "A1", title: "Recognising improper integrals", section: "Section A · Improper integrals · Type I / II", marks: 5,
        prompt: String.raw`
For each integral, state whether it is improper. If it is, give its type (Type I, Type II, or doubly improper) and say where the problem occurs.

**(i)** $\displaystyle\int_1^{\infty}\frac{dx}{x^{3}}$
**(ii)** $\displaystyle\int_0^{4}\frac{dx}{\sqrt{x}}$
**(iii)** $\displaystyle\int_{-1}^{1}\frac{dx}{x^{2}}$
**(iv)** $\displaystyle\int_0^{1}\frac{\sin x}{x}\,dx$
**(v)** $\displaystyle\int_0^{\infty}\frac{dx}{\sqrt{x}}$
        `,
        solution: String.raw`
**(i)** Improper, **Type I**: the upper limit of integration is infinite. ✓

**(ii)** Improper, **Type II**: $\dfrac1{\sqrt x}\to\infty$ as $x\to0^+$, a discontinuity at the lower endpoint $a=0$. ✓

**(iii)** Improper, **Type II**: the discontinuity is at $x=0$, an **interior** point of $[-1,1]$, so the integral must be split at $0$. ✓

**(iv)** **Not improper.** Although $x=0$ is not in the domain of $\dfrac{\sin x}{x}$, $\displaystyle\lim_{x\to0}\frac{\sin x}{x}=1$ is finite, so the integrand is bounded and this is an ordinary definite integral. ✓

**(v)** **Doubly improper**: infinite upper limit (Type I) **and** an infinite discontinuity at $x=0$ (Type II). ✓
        `
      },
      {
        number: 2, label: "A2", title: "Type I, Case 1: upper limit infinite", section: "Section A · Improper integrals · Type I", marks: 5,
        prompt: String.raw`
Determine whether $$\int_1^{\infty}\frac{\ln x}{x^{2}}\,dx$$ converges, and if so find its value.
        `,
        solution: String.raw`
Write it as a limit: $$\int_1^{\infty}\frac{\ln x}{x^{2}}\,dx=\lim_{t\to\infty}\int_1^{t}\frac{\ln x}{x^{2}}\,dx.$$ ✓

Integrate by parts with $u=\ln x$, $dv=x^{-2}dx$, so $du=\dfrac{dx}{x}$, $v=-\dfrac1x$: ✓
$$\int\frac{\ln x}{x^{2}}\,dx=-\frac{\ln x}{x}+\int\frac{dx}{x^{2}}=-\frac{\ln x}{x}-\frac1x.$$ ✓

Evaluate between $1$ and $t$: $$\left(-\frac{\ln t}{t}-\frac1t\right)-\left(0-1\right)=1-\frac{\ln t}{t}-\frac1t.$$ ✓

As $t\to\infty$, $\dfrac1t\to0$ and, by L'Hôpital, $\dfrac{\ln t}{t}\to\dfrac{1/t}{1}\to0$. Hence the integral **converges** to $$\boxed{1}.$$ ✓
        `
      },
      {
        number: 3, label: "A3", title: "Type II: discontinuity at an endpoint", section: "Section A · Improper integrals · Type II", marks: 6,
        prompt: String.raw`
Evaluate each integral, or show that it diverges.

**(a)** $\displaystyle\int_0^{1}\frac{dx}{\sqrt{1-x}}$ (discontinuity at the upper endpoint) [3]

**(b)** $\displaystyle\int_0^{2}\ln x\,dx$ (discontinuity at the lower endpoint) [3]
        `,
        solution: String.raw`
**(a)** The integrand blows up at $b=1$, so $$\int_0^1\frac{dx}{\sqrt{1-x}}=\lim_{t\to1^-}\Big[-2\sqrt{1-x}\Big]_0^{t}=\lim_{t\to1^-}\left(2-2\sqrt{1-t}\right)=\boxed{2}.$$ ✓✓✓

**(b)** $\ln x\to-\infty$ as $x\to0^+$, so $$\int_0^2\ln x\,dx=\lim_{t\to0^+}\Big[x\ln x-x\Big]_t^{2}=2\ln2-2-\lim_{t\to0^+}\left(t\ln t-t\right).$$ ✓✓

Since $t\ln t=\dfrac{\ln t}{1/t}\to\dfrac{1/t}{-1/t^{2}}=-t\to0$, the limit is $0$ and the integral converges to $$\boxed{2\ln2-2}.$$ ✓
        `
      },
      {
        number: 4, label: "B1", title: "Behaviour of sequences", section: "Section B · Sequences · Cases 1–3", marks: 8,
        prompt: String.raw`
Classify each sequence as **convergent** (give the limit), **divergent to** $\pm\infty$, or **oscillatory divergent**.

**(a)** $a_n=\dfrac{3n^{2}+1}{2n^{2}-n}$
**(b)** $a_n=\dfrac{n^{2}}{n+1}$
**(c)** $a_n=(-1)^{n}\dfrac{n}{n+1}$
**(d)** $a_n=\dfrac{(-1)^{n}}{n}$
        `,
        solution: String.raw`
**(a)** Divide by $n^2$: $\dfrac{3+1/n^2}{2-1/n}\to\dfrac32$. **Convergent**, limit $\dfrac32$. ✓✓

**(b)** $\dfrac{n^2}{n+1}=\dfrac{n}{1+1/n}\to\infty$. **Diverges to $+\infty$.** ✓✓

**(c)** The terms alternate in sign while $|a_n|=\dfrac{n}{n+1}\to1$, so they approach $-1$ (odd $n$) and $+1$ (even $n$) without settling. **Oscillatory divergence.** ✓✓

**(d)** $|a_n|=\dfrac1n\to0$, so $a_n\to0$. **Convergent**, limit $0$. ✓✓
        `
      },
      {
        number: 5, label: "B2", title: "Absolute vs conditional convergence", section: "Section B · Series · Absolute / conditional", marks: 8,
        prompt: String.raw`
Classify each series as **absolutely convergent**, **conditionally convergent**, or **divergent**. Justify your answers.

**(a)** $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n}}{n^{2}}$
**(b)** $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{\sqrt n}$
**(c)** $\displaystyle\sum_{n=1}^{\infty}(-1)^{n}\frac{n}{2n+1}$
**(d)** $\displaystyle\sum_{n=1}^{\infty}\frac{(-2)^{n}}{n!}$
        `,
        solution: String.raw`
**(a)** $\sum\left|\dfrac{(-1)^n}{n^2}\right|=\sum\dfrac1{n^2}$ converges ($p=2$). **Absolutely convergent.** ✓✓

**(b)** The AST applies: $\dfrac1{\sqrt n}$ is decreasing with limit $0$, so the series converges. But $\sum\dfrac1{\sqrt n}$ diverges ($p=\tfrac12$). **Conditionally convergent.** ✓✓

**(c)** $\dfrac{n}{2n+1}\to\dfrac12\neq0$, so the terms do not tend to $0$; by the Divergence Test the series **diverges**. ✓✓

**(d)** Ratio Test on $|a_n|$: $\dfrac{2^{n+1}}{(n+1)!}\cdot\dfrac{n!}{2^n}=\dfrac{2}{n+1}\to0<1$. **Absolutely convergent.** ✓✓
        `
      },
      {
        number: 6, label: "B3", title: "Radius and interval of convergence", section: "Section B · Power series · Interval of convergence", marks: 8,
        prompt: String.raw`
Find the radius of convergence and the interval of convergence of $$\sum_{n=1}^{\infty}\frac{(x-2)^{n}}{n\,3^{n}}.$$ Test both endpoints separately.
        `,
        solution: String.raw`
**Ratio Test:** $$\left|\frac{a_{n+1}}{a_n}\right|=\frac{|x-2|^{n+1}}{(n+1)3^{n+1}}\cdot\frac{n\,3^n}{|x-2|^n}=\frac{|x-2|}{3}\cdot\frac{n}{n+1}\to\frac{|x-2|}{3}.$$ ✓✓

Convergence requires $\dfrac{|x-2|}{3}<1$, i.e. $|x-2|<3$, so $$\boxed{R=3}.$$ ✓ The open interval is $-1<x<5$. ✓

**Endpoints** ($x=a\pm R=2\pm3$):

- $x=5$: the series becomes $\displaystyle\sum\frac{3^n}{n3^n}=\sum\frac1n$, the harmonic series, which **diverges**. ✓✓
- $x=-1$: the series becomes $\displaystyle\sum\frac{(-3)^n}{n3^n}=\sum\frac{(-1)^n}{n}$, which **converges** by the AST. ✓✓

Interval of convergence: $$\boxed{[-1,\,5)}.$$ ✓
        `
      }
    ]
  },
{
    id: "tqt4-test2",
    label: "Test 2",
    topics: "More Type I and II cases, sequence tests, p-series, power series.",
    date: "Tutorial Quiz Test 4 · Test 2",
    kind: 'IMPROPER INTEGRALS & SEQUENCES AND SERIES',
    totalMarks: 40,
    duration: 50,
    instructions: [
      'Section A (Chapter 10): improper integrals. [11 marks]',
      'Section B (Chapter 11): sequences and series. [29 marks]',
      'Answer ALL questions and show ALL workings. Write improper integrals as limits, and name each series test you use.',
      'No calculators are allowed.',
      'You have 50 minutes in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: "A1", title: "Type I, Case 2: lower limit infinite", section: "Section A · Improper integrals · Type I", marks: 5,
        prompt: String.raw`
Evaluate, or show that it diverges: $$\int_{-\infty}^{0}x\,e^{x}\,dx.$$
        `,
        solution: String.raw`
$$\int_{-\infty}^{0}x e^{x}\,dx=\lim_{t\to-\infty}\int_t^{0}x e^{x}\,dx.$$ ✓

By parts ($u=x$, $dv=e^x dx$): $\displaystyle\int xe^x\,dx=xe^x-e^x$. ✓✓

Then $$\int_t^{0}xe^x\,dx=\big(0-1\big)-\big(te^{t}-e^{t}\big)=-1-te^{t}+e^{t}.$$ ✓

As $t\to-\infty$: $e^t\to0$, and $te^t=\dfrac{t}{e^{-t}}\to0$ by L'Hôpital ($\dfrac{1}{-e^{-t}}\to0$). So the integral **converges** to $$\boxed{-1}.$$ ✓
        `
      },
      {
        number: 2, label: "A2", title: "Type II: interior discontinuity", section: "Section A · Improper integrals · Type II", marks: 6,
        prompt: String.raw`
**(a)** Evaluate $\displaystyle\int_0^{3}\frac{dx}{(x-1)^{2/3}}$. [3]

**(b)** A student computes $\displaystyle\int_0^{2}\frac{dx}{(x-1)^{2}}=\Big[-\frac{1}{x-1}\Big]_0^2=-2$. Explain what is wrong and determine the true behaviour of the integral. [3]
        `,
        solution: String.raw`
**(a)** The discontinuity is at $c=1\in(0,3)$, so split there: $$\int_0^3=\int_0^1+\int_1^3,\qquad \int(x-1)^{-2/3}dx=3(x-1)^{1/3}.$$ ✓

$$\int_0^1=\lim_{t\to1^-}\Big[3(x-1)^{1/3}\Big]_0^t=0-3(-1)=3,\qquad \int_1^3=\lim_{t\to1^+}\Big[3(x-1)^{1/3}\Big]_t^3=3\sqrt[3]{2}.$$ ✓✓

Both converge, so the integral equals $$\boxed{3+3\sqrt[3]{2}}.$$

**(b)** The integrand $\dfrac{1}{(x-1)^2}$ is **positive** everywhere, so a negative answer is impossible: the student ignored the infinite discontinuity at $x=1$. ✓

Splitting properly: $$\int_0^1\frac{dx}{(x-1)^2}=\lim_{t\to1^-}\left[-\frac1{x-1}\right]_0^t=\lim_{t\to1^-}\left(-\frac{1}{t-1}-1\right)=+\infty.$$ ✓ One piece diverges, so the entire integral **diverges** (to $+\infty$). ✓
        `
      },
      {
        number: 3, label: "B1", title: "Monotonic bounded sequence", section: "Section B · Sequences · Case 4", marks: 6,
        prompt: String.raw`
A sequence is defined by $a_1=\sqrt{2}$ and $a_{n+1}=\sqrt{2+a_n}$.

**(a)** Prove by induction that $0<a_n<2$ for all $n$. [2]

**(b)** Show that $(a_n)$ is increasing. [2]

**(c)** Explain why $(a_n)$ converges and find its limit. [2]
        `,
        solution: String.raw`
**(a)** $a_1=\sqrt2\in(0,2)$. If $0<a_n<2$ then $0<a_{n+1}=\sqrt{2+a_n}<\sqrt4=2$. By induction $0<a_n<2$ for all $n$. ✓✓

**(b)** $a_{n+1}>a_n\iff\sqrt{2+a_n}>a_n\iff2+a_n>a_n^2\iff(a_n-2)(a_n+1)<0$, which is true because $0<a_n<2$. ✓✓

**(c)** The sequence is increasing and bounded above, so it converges (monotone bounded sequences converge). ✓ Let the limit be $L$: $L=\sqrt{2+L}$, so $L^2-L-2=0$, i.e. $(L-2)(L+1)=0$. Since $L>0$, $$\boxed{L=2}.$$ ✓
        `
      },
      {
        number: 4, label: "B2", title: "Divergence test and geometric series", section: "Section B · Series · Divergence and geometric tests", marks: 6,
        prompt: String.raw`
Determine whether each series converges. If it does and it is geometric, find its sum.

**(a)** $\displaystyle\sum_{n=1}^{\infty}\frac{n}{3n+1}$
**(b)** $\displaystyle\sum_{n=0}^{\infty}3\left(-\frac25\right)^{n}$
**(c)** $\displaystyle\sum_{n=1}^{\infty}\frac{2^{\,n+1}}{3^{\,n}}$
        `,
        solution: String.raw`
**(a)** $\displaystyle\lim_{n\to\infty}\frac{n}{3n+1}=\frac13\neq0$, so by the **Divergence Test** the series **diverges**. ✓✓

**(b)** Geometric with $a=3$, $r=-\dfrac25$, $|r|<1$, so it converges: $$\sum=\frac{a}{1-r}=\frac{3}{1+\frac25}=\boxed{\frac{15}{7}}.$$ ✓✓

**(c)** $\dfrac{2^{n+1}}{3^n}=2\left(\dfrac23\right)^n$, geometric with $r=\dfrac23$. Starting at $n=1$, the first term is $\dfrac43$: $$\sum=\frac{4/3}{1-2/3}=\boxed{4}.$$ ✓✓
        `
      },
      {
        number: 5, label: "B3", title: "p-series and the integral test", section: "Section B · Series · p-series, integral test", marks: 6,
        prompt: String.raw`
**(a)** State the $p$-series test, and use it to decide the behaviour of $\displaystyle\sum\frac{1}{n^{3/2}}$ and $\displaystyle\sum\frac{1}{\sqrt n}$. [2]

**(b)** Use the Integral Test to determine whether $\displaystyle\sum_{n=2}^{\infty}\frac{1}{n\ln n}$ converges. Check the conditions of the test. [4]
        `,
        solution: String.raw`
**(a)** $\sum\dfrac1{n^p}$ converges if $p>1$ and diverges if $p\le1$. ✓ Thus $\sum n^{-3/2}$ ($p=\tfrac32>1$) **converges** and $\sum n^{-1/2}$ ($p=\tfrac12\le1$) **diverges**. ✓

**(b)** Let $f(x)=\dfrac{1}{x\ln x}$ on $[2,\infty)$. It is positive and continuous, and decreasing because the denominator $x\ln x$ is positive and increasing. ✓✓

$$\int_2^{\infty}\frac{dx}{x\ln x}=\lim_{t\to\infty}\Big[\ln(\ln x)\Big]_2^{t}=\lim_{t\to\infty}\left(\ln(\ln t)-\ln(\ln2)\right)=\infty.$$ ✓

The integral diverges, so by the Integral Test the series **diverges**. ✓
        `
      },
      {
        number: 6, label: "B4", title: "The three possible radii", section: "Section B · Power series · Radius of convergence", marks: 5,
        prompt: String.raw`
**(a)** Find the radius of convergence of $\displaystyle\sum_{n=0}^{\infty}n!\,x^{n}$. [2]

**(b)** Find the radius of convergence of $\displaystyle\sum_{n=0}^{\infty}\frac{x^{n}}{n!}$. [2]

**(c)** State the three possible outcomes for the radius of convergence $R$ of a power series centred at $a$. [1]
        `,
        solution: String.raw`
**(a)** $\left|\dfrac{a_{n+1}}{a_n}\right|=\dfrac{(n+1)!\,|x|^{n+1}}{n!\,|x|^n}=(n+1)|x|\to\infty$ for every $x\neq0$. The series converges **only at $x=0$**, so $R=0$. ✓✓

**(b)** $\left|\dfrac{a_{n+1}}{a_n}\right|=\dfrac{|x|}{n+1}\to0<1$ for **every** $x$, so $R=\infty$ and the series converges for all real $x$. ✓✓

**(c)** Either $R=0$ (converges only at $x=a$), $R=\infty$ (converges for all $x$), or $0<R<\infty$ (converges for $|x-a|<R$, diverges for $|x-a|>R$, endpoints must be tested separately). ✓
        `
      },
      {
        number: 7, label: "B5", title: "Interval of convergence with a coefficient", section: "Section B · Power series · Interval of convergence", marks: 6,
        prompt: String.raw`
Find the interval of convergence of $$\sum_{n=1}^{\infty}\frac{4^{n}x^{n}}{\sqrt n}.$$
        `,
        solution: String.raw`
**Ratio Test:** $$\left|\frac{a_{n+1}}{a_n}\right|=4|x|\sqrt{\frac{n}{n+1}}\to4|x|.$$ ✓ The series converges when $4|x|<1$, so $R=\dfrac14$ and the open interval is $-\dfrac14<x<\dfrac14$. ✓✓

**Endpoints:**

- $x=\dfrac14$: $\displaystyle\sum\frac{1}{\sqrt n}$, a $p$-series with $p=\tfrac12\le1$, **diverges**. ✓
- $x=-\dfrac14$: $\displaystyle\sum\frac{(-1)^n}{\sqrt n}$ **converges** by the AST. ✓

Interval of convergence: $$\boxed{\left[-\tfrac14,\ \tfrac14\right)}.$$ ✓
        `
      }
    ]
  },
{
    id: "tqt4-test3",
    label: "Test 3",
    topics: "Doubly improper integrals and comparison, alternating, ratio and root tests.",
    date: "Tutorial Quiz Test 4 · Test 3",
    kind: 'IMPROPER INTEGRALS & SEQUENCES AND SERIES',
    totalMarks: 40,
    duration: 50,
    instructions: [
      'Section A (Chapter 10): improper integrals. [13 marks]',
      'Section B (Chapter 11): sequences and series. [27 marks]',
      'Answer ALL questions and show ALL workings. Write improper integrals as limits, and name each series test you use.',
      'No calculators are allowed.',
      'You have 50 minutes in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: "A1", title: "Type I, Case 3: both limits infinite", section: "Section A · Improper integrals · Type I", marks: 7,
        prompt: String.raw`
**(a)** Show that $$\int_{-\infty}^{\infty}\frac{dx}{x^{2}+4x+13}$$ converges and find its value. [4]

**(b)** Explain why $\displaystyle\int_{-\infty}^{\infty}\frac{x}{x^{2}+1}\,dx$ diverges, even though the integrand is an odd function. [3]
        `,
        solution: String.raw`
**(a)** Complete the square: $x^2+4x+13=(x+2)^2+9$, so $\displaystyle\int\frac{dx}{(x+2)^2+9}=\frac13\arctan\!\left(\frac{x+2}{3}\right)$. ✓

Split at $c=-2$ (both halves must converge separately): ✓
$$\int_{-\infty}^{-2}=\lim_{t\to-\infty}\frac13\Big[\arctan\tfrac{x+2}{3}\Big]_t^{-2}=\frac13\left(0+\frac\pi2\right)=\frac\pi6,\qquad \int_{-2}^{\infty}=\frac13\left(\frac\pi2-0\right)=\frac\pi6.$$ ✓

Both converge, so the integral converges to $$\boxed{\dfrac{\pi}{3}}.$$ ✓

**(b)** Split at $0$: $$\int_0^{\infty}\frac{x}{x^2+1}\,dx=\lim_{t\to\infty}\tfrac12\ln(1+t^{2})=\infty.$$ ✓✓ So one of the two required pieces diverges, and therefore the whole integral diverges.

The "odd function, so the answer is $0$" shortcut is **not valid** for improper integrals: it would need both halves to converge first. ✓
        `
      },
      {
        number: 2, label: "A2", title: "Doubly improper integrals", section: "Section A · Improper integrals · Combined case", marks: 6,
        prompt: String.raw`
**(a)** Show that $\displaystyle\int_0^{\infty}\frac{dx}{\sqrt{x}\,(1+x)}$ is doubly improper, and evaluate it. [4]

**(b)** Given that $\displaystyle\int_1^{\infty}\frac{dx}{x^{2}}=1$, explain why $\displaystyle\int_0^{\infty}\frac{dx}{x^{2}}$ nevertheless diverges. [2]
        `,
        solution: String.raw`
**(a)** It is improper at both ends: the upper limit is $\infty$ (Type I) and the integrand $\to\infty$ as $x\to0^+$ (Type II). ✓ Split at $x=1$.

Use $u=\sqrt x$, so $\dfrac{dx}{\sqrt x}=2\,du$: $$\int\frac{dx}{\sqrt{x}(1+x)}=\int\frac{2\,du}{1+u^{2}}=2\arctan\sqrt{x}.$$ ✓

$$\int_0^1=2\left(\frac\pi4-0\right)=\frac\pi2,\qquad \int_1^{\infty}=2\left(\frac\pi2-\frac\pi4\right)=\frac\pi2.$$ ✓

Both pieces converge, so the integral converges to $$\boxed{\pi}.$$ ✓

**(b)** Split at $1$. The tail $\int_1^\infty x^{-2}dx$ converges, but $$\int_0^1\frac{dx}{x^{2}}=\lim_{t\to0^+}\left[-\frac1x\right]_t^1=\lim_{t\to0^+}\left(\frac1t-1\right)=\infty.$$ ✓ Every piece of a doubly improper integral must converge, so the whole integral diverges. ✓
        `
      },
      {
        number: 3, label: "B1", title: "Direct and limit comparison tests", section: "Section B · Series · Comparison tests", marks: 7,
        prompt: String.raw`
**(a)** Use the Direct Comparison Test to show that $\displaystyle\sum_{n=2}^{\infty}\frac{1}{\sqrt n-1}$ diverges. [3]

**(b)** Use the Limit Comparison Test to determine whether $\displaystyle\sum_{n=2}^{\infty}\frac{2n+1}{n^{3}-2}$ converges. [4]
        `,
        solution: String.raw`
**(a)** For $n\ge2$: $0<\sqrt n-1<\sqrt n$, so $\dfrac{1}{\sqrt n-1}>\dfrac1{\sqrt n}>0$. ✓✓ Since $\sum\dfrac1{\sqrt n}$ is a divergent $p$-series ($p=\tfrac12$), the larger series **diverges** by Direct Comparison. ✓

**(b)** The terms are positive for $n\ge2$. Compare with $b_n=\dfrac1{n^2}$: ✓ $$\lim_{n\to\infty}\frac{(2n+1)/(n^3-2)}{1/n^2}=\lim_{n\to\infty}\frac{2n^3+n^2}{n^3-2}=2.$$ ✓✓ The limit is finite and positive, and $\sum\dfrac1{n^2}$ converges ($p=2>1$), so the series **converges**. ✓
        `
      },
      {
        number: 4, label: "B2", title: "Alternating series test", section: "Section B · Series · AST, absolute vs conditional", marks: 7,
        prompt: String.raw`
Consider $\displaystyle\sum_{n=1}^{\infty}(-1)^{n}\frac{n}{n^{2}+1}$.

**(a)** Show that the series converges using the Alternating Series Test. [5]

**(b)** Determine whether it converges absolutely or conditionally. [2]
        `,
        solution: String.raw`
**(a)** Let $b_n=\dfrac{n}{n^2+1}>0$.

- $\displaystyle\lim_{n\to\infty}b_n=\lim\frac{1/n}{1+1/n^2}=0$. ✓✓
- Decreasing: for $f(x)=\dfrac{x}{x^2+1}$, $f'(x)=\dfrac{1-x^2}{(x^2+1)^2}\le0$ for $x\ge1$, so $b_{n+1}\le b_n$. ✓✓

Both conditions hold, so the series **converges** by the AST. ✓

**(b)** $\sum|a_n|=\sum\dfrac{n}{n^2+1}$. Limit comparison with $\sum\dfrac1n$: $\dfrac{n^2}{n^2+1}\to1$, and $\sum\dfrac1n$ diverges, so $\sum|a_n|$ diverges. ✓ Hence the series is **conditionally convergent**. ✓
        `
      },
      {
        number: 5, label: "B3", title: "The ratio test", section: "Section B · Series · Ratio test", marks: 7,
        prompt: String.raw`
Use the Ratio Test where possible.

**(a)** $\displaystyle\sum_{n=1}^{\infty}\frac{n!}{3^{n}}$ [2]

**(b)** $\displaystyle\sum_{n=1}^{\infty}\frac{n^{2}}{2^{n}}$ [3]

**(c)** What does the Ratio Test tell you about $\displaystyle\sum\frac1{n^{2}}$ and $\displaystyle\sum\frac1n$? What can be concluded about each series? [2]
        `,
        solution: String.raw`
**(a)** $\dfrac{a_{n+1}}{a_n}=\dfrac{(n+1)!}{3^{n+1}}\cdot\dfrac{3^n}{n!}=\dfrac{n+1}{3}\to\infty>1$. The series **diverges**. ✓✓

**(b)** $\dfrac{a_{n+1}}{a_n}=\dfrac{(n+1)^2}{2^{n+1}}\cdot\dfrac{2^n}{n^2}=\dfrac12\left(\dfrac{n+1}{n}\right)^2\to\dfrac12<1$. ✓✓ The series **converges** absolutely. ✓

**(c)** For both, $L=\lim\left|\dfrac{a_{n+1}}{a_n}\right|=1$, so the Ratio Test is **inconclusive**. ✓ Another test is needed: by the $p$-series test, $\sum\dfrac1{n^2}$ converges and $\sum\dfrac1n$ diverges. ✓
        `
      },
      {
        number: 6, label: "B4", title: "The root test", section: "Section B · Series · Root test", marks: 6,
        prompt: String.raw`
Use the Root Test to decide the behaviour of each series.

**(a)** $\displaystyle\sum_{n=1}^{\infty}\left(\frac{2n+1}{3n+4}\right)^{n}$
**(b)** $\displaystyle\sum_{n=1}^{\infty}\left(1+\frac1n\right)^{n^{2}}$
**(c)** $\displaystyle\sum_{n=2}^{\infty}\left(\frac{\ln n}{n}\right)^{n}$
        `,
        solution: String.raw`
**(a)** $\sqrt[n]{|a_n|}=\dfrac{2n+1}{3n+4}\to\dfrac23<1$. **Converges.** ✓✓

**(b)** $\sqrt[n]{|a_n|}=\left(1+\dfrac1n\right)^{n}\to e>1$. **Diverges.** ✓✓

**(c)** $\sqrt[n]{|a_n|}=\dfrac{\ln n}{n}\to0<1$. **Converges.** ✓✓
        `
      }
    ]
  }
];
