const btn = document.getElementById('hamburgerBtn');
const menu = document.getElementById('mobileMenu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  menu.classList.toggle('open');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
});

function closeMenu() {
  btn.classList.remove('open');
  menu.classList.remove('open');
  document.body.style.overflow = '';
}