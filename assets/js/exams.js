/**
 * exams.js — Practice Exams feature
 * Renders an exam picker and a printable, memo-style exam
 * paper view, styled after the official MATH1036 class test layout.
 */
const Exams = (() => {

  let timerInterval = null;
  let timerEndsAt = null;
  let isFullscreen = false;

  function open() {
    const overlay = document.getElementById('exam-overlay');
    if (!overlay) return;
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    renderList();
  }

  function toggleFullscreen(force) {
    const overlay = document.getElementById('exam-overlay');
    const shell = overlay?.querySelector('.exam-shell');
    const btn = document.getElementById('exam-fullscreen-toggle');
    if (!overlay || !shell || !btn) return;

    isFullscreen = typeof force === 'boolean' ? force : !isFullscreen;
    overlay.classList.toggle('exam-overlay-fullscreen', isFullscreen);
    shell.classList.toggle('exam-shell-fullscreen', isFullscreen);
    btn.innerHTML = (typeof Icons !== 'undefined' ? Icons[isFullscreen ? 'minimize' : 'maximize'] : '');
    btn.setAttribute('aria-label', isFullscreen ? 'Exit full screen' : 'Full screen');
  }

  function close() {
    const overlay = document.getElementById('exam-overlay');
    if (!overlay) return;
    stopTimer();
    document.getElementById('exam-timer-bar')?.classList.add('hidden');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
    toggleFullscreen(false);
  }

  function startTimer(minutes) {
    stopTimer();
    timerEndsAt = Date.now() + minutes * 60 * 1000;
    tickTimer();
    timerInterval = setInterval(tickTimer, 1000);
  }

  function stopTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = null;
    timerEndsAt = null;
  }

  function tickTimer() {
    const bar = document.getElementById('exam-timer-bar');
    const label = document.getElementById('exam-timer-text');
    if (!bar || !label || timerEndsAt === null) { stopTimer(); return; }

    const remainingMs = timerEndsAt - Date.now();

    if (remainingMs <= 0) {
      label.textContent = '00:00';
      stopTimer();
      close();
      if (typeof toast === 'function') toast("Time's up! The paper has closed.");
      else alert("Time's up! The paper has closed.");
      return;
    }

    const totalSeconds = Math.ceil(remainingMs / 1000);
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    label.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    bar.classList.toggle('exam-timer-low', totalSeconds <= 60);
  }

  function renderList() {
    stopTimer();
    document.getElementById('exam-timer-bar')?.classList.add('hidden');
    const root = document.getElementById('exam-content');
    if (!root || typeof EXAMS === 'undefined') return;

    const cards = EXAMS.map((paper, i) => `
      <div class="exam-pick-card fade-up" style="animation-delay:${i * 60}ms" data-exam-id="${paper.id}">
        <div class="exam-pick-top">
          <span class="exam-pick-num">${i + 1}</span>
          <div>
            <h3>${paper.label}</h3>
            <p class="exam-pick-meta">${paper.totalMarks} marks &middot; ${paper.duration} minutes &middot; ${paper.questions.length} questions</p>
          </div>
        </div>
        <button class="btn-primary exam-start-btn" data-exam-id="${paper.id}">Start Paper &rarr;</button>
      </div>
    `).join('');

    root.innerHTML = `
      <div class="exam-list-header">
        <h2>Practice Exams</h2>
        <p class="exam-list-sub">${EXAMS.length} full-length practice papers covering the announced test scope: curve sketching, optimization, integration applications, and the integration-technique sections (inverse trig / exponential / logarithmic integrals, integration by parts, partial fractions). Each question includes a full worked memo.</p>
      </div>
      <div class="exam-pick-grid">${cards}</div>
    `;

    root.querySelectorAll('[data-exam-id]').forEach(el => {
      el.addEventListener('click', () => renderPaper(el.dataset.examId));
    });

    root.scrollTop = 0;
    // Render after the new DOM is committed. This is important for dynamic
    // exam content because KaTeX auto-render only sees the initial document.
    renderMath(root);
    requestAnimationFrame(() => renderMath(root));
  }

  function renderPaper(examId) {
    const paper = EXAMS.find(p => p.id === examId);
    const root = document.getElementById('exam-content');
    if (!paper || !root) return;

    const marksRows = paper.questions.map(q =>
      `<tr><td>${q.number}</td><td class="exam-marks-cell">${q.marks}</td></tr>`
    ).join('');

    const questionsHtml = paper.questions.map(q => `
      <div class="exam-question" id="exam-q-${q.number}">
        <div class="exam-question-head">
          <h3>Question ${q.number} <span class="exam-q-section">${q.section}</span> <span class="exam-q-marks">[${q.marks}]</span></h3>
          <div class="exam-q-title">${q.title}</div>
        </div>
        <div class="exam-prompt">${mdish(q.prompt)}</div>
        <button class="exam-reveal-btn" data-q="${q.number}">Show Memo (Solution)</button>
        <div class="exam-solution hidden" id="exam-sol-${q.number}">
          <div class="exam-solution-label">MEMO — Question ${q.number}</div>
          ${mdish(q.solution)}
          ${q.graph ? `
          <div class="exam-graph-wrap">
            <div class="exam-graph" id="exam-graph-${paper.id}-${q.number}"></div>
            <div class="exam-graph-caption">Graph of ${q.graph.title || 'f(x)'}</div>
          </div>` : ''}
        </div>
      </div>
    `).join('');

    root.innerHTML = `
      <div class="exam-toolbar">
        <button class="exam-back-btn" id="exam-back-btn">&larr; All Practice Papers</button>
      </div>

      <div class="exam-paper">
        <div class="exam-cover">
          <p class="exam-cover-eyebrow">UNIVERSITY-STYLE PRACTICE PAPER · SELF-STUDY USE ONLY</p>
          <p class="exam-cover-line">SCHOOL OF MATHEMATICS</p>
          <h1 class="exam-cover-title">MATH1036</h1>
          <h2 class="exam-cover-subtitle">${paper.date.toUpperCase()} — CALCULUS TEST</h2>
          <p class="exam-cover-marks"><strong>Marks:</strong> ${paper.totalMarks} marks in ${paper.duration} minutes</p>

          <div class="exam-instructions">
            <p><strong>INSTRUCTIONS:</strong></p>
            <ul>
              <li>Show all workings.</li>
              <li>No calculators are allowed.</li>
              <li>Attempt every question; partial credit is given for correct method.</li>
              <li>Use the &ldquo;Show Memo&rdquo; button under each question to check your solution once you have attempted it.</li>
            </ul>
          </div>

          <table class="exam-marks-table">
            <thead><tr><th>Question</th><th>Marks</th></tr></thead>
            <tbody>${marksRows}<tr class="exam-total-row"><td>Total</td><td>${paper.totalMarks}</td></tr></tbody>
          </table>
        </div>

        <div class="exam-questions">${questionsHtml}</div>
      </div>
    `;

    root.querySelector('#exam-back-btn').addEventListener('click', renderList);
    root.querySelectorAll('.exam-reveal-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const solEl = document.getElementById('exam-sol-' + btn.dataset.q);
        const showing = !solEl.classList.contains('hidden');
        solEl.classList.toggle('hidden');
        btn.textContent = showing ? 'Show Memo (Solution)' : 'Hide Memo (Solution)';
        if (!showing) {
          renderMath(solEl);
          requestAnimationFrame(() => renderMath(solEl));
          const q = paper.questions.find(qq => qq.number === Number(btn.dataset.q));
          if (q && q.graph && typeof Graphs !== 'undefined' && Graphs.examCurve) {
            // Wait a tick so the now-visible container has a real layout size.
            requestAnimationFrame(() => Graphs.examCurve(`exam-graph-${paper.id}-${q.number}`, q.graph));
          }
        }
      });
    });

    root.scrollTop = 0;
    // The exam is dynamically inserted, so explicitly typeset both immediately
    // and on the next frame. The helper also retries if the CDN is still loading.
    renderMath(root);
    requestAnimationFrame(() => renderMath(root));

    const timerBar = document.getElementById('exam-timer-bar');
    const timerText = document.getElementById('exam-timer-text');
    if (timerBar && timerText) {
      timerBar.classList.remove('hidden', 'exam-timer-low');
      timerText.textContent = `${String(paper.duration).padStart(2, '0')}:00`;
    }
    startTimer(paper.duration);
  }

  // Tiny markdown-ish renderer: **bold**, line breaks, bullet lists — keeps LaTeX untouched.
  function mdish(text) {
    if (!text) return '';
    const lines = text.trim().split('\n');
    let html = '';
    let inList = false;
    for (let raw of lines) {
      const line = raw.trim();
      if (!line) { if (inList) { html += '</ul>'; inList = false; } continue; }
      if (line.startsWith('- ') || line.startsWith('* ')) {
        if (!inList) { html += '<ul>'; inList = true; }
        html += `<li>${inlineMd(line.slice(2))}</li>`;
      } else {
        if (inList) { html += '</ul>'; inList = false; }
        html += `<p>${inlineMd(line)}</p>`;
      }
    }
    if (inList) html += '</ul>';
    return html;
  }
  function inlineMd(s) {
    return s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }

  return { open, close, renderList, renderPaper, toggleFullscreen };
})();

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('exam-btn')?.addEventListener('click', () => Exams.open());
  document.getElementById('exam-close')?.addEventListener('click', () => Exams.close());
  document.getElementById('exam-fullscreen-toggle')?.addEventListener('click', () => Exams.toggleFullscreen());
  document.getElementById('exam-overlay')?.addEventListener('click', e => {
    if (e.target.id === 'exam-overlay') Exams.close();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') Exams.close();
  });
});
