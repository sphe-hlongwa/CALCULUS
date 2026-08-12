/**
 * parse_markdown.js
 * Build script — generates the four data/*.js files the app loads offline.
 * Rich interactive content is authored directly in assets/js/app.js.
 */
const fs   = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, '..', 'CALCsem2sg.md');
const dataDir = path.join(__dirname, '..', 'data');

if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

// ─── Read the source ───────────────────────────────────────────────────────
const raw = fs.readFileSync(inputFile, 'utf8');
const lines = raw.split('\n');

// ─── Helpers ──────────────────────────────────────────────────────────────
function clean(text) {
  return text
    .replace(/\(cid:\d+\)/g, '')          // Remove PDF CID artifacts
    .replace(/\(cid:[a-z]+\)/gi, '')
    .replace(/\[cid:\d+\]/g, '')
    .replace(/\s{3,}/g, '  ')             // Collapse excessive whitespace
    .replace(/^\s*\|\s*-+\s*\|[\s\|%-]*$/gm, '') // Remove pure separator rows
    .trim();
}

function titleCase(str) {
  return str.replace(/([A-Z])/g, ' $1').trim();
}

// ─── Chapter detection ────────────────────────────────────────────────────
// Chapters appear as "| Chapter X |" table rows or "Chapter X\nTitle" patterns
const CHAPTER_PATTERN = /^\|\s*Chapter\s+(\d+)\s*\|/i;
const SECTION_PATTERN = /^(\d+\.\d+(?:\.\d+)?)\s+([A-Z].{3,60}?)(?:\s*\.{3,}|\s+\d+)?\s*$/;
const THEOREM_PATTERN = /^(Theorem|Definition|Lemma|Corollary|Proposition)\s+\d/i;
const EXAMPLE_PATTERN = /^Worked\s*Example\s+\d/i;
const TUTORIAL_PATTERN = /^Tutorial\s+\d/i;

// ─── Parse chapters ───────────────────────────────────────────────────────
const chapterMap = new Map(); // chapterNum -> { id, num, title, rawLines }
let currentChapterNum = null;
let currentChapterLines = [];

function flushChapter() {
  if (currentChapterNum !== null && currentChapterLines.length > 0) {
    if (!chapterMap.has(currentChapterNum)) {
      chapterMap.set(currentChapterNum, { num: currentChapterNum, rawLines: [] });
    }
    chapterMap.get(currentChapterNum).rawLines.push(...currentChapterLines);
  }
  currentChapterLines = [];
}

for (const line of lines) {
  const chMatch = line.match(CHAPTER_PATTERN);
  if (chMatch) {
    flushChapter();
    currentChapterNum = parseInt(chMatch[1]);
    if (!chapterMap.has(currentChapterNum)) {
      chapterMap.set(currentChapterNum, { num: currentChapterNum, rawLines: [] });
    }
    continue;
  }
  if (currentChapterNum !== null) {
    currentChapterLines.push(line);
  }
}
flushChapter();

// ─── Compute chapter titles from the first meaningful line ─────────────────
const CHAPTER_TITLES = {
  7:  'Hyperbolic Functions',
  8:  'Integration Theory and Applications',
  9:  'Advanced Integration Techniques',
  10: 'Improper Integrals',
  11: 'Infinite Sequences and Series',
  12: 'Differential Equations'
};

const SECTION_TITLES = {
  7:  [],
  8:  [
    '8.1 Riemann Sums and Area Approximation',
    '8.2 Area with the Definite Integral',
    '8.3 Solids of Revolution',
    '8.4 Volumes by Slicing',
    '8.5 The Definite Integral as a Function'
  ],
  9:  [
    '9.1 Inverse Trig, Exponential and Logarithmic Integrals',
    '9.2 Integration by Parts Revisited',
    '9.3 Trigonometric Substitutions',
    '9.4 Trigonometric Integrals',
    '9.5 Partial Fraction Decomposition'
  ],
  10: [
    '10.1 Type I: Infinite Interval of Integration',
    '10.2 Type II: Infinite Discontinuities'
  ],
  11: [
    '11.1 Sequences',
    '11.2 Series',
    '11.3 Convergence Tests for Series',
    '11.4 Power Series',
    '11.5 Representations of Functions as Power Series',
    '11.6 Taylor and Maclaurin Series',
    '11.7 Binomial Series'
  ],
  12: [
    '12.1 Separable Differential Equations',
    '12.2 Homogeneous Differential Equations',
    '12.3 Linear Differential Equations',
    '12.4 Exact Differential Equations'
  ]
};

