/* A small vanilla equivalent of the CircularCarousel interaction for this
 * static site. The cards remain ordinary buttons so the existing home actions
 * and keyboard semantics continue to work. */
(function () {
  'use strict';

  function initCircularCarousel(root) {
    if (!root || root.dataset.carouselReady === 'true') return;

    const ring = root.querySelector('.welcome-carousel__ring');
    const cards = Array.from(root.querySelectorAll('.welcome-carousel__card'));
    const dots = Array.from(root.querySelectorAll('.welcome-carousel__dot'));
    const caption = root.querySelector('.welcome-carousel__caption');
    const previous = root.querySelector('[data-carousel-action="previous"]');
    const next = root.querySelector('[data-carousel-action="next"]');
    if (!ring || !cards.length) return;

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches || false;
    let active = 0;
    let rotation = 0;
    let radius = 190;
    let animationFrame = 0;
    let lastFrame = 0;
    let pointerStart = null;

    cards.forEach((card, index) => {
      card.style.setProperty('--carousel-index', index);
      card.style.setProperty('--carousel-angle', `${index * (360 / cards.length)}deg`);
    });

    const setRadius = () => {
      const width = cards[0].getBoundingClientRect().width || 220;
      const spacing = Math.max(34, Math.min(76, root.clientWidth * 0.1));
      radius = Math.max(130, width / (2 * Math.tan(Math.PI / cards.length)) + spacing);
      root.style.setProperty('--carousel-radius', `${radius}px`);
      root.style.setProperty('--carousel-step', `${360 / cards.length}deg`);
    };

    const applyActiveState = () => {
      cards.forEach((card, cardIndex) => {
        const selected = cardIndex === active;
        card.setAttribute('aria-current', selected ? 'true' : 'false');
        card.setAttribute('tabindex', selected ? '0' : '-1');
        card.dataset.carouselPosition = selected ? 'front' : 'side';
      });
      dots.forEach((dot, dotIndex) => {
        dot.setAttribute('aria-current', dotIndex === active ? 'true' : 'false');
      });
      if (caption) caption.textContent = cards[active].dataset.carouselLabel || '';
    };

    const draw = () => {
      ring.style.transform = `rotateY(${rotation}deg)`;
    };

    const update = (index, animate = true) => {
      active = (index + cards.length) % cards.length;
      rotation = -active * (360 / cards.length);
      ring.style.transition = animate ? '' : 'none';
      draw();
      if (!animate) requestAnimationFrame(() => { ring.style.transition = ''; });
      applyActiveState();
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

        const nextActive = ((Math.round(-rotation / (360 / cards.length)) % cards.length) + cards.length) % cards.length;
        if (nextActive !== active) {
          active = nextActive;
          applyActiveState();
        }
        animationFrame = window.requestAnimationFrame(drift);
      });
    };

    const handleCardClick = event => {
      const card = event.target.closest('.welcome-carousel__card');
      if (!card) return;
      const index = cards.indexOf(card);
      if (index !== active) {
        update(index);
        restart();
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
      if (event.key === 'End') { event.preventDefault(); update(cards.length - 1); restart(); }
    });
    root.addEventListener('pointerenter', stop);
    root.addEventListener('pointerleave', restart);
    root.addEventListener('focusin', stop);
    root.addEventListener('focusout', event => {
      if (!root.contains(event.relatedTarget)) restart();
    });
    root.addEventListener('pointerdown', event => {
      pointerStart = event.clientX;
      root.setPointerCapture?.(event.pointerId);
    });
    root.addEventListener('pointerup', event => {
      if (pointerStart == null) return;
      const delta = event.clientX - pointerStart;
      pointerStart = null;
      if (Math.abs(delta) > 35) step(delta > 0 ? -1 : 1);
    });
    root.addEventListener('pointercancel', () => { pointerStart = null; });
    window.addEventListener('resize', setRadius, { passive: true });

    setRadius();
    update(0, false);
    restart();
    root.dataset.carouselReady = 'true';
  }

  window.CircularCarousel = { init: initCircularCarousel };
}());
