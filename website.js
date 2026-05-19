// Project data — keyed by slug, all metadata needed to render any card slot.
const PROJECTS = {
  'tidal-rites': {
    title: 'TIDAL RITES',
    date: 'Jan, 2026',
    tags: ['FABRICATION', 'P.COMP'],
    image: '/projects/Tidal_Rites/Assets/Images/tr_COVER.png',
    alt: 'Tidal Rites — illuminated tidal vessel',
    description: "A location-specific artifact entwined with the tide station at The Battery's pier. Enclosed within is a small computer that queries NOAA's tidal API, translating the harbor's rise and fall into light. This vessel represents low tide as a dim blob at the bottom and high tide by swelling to its brim. It holds no water, but reflects the harbor's rhythm. Think of it as a living, landlocked echo, bound to the shore even through distance.",
    page: '/projects/tidal-rites',
  },
  'keep-refrigerated': {
    title: 'KEEP REFRIGERATED.',
    date: 'Apr, 2026',
    tags: ['FABRICATION', 'P.COMP', 'PRINTS'],
    image: '/projects/Keep_Refrigerated/Assets/Images/kr_COVER.jpg',
    alt: 'Keep Refrigerated — milk carton studies',
    description: "A material study and design system that isolates our mundane and everyday milk into six frameworks. It marries the form of a milk carton to contexts that it lives under. It regards milk as personal, technological, environmental, nutritional, political, and historical. Each using different materials to draw out their narratives.",
    page: '/projects/keep-refrigerated',
  },
  'cradle-to-farm': {
    title: 'CRADLE TO FARM',
    date: 'Dec, 2025',
    tags: ['PRINTS', 'ILLUSTRATIONS'],
    image: '/projects/Cradle_To_Farm/Assets/Images/ctf_COVER.png',
    alt: 'Cradle to Farm — packaged composition',
    description: "A risograph design series that expresses milk in three forms. Personal, my intolerance. Environment, the dairy production industry's impact on our earth. Composition, its chemical make up, such as proteins, fats, minerals.",
    page: '/projects/cradle-to-farm',
  },
  'the-reptile': {
    title: 'THE REPTILE',
    date: 'Dec, 2021',
    tags: ['ARCHITECTURE'],
    image: '/projects/The_Reptile/Assets/Images/reptile_COVER.png',
    alt: 'The Reptile — cover image',
    description: "Using passive structure elements such as wind-catchers and adobe walls, The Reptile is both a research center and a residence. Limestone walls absorb heat during the day to insulate and release into the night to keep the space warm during chilly evenings. Wind-catchers harness wind to cool the building during hot daytimes. The space was made with the intention of learning about the local flora and fauna in the least invasive form possible. Collaborated with Chiara Wilkinson.",
    page: '/projects/the-reptile',
  },
  'yellow-mud': {
    title: 'YELLOW MUD CERAMICS FACTORY',
    date: 'May, 2023',
    tags: ['ARCHITECTURE'],
    image: '/projects/Yellow_Mud_Ceramics_Factory/Assets/Images/ymcf_COVER.png',
    alt: 'Yellow Mud Ceramics Factory — cover image',
    description: "A ceramics workshop sitting atop rice paddy terraces within a peninsula along the Yangtze. It embodies elements of distributed and scattered facilities within the city of Yichang. Encompassing the traditions of making ceramics while also reclaiming the silt deposited at the bottom of the Yangtze to reform into clay. Collaborated with Durdona Rustomova.",
    page: '/projects/yellow-mud',
  },
  'apiary': {
    title: 'APIARY',
    date: 'Nov, 2021',
    tags: ['ILLUSTRATIONS'],
    image: '/projects/Apiary/Assets/Images/apiary_COVER.png',
    alt: 'Apiary — cover image',
    description: "Educational game that presents the biodiversity crisis America faces due to monoculture. It teaches the player how to tend to the bee's needs and promote local honey consumption.",
    page: '/projects/apiary',
    objectPosition: 'center 85%',
  },
  'botanical-series': {
    title: 'BOTANICAL SERIES',
    date: 'Feb, 2022',
    tags: ['ILLUSTRATIONS'],
    image: '/projects/Botanical_Illustration_Series/Assets/Images/bis_COVER.png',
    alt: 'Botanical Illustration Series — cover image',
    description: "A series brought on to depict the taxonomy of plant species, specifically ones that were used in a natural dye system.",
    page: '/projects/botanical-series',
  },
  'social-battery-pack': {
    title: 'SOCIAL BATTERY PACK',
    date: 'May, 2025',
    tags: ['P.COMP'],
    image: '/projects/Social_Battery_Pack/Assets/Images/sbp_COVER.png',
    alt: 'Social Battery Pack — cover image',
    description: "Portable, clip-on pack with a built-in clock to visualize the wearer's social battery with an OLED display and peripherals to adjust the duration of the battery.",
    page: '/projects/social-battery-pack',
  },
  'american-persimmon': {
    title: 'AMERICAN PERSIMMON PACKAGE',
    date: 'Jul, 2020',
    tags: ['ILLUSTRATIONS', 'PRINTS'],
    image: '/projects/American_Persimmon_Package/Assets/Images/app_COVER.png',
    alt: 'American Persimmon Package — cover image',
    description: "The American Persimmon Package is an art print to promote the distribution of seeds to ensure biodiversity.",
    page: '/projects/american-persimmon',
    objectPosition: 'center 60%',
  },
  'tactile-library': {
    title: 'TACTILE LIBRARY OF REVIVAL',
    date: 'Dec, 2020',
    tags: ['ARCHITECTURE'],
    image: '/projects/Tactile_Library_of_Revival/Assets/Images/tlor_COVER.png',
    alt: 'Tactile Library of Revival — cover image',
    description: "A library that uses textile and needlework as its foothold, sharing traditional knowledge on weaving, embroidering, sewing, and more skills that seem less and less prominent as handmade. Within the building, draped structures that behave as both sculptural and functional. Made of perforated metal sheets, they fold like natural textiles would, casting moments of light whilst holding up the three-floor library.",
    page: '/projects/tactile-library',
  },
  'black-dog': {
    title: 'THE BLACK DOG',
    date: 'Apr, 2023',
    tags: ['ILLUSTRATIONS'],
    image: '/projects/The_Black_Dog/Assets/Images/tbd_COVER.png',
    alt: 'The Black Dog — cover image',
    description: "Concept design and Twine game, a retelling of the English folktale - The Black Dog. The player chooses the Black Dog's actions, and through the process learns more about it. It either succumbs to madness as a harbinger of death, settles down and learns of humanity, or neutralizes into nothingness.",
    page: '/projects/black-dog',
  },
};

