const formulasData = [
  {
    "id": "int-01",
    "chapter": 8,
    "category": "Integration - Power Rule",
    "name": "Constant rule",
    "latex": "\\int a\\,dx = ax + C",
    "use": "Integrating a constant",
    "variables": "$a \\in \\mathbb{R}$",
    "mistakes": "Forgetting $+ C$"
  },
  {
    "id": "int-02",
    "chapter": 8,
    "category": "Integration - Power Rule",
    "name": "Power rule",
    "latex": "\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1} + C",
    "use": "Any polynomial term, $n \\neq -1$",
    "variables": "$n \\neq -1$",
    "mistakes": "Using when $n = -1$; that gives $\\ln|x|$"
  },
  {
    "id": "int-03",
    "chapter": 8,
    "category": "Integration - Power Rule",
    "name": "Linear composition power rule",
    "latex": "\\int (ax+b)^n\\,dx = \\dfrac{(ax+b)^{n+1}}{a(n+1)} + C",
    "use": "Power of a linear expression, n ≠ −1",
    "variables": "n \\neq -1,\\; a \\neq 0",
    "mistakes": "Forgetting to divide by a"
  },
  {
    "id": "int-04",
    "chapter": 8,
    "category": "Integration - Rational Functions",
    "name": "Reciprocal rule",
    "latex": "\\int \\dfrac{1}{x}\\,dx = \\ln|x| + C",
    "use": "1/x integrand",
    "variables": "x \\neq 0",
    "mistakes": "Dropping the absolute value"
  },
  {
    "id": "int-05",
    "chapter": 8,
    "category": "Integration - Rational Functions",
    "name": "Reciprocal of linear",
    "latex": "\\int \\dfrac{1}{ax+b}\\,dx = \\dfrac{1}{a}\\ln|ax+b| + C",
    "use": "1/(ax+b) integrand",
    "variables": "a \\neq 0",
    "mistakes": "Forgetting the 1/a factor"
  },
  {
    "id": "int-06",
    "chapter": 8,
    "category": "Integration - Exponential",
    "name": "e^x rule",
    "latex": "\\int e^x\\,dx = e^x + C",
    "use": "Standard exponential",
    "variables": "",
    "mistakes": "None - the simplest integral"
  },
  {
    "id": "int-07",
    "chapter": 8,
    "category": "Integration - Exponential",
    "name": "e^(ax+b) rule",
    "latex": "\\int e^{ax+b}\\,dx = \\dfrac{1}{a}e^{ax+b} + C",
    "use": "Exponential with linear exponent",
    "variables": "a \\neq 0",
    "mistakes": "Forgetting the 1/a factor"
  },
  {
    "id": "int-08",
    "chapter": 8,
    "category": "Integration - Exponential",
    "name": "General base exponential",
    "latex": "\\int a^{bx+d}\\,dx = \\dfrac{a^{bx+d}}{b\\ln a} + C",
    "use": "Exponential with base a ≠ e",
    "variables": "a > 0,\\; a \\neq 1,\\; b \\neq 0",
    "mistakes": "Forgetting ln a in denominator"
  },
  {
    "id": "int-09",
    "chapter": 9,
    "category": "Integration - Trig Functions",
    "name": "sin x",
    "latex": "\\int \\sin x\\,dx = -\\cos x + C",
    "use": "Basic sine integral",
    "variables": "",
    "mistakes": "Sign error - result is negative cos"
  },
  {
    "id": "int-10",
    "chapter": 9,
    "category": "Integration - Trig Functions",
    "name": "sin(ax+b)",
    "latex": "\\int \\sin(ax+b)\\,dx = -\\dfrac{\\cos(ax+b)}{a} + C",
    "use": "Sine with linear argument",
    "variables": "a \\neq 0",
    "mistakes": "Forgetting 1/a and the minus sign"
  },
  {
    "id": "int-11",
    "chapter": 9,
    "category": "Integration - Trig Functions",
    "name": "cos x",
    "latex": "\\int \\cos x\\,dx = \\sin x + C",
    "use": "Basic cosine integral",
    "variables": "",
    "mistakes": "None - positive result"
  },
  {
    "id": "int-12",
    "chapter": 9,
    "category": "Integration - Trig Functions",
    "name": "cos(ax+b)",
    "latex": "\\int \\cos(ax+b)\\,dx = \\dfrac{\\sin(ax+b)}{a} + C",
    "use": "Cosine with linear argument",
    "variables": "a \\neq 0",
    "mistakes": "Forgetting 1/a"
  },
  {
    "id": "int-13",
    "chapter": 9,
    "category": "Integration - Trig Functions",
    "name": "tan x",
    "latex": "\\int \\tan x\\,dx = \\ln|\\sec x| + C = -\\ln|\\cos x| + C",
    "use": "Tangent integral",
    "variables": "",
    "mistakes": "Both forms equivalent; note signs"
  },
  {
    "id": "int-14",
    "chapter": 9,
    "category": "Integration - Trig Functions",
    "name": "cot x",
    "latex": "\\int \\cot x\\,dx = \\ln|\\sin x| + C = -\\ln|\\csc x| + C",
    "use": "Cotangent integral",
    "variables": "",
    "mistakes": "Both forms equivalent"
  },
  {
    "id": "int-15",
    "chapter": 9,
    "category": "Integration - Trig Functions",
    "name": "sec x",
    "latex": "\\int \\sec x\\,dx = \\ln|\\sec x + \\tan x| + C",
    "use": "Secant integral",
    "variables": "",
    "mistakes": "Must be memorised"
  },
  {
    "id": "int-16",
    "chapter": 9,
    "category": "Integration - Trig Functions",
    "name": "csc x",
    "latex": "\\int \\csc x\\,dx = \\ln|\\csc x - \\cot x| + C",
    "use": "Cosecant integral",
    "variables": "",
    "mistakes": "Note minus sign inside absolute value"
  },
  {
    "id": "int-17",
    "chapter": 9,
    "category": "Integration - Trig Functions",
    "name": "sec x tan x",
    "latex": "\\int \\sec x\\tan x\\,dx = \\sec x + C",
    "use": "Recognise as derivative of sec x",
    "variables": "",
    "mistakes": "Confusing with integral of tan x"
  },
  {
    "id": "int-18",
    "chapter": 9,
    "category": "Integration - Trig Functions",
    "name": "csc x cot x",
    "latex": "\\int \\csc x\\cot x\\,dx = -\\csc x + C",
    "use": "Recognise as derivative of -csc x",
    "variables": "",
    "mistakes": "Sign error - result is negative csc"
  },
  {
    "id": "ibp-01",
    "chapter": 9,
    "category": "Integration by Parts",
    "name": "IBP formula",
    "latex": "\\int u\\,dv = uv - \\int v\\,du",
    "use": "Products of functions - use LIATE to choose u",
    "variables": "LIATE: Log, Inverse trig, Algebraic, Trig, Exponential",
    "mistakes": "Wrong choice of u leads to harder integral"
  },
  {
    "id": "ibp-02",
    "chapter": 9,
    "category": "Integration by Parts",
    "name": "IBP - three factors",
    "latex": "\\int u\\,v\\,dw = uvw - \\int vw\\,du - \\int uw\\,dv",
    "use": "Triple product integration by parts",
    "variables": "",
    "mistakes": "Account for all three cross terms"
  },
  {
    "id": "ibp-03",
    "chapter": 9,
    "category": "Integration by Parts - Related",
    "name": "eᵃˣ sin(bx)",
    "latex": "\\int e^{ax}\\sin(bx)\\,dx = \\dfrac{e^{ax}}{a^2+b^2}\\bigl[a\\sin bx - b\\cos bx\\bigr] + C",
    "use": "IBP twice - exponential times sine",
    "variables": "a^2 + b^2 \\neq 0",
    "mistakes": "Forgetting to divide by a²+b²"
  },
  {
    "id": "ibp-04",
    "chapter": 9,
    "category": "Integration by Parts - Related",
    "name": "eᵃˣ cos(bx)",
    "latex": "\\int e^{ax}\\cos(bx)\\,dx = \\dfrac{e^{ax}}{a^2+b^2}\\bigl[a\\cos bx + b\\sin bx\\bigr] + C",
    "use": "IBP twice - exponential times cosine",
    "variables": "a^2 + b^2 \\neq 0",
    "mistakes": "Sine version has minus; cosine version has plus"
  },
  {
    "id": "ibp-05",
    "chapter": 9,
    "category": "Integration by Parts - Related",
    "name": "xⁿ ln x",
    "latex": "\\int x^n \\ln x\\,dx = \\dfrac{x^{n+1}}{n+1}\\ln x - \\dfrac{x^{n+1}}{(n+1)^2} + C",
    "use": "Polynomial times log - set u = ln x",
    "variables": "n \\neq -1",
    "mistakes": "Denominator of 2nd term is (n+1)², not n+1"
  },
  {
    "id": "ibp-06",
    "chapter": 9,
    "category": "Integration by Parts - Related",
    "name": "xⁿ eᵃˣ reduction",
    "latex": "\\int x^n e^{ax}\\,dx = \\dfrac{x^n e^{ax}}{a} - \\dfrac{n}{a}\\int x^{n-1}e^{ax}\\,dx",
    "use": "Reduction formula - polynomial times exponential",
    "variables": "n \\in \\mathbb{Z}^+,\\; a \\neq 0",
    "mistakes": "Apply repeatedly until exponent reaches 0"
  },
  {
    "id": "tsub-01",
    "chapter": 9,
    "category": "Trig Substitution",
    "name": "Form √(a²−u²)",
    "latex": "\\int \\sqrt{a^2-u^2}\\,du = \\dfrac{u}{2}\\sqrt{a^2-u^2}+\\dfrac{a^2}{2}\\sin^{-1}\\!\\left(\\tfrac{u}{a}\\right)+C",
    "use": "Integrand contains √(a²−u²)",
    "variables": "u=a\\sin\\theta,\\;du=a\\cos\\theta\\,d\\theta",
    "mistakes": "Not converting dx and limits"
  },
  {
    "id": "tsub-02",
    "chapter": 9,
    "category": "Trig Substitution",
    "name": "Form √(a²+u²)",
    "latex": "\\int \\sqrt{a^2+u^2}\\,du = \\dfrac{u}{2}\\sqrt{u^2+a^2}+\\dfrac{a^2}{2}\\ln\\!\\left|u+\\sqrt{u^2+a^2}\\right|+C",
    "use": "Integrand contains √(a²+u²)",
    "variables": "u=a\\tan\\theta,\\;du=a\\sec^2\\theta\\,d\\theta",
    "mistakes": "Confusing with √(a²−u²) form"
  },
  {
    "id": "tsub-03",
    "chapter": 9,
    "category": "Trig Substitution",
    "name": "Form √(u²−a²)",
    "latex": "\\int \\sqrt{u^2-a^2}\\,du = \\dfrac{u}{2}\\sqrt{u^2-a^2}-\\dfrac{a^2}{2}\\ln\\!\\left|u+\\sqrt{u^2-a^2}\\right|+C",
    "use": "Integrand contains √(u²−a²)",
    "variables": "u=a\\sec\\theta,\\;du=a\\sec\\theta\\tan\\theta\\,d\\theta",
    "mistakes": "Note the minus sign before the ln term"
  },
  {
    "id": "red-01",
    "chapter": 9,
    "category": "Reduction Formulas",
    "name": "sin²x",
    "latex": "\\int \\sin^2 x\\,dx = \\dfrac{x}{2} - \\dfrac{\\sin 2x}{4} + C",
    "use": "Even power of sine - half-angle identity",
    "variables": "",
    "mistakes": "Coefficient is 1/4 on sin 2x"
  },
  {
    "id": "red-02",
    "chapter": 9,
    "category": "Reduction Formulas",
    "name": "cos²x",
    "latex": "\\int \\cos^2 x\\,dx = \\dfrac{x}{2} + \\dfrac{\\sin 2x}{4} + C",
    "use": "Even power of cosine - half-angle identity",
    "variables": "",
    "mistakes": "Plus sign (opposite of sin²x)"
  },
  {
    "id": "red-03",
    "chapter": 9,
    "category": "Reduction Formulas",
    "name": "tan²x",
    "latex": "\\int \\tan^2 x\\,dx = \\tan x - x + C",
    "use": "Use tan²x = sec²x − 1",
    "variables": "",
    "mistakes": "Remember ∯sec²x = tan x"
  },
  {
    "id": "red-04",
    "chapter": 9,
    "category": "Reduction Formulas",
    "name": "cot²x",
    "latex": "\\int \\cot^2 x\\,dx = -\\cot x - x + C",
    "use": "Use cot²x = csc²x − 1",
    "variables": "",
    "mistakes": "Both terms negative"
  },
  {
    "id": "red-05",
    "chapter": 9,
    "category": "Reduction Formulas",
    "name": "sinⁿx reduction",
    "latex": "\\int \\sin^n x\\,dx = -\\dfrac{\\sin^{n-1}x\\cos x}{n} + \\dfrac{n-1}{n}\\int \\sin^{n-2}x\\,dx",
    "use": "High power of sine - apply repeatedly",
    "variables": "n \\geq 2",
    "mistakes": "Coefficient (n−1)/n on remaining integral"
  },
  {
    "id": "red-06",
    "chapter": 9,
    "category": "Reduction Formulas",
    "name": "cosⁿx reduction",
    "latex": "\\int \\cos^n x\\,dx = \\dfrac{\\cos^{n-1}x\\sin x}{n} + \\dfrac{n-1}{n}\\int \\cos^{n-2}x\\,dx",
    "use": "High power of cosine - apply repeatedly",
    "variables": "n \\geq 2",
    "mistakes": "Leading term positive (opposite sign from sinⁿ)"
  },
  {
    "id": "red-07",
    "chapter": 9,
    "category": "Reduction Formulas",
    "name": "tanⁿx reduction",
    "latex": "\\int \\tan^n x\\,dx = \\dfrac{\\tan^{n-1}x}{n-1} - \\int \\tan^{n-2}x\\,dx,\\quad n\\neq 1",
    "use": "High power of tan",
    "variables": "n \\neq 1",
    "mistakes": "Remaining integral has minus sign"
  },
  {
    "id": "red-08",
    "chapter": 9,
    "category": "Reduction Formulas",
    "name": "cotⁿx reduction",
    "latex": "\\int \\cot^n x\\,dx = -\\dfrac{\\cot^{n-1}x}{n-1} - \\int \\cot^{n-2}x\\,dx,\\quad n\\neq 1",
    "use": "High power of cot",
    "variables": "n \\neq 1",
    "mistakes": "Both terms negative"
  },
  {
    "id": "red-09",
    "chapter": 9,
    "category": "Reduction Formulas",
    "name": "secⁿx reduction",
    "latex": "\\int \\sec^n x\\,dx = \\dfrac{\\sec^{n-2}x\\tan x}{n-1} + \\dfrac{n-2}{n-1}\\int \\sec^{n-2}x\\,dx,\\quad n\\neq 1",
    "use": "High power of sec",
    "variables": "n \\neq 1",
    "mistakes": "Coefficients 1/(n−1) and (n−2)/(n−1)"
  },
  {
    "id": "red-10",
    "chapter": 9,
    "category": "Reduction Formulas",
    "name": "cscⁿx reduction",
    "latex": "\\int \\csc^n x\\,dx = -\\dfrac{\\csc^{n-2}x\\cot x}{n-1} + \\dfrac{n-2}{n-1}\\int \\csc^{n-2}x\\,dx,\\quad n\\neq 1",
    "use": "High power of csc",
    "variables": "n \\neq 1",
    "mistakes": "Leading term negative; mirrors sec reduction otherwise"
  },
  {
    "id": "invt-01",
    "chapter": 9,
    "category": "Inverse Trig Integrals",
    "name": "1/(a²+u²)",
    "latex": "\\int \\dfrac{du}{a^2+u^2} = \\dfrac{1}{a}\\tan^{-1}\\!\\left(\\tfrac{u}{a}\\right) + C",
    "use": "Sum of squares in denominator",
    "variables": "a > 0",
    "mistakes": "Forgetting the 1/a out front"
  },
  {
    "id": "invt-02",
    "chapter": 9,
    "category": "Inverse Trig Integrals",
    "name": "1/√(a²−u²)",
    "latex": "\\int \\dfrac{du}{\\sqrt{a^2-u^2}} = \\sin^{-1}\\!\\left(\\tfrac{u}{a}\\right) + C",
    "use": "√(a²−u²) in denominator",
    "variables": "|u| < a",
    "mistakes": "No 1/a factor here (unlike arctan)"
  },
  {
    "id": "invt-03",
    "chapter": 9,
    "category": "Inverse Trig Integrals",
    "name": "1/(u√(u²−a²))",
    "latex": "\\int \\dfrac{du}{u\\sqrt{u^2-a^2}} = \\dfrac{1}{a}\\sec^{-1}\\!\\left(\\tfrac{u}{a}\\right) + C",
    "use": "u × √(u²−a²) in denominator",
    "variables": "|u| > a > 0",
    "mistakes": "Check the 1/a factor"
  },
  {
    "id": "invt-10",
    "chapter": 9,
    "category": "Inverse Trig Antiderivatives",
    "name": "arcsin",
    "latex": "\\int \\sin^{-1}u\\,du = u\\sin^{-1}u + \\sqrt{1-u^2} + C",
    "use": "Antiderivative of arcsin",
    "variables": "|u| \\leq 1",
    "mistakes": "The √(1−u²) term is easy to forget"
  },
  {
    "id": "invt-11",
    "chapter": 9,
    "category": "Inverse Trig Antiderivatives",
    "name": "arccos",
    "latex": "\\int \\cos^{-1}u\\,du = u\\cos^{-1}u - \\sqrt{1-u^2} + C",
    "use": "Antiderivative of arccos",
    "variables": "|u| \\leq 1",
    "mistakes": "Sign difference from arcsin: minus √(1−u²)"
  },
  {
    "id": "invt-12",
    "chapter": 9,
    "category": "Inverse Trig Antiderivatives",
    "name": "arctan",
    "latex": "\\int \\tan^{-1}u\\,du = u\\tan^{-1}u - \\ln\\sqrt{1+u^2} + C",
    "use": "Antiderivative of arctan",
    "variables": "",
    "mistakes": "Logarithm of square root, not of 1+u²"
  },
  {
    "id": "invt-13",
    "chapter": 9,
    "category": "Inverse Trig Antiderivatives",
    "name": "arccot",
    "latex": "\\int \\cot^{-1}u\\,du = u\\cot^{-1}u + \\ln\\sqrt{1+u^2} + C",
    "use": "Antiderivative of arccot",
    "variables": "",
    "mistakes": "Sign is positive (opposite to arctan)"
  },
  {
    "id": "invt-14",
    "chapter": 9,
    "category": "Inverse Trig Antiderivatives",
    "name": "arcsec",
    "latex": "\\int \\sec^{-1}u\\,du = u\\sec^{-1}u - \\ln\\left|u+\\sqrt{u^2-1}\\right| + C",
    "use": "Antiderivative of arcsec",
    "variables": "|u| > 1",
    "mistakes": "Absolute value required inside log"
  },
  {
    "id": "invt-15",
    "chapter": 9,
    "category": "Inverse Trig Antiderivatives",
    "name": "arccsc",
    "latex": "\\int \\csc^{-1}u\\,du = u\\csc^{-1}u + \\ln\\left|u+\\sqrt{u^2-1}\\right| + C",
    "use": "Antiderivative of arccsc",
    "variables": "|u| > 1",
    "mistakes": "Positive log (opposite sign to arcsec)"
  },
  {
    "id": "log-01",
    "chapter": 9,
    "category": "Integration of Logarithms",
    "name": "log_d(ax+b)",
    "latex": "\\int \\log_d(ax+b)\\,dx = \\dfrac{ax+b}{a}\\log_d\\!\\left(\\tfrac{ax+b}{e}\\right) + C",
    "use": "Log base d of linear expression",
    "variables": "a \\neq 0,\\; ax+b > 0",
    "mistakes": "Use change-of-base if unsure: log_d(x) = ln(x)/ln(d)"
  },
  {
    "id": "tbl-01",
    "chapter": 9,
    "category": "Table - u²±a²",
    "name": "1/(u²−a²)",
    "latex": "\\int \\dfrac{du}{u^2-a^2} = \\dfrac{1}{2a}\\ln\\left|\\dfrac{u-a}{u+a}\\right| + C",
    "use": "Difference of squares denominator",
    "variables": "u \\neq \\pm a",
    "mistakes": "|u−a| = |a−u|, either order inside log"
  },
  {
    "id": "tbl-02",
    "chapter": 9,
    "category": "Table - u²±a²",
    "name": "1/(a²−u²)",
    "latex": "\\int \\dfrac{du}{a^2-u^2} = \\dfrac{1}{2a}\\ln\\left|\\dfrac{u+a}{u-a}\\right| + C",
    "use": "Flipped denominator variant",
    "variables": "u \\neq \\pm a",
    "mistakes": "Numerator/denominator inside log swapped vs. 1/(u²−a²)"
  },
  {
    "id": "tbl-03",
    "chapter": 9,
    "category": "Table - u²±a²",
    "name": "1/√(u²±a²)",
    "latex": "\\int \\dfrac{du}{\\sqrt{u^2 \\pm a^2}} = \\ln\\left|u+\\sqrt{u^2 \\pm a^2}\\right| + C",
    "use": "Square-root denominator with ±a²",
    "variables": "",
    "mistakes": "Result is ln, not arcsin"
  },
  {
    "id": "tbl-04",
    "chapter": 9,
    "category": "Table - u²±a²",
    "name": "√(u²±a²)/u²",
    "latex": "\\int \\dfrac{\\sqrt{u^2\\pm a^2}}{u^2}\\,du = -\\dfrac{\\sqrt{u^2\\pm a^2}}{u} + \\ln\\left|u+\\sqrt{u^2\\pm a^2}\\right| + C",
    "use": "√(u²±a²) over u²",
    "variables": "u \\neq 0",
    "mistakes": "Two-term result - don't drop either term"
  },
  {
    "id": "tbl-05",
    "chapter": 9,
    "category": "Table - u²±a²",
    "name": "u²/√(u²±a²)",
    "latex": "\\int \\dfrac{u^2}{\\sqrt{u^2\\pm a^2}}\\,du = \\dfrac{1}{2}\\left[u\\sqrt{u^2\\pm a^2} \\mp a^2\\ln\\left|u+\\sqrt{u^2\\pm a^2}\\right|\\right] + C",
    "use": "u² over √(u²±a²)",
    "variables": "",
    "mistakes": "The ∓ flips sign depending on + or − in radicand"
  },
  {
    "id": "tbl-06",
    "chapter": 9,
    "category": "Table - u²±a²",
    "name": "1/(u²√(u²±a²))",
    "latex": "\\int \\dfrac{du}{u^2\\sqrt{u^2\\pm a^2}} = \\mp\\dfrac{\\sqrt{u^2\\pm a^2}}{a^2 u} + C",
    "use": "u² × √(u²±a²) in denominator",
    "variables": "u \\neq 0",
    "mistakes": "Sign determined by ± in radicand"
  },
  {
    "id": "tbl-07",
    "chapter": 9,
    "category": "Table - u²±a²",
    "name": "1/(u²±a²)^(3/2)",
    "latex": "\\int \\dfrac{du}{(u^2\\pm a^2)^{3/2}} = \\dfrac{\\pm u}{a^2\\sqrt{u^2\\pm a^2}} + C",
    "use": "Three-halves power of (u²±a²)",
    "variables": "a \\neq 0",
    "mistakes": "Sign of numerator matches ± in denominator"
  },
  {
    "id": "tbl-08",
    "chapter": 9,
    "category": "Table - √(a²−u²)",
    "name": "u²/√(a²−u²)",
    "latex": "\\int \\dfrac{u^2}{\\sqrt{a^2-u^2}}\\,du = -\\dfrac{u}{2}\\sqrt{a^2-u^2}+\\dfrac{a^2}{2}\\sin^{-1}\\!\\left(\\tfrac{u}{a}\\right)+C",
    "use": "u² over √(a²−u²)",
    "variables": "|u| < a",
    "mistakes": "Two-term answer; leading term is negative"
  },
  {
    "id": "tbl-09",
    "chapter": 9,
    "category": "Table - √(a²−u²)",
    "name": "1/(u²√(a²−u²))",
    "latex": "\\int \\dfrac{du}{u^2\\sqrt{a^2-u^2}} = -\\dfrac{\\sqrt{a^2-u^2}}{a^2 u} + C",
    "use": "u² × √(a²−u²) in denominator",
    "variables": "0 < |u| < a",
    "mistakes": "Negative result - don't drop the minus"
  },
  {
    "id": "tbl-10",
    "chapter": 9,
    "category": "Table - √(a²−u²)",
    "name": "√(a²−u²)/u²",
    "latex": "\\int \\dfrac{\\sqrt{a^2-u^2}}{u^2}\\,du = -\\dfrac{\\sqrt{a^2-u^2}}{u} - \\sin^{-1}\\!\\left(\\tfrac{u}{a}\\right) + C",
    "use": "√(a²−u²) over u²",
    "variables": "0 < |u| < a",
    "mistakes": "Both terms negative"
  },
  {
    "id": "tbl-20",
    "chapter": 9,
    "category": "Table - √(a+bu)",
    "name": "u/√(a+bu)",
    "latex": "\\int \\dfrac{u}{\\sqrt{a+bu}}\\,du = \\dfrac{2bu-4a}{3b^2}\\sqrt{a+bu} + C",
    "use": "u over square root of linear",
    "variables": "b \\neq 0",
    "mistakes": "Numerator factor is 2bu − 4a, not just 2bu"
  },
  {
    "id": "tbl-21",
    "chapter": 9,
    "category": "Table - √(a+bu)",
    "name": "1/(u√(a+bu)), a>0",
    "latex": "\\int \\dfrac{du}{u\\sqrt{a+bu}} = \\dfrac{1}{\\sqrt{a}}\\ln\\left|\\dfrac{\\sqrt{a+bu}-\\sqrt{a}}{\\sqrt{a+bu}+\\sqrt{a}}\\right| + C",
    "use": "Reciprocal × √(a+bu), a > 0",
    "variables": "a > 0,\\; u > 0",
    "mistakes": "Requires a > 0 for this form"
  },
  {
    "id": "tbl-22",
    "chapter": 9,
    "category": "Table - √(a+bu)",
    "name": "√(a+bu)/u (reduction)",
    "latex": "\\int \\dfrac{\\sqrt{a+bu}}{u}\\,du = 2\\sqrt{a+bu} + a\\int \\dfrac{du}{u\\sqrt{a+bu}}",
    "use": "Recursive reduction for √(a+bu)/u",
    "variables": "",
    "mistakes": "Apply tbl-21 for the remaining integral"
  },
  {
    "id": "tbl-30",
    "chapter": 9,
    "category": "Table - 1/(a+bu)",
    "name": "u/(a+bu)",
    "latex": "\\int \\dfrac{u}{a+bu}\\,du = \\dfrac{u}{b} - \\dfrac{a}{b^2}\\ln|a+bu| + C",
    "use": "Linear numerator over linear denominator",
    "variables": "b \\neq 0",
    "mistakes": "Two terms: polynomial + log"
  },
  {
    "id": "tbl-31",
    "chapter": 9,
    "category": "Table - 1/(a+bu)",
    "name": "1/(u(a+bu))",
    "latex": "\\int \\dfrac{du}{u(a+bu)} = \\dfrac{1}{a}\\ln\\left|\\dfrac{u}{a+bu}\\right| + C",
    "use": "Partial fractions: 1/(u(a+bu))",
    "variables": "a \\neq 0,\\; b \\neq 0",
    "mistakes": "Verify with partial fractions"
  },
  {
    "id": "tbl-32",
    "chapter": 9,
    "category": "Table - 1/(a+bu)",
    "name": "1/(u²(a+bu))",
    "latex": "\\int \\dfrac{du}{u^2(a+bu)} = \\dfrac{b}{a^2}\\ln\\left|\\dfrac{a+bu}{u}\\right| - \\dfrac{1}{au} + C",
    "use": "u² × (a+bu) in denominator",
    "variables": "a \\neq 0",
    "mistakes": "Two terms with opposite structure"
  },
  {
    "id": "tbl-33",
    "chapter": 9,
    "category": "Table - 1/(a+bu)",
    "name": "u²/(a+bu)",
    "latex": "\\int \\dfrac{u^2}{a+bu}\\,du = \\dfrac{1}{b}\\!\\left(\\dfrac{u^2}{2}-\\dfrac{au}{b}+\\dfrac{a^2}{b^2}\\ln|a+bu|\\right) + C",
    "use": "Polynomial long division then integrate",
    "variables": "b \\neq 0",
    "mistakes": "Three-term result after polynomial division"
  },
  {
    "id": "tbl-34",
    "chapter": 9,
    "category": "Table - 1/(a+bu)",
    "name": "u²/(a+bu)²",
    "latex": "\\int \\dfrac{u^2}{(a+bu)^2}\\,du = \\dfrac{1}{b^3}\\!\\left[bu - \\dfrac{a^2}{a+bu} - 2a\\ln|a+bu|\\right] + C",
    "use": "Squared linear denominator with u² numerator",
    "variables": "b \\neq 0",
    "mistakes": "Three-term result"
  },
  {
    "id": "tbl-40",
    "chapter": 9,
    "category": "Table - Quadratic Denominator",
    "name": "1/(a+bu+cu²), b²<4ac",
    "latex": "\\int \\dfrac{du}{a+bu+cu^2} = \\dfrac{2}{\\sqrt{4ac-b^2}}\\tan^{-1}\\!\\left(\\dfrac{2cu+b}{\\sqrt{4ac-b^2}}\\right)+C",
    "use": "Irreducible quadratic denominator (b² < 4ac)",
    "variables": "b^2 < 4ac",
    "mistakes": "Complete the square if formula not memorised"
  },
  {
    "id": "tbl-41",
    "chapter": 9,
    "category": "Table - Quadratic Denominator",
    "name": "1/(a+bu+cu²), b²>4ac",
    "latex": "\\int \\dfrac{du}{a+bu+cu^2} = \\dfrac{1}{\\sqrt{b^2-4ac}}\\ln\\left|\\dfrac{2cu+b-\\sqrt{b^2-4ac}}{2cu+b+\\sqrt{b^2-4ac}}\\right|+C",
    "use": "Quadratic with two real roots (b² > 4ac)",
    "variables": "b^2 > 4ac",
    "mistakes": "Use partial fractions when roots are obvious"
  },
  {
    "id": "form-04",
    "chapter": 8,
    "category": "Definite Integral",
    "name": "Riemann Sum",
    "latex": "\\int_a^b f(x)\\,dx = \\lim_{n\\to\\infty}\\sum_{i=1}^n f(x_i^*)\\Delta x",
    "use": "Definition of definite integral",
    "variables": "\\Delta x = (b-a)/n",
    "mistakes": "Forgetting the limit"
  },
  {
    "id": "form-05",
    "chapter": 8,
    "category": "Area",
    "name": "Area between curves",
    "latex": "A = \\int_a^b [f(x)-g(x)]\\,dx",
    "use": "When f(x) ≥ g(x) on [a,b]",
    "variables": "f upper curve, g lower curve",
    "mistakes": "Not checking which is upper"
  },
  {
    "id": "form-06",
    "chapter": 8,
    "category": "Volume",
    "name": "Disk Method",
    "latex": "V = \\pi\\int_a^b [f(x)]^2\\,dx",
    "use": "Rotation about x-axis",
    "variables": "f(x) \\geq 0",
    "mistakes": "Forgetting \\pi"
  },
  {
    "id": "form-07",
    "chapter": 8,
    "category": "Volume",
    "name": "Washer Method",
    "latex": "V = \\pi\\int_a^b\\left([f(x)]^2-[g(x)]^2\\right)dx",
    "use": "Rotation with hole: f outer, g inner",
    "variables": "f(x) \\geq g(x) \\geq 0",
    "mistakes": "Squaring the difference instead of difference of squares"
  },
  {
    "id": "form-10",
    "chapter": 10,
    "category": "Improper Integrals",
    "name": "Type I (infinite limit)",
    "latex": "\\int_a^\\infty f(x)\\,dx = \\lim_{t\\to\\infty}\\int_a^t f(x)\\,dx",
    "use": "Infinite upper limit",
    "variables": "",
    "mistakes": "Forgetting the limit notation"
  },
  {
    "id": "form-11",
    "chapter": 11,
    "category": "Series",
    "name": "Geometric Series",
    "latex": "\\sum_{n=0}^\\infty ar^n = \\dfrac{a}{1-r},\\quad |r|<1",
    "use": "Sum of geometric series",
    "variables": "a = first term, r = ratio",
    "mistakes": "|r| must be strictly less than 1"
  },
  {
    "id": "form-12",
    "chapter": 11,
    "category": "Taylor Series",
    "name": "Taylor Series",
    "latex": "f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(a)}{n!}(x-a)^n",
    "use": "Represent function as power series",
    "variables": "a = centre",
    "mistakes": "Not checking radius of convergence"
  },
  {
    "id": "form-13",
    "chapter": 12,
    "category": "Differential Equations",
    "name": "Linear ODE integrating factor",
    "latex": "\\mu(x) = e^{\\int P(x)\\,dx}",
    "use": "Solve y' + P(x)y = Q(x)",
    "variables": "",
    "mistakes": "Forgetting the constant disappears in mu"
  },
  {
    "id": "form-01",
    "chapter": 7,
    "category": "Hyperbolic Functions",
    "name": "sinh definition",
    "latex": "\\sinh x = \\dfrac{e^x - e^{-x}}{2}",
    "use": "Definition",
    "variables": "$x \\in \\mathbb{R}$",
    "mistakes": "Confusing with $\\sin x$"
  },
  {
    "id": "form-02",
    "chapter": 7,
    "category": "Hyperbolic Functions",
    "name": "cosh definition",
    "latex": "\\cosh x = \\dfrac{e^x + e^{-x}}{2}",
    "use": "Definition",
    "variables": "$x \\in \\mathbb{R}$",
    "mistakes": "Note $\\cosh x \\geq 1$ always"
  },
  {
    "id": "form-03",
    "chapter": 7,
    "category": "Hyperbolic Identities",
    "name": "Pythagorean identity",
    "latex": "\\cosh^2 x - \\sinh^2 x = 1",
    "use": "Fundamental identity",
    "variables": "",
    "mistakes": "Sign is opposite to trig: $-$ not $+$"
  },
  {
    "id": "form-08",
    "chapter": 9,
    "category": "Integration Techniques",
    "name": "Integration by Parts",
    "latex": "\\int u\\,dv = uv - \\int v\\,du",
    "use": "Products of functions",
    "variables": "Choose u by LIATE",
    "mistakes": "Wrong choice of u"
  },
  {
    "id": "form-09",
    "chapter": 9,
    "category": "Trig Substitution",
    "name": "sqrt(a2-x2)",
    "latex": "x = a\\sin\\theta,\\quad \\sqrt{a^2-x^2}=a\\cos\\theta",
    "use": "Integrands with sqrt(a2-x2)",
    "variables": "-pi/2 <= theta <= pi/2",
    "mistakes": "Not converting dx and limits"
  },
  {
    "id": "imp-01",
    "chapter": 10,
    "category": "Improper Integrals - Type I",
    "name": "Infinite lower limit",
    "latex": "\\int_{-\\infty}^b f(x)\\,dx = \\lim_{t\\to-\\infty}\\int_t^b f(x)\\,dx",
    "use": "Lower limit is −∞",
    "variables": "",
    "mistakes": "Converges only if the limit is finite"
  },
  {
    "id": "imp-02",
    "chapter": 10,
    "category": "Improper Integrals - Type I",
    "name": "Both limits infinite",
    "latex": "\\int_{-\\infty}^\\infty f\\,dx = \\int_{-\\infty}^c f\\,dx + \\int_c^\\infty f\\,dx",
    "use": "Split at any finite c (often c = 0)",
    "variables": "c \\in \\mathbb{R}",
    "mistakes": "Diverges unless BOTH pieces converge separately"
  },
  {
    "id": "imp-03",
    "chapter": 10,
    "category": "Improper Integrals - Type II",
    "name": "Discontinuity at upper endpoint",
    "latex": "\\int_a^b f(x)\\,dx = \\lim_{t\\to b^-}\\int_a^t f(x)\\,dx",
    "use": "f blows up as x → b",
    "variables": "f continuous on [a,b)",
    "mistakes": "Missing the discontinuity and applying FTC blindly"
  },
  {
    "id": "imp-04",
    "chapter": 10,
    "category": "Improper Integrals - Type II",
    "name": "Discontinuity at lower endpoint",
    "latex": "\\int_a^b f(x)\\,dx = \\lim_{t\\to a^+}\\int_t^b f(x)\\,dx",
    "use": "f blows up as x → a",
    "variables": "f continuous on (a,b]",
    "mistakes": "Approach the bad endpoint with a one-sided limit"
  },
  {
    "id": "imp-05",
    "chapter": 10,
    "category": "Improper Integrals - Convergence",
    "name": "p-integral at ∞",
    "latex": "\\int_1^\\infty \\frac{dx}{x^p}\\ \\text{converges} \\iff p > 1",
    "use": "Benchmark for tails at infinity",
    "variables": "p > 0",
    "mistakes": "Opposite condition to the p-integral near 0"
  },
  {
    "id": "imp-06",
    "chapter": 10,
    "category": "Improper Integrals - Convergence",
    "name": "p-integral at 0",
    "latex": "\\int_0^1 \\frac{dx}{x^p}\\ \\text{converges} \\iff p < 1",
    "use": "Benchmark for a singularity at 0",
    "variables": "p > 0",
    "mistakes": "Sign of the inequality is flipped vs. the tail case"
  },
  {
    "id": "imp-07",
    "chapter": 10,
    "category": "Improper Integrals - Convergence",
    "name": "Comparison Test",
    "latex": "0 \\le f \\le g:\\quad \\int g\\ \\text{conv} \\Rightarrow \\int f\\ \\text{conv};\\ \\ \\int f\\ \\text{div} \\Rightarrow \\int g\\ \\text{div}",
    "use": "Bound a hard integrand by a known one",
    "variables": "f, g \\geq 0",
    "mistakes": "Inequality must point the correct way for the conclusion"
  },
  {
    "id": "ser-01",
    "chapter": 11,
    "category": "Series - Convergence Tests",
    "name": "nth-Term Divergence Test",
    "latex": "\\lim_{n\\to\\infty} a_n \\neq 0 \\ \\Rightarrow\\ \\sum a_n\\ \\text{diverges}",
    "use": "First thing to check on any series",
    "variables": "",
    "mistakes": "If the limit IS 0 the test is inconclusive (not proof of convergence)"
  },
  {
    "id": "ser-02",
    "chapter": 11,
    "category": "Series - Special Series",
    "name": "p-series",
    "latex": "\\sum_{n=1}^\\infty \\frac{1}{n^p}\\ \\text{converges} \\iff p > 1",
    "use": "Benchmark for comparison tests",
    "variables": "p > 0",
    "mistakes": "p = 1 (harmonic) diverges"
  },
  {
    "id": "ser-03",
    "chapter": 11,
    "category": "Series - Special Series",
    "name": "Harmonic series",
    "latex": "\\sum_{n=1}^\\infty \\frac{1}{n} = \\infty \\quad (\\text{diverges})",
    "use": "Classic divergent series (p = 1)",
    "variables": "",
    "mistakes": "Terms → 0 yet the sum diverges"
  },
  {
    "id": "ser-04",
    "chapter": 11,
    "category": "Series - Special Series",
    "name": "Telescoping sum",
    "latex": "\\sum_{n=1}^\\infty (b_n - b_{n+1}) = b_1 - \\lim_{n\\to\\infty} b_{n+1}",
    "use": "Terms cancel in a chain",
    "variables": "",
    "mistakes": "Use partial fractions to expose the cancellation"
  },
  {
    "id": "ser-05",
    "chapter": 11,
    "category": "Series - Convergence Tests",
    "name": "Integral Test",
    "latex": "\\sum_{n=1}^\\infty a_n\\ \\text{and}\\ \\int_1^\\infty f(x)\\,dx\\ \\text{share convergence},\\ a_n=f(n)",
    "use": "f positive, continuous, decreasing",
    "variables": "f > 0, decreasing",
    "mistakes": "The integral's value is NOT the sum's value"
  },
  {
    "id": "ser-06",
    "chapter": 11,
    "category": "Series - Convergence Tests",
    "name": "Direct Comparison Test",
    "latex": "0 \\le a_n \\le b_n:\\ \\sum b_n\\ \\text{conv} \\Rightarrow \\sum a_n\\ \\text{conv}",
    "use": "Bound by a known series",
    "variables": "a_n, b_n \\geq 0",
    "mistakes": "Inequality must face the right way for the conclusion"
  },
  {
    "id": "ser-07",
    "chapter": 11,
    "category": "Series - Convergence Tests",
    "name": "Limit Comparison Test",
    "latex": "\\lim_{n\\to\\infty}\\frac{a_n}{b_n} = L,\\ 0 < L < \\infty \\ \\Rightarrow\\ \\text{same behaviour}",
    "use": "Compare polynomial-ratio terms to a p-series",
    "variables": "a_n, b_n > 0",
    "mistakes": "Need L strictly between 0 and ∞"
  },
  {
    "id": "ser-08",
    "chapter": 11,
    "category": "Series - Convergence Tests",
    "name": "Alternating Series Test",
    "latex": "\\sum (-1)^{n-1} b_n\\ \\text{converges if}\\ b_{n+1}\\le b_n\\ \\text{and}\\ \\lim b_n = 0",
    "use": "Terms alternate in sign",
    "variables": "b_n > 0",
    "mistakes": "Must verify BOTH decreasing and limit 0"
  },
  {
    "id": "ser-09",
    "chapter": 11,
    "category": "Series - Error Bounds",
    "name": "Alternating Series Remainder",
    "latex": "|R_n| = |S - S_n| \\le b_{n+1}",
    "use": "Error is at most the first omitted term",
    "variables": "b_n > 0, decreasing",
    "mistakes": "Bound uses the NEXT term, not the last kept one"
  },
  {
    "id": "ser-10",
    "chapter": 11,
    "category": "Series - Convergence Tests",
    "name": "Ratio Test",
    "latex": "L = \\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right|:\\ L<1\\ \\text{conv},\\ L>1\\ \\text{div},\\ L=1\\ ?",
    "use": "Factorials or n-th powers",
    "variables": "",
    "mistakes": "L = 1 is inconclusive"
  },
  {
    "id": "ser-11",
    "chapter": 11,
    "category": "Series - Convergence Tests",
    "name": "Root Test",
    "latex": "L = \\lim_{n\\to\\infty}\\sqrt[n]{|a_n|}:\\ L<1\\ \\text{conv},\\ L>1\\ \\text{div},\\ L=1\\ ?",
    "use": "Whole term raised to the n-th power",
    "variables": "",
    "mistakes": "L = 1 is inconclusive"
  },
  {
    "id": "ser-12",
    "chapter": 11,
    "category": "Series - Special Series",
    "name": "Geometric partial sum",
    "latex": "s_n = \\sum_{k=0}^{n-1} ar^k = a\\,\\frac{1-r^n}{1-r}",
    "use": "Finite geometric sum (n terms)",
    "variables": "r \\neq 1",
    "mistakes": "Full sum a/(1−r) needs |r|<1 and n→∞"
  },
  {
    "id": "mac-01",
    "chapter": 11,
    "category": "Maclaurin Series",
    "name": "1/(1−x)",
    "latex": "\\frac{1}{1-x} = \\sum_{n=0}^\\infty x^n = 1 + x + x^2 + \\cdots",
    "use": "Master series - build others from it",
    "variables": "|x| < 1,\\ (-1,1)",
    "mistakes": "Only valid on (−1, 1)"
  },
  {
    "id": "mac-02",
    "chapter": 11,
    "category": "Maclaurin Series",
    "name": "eˣ",
    "latex": "e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\cdots",
    "use": "Exponential expansion",
    "variables": "x \\in \\mathbb{R},\\ (-\\infty,\\infty)",
    "mistakes": "Converges for all x"
  },
  {
    "id": "mac-03",
    "chapter": 11,
    "category": "Maclaurin Series",
    "name": "sin x",
    "latex": "\\sin x = \\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n+1}}{(2n+1)!} = x - \\frac{x^3}{3!} + \\cdots",
    "use": "Odd powers only",
    "variables": "x \\in \\mathbb{R}",
    "mistakes": "Odd exponents; factorial is (2n+1)!"
  },
  {
    "id": "mac-04",
    "chapter": 11,
    "category": "Maclaurin Series",
    "name": "cos x",
    "latex": "\\cos x = \\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n}}{(2n)!} = 1 - \\frac{x^2}{2!} + \\cdots",
    "use": "Even powers only",
    "variables": "x \\in \\mathbb{R}",
    "mistakes": "Even exponents; factorial is (2n)!"
  },
  {
    "id": "mac-05",
    "chapter": 11,
    "category": "Maclaurin Series",
    "name": "ln(1+x)",
    "latex": "\\ln(1+x) = \\sum_{n=1}^\\infty (-1)^{n+1}\\frac{x^n}{n} = x - \\frac{x^2}{2} + \\cdots",
    "use": "Logarithm near 1",
    "variables": "-1 < x \\le 1,\\ (-1,1]",
    "mistakes": "Converges at x = 1 but not x = −1; starts at n = 1"
  },
  {
    "id": "mac-06",
    "chapter": 11,
    "category": "Maclaurin Series",
    "name": "arctan x",
    "latex": "\\arctan x = \\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n+1}}{2n+1} = x - \\frac{x^3}{3} + \\cdots",
    "use": "From integrating 1/(1+x²)",
    "variables": "-1 \\le x \\le 1,\\ [-1,1]",
    "mistakes": "Denominator is 2n+1, not (2n+1)!"
  },
  {
    "id": "mac-07",
    "chapter": 11,
    "category": "Maclaurin Series",
    "name": "Binomial (1+x)^k",
    "latex": "(1+x)^k = \\sum_{n=0}^\\infty \\binom{k}{n} x^n = 1 + kx + \\frac{k(k-1)}{2!}x^2 + \\cdots",
    "use": "Roots and reciprocals, any real k",
    "variables": "|x| < 1",
    "mistakes": "Get to (1+u)^k form first; terminates only if k is a non-negative integer"
  },
  {
    "id": "pow-01",
    "chapter": 11,
    "category": "Power Series",
    "name": "Radius of convergence",
    "latex": "R = \\lim_{n\\to\\infty}\\left|\\frac{c_n}{c_{n+1}}\\right| \\quad\\text{(when the limit exists)}",
    "use": "Find R for ∑ cₙ(x−a)ⁿ",
    "variables": "",
    "mistakes": "Always test the endpoints x = a ± R separately"
  },
  {
    "id": "de-01",
    "chapter": 12,
    "category": "Differential Equations - Separable",
    "name": "Separable ODE",
    "latex": "\\frac{dy}{dx} = g(x)h(y) \\ \\Rightarrow\\ \\int \\frac{dy}{h(y)} = \\int g(x)\\,dx",
    "use": "Separate variables to opposite sides",
    "variables": "h(y) \\neq 0",
    "mistakes": "Add +C once; check constant solutions h(y)=0"
  },
  {
    "id": "de-02",
    "chapter": 12,
    "category": "Differential Equations - Linear",
    "name": "Standard form",
    "latex": "\\frac{dy}{dx} + P(x)\\,y = Q(x)",
    "use": "Rewrite before finding the integrating factor",
    "variables": "",
    "mistakes": "Coefficient of y' must be 1 first"
  },
  {
    "id": "de-03",
    "chapter": 12,
    "category": "Differential Equations - Linear",
    "name": "Linear solution formula",
    "latex": "y = \\frac{1}{\\mu(x)}\\left[\\int \\mu(x)Q(x)\\,dx + C\\right],\\quad \\mu = e^{\\int P\\,dx}",
    "use": "Solve y' + P y = Q",
    "variables": "\\mu = e^{\\int P\\,dx}",
    "mistakes": "Note (μy)' = μQ; divide by μ at the end"
  },
  {
    "id": "de-04",
    "chapter": 12,
    "category": "Differential Equations - Homogeneous",
    "name": "Homogeneous substitution",
    "latex": "y = vx \\ \\Rightarrow\\ \\frac{dy}{dx} = v + x\\frac{dv}{dx}",
    "use": "Reduces dy/dx = F(y/x) to separable in v",
    "variables": "v = y/x",
    "mistakes": "Remember the product rule term x·dv/dx"
  },
  {
    "id": "de-05",
    "chapter": 12,
    "category": "Differential Equations - Exact",
    "name": "Exactness test",
    "latex": "M\\,dx + N\\,dy = 0 \\ \\text{is exact} \\iff \\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}",
    "use": "Check before solving as exact",
    "variables": "",
    "mistakes": "If not exact, an integrating factor may be needed"
  },
  {
    "id": "de-06",
    "chapter": 12,
    "category": "Differential Equations - Exact",
    "name": "Exact solution",
    "latex": "F(x,y) = C,\\quad \\text{where } F_x = M,\\ F_y = N",
    "use": "Integrate M in x, then match N to fix the y-terms",
    "variables": "",
    "mistakes": "The 'constant' of integration is a function of y"
  }
];
