document.addEventListener("DOMContentLoaded", () => {
  const openMenu = document.getElementById("open-menu");
  const closeMenu = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-nav");

  openMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("close-nav");
    mobileMenu.classList.add("open-nav");
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("open-nav");
    mobileMenu.classList.add("close-nav");
  });

  const mobileLinks = document.querySelectorAll("[role=menuitem]");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open-nav");
      mobileMenu.classList.add("close-nav");
    });
  });
});

window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});
