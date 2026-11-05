/**
 * proofs.js - the Proofs page.
 * Layout: sticky toolbar (search, filters, progress) -> section dropdowns ->
 * proof dropdowns -> theorem card, step accordion, key idea card.
 */
const Proofs = (() => {
  const STORE_KEY = 'proofs_studied';
  const CHEV = '<svg class="pf-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
  const SEARCH = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';

  const all = () => proofsData.flatMap(g => g.proofs);
  const getDone = () => AppStorage._get(STORE_KEY, {});
  const setDone = d => AppStorage._set(STORE_KEY, d);

  function stepHTML(s, k, open) {
    return `
      <li class="pf-step ${open ? 'pf-open' : ''}">
        <button type="button" class="pf-step-head" aria-expanded="${open}">
          <span class="pf-step-num">${k + 1}</span><span class="pf-step-label">${s.t}</span>${CHEV}
        </button>
        <div class="pf-collapse"><div class="pf-collapse-inner"><div class="pf-step-body">${s.b}</div></div></div>
      </li>`;
  }

  function proofHTML(g, p, i, done) {
    const isDone = !!done[p.id];
    return `
      <article class="pf-proof ${isDone ? 'pf-done' : ''}" id="${p.id}" data-id="${p.id}"
        data-search="${(p.title + ' ' + p.ref + ' ' + g.title + ' ' + p.statement + ' ' + p.idea).toLowerCase().replace(/"/g, '&quot;')}">
        <button type="button" class="pf-head" aria-expanded="false">
          <span class="pf-ref">${p.ref}</span>
          <span class="pf-title">${p.title}</span>
          <span class="pf-meta pf-meta-steps">${p.steps.length} steps</span>
          <span class="pf-tick" aria-label="${isDone ? 'Studied' : 'Not studied'}">✓</span>
          ${CHEV}
        </button>
        <div class="pf-collapse"><div class="pf-collapse-inner">
          <div class="pf-body">
            <div class="content-card card-theorem">
              <div class="card-badge">${Icons.book} Statement</div>
              <div class="pf-statement">${p.statement}</div>
            </div>

            <div>
              <div class="pf-block-title">
                <span>Proof · ${p.steps.length} steps</span><span class="pf-spacer"></span>
                <button type="button" class="pf-btn pf-btn-primary" data-act="stepthrough">Step through</button>
                <button type="button" class="pf-btn" data-act="steps-expand">Expand steps</button>
                <button type="button" class="pf-btn" data-act="steps-collapse">Collapse steps</button>
              </div>
              <ol class="pf-steps" style="margin-top:10px">${p.steps.map((s, k) => stepHTML(s, k, true)).join('')}</ol>
            </div>

            <div class="content-card card-tip">
              <div class="card-badge">${Icons.bulb} Key Idea</div>
              <p>${p.idea}</p>
            </div>

            <div class="pf-footer">
              <button type="button" class="pf-btn pf-btn-primary" data-act="done">${isDone ? 'Marked as studied ✓' : 'Mark as studied'}</button>
            </div>
          </div>
        </div></div>
      </article>`;
  }

  function groupHTML(g, done) {
    const doneN = g.proofs.filter(p => done[p.id]).length;
    return `
      <section class="pf-group pf-open" id="${g.id}" data-group="${g.id}">
        <button type="button" class="pf-group-head" aria-expanded="true">
          <span class="pf-group-num">${g.section}</span>
          <span class="pf-group-title">${g.title}</span>
          <span class="pf-meta"><span data-group-done>${doneN}</span>/${g.proofs.length} studied</span>
          ${CHEV}
        </button>
        <div class="pf-collapse"><div class="pf-collapse-inner">
          <div class="pf-group-list">${g.proofs.map((p, i) => proofHTML(g, p, i, done)).join('')}</div>
        </div></div>
      </section>`;
  }

  function setOpen(el, open) {
    el.classList.toggle('pf-open', open);
    el.querySelector(':scope > button')?.setAttribute('aria-expanded', String(open));
    // Typeset a proof's maths only the first time it is opened: keeps the page
    // light (a few dozen formulas instead of hundreds) so scrolling stays smooth.
    if (open && el.classList.contains('pf-proof') && !el.dataset.mathReady) {
      el.dataset.mathReady = '1';
      renderMath(el.querySelector(':scope > .pf-collapse'));
    }
  }

  function open(targetId) {
    const area = document.getElementById('content-area');
    if (!area || typeof proofsData === 'undefined') return;
    window.CircularCarousel?.destroy?.(area.querySelector('#welcome-carousel'));
    Navigation.reset?.();
    document.querySelector('.sidebar-wrapper')?.classList.remove('mobile-open');
    const done = getDone();

    area.innerHTML = `
      <div class="content-page fade-in" id="proofs-page">
        <div class="chapter-hero">
          <div class="chapter-number">Sections 6.6 · 9 · 10 · 11 · 12</div>
          <h1>Proofs</h1>
          <div class="chapter-hero-actions">
            <button type="button" class="btn-hero btn-hero-primary" data-top="expand">Open all proofs</button>
            <button type="button" class="btn-hero btn-hero-primary" data-top="collapse">Close all</button>
            <button type="button" class="btn-hero btn-hero-secondary" data-top="home">Back to home</button>
          </div>
        </div>

        <div class="pf-toolbar">
          <div class="pf-toolbar-row">
            <label class="pf-search">${SEARCH}<input type="search" id="pf-search" placeholder="Search proofs, e.g. Fermat, series, reduction…" autocomplete="off"></label>
            <div class="pf-chips" role="group" aria-label="Filter">
              <button type="button" class="pf-chip" data-filter="all" aria-pressed="true">All</button>
              <button type="button" class="pf-chip" data-filter="todo" aria-pressed="false">To study</button>
              <button type="button" class="pf-chip" data-filter="done" aria-pressed="false">Studied</button>
            </div>
          </div>
          <div class="pf-progress"><span id="pf-progress-text"></span><div class="pf-progress-bar"><span id="pf-progress-fill"></span></div></div>
        </div>

        <div id="pf-groups">${proofsData.map(g => groupHTML(g, done)).join('')}</div>
        <div class="pf-empty" id="pf-empty" hidden>No proofs match your search.</div>

        <div class="chapter-actions"><button type="button" class="btn-secondary" data-top="home">Back to home</button></div>
      </div>`;

    bind(area);
    updateProgress(area);
    setTimeout(() => {
      // Only the always-visible proof titles are typeset up front.
      area.querySelectorAll('.pf-head').forEach(h => renderMath(h));
      if (targetId) reveal(area, targetId);
    }, 50);
    document.querySelector('.main-content')?.scrollTo({ top: 0 });
  }

  function reveal(area, id) {
    const el = area.querySelector('#' + id);
    if (!el) return;
    const grp = el.closest('.pf-group');
    if (grp) setOpen(grp, true);
    setOpen(el, true);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function updateProgress(area) {
    const done = getDone();
    const total = all().length;
    const n = all().filter(p => done[p.id]).length;
    area.querySelector('#pf-progress-text').textContent = `${n} of ${total} proofs studied`;
    area.querySelector('#pf-progress-fill').style.width = `${(n / total) * 100}%`;
    area.querySelectorAll('.pf-group').forEach(g => {
      const grp = proofsData.find(x => x.id === g.dataset.group);
      g.querySelector('[data-group-done]').textContent = grp.proofs.filter(p => done[p.id]).length;
    });
  }

  function applyFilter(area) {
    const q = area.querySelector('#pf-search').value.trim().toLowerCase();
    const mode = area.querySelector('.pf-chip[aria-pressed="true"]').dataset.filter;
    const done = getDone();
    let shown = 0;
    area.querySelectorAll('.pf-proof').forEach(el => {
      const ok = (!q || el.dataset.search.includes(q)) &&
        (mode === 'all' || (mode === 'done') === !!done[el.dataset.id]);
      el.hidden = !ok;
      if (ok) shown++;
    });
    area.querySelectorAll('.pf-group').forEach(g => {
      const any = g.querySelector('.pf-proof:not([hidden])');
      g.hidden = !any;
      if (any && q) setOpen(g, true);
    });
    area.querySelector('#pf-empty').hidden = shown > 0;
  }

  function setSteps(proof, open) {
    proof.querySelectorAll('.pf-step').forEach(s => setOpen(s, open));
    proof._through = null;
    const b = proof.querySelector('[data-act="stepthrough"]');
    if (b) b.textContent = 'Step through';
  }

  function stepThrough(proof) {
    const steps = proof.querySelectorAll('.pf-step');
    const btn = proof.querySelector('[data-act="stepthrough"]');
    if (proof._through == null) {          // start: hide everything
      steps.forEach(s => setOpen(s, false));
      proof._through = 0;
    }
    if (proof._through < steps.length) {   // reveal the next step
      setOpen(steps[proof._through], true);
      proof._through++;
    }
    if (proof._through >= steps.length) { proof._through = null; btn.textContent = 'Restart step through'; }
    else btn.textContent = `Next step (${proof._through + 1}/${steps.length})`;
  }

  function bind(area) {
    area.addEventListener('click', e => {
      const t = e.target;
      const top = t.closest('[data-top]');
      if (top) {
        if (top.dataset.top === 'home') return renderWelcome();
        const openIt = top.dataset.top === 'expand';
        area.querySelectorAll('.pf-group').forEach(g => setOpen(g, true));
        const list = Array.from(area.querySelectorAll('.pf-proof'));
        if (!openIt) { list.forEach(p => setOpen(p, false)); return; }
        // Open one proof per frame so typesetting never freezes the page.
        (function next() {
          const p = list.shift();
          if (!p) return;
          setOpen(p, true);
          requestAnimationFrame(next);
        })();
        return;
      }
      const chip = t.closest('.pf-chip');
      if (chip) {
        area.querySelectorAll('.pf-chip').forEach(c => c.setAttribute('aria-pressed', String(c === chip)));
        return applyFilter(area);
      }
      const gh = t.closest('.pf-group-head');
      if (gh) { const g = gh.parentElement; return setOpen(g, !g.classList.contains('pf-open')); }
      const ph = t.closest('.pf-head');
      if (ph) { const p = ph.parentElement; return setOpen(p, !p.classList.contains('pf-open')); }
      const sh = t.closest('.pf-step-head');
      if (sh) { const s = sh.parentElement; return setOpen(s, !s.classList.contains('pf-open')); }
      const act = t.closest('[data-act]');
      if (!act) return;
      const proof = act.closest('.pf-proof');
      switch (act.dataset.act) {
        case 'steps-expand': return setSteps(proof, true);
        case 'steps-collapse': return setSteps(proof, false);
        case 'stepthrough': return stepThrough(proof);
        case 'done': {
          const d = getDone();
          if (d[proof.dataset.id]) delete d[proof.dataset.id]; else d[proof.dataset.id] = true;
          setDone(d);
          Progress.syncAll();
          const on = !!d[proof.dataset.id];
          if (on) AppStorage.logActivity('proof');
          proof.classList.toggle('pf-done', on);
          act.textContent = on ? 'Marked as studied ✓' : 'Mark as studied';
          updateProgress(area);
          if (area.querySelector('.pf-chip[aria-pressed="true"]').dataset.filter !== 'all') applyFilter(area);
        }
      }
    });
    area.querySelector('#pf-search').addEventListener('input', () => applyFilter(area));
  }

  return { open };
})();