// ─── Convert raw lines to clean markdown ──────────────────────────────────
function linesToMarkdown(rawLines) {
  const out = [];
  for (const line of rawLines) {
    const c = clean(line);
    if (!c) continue;
    // Skip pure page-header rows like "2nd | MATH1036 | SemesterCalculusStudyGuide | 4"
    if (/^\d+(st|nd|rd|th)\s*$/.test(c)) continue;
    if (/^MATH1036\s*\|/.test(c)) continue;
    if (/SemesterCalculusStudyGuide/.test(c) && c.length < 80) continue;
    // Headings: Learning outcomes, tutorial markers, worked examples, theorems
    if (/^LEARNINGOUTCOMES/i.test(c) || /^LEARNING OUTCOMES/i.test(c)) {
      out.push('### 🎯 Learning Outcomes'); continue;
    }
    if (EXAMPLE_PATTERN.test(c)) { out.push(`\n#### ✏️ ${c}\n`); continue; }
    if (THEOREM_PATTERN.test(c)) { out.push(`\n#### 📘 ${c}\n`); continue; }
    if (TUTORIAL_PATTERN.test(c)) { out.push(`\n#### 📝 ${c}\n`); continue; }
    if (/^Definition of/.test(c)) { out.push(`\n#### 📖 ${c}\n`); continue; }
    out.push(c);
  }
  return out.join('\n');
}

// ─── Build chapters array ─────────────────────────────────────────────────
const chapters = [];
for (const [num, ch] of chapterMap) {
  const title = CHAPTER_TITLES[num] || `Chapter ${num}`;
  const sectionList = SECTION_TITLES[num] || [];
  const content = linesToMarkdown(ch.rawLines);

  chapters.push({
    id: `chapter-${num}`,
    number: num,
    title: `Chapter ${num}: ${title}`,
    shortTitle: title,
    sections: sectionList.map((s, i) => ({ id: `ch${num}-sec${i+1}`, title: s })),
    content
  });
}

// Sort by chapter number
chapters.sort((a, b) => a.number - b.number);

