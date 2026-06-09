(function () {
  'use strict';

  /* ── NAVBAR: sombra en scroll ──────────────────────────────── */
  var navbar = document.querySelector('.navbar');
  function onScroll() {
    if (window.scrollY > 8) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateScrollSpy();
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── HAMBURGUESA ───────────────────────────────────────────── */
  var hamburger = document.getElementById('hamburger');
  var navMenu   = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Cerrar al hacer click en un enlace del menú
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Cerrar con Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── SMOOTH SCROLL (links de ancla) ───────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var offset = 72; // altura del navbar
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ── SCROLL REVEAL ─────────────────────────────────────────── */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.13 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ── CONTADORES (trust bar) ────────────────────────────────── */
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var start  = 0;
    var duration = 1400; // ms
    var startTime = null;

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var value = Math.round(easeOutCubic(progress) * target);
      el.textContent = value + (target >= 15 ? '+' : '');
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + (target >= 15 ? '+' : '');
      }
    }

    requestAnimationFrame(step);
  }

  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-target]').forEach(function (el) {
    counterObserver.observe(el);
  });

  /* ── SCROLL SPY ────────────────────────────────────────────── */
  var sections  = Array.from(document.querySelectorAll('section[id]'));
  var navLinks  = Array.from(document.querySelectorAll('.nav-link'));
  var activeId  = '';

  function updateScrollSpy() {
    var scrollY = window.scrollY + 80;
    var current = '';
    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollY) {
        current = sec.id;
      }
    });
    if (current === activeId) return;
    activeId = current;
    navLinks.forEach(function (link) {
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('nav-active');
      } else {
        link.classList.remove('nav-active');
      }
    });
  }

  /* ── FAQ ACCORDION ─────────────────────────────────────────── */
  var faqItems = Array.from(document.querySelectorAll('.faq-item'));

  faqItems.forEach(function (item) {
    var btn    = item.querySelector('.faq-question');
    var answer = item.querySelector('.faq-answer');

    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');

      // Cierra todos
      faqItems.forEach(function (other) {
        if (other !== item) {
          other.classList.remove('is-open');
          other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          var otherAnswer = other.querySelector('.faq-answer');
          otherAnswer.style.maxHeight = '0';
        }
      });

      // Toggle el actual
      if (isOpen) {
        item.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = '0';
      } else {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ── HERO BG: zoom de entrada ──────────────────────────────── */
  var heroBg = document.getElementById('heroBg');
  if (heroBg) {
    setTimeout(function () { heroBg.classList.add('loaded'); }, 100);
  }

})();