// Maps a display tag label (uppercase, used inside .tags on a project)
// to the lowercase category key used by the filter UI.
const TAG_TO_CATEGORY = {
  'FABRICATION':    'fabrication',
  'P.COMP':         'physical-computation',
  'ARCHITECTURE':   'architecture',
  'ILLUSTRATIONS':  'illustrations',
  'PRINTS':         'prints',
};

// Curated ordered list per category — always 3 projects.
// Slot 0 = featured (top); slots 1–2 = bottom row.
const CATEGORIES = {
  'default':              ['tidal-rites', 'keep-refrigerated', 'cradle-to-farm'],
  'fabrication':          ['keep-refrigerated', 'tidal-rites', 'social-battery-pack'],
  'physical-computation': ['tidal-rites', 'keep-refrigerated', 'social-battery-pack'],
  'prints':               ['american-persimmon', 'botanical-series', 'cradle-to-farm'],
  'illustrations':        ['apiary', 'black-dog', 'botanical-series'],
  'architecture':         ['yellow-mud', 'the-reptile', 'tactile-library'],
};

let activeCategory = 'default';

function renderFeatured(slug) {
  const p = PROJECTS[slug];
  document.getElementById('featured-title').textContent = p.title;
  document.getElementById('featured-date').textContent = p.date;
  document.getElementById('featured-caption').textContent = p.description;
  const img = document.getElementById('featured-image');
  img.src = p.image;
  img.alt = p.alt;
  img.style.objectPosition = p.objectPosition || '';
  document.getElementById('featured-link').href = p.page;
  document.getElementById('featured-image-link').href = p.page;

  const tagRow = document.getElementById('featured-tags');
  tagRow.innerHTML = '';
  for (const tag of p.tags) {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = tag;
    tagRow.appendChild(span);
  }
}