// ─── Flashcards ───────────────────────────────────────────────────────────
const flashcards = [
  // Ch 7
  { id: 'fc-01', chapter: 7, topic: 'Hyperbolic Functions', front: 'Define $\\sinh x$ and $\\cosh x$', back: '$\\sinh x = \\dfrac{e^x - e^{-x}}{2}$,\\quad $\\cosh x = \\dfrac{e^x + e^{-x}}{2}$' },
  { id: 'fc-02', chapter: 7, topic: 'Hyperbolic Identities', front: 'State the fundamental hyperbolic identity', back: '$\\cosh^2 x - \\sinh^2 x = 1$' },
  { id: 'fc-03', chapter: 7, topic: 'Hyperbolic Derivatives', front: '$\\dfrac{d}{dx}\\sinh x = ?$', back: '$\\cosh x$' },
  { id: 'fc-04', chapter: 7, topic: 'Hyperbolic Derivatives', front: '$\\dfrac{d}{dx}\\cosh x = ?$', back: '$\\sinh x$' },
  { id: 'fc-05', chapter: 7, topic: 'Inverse Hyperbolic', front: '$\\sinh^{-1} x = ?$ (in terms of $\\ln$)', back: '$\\ln\\left(x + \\sqrt{x^2+1}\\right)$' },
  { id: 'fc-06', chapter: 7, topic: 'Inverse Hyperbolic', front: '$\\cosh^{-1} x = ?$', back: '$\\ln\\left(x + \\sqrt{x^2-1}\\right)$, $x \\geq 1$' },
  { id: 'fc-07', chapter: 7, topic: 'Inverse Hyperbolic', front: '$\\tanh^{-1} x = ?$', back: '$\\dfrac{1}{2}\\ln\\dfrac{1+x}{1-x}$, $|x| < 1$' },
  // Ch 8
  { id: 'fc-08', chapter: 8, topic: 'Riemann Sums', front: 'What is a Riemann Sum?', back: 'A sum $\\displaystyle\\sum_{i=1}^n f(x_i^*)\\Delta x$ approximating the area under a curve by $n$ rectangles over $[a,b]$' },
  { id: 'fc-09', chapter: 8, topic: 'Definite Integral', front: 'Define the definite integral', back: '$\\displaystyle\\int_a^b f(x)\\,dx = \\lim_{n\\to\\infty}\\sum_{i=1}^n f(x_i^*)\\Delta x$' },
  { id: 'fc-10', chapter: 8, topic: 'Fundamental Theorem', front: 'State the Fundamental Theorem of Calculus (Part 2)', back: 'If $F$ is an antiderivative of $f$, then $\\displaystyle\\int_a^b f(x)\\,dx = F(b) - F(a)$' },
  { id: 'fc-11', chapter: 8, topic: 'Area Between Curves', front: 'Area between $f$ and $g$ where $f(x)\\geq g(x)$ on $[a,b]$?', back: '$A = \\displaystyle\\int_a^b [f(x) - g(x)]\\,dx$' },
  { id: 'fc-12', chapter: 8, topic: 'Disk Method', front: 'Volume by Disk Method (rotation about $x$-axis)?', back: '$V = \\pi\\displaystyle\\int_a^b [f(x)]^2\\,dx$' },
  { id: 'fc-13', chapter: 8, topic: 'Washer Method', front: 'Volume by Washer Method?', back: '$V = \\pi\\displaystyle\\int_a^b \\left([f(x)]^2 - [g(x)]^2\\right)dx$' },
  // Ch 9
  { id: 'fc-14', chapter: 9, topic: 'Integration by Parts', front: 'State the Integration by Parts formula', back: '$\\displaystyle\\int u\\,dv = uv - \\int v\\,du$. Use LIATE to choose $u$.' },
  { id: 'fc-15', chapter: 9, topic: 'Trig Substitutions', front: 'For $\\sqrt{a^2 - x^2}$, use substitution?', back: '$x = a\\sin\\theta$, so $\\sqrt{a^2-x^2} = a\\cos\\theta$' },
  { id: 'fc-16', chapter: 9, topic: 'Trig Substitutions', front: 'For $\\sqrt{a^2 + x^2}$, use substitution?', back: '$x = a\\tan\\theta$, so $\\sqrt{a^2+x^2} = a\\sec\\theta$' },
  { id: 'fc-17', chapter: 9, topic: 'Trig Substitutions', front: 'For $\\sqrt{x^2 - a^2}$, use substitution?', back: '$x = a\\sec\\theta$, so $\\sqrt{x^2-a^2} = a\\tan\\theta$' },
  { id: 'fc-18', chapter: 9, topic: 'Partial Fractions', front: 'When do you use Partial Fraction Decomposition?', back: 'When integrating a rational function $P(x)/Q(x)$ where $\\deg P < \\deg Q$ and $Q$ factors into linear/quadratic factors.' },
  // Ch 10
  { id: 'fc-19', chapter: 10, topic: 'Improper Integrals', front: 'Define $\\displaystyle\\int_a^\\infty f(x)\\,dx$', back: '$\\displaystyle\\lim_{t\\to\\infty}\\int_a^t f(x)\\,dx$. Convergent if the limit exists.' },
  { id: 'fc-20', chapter: 10, topic: 'Improper Integrals', front: 'When does $\\displaystyle\\int_1^\\infty \\frac{1}{x^p}\\,dx$ converge?', back: 'Converges when $p > 1$, diverges when $p \\leq 1$.' },
  // Ch 11
  { id: 'fc-21', chapter: 11, topic: 'Sequences', front: 'What does it mean for a sequence $\\{a_n\\}$ to converge?', back: '$\\lim_{n\\to\\infty} a_n = L$ (finite $L$ exists)' },
  { id: 'fc-22', chapter: 11, topic: 'Geometric Series', front: 'When does the geometric series $\\sum ar^n$ converge?', back: 'Converges to $\\dfrac{a}{1-r}$ when $|r| < 1$. Diverges when $|r| \\geq 1$.' },
  { id: 'fc-23', chapter: 11, topic: 'Ratio Test', front: 'State the Ratio Test', back: 'For $\\sum a_n$, let $L = \\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right|$. Converges if $L<1$, diverges if $L>1$, inconclusive if $L=1$.' },
  { id: 'fc-24', chapter: 11, topic: 'Taylor Series', front: 'Taylor series of $f$ centred at $a$?', back: '$\\displaystyle\\sum_{n=0}^\\infty \\frac{f^{(n)}(a)}{n!}(x-a)^n$' },
  { id: 'fc-25', chapter: 11, topic: 'Maclaurin Series', front: 'Maclaurin series for $e^x$?', back: '$\\displaystyle\\sum_{n=0}^\\infty \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\cdots$' },
  // Ch 12
  { id: 'fc-26', chapter: 12, topic: 'Differential Equations', front: 'What is a separable ODE?', back: 'One that can be written as $\\dfrac{dy}{dx} = f(x)g(y)$, separated as $\\dfrac{dy}{g(y)} = f(x)\\,dx$.' },
  { id: 'fc-27', chapter: 12, topic: 'Linear ODE', front: 'Standard form of a first-order linear ODE?', back: '$\\dfrac{dy}{dx} + P(x)y = Q(x)$. Integrating factor: $\\mu = e^{\\int P\\,dx}$.' },
];

