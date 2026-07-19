document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

navToggle.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = 'Thank you! This form is not yet connected to a mail service — please email us directly for now.';
  form.reset();
});
