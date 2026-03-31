/* ═══════════════════
   cursor.js — Custom glowing cursor
   ═══════════════════ */

export function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');
  if (!cursor || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  });

  function animate() {
    cursor.style.left = (mx - 6)  + 'px';
    cursor.style.top  = (my - 6)  + 'px';
    rx += (mx - rx - 18) * 0.12;
    ry += (my - ry - 18) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animate);
  }
  animate();

  // Enlarge on interactive elements
  const interactives = 'a, button, .skill-tag, .cp-platform, .filter-btn, .challenge-try-btn, .repo-card, .blog-card';
  document.querySelectorAll(interactives).forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2.5)';
      ring.style.transform   = 'scale(1.5)';
      ring.style.borderColor = 'rgba(0,245,255,0.85)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      ring.style.transform   = 'scale(1)';
      ring.style.borderColor = 'rgba(0,245,255,0.5)';
    });
  });
}
