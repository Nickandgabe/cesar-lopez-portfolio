// Scroll reveals and number count-ups. Both are skipped under prefers-reduced-motion.

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Fade + rise on scroll
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (reduce || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealEls.forEach((el) => io.observe(el));
}

// Count-up, once per number. Each number exists once in the HTML, already at its
// final value, so no-JS and reduced-motion visitors simply see it. Only the digits
// animate; prefixes/suffixes ("Up to", "M") sit outside the [data-count] element.
const counters = document.querySelectorAll<HTMLElement>('[data-count]');
if (!reduce && 'IntersectionObserver' in window) {
  const run = (el: HTMLElement) => {
    if (el.dataset.counted) return;
    el.dataset.counted = 'true';
    const target = Number(el.dataset.count);
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = String(Math.round(target * eased));
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = String(target);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        io.unobserve(entry.target);
        run(entry.target as HTMLElement);
      }
    },
    { threshold: 0.25 },
  );
  counters.forEach((el) => {
    el.textContent = '0';
    io.observe(el);
  });
}

// Background videos ([data-autoplay]): play only when motion is allowed,
// data saver is off and the video is on screen.
const videos = document.querySelectorAll<HTMLVideoElement>('video[data-autoplay]');
if (videos.length) {
  const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
  const visible = new WeakMap<HTMLVideoElement, boolean>();
  const sync = (v: HTMLVideoElement) => {
    if (reduceQuery.matches || saveData || !visible.get(v)) v.pause();
    else v.play().catch(() => {});
  };
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      const v = e.target as HTMLVideoElement;
      visible.set(v, e.isIntersecting);
      sync(v);
    }
  });
  videos.forEach((v) => io.observe(v));
  reduceQuery.addEventListener('change', () => videos.forEach(sync));
}
