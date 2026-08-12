/**
 * quizzes.js — Interactive quiz panel with scoring
 */
const Quizzes = (() => {
  const panel   = document.getElementById('quiz-panel');
  const content = document.getElementById('quiz-content');
  const navRow  = document.getElementById('quiz-nav');

  let activeQuiz = null;
  let idx = 0, score = 0, answered = false;
  let userAnswers = {};
  let returnFocus = null;

  function open(quizId) {
    if (!panel || typeof quizzesData === 'undefined') return;
    returnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    activeQuiz = quizzesData.find(q => q.id === quizId);
    if (!activeQuiz) return;
    idx = 0; score = 0; answered = false; userAnswers = {};
    panel.classList.add('open');
    panel.tabIndex = -1;
    panel.focus();
    renderStart();
  }

  function close() {
    panel?.classList.remove('open');
    returnFocus?.focus();
    returnFocus = null;
  }

  function renderStart() {
    if (!content) return;
    const q = activeQuiz;
    content.innerHTML = `
      <div style="text-align:center;padding:32px 0">
        <div style="font-size:3rem;margin-bottom:16px">${Icons.puzzle}</div>
        <h2 style="font-size:1.4rem;font-weight:700;margin-bottom:8px">${q.title}</h2>
        <p style="color:var(--text-2);margin-bottom:28px">${q.questions.length} questions — take your time</p>
        <button class="btn-primary" id="start-quiz">Start Quiz →</button>
      </div>`;
    if (navRow) navRow.innerHTML = '';
    const startButton = document.getElementById('start-quiz');
    startButton?.addEventListener('click', () => renderQuestion());
    startButton?.focus();
  }

  function renderQuestion() {
    if (!content || !activeQuiz) return;
    answered = false;
    if (idx >= activeQuiz.questions.length) { renderResult(); return; }
    const q   = activeQuiz.questions[idx];
    const pct = (idx / activeQuiz.questions.length) * 100;

    const optionsHTML = (q.type === 'tf' ? ['True', 'False'] : (q.options || [])).map((opt, i) => `
      <button type="button" class="quiz-option" data-oi="${i}">
        <div class="opt-letter">${String.fromCharCode(65 + i)}</div>
        <span>${opt}</span>
      </button>`).join('');

    content.innerHTML = `
      <div class="quiz-q-num">Question ${idx + 1} of ${activeQuiz.questions.length}</div>
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
      <div class="quiz-question">${q.text || q.question || ''}</div>
      <div class="quiz-options" id="quiz-opts">${optionsHTML}</div>
      <div class="quiz-feedback" id="quiz-fb"></div>`;

    renderMath(content);

    if (navRow) navRow.innerHTML = `
      <button class="btn-secondary" style="flex:1" id="qz-skip">Skip</button>
      <button class="btn-primary" style="flex:2;opacity:.5;pointer-events:none" id="qz-submit">Submit</button>`;

    let selectedOi = null;
    content.querySelectorAll('.quiz-option').forEach(opt => {
      opt.addEventListener('click', () => {
        if (answered) return;
        content.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        selectedOi = parseInt(opt.dataset.oi);
        const submitBtn = document.getElementById('qz-submit');
        if (submitBtn) { submitBtn.style.opacity = '1'; submitBtn.style.pointerEvents = 'auto'; }
      });
    });

    document.getElementById('qz-skip')?.addEventListener('click', next);

    document.getElementById('qz-submit')?.addEventListener('click', () => {
      if (selectedOi === null || answered) return;
      answered = true;
      userAnswers[idx] = selectedOi;
      const correct = q.type === 'tf' ? (q.answer ? 0 : 1) : (q.correct !== undefined ? q.correct : q.answer);
      const isRight = selectedOi === correct;
      if (isRight) score++;

      content.querySelectorAll('.quiz-option').forEach((opt, i) => {
        if (i === correct)   opt.classList.add('correct');
        if (i === selectedOi && !isRight) opt.classList.add('wrong');
      });

      const fb = document.getElementById('quiz-fb');
      if (fb) {
        fb.className = `quiz-feedback show ${isRight ? 'correct-fb' : 'wrong-fb'}`;
        fb.innerHTML = `<strong>${isRight ? '✅ Correct!' : '❌ Incorrect'}</strong>
          <p>${q.explanation || ''}</p>`;
        renderMath(fb);
      }

      if (navRow) navRow.innerHTML = `
        <button class="btn-primary" style="flex:1" id="qz-next">${idx + 1 < activeQuiz.questions.length ? 'Next →' : 'See Results'}</button>`;
      document.getElementById('qz-next')?.addEventListener('click', next);
    });
  }

  function next() { idx++; renderQuestion(); }

  function renderResult() {
    if (!content || !activeQuiz) return;
    const total = activeQuiz.questions.length;
    const pct   = Math.round((score / total) * 100);
    const emoji = pct === 100 ? Icons.trophy : pct >= 70 ? Icons.thumbsUp : pct >= 50 ? Icons.book : Icons.dumbbell;
    const msg   = pct === 100 ? 'Perfect score!' : pct >= 70 ? 'Great work!' : pct >= 50 ? 'Keep going!' : 'Keep practising!';

    AppStorage.saveQuizScore(activeQuiz.id, score, total);
    Progress.update();

    // SVG ring
    const r = 50, circ = 2 * Math.PI * r;
    const offset = circ * (1 - pct / 100);

    content.innerHTML = `
      <div class="quiz-result">
        <svg width="140" height="140" viewBox="0 0 140 140" style="margin:0 auto 16px;display:block">
          <circle cx="70" cy="70" r="${r}" fill="none" stroke="var(--border)" stroke-width="10"/>
          <circle cx="70" cy="70" r="${r}" fill="none" stroke="var(--blue)" stroke-width="10"
            stroke-dasharray="${circ}" stroke-dashoffset="${offset}"
            stroke-linecap="round" transform="rotate(-90 70 70)"
            style="transition:stroke-dashoffset 1s ease"/>
          <text x="70" y="68" text-anchor="middle" font-size="22" font-weight="800" fill="var(--text)">${pct}%</text>
          <text x="70" y="86" text-anchor="middle" font-size="11" fill="var(--text-2)">${score}/${total}</text>
        </svg>
        <div style="font-size:2rem;margin-bottom:8px">${emoji}</div>
        <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:6px">${msg}</h3>
        <p style="color:var(--text-2);margin-bottom:24px">You scored ${score} out of ${total}</p>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <button class="btn-secondary" id="qz-review">Review Answers</button>
          <button class="btn-secondary" id="qz-retry">Retry Quiz</button>
          <button class="btn-primary"   id="qz-done">Done ✓</button>
        </div>
        <div id="qz-review-list" style="margin-top:24px;display:none;text-align:left"></div>
      </div>`;

    if (navRow) navRow.innerHTML = '';
    document.getElementById('qz-retry')?.addEventListener('click', () => { idx = 0; score = 0; userAnswers = {}; renderStart(); });
    document.getElementById('qz-done')?.addEventListener('click', close);
    document.getElementById('qz-review')?.addEventListener('click', () => {
      const reviewBox = document.getElementById('qz-review-list');
      if (!reviewBox) return;
      if (reviewBox.style.display === 'block') {
        reviewBox.style.display = 'none';
        return;
      }
      reviewBox.style.display = 'block';
      reviewBox.innerHTML = activeQuiz.questions.map((q, qIdx) => {
        const opts = q.type === 'tf' ? ['True', 'False'] : (q.options || []);
        const correct = q.type === 'tf' ? (q.answer ? 0 : 1) : (q.correct !== undefined ? q.correct : q.answer);
        const sel = userAnswers[qIdx];
        const isRight = sel === correct;
        return `
          <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:10px;padding:14px;margin-bottom:12px">
            <div style="font-size:.82rem;font-weight:700;color:${isRight ? 'var(--green)' : 'var(--red)'};margin-bottom:4px">
              Q${qIdx + 1}: ${isRight ? 'Correct ✓' : 'Incorrect ✕'}
            </div>
            <div style="font-size:.9rem;font-weight:600;margin-bottom:8px">${q.text || q.question || ''}</div>
            <div style="font-size:.83rem;color:var(--text-2)">Your choice: <strong>${sel !== undefined ? opts[sel] : 'Skipped'}</strong></div>
            ${!isRight ? `<div style="font-size:.83rem;color:var(--green);margin-top:2px">Correct choice: <strong>${opts[correct]}</strong></div>` : ''}
            <div style="font-size:.8rem;color:var(--text-3);margin-top:6px;font-style:italic">${q.explanation || ''}</div>
          </div>`;
      }).join('');
      if (typeof renderMath === 'function') renderMath(reviewBox);
    });
  }

  function init() {
    document.getElementById('quiz-close')?.addEventListener('click', close);
  }

  return { init, open, close };
})();