// ─── Quizzes ──────────────────────────────────────────────────────────────
const quizzes = [
  {
    id: 'quiz-ch7', chapter: 7, title: 'Hyperbolic Functions Quiz',
    questions: [
      { id: 'q7-1', type: 'mcq', text: 'Which identity is correct?', options: ['$\\cosh^2 x + \\sinh^2 x = 1$', '$\\cosh^2 x - \\sinh^2 x = 1$', '$\\sinh^2 x - \\cosh^2 x = 1$', '$\\tanh^2 x + \\text{sech}^2 x = 0$'], answer: 1, explanation: 'The fundamental hyperbolic identity is $\\cosh^2 x - \\sinh^2 x = 1$, analogous to $\\cos^2\\theta + \\sin^2\\theta = 1$.' },
      { id: 'q7-2', type: 'mcq', text: '$\\dfrac{d}{dx}\\tanh x = ?$', options: ['$\\text{sech}^2 x$', '$-\\text{sech}^2 x$', '$\\cosh^2 x$', '$\\sinh x\\cosh x$'], answer: 0, explanation: '$\\dfrac{d}{dx}\\tanh x = \\text{sech}^2 x$.' },
      { id: 'q7-3', type: 'tf', text: '$\\sinh x$ is an even function.', answer: false, explanation: '$\\sinh(-x) = -\\sinh(x)$, so it is an odd function.' },
    ]
  },
  {
    id: 'quiz-ch8', chapter: 8, title: 'Integration Theory Quiz',
    questions: [
      { id: 'q8-1', type: 'mcq', text: 'The area between $y=x^2$ and $y=x$ on $[0,1]$ is?', options: ['$\\frac{1}{3}$', '$\\frac{1}{6}$', '$\\frac{1}{2}$', '$\\frac{1}{4}$'], answer: 1, explanation: '$\\int_0^1(x-x^2)dx = \\frac{1}{2}-\\frac{1}{3}=\\frac{1}{6}$.' },
      { id: 'q8-2', type: 'mcq', text: 'The Disk Method gives $V = ?$ for rotation of $y=\\sqrt{x}$, $0\\leq x\\leq 4$ about the $x$-axis.', options: ['$8\\pi$', '$16\\pi$', '$4\\pi$', '$2\\pi$'], answer: 0, explanation: '$V=\\pi\\int_0^4 x\\,dx = \\pi\\cdot 8 = 8\\pi$.' },
      { id: 'q8-3', type: 'tf', text: '$\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx$', answer: true, explanation: 'Reversing limits negates the integral.' },
    ]
  },
  {
    id: 'quiz-ch9', chapter: 9, title: 'Advanced Integration Quiz',
    questions: [
      { id: 'q9-1', type: 'mcq', text: 'For LIATE, which comes first for choosing $u$ in IBP?', options: ['Algebraic', 'Logarithmic', 'Trigonometric', 'Exponential'], answer: 1, explanation: 'LIATE: Logarithmic, Inverse trig, Algebraic, Trig, Exponential. $u$ = Logarithmic first.' },
      { id: 'q9-2', type: 'mcq', text: 'To integrate $\\int\\frac{dx}{\\sqrt{9-x^2}}$, use substitution?', options: ['$x=3\\tan\\theta$', '$x=3\\sin\\theta$', '$x=3\\sec\\theta$', '$x=3\\cos\\theta$'], answer: 1, explanation: '$x=3\\sin\\theta$ gives $\\sqrt{9-x^2}=3\\cos\\theta$.' },
      { id: 'q9-3', type: 'tf', text: 'Partial fraction decomposition requires the numerator degree to be less than the denominator degree.', answer: true, explanation: 'If not, you must first perform polynomial long division.' },
    ]
  },
  {
    id: 'quiz-ch10', chapter: 10, title: 'Improper Integrals Quiz',
    questions: [
      { id: 'q10-1', type: 'mcq', text: '$\\int_1^\\infty \\frac{1}{x^2}dx = ?$', options: ['$1$', '$2$', 'Diverges', '$\\frac{1}{2}$'], answer: 0, explanation: '$\\lim_{t\\to\\infty}[-1/x]_1^t = 0-(-1) = 1$.' },
      { id: 'q10-2', type: 'tf', text: '$\\int_1^\\infty \\frac{1}{x}dx$ converges.', answer: false, explanation: '$\\int_1^\\infty 1/x\\,dx = \\ln t \\to \\infty$. It diverges.' },
    ]
  },
  {
    id: 'quiz-ch11', chapter: 11, title: 'Sequences and Series Quiz',
    questions: [
      { id: 'q11-1', type: 'mcq', text: 'The geometric series $\\sum_{n=0}^\\infty (\\frac{1}{2})^n$ equals?', options: ['$1$', '$2$', '$\\frac{1}{2}$', 'Diverges'], answer: 1, explanation: '$\\frac{a}{1-r}=\\frac{1}{1-1/2}=2$.' },
      { id: 'q11-2', type: 'mcq', text: 'The Maclaurin series for $\\sin x$ is?', options: ['$\\sum_{n=0}^\\infty \\frac{x^n}{n!}$', '$\\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n+1}}{(2n+1)!}$', '$\\sum_{n=0}^\\infty (-1)^n\\frac{x^{2n}}{(2n)!}$', '$\\sum_{n=1}^\\infty \\frac{x^n}{n}$'], answer: 1, explanation: '$\\sin x = x - x^3/3! + x^5/5! - \\cdots$' },
      { id: 'q11-3', type: 'tf', text: 'If $\\lim_{n\\to\\infty}a_n = 0$, then $\\sum a_n$ converges.', answer: false, explanation: 'The harmonic series $\\sum 1/n$ diverges even though $1/n \\to 0$.' },
    ]
  },
  {
    id: 'quiz-ch12', chapter: 12, title: 'Differential Equations Quiz',
    questions: [
      { id: 'q12-1', type: 'mcq', text: "The integrating factor for $y' + 2y = e^x$ is?", options: ['$e^{2x}$', '$e^x$', '$e^{-x}$', '$2e^{2x}$'], answer: 0, explanation: '$\\mu = e^{\\int 2\\,dx} = e^{2x}$.' },
      { id: 'q12-2', type: 'tf', text: "$\\frac{dy}{dx} = xy$ is a separable ODE.", answer: true, explanation: 'It separates as $\\frac{dy}{y} = x\\,dx$.' },
    ]
  }
];

