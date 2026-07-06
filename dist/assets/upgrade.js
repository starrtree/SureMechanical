const layers = [
  'upgrade-core.css',
  'upgrade-sections.css',
  'upgrade-portfolio.css',
  'upgrade-pages.css',
];

for (const file of layers) {
  if (document.querySelector(`link[href$="${file}"]`)) continue;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = new URL(file, import.meta.url).href;
  document.head.appendChild(link);
}

const mediaStyles = document.createElement('style');
mediaStyles.textContent = `
  .brand-logo{display:inline-flex;align-items:center;max-width:210px}
  .brand-logo__image{display:block;width:auto;max-width:210px;max-height:54px;object-fit:contain}
  .site-footer .brand-logo__image{max-width:190px;filter:drop-shadow(0 12px 28px rgba(0,0,0,.28))}
  .brand--image-ready .brand-mark[hidden]{display:none}
  @media (max-width:760px){.brand-logo{max-width:170px}.brand-logo__image{max-width:170px;max-height:46px}}
`;
document.head.appendChild(mediaStyles);

const assetPrefix = new URL('.', import.meta.url).pathname.replace(/assets\/$/, '');
const normalizeAsset = (path) => {
  if (path.startsWith('/')) return `${assetPrefix}${path.slice(1)}`;
  return new URL(path, import.meta.url).href;
};

const testImage = (src) => new Promise((resolve) => {
  const probe = new Image();
  probe.onload = () => resolve(src);
  probe.onerror = () => resolve(null);
  probe.src = src;
});

const logoCandidates = [
  '/brand/sure-mechanical-logo.svg',
  '/brand/sure-mechanical-logo.png',
  '/brand/SURE-Mechanical-Logo.svg',
  '/brand/SURE-Mechanical-Logo.png',
  '/brand/sure-logo.svg',
  '/brand/sure-logo.png',
  '/images/brand/sure-mechanical-logo.svg',
  '/images/brand/sure-mechanical-logo.png',
  '/images/logo.png',
  '/images/logo.svg',
].map(normalizeAsset);

const applyBrandLogo = async () => {
  const loaded = await Promise.any(
    logoCandidates.map((candidate) => testImage(candidate).then((src) => {
      if (!src) throw new Error('logo not found');
      return src;
    }))
  ).catch(() => null);

  if (!loaded) return;

  document.querySelectorAll('.brand').forEach((brand) => {
    if (brand.querySelector('.brand-logo__image')) return;
    brand.classList.add('brand--image-ready');

    const mark = brand.querySelector('.brand-mark');
    if (mark) mark.hidden = true;

    const logoWrap = document.createElement('span');
    logoWrap.className = 'brand-logo';

    const img = document.createElement('img');
    img.className = 'brand-logo__image';
    img.src = loaded;
    img.alt = brand.classList.contains('brand--footer') ? 'SURE Group' : 'SURE Mechanical';
    img.loading = 'eager';
    img.decoding = 'async';
    img.addEventListener('error', () => {
      logoWrap.remove();
      if (mark) mark.hidden = false;
      brand.classList.remove('brand--image-ready');
    });

    logoWrap.appendChild(img);
    brand.prepend(logoWrap);
  });
};

applyBrandLogo();

const mobileToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');
const closeNavigation = () => {
  mobileToggle?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('nav-open');
};

primaryNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNavigation));
window.addEventListener('resize', () => {
  if (window.innerWidth > 1100) closeNavigation();
});

const temporaryProjectImagePool = [
  // TEMP: Project images are placeholder visuals from the uploaded projects folder.
  // Replace these with verified project-specific folders once final image matching is complete.
  '/projects/photos/Gemini_Generated_Image_.png',
  '/projects/photos/Gemini_Generated_Image_%20%282%29.png',
  '/projects/photos/Gemini_Generated_Image_%20%283%29.png',
  '/projects/photos/Gemini_Generated_Image_%20%284%29.png',
  '/projects/photos/Gemini_Generated_Image_%20%285%29.png',
].map(normalizeAsset);

const fallbackForIndex = (index) => temporaryProjectImagePool[index % temporaryProjectImagePool.length];

window.addEventListener('error', (event) => {
  const img = event.target;
  if (!(img instanceof HTMLImageElement)) return;
  if (!img.matches('.portfolio-card__image, .company-card__img, .workforce__img, .hero-media__image, .project-gallery__image')) return;
  if (img.dataset.fallbackAttempted === 'true') return;

  event.stopImmediatePropagation();
  img.dataset.fallbackAttempted = 'true';
  const index = [...document.querySelectorAll('img')].indexOf(img);
  img.src = fallbackForIndex(Math.max(index, 0));
}, true);

const featuredRail = document.querySelector('main > .portfolio-section .section-heading-row + .project-grid');
if (featuredRail) {
  const cards = [...featuredRail.querySelectorAll('.portfolio-card')];

  if (!featuredRail.nextElementSibling?.classList.contains('project-rail-controls')) {
    const controls = document.createElement('div');
    controls.className = 'project-rail-controls';

    const previous = document.createElement('button');
    previous.type = 'button';
    previous.setAttribute('aria-label', 'Scroll featured projects left');
    previous.textContent = '←';

    const progress = document.createElement('span');
    progress.className = 'project-rail-progress';
    progress.setAttribute('aria-live', 'polite');

    const next = document.createElement('button');
    next.type = 'button';
    next.setAttribute('aria-label', 'Scroll featured projects right');
    next.textContent = '→';

    controls.append(previous, progress, next);
    featuredRail.insertAdjacentElement('afterend', controls);

    const step = () => (cards[0]?.getBoundingClientRect().width || 340) + 20;
    previous.addEventListener('click', () => featuredRail.scrollBy({ left: -step(), behavior: 'smooth' }));
    next.addEventListener('click', () => featuredRail.scrollBy({ left: step(), behavior: 'smooth' }));

    const updateProgress = () => {
      if (!cards.length) return;
      const railLeft = featuredRail.getBoundingClientRect().left;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;
      cards.forEach((card, index) => {
        const distance = Math.abs(card.getBoundingClientRect().left - railLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      progress.textContent = `${String(closestIndex + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
    };

    featuredRail.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  if (!document.getElementById('project-modal')) {
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        window.location.assign('projects/');
      });
    });
  }
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const items = document.querySelectorAll(
    '.section-heading, .stat-card, .company-card, .portfolio-card, .value-card, .mini-card, .industry-detail, .company-section, .accordion, .workforce > div'
  );
  items.forEach((item) => item.classList.add('reveal-ready'));
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  items.forEach((item) => observe.observe(item));
}
