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

const zohoLeadForm = document.querySelector('#zoho-lead-form');
const leadSuccess = document.querySelector('#lead-success');
const formLoading = document.querySelector('#form-loading');

if (zohoLeadForm && leadSuccess) {
  let hasLoadedOnce = false;

  zohoLeadForm.addEventListener('load', () => {
    if (!hasLoadedOnce) {
      hasLoadedOnce = true;
      if (formLoading) formLoading.textContent = 'Formulario cargado. Si no lo ves, ábrelo en una pestaña nueva.';
      return;
    }
    zohoLeadForm.hidden = true;
    leadSuccess.hidden = false;
    leadSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

const calendarConfig = window.CORINTHIAN_CALENDAR || {};
const calendarLinks = document.querySelectorAll('[data-calendar-link]');
const calendarNotes = document.querySelectorAll('[data-calendar-note]');
const hasLiveCalendar = /^https:\/\/calendar\.google\.com\//.test(calendarConfig.bookingUrl || '');

calendarLinks.forEach((link) => {
  if (hasLiveCalendar) {
    link.href = calendarConfig.bookingUrl;
    link.target = '_blank';
    link.rel = 'noopener';
    link.dataset.calendarStatus = 'live';
    return;
  }

  const email = calendarConfig.fallbackEmail || 'hola@corinthian-eu.com';
  link.href = `mailto:${email}?subject=${encodeURIComponent('Solicitud de llamada con Corinthian')}`;
  link.removeAttribute('target');
  link.removeAttribute('rel');
  link.dataset.calendarStatus = 'fallback';
  if (link.dataset.fallbackLabel) link.textContent = link.dataset.fallbackLabel;
});

calendarNotes.forEach((note) => {
  note.textContent = hasLiveCalendar
    ? 'La agenda muestra las horas en tu zona. La confirmación incluirá el enlace de Google Meet.'
    : 'Escríbenos y te propondremos horarios en tu zona. La llamada será por Google Meet.';
});
