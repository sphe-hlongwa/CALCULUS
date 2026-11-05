/**
 * storage.js - LocalStorage wrapper for all persistent state
 */
const AppStorage = {
  KEYS: {
    progress:    'calc_progress',
    bookmarks:   'calc_bookmarks',
    quizScores:  'calc_quiz_scores',
    fcMastered:  'calc_fc_mastered',
    streak:      'calc_streak',
    lastVisit:   'calc_last_visit',
    activity:    'calc_activity',
  },

  _get(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  },
  _set(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
  },

  getProgress()          { return this._get(this.KEYS.progress, {}); },
  setProgress(d)         { this._set(this.KEYS.progress, d); },
  markComplete(chapterId){
    const d = this.getProgress();
    if (!d[chapterId]) this.logActivity('chapter');
    d[chapterId] = true; this.setProgress(d);
  },
  markIncomplete(chapterId) { const d = this.getProgress(); delete d[chapterId]; this.setProgress(d); },
  isComplete(chapterId)  { return !!this.getProgress()[chapterId]; },
  // Only counts ids that are real chapters, so stale saved ids can't inflate progress
  completedCount()       {
    const p = this.getProgress();
    return typeof chaptersData !== 'undefined'
      ? chaptersData.filter(c => p[c.id]).length
      : Object.keys(p).length;
  },

  getBookmarks()         { return this._get(this.KEYS.bookmarks, []); },
  toggleBookmark(id)     {
    const bm = this.getBookmarks();
    const idx = bm.indexOf(id);
    if (idx === -1) bm.push(id); else bm.splice(idx, 1);
    this._set(this.KEYS.bookmarks, bm);
    return idx === -1;
  },
  isBookmarked(id)       { return this.getBookmarks().includes(id); },

  getQuizScores()        { return this._get(this.KEYS.quizScores, {}); },
  saveQuizScore(qid, score, total) {
    // Keep the BEST attempt as the headline score; a worse retake never lowers it.
    const s = this.getQuizScores();
    const prev = s[qid];
    const pct = total ? score / total : 0;
    const prevPct = prev && prev.total ? prev.score / prev.total : -1;
    const best = pct >= prevPct ? { score, total } : { score: prev.score, total: prev.total };
    s[qid] = { ...best, last: { score, total }, attempts: ((prev && prev.attempts) || 0) + 1 };
    this._set(this.KEYS.quizScores, s);
  },

  getFCMastered()        { return this._get(this.KEYS.fcMastered, []); },
  toggleFCMastered(id)   {
    const m = this.getFCMastered();
    const idx = m.indexOf(id);
    if (idx === -1) m.push(id); else m.splice(idx, 1);
    this._set(this.KEYS.fcMastered, m);
    return idx === -1;
  },
  isFCMastered(id)       { return this.getFCMastered().includes(id); },

  updateStreak() {
    const today = new Date().toDateString();
    const last  = this._get(this.KEYS.lastVisit, null);
    let streak  = this._get(this.KEYS.streak, 0);
    if (last === today) return streak;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    streak = (last === yesterday) ? streak + 1 : 1;
    this._set(this.KEYS.streak, streak);
    this._set(this.KEYS.lastVisit, today);
    return streak;
  },
  getStreak() { return this._get(this.KEYS.streak, 0); },

  // ── Activity log (feeds the dashboard heatmap & streak) ──────────────────
  // Shape: { 'YYYY-MM-DD': { quiz: n, card: n, proof: n, outcome: n, exam: n, chapter: n } }
  // Only real study actions the content offers are logged; nothing is back-filled.
  dayKey(d = new Date()) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  },
  getActivity() { return this._get(this.KEYS.activity, {}); },
  logActivity(type, n = 1) {
    const a = this.getActivity();
    const k = this.dayKey();
    const day = a[k] || {};
    day[type] = (day[type] || 0) + n;
    a[k] = day;
    // keep roughly the last 400 days
    const cutoff = this.dayKey(new Date(Date.now() - 400 * 86400000));
    Object.keys(a).forEach(key => { if (key < cutoff) delete a[key]; });
    this._set(this.KEYS.activity, a);
  },
  activityCount(day) { return Object.values(day || {}).reduce((x, y) => x + y, 0); },
  // Consecutive days with at least one study action. The current streak stays
  // alive through today if nothing has been done yet (it ends yesterday).
  activityStreaks() {
    const a = this.getActivity();
    const has = d => this.activityCount(a[this.dayKey(d)]) > 0;
    const step = d => new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1);
    let d = new Date(); d = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    if (!has(d)) d = step(d);
    let current = 0;
    while (has(d)) { current++; d = step(d); }
    const num = k => { const [y, m, d] = k.split('-').map(Number); return Date.UTC(y, m - 1, d) / 86400000; };
    const days = Object.keys(a).filter(k => this.activityCount(a[k]) > 0).map(num).sort((x, y) => x - y);
    let longest = 0, run = 0;
    days.forEach((n, i) => { run = i && n - days[i - 1] === 1 ? run + 1 : 1; longest = Math.max(longest, run); });
    return { current, longest: Math.max(longest, current) };
  },
};