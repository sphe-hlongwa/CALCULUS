/* Dependency-free FolderFloat adaptation for the static study site. */
(function () {
  'use strict';

  const jitter = index => {
    const value = Math.sin(index * 12.9898 + 4.1414) * 43758.5453;
    return value - Math.floor(value);
  };

  function initFolderFloat(root) {
    if (!root || root.dataset.folderReady === 'true') return;
    const items = Array.from(root.querySelectorAll('.folder-float__item'));
    const trigger = root.querySelector('.folder-float__trigger');
    const itemLayer = root.querySelector('.folder-float__items');
    if (!trigger || !itemLayer || !items.length) return;

    let open = false;
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches || false;
    const hoverTrigger = root.dataset.trigger === 'hover';
    root.style.setProperty('--ff-n', items.length);

    const positionItems = () => {
      const spread = Math.min(230, Math.max(150, root.clientWidth * .42));
      const gap = 12;
      const rowHeight = 45;
      const widths = items.map(item => Math.min(260, Math.max(92, item.textContent.trim().length * 7 + 28)));
      const rows = [];
      let row = [];
      let rowWidth = 0;
      widths.forEach((width, index) => {
        if (row.length && rowWidth + gap + width > spread * 2) {
          rows.push({ items: row, width: rowWidth });
          row = [];
          rowWidth = 0;
        }
        row.push({ index, width });
        rowWidth += (row.length > 1 ? gap : 0) + width;
      });
      if (row.length) rows.push({ items: row, width: rowWidth });

      rows.forEach((current, rowIndex) => {
        let x = -current.width / 2;
        current.items.forEach(({ index, width }) => {
          const random = jitter(index);
          const shift = (rowIndex % 2 ? 1 : -1) * Math.min(16, spread * .1);
          items[index].style.setProperty('--x', `${(x + width / 2 + shift + (random - .5) * 6).toFixed(1)}px`);
          items[index].style.setProperty('--y', `${(-30 - rowIndex * rowHeight - random * 6).toFixed(1)}px`);
          items[index].style.setProperty('--r', `${((random * 2 - 1) * 8).toFixed(2)}deg`);
          x += width + gap;
        });
      });
    };

    const setOpen = next => {
      open = next;
      root.toggleAttribute('data-open', open);
      trigger.setAttribute('aria-expanded', String(open));
      items.forEach(item => {
        item.tabIndex = open ? 0 : -1;
        item.setAttribute('aria-hidden', String(!open));
      });
    };

    trigger.addEventListener('click', () => setOpen(!open));
    if (hoverTrigger) {
      root.addEventListener('pointerenter', () => {
        if (!reduced) setOpen(true);
      });
      root.addEventListener('pointerleave', () => setOpen(false));
    }
    root.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        setOpen(false);
        trigger.focus();
      }
    });
    items.forEach((item, index) => {
      item.addEventListener('click', () => {
        root.dispatchEvent(new CustomEvent('folderfloatselect', {
          bubbles: true,
          detail: { value: item.dataset.value || item.textContent.trim(), index }
        }));
        setOpen(false);
      });
    });
    window.addEventListener('resize', positionItems, { passive: true });
    positionItems();
    setOpen(false);
    root.dataset.folderReady = 'true';
  }

  window.FolderFloat = { init: initFolderFloat };
}());
