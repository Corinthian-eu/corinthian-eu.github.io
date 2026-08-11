const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });
}

const form = document.querySelector('#evaluation-form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const lines = [
      `Nombre: ${data.get('name')}`,
      `Correo: ${data.get('email')}`,
      `País: ${data.get('country')}`,
      `Inicio previsto: ${data.get('start')}`,
      `Estudios considerados: ${data.get('study')}`,
      `Etapa: ${data.get('stage')}`,
      '',
      'Contexto:',
      data.get('context') || 'No indicado'
    ];
    const subject = encodeURIComponent(`Evaluación inicial — ${data.get('name')}`);
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:admin@corinthian-eu.com?subject=${subject}&body=${body}`;
  });
}
