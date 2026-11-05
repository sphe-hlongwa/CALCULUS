/* Formal proofs for MATH1036 (Sections 6.6, 9, 10, 11 and 12).
 * Each proof: statement (theorem card), idea (one-line summary) and
 * steps[] ({ t: step label, b: step body }) shown as numbered cards.
 * Strings use String.raw so TeX backslashes are kept as written. */
const proofsData = [
  {
    id: 'proofs-opt',
    section: '6.6',
    title: 'Optimization & Calculus Foundations',
    proofs: [
      {
        id: 'fermat',
        ref: 'Theorem 6.3',
        title: "Fermat's Theorem",
        statement: String.raw`If $f$ has a local maximum or minimum at an interior point $c$, and $f$ is differentiable at $c$, then $$f'(c)=0$$`,
        idea: String.raw`Squeeze $f'(c)$ between $\le 0$ (from the right) and $\ge 0$ (from the left).`,
        steps: [
          { t: 'Set up a local maximum', b: String.raw`Assume $f$ has a local maximum at $c$ (the minimum case is analogous). Then for all $x$ in some interval $(c-\delta,\,c+\delta)$: $$f(x)\le f(c)\implies f(x)-f(c)\le 0$$` },
          { t: 'Right-hand limit ($x>c$)', b: String.raw`For $x\in(c,c+\delta)$ we have $x-c>0$ and $f(x)-f(c)\le 0$, so $$\frac{f(x)-f(c)}{x-c}\le 0$$ Taking $x\to c^+$: $$f'(c)=\lim_{x\to c^+}\frac{f(x)-f(c)}{x-c}\le 0$$` },
          { t: 'Left-hand limit ($x\\lt c$)', b: String.raw`For $x\in(c-\delta,c)$ we have $x-c\lt 0$ and $f(x)-f(c)\le 0$, so the ratio is non-negative: $$\frac{f(x)-f(c)}{x-c}\ge 0$$ Taking $x\to c^-$: $$f'(c)=\lim_{x\to c^-}\frac{f(x)-f(c)}{x-c}\ge 0$$` },
          { t: 'Combine', b: String.raw`$f$ is differentiable at $c$, so both one-sided limits equal $f'(c)$. Hence $$0\le f'(c)\le 0\implies f'(c)=0 \qquad\blacksquare$$` }
        ]
      },
      {
        id: 'constant-function',
        ref: 'Theorem 6.6',
        title: 'Constant Function Theorem',
        statement: String.raw`If $f'(x)=0$ for all $x$ in an open interval $(a,b)$, then $f$ is constant on $(a,b)$.`,
        idea: 'Apply the Mean Value Theorem to any two points: the slope between them must be 0.',
        steps: [
          { t: 'Pick two points', b: String.raw`Let $x_1\lt x_2$ be any two points in $(a,b)$. Since $f$ is differentiable on $(a,b)$, it is continuous on $[x_1,x_2]$ and differentiable on $(x_1,x_2)$.` },
          { t: 'Apply the Mean Value Theorem', b: String.raw`There is some $c\in(x_1,x_2)$ with $$f'(c)=\frac{f(x_2)-f(x_1)}{x_2-x_1}$$` },
          { t: 'Use $f\'=0$', b: String.raw`Since $f'(c)=0$: $$0=\frac{f(x_2)-f(x_1)}{x_2-x_1}\implies f(x_1)=f(x_2)$$` },
          { t: 'Conclude', b: String.raw`$x_1,x_2$ were arbitrary, so $f$ takes the same value everywhere on $(a,b)$: $f(x)=C$. $\blacksquare$` }
        ]
      },
      {
        id: 'mvt-integrals',
        ref: 'Theorem',
        title: 'Mean Value Theorem for Integrals',
        statement: String.raw`If $f$ is continuous on $[a,b]$, there is $c\in[a,b]$ such that $$\int_a^b f(x)\,dx=f(c)(b-a)$$`,
        idea: 'The average value of $f$ lies between its min and max, so continuity forces $f$ to equal it somewhere.',
        steps: [
          { t: 'Bound $f$ (Extreme Value Theorem)', b: String.raw`$f$ is continuous on $[a,b]$, so it has an absolute minimum $m$ and maximum $M$: $$m\le f(x)\le M \quad\text{for all }x\in[a,b]$$` },
          { t: 'Integrate the inequality', b: String.raw`$$m(b-a)\le\int_a^b f(x)\,dx\le M(b-a)$$` },
          { t: 'Divide by $b-a>0$', b: String.raw`$$m\le \underbrace{\frac{1}{b-a}\int_a^b f(x)\,dx}_{k}\le M$$` },
          { t: 'Apply the Intermediate Value Theorem', b: String.raw`$m=f(y)$ and $M=f(z)$ for some $y,z\in[a,b]$, and $k$ lies between them. So there is $c\in[a,b]$ with $f(c)=k$: $$\int_a^b f(x)\,dx=f(c)(b-a)\qquad\blacksquare$$` }
        ]
      }
    ]
  },
  {
    id: 'proofs-integration',
    section: '9',
    title: 'Advanced Integration Techniques',
    proofs: [
      {
        id: 'reduction-sec',
        ref: 'Reduction',
        title: String.raw`Reduction Formula for $\int\sec^n x\,dx$`,
        statement: String.raw`For $n\ge 2$: $$\int\sec^n x\,dx=\frac{1}{n-1}\sec^{n-2}x\tan x+\frac{n-2}{n-1}\int\sec^{n-2}x\,dx$$`,
        idea: String.raw`Integrate by parts, turn $\tan^2x$ into $\sec^2x-1$, then solve for the original integral.`,
        steps: [
          { t: 'Split the integrand', b: String.raw`$$\int\sec^n x\,dx=\int\sec^{n-2}x\cdot\sec^2x\,dx$$` },
          { t: 'Integration by parts', b: String.raw`Let $u=\sec^{n-2}x$, so $du=(n-2)\sec^{n-2}x\tan x\,dx$, and $dv=\sec^2x\,dx$, so $v=\tan x$. Then $$\int\sec^n x\,dx=\sec^{n-2}x\tan x-(n-2)\int\sec^{n-2}x\tan^2x\,dx$$` },
          { t: 'Use $\\tan^2x=\\sec^2x-1$', b: String.raw`$$\int\sec^n x\,dx=\sec^{n-2}x\tan x-(n-2)\int\sec^n x\,dx+(n-2)\int\sec^{n-2}x\,dx$$` },
          { t: 'Collect the $\\int\\sec^n x$ terms on the left', b: String.raw`$$(n-1)\int\sec^n x\,dx=\sec^{n-2}x\tan x+(n-2)\int\sec^{n-2}x\,dx$$` },
          { t: 'Divide by $n-1$', b: String.raw`$$\int\sec^n x\,dx=\frac{1}{n-1}\sec^{n-2}x\tan x+\frac{n-2}{n-1}\int\sec^{n-2}x\,dx\qquad\blacksquare$$` }
        ]
      },
      {
        id: 'reduction-cos',
        ref: 'Reduction',
        title: String.raw`Reduction Formula for $\int\cos^n x\,dx$`,
        statement: String.raw`For $n\ge 2$: $$\int\cos^n x\,dx=\frac{\cos^{n-1}x\sin x}{n}+\frac{n-1}{n}\int\cos^{n-2}x\,dx$$`,
        idea: String.raw`Integrate by parts, turn $\sin^2x$ into $1-\cos^2x$, then solve for the original integral.`,
        steps: [
          { t: 'Split the integrand', b: String.raw`$$\int\cos^n x\,dx=\int\cos^{n-1}x\cdot\cos x\,dx$$` },
          { t: 'Integration by parts', b: String.raw`Let $u=\cos^{n-1}x$, so $du=-(n-1)\cos^{n-2}x\sin x\,dx$, and $dv=\cos x\,dx$, so $v=\sin x$. Then $$\int\cos^n x\,dx=\cos^{n-1}x\sin x+(n-1)\int\cos^{n-2}x\sin^2x\,dx$$` },
          { t: 'Use $\\sin^2x=1-\\cos^2x$', b: String.raw`$$\int\cos^n x\,dx=\cos^{n-1}x\sin x+(n-1)\int\cos^{n-2}x\,dx-(n-1)\int\cos^n x\,dx$$` },
          { t: 'Collect the $\\int\\cos^n x$ terms on the left', b: String.raw`$$n\int\cos^n x\,dx=\cos^{n-1}x\sin x+(n-1)\int\cos^{n-2}x\,dx$$` },
          { t: 'Divide by $n$', b: String.raw`$$\int\cos^n x\,dx=\frac{\cos^{n-1}x\sin x}{n}+\frac{n-1}{n}\int\cos^{n-2}x\,dx\qquad\blacksquare$$` }
        ]
      },
      {
        id: 'reduction-ln',
        ref: 'Reduction',
        title: String.raw`Reduction Formula for $\int(\ln x)^n\,dx$`,
        statement: String.raw`For $n\ge 1$: $$\int(\ln x)^n\,dx=x(\ln x)^n-n\int(\ln x)^{n-1}\,dx$$`,
        idea: 'One round of integration by parts with $dv=dx$ lowers the power of $\\ln x$ by one.',
        steps: [
          { t: 'Choose $u$ and $dv$', b: String.raw`$u=(\ln x)^n\implies du=n(\ln x)^{n-1}\cdot\frac1x\,dx$ and $dv=dx\implies v=x$.` },
          { t: 'Apply integration by parts', b: String.raw`$$\int(\ln x)^n\,dx=x(\ln x)^n-\int x\cdot n(\ln x)^{n-1}\cdot\frac1x\,dx$$` },
          { t: 'Cancel the $x$', b: String.raw`$$\int(\ln x)^n\,dx=x(\ln x)^n-n\int(\ln x)^{n-1}\,dx\qquad\blacksquare$$` }
        ]
      }
    ]
  },
  {
    id: 'proofs-improper',
    section: '10',
    title: 'Improper Integrals',
    proofs: [
      {
        id: 'p-integral',
        ref: 'Theorem 10.1',
        title: String.raw`Convergence of $\int_1^\infty \frac{1}{x^p}\,dx$`,
        statement: String.raw`$$\int_1^\infty\frac{1}{x^p}\,dx=\begin{cases}\dfrac{1}{p-1}&p>1\\[6pt]\text{diverges}&p\le 1\end{cases}$$`,
        idea: 'Replace $\\infty$ by $t$, integrate, and see what $t^{1-p}$ does as $t\\to\\infty$.',
        steps: [
          { t: 'Write it as a limit', b: String.raw`$$\int_1^\infty\frac{1}{x^p}\,dx=\lim_{t\to\infty}\int_1^t x^{-p}\,dx$$` },
          { t: 'Case $p=1$', b: String.raw`$$\lim_{t\to\infty}\Big[\ln|x|\Big]_1^t=\lim_{t\to\infty}\ln t=\infty$$ So the integral **diverges**.`.replace('**diverges**', '<strong>diverges</strong>') },
          { t: 'Case $p\\ne1$: integrate', b: String.raw`$$\int_1^t x^{-p}\,dx=\left[\frac{x^{1-p}}{1-p}\right]_1^t=\frac{t^{1-p}-1}{1-p}$$` },
          { t: 'Subcase $p>1$', b: String.raw`Here $1-p\lt 0$, so $t^{1-p}=\dfrac{1}{t^{p-1}}\to 0$ as $t\to\infty$: $$\lim_{t\to\infty}\frac{t^{1-p}-1}{1-p}=\frac{-1}{1-p}=\frac{1}{p-1}$$ The integral <strong>converges</strong> to $\dfrac{1}{p-1}$.` },
          { t: 'Subcase $p\\lt 1$', b: String.raw`Here $1-p>0$, so $t^{1-p}\to\infty$ and the limit is $\infty$. The integral <strong>diverges</strong>. $\blacksquare$` }
        ]
      }
    ]
  },
  {
    id: 'proofs-series',
    section: '11',
    title: 'Infinite Sequences and Series',
    proofs: [
      {
        id: 'test-divergence',
        ref: 'Theorem 11.8',
        title: 'Test for Divergence ($n$-th Term Test)',
        statement: String.raw`If $\sum a_n$ converges, then $\displaystyle\lim_{n\to\infty}a_n=0$. <br>(Contrapositive: if $\lim a_n\ne0$ or does not exist, the series diverges.)`,
        idea: 'A single term is the difference of two consecutive partial sums, which share the same limit.',
        steps: [
          { t: 'Write $a_n$ with partial sums', b: String.raw`Let $s_n=a_1+\dots+a_n$. For $n\ge2$: $$a_n=s_n-s_{n-1}$$` },
          { t: 'Use convergence', b: String.raw`If the series converges, $s_n\to s$ for some finite $s$. Since $n-1\to\infty$ too, also $s_{n-1}\to s$.` },
          { t: 'Take the limit', b: String.raw`$$\lim_{n\to\infty}a_n=\lim_{n\to\infty}s_n-\lim_{n\to\infty}s_{n-1}=s-s=0\qquad\blacksquare$$` }
        ]
      },
      {
        id: 'geometric',
        ref: 'Series',
        title: 'Sum of a Geometric Series',
        statement: String.raw`$\displaystyle\sum_{n=0}^\infty ar^n$ ($a\ne0$) converges to $\dfrac{a}{1-r}$ if $|r|\lt 1$, and diverges if $|r|\ge1$.`,
        idea: 'Multiply the partial sum by $r$ and subtract: almost everything cancels.',
        steps: [
          { t: 'Write the partial sum', b: String.raw`$$s_n=a+ar+ar^2+\dots+ar^{n-1}$$` },
          { t: 'Multiply by $r$', b: String.raw`$$rs_n=ar+ar^2+\dots+ar^{n}$$` },
          { t: 'Subtract', b: String.raw`$$s_n-rs_n=a-ar^n\implies s_n=\frac{a(1-r^n)}{1-r}\quad(r\ne1)$$` },
          { t: 'Case $|r|\\lt 1$', b: String.raw`$r^n\to0$, so $$\lim_{n\to\infty}s_n=\frac{a}{1-r}$$` },
          { t: 'Case $|r|\\ge1$', b: String.raw`If $|r|>1$, $r^n$ is unbounded so $s_n$ diverges. If $r=1$, $s_n=na\to\pm\infty$. If $r=-1$, $s_n$ alternates between $a$ and $0$. In every case the series diverges. $\blacksquare$` }
        ]
      },
      {
        id: 'p-series',
        ref: 'Theorem 11.13',
        title: String.raw`$p$-Series Test`,
        statement: String.raw`$\displaystyle\sum_{n=1}^\infty\frac{1}{n^p}$ converges if $p>1$ and diverges if $p\le1$.`,
        idea: 'For $p\\le0$ the terms do not shrink; for $p>0$ compare with the improper integral.',
        steps: [
          { t: 'Case $p\\le0$', b: String.raw`Then $\dfrac{1}{n^p}=n^{-p}\ge1\not\to0$. By the Test for Divergence (Theorem 11.8) the series diverges.` },
          { t: 'Case $p>0$: check the Integral Test applies', b: String.raw`$f(x)=\dfrac{1}{x^p}$ is continuous, positive and decreasing on $[1,\infty)$. So $\sum\frac1{n^p}$ converges if and only if $\displaystyle\int_1^\infty\frac{dx}{x^p}$ converges.` },
          { t: 'Use Theorem 10.1', b: String.raw`The integral converges for $p>1$ and diverges for $p\le1$. Therefore the series converges for $p>1$ and diverges for $p\le1$. $\blacksquare$` }
        ]
      },
      {
        id: 'abs-convergence',
        ref: 'Theorem 11.16',
        title: 'Absolute Convergence Implies Convergence',
        statement: String.raw`If $\sum|a_n|$ converges, then $\sum a_n$ converges.`,
        idea: String.raw`Write $a_n=(a_n+|a_n|)-|a_n|$ and show each piece converges.`,
        steps: [
          { t: 'A basic inequality', b: String.raw`For any real $x$, $-|x|\le x\le|x|$. Adding $|x|$: $$0\le x+|x|\le2|x|$$ So $0\le a_n+|a_n|\le2|a_n|$ for all $n$.` },
          { t: 'Direct Comparison', b: String.raw`$\sum2|a_n|=2\sum|a_n|$ converges, so by the Direct Comparison Test $\sum(a_n+|a_n|)$ converges.` },
          { t: 'Subtract', b: String.raw`$$\sum a_n=\sum(a_n+|a_n|)-\sum|a_n|$$ Both series on the right converge, so their difference does too. $\blacksquare$` }
        ]
      }
    ]
  },
  {
    id: 'proofs-ode',
    section: '12',
    title: 'Differential Equations',
    proofs: [
      {
        id: 'integrating-factor',
        ref: 'Section 12',
        title: 'Integrating Factor for First-Order Linear ODEs',
        statement: String.raw`The equation $\dfrac{dy}{dx}+p(x)y=q(x)$ has general solution $$y=\frac{1}{\mu(x)}\left(\int q(x)\mu(x)\,dx+C\right),\qquad \mu(x)=e^{\int p(x)\,dx}$$`,
        idea: 'Choose $\\mu$ so the left side becomes exactly $\\frac{d}{dx}[\\mu y]$, then integrate.',
        steps: [
          { t: 'Multiply the ODE by $\\mu(x)$', b: String.raw`$$\mu\frac{dy}{dx}+\mu p\,y=\mu q$$` },
          { t: 'Require the left side to be a product rule', b: String.raw`We want it to equal $\dfrac{d}{dx}[\mu y]=\mu\dfrac{dy}{dx}+\mu'y$. Comparing: $$\mu p\,y=\mu'y\implies\mu'=p\,\mu$$` },
          { t: 'Solve for $\\mu$ (separable)', b: String.raw`$$\frac{d\mu}{\mu}=p(x)\,dx\implies\ln|\mu|=\int p(x)\,dx\implies\mu=e^{\int p(x)\,dx}$$` },
          { t: 'Rewrite and integrate', b: String.raw`With this $\mu$ the ODE becomes $$\frac{d}{dx}[\mu y]=\mu q\implies\mu y=\int q\mu\,dx+C$$` },
          { t: 'Divide by $\\mu$', b: String.raw`$$y(x)=\frac{1}{\mu(x)}\left(\int q(x)\mu(x)\,dx+C\right)\qquad\blacksquare$$` }
        ]
      },
      {
        id: 'exact-ode',
        ref: 'Theorem 12.1',
        title: 'Solution of Exact Differential Equations',
        statement: String.raw`If $M\,dx+N\,dy=0$ is exact ($M_y=N_x$), there is a potential function $f(x,y)$ with $f_x=M$ and $f_y=N$, and the general implicit solution is $$f(x,y)=C$$`,
        idea: 'Exactness says the left side is the total differential $df$, so $df=0$ means $f$ is constant.',
        steps: [
          { t: 'Use the potential function', b: String.raw`Suppose $f$ is continuously differentiable with $f_x=M$ and $f_y=N$. The total differential is $$df=f_x\,dx+f_y\,dy=M\,dx+N\,dy$$` },
          { t: 'Apply the ODE', b: String.raw`Since $M\,dx+N\,dy=0$, we get $df=0$. Integrating: $$f(x,y)=C$$` },
          { t: 'Verify it is a solution', b: String.raw`Let $y=\phi(x)$ satisfy $f(x,\phi(x))=C$. Differentiate with the Chain Rule: $$f_x+f_y\frac{dy}{dx}=0\implies M+N\frac{dy}{dx}=0$$ which is the original equation. So $f(x,y)=C$ is the general implicit solution. $\blacksquare$` }
        ]
      }
    ]
  }
];
