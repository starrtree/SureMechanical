const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    document.body.classList.toggle('nav-open', !open);
  });
}

const selected = { industry: 'All', service: 'All', company: 'All' };
document.querySelectorAll('.filter-chip').forEach((button) => {
  button.addEventListener('click', () => {
    const type = button.dataset.filterType;
    selected[type] = button.dataset.filterValue;
    button.parentElement.querySelectorAll('.filter-chip').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    document.querySelectorAll('[data-project-index], .project-card').forEach((card) => {
      const industryOk = selected.industry === 'All' || card.dataset.industry === selected.industry;
      const companyOk = selected.company === 'All' || card.dataset.company === selected.company;
      const serviceOk = selected.service === 'All' || (card.dataset.tags || '').includes(selected.service);
      card.hidden = !(industryOk && companyOk && serviceOk);
    });
  });
});

document.querySelectorAll('.contact-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach((field) => {
      const bad = !field.value.trim();
      field.closest('.field')?.classList.toggle('field--error', bad);
      valid = valid && !bad;
    });
    if (valid && !form.querySelector('.form-success')) {
      form.insertAdjacentHTML('beforeend', '<p class="form-success" role="status">Thanks. This preview form is ready to connect to your form handler.</p>');
    }
  });
});

const projectDataEl = document.getElementById('project-data');
const modal = document.getElementById('project-modal');
let projects = [];
let activeProject = 0;
let activeSlide = 0;
let lastFocus = null;
if (projectDataEl && modal) {
  projects = JSON.parse(projectDataEl.textContent);
  const viewport = modal.querySelector('[data-gallery-viewport]');
  const dots = modal.querySelector('[data-gallery-dots]');
  const title = modal.querySelector('[data-modal-title]');
  const category = modal.querySelector('[data-modal-category]');
  const description = modal.querySelector('[data-modal-description]');
  const company = modal.querySelector('[data-modal-company]');
  const tags = modal.querySelector('[data-modal-tags]');

  const imageHtml = (image) => `<figure class="project-gallery__slide"><img class="project-gallery__image" src="${image.src}" alt="${image.alt}" loading="lazy" onerror="this.dataset.failed='true';this.setAttribute('aria-hidden','true')"><figcaption>${image.caption}</figcaption></figure>`;

  const setSlide = (index) => {
    const slides = viewport.querySelectorAll('.project-gallery__slide');
    if (!slides.length) return;
    activeSlide = (index + slides.length) % slides.length;
    slides[activeSlide].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    dots.querySelectorAll('button').forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === activeSlide));
  };

  const openProject = (index) => {
    activeProject = (index + projects.length) % projects.length;
    activeSlide = 0;
    const project = projects[activeProject];
    title.textContent = project.title;
    category.textContent = `${project.icon} ${project.category}`;
    description.textContent = project.description;
    company.textContent = project.company;
    tags.innerHTML = project.tags.map((tag) => `<span class="chip">${tag}</span>`).join('');
    viewport.innerHTML = project.gallery.map(imageHtml).join('');
    dots.innerHTML = project.gallery.map((_, dotIndex) => `<button type="button" aria-label="Go to image ${dotIndex + 1}"></button>`).join('');
    dots.querySelectorAll('button').forEach((dot, dotIndex) => dot.addEventListener('click', () => setSlide(dotIndex)));
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.project-modal__close').focus();
    requestAnimationFrame(() => setSlide(0));
  };

  const closeProject = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lastFocus?.focus();
  };

  document.querySelectorAll('[data-project-index]').forEach((card) => {
    card.addEventListener('click', () => {
      lastFocus = card;
      openProject(Number(card.dataset.projectIndex));
    });
  });
  modal.querySelectorAll('[data-modal-close]').forEach((button) => button.addEventListener('click', closeProject));
  modal.querySelector('[data-gallery-prev]').addEventListener('click', () => setSlide(activeSlide - 1));
  modal.querySelector('[data-gallery-next]').addEventListener('click', () => setSlide(activeSlide + 1));
  modal.querySelector('[data-project-prev]').addEventListener('click', () => openProject(activeProject - 1));
  modal.querySelector('[data-project-next]').addEventListener('click', () => openProject(activeProject + 1));
  document.addEventListener('keydown', (event) => {
    if (!modal.classList.contains('is-open')) return;
    if (event.key === 'Escape') closeProject();
    if (event.key === 'ArrowLeft') setSlide(activeSlide - 1);
    if (event.key === 'ArrowRight') setSlide(activeSlide + 1);
  });
}
