/**
 * math.js - KaTeX rendering helpers + formula card builder
 *
 * KaTeX is loaded from index.html. Dynamic views (exams, quizzes, etc.)
 * are inserted after the initial page render, so they must explicitly
 * invoke this helper after inserting their HTML.
 */
function renderMath(container, attempts = 0) {
  if (!container) return;

  // KaTeX/auto-render can arrive a moment after the app scripts when the
  // CDN is slow. Retry briefly instead of silently leaving raw $...$ visible.
  if (typeof renderMathInElement === 'undefined') {
    if (attempts < 20) {
      setTimeout(() => renderMath(container, attempts + 1), 100);
    }
    return;
  }

  try {
    renderMathInElement(container, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$',  right: '$',  display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true  },
      ],
      throwOnError: false,
      strict: false,
      trust: false,
      ignoredClasses: ['katex-rendered'],
    });
    container.classList.add('katex-rendered');
  } catch (error) {
    // Do not break the exam if one expression is malformed.
    console.warn('KaTeX rendering error:', error);
  }
}

function buildFormulaSection(chapterNum) {
  if (typeof formulasData === 'undefined') return '';
  const fmls = formulasData.filter(f => f.chapter === chapterNum);
  if (!fmls.length) return '';

  const cards = fmls.map(f => `
    <div class="formula-card fade-up">
      <div class="formula-name">${f.category} · ${f.name}</div>
      <div class="formula-latex">$$${f.latex}$$</div>
      <div class="formula-use">${Icons.pin} <strong>When to use:</strong> ${f.use}</div>
      ${f.variables ? `<div class="formula-use" style="margin-top:4px">${Icons.hash} <strong>Variables:</strong> ${f.variables}</div>` : ''}
      ${f.mistakes  ? `<div class="formula-mistake">⚠️ ${f.mistakes}</div>` : ''}
    </div>`).join('');

  return `
    <h2 class="section-heading"><span class="section-num">∑</span> Formula Reference</h2>
    <div class="formula-grid">${cards}</div>`;
}
