/**
 * flashcards.js — Flip-card study system
 */
const Flashcards = (() => {
  const panel   = document.getElementById('flashcard-panel');
  const dotsRow = document.getElementById('fc-dots');
  const area    = document.getElementById('fc-area');

  let deck   = [];
  let curIdx = 0;
  let filterCh = 'all';

  function open(chapterNum) {
    filterCh = chapterNum || 'all';
    rebuildDeck();
    curIdx = 0;
    panel?.classList.add('open');
    renderCard();
    renderFilters();
  }

  function close() { panel?.classList.remove('open'); }

  function rebuildDeck() {
    if (typeof flashcardsData === 'undefined') { deck = []; return; }
    deck = filterCh === 'all'
      ? [...flashcardsData]
      : flashcardsData.filter(f => f.chapter === filterCh);
    // Shuffle slightly - mastered go to end
    deck.sort((a, b) => {
      const am = AppStorage.isFCMastered(a.id);
      const bm = AppStorage.isFCMastered(b.id);
      return am === bm ? 0 : am ? 1 : -1;
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
        curIdx = 0;
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

    const card     = deck[curIdx];
    const mastered = AppStorage.isFCMastered(card.id);
    const total    = deck.length;

    area.innerHTML = `
      <div style="text-align:center;font-size:.8rem;color:var(--text-3);margin-bottom:12px;font-weight:600">
        ${curIdx + 1} / ${total} · ${card.topic}
        ${mastered ? '<span style="color:var(--green);margin-left:6px">✓ Mastered</span>' : ''}
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
      <div class="fc-actions" style="margin-top:20px;max-width:360px">
        <button class="btn-fc btn-fc-hard" id="fc-hard" style="border-color:var(--red);color:var(--red);background:rgba(239,68,68,.07)">Hard</button>
        <button class="btn-fc" style="border-color:var(--teal);color:var(--teal);background:rgba(45,212,191,.07)" id="fc-master">
          ${mastered ? `${Icons.star} Unmark` : `${Icons.starOff} Master`}
        </button>
        <button class="btn-fc btn-fc-easy" id="fc-easy" style="border-color:var(--green);color:var(--green);background:rgba(16,185,129,.07)">Easy</button>
      </div>`;

    renderMath(area);

    document.getElementById('fc-wrap')?.addEventListener('click', () => {
      document.getElementById('fc-wrap')?.classList.toggle('flipped');
    });
    document.getElementById('fc-hard')?.addEventListener('click', () => {
      if (deck.length > 1) {
        const card = deck.splice(curIdx, 1)[0];
        deck.splice(Math.min(curIdx + 3, deck.length), 0, card);
      }
      document.getElementById('fc-wrap')?.classList.remove('flipped');
      renderCard();
    });
    document.getElementById('fc-easy')?.addEventListener('click', () => {
      if (deck.length > 1) {
        const card = deck.splice(curIdx, 1)[0];
        deck.push(card);
      }
      document.getElementById('fc-wrap')?.classList.remove('flipped');
      renderCard();
    });
    document.getElementById('fc-master')?.addEventListener('click', () => {
      AppStorage.toggleFCMastered(card.id);
      Progress.update();
      renderCard();
    });
  }

  function renderDots() {
    if (!dotsRow) return;
    const shown = Math.min(deck.length, 15);
    dotsRow.innerHTML = Array.from({ length: shown }, (_, i) => {
      const cls = i < curIdx ? 'done' : i === curIdx ? 'current' : '';
      return `<div class="fc-progress-dot ${cls}"></div>`;
    }).join('');
  }

  function init() {
    document.getElementById('fc-close')?.addEventListener('click', close);
  }

  return { init, open, close };
})();
