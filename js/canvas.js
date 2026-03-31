/* ═══════════════════
   canvas.js — Animated particle network background
   ═══════════════════ */

export function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(true); }

    reset(initial = false) {
      this.x     = Math.random() * canvas.width;
      this.y     = initial ? Math.random() * canvas.height : (Math.random() > 0.5 ? -5 : canvas.height + 5);
      this.size  = Math.random() * 1.4 + 0.4;
      this.vx    = (Math.random() - 0.5) * 0.28;
      this.vy    = (Math.random() - 0.5) * 0.28;
      this.alpha = Math.random() * 0.45 + 0.08;
      this.color = Math.random() > 0.65 ? '#00f5ff' : '#7b2fff';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < -10 || this.x > canvas.width + 10 ||
          this.y < -10 || this.y > canvas.height + 10) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle   = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  const PARTICLE_COUNT = 130;
  const particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());

  const CONNECTION_DIST = 110;

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_DIST) {
          ctx.save();
          ctx.globalAlpha = (1 - dist / CONNECTION_DIST) * 0.07;
          ctx.strokeStyle = '#00f5ff';
          ctx.lineWidth   = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animate);
  }
  animate();
}
