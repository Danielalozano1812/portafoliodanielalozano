/* ==========================================
   DANIELA LOZANO — INTERACTIONS
   Minimal. Editorial. Considered.
   ========================================== */

(() => {
  'use strict';

  // ----- Nav: scroll state -----
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 12) nav.classList.add('is-scrolled');
      else nav.classList.remove('is-scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ----- Mobile menu -----
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    // Cerrar al click en un link
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  // ----- Scroll reveal -----
  // Marca elementos para revelar
  const revealSelectors = [
    '.practice__lead',
    '.practice__body p',
    '.practice__pillars li',
    '.work__title',
    '.case',
    '.method__title',
    '.method__steps li',
    '.background__intro',
    '.timeline__item',
    '.tools',
    '.contact__title',
    '.contact__copy',
    '.contact__channel'
  ];

  const targets = [];
  revealSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${Math.min(i * 80, 400)}ms`;
      targets.push(el);
    });
  });

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    targets.forEach(t => io.observe(t));
  } else {
    targets.forEach(t => t.classList.add('is-visible'));
  }

  // ----- Año dinámico en footer (futureproof) -----
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
})();
