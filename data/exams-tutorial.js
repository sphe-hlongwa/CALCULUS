/**
 * data/exams-tutorial.js — Tutorial Quiz Test 4
 *
 * Six distinct 40-mark / 50-minute test papers (Tests 1-3, then Tests 4-6). Every paper mixes both chapters:
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
    topics: "Type I/II and series basics",
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

**(d)** Ratio Test on $|a_n|$: $\dfrac{2^{n+1}}{(n+1)!}\cdot\dfrac{n!}{2^n}=\dfrac{2}{n+1}\to0\lt 1$. **Absolutely convergent.** ✓✓
        `
      },
      {
        number: 6, label: "B3", title: "Radius and interval of convergence", section: "Section B · Power series · Interval of convergence", marks: 8,
        prompt: String.raw`
Find the radius of convergence and the interval of convergence of $$\sum_{n=1}^{\infty}\frac{(x-2)^{n}}{n\,3^{n}}.$$ Test both endpoints separately.
        `,
        solution: String.raw`
**Ratio Test:** $$\left|\frac{a_{n+1}}{a_n}\right|=\frac{|x-2|^{n+1}}{(n+1)3^{n+1}}\cdot\frac{n\,3^n}{|x-2|^n}=\frac{|x-2|}{3}\cdot\frac{n}{n+1}\to\frac{|x-2|}{3}.$$ ✓✓

Convergence requires $\dfrac{|x-2|}{3}\lt 1$, i.e. $|x-2|\lt 3$, so $$\boxed{R=3}.$$ ✓ The open interval is $-1\lt x\lt 5$. ✓

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
    topics: "p-series and power series",
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

**(a)** Prove by induction that $0\lt a_n\lt 2$ for all $n$. [2]

**(b)** Show that $(a_n)$ is increasing. [2]

**(c)** Explain why $(a_n)$ converges and find its limit. [2]
        `,
        solution: String.raw`
**(a)** $a_1=\sqrt2\in(0,2)$. If $0\lt a_n\lt 2$ then $0\lt a_{n+1}=\sqrt{2+a_n}\lt \sqrt4=2$. By induction $0\lt a_n\lt 2$ for all $n$. ✓✓

**(b)** $a_{n+1}>a_n\iff\sqrt{2+a_n}>a_n\iff2+a_n>a_n^2\iff(a_n-2)(a_n+1)\lt 0$, which is true because $0\lt a_n\lt 2$. ✓✓

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

**(b)** Geometric with $a=3$, $r=-\dfrac25$, $|r|\lt 1$, so it converges: $$\sum=\frac{a}{1-r}=\frac{3}{1+\frac25}=\boxed{\frac{15}{7}}.$$ ✓✓

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

**(b)** $\left|\dfrac{a_{n+1}}{a_n}\right|=\dfrac{|x|}{n+1}\to0\lt 1$ for **every** $x$, so $R=\infty$ and the series converges for all real $x$. ✓✓

**(c)** Either $R=0$ (converges only at $x=a$), $R=\infty$ (converges for all $x$), or $0\lt R\lt \infty$ (converges for $|x-a|\lt R$, diverges for $|x-a|>R$, endpoints must be tested separately). ✓
        `
      },
      {
        number: 7, label: "B5", title: "Interval of convergence with a coefficient", section: "Section B · Power series · Interval of convergence", marks: 6,
        prompt: String.raw`
Find the interval of convergence of $$\sum_{n=1}^{\infty}\frac{4^{n}x^{n}}{\sqrt n}.$$
        `,
        solution: String.raw`
**Ratio Test:** $$\left|\frac{a_{n+1}}{a_n}\right|=4|x|\sqrt{\frac{n}{n+1}}\to4|x|.$$ ✓ The series converges when $4|x|\lt 1$, so $R=\dfrac14$ and the open interval is $-\dfrac14\lt x\lt \dfrac14$. ✓✓

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
    topics: "Doubly improper and series tests",
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
**(a)** For $n\ge2$: $0\lt \sqrt n-1\lt \sqrt n$, so $\dfrac{1}{\sqrt n-1}>\dfrac1{\sqrt n}>0$. ✓✓ Since $\sum\dfrac1{\sqrt n}$ is a divergent $p$-series ($p=\tfrac12$), the larger series **diverges** by Direct Comparison. ✓

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

**(b)** $\dfrac{a_{n+1}}{a_n}=\dfrac{(n+1)^2}{2^{n+1}}\cdot\dfrac{2^n}{n^2}=\dfrac12\left(\dfrac{n+1}{n}\right)^2\to\dfrac12\lt 1$. ✓✓ The series **converges** absolutely. ✓

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
**(a)** $\sqrt[n]{|a_n|}=\dfrac{2n+1}{3n+4}\to\dfrac23\lt 1$. **Converges.** ✓✓

**(b)** $\sqrt[n]{|a_n|}=\left(1+\dfrac1n\right)^{n}\to e>1$. **Diverges.** ✓✓

**(c)** $\sqrt[n]{|a_n|}=\dfrac{\ln n}{n}\to0\lt 1$. **Converges.** ✓✓
        `
      }
    ]
  },
{
    id: "tqt4-test4",
    label: "Test 4",
    topics: "Parameters and telescoping",
    date: "Tutorial Quiz Test 4 · Test 4",
    kind: 'IMPROPER INTEGRALS & SEQUENCES AND SERIES',
    totalMarks: 40,
    duration: 50,
    instructions: [
      'Section A (Chapter 10): improper integrals. [14 marks]',
      'Section B (Chapter 11): sequences and series. [26 marks]',
      'Answer ALL questions and show ALL workings. Write improper integrals as limits, and name each series test you use.',
      'No calculators are allowed.',
      'You have 50 minutes in total.',
      'Use the “Show Memo” button under each question to check your solution once you have attempted it.'
    ],
    questions: [
      {
        number: 1, label: "A1", title: "Partial fractions and the comparison test", section: "Section A · Improper integrals · Type I", marks: 7,
        prompt: String.raw`
**(a)** Evaluate $$\int_1^{\infty}\frac{dx}{x^{2}(x+1)}.$$ [4]

**(b)** Use the Comparison Test for improper integrals to decide whether each integral converges. Justify your answers. [3]

**(i)** $\displaystyle\int_1^{\infty}\frac{2+\cos x}{\sqrt{x}}\,dx$
**(ii)** $\displaystyle\int_1^{\infty}\frac{2+\cos x}{x^{3/2}}\,dx$
        `,
        solution: String.raw`
**(a)** Partial fractions: $$\frac{1}{x^{2}(x+1)}=\frac{A}{x}+\frac{B}{x^{2}}+\frac{C}{x+1},\qquad 1=Ax(x+1)+B(x+1)+Cx^{2}.$$ ✓ Setting $x=0$ gives $B=1$, setting $x=-1$ gives $C=1$, and the $x^2$ coefficients give $A+C=0$, so $A=-1$. ✓

Hence $\displaystyle\int\frac{dx}{x^{2}(x+1)}=-\frac1x-\ln x+\ln(x+1)=-\frac1x+\ln\frac{x+1}{x}$. ✓

$$\int_1^{\infty}=\lim_{t\to\infty}\left[-\frac1x+\ln\left(1+\frac1x\right)\right]_1^{t}=\lim_{t\to\infty}\left(-\frac1t+\ln\left(1+\frac1t\right)\right)-\left(-1+\ln2\right)=\boxed{1-\ln2}.$$ ✓

**(b)** Since $-1\le\cos x\le1$, we have $1\le2+\cos x\le3$ for all $x$, so both integrands are positive. ✓

**(i)** $\dfrac{2+\cos x}{\sqrt x}\ge\dfrac{1}{\sqrt x}$ and $\displaystyle\int_1^{\infty}x^{-1/2}dx$ diverges ($p=\tfrac12\le1$). The larger integral therefore **diverges**. ✓

**(ii)** $\dfrac{2+\cos x}{x^{3/2}}\le\dfrac{3}{x^{3/2}}$ and $\displaystyle\int_1^{\infty}3x^{-3/2}dx=6$ converges ($p=\tfrac32>1$). The smaller integral therefore **converges**. ✓
        `
      },
      {
        number: 2, label: "A2", title: "Convergence in terms of a parameter", section: "Section A · Improper integrals · Type II", marks: 7,
        prompt: String.raw`
Find all real values of $p$ for which $$\int_0^{1}x^{p}\ln x\,dx$$ converges, and for those values of $p$ find the value of the integral in terms of $p$.
        `,
        solution: String.raw`
**Case $p\gt-1$.** Put $q=p+1\gt0$ and write the integral as $\displaystyle\lim_{t\to0^+}\int_t^1x^{p}\ln x\,dx$. By parts with $u=\ln x$, $dv=x^{p}dx$, $v=\dfrac{x^{q}}{q}$: $$\int x^{p}\ln x\,dx=\frac{x^{q}\ln x}{q}-\frac{x^{q}}{q^{2}}.$$ ✓✓

Evaluating between $t$ and $1$: $$\int_t^1x^{p}\ln x\,dx=-\frac1{q^{2}}-\frac{t^{q}\ln t}{q}+\frac{t^{q}}{q^{2}}.$$ ✓

As $t\to0^+$, $t^{q}\to0$, and $t^{q}\ln t=\dfrac{\ln t}{t^{-q}}\to\dfrac{1/t}{-q\,t^{-q-1}}=-\dfrac{t^{q}}{q}\to0$ by L'Hôpital. ✓ So the integral **converges** to $$\boxed{-\frac{1}{(p+1)^{2}}}.$$ ✓

**Case $p\le-1$.** For $0\lt x\lt1$ we have $x^{p}\ge x^{-1}$ and $\ln x\lt0$, so $x^{p}\ln x\le\dfrac{\ln x}{x}\lt0$. ✓ But $$\int_t^1\frac{\ln x}{x}\,dx=\left[\tfrac12(\ln x)^{2}\right]_t^1=-\tfrac12(\ln t)^{2}\to-\infty\quad(t\to0^+),$$ so by comparison the integral **diverges** (to $-\infty$). ✓✓

**Conclusion:** the integral converges if and only if $p\gt-1$, and then equals $-\dfrac1{(p+1)^{2}}$.
        `
      },
      {
        number: 3, label: "B1", title: "Limits of sequences", section: "Section B · Sequences · Limit techniques", marks: 6,
        prompt: String.raw`
Find each limit, justifying your method.

**(a)** $\displaystyle\lim_{n\to\infty}\left(\sqrt{n^{2}+3n}-n\right)$ [2]

**(b)** $\displaystyle\lim_{n\to\infty}\left(2^{n}+3^{n}\right)^{1/n}$ [2]

**(c)** $\displaystyle\lim_{n\to\infty}\left(1-\frac3n\right)^{2n}$ [2]
        `,
        solution: String.raw`
**(a)** Multiply by the conjugate: $$\sqrt{n^{2}+3n}-n=\frac{3n}{\sqrt{n^{2}+3n}+n}=\frac{3}{\sqrt{1+3/n}+1}\to\boxed{\frac32}.$$ ✓✓

**(b)** Squeeze: $3^{n}\le2^{n}+3^{n}\le2\cdot3^{n}$, so $$3\le\left(2^{n}+3^{n}\right)^{1/n}\le2^{1/n}\cdot3.$$ ✓ Since $2^{1/n}\to1$, both bounds tend to $3$, so the limit is $\boxed{3}$. ✓

**(c)** Let $a_n=\left(1-\dfrac3n\right)^{2n}$ (for $n\gt3$). Then $\ln a_n=\dfrac{2\ln(1-3/n)}{1/n}$, which is of the form $\dfrac00$. ✓ With $t=\dfrac1n$ and L'Hôpital, $$\lim_{t\to0^+}\frac{2\ln(1-3t)}{t}=\lim_{t\to0^+}\frac{2\cdot\frac{-3}{1-3t}}{1}=-6.$$ Hence $a_n\to\boxed{e^{-6}}$. ✓
        `
      },
      {
        number: 4, label: "B2", title: "A recursive sequence", section: "Section B · Sequences · Monotone bounded", marks: 7,
        prompt: String.raw`
A sequence is defined by $a_1=2$ and $$a_{n+1}=\frac12\left(a_n+\frac{3}{a_n}\right).$$

**(a)** Prove by induction that $a_n\gt\sqrt3$ for all $n\ge1$. [3]

**(b)** Show that $(a_n)$ is decreasing. [2]

**(c)** Explain why $(a_n)$ converges and find its limit. [2]
        `,
        solution: String.raw`
**(a)** $a_1=2\gt\sqrt3$. ✓ Suppose $a_n\gt\sqrt3$. Then $$a_{n+1}-\sqrt3=\frac{a_n^{2}-2\sqrt3\,a_n+3}{2a_n}=\frac{\left(a_n-\sqrt3\right)^{2}}{2a_n}\gt0.$$ ✓✓ So $a_{n+1}\gt\sqrt3$, and by induction $a_n\gt\sqrt3$ for all $n$.

**(b)** $$a_{n+1}-a_n=\frac12\left(\frac{3}{a_n}-a_n\right)=\frac{3-a_n^{2}}{2a_n}\lt0,$$ ✓ because $a_n^{2}\gt3$ and $a_n\gt0$. ✓ So $(a_n)$ is decreasing.

**(c)** The sequence is decreasing and bounded below by $\sqrt3$, so it converges (Monotone Convergence Theorem). ✓ Letting $L=\lim a_n$ in the recurrence: $L=\dfrac12\left(L+\dfrac3L\right)$, so $L^{2}=3$. Since $L\ge\sqrt3\gt0$, $$\boxed{L=\sqrt3}.$$ ✓
        `
      },
      {
        number: 5, label: "B3", title: "Telescoping series", section: "Section B · Series · Partial sums", marks: 7,
        prompt: String.raw`
**(a)** Find the exact value of $$\sum_{n=1}^{\infty}\frac{2n+1}{n^{2}(n+1)^{2}}.$$ [4]

**(b)** Show that $\displaystyle\sum_{n=1}^{\infty}\ln\!\left(1-\frac{1}{(n+1)^{2}}\right)$ converges and find its sum. [3]
        `,
        solution: String.raw`
**(a)** Since $(n+1)^{2}-n^{2}=2n+1$, $$\frac{2n+1}{n^{2}(n+1)^{2}}=\frac{(n+1)^{2}-n^{2}}{n^{2}(n+1)^{2}}=\frac1{n^{2}}-\frac1{(n+1)^{2}}.$$ ✓✓ The partial sums telescope: $$S_N=\left(1-\frac1{4}\right)+\left(\frac14-\frac19\right)+\cdots+\left(\frac1{N^{2}}-\frac1{(N+1)^{2}}\right)=1-\frac1{(N+1)^{2}}.$$ ✓ As $N\to\infty$, $S_N\to\boxed{1}$. ✓

**(b)** Factorise: $1-\dfrac1{(n+1)^{2}}=\dfrac{n(n+2)}{(n+1)^{2}}$, so $$\ln\frac{n(n+2)}{(n+1)^{2}}=\ln\frac{n}{n+1}-\ln\frac{n+1}{n+2}=c_n-c_{n+1},\qquad c_n=\ln\frac{n}{n+1}.$$ ✓ Therefore $$S_N=c_1-c_{N+1}=\ln\frac12-\ln\frac{N+1}{N+2}.$$ ✓ Since $\dfrac{N+1}{N+2}\to1$, $S_N\to\ln\dfrac12$. The series **converges** and its sum is $$\boxed{-\ln2}.$$ ✓
        `
      },
      {
        number: 6, label: "B4", title: "Interval of convergence and radius reasoning", section: "Section B · Power series", marks: 6,
        prompt: String.raw`
**(a)** Find the radius of convergence and the interval of convergence of $$\sum_{n=1}^{\infty}\frac{(2x+3)^{n}}{n\sqrt n}.$$ [4]

**(b)** The power series $\displaystyle\sum_{n=0}^{\infty}c_n(x-3)^{n}$ converges at $x=7$ and diverges at $x=-2$. For each of $x=0$, $x=10$ and $x=-1$, state whether the series must converge, must diverge, or whether this cannot be determined. Give reasons. [2]
        `,
        solution: String.raw`
**(a)** Ratio Test: $$\left|\frac{a_{n+1}}{a_n}\right|=|2x+3|\left(\frac{n}{n+1}\right)^{3/2}\to|2x+3|.$$ ✓ Convergence needs $|2x+3|\lt1$, i.e. $\left|x+\tfrac32\right|\lt\tfrac12$, so $$\boxed{R=\tfrac12},\qquad -2\lt x\lt-1.$$ ✓

**Endpoints:**

- $x=-1$: $2x+3=1$ and the series is $\displaystyle\sum\frac1{n^{3/2}}$, a $p$-series with $p=\tfrac32\gt1$, which **converges**. ✓
- $x=-2$: $2x+3=-1$ and the series is $\displaystyle\sum\frac{(-1)^{n}}{n^{3/2}}$, which **converges** (absolutely, by the same $p$-series). ✓

Interval of convergence: $$\boxed{[-2,\,-1]}.$$

**(b)** Convergence at $x=7$ (distance $4$ from the centre) forces $R\ge4$. Divergence at $x=-2$ (distance $5$) forces $R\le5$. So $4\le R\le5$. ✓

- $x=0$: distance $3\lt4\le R$, so the series **converges**.
- $x=10$: distance $7\gt5\ge R$, so the series **diverges**.
- $x=-1$: distance $4$. If $R\gt4$ it converges, but if $R=4$ this is an endpoint where either outcome is possible. **Cannot be determined.** ✓
        `
      }
    ]
  },
{
    id: "tqt4-test5",
    label: "Test 5",
    topics: "Substitution and ratio tests",
    date: "Tutorial Quiz Test 4 · Test 5",
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
        number: 1, label: "A1", title: "Substitution in improper integrals", section: "Section A · Improper integrals · Type I / II", marks: 7,
        prompt: String.raw`
Evaluate each integral, or show that it diverges.

**(a)** $\displaystyle\int_0^{\pi/2}\frac{\cos x}{\sqrt{1-\sin x}}\,dx$ [3]

**(b)** $\displaystyle\int_0^{\infty}x^{3}e^{-x^{2}}\,dx$ [4]
        `,
        solution: String.raw`
**(a)** The integrand blows up at $x=\dfrac\pi2$ (Type II), since $1-\sin x\to0^+$. ✓ Let $u=1-\sin x$, $du=-\cos x\,dx$: $$\int\frac{\cos x}{\sqrt{1-\sin x}}\,dx=-\int u^{-1/2}du=-2\sqrt{1-\sin x}.$$ ✓ Then $$\lim_{t\to\pi/2^-}\Big[-2\sqrt{1-\sin x}\Big]_0^{t}=\lim_{t\to\pi/2^-}\left(2-2\sqrt{1-\sin t}\right)=\boxed{2}.$$ ✓

**(b)** Type I. Let $u=x^{2}$, so $x^{3}dx=x^{2}\cdot x\,dx=\tfrac12u\,du$: $$\int_0^{t}x^{3}e^{-x^{2}}dx=\frac12\int_0^{t^{2}}ue^{-u}\,du.$$ ✓ By parts, $\displaystyle\int ue^{-u}du=-ue^{-u}-e^{-u}$, so ✓✓ $$\frac12\Big[-ue^{-u}-e^{-u}\Big]_0^{t^{2}}=\frac12\left(1-t^{2}e^{-t^{2}}-e^{-t^{2}}\right).$$ As $t\to\infty$, $e^{-t^{2}}\to0$ and $t^{2}e^{-t^{2}}=\dfrac{t^{2}}{e^{t^{2}}}\to0$ (L'Hôpital in $s=t^{2}$). The integral **converges** to $$\boxed{\frac12}.$$ ✓
        `
      },
      {
        number: 2, label: "A2", title: "A doubly improper integral", section: "Section A · Improper integrals · Combined case", marks: 6,
        prompt: String.raw`
Explain why $$\int_1^{\infty}\frac{dx}{x\sqrt{x^{2}-1}}$$ is improper at both ends, and evaluate it.
        `,
        solution: String.raw`
The upper limit is infinite (Type I), and as $x\to1^+$ we have $x^{2}-1\to0^+$, so the integrand $\to\infty$ (Type II). ✓ Split at $x=2$: $\displaystyle\int_1^{\infty}=\int_1^{2}+\int_2^{\infty}$, and both pieces must converge. ✓

Substitute $x=\sec\theta$ ($0\lt\theta\lt\tfrac\pi2$), $dx=\sec\theta\tan\theta\,d\theta$, $\sqrt{x^{2}-1}=\tan\theta$: $$\int\frac{dx}{x\sqrt{x^{2}-1}}=\int d\theta=\theta=\operatorname{arcsec}x=\arccos\frac1x.$$ ✓✓

$$\int_1^{2}=\lim_{s\to1^+}\Big[\arccos\tfrac1x\Big]_s^{2}=\arccos\tfrac12-\arccos1=\frac\pi3.$$ ✓ $$\int_2^{\infty}=\lim_{t\to\infty}\arccos\tfrac1t-\arccos\tfrac12=\frac\pi2-\frac\pi3=\frac\pi6.$$ ✓

Both converge, so the integral converges to $$\boxed{\frac\pi2}.$$ ✓
        `
      },
      {
        number: 3, label: "B1", title: "Limit comparison with a twist", section: "Section B · Series · Comparison tests", marks: 7,
        prompt: String.raw`
Use the Limit Comparison Test to determine whether each series converges.

**(a)** $\displaystyle\sum_{n=1}^{\infty}\frac{\sqrt{n+1}-\sqrt n}{n}$ [4]

**(b)** $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n^{1+1/n}}$ [3]
        `,
        solution: String.raw`
**(a)** Rationalise: $\sqrt{n+1}-\sqrt n=\dfrac{1}{\sqrt{n+1}+\sqrt n}$, so $a_n=\dfrac{1}{n\left(\sqrt{n+1}+\sqrt n\right)}\gt0$. ✓ Compare with $b_n=\dfrac1{n^{3/2}}$: $$\frac{a_n}{b_n}=\frac{\sqrt n}{\sqrt{n+1}+\sqrt n}=\frac{1}{\sqrt{1+1/n}+1}\to\frac12.$$ ✓✓ The limit is finite and positive, and $\sum n^{-3/2}$ converges ($p=\tfrac32$), so the series **converges**. ✓

**(b)** Compare with $b_n=\dfrac1n$: $$\frac{a_n}{b_n}=\frac{n}{n^{1+1/n}}=n^{-1/n}=\frac{1}{n^{1/n}}.$$ ✓ Now $\ln n^{1/n}=\dfrac{\ln n}{n}\to0$ (L'Hôpital), so $n^{1/n}\to1$ and $\dfrac{a_n}{b_n}\to1$. ✓ Since $\sum\dfrac1n$ diverges, the series **diverges**. ✓
        `
      },
      {
        number: 4, label: "B2", title: "Estimating an alternating sum", section: "Section B · Series · AST, estimation", marks: 6,
        prompt: String.raw`
Consider $\displaystyle S=\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n\,2^{n}}$.

**(a)** Show that the series converges absolutely. [2]

**(b)** Find the smallest number of terms $N$ for which the Alternating Series Estimation Theorem guarantees that $|S-S_N|\lt0.001$. Check the conditions of the theorem. [4]
        `,
        solution: String.raw`
**(a)** $0\lt\dfrac{1}{n2^{n}}\le\left(\dfrac12\right)^{n}$ and $\sum\left(\dfrac12\right)^{n}$ is a convergent geometric series, so $\sum|a_n|$ converges by Direct Comparison. ✓✓ The series is **absolutely convergent**.

**(b)** Let $b_n=\dfrac{1}{n2^{n}}\gt0$. It is decreasing (since $n2^{n}$ is increasing) and $b_n\to0$, so the alternating series satisfies the conditions. ✓ The Estimation Theorem gives $$|S-S_N|\le b_{N+1}=\frac{1}{(N+1)2^{N+1}}.$$ ✓ We need $(N+1)2^{N+1}\gt1000$. ✓ Checking: $$6\cdot2^{6}=384,\qquad7\cdot2^{7}=896,\qquad8\cdot2^{8}=2048.$$ The first value exceeding $1000$ is at $N+1=8$, so $\boxed{N=7}$ terms. ✓ (With $N=6$ the bound is $\dfrac1{896}\gt0.001$, which does not guarantee the accuracy.)
        `
      },
      {
        number: 5, label: "B3", title: "Ratio test: conclusive and inconclusive", section: "Section B · Series · Ratio test", marks: 7,
        prompt: String.raw`
**(a)** Use the Ratio Test to decide whether $\displaystyle\sum_{n=1}^{\infty}\frac{n^{n}}{3^{n}\,n!}$ converges. You may use $\displaystyle\lim_{n\to\infty}\left(1+\frac1n\right)^{n}=e$ and $e\lt3$. [3]

**(b)** Show that the Ratio Test is inconclusive for $\displaystyle\sum_{n=1}^{\infty}\frac{n!\,e^{n}}{n^{n}}$, and then use the fact that $\left(1+\dfrac1n\right)^{n}\lt e$ for every $n\ge1$ to determine whether the series converges. [4]
        `,
        solution: String.raw`
**(a)** $$\frac{a_{n+1}}{a_n}=\frac{(n+1)^{n+1}}{3^{n+1}(n+1)!}\cdot\frac{3^{n}\,n!}{n^{n}}=\frac{(n+1)^{n+1}}{3(n+1)\,n^{n}}=\frac13\left(1+\frac1n\right)^{n}.$$ ✓✓ This tends to $\dfrac e3\lt1$, so the series **converges** (absolutely). ✓

**(b)** $$\frac{a_{n+1}}{a_n}=\frac{(n+1)!\,e^{n+1}}{(n+1)^{n+1}}\cdot\frac{n^{n}}{n!\,e^{n}}=\frac{e\,n^{n}}{(n+1)^{n}}=\frac{e}{\left(1+\frac1n\right)^{n}}\to\frac ee=1.$$ ✓✓ The limit is $1$, so the Ratio Test is **inconclusive**.

Because $\left(1+\dfrac1n\right)^{n}\lt e$, we get $\dfrac{a_{n+1}}{a_n}=\dfrac{e}{(1+1/n)^{n}}\gt1$ for every $n$. ✓ So $(a_n)$ is increasing, hence $a_n\ge a_1=e\gt0$ and $a_n\not\to0$. By the Divergence Test the series **diverges**. ✓
        `
      },
      {
        number: 6, label: "B4", title: "Power series with gaps and factorials", section: "Section B · Power series · Interval / radius", marks: 7,
        prompt: String.raw`
**(a)** Find the radius and interval of convergence of $$\sum_{n=0}^{\infty}\frac{(-1)^{n}x^{2n+1}}{(2n+1)\,4^{n}}.$$ [4]

**(b)** Find the radius of convergence of $$\sum_{n=1}^{\infty}\frac{(3n)!}{(n!)^{3}}\,x^{n}.$$ [3]
        `,
        solution: String.raw`
**(a)** Only odd powers appear, so apply the Ratio Test directly to the terms: $$\left|\frac{a_{n+1}}{a_n}\right|=\frac{|x|^{2n+3}}{(2n+3)4^{n+1}}\cdot\frac{(2n+1)4^{n}}{|x|^{2n+1}}=\frac{x^{2}}{4}\cdot\frac{2n+1}{2n+3}\to\frac{x^{2}}{4}.$$ ✓✓ Convergence requires $\dfrac{x^{2}}4\lt1$, i.e. $|x|\lt2$, so $\boxed{R=2}$. ✓

**Endpoints:** at $x=2$ the terms are $\dfrac{(-1)^{n}2^{2n+1}}{(2n+1)4^{n}}=\dfrac{2(-1)^{n}}{2n+1}$, an alternating series with $\dfrac{2}{2n+1}$ decreasing to $0$, so it **converges** (AST). At $x=-2$ every term changes sign, giving $-\dfrac{2(-1)^{n}}{2n+1}$, which **converges** by the same argument. ✓

Interval of convergence: $$\boxed{[-2,\,2]}.$$

**(b)** $$\left|\frac{a_{n+1}}{a_n}\right|=\frac{(3n+3)!}{((n+1)!)^{3}}\cdot\frac{(n!)^{3}}{(3n)!}\,|x|=\frac{(3n+3)(3n+2)(3n+1)}{(n+1)^{3}}|x|.$$ ✓ Since $(3n+3)=3(n+1)$, this equals $\dfrac{3(3n+2)(3n+1)}{(n+1)^{2}}|x|\to27|x|$. ✓ Convergence needs $27|x|\lt1$, so $$\boxed{R=\frac1{27}}.$$ ✓
        `
      }
    ]
  },
{
    id: "tqt4-test6",
    label: "Test 6",
    topics: "Integral test and logarithms",
    date: "Tutorial Quiz Test 4 · Test 6",
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
        number: 1, label: "A1", title: "Integration by parts and an exponential substitution", section: "Section A · Improper integrals · Type I / II", marks: 7,
        prompt: String.raw`
Evaluate each integral, or show that it diverges.

**(a)** $\displaystyle\int_0^{1}(\ln x)^{2}\,dx$ [3]

**(b)** $\displaystyle\int_0^{\infty}\frac{e^{-x}}{\sqrt{1-e^{-x}}}\,dx$ [4]
        `,
        solution: String.raw`
**(a)** Type II at $x=0$, since $\ln x\to-\infty$. Integrate by parts twice: $$\int(\ln x)^{2}dx=x(\ln x)^{2}-\int2\ln x\,dx=x(\ln x)^{2}-2x\ln x+2x.$$ ✓ Then $$\int_t^1(\ln x)^{2}dx=2-\left[t(\ln t)^{2}-2t\ln t+2t\right].$$ ✓ As $t\to0^+$: $t\ln t=\dfrac{\ln t}{1/t}\to\dfrac{1/t}{-1/t^{2}}=-t\to0$, and $t(\ln t)^{2}=\dfrac{(\ln t)^{2}}{1/t}\to\dfrac{2\ln t/t}{-1/t^{2}}=-2t\ln t\to0$. ✓ The integral converges to $$\boxed{2}.$$

**(b)** The integral is improper at both ends: the upper limit is $\infty$ and, as $x\to0^+$, $1-e^{-x}\to0^+$, so the integrand $\to\infty$. ✓ Let $u=1-e^{-x}$, $du=e^{-x}dx$: $$\int\frac{e^{-x}}{\sqrt{1-e^{-x}}}\,dx=\int u^{-1/2}du=2\sqrt{1-e^{-x}}=F(x).$$ ✓ Split at $x=1$: $$\int_0^{1}=F(1)-\lim_{s\to0^+}F(s)=F(1),\qquad \int_1^{\infty}=\lim_{t\to\infty}F(t)-F(1)=2-F(1).$$ ✓ Both converge, and the total is $$\boxed{2}.$$ ✓
        `
      },
      {
        number: 2, label: "A2", title: "For which p does it converge?", section: "Section A · Improper integrals · Combined case", marks: 6,
        prompt: String.raw`
Determine all real values of $p$ for which $$\int_0^{\infty}\frac{dx}{x^{p}(1+x)}$$ converges. Justify each step using the $p$-integral tests and the Comparison Test.
        `,
        solution: String.raw`
The integral is improper at $\infty$ for every $p$, and also at $0$ when $p\gt0$. Split at $x=1$: $I_1=\displaystyle\int_0^1$ and $I_2=\displaystyle\int_1^{\infty}$. The whole integral converges if and only if both pieces converge. ✓

**$I_1$ (near $0$).** For $0\lt x\le1$, $\tfrac12\le\dfrac1{1+x}\le1$, so $$\tfrac12x^{-p}\le\frac{1}{x^{p}(1+x)}\le x^{-p}.$$ ✓ Since $\displaystyle\int_0^1x^{-p}dx$ converges if and only if $p\lt1$, the two-sided bound shows that $I_1$ converges if and only if $p\lt1$. ✓✓ (For $p\le0$ the integrand is bounded and $I_1$ is an ordinary integral.)

**$I_2$ (near $\infty$).** For $x\ge1$, $x\le1+x\le2x$, so $$\frac{x^{-p-1}}{2}\le\frac{1}{x^{p}(1+x)}\le x^{-p-1}.$$ ✓ Since $\displaystyle\int_1^{\infty}x^{-(p+1)}dx$ converges if and only if $p+1\gt1$, i.e. $p\gt0$, $I_2$ converges if and only if $p\gt0$. ✓✓

**Conclusion:** both pieces converge exactly when $0\lt p\lt1$, so the integral converges if and only if $$\boxed{0\lt p\lt1}.$$ ✓
        `
      },
      {
        number: 3, label: "B1", title: "Limits of sequences", section: "Section B · Sequences · Limit techniques", marks: 6,
        prompt: String.raw`
Find each limit, justifying your method.

**(a)** $\displaystyle\lim_{n\to\infty}\frac{1+2+3+\cdots+n}{n^{2}}$ [2]

**(b)** $\displaystyle\lim_{n\to\infty}n\left(e^{1/n}-1\right)$ [2]

**(c)** $\displaystyle\lim_{n\to\infty}\frac{\sin n+\cos n}{\sqrt n}$ [2]
        `,
        solution: String.raw`
**(a)** $1+2+\cdots+n=\dfrac{n(n+1)}{2}$, so the term is $\dfrac{n+1}{2n}=\dfrac12\left(1+\dfrac1n\right)\to\boxed{\dfrac12}$. ✓✓

**(b)** Write $n\left(e^{1/n}-1\right)=\dfrac{e^{h}-1}{h}$ with $h=\dfrac1n\to0^+$. This is $\dfrac00$, and by L'Hôpital $\dfrac{e^{h}}{1}\to1$. ✓ The limit is $\boxed{1}$. ✓

**(c)** Squeeze: $|\sin n+\cos n|\le2$, so $$-\frac{2}{\sqrt n}\le\frac{\sin n+\cos n}{\sqrt n}\le\frac{2}{\sqrt n}.$$ ✓ Both bounds tend to $0$, so the limit is $\boxed{0}$. ✓
        `
      },
      {
        number: 4, label: "B2", title: "The integral test and a bound on the sum", section: "Section B · Series · Integral test", marks: 7,
        prompt: String.raw`
Let $\displaystyle S=\sum_{n=1}^{\infty}\frac{n}{n^{4}+1}$.

**(a)** Use the Integral Test to show that the series converges. Check all conditions of the test. [5]

**(b)** Use the remainder estimate $R_n\le\displaystyle\int_n^{\infty}f(x)\,dx$ to show that $S\le\dfrac12+\dfrac\pi8$. [2]
        `,
        solution: String.raw`
**(a)** Let $f(x)=\dfrac{x}{x^{4}+1}$. It is positive and continuous on $[1,\infty)$. ✓ Also $$f'(x)=\frac{(x^{4}+1)-4x^{4}}{(x^{4}+1)^{2}}=\frac{1-3x^{4}}{(x^{4}+1)^{2}}\lt0\quad\text{for }x\ge1,$$ so $f$ is decreasing. ✓✓ With $u=x^{2}$, $du=2x\,dx$: $$\int_1^{\infty}\frac{x\,dx}{x^{4}+1}=\lim_{t\to\infty}\frac12\int_1^{t^{2}}\frac{du}{u^{2}+1}=\lim_{t\to\infty}\frac12\left(\arctan t^{2}-\frac\pi4\right)=\frac12\left(\frac\pi2-\frac\pi4\right)=\frac\pi8.$$ ✓✓ The integral converges, so the series **converges** by the Integral Test.

**(b)** Take $n=1$: $R_1=S-S_1=S-\dfrac12\le\displaystyle\int_1^{\infty}f(x)\,dx=\dfrac\pi8$. ✓ Therefore $$S\le\frac12+\frac\pi8.$$ ✓
        `
      },
      {
        number: 5, label: "B3", title: "Conditional convergence and limit comparison", section: "Section B · Series · AST, comparison", marks: 7,
        prompt: String.raw`
**(a)** Show that $\displaystyle\sum_{n=2}^{\infty}\frac{(-1)^{n}}{\sqrt n\,\ln n}$ converges conditionally. [4]

**(b)** Determine whether $\displaystyle\sum_{n=1}^{\infty}\left(1-\cos\frac1n\right)$ converges. [3]
        `,
        solution: String.raw`
**(a)** Let $b_n=\dfrac{1}{\sqrt n\,\ln n}\gt0$. Since $\sqrt n\ln n$ is increasing, $b_n$ is decreasing, and $b_n\to0$. By the AST the series **converges**. ✓✓

For absolute convergence, $\displaystyle\lim_{n\to\infty}\frac{\ln n}{\sqrt n}=\lim\frac{1/n}{\frac12n^{-1/2}}=\lim\frac{2}{\sqrt n}=0$, so $\ln n\lt\sqrt n$ for large $n$. Then $\sqrt n\ln n\lt n$, so $$b_n\gt\frac1n\quad\text{for large }n.$$ ✓ Since $\sum\dfrac1n$ diverges, $\sum b_n$ diverges by Direct Comparison. Hence the series is **conditionally convergent**. ✓

**(b)** The terms are positive. Compare with $b_n=\dfrac1{n^{2}}$, and let $h=\dfrac1n\to0$: $$\frac{1-\cos h}{h^{2}}\to\lim_{h\to0}\frac{\sin h}{2h}=\frac12.$$ ✓✓ The limit is finite and positive and $\sum\dfrac1{n^{2}}$ converges, so by the Limit Comparison Test the series **converges**. ✓
        `
      },
      {
        number: 6, label: "B4", title: "A logarithmic power series and radius reasoning", section: "Section B · Power series", marks: 7,
        prompt: String.raw`
**(a)** Find the interval of convergence of $$\sum_{n=2}^{\infty}\frac{(x+1)^{n}}{n\,(\ln n)^{3}}.$$ [4]

**(b)** Suppose $\displaystyle\sum_{n=0}^{\infty}c_nx^{n}$ has radius of convergence $3$. Find the radius of convergence of each series, giving a reason. [3]

**(i)** $\displaystyle\sum_{n=0}^{\infty}c_n(2x)^{n}$
**(ii)** $\displaystyle\sum_{n=0}^{\infty}c_nx^{2n}$
**(iii)** $\displaystyle\sum_{n=0}^{\infty}c_n(x-5)^{n}$
        `,
        solution: String.raw`
**(a)** Ratio Test: $$\left|\frac{a_{n+1}}{a_n}\right|=|x+1|\cdot\frac{n}{n+1}\cdot\left(\frac{\ln n}{\ln(n+1)}\right)^{3}.$$ ✓ Since $\ln(n+1)=\ln n+\ln\!\left(1+\tfrac1n\right)$, we get $\dfrac{\ln(n+1)}{\ln n}=1+\dfrac{\ln(1+1/n)}{\ln n}\to1$. So the limit is $|x+1|$, giving $R=1$ and $-2\lt x\lt0$. ✓

**Endpoints:** at $x=0$ the series is $\displaystyle\sum\frac{1}{n(\ln n)^{3}}$. Let $f(x)=\dfrac{1}{x(\ln x)^{3}}$, positive, continuous and decreasing on $[2,\infty)$: $$\int_2^{\infty}\frac{dx}{x(\ln x)^{3}}=\lim_{t\to\infty}\left[-\frac{1}{2(\ln x)^{2}}\right]_2^{t}=\frac{1}{2(\ln2)^{2}}\lt\infty,$$ so it **converges** (Integral Test). ✓ At $x=-2$ the series is $\displaystyle\sum\frac{(-1)^{n}}{n(\ln n)^{3}}$, which converges absolutely by the previous result. ✓

Interval of convergence: $$\boxed{[-2,\,0]}.$$

**(b)** The series $\sum c_ny^{n}$ converges for $|y|\lt3$ and diverges for $|y|\gt3$.

**(i)** Put $y=2x$: convergence iff $|2x|\lt3$, so $R=\boxed{\tfrac32}$. ✓

**(ii)** Put $y=x^{2}$: convergence iff $x^{2}\lt3$, i.e. $|x|\lt\sqrt3$, so $R=\boxed{\sqrt3}$. ✓

**(iii)** Put $y=x-5$: convergence iff $|x-5|\lt3$; the centre moves to $5$ but the radius is unchanged, $R=\boxed{3}$. ✓
        `
      }
    ]
  }
];
