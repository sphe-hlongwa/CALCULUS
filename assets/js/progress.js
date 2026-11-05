/**
 * progress.js - progress tracking, chapter stats and automatic completion
 */
const Progress = (() => {
  const PASS_QUIZ  = 70;   // best quiz score (%) needed
  const PASS_CARDS = 70;   // % of the chapter's flashcards mastered

  function update() {
    const total = typeof chaptersData !== 'undefined' ? chaptersData.length : 1;
    const completed = AppStorage.completedCount();
    const pct = Math.round((completed / total) * 100);
    document.querySelectorAll('.progress-fill').forEach(el => el.style.width = `${pct}%`);
    document.querySelectorAll('#progress-pct').forEach(el => el.textContent = `${pct}%`);
  }

  // Everything the dashboard and auto-complete need for one chapter.
  function chapterStats(ch) {
    const quizzes = typeof quizzesData !== 'undefined' ? quizzesData : [];
    const cards   = typeof flashcardsData !== 'undefined' ? flashcardsData : [];
    const groups  = typeof proofsData !== 'undefined' ? proofsData : [];
    const outs    = (typeof chapterOutcomes !== 'undefined' && chapterOutcomes[ch.number]) || [];

    const savedOuts = AppStorage._get(`outcomes_ch${ch.number}`, {});
    const outcomesDone = outs.filter((_, i) => savedOuts[i]).length;

    const quiz = quizzes.find(q => q.chapter === ch.number);
    const sc = quiz && AppStorage.getQuizScores()[quiz.id];
    const quizPct = sc && sc.total ? Math.round(sc.score / sc.total * 100) : null;

    const mastered = new Set(AppStorage.getFCMastered());
    let ratings = {};
    try { ratings = JSON.parse(localStorage.getItem('calc_fc_ratings')) || {}; } catch {}
    const chCards = cards.filter(c => c.chapter === ch.number);
    const cardsMastered = chCards.filter(c => mastered.has(c.id)).length;
    const cardsTouched  = chCards.some(c => mastered.has(c.id) || ratings[c.id]);

    const studied = AppStorage._get('proofs_studied', {});
    const chProofs = groups.filter(g => parseInt(g.section, 10) === ch.number).flatMap(g => g.proofs);
    const proofsDone = chProofs.filter(p => studied[p.id]).length;

    // Each criterion only applies if the chapter has that kind of material.
    const met = {
      outcomes: !outs.length || outcomesDone === outs.length,
      quiz:     !quiz || (quizPct !== null && quizPct >= PASS_QUIZ),
      cards:    !chCards.length || cardsMastered / chCards.length * 100 >= PASS_CARDS,
      proofs:   !chProofs.length || proofsDone === chProofs.length
    };
    return {
      ch, isDone: AppStorage.isComplete(ch.id),
      outcomesDone, outcomesTotal: outs.length,
      quizPct, cardsMastered, cardsTotal: chCards.length,
      proofsDone, proofsTotal: chProofs.length,
      met, allMet: Object.values(met).every(Boolean),
      started: outcomesDone > 0 || quizPct !== null || cardsTouched || proofsDone > 0
    };
  }

  // Call after anything that can move progress (quiz result, card mastered,
  // proof studied, outcome ticked). Completes any chapter whose criteria are
  // all met. Never un-completes, so Mark Incomplete is respected.
  function syncAll() {
    if (typeof chaptersData === 'undefined') return;
    let changed = false;
    chaptersData.forEach(ch => {
      if (AppStorage.isComplete(ch.id)) return;
      if (chapterStats(ch).allMet) {
        AppStorage.markComplete(ch.id);
        changed = true;
        if (typeof toast === 'function') toast(`Chapter ${ch.number} completed automatically!`, 3500);
        if (typeof ContentRenderer !== 'undefined') ContentRenderer._syncMarkDoneButtons?.(ch.number, true);
      }
    });
    if (changed) {
      update();
      if (typeof Navigation !== 'undefined') Navigation.refresh?.();
    }
  }

  return { update, chapterStats, syncAll, PASS_QUIZ, PASS_CARDS };
})();