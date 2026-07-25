const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initScrollReveal() {
  if (prefersReducedMotion()) {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach((el) => {
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach((el) => {
    observer.observe(el);
  });
}

export function initParticles(canvas) {
  if (!canvas || prefersReducedMotion()) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId = null;
  let width = 0;
  let height = 0;

  const particleCount = () => {
    const area = width * height;
    if (width < 768) return Math.min(30, Math.floor(area / 25000));
    return Math.min(60, Math.floor(area / 18000));
  };

  const colors = ['rgba(34, 211, 238, 0.5)', 'rgba(167, 139, 250, 0.4)', 'rgba(251, 113, 133, 0.35)'];

  function createParticle() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.5 + 0.2,
    };
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio, 2);
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    particles = Array.from({ length: particleCount() }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p, i) => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const other = particles[j];
        const dx = p.x - other.x;
        const dy = p.y - other.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = `rgba(167, 139, 250, ${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.globalAlpha = 1;
          ctx.stroke();
        }
      }
    });

    ctx.globalAlpha = 1;
    animationId = requestAnimationFrame(draw);
  }

  resize();
  draw();

  const onResize = () => {
    resize();
  };

  window.addEventListener('resize', onResize);

  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener('resize', onResize);
  };
}

export function initMagneticButtons() {
  if (prefersReducedMotion()) return;

  document.querySelectorAll('.btn-magnetic').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

export function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    });
  });
}

export function initMotion() {
  initScrollReveal();
  initMagneticButtons();
  initSmoothAnchors();

  const canvas = document.getElementById('particle-canvas');
  if (canvas) initParticles(canvas);
}

document.addEventListener('astro:page-load', initMotion);
document.addEventListener('DOMContentLoaded', initMotion);
