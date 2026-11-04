/**
 * flashcards.js - Flip-card study system
 */
const Flashcards = (() => {
  const panel   = document.getElementById('flashcard-panel');
  const dotsRow = document.getElementById('fc-dots');
  const area    = document.getElementById('fc-area');

  let deck   = [];
  let curIdx = 0;
  let filterCh = 'all';
  let returnFocus = null;
  let pending = new Set();   // card ids still to be rated in this round
  let finished = false;      // round complete -> summary screen

  // Per-card self-ratings: { [id]: { h: hardCount, e: easyCount, last: 'h'|'e' } }
  const RKEY = 'calc_fc_ratings';
  function getRatings() {
    try { return JSON.parse(localStorage.getItem(RKEY)) || {}; } catch { return {}; }
  }
  function rate(id, kind) {
    const r = getRatings();
    const c = r[id] || { h: 0, e: 0 };
    c[kind]++; c.last = kind; r[id] = c;
    try { localStorage.setItem(RKEY, JSON.stringify(r)); } catch {}
  }

  function open(chapterNum) {
    returnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    filterCh = chapterNum || 'all';
    rebuildDeck();
    panel?.classList.add('open');
    if (panel) {
      panel.tabIndex = -1;
      panel.focus();
    }
    renderCard();
    renderFilters();
  }

  function close() {
    panel?.classList.remove('open');
    returnFocus?.focus();
    returnFocus = null;
  }

  function rebuildDeck() {
    if (typeof flashcardsData === 'undefined') { deck = []; return; }
    deck = filterCh === 'all'
      ? [...flashcardsData]
      : flashcardsData.filter(f => f.chapter === filterCh);
    // Unrated first, then hard, then easy, mastered last
    const r = getRatings();
    const rank = c => AppStorage.isFCMastered(c.id) ? 3 : !r[c.id]?.last ? 0 : r[c.id].last === 'h' ? 1 : 2;
    deck.sort((a, b) => rank(a) - rank(b));
    startRound(deck.filter(c => rank(c) === 0).map(c => c.id));
  }

  function startRound(ids) {
    pending = new Set(ids);
    finished = pending.size === 0 && deck.length > 0;
    curIdx = 0;
    const first = deck.findIndex(c => pending.has(c.id));
    if (first >= 0) curIdx = first;
  }

  // After rating: drop card from pending and jump to the next unrated card
  function advance(card) {
    pending.delete(card.id);
    if (!pending.size) { finished = true; renderCard(); return; }
    for (let i = 1; i <= deck.length; i++) {
      const idx = (curIdx + i) % deck.length;
      if (pending.has(deck[idx].id)) { curIdx = idx; break; }
    }
    renderCard();
  }

  function renderDone() {
    const r = getRatings();
    let h = 0, e = 0, m = 0;
    deck.forEach(c => {
      if (AppStorage.isFCMastered(c.id)) m++;
      else if (r[c.id]?.last === 'h') h++;
      else if (r[c.id]?.last === 'e') e++;
    });
    area.innerHTML = `
      <div style="text-align:center;max-width:360px">
        <div style="font-size:3rem;margin-bottom:8px">${Icons.partyPopper}</div>
        <h3 style="margin-bottom:6px">All ${deck.length} cards rated</h3>
        <p style="color:var(--text-2);font-size:.9rem;margin-bottom:18px">
          <span style="color:var(--red)">${h} hard</span> · <span style="color:var(--green)">${e} easy</span> · <span style="color:var(--teal)">${m} mastered</span>
        </p>
        <div class="fc-actions fc-actions-row" style="flex-wrap:wrap">
          ${h ? `<button class="btn-fc" id="fc-rev-hard" style="border-color:var(--red);color:var(--red)">Review ${h} hard card${h>1?'s':''}</button>` : ''}
          <button class="btn-fc" id="fc-browse">Browse all cards</button>
          <button class="btn-fc" id="fc-reset">Reset ratings &amp; start over</button>
        </div>
      </div>`;
    document.getElementById('fc-rev-hard')?.addEventListener('click', () => {
      startRound(deck.filter(c => !AppStorage.isFCMastered(c.id) && getRatings()[c.id]?.last === 'h').map(c => c.id));
      renderCard();
    });
    document.getElementById('fc-browse')?.addEventListener('click', () => { finished = false; curIdx = 0; renderCard(); });
    document.getElementById('fc-reset')?.addEventListener('click', () => {
      const all = getRatings();
      deck.forEach(c => delete all[c.id]);
      try { localStorage.setItem(RKEY, JSON.stringify(all)); } catch {}
      rebuildDeck();
      renderCard();
    });
  }

  function renderFilters() {
    const filterEl = document.getElementById('fc-filter');
    if (!filterEl) return;
    const chapters = typeof chaptersData !== 'undefined' ? chaptersData : [];
    const allBtn = `<button class="fc-filter-btn ${filterCh === 'all' ? 'active' : ''}" data-ch="all">All</button>`;
    const chBtns = chapters.map(ch =>
      `<button class="fc-filter-btn ${filterCh === ch.number ? 'active' : ''}" data-ch="${ch.number}">Ch ${ch.number}</button>`
    ).join('');
    filterEl.innerHTML = allBtn + chBtns;
    filterEl.querySelectorAll('.fc-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filterCh = btn.dataset.ch === 'all' ? 'all' : parseInt(btn.dataset.ch);
        rebuildDeck();
        renderCard();
        renderFilters();
      });
    });
  }

  function renderCard() {
    if (!area) return;
    renderDots();

    if (!deck.length) {
      area.innerHTML = `<div style="text-align:center;color:var(--text-2);padding:40px">
        <div style="font-size:3rem;margin-bottom:12px">${Icons.partyPopper}</div>
        <p>No flashcards found for this filter.</p>
      </div>`;
      return;
    }

    if (finished) { renderDots(); renderDone(); return; }
    const card     = deck[curIdx];
    const mastered = AppStorage.isFCMastered(card.id);
    const total    = deck.length;
    const ratings  = getRatings();
    const rc       = ratings[card.id] || { h: 0, e: 0 };
    let hardCards = 0, easyCards = 0;
    deck.forEach(d => { const l = ratings[d.id]?.last; if (l === 'h') hardCards++; else if (l === 'e') easyCards++; });

    area.innerHTML = `
      <div style="text-align:center;font-size:.8rem;color:var(--text-3);margin-bottom:12px;font-weight:600">
        Card ${curIdx + 1} / ${total} · Rated ${total - pending.size} / ${total} · ${card.topic}
        ${mastered ? '<span style="color:var(--green);margin-left:6px">✓ Mastered</span>' : ''}
      </div>
      <div style="text-align:center;font-size:.75rem;color:var(--text-3);margin:-6px 0 12px">
        This card: <span style="color:var(--red)">Hard ×${rc.h}</span> · <span style="color:var(--green)">Easy ×${rc.e}</span>
        &nbsp;|&nbsp; Deck: <span style="color:var(--red)">${hardCards} hard</span> · <span style="color:var(--green)">${easyCards} easy</span> · ${total - hardCards - easyCards} unrated
      </div>
      <div class="flashcard-wrap" id="fc-wrap">
        <div class="flashcard-inner">
          <div class="fc-face fc-front">
            <div class="fc-tag">Question · Ch ${card.chapter}</div>
            <div class="fc-text">${card.front}</div>
            <div class="fc-hint">Click to reveal answer</div>
          </div>
          <div class="fc-face fc-back">
            <div class="fc-tag">Answer</div>
            <div class="fc-text">${card.back}</div>
          </div>
        </div>
      </div>
      <div class="fc-actions fc-actions-row" style="margin-top:20px">
        <button class="btn-fc" id="fc-prev" aria-label="Previous card" style="flex:0 0 44px">&larr;</button>
        <button class="btn-fc btn-fc-hard" id="fc-hard" style="border-color:var(--red);color:var(--red);background:rgba(239,68,68,.07)">Hard</button>
        <button class="btn-fc" style="border-color:var(--teal);color:var(--teal);background:rgba(45,212,191,.07)" id="fc-master">
          ${mastered ? `${Icons.star} Unmark` : `${Icons.starOff} Master`}
        </button>
        <button class="btn-fc btn-fc-easy" id="fc-easy" style="border-color:var(--green);color:var(--green);background:rgba(16,185,129,.07)">Easy</button>
        <button class="btn-fc" id="fc-next" aria-label="Next card" style="flex:0 0 44px">&rarr;</button>
      </div>`;

    renderMath(area);

    document.getElementById('fc-wrap')?.addEventListener('click', () => {
      document.getElementById('fc-wrap')?.classList.toggle('flipped');
    });
    document.getElementById('fc-prev')?.addEventListener('click', () => go(-1));
    document.getElementById('fc-next')?.addEventListener('click', () => go(1));
    // Hard / Easy / Master each rate this card, then jump to the next unrated one
    document.getElementById('fc-hard')?.addEventListener('click', () => { rate(card.id, 'h'); advance(card); });
    document.getElementById('fc-easy')?.addEventListener('click', () => { rate(card.id, 'e'); advance(card); });
    document.getElementById('fc-master')?.addEventListener('click', () => {
      const nowMastered = AppStorage.toggleFCMastered(card.id);
      Progress.update();
      if (nowMastered) advance(card); else renderCard();
    });
  }

  function go(step) {
    if (!deck.length) return;
    curIdx = (curIdx + step + deck.length) % deck.length;
    renderCard();
  }

  function renderDots() {
    if (!dotsRow) return;
    const shown = Math.min(deck.length, 15);
    const doneDots = deck.length ? Math.round(shown * (deck.length - pending.size) / deck.length) : 0;
    dotsRow.innerHTML = Array.from({ length: shown }, (_, i) => {
      const cls = i < doneDots ? 'done' : (!finished && i === doneDots) ? 'current' : '';
      return `<div class="fc-progress-dot ${cls}"></div>`;
    }).join('');
  }

  function onKey(e) {
    if (!panel?.classList.contains('open')) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    if (finished) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    else if (e.key === ' ') { e.preventDefault(); document.getElementById('fc-wrap')?.classList.toggle('flipped'); }
  }

  function init() {
    document.addEventListener('keydown', onKey);
    document.getElementById('fc-close')?.addEventListener('click', close);
  }

  return { init, open, close };
})();