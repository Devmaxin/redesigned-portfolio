const menuIcon = document.getElementById('menu-icon');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

// Open menu
menuIcon.addEventListener('click', () => {
  sideMenu.classList.add('active');
  overlay.classList.add('active');
});

// Close menu
function closeMenu() {
  sideMenu.classList.remove('active');
  overlay.classList.remove('active');
}

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Optional: close when clicking outside menu (extra safety)
document.addEventListener('click', (e) => {
  if (
    sideMenu.classList.contains('active') &&
    !sideMenu.contains(e.target) &&
    !menuIcon.contains(e.target)
  ) {
    closeMenu();
  }
});