function renderSecondary(slugs) {
  const row = document.getElementById('secondary-row');
  row.innerHTML = '';

  for (const slug of slugs) {
    const p = PROJECTS[slug];
    const card = document.createElement('article');
    card.className = 'card';
    const tagSpans = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
    const posStyle = p.objectPosition ? ` style="object-position: ${p.objectPosition}"` : '';
    card.innerHTML = `
      <div class="card-head">
        <a href="${p.page}"><h2 class="title">${p.title}</h2></a>
        <div class="tag-row">${tagSpans}</div>
        <span class="date">${p.date}</span>
      </div>
      <a href="${p.page}">
        <img class="card-image" src="${p.image}" alt="${p.alt}"${posStyle} />
      </a>
    `;
    row.appendChild(card);
  }
}

function applyCategory(catKey) {
  const slugs = CATEGORIES[catKey];
  if (!slugs) return;
  activeCategory = catKey;
  renderFeatured(slugs[0]);
  renderSecondary(slugs.slice(1));

  for (const btn of document.querySelectorAll('.cat-btn')) {
    btn.classList.toggle('is-active', btn.dataset.category === catKey);
  }
}

function resetToDefault() {
  applyCategory('default');
}

// --- Archive page ---

// "Apr, 2026" → 202604 (sortable integer)
function dateSortKey(str) {
  const months = { Jan:1, Feb:2, Mar:3, Apr:4, May:5, Jun:6, Jul:7, Aug:8, Sep:9, Oct:10, Nov:11, Dec:12 };
  const [mon, year] = str.replace(',', '').split(/\s+/);
  return parseInt(year, 10) * 100 + (months[mon] || 0);
}

let activeArchiveCategory = null;

function renderArchive() {
  const list = document.getElementById('archive-list');
  if (!list) return;

  const slugs = Object.keys(PROJECTS).sort(
    (a, b) => dateSortKey(PROJECTS[b].date) - dateSortKey(PROJECTS[a].date)
  );

  list.innerHTML = '';
  for (const slug of slugs) {
    const p = PROJECTS[slug];
    const cats = p.tags.map(t => TAG_TO_CATEGORY[t]).filter(Boolean).join(' ');
    const row = document.createElement('a');
    row.className = 'archive-item';
    row.href = p.page;
    row.dataset.cats = cats;
    row.innerHTML = `<span class="archive-title">${p.title}</span><span class="archive-date">${p.date}</span>`;
    list.appendChild(row);
  }
}

function applyArchiveFilter(catKey) {
  activeArchiveCategory = catKey;
  for (const item of document.querySelectorAll('.archive-item')) {
    const cats = (item.dataset.cats || '').split(' ');
    item.classList.toggle('dim', catKey !== null && !cats.includes(catKey));
  }
  for (const btn of document.querySelectorAll('.cat-btn')) {
    btn.classList.toggle('is-active', btn.dataset.category === catKey);
  }
}

// Highlight the current page in the masthead nav (runs on every page).
// Compares the last non-empty segment of pathname vs href, so it
// works for /about, /about/, and /about/index.html alike.
function markActiveNav() {
  const lastSeg = (s) => {
    const parts = (s || '').replace(/\.html$/, '').split('/').filter(Boolean);
    return (parts.pop() || '').toLowerCase();
  };
  const here = lastSeg(window.location.pathname);
  for (const a of document.querySelectorAll('.masthead a.nav')) {
    if (lastSeg(a.getAttribute('href')) === here) a.classList.add('is-active');
  }
}

// On project detail pages, populate the PREV / NEXT links in the
// project-next footer based on chronological order (newest → oldest,
// matching the archive). NEXT shows the project title preview;
// PREV stays a plain "← PREV" with no title. Both wrap around at
// the ends so navigation loops.
function wireProjectNav() {
  const prevLink = document.getElementById('prev-project-link');
  const nextLink = document.getElementById('next-project-link');
  if (!nextLink && !prevLink) return;
  if (typeof PROJECTS === 'undefined') return;

  const segs = window.location.pathname.split('/').filter(Boolean);
  const currentSlug = (segs[segs.length - 1] || '').toLowerCase();
  if (!PROJECTS[currentSlug]) return;

  const slugs = Object.keys(PROJECTS).sort(
    (a, b) => dateSortKey(PROJECTS[b].date) - dateSortKey(PROJECTS[a].date)
  );
  const idx = slugs.indexOf(currentSlug);
  if (idx === -1) return;

  const n = slugs.length;
  if (nextLink) {
    const next = PROJECTS[slugs[(idx + 1) % n]];
    nextLink.href = next.page;
    nextLink.textContent = `NEXT: ${next.title} →`;
  }
  if (prevLink) {
    const prev = PROJECTS[slugs[(idx - 1 + n) % n]];
    prevLink.href = prev.page;
    prevLink.textContent = '← PREV';
  }
}

