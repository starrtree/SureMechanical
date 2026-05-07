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
    document.querySelectorAll('.project-card').forEach((card) => {
      const industryOk = selected.industry === 'All' || card.dataset.industry === selected.industry;
      const companyOk = selected.company === 'All' || card.dataset.company === selected.company;
      const serviceOk = selected.service === 'All' || card.dataset.tags.includes(selected.service);
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
    if (valid) {
      form.insertAdjacentHTML('beforeend', '<p class="form-success" role="status">Thanks. This preview form is ready to connect to your form handler.</p>');
    }
  });
});
