/**
 * heatmap.js - GitHub-style study activity grid for the dashboard.
 * Counts only actions this site can actually record: quiz answers, flashcard
 * ratings/masteries, proofs studied, learning outcomes ticked, exam memos
 * opened and chapters completed.
 */
const Heatmap = (() => {
  const WEEKS = 26;                       // about one semester
  const LABELS = { quiz: 'quiz answer', card: 'flashcard', proof: 'proof studied', outcome: 'outcome ticked', exam: 'exam memo', chapter: 'chapter completed' };
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const level = n => n <= 0 ? 0 : n <= 3 ? 1 : n <= 9 ? 2 : n <= 19 ? 3 : 4;
  const plural = (n, w) => `${n} ${w}${n === 1 ? '' : (w.endsWith('ed') || w.endsWith('ticked') ? '' : 's')}`;

  function render(el) {
    if (!el) return;
    const act = AppStorage.getActivity();
    const today = new Date(); today.setHours(0, 0, 0, 0);
    // Weeks start on Sunday; the last column is the current week.
    const start = new Date(today);
    start.setDate(start.getDate() - start.getDay() - (WEEKS - 1) * 7);

    let cells = '', months = '', total = 0, activeDays = 0, lastMonth = -1;
    for (let w = 0; w < WEEKS; w++) {
      const first = new Date(start); first.setDate(start.getDate() + w * 7);
      if (first.getMonth() !== lastMonth && (w === 0 || first.getDate() <= 7)) {
        months += `<span class="hm-month" style="grid-row:1;grid-column:${w + 2}">${MONTHS[first.getMonth()]}</span>`;
        lastMonth = first.getMonth();
      }
      for (let d = 0; d < 7; d++) {
        const day = new Date(start); day.setDate(start.getDate() + w * 7 + d);
        const pos = `grid-row:${d + 2};grid-column:${w + 2}`;
        if (day > today) { cells += `<i class="hm-cell hm-future" style="${pos}"></i>`; continue; }
        const rec = act[AppStorage.dayKey(day)];
        const n = AppStorage.activityCount(rec);
        total += n; if (n) activeDays++;
        const when = day.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
        const detail = n ? Object.entries(rec).filter(([, v]) => v).map(([k, v]) => plural(v, LABELS[k] || k)).join(', ') : 'No activity';
        cells += `<i class="hm-cell hm-l${level(n)}${day.getTime() === today.getTime() ? ' hm-today' : ''}" style="${pos}" title="${when}: ${detail}"></i>`;
      }
    }
    const { current, longest } = AppStorage.activityStreaks();
    el.innerHTML = `
      <div class="hm-summary">
        <span><strong>${current}</strong> day streak</span>
        <span><strong>${longest}</strong> longest</span>
        <span><strong>${activeDays}</strong> active day${activeDays === 1 ? '' : 's'}</span>
        <span><strong>${total}</strong> actions</span>
      </div>
      <div class="hm-grid" style="grid-template-columns:28px repeat(${WEEKS},minmax(0,1fr))">
        <span class="hm-dl" style="grid-row:3;grid-column:1">Mon</span>
        <span class="hm-dl" style="grid-row:5;grid-column:1">Wed</span>
        <span class="hm-dl" style="grid-row:7;grid-column:1">Fri</span>
        ${months}${cells}
      </div>
      <div class="hm-foot">
        <span>Counts quiz answers, flashcards, proofs, outcomes, exam memos and completed chapters.</span>
        <span class="hm-legend">Less <i class="hm-cell hm-l0"></i><i class="hm-cell hm-l1"></i><i class="hm-cell hm-l2"></i><i class="hm-cell hm-l3"></i><i class="hm-cell hm-l4"></i> More</span>
      </div>`;
  }
  return { render };
})();
