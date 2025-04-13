function initNavbarToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
  
    if (menuToggle && navbarMenu) {
      menuToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
      });
    }
}