// Track scroll position so the in-header back-to-top can hide
// until the user has actually moved down the page.
function wireScrollState() {
  let ticking = false;
  const update = () => {
    document.body.classList.toggle('is-scrolled', window.scrollY > 120);
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
  update();
}

// Wire up any .back-to-top buttons (smooth scroll to top)
function wireBackToTop() {
  for (const btn of document.querySelectorAll('.back-to-top')) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Lightweight toast notification (single instance, reused).
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  requestAnimationFrame(() => t.classList.add('is-visible'));
  clearTimeout(t._hideTimer);
  t._hideTimer = setTimeout(() => t.classList.remove('is-visible'), 1800);
}

// Resume PDF pager — page-by-page navigation on /resume.
function wireResumePager() {
  const wrap = document.querySelector('.resume-preview-wrap');
  if (!wrap) return;
  const pages = parseInt(wrap.dataset.pages, 10) || 1;
  const prefix = wrap.dataset.srcPrefix || '';
  const img = wrap.querySelector('#resume-page-img');
  const status = wrap.querySelector('.resume-pager-status');
  const buttons = wrap.querySelectorAll('.resume-pager-btn');
  let current = 1;

  function update(page) {
    current = Math.max(1, Math.min(pages, page));
    img.src = `${prefix}${current}.png`;
    img.alt = `Page ${current} of the Artist Resume PDF`;
    if (status) status.textContent = `${current} / ${pages}`;
    for (const btn of buttons) {
      const dir = parseInt(btn.dataset.dir, 10);
      btn.disabled = (dir === -1 && current === 1) || (dir === 1 && current === pages);
    }
  }

  for (const btn of buttons) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      update(current + parseInt(btn.dataset.dir, 10));
    });
  }

  // Arrow-key navigation while focused on the resume page
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowLeft') update(current - 1);
    else if (e.key === 'ArrowRight') update(current + 1);
  });

  update(1);
}

// Theme toggle: flips data-theme on <html>, persists choice in
// localStorage, updates the icon (☾ for "switch to dark", ✷ for
// "switch back to light").
function wireThemeToggle() {
  const btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  const icon = btn.querySelector('.theme-toggle-icon');

  const render = () => {
    const t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    if (icon) icon.textContent = t === 'dark' ? '✷' : '⏾';
    btn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  };

  btn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch {}
    render();
  });

  render();
}

// Click handler for [data-copy] elements: copies the attribute value
// to clipboard and flashes a toast (text from data-toast or default).
function wireCopyToClipboard() {
  for (const el of document.querySelectorAll('[data-copy]')) {
    el.addEventListener('click', async (e) => {
      e.preventDefault();
      const text = el.dataset.copy;
      const toastMsg = el.dataset.toast || 'Copied';
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        // Older-browser fallback
        const tmp = document.createElement('textarea');
        tmp.value = text;
        tmp.style.position = 'fixed';
        tmp.style.opacity = '0';
        document.body.appendChild(tmp);
        tmp.select();
        try { document.execCommand('copy'); } catch {}
        tmp.remove();
      }
      showToast(toastMsg);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  markActiveNav();
  wireBackToTop();
  wireCopyToClipboard();
  wireThemeToggle();
  wireProjectNav();
  wireScrollState();
  wireResumePager();

  // Homepage path
  if (document.getElementById('featured-image')) {
    applyCategory('default');

    for (const btn of document.querySelectorAll('.cat-btn')) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = btn.dataset.category;
        if (cat === activeCategory) {
          resetToDefault();
        } else {
          applyCategory(cat);
        }
      });
    }

    const brand = document.getElementById('brand-reset');
    if (brand) brand.addEventListener('click', (e) => { e.preventDefault(); resetToDefault(); });
    return;
  }

  // Archive page path
  if (document.getElementById('archive-list')) {
    renderArchive();
    for (const btn of document.querySelectorAll('.cat-btn')) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = btn.dataset.category;
        if (cat === activeArchiveCategory) {
          applyArchiveFilter(null);
        } else {
          applyArchiveFilter(cat);
        }
      });
    }
  }
});
