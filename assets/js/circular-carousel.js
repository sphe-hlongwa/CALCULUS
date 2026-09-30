/* A small vanilla equivalent of the CircularCarousel interaction for this
 * static site. The cards remain ordinary buttons so the existing home actions
 * and keyboard semantics continue to work.
 *
 * Desktop: the ring is a full 3D cylinder. Each card is repeated on the far
 * side of the ring (a "clone" that forwards clicks to the real card), the
 * back faces are visible, and every card is shaded by its depth so the cards
 * behind fade into the background as they circulate. Same on desktop and mobile. */
(function () {
  'use strict';

  function initCircularCarousel(root) {
    if (!root || root.dataset.carouselReady === 'true') return;

    const ring = root.querySelector('.welcome-carousel__ring');
    const originals = Array.from(root.querySelectorAll('.welcome-carousel__card'));
    // The arrows and dots live beside the carousel, inside the wrapper.
    const scope = root.closest('.welcome-carousel-wrap') || root;
    const dots = Array.from(scope.querySelectorAll('.welcome-carousel__dot'));
    const caption = root.querySelector('.welcome-carousel__caption');
    const previous = scope.querySelector('[data-carousel-action="previous"]');
    const next = scope.querySelector('[data-carousel-action="next"]');
    if (!ring || !originals.length) return;

    const realCount = originals.length;

    // Far-side repeats of every card.
    const clones = originals.map(card => {
      const clone = card.cloneNode(true);
      clone.dataset.carouselClone = 'true';
      clone.setAttribute('aria-hidden', 'true');
      clone.setAttribute('tabindex', '-1');
      ring.appendChild(clone);
      return clone;
    });
    const allCards = [...originals, ...clones];
    let cards = originals.slice();

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches || false;
    let active = 0;
    let rotation = 0;
    let radius = 190;
    let animationFrame = 0;
    let lastFrame = 0;
    let pointerStart = null;
    let forwarding = false;

    const stepAngle = () => 360 / cards.length;
    const isVisible = card => getComputedStyle(card).display !== 'none';

    const setRadius = () => {
      // offsetWidth ignores 3D transforms; getBoundingClientRect() shrinks/grows with the card's rotation.
      const width = cards[0].offsetWidth || 220;
      const spacing = cards.length > realCount
        ? 28
        : Math.max(34, Math.min(76, root.clientWidth * 0.1));
      radius = Math.max(130, width / (2 * Math.tan(Math.PI / cards.length)) + spacing);
      root.style.setProperty('--carousel-radius', `${radius}px`);
      root.style.setProperty('--carousel-step', `${stepAngle()}deg`);
    };

    // Depth shading: front cards are bright and opaque, back cards dim out.
    const shade = () => {
      const step = stepAngle();
      cards.forEach((card, index) => {
        const angle = ((index * step + rotation) * Math.PI) / 180;
        const t = (Math.cos(angle) + 1) / 2;            // 1 = front, 0 = back
        const eased = Math.pow(t, 1.35);
        card.style.opacity = (0.3 + 0.7 * eased).toFixed(3);
        card.style.filter = `brightness(${(0.5 + 0.5 * eased).toFixed(3)}) saturate(${(0.65 + 0.35 * eased).toFixed(3)})`;
      });
    };

    const applyActiveState = () => {
      allCards.forEach(card => {
        const index = cards.indexOf(card);
        const selected = index === active;
        const isClone = card.dataset.carouselClone === 'true';
        card.setAttribute('aria-current', selected ? 'true' : 'false');
        card.setAttribute('tabindex', selected ? '0' : '-1');
        if (isClone) card.setAttribute('aria-hidden', selected ? 'false' : 'true');
        card.dataset.carouselPosition = selected ? 'front' : 'side';
      });
      dots.forEach((dot, dotIndex) => {
        dot.setAttribute('aria-current', dotIndex === active % realCount ? 'true' : 'false');
      });
      if (caption) caption.textContent = cards[active].dataset.carouselLabel || '';
    };

    const draw = () => {
      ring.style.transform = `rotateY(${rotation}deg)`;
      shade();
    };

    const update = (index, animate = true) => {
      active = (index + cards.length) % cards.length;
      let target = -active * stepAngle();
      // Take the shortest way round the ring.
      target += 360 * Math.round((rotation - target) / 360);
      rotation = target;
      ring.style.transition = animate ? '' : 'none';
      draw();
      if (!animate) requestAnimationFrame(() => { ring.style.transition = ''; });
      applyActiveState();
    };

    const layout = () => {
      const keep = active % realCount;
      cards = allCards.filter(isVisible);
      allCards.forEach(card => {
        card.style.removeProperty('--carousel-angle');
        card.style.removeProperty('opacity');
        card.style.removeProperty('filter');
      });
      cards.forEach((card, index) => {
        card.style.setProperty('--carousel-index', index);
        card.style.setProperty('--carousel-angle', `${index * stepAngle()}deg`);
      });
      setRadius();
      rotation = 0;
      update(keep, false);
    };

    const step = direction => {
      update(active + direction);
      restart();
    };

    const stop = () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      lastFrame = 0;
    };

    const restart = () => {
      stop();
      if (reduced) return;
      animationFrame = window.requestAnimationFrame(function drift(timestamp) {
        if (!lastFrame) lastFrame = timestamp;
        const elapsed = Math.min(48, timestamp - lastFrame);
        lastFrame = timestamp;
        rotation -= elapsed * 0.014;
        ring.style.transition = 'none';
        draw();

        const nextActive = ((Math.round(-rotation / stepAngle()) % cards.length) + cards.length) % cards.length;
        if (nextActive !== active) {
          active = nextActive;
          applyActiveState();
        }
        animationFrame = window.requestAnimationFrame(drift);
      });
    };

    const handleCardClick = event => {
      if (forwarding) return;
      const card = event.target.closest('.welcome-carousel__card');
      if (!card) return;
      const index = cards.indexOf(card);
      if (index === -1) return;
      if (index !== active) {
        update(index);
        restart();
      } else if (card.dataset.carouselClone === 'true') {
        // The repeat on the far side behaves exactly like the real card.
        const original = originals[index % realCount];
        forwarding = true;
        try { original.click(); } finally { forwarding = false; }
      }
    };

    root.addEventListener('click', handleCardClick, true);
    previous?.addEventListener('click', () => step(-1));
    next?.addEventListener('click', () => step(1));
    dots.forEach((dot, index) => dot.addEventListener('click', () => {
      update(index);
      restart();
    }));
    root.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); step(1); }
      if (event.key === 'Home') { event.preventDefault(); update(0); restart(); }
      if (event.key === 'End') { event.preventDefault(); update(realCount - 1); restart(); }
    });
    root.addEventListener('pointerenter', stop);
    root.addEventListener('pointerleave', restart);
    root.addEventListener('focusin', stop);
    root.addEventListener('focusout', event => {
      if (!root.contains(event.relatedTarget)) restart();
    });
    root.addEventListener('pointerdown', event => {
      pointerStart = event.clientX;
    });
    root.addEventListener('pointerup', event => {
      if (pointerStart == null) return;
      const delta = event.clientX - pointerStart;
      pointerStart = null;
      if (Math.abs(delta) > 35) step(delta > 0 ? -1 : 1);
    });
    root.addEventListener('pointercancel', () => { pointerStart = null; });
    let resizeTimer = 0;
    window.addEventListener('resize', () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(layout, 80);
    }, { passive: true });

    layout();
    restart();
    root.dataset.carouselReady = 'true';
  }

  window.CircularCarousel = { init: initCircularCarousel };
}());
