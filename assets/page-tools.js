const selected = { industry: 'All', service: 'All', company: 'All' };

document.querySelectorAll('.filter-chip').forEach((button) => {
  button.addEventListener('click', () => {
    const type = button.dataset.filterType;
    selected[type] = button.dataset.filterValue;
    button.parentElement.querySelectorAll('.filter-chip').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    document.querySelectorAll('[data-project-index], .project-card').forEach((card) => {
      const industryMatch = selected.industry === 'All' || card.dataset.industry === selected.industry;
      const companyMatch = selected.company === 'All' || card.dataset.company === selected.company;
      const serviceMatch = selected.service === 'All' || (card.dataset.tags || '').includes(selected.service);
      card.hidden = !(industryMatch && companyMatch && serviceMatch);
    });
  });
});

document.querySelectorAll('.contact-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;

    form.querySelectorAll('[required]').forEach((field) => {
      const invalid = !field.value.trim();
      field.closest('.field')?.classList.toggle('field--error', invalid);
      field.setAttribute('aria-invalid', String(invalid));
      valid = valid && !invalid;
    });

    if (!valid || form.querySelector('.form-success')) return;
    const success = document.createElement('p');
    success.className = 'form-success';
    success.setAttribute('role', 'status');
    success.textContent = 'Thanks. This preview form is ready to connect to your form handler.';
    form.appendChild(success);
  });
});
