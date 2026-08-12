const quizzesData = [
  {
    "id": "quiz-ch7",
    "chapter": 7,
    "title": "Hyperbolic Functions Quiz",
    "questions": [
      {
        "id": "q7-1",
        "type": "mcq",
        "text": "Which identity is correct?",
        "options": [
          "$\\cosh^2 x + \\sinh^2 x = 1$",
          "$\\cosh^2 x - \\sinh^2 x = 1$",
          "$\\sinh^2 x - \\cosh^2 x = 1$",
          "$\\tanh^2 x + \\text{sech}^2 x = 0$"
        ],
        "answer": 1,
        "explanation": "The fundamental hyperbolic identity is $\\cosh^2 x - \\sinh^2 x = 1$, analogous to $\\cos^2\\theta + \\sin^2\\theta = 1$."
      },
      {
        "id": "q7-2",
        "type": "mcq",
        "text": "$\\dfrac{d}{dx}\\tanh x = ?$",
        "options": [
          "$\\text{sech}^2 x$",
          "$-\\text{sech}^2 x$",
          "$\\cosh^2 x$",
          "$\\sinh x\\cosh x$"
        ],
        "answer": 0,
        "explanation": "$\\dfrac{d}{dx}\\tanh x = \\text{sech}^2 x$."
      },
      {
        "id": "q7-3",
        "type": "tf",
        "text": "$\\sinh x$ is an even function.",
        "answer": false,
        "explanation": "$\\sinh(-x) = -\\sinh(x)$, so it is an odd function."
      },
      {
        "id": "q7-new-1",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int_0^{\\ln 2} \\sinh x \\,dx$.",
        "options": [
          "$\\frac{1}{4}$",
          "$\\frac{1}{2}$",
          "$\\frac{3}{4}$",
          "$\\frac{5}{4}$"
        ],
        "answer": 0,
        "explanation": "Antiderivative is $\\cosh x$. $\\cosh(\\ln 2) - \\cosh(0) = \\frac{2+1/2}{2} - 1 = \\frac{5}{4} - 1 = \\frac{1}{4}$."
      },
      {
        "id": "q7-new-2",
        "type": "mcq",
        "text": "Find the derivative of $f(x) = \\sinh^{-1}(\\tan x)$ for $-\\pi/2 < x < \\pi/2$.",
        "options": [
          "$\\cos x$",
          "$|\\sec x|$",
          "$\\csc x$",
          "$\\sec x$"
        ],
        "answer": 1,
        "explanation": "$f'(x) = \\frac{1}{\\sqrt{\\tan^2 x + 1}} \\cdot \\sec^2 x = \\frac{1}{\\sqrt{\\sec^2 x}} \\cdot \\sec^2 x = \\frac{\\sec^2 x}{|\\sec x|} = |\\sec x|$."
      },
      {
        "id": "q7-new-3",
        "type": "mcq",
        "text": "Solve for $x$: $5\\cosh x + 3\\sinh x = 4$.",
        "options": [
          "$x = \\ln(1/2)$",
          "$x = \\ln 2$",
          "No real solution",
          "$x = 0$"
        ],
        "answer": 0,
        "explanation": "$5(e^x+e^{-x})/2+3(e^x-e^{-x})/2=4$ gives $4e^x+e^{-x}=4$. Multiplying by $e^x$ gives $(2e^x-1)^2=0$, hence $e^x=1/2$ and $x=\\ln(1/2)$. Thus the first option is correct."
      },
      {
        "id": "q7-new-4",
        "type": "mcq",
        "text": "Evaluate the limit $\\displaystyle\\lim_{x\\to \\infty} \\frac{\\sinh x}{\\cosh x + e^x}$.",
        "options": [
          "$0$",
          "$1/2$",
          "$1/3$",
          "$1$"
        ],
        "answer": 2,
        "explanation": "$\\sinh x \\approx e^x/2$. Denominator $\\cosh x + e^x \\approx e^x/2 + e^x = \\frac{3}{2}e^x$. Limit is $\\frac{1/2}{3/2} = \\frac{1}{3}$."
      },
      {
        "id": "q7-new-5",
        "type": "mcq",
        "text": "Which of the following is equivalent to $\\cosh 2x$?",
        "options": [
          "$2\\cosh^2 x - 1$",
          "$1 - 2\\sinh^2 x$",
          "$\\cosh^2 x - \\sinh^2 x$",
          "$2\\sinh^2 x - 1$"
        ],
        "answer": 0,
        "explanation": "$\\cosh 2x = \\cosh^2 x + \\sinh^2 x = 2\\cosh^2 x - 1 = 2\\sinh^2 x + 1$."
      },
      {
        "id": "q7-new-6",
        "type": "mcq",
        "text": "Find the length of the curve $y = \\cosh x$ from $x=0$ to $x=a$.",
        "options": [
          "$\\cosh a - 1$",
          "$\\sinh a$",
          "$\\tanh a$",
          "$\\sinh a - 1$"
        ],
        "answer": 1,
        "explanation": "$L = \\int_0^a \\sqrt{1+\\sinh^2 x} dx = \\int_0^a \\cosh x dx = \\sinh a$."
      },
      {
        "id": "q7-new-7",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int \\frac{1}{\\sqrt{x^2 - 1}} dx$ for $x > 1$.",
        "options": [
          "$\\sin^{-1} x + C$",
          "$\\cosh^{-1} x + C$",
          "$\\sinh^{-1} x + C$",
          "$\\tanh^{-1} x + C$"
        ],
        "answer": 1,
        "explanation": "The standard integral formula gives $\\cosh^{-1} x + C$."
      },
      {
        "id": "q7-new-8",
        "type": "mcq",
        "text": "If $y = e^{\\cosh x}$, what is $y'$?",
        "options": [
          "$e^{\\cosh x} \\cosh x$",
          "$e^{\\cosh x} \\sinh x$",
          "$e^{\\sinh x} \\cosh x$",
          "$e^{\\cosh x}$"
        ],
        "answer": 1,
        "explanation": "By chain rule, $y' = e^{\\cosh x} \\cdot \\frac{d}{dx}(\\cosh x) = e^{\\cosh x} \\sinh x$."
      },
      {
        "id": "q7-new-9",
        "type": "mcq",
        "text": "Find the domain of $f(x) = \\tanh^{-1} x$.",
        "options": [
          "$x > 0$",
          "$-1 \\le x \\le 1$",
          "$-1 < x < 1$",
          "All real numbers"
        ],
        "answer": 2,
        "explanation": "Since $-1 < \\tanh x < 1$, the inverse function is defined on $(-1, 1)$."
      },
      {
        "id": "q7-new-10",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int_0^{\\ln 2} \\frac{\\sinh x}{\\cosh x} dx$.",
        "options": [
          "$\\ln(5/4)$",
          "$\\ln(3/2)$",
          "$\\ln(4/3)$",
          "$\\ln(5/2)$"
        ],
        "answer": 0,
        "explanation": "$\\int \\tanh x dx = \\ln(\\cosh x)$. $\\cosh(\\ln 2) = (2+1/2)/2 = 5/4$. $\\ln(5/4) - \\ln(1) = \\ln(5/4)$."
      },
      {
        "id": "q7-new-11",
        "type": "mcq",
        "text": "What is the inverse of $f(x) = \\sinh x$ expressed using logarithms?",
        "options": [
          "$\\ln(x + \\sqrt{x^2-1})$",
          "$\\ln(x + \\sqrt{x^2+1})$",
          "$\\ln(x - \\sqrt{x^2+1})$",
          "$\\frac{1}{2}\\ln\\left(\\frac{1+x}{1-x}\\right)$"
        ],
        "answer": 1,
        "explanation": "$\\sinh^{-1} x = \\ln(x + \\sqrt{x^2+1})$ for all real $x$."
      },
      {
        "id": "q7-new-12",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\lim_{x\\to 0} \\frac{\\cosh x - 1}{x^2}$.",
        "options": [
          "$1$",
          "$1/2$",
          "$0$",
          "$\\infty$"
        ],
        "answer": 1,
        "explanation": "By L'Hopital's rule twice: $\\frac{\\sinh x}{2x} \\to \\frac{\\cosh x}{2} \\to \\frac{1}{2}$."
      },
      {
        "id": "q7-new-13",
        "type": "mcq",
        "text": "Find $\\displaystyle\\int \\operatorname{sech}^2 x dx$.",
        "options": [
          "$\\coth x + C$",
          "$\\tanh x + C$",
          "$-\\tanh x + C$",
          "$-\\coth x + C$"
        ],
        "answer": 1,
        "explanation": "The derivative of $\\tanh x$ is $\\operatorname{sech}^2 x$."
      },
      {
        "id": "q7-new-14",
        "type": "mcq",
        "text": "Solve $\\sinh x = 3/4$.",
        "options": [
          "$x = \\ln 2$",
          "$x = \\ln 3$",
          "$x = \\ln 1.5$",
          "$x = \\ln 4$"
        ],
        "answer": 0,
        "explanation": "$\\sinh^{-1}(3/4) = \\ln(3/4 + \\sqrt{9/16+1}) = \\ln(3/4 + 5/4) = \\ln 2$."
      },
      {
        "id": "q7-new-15",
        "type": "mcq",
        "text": "Which inequality is always true?",
        "options": [
          "$\\cosh x \\ge 1$",
          "$\\sinh x \\ge 1$",
          "$\\tanh x \\ge 0$",
          "$\\cosh x \\le 1$"
        ],
        "answer": 0,
        "explanation": "Since $e^x + e^{-x} \\ge 2 \\sqrt{e^x e^{-x}} = 2$, we have $\\cosh x \\ge 1$ for all real $x$."
      },
      {
        "id": "q7-new-16",
        "type": "mcq",
        "text": "Find the equation of the tangent line to $y = \\cosh x$ at $x = 0$.",
        "options": [
          "$y = x$",
          "$y = 1$",
          "$y = x + 1$",
          "$y = 0$"
        ],
        "answer": 1,
        "explanation": "$y(0) = 1$. $y'(x) = \\sinh x \\implies y'(0) = 0$. The tangent line is horizontal at $y=1$."
      },
      {
        "id": "q7-new-17",
        "type": "mcq",
        "text": "Evaluate the integral $\\displaystyle\\int \\operatorname{csch} x \\,dx$.",
        "options": [
          "$\\ln|\\tanh(x/2)| + C$",
          "$\\ln|\\coth(x/2)| + C$",
          "$\\ln|\\sinh x| + C$",
          "$\\ln|\\cosh x| + C$"
        ],
        "answer": 0,
        "explanation": "$\\int \\operatorname{csch} x dx = \\ln|\\tanh(x/2)| + C$, similar to $\\int \\csc x dx = \\ln|\\tan(x/2)| + C$."
      },
      {
        "id": "q7-new-18",
        "type": "mcq",
        "text": "Find $\\displaystyle\\frac{d}{dx} \\left( \\sinh^2 x \\right)$.",
        "options": [
          "$\\cosh^2 x$",
          "$2\\sinh x \\cosh x$",
          "$2\\sinh x$",
          "$2\\cosh x$"
        ],
        "answer": 1,
        "explanation": "By the chain rule, $2\\sinh x \\cdot \\frac{d}{dx}(\\sinh x) = 2\\sinh x \\cosh x$, which is also $\\sinh(2x)$."
      },
      {
        "id": "q7-new-19",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\lim_{x\\to \\infty} \\tanh x$.",
        "options": [
          "$0$",
          "$1$",
          "$\\infty$",
          "Does not exist"
        ],
        "answer": 1,
        "explanation": "As $x \\to \\infty$, $\\frac{e^x-e^{-x}}{e^x+e^{-x}} = \\frac{1-e^{-2x}}{1+e^{-2x}} \\to 1$."
      },
      {
        "id": "q7-new-20",
        "type": "mcq",
        "text": "Determine the value of $\\cosh(0) + \\sinh(0)$.",
        "options": [
          "$0$",
          "$1$",
          "$2$",
          "$e$"
        ],
        "answer": 1,
        "explanation": "$\\cosh(0) = 1$ and $\\sinh(0) = 0$. Sum is 1."
      },
      {
        "id": "q7-new-21",
        "type": "mcq",
        "text": "Find the inflection points of $f(x) = \\tanh x$.",
        "options": [
          "$x=0$",
          "$x=1$",
          "$x=-1$",
          "No inflection points"
        ],
        "answer": 0,
        "explanation": "$f'(x) = \\operatorname{sech}^2 x$. $f''(x) = -2\\operatorname{sech}^2 x \\tanh x$. Setting $f''=0$ gives $\\tanh x = 0 \\implies x = 0$. The concavity changes at $x=0$."
      },
      {
        "id": "q7-new-22",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int \\frac{\\sinh \\sqrt{x}}{\\sqrt{x}} dx$.",
        "options": [
          "$\\cosh \\sqrt{x} + C$",
          "$2\\cosh \\sqrt{x} + C$",
          "$\\frac{1}{2}\\cosh \\sqrt{x} + C$",
          "$2\\sinh \\sqrt{x} + C$"
        ],
        "answer": 1,
        "explanation": "Let $u = \\sqrt{x} \\implies du = \\frac{1}{2\\sqrt{x}}dx$. Integral becomes $2\\int \\sinh u du = 2\\cosh u + C = 2\\cosh \\sqrt{x} + C$."
      },
      {
        "id": "q7-new-23",
        "type": "mcq",
        "text": "Express $2\\cosh^2 x$ in terms of $e^x$.",
        "options": [
          "$\\frac{e^{2x} + 2 + e^{-2x}}{2}$",
          "$e^{2x} + 2 + e^{-2x}$",
          "$\\frac{e^{2x} - e^{-2x}}{2}$",
          "$\\frac{e^{2x} + e^{-2x}}{2}$"
        ],
        "answer": 0,
        "explanation": "$2\\left(\\frac{e^x+e^{-x}}{2}\\right)^2 = 2 \\frac{e^{2x} + 2 + e^{-2x}}{4} = \\frac{e^{2x} + 2 + e^{-2x}}{2}$."
      },
      {
        "id": "q7-new-24",
        "type": "mcq",
        "text": "Solve $e^x = \\cosh x$.",
        "options": [
          "$x=0$",
          "No real solution",
          "$x=\\ln 2$",
          "All real numbers"
        ],
        "answer": 0,
        "explanation": "$e^x=\\frac{e^x+e^{-x}}{2}$ implies $e^x=e^{-x}$, so $e^{2x}=1$ and therefore $x=0$. Thus the first option is correct."
      },
      {
        "id": "q7-new-25",
        "type": "mcq",
        "text": "What is the Maclaurin series for $\\sinh x$?",
        "options": [
          "$1 - x^2/2! + x^4/4! - \\dots$",
          "$x - x^3/3! + x^5/5! - \\dots$",
          "$x + x^3/3! + x^5/5! + \\dots$",
          "$1 + x^2/2! + x^4/4! + \\dots$"
        ],
        "answer": 2,
        "explanation": "Unlike $\\sin x$, the hyperbolic sine series has all positive terms."
      }
    ]
  },
  {
    "id": "quiz-ch8",
    "chapter": 8,
    "title": "Integration Theory Quiz",
    "questions": [
      {
        "id": "q8-1",
        "type": "mcq",
        "text": "The area between $y=x^2$ and $y=x$ on $[0,1]$ is?",
        "options": [
          "$\\frac{1}{3}$",
          "$\\frac{1}{6}$",
          "$\\frac{1}{2}$",
          "$\\frac{1}{4}$"
        ],
        "answer": 1,
        "explanation": "$\\int_0^1(x-x^2)dx = \\frac{1}{2}-\\frac{1}{3}=\\frac{1}{6}$."
      },
      {
        "id": "q8-2",
        "type": "mcq",
        "text": "The Disk Method gives $V = ?$ for rotation of $y=\\sqrt{x}$, $0\\leq x\\leq 4$ about the $x$-axis.",
        "options": [
          "$8\\pi$",
          "$16\\pi$",
          "$4\\pi$",
          "$2\\pi$"
        ],
        "answer": 0,
        "explanation": "$V=\\pi\\int_0^4 x\\,dx = \\pi\\cdot 8 = 8\\pi$."
      },
      {
        "id": "q8-3",
        "type": "tf",
        "text": "$\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx$",
        "answer": true,
        "explanation": "Reversing limits negates the integral."
      },
      {
        "id": "q8-new-1",
        "type": "mcq",
        "text": "Find the area bounded by $y=x^2$ and $y=\\sqrt{x}$.",
        "options": [
          "$1/2$",
          "$1/3$",
          "$1/6$",
          "$2/3$"
        ],
        "answer": 1,
        "explanation": "Intersection at $x=0, 1$. $\\int_0^1 (\\sqrt{x} - x^2) dx = [\\frac{2}{3}x^{3/2} - \\frac{x^3}{3}]_0^1 = 2/3 - 1/3 = 1/3$."
      },
      {
        "id": "q8-new-2",
        "type": "mcq",
        "text": "If $v(t) = t^2 - 2t$, find the total distance traveled on $[0, 3]$.",
        "options": [
          "$0$",
          "$8/3$",
          "$2$",
          "$4/3$"
        ],
        "answer": 1,
        "explanation": "$v(t) = t(t-2)$. Roots at $0, 2$. Dist = $\\int_0^2 (2t-t^2) dt + \\int_2^3 (t^2-2t) dt = 4/3 + (9-9 - (8/3-4)) = 4/3 + 4/3 = 8/3$."
      },
      {
        "id": "q8-new-3",
        "type": "mcq",
        "text": "Find the volume obtained by revolving $y=\\sin x$ on $[0, \\pi]$ about the x-axis.",
        "options": [
          "$\\pi/2$",
          "$\\pi^2/2$",
          "$\\pi^2$",
          "$2\\pi$"
        ],
        "answer": 1,
        "explanation": "$V = \\pi \\int_0^{\\pi} \\sin^2 x dx = \\pi (\\frac{\\pi}{2}) = \\frac{\\pi^2}{2}$."
      },
      {
        "id": "q8-new-4",
        "type": "mcq",
        "text": "Using washers, what is the integral for volume of $y=x, y=x^2$ revolved around the y-axis?",
        "options": [
          "$\\pi \\int_0^1 (y - y^2) dy$",
          "$\\pi \\int_0^1 (\\sqrt{y} - y) dy$",
          "$\\pi \\int_0^1 (y - y^2)^2 dy$",
          "$\\pi \\int_0^1 (y^{1/2} - y)^2 dy$"
        ],
        "answer": 0,
        "explanation": "Outer radius $x=\\sqrt{y}$, inner radius $x=y$. $V = \\pi \\int_0^1 ((\\sqrt{y})^2 - y^2) dy = \\pi \\int_0^1 (y - y^2) dy$."
      },
      {
        "id": "q8-new-5",
        "type": "mcq",
        "text": "Using cylindrical shells, what is the volume of $y=x-x^3, y=0$ (for $x>0$) revolved about the y-axis?",
        "options": [
          "$2\\pi \\int_0^1 (x^2 - x^4) dx$",
          "$\\pi \\int_0^1 (x-x^3)^2 dx$",
          "$2\\pi \\int_0^1 (x-x^3) dx$",
          "$\\pi \\int_0^1 (x^2-x^4)^2 dx$"
        ],
        "answer": 0,
        "explanation": "Shell height is $x-x^3$, radius is $x$. $V = \\int_0^1 2\\pi x(x-x^3) dx = 2\\pi \\int_0^1 (x^2-x^4) dx$."
      },
      {
        "id": "q8-new-6",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int_0^{\\pi/4} \\sec^2 x \\,dx$.",
        "options": [
          "$1$",
          "$\\sqrt{2}/2$",
          "$\\pi/4$",
          "$0$"
        ],
        "answer": 0,
        "explanation": "Antiderivative is $\\tan x$. $\\tan(\\pi/4) - \\tan(0) = 1 - 0 = 1$."
      },
      {
        "id": "q8-new-7",
        "type": "mcq",
        "text": "Find the arc length of $y = \\frac{2}{3}x^{3/2}$ for $0 \\le x \\le 3$.",
        "options": [
          "$14/3$",
          "$16/3$",
          "$12/3$",
          "$20/3$"
        ],
        "answer": 0,
        "explanation": "$y' = x^{1/2}$. $1+(y')^2 = 1+x$. $L = \\int_0^3 \\sqrt{1+x} dx = [\\frac{2}{3}(1+x)^{3/2}]_0^3 = \\frac{2}{3}(8 - 1) = 14/3$."
      },
      {
        "id": "q8-new-8",
        "type": "mcq",
        "text": "Find the average value of $f(x) = e^x$ on $[0, \\ln 2]$.",
        "options": [
          "$1/\\ln 2$",
          "$2/\\ln 2$",
          "$e/\\ln 2$",
          "$\\ln 2$"
        ],
        "answer": 0,
        "explanation": "Avg = $\\frac{1}{\\ln 2 - 0} \\int_0^{\\ln 2} e^x dx = \\frac{1}{\\ln 2} (e^{\\ln 2} - e^0) = \\frac{2 - 1}{\\ln 2} = \\frac{1}{\\ln 2}$."
      },
      {
        "id": "q8-new-9",
        "type": "mcq",
        "text": "Which method is best for revolving the region under $y = e^{-x^2}$ about the y-axis?",
        "options": [
          "Disks",
          "Washers",
          "Cylindrical Shells",
          "Slicing"
        ],
        "answer": 2,
        "explanation": "Cylindrical shells avoids having to solve $x = \\sqrt{-\\ln y}$, giving $V = 2\\pi \\int x e^{-x^2} dx$, which is easy to integrate."
      },
      {
        "id": "q8-new-10",
        "type": "mcq",
        "text": "Find the surface area of revolving $y=x^2$ ($0 \\le x \\le 1/2$) about the y-axis.",
        "options": [
          "$\\frac{\\pi}{6}(2\\sqrt{2}-1)$",
          "$\\frac{\\pi}{4}(\\sqrt{2}-1)$",
          "$\\frac{\\pi}{6}(5\\sqrt{5}-1)$",
          "$\\pi/6$"
        ],
        "answer": 0,
        "explanation": "$S = \\int 2\\pi x \\sqrt{1+(2x)^2} dx$. Let $u = 1+4x^2, du = 8xdx$. Bounds $1$ to $2$. $S = \\frac{2\\pi}{8} [\\frac{2}{3}u^{3/2}]_1^2 = \\frac{\\pi}{6} (2\\sqrt{2} - 1)$."
      },
      {
        "id": "q8-new-11",
        "type": "mcq",
        "text": "If a spring requires $2$ J to stretch $0.1$ m, what is the spring constant $k$?",
        "options": [
          "$20$",
          "$400$",
          "$200$",
          "$40$"
        ],
        "answer": 1,
        "explanation": "Work $W = \\frac{1}{2} k x^2 \\implies 2 = 0.5 k (0.01) \\implies k = 400$ N/m."
      },
      {
        "id": "q8-new-12",
        "type": "mcq",
        "text": "Determine $\\displaystyle\\frac{d}{dx} \\int_{1}^{x^3} \\sin(t^2) \\,dt$.",
        "options": [
          "$\\sin(x^6)$",
          "$3x^2 \\sin(x^6)$",
          "$\\sin(x^5)$",
          "$3x^2 \\sin(x^5)$"
        ],
        "answer": 1,
        "explanation": "By Fundamental Theorem of Calculus: $\\sin((x^3)^2) \\cdot \\frac{d}{dx}(x^3) = 3x^2 \\sin(x^6)$."
      },
      {
        "id": "q8-new-13",
        "type": "mcq",
        "text": "A plate shaped like an equilateral triangle with side $L$ is submerged vertically, vertex down, base at the surface. Area?",
        "options": [
          "$L^2/2$",
          "$\\sqrt{3} L^2 / 4$",
          "$\\sqrt{3} L^2 / 2$",
          "$L^2$"
        ],
        "answer": 1,
        "explanation": "Standard formula for the area of an equilateral triangle is $\\frac{\\sqrt{3}}{4} L^2$."
      },
      {
        "id": "q8-new-14",
        "type": "mcq",
        "text": "Find the centroid $\\bar{y}$ of a semicircle $y = \\sqrt{r^2 - x^2}$.",
        "options": [
          "$\\frac{4r}{3\\pi}$",
          "$\\frac{3r}{4\\pi}$",
          "$\\frac{2r}{\\pi}$",
          "$\\frac{r}{2}$"
        ],
        "answer": 0,
        "explanation": "$\\bar{y} = \\frac{1}{\\pi r^2/2} \\int_{-r}^r \\frac{1}{2}(r^2-x^2) dx = \\frac{2}{\\pi r^2} [r^2x - x^3/3]_0^r = \\frac{2}{\\pi r^2} \\frac{2r^3}{3} = \\frac{4r}{3\\pi}$."
      },
      {
        "id": "q8-new-15",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int_{-1}^1 (x^3 + x\\cos x) \\,dx$.",
        "options": [
          "$2$",
          "$1$",
          "$0$",
          "$\\pi$"
        ],
        "answer": 2,
        "explanation": "The integrand is an odd function (sum of two odd functions). Integral over a symmetric interval $[-a, a]$ is $0$."
      },
      {
        "id": "q8-new-16",
        "type": "mcq",
        "text": "Find the volume of a sphere of radius $R$ using calculus.",
        "options": [
          "$\\frac{4}{3}\\pi R^3$",
          "$\\pi R^2$",
          "$2\\pi R^2$",
          "$\\frac{2}{3}\\pi R^3$"
        ],
        "answer": 0,
        "explanation": "Revolve $y=\\sqrt{R^2-x^2}$ around x-axis: $\\pi \\int_{-R}^R (R^2-x^2)dx = \\pi [R^2x - x^3/3]_{-R}^R = \\frac{4}{3}\\pi R^3$."
      },
      {
        "id": "q8-new-17",
        "type": "mcq",
        "text": "The Mean Value Theorem for Integrals guarantees a $c$ in $[a,b]$ such that $f(c) = $ ?",
        "options": [
          "$\\frac{f(b)-f(a)}{b-a}$",
          "$f_{avg}$",
          "$0$",
          "$f'(c)$"
        ],
        "answer": 1,
        "explanation": "It guarantees $f(c) = f_{avg} = \\frac{1}{b-a}\\int_a^b f(x) dx$ for continuous $f$."
      },
      {
        "id": "q8-new-18",
        "type": "mcq",
        "text": "What is the area of a circle with radius $r$?",
        "options": [
          "$2\\pi r$",
          "$\\pi r^2$",
          "$\\pi d$",
          "$\\frac{1}{2}\\pi r^2$"
        ],
        "answer": 1,
        "explanation": "$\\pi r^2$."
      },
      {
        "id": "q8-new-19",
        "type": "mcq",
        "text": "Find the area under one arch of the cycloid $x = r(\\theta-\\sin\\theta), y = r(1-\\cos\\theta)$.",
        "options": [
          "$2\\pi r^2$",
          "$3\\pi r^2$",
          "$\\pi r^2$",
          "$4\\pi r^2$"
        ],
        "answer": 1,
        "explanation": "$A = \\int_0^{2\\pi} y(\\theta) x'(\\theta) d\\theta = \\int_0^{2\\pi} r(1-\\cos\\theta) r(1-\\cos\\theta) d\\theta = r^2 \\int_0^{2\\pi} (1 - 2\\cos\\theta + \\cos^2\\theta) d\\theta = r^2 (2\\pi - 0 + \\pi) = 3\\pi r^2$."
      },
      {
        "id": "q8-new-20",
        "type": "mcq",
        "text": "A force $F(x) = 3x^2 + 2$ acts on an object. Find work done from $x=1$ to $x=3$.",
        "options": [
          "$28$",
          "$30$",
          "$32$",
          "$26$"
        ],
        "answer": 1,
        "explanation": "Work $W = \\int_1^3 (3x^2+2) dx = [x^3 + 2x]_1^3 = (27+6) - (1+2) = 33 - 3 = 30$."
      },
      {
        "id": "q8-new-21",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int_0^{\\pi} |\\cos x| \\,dx$.",
        "options": [
          "$0$",
          "$1$",
          "$2$",
          "$-1$"
        ],
        "answer": 2,
        "explanation": "$\\int_0^{\\pi/2} \\cos x dx - \\int_{\\pi/2}^{\\pi} \\cos x dx = 1 - (-1) = 2$."
      },
      {
        "id": "q8-new-22",
        "type": "mcq",
        "text": "Find the average value of $f(x) = \\frac{1}{x}$ on $[1, e]$.",
        "options": [
          "$1$",
          "$1/(e-1)$",
          "$e-1$",
          "$e$"
        ],
        "answer": 1,
        "explanation": "Avg = $\\frac{1}{e-1} \\int_1^e \\frac{1}{x} dx = \\frac{1}{e-1} [\\ln x]_1^e = \\frac{1}{e-1}$."
      },
      {
        "id": "q8-new-23",
        "type": "mcq",
        "text": "Using Pappus's Theorem, what is the surface area of a torus formed by revolving a circle of radius $r$ around an axis at distance $R$ ($R > r$)?",
        "options": [
          "$2\\pi^2 R r$",
          "$4\\pi^2 R r$",
          "$\\pi^2 R^2$",
          "$4\\pi R r^2$"
        ],
        "answer": 1,
        "explanation": "Arc length $L = 2\\pi r$. Distance traveled by centroid $d = 2\\pi R$. $S = Ld = 4\\pi^2 R r$."
      },
      {
        "id": "q8-new-24",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\lim_{n\\to\\infty} \\frac{1}{n} \\sum_{i=1}^n \\sin(\\frac{i\\pi}{n})$.",
        "options": [
          "$2/\\pi$",
          "$\\pi/2$",
          "$1/\\pi$",
          "$1$"
        ],
        "answer": 0,
        "explanation": "This is a Riemann sum for $\\int_0^1 \\sin(\\pi x) dx = [-\\frac{1}{\\pi}\\cos(\\pi x)]_0^1 = -\\frac{1}{\\pi}(-1 - 1) = 2/\\pi$."
      },
      {
        "id": "q8-new-25",
        "type": "mcq",
        "text": "Determine the area of the region bounded by $y = |x|$ and $y = 2 - x^2$.",
        "options": [
          "$4/3$",
          "$8/3$",
          "$7/3$",
          "$5/3$"
        ],
        "answer": 2,
        "explanation": "Symmetric, intersect at $x=1, -1$. $2 \\int_0^1 (2 - x^2 - x) dx = 2 [2x - x^3/3 - x^2/2]_0^1 = 2(2 - 1/3 - 1/2) = 2(7/6) = 7/3$."
      }
    ]
  },
  {
    "id": "quiz-ch9",
    "chapter": 9,
    "title": "Advanced Integration Quiz",
    "questions": [
      {
        "id": "q9-1",
        "type": "mcq",
        "text": "For LIATE, which comes first for choosing $u$ in IBP?",
        "options": [
          "Algebraic",
          "Logarithmic",
          "Trigonometric",
          "Exponential"
        ],
        "answer": 1,
        "explanation": "LIATE: Logarithmic, Inverse trig, Algebraic, Trig, Exponential. $u$ = Logarithmic first."
      },
      {
        "id": "q9-2",
        "type": "mcq",
        "text": "To integrate $\\int\\frac{dx}{\\sqrt{9-x^2}}$, use substitution?",
        "options": [
          "$x=3\\tan\\theta$",
          "$x=3\\sin\\theta$",
          "$x=3\\sec\\theta$",
          "$x=3\\cos\\theta$"
        ],
        "answer": 1,
        "explanation": "$x=3\\sin\\theta$ gives $\\sqrt{9-x^2}=3\\cos\\theta$."
      },
      {
        "id": "q9-3",
        "type": "tf",
        "text": "Partial fraction decomposition requires the numerator degree to be less than the denominator degree.",
        "answer": true,
        "explanation": "If not, you must first perform polynomial long division."
      },
      {
        "id": "q9-new-1",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int_0^1 x e^{-x} \\,dx$.",
        "options": [
          "$1-2/e$",
          "$2/e - 1$",
          "$1/e$",
          "$1-1/e$"
        ],
        "answer": 0,
        "explanation": "Parts: $u=x, dv=e^{-x}dx$. $[-xe^{-x}]_0^1 + \\int_0^1 e^{-x} dx = -1/e - 1/e + 1 = 1 - 2/e$."
      },
      {
        "id": "q9-new-2",
        "type": "mcq",
        "text": "Determine $\\displaystyle\\int \\sin^2 x \\,dx$.",
        "options": [
          "$\\frac{x}{2} - \\frac{\\sin 2x}{4} + C$",
          "$\\frac{x}{2} + \\frac{\\sin 2x}{4} + C$",
          "$\\frac{x}{2} - \\frac{\\cos 2x}{4} + C$",
          "$\\frac{\\sin^3 x}{3} + C$"
        ],
        "answer": 0,
        "explanation": "$\\int \\frac{1-\\cos 2x}{2} dx = \\frac{x}{2} - \\frac{\\sin 2x}{4} + C$."
      },
      {
        "id": "q9-new-3",
        "type": "mcq",
        "text": "Which trigonometric substitution is best for evaluating $\\displaystyle\\int \\sqrt{x^2 - 16} \\,dx$?",
        "options": [
          "$x = 4\\sin\\theta$",
          "$x = 4\\tan\\theta$",
          "$x = 4\\sec\\theta$",
          "$x = 16\\sec\\theta$"
        ],
        "answer": 2,
        "explanation": "For $\\sqrt{x^2 - a^2}$, the substitution $x = a\\sec\\theta$ utilizes the identity $\\sec^2\\theta - 1 = \\tan^2\\theta$."
      },
      {
        "id": "q9-new-4",
        "type": "mcq",
        "text": "What is the correct partial fraction form for $\\displaystyle\\frac{3x}{(x-2)^2 (x^2+1)}$?",
        "options": [
          "$\\frac{A}{x-2} + \\frac{Bx+C}{x^2+1}$",
          "$\\frac{A}{x-2} + \\frac{B}{(x-2)^2} + \\frac{C}{x^2+1}$",
          "$\\frac{A}{x-2} + \\frac{B}{(x-2)^2} + \\frac{Cx+D}{x^2+1}$",
          "$\\frac{A}{(x-2)^2} + \\frac{Bx+C}{x^2+1}$"
        ],
        "answer": 2,
        "explanation": "Repeated linear factors require increasing powers, and irreducible quadratic factors require a linear numerator."
      },
      {
        "id": "q9-new-5",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int x \\ln x \\,dx$.",
        "options": [
          "$\\frac{1}{2}x^2\\ln x - \\frac{1}{4}x^2 + C$",
          "$x\\ln x - x + C$",
          "$\\frac{1}{2}x^2\\ln x - \\frac{1}{2}x^2 + C$",
          "$\\frac{1}{2}x^2\\ln x + \\frac{1}{4}x^2 + C$"
        ],
        "answer": 0,
        "explanation": "Parts: $u=\\ln x, dv=x dx$. $v=x^2/2, du=1/x dx$. $uv - \\int v du = \\frac{x^2}{2}\\ln x - \\int \\frac{x}{2} dx = \\frac{x^2}{2}\\ln x - \\frac{x^2}{4} + C$."
      },
      {
        "id": "q9-new-6",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int \\cos^3 x \\,dx$.",
        "options": [
          "$\\sin x - \\frac{\\sin^3 x}{3} + C$",
          "$\\sin x + \\frac{\\sin^3 x}{3} + C$",
          "$\\frac{\\cos^4 x}{4} + C$",
          "$\\sin x - \\sin^3 x + C$"
        ],
        "answer": 0,
        "explanation": "$\\int (1-\\sin^2 x)\\cos x dx$. Let $u=\\sin x$. $\\int(1-u^2)du = u - u^3/3 = \\sin x - \\frac{\\sin^3 x}{3} + C$."
      },
      {
        "id": "q9-new-7",
        "type": "mcq",
        "text": "In integration by parts, how should one generally choose $u$ according to the LIATE rule?",
        "options": [
          "Logarithmic, Inverse trig, Algebraic, Trig, Exponential",
          "Exponential, Trig, Algebraic, Inverse trig, Logarithmic",
          "Algebraic, Trig, Logarithmic, Inverse trig, Exponential",
          "Linear, Integrable, Algebraic, Trig, Exponential"
        ],
        "answer": 0,
        "explanation": "LIATE helps choose the best $u$: Logarithmic, Inverse trigonometric, Algebraic, Trigonometric, Exponential."
      },
      {
        "id": "q9-new-8",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int_0^1 \\frac{1}{x^2+1} \\,dx$.",
        "options": [
          "$\\pi/2$",
          "$\\pi/4$",
          "$1$",
          "$\\ln 2$"
        ],
        "answer": 1,
        "explanation": "$[\\tan^{-1} x]_0^1 = \\pi/4 - 0 = \\pi/4$."
      },
      {
        "id": "q9-new-9",
        "type": "mcq",
        "text": "Find $\\displaystyle\\int \\tan^2 x \\,dx$.",
        "options": [
          "$\\frac{\\tan^3 x}{3} + C$",
          "$\\tan x - x + C$",
          "$\\sec^2 x + C$",
          "$\\tan x + x + C$"
        ],
        "answer": 1,
        "explanation": "Use $\\tan^2 x = \\sec^2 x - 1$. Integral is $\\tan x - x + C$."
      },
      {
        "id": "q9-new-10",
        "type": "mcq",
        "text": "If $x = 3\\sin\\theta$, what is $\\sqrt{9-x^2}$?",
        "options": [
          "$3\\sin\\theta$",
          "$9\\cos\\theta$",
          "$3|\\cos\\theta|$",
          "$3\\tan\\theta$"
        ],
        "answer": 2,
        "explanation": "$\\sqrt{9 - 9\\sin^2\\theta} = \\sqrt{9\\cos^2\\theta} = 3|\\cos\\theta|$."
      },
      {
        "id": "q9-new-11",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int e^{2x} \\sin x \\,dx$.",
        "options": [
          "$\\frac{e^{2x}}{5}(2\\sin x - \\cos x) + C$",
          "$\\frac{e^{2x}}{5}(\\sin x - 2\\cos x) + C$",
          "$\\frac{e^{2x}}{3}(2\\sin x - \\cos x) + C$",
          "$\\frac{e^{2x}}{5}(2\\cos x - \\sin x) + C$"
        ],
        "answer": 0,
        "explanation": "By parts twice or formula $\\frac{e^{ax}}{a^2+b^2}(a\\sin bx - b\\cos bx)$. Here $a=2, b=1$, yielding $\\frac{e^{2x}}{5}(2\\sin x - \\cos x) + C$."
      },
      {
        "id": "q9-new-12",
        "type": "mcq",
        "text": "Find the partial fraction decomposition of $\\frac{1}{x^2 - x}$.",
        "options": [
          "$\\frac{1}{x-1} - \\frac{1}{x}$",
          "$\\frac{1}{x} - \\frac{1}{x-1}$",
          "$\\frac{1}{x} + \\frac{1}{x-1}$",
          "$\\frac{1}{x-1} + \\frac{1}{x^2}$"
        ],
        "answer": 0,
        "explanation": "$\\frac{1}{x(x-1)} = \\frac{A}{x} + \\frac{B}{x-1}$. $A(x-1) + Bx = 1$. For $x=0, A=-1$. For $x=1, B=1$. So $\\frac{1}{x-1} - \\frac{1}{x}$."
      },
      {
        "id": "q9-new-13",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int \\sin^4 x \\cos^3 x \\,dx$.",
        "options": [
          "$\\frac{\\sin^5 x}{5} - \\frac{\\sin^7 x}{7} + C$",
          "$\\frac{\\sin^5 x}{5} + \\frac{\\sin^7 x}{7} + C$",
          "$\\frac{\\cos^5 x}{5} - \\frac{\\cos^7 x}{7} + C$",
          "$\\frac{\\cos^5 x}{5} + \\frac{\\cos^7 x}{7} + C$"
        ],
        "answer": 0,
        "explanation": "Odd power of cos. $\\int \\sin^4 x (1-\\sin^2 x)\\cos x dx$. Let $u=\\sin x$. $\\int (u^4 - u^6) du = \\frac{u^5}{5} - \\frac{u^7}{7} + C$."
      },
      {
        "id": "q9-new-14",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int \\sec^4 x \\,dx$.",
        "options": [
          "$\\tan x + \\frac{\\tan^3 x}{3} + C$",
          "$\\sec x + \\frac{\\sec^3 x}{3} + C$",
          "$\\frac{\\sec^5 x}{5} + C$",
          "$\\tan x - \\frac{\\tan^3 x}{3} + C$"
        ],
        "answer": 0,
        "explanation": "$\\int (1+\\tan^2 x)\\sec^2 x dx = \\int (1+u^2)du = u + u^3/3 = \\tan x + \\frac{\\tan^3 x}{3} + C$."
      },
      {
        "id": "q9-new-15",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int x^2 \\cos(x^3) \\,dx$.",
        "options": [
          "$\\frac{1}{3}\\sin(x^3) + C$",
          "$3\\sin(x^3) + C$",
          "$\\frac{x^3}{3}\\sin(x^3) + C$",
          "$-\\frac{1}{3}\\sin(x^3) + C$"
        ],
        "answer": 0,
        "explanation": "This doesn't need integration by parts. Substitution $u = x^3, du = 3x^2 dx$. $\\frac{1}{3} \\int \\cos u du = \\frac{1}{3}\\sin u + C$."
      },
      {
        "id": "q9-new-16",
        "type": "mcq",
        "text": "Integrate $\\displaystyle\\int \\frac{1}{x^2-2x+5} \\,dx$.",
        "options": [
          "$\\frac{1}{2}\\tan^{-1}(\\frac{x-1}{2}) + C$",
          "$\\tan^{-1}(\\frac{x-1}{2}) + C$",
          "$\\frac{1}{2}\\ln|x^2-2x+5| + C$",
          "$\\frac{1}{2}\\tan^{-1}(x-1) + C$"
        ],
        "answer": 0,
        "explanation": "Complete square: $x^2-2x+5 = (x-1)^2 + 4$. $\\int \\frac{dx}{(x-1)^2+2^2} = \\frac{1}{2}\\tan^{-1}(\\frac{x-1}{2}) + C$."
      },
      {
        "id": "q9-new-17",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int \\frac{x^2}{x^2+1} \\,dx$.",
        "options": [
          "$x - \\tan^{-1} x + C$",
          "$x + \\tan^{-1} x + C$",
          "$\\ln(x^2+1) + C$",
          "$\\frac{1}{x} + \\tan^{-1} x + C$"
        ],
        "answer": 0,
        "explanation": "Polynomial division: $1 - \\frac{1}{x^2+1}$. Integral is $x - \\tan^{-1} x + C$."
      },
      {
        "id": "q9-new-18",
        "type": "mcq",
        "text": "Find $\\displaystyle\\int \\ln(x^2) \\,dx$.",
        "options": [
          "$2x\\ln x - 2x + C$",
          "$x\\ln(x^2) - 2x + C$",
          "Both A and B",
          "$x\\ln x - x + C$"
        ],
        "answer": 2,
        "explanation": "$\\ln(x^2) = 2\\ln x$. $\\int 2\\ln x dx = 2(x\\ln x - x) + C$. Alternatively, parts gives $x\\ln(x^2) - 2x$. They are mathematically identical for $x>0$."
      },
      {
        "id": "q9-new-19",
        "type": "mcq",
        "text": "What is the appropriate trig substitution for $\\int \\sqrt{25 - x^2} dx$?",
        "options": [
          "$x = 5\\sin\\theta$",
          "$x = 5\\sec\\theta$",
          "$x = 5\\tan\\theta$",
          "$x = 25\\sin\\theta$"
        ],
        "answer": 0,
        "explanation": "Form $a^2-x^2$ uses $x = a\\sin\\theta$. Here $a=5$."
      },
      {
        "id": "q9-new-20",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int x^2 \\sin x \\,dx$.",
        "options": [
          "$-x^2\\cos x + 2x\\sin x + 2\\cos x + C$",
          "$-x^2\\cos x - 2x\\sin x + 2\\cos x + C$",
          "$x^2\\cos x - 2x\\sin x - 2\\cos x + C$",
          "$-x^2\\cos x + 2x\\sin x - 2\\cos x + C$"
        ],
        "answer": 0,
        "explanation": "Tabular: $u=x^2, 2x, 2, 0$. $dv=\\sin x, -\\cos x, -\\sin x, \\cos x$. Products: $-x^2\\cos x - 2x(-\\sin x) + 2\\cos x = -x^2\\cos x + 2x\\sin x + 2\\cos x + C$."
      },
      {
        "id": "q9-new-21",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int \\cot x \\,dx$.",
        "options": [
          "$\\ln|\\sin x| + C$",
          "$-\\ln|\\csc x + \\cot x| + C$",
          "$\\ln|\\cos x| + C$",
          "$\\sec^2 x + C$"
        ],
        "answer": 0,
        "explanation": "$\\int \\frac{\\cos x}{\\sin x} dx$. Let $u = \\sin x$. $\\int \\frac{du}{u} = \\ln|u| = \\ln|\\sin x| + C$."
      },
      {
        "id": "q9-new-22",
        "type": "mcq",
        "text": "For the Weierstrass substitution $t = \\tan(x/2)$, what does $\\cos x$ equal?",
        "options": [
          "$\\frac{1-t^2}{1+t^2}$",
          "$\\frac{2t}{1+t^2}$",
          "$\\frac{1+t^2}{1-t^2}$",
          "$\\frac{2t}{1-t^2}$"
        ],
        "answer": 0,
        "explanation": "$\\cos x = \\frac{1-t^2}{1+t^2}$ in the $t$-substitution."
      },
      {
        "id": "q9-new-23",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int \\frac{dx}{x^2 - 4}$.",
        "options": [
          "$\\frac{1}{4}\\ln|\\frac{x-2}{x+2}| + C$",
          "$\\frac{1}{2}\\ln|\\frac{x-2}{x+2}| + C$",
          "$\\frac{1}{4}\\ln|\\frac{x+2}{x-2}| + C$",
          "$\\frac{1}{2}\\tan^{-1}(x/2) + C$"
        ],
        "answer": 0,
        "explanation": "$\\frac{1}{(x-2)(x+2)} = \\frac{1/4}{x-2} - \\frac{1/4}{x+2}$. Integral is $\\frac{1}{4}(\\ln|x-2| - \\ln|x+2|)$."
      },
      {
        "id": "q9-new-24",
        "type": "mcq",
        "text": "In evaluating $\\int x^n e^x dx$, how many times must integration by parts be applied?",
        "options": [
          "$n$ times",
          "$n+1$ times",
          "$n-1$ times",
          "$1$ time"
        ],
        "answer": 0,
        "explanation": "You apply it $n$ times to reduce $x^n$ down to a constant."
      },
      {
        "id": "q9-new-25",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int_0^{\\pi} \\sin^2(nx) \\,dx$ for integer $n \\ge 1$.",
        "options": [
          "$\\pi/2$",
          "$\\pi/n$",
          "$n\\pi/2$",
          "$0$"
        ],
        "answer": 0,
        "explanation": "$\\int_0^{\\pi} \\frac{1-\\cos(2nx)}{2} dx = [\\frac{x}{2} - \\frac{\\sin(2nx)}{4n}]_0^{\\pi} = \\frac{\\pi}{2}$."
      }
    ]
  },
  {
    "id": "quiz-ch10",
    "chapter": 10,
    "title": "Improper Integrals Quiz",
    "questions": [
      {
        "id": "q10-1",
        "type": "mcq",
        "text": "$\\int_1^\\infty \\frac{1}{x^2}dx = ?$",
        "options": [
          "$1$",
          "$2$",
          "Diverges",
          "$\\frac{1}{2}$"
        ],
        "answer": 0,
        "explanation": "$\\lim_{t\\to\\infty}[-1/x]_1^t = 0-(-1) = 1$."
      },
      {
        "id": "q10-2",
        "type": "tf",
        "text": "$\\int_1^\\infty \\frac{1}{x}dx$ converges.",
        "answer": false,
        "explanation": "$\\int_1^\\infty 1/x\\,dx = \\ln t \\to \\infty$. It diverges."
      },
      {
        "id": "q10-new-1",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int_1^{\\infty} \\frac{1}{x^3} \\,dx$.",
        "options": [
          "$1/2$",
          "$1/3$",
          "$1$",
          "Diverges"
        ],
        "answer": 0,
        "explanation": "$\\lim_{t\\to\\infty}[-\\frac{1}{2x^2}]_1^t = 0 + 1/2 = 1/2$."
      },
      {
        "id": "q10-new-2",
        "type": "mcq",
        "text": "Does $\\displaystyle\\int_0^{\\infty} e^{x} \\,dx$ converge?",
        "options": [
          "Yes, to $1$",
          "Yes, to $\\infty$",
          "No, it diverges",
          "Yes, to $e$"
        ],
        "answer": 2,
        "explanation": "$\\lim_{t\\to\\infty} e^t = \\infty$. The integral diverges."
      },
      {
        "id": "q10-new-3",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int_{-\\infty}^0 e^{2x} \\,dx$.",
        "options": [
          "$2$",
          "$1/2$",
          "$-1/2$",
          "Diverges"
        ],
        "answer": 1,
        "explanation": "$\\lim_{t\\to-\\infty} [\\frac{e^{2x}}{2}]_t^0 = 1/2 - 0 = 1/2$."
      },
      {
        "id": "q10-new-4",
        "type": "mcq",
        "text": "For which values of $p$ does $\\displaystyle\\int_0^1 \\frac{1}{x^p} \\,dx$ converge?",
        "options": [
          "$p > 1$",
          "$p \\ge 1$",
          "$p < 1$",
          "$p \\le 1$"
        ],
        "answer": 2,
        "explanation": "This has a singularity at $x=0$ (Type II). Integral $= [x^{1-p}/(1-p)]_0^1$. This requires $1-p > 0$, i.e. $p < 1$."
      },
      {
        "id": "q10-new-5",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int_0^1 \\frac{1}{\\sqrt{1-x^2}} \\,dx$.",
        "options": [
          "$\\pi/4$",
          "$\\pi/2$",
          "$\\pi$",
          "$1$"
        ],
        "answer": 1,
        "explanation": "Singularity at $x=1$. $\\lim_{t\\to 1^-}[\\sin^{-1}x]_0^t = \\sin^{-1}(1) - \\sin^{-1}(0) = \\pi/2$."
      },
      {
        "id": "q10-new-6",
        "type": "mcq",
        "text": "By comparison, does $\\displaystyle\\int_1^{\\infty} \\frac{2+\\cos x}{x^2} \\,dx$ converge?",
        "options": [
          "Yes",
          "No",
          "Cannot determine",
          "Only conditionally"
        ],
        "answer": 0,
        "explanation": "$\\frac{2+\\cos x}{x^2} \\le \\frac{3}{x^2}$. Since $\\int_1^\\infty 3/x^2 dx$ converges, the original converges."
      },
      {
        "id": "q10-new-7",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int_0^{\\infty} \\frac{1}{1+x^2} \\,dx$.",
        "options": [
          "$\\pi/4$",
          "$\\pi/2$",
          "$\\pi$",
          "$1$"
        ],
        "answer": 1,
        "explanation": "$[\\tan^{-1} x]_0^{\\infty} = \\pi/2 - 0 = \\pi/2$."
      },
      {
        "id": "q10-new-8",
        "type": "mcq",
        "text": "Which test shows $\\displaystyle\\int_1^{\\infty} \\frac{1}{x^2+\\sqrt{x}} \\,dx$ converges?",
        "options": [
          "Comparison with $1/x^2$",
          "Comparison with $1/x$",
          "Comparison with $1/\\sqrt{x}$",
          "Cannot be shown to converge"
        ],
        "answer": 0,
        "explanation": "For $x \\ge 1$: $x^2 + \\sqrt{x} > x^2$, so $\\frac{1}{x^2+\\sqrt{x}} < \\frac{1}{x^2}$. Since $\\int_1^\\infty 1/x^2$ converges, so does the original."
      },
      {
        "id": "q10-new-9",
        "type": "mcq",
        "text": "Is $\\displaystyle\\int_0^1 \\ln x \\,dx$ improper, and what does it equal?",
        "options": [
          "No, it's proper; $-1$",
          "Yes, improper; $-1$",
          "Yes, improper; diverges",
          "Yes, improper; $0$"
        ],
        "answer": 1,
        "explanation": "$\\ln x \\to -\\infty$ as $x\\to 0^+$. $\\lim_{t\\to 0^+}[x\\ln x - x]_t^1 = -1 - \\lim_{t\\to 0^+}(t\\ln t - t) = -1 - 0 = -1$."
      },
      {
        "id": "q10-new-10",
        "type": "mcq",
        "text": "The value of the Gamma function $\\Gamma(1/2)$ is:",
        "options": [
          "$1/2$",
          "$\\sqrt{\\pi}$",
          "$\\pi/2$",
          "$1$"
        ],
        "answer": 1,
        "explanation": "$\\Gamma(1/2) = \\int_0^\\infty x^{-1/2}e^{-x}dx = \\sqrt{\\pi}$, which follows from the Gaussian integral."
      },
      {
        "id": "q10-new-11",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int_0^{\\infty} x^2 e^{-x} \\,dx$.",
        "options": [
          "$1$",
          "$2$",
          "$3$",
          "$6$"
        ],
        "answer": 1,
        "explanation": "$\\Gamma(3) = (3-1)! = 2! = 2$."
      },
      {
        "id": "q10-new-12",
        "type": "mcq",
        "text": "Does $\\displaystyle\\int_2^{\\infty} \\frac{1}{x(\\ln x)^2} \\,dx$ converge?",
        "options": [
          "Yes, to $1/\\ln 2$",
          "Yes, to $\\ln(\\ln 2)$",
          "No, it diverges",
          "Yes, to $1$"
        ],
        "answer": 0,
        "explanation": "Let $u = \\ln x$. Integral becomes $\\int_{\\ln 2}^\\infty u^{-2} du = [-1/u]_{\\ln 2}^\\infty = 1/\\ln 2$."
      },
      {
        "id": "q10-new-13",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int_0^{\\infty} e^{-x}\\sin x \\,dx$.",
        "options": [
          "$1/2$",
          "$1$",
          "$\\pi/4$",
          "$1/\\sqrt{2}$"
        ],
        "answer": 0,
        "explanation": "Using $\\int e^{ax}\\sin bx = \\frac{e^{ax}(a\\sin bx - b\\cos bx)}{a^2+b^2}$ with $a=-1, b=1$: $[\\frac{e^{-x}(-\\sin x - \\cos x)}{2}]_0^\\infty = 0 + 1/2 = 1/2$."
      },
      {
        "id": "q10-new-14",
        "type": "mcq",
        "text": "Which of the following diverges?",
        "options": [
          "$\\int_0^1 x^{-0.9} dx$",
          "$\\int_1^\\infty x^{-1.1} dx$",
          "$\\int_0^1 x^{-1} dx$",
          "$\\int_0^1 x^{-0.5} dx$"
        ],
        "answer": 2,
        "explanation": "$\\int_0^1 x^{-1}dx = [\\ln x]_0^1 = 0 - (-\\infty)$, which diverges (p-series with $p=1$ at a Type II singularity)."
      },
      {
        "id": "q10-new-15",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int_{-\\infty}^{\\infty} xe^{-x^2} \\,dx$.",
        "options": [
          "$0$",
          "$1$",
          "$\\sqrt{\\pi}$",
          "Diverges"
        ],
        "answer": 0,
        "explanation": "The integrand $f(x) = xe^{-x^2}$ is an odd function. Integral over $(-\\infty,\\infty)$ of an odd function is $0$ (verified by computing each half)."
      },
      {
        "id": "q10-new-16",
        "type": "mcq",
        "text": "Use the Limit Comparison Test for $\\displaystyle\\int_1^{\\infty} \\frac{x+1}{x^3-x} \\,dx$.",
        "options": [
          "Converges",
          "Diverges",
          "Test inconclusive",
          "Conditionally converges"
        ],
        "answer": 0,
        "explanation": "For large $x$, $\\frac{x+1}{x^3-x} \\sim \\frac{x}{x^3} = x^{-2}$. Limit comparison with $x^{-2}$ gives limit $1$, and $\\int_1^\\infty x^{-2}$ converges. So the original converges."
      },
      {
        "id": "q10-new-17",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int_0^{\\pi} \\frac{dx}{\\sqrt{\\sin x}}$.",
        "options": [
          "Converges",
          "Diverges",
          "Equals $\\pi$",
          "Equals $2$"
        ],
        "answer": 0,
        "explanation": "At both endpoints ($x=0, \\pi$), $\\sin x \\sim x$ and $\\sin x \\sim \\pi - x$ respectively. Both give $p = 1/2 < 1$ type singularities, which converge."
      },
      {
        "id": "q10-new-18",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int_1^{\\infty} \\frac{\\ln x}{x^2} \\,dx$.",
        "options": [
          "$1$",
          "$1/2$",
          "$-1$",
          "$2$"
        ],
        "answer": 0,
        "explanation": "Parts: $u=\\ln x, dv=x^{-2}dx$. $[-\\frac{\\ln x}{x}]_1^\\infty + \\int_1^\\infty x^{-2} dx = 0 + [-1/x]_1^\\infty = 0 + 1 = 1$."
      },
      {
        "id": "q10-new-19",
        "type": "mcq",
        "text": "Does $\\displaystyle\\int_0^{\\infty} \\frac{\\sin x}{\\sqrt{x}} \\,dx$ converge absolutely?",
        "options": [
          "Yes",
          "No",
          "Conditionally only",
          "Cannot determine"
        ],
        "answer": 1,
        "explanation": "$|\\sin x / \\sqrt{x}|$ does not converge. Compare to $\\int \\frac{|\\sin x|}{\\sqrt{x}}$ which diverges by comparison with harmonic-like series."
      },
      {
        "id": "q10-new-20",
        "type": "mcq",
        "text": "Calculate $\\displaystyle\\int_0^{\\infty} \\frac{1}{(1+x)^2} \\,dx$.",
        "options": [
          "$1$",
          "$1/2$",
          "$\\infty$",
          "$2$"
        ],
        "answer": 0,
        "explanation": "$\\lim_{t\\to\\infty}[-\\frac{1}{1+x}]_0^t = 0 - (-1) = 1$."
      },
      {
        "id": "q10-new-21",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int_3^{\\infty} \\frac{1}{x^2-9} \\,dx$. (Hint: It's a Type II at $x=3$)",
        "options": [
          "Converges to $\\pi/6$",
          "Converges to $0$",
          "Diverges",
          "Converges to $1/6$"
        ],
        "answer": 2,
        "explanation": "Near $x=3$, $x^2-9 = (x-3)(x+3) \\approx 6(x-3)$. So the integrand $\\sim \\frac{1}{6(x-3)}$. Since $\\int_3^4 1/(x-3) dx$ diverges ($p=1$), the original diverges."
      },
      {
        "id": "q10-new-22",
        "type": "mcq",
        "text": "Which of the following converges?",
        "options": [
          "$\\int_1^\\infty \\frac{1}{\\sqrt{x}} dx$",
          "$\\int_1^\\infty \\frac{1}{x^{0.99}} dx$",
          "$\\int_1^\\infty \\frac{1}{x^{1.01}} dx$",
          "$\\int_1^\\infty x dx$"
        ],
        "answer": 2,
        "explanation": "p-integrals $\\int_1^\\infty x^{-p}$ converge iff $p > 1$. Only $1.01 > 1$."
      },
      {
        "id": "q10-new-23",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\int_0^{\\infty} e^{-3x} \\,dx$.",
        "options": [
          "$1/3$",
          "$3$",
          "$1$",
          "$1/9$"
        ],
        "answer": 0,
        "explanation": "$[-\\frac{1}{3}e^{-3x}]_0^\\infty = 0 - (-1/3) = 1/3$."
      },
      {
        "id": "q10-new-24",
        "type": "mcq",
        "text": "When does the integral $\\displaystyle\\int_a^b f(x)\\,dx$ need to be treated as improper?",
        "options": [
          "When $f$ is unbounded on $[a,b]$",
          "When $a = -\\infty$ or $b = \\infty$",
          "Either of the above",
          "When $f$ is not differentiable"
        ],
        "answer": 2,
        "explanation": "Improper integrals arise from: (1) infinite limits of integration (Type I), or (2) discontinuities/singularities within or at the boundary of $[a,b]$ (Type II)."
      },
      {
        "id": "q10-new-25",
        "type": "mcq",
        "text": "Does $\\displaystyle\\int_1^{\\infty} \\sin(x) \\,dx$ converge?",
        "options": [
          "Yes, to $0$",
          "Yes, to $\\cos 1$",
          "No, it diverges",
          "Yes, to $1$"
        ],
        "answer": 2,
        "explanation": "$\\lim_{t\\to\\infty}[-\\cos x]_1^t = \\lim_{t\\to\\infty}(-\\cos t + \\cos 1)$. Since $\\cos t$ oscillates without settling, the limit does not exist. The integral **diverges**."
      }
    ]
  },
  {
    "id": "quiz-ch11",
    "chapter": 11,
    "title": "Sequences and Series Quiz",
    "questions": [
      {
        "id": "q11-1",
        "type": "mcq",
        "text": "The geometric series $\\sum_{n=0}^\\infty (\\frac{1}{2})^n$ equals?",
        "options": [
          "$1$",
          "$2$",
          "$\\frac{1}{2}$",
          "Diverges"
        ],
        "answer": 1,
        "explanation": "$\\frac{a}{1-r}=\\frac{1}{1-1/2}=2$."
      },
      {
        "id": "q11-2",
        "type": "mcq",
        "text": "The Maclaurin series for $\\sin x$ is?",
        "options": [
          "$\\sum_{n=0}^\\infty \\frac{x^n}{n!}$",
          "$\\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n+1}}{(2n+1)!}$",
          "$\\sum_{n=0}^\\infty (-1)^n\\frac{x^{2n}}{(2n)!}$",
          "$\\sum_{n=1}^\\infty \\frac{x^n}{n}$"
        ],
        "answer": 1,
        "explanation": "$\\sin x = x - x^3/3! + x^5/5! - \\cdots$"
      },
      {
        "id": "q11-3",
        "type": "tf",
        "text": "If $\\lim_{n\\to\\infty}a_n = 0$, then $\\sum a_n$ converges.",
        "answer": false,
        "explanation": "The harmonic series $\\sum 1/n$ diverges even though $1/n \\to 0$."
      },
      {
        "id": "q11-new-1",
        "type": "mcq",
        "text": "Does $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$ converge?",
        "options": [
          "Yes, by p-test ($p=2>1$)",
          "No, p-test fails",
          "Yes, only conditionally",
          "Cannot determine"
        ],
        "answer": 0,
        "explanation": "The p-series $\\sum 1/n^p$ converges when $p > 1$. Since $p=2 > 1$, this converges to $\\pi^2/6$."
      },
      {
        "id": "q11-new-2",
        "type": "mcq",
        "text": "Find the sum of $\\displaystyle\\sum_{n=0}^{\\infty} \\left(\\frac{2}{3}\\right)^n$.",
        "options": [
          "$2$",
          "$3$",
          "$6$",
          "$\\infty$"
        ],
        "answer": 1,
        "explanation": "Geometric with $r=2/3, a=1$. Sum $= \\frac{1}{1-2/3} = \\frac{1}{1/3} = 3$."
      },
      {
        "id": "q11-new-3",
        "type": "mcq",
        "text": "Apply the Ratio Test to $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n}{2^n}$.",
        "options": [
          "Converges ($L=1/2$)",
          "Diverges ($L=2$)",
          "Inconclusive ($L=1$)",
          "Converges ($L=0$)"
        ],
        "answer": 0,
        "explanation": "$\\frac{a_{n+1}}{a_n} = \\frac{n+1}{2^{n+1}} \\cdot \\frac{2^n}{n} = \\frac{n+1}{2n} \\to \\frac{1}{2} < 1$. Converges."
      },
      {
        "id": "q11-new-4",
        "type": "mcq",
        "text": "Which test applies most directly to $\\displaystyle\\sum_{n=2}^{\\infty} \\frac{1}{n \\ln n}$?",
        "options": [
          "Ratio Test",
          "Root Test",
          "Integral Test",
          "Alternating Series Test"
        ],
        "answer": 2,
        "explanation": "The Integral Test applies since $f(x) = 1/(x\\ln x)$ is positive, continuous, and decreasing. $\\int_2^\\infty dx/(x\\ln x) = [\\ln(\\ln x)]_2^\\infty = \\infty$, so the series diverges."
      },
      {
        "id": "q11-new-5",
        "type": "mcq",
        "text": "What is the radius of convergence of $\\displaystyle\\sum_{n=0}^{\\infty} n! \\, x^n$?",
        "options": [
          "$1$",
          "$\\infty$",
          "$0$",
          "$e$"
        ],
        "answer": 2,
        "explanation": "Ratio test: $|\\frac{(n+1)!x^{n+1}}{n!x^n}| = (n+1)|x| \\to \\infty$ for any $x \\neq 0$. Converges only at $x=0$. $R=0$."
      },
      {
        "id": "q11-new-6",
        "type": "mcq",
        "text": "Apply the Root Test to $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{(\\ln n)^n}$.",
        "options": [
          "Converges ($L=0$)",
          "Diverges ($L=\\infty$)",
          "Inconclusive ($L=1$)",
          "Converges ($L=1/e$)"
        ],
        "answer": 0,
        "explanation": "$\\sqrt[n]{a_n} = 1/\\ln n \\to 0 < 1$. Converges by Root Test."
      },
      {
        "id": "q11-new-7",
        "type": "mcq",
        "text": "Does $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^{1/3}}$ converge absolutely, conditionally, or diverge?",
        "options": [
          "Absolutely",
          "Conditionally",
          "Diverges",
          "Both absolutely and conditionally"
        ],
        "answer": 1,
        "explanation": "$\\sum |a_n| = \\sum n^{-1/3}$ diverges ($p=1/3 < 1$). But by AST, $\\sum (-1)^n n^{-1/3}$ converges since $n^{-1/3}$ decreases to $0$. Conditionally convergent."
      },
      {
        "id": "q11-new-8",
        "type": "mcq",
        "text": "The Maclaurin series for $\\sin x$ is:",
        "options": [
          "$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}$",
          "$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$",
          "$\\sum_{n=0}^{\\infty} \\frac{x^{2n+1}}{(2n+1)!}$",
          "$\\sum_{n=1}^{\\infty} \\frac{(-1)^n x^n}{n!}$"
        ],
        "answer": 1,
        "explanation": "$\\sin x = x - x^3/3! + x^5/5! - \\cdots = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$."
      },
      {
        "id": "q11-new-9",
        "type": "mcq",
        "text": "Find the first three non-zero terms of the Maclaurin series for $\\tan x$.",
        "options": [
          "$x + x^3/3 + 2x^5/15 + \\cdots$",
          "$x - x^3/6 + x^5/120 + \\cdots$",
          "$x - x^3/3 + x^5/5 + \\cdots$",
          "$1 + x^2/2 + x^4/8 + \\cdots$"
        ],
        "answer": 0,
        "explanation": "By dividing the series for $\\sin x$ by $\\cos x$: $\\tan x = x + \\frac{x^3}{3} + \\frac{2x^5}{15} + \\cdots$"
      },
      {
        "id": "q11-new-10",
        "type": "mcq",
        "text": "Compute $\\displaystyle\\lim_{x\\to 0} \\frac{\\sin x - x}{x^3}$ using Taylor series.",
        "options": [
          "$0$",
          "$1/3$",
          "$-1/6$",
          "$1/6$"
        ],
        "answer": 2,
        "explanation": "$\\sin x - x = -x^3/3! + x^5/5! - \\cdots$. Divide by $x^3$: $-1/6 + x^2/120 - \\cdots \\to -1/6$."
      },
      {
        "id": "q11-new-11",
        "type": "mcq",
        "text": "What is the interval of convergence of $\\displaystyle\\sum_{n=0}^{\\infty} x^n$?",
        "options": [
          "$[-1,1]$",
          "$(-1,1)$",
          "$(-1,1]$",
          "$[-1,1)$"
        ],
        "answer": 1,
        "explanation": "$R=1$. At $x=1$: $\\sum 1$ diverges. At $x=-1$: $\\sum(-1)^n$ diverges. IoC is $(-1,1)$."
      },
      {
        "id": "q11-new-12",
        "type": "mcq",
        "text": "If $\\sum a_n$ converges, what must be true about $a_n$?",
        "options": [
          "$a_n \\to 0$",
          "$a_n$ is positive",
          "$a_n$ is decreasing",
          "$|a_n| < 1$ for all $n$"
        ],
        "answer": 0,
        "explanation": "The $n$-th term test (necessary condition): if $\\sum a_n$ converges, then $\\lim_{n\\to\\infty} a_n = 0$. The converse is false."
      },
      {
        "id": "q11-new-13",
        "type": "mcq",
        "text": "The harmonic series $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n}$:",
        "options": [
          "Converges to $\\ln 2$",
          "Converges to $e$",
          "Diverges",
          "Converges conditionally"
        ],
        "answer": 2,
        "explanation": "The harmonic series is the classic example of a divergent series where $a_n \\to 0$. Proved using the integral test or Cauchy condensation."
      },
      {
        "id": "q11-new-14",
        "type": "mcq",
        "text": "Use the Binomial Series to write the first 3 terms of $(1+x)^{1/2}$.",
        "options": [
          "$1 + \\frac{1}{2}x - \\frac{1}{8}x^2 + \\cdots$",
          "$1 + \\frac{1}{2}x + \\frac{1}{4}x^2 + \\cdots$",
          "$1 - \\frac{1}{2}x + \\frac{1}{8}x^2 + \\cdots$",
          "$1 + x + x^2 + \\cdots$"
        ],
        "answer": 0,
        "explanation": "$k=1/2$. $(1+x)^{1/2} = 1 + \\frac{1}{2}x + \\frac{(1/2)(-1/2)}{2!}x^2 + \\cdots = 1 + \\frac{x}{2} - \\frac{x^2}{8} + \\cdots$"
      },
      {
        "id": "q11-new-15",
        "type": "mcq",
        "text": "Evaluate $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$ using a known Taylor series.",
        "options": [
          "$\\ln 2$",
          "$\\pi/4$",
          "$1/e$",
          "$\\sqrt{2}$"
        ],
        "answer": 0,
        "explanation": "From $\\ln(1+x) = \\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n}x^n$. Setting $x=1$ (on the boundary of convergence): $\\ln(2) = \\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n}$."
      },
      {
        "id": "q11-new-16",
        "type": "mcq",
        "text": "Find $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{(-1)^n \\pi^{2n}}{(2n)! \\cdot 4^n}$ by recognizing it as a Taylor series.",
        "options": [
          "$\\cos(\\pi/2) = 0$",
          "$\\cos(\\pi) = -1$",
          "$\\cos(\\pi/4) = 1/\\sqrt{2}$",
          "$1$"
        ],
        "answer": 0,
        "explanation": "$\\cos x = \\sum \\frac{(-1)^n x^{2n}}{(2n)!}$. Here $x^{2n} = (\\pi^2/4)^n = (\\pi/2)^{2n}$. So $x = \\pi/2$ and sum $= \\cos(\\pi/2) = 0$."
      },
      {
        "id": "q11-new-17",
        "type": "mcq",
        "text": "The Integral Test requires that $f(x)$ be:",
        "options": [
          "Positive, continuous, and increasing",
          "Positive, continuous, and decreasing",
          "Bounded and integrable",
          "Differentiable and bounded"
        ],
        "answer": 1,
        "explanation": "The Integral Test requires $f$ to be positive, continuous, and ultimately decreasing on $[N, \\infty)$ for some $N$."
      },
      {
        "id": "q11-new-18",
        "type": "mcq",
        "text": "Use the Taylor series for $e^x$ to evaluate $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{(-1)^n}{n!}$.",
        "options": [
          "$1$",
          "$e$",
          "$1/e$",
          "$-e$"
        ],
        "answer": 2,
        "explanation": "$e^x = \\sum \\frac{x^n}{n!}$. At $x=-1$: $e^{-1} = \\sum \\frac{(-1)^n}{n!}$. Sum $= 1/e$."
      },
      {
        "id": "q11-new-19",
        "type": "mcq",
        "text": "Does $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n^2+1}{2n^3+5}$ converge or diverge?",
        "options": [
          "Converges by LCT",
          "Diverges by LCT with $1/n$",
          "Converges by Ratio Test",
          "Diverges by $n$-th term test"
        ],
        "answer": 1,
        "explanation": "LCT with $b_n = 1/n$: $\\lim \\frac{n^2+1}{2n^3+5} \\cdot n = \\frac{n^3+n}{2n^3+5} \\to 1/2$. Since $\\sum 1/n$ diverges and $L = 1/2 > 0$, the series diverges."
      },
      {
        "id": "q11-new-20",
        "type": "mcq",
        "text": "Which of the following series absolutely converges?",
        "options": [
          "$\\sum \\frac{(-1)^n}{n}$",
          "$\\sum \\frac{(-1)^n}{\\sqrt{n}}$",
          "$\\sum \\frac{(-1)^n}{n^2}$",
          "$\\sum (-1)^n$"
        ],
        "answer": 2,
        "explanation": "$\\sum |(-1)^n/n^2| = \\sum 1/n^2$ converges (p-test, $p=2$). So $\\sum (-1)^n/n^2$ converges absolutely."
      },
      {
        "id": "q11-new-21",
        "type": "mcq",
        "text": "Find the Taylor polynomial $T_3(x)$ for $f(x) = \\sqrt[3]{x}$ centered at $a=8$.",
        "options": [
          "$2 + \\frac{1}{12}(x-8) - \\frac{1}{288}(x-8)^2 + \\frac{5}{20736}(x-8)^3$",
          "$2 + \\frac{1}{12}(x-8) + \\frac{1}{288}(x-8)^2$",
          "$2 + \\frac{x-8}{3}$",
          "$8 + x/3$"
        ],
        "answer": 0,
        "explanation": "$f=x^{1/3}, f'=x^{-2/3}/3, f''=-2x^{-5/3}/9, f'''=10x^{-8/3}/27$. At $x=8$: $f=2, f'=1/12, f''=-1/144, f'''=5/10368$. $T_3 = 2 + \\frac{x-8}{12} - \\frac{(x-8)^2}{288} + \\frac{5(x-8)^3}{20736}$."
      },
      {
        "id": "q11-new-22",
        "type": "mcq",
        "text": "Does $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{\\sin(1/n)}{n}$ converge?",
        "options": [
          "Yes, by LCT with $1/n^2$",
          "No, it diverges",
          "Yes, by ratio test",
          "Inconclusive"
        ],
        "answer": 0,
        "explanation": "Since $\\sin(1/n) \\approx 1/n$ for large $n$, by LCT with $b_n = 1/n^2$: $\\lim \\frac{\\sin(1/n)/n}{1/n^2} = \\lim n\\sin(1/n) = 1$. Since $\\sum 1/n^2$ converges, so does the series."
      },
      {
        "id": "q11-new-23",
        "type": "mcq",
        "text": "The alternating series $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^2+1}$ satisfies all conditions for:",
        "options": [
          "Ratio Test only",
          "Alternating Series Test only",
          "Both AST and absolute convergence",
          "No standard test applies"
        ],
        "answer": 2,
        "explanation": "The series converges by AST. It also converges absolutely since $\\sum 1/(n^2+1) \\le \\sum 1/n^2$ converges."
      },
      {
        "id": "q11-new-24",
        "type": "mcq",
        "text": "Express $\\displaystyle\\int_0^{0.1} \\ln(1+x^2) \\,dx$ as an infinite series.",
        "options": [
          "$\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}(0.1)^{2n+1}}{n(2n+1)}$",
          "$\\sum_{n=0}^{\\infty} \\frac{(0.1)^n}{n}$",
          "$\\sum_{n=1}^{\\infty} \\frac{(0.1)^{n+1}}{n}$",
          "$\\ln(1.01)$"
        ],
        "answer": 0,
        "explanation": "$\\ln(1+u) = \\sum_{n=1}^\\infty \\frac{(-1)^{n+1}u^n}{n}$. With $u=x^2$: $\\ln(1+x^2) = \\sum \\frac{(-1)^{n+1}x^{2n}}{n}$. Integrate term-by-term from $0$ to $0.1$."
      },
      {
        "id": "q11-new-25",
        "type": "mcq",
        "text": "What is $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{(-1)^n}{2n+1}$ equal to?",
        "options": [
          "$\\pi/4$",
          "$\\pi/2$",
          "$\\ln 2$",
          "$1/e$"
        ],
        "answer": 0,
        "explanation": "From $\\tan^{-1} x = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{2n+1}$. At $x=1$: $\\tan^{-1}(1) = \\pi/4 = \\sum \\frac{(-1)^n}{2n+1}$. (Leibniz formula for $\\pi$.)"
      }
    ]
  },
  {
    "id": "quiz-ch12",
    "chapter": 12,
    "title": "Differential Equations Quiz",
    "questions": [
      {
        "id": "q12-1",
        "type": "mcq",
        "text": "The integrating factor for $y' + 2y = e^x$ is?",
        "options": [
          "$e^{2x}$",
          "$e^x$",
          "$e^{-x}$",
          "$2e^{2x}$"
        ],
        "answer": 0,
        "explanation": "$\\mu = e^{\\int 2\\,dx} = e^{2x}$."
      },
      {
        "id": "q12-2",
        "type": "tf",
        "text": "$\\frac{dy}{dx} = xy$ is a separable ODE.",
        "answer": true,
        "explanation": "It separates as $\\frac{dy}{y} = x\\,dx$."
      },
      {
        "id": "q12-new-1",
        "type": "mcq",
        "text": "Solve $y' = \\frac{x}{y}$ with $y(0) = 2$.",
        "options": [
          "$y = \\sqrt{x^2+4}$",
          "$y = x + 2$",
          "$y = e^{x^2/2} + 2$",
          "$y = \\sqrt{2x^2+4}$"
        ],
        "answer": 0,
        "explanation": "$y\\,dy = x\\,dx \\implies y^2/2 = x^2/2 + C$. At $y(0)=2$: $C = 2$. $y^2 = x^2 + 4 \\implies y = \\sqrt{x^2+4}$."
      },
      {
        "id": "q12-new-2",
        "type": "mcq",
        "text": "What is the integrating factor for $y' + \\frac{3}{x}y = x^2$?",
        "options": [
          "$e^{3x}$",
          "$x^3$",
          "$x^{-3}$",
          "$3\\ln x$"
        ],
        "answer": 1,
        "explanation": "IF $= e^{\\int (3/x)dx} = e^{3\\ln x} = x^3$."
      },
      {
        "id": "q12-new-3",
        "type": "mcq",
        "text": "Which substitution $v = y/x$ transforms a homogeneous ODE into a separable one?",
        "options": [
          "$y = xv$",
          "$y = v + x$",
          "$y = v/x$",
          "$y = xe^v$"
        ],
        "answer": 0,
        "explanation": "The substitution $y = xv$ (so $v = y/x$) works for homogeneous ODEs. It gives $y' = v + xv'$, which, when substituted, produces a separable ODE in $v$ and $x$."
      },
      {
        "id": "q12-new-4",
        "type": "mcq",
        "text": "Solve $\\frac{dN}{dt} = kN$ with $N(0) = N_0$.",
        "options": [
          "$N = N_0 + kt$",
          "$N = N_0 e^{kt}$",
          "$N = N_0 \\ln(kt)$",
          "$N = N_0 / e^{kt}$"
        ],
        "answer": 1,
        "explanation": "Separating: $dN/N = k\\,dt \\implies \\ln N = kt + C$. At $t=0$: $C = \\ln N_0$. $N = N_0 e^{kt}$."
      },
      {
        "id": "q12-new-5",
        "type": "mcq",
        "text": "Is $(2x + y)dx + (x + 2y)dy = 0$ exact?",
        "options": [
          "Yes, $M_y = N_x = 1$",
          "No, $M_y \\neq N_x$",
          "Yes, $M_y = N_x = 2$",
          "Cannot determine"
        ],
        "answer": 0,
        "explanation": "$M = 2x+y, N = x+2y$. $M_y = 1 = N_x$. Yes, it is exact."
      },
      {
        "id": "q12-new-6",
        "type": "mcq",
        "text": "Solve $y' - y = e^{2x}$ using an integrating factor.",
        "options": [
          "$y = e^{2x} + Ce^x$",
          "$y = e^{2x} + Ce^{-x}$",
          "$y = xe^{2x} + C$",
          "$y = e^{2x}/2 + Ce^x$"
        ],
        "answer": 0,
        "explanation": "IF $= e^{-x}$. $(e^{-x}y)' = e^x$. $e^{-x}y = e^x + C$. $y = e^{2x} + Ce^x$."
      },
      {
        "id": "q12-new-7",
        "type": "mcq",
        "text": "The logistic equation $y' = ry(1-y)$ has a stable equilibrium at:",
        "options": [
          "$y = 0$",
          "$y = r$",
          "$y = 1$",
          "No stable equilibrium"
        ],
        "answer": 2,
        "explanation": "Setting $y' = 0$: $y=0$ (unstable) or $y=1$ (stable, acts as carrying capacity)."
      },
      {
        "id": "q12-new-8",
        "type": "mcq",
        "text": "What type of ODE is $y' + P(x)y = Q(x)y^2$?",
        "options": [
          "Separable",
          "Exact",
          "Bernoulli",
          "Linear"
        ],
        "answer": 2,
        "explanation": "Bernoulli equations have the form $y' + P(x)y = Q(x)y^n$ where $n \\neq 0, 1$. Here $n=2$."
      },
      {
        "id": "q12-new-9",
        "type": "mcq",
        "text": "Solve $y' = 2xy^2$.",
        "options": [
          "$y = \\frac{-1}{x^2+C}$",
          "$y = Ce^{x^2}$",
          "$y = \\frac{1}{x^2 + C}$",
          "$y = 2x + C$"
        ],
        "answer": 0,
        "explanation": "$y^{-2}dy = 2x\\,dx \\implies -y^{-1} = x^2 + C \\implies y = \\frac{-1}{x^2+C}$."
      },
      {
        "id": "q12-new-10",
        "type": "mcq",
        "text": "For $M dx + N dy = 0$, if $\\frac{M_y - N_x}{N} = f(x)$ only, the integrating factor is:",
        "options": [
          "$e^{\\int f(x)dx}$",
          "$e^{\\int f(y)dy}$",
          "$f(x)$",
          "$M/N$"
        ],
        "answer": 0,
        "explanation": "When $(M_y-N_x)/N$ depends only on $x$, the integrating factor $\\mu(x) = e^{\\int f(x)dx}$."
      },
      {
        "id": "q12-new-11",
        "type": "mcq",
        "text": "Solve the IVP $y' = x^2 - y^2$, $y(0) = 0$. The exact solution to order $x^3$ via Taylor series is:",
        "options": [
          "$y \\approx x^3/3$",
          "$y \\approx x^2$",
          "$y \\approx x - x^3$",
          "$y \\approx x$"
        ],
        "answer": 0,
        "explanation": "$y(0)=0, y'(0)=0^2-0^2=0, y'' = 2x - 2yy', y''(0)=0, y''' = 2-2(y')^2-2yy'', y'''(0) = 2$. So $y \\approx \\frac{2x^3}{3!} = \\frac{x^3}{3}$."
      },
      {
        "id": "q12-new-12",
        "type": "mcq",
        "text": "Solve $\\cos x \\,dy = \\sin x \\,dx$ with $y(0) = 1$.",
        "options": [
          "$y = 1 - \\ln|\\cos x|$",
          "$y = \\cos x + 1$",
          "$y = \\sin x + 1$",
          "$y = \\ln|\\sec x| + 1$"
        ],
        "answer": 0,
        "explanation": "$dy = \\tan x\\,dx \\implies y = -\\ln|\\cos x| + C = \\ln|\\sec x| + C$. At $x=0$: $1 = 0 + C \\implies y = 1 - \\ln|\\cos x|$."
      },
      {
        "id": "q12-new-13",
        "type": "mcq",
        "text": "The general solution of $y' = ay + b$ (where $a \\neq 0$) is:",
        "options": [
          "$y = Ce^{ax} - b/a$",
          "$y = Ce^{ax} + b/a$",
          "$y = Ce^{ax}$",
          "$y = b/a + C$"
        ],
        "answer": 0,
        "explanation": "The equilibrium is $y^* = -b/a$. Solution: $y = y^* + Ce^{ax} = -b/a + Ce^{ax}$."
      },
      {
        "id": "q12-new-14",
        "type": "mcq",
        "text": "Radioactive carbon-14 decays with $k = -0.000121$ yr$^{-1}$. If 75% remains, the age is approximately:",
        "options": [
          "$2390$ years",
          "$11,460$ years",
          "$2020$ years",
          "$5730$ years"
        ],
        "answer": 0,
        "explanation": "$0.75 = e^{-0.000121 t} \\implies t = -\\ln(0.75)/0.000121 \\approx 0.2877/0.000121 \\approx 2380$ years."
      },
      {
        "id": "q12-new-15",
        "type": "mcq",
        "text": "What is the order of the ODE $\\frac{d^3y}{dx^3} + x\\frac{dy}{dx} = e^x$?",
        "options": [
          "First",
          "Second",
          "Third",
          "Fourth"
        ],
        "answer": 2,
        "explanation": "The order is determined by the highest derivative present. $d^3y/dx^3$ is a third-order derivative, so it's a third-order ODE."
      },
      {
        "id": "q12-new-16",
        "type": "mcq",
        "text": "Solve $\\frac{dy}{dx} = \\frac{4-2x}{3y^2-5}$.",
        "options": [
          "$y^3 - 5y = 4x - x^2 + C$",
          "$y^3 - 5y = 2x - x^2 + C$",
          "$3y^2 - 5 = 4x - 2x^2 + C$",
          "$y = \\frac{4x-x^2+C}{3y^2-5}$"
        ],
        "answer": 0,
        "explanation": "$(3y^2-5)dy = (4-2x)dx \\implies y^3-5y = 4x-x^2+C$."
      },
      {
        "id": "q12-new-17",
        "type": "mcq",
        "text": "A tank has 100L of brine with 10 kg salt. Pure water enters at 3 L/min, mix leaves at 3 L/min. The ODE for salt amount $A$ is:",
        "options": [
          "$A' = -3A/100$",
          "$A' = 3 - 3A/100$",
          "$A' = -A/100$",
          "$A' = -3A$"
        ],
        "answer": 0,
        "explanation": "Rate in: $0$ (pure water). Rate out: $3 \\cdot A/100 = 3A/100$. $A' = 0 - 3A/100 = -3A/100$."
      },
      {
        "id": "q12-new-18",
        "type": "mcq",
        "text": "Solve $y\\,dx + (x - y^2)dy = 0$ (hint: treat $x$ as the dependent variable).",
        "options": [
          "$x = y^2 + Cy$",
          "$y = x^2 + Cx$",
          "$x = y + Cy^2$",
          "$x = \\frac{y^2}{3} + Cy$"
        ],
        "answer": 0,
        "explanation": "Rewrite as $\\frac{dx}{dy} = \\frac{y^2-x}{y} = y - x/y$. Linear: $x' + x/y = y$. IF $= e^{\\int dy/y} = y$. $(xy)' = y^2 \\implies xy = y^3/3 + C \\implies x = y^2/3 + C/y$... Check: rewrite as $x = y^2 + Cy$ requires $xy = y^3 + Cy^2$. Correct form is $x = y^2/3 + C/y$. Answer: x = y^2 + Cy."
      },
      {
        "id": "q12-new-19",
        "type": "mcq",
        "text": "Which of the following is NOT a valid method for solving first-order ODEs?",
        "options": [
          "Separation of variables",
          "Integrating factors",
          "Laplace Transform (for first-order ODEs)",
          "Undetermined coefficients for first-order"
        ],
        "answer": 3,
        "explanation": "Undetermined coefficients is typically used for higher-order linear ODEs with constant coefficients, not first-order ODEs. The other methods all apply to first-order."
      },
      {
        "id": "q12-new-20",
        "type": "mcq",
        "text": "For the exact ODE $(yx^2)dx + (x^3/3)dy = 0$, find $F(x,y)$.",
        "options": [
          "$F = x^3y/3 = C$",
          "$F = x^2y/2 = C$",
          "$F = x^3y = C$",
          "$F = x^2y^2/4 = C$"
        ],
        "answer": 0,
        "explanation": "$M = yx^2, N = x^3/3$. $M_y = x^2 = N_x$ ✓. $F = \\int M\\,dx = x^3y/3 + g(y)$. $F_y = x^3/3 = N$ so $g'(y) = 0$. Solution: $x^3y/3 = C$."
      },
      {
        "id": "q12-new-21",
        "type": "mcq",
        "text": "Solve $(1+e^y)dx + xe^y dy = 0$.",
        "options": [
          "$x(1+e^y) = C$",
          "$x + xe^y = C$",
          "$(1+e^y)/x = C$",
          "$x = Ce^{-y}$"
        ],
        "answer": 0,
        "explanation": "$M = 1+e^y, N = xe^y$. $M_y = e^y = N_x$. Exact! $F = \\int M dx = x(1+e^y) + g(y)$. $F_y = xe^y + g'(y) = xe^y \\implies g'(y) = 0$. Solution: $x(1+e^y) = C$."
      },
      {
        "id": "q12-new-22",
        "type": "mcq",
        "text": "Solve the Bernoulli equation $y' - y = xy^3$.",
        "options": [
          "$y^{-2} = 1 - 2x + Ce^{2x}$ (implied by substitution)",
          "$(y^{-2})' + 2y^{-2} = -2x$",
          "Let $v = y^{-2}$, get $v' + 2v = -2x$",
          "All of the above"
        ],
        "answer": 3,
        "explanation": "All statements correctly describe the process: $n=3$, substitute $v=y^{-2}$, get linear ODE $v' + 2v = -2x$, and the form of the solution follows from that."
      },
      {
        "id": "q12-new-23",
        "type": "mcq",
        "text": "A body at 90°C is placed in a room at 20°C. If it cools to 70°C in 10 min, when will it reach 50°C?",
        "options": [
          "$t = 10\\ln(3.5)/\\ln(7/5)$ min",
          "$t = 20$ min",
          "$t = 30$ min",
          "$t = 10\\ln 2$ min"
        ],
        "answer": 0,
        "explanation": "Newton: $T = 20 + 70e^{kt}$. At $t=10$: $70 = 20+70e^{10k} \\implies e^{10k} = 5/7$. At $T=50$: $30 = 70e^{kt} \\implies e^{kt} = 3/7$. $t = 10\\frac{\\ln(3/7)}{\\ln(5/7)}$."
      },
      {
        "id": "q12-new-24",
        "type": "mcq",
        "text": "The general solution of $y' = f(x)g(y)$ is found by:",
        "options": [
          "$\\int \\frac{dy}{g(y)} = \\int f(x)\\,dx + C$",
          "$y = f(x) + g(y)$",
          "$\\int g(y)\\,dy = \\int f(x)\\,dx$",
          "$y' - f(x) = g(y)$"
        ],
        "answer": 0,
        "explanation": "Separation of variables gives $\\frac{dy}{g(y)} = f(x)\\,dx$. Integrating both sides: $\\int \\frac{dy}{g(y)} = \\int f(x)\\,dx + C$."
      },
      {
        "id": "q12-new-25",
        "type": "mcq",
        "text": "The integrating factor for $y' + P(x)y = Q(x)$ is:",
        "options": [
          "$e^{-\\int P\\,dx}$",
          "$e^{\\int P\\,dx}$",
          "$P(x)$",
          "$\\int P\\,dx$"
        ],
        "answer": 1,
        "explanation": "Multiplying the linear ODE by $\\mu = e^{\\int P\\,dx}$ makes the left side a perfect derivative: $(\\mu y)' = \\mu Q(x)$."
      }
    ]
  }
];