// ─── Formulas ─────────────────────────────────────────────────────────────
const formulas = [
  { id: 'form-01', chapter: 7, category: 'Hyperbolic Functions', name: 'sinh definition', latex: '\\sinh x = \\dfrac{e^x - e^{-x}}{2}', use: 'Definition', variables: 'x \\in \\mathbb{R}', mistakes: 'Confusing with sin x' },
  { id: 'form-02', chapter: 7, category: 'Hyperbolic Functions', name: 'cosh definition', latex: '\\cosh x = \\dfrac{e^x + e^{-x}}{2}', use: 'Definition', variables: 'x \\in \\mathbb{R}', mistakes: 'Note cosh x ≥ 1 always' },
  { id: 'form-03', chapter: 7, category: 'Hyperbolic Identities', name: 'Pythagorean identity', latex: '\\cosh^2 x - \\sinh^2 x = 1', use: 'Fundamental identity', variables: '', mistakes: 'Sign is opposite to trig: minus not plus' },
  { id: 'form-04', chapter: 8, category: 'Definite Integral', name: 'Riemann Sum', latex: '\\int_a^b f(x)\\,dx = \\lim_{n\\to\\infty}\\sum_{i=1}^n f(x_i^*)\\Delta x', use: 'Definition of definite integral', variables: '\\Delta x = (b-a)/n', mistakes: 'Forgetting the limit' },
  { id: 'form-05', chapter: 8, category: 'Area', name: 'Area between curves (x-axis)', latex: 'A = \\int_a^b [f(x)-g(x)]\\,dx', use: 'When f(x) ≥ g(x) on [a,b]', variables: 'f upper curve, g lower curve', mistakes: 'Not checking which is upper' },
  { id: 'form-06', chapter: 8, category: 'Volume', name: 'Disk Method', latex: 'V = \\pi\\int_a^b [f(x)]^2\\,dx', use: 'Rotation about x-axis', variables: 'f(x) ≥ 0', mistakes: 'Forgetting π' },
  { id: 'form-07', chapter: 8, category: 'Volume', name: 'Washer Method', latex: 'V = \\pi\\int_a^b\\left([f(x)]^2 - [g(x)]^2\\right)dx', use: 'Rotation, f outer, g inner', variables: 'f(x) ≥ g(x) ≥ 0', mistakes: 'Squaring the difference instead of difference of squares' },
  { id: 'form-08', chapter: 9, category: 'Integration Techniques', name: 'Integration by Parts', latex: '\\int u\\,dv = uv - \\int v\\,du', use: 'Products of functions', variables: 'Choose u by LIATE', mistakes: 'Wrong choice of u' },
  { id: 'form-09', chapter: 9, category: 'Trig Substitution', name: 'sqrt(a²-x²)', latex: 'x = a\\sin\\theta,\\quad \\sqrt{a^2-x^2}=a\\cos\\theta', use: 'Integrands with √(a²-x²)', variables: '-π/2 ≤ θ ≤ π/2', mistakes: 'Not converting dx and limits' },
  { id: 'form-10', chapter: 10, category: 'Improper Integrals', name: 'Type I (infinite limit)', latex: '\\int_a^\\infty f(x)\\,dx = \\lim_{t\\to\\infty}\\int_a^t f(x)\\,dx', use: 'Infinite upper limit', variables: '', mistakes: 'Forgetting the limit notation' },
  { id: 'form-11', chapter: 11, category: 'Series', name: 'Geometric Series', latex: '\\sum_{n=0}^\\infty ar^n = \\dfrac{a}{1-r},\\quad |r|<1', use: 'Sum of geometric series', variables: 'a = first term, r = ratio', mistakes: '|r| must be strictly less than 1' },
  { id: 'form-12', chapter: 11, category: 'Taylor Series', name: 'Taylor Series', latex: 'f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(a)}{n!}(x-a)^n', use: 'Represent function as power series', variables: 'a = centre', mistakes: 'Not checking radius of convergence' },
  { id: 'form-13', chapter: 12, category: 'Differential Equations', name: 'Linear ODE integrating factor', latex: '\\mu(x) = e^{\\int P(x)\\,dx}', use: 'Solve y\' + P(x)y = Q(x)', variables: '', mistakes: 'Forgetting the constant disappears in μ' },
];

// ─── Write output files ───────────────────────────────────────────────────
function writeJS(filename, varName, data) {
  const file = path.join(dataDir, filename);
  fs.writeFileSync(file, `const ${varName} = ${JSON.stringify(data, null, 2)};`, 'utf8');
  console.log(`✓ ${filename}`);
}

writeJS('chapters.js',   'chaptersData',  chapters);
writeJS('flashcards.js', 'flashcardsData', flashcards);
writeJS('quizzes.js',    'quizzesData',   quizzes);
writeJS('formulas.js',   'formulasData',  formulas);

console.log('\n✅ All data files generated successfully!');
