/**
 * search.js - Live search across chapters, formulas, flashcards, quizzes
 */
const Search = (() => {
  let index = null;
  let timer = null;

  function buildIndex() {
    const idx = [];

    // Chapters & Sections
    if (typeof chaptersData !== 'undefined') {
      chaptersData.forEach(ch => {
        idx.push({ type: 'chapter', id: ch.id, title: `Ch ${ch.number}: ${ch.shortTitle}`, body: ch.sections.map(s => s.title).join(' ') });
        ch.sections.forEach(s => idx.push({
          type: 'section',
          id: ch.id,
          sectionId: s.id,
          title: s.title,
          body: ch.shortTitle,
        }));
      });
    }

    // Formulas
    if (typeof formulasData !== 'undefined') {
      formulasData.forEach(f => idx.push({ type: 'formula', id: f.id, title: f.name, body: `${f.category} ${f.use}` }));
    }

    // Flashcards - store chapter number for targeted navigation
    if (typeof flashcardsData !== 'undefined') {
      flashcardsData.forEach(f => idx.push({
        type: 'flashcard',
        id: f.id,
        chapterId: `chapter-${f.chapter}`,
        title: f.front.replace(/\$/g, '').replace(/\\[a-z]+/gi, '').trim().slice(0, 80),
        body: f.topic
      }));
    }

    // Quizzes - index each question individually
    if (typeof quizzesData !== 'undefined') {
      quizzesData.forEach(quiz => {
        quiz.questions.forEach(q => idx.push({
          type: 'quiz',
          id: quiz.id,
          chapterId: `chapter-${quiz.chapter}`,
          title: q.text.replace(/\$/g, '').replace(/\\[a-z]+/gi, '').trim().slice(0, 80),
          body: quiz.title
        }));
      });
    }

    return idx;
  }

  function doSearch(q) {
    const overlay = document.getElementById('search-overlay');
    if (!overlay) return;
    if (!q.trim()) { overlay.classList.add('hidden'); return; }
    if (!index) index = buildIndex();

    const lower = q.toLowerCase();
    const hits  = index.filter(item =>
      item.title.toLowerCase().includes(lower) || (item.body || '').toLowerCase().includes(lower)
    ).slice(0, 12);

    if (!hits.length) {
      overlay.innerHTML = '<p class="search-empty">No results found</p>';
      overlay.classList.remove('hidden');
      return;
    }

    const typeIcons = {
      chapter:   Icons.book,
      section:   Icons.ruler,
      formula:   Icons.box,
      flashcard: Icons.layers,
      quiz:      Icons.target
    };

    const typeBadgeColors = {
      chapter:   'var(--blue)',
      section:   'var(--accent)',
      formula:   'var(--green)',
      flashcard: '#a855f7',
      quiz:      '#f59e0b'
    };

    overlay.innerHTML = hits.map(h => `
      <div class="search-item" data-type="${h.type}" data-id="${h.id}" data-section-id="${h.sectionId || ''}" data-chapter-id="${h.chapterId || ''}" role="button" tabindex="0">
        <span class="search-icon">${typeIcons[h.type] || Icons.target}</span>
        <div>
          <div class="search-item-title">${h.title}
            <span class="search-badge" style="background:${typeBadgeColors[h.type] || 'var(--surface-2)'}22;color:${typeBadgeColors[h.type] || 'var(--text-2)'};border:1px solid ${typeBadgeColors[h.type] || 'var(--border)'}44">${h.type}</span>
          </div>
          ${h.body ? `<div class="search-item-body">${h.body.slice(0, 70)}</div>` : ''}
        </div>
      </div>`).join('');
    overlay.classList.remove('hidden');

    overlay.querySelectorAll('.search-item').forEach(item => {
      const activate = () => {
        const { type, id, sectionId, chapterId } = item.dataset;
        overlay.classList.add('hidden');
        document.getElementById('global-search').value = '';

        if (type === 'chapter') {
          Navigation.loadChapter(id);
          setTimeout(() => {
            const h1 = document.querySelector('.chapter-content h1');
            if (h1) {
              h1.tabIndex = -1;
              h1.focus();
            }
          }, 100);
        } else if (type === 'section') {
          Navigation.loadChapter(id, sectionId);
          setTimeout(() => {
            const sec = document.getElementById(sectionId);
            if (sec) {
              sec.tabIndex = -1;
              sec.focus();
            }
          }, 100);
        } else if (type === 'formula') {
          const panel = document.getElementById('formula-panel');
          if (panel) {
            panel.classList.add('open');
            panel.tabIndex = -1;
            panel.focus();
          }
          if (typeof renderFormulaPanel === 'function') renderFormulaPanel();
          setTimeout(() => {
            document.querySelector(`[data-formula-id="${id}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 50);
        } else if (type === 'flashcard') {
          // Navigate to the matching chapter's flashcard deck
          const chNum = chapterId ? parseInt(chapterId.replace('chapter-', '')) : null;
          if (chNum) Flashcards.open(chNum);
          else Flashcards.open('all');
        } else if (type === 'quiz') {
          // Navigate to the matching chapter then scroll to quiz
          if (chapterId) Navigation.loadChapter(chapterId);
          setTimeout(() => {
            const quizEl = document.getElementById(id);
            quizEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 450);
        }
      };
      item.addEventListener('click', activate);
      item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') activate(); });
    });
  }

  function init() {
    index = null; // Reset so new data is picked up
    const input   = document.getElementById('global-search');
    const overlay = document.getElementById('search-overlay');
    if (!input) return;

    input.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => doSearch(input.value), 180);
    });
    input.addEventListener('focus', () => { if (input.value) doSearch(input.value); });
    document.addEventListener('click', e => {
      if (!overlay?.contains(e.target) && e.target !== input) overlay?.classList.add('hidden');
    });
    input.addEventListener('keydown', e => {
      if (e.key === 'Escape') { overlay?.classList.add('hidden'); input.value = ''; }
      if (e.key === 'ArrowDown') {
        const first = overlay?.querySelector('.search-item');
        first?.focus();
        e.preventDefault();
      }
    });
    // Arrow key navigation within results
    overlay?.addEventListener('keydown', e => {
      const items = [...(overlay?.querySelectorAll('.search-item') || [])];
      const cur = items.indexOf(document.activeElement);
      if (e.key === 'ArrowDown' && cur < items.length - 1) { items[cur + 1].focus(); e.preventDefault(); }
      if (e.key === 'ArrowUp') { cur > 0 ? items[cur - 1].focus() : input.focus(); e.preventDefault(); }
    });
  }

  return { init };
})();
