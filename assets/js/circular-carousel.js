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

  const controllers = new WeakMap();

  function destroyCircularCarousel(root) {
    controllers.get(root)?.();
  }

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
    const rotationToggle = scope.querySelector('[data-carousel-action="toggle-rotation"]');
    if (!ring || !originals.length) return;
    const originalToggleState = rotationToggle && {
      text: rotationToggle.textContent,
      label: rotationToggle.getAttribute('aria-label'),
      pressed: rotationToggle.getAttribute('aria-pressed'),
      disabled: rotationToggle.disabled
    };

    const realCount = originals.length;

    // Far-side repeats of every card.
    const originalByClone = new WeakMap();
    const clones = originals.map(card => {
      const clone = card.cloneNode(true);
      clone.dataset.carouselClone = 'true';
      clone.setAttribute('aria-hidden', 'true');
      clone.setAttribute('tabindex', '-1');
      originalByClone.set(clone, card);
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
    let suppressSwipeClick = false;
    let disposed = false;
    let rotationStopped = false;
    let pointerWithinScope = scope.matches(':hover');
    let focusWithinScope = scope.contains(document.activeElement);

    const stepAngle = () => 360 / cards.length;
    const isVisible = card => getComputedStyle(card).display !== 'none';

    const setRadius = () => {
      // offsetWidth is the card's layout width. getBoundingClientRect() would
      // return the 3D-projected width (foreshortened by the ring's current
      // rotation and enlarged by perspective), which depends on the radius
      // itself, so every resize produced a different, wrong radius.
      const width = cards[0].offsetWidth || 220;
      const spacing = cards.length > realCount
        ? 28
        : Math.max(34, Math.min(76, root.clientWidth * 0.1));
      radius = Math.max(130, width / (2 * Math.tan(Math.PI / cards.length)) + spacing);
      root.style.setProperty('--carousel-radius', `${radius}px`);
      root.style.setProperty('--carousel-step', `${stepAngle()}deg`);

      // The cylinder grows with the number of cards, and under perspective a
      // bigger cylinder magnifies the front card and (because of the stage tilt)
      // pushes it down until it spills over the caption. Keep the front card the
      // same projected size and height as the 4-card design (8 slots with the
      // far-side clones) by scaling the perspective and tilt with the radius.
      root.style.removeProperty('perspective');
      const basePerspective = parseFloat(getComputedStyle(root).perspective) || 1100;
      const baseRadius = width / (2 * Math.tan(Math.PI / 8)) + 28;
      const baseScale = basePerspective > baseRadius ? basePerspective / (basePerspective - baseRadius) : 1;
      if (baseScale > 1 && radius > baseRadius) {
        root.style.perspective = `${(baseScale * radius) / (baseScale - 1)}px`;
      }
      const baseTilt = 7 * Math.PI / 180;
      const tilt = radius > baseRadius
        ? Math.asin(Math.min(1, (baseRadius * Math.sin(baseTilt)) / radius))
        : baseTilt;
      root.style.setProperty('--carousel-tilt', `${(tilt * 180 / Math.PI).toFixed(3)}deg`);
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

    // Re-measure at most once per frame; resize fires many times while dragging.
    let layoutFrame = 0;
    const scheduleLayout = () => {
      if (layoutFrame || disposed) return;
      layoutFrame = window.requestAnimationFrame(() => {
        layoutFrame = 0;
        if (!disposed) layout();
      });
    };
    const resizeObserver = typeof ResizeObserver === 'function'
      ? new ResizeObserver(scheduleLayout)
      : null;

    const restart = () => {
      stop();
      if (disposed || reduced || rotationStopped || pointerWithinScope || focusWithinScope) return;
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
      if (suppressSwipeClick) {
        suppressSwipeClick = false;
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      if (forwarding) return;
      const card = event.target.closest('.welcome-carousel__card');
      if (!card) return;
      const index = cards.indexOf(card);
      if (index === -1) return;
      if (index !== active) {
        update(index);
        restart();
      }
      if (card.dataset.carouselClone === 'true') {
        event.stopPropagation();
        const original = originalByClone.get(card);
        if (!original) return;
        forwarding = true;
        try { original.click(); } finally { forwarding = false; }
      }
    };

    const handlePreviousClick = () => step(-1);
    const handleNextClick = () => step(1);
    const updateRotationToggle = () => {
      if (!rotationToggle) return;
      const resume = rotationStopped;
      rotationToggle.textContent = reduced ? 'Rotation off' : resume ? 'Resume' : 'Pause';
      rotationToggle.setAttribute('aria-label', reduced
        ? 'Automatic rotation is disabled by your reduced-motion preference'
        : resume ? 'Resume automatic rotation' : 'Stop automatic rotation');
      rotationToggle.setAttribute('aria-pressed', String(rotationStopped));
      rotationToggle.disabled = reduced;
    };
    const handleRotationToggle = () => {
      rotationStopped = !rotationStopped;
      updateRotationToggle();
      if (rotationStopped) stop();
      else restart();
    };
    const dotClickHandlers = dots.map((dot, index) => () => {
      update(index);
      restart();
    });
    const handleKeydown = event => {
      const focusActiveCard = () => cards[active].focus();
      if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1); focusActiveCard(); }
      if (event.key === 'ArrowRight') { event.preventDefault(); step(1); focusActiveCard(); }
      if (event.key === 'Home') { event.preventDefault(); update(0); restart(); focusActiveCard(); }
      if (event.key === 'End') { event.preventDefault(); update(realCount - 1); restart(); focusActiveCard(); }
    };
    const handlePointerEnter = () => {
      pointerWithinScope = true;
      stop();
    };
    const handlePointerLeave = () => {
      pointerWithinScope = false;
      restart();
    };
    const handleFocusIn = () => {
      focusWithinScope = true;
      stop();
    };
    const handleFocusOut = event => {
      if (scope.contains(event.relatedTarget)) return;
      focusWithinScope = false;
      restart();
    };
    const handlePointerDown = event => {
      suppressSwipeClick = false;
      pointerStart = event.clientX;
    };
    const handlePointerUp = event => {
      if (pointerStart == null) return;
      const delta = event.clientX - pointerStart;
      pointerStart = null;
      if (Math.abs(delta) > 35) {
        suppressSwipeClick = true;
        step(delta > 0 ? -1 : 1);
      }
    };
    const handlePointerCancel = () => { pointerStart = null; };

    const dispose = () => {
      if (disposed) return;
      disposed = true;
      stop();
      if (layoutFrame) window.cancelAnimationFrame(layoutFrame);
      layoutFrame = 0;
      resizeObserver?.disconnect();
      window.removeEventListener('resize', scheduleLayout);
      root.removeEventListener('click', handleCardClick, true);
      root.removeEventListener('keydown', handleKeydown);
      root.removeEventListener('pointerdown', handlePointerDown);
      root.removeEventListener('pointerup', handlePointerUp);
      root.removeEventListener('pointercancel', handlePointerCancel);
      previous?.removeEventListener('click', handlePreviousClick);
      next?.removeEventListener('click', handleNextClick);
      rotationToggle?.removeEventListener('click', handleRotationToggle);
      dots.forEach((dot, index) => dot.removeEventListener('click', dotClickHandlers[index]));
      scope.removeEventListener('pointerenter', handlePointerEnter);
      scope.removeEventListener('pointerleave', handlePointerLeave);
      scope.removeEventListener('focusin', handleFocusIn);
      scope.removeEventListener('focusout', handleFocusOut);
      if (rotationToggle && originalToggleState) {
        rotationToggle.textContent = originalToggleState.text;
        if (originalToggleState.label == null) rotationToggle.removeAttribute('aria-label');
        else rotationToggle.setAttribute('aria-label', originalToggleState.label);
        if (originalToggleState.pressed == null) rotationToggle.removeAttribute('aria-pressed');
        else rotationToggle.setAttribute('aria-pressed', originalToggleState.pressed);
        rotationToggle.disabled = originalToggleState.disabled;
      }
      clones.forEach(clone => clone.remove());
      originals.forEach(card => {
        card.style.removeProperty('--carousel-index');
        card.style.removeProperty('--carousel-angle');
        card.style.removeProperty('opacity');
        card.style.removeProperty('filter');
        card.removeAttribute('aria-current');
        card.removeAttribute('data-carousel-position');
        card.removeAttribute('tabindex');
      });
      root.style.removeProperty('--carousel-radius');
      root.style.removeProperty('--carousel-step');
      root.style.removeProperty('--carousel-tilt');
      root.style.removeProperty('perspective');
      delete root.dataset.carouselReady;
      controllers.delete(root);
    };

    updateRotationToggle();
    root.addEventListener('click', handleCardClick, true);
    previous?.addEventListener('click', handlePreviousClick);
    next?.addEventListener('click', handleNextClick);
    rotationToggle?.addEventListener('click', handleRotationToggle);
    dots.forEach((dot, index) => dot.addEventListener('click', dotClickHandlers[index]));
    root.addEventListener('keydown', handleKeydown);
    scope.addEventListener('pointerenter', handlePointerEnter);
    scope.addEventListener('pointerleave', handlePointerLeave);
    scope.addEventListener('focusin', handleFocusIn);
    scope.addEventListener('focusout', handleFocusOut);
    root.addEventListener('pointerdown', handlePointerDown);
    root.addEventListener('pointerup', handlePointerUp);
    root.addEventListener('pointercancel', handlePointerCancel);
    window.addEventListener('resize', scheduleLayout, { passive: true });
    resizeObserver?.observe(root);
    controllers.set(root, dispose);

    layout();
    restart();
    root.dataset.carouselReady = 'true';
  }

  window.CircularCarousel = {
    init: initCircularCarousel,
    destroy: destroyCircularCarousel
  };
}());
