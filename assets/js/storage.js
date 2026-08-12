/**
 * storage.js — LocalStorage wrapper for all persistent state
 */
const AppStorage = {
  KEYS: {
    progress:    'calc_progress',
    bookmarks:   'calc_bookmarks',
    notes:       'calc_notes',
    quizScores:  'calc_quiz_scores',
    fcMastered:  'calc_fc_mastered',
    streak:      'calc_streak',
    lastVisit:   'calc_last_visit',
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
  markComplete(chapterId){ const d = this.getProgress(); d[chapterId] = true; this.setProgress(d); },
  markIncomplete(chapterId) { const d = this.getProgress(); delete d[chapterId]; this.setProgress(d); },
  isComplete(chapterId)  { return !!this.getProgress()[chapterId]; },

  getBookmarks()         { return this._get(this.KEYS.bookmarks, []); },
  toggleBookmark(id)     {
    const bm = this.getBookmarks();
    const idx = bm.indexOf(id);
    if (idx === -1) bm.push(id); else bm.splice(idx, 1);
    this._set(this.KEYS.bookmarks, bm);
    return idx === -1;
  },
  isBookmarked(id)       { return this.getBookmarks().includes(id); },

  getNotes()             { return this._get(this.KEYS.notes, {}); },
  saveNote(chapterId, txt){ const n = this.getNotes(); n[chapterId] = txt; this._set(this.KEYS.notes, n); },
  getNote(chapterId)     { return this.getNotes()[chapterId] || ''; },

  getQuizScores()        { return this._get(this.KEYS.quizScores, {}); },
  saveQuizScore(qid, score, total) {
    const s = this.getQuizScores(); s[qid] = { score, total }; this._set(this.KEYS.quizScores, s);
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
};
