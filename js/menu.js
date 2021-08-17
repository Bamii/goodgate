(function() {  
  const menuWrapper = document.getElementById("menu-wrapper");
  const mobileMenu = document.getElementById("mobile-menu-button")
  const mobileMenuClose = document.getElementById('mobile-menu-close')

  /* menu SHIT! */
  mobileMenu.onclick = function(e) {
    toggleMenuModal(e);
  }

  mobileMenuClose.onclick = function() {
    toggleMenuModal();
  }

  function toggleMenuModal() {
    menuWrapper.classList.toggle("visible");
  }
})()