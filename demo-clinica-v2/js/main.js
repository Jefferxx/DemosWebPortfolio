/* MEDICGAR V2 — main.js */

(function () {
  'use strict';

  /* ---- Navbar: hamburguesa ---- */
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('navMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* ---- Navbar: sombra en scroll ---- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 8);
    }, { passive: true });
  }

  /* ---- Smooth scroll para anclas (fallback) ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---- Scroll reveal: IntersectionObserver ---- */
  if ('IntersectionObserver' in window) {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.13, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
  } else {
    /* Fallback para browsers sin IntersectionObserver */
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  /* ---- Counter animation para trust-bar ---- */
  function animateCounter(el, target, duration) {
    const start = performance.now();
    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); /* ease-out cubic */
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  }

  const trustBar = document.querySelector('.trust-bar');
  if (trustBar && 'IntersectionObserver' in window) {
    let counted = false;
    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !counted) {
          counted = true;
          trustBar.querySelectorAll('.trust-num[data-target]').forEach(num => {
            animateCounter(num, parseInt(num.dataset.target, 10), 1400);
          });
          counterObs.disconnect();
        }
      });
    }, { threshold: 0.5 });
    counterObs.observe(trustBar);
  }

  /* ---- Club micro-interacción: pop de íconos al entrar sección al viewport ---- */
  const clubSection = document.getElementById('club');
  if (clubSection && 'IntersectionObserver' in window) {
    const clubObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          clubSection.querySelectorAll('.club-item-icon').forEach((icon, i) => {
            setTimeout(() => {
              icon.style.setProperty('--icon-pop', '1');
              icon.classList.add('icon-popped');
            }, i * 120);
          });
          clubObs.disconnect();
        }
      });
    }, { threshold: 0.2 });
    clubObs.observe(clubSection);
  }

  /* ---- Sticky CTA: aparece tras pasar el hero, desaparece en #cita ---- */
  const stickyCta  = document.getElementById('stickyCta');
  const heroSec    = document.getElementById('hero');
  const citaSec    = document.getElementById('cita');

  if (stickyCta && heroSec && 'IntersectionObserver' in window) {
    const showObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          stickyCta.classList.add('is-visible');
          stickyCta.setAttribute('aria-hidden', 'false');
        } else {
          stickyCta.classList.remove('is-visible');
          stickyCta.setAttribute('aria-hidden', 'true');
        }
      });
    }, { threshold: 0.05 });
    showObs.observe(heroSec);

    if (citaSec) {
      const hideObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            stickyCta.classList.remove('is-visible');
            stickyCta.setAttribute('aria-hidden', 'true');
          }
        });
      }, { threshold: 0.1 });
      hideObs.observe(citaSec);
    }
  }

  /* ---- ScrollSpy: link activo en navbar según sección visible ---- */
  const spySections = document.querySelectorAll('section[id]');
  const spyLinks    = document.querySelectorAll('.nav-menu a[href^="#"]');

  if (spySections.length && spyLinks.length && 'IntersectionObserver' in window) {
    const spyObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          spyLinks.forEach(l => l.classList.remove('nav-active'));
          const active = document.querySelector(`.nav-menu a[href="#${entry.target.id}"]`);
          if (active) active.classList.add('nav-active');
        }
      });
    }, { threshold: 0.35, rootMargin: '-72px 0px 0px 0px' });
    spySections.forEach(s => spyObs.observe(s));
  }

  /* ---- Formulario: redirect a WhatsApp ---- */
  const form = document.getElementById('citaForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const nombreEl      = form.querySelector('#nombre');
      const telefonoEl    = form.querySelector('#telefono');
      const especialidadEl= form.querySelector('#especialidad');
      const mensajeEl     = form.querySelector('#mensaje');

      const fields = [nombreEl, telefonoEl, especialidadEl];
      let valid = true;

      fields.forEach(field => {
        const group = field.closest('.form-group');
        const isEmpty = field.tagName === 'SELECT'
          ? !field.value
          : !field.value.trim();

        if (isEmpty) {
          group.classList.add('has-error');
          valid = false;
        } else {
          group.classList.remove('has-error');
        }
      });

      if (!valid) {
        const firstError = form.querySelector('.form-group.has-error input, .form-group.has-error select');
        if (firstError) firstError.focus();
        return;
      }

      const nombre      = nombreEl.value.trim();
      const telefono    = telefonoEl.value.trim();
      const especialidad= especialidadEl.value;
      const mensaje     = mensajeEl ? mensajeEl.value.trim() : '';

      const texto = [
        `Hola MEDICGAR 👋, me llamo *${nombre}* y quisiera agendar una cita.`,
        ``,
        `📋 *Especialidad:* ${especialidad}`,
        `📞 *Mi teléfono:* ${telefono}`,
        mensaje ? `💬 *Motivo:* ${mensaje}` : null,
      ].filter(Boolean).join('\n');

      window.open(
        `https://wa.me/593984613496?text=${encodeURIComponent(texto)}`,
        '_blank',
        'noopener,noreferrer'
      );
    });

    /* Limpiar estado de error al escribir */
    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', () => {
        field.closest('.form-group')?.classList.remove('has-error');
      });
    });
  }

})();
