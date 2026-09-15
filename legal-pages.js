const header = document.querySelector('.header');
const menu = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');

function setupBackToTop() {
  const backTop = document.querySelector('.back-top');
  if (!backTop) return;
  const updateBackTop = () => backTop.classList.toggle('visible', window.scrollY > 280);
  updateBackTop();
  window.addEventListener('scroll', updateBackTop, { passive: true });
  backTop.addEventListener('click', event => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
}

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

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setupBackToTop);
else setupBackToTop();
