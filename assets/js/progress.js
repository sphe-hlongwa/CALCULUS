/**
 * progress.js - top bar and sidebar progress tracking
 */
const Progress = (() => {
  function update() {
    const total     = typeof chaptersData !== 'undefined' ? chaptersData.length : 1;
    const completed = Object.keys(AppStorage.getProgress()).length;
    const pct       = Math.round((completed / total) * 100);

    document.querySelectorAll('.progress-fill').forEach(el => el.style.width = `${pct}%`);
    document.querySelectorAll('#progress-pct').forEach(el => el.textContent = `${pct}%`);
  }
  return { update };
})();
