// Project data — keyed by slug, all metadata needed to render any card slot.
const PROJECTS = {
  'tidal-rites': {
    title: 'TIDAL RITES',
    date: 'Jan, 2026',
    tags: ['FABRICATION', 'P.COMP'],
    image: 'projects/Tidal_Rites/Assets/Images/tr_cover.png',
    alt: 'Tidal Rites — illuminated tidal vessel',
    description: "A location-specific artifact entwined with the tide station at The Battery's pier. Enclosed within is a small computer that queries NOAA's tidal API, translating the harbor's rise and fall into light. This vessel represents low tide as a dim blob at the bottom and high tide by swelling to its brim. It holds no water, but reflects the harbor's rhythm. Think of it as a living, landlocked echo, bound to the shore even through distance.",
    page: 'projects/tidal-rites.html',
  },
  'keep-refrigerated': {
    title: 'KEEP REFRIGERATED.',
    date: 'Apr, 2026',
    tags: ['FABRICATION', 'P.COMP', 'PRINTS'],
    image: 'projects/Keep_Refrigerated/Assets/Images/kr_COVER1.jpg',
    alt: 'Keep Refrigerated — milk carton studies',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    page: 'projects/keep-refrigerated.html',
  },
  'cradle-to-farm': {
    title: 'CRADLE TO FARM',
    date: 'Dec, 2025',
    tags: ['PRINTS', 'ILLUSTRATIONS'],
    image: 'projects/Cradle_To_Farm/Assets/Images/ctf_topopen.jpg',
    alt: 'Cradle to Farm — packaged composition',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    page: 'projects/cradle-to-farm.html',
  },
  'the-reptile': {
    title: 'THE REPTILE',
    date: 'Dec, 2021',
    tags: ['ARCHITECTURE'],
    image: 'projects/The_Reptile/Assets/Images/reptile_COVER.png',
    alt: 'The Reptile — cover image',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    page: 'projects/the-reptile.html',
  },
  'yellow-mud': {
    title: 'YELLOW MUD CERAMICS FACTORY',
    date: 'May, 2023',
    tags: ['ARCHITECTURE'],
    image: 'projects/Yellow_Mud_Ceramics_Factory/Assets/Images/ymcf_COVER.png',
    alt: 'Yellow Mud Ceramics Factory — cover image',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    page: 'projects/yellow-mud.html',
  },
  'apiary': {
    title: 'APIARY',
    date: 'Nov, 2021',
    tags: ['ILLUSTRATIONS'],
    image: 'projects/Apiary/Assets/Images/apiary_COVER.png',
    alt: 'Apiary — cover image',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    page: 'projects/apiary.html',
  },
  'botanical-series': {
    title: 'BOTANICAL SERIES',
    date: 'Feb, 2022',
    tags: ['ILLUSTRATIONS'],
    image: 'projects/Botanical_Illustration_Series/Assets/Images/bis_COVER.png',
    alt: 'Botanical Illustration Series — cover image',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    page: 'projects/botanical-series.html',
  },
  'social-battery-pack': {
    title: 'SOCIAL BATTERY PACK',
    date: 'May, 2025',
    tags: ['P.COMP'],
    image: 'projects/Social_Battery_Pack/Assets/Images/sbp_COVER.png',
    alt: 'Social Battery Pack — cover image',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    page: 'projects/social-battery-pack.html',
  },
  'american-persimmon': {
    title: 'AMERICAN PERSIMMON PACKAGE',
    date: 'Jul, 2020',
    tags: ['ILLUSTRATIONS', 'PRINTS'],
    image: 'projects/American_Persimmon_Package/Assets/Images/app_COVER.png',
    alt: 'American Persimmon Package — cover image',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    page: 'projects/american-persimmon.html',
  },
  'tactile-library': {
    title: 'TACTILE LIBRARY',
    date: 'Dec, 2020',
    tags: ['ARCHITECTURE'],
    image: 'projects/Tactile_Library_of_Revival/Assets/Images/tlor_COVER.png',
    alt: 'Tactile Library of Revival — cover image',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    page: 'projects/tactile-library.html',
  },
  'black-dog': {
    title: 'THE BLACK DOG',
    date: 'Apr, 2023',
    tags: ['ILLUSTRATIONS'],
    image: 'projects/The_Black_Dog/Assets/Images/tbd_COVER1.png',
    alt: 'The Black Dog — cover image',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    page: 'projects/black-dog.html',
  },
};

// Curated ordered list per category — always 3 projects.
// Slot 0 = featured (top); slots 1–2 = bottom row.
const CATEGORIES = {
  'default':              ['tidal-rites', 'keep-refrigerated', 'cradle-to-farm'],
  'fabrication':          ['keep-refrigerated', 'tidal-rites', 'social-battery-pack'],
  'physical-computation': ['tidal-rites', 'keep-refrigerated', 'social-battery-pack'],
  'prints':               ['botanical-series', 'american-persimmon', 'cradle-to-farm'],
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
    card.innerHTML = `
      <div class="card-head">
        <a href="${p.page}"><h2 class="title">${p.title}</h2></a>
        <div class="tag-row">${tagSpans}</div>
        <span class="date">${p.date}</span>
      </div>
      <a href="${p.page}">
        <img class="card-image" src="${p.image}" alt="${p.alt}" />
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

document.addEventListener('DOMContentLoaded', () => {
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

  document.getElementById('brand-reset').addEventListener('click', (e) => {
    e.preventDefault();
    resetToDefault();
  });
});
