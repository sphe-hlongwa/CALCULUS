/**
 * navigation.js — sidebar TOC and chapter switching
 */
const Navigation = (() => {
  let activeChapterId = null;
  let contentChapterId = null; // tracks which chapter is actually rendered in #content-area
  let isCollapsed = false;
  let _observer = null;

  function build() {
    if (typeof chaptersData === 'undefined') return;

    // 1. Build Nav Rail (Chapters)
    const railEl = document.getElementById('nav-rail-chapters');
    if (railEl) {
      railEl.innerHTML = '';
      chaptersData.forEach(ch => {
        const btn = document.createElement('button');
        btn.className = 'icon-nav-btn';
        btn.title = ch.shortTitle || ch.title;
        btn.dataset.id = ch.id;
        btn.innerHTML = `<span class="toc-ch-num">${ch.number}</span>`;
        railEl.appendChild(btn);
      });

      // Event delegation for Nav Rail
      if (!railEl.dataset.navigationBound) {
        railEl.addEventListener('click', e => {
          const btn = e.target.closest('.icon-nav-btn');
          if (btn && btn.dataset.id) {
            loadChapter(btn.dataset.id);
          }
        });
        railEl.dataset.navigationBound = 'true';
      }
    }

    // 2. Setup Toggle Collapse
    const toggleBtn = document.getElementById('sidebar-collapse-toggle');
    if (toggleBtn && !toggleBtn.dataset.navigationBound) {
      toggleBtn.dataset.navigationBound = 'true';
      toggleBtn.addEventListener('click', () => {
        isCollapsed = !isCollapsed;
        document.getElementById('sidebar-detail')?.classList.toggle('collapsed', isCollapsed);
        document.querySelector('.app-shell')?.classList.toggle('detail-collapsed', isCollapsed);
      });
    }

    // 2b. Rail logo also re-expands the panel once collapsed (the chevron
    // itself is inside the collapsed panel and becomes unreachable at width 0)
    const expandBtn = document.getElementById('sidebar-expand-toggle');
    if (expandBtn && !expandBtn.dataset.navigationBound) {
      expandBtn.dataset.navigationBound = 'true';
      expandBtn.addEventListener('click', () => {
        if (!isCollapsed) return;
        isCollapsed = false;
        document.getElementById('sidebar-detail')?.classList.remove('collapsed');
        document.querySelector('.app-shell')?.classList.remove('detail-collapsed');
      });
    }


    // 3. Search Filter in Detail Sidebar
    const searchInput = document.getElementById('sidebar-search-input');
    if (searchInput && !searchInput.dataset.navigationBound) {
      searchInput.dataset.navigationBound = 'true';
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll('#sidebar-detail-content .menu-item').forEach(item => {
          const text = item.textContent.toLowerCase();
          item.style.display = text.includes(query) ? 'flex' : 'none';
        });
      });
    }

    // Initialize with first chapter if nothing active
    if (!activeChapterId && chaptersData.length > 0) {
      activeChapterId = chaptersData[0].id;
      renderDetail(chaptersData[0]);
    }
  }

  function renderDetail(chapter) {
    const detailContent = document.getElementById('sidebar-detail-content');
    const titleEl = document.getElementById('active-chapter-title');
    if (!detailContent || !titleEl) return;

    titleEl.textContent = `Chapter ${chapter.number}`;
    detailContent.innerHTML = '';

    if (chapter.sections && chapter.sections.length) {
      const menuSection = document.createElement('div');
      menuSection.className = 'menu-section';

      const title = document.createElement('div');
      title.className = 'menu-section-title';
      title.textContent = 'Sections';
      menuSection.appendChild(title);

      chapter.sections.forEach(sec => {
        const item = document.createElement('button');
        item.className = 'menu-item toc-section-btn';
        item.dataset.cid = chapter.id;
        item.dataset.sid = sec.id;

        item.innerHTML = `
          <div class="menu-item-icon">${Icons.hash || ''}</div>
          <div class="menu-item-label">${sec.title}</div>
        `;
        menuSection.appendChild(item);
      });

      detailContent.appendChild(menuSection);

      // Event delegation for detail section
      if (!detailContent.dataset.navigationBound) {
        detailContent.addEventListener('click', e => {
          const btn = e.target.closest('.menu-item');
          if (btn) {
            loadChapter(btn.dataset.cid, btn.dataset.sid);
          }
        });
        detailContent.dataset.navigationBound = 'true';
      }
    }

    // Update rail active state
    document.querySelectorAll('#nav-rail-chapters .icon-nav-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.id === chapter.id);
    });
  }

  function loadChapter(id, sectionId = null) {
    const ch = (typeof chaptersData !== 'undefined') && chaptersData.find(c => c.id === id);
    if (!ch) return;

    if (contentChapterId !== id) {
      activeChapterId = id;
      contentChapterId = id;
      renderDetail(ch);
      ContentRenderer.render(ch);
      setTimeout(() => _attachSectionObserver(), 120);
    }

    // Close mobile menu if open
    document.querySelector('.sidebar-wrapper')?.classList.remove('mobile-open');

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      document.querySelector('.main-content')?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function _attachSectionObserver() {
    if (_observer) _observer.disconnect();

    const mainEl = document.querySelector('.main-content');
    if (!mainEl) return;

    const headings = mainEl.querySelectorAll('h2[id].section-heading, h3[id].section-heading');
    if (!headings.length) return;

    _observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const sid = entry.target.id;
          const btn = document.querySelector(`.menu-item[data-sid="${sid}"]`);
          if (!btn) return;
          if (entry.isIntersecting) {
            document.querySelectorAll('.menu-item.active').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
          }
        });
      },
      {
        root: mainEl,
        rootMargin: '-10% 0px -70% 0px',
        threshold: 0
      }
    );

    headings.forEach(h => _observer.observe(h));
  }

  function refresh() {
    build();
    if (activeChapterId) {
      const ch = chaptersData.find(c => c.id === activeChapterId);
      if (ch) renderDetail(ch);
    }
  }
  function getActive() { return activeChapterId; }

  return { build, loadChapter, refresh, getActive };
})();
