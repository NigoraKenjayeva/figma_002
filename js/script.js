const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
menu.classList.toggle('menu-hidden');
});
