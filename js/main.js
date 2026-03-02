function toggleMenu() {
  const menu = document.querySelector('.dropdown-menu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

let lastScroll = 0;
const navBar = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 80) {
    navBar.classList.add('hide');
  } else {
    navBar.classList.remove('hide');
  }

  lastScroll = currentScroll;
});
