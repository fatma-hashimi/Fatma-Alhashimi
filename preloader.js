// Preloader — adapted from a p5.js sketch into a reusable mount that
// sizes its canvas to its parent container (no fixed window size, no
// background fill). Used for the full-page preloader between pages
// and for the per-image preloader that shows while images buffer.

function mountPreloader(container) {
  return new p5((p) => {
    let angle = 0;
    const message = ' z z Z';
    let index = 0;
    const typingSpeed = 30;
    const resetDelay = 60;
    let waitFrames = 0;

    p.setup = () => {
      const r = container.getBoundingClientRect();
      const cnv = p.createCanvas(Math.max(r.width, 1), Math.max(r.height, 1));
      cnv.parent(container);
      cnv.style('display', 'block');
      cnv.style('pointer-events', 'none');
      p.angleMode(p.DEGREES);
      p.textAlign(p.CENTER, p.CENTER);
      p.textFont('Bitter, Georgia, serif');

      // Resize the canvas if the container changes size
      if (typeof ResizeObserver !== 'undefined') {
        const ro = new ResizeObserver(() => {
          const rr = container.getBoundingClientRect();
          p.resizeCanvas(Math.max(rr.width, 1), Math.max(rr.height, 1));
        });
        ro.observe(container);
      }
    };

    p.draw = () => {
      p.clear(); // transparent — no background fill
      const minDim = Math.min(p.width, p.height);
      const amount = p.sin(angle);

      // pulsing circle behind the kitty
      p.noStroke();
      p.fill(0, 0, 255, 50);
      p.circle(p.width / 2, p.height / 2.1, p.map(amount, -1, 1, 30, 70));

      // kitty face
      p.fill(210, 105, 30);
      p.textSize(minDim / 15);
      p.text('/ᐠ - ˕ -マ', p.width / 2, p.height / 2);

      // typewriter zzz under kitty
      p.textSize(minDim / 20);
      p.text(message.substring(0, index), p.width / 2, p.height / 1.6);

      angle += 1;
      if (index < message.length) {
        if (p.frameCount % typingSpeed === 0) index++;
      } else if (++waitFrames > resetDelay) {
        index = 0;
        waitFrames = 0;
      }
    };
  });
}

// Full-page preloader: a beige overlay covers the page until window.load
// fires (i.e., all sub-resources, including images, are done). Cleared
// quickly so fast loads barely flash.
function mountPagePreloader() {
  const overlay = document.createElement('div');
  overlay.className = 'preloader-overlay';
  document.body.appendChild(overlay);

  let inst = null;
  // Don't spin up the canvas if the page loads almost instantly — wait a
  // tick to see if window.load already fired.
  const startTimer = setTimeout(() => {
    inst = mountPreloader(overlay);
  }, 80);

  const hide = () => {
    clearTimeout(startTimer);
    overlay.classList.add('is-hidden');
    setTimeout(() => {
      if (inst) inst.remove();
      overlay.remove();
    }, 350);
  };

  if (document.readyState === 'complete') {
    setTimeout(hide, 0);
  } else {
    window.addEventListener('load', hide, { once: true });
  }
}

// Per-image preloader: behind each <img>, show the same animation
// while the image is buffering. Only spins up when the image enters
// the viewport (so we don't run 20 canvases at once with lazy loading),
// and only if the image isn't already complete.
function mountImagePreloaders() {
  const imgs = document.querySelectorAll('img');
  const io = (typeof IntersectionObserver !== 'undefined')
    ? new IntersectionObserver((entries, observer) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          attachPreloader(e.target);
          observer.unobserve(e.target);
        }
      }, { rootMargin: '200px' })
    : null;

  for (const img of imgs) {
    if (img.dataset.preloaderAttached) continue;
    img.dataset.preloaderAttached = '1';
    if (io) io.observe(img);
    else attachPreloader(img); // fallback: attach to all immediately
  }
}

function attachPreloader(img) {
  // Skip if image is already complete (cached) — no need to spin up
  if (img.complete && img.naturalWidth > 0) return;

  // Wrap the img in a relative container so we can overlay the preloader
  const parent = img.parentNode;
  if (!parent) return;
  const wrap = document.createElement('span');
  wrap.className = 'image-wrap';
  parent.insertBefore(wrap, img);
  wrap.appendChild(img);

  const loader = document.createElement('span');
  loader.className = 'preloader-image';
  wrap.appendChild(loader);

  let inst = null;
  // Delay starting the canvas slightly so we don't flash on fast loads
  const startTimer = setTimeout(() => {
    inst = mountPreloader(loader);
  }, 150);

  const cleanup = () => {
    clearTimeout(startTimer);
    loader.classList.add('is-hidden');
    setTimeout(() => {
      if (inst) inst.remove();
      loader.remove();
    }, 300);
  };

  img.addEventListener('load', cleanup, { once: true });
  img.addEventListener('error', cleanup, { once: true });

  // In case the image finished while we were wrapping it
  if (img.complete && img.naturalWidth > 0) cleanup();
}

document.addEventListener('DOMContentLoaded', () => {
  mountPagePreloader();
  mountImagePreloaders();
});

// Pick up <img> tags added later by website.js (e.g. the homepage cards
// rendered by renderSecondary on category clicks)
const _mo = (typeof MutationObserver !== 'undefined') && new MutationObserver(() => {
  mountImagePreloaders();
});
if (_mo) {
  document.addEventListener('DOMContentLoaded', () => {
    _mo.observe(document.body, { childList: true, subtree: true });
  });
}
