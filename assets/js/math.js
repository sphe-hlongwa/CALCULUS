/**
 * math.js - KaTeX rendering helpers + formula card builder
 */
function renderMath(container) {
  if (!container || typeof renderMathInElement === 'undefined') return;
  renderMathInElement(container, {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$',  right: '$',  display: false },
      { left: '\\(', right: '\\)', display: false },
      { left: '\\[', right: '\\]', display: true  },
    ],
    throwOnError: false,
    strict: false,
  });
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
