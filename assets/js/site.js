const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });
}

const contactOptions = document.querySelectorAll('input[name="Contacto preferido"]');
const availability = document.querySelector('#availability');

function updateAvailability() {
  if (!availability) return;
  const selected = document.querySelector('input[name="Contacto preferido"]:checked');
  availability.hidden = selected?.value !== 'Llamada';
}

contactOptions.forEach((option) => option.addEventListener('change', updateAvailability));
updateAvailability();
