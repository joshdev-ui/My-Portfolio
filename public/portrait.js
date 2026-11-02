(() => {
  'use strict';
  const stage = document.querySelector('[data-portrait]');
  if (!stage) return;
  const animation = stage.querySelector('.portrait-animation');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let inView = false;
  let unavailable = false;

  function showPhoto() {
    stage.classList.remove('show-animation');
    stage.dataset.state = 'photo';
  }

  function syncAnimation() {
    const landing = document.documentElement.dataset.landing;
    if (!inView || document.hidden || reducedMotion.matches || unavailable ||
        landing === 'pending' || landing === 'playing') {
      showPhoto();
      animation.removeAttribute('src');
      return;
    }
    if (!animation.hasAttribute('src')) animation.src = animation.dataset.src;
  }

  animation.addEventListener('load', () => {
    if (!inView || document.hidden || reducedMotion.matches || unavailable) return;
    stage.classList.add('show-animation');
    stage.dataset.state = 'looping';
  });
  animation.addEventListener('error', () => {
    if (!animation.hasAttribute('src')) return;
    unavailable = true;
    syncAnimation();
  });
  document.addEventListener('visibilitychange', syncAnimation);
  document.addEventListener('portfolio:landing-complete', syncAnimation);
  reducedMotion.addEventListener('change', syncAnimation);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      syncAnimation();
    }, { threshold: 0.2 });
    observer.observe(stage);
  } else {
    inView = true;
    syncAnimation();
  }
})();
