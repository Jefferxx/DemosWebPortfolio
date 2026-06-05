/* MEDICGAR — Landing Page JS */

(function () {
  'use strict';

  /* ---- Navbar hamburguesa ---- */
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('navMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    /* Cerrar menú al hacer clic en un link */
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    /* Cerrar con Escape */
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* ---- Navbar scroll: añadir sombra al hacer scroll ---- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.style.boxShadow = window.scrollY > 8
        ? '0 2px 20px rgba(10,61,98,.35)'
        : '0 2px 16px rgba(10,61,98,.25)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- Formulario: feedback de envío ---- */
  const form = document.getElementById('citaForm');
  if (form) {
    form.addEventListener('submit', e => {
      const requiredFields = form.querySelectorAll('[required]');
      let valid = true;

      requiredFields.forEach(field => {
        field.style.borderColor = '';
        if (!field.value.trim()) {
          field.style.borderColor = '#E74C3C';
          valid = false;
        }
      });

      if (!valid) {
        e.preventDefault();
        const first = form.querySelector('[required]:placeholder-shown, select[required]:invalid');
        if (first) first.focus();
      }
    });

    /* Limpiar error al escribir */
    form.querySelectorAll('[required]').forEach(field => {
      field.addEventListener('input', () => {
        if (field.value.trim()) field.style.borderColor = '';
      });
    });
  }

  /* ---- Smooth scroll para anclas (fallback browsers sin scroll-behavior CSS) ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
