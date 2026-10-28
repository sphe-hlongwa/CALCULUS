/* Explainer video cards.
 * Reads videosData (data/videos.js) and, for every entry with a video, inserts a card
 * into the matching section, just before its first worked example (or after its first
 * content card if the section has no examples). Videos load only when clicked, so
 * pages stay fast and no third-party player is fetched until a student asks for it.
 */
(function () {
  'use strict';

  function parseVideoId(v) {
    if (!v) return '';
    v = String(v).trim();
    if (/^[\w-]{11}$/.test(v)) return v;
    var m = v.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/);
    return m ? m[1] : '';
  }

  function showSlots() {
    return /[?&]video-slots\b/.test(window.location.search + window.location.hash);
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function buildCard(entry, id) {
    var card = document.createElement('div');
    card.className = 'video-card fade-up' + (id ? '' : ' video-card-empty');
    card.setAttribute('data-video-section', entry.section);

    var head = '<h3>' + (typeof Icons !== 'undefined' && Icons.layers ? Icons.layers : '') +
      ' Watch: ' + esc(entry.title) + '</h3>' +
      (entry.watch ? '<p>' + esc(entry.watch) + '</p>' : '');

    if (!id) {
      card.innerHTML = head + '<div class="video-slot-note">Video slot (not filled yet). ' +
        'Add a link in data/videos.js.</div>';
      return card;
    }

    card.innerHTML = head +
      '<button type="button" class="video-frame video-facade" aria-label="Play video: ' + esc(entry.title) + '">' +
        '<img src="https://i.ytimg.com/vi/' + id + '/hqdefault.jpg" alt="" loading="lazy">' +
        '<span class="video-play" aria-hidden="true"></span>' +
      '</button>';

    var facade = card.querySelector('.video-facade');
    facade.addEventListener('click', function () {
      var start = parseInt(entry.start, 10) > 0 ? '&start=' + parseInt(entry.start, 10) : '';
      var wrap = document.createElement('div');
      wrap.className = 'video-frame';
      wrap.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id +
        '?autoplay=1&rel=0' + start + '" title="' + esc(entry.title) + '" ' +
        'allow="accelerometer; autoplay; encrypted-media; picture-in-picture" ' +
        'allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>';
      facade.replaceWith(wrap);
    });
    return card;
  }

  function insertCard(heading, card) {
    var firstContent = null;
    var node = heading.nextElementSibling;
    while (node && !node.classList.contains('section-heading')) {
      if (node.classList.contains('worked-example')) {
        node.parentNode.insertBefore(card, node);
        return;
      }
      if (!firstContent && node.classList.contains('content-card')) firstContent = node;
      node = node.nextElementSibling;
    }
    if (firstContent) firstContent.after(card);
    else heading.after(card);
  }

  window.initVideos = function (root) {
    if (typeof videosData === 'undefined' || !root) return;
    var slots = showSlots();
    videosData.forEach(function (entry) {
      var heading = root.querySelector('#' + entry.section);
      if (!heading) return;                       // section not on this chapter page
      if (root.querySelector('.video-card[data-video-section="' + entry.section + '"]')) return;
      var id = parseVideoId(entry.video);
      if (!id && !slots) return;                  // hide unfilled slots from students
      insertCard(heading, buildCard(entry, id));
    });
  };
})();