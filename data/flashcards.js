const flashcardsData = [
  {
    "id": "fc-01",
    "chapter": 7,
    "topic": "Hyperbolic Equations",
    "front": "Solve for $x$: $3\\cosh x + 2\\sinh x = 4$",
    "back": "Use $\\cosh x = \\frac{e^x+e^{-x}}{2}$ and $\\sinh x = \\frac{e^x-e^{-x}}{2}$. Substitute to get $\\frac{5}{2}e^x + \\frac{1}{2}e^{-x} = 4$. Let $u=e^x$, yielding $5u^2 - 8u + 1 = 0$. $x = \\ln\\left(\\frac{4 \\pm \\sqrt{11}}{5}\\right)$."
  },
  {
    "id": "fc-02",
    "chapter": 7,
    "topic": "Hyperbolic Identities",
    "front": "Prove that $\\tanh^{-1}x = \\frac{1}{2}\\ln\\left(\\frac{1+x}{1-x}\\right)$",
    "back": "Let $y = \\tanh^{-1}x \\implies x = \\tanh y = \\frac{e^y - e^{-y}}{e^y + e^{-y}}$. Solve for $e^{2y} = \\frac{1+x}{1-x}$, giving $y = \\frac{1}{2}\\ln\\left(\\frac{1+x}{1-x}\\right)$."
  },
  {
    "id": "fc-03",
    "chapter": 7,
    "topic": "Hyperbolic Integrals",
    "front": "Evaluate $\\displaystyle\\int \\frac{dx}{\\sqrt{x^2 - a^2}}$ using hyperbolic substitution.",
    "back": "Substitute $x = a\\cosh t$, $dx = a\\sinh t \\, dt$. Integral becomes $\\int dt = t + C = \\cosh^{-1}(x/a) + C = \\ln|x + \\sqrt{x^2-a^2}| + C$."
  },
  {
    "id": "fc-04",
    "chapter": 7,
    "topic": "Hyperbolic Derivatives",
    "front": "Differentiate $f(x) = \\sinh(\\ln x)$.",
    "back": "Rewrite $f(x) = \\frac{e^{\\ln x} - e^{-\\ln x}}{2} = \\frac{x - x^{-1}}{2}$. Thus $f'(x) = \\frac{1 + x^{-2}}{2} = \\frac{x^2+1}{2x^2}$."
  },
  {
    "id": "fc-05",
    "chapter": 7,
    "topic": "Hyperbolic Limits",
    "front": "Find $\\displaystyle\\lim_{x\\to\\infty} \\frac{\\cosh x}{e^x}$.",
    "back": "$\\frac{\\cosh x}{e^x} = \\frac{e^x + e^{-x}}{2e^x} = \\frac{1}{2} + \\frac{1}{2e^{2x}}$. As $x \\to \\infty$, the second term goes to 0, so the limit is $\\frac{1}{2}$."
  },
  {
    "id": "fc-06",
    "chapter": 7,
    "topic": "Hyperbolic Integrals",
    "front": "Evaluate $\\displaystyle\\int \\tanh x \\, dx$.",
    "back": "Rewrite as $\\int \\frac{\\sinh x}{\\cosh x} dx$. Let $u = \\cosh x$, $du = \\sinh x dx$. Integral becomes $\\int \\frac{1}{u} du = \\ln|\\cosh x| + C$."
  },
  {
    "id": "fc-07",
    "chapter": 7,
    "topic": "Hyperbolic Equations",
    "front": "Solve for $x$: $\\cosh(2x) - 3\\cosh x + 2 = 0$.",
    "back": "Use identity $\\cosh(2x) = 2\\cosh^2 x - 1$. The equation becomes $2\\cosh^2 x - 3\\cosh x + 1 = 0$. Factors to $(2\\cosh x - 1)(\\cosh x - 1) = 0$. Since $\\cosh x \\ge 1$, $\\cosh x = 1 \\implies x = 0$."
  },
  {
    "id": "fc-08",
    "chapter": 7,
    "topic": "Hyperbolic Area",
    "front": "Find the area bounded by $y = \\cosh x$, $y = \\sinh x$, $x=0$, and $x=1$.",
    "back": "Area $= \\int_0^1 (\\cosh x - \\sinh x) dx = \\int_0^1 e^{-x} dx = [-e^{-x}]_0^1 = 1 - e^{-1}$."
  },
  {
    "id": "fc-09",
    "chapter": 7,
    "topic": "Integration by Parts",
    "front": "Evaluate $\\displaystyle\\int x \\sinh x \\, dx$.",
    "back": "Use integration by parts: $u=x, dv=\\sinh x dx$. $du=dx, v=\\cosh x$. Result: $x\\cosh x - \\int \\cosh x dx = x\\cosh x - \\sinh x + C$."
  },
  {
    "id": "fc-10",
    "chapter": 7,
    "topic": "Hyperbolic Integrals",
    "front": "Evaluate $\\displaystyle\\int \\operatorname{sech} x \\, dx$.",
    "back": "$\\int \\frac{2}{e^x + e^{-x}} dx = \\int \\frac{2e^x}{e^{2x} + 1} dx$. Let $u = e^x$, $du = e^x dx$. Integral is $2\\int \\frac{1}{u^2+1} du = 2\\tan^{-1}(e^x) + C$."
  },
  {
    "id": "fc-7-new-1",
    "chapter": 7,
    "topic": "Hyperbolic Limits",
    "front": "Evaluate $\\displaystyle\\lim_{x\\to 0} \\frac{\\sinh x - x}{x^3}$.",
    "back": "Using Maclaurin series: $\\sinh x = x + \\frac{x^3}{3!} + \\frac{x^5}{5!} + \\dots$ Thus, $\\frac{\\sinh x - x}{x^3} = \\frac{1}{6} + \\frac{x^2}{120} + \\dots$ As $x\\to 0$, the limit is $\\frac{1}{6}$."
  },
  {
    "id": "fc-7-new-2",
    "chapter": 7,
    "topic": "Hyperbolic Equations",
    "front": "Solve the equation $\\cosh(2x) - 5\\sinh(x) = 4$.",
    "back": "Use $\\cosh(2x) = 1 + 2\\sinh^2(x)$. Equation becomes $2\\sinh^2(x) - 5\\sinh(x) - 3 = 0$. Factoring gives $(2\\sinh x + 1)(\\sinh x - 3) = 0$. Since $\\sinh x = -1/2$ or $3$, $x = \\sinh^{-1}(-1/2)$ or $\\sinh^{-1}(3)$."
  },
  {
    "id": "fc-7-new-3",
    "chapter": 7,
    "topic": "Hyperbolic Integration",
    "front": "Evaluate the integral $\\displaystyle\\int \\sinh^3(x) \\cosh^2(x) \\,dx$.",
    "back": "Rewrite $\\sinh^3(x) = \\sinh(x)(\\cosh^2(x) - 1)$. Let $u = \\cosh x$, $du = \\sinh x \\,dx$. Integral is $\\int (u^2-1)u^2 \\,du = \\frac{u^5}{5} - \\frac{u^3}{3} + C = \\frac{\\cosh^5 x}{5} - \\frac{\\cosh^3 x}{3} + C$."
  },
  {
    "id": "fc-7-new-4",
    "chapter": 7,
    "topic": "Arc Length",
    "front": "Find the arc length of the catenary curve $y = a\\cosh(x/a)$ from $x=0$ to $x=x_1$.",
    "back": "$y' = \\sinh(x/a)$. Arc length $L = \\int_0^{x_1} \\sqrt{1 + \\sinh^2(x/a)} \\,dx = \\int_0^{x_1} \\cosh(x/a) \\,dx = a\\sinh(x_1/a)$."
  },
  {
    "id": "fc-7-new-5",
    "chapter": 7,
    "topic": "Surface Area",
    "front": "Find the surface area generated by revolving $y = \\cosh x$ on $[0, 1]$ about the x-axis.",
    "back": "$S = \\int_0^1 2\\pi \\cosh x \\sqrt{1+\\sinh^2 x} \\,dx = 2\\pi \\int_0^1 \\cosh^2 x \\,dx = \\pi \\int_0^1 (1+\\cosh 2x)\\,dx = \\pi(1 + \\frac{1}{2}\\sinh 2)$."
  },
  {
    "id": "fc-7-new-6",
    "chapter": 7,
    "topic": "Hyperbolic Identities",
    "front": "Prove the triple angle identity $\\cosh(3x) = 4\\cosh^3(x) - 3\\cosh(x)$.",
    "back": "$\\cosh(2x+x) = \\cosh(2x)\\cosh x + \\sinh(2x)\\sinh x$. Substitute $\\cosh(2x)=2\\cosh^2 x - 1$ and $\\sinh(2x)=2\\sinh x \\cosh x$. $=(2\\cosh^2 x -1)\\cosh x + 2\\sinh^2 x \\cosh x$. Since $\\sinh^2 x = \\cosh^2 x - 1$, this simplifies to $4\\cosh^3 x - 3\\cosh x$."
  },
  {
    "id": "fc-7-new-7",
    "chapter": 7,
    "topic": "Hyperbolic Equations",
    "front": "Solve the equation $2\\cosh x + 3\\sinh x = 5$ for $x$.",
    "back": "Convert to exponentials: $2\\frac{e^x+e^{-x}}{2} + 3\\frac{e^x-e^{-x}}{2} = 5 \\implies e^x + e^{-x} + 1.5e^x - 1.5e^{-x} = 5 \\implies 2.5e^x - 0.5e^{-x} = 5$. Multiply by $2e^x$: $5e^{2x} - 10e^x - 1 = 0$. $e^x = \\frac{10 \\pm \\sqrt{120}}{10} = 1 \\pm \\sqrt{1.2}$. Since $e^x > 0$, $x = \\ln(1 + \\sqrt{1.2})$."
  },
  {
    "id": "fc-7-new-8",
    "chapter": 7,
    "topic": "Logarithmic Differentiation",
    "front": "Find the derivative of $y = x^{\\sinh x}$ for $x > 0$.",
    "back": "$\\ln y = \\sinh x \\ln x$. Differentiating implicitly: $\\frac{y'}{y} = \\cosh x \\ln x + \\frac{\\sinh x}{x}$. $y' = x^{\\sinh x} \\left(\\cosh x \\ln x + \\frac{\\sinh x}{x}\\right)$."
  },
  {
    "id": "fc-7-new-9",
    "chapter": 7,
    "topic": "Inverse Hyperbolic Forms",
    "front": "Prove that $\\sinh^{-1} x = \\ln(x + \\sqrt{x^2+1})$.",
    "back": "Let $y = \\sinh^{-1} x \\implies x = \\sinh y = \\frac{e^y - e^{-y}}{2}$. $2x = e^y - e^{-y} \\implies e^{2y} - 2xe^y - 1 = 0$. Quadratic in $e^y$: $e^y = \\frac{2x + \\sqrt{4x^2+4}}{2} = x + \\sqrt{x^2+1}$. Thus $y = \\ln(x + \\sqrt{x^2+1})$."
  },
  {
    "id": "fc-7-new-10",
    "chapter": 7,
    "topic": "Hyperbolic Integration",
    "front": "Evaluate $\\displaystyle\\int e^x \\cosh x \\,dx$.",
    "back": "$\\cosh x = \\frac{e^x+e^{-x}}{2}$. Integral is $\\int e^x \\frac{e^x+e^{-x}}{2} dx = \\frac{1}{2} \\int (e^{2x} + 1) dx = \\frac{1}{4}e^{2x} + \\frac{1}{2}x + C$."
  },
  {
    "id": "fc-7-new-11",
    "chapter": 7,
    "topic": "Hyperbolic Derivatives",
    "front": "Differentiate $f(x) = \\tan^{-1}(\\sinh x)$.",
    "back": "$f'(x) = \\frac{1}{1 + \\sinh^2 x} \\cdot \\frac{d}{dx}(\\sinh x) = \\frac{\\cosh x}{\\cosh^2 x} = \\frac{1}{\\cosh x} = \\operatorname{sech} x$. Interestingly, the anti-derivative of $\\operatorname{sech} x$ is the Gudermannian function $\\tan^{-1}(\\sinh x)$."
  },
  {
    "id": "fc-7-new-12",
    "chapter": 7,
    "topic": "Hyperbolic Limits",
    "front": "Evaluate $\\displaystyle\\lim_{x\\to \\infty} (\\cosh x - \\sinh x)$.",
    "back": "$\\cosh x - \\sinh x = \\frac{e^x+e^{-x}}{2} - \\frac{e^x-e^{-x}}{2} = e^{-x}$. As $x \\to \\infty$, $e^{-x} \\to 0$. The limit is $0$."
  },
  {
    "id": "fc-7-new-13",
    "chapter": 7,
    "topic": "Inverse Hyperbolic Integrals",
    "front": "Evaluate $\\displaystyle\\int \\frac{dx}{\\sqrt{9x^2 + 25}}$.",
    "back": "Factor out $25$: $\\int \\frac{dx}{5\\sqrt{(3x/5)^2 + 1}}$. Let $u = 3x/5$, $du = 3/5 dx$. Integral is $\\frac{1}{3} \\int \\frac{du}{\\sqrt{u^2+1}} = \\frac{1}{3} \\sinh^{-1}(u) = \\frac{1}{3} \\sinh^{-1}\\left(\\frac{3x}{5}\\right) + C$."
  },
  {
    "id": "fc-7-new-14",
    "chapter": 7,
    "topic": "Hyperbolic Identities",
    "front": "Express $\\cosh(A-B)$ in terms of $\\sinh$ and $\\cosh$.",
    "back": "By definition, $\\cosh(A-B) = \\frac{e^{A-B} + e^{-(A-B)}}{2} = \\frac{e^A e^{-B} + e^{-A} e^B}{2}$. Using $e^x = \\cosh x + \\sinh x$, this expands to $\\cosh A \\cosh B - \\sinh A \\sinh B$."
  },
  {
    "id": "fc-7-new-15",
    "chapter": 7,
    "topic": "Hyperbolic Equations",
    "front": "Solve $\\tanh^2 x = \\frac{1}{4}$.",
    "back": "$\\tanh x = \\pm \\frac{1}{2}$. Since $\\tanh x = \\frac{e^{2x}-1}{e^{2x}+1}$, we have $\\frac{e^{2x}-1}{e^{2x}+1} = \\pm \\frac{1}{2}$. Solving gives $e^{2x} = 3$ or $1/3$. $2x = \\pm \\ln 3 \\implies x = \\pm \\frac{1}{2}\\ln 3$."
  },
  {
    "id": "fc-7-new-16",
    "chapter": 7,
    "topic": "Hyperbolic Integration",
    "front": "Evaluate $\\displaystyle\\int \\operatorname{sech}^3 x \\tanh x \\,dx$.",
    "back": "Let $u = \\operatorname{sech} x$, $du = -\\operatorname{sech} x \\tanh x \\,dx$. The integral is $\\int -u^2 \\,du = -\\frac{u^3}{3} + C = -\\frac{1}{3}\\operatorname{sech}^3 x + C$."
  },
  {
    "id": "fc-7-new-17",
    "chapter": 7,
    "topic": "Hyperbolic Properties",
    "front": "What is the domain and range of $f(x) = \\coth^{-1} x$?",
    "back": "$\\coth x = \\frac{\\cosh x}{\\sinh x}$. Since $|\\coth x| > 1$ for all $x \\neq 0$, the domain of its inverse is $(-\\infty, -1) \\cup (1, \\infty)$. The range is all real numbers except $0$: $(-\\infty, 0) \\cup (0, \\infty)$."
  },
  {
    "id": "fc-7-new-18",
    "chapter": 7,
    "topic": "Hyperbolic Derivatives",
    "front": "Find the derivative of $y = x \\cosh^{-1}(x/2) - \\sqrt{x^2-4}$.",
    "back": "$y' = 1\\cdot\\cosh^{-1}(x/2) + x\\frac{1}{\\sqrt{(x/2)^2-1}}\\cdot\\frac{1}{2} - \\frac{2x}{2\\sqrt{x^2-4}}$. Simplifying the second term: $\\frac{x/2}{\\sqrt{x^2/4 - 1}} = \\frac{x}{\\sqrt{x^2-4}}$. It cancels with the last term. Result: $\\cosh^{-1}(x/2)$."
  },
  {
    "id": "fc-7-new-19",
    "chapter": 7,
    "topic": "Hyperbolic Power Series",
    "front": "Write the Maclaurin series for $\\cosh(x^2)$.",
    "back": "The Maclaurin series for $\\cosh u = \\sum_{n=0}^\\infty \\frac{u^{2n}}{(2n)!} = 1 + \\frac{u^2}{2!} + \\frac{u^4}{4!} + \\dots$ Substituting $u = x^2$ yields $\\sum_{n=0}^\\infty \\frac{x^{4n}}{(2n)!} = 1 + \\frac{x^4}{2} + \\frac{x^8}{24} + \\dots$"
  },
  {
    "id": "fc-7-new-20",
    "chapter": 7,
    "topic": "Hyperbolic Integration",
    "front": "Evaluate $\\displaystyle\\int_0^{\\ln 3} \\sinh x \\,dx$.",
    "back": "The antiderivative is $\\cosh x$. Evaluating at bounds: $\\cosh(\\ln 3) - \\cosh(0) = \\frac{3 + 1/3}{2} - 1 = \\frac{10/3}{2} - 1 = \\frac{5}{3} - 1 = \\frac{2}{3}$."
  },
  {
    "id": "fc-7-new-21",
    "chapter": 7,
    "topic": "Hyperbolic Optimization",
    "front": "Find the absolute minimum value of $f(x) = 2\\cosh x + \\sinh x$ on the real line.",
    "back": "Set $f'(x)=2\\sinh x+\\cosh x=0$, so $\\tanh x=-1/2$. The function can be written as $f(x)=\\frac{3e^x+e^{-x}}{2}$. By AM-GM, $f(x)\\ge\\sqrt{3}$, and equality occurs when $3e^x=e^{-x}$, so the absolute minimum is $\\sqrt{3}$."
  },
  {
    "id": "fc-7-new-22",
    "chapter": 7,
    "topic": "Inverse Hyperbolic Forms",
    "front": "Evaluate $\\displaystyle\\int \\frac{dx}{\\sqrt{x^2+a^2}}$ using inverse hyperbolic functions.",
    "back": "Substitute $x = a\\sinh u \\implies dx = a\\cosh u \\,du$. Integral is $\\int \\frac{a\\cosh u}{a\\cosh u} du = \\int du = u + C = \\sinh^{-1}(x/a) + C$."
  },
  {
    "id": "fc-7-new-23",
    "chapter": 7,
    "topic": "Hyperbolic Combinations",
    "front": "Simplify $\\cosh^4 x - \\sinh^4 x$.",
    "back": "Factor as a difference of squares: $(\\cosh^2 x - \\sinh^2 x)(\\cosh^2 x + \\sinh^2 x)$. The first term is $1$ (fundamental identity). The second term is $\\cosh(2x)$. Result: $\\cosh(2x)$."
  },
  {
    "id": "fc-7-new-24",
    "chapter": 7,
    "topic": "Hyperbolic Integration",
    "front": "Evaluate $\\displaystyle\\int \\frac{e^{2x}}{\\cosh x} \\,dx$.",
    "back": "$\\frac{e^{2x}}{\\cosh x} = \\frac{2e^{2x}}{e^x+e^{-x}} = \\frac{2e^{3x}}{e^{2x}+1}$. Let $u = e^x, du = e^x dx$. Integral is $\\int \\frac{2u^2}{u^2+1} du = 2\\int(1 - \\frac{1}{u^2+1})du = 2(u - \\tan^{-1} u) + C = 2(e^x - \\tan^{-1}(e^x)) + C$."
  },
  {
    "id": "fc-7-new-25",
    "chapter": 7,
    "topic": "Hyperbolic Derivatives",
    "front": "Differentiate $y = \\ln(\\operatorname{sech} x + \\tanh x)$.",
    "back": "Notice $y = \\ln\\left(\\frac{1+\\sinh x}{\\cosh x}\\right)$. Easier: $y' = \\operatorname{sech} x$ (This is a famous identity related to the Gudermannian)."
  },
  {
    "id": "fc-11",
    "chapter": 8,
    "topic": "Volumes of Revolution",
    "front": "Find the volume of the solid generated by revolving the region bounded by $y = e^{-x^2}$, $y=0$, $x=0$, $x=1$ about the $y$-axis.",
    "back": "Use cylindrical shells: $V = \\int_0^1 2\\pi x e^{-x^2} dx$. Let $u = -x^2 \\implies du = -2x dx$. $V = -\\pi \\int_0^{-1} e^u du = \\pi(1 - e^{-1})$."
  },
  {
    "id": "fc-12",
    "chapter": 8,
    "topic": "Area Between Curves",
    "front": "Find the area of the region enclosed by $x = y^3 - y$ and $x = 1 - y^4$.",
    "back": "Intersection points: $y^3 - y = 1 - y^4 \\implies y^4 + y^3 - y - 1 = 0 \\implies y = \\pm 1$. Area $A = \\int_{-1}^1 ((1 - y^4) - (y^3 - y)) dy = \\frac{8}{5}$."
  },
  {
    "id": "fc-13",
    "chapter": 8,
    "topic": "Arc Length",
    "front": "Find the arc length of the curve $y = \\ln(\\cos x)$ from $x = 0$ to $x = \\pi/4$.",
    "back": "$y' = -\\tan x$. The arc length $L = \\int_0^{\\pi/4} \\sqrt{1 + \\tan^2 x} dx = \\int_0^{\\pi/4} \\sec x dx = \\ln|\\sec x + \\tan x| \\Big|_0^{\\pi/4} = \\ln(\\sqrt{2} + 1)$."
  },
  {
    "id": "fc-14",
    "chapter": 8,
    "topic": "Surface Area",
    "front": "Find the surface area generated by rotating $y = \\sqrt{R^2 - x^2}$ on $[-R, R]$ about the $x$-axis.",
    "back": "$y' = \\frac{-x}{\\sqrt{R^2 - x^2}}$. $SA = \\int_{-R}^R 2\\pi y \\sqrt{1 + (y')^2} dx = \\int_{-R}^R 2\\pi \\sqrt{R^2 - x^2} \\sqrt{\\frac{R^2}{R^2-x^2}} dx = \\int_{-R}^R 2\\pi R dx = 4\\pi R^2$."
  },
  {
    "id": "fc-15",
    "chapter": 8,
    "topic": "Center of Mass",
    "front": "Find the $y$-coordinate of the centroid of a semicircle bounded by $y = \\sqrt{r^2 - x^2}$ and $y=0$.",
    "back": "Area $A = \\frac{1}{2}\\pi r^2$. $\\bar{y} = \\frac{1}{A} \\int_{-r}^r \\frac{1}{2}[f(x)]^2 dx = \\frac{2}{\\pi r^2} \\frac{1}{2} \\int_{-r}^r (r^2 - x^2) dx = \\frac{1}{\\pi r^2} \\left[r^2 x - \\frac{x^3}{3}\\right]_{-r}^r = \\frac{4r}{3\\pi}$."
  },
  {
    "id": "fc-16",
    "chapter": 8,
    "topic": "Work",
    "front": "Calculate the work required to pump all the water out of a full conical tank (vertex down) of radius $R$ and height $H$ to the top.",
    "back": "A slice at height $y$ from the bottom has radius $r = \\frac{R}{H}y$. Volume $dV = \\pi r^2 dy$. Distance to top is $H-y$. Work $W = \\int_0^H \\rho g (H-y) \\pi \\left(\\frac{Ry}{H}\\right)^2 dy = \\frac{\\pi \\rho g R^2 H^2}{12}$."
  },
  {
    "id": "fc-17",
    "chapter": 8,
    "topic": "Hydrostatic Force",
    "front": "Find the hydrostatic force on a vertical semicircular plate of radius $R$ submerged with its flat edge at the water surface.",
    "back": "Depth is $y$, width is $2\\sqrt{R^2 - y^2}$. Force $F = \\int_0^R \\rho g y (2\\sqrt{R^2 - y^2}) dy$. Let $u = R^2 - y^2$, $F = \\rho g \\left[ -\\frac{2}{3}(R^2-y^2)^{3/2} \\right]_0^R = \\frac{2}{3}\\rho g R^3$."
  },
  {
    "id": "fc-18",
    "chapter": 8,
    "topic": "Volumes of Revolution",
    "front": "Find the volume of the solid formed by revolving $y = \\sin x$ on $[0, \\pi]$ about the $x$-axis.",
    "back": "$V = \\pi \\int_0^\\pi \\sin^2 x dx = \\pi \\int_0^\\pi \\frac{1 - \\cos(2x)}{2} dx = \\frac{\\pi}{2} \\left[x - \\frac{\\sin(2x)}{2}\\right]_0^\\pi = \\frac{\\pi^2}{2}$."
  },
  {
    "id": "fc-19",
    "chapter": 8,
    "topic": "Arc Length",
    "front": "Determine the arc length of $y = \\cosh x$ from $x=0$ to $x=a$.",
    "back": "$y' = \\sinh x$. $L = \\int_0^a \\sqrt{1 + \\sinh^2 x} dx = \\int_0^a \\cosh x dx = \\sinh a$."
  },
  {
    "id": "fc-20",
    "chapter": 8,
    "topic": "Economics Applications",
    "front": "Calculate the Gini index for a country's income distribution modeled by the Lorenz curve $L(x) = x^3$.",
    "back": "Gini Index $G = 2 \\int_0^1 (x - L(x)) dx = 2 \\int_0^1 (x - x^3) dx = 2 \\left[\\frac{x^2}{2} - \\frac{x^4}{4}\\right]_0^1 = 2(\\frac{1}{4}) = 0.5$."
  },
  {
    "id": "fc-8-new-1",
    "chapter": 8,
    "topic": "Riemann Sums",
    "front": "Write the right Riemann sum for $f(x)=x^2$ on $[0,1]$ with $n$ subintervals.",
    "back": "$\\Delta x = \\frac{1}{n}, x_i = \\frac{i}{n}$. Sum is $\\sum_{i=1}^n \\left(\\frac{i}{n}\\right)^2 \\frac{1}{n} = \\frac{1}{n^3} \\sum_{i=1}^n i^2 = \\frac{n(n+1)(2n+1)}{6n^3}$."
  },
  {
    "id": "fc-8-new-2",
    "chapter": 8,
    "topic": "Definite Integrals",
    "front": "Evaluate $\\lim_{n\\to\\infty} \\sum_{i=1}^n \\frac{1}{n+i}$ by recognizing it as a definite integral.",
    "back": "$\\frac{1}{n+i} = \\frac{1}{n(1+i/n)} = \\frac{1}{n} \\frac{1}{1+(i/n)}$. This is a Riemann sum for $\\int_0^1 \\frac{1}{1+x} dx = \\ln(2)$."
  },
  {
    "id": "fc-8-new-3",
    "chapter": 8,
    "topic": "Area Between Curves",
    "front": "Find the area bounded by $y=x^2$ and $y=2x-x^2$.",
    "back": "Intersect: $x^2 = 2x - x^2 \\implies 2x^2 - 2x = 0 \\implies x=0, 1$. Area $A = \\int_0^1 ((2x-x^2) - x^2) dx = \\int_0^1 (2x - 2x^2) dx = [x^2 - 2x^3/3]_0^1 = 1 - 2/3 = 1/3$."
  },
  {
    "id": "fc-8-new-4",
    "chapter": 8,
    "topic": "Area and Symmetry",
    "front": "Find the area enclosed by the ellipse $x^2/a^2 + y^2/b^2 = 1$.",
    "back": "$y = \\pm b\\sqrt{1 - x^2/a^2}$. Area $A = 4 \\int_0^a b\\sqrt{1 - x^2/a^2} dx$. Let $x = a\\sin\\theta$, $dx = a\\cos\\theta d\\theta$. Integral becomes $4ab \\int_0^{\\pi/2} \\cos^2\\theta d\\theta = 4ab (\\frac{\\pi}{4}) = \\pi ab$."
  },
  {
    "id": "fc-8-new-5",
    "chapter": 8,
    "topic": "Volumes by Disks",
    "front": "Volume of solid obtained by revolving $y=\\sec x$ on $[0, \\pi/4]$ about the x-axis.",
    "back": "$V = \\pi \\int_0^{\\pi/4} \\sec^2 x \\,dx = \\pi [\\tan x]_0^{\\pi/4} = \\pi(1 - 0) = \\pi$."
  },
  {
    "id": "fc-8-new-6",
    "chapter": 8,
    "topic": "Volumes by Washers",
    "front": "Volume revolving region bounded by $y=x$ and $y=x^2$ about the x-axis.",
    "back": "Intersect at $0, 1$. $V = \\pi \\int_0^1 (x^2 - (x^2)^2) dx = \\pi \\int_0^1 (x^2 - x^4) dx = \\pi(1/3 - 1/5) = \\frac{2\\pi}{15}$."
  },
  {
    "id": "fc-8-new-7",
    "chapter": 8,
    "topic": "Volumes by Washers",
    "front": "Volume revolving region bounded by $y=x$ and $y=x^2$ about $y=2$.",
    "back": "Outer radius: $2 - x^2$, inner radius: $2 - x$. $V = \\pi \\int_0^1 [(2-x^2)^2 - (2-x)^2] dx = \\pi \\int_0^1 (4 - 4x^2 + x^4 - (4 - 4x + x^2)) dx = \\pi \\int_0^1 (x^4 - 5x^2 + 4x) dx = \\pi(1/5 - 5/3 + 2) = \\frac{8\\pi}{15}$."
  },
  {
    "id": "fc-8-new-8",
    "chapter": 8,
    "topic": "Volumes by Shells",
    "front": "Volume revolving region bounded by $y=x-x^2$ and $y=0$ about the y-axis.",
    "back": "$V = \\int_0^1 2\\pi x (x - x^2) dx = 2\\pi \\int_0^1 (x^2 - x^3) dx = 2\\pi(1/3 - 1/4) = \\frac{\\pi}{6}$."
  },
  {
    "id": "fc-8-new-9",
    "chapter": 8,
    "topic": "Volumes by Shells",
    "front": "Volume revolving region bounded by $y=\\sqrt{x}$, $y=0, x=4$ about $x=6$.",
    "back": "Radius is $6-x$, height is $\\sqrt{x}$. $V = \\int_0^4 2\\pi (6-x)\\sqrt{x} dx = 2\\pi \\int_0^4 (6x^{1/2} - x^{3/2}) dx = 2\\pi [4x^{3/2} - \\frac{2}{5}x^{5/2}]_0^4 = 2\\pi(32 - 64/5) = \\frac{192\\pi}{5}$."
  },
  {
    "id": "fc-8-new-10",
    "chapter": 8,
    "topic": "Volumes by Slicing",
    "front": "Base of a solid is a circle $x^2+y^2=r^2$. Cross sections perpendicular to x-axis are squares. Find volume.",
    "back": "Side length of square $s = 2y = 2\\sqrt{r^2-x^2}$. Area $A(x) = s^2 = 4(r^2-x^2)$. $V = \\int_{-r}^r 4(r^2-x^2) dx = 2 \\int_0^r 4(r^2-x^2) dx = 8[r^2x - x^3/3]_0^r = \\frac{16}{3}r^3$."
  },
  {
    "id": "fc-8-new-11",
    "chapter": 8,
    "topic": "Average Value",
    "front": "Find the average value of $f(x) = \\sin^2 x$ on $[0, \\pi]$.",
    "back": "$f_{avg} = \\frac{1}{\\pi} \\int_0^{\\pi} \\sin^2 x dx = \\frac{1}{\\pi} \\int_0^{\\pi} \\frac{1 - \\cos 2x}{2} dx = \\frac{1}{\\pi} [\\frac{x}{2} - \\frac{\\sin 2x}{4}]_0^{\\pi} = \\frac{1}{\\pi} (\\frac{\\pi}{2}) = \\frac{1}{2}$."
  },
  {
    "id": "fc-8-new-12",
    "chapter": 8,
    "topic": "Mean Value Theorem for Integrals",
    "front": "Find $c$ such that $f(c) = f_{avg}$ for $f(x) = \\sqrt{x}$ on $[0, 4]$.",
    "back": "$f_{avg} = \\frac{1}{4} \\int_0^4 x^{1/2} dx = \\frac{1}{4} [\\frac{2}{3}x^{3/2}]_0^4 = \\frac{1}{4} (16/3) = 4/3$. Set $\\sqrt{c} = 4/3 \\implies c = 16/9$."
  },
  {
    "id": "fc-8-new-13",
    "chapter": 8,
    "topic": "Fundamental Theorem of Calculus",
    "front": "Find $\\frac{d}{dx} \\int_{x}^{x^2} \\ln(t) \\,dt$ for $x > 1$.",
    "back": "By FTC1 and Chain Rule: $\\ln(x^2) \\cdot (x^2)' - \\ln(x) \\cdot (x)' = 2x\\ln(x^2) - \\ln x = 4x\\ln x - \\ln x = (4x-1)\\ln x$."
  },
  {
    "id": "fc-8-new-14",
    "chapter": 8,
    "topic": "Work",
    "front": "A spring has natural length $1$ m. $10$ J of work stretches it to $1.5$ m. Find the force constant $k$.",
    "back": "Work $W = \\int_0^{0.5} kx \\,dx = [k\\frac{x^2}{2}]_0^{0.5} = k\\frac{0.25}{2} = \\frac{k}{8}$. Given $W = 10 \\implies \\frac{k}{8} = 10 \\implies k = 80$ N/m."
  },
  {
    "id": "fc-8-new-15",
    "chapter": 8,
    "topic": "Hydrostatic Force",
    "front": "A vertical rectangular plate of width $w$ and height $h$ is submerged in water, top edge at the surface. Find the hydrostatic force.",
    "back": "Force $F = \\int_0^h \\rho g x \\cdot w \\,dx = \\rho g w [\\frac{x^2}{2}]_0^h = \\frac{1}{2} \\rho g w h^2$."
  },
  {
    "id": "fc-8-new-16",
    "chapter": 8,
    "topic": "Center of Mass",
    "front": "Find the x-coordinate of the centroid of the region under $y = \\sin x$ on $[0, \\pi]$.",
    "back": "Area $A = \\int_0^{\\pi} \\sin x dx = 2$. $\\bar{x} = \\frac{1}{A} \\int_0^{\\pi} x \\sin x dx$. Using parts: $\\int x \\sin x dx = -x\\cos x + \\sin x$. Evaluated from $0$ to $\\pi$: $\\pi - 0 = \\pi$. So $\\bar{x} = \\pi/2$."
  },
  {
    "id": "fc-8-new-17",
    "chapter": 8,
    "topic": "Center of Mass",
    "front": "Find the y-coordinate of the centroid of the region under $y = \\sin x$ on $[0, \\pi]$.",
    "back": "$\\bar{y} = \\frac{1}{A} \\int_0^{\\pi} \\frac{1}{2} \\sin^2 x dx = \\frac{1}{2} \\int_0^{\\pi} \\frac{1 - \\cos 2x}{2} dx = \\frac{1}{4} [x - \\frac{\\sin 2x}{2}]_0^{\\pi} = \\frac{\\pi}{4}$. Thus $\\bar{y} = \\frac{\\pi}{8}$."
  },
  {
    "id": "fc-8-new-18",
    "chapter": 8,
    "topic": "Volumes of Revolution",
    "front": "Find volume revolving $y = e^x, x=0, x=1, y=0$ about the x-axis.",
    "back": "$V = \\pi \\int_0^1 (e^x)^2 dx = \\pi \\int_0^1 e^{2x} dx = \\frac{\\pi}{2}[e^{2x}]_0^1 = \\frac{\\pi}{2}(e^2 - 1)$."
  },
  {
    "id": "fc-8-new-19",
    "chapter": 8,
    "topic": "Volumes of Revolution",
    "front": "Find volume revolving $y = \\ln x, y=0, x=e$ about the y-axis.",
    "back": "$V = \\int_1^e 2\\pi x \\ln x \\,dx$. Let $u = \\ln x, dv = x dx$. $du = 1/x dx, v = x^2/2$. $2\\pi [\\frac{x^2}{2}\\ln x - \\frac{x^2}{4}]_1^e = 2\\pi (\\frac{e^2}{2} - \\frac{e^2}{4} + \\frac{1}{4}) = \\frac{\\pi}{2}(e^2+1)$."
  },
  {
    "id": "fc-8-new-20",
    "chapter": 8,
    "topic": "Pappus's Theorem",
    "front": "Use Pappus's Theorem to find the volume of the torus generated by revolving the circle $(x-R)^2 + y^2 = r^2$ about the y-axis ($R > r$).",
    "back": "Area $A = \\pi r^2$. Centroid travels distance $d = 2\\pi R$. Volume $V = Ad = (\\pi r^2)(2\\pi R) = 2\\pi^2 R r^2$."
  },
  {
    "id": "fc-8-new-21",
    "chapter": 8,
    "topic": "Arc Length",
    "front": "Find arc length of $y = \\frac{x^3}{6} + \\frac{1}{2x}$ from $1$ to $2$.",
    "back": "$y' = \\frac{x^2}{2} - \\frac{1}{2x^2}$. $1 + (y')^2 = 1 + \\frac{x^4}{4} - \\frac{1}{2} + \\frac{1}{4x^4} = (\\frac{x^2}{2} + \\frac{1}{2x^2})^2$. $L = \\int_1^2 (\\frac{x^2}{2} + \\frac{1}{2x^2}) dx = [\\frac{x^3}{6} - \\frac{1}{2x}]_1^2 = (8/6 - 1/4) - (1/6 - 1/2) = 17/12$."
  },
  {
    "id": "fc-8-new-22",
    "chapter": 8,
    "topic": "Surface Area",
    "front": "Find surface area revolving $y = x^3$ on $[0, 1]$ about the x-axis.",
    "back": "$S = \\int_0^1 2\\pi x^3 \\sqrt{1+(3x^2)^2} dx$. Let $u = 1+9x^4, du = 36x^3 dx$. $S = 2\\pi \\int_1^{10} \\sqrt{u} \\frac{du}{36} = \\frac{\\pi}{18} [\\frac{2}{3}u^{3/2}]_1^{10} = \\frac{\\pi}{27}(10\\sqrt{10} - 1)$."
  },
  {
    "id": "fc-8-new-23",
    "chapter": 8,
    "topic": "Definite Integral Properties",
    "front": "If $f$ is continuous and $\\int_0^4 f(x)dx = 10$, find $\\int_0^2 f(2x)dx$.",
    "back": "Let $u = 2x, du = 2dx$. When $x=0, u=0$; $x=2, u=4$. Integral becomes $\\frac{1}{2} \\int_0^4 f(u)du = \\frac{10}{2} = 5$."
  },
  {
    "id": "fc-8-new-24",
    "chapter": 8,
    "topic": "Work (Pumping Liquids)",
    "front": "A conical tank (radius $R$, height $H$, point down) is full of water (density $\\rho$). Find work to pump all water to the top.",
    "back": "Radius at height $y$: $r = R(y/H)$. Volume of slice: $dV = \\pi r^2 dy = \\pi (R^2/H^2) y^2 dy$. Distance to pump: $H-y$. Work $W = \\int_0^H \\rho g (H-y) \\pi (R^2/H^2) y^2 dy = \\frac{\\rho g \\pi R^2}{H^2} [H \\frac{y^3}{3} - \\frac{y^4}{4}]_0^H = \\frac{\\pi \\rho g R^2 H^2}{12}$."
  },
  {
    "id": "fc-8-new-25",
    "chapter": 8,
    "topic": "Average Value",
    "front": "Find the average value of $f(x) = |x-2|$ on $[0, 5]$.",
    "back": "$\\int_0^5 |x-2| dx$ represents two triangles. Area from $0$ to $2$: $\\frac{1}{2}(2)(2) = 2$. Area from $2$ to $5$: $\\frac{1}{2}(3)(3) = 4.5$. Total area = $6.5$. Average value = $\\frac{6.5}{5 - 0} = 1.3$."
  },
  {
    "id": "fc-21",
    "chapter": 9,
    "topic": "Integration by Parts",
    "front": "Evaluate $\\displaystyle\\int e^{2x} \\sin(3x) \\, dx$",
    "back": "Use integration by parts twice or the complex exponential method. $I = \\frac{e^{2x}}{13}(2\\sin(3x) - 3\\cos(3x)) + C$."
  },
  {
    "id": "fc-22",
    "chapter": 9,
    "topic": "Advanced Integration",
    "front": "Evaluate $\\displaystyle\\int \\sec^3 x \\, dx$",
    "back": "Use integration by parts: $u = \\sec x, dv = \\sec^2 x dx$. We get $\\sec x \\tan x - \\int \\sec x \\tan^2 x dx$. Substitute $\\tan^2 x = \\sec^2 x - 1$. The result is $\\frac{1}{2}(\\sec x \\tan x + \\ln|\\sec x + \\tan x|) + C$."
  },
  {
    "id": "fc-23",
    "chapter": 9,
    "topic": "Trig Substitutions",
    "front": "Evaluate $\\displaystyle\\int \\frac{\\sqrt{9-x^2}}{x^2} \\, dx$",
    "back": "Substitute $x = 3\\sin\\theta \\implies dx = 3\\cos\\theta d\\theta$. Integral becomes $\\int \\cot^2\\theta d\\theta = \\int (\\csc^2\\theta - 1) d\\theta = -\\cot\\theta - \\theta + C = -\\frac{\\sqrt{9-x^2}}{x} - \\sin^{-1}(x/3) + C$."
  },
  {
    "id": "fc-24",
    "chapter": 9,
    "topic": "Partial Fractions",
    "front": "Evaluate $\\displaystyle\\int \\frac{1}{x^3 + x} \\, dx$",
    "back": "Factor denominator: $x(x^2+1)$. Partial fractions: $\\frac{1}{x(x^2+1)} = \\frac{1}{x} - \\frac{x}{x^2+1}$. Result: $\\ln|x| - \\frac{1}{2}\\ln(x^2+1) + C$."
  },
  {
    "id": "fc-25",
    "chapter": 9,
    "topic": "Integration by Parts",
    "front": "Evaluate $\\displaystyle\\int \\ln(x^2 + 1) \\, dx$",
    "back": "Integration by parts: $u = \\ln(x^2+1)$, $dv = dx$. $I = x\\ln(x^2+1) - \\int \\frac{2x^2}{x^2+1} dx = x\\ln(x^2+1) - 2x + 2\\tan^{-1}x + C$."
  },
  {
    "id": "fc-26",
    "chapter": 9,
    "topic": "Completing the Square",
    "front": "Evaluate $\\displaystyle\\int \\frac{dx}{x^2 + 2x + 5}$",
    "back": "Complete the square: $x^2 + 2x + 5 = (x+1)^2 + 4$. The integral becomes $\\int \\frac{1}{(x+1)^2 + 2^2} dx = \\frac{1}{2}\\tan^{-1}\\left(\\frac{x+1}{2}\\right) + C$."
  },
  {
    "id": "fc-27",
    "chapter": 9,
    "topic": "U-Substitution",
    "front": "Evaluate $\\displaystyle\\int x^3 \\sqrt{x^2+1} \\, dx$",
    "back": "Substitute $u = x^2+1 \\implies du = 2x dx$. Then $x^2 = u-1$. Integral is $\\frac{1}{2} \\int (u-1)\\sqrt{u} du = \\frac{1}{2}\\left(\\frac{2}{5}u^{5/2} - \\frac{2}{3}u^{3/2}\\right) + C = \\frac{1}{5}(x^2+1)^{5/2} - \\frac{1}{3}(x^2+1)^{3/2} + C$."
  },
  {
    "id": "fc-28",
    "chapter": 9,
    "topic": "Trigonometric Integrals",
    "front": "Evaluate $\\displaystyle\\int \\cos^4 x \\sin^3 x \\, dx$",
    "back": "Save one $\\sin x$ and convert the rest to $\\cos$: $\\int \\cos^4 x (1-\\cos^2 x) \\sin x dx$. Let $u = \\cos x, du = -\\sin x dx$. $I = -\\int u^4(1-u^2)du = \\frac{u^7}{7} - \\frac{u^5}{5} + C = \\frac{\\cos^7 x}{7} - \\frac{\\cos^5 x}{5} + C$."
  },
  {
    "id": "fc-29",
    "chapter": 9,
    "topic": "Trigonometric Integrals",
    "front": "Evaluate $\\displaystyle\\int \\frac{dx}{1 + \\sin x}$",
    "back": "Multiply by $\\frac{1-\\sin x}{1-\\sin x}$: $\\int \\frac{1-\\sin x}{\\cos^2 x} dx = \\int (\\sec^2 x - \\sec x \\tan x) dx = \\tan x - \\sec x + C$."
  },
  {
    "id": "fc-30",
    "chapter": 9,
    "topic": "Rationalizing Substitutions",
    "front": "Evaluate $\\displaystyle\\int \\frac{dx}{\\sqrt{x} + \\sqrt[3]{x}}$",
    "back": "Let $x = u^6 \\implies dx = 6u^5 du$. Integral becomes $\\int \\frac{6u^5}{u^3 + u^2} du = 6 \\int \\frac{u^3}{u+1} du = 6\\int \\left(u^2 - u + 1 - \\frac{1}{u+1}\\right) du$. Finish by integrating polynomial and log."
  },
  {
    "id": "fc-9-new-1",
    "chapter": 9,
    "topic": "Integration by Parts",
    "front": "Evaluate $\\displaystyle\\int x^2 e^x \\,dx$.",
    "back": "Using tabular integration: $u=x^2$, $dv=e^x dx$. Derivs of $x^2$: $2x, 2, 0$. Integrals of $e^x$: $e^x, e^x, e^x$. Result: $x^2e^x - 2xe^x + 2e^x + C = e^x(x^2 - 2x + 2) + C$."
  },
  {
    "id": "fc-9-new-2",
    "chapter": 9,
    "topic": "Integration by Parts",
    "front": "Evaluate $\\displaystyle\\int \\ln x \\,dx$.",
    "back": "Let $u = \\ln x, dv = dx$. $du = \\frac{1}{x} dx, v = x$. Result: $x\\ln x - \\int x \\frac{1}{x} dx = x\\ln x - x + C$."
  },
  {
    "id": "fc-9-new-3",
    "chapter": 9,
    "topic": "Integration by Parts",
    "front": "Evaluate $\\displaystyle\\int e^x \\sin x \\,dx$.",
    "back": "Let $I = \\int e^x \\sin x dx$. Two parts applications gives $I = e^x \\sin x - (e^x \\cos x + I)$. $2I = e^x(\\sin x - \\cos x)$. $I = \\frac{e^x}{2}(\\sin x - \\cos x) + C$."
  },
  {
    "id": "fc-9-new-4",
    "chapter": 9,
    "topic": "Trig Integrals",
    "front": "Evaluate $\\displaystyle\\int \\sin^3 x \\cos^2 x \\,dx$.",
    "back": "Odd power of sine. $\\int (1-\\cos^2 x)\\cos^2 x \\sin x dx$. Let $u = \\cos x, du = -\\sin x dx$. $-\\int (1-u^2)u^2 du = -\\frac{u^3}{3} + \\frac{u^5}{5} + C = \\frac{\\cos^5 x}{5} - \\frac{\\cos^3 x}{3} + C$."
  },
  {
    "id": "fc-9-new-5",
    "chapter": 9,
    "topic": "Trig Integrals",
    "front": "Evaluate $\\displaystyle\\int \\cos^4 x \\,dx$.",
    "back": "Use half-angle: $(\\frac{1+\\cos 2x}{2})^2 = \\frac{1}{4}(1 + 2\\cos 2x + \\cos^2 2x)$. Expand $\\cos^2 2x = \\frac{1+\\cos 4x}{2}$. Integral is $\\frac{1}{4}(x + \\sin 2x + \\frac{1}{2}(x + \\frac{\\sin 4x}{4})) = \\frac{3}{8}x + \\frac{1}{4}\\sin 2x + \\frac{1}{32}\\sin 4x + C$."
  },
  {
    "id": "fc-9-new-6",
    "chapter": 9,
    "topic": "Trig Integrals",
    "front": "Evaluate $\\displaystyle\\int \\tan^3 x \\sec^4 x \\,dx$.",
    "back": "Option 1: Even secant power. Save $\\sec^2 x$. $u=\\tan x$. $\\int u^3 (u^2+1) du = \\frac{\\tan^6 x}{6} + \\frac{\\tan^4 x}{4} + C$."
  },
  {
    "id": "fc-9-new-7",
    "chapter": 9,
    "topic": "Trig Integrals",
    "front": "Evaluate $\\displaystyle\\int \\tan^3 x \\sec^3 x \\,dx$.",
    "back": "Odd tangent power. Save $\\sec x \\tan x$. $u=\\sec x$. $\\int (u^2-1)u^2 du = \\frac{u^5}{5} - \\frac{u^3}{3} + C = \\frac{\\sec^5 x}{5} - \\frac{\\sec^3 x}{3} + C$."
  },
  {
    "id": "fc-9-new-8",
    "chapter": 9,
    "topic": "Trig Substitutions",
    "front": "Evaluate $\\displaystyle\\int \\frac{dx}{x^2 \\sqrt{4-x^2}}$.",
    "back": "Let $x = 2\\sin\\theta, dx = 2\\cos\\theta d\\theta$. Integral: $\\int \\frac{2\\cos\\theta}{4\\sin^2\\theta (2\\cos\\theta)} d\\theta = \\frac{1}{4} \\int \\csc^2\\theta d\\theta = -\\frac{1}{4}\\cot\\theta = -\\frac{\\sqrt{4-x^2}}{4x} + C$."
  },
  {
    "id": "fc-9-new-9",
    "chapter": 9,
    "topic": "Trig Substitutions",
    "front": "Evaluate $\\displaystyle\\int \\frac{dx}{\\sqrt{x^2+9}}$.",
    "back": "Let $x = 3\\tan\\theta, dx = 3\\sec^2\\theta d\\theta$. Integral: $\\int \\frac{3\\sec^2\\theta}{3\\sec\\theta} d\\theta = \\int \\sec\\theta d\\theta = \\ln|\\sec\\theta + \\tan\\theta| = \\ln|\\frac{\\sqrt{x^2+9}}{3} + \\frac{x}{3}| + C$."
  },
  {
    "id": "fc-9-new-10",
    "chapter": 9,
    "topic": "Trig Substitutions",
    "front": "Evaluate $\\displaystyle\\int \\frac{dx}{(x^2-1)^{3/2}}$ for $x>1$.",
    "back": "Let $x = \\sec\\theta, dx = \\sec\\theta\\tan\\theta d\\theta$. Integral: $\\int \\frac{\\sec\\theta\\tan\\theta}{\\tan^3\\theta} d\\theta = \\int \\frac{\\cos\\theta}{\\sin^2\\theta} d\\theta = -\\csc\\theta = -\\frac{x}{\\sqrt{x^2-1}} + C$."
  },
  {
    "id": "fc-9-new-11",
    "chapter": 9,
    "topic": "Completing the Square",
    "front": "Evaluate $\\displaystyle\\int \\frac{dx}{x^2+4x+13}$.",
    "back": "Complete square: $x^2+4x+13 = (x+2)^2 + 9$. Let $u = x+2$. Integral is $\\int \\frac{du}{u^2+3^2} = \\frac{1}{3}\\tan^{-1}\\left(\\frac{x+2}{3}\\right) + C$."
  },
  {
    "id": "fc-9-new-12",
    "chapter": 9,
    "topic": "Partial Fractions",
    "front": "Set up the partial fraction decomposition for $\\frac{x^2+1}{x(x-1)^2 (x^2+4)}$.",
    "back": "$\\frac{A}{x} + \\frac{B}{x-1} + \\frac{C}{(x-1)^2} + \\frac{Dx+E}{x^2+4}$."
  },
  {
    "id": "fc-9-new-13",
    "chapter": 9,
    "topic": "Partial Fractions",
    "front": "Evaluate $\\displaystyle\\int \\frac{1}{x^2-a^2} \\,dx$.",
    "back": "$\\frac{1}{(x-a)(x+a)} = \\frac{1/2a}{x-a} - \\frac{1/2a}{x+a}$. Integral is $\\frac{1}{2a} \\ln|x-a| - \\frac{1}{2a} \\ln|x+a| = \\frac{1}{2a} \\ln|\\frac{x-a}{x+a}| + C$."
  },
  {
    "id": "fc-9-new-14",
    "chapter": 9,
    "topic": "Partial Fractions",
    "front": "Evaluate $\\displaystyle\\int \\frac{x^3 + x}{x-1} \\,dx$.",
    "back": "Improper fraction. Long division: $x^3+x = (x^2+x+2)(x-1) + 2$. Integral is $\\int (x^2+x+2 + \\frac{2}{x-1}) dx = \\frac{x^3}{3} + \\frac{x^2}{2} + 2x + 2\\ln|x-1| + C$."
  },
  {
    "id": "fc-9-new-15",
    "chapter": 9,
    "topic": "Rationalizing Substitution",
    "front": "Evaluate $\\displaystyle\\int \\frac{\\sqrt{x}}{1+x} \\,dx$.",
    "back": "Let $u = \\sqrt{x}, du = \\frac{1}{2\\sqrt{x}} dx \\implies dx = 2u du$. Integral: $\\int \\frac{u \\cdot 2u}{1+u^2} du = 2\\int (1 - \\frac{1}{1+u^2}) du = 2(u - \\tan^{-1} u) = 2(\\sqrt{x} - \\tan^{-1}\\sqrt{x}) + C$."
  },
  {
    "id": "fc-9-new-16",
    "chapter": 9,
    "topic": "Weierstrass Substitution",
    "front": "What is the Weierstrass $t$-substitution and its differentials?",
    "back": "$t = \\tan(x/2)$. $dx = \\frac{2}{1+t^2} dt$. $\\sin x = \\frac{2t}{1+t^2}$. $\\cos x = \\frac{1-t^2}{1+t^2}$."
  },
  {
    "id": "fc-9-new-17",
    "chapter": 9,
    "topic": "Integration by Parts",
    "front": "Evaluate $\\displaystyle\\int \\tan^{-1} x \\,dx$.",
    "back": "$u = \\tan^{-1} x, dv = dx$. $du = \\frac{1}{1+x^2} dx, v = x$. Result: $x\\tan^{-1} x - \\int \\frac{x}{1+x^2} dx = x\\tan^{-1} x - \\frac{1}{2}\\ln(1+x^2) + C$."
  },
  {
    "id": "fc-9-new-18",
    "chapter": 9,
    "topic": "Reduction Formulas",
    "front": "State the reduction formula for $\\int \\sin^n x \\,dx$.",
    "back": "$\\int \\sin^n x \\,dx = -\\frac{\\sin^{n-1} x \\cos x}{n} + \\frac{n-1}{n} \\int \\sin^{n-2} x \\,dx$."
  },
  {
    "id": "fc-9-new-19",
    "chapter": 9,
    "topic": "Trig Integrals",
    "front": "Evaluate $\\displaystyle\\int \\sin 3x \\cos 5x \\,dx$.",
    "back": "Use product-to-sum: $\\sin 3x \\cos 5x = \\frac{1}{2} (\\sin 8x + \\sin(-2x)) = \\frac{1}{2} (\\sin 8x - \\sin 2x)$. Integral is $-\\frac{\\cos 8x}{16} + \\frac{\\cos 2x}{4} + C$."
  },
  {
    "id": "fc-9-new-20",
    "chapter": 9,
    "topic": "Rationalizing Substitution",
    "front": "Evaluate $\\displaystyle\\int \\frac{dx}{x\\sqrt{x^2-4}}$.",
    "back": "Let $x = 2\\sec\\theta, dx = 2\\sec\\theta\\tan\\theta d\\theta$. $\\int \\frac{2\\sec\\theta\\tan\\theta}{2\\sec\\theta \\cdot 2\\tan\\theta} d\\theta = \\int \\frac{1}{2} d\\theta = \\frac{1}{2}\\theta = \\frac{1}{2}\\sec^{-1}(x/2) + C$. (Or use $u = \\sqrt{x^2-4}$)."
  },
  {
    "id": "fc-9-new-21",
    "chapter": 9,
    "topic": "Partial Fractions",
    "front": "Find the coefficients for $\\frac{2x+3}{(x-1)(x+2)} = \\frac{A}{x-1} + \\frac{B}{x+2}$.",
    "back": "Multiply by denominator: $2x+3 = A(x+2) + B(x-1)$. Set $x=1 \\implies 5 = 3A \\implies A=5/3$. Set $x=-2 \\implies -1 = -3B \\implies B=1/3$."
  },
  {
    "id": "fc-9-new-22",
    "chapter": 9,
    "topic": "Trig Integrals",
    "front": "Evaluate $\\displaystyle\\int \\sec x \\,dx$.",
    "back": "Multiply numerator and denominator by $\\sec x + \\tan x$. $\\int \\frac{\\sec^2 x + \\sec x \\tan x}{\\sec x + \\tan x} dx$. Let $u = \\sec x + \\tan x$. Result is $\\ln|\\sec x + \\tan x| + C$."
  },
  {
    "id": "fc-9-new-23",
    "chapter": 9,
    "topic": "Integration by Parts",
    "front": "Evaluate $\\displaystyle\\int x^3 \\ln x \\,dx$.",
    "back": "$u = \\ln x, dv = x^3 dx$. $du = 1/x dx, v = x^4/4$. $\\frac{x^4}{4}\\ln x - \\int \\frac{x^3}{4} dx = \\frac{x^4}{4}\\ln x - \\frac{x^4}{16} + C$."
  },
  {
    "id": "fc-9-new-24",
    "chapter": 9,
    "topic": "Trig Substitutions",
    "front": "What trig substitution is used for $\\sqrt{a^2+x^2}$, and what identity simplifies it?",
    "back": "Let $x = a\\tan\\theta$. The expression becomes $\\sqrt{a^2(1+\\tan^2\\theta)} = a\\sqrt{\\sec^2\\theta} = a|\\sec\\theta|$. The identity is $1+\\tan^2\\theta = \\sec^2\\theta$."
  },
  {
    "id": "fc-9-new-25",
    "chapter": 9,
    "topic": "Integration by Parts",
    "front": "Evaluate $\\displaystyle\\int \\cos(\\ln x) \\,dx$.",
    "back": "Let $u = \\ln x \\implies x = e^u, dx = e^u du$. Integral becomes $\\int e^u \\cos u du$. Using previous formula: $\\frac{e^u}{2}(\\cos u + \\sin u) = \\frac{x}{2}(\\cos(\\ln x) + \\sin(\\ln x)) + C$."
  },
  {
    "id": "fc-31",
    "chapter": 10,
    "topic": "Improper Integrals",
    "front": "Determine if $\\displaystyle\\int_0^\\infty \\sin(x^2) \\, dx$ converges.",
    "back": "This is a Fresnel integral. Substitute $u=x^2$, making it $\\int_0^\\infty \\frac{\\sin(u)}{2\\sqrt{u}} du$. It converges conditionally by Dirichlet's Test. Its exact value is $\\sqrt{\\pi/8}$."
  },
  {
    "id": "fc-32",
    "chapter": 10,
    "topic": "Improper Integrals",
    "front": "Evaluate $\\displaystyle\\int_1^\\infty \\frac{\\ln x}{x^2} \\, dx$",
    "back": "Use integration by parts with $u = \\ln x, dv = x^{-2}dx$. $\\lim_{t\\to\\infty} \\left[ -\\frac{\\ln x}{x} - \\frac{1}{x} \\right]_1^t = \\lim_{t\\to\\infty} \\left( -\\frac{\\ln t}{t} - \\frac{1}{t} + 1 \\right) = 1$."
  },
  {
    "id": "fc-33",
    "chapter": 10,
    "topic": "Type II Improper Integrals",
    "front": "Evaluate $\\displaystyle\\int_0^3 \\frac{dx}{(x-1)^2}$ if it converges.",
    "back": "Improper at $x=1$. Split at 1: $\\int_0^1 (x-1)^{-2} dx + \\int_1^3 (x-1)^{-2} dx$. Limit $\\lim_{t\\to 1^-} \\left[ \\frac{-1}{x-1} \\right]_0^t = \\infty$. The integral diverges."
  },
  {
    "id": "fc-34",
    "chapter": 10,
    "topic": "p-Test for Integrals",
    "front": "For what values of $p$ does $\\displaystyle\\int_1^\\infty \\frac{dx}{x^p}$ converge?",
    "back": "If $p > 1$, $\\int_1^t x^{-p} dx = \\frac{t^{1-p} - 1}{1-p} \\to \\frac{1}{p-1}$ as $t \\to \\infty$. If $p \\le 1$, it diverges. So it converges for $p > 1$."
  },
  {
    "id": "fc-35",
    "chapter": 10,
    "topic": "Improper Integrals",
    "front": "Evaluate $\\displaystyle\\int_0^\\infty x e^{-x} \\, dx$",
    "back": "Integration by parts: $u=x, dv=e^{-x}dx$. $\\left[-xe^{-x}\\right]_0^\\infty + \\int_0^\\infty e^{-x} dx = 0 + 1 = 1$."
  },
  {
    "id": "fc-36",
    "chapter": 10,
    "topic": "Improper Integrals",
    "front": "Evaluate $\\displaystyle\\int_{-\\infty}^\\infty \\frac{dx}{1+x^2}$",
    "back": "$\\lim_{t\\to-\\infty} [\\tan^{-1} x]_t^0 + \\lim_{s\\to\\infty} [\\tan^{-1} x]_0^s = -\\left(-\\frac{\\pi}{2}\\right) + \\frac{\\pi}{2} = \\pi$."
  },
  {
    "id": "fc-37",
    "chapter": 10,
    "topic": "Comparison Test",
    "front": "Does $\\displaystyle\\int_1^\\infty \\frac{\\sin^2 x}{x^2} \\, dx$ converge?",
    "back": "Since $0 \\le \\sin^2 x \\le 1$, we have $0 \\le \\frac{\\sin^2 x}{x^2} \\le \\frac{1}{x^2}$. Since $\\int_1^\\infty \\frac{1}{x^2} dx$ converges ($p=2$), the given integral converges by the Comparison Test."
  },
  {
    "id": "fc-38",
    "chapter": 10,
    "topic": "Type II Improper Integrals",
    "front": "Evaluate $\\displaystyle\\int_0^1 \\ln x \\, dx$",
    "back": "Improper at $x=0$. $\\lim_{t \\to 0^+} \\int_t^1 \\ln x dx = \\lim_{t \\to 0^+} [x\\ln x - x]_t^1 = (0 - 1) - \\lim_{t \\to 0^+}(t\\ln t - t)$. Since $t\\ln t \\to 0$, value is $-1$."
  },
  {
    "id": "fc-39",
    "chapter": 10,
    "topic": "Limit Comparison Test",
    "front": "Determine convergence of $\\displaystyle\\int_1^\\infty \\frac{dx}{\\sqrt{x^3 + 1}}$",
    "back": "Use Limit Comparison Test with $g(x) = \\frac{1}{x^{3/2}}$. $\\lim_{x\\to\\infty} \\frac{1/\\sqrt{x^3+1}}{1/x^{3/2}} = 1 > 0$. Since $\\int_1^\\infty x^{-3/2} dx$ converges ($p=3/2 > 1$), the integral converges."
  },
  {
    "id": "fc-40",
    "chapter": 10,
    "topic": "Improper Integrals",
    "front": "Does $\\displaystyle\\int_0^{\\pi/2} \\tan x \\, dx$ converge?",
    "back": "$\\int_0^t \\tan x dx = \\ln|\\sec t|$. As $t \\to \\pi/2^-$, $\\sec t \\to \\infty$, so $\\ln|\\sec t| \\to \\infty$. The integral diverges."
  },
  {
    "id": "fc-10-new-1",
    "chapter": 10,
    "topic": "Type I Improper Integrals",
    "front": "Evaluate $\\displaystyle\\int_1^{\\infty} \\frac{1}{x^p} \\,dx$ and determine for which $p$ it converges.",
    "back": "For $p \\neq 1$: $\\lim_{t\\to\\infty} [\\frac{x^{1-p}}{1-p}]_1^t$. If $p > 1$, the limit is $\\frac{1}{p-1}$. If $p \\le 1$, the integral diverges. For $p=1$: $\\int \\frac{1}{x} dx = \\ln x \\to \\infty$. Converges iff $p > 1$."
  },
  {
    "id": "fc-10-new-2",
    "chapter": 10,
    "topic": "Type I Improper Integrals",
    "front": "Evaluate $\\displaystyle\\int_{-\\infty}^{\\infty} \\frac{1}{1+x^2} \\,dx$.",
    "back": "Split at $0$: $\\int_{-\\infty}^0 \\frac{dx}{1+x^2} + \\int_0^{\\infty} \\frac{dx}{1+x^2} = [\\tan^{-1} x]_{-\\infty}^0 + [\\tan^{-1} x]_0^{\\infty} = (0 - (-\\frac{\\pi}{2})) + (\\frac{\\pi}{2} - 0) = \\pi$."
  },
  {
    "id": "fc-10-new-3",
    "chapter": 10,
    "topic": "Type I Improper Integrals",
    "front": "Evaluate $\\displaystyle\\int_0^{\\infty} e^{-x} \\cos x \\,dx$.",
    "back": "Using $\\int e^{ax}\\cos bx dx = \\frac{e^{ax}(a\\cos bx + b\\sin bx)}{a^2+b^2}$. Here $a=-1, b=1$. $[\\frac{e^{-x}(-\\cos x + \\sin x)}{2}]_0^{\\infty} = 0 - \\frac{-1}{2} = \\frac{1}{2}$."
  },
  {
    "id": "fc-10-new-4",
    "chapter": 10,
    "topic": "Type II Improper Integrals",
    "front": "Evaluate $\\displaystyle\\int_0^1 \\frac{1}{\\sqrt{x}} \\,dx$.",
    "back": "Discontinuity at $x=0$. $\\lim_{t\\to 0^+} \\int_t^1 x^{-1/2} dx = \\lim_{t\\to 0^+} [2\\sqrt{x}]_t^1 = 2 - \\lim_{t\\to 0^+} 2\\sqrt{t} = 2$. The integral converges to $2$."
  },
  {
    "id": "fc-10-new-5",
    "chapter": 10,
    "topic": "Type II Improper Integrals",
    "front": "Evaluate $\\displaystyle\\int_0^2 \\frac{1}{(x-1)^{2/3}} \\,dx$.",
    "back": "Discontinuity at $x=1$. Split: $\\int_0^1 \\frac{dx}{(x-1)^{2/3}} + \\int_1^2 \\frac{dx}{(x-1)^{2/3}} = [3(x-1)^{1/3}]_0^1 + [3(x-1)^{1/3}]_1^2 = 3 + 3 = 6$."
  },
  {
    "id": "fc-10-new-6",
    "chapter": 10,
    "topic": "Comparison Test",
    "front": "Use the Comparison Test to determine if $\\displaystyle\\int_1^{\\infty} \\frac{\\sin^2 x}{x^2} \\,dx$ converges.",
    "back": "$0 \\le \\frac{\\sin^2 x}{x^2} \\le \\frac{1}{x^2}$ for all $x \\ge 1$. Since $\\int_1^{\\infty} \\frac{1}{x^2} dx$ converges (p-test, $p=2>1$), by comparison, the original integral converges."
  },
  {
    "id": "fc-10-new-7",
    "chapter": 10,
    "topic": "Limit Comparison Test",
    "front": "Use the Limit Comparison Test for $\\displaystyle\\int_1^{\\infty} \\frac{1}{\\sqrt{x^3+1}} \\,dx$.",
    "back": "Compare with $g(x) = x^{-3/2}$. $\\lim_{x\\to\\infty} \\frac{1/\\sqrt{x^3+1}}{x^{-3/2}} = \\lim_{x\\to\\infty} \\frac{x^{3/2}}{\\sqrt{x^3+1}} = 1 > 0$. Since $\\int_1^{\\infty} x^{-3/2} dx$ converges ($p=3/2>1$), the original converges."
  },
  {
    "id": "fc-10-new-8",
    "chapter": 10,
    "topic": "Gaussian Integral",
    "front": "State the value of the Gaussian integral $\\displaystyle\\int_{-\\infty}^{\\infty} e^{-x^2} \\,dx$.",
    "back": "$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$. This is proved by computing the square of the integral using polar coordinates: $(\\int_{-\\infty}^{\\infty} e^{-x^2} dx)^2 = \\int_0^{\\infty} e^{-r^2} 2\\pi r \\,dr = \\pi$."
  },
  {
    "id": "fc-10-new-9",
    "chapter": 10,
    "topic": "Type I Improper Integrals",
    "front": "Evaluate $\\displaystyle\\int_0^{\\infty} x e^{-x} \\,dx$.",
    "back": "By parts: $[-xe^{-x}]_0^{\\infty} + \\int_0^{\\infty} e^{-x} dx = 0 + [-e^{-x}]_0^{\\infty} = 0 - (-1) = 1$. (This is $\\Gamma(2) = 1! = 1$.)"
  },
  {
    "id": "fc-10-new-10",
    "chapter": 10,
    "topic": "Gamma Function",
    "front": "State the Gamma function $\\Gamma(n)$ for positive integers $n$.",
    "back": "$\\Gamma(n) = \\int_0^{\\infty} x^{n-1} e^{-x} dx = (n-1)!$ for positive integers $n$. Key properties: $\\Gamma(n+1) = n\\Gamma(n)$ and $\\Gamma(1/2) = \\sqrt{\\pi}$."
  },
  {
    "id": "fc-10-new-11",
    "chapter": 10,
    "topic": "Type I Improper Integrals",
    "front": "Does $\\displaystyle\\int_1^{\\infty} \\frac{\\ln x}{x} \\,dx$ converge?",
    "back": "Let $u = \\ln x, du = dx/x$. Integral becomes $\\int_0^{\\infty} u \\,du = [u^2/2]_0^{\\infty} \\to \\infty$. The integral **diverges**."
  },
  {
    "id": "fc-10-new-12",
    "chapter": 10,
    "topic": "Type II Improper Integrals",
    "front": "Evaluate $\\displaystyle\\int_0^{\\pi/2} \\ln(\\sin x) \\,dx$.",
    "back": "This is a famous result: $\\int_0^{\\pi/2} \\ln(\\sin x) dx = -\\frac{\\pi}{2}\\ln 2$."
  },
  {
    "id": "fc-10-new-13",
    "chapter": 10,
    "topic": "Comparison Test",
    "front": "Does $\\displaystyle\\int_0^1 \\frac{dx}{\\sin x}$ converge?",
    "back": "As $x \\to 0^+$, $\\sin x \\approx x$, so $\\frac{1}{\\sin x} \\approx \\frac{1}{x}$. Since $\\int_0^1 \\frac{1}{x} dx$ diverges ($p=1$), by Limit Comparison, $\\int_0^1 \\frac{dx}{\\sin x}$ also **diverges**."
  },
  {
    "id": "fc-10-new-14",
    "chapter": 10,
    "topic": "Type I Improper Integrals",
    "front": "Evaluate $\\displaystyle\\int_0^{\\infty} \\frac{1}{e^x + e^{-x}} \\,dx$.",
    "back": "$\\int_0^{\\infty} \\frac{e^x}{e^{2x}+1} dx$. Let $u = e^x$. $\\int_1^{\\infty} \\frac{du}{u^2+1} = [\\tan^{-1} u]_1^{\\infty} = \\frac{\\pi}{2} - \\frac{\\pi}{4} = \\frac{\\pi}{4}$."
  },
  {
    "id": "fc-10-new-15",
    "chapter": 10,
    "topic": "Type I Improper Integrals",
    "front": "Determine whether $\\displaystyle\\int_2^{\\infty} \\frac{1}{x \\ln x} \\,dx$ converges.",
    "back": "Let $u = \\ln x, du = dx/x$. Integral becomes $\\int_{\\ln 2}^{\\infty} \\frac{du}{u} = [\\ln u]_{\\ln 2}^{\\infty} \\to \\infty$. The integral **diverges**."
  },
  {
    "id": "fc-10-new-16",
    "chapter": 10,
    "topic": "Type I Improper Integrals",
    "front": "Evaluate $\\displaystyle\\int_0^{\\infty} \\frac{x}{(1+x^2)^2} \\,dx$.",
    "back": "Let $u = 1+x^2, du = 2x dx$. $\\frac{1}{2}\\int_1^{\\infty} u^{-2} du = \\frac{1}{2}[-u^{-1}]_1^{\\infty} = \\frac{1}{2}(0 - (-1)) = \\frac{1}{2}$."
  },
  {
    "id": "fc-10-new-17",
    "chapter": 10,
    "topic": "Comparison Test",
    "front": "Show that $\\displaystyle\\int_1^{\\infty} \\frac{e^{-x}}{x} \\,dx$ converges.",
    "back": "$\\frac{e^{-x}}{x} \\le e^{-x}$ for $x \\ge 1$. And $\\int_1^{\\infty} e^{-x} dx = e^{-1}$ converges. By the Comparison Test, the original integral converges."
  },
  {
    "id": "fc-10-new-18",
    "chapter": 10,
    "topic": "Type II Improper Integrals",
    "front": "Evaluate $\\displaystyle\\int_0^1 \\frac{\\ln x}{\\sqrt{x}} \\,dx$.",
    "back": "Integration by parts: $u=\\ln x, dv = x^{-1/2}dx$. $du = dx/x, v = 2x^{1/2}$. $[2\\sqrt{x}\\ln x]_0^1 - \\int_0^1 2x^{-1/2} dx$. Boundary term: $0$. Second term: $[-4\\sqrt{x}]_0^1 = -4$. Total: $-4$."
  },
  {
    "id": "fc-10-new-19",
    "chapter": 10,
    "topic": "Type I Improper Integrals",
    "front": "Evaluate $\\displaystyle\\int_1^{\\infty} \\frac{\\arctan x}{x^2} \\,dx$.",
    "back": "$u = \\arctan x, dv = x^{-2} dx$. $v = -1/x, du = dx/(1+x^2)$. $[-\\frac{\\arctan x}{x}]_1^{\\infty} + \\int_1^{\\infty} \\frac{dx}{x(1+x^2)}$. First term: $0 - (-\\pi/4) = \\pi/4$. Second: partial fractions: $\\frac{1}{2}\\ln(\\frac{x^2}{1+x^2})$, evaluated = $\\frac{1}{2}\\ln\\frac{1}{2} = -\\frac{\\ln 2}{2}$. Total: $\\pi/4 - \\frac{\\ln 2}{2}$."
  },
  {
    "id": "fc-10-new-20",
    "chapter": 10,
    "topic": "Cauchy Principal Value",
    "front": "Why does $\\displaystyle\\int_{-1}^1 \\frac{1}{x} \\,dx$ diverge despite the integrand being odd?",
    "back": "The integral must be split at the singularity $x=0$: $\\int_{-1}^0 + \\int_0^1 = \\lim_{a\\to 0^-} \\ln|a| + \\lim_{b\\to 0^+} (-\\ln|b|)$. Each limit is $-\\infty$ or $+\\infty$ independently, so the integral diverges. The Cauchy Principal Value is $0$, but that is distinct from convergence."
  },
  {
    "id": "fc-10-new-21",
    "chapter": 10,
    "topic": "Type I Improper Integrals",
    "front": "Does $\\displaystyle\\int_1^{\\infty} \\frac{\\sin x}{x} \\,dx$ converge?",
    "back": "Yes, but only **conditionally**. It converges by Dirichlet's test (or integration by parts), since $|\\sin x|$ is bounded and $1/x \\to 0$ monotonically. However, $\\int_1^{\\infty} \\frac{|\\sin x|}{x} dx$ diverges, so it is not absolutely convergent."
  },
  {
    "id": "fc-10-new-22",
    "chapter": 10,
    "topic": "Type I Improper Integrals",
    "front": "Evaluate $\\displaystyle\\int_0^{\\infty} x^n e^{-x} \\,dx$.",
    "back": "This is the Gamma function: $\\Gamma(n+1) = n!$ for $n \\ge 0$ integer. The reduction formula is $\\int_0^{\\infty} x^n e^{-x} dx = n \\int_0^{\\infty} x^{n-1} e^{-x} dx$."
  },
  {
    "id": "fc-10-new-23",
    "chapter": 10,
    "topic": "Type I Improper Integrals",
    "front": "Find $\\displaystyle\\int_0^{\\infty} e^{-ax} \\,dx$ for $a > 0$.",
    "back": "$\\lim_{t\\to\\infty} [-\\frac{1}{a} e^{-ax}]_0^t = 0 - (-\\frac{1}{a}) = \\frac{1}{a}$."
  },
  {
    "id": "fc-10-new-24",
    "chapter": 10,
    "topic": "Comparison Test",
    "front": "Use the comparison test to determine if $\\displaystyle\\int_0^{\\infty} \\frac{x}{x^3+1} \\,dx$ converges.",
    "back": "Split at 1. For $[0,1]$: $\\frac{x}{x^3+1} \\le x \\le 1$, finite integral. For $[1,\\infty)$: $\\frac{x}{x^3+1} \\le \\frac{x}{x^3} = x^{-2}$ and $\\int_1^{\\infty} x^{-2} dx$ converges. So the full integral converges."
  },
  {
    "id": "fc-10-new-25",
    "chapter": 10,
    "topic": "Type II Improper Integrals",
    "front": "Determine whether $\\displaystyle\\int_0^1 \\frac{1}{x^{2/3}(1-x)^{1/3}} \\,dx$ converges.",
    "back": "Two singularities at $x=0$ and $x=1$. At $x=0$: integrand $\\sim x^{-2/3}$, which is integrable ($p = 2/3 < 1$). At $x=1$: integrand $\\sim (1-x)^{-1/3}$, integrable ($p = 1/3 < 1$). The integral converges; its value is the Beta function $B(1/3, 2/3) = \\frac{\\pi}{\\sin(\\pi/3)}$."
  },
  {
    "id": "fc-41",
    "chapter": 11,
    "topic": "Power Series",
    "front": "Find the exact sum of $\\displaystyle\\sum_{n=1}^\\infty \\frac{n^2}{2^n}$",
    "back": "Let $S(x) = \\sum x^n = \\frac{1}{1-x}$. Then $xS'(x) = \\sum nx^n$ and $x(xS'(x))' = \\sum n^2 x^n$. Take derivatives to get $\\frac{x+x^2}{(1-x)^3}$. Evaluate at $x = 1/2$. Sum is $6$."
  },
  {
    "id": "fc-42",
    "chapter": 11,
    "topic": "Interval of Convergence",
    "front": "Determine the interval of convergence for $\\displaystyle\\sum_{n=1}^\\infty \\frac{(x-3)^n}{n \\cdot 4^n}$",
    "back": "Ratio test yields radius $R = 4$. Test endpoints: at $x=7$ the series is $\\sum \\frac{1}{n}$ (harmonic, diverges). At $x=-1$ it is $\\sum \\frac{(-1)^n}{n}$ (converges). Interval: $[-1, 7)$."
  },
  {
    "id": "fc-43",
    "chapter": 11,
    "topic": "Limit of a Sequence",
    "front": "Evaluate $\\displaystyle\\lim_{n \\to \\infty} \\sum_{i=1}^n \\frac{1}{n+i}$",
    "back": "Express as a Riemann sum: $\\frac{1}{n} \\sum_{i=1}^n \\frac{1}{1 + i/n}$. As $n \\to \\infty$, this becomes the integral $\\int_0^1 \\frac{1}{1+x} dx = \\left[\\ln|1+x|\\right]_0^1 = \\ln 2$."
  },
  {
    "id": "fc-44",
    "chapter": 11,
    "topic": "Taylor Series",
    "front": "Find the Maclaurin series for $f(x) = x^2 e^{-x^3}$.",
    "back": "Substitute $-x^3$ into the series for $e^z$: $e^{-x^3} = \\sum_{n=0}^\\infty \\frac{(-x^3)^n}{n!} = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{3n}}{n!}$. Multiply by $x^2$ to get $\\sum_{n=0}^\\infty \\frac{(-1)^n x^{3n+2}}{n!}$."
  },
  {
    "id": "fc-45",
    "chapter": 11,
    "topic": "Alternating Series",
    "front": "Find the sum of the alternating harmonic series $\\displaystyle\\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n}$",
    "back": "The Maclaurin series for $\\ln(1+x)$ is $\\sum_{n=1}^\\infty \\frac{(-1)^{n-1} x^n}{n}$. By Abel's Theorem, evaluating at $x=1$ gives the sum as $\\ln(2)$."
  },
  {
    "id": "fc-46",
    "chapter": 11,
    "topic": "Radius of Convergence",
    "front": "Find the radius of convergence for $\\displaystyle\\sum_{n=0}^\\infty n! x^n$",
    "back": "Use Ratio Test: $\\lim_{n\\to\\infty} \\left| \\frac{(n+1)! x^{n+1}}{n! x^n} \\right| = \\lim_{n\\to\\infty} (n+1)|x|$. For $x \\neq 0$, limit is $\\infty$. Series converges only at $x=0$, so $R=0$."
  },
  {
    "id": "fc-47",
    "chapter": 11,
    "topic": "Taylor Series",
    "front": "Find the Taylor series for $f(x) = \\ln x$ centered at $a = 2$.",
    "back": "$f^{(n)}(x) = \\frac{(-1)^{n-1} (n-1)!}{x^n}$. So $f^{(n)}(2) = \\frac{(-1)^{n-1} (n-1)!}{2^n}$. Series is $\\ln 2 + \\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n 2^n} (x-2)^n$."
  },
  {
    "id": "fc-48",
    "chapter": 11,
    "topic": "Alternating Series Estimation",
    "front": "How many terms of $\\displaystyle\\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n^2}$ are needed to approximate the sum within $0.01$?",
    "back": "By Alternating Series Estimation Theorem, $|R_N| \\le b_{N+1} = \\frac{1}{(N+1)^2}$. We need $\\frac{1}{(N+1)^2} \\le 0.01 \\implies (N+1)^2 \\ge 100 \\implies N \\ge 9$. So $9$ terms."
  },
  {
    "id": "fc-49",
    "chapter": 11,
    "topic": "Ratio Test",
    "front": "Determine if $\\displaystyle\\sum_{n=1}^\\infty \\frac{(n!)^2}{(2n)!}$ converges.",
    "back": "Ratio test: $L = \\lim_{n\\to\\infty} \\frac{((n+1)!)^2}{(2n+2)!} \\cdot \\frac{(2n)!}{(n!)^2} = \\lim_{n\\to\\infty} \\frac{(n+1)^2}{(2n+2)(2n+1)} = \\frac{1}{4} < 1$. Series converges."
  },
  {
    "id": "fc-50",
    "chapter": 11,
    "topic": "Series for Limits",
    "front": "Evaluate $\\displaystyle\\lim_{x\\to 0} \\frac{\\sin x - x}{x^3}$ using series.",
    "back": "$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots$. So $\\sin x - x = -\\frac{x^3}{6} + \\frac{x^5}{120} - \\dots$. Divide by $x^3$: $-\\frac{1}{6} + \\frac{x^2}{120} - \\dots$. As $x \\to 0$, limit is $-1/6$."
  },
  {
    "id": "fc-11-new-1",
    "chapter": 11,
    "topic": "Sequences",
    "front": "Determine whether the sequence $a_n = \\frac{(-1)^n n}{n+1}$ converges.",
    "back": "$|a_n| = \\frac{n}{n+1} \\to 1$, but the sign alternates, so $a_n$ oscillates between values approaching $+1$ and $-1$. The sequence **diverges**."
  },
  {
    "id": "fc-11-new-2",
    "chapter": 11,
    "topic": "Series",
    "front": "Determine whether $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)}$ converges and find its sum.",
    "back": "Partial fractions: $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$ (telescoping). $S_N = 1 - \\frac{1}{N+1} \\to 1$. Sum is $1$."
  },
  {
    "id": "fc-11-new-3",
    "chapter": 11,
    "topic": "Geometric Series",
    "front": "Find the sum of $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{(-1)^n 3}{4^n}$.",
    "back": "Geometric series with $a = 3, r = -1/4$. Sum $= \\frac{a}{1-r} = \\frac{3}{1+1/4} = \\frac{3}{5/4} = \\frac{12}{5}$."
  },
  {
    "id": "fc-11-new-4",
    "chapter": 11,
    "topic": "Integral Test",
    "front": "Use the Integral Test to determine whether $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n^2+1}$ converges.",
    "back": "$f(x) = 1/(x^2+1)$ is positive, continuous, and decreasing. $\\int_1^{\\infty} \\frac{dx}{x^2+1} = [\\tan^{-1}x]_1^{\\infty} = \\pi/2 - \\pi/4 = \\pi/4 < \\infty$. The series **converges**."
  },
  {
    "id": "fc-11-new-5",
    "chapter": 11,
    "topic": "Ratio Test",
    "front": "Apply the Ratio Test to $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n!}{n^n}$.",
    "back": "$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!}{(n+1)^{n+1}} \\cdot \\frac{n^n}{n!} = \\frac{(n+1)n^n}{(n+1)^{n+1}} = \\left(\\frac{n}{n+1}\\right)^n = \\frac{1}{(1+1/n)^n} \\to e^{-1} < 1$. The series **converges**."
  },
  {
    "id": "fc-11-new-6",
    "chapter": 11,
    "topic": "Root Test",
    "front": "Apply the Root Test to $\\displaystyle\\sum_{n=1}^{\\infty} \\left(\\frac{n}{2n+1}\\right)^n$.",
    "back": "$\\sqrt[n]{a_n} = \\frac{n}{2n+1} \\to \\frac{1}{2} < 1$. The series **converges** by the Root Test."
  },
  {
    "id": "fc-11-new-7",
    "chapter": 11,
    "topic": "Alternating Series Test",
    "front": "Test $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{\\sqrt{n}}$ for convergence.",
    "back": "Let $b_n = 1/\\sqrt{n}$. (1) $b_n$ is decreasing: $b_{n+1} < b_n$. (2) $\\lim_{n\\to\\infty} b_n = 0$. By the Alternating Series Test, the series **converges** (conditionally)."
  },
  {
    "id": "fc-11-new-8",
    "chapter": 11,
    "topic": "Comparison Test",
    "front": "Apply the Comparison Test to $\\displaystyle\\sum_{n=2}^{\\infty} \\frac{1}{n^2 - n}$.",
    "back": "For $n \\ge 2$: $n^2 - n = n(n-1) < n^2$, so $\\frac{1}{n^2-n} > \\frac{1}{n^2}$. But also $\\frac{1}{n^2-n} \\le \\frac{1}{n^2/2} = \\frac{2}{n^2}$ for large $n$. By comparison with $\\sum 2/n^2$ (converges), the series **converges**."
  },
  {
    "id": "fc-11-new-9",
    "chapter": 11,
    "topic": "Power Series",
    "front": "Find the radius of convergence of $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{(x-3)^n}{n \\cdot 4^n}$ (for $n \\ge 1$).",
    "back": "By Ratio Test: $|\\frac{a_{n+1}}{a_n}| = |x-3| \\cdot \\frac{n}{4(n+1)} \\to \\frac{|x-3|}{4}$. Converges when $|x-3|/4 < 1$, i.e. $|x-3| < 4$. Radius $R = 4$."
  },
  {
    "id": "fc-11-new-10",
    "chapter": 11,
    "topic": "Taylor Series",
    "front": "Write the Taylor series for $\\cos x$ centered at $0$.",
    "back": "$\\cos x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n}{(2n)!} x^{2n} = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\cdots$, valid for all $x \\in \\mathbb{R}$."
  },
  {
    "id": "fc-11-new-11",
    "chapter": 11,
    "topic": "Taylor Series",
    "front": "Write the Maclaurin series for $\\frac{1}{1-x}$ and its radius of convergence.",
    "back": "$\\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n = 1 + x + x^2 + x^3 + \\cdots$, valid for $|x| < 1$. Radius of convergence $R = 1$."
  },
  {
    "id": "fc-11-new-12",
    "chapter": 11,
    "topic": "Taylor Series",
    "front": "Write the Maclaurin series for $\\ln(1+x)$.",
    "back": "$\\ln(1+x) = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n} x^n = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots$, valid for $-1 < x \\le 1$."
  },
  {
    "id": "fc-11-new-13",
    "chapter": 11,
    "topic": "Power Series",
    "front": "Use power series to approximate $\\displaystyle\\int_0^{0.5} e^{-x^2} \\,dx$ to within $10^{-3}$.",
    "back": "$e^{-x^2} = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{n!}$. Integrate term by term: $\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{n!(2n+1)}$ evaluated from $0$ to $0.5$. Series converges by AST; keep terms until $|a_k| < 10^{-3}$."
  },
  {
    "id": "fc-11-new-14",
    "chapter": 11,
    "topic": "Sequences",
    "front": "Determine whether $a_n = \\frac{n^{100}}{e^n}$ converges.",
    "back": "For any polynomial vs. exponential, exponential dominates. $\\lim_{n\\to\\infty} \\frac{n^{100}}{e^n} = 0$ (apply L'Hopital's rule 100 times or use the Squeeze Theorem with $e^n = \\sum x^n/n! \\ge n^{101}/101!$). Converges to $0$."
  },
  {
    "id": "fc-11-new-15",
    "chapter": 11,
    "topic": "Convergence Tests",
    "front": "State the Limit Comparison Test for series.",
    "back": "Let $a_n, b_n > 0$. Suppose $\\lim_{n\\to\\infty} \\frac{a_n}{b_n} = L$ where $0 < L < \\infty$. Then $\\sum a_n$ and $\\sum b_n$ either both converge or both diverge."
  },
  {
    "id": "fc-11-new-16",
    "chapter": 11,
    "topic": "Binomial Series",
    "front": "Write the first four terms of the Binomial Series $(1+x)^k$.",
    "back": "$(1+x)^k = \\sum_{n=0}^{\\infty} \\binom{k}{n} x^n = 1 + kx + \\frac{k(k-1)}{2!}x^2 + \\frac{k(k-1)(k-2)}{3!}x^3 + \\cdots$, valid for $|x| < 1$."
  },
  {
    "id": "fc-11-new-17",
    "chapter": 11,
    "topic": "Taylor Series",
    "front": "Find the Maclaurin series for $f(x) = xe^{x^2}$.",
    "back": "$e^u = \\sum_{n=0}^{\\infty} \\frac{u^n}{n!}$. With $u = x^2$: $e^{x^2} = \\sum_{n=0}^{\\infty} \\frac{x^{2n}}{n!}$. Multiply by $x$: $xe^{x^2} = \\sum_{n=0}^{\\infty} \\frac{x^{2n+1}}{n!} = x + x^3 + \\frac{x^5}{2!} + \\frac{x^7}{3!} + \\cdots$."
  },
  {
    "id": "fc-11-new-18",
    "chapter": 11,
    "topic": "Power Series Differentiation",
    "front": "Find a power series for $\\frac{1}{(1-x)^2}$ by differentiating the geometric series.",
    "back": "$\\frac{d}{dx}\\frac{1}{1-x} = \\frac{1}{(1-x)^2} = \\frac{d}{dx}\\sum_{n=0}^{\\infty} x^n = \\sum_{n=1}^{\\infty} nx^{n-1} = \\sum_{n=0}^{\\infty} (n+1)x^n$ for $|x| < 1$."
  },
  {
    "id": "fc-11-new-19",
    "chapter": 11,
    "topic": "Convergence Tests",
    "front": "Apply the Ratio Test to $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$.",
    "back": "$|r| = \\lim_{n\\to\\infty} \\frac{|x|^{n+1}}{(n+1)!} \\cdot \\frac{n!}{|x|^n} = \\lim_{n\\to\\infty} \\frac{|x|}{n+1} = 0 < 1$ for all $x$. The series converges for all $x \\in \\mathbb{R}$, with $R = \\infty$."
  },
  {
    "id": "fc-11-new-20",
    "chapter": 11,
    "topic": "Series",
    "front": "Find the sum of the telescoping series $\\displaystyle\\sum_{n=2}^{\\infty} \\frac{1}{n^2-1}$.",
    "back": "Partial fractions: $\\frac{1}{n^2-1} = \\frac{1}{2}\\left(\\frac{1}{n-1} - \\frac{1}{n+1}\\right)$. This telescopes. $S = \\frac{1}{2}(1 + \\frac{1}{2}) = \\frac{3}{4}$."
  },
  {
    "id": "fc-11-new-21",
    "chapter": 11,
    "topic": "Absolute Convergence",
    "front": "Distinguish between absolute and conditional convergence.",
    "back": "A series $\\sum a_n$ **converges absolutely** if $\\sum |a_n|$ converges. It **converges conditionally** if $\\sum a_n$ converges but $\\sum |a_n|$ diverges. Example: $\\sum \\frac{(-1)^n}{n}$ converges conditionally, since $\\sum 1/n$ diverges."
  },
  {
    "id": "fc-11-new-22",
    "chapter": 11,
    "topic": "Taylor's Remainder",
    "front": "State Taylor's Inequality (the Lagrange Remainder) for $|R_n(x)|$.",
    "back": "If $|f^{(n+1)}(x)| \\le M$ on $[a-d, a+d]$, then $|R_n(x)| \\le \\frac{M}{(n+1)!}|x-a|^{n+1}$ for $|x-a| \\le d$. This provides an error bound for Taylor polynomial approximations."
  },
  {
    "id": "fc-11-new-23",
    "chapter": 11,
    "topic": "Sequences",
    "front": "Prove that $\\displaystyle\\lim_{n\\to\\infty} \\frac{n^2}{2^n} = 0$ using L'Hopital's Rule.",
    "back": "Treat as $\\lim_{x\\to\\infty} x^2/2^x$. Apply L'Hopital twice: $\\frac{x^2}{2^x} \\to \\frac{2x}{2^x \\ln 2} \\to \\frac{2}{2^x (\\ln 2)^2} \\to 0$."
  },
  {
    "id": "fc-11-new-24",
    "chapter": 11,
    "topic": "Power Series",
    "front": "Find the interval of convergence of $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(-1)^n x^n}{n}$.",
    "back": "Ratio test gives $R = 1$. Check endpoints: At $x=1$: $\\sum \\frac{(-1)^n}{n}$ converges (AST). At $x=-1$: $\\sum \\frac{(-1)^{2n}}{n} = \\sum 1/n$ diverges. IoC: $(-1, 1]$."
  },
  {
    "id": "fc-11-new-25",
    "chapter": 11,
    "topic": "Taylor Series",
    "front": "Use the Taylor series for $e^x$ to compute $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{3^n}{n!}$.",
    "back": "The Taylor series is $e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$. Setting $x = 3$ gives $e^3 = \\sum_{n=0}^{\\infty} \\frac{3^n}{n!}$. The sum equals $e^3$."
  },
  {
    "id": "fc-51",
    "chapter": 12,
    "topic": "Linear ODEs",
    "front": "Solve the initial value problem $y' + y \\tan x = \\sec x$, where $y(0) = 1$.",
    "back": "Integrating factor $\\mu(x) = \\exp(\\int \\tan x dx) = \\sec x$. The equation becomes $(\\sec x \\cdot y)' = \\sec^2 x$. Integrating gives $y \\sec x = \\tan x + C$. At $x=0, y=1 \\implies C=1$. Final answer: $y = \\sin x + \\cos x$."
  },
  {
    "id": "fc-52",
    "chapter": 12,
    "topic": "Bernoulli Equations",
    "front": "Find the general solution to $y' + \\frac{1}{x}y = x y^2$.",
    "back": "This is a Bernoulli equation with $n=2$. Let $v = y^{1-2} = y^{-1}$. $v' = -y^{-2}y'$. Equation becomes $v' - \\frac{1}{x}v = -x$. Integrating factor $\\mu(x) = \\frac{1}{x}$. $(v/x)' = -1 \\implies v/x = -x + C \\implies v = -x^2 + Cx \\implies y = \\frac{1}{Cx - x^2}$."
  },
  {
    "id": "fc-53",
    "chapter": 12,
    "topic": "Separable ODEs",
    "front": "Solve the differential equation $\\dfrac{dy}{dx} = \\frac{x^2 + 1}{y^2 - 1}$.",
    "back": "Separate variables: $(y^2 - 1) dy = (x^2 + 1) dx$. Integrate both sides: $\\frac{y^3}{3} - y = \\frac{x^3}{3} + x + C$, which defines the solution implicitly."
  },
  {
    "id": "fc-54",
    "chapter": 12,
    "topic": "Orthogonal Trajectories",
    "front": "Find the orthogonal trajectories of the family of curves $y = cx^2$.",
    "back": "Differentiate: $y' = 2cx = 2(y/x^2)x = 2y/x$. Orthogonal trajectories satisfy $y' = -\\frac{x}{2y}$. Separate variables: $2y dy = -x dx \\implies y^2 = -\\frac{x^2}{2} + C \\implies x^2 + 2y^2 = k$ (a family of ellipses)."
  },
  {
    "id": "fc-55",
    "chapter": 12,
    "topic": "Second-Order Linear ODEs",
    "front": "Solve the linear second-order ODE $y'' - 3y' + 2y = 0$.",
    "back": "Characteristic equation $r^2 - 3r + 2 = 0 \\implies (r-1)(r-2)=0 \\implies r=1,2$. General solution is $y(x) = C_1 e^x + C_2 e^{2x}$."
  },
  {
    "id": "fc-56",
    "chapter": 12,
    "topic": "Mixture Problems",
    "front": "A 100L tank has 10kg salt. Pure water flows in at 5L/min, well-mixed brine flows out at 5L/min. Find salt $S(t)$.",
    "back": "$\\frac{dS}{dt} = \\text{rate in} - \\text{rate out} = 0 - \\frac{S}{100} \\cdot 5 = -0.05S$. So $S(t) = S_0 e^{-0.05t} = 10e^{-t/20}$ kg."
  },
  {
    "id": "fc-57",
    "chapter": 12,
    "topic": "Logistic Equation",
    "front": "Solve the logistic growth equation $P' = kP(1 - \\frac{P}{K})$.",
    "back": "Separate variables: $\\int \\frac{K}{P(K-P)} dP = \\int k dt$. Partial fractions: $\\int (\\frac{1}{P} + \\frac{1}{K-P}) dP = \\ln|P| - \\ln|K-P| = kt + C$. Solve for $P$: $P(t) = \\frac{K}{1 + A e^{-kt}}$."
  },
  {
    "id": "fc-58",
    "chapter": 12,
    "topic": "Exact Equations",
    "front": "Is the equation $(2xy + y^2)dx + (x^2 + 2xy)dy = 0$ exact? If so, solve it.",
    "back": "$M_y = 2x + 2y$, $N_x = 2x + 2y$. Exact! $\\int (2xy+y^2) dx = x^2y + xy^2 + g(y)$. $N = x^2 + 2xy + g'(y) \\implies g'(y)=0$. Solution: $x^2y + xy^2 = C$."
  },
  {
    "id": "fc-59",
    "chapter": 12,
    "topic": "Homogeneous ODEs",
    "front": "Solve the homogeneous differential equation $y' = \\frac{x^2 + y^2}{xy}$.",
    "back": "Let $y = vx, y' = v'x + v$. $v'x + v = \\frac{x^2 + v^2x^2}{vx^2} = \\frac{1+v^2}{v} = \\frac{1}{v} + v$. So $v'x = \\frac{1}{v} \\implies v dv = \\frac{dx}{x} \\implies \\frac{v^2}{2} = \\ln|x| + C \\implies y^2 = 2x^2(\\ln|x| + C)$."
  },
  {
    "id": "fc-60",
    "chapter": 12,
    "topic": "Linear ODEs",
    "front": "Solve the linear equation $xy' - 2y = x^3 \\cos x$.",
    "back": "Divide by $x$: $y' - \\frac{2}{x}y = x^2 \\cos x$. Integrating factor $\\mu(x) = e^{\\int -2/x dx} = x^{-2}$. Multiply: $(x^{-2} y)' = \\cos x$. Integrate: $x^{-2} y = \\sin x + C \\implies y = x^2 \\sin x + Cx^2$."
  },
  {
    "id": "fc-12-new-1",
    "chapter": 12,
    "topic": "Separable ODEs",
    "front": "Solve $\\frac{dy}{dx} = \\frac{x^2}{y^2}$ with initial condition $y(0) = 1$.",
    "back": "Separate: $y^2 dy = x^2 dx$. Integrate: $\\frac{y^3}{3} = \\frac{x^3}{3} + C$. With $y(0)=1$: $C = 1/3$. So $y^3 = x^3 + 1 \\implies y = (x^3+1)^{1/3}$."
  },
  {
    "id": "fc-12-new-2",
    "chapter": 12,
    "topic": "Linear ODEs",
    "front": "Solve $y' + 2y = 4x$ using an integrating factor.",
    "back": "Integrating factor $\\mu = e^{\\int 2 dx} = e^{2x}$. $(e^{2x}y)' = 4xe^{2x}$. Integrate by parts: $e^{2x}y = 4(\\frac{xe^{2x}}{2} - \\frac{e^{2x}}{4}) + C = 2xe^{2x} - e^{2x} + C$. So $y = 2x - 1 + Ce^{-2x}$."
  },
  {
    "id": "fc-12-new-3",
    "chapter": 12,
    "topic": "Homogeneous ODEs",
    "front": "Solve $y' = \\frac{x+y}{x}$.",
    "back": "Rewrite as $y' = 1 + y/x$. Let $v = y/x$, $y' = v + xv'$. $xv' + v = 1 + v \\implies xv' = 1 \\implies dv = dx/x \\implies v = \\ln|x| + C$. $y = x(\\ln|x| + C) = x\\ln|x| + Cx$."
  },
  {
    "id": "fc-12-new-4",
    "chapter": 12,
    "topic": "Exact ODEs",
    "front": "Solve $(3x^2 y + 2xy^2)dx + (x^3 + 2x^2y)dy = 0$.",
    "back": "$M = 3x^2y + 2xy^2, N = x^3 + 2x^2y$. $M_y = 3x^2 + 4xy$, $N_x = 3x^2 + 4xy$ ✓ Exact. $F = \\int M \\,dx = x^3 y + x^2 y^2 + g(y)$. $F_y = x^3 + 2x^2 y + g'(y) = N \\implies g'(y) = 0$. Solution: $x^3 y + x^2 y^2 = C$."
  },
  {
    "id": "fc-12-new-5",
    "chapter": 12,
    "topic": "Bernoulli Equations",
    "front": "Solve the Bernoulli equation $y' - 2y = xy^3$.",
    "back": "Divide by $y^3$: $y^{-3}y' - 2y^{-2} = x$. Let $v = y^{-2}$, $v' = -2y^{-3}y'$. So $-v'/2 - 2v = x \\implies v' + 4v = -2x$. Integrating factor $e^{4x}$. $(e^{4x}v)' = -2xe^{4x}$. Solve by parts: $v = -x/2 + 1/8 + Ce^{-4x}$. $y^{-2} = -x/2 + 1/8 + Ce^{-4x}$."
  },
  {
    "id": "fc-12-new-6",
    "chapter": 12,
    "topic": "Separable ODEs",
    "front": "Solve the logistic equation $y' = ry(1 - y/K)$ using separation of variables.",
    "back": "Separate: $\\frac{dy}{y(1-y/K)} = r \\,dt$. Partial fractions: $(\\frac{1}{y} + \\frac{1/K}{1-y/K}) dy = r \\,dt$. Integrate: $\\ln y - \\ln|1-y/K| = rt + C$. Solving: $y = \\frac{K}{1 + Ae^{-rt}}$ where $A = (K-y_0)/y_0$."
  },
  {
    "id": "fc-12-new-7",
    "chapter": 12,
    "topic": "Exact ODEs",
    "front": "Find the integrating factor for $(y)dx + (2x - ye^y)dy = 0$ which is not exact.",
    "back": "$M = y, N = 2x - ye^y$. $M_y = 1, N_x = 2$. Not exact. $\\frac{M_y - N_x}{N} = \\frac{1-2}{2x-ye^y}$ depends on both. $\\frac{N_x - M_y}{M} = \\frac{2-1}{y} = 1/y$. Integrating factor $\\mu = e^{\\int dy/y} = y$."
  },
  {
    "id": "fc-12-new-8",
    "chapter": 12,
    "topic": "Linear ODEs",
    "front": "Solve $xy' - 3y = x^4 \\sin x$.",
    "back": "Divide by $x$: $y' - \\frac{3}{x}y = x^3 \\sin x$. IF: $\\mu = e^{-3\\ln x} = x^{-3}$. $(x^{-3}y)' = \\sin x$. Integrate: $x^{-3}y = -\\cos x + C \\implies y = x^3(C - \\cos x)$."
  },
  {
    "id": "fc-12-new-9",
    "chapter": 12,
    "topic": "Homogeneous ODEs",
    "front": "Solve $y' = \\frac{y^2 + xy}{x^2}$.",
    "back": "Let $v = y/x$. $y' = v + xv' = v^2 + v$. $xv' = v^2 \\implies \\frac{dv}{v^2} = \\frac{dx}{x} \\implies -\\frac{1}{v} = \\ln|x| + C \\implies -\\frac{x}{y} = \\ln|x| + C \\implies y = \\frac{-x}{\\ln|x| + C}$."
  },
  {
    "id": "fc-12-new-10",
    "chapter": 12,
    "topic": "Separable ODEs",
    "front": "Find the orthogonal trajectories of the family of parabolas $y = cx^2$.",
    "back": "Differentiating: $y' = 2cx = 2(y/x^2)x = 2y/x$. Orthogonal trajectories satisfy $y' = -x/(2y)$. Separate: $2y \\,dy = -x \\,dx \\implies y^2 = -x^2/2 + C \\implies \\frac{x^2}{2} + y^2 = C$ (family of ellipses)."
  },
  {
    "id": "fc-12-new-11",
    "chapter": 12,
    "topic": "Linear ODEs",
    "front": "Solve the initial value problem $y' + y = \\sin x$, $y(0) = 1$.",
    "back": "IF: $e^x$. $(e^x y)' = e^x \\sin x$. Integrate: $e^x y = \\frac{e^x}{2}(\\sin x - \\cos x) + C$. $y = \\frac{1}{2}(\\sin x - \\cos x) + Ce^{-x}$. At $x=0$: $1 = -1/2 + C \\implies C = 3/2$. $y = \\frac{1}{2}(\\sin x - \\cos x) + \\frac{3}{2}e^{-x}$."
  },
  {
    "id": "fc-12-new-12",
    "chapter": 12,
    "topic": "Separable ODEs",
    "front": "Solve $\\frac{dy}{dx} = e^{x-y}$ with $y(0) = 0$.",
    "back": "$e^y dy = e^x dx$. Integrate: $e^y = e^x + C$. At $y(0)=0$: $1 = 1 + C \\implies C = 0$. So $e^y = e^x \\implies y = x$."
  },
  {
    "id": "fc-12-new-13",
    "chapter": 12,
    "topic": "Exact ODEs",
    "front": "Is $(e^x + ye^y)dx + xe^y dy = 0$ exact? If so, find the solution.",
    "back": "$M = e^x + ye^y, N = xe^y$. $M_y = e^y + ye^y = e^y(1+y), N_x = e^y$. NOT equal, so NOT exact as written. (Requires an integrating factor or further analysis.)"
  },
  {
    "id": "fc-12-new-14",
    "chapter": 12,
    "topic": "Homogeneous ODEs",
    "front": "Solve $\\frac{dy}{dx} = \\frac{x^2-y^2}{2xy}$.",
    "back": "Homogeneous. Let $v = y/x$. $y' = v + xv' = \\frac{1-v^2}{2v}$. $xv' = \\frac{1-v^2}{2v} - v = \\frac{1 - 3v^2}{2v}$. $\\frac{2v}{1-3v^2} dv = \\frac{dx}{x}$. $-\\frac{1}{3}\\ln|1-3v^2| = \\ln|x| + C$. $|1-3v^2|^{-1/3} = Kx$. $x^2 - 3y^2 = \\frac{C}{x}$."
  },
  {
    "id": "fc-12-new-15",
    "chapter": 12,
    "topic": "Separable ODEs",
    "front": "Solve $\\frac{dy}{dx} = (1+y^2)\\tan x$.",
    "back": "$\\frac{dy}{1+y^2} = \\tan x \\,dx$. Integrate: $\\tan^{-1} y = -\\ln|\\cos x| + C = \\ln|\\sec x| + C$. $y = \\tan(\\ln|\\sec x| + C)$."
  },
  {
    "id": "fc-12-new-16",
    "chapter": 12,
    "topic": "Linear ODEs",
    "front": "Find the general solution of $y' - ky = 0$ for constant $k$.",
    "back": "Separable: $dy/y = k \\,dx \\implies \\ln|y| = kx + C \\implies y = Ae^{kx}$. This is exponential growth ($k>0$) or decay ($k<0$)."
  },
  {
    "id": "fc-12-new-17",
    "chapter": 12,
    "topic": "Exact ODEs",
    "front": "Solve $(2xy - 3x^2)dx + (x^2 + 2y)dy = 0$.",
    "back": "$M = 2xy - 3x^2, N = x^2 + 2y$. $M_y = 2x = N_x$ ✓. $F = x^2 y - x^3 + y^2 + g(x)$, $F_x = 2xy - 3x^2 + g'(x) = M \\implies g'(x) = 0$. Solution: $x^2 y - x^3 + y^2 = C$."
  },
  {
    "id": "fc-12-new-18",
    "chapter": 12,
    "topic": "Separable ODEs",
    "front": "A population $P$ satisfies $dP/dt = 0.05P(1 - P/500)$. Find $P(t)$ given $P(0)=100$.",
    "back": "Logistic: $P(t) = \\frac{500}{1 + Ae^{-0.05t}}$. At $t=0$: $100 = 500/(1+A) \\implies A = 4$. So $P(t) = \\frac{500}{1+4e^{-0.05t}}$."
  },
  {
    "id": "fc-12-new-19",
    "chapter": 12,
    "topic": "Linear ODEs",
    "front": "Solve $y' = \\frac{y - x}{y + x}$.",
    "back": "Rewrite: $y' = \\frac{y/x - 1}{y/x + 1}$. Homogeneous. Let $v = y/x$: $v + xv' = \\frac{v-1}{v+1}$. $xv' = \\frac{v-1}{v+1} - v = \\frac{-1-v^2}{v+1}$. $\\frac{v+1}{1+v^2} dv = -dx/x$. Integral: $\\frac{1}{2}\\ln(1+v^2) + \\tan^{-1} v = -\\ln|x| + C$."
  },
  {
    "id": "fc-12-new-20",
    "chapter": 12,
    "topic": "Exact ODEs",
    "front": "What condition must $M$ and $N$ satisfy for $M\\,dx + N\\,dy = 0$ to be exact?",
    "back": "The equation is exact if and only if $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$ in a simply connected domain. Then there exists $F$ with $F_x = M$ and $F_y = N$, and the solution is $F(x,y) = C$."
  },
  {
    "id": "fc-12-new-21",
    "chapter": 12,
    "topic": "Separable ODEs",
    "front": "Solve Newton's law of cooling: $\\frac{dT}{dt} = -k(T - T_s)$ with $T(0) = T_0$.",
    "back": "Let $u = T - T_s$: $du/dt = -ku$. Solve: $u = Ae^{-kt}$. At $t=0$: $A = T_0 - T_s$. Solution: $T(t) = T_s + (T_0 - T_s)e^{-kt}$."
  },
  {
    "id": "fc-12-new-22",
    "chapter": 12,
    "topic": "Bernoulli Equations",
    "front": "Reduce $y' + y/x = y^2 \\ln x$ to a linear ODE.",
    "back": "This is Bernoulli with $n=2$. Divide by $y^2$: $y^{-2}y' + y^{-1}/x = \\ln x$. Let $v = y^{-1}$, $v' = -y^{-2}y'$. $-v' + v/x = \\ln x \\implies v' - v/x = -\\ln x$. This is linear in $v$."
  },
  {
    "id": "fc-12-new-23",
    "chapter": 12,
    "topic": "Separable ODEs",
    "front": "Solve $\\frac{dy}{dx} = \\frac{\\sqrt{1-y^2}}{\\sqrt{1-x^2}}$.",
    "back": "$\\frac{dy}{\\sqrt{1-y^2}} = \\frac{dx}{\\sqrt{1-x^2}}$. Integrate: $\\sin^{-1} y = \\sin^{-1} x + C$."
  },
  {
    "id": "fc-12-new-24",
    "chapter": 12,
    "topic": "Linear ODEs",
    "front": "Solve $y' = \\frac{y}{x} + xe^x$ using variation of parameters concept.",
    "back": "Rewrite: $y' - y/x = xe^x$. IF: $\\mu = e^{-\\int dx/x} = x^{-1} = 1/x$. $(y/x)' = e^x$. Integrate: $y/x = e^x + C \\implies y = xe^x + Cx$."
  },
  {
    "id": "fc-12-new-25",
    "chapter": 12,
    "topic": "Exact ODEs",
    "front": "Solve $(y^2 - x^2)dx + 2xy \\,dy = 0$ (note: check for exactness first).",
    "back": "$M = y^2 - x^2, N = 2xy$. $M_y = 2y = N_x$ ✓ Exact! $F = \\int N \\,dy = xy^2 + g(x)$. $F_x = y^2 + g'(x) = M = y^2 - x^2 \\implies g'(x) = -x^2 \\implies g = -x^3/3$. Solution: $xy^2 - x^3/3 = C$."
  }
];
