/* ═══════════════════
   typewriter.js — Role cycling typewriter + scroll reveal + nav
   ═══════════════════ */

export function initTypewriter(elementId, roles) {
  const el = document.getElementById(elementId);
  if (!el) return;

  let roleIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    const current = roles[roleIdx];
    if (!deleting) {
      el.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(tick, 2000);
        return;
      }
    } else {
      el.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx  = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 45 : 85);
  }

  setTimeout(tick, 1200);
}

/* ═══════════════════════════════════════
   initReveal — Persistent Intersection Observer
   A MutationObserver watches the body so any
   .reveal element injected later by initGitHub /
   initChallengeWall / initBlog is auto-observed.
   ═══════════════════════════════════════ */

let _revealObserver = null;

function getRevealObserver() {
  if (_revealObserver) return _revealObserver;
  _revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        _revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  return _revealObserver;
}

export function initReveal() {
  const io = getRevealObserver();

  // Observe anything already in the DOM
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Watch for .reveal elements added dynamically later
  const mo = new MutationObserver(mutations => {
    mutations.forEach(m => {
      m.addedNodes.forEach(node => {
        if (node.nodeType !== 1) return;
        if (node.classList && node.classList.contains('reveal')) io.observe(node);
        if (node.querySelectorAll) node.querySelectorAll('.reveal').forEach(el => io.observe(el));
      });
    });
  });
  mo.observe(document.body, { childList: true, subtree: true });
}

export function observeReveal(container) {
  const io = getRevealObserver();
  if (!container) return;
  if (container.classList && container.classList.contains('reveal')) io.observe(container);
  container.querySelectorAll && container.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ═══════════════════
   initNav
   ═══════════════════ */

export function initNav() {
  const nav      = document.querySelector('nav');
  const links    = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');
  const hamburger = document.querySelector('.nav-hamburger');

  // Hamburger toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('mobile-open');
    });
  }

  // Close mobile menu when a link is clicked
  links.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('mobile-open');
    });
  });

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 140) current = s.id;
    });
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });
}
