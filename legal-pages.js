const header = document.querySelector('.header');
const menu = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');

if (header && menu && toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }));

  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 25), { passive: true });